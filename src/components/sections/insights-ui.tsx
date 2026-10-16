"use client";

import type { ReactNode } from "react";
import {
  BookOpen,
  Clock,
  CalendarDays,
  CalendarRange,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui-custom/animated";
import { useLang } from "@/components/language-provider";
import type { Article } from "@/data/articles";

/**
 * Client helpers i18n untuk Insights (section artikel tetap SERVER component).
 * Isi artikel tetap Bahasa Indonesia (istilah regulasi resmi); label UI bilingual.
 *
 * Pattern komposisi RSC: komponen client menerima children hasil render server
 * (ArticleCard & isi artikel tetap 100% SSR/crawlable), hanya lapisan UI chrome
 * (aria-label, heading, label edisi, CTA) yang reaktif terhadap bahasa aktif.
 */

export function InsightsHeading() {
  const { t } = useLang();
  return (
    <SectionHeading
      eyebrow={t("insEyebrow")}
      title={t("insTitle")}
      highlight={t("insHighlight")}
      description={t("insDesc")}
    />
  );
}

export function InsightsEnNote() {
  const { lang, t } = useLang();
  if (lang !== "en") return null;
  return (
    <p className="mx-auto mt-6 max-w-3xl rounded-2xl border border-gold/30 bg-gold/5 px-4 py-3 text-center text-[13px] font-semibold text-foreground/80">
      {t("insEnNote")}
    </p>
  );
}

/** Nama bulan dari editionKey "2026-10" sesuai bahasa aktif → "Oktober 2026". */
function monthLabel(editionKey: string, months: readonly string[]): string {
  const [y, m] = editionKey.split("-");
  const idx = Math.min(11, Math.max(0, parseInt(m ?? "1", 10) - 1));
  return `${months[idx] ?? ""} ${y ?? ""}`.trim();
}

export function ArticleMeta({ article }: { article: Article }) {
  const { t, lang, copy } = useLang();
  return (
    <span className="mb-2 inline-flex flex-wrap items-center gap-2">
      <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-primary">
        {article.category}
      </span>
      <span className="rounded-full border border-gold/40 bg-gold/10 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-gold">
        {t("insEditionPre")} {monthLabel(article.editionKey, copy.months)}
      </span>
      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
        <Clock className="h-3 w-3" aria-hidden="true" />
        {lang === "en" ? article.readTime.replace("menit", "min") : article.readTime}
      </span>
      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
        <CalendarDays className="h-3 w-3" aria-hidden="true" />
        {article.date}
      </span>
    </span>
  );
}

export function ArticleToggleLabels() {
  const { t } = useLang();
  return (
    <>
      <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-extrabold text-primary group-open:hidden">
        {t("insOpen")}
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
      <span className="mt-3 hidden items-center gap-1.5 text-xs font-extrabold text-primary group-open:inline-flex">
        {t("insClose")}
        <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    </>
  );
}

export function ArticleCta() {
  const { t } = useLang();
  return (
    <p className="mt-6 rounded-2xl border border-gold/30 bg-gold/5 px-4 py-3 text-[13px] leading-relaxed text-foreground/80">
      {t("insCtaConsult")}{" "}
      <a href="#kontak" className="font-extrabold text-primary underline-offset-2 hover:underline">
        {t("insCtaConsultLink")}
      </a>{" "}
      {t("insCtaCatalogPre")}{" "}
      <a href="#katalog" className="font-extrabold text-primary underline-offset-2 hover:underline">
        {t("insCtaCatalogLink")}
      </a>{" "}
      {t("insCtaCatalogPost")}
    </p>
  );
}

export function EditionHeader({
  label,
  editionKey,
  count,
}: {
  label: string;
  editionKey: string;
  count: number;
}) {
  const { t, copy } = useLang();
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <CalendarRange className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="text-lg font-extrabold text-foreground sm:text-xl">
        {t("insEditionPre")} {monthLabel(editionKey, copy.months)}
      </h3>
      <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-gold">
        {count} {t("insEditionCount")}
      </span>
      <span className="sr-only">{label}</span>
    </div>
  );
}

/**
 * Wrapper <section> #artikel — memindahkan aria-label section ke lapisan client
 * agar bilingual (key insAria) tanpa menjadikan isi artikel client component.
 */
export function InsightsSection({ children }: { children: ReactNode }) {
  const { t } = useLang();
  return (
    <section
      id="artikel"
      aria-label={t("insAria")}
      className="relative overflow-hidden bg-secondary/40 py-24 sm:py-28"
    >
      <div
        className="absolute right-[-8%] top-24 h-80 w-80 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

/**
 * Pembungkus tiap grup edisi bulanan — aria-label grup mengikuti bahasa aktif
 * ("Edisi Oktober 2026" ⇄ "Edition October 2026") via key insEditionPre.
 */
export function EditionGroupShell({
  editionKey,
  children,
}: {
  editionKey: string;
  children: ReactNode;
}) {
  const { t, copy } = useLang();
  return (
    <div
      aria-label={`${t("insEditionPre")} ${monthLabel(editionKey, copy.months)}`}
    >
      {children}
    </div>
  );
}

export function InsightsFooter({ count }: { count: number }) {
  const { t } = useLang();
  return (
    <div className="mt-12 flex flex-col items-center gap-4 text-center">
      <p className="inline-flex items-center gap-2 text-sm font-bold text-foreground/70">
        <BookOpen className="h-4 w-4 text-primary" aria-hidden="true" />
        {count} {t("insFooterPre")} {t("insFooterPost")}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm">
        <a
          href="#kontak"
          className="inline-flex items-center gap-1.5 font-extrabold text-primary underline-offset-4 hover:underline"
        >
          {t("insCtaConsultLink")}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <span className="hidden h-4 w-px bg-border sm:inline-block" aria-hidden="true" />
        <a
          href="#katalog"
          className="inline-flex items-center gap-1.5 font-extrabold text-primary underline-offset-4 hover:underline"
        >
          {t("insCtaCatalogLink")}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <span className="hidden h-4 w-px bg-border sm:inline-block" aria-hidden="true" />
        <a
          href="#misa"
          className="inline-flex items-center gap-1.5 font-extrabold text-primary underline-offset-4 hover:underline"
        >
          {t("insCtaMisa")}
        </a>
      </div>
    </div>
  );
}
