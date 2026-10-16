"use client";

import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Landmark,
  MessageCircle,
  Plane,
} from "lucide-react";
import { type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Reveal,
  SectionHeading,
  Stagger,
  StaggerItem,
} from "@/components/ui-custom/animated";
import { DynamicIcon } from "@/components/ui-custom/icon";
import { SITE } from "@/lib/data";
import { useLang } from "@/components/language-provider";

/**
 * Section "Saudi Desk" (#misa) — landing khusus MISA Arab Saudi ⇄ Indonesia.
 * FULL BILINGUAL (ID ⇄ EN) via LanguageProvider; konten ID tetap tersedia penuh
 * di HTML SSR (crawlable) karena render awal selalu Bahasa Indonesia.
 * Palet: emerald sangat gelap (bg-deep) + gold — kontras dengan section lain.
 */

type Accent = "emerald" | "gold";

const ACCENT = {
  emerald: {
    chip: "border-emerald-300/30 bg-emerald-400/10 text-emerald-300",
    text: "text-emerald-300",
    hairline: "via-emerald-300/50",
  },
  gold: {
    chip: "border-gold/40 bg-gold/10 text-gold",
    text: "text-gold",
    hairline: "via-gold/60",
  },
} satisfies Record<Accent, { chip: string; text: string; hairline: string }>;

