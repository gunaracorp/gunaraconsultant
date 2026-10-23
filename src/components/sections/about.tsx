"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  Eye,
  FileCheck2,
  Landmark,
  Quote,
  ScrollText,
  ShieldCheck,
  Target,
  UserRound,
} from "lucide-react";
import { Reveal } from "@/components/animations";
import { useLang } from "@/lib/i18n";
import { BRAND } from "@/lib/brand";
import { PIAGAM_2125 } from "@/data/umea";

/**
 * Konten halaman Tentang Kami — cerita, visi-misi, nilai, timeline,
 * data legal resmi, dan tautan silang ke profil pendiri + blog.
 */
export function AboutContent() {
  const { t, lang } = useLang();

  const legalRows = [
    { icon: ScrollText, label: t("aboutLegalHeritage"), value: `${BRAND.heritage} — ${BRAND.since}` },
    { icon: Landmark, label: t("aboutLegalFounded"), value: `${BRAND.founded} — ${BRAND.ahu}` },
    { icon: Award, label: t("aboutLegalIso"), value: BRAND.iso },
    { icon: Building2, label: t("aboutLegalCapital"), value: BRAND.capital },
    { icon: FileCheck2, label: t("aboutLegalHq"), value: BRAND.address },
    { icon: Building2, label: t("aboutLegalJkt"), value: BRAND.addressJkt },
  ];

  const missions = [t("aboutMission1"), t("aboutMission2"), t("aboutMission3"), t("aboutMission4")];

  const values = [
    { icon: ShieldCheck, title: t("aboutVal1"), desc: t("aboutVal1d") },
    { icon: Target, title: t("aboutVal2"), desc: t("aboutVal2d") },
    { icon: Eye, title: t("aboutVal3"), desc: t("aboutVal3d") },
    { icon: BookOpen, title: t("aboutVal4"), desc: t("aboutVal4d") },
  ];

  const milestones = [
    { year: "2009", text: t("aboutM1T") },
    { year: "2024", text: t("aboutM2T") },
    { year: "2025", text: t("aboutM3T") },
    { year: BRAND.founded === 2024 ? "Hari Ini" : "Hari Ini", text: t("aboutM4T") },
  ];

  return (
    <>
      {/* Cerita + Data Legal */}
      <section className="section-deep relative overflow-hidden py-20 sm:py-24" aria-labelledby="about-story">
        <div className="pattern-lines pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr]">
            {/* Cerita */}
            <div>
              <Reveal>
                <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] text-gold-soft uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                  {t("aboutStoryKicker")}
                </p>
                <h2
                  id="about-story"
                  className="mt-5 font-display text-2xl leading-tight font-bold text-cream sm:text-3xl lg:text-4xl"
                >
                  {t("aboutStoryTitle")}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-cream/75 sm:text-base">
                  <p>{t("aboutP1")}</p>
                  <p>{t("aboutP2")}</p>
                  <p>{t("aboutP3")}</p>
                </div>
                <blockquote className="mt-8 border-l-2 border-gold/60 pl-5 font-display text-lg leading-snug text-gold-soft italic sm:text-xl">
                  “{t("aboutQuote")}”
                </blockquote>
              </Reveal>
            </div>

            {/* Data legal resmi */}
            <Reveal delay={0.15}>
              <div className="h-fit rounded-2xl border border-gold/25 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 shadow-xl shadow-black/20 sm:p-8 lg:sticky lg:top-24">
                <p className="text-[11px] font-black tracking-[0.25em] text-gold uppercase">
                  {t("aboutLegalKicker")}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-cream sm:text-2xl">
                  {t("aboutLegalTitle")}
                </h3>
                <ul className="mt-6 space-y-4">
                  {legalRows.map((row, i) => (
                    <li key={i} className="flex gap-3.5">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gold/10">
                        <row.icon className="h-4.5 w-4.5 text-gold" aria-hidden="true" />
                      </span>
                      <span>
                        <strong className="block text-[10px] font-bold tracking-[0.18em] text-gold-soft/90 uppercase">
                          {row.label}
                        </strong>
                        <span className="mt-0.5 block text-sm leading-relaxed text-cream/80">
                          {row.value}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="section-deep relative overflow-hidden py-20 sm:py-24" aria-labelledby="about-vision">
        <div className="pattern-lines pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <div className="h-full rounded-2xl border border-gold/30 bg-gradient-to-b from-gold/[0.12] to-transparent p-7 sm:p-9">
                <p className="text-[11px] font-black tracking-[0.25em] text-gold uppercase">
                  {t("aboutVisionKicker")}
                </p>
                <Eye className="mt-5 h-9 w-9 text-gold" aria-hidden="true" />
                <p className="mt-5 font-display text-xl leading-relaxed font-semibold text-cream sm:text-2xl">
                  {t("aboutVisionD")}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="h-full rounded-2xl border border-gold/25 bg-white/[0.04] p-7 sm:p-9">
                <p className="text-[11px] font-black tracking-[0.25em] text-gold uppercase">
                  {t("aboutMissionKicker")}
                </p>
                <ol className="mt-6 space-y-4">
                  {missions.map((m, i) => (
                    <li key={i} className="flex gap-4">
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-display text-sm font-bold text-gold-soft"
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      <p className="pt-1 text-sm leading-relaxed text-cream/80 sm:text-[15px]">{m}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Nilai Perusahaan */}
      <section className="section-deep relative overflow-hidden py-20 sm:py-24" aria-labelledby="about-values">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] text-gold-soft uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
              {t("aboutValuesKicker")}
            </p>
            <h2
              id="about-values"
              className="mt-5 font-display text-2xl leading-tight font-bold text-cream sm:text-3xl lg:text-4xl"
            >
              {t("aboutValuesTitle")}
            </h2>
            <div className="gold-divider mx-auto mt-6 w-40" />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <div className="group h-full rounded-2xl border border-gold/20 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-gold/5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 transition-colors group-hover:bg-gold/20">
                    <v.icon className="h-6 w-6 text-gold" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-cream">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-cream/70">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-deep relative overflow-hidden py-20 sm:py-24" aria-labelledby="about-timeline">
        <div className="pattern-lines pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] text-gold-soft uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
              {t("aboutTimelineKicker")}
            </p>
            <h2
              id="about-timeline"
              className="mt-5 font-display text-2xl leading-tight font-bold text-cream sm:text-3xl lg:text-4xl"
            >
              {t("aboutTimelineTitle")}
            </h2>
            <div className="gold-divider mx-auto mt-6 w-40" />
          </Reveal>
          <ol className="relative mt-12 space-y-8 border-l border-gold/25 pl-8 sm:pl-12">
            {milestones.map((m, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <li className="relative">
                  <span
                    className="absolute top-1 -left-[38px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-gold bg-deep sm:-left-[54px]"
                    aria-hidden="true"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  </span>
                  <span className="font-display text-2xl font-bold text-gradient-gold sm:text-3xl">
                    {m.year}
                  </span>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-cream/75 sm:text-base">
                    {m.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Tautan silang: pendiri + blog */}
      <section className="section-deep relative overflow-hidden py-20 sm:py-24" aria-label="Tautan terkait">
        <div className="pattern-lines pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="mx-auto grid max-w-5xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
          <Reveal>
            <Link
              href="/pendiri"
              className="group flex h-full flex-col rounded-2xl border border-gold/25 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-white/[0.07]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10">
                <UserRound className="h-6 w-6 text-gold" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-cream">
                Gugun Gunara — {t("fouRole")}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/70">{t("fouChip1")} • {t("fouChip2")}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold-soft">
                {t("aboutFounderLink")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/blog"
              className="group flex h-full flex-col rounded-2xl border border-gold/25 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-white/[0.07]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10">
                <BookOpen className="h-6 w-6 text-gold" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-cream">{t("pgBlogTitle")}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/70">{t("pgBlogSub")}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold-soft">
                {t("aboutBlogLink")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== PIAGAM 2125 — Arsitektur Abadi (FASE 3) ===== */}
      <section className="section-deep relative py-20" aria-labelledby="charter-2125">
        <div className="pattern-lines pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] text-gold-soft uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
              {t("chartKicker")}
            </p>
            <h2
              id="charter-2125"
              className="mt-5 font-display text-3xl font-bold text-cream sm:text-4xl"
            >
              {t("chartTitle")}
            </h2>
            <div className="gold-divider mx-auto mt-6 w-40" />
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="mt-10 space-y-5 text-left">
              {(lang === "id" ? PIAGAM_2125.bodyId : PIAGAM_2125.bodyEn).map((par, i) => (
                <p
                  key={i}
                  className={`leading-relaxed ${
                    i === 0
                      ? "font-display text-lg font-medium text-cream sm:text-xl"
                      : "text-sm text-cream/75 sm:text-base"
                  }`}
                >
                  {i === 0 && (
                    <Quote
                      className="mr-2 inline h-5 w-5 -translate-y-1 text-gold"
                      aria-hidden="true"
                    />
                  )}
                  {par}
                </p>
              ))}
            </blockquote>
            <p className="mt-8 font-display text-sm font-bold tracking-[0.2em] text-gold-soft uppercase">
              {BRAND.name} — {t("chartKicker")}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
