"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/animations";
import { useLang, type UIKey } from "@/lib/i18n";

/**
 * Kepala halaman mandiri: breadcrumb + kicker + H1 + sub + pembatas emas.
 * Dipakai oleh semua halaman baru agar struktur H1 dan hierarki visual konsisten.
 */
export function PageHero({
  crumbKey,
  kickerKey,
  titleKey,
  subKey,
}: {
  crumbKey: UIKey;
  kickerKey: UIKey;
  titleKey: UIKey;
  subKey: UIKey;
}) {
  const { t } = useLang();

  return (
    <section className="section-deep relative overflow-hidden">
      <div className="pattern-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-xs font-semibold text-cream/55">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-gold-soft"
              >
                {t("navHome")}
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5 text-gold/50" />
            </li>
            <li aria-current="page" className="text-gold-soft">
              {t(crumbKey)}
            </li>
          </ol>
        </nav>

        <Reveal className="mx-auto mt-10 max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] text-gold-soft uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            {t(kickerKey)}
          </p>
          <h1 className="mt-5 font-display text-3xl leading-tight font-bold text-cream sm:text-4xl lg:text-[2.75rem]">
            {t(titleKey)}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-cream/75 sm:text-lg">
            {t(subKey)}
          </p>
          <div className="gold-divider mx-auto mt-6 w-40" />
        </Reveal>
      </div>
    </section>
  );
}
