"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, BadgePercent, Search, SearchX } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { SectionHeading, Reveal } from "@/components/animations";
import { useLang } from "@/lib/i18n";
import { KATALOG_LITE, type CatalogLite } from "@/data/katalog-lite";
import { KAT4, SUB_ALL } from "@/data/katalog-meta";
import { formatRp } from "@/data/services";

const PAGE = 24;

/**
 * Katalog Lengkap — 500 layanan PusatPerizinan (v3.2.0).
 * Pencarian instan (nama/kode/sub), filter 4 kategori + chip sub,
 * paginasi tambah-beransur agar DOM tetap ramping.
 */
export function KatalogLengkap() {
  const { t, lang } = useLang();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");
  const [sub, setSub] = useState<string>("all");
  const [shown, setShown] = useState(PAGE);

  // SEO (v3.3.0): SearchAction sitelinks Google mendarat di /layanan?q=... —
  // baca parameter, isi kotak pencarian, dan gulir langsung ke katalog.
  // setState dijalankan dalam rAF agar sinkron-hidrasi tetap aman.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const p = new URLSearchParams(window.location.search);
    const initial = (p.get("q") ?? p.get("cari") ?? "").trim();
    if (initial) {
      requestAnimationFrame(() => {
        setQ(initial);
        document.getElementById("katalog")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  const subs = useMemo(
    () =>
      cat === "all"
        ? []
        : KATALOG_LITE.reduce<{ kode: string; nama: string }[]>((acc, k) => {
            if (k.catCode === cat && !acc.some((a) => a.kode === k.subCode)) {
              const meta = SUB_ALL.find((s) => s.kode === k.subCode);
              acc.push({ kode: k.subCode, nama: meta ? (lang === "id" ? meta.nameId : meta.nameEn) : k.subCode });
            }
            return acc;
          }, []),
    [cat, lang]
  );

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase().replace(/\s+/g, " ");
    return KATALOG_LITE.filter((k) => {
      if (cat !== "all" && k.catCode !== cat) return false;
      if (sub !== "all" && k.subCode !== sub) return false;
      if (!needle) return true;
      const hay = `${k.nama} ${k.kode} ${k.subCode} ${k.slug}`.toLowerCase();
      return needle.split(" ").every((w) => hay.includes(w));
    });
  }, [q, cat, sub]);

  const visible = filtered.slice(0, shown);

  const pickCat = (c: string) => {
    setCat(c);
    setSub("all");
    setShown(PAGE);
  };
  const pickSub = (s: string) => {
    setSub(s);
    setShown(PAGE);
  };

  return (
    <section
      id="katalog"
      className="relative overflow-hidden bg-background py-20 sm:py-24"
      aria-label="Katalog lengkap 500 layanan"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={t("katKicker")} title={t("katTitle")} sub={t("katSub")} />

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-10 max-w-xl">
            <Search
              className="pointer-events-none absolute top-1/2 left-4 h-4.5 w-4.5 -translate-y-1/2 text-gold"
              aria-hidden="true"
            />
            <Input
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setShown(PAGE);
              }}
              placeholder={t("katSearch")}
              aria-label={t("katSearch")}
              className="h-13 rounded-full border-gold/30 pl-11"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5" role="group" aria-label={t("katAll")}>
            <button
              type="button"
              onClick={() => pickCat("all")}
              aria-pressed={cat === "all"}
              className={`rounded-full border px-4 py-2 text-xs font-bold tracking-wide transition-all ${
                cat === "all"
                  ? "border-gold bg-gold text-deep shadow-lg shadow-gold/25"
                  : "border-border bg-card text-muted-foreground hover:border-gold/50 hover:text-gold"
              }`}
            >
              {t("katAll")} ({KATALOG_LITE.length})
            </button>
            {KAT4.map((c) => (
              <button
                key={c.kode}
                type="button"
                onClick={() => pickCat(c.kode)}
                aria-pressed={cat === c.kode}
                className={`rounded-full border px-4 py-2 text-xs font-bold tracking-wide transition-all ${
                  cat === c.kode
                    ? "border-gold bg-gold text-deep shadow-lg shadow-gold/25"
                    : "border-border bg-card text-muted-foreground hover:border-gold/50 hover:text-gold"
                }`}
              >
                {lang === "id" ? c.nameId : c.nameEn} (
                {KATALOG_LITE.filter((k) => k.catCode === c.kode).length})
              </button>
            ))}
          </div>
        </Reveal>

        {subs.length > 0 && (
          <Reveal delay={0.2}>
            <div className="mt-4 flex flex-wrap justify-center gap-2" role="group" aria-label="Sub-kategori">
              <button
                type="button"
                onClick={() => pickSub("all")}
                aria-pressed={sub === "all"}
                className={`rounded-full border px-3 py-1.5 text-[11px] font-bold transition-all ${
                  sub === "all"
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/50"
                }`}
              >
                {t("katAll")}
              </button>
              {subs.map((s) => (
                <button
                  key={s.kode}
                  type="button"
                  onClick={() => pickSub(s.kode)}
                  title={s.nama}
                  aria-pressed={sub === s.kode}
                  className={`rounded-full border px-3 py-1.5 text-[11px] font-bold transition-all ${
                    sub === s.kode
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  {s.nama}
                </button>
              ))}
            </div>
          </Reveal>
        )}

        <p className="mt-6 text-center text-sm text-muted-foreground" role="status" aria-live="polite">
          {filtered.length} {lang === "id" ? "layanan ditemukan" : "services found"}
        </p>

        {visible.length === 0 ? (
          <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-3 rounded-3xl border border-dashed border-border p-10 text-center">
            <SearchX className="h-10 w-10 text-gold" aria-hidden="true" />
            <p className="text-sm text-muted-foreground">{t("katEmpty")}</p>
          </div>
        ) : (
          <>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visible.map((k: CatalogLite) => (
                <li key={k.slug}>
                  <Link
                    href={`/layanan/${k.slug}`}
                    className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl hover:shadow-gold/10"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[10px] font-bold tracking-wider text-gold">{k.kode}</span>
                        {k.diskon > 0 && (
                          <span className="inline-flex items-center gap-0.5 rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-black text-gold">
                            <BadgePercent className="h-3 w-3" aria-hidden="true" />
                            -{Math.round(k.diskon * 100)}%
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2.5 line-clamp-2 text-sm font-bold leading-snug text-ink group-hover:text-gold">
                        {k.nama}
                      </h3>
                      <p className="mt-1.5 font-mono text-[10px] font-semibold text-muted-foreground">{k.subCode}</p>
                    </div>
                    <div className="mt-4 flex items-end justify-between gap-2">
                      <div>
                        {k.diskon > 0 && (
                          <p className="text-[11px] text-muted-foreground line-through decoration-red-400/70">
                            {formatRp(k.harga)}
                          </p>
                        )}
                        <p className="text-sm font-black text-primary">{formatRp(k.hargaDiskon)}</p>
                      </div>
                      <span className="flex items-center gap-1 text-[11px] font-bold text-gold opacity-0 transition-opacity group-hover:opacity-100">
                        {t("katDetail")}
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            {shown < filtered.length && (
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={() => setShown((s) => s + PAGE)}
                  className="rounded-full border border-gold/50 bg-gold/10 px-8 py-3 text-sm font-bold text-gold transition-all hover:bg-gold hover:text-deep"
                >
                  {t("katMore")} ({filtered.length - shown} {lang === "id" ? "lagi" : "more"})
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
