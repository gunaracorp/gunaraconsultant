"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Star,
  FileCheck,
  ChevronLeft,
  ChevronRight,
  SearchX,
  RotateCcw,
  AlertTriangle,
  Target,
  ListTree,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeading, Reveal } from "@/components/ui-custom/animated";
import { DynamicIcon } from "@/components/ui-custom/icon";
import type { ServiceItem, CategoryMeta, PhaseId } from "@/data/services";

/* ===== Kontrak respons API /api/services ===== */
interface ApiCategory extends CategoryMeta {
  count: number;
}
interface ApiPhase {
  id: PhaseId;
  name: string;
  window: string;
  status: string;
  count: number;
}
interface ApiServicesResponse {
  ok: boolean;
  target: number;
  items: ServiceItem[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
  categories: ApiCategory[];
  phases: ApiPhase[];
}

const PER_PAGE = 12;

/** Warna chip fase: F1 emerald, F2 gold, F3 amber, F4 netral */
const PHASE_CHIP: Record<PhaseId, { label: string; cls: string }> = {
  1: {
    label: "F1",
    cls: "border-emerald-600/30 bg-emerald-600/10 text-emerald-700 dark:text-emerald-400",
  },
  2: {
    label: "F2",
    cls: "border-gold/40 bg-gold/10 text-gold-foreground dark:text-gold",
  },
  3: {
    label: "F3",
    cls: "border-amber-500/35 bg-amber-500/10 text-amber-700 dark:text-amber-400",
  },
  4: {
    label: "F4",
    cls: "border-border bg-muted text-muted-foreground",
  },
};

function ServiceCardSkeleton() {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6">
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-5 w-16 rounded-full" />
      </div>
      <Skeleton className="mt-4 h-5 w-4/5" />
      <Skeleton className="mt-2 h-4 w-full" />
      <Skeleton className="mt-1.5 h-4 w-3/5" />
      <div className="mt-auto pt-5">
        <Skeleton className="h-3.5 w-full" />
        <div className="mt-4 flex items-center justify-between">
          <Skeleton className="h-6 w-12 rounded-full" />
          <Skeleton className="h-9 w-28 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function ServicesExplorer() {
  /* ===== State filter ===== */
  const [qInput, setQInput] = useState("");
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("semua");
  const [phase, setPhase] = useState("semua");
  const [popular, setPopular] = useState(false);
  const [page, setPage] = useState(1);

  /* ===== State data ===== */
  const [data, setData] = useState<ApiServicesResponse | null>(null);
  const [syncedKey, setSyncedKey] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [retryTick, setRetryTick] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  /* Kunci permintaan — loading diturunkan (derived), tanpa setState di effect body */
  const requestKey = useMemo(
    () => JSON.stringify({ q, category, phase, popular, page, retryTick }),
    [q, category, phase, popular, page, retryTick]
  );
  const loading = syncedKey !== requestKey;
  const showError = error !== null && syncedKey === requestKey;

  /* Debounce pencarian 300ms */
  useEffect(() => {
    const t = setTimeout(() => {
      setQ(qInput.trim());
      setPage(1);
    }, 300);
    return () => clearTimeout(t);
  }, [qInput]);

  /* Prefill pencarian dari URL ?q= — mendukung Sitelinks Search Box Google */
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const initial = new URLSearchParams(window.location.search).get("q");
      if (initial && initial.trim().length > 0) {
        setQInput(initial.trim());
        setQ(initial.trim());
      }
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  /* Fetch data katalog (relative path, AbortController) */
  useEffect(() => {
    const controller = new AbortController();
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (category !== "semua") params.set("category", category);
    if (phase !== "semua") params.set("phase", phase);
    if (popular) params.set("popular", "true");
    params.set("page", String(page));
    params.set("perPage", String(PER_PAGE));

    fetch(`/api/services?${params.toString()}`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<ApiServicesResponse>;
      })
      .then((json) => {
        if (!json.ok) throw new Error("Respons API tidak valid");
        setData(json);
        setError(null);
        setSyncedKey(requestKey);
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError("Gagal memuat katalog. Periksa koneksi Anda dan coba lagi.");
        setSyncedKey(requestKey);
      });

    return () => controller.abort();
  }, [requestKey, q, category, phase, popular, page, retryTick]);

  const resetFilters = useCallback(() => {
    setQInput("");
    setQ("");
    setCategory("semua");
    setPhase("semua");
    setPopular(false);
    setPage(1);
  }, []);