function DirectionCard({
  accent,
  icon,
  title,
  tagline,
  items,
}: {
  accent: Accent;
  icon: ReactNode;
  title: string;
  tagline: string;
  items: { title: string; desc: string; icon: string }[];
}) {
  const a = ACCENT[accent];
  return (
    <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.07] sm:p-7">
      <span
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${a.hairline} to-transparent`}
        aria-hidden="true"
      />
      <header className="flex items-center gap-4">
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-110 ${a.chip}`}
        >
          {icon}
        </span>
        <div>
          <h3 className="text-lg font-extrabold leading-snug text-white sm:text-xl">
            {title}
          </h3>
          <p
            className={`mt-0.5 text-[11px] font-extrabold uppercase tracking-[0.16em] ${a.text}`}
          >
            {tagline}
          </p>
        </div>
      </header>

      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item.title} className="flex items-start gap-3.5">
            <span
              className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${a.chip}`}
            >
              <DynamicIcon name={item.icon} className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h4 className="text-[15px] font-extrabold leading-snug text-white">
                {item.title}
              </h4>
              <p className="mt-1 text-[13px] leading-relaxed text-white/60">
                {item.desc}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}

/** Ornamen pemisah bergaya geometri Islami (belah ketupat emas) */
function OrnamentDivider() {
  return (
    <div
      className="mx-auto mt-16 flex items-center justify-center gap-3"
      aria-hidden="true"
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
      <span className="block h-2 w-2 rotate-45 border border-gold/70" />
      <span className="block h-2 w-2 rotate-45 bg-gold/70" />
      <span className="block h-2 w-2 rotate-45 border border-gold/70" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
    </div>
  );
}

export function SaudiDesk() {
  const { t, copy } = useLang();

  return (
    <section
      id="misa"
      aria-label={t("misaAria")}
      className="relative overflow-hidden bg-deep py-24 text-white noise-overlay sm:py-28"
    >
      {/* Aksen dekoratif: pola titik geometri Islami + orbs emerald/gold */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.8 0.14 88 / 60%) 1px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-primary/25 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-32 bottom-24 h-80 w-80 rounded-full bg-gold/15 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== 1. BANNER ===== */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl shadow-black/40">
            <img
              src="/images/misa-saudi-desk.png"
              alt={t("misaBannerAlt")}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            {/* Overlay gradient emerald-950/80 → transparan agar teks terbaca */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/60 to-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent"
              aria-hidden="true"
            />

            <div className="relative flex min-h-[420px] flex-col justify-center gap-6 p-7 sm:p-12 lg:p-16">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold backdrop-blur sm:text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-glow" aria-hidden="true" />
                  {t("misaChip")}
                </span>
                <span
                  lang="ar"
                  dir="rtl"
                  aria-hidden="true"
                  className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white/85 backdrop-blur"
                >
                  أهلاً وسهلاً
                </span>
              </div>

              <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                {t("misaTitle")}{" "}
                <span className="text-gradient-gold">{t("misaTitleGold")}</span>
              </h2>

              <p className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                {t("misaSub")}
              </p>

              <div className="mt-1 flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="group h-13 rounded-full bg-gold px-7 text-base font-extrabold text-gold-foreground shadow-xl shadow-gold/25 transition-all hover:-translate-y-0.5 hover:shadow-gold/40"
                >
                  <a href="#kontak">
                    {t("misaCta")}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-13 rounded-full border-white/25 bg-white/5 px-7 text-base font-bold text-white backdrop-blur transition-all hover:border-gold/50 hover:bg-white/10"
                >
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5 text-gold" />
                    {t("misaCtaWa")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ===== 2. INTRO ===== */}
        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-[15px] leading-relaxed text-white/70 sm:text-base">
            <strong className="text-white">{t("misaIntroStrong")}</strong>
            {t("misaIntroA")}{" "}
            <strong className="text-white">Vision 2030</strong>
            {t("misaIntroB")}{" "}
            <span className="font-extrabold text-gold">Saudi Desk</span>
            {t("misaIntroC")}{" "}
            <strong className="text-white">ISO 9001:2015</strong>
            {t("misaIntroD")}
          </p>
        </Reveal>

        {/* ===== 3. DUA KARTU ARAH ===== */}
        <div className="mt-20">
          <SectionHeading
            dark
            align="center"
            eyebrow={t("misaDirEyebrow")}
            title={t("misaDirTitle")}
            highlight={t("misaDirHighlight")}
            description={t("misaDirDesc")}
          />

          <Stagger className="mt-12 grid gap-6 lg:grid-cols-2">
            <StaggerItem>
              <DirectionCard
                accent="emerald"
                icon={<Landmark className="h-6 w-6" aria-hidden="true" />}
                title={t("misaCardATitle")}
                tagline={t("misaCardATagline")}
                items={copy.misaSaToId}
              />
            </StaggerItem>
            <StaggerItem>
              <DirectionCard
                accent="gold"
                icon={<Plane className="h-6 w-6" aria-hidden="true" />}
                title={t("misaCardBTitle")}
                tagline={t("misaCardBTagline")}
                items={copy.misaIdToSa}
              />
            </StaggerItem>
          </Stagger>
        </div>

        <OrnamentDivider />

        {/* ===== 4. TIMELINE 5 LANGKAH ===== */}
        <div className="mt-16">
          <Reveal className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold">
                {t("misaStepsEyebrow")}
              </p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                {t("misaStepsTitle")}
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/55">
              {t("misaStepsSub")}
            </p>
          </Reveal>

          {/* Desktop: 5 kolom + garis dash */}
          <div className="relative mt-10 hidden lg:block">
            <div
              className="absolute left-8 right-8 top-7 border-t-2 border-dashed border-gold/25"
              aria-hidden="true"
            />
            <Stagger className="relative grid grid-cols-5 gap-6">
              {copy.misaSteps.map((s) => (
                <StaggerItem key={s.step}>
                  <div className="group">
                    <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-dashed border-gold/40 bg-deep font-mono text-xl font-extrabold text-gold transition-colors duration-300 group-hover:border-gold/70 group-hover:bg-gold/10">
                      {s.step}
                    </span>
                    <h4 className="mt-5 text-[15px] font-extrabold leading-snug text-white">
                      {s.title}
                    </h4>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                      {s.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Mobile: stack kartu */}
          <Stagger className="mt-8 space-y-4 lg:hidden">
            {copy.misaSteps.map((s) => (
              <StaggerItem key={s.step}>
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-dashed border-gold/40 bg-gold/10 font-mono text-base font-extrabold text-gold">
                    {s.step}
                  </span>
                  <div>
                    <h4 className="text-[15px] font-extrabold text-white">
                      {s.title}
                    </h4>
                    <p className="mt-1 text-[13px] leading-relaxed text-white/60">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <OrnamentDivider />

        {/* ===== 5. MINI FAQ (native <details>, crawlable) ===== */}
        <div className="mx-auto mt-16 max-w-3xl">
          <Reveal className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold">
              {t("misaFaqEyebrow")}
            </p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {t("misaFaqTitle")}
            </h3>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 space-y-3">
            {copy.misaFaq.map((faq, i) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-white/10 bg-white/5 transition-colors duration-300 open:border-gold/40 open:bg-white/[0.07]"
              >
                <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4 [&::-webkit-details-marker]:hidden hover:bg-white/[0.04] sm:px-6">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-xs font-extrabold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-left text-[15px] font-extrabold text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className="h-4 w-4 shrink-0 text-gold transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="px-5 pb-5 pl-11 text-sm leading-relaxed text-white/65 sm:px-6 sm:pl-[3.4rem]">
                  {faq.a}
                </p>
              </details>
            ))}
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 text-center text-sm text-white/55">
              {t("misaFaqOutroPre")}{" "}
              <a
                href="#kontak"
                className="font-extrabold text-gold underline-offset-2 hover:underline"
              >
                {t("misaFaqLink")}
              </a>
              .
            </p>
          </Reveal>
        </div>

        {/* ===== 6. TRUST BAR ===== */}
        <Reveal className="mt-14">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-3xl border border-gold/20 bg-gold/5 px-6 py-5 backdrop-blur">
            {copy.trustItems.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 text-sm font-bold text-white/85"
              >
                <BadgeCheck className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
