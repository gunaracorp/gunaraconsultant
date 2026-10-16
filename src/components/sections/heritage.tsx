"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FileCheck,
  Landmark,
  Quote,
  ScrollText,
  Building2,
  Globe2,
  ShieldCheck,
  Sunrise,
  Gem,
  BadgeCheck,
} from "lucide-react";
import { SectionHeading, Reveal, Stagger, StaggerItem } from "@/components/ui-custom/animated";
import { useLang } from "@/components/language-provider";
import { SITE } from "@/lib/data";

/**
 * Section "Heritage / Legasi" — narasi 2009 (Mic Kinsey) → 2024 (badan hukum).
 * FULL BILINGUAL ID ⇄ EN via LanguageProvider (render awal tetap ID untuk SEO).
 */

const BRAND_MEANS = [
  { icon: Landmark, titleKey: "brandMean1Title", textKey: "brandMean1Text" },
  { icon: ShieldCheck, titleKey: "brandMean2Title", textKey: "brandMean2Text" },
  { icon: Sunrise, titleKey: "brandMean3Title", textKey: "brandMean3Text" },
  { icon: Gem, titleKey: "brandMean4Title", textKey: "brandMean4Text" },
] as const;

export function Heritage() {
  const { t, copy } = useLang();

  return (
    <section
      id="legasi"
      className="relative overflow-hidden py-24 sm:py-28"
      aria-label={t("herAria")}
    >
      {/* Ornamen latar */}
      <div
        className="absolute left-[-10%] top-32 h-96 w-96 rounded-full bg-secondary blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="absolute right-[-8%] bottom-24 h-80 w-80 rounded-full bg-gold/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t("herEyebrow")}
          title={t("herTitle")}
          highlight={t("herHighlight")}
          align="center"
        />

        {/* Kutipan editorial */}
        <Reveal delay={0.15} className="mx-auto mt-10 max-w-3xl">
          <figure className="relative rounded-3xl border border-gold/25 bg-gradient-to-br from-gold/[0.07] to-transparent p-8 sm:p-10">
            <Quote
              className="absolute -top-5 left-8 h-10 w-10 rounded-2xl border border-gold/30 bg-card p-2 text-gold shadow-lg"
              aria-hidden="true"
            />
            <blockquote className="text-lg font-medium leading-relaxed text-foreground/85 sm:text-xl">
              {t("herQuotePre")}{" "}
              <span className="font-extrabold text-gradient-gold">
                {t("herQuoteGold")}
              </span>
              ”
            </blockquote>
            <figcaption className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
              {t("herQuoteCaptionPre")} {SITE.name}
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* ===== Timeline vertikal ===== */}
          <div className="relative">
            {/* Garis vertikal yang tumbuh saat scroll */}
            <Reveal
              scale={0}
              duration={1.4}
              className="absolute left-[19px] top-2 hidden h-[calc(100%-1rem)] origin-top sm:block"
            >
              <div
                className="h-full w-0.5 bg-gradient-to-b from-primary via-gold/60 to-gold/10"
                aria-hidden="true"
              />
            </Reveal>
            {/* Garis fallback mobile (tanpa animasi) */}
            <div
              className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-0.5 bg-gradient-to-b from-primary via-gold/60 to-gold/10 sm:hidden"
              aria-hidden="true"
            />

            <Stagger className="space-y-8">
              {copy.timeline.map((item, i) => (
                <StaggerItem key={item.title}>
                  <article className="relative flex gap-5 sm:gap-7">
                    {/* Titik timeline */}
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-card shadow-md shadow-gold/10">
                      <span className="absolute inset-0 rounded-full bg-gold/10 animate-glow" aria-hidden="true" />
                      <span className="h-2.5 w-2.5 rounded-full bg-gold" aria-hidden="true" />
                    </span>

                    <div className="group flex-1 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 sm:p-6">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <span className="rounded-full border border-primary/20 bg-secondary px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-primary">
                          {item.year}
                        </span>
                        <h3 className="text-base font-extrabold text-foreground sm:text-lg">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                        {item.text}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* ===== Kartu Sertifikat Pendirian ===== */}
          <Reveal delay={0.2} y={40} className="lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-[1.75rem] border-2 border-gold/50 bg-card shadow-2xl shadow-gold/10">
              {/* Garis halus dekoratif */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.35]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 26px, rgba(180,146,66,0.14) 26px, rgba(180,146,66,0.14) 27px)",
                }}
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-3 rounded-[1.4rem] border border-gold/25"
                aria-hidden="true"
              />

              <div className="relative p-7 sm:p-9">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10">
                    <FileCheck className="h-7 w-7 text-gold" aria-hidden="true" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/25 bg-emerald-600/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                    <ScrollText className="h-3.5 w-3.5" aria-hidden="true" />
                    {t("herCertBadge")}
                  </span>
                </div>

                <p className="mt-6 font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
                  {t("herCertCountry")}
                </p>
                <h3 className="mt-1.5 text-2xl font-extrabold tracking-tight text-foreground">
                  {t("herCertTitle")}{" "}
                  <span className="text-gradient-gold">{t("herCertTitleGold")}</span>
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t("herCertSub")}
                </p>

                <dl className="mt-6 divide-y divide-border/70 border-y border-gold/20">
                  {copy.certRows.map((row) => (
                    <div
                      key={row.label}
                      className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                    >
                      <dt className="shrink-0 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                        {row.label}
                      </dt>
                      <dd
                        className={`text-right text-[13px] font-bold text-foreground sm:text-sm ${
                          row.mono ? "font-mono tracking-tight text-gold-foreground dark:text-gold" : ""
                        }`}
                      >
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-extrabold text-primary">
                    <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                    {t("herChipGroup")}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-bold text-muted-foreground">
                    <Landmark className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                    {t("herChipVerified")}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-bold text-muted-foreground">
                    <Globe2 className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                    {t("herChipServing")}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ===== Identitas Merek — Filosofi Logo "The Sovereign G" ===== */}
        <Reveal delay={0.1} className="mt-20">
          <article
            className="overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-br from-secondary/70 via-card to-card shadow-xl shadow-primary/5"
            aria-label={t("brandEyebrow")}
          >
            <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              {/* Presentasi emblem + lockup */}
              <div>
                <div className="flex items-center justify-center gap-5 sm:gap-8">
                  <motion.figure
                    initial={{ opacity: 0, y: 28, rotate: -8 }}
                    whileInView={{ opacity: 1, y: 0, rotate: -3 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden rounded-3xl border border-border bg-white shadow-2xl shadow-primary/10"
                  >
                    <Image
                      src="/images/logo-icon.png"
                      alt={t("brandIconAlt")}
                      width={256}
                      height={256}
                      className="h-32 w-32 object-cover sm:h-40 sm:w-40"
                    />
                  </motion.figure>
                  <motion.figure
                    initial={{ opacity: 0, y: 28, rotate: 8 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 3 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden rounded-3xl shadow-2xl shadow-deep/40 ring-2 ring-gold/50"
                  >
                    <Image
                      src="/images/logo-icon-dark-256.png"
                      alt={t("brandTileAlt")}
                      width={256}
                      height={256}
                      className="h-32 w-32 object-cover sm:h-40 sm:w-40"
                    />
                  </motion.figure>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6 rounded-3xl border border-border bg-white px-6 py-4 shadow-lg"
                >
                  <Image
                    src="/images/logo-lockup-web.png"
                    alt={t("brandLockAlt")}
                    width={1024}
                    height={585}
                    className="mx-auto h-16 w-auto object-contain sm:h-24"
                  />
                </motion.div>
              </div>

              {/* Makna emblem */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-gold-foreground dark:text-gold">
                  <Gem className="h-3.5 w-3.5" aria-hidden="true" />
                  {t("brandEyebrow")}
                </span>
                <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                  {t("brandTitle")}{" "}
                  <span className="text-gradient-gold">{t("brandHighlight")}</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                  {t("brandDesc")}
                </p>

                <Stagger className="mt-6 grid gap-4 sm:grid-cols-2">
                  {BRAND_MEANS.map((m) => (
                    <StaggerItem key={m.titleKey}>
                      <div className="group h-full rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110">
                          <m.icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <h4 className="mt-3 text-sm font-extrabold text-foreground">
                          {t(m.titleKey)}
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {t(m.textKey)}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>

                <p className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-primary">
                  <BadgeCheck className="h-4 w-4 text-gold" aria-hidden="true" />
                  {t("brandBadge")}
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
