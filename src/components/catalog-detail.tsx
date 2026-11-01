"use client";

import {
  BadgePercent,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  FileText,
  ListChecks,
  MessageCircle,
  PiggyBank,
  Target,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations";
import { useLang } from "@/lib/i18n";
import { BRAND, waLink } from "@/lib/brand";
import { formatRp } from "@/data/services";
import type { CatalogSub } from "@/data/katalog-meta";

/** Baris ringan untuk kartu related — dipetakan di server agar bundle tetap ramping. */
export interface CatalogRelated {
  slug: string;
  kode: string;
  nama: string;
  hargaDiskon: number;
  diskon: number;
}

interface Props {
  slug: string;
  kode: string;
  nama: string;
  subCode: string;
  subNameId: string;
  subNameEn: string;
  katNameId: string;
  katNameEn: string;
  harga: number;
  diskon: number;
  hargaDiskon: number;
  hemat: number;
  descId: string;
  sub: CatalogSub;
  related: CatalogRelated[];
}

export function CatalogDetail({
  slug,
  kode,
  nama,
  subNameId,
  subNameEn,
  katNameId,
  katNameEn,
  harga,
  diskon,
  hargaDiskon,
  hemat,
  descId,
  sub,
  related,
}: Props) {
  const { t, lang } = useLang();
  const subName = lang === "id" ? subNameId : subNameEn;
  const katName = lang === "id" ? katNameId : katNameEn;
  const lingkup = lang === "id" ? sub.lingkupId : sub.lingkupEn;
  const proses = lang === "id" ? sub.prosesId : sub.prosesEn;
  const dokumen = lang === "id" ? sub.dokumenId : sub.dokumenEn;
  const faq = sub.faq;

  const waText =
    lang === "id"
      ? `Halo ${BRAND.name}, saya tertarik dengan layanan katalog "${nama}" (kode ${kode}), harga ${formatRp(hargaDiskon)}. Mohon informasi & langkah selanjutnya.`
      : `Hello ${BRAND.name}, I'm interested in the catalog service "${nama}" (code ${kode}), priced at ${formatRp(hargaDiskon)}. Please share details & next steps.`;

  return (
    <article className="bg-background">
      {/* Hero */}
      <header className="section-deep relative overflow-hidden pt-32 pb-16">
        <div className="pattern-dots absolute inset-0" aria-hidden="true" />
        <div className="pointer-events-none absolute -top-24 right-[-6rem] h-80 w-80 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-cream/60">
              <li>
                <Link href="/" className="transition-colors hover:text-gold-soft">
                  {t("spBreadcrumbHome")}
                </Link>
              </li>
              <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
              <li>
                <Link href="/layanan" className="transition-colors hover:text-gold-soft">
                  {t("navServices")}
                </Link>
              </li>
              <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
              <li className="max-w-[16rem] truncate text-gold-soft" aria-current="page">{nama}</li>
            </ol>
          </nav>

          <div className="grid items-start gap-10 lg:grid-cols-[1fr_380px]">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-xs font-bold tracking-wider text-gold-soft">
                  {kode}
                </span>
                <span className="rounded-full border border-cream/20 bg-white/5 px-3 py-1 text-xs font-semibold text-cream/80">
                  {katName}
                </span>
                <span className="rounded-full border border-cream/20 bg-white/5 px-3 py-1 text-xs font-semibold text-cream/80">
                  {subName}
                </span>
              </div>
              <h1 className="mt-5 font-display text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
                {nama}
              </h1>
              <div className="gold-divider mt-4 w-28" />
              <p className="mt-5 max-w-2xl leading-relaxed text-cream/75">{descId}</p>
              {lang === "en" && (
                <p className="mt-3 text-xs italic text-cream/50">{t("katCatNote")}</p>
              )}
            </div>

            {/* Kartu harga */}
            <Reveal delay={0.1}>
              <aside
                aria-label={t("katPriceNow")}
                className="rounded-3xl border border-gold/25 bg-card/95 p-6 shadow-2xl shadow-black/20 backdrop-blur"
              >
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  <Wallet className="h-4 w-4 text-gold" aria-hidden="true" />
                  {t("katPriceNow")}
                </p>
                <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-display text-4xl font-black text-gold">
                    {formatRp(hargaDiskon)}
                  </span>
                  {diskon > 0 && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-gold px-2.5 py-0.5 text-xs font-black text-deep">
                      <BadgePercent className="h-3.5 w-3.5" aria-hidden="true" />
                      -{Math.round(diskon * 100)}%
                    </span>
                  )}
                </div>
                {diskon > 0 && (
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    <span className="mr-2 line-through decoration-red-400/70">{formatRp(harga)}</span>
                    <span className="mr-1 text-muted-foreground">{t("katWas")}</span>
                  </p>
                )}
                {hemat > 0 && (
                  <p className="mt-2 flex items-center gap-1.5 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    <PiggyBank className="h-4 w-4" aria-hidden="true" />
                    {t("katSave")} {formatRp(hemat)}
                  </p>
                )}
                <Button asChild size="lg" className="mt-5 w-full rounded-full bg-gold font-bold text-deep hover:bg-gold-soft">
                  <a href={waLink(waText)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
                    {t("heroCta2")}
                  </a>
                </Button>
                <p className="mt-3 text-center text-[11px] leading-relaxed text-muted-foreground">
                  {BRAND.iso} · Garansi tertulis · Konsultasi awal gratis
                </p>
              </aside>
            </Reveal>
          </div>
        </div>
      </header>

      {/* Konten keluarga layanan */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <section aria-labelledby="kat-scope">
              <h2 id="kat-scope" className="flex items-center gap-3 font-display text-2xl font-bold text-ink">
                <Target className="h-6 w-6 text-gold" aria-hidden="true" />
                {t("katScope")}
              </h2>
              <ul className="mt-5 grid gap-3">
                {lingkup.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 rounded-2xl border border-border bg-card p-4 text-sm leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section aria-labelledby="kat-docs">
              <h2 id="kat-docs" className="flex items-center gap-3 font-display text-2xl font-bold text-ink">
                <FileText className="h-6 w-6 text-gold" aria-hidden="true" />
                {t("katDocs")}
              </h2>
              <ul className="mt-5 space-y-3">
                {dokumen.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <ListChecks className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>

        <Reveal>
          <section aria-labelledby="kat-process" className="mt-14">
            <h2 id="kat-process" className="flex items-center gap-3 font-display text-2xl font-bold text-ink">
              <ListChecks className="h-6 w-6 text-gold" aria-hidden="true" />
              {t("katProcess")}
            </h2>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2">
              {proses.map((step, i) => (
                <li key={step} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-black text-gold-soft">
                    {i + 1}
                  </span>
                  <p className="pt-1.5 text-sm leading-relaxed text-muted-foreground">{step}</p>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>

        {/* FAQ */}
        <Reveal>
          <section aria-labelledby="kat-faq" className="mt-14">
            <h2 id="kat-faq" className="font-display text-2xl font-bold text-ink">
              FAQ — {subName}
            </h2>
            <div className="mt-5 grid gap-3">
              {faq.map((f) => (
                <details
                  key={f.qId}
                  className="group rounded-2xl border border-border bg-card px-5 py-4 transition-colors open:border-gold/40"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
                    {lang === "id" ? f.qId : f.qEn}
                    <ChevronDown className="h-4.5 w-4.5 shrink-0 text-gold transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {lang === "id" ? f.aId : f.aEn}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Related katalog se-sub */}
        {related.length > 0 && (
          <Reveal>
            <section aria-labelledby="kat-related" className="mt-14">
              <h2 id="kat-related" className="font-display text-2xl font-bold text-ink">
                {t("katRelated")}
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/layanan/${r.slug}`}
                      className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-lg"
                    >
                      <span className="font-mono text-[10px] font-bold tracking-wider text-gold">{r.kode}</span>
                      <span className="mt-1.5 line-clamp-2 text-sm font-semibold text-ink group-hover:text-gold">
                        {r.nama}
                      </span>
                      <span className="mt-2 flex items-baseline gap-1.5">
                        <span className="text-sm font-bold text-primary">{formatRp(r.hargaDiskon)}</span>
                        {r.diskon > 0 && (
                          <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                            -{Math.round(r.diskon * 100)}%
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        )}
      </div>
    </article>
  );
}
