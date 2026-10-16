import { ChevronDown } from "lucide-react";
import { SERVICES, CATEGORIES, phaseCounts } from "@/data/services";
import { DynamicIcon } from "@/components/ui-custom/icon";
import {
  CatalogSection,
  CatalogHeading,
  CatalogLinks,
  CatalogEnNote,
  CatalogCountBadge,
  CatalogFeaturedBadge,
  CatalogPhaseNote,
} from "@/components/sections/catalog-ui";

/* KEPUTUSAN STRATEGIS i18n (Task 7-d-2):
 * Nama & deskripsi 600 layanan (src/data/services-data.ts) serta 27 nama
 * kategori (src/data/services-types.ts) SENGAJA TETAP Bahasa Indonesia pada
 * semua bahasa. Semuanya istilah regulasi RESMI (KBLI 2020, OSS-RBA, BPOM,
 * BPJPH, OJK, dst.) yang menjadi kata kunci pencarian utama pasar Indonesia
 * dan harus konsisten agar terindeks Google. Yang diterjemahkan HANYA UI
 * chrome (aria-label, heading, chip hitungan, chip "Unggulan", catatan fase,
 * CTA) via client helpers di catalog-ui.tsx; pembaca berbahasa Inggris diberi
 * catatan singkat (catEnNote). JANGAN menerjemahkan data layanan/kategori. */

/**
 * Indeks Katalog Lengkap — dirender 100% di server (SSR HTML).
 *
 * Ini bagian SEO paling krusial: seluruh 600 nama layanan, kode,
 * dan deskripsi tersedia sebagai HTML statis sehingga Googlebot
 * dapat mengindeksnya tanpa harus mengeksekusi JavaScript.
 * Elemen <details> native = dapat di-crawl + aksesibel tanpa JS.
 *
 * i18n (Task 7-d-2): wrapper <section> & chip label memakai client helper
 * (CatalogSection / CatalogCountBadge / CatalogFeaturedBadge) agar teks UI
 * mengikuti bahasa aktif, sementara seluruh entri layanan tetap server.
 */
export function CatalogIndex() {
  const total = SERVICES.length;
  const counts = phaseCounts();

  return (
    <CatalogSection>
      <CatalogHeading total={total} categories={CATEGORIES.length} />
      <CatalogEnNote />

      {/* Link ke katalog interaktif */}
      <CatalogLinks total={total} categories={CATEGORIES.length} />

      {/* 27 kategori — <details> native, crawlable tanpa JS.
          Nama kategori & seluruh entri layanan tetap Bahasa Indonesia
          (istilah KBLI resmi — lihat keputusan strategis di atas). */}
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
                <CatalogCountBadge count={items.length} />
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
                        {s.popular && <CatalogFeaturedBadge />}
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

      {/* Catatan SEO/fase — teks kaya kata kunci (bilingual via CatalogPhaseNote) */}
      <CatalogPhaseNote total={total} counts={counts} />
    </CatalogSection>
  );
}
