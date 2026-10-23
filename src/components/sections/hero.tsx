"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, CountUp } from "@/components/animations";
import { useLang } from "@/lib/i18n";
import { BRAND, waLink } from "@/lib/brand";

const APPROACH = [
  { no: "01", label: "DIAGNOSE", titleKey: "app1Title", descKey: "app1Desc" },
  { no: "02", label: "ARCHITECT", titleKey: "app2Title", descKey: "app2Desc" },
  { no: "03", label: "EXECUTE", titleKey: "app3Title", descKey: "app3Desc" },
] as const;

export function Hero() {
  const { t } = useLang();

  const stats = [
    { value: 500, suffix: "+", label: t("heroStat1") },
    { value: 38, suffix: "", label: t("heroStat2") },
    { value: 15, suffix: "+", label: t("heroStat3") },
    { value: 98, suffix: "%", label: t("heroStat4") },
  ];

  return (
    <>
      {/* HERO — Deep Forest, kicker emas, headline serif */}
      <section
        id="beranda"
        className="relative overflow-hidden bg-deep"
        aria-label="Hero GConsultant"
      >
        <div className="section-deep absolute inset-0" aria-hidden="true" />
        <div className="pattern-rings absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-32 right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-gold/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-[-8rem] left-[-8rem] h-[26rem] w-[26rem] rounded-full bg-primary/50 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 pt-36 pb-24 sm:px-6 lg:px-8 lg:pt-44 lg:pb-32">
          <Reveal>
            <p className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.28em] text-gold uppercase sm:text-xs">
              <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
              {BRAND.descriptor}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <h1 className="mt-7 max-w-5xl font-display text-5xl leading-[1.04] font-semibold text-cream sm:text-6xl lg:text-7xl">
              {t("heroTitle1")}{" "}
              <span className="text-gradient-gold animate-shimmer bg-[length:200%_100%]">
                {t("heroTitleGold")}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg">
              {t("heroSub")}
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="btn-shine h-13 rounded-full bg-gold px-8 text-base font-bold text-deep shadow-xl shadow-gold/25 hover:scale-105"
              >
                <a href="/metodologi">
                  {t("heroCta1")}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-13 rounded-full border-cream/30 bg-white/5 px-8 text-base font-semibold text-cream backdrop-blur transition-colors hover:border-gold/60 hover:text-gold-soft"
              >
                <a
                  href={waLink(
                    "Halo GConsultant, saya ingin konsultasi gratis tentang kebutuhan bisnis saya."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("heroCta2")}
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.42}>
            <p className="mt-12 text-[11px] font-semibold tracking-[0.22em] text-cream/50 uppercase">
              {BRAND.heritage} Heritage • Since {BRAND.since} • {BRAND.iso} • {BRAND.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* APPROACH — strip krem: DIAGNOSE / ARCHITECT / EXECUTE */}
      <section
        aria-label={t("appSectionLabel")}
        className="border-b border-gold/15 bg-background"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            {APPROACH.map((a, i) => (
              <Reveal key={a.no} delay={i * 0.1}>
                <div className="border-t-2 border-gold/60 pt-6">
                  <p className="text-[11px] font-bold tracking-[0.24em] text-gold uppercase">
                    {a.no} / {a.label}
                  </p>
                  <h2 className="mt-4 font-display text-2xl font-semibold text-primary sm:text-[1.75rem]">
                    {t(a.titleKey)}
                  </h2>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {t(a.descKey)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-gold/25 pt-10 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-primary/20 pl-4">
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <CountUp
                      to={s.value}
                      suffix={s.suffix}
                      className="font-display text-3xl font-bold text-primary sm:text-4xl"
                    />
                    <span className="mt-1 block text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>
    </>
  );
}
