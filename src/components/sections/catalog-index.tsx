import { ChevronDown, ListTree } from "lucide-react";
import { SERVICES, CATEGORIES } from "@/data/services";
import { DynamicIcon } from "@/components/ui-custom/icon";
import {
  CatalogHeading,
  CatalogLinks,
  CatalogEnNote,
} from "@/components/sections/catalog-ui";

/**
 * Indeks Katalog Lengkap — dirender 100% di server (SSR HTML).
 *
 * Ini bagian SEO paling krusial: seluruh 600 nama layanan, kode,
 * dan deskripsi tersedia sebagai HTML statis sehingga Googlebot
 * dapat mengindeksnya tanpa harus mengeksekusi JavaScript.
 * Elemen <details> native = dapat di-crawl + aksesibel tanpa JS.
 */
export function CatalogIndex() {
  const total = SERVICES.length;

  return (
    <section
      id="indeks-katalog"
      aria-label="Indeks lengkap 600 layanan perizinan terlengkap di Asia Gunara Consultant"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      <div
        className="absolute left-[-6%] top-40 h-80 w-80 rounded-full bg-gold/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <CatalogHeading total={total} categories={CATEGORIES.length} />
        <CatalogEnNote />

        {/* Link ke katalog interaktif */}
        <CatalogLinks total={total} categories={CATEGORIES.length} />

        {/* 26 kategori — <details> native, crawlable tanpa JS */}
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {CATEGORIES.map((cat, idx) => {
            const items = SERVICES.filter((s) => s.category === cat.slug);
            return (
              <details
                key={cat.slug}
                open={idx === 0}
                className="group scroll-mt-28 rounded-3xl border border-border bg-card shadow-sm transition-colors duration-300 open:border-primary/40 open:shadow-md open:shadow-primary/5"
              >
                <summary className="flex cursor-pointer list-none items-center gap-3 rounded-3xl px-5 py-4 [&::-webkit-details-marker]:hidden hover:bg-secondary/50">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-open:bg-primary group-open:text-primary-foreground">
                    <DynamicIcon name={cat.icon} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[15px] font-extrabold text-foreground">
                      {cat.name}
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {cat.blurb}
                    </span>
                  </span>
                  <span className="shrink-0 rounded-full bg-secondary px-2.5 py-1 text-[11px] font-extrabold text-primary">
                    {items.length} layanan
                  </span>
                  <ChevronDown
                    className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>

                <div className="border-t border-border/70 px-3 pb-3 pt-1">
                  <ul className="max-h-96 space-y-0.5 overflow-y-auto px-2 py-2 [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary/25">
                    {items.map((s) => (
                      <li
                        key={s.code}
                        id={s.code}
                        className="scroll-mt-28 rounded-2xl px-3 py-2.5 transition-colors hover:bg-secondary/40"
                      >
                        <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                          <span className="font-mono text-[10px] font-bold tracking-wider text-primary/80">
                            {s.code}
                          </span>
                          <h3 className="text-[13.5px] font-bold leading-snug text-foreground">
                            {s.name}
                          </h3>
                          {s.popular && (
                            <span className="rounded-full border border-gold/40 bg-gold/10 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-gold-foreground dark:text-gold">
                              Unggulan
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {s.desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            );
          })}
        </div>

        {/* Catatan SEO/fase — teks kaya kata kunci */}
        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-border bg-card/60 p-6 sm:p-8">
          <p className="flex items-center gap-2 text-sm font-extrabold text-foreground">
            <ListTree className="h-4.5 w-4.5 text-primary" aria-hidden="true" />
            Bagaimana katalog 600 layanan ini diimplementasikan?
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Seluruh {total} layanan perizinan di atas diimplementasikan secara
            bertahap dalam{" "}
            <a href="#fase" className="font-bold text-primary underline-offset-2 hover:underline">
              4 fase implementasi
            </a>
            : Fase 1 Legalitas Fondasi (90 layanan: pendirian badan usaha, UMKM,
            pajak, kekayaan intelektual), Fase 2 Operasional &amp; Industri
            (154 layanan: OSS-RBA, perdagangan, industri, logistik,
            ketenagakerjaan, pangan &amp; halal), Fase 3 Sektor Regulasi Kompleks
            (180 layanan: kesehatan-farmasi, pertambangan-energi, lingkungan,
            konstruksi, pariwisata), dan Fase 4 Enterprise &amp; Global
            (176 layanan: fintech, telematika, ekspor-impor, pendidikan,
            media kreatif, sertifikasi ISO, serta Perizinan Global &amp;
            Internasional — Singapura, Malaysia, Arab Saudi, UAE, Tiongkok).
            Setiap layanan
            ditangani tim bersertifikat ISO 9001:2015 dengan basis hukum yang
            jelas — UU, PP, Perpres, hingga regulasi khusus BPOM, BPJPH,
            OJK, dan Kemenkumham RI.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Tidak menemukan izin yang Anda cari — di Indonesia maupun luar negeri? Tim Gunara Consultant —
            bernaung di standar konsultansi Mic Kinsey sejak 2009, resmi
            berbadan hukum 2024 sebagai PT TOP KONSULTAN INTERNASIONAL (AHU-038293.AH.01.30.Tahun 2024) —
            siap menangani kebutuhan perizinan di luar daftar.{" "}
            <a href="#kontak" className="font-bold text-primary underline-offset-2 hover:underline">
              Konsultasikan sekarang
            </a>{" "}
            — gratis, tanpa komitmen.
          </p>
        </div>
      </div>
    </section>
  );
}
