import { SectionHeading } from "@/components/ui-custom/animated";
import { BookOpen, Clock, CalendarDays, ChevronDown, ArrowRight, Newspaper } from "lucide-react";
import { ARTICLES, type Article } from "@/data/articles";

/**
 * Section "Artikel & Panduan" — halaman artikel SEO server-rendered.
 * Seluruh konten artikel tersedia sebagai HTML statis (crawlable)
 * dengan <details> native — Google mengindeks seluruh teks panduan.
 */

function ArticleCard({ article, isOpen }: { article: Article; isOpen: boolean }) {
  return (
    <details
      open={isOpen}
      className="group scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-colors duration-300 open:border-primary/40 open:shadow-md open:shadow-primary/5"
    >
      <summary className="flex cursor-pointer list-none items-start gap-4 px-5 py-5 [&::-webkit-details-marker]:hidden hover:bg-secondary/40 sm:px-6">
        <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-open:bg-primary group-open:text-primary-foreground">
          <Newspaper className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="mb-2 inline-flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-primary">
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
              <Clock className="h-3 w-3" aria-hidden="true" />
              {article.readTime}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
              <CalendarDays className="h-3 w-3" aria-hidden="true" />
              {article.date}
            </span>
          </span>
          <h3 className="text-base font-extrabold leading-snug text-foreground sm:text-lg">
            {article.title}
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
            {article.excerpt}
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-extrabold text-primary group-open:hidden">
            Baca artikel lengkap
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span className="mt-3 hidden items-center gap-1.5 text-xs font-extrabold text-primary group-open:inline-flex">
            Tutup artikel
            <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </span>
      </summary>

      <div className="border-t border-border/70 px-5 pb-6 pt-4 sm:px-6">
        <div className="prose-article max-w-none">
          {article.sections.map((sec, si) => (
            <div key={si} className={si > 0 ? "mt-6" : ""}>
              <h4 className="flex items-baseline gap-2 text-[15px] font-extrabold text-foreground">
                <span className="font-mono text-xs font-bold text-primary/70">
                  {String(si + 1).padStart(2, "0")}
                </span>
                {sec.h}
              </h4>
              {sec.p.map((para, pi) => (
                <p
                  key={pi}
                  className="mt-2.5 text-[13.5px] leading-relaxed text-muted-foreground"
                >
                  {para}
                </p>
              ))}
              {sec.list && (
                <ul className="mt-3 space-y-2">
                  {sec.list.map((item, li) => (
                    <li
                      key={li}
                      className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted-foreground"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <p className="mt-6 rounded-2xl border border-gold/30 bg-gold/5 px-4 py-3 text-[13px] leading-relaxed text-foreground/80">
            Butuh pendampingan langsung?{" "}
            <a href="#kontak" className="font-extrabold text-primary underline-offset-2 hover:underline">
              Konsultasi gratis
            </a>{" "}
            dengan tim bersertifikat ISO 9001:2015 — atau telusuri{" "}
            <a href="#katalog" className="font-extrabold text-primary underline-offset-2 hover:underline">
              katalog 600+ layanan perizinan
            </a>{" "}
            untuk menemukan izin yang Anda butuhkan.
          </p>
        </div>
      </div>
    </details>
  );
}

export function Insights() {
  return (
    <section
      id="artikel"
      aria-label="Artikel dan panduan perizinan usaha"
      className="relative overflow-hidden bg-secondary/40 py-24 sm:py-28"
    >
      <div
        className="absolute right-[-8%] top-24 h-80 w-80 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Artikel & Panduan"
          title="Perpustakaan Perizinan"
          highlight="— Ditulis Ahli, Terbaca Google"
          description="Panduan mendalam seputar perizinan usaha Indonesia: cara mendirikan PT, NIB & OSS-RBA, sertifikasi halal BPJPH, PBG & SLF, KITAS investor, hingga AMDAL. Gratis, lengkap, dan selalu sesuai regulasi terbaru."
        />

        <div className="mt-10 grid gap-4">
          {ARTICLES.map((a, i) => (
            <ArticleCard key={a.slug} article={a} isOpen={i === 0} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 text-center">
          <p className="inline-flex items-center gap-2 text-sm font-bold text-foreground/70">
            <BookOpen className="h-4 w-4 text-primary" aria-hidden="true" />
            {ARTICLES.length} panduan mendalam — diperbarui berkala oleh tim hukum
            Gunara Consultant
          </p>
        </div>
      </div>
    </section>
  );
}
