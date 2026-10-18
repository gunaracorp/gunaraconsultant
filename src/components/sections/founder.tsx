"use client";

import Image from "next/image";
import {
  BadgeCheck,
  Quote,
  Star,
  Target,
  Users,
  Wallet,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/animations";
import { useLang } from "@/lib/i18n";
import { BRAND, waLink } from "@/lib/brand";
import { Button } from "@/components/ui/button";

const PRINCIPLE_ICONS = [BadgeCheck, Target, Users, Star] as const;

export function Founder() {
  const { t } = useLang();

  const chips = [t("fouChip1"), t("fouChip2"), t("fouChip3"), t("fouChip4")];
  const principles = [
    { title: t("fouPrin1"), desc: t("fouPrin1d") },
    { title: t("fouPrin2"), desc: t("fouPrin2d") },
    { title: t("fouPrin3"), desc: t("fouPrin3d") },
    { title: t("fouPrin4"), desc: t("fouPrin4d") },
  ];

  return (
    <section id="pendiri" className="bg-background py-20 sm:py-28" aria-label="Profil pendiri">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[.85fr_1.15fr]">
          {/* Photo card */}
          <Reveal className="lg:sticky lg:top-28">
            <div className="relative mx-auto max-w-md">
              <div className="animate-glow overflow-hidden rounded-[2.4rem] border-2 border-gold/60 shadow-2xl">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/founder.jpg"
                    alt={t("fouPhotoAlt")}
                    fill
                    sizes="(max-width: 768px) 90vw, 420px"
                    className="object-cover"
                    priority={false}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-deep/85 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute right-5 bottom-5 left-5">
                    <p className="font-display text-2xl font-bold text-cream">
                      {t("fouTitle")}
                    </p>
                    <p className="mt-1 text-xs font-bold tracking-[0.2em] text-gold-soft uppercase">
                      {t("fouRole")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="animate-float-slow absolute -top-4 -right-4 rounded-2xl border border-gold/40 bg-deep px-4 py-3 shadow-xl">
                <p className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-gold-soft">
                  <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                  {BRAND.heritage} • Since {BRAND.since}
                </p>
              </div>
              <div className="animate-float absolute -bottom-4 -left-4 rounded-2xl border border-gold/40 bg-deep px-4 py-3 shadow-xl">
                <p className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-gold-soft">
                  <Wallet className="h-4 w-4" aria-hidden="true" />
                  {BRAND.iso} Certified
                </p>
              </div>
            </div>
          </Reveal>

          {/* Narrative */}
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] text-primary uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                {t("fouKicker")}
              </p>
              <h2 className="mt-5 font-display text-4xl leading-tight font-bold text-ink sm:text-5xl">
                {t("fouTitle")}
              </h2>
              <p className="mt-2 text-sm font-bold tracking-[0.18em] text-gold uppercase">
                {t("fouRole")}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>{t("fouP1")}</p>
                <p>{t("fouP2")}</p>
                <p>{t("fouP3")}</p>
              </div>
            </Reveal>

            <Stagger className="mt-7 flex flex-wrap gap-2.5">
              {chips.map((c) => (
                <StaggerItem key={c}>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-secondary px-4 py-2 text-xs font-bold text-primary">
                    <BadgeCheck className="h-4 w-4 text-gold" aria-hidden="true" />
                    {c}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.18}>
              <h3 className="mt-10 font-display text-xl font-bold text-ink">
                {t("fouPrinciples")}
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {principles.map((p, i) => {
                  const Icon = PRINCIPLE_ICONS[i];
                  return (
                    <div
                      key={p.title}
                      className="card-lux rounded-2xl p-5"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-gold-soft">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h4 className="mt-3 text-sm font-bold text-ink">{p.title}</h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        {p.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <blockquote className="ornament-frame mt-9 rounded-3xl border border-gold/25 bg-deep p-7">
                <Quote className="h-7 w-7 text-gold" aria-hidden="true" />
                <p className="mt-3 font-display text-lg leading-relaxed text-cream italic sm:text-xl">
                  {t("fouQuote")}
                </p>
                <footer className="mt-4 text-xs font-bold tracking-[0.2em] text-gold-soft uppercase">
                  — Gugun Gunara, {t("fouRole")}
                </footer>
              </blockquote>
            </Reveal>

            <Reveal delay={0.3} className="mt-8">
              <Button
                asChild
                className="btn-shine h-12 rounded-full bg-primary px-7 font-bold text-primary-foreground shadow-lg shadow-primary/25 hover:scale-105"
              >
                <a
                  href={waLink("Halo Pak Gugun, saya ingin berdiskusi mengenai perizinan bisnis saya.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("spDiscuss")}
                </a>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
