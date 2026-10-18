"use client";

import Image from "next/image";
import { ArrowRight, BadgeCheck, ChevronDown, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, CountUp } from "@/components/animations";
import { useLang } from "@/lib/i18n";
import { waLink } from "@/lib/brand";

export function Hero() {
  const { t } = useLang();

  const stats = [
    { value: 500, suffix: "+", label: t("heroStat1") },
    { value: 38, suffix: "", label: t("heroStat2") },
    { value: 15, suffix: "+", label: t("heroStat3") },
    { value: 98, suffix: "%", label: t("heroStat4") },
  ];

  return (
    <section
      id="beranda"
      className="relative flex min-h-screen items-center overflow-hidden"
      aria-label="Hero Gunara Consultant"
    >
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep/85 via-deep/70 to-deep/95" aria-hidden="true" />
      <div className="pattern-lines absolute inset-0" aria-hidden="true" />

      {/* ornamental glows */}
      <div className="pointer-events-none absolute -top-24 right-[-8rem] h-96 w-96 rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-[-6rem] left-[-6rem] h-[28rem] w-[28rem] rounded-full bg-primary/40 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-bold tracking-[0.18em] text-gold-soft uppercase backdrop-blur">
                <span className="dot-live h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
                {t("heroBadge")}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <h1 className="mt-6 font-display text-4xl leading-[1.08] font-bold text-cream sm:text-5xl lg:text-6xl">
                {t("heroTitle1")}{" "}
                <span className="text-gradient-gold animate-shimmer bg-[length:200%_100%]">
                  {t("heroTitleGold")}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg">
                {t("heroSub")}
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  className="btn-shine h-13 rounded-full bg-gold px-7 text-base font-bold text-deep shadow-xl shadow-gold/30 hover:scale-105"
                >
                  <a
                    href={waLink("Halo Gunara Consultant, saya ingin konsultasi gratis tentang perizinan bisnis saya.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("heroCta1")}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-13 rounded-full border-cream/30 bg-white/5 px-7 text-base font-semibold text-cream backdrop-blur transition-colors hover:border-gold/60 hover:text-gold-soft"
                >
                  <a href="/#layanan">{t("heroCta2")}</a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.42}>
              <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="border-l-2 border-gold/40 pl-4">
                    <dt className="sr-only">{s.label}</dt>
                    <dd>
                      <CountUp
                        to={s.value}
                        suffix={s.suffix}
                        className="font-display text-3xl font-bold text-gold-soft sm:text-4xl"
                      />
                      <span className="mt-1 block text-[11px] font-semibold tracking-[0.14em] text-cream/70 uppercase">
                        {s.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* ISO floating badge */}
          <Reveal delay={0.5} className="hidden lg:block">
            <div className="relative mx-auto aspect-square w-full max-w-sm">
              <div className="absolute inset-0 rounded-full border border-gold/30 animate-spin-slow" aria-hidden="true">
                <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-gold" />
                <span className="absolute top-1/2 -right-1 h-2 w-2 -translate-y-1/2 rounded-full bg-gold" />
                <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-gold" />
                <span className="absolute top-1/2 -left-1 h-2 w-2 -translate-y-1/2 rounded-full bg-gold" />
              </div>
              <div className="ornament-frame animate-float absolute inset-6 flex flex-col items-center justify-center rounded-[2.5rem] border border-gold/30 bg-deep/70 p-8 text-center shadow-2xl shadow-deep/60 backdrop-blur-xl">
                <BadgeCheck className="h-12 w-12 text-gold" aria-hidden="true" />
                <p className="mt-4 font-display text-xl font-bold text-cream">
                  {t("heroIso")}
                </p>
                <div className="gold-divider mt-4 w-24" />
                <p className="mt-4 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold-soft uppercase">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  ISO 9001:2015
                </p>
                <p className="mt-2 text-[11px] text-cream/60">
                  Mic Kinsey Heritage • Since 2009
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.6}>
          <a
            href="#layanan"
            className="mt-16 flex w-max items-center gap-2 text-xs font-semibold tracking-[0.25em] text-cream/60 uppercase transition-colors hover:text-gold-soft"
            aria-label={t("heroScroll")}
          >
            {t("heroScroll")}
            <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
