"use client";

import { Search, ListTree } from "lucide-react";
import { SectionHeading } from "@/components/ui-custom/animated";
import { useLang } from "@/components/language-provider";

/**
 * Client helpers i18n untuk CatalogIndex (indeks 600 layanan tetap
 * SERVER component 100% SSR — entri layanan Bahasa Indonesia/istilah resmi).
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
