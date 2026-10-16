"use client";

import type { ReactNode } from "react";
import { Search, ListTree } from "lucide-react";
import { SectionHeading } from "@/components/ui-custom/animated";
import { useLang } from "@/components/language-provider";
import type { PhaseId } from "@/data/services-types";

/**
 * Client helpers i18n untuk CatalogIndex (indeks 600 layanan tetap
 * SERVER component 100% SSR — entri layanan Bahasa Indonesia/istilah resmi).
 *
 * Pattern komposisi RSC: komponen client menerima children hasil render server
 * (27 <details> kategori + 600 <li> layanan tetap crawlable tanpa JS); hanya
 * lapisan UI chrome (aria-label, heading, chip hitungan, catatan fase, CTA)
 * yang reaktif terhadap bahasa aktif.
 */

export function CatalogHeading({ total, categories }: { total: number; categories: number }) {
  const { t } = useLang();
  return (
    <SectionHeading
      eyebrow={t("catEyebrow")}
      title={`${t("catTitlePre")} ${total} ${t("catTitlePost")}`}
      highlight={t("catHighlight")}
      description={t("catDesc")}
    />
  );
}

export function CatalogLinks({ total, categories }: { total: number; categories: number }) {
  const { t } = useLang();
  return (
    <div className="mt-8 flex flex-col items-center gap-3">
      <a
        href="#katalog"
        className="group inline-flex items-center gap-2 rounded-full border border-primary/40 bg-secondary px-6 py-3 text-sm font-extrabold text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
      >
        <Search
          className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        />
        {t("catSearch")}
      </a>
      <p className="text-xs text-muted-foreground">
        {categories} {t("catMetaA")} {total} {t("catMetaB")} 4 {t("catMetaC")}{" "}
        {t("catMetaD")}
      </p>
    </div>
  );
}

export function CatalogEnNote() {
  const { lang, t } = useLang();
  if (lang !== "en") return null;
  return (
    <p className="mx-auto mt-6 max-w-3xl rounded-2xl border border-gold/30 bg-gold/5 px-4 py-3 text-center text-[13px] font-semibold text-foreground/80">
      {t("catEnNote")}
    </p>
  );
}

export function CatalogListTreeIcon() {
  return (
    <ListTree
      className="h-4.5 w-4.5 text-primary"
      aria-hidden="true"
    />
  );
}

/**
 * Wrapper <section> #indeks-katalog — memindahkan aria-label section ke
 * lapisan client agar bilingual (key catAria) tanpa menjadikan 600 entri
 * layanan client component (children tetap dirender server).
 */
export function CatalogSection({ children }: { children: ReactNode }) {
  const { t } = useLang();
  return (
    <section
      id="indeks-katalog"
      aria-label={t("catAria")}
      className="relative overflow-hidden py-24 sm:py-28"
    >
      <div
        className="absolute left-[-6%] top-40 h-80 w-80 rounded-full bg-gold/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

/** Chip jumlah layanan per kategori — bilingual (catCountSuffix). */
export function CatalogCountBadge({ count }: { count: number }) {
  const { t } = useLang();
  return (
    <span className="shrink-0 rounded-full bg-secondary px-2.5 py-1 text-[11px] font-extrabold text-primary">
      {count} {t("catCountSuffix")}
    </span>
  );
}

/** Chip "Unggulan" untuk layanan populer — bilingual (catFeatured). */
export function CatalogFeaturedBadge() {
  const { t } = useLang();
  return (
    <span className="rounded-full border border-gold/40 bg-gold/10 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-gold-foreground dark:text-gold">
      {t("catFeatured")}
    </span>
  );
}

/**
 * Catatan SEO fase implementasi + CTA — bilingual (key catPhase*).
 * Jumlah layanan per fase dihitung di SERVER (phaseCounts) dan dikirim
 * sebagai props agar angka tetap akurat tanpa memuat data 600 layanan
 * ke bundle client.
 */
export function CatalogPhaseNote({
  total,
  counts,
}: {
  total: number;
  counts: Record<PhaseId, number>;
}) {
  const { t } = useLang();
  return (
    <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-border bg-card/60 p-6 sm:p-8">
      <p className="flex items-center gap-2 text-sm font-extrabold text-foreground">
        <CatalogListTreeIcon />
        {`${t("catPhaseQPre")} ${total} ${t("catPhaseQPost")}`}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {t("catPhaseIntroPre")} {total} {t("catPhaseIntroPost")}{" "}
        <a
          href="#fase"
          className="font-bold text-primary underline-offset-2 hover:underline"
        >
          {t("catPhaseLink")}
        </a>
        : {t("catPhase1Name")} ({counts[1]} {t("catCountSuffix")}:{" "}
        {t("catPhase1Detail")}), {t("catPhase2Name")} ({counts[2]}{" "}
        {t("catCountSuffix")}: {t("catPhase2Detail")}), {t("catPhase3Name")} ({counts[3]}{" "}
        {t("catCountSuffix")}: {t("catPhase3Detail")}), {t("catPhaseAnd")}{" "}
        {t("catPhase4Name")} ({counts[4]} {t("catCountSuffix")}: {t("catPhase4Detail")}).{" "}
        {t("catPhaseLegal")}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {t("catPhaseAsk")}{" "}
        <a
          href="#kontak"
          className="font-bold text-primary underline-offset-2 hover:underline"
        >
          {t("catPhaseCta")}
        </a>{" "}
        {t("catPhaseCtaPost")}
      </p>
    </div>
  );
}