  const goToPage = useCallback(
    (next: number) => {
      setPage(next);
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    []
  );

  const hasActiveFilter =
    q !== "" || category !== "semua" || phase !== "semua" || popular;

  /* Rentang tampilan "Menampilkan X–Y dari N" */
  const range = useMemo(() => {
    if (!data || data.total === 0) return null;
    const start = (data.page - 1) * data.perPage + 1;
    const end = Math.min(data.page * data.perPage, data.total);
    return { start, end, total: data.total };
  }, [data]);

  return (
    <section
      id="katalog"
      className="relative overflow-hidden bg-secondary/40 py-24 sm:py-28"
      aria-label="Katalog 500 layanan perizinan"
    >
      <div
        className="absolute right-[-8%] top-32 h-96 w-96 rounded-full bg-primary/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Katalog Layanan"
          title="500+ Layanan Perizinan"
          highlight="dalam Satu Pintu"
          description="Telusuri katalog perizinan terlengkap Indonesia — dari pendirian badan usaha, OSS-RBA, sertifikasi halal & BPOM, hingga sektor regulasi kompleks dan sertifikasi ISO. Cari, filter, dan temukan izin yang tepat untuk bisnis Anda dalam hitungan detik."
        />

        {/* ===== Panel kontrol ===== */}
        <Reveal delay={0.1} className="mt-12">
          <div className="rounded-3xl border border-border bg-card p-4 shadow-sm sm:p-5">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              {/* Pencarian */}
              <div className="relative flex-1">
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <Input
                  type="search"
                  value={qInput}
                  onChange={(e) => setQInput(e.target.value)}
                  placeholder="Cari layanan — mis. NIB, halal, BPOM, KITAS…"
                  aria-label="Cari layanan perizinan"
                  className="h-12 rounded-full border-border bg-background pl-11 pr-4 text-sm shadow-none focus-visible:ring-primary/40"
                />
              </div>

              {/* Filter fase */}
              <Select
                value={phase}
                onValueChange={(v) => {
                  setPhase(v);
                  setPage(1);
                }}
              >
                <SelectTrigger
                  aria-label="Filter berdasarkan fase implementasi"
                  className="h-12 w-full rounded-full border-border bg-background px-5 text-sm font-semibold shadow-none focus:ring-primary/40 lg:w-64"
                >
                  <SelectValue placeholder="Semua Fase" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="semua">Semua Fase</SelectItem>
                  {data?.phases.map((p) => (
                    <SelectItem key={p.id} value={String(p.id)}>
                      Fase {p.id} — {p.count} layanan
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Toggle unggulan */}
              <div className="flex h-12 items-center justify-between gap-3 rounded-full border border-border bg-background px-5 lg:w-64 lg:justify-center">
                <label
                  htmlFor="filter-popular"
                  className="cursor-pointer text-sm font-semibold text-foreground/80"
                >
                  Hanya Layanan Unggulan
                </label>
                <Switch
                  id="filter-popular"
                  checked={popular}
                  onCheckedChange={(v) => {
                    setPopular(v);
                    setPage(1);
                  }}
                  aria-label="Hanya tampilkan layanan unggulan"
                  className="data-[state=checked]:bg-primary"
                />
              </div>
            </div>

            {/* Chips kategori — horizontal scroll */}
            <div
              role="group"
              aria-label="Filter kategori layanan"
              className="mt-4 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary/25 [&::-webkit-scrollbar-thumb:hover]:bg-primary/45"
            >
              <button
                type="button"
                onClick={() => {
                  setCategory("semua");
                  setPage(1);
                }}
                aria-pressed={category === "semua"}
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-[13px] font-bold transition-all duration-200 ${
                  category === "semua"
                    ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25"
                    : "border-border bg-background text-foreground/70 hover:border-primary/40 hover:text-primary"
                }`}
              >
                Semua
                {data && (
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-extrabold ${
                      category === "semua"
                        ? "bg-white/20 text-white"
                        : "bg-secondary text-primary"
                    }`}
                  >
                    {data.total}
                  </span>
                )}
              </button>

              {data?.categories.map((cat) => {
                const isActive = category === cat.slug;
                return (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() => {
                      setCategory(cat.slug);
                      setPage(1);
                    }}
                    aria-pressed={isActive}
                    title={cat.name}
                    className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-[13px] font-bold transition-all duration-200 ${
                      isActive
                        ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25"
                        : "border-border bg-background text-foreground/70 hover:border-primary/40 hover:text-primary"
                    }`}
                  >
                    <DynamicIcon
                      name={cat.icon}
                      className={`h-3.5 w-3.5 ${isActive ? "" : "text-primary/70"}`}
                    />
                    {cat.short}
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[10px] font-extrabold ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-secondary text-primary"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
              {!data &&
                loading &&
                Array.from({ length: 8 }).map((_, i) => (
                  <Skeleton
                    key={i}
                    className="h-9 w-32 shrink-0 rounded-full"
                  />
                ))}
            </div>
          </div>
        </Reveal>

        {/* ===== Info hasil (aria-live) ===== */}
        <div
          className="mt-8 flex flex-col items-center justify-between gap-3 sm:flex-row"
          aria-live="polite"
        >
          <p className="text-sm font-semibold text-muted-foreground">
            {loading
              ? "Memuat katalog layanan…"
              : range
                ? `Menampilkan ${range.start}–${range.end} dari ${range.total} layanan`
                : "Tidak ada layanan yang cocok"}
          </p>
          <Badge
            variant="outline"
            className="gap-1.5 rounded-full border-gold/40 bg-gold/10 px-3.5 py-1.5 text-xs font-extrabold text-gold-foreground dark:text-gold"
          >
            <Target className="h-3.5 w-3.5" aria-hidden="true" />
            Target katalog: 500 layanan • 4 fase implementasi
          </Badge>
        </div>

        {/* ===== Grid layanan ===== */}
        <div ref={gridRef} className="scroll-mt-28">
          {showError ? (
            <div className="mt-6 flex flex-col items-center gap-4 rounded-3xl border border-destructive/30 bg-destructive/5 px-6 py-16 text-center">
              <AlertTriangle className="h-10 w-10 text-destructive" aria-hidden="true" />
              <p className="font-bold text-foreground">{error}</p>
              <Button
                onClick={() => setRetryTick((t) => t + 1)}
                className="rounded-full bg-primary font-bold text-primary-foreground hover:bg-primary/90"
              >
                <RotateCcw className="mr-2 h-4 w-4" /> Coba Lagi
              </Button>
            </div>
          ) : loading ? (
            <div
              className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              role="status"
              aria-label="Memuat layanan"
            >
              {Array.from({ length: PER_PAGE }).map((_, i) => (
                <ServiceCardSkeleton key={i} />
              ))}
            </div>
          ) : data && data.items.length === 0 ? (
            <div className="mt-6 flex flex-col items-center gap-4 rounded-3xl border border-dashed border-border bg-card px-6 py-16 text-center">
              <SearchX className="h-10 w-10 text-muted-foreground/60" aria-hidden="true" />
              <p className="text-lg font-extrabold text-foreground">
                Layanan tidak ditemukan
              </p>
              <p className="max-w-md text-sm text-muted-foreground">
                Coba kata kunci lain atau longgarkan filter — katalog kami
                terus bertumbuh setiap fase. Tim kami juga siap membantu
                mencarikan izin yang Anda butuhkan.
              </p>
              {hasActiveFilter && (
                <Button
                  variant="outline"
                  onClick={resetFilters}
                  className="rounded-full border-primary/40 font-bold text-primary hover:bg-secondary"
                >
                  <RotateCcw className="mr-2 h-4 w-4" /> Reset Semua Filter
                </Button>
              )}
            </div>
          ) : data ? (
            <motion.ul
              role="list"
              className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.045 } },
              }}
            >
              {data.items.map((s) => {
                const phaseChip = PHASE_CHIP[s.phase];
                return (
                  <motion.li
                    role="listitem"
                    key={s.code}
                    variants={{
                      hidden: { opacity: 0, y: 22, scale: 0.97 },
                      show: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                    className="group flex h-full flex-col rounded-3xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] font-bold tracking-wider text-muted-foreground">
                        {s.code}
                      </span>
                      {s.popular && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-gold/40 bg-gold/10 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-gold-foreground dark:text-gold">
                          <Star className="h-3 w-3 fill-current" aria-hidden="true" />
                          Unggulan
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 text-[15px] font-bold leading-snug text-foreground">
                      {s.name}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>

                    <div className="mt-auto pt-4">
                      <p className="flex items-start gap-1.5 text-[11px] leading-snug text-muted-foreground/80">
                        <FileCheck
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/70"
                          aria-hidden="true"
                        />
                        {s.legalBasis}
                      </p>
                      <div className="mt-3.5 flex items-center justify-between gap-2">
                        <span
                          className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider ${phaseChip.cls}`}
                        >
                          {phaseChip.label}
                        </span>
                        <a
                          href="#kontak"
                          className="rounded-full bg-secondary px-3.5 py-2 text-xs font-extrabold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                          aria-label={`Konsultasikan layanan ${s.name}`}
                        >
                          Konsultasikan
                        </a>
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>
          ) : null}
        </div>

        {/* ===== Tautan ke indeks lengkap (SEO internal linking) ===== */}
        <div className="mt-10 text-center">
          <a
            href="#indeks-katalog"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-extrabold text-foreground/80 shadow-sm transition-all duration-300 hover:border-primary/40 hover:text-primary hover:shadow-md"
          >
            <ListTree
              className="h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            />
            Lihat Indeks Lengkap 500 Layanan — Terbaca Google
          </a>
        </div>

        {/* ===== Pagination ===== */}
        {data && data.totalPages > 1 && !loading && !showError && (
          <nav
            className="mt-10 flex items-center justify-center gap-3"
            aria-label="Navigasi halaman katalog"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => goToPage(data.page - 1)}
              disabled={data.page <= 1}
              aria-disabled={data.page <= 1}
              aria-label="Halaman sebelumnya"
              className="h-11 rounded-full border-border px-5 font-bold disabled:opacity-40"
            >
              <ChevronLeft className="mr-1 h-4 w-4" aria-hidden="true" />
              Sebelumnya
            </Button>
            <span
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-bold text-foreground/80"
              aria-current="page"
            >
              Halaman {data.page} dari {data.totalPages}
            </span>
            <Button
              variant="outline"
              size="lg"
              onClick={() => goToPage(data.page + 1)}
              disabled={data.page >= data.totalPages}
              aria-disabled={data.page >= data.totalPages}
              aria-label="Halaman berikutnya"
              className="h-11 rounded-full border-border px-5 font-bold disabled:opacity-40"
            >
              Berikutnya
              <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </Button>
          </nav>
        )}
      </div>
    </section>
  );
}
