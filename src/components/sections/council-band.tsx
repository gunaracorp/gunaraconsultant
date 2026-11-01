"use client";

import { BadgeCheck, Gem, History, Network } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/animations";
import { useLang } from "@/lib/i18n";

/** Pita Dewan Pakar 46 Lintas Bidang — narasi kepercayaan kelas dunia */
export function CouncilBand() {
  const { t } = useLang();
  const pillars = [
    { icon: Network, value: t("cnl1V"), label: t("cnl1L") },
    { icon: History, value: t("cnl2V"), label: t("cnl2L") },
    { icon: Gem, value: t("cnl3V"), label: t("cnl3L") },
    { icon: BadgeCheck, value: t("cnl4V"), label: t("cnl4L") },
  ];

  return (
    <section
      className="section-deep relative overflow-hidden border-y border-gold/20 py-16 sm:py-20"
      aria-label={t("cnlTitle")}
    >
      <div className="pattern-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={t("cnlKicker")} title={t("cnlTitle")} dark />
        <Reveal delay={0.12}>
          <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-cream/75 sm:text-base">
            {t("cnlSub")}
          </p>
        </Reveal>

        <dl className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.label} delay={0.08 * i}>
              <div className="group h-full rounded-3xl border border-gold/25 bg-deep/70 p-6 text-center shadow-lg shadow-deep/40 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-xl hover:shadow-gold/15">
                <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <p.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <dd className="mt-4 font-display text-3xl font-black tracking-tight text-gradient-gold sm:text-4xl">
                  {p.value}
                </dd>
                <dt className="mt-1.5 text-[11px] font-bold tracking-[0.16em] text-cream/75 uppercase">
                  {p.label}
                </dt>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
