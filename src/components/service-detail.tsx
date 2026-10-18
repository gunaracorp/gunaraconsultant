"use client";

import {
  Award,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  FileText,
  Globe2,
  Landmark,
  ListChecks,
  PhoneCall,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/animations";
import { useLang } from "@/lib/i18n";
import { BRAND, waLink } from "@/lib/brand";
import { CATEGORIES, type Service } from "@/data/services";

export function ServiceDetail({ service }: { service: Service }) {
  const { t, lang } = useLang();
  const name = lang === "id" ? service.nameId : service.nameEn;
  const category = CATEGORIES.find((c) => c.id === service.cat);

  const waText =
    lang === "id"
      ? `Halo ${BRAND.name}, saya tertarik dengan layanan "${service.nameId}". Mohon informasi lebih lanjut.`
      : `Hello ${BRAND.name}, I'm interested in the "${service.nameEn}" service. Please share more details.`;

  return (
    <article className="bg-background">
      {/* Hero header */}
      <header className="section-deep relative overflow-hidden pt-32 pb-16">
        <div className="pattern-dots absolute inset-0" aria-hidden="true" />
        <div className="pointer-events-none absolute -top-24 right-[-6rem] h-80 w-80 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-cream/60">
              <li>
                <Link href="/" className="transition-colors hover:text-gold-soft">
                  {t("spBreadcrumbHome")}
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li>
                <Link href="/#layanan" className="transition-colors hover:text-gold-soft">
                  {t("spBreadcrumbServices")}
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li aria-current="page" className="font-semibold text-gold-soft">
                {name}
              </li>
            </ol>
          </nav>

          <Reveal>
            {category ? (
              <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-gold-soft uppercase">
                <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                {lang === "id" ? category.nameId : category.nameEn}
              </p>
            ) : null}
            <h1 className="mt-5 max-w-4xl font-display text-3xl leading-tight font-bold text-cream sm:text-4xl lg:text-5xl">
              {name}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-cream/80 sm:text-lg">
              {lang === "id" ? service.shortId : service.shortEn}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-white/5 px-4 py-2 text-xs font-bold text-cream/85">
                <Clock3 className="h-4 w-4 text-gold" aria-hidden="true" />
                {t("spDuration")}: {lang === "id" ? service.durationId : service.durationEn}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-white/5 px-4 py-2 text-xs font-bold text-cream/85">
                <Wallet className="h-4 w-4 text-gold" aria-hidden="true" />
                {t("spPrice")}: {service.priceFrom}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-bold text-gold-soft">
                <Globe2 className="h-4 w-4" aria-hidden="true" />
                {t("spArea")}
              </span>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_.65fr]">
          <div className="space-y-12">
            {/* Description */}
            <Reveal>
              <section aria-labelledby="svc-desc">
                <h2 id="svc-desc" className="font-display text-2xl font-bold text-ink">
                  {lang === "id" ? "Tentang Layanan Ini" : "About This Service"}
                </h2>
                <div className="gold-divider mt-4 w-28" />
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  {lang === "id" ? service.descId : service.descEn}
                </p>
              </section>
            </Reveal>

            {/* Benefits */}
            <Reveal>
              <section aria-labelledby="svc-benefits">
                <h2 id="svc-benefits" className="flex items-center gap-3 font-display text-2xl font-bold text-ink">
                  <Award className="h-6 w-6 text-gold" aria-hidden="true" />
                  {t("spBenefits")}
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {(lang === "id" ? service.benefitsId : service.benefitsEn).map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 rounded-2xl border border-border bg-card p-4 text-sm leading-relaxed text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            {/* Requirements */}
            <Reveal>
              <section aria-labelledby="svc-req">
                <h2 id="svc-req" className="flex items-center gap-3 font-display text-2xl font-bold text-ink">
                  <FileText className="h-6 w-6 text-gold" aria-hidden="true" />
                  {t("spReq")}
                </h2>
                <ul className="mt-5 space-y-3">
                  {(lang === "id" ? service.reqId : service.reqEn).map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <ListChecks className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            {/* Steps */}
            <Reveal>
              <section aria-labelledby="svc-steps">
                <h2 id="svc-steps" className="flex items-center gap-3 font-display text-2xl font-bold text-ink">
                  <ListChecks className="h-6 w-6 text-gold" aria-hidden="true" />
                  {t("spSteps")}
                </h2>
                <ol className="mt-5 space-y-4">
                  {(lang === "id" ? service.stepsId : service.stepsEn).map((step, i) => (
                    <li key={step} className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-black text-gold-soft">
                        {i + 1}
                      </span>
                      <p className="pt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </section>
            </Reveal>

            {/* FAQ */}
            <Reveal>
              <section aria-labelledby="svc-faq">
                <h2 id="svc-faq" className="font-display text-2xl font-bold text-ink">
                  {t("spFaq")}
                </h2>
                <div className="mt-5 space-y-3">
                  {service.faq.map((f, i) => (
                    <details key={i} className="card-lux group rounded-2xl px-5" open={i === 0}>
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-sm font-bold text-ink transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                        {lang === "id" ? f.qId : f.qEn}
                        <ChevronDown
                          className="h-4.5 w-4.5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-180"
                          aria-hidden="true"
                        />
                      </summary>
                      <p className="pb-4 text-sm leading-relaxed text-muted-foreground">
                        {lang === "id" ? f.aId : f.aEn}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal delay={0.1}>
              <div className="card-lux rounded-3xl p-7">
                <p className="text-[11px] font-black tracking-[0.25em] text-primary/60 uppercase">
                  {t("spPrice")}
                </p>
                <p className="mt-2 font-display text-3xl font-black text-gradient-gold">
                  {service.priceFrom}
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
                  <Clock3 className="h-4 w-4 text-gold" aria-hidden="true" />
                  {t("spDuration")}: {lang === "id" ? service.durationId : service.durationEn}
                </p>

                <Button
                  asChild
                  className="btn-shine mt-6 h-12 w-full rounded-full bg-gold font-black text-deep shadow-lg shadow-gold/25 hover:scale-[1.02]"
                >
                  <a href={waLink(waText)} target="_blank" rel="noopener noreferrer">
                    <PhoneCall className="h-5 w-5" aria-hidden="true" />
                    {t("spDiscuss")}
                  </a>
                </Button>

                <ul className="mt-6 space-y-2.5 border-t border-border pt-5 text-xs font-semibold text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-gold" aria-hidden="true" />
                    {t("spGuarantee")}
                  </li>
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-gold" aria-hidden="true" />
                    {t("spOfficial")}
                  </li>
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-gold" aria-hidden="true" />
                    {t("spSupport")}
                  </li>
                </ul>

                <div className="mt-6 rounded-2xl border border-gold/30 bg-secondary p-4">
                  <p className="flex items-start gap-2 text-[11px] leading-relaxed font-semibold text-primary/80">
                    <Landmark className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    {t("spTrust")}
                  </p>
                </div>

                <div className="mt-4 rounded-2xl border border-border bg-muted/50 p-4">
                  <p className="text-[11px] font-black tracking-[0.2em] text-primary/60 uppercase">
                    {t("spArea")}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {t("spAreaD")}
                  </p>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </article>
  );
}

export function RelatedServices({ services }: { services: Service[] }) {
  const { t, lang } = useLang();
  if (services.length === 0) return null;

  return (
    <section className="section-deep relative overflow-hidden py-16" aria-label="Layanan terkait">
      <div className="pattern-lines absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-cream sm:text-3xl">
            {t("spRelated")}
          </h2>
          <div className="gold-divider mt-4 w-32" />
        </Reveal>
        <Stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <StaggerItem key={s.slug}>
              <Link
                href={`/layanan/${s.slug}`}
                className="card-lux group flex h-full flex-col rounded-3xl p-6"
              >
                <h3 className="font-display text-base leading-snug font-bold text-ink">
                  {lang === "id" ? s.nameId : s.nameEn}
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                  {lang === "id" ? s.shortId : s.shortEn}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-gold transition-all group-hover:gap-2.5">
                  {t("svcView")} <span aria-hidden="true">→</span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
