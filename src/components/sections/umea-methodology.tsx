"use client";

import Link from "next/link";
import {
  Compass,
  Scale,
  ShieldCheck,
  Layers,
  Users,
  FileStack,
  Gauge,
  ArrowRight,
  Quote,
  AlertTriangle,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem, SectionHeading } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import {
  UMEA_LAWS,
  UMEA_LEVELS,
  UMEA_FUNCTIONS,
  UMEA_DOC_TIERS,
  UMI_BANDS,
} from "@/data/umea";

const LAW_ICONS = [Compass, Scale, ShieldCheck];
const GROUP_LABEL: Record<string, string> = {
  DIRECTION: "Direction — Arah",
  VALUE: "Value Creation — Nilai",
  MARKET: "Market — Pasar",
  CONTROL: "Control — Kendali",
  PEOPLE: "People — Manusia",
  INTELLIGENCE: "Intelligence — Kecerdasan",
  RESILIENCE: "Resilience — Ketahanan",
};

/**
 * Halaman metodologi UMEA™ — pola visual konsisten dengan situs:
 * section terang (kartu putih card-lux + teks ink) berselang
 * pita gelap section-deep (kartu kaca bg-deep/70 + teks cream).
 */
export function UmeaMethodology() {
  const { t, lang } = useLang();
  const isId = lang === "id";

  return (
    <article>
      {/* ============ 3 HUKUM BESAR (TERANG) ============ */}
      <section className="bg-background py-20 sm:py-24" aria-labelledby="umea-laws">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker={t("metoLawKicker")}
            title={t("metoLawTitle")}
            sub={t("metoLawSub")}
          />

          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {UMEA_LAWS.map((law, i) => {
              const Icon = LAW_ICONS[i];
              return (
                <StaggerItem key={law.no}>
                  <div className="card-lux group h-full rounded-3xl p-7">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-gold-soft shadow-lg shadow-primary/25 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[11px] font-bold tracking-widest text-primary/70 uppercase">
                          HUKUM #{law.no}
                        </p>
                        <h3 className="font-display text-lg font-bold text-ink">
                          {isId ? law.titleId : law.titleEn}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-ink/75">
                      {isId ? law.lawId : law.lawEn}
                    </p>
                    <blockquote className="mt-4 flex gap-2 rounded-xl border border-gold/25 bg-gold/10 p-3.5 text-[13px] italic leading-relaxed text-ink/80">
                      <Quote className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      {law.awamId}
                    </blockquote>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ============ 6 TINGKAT ORGANISASI (PITA GELAP) ============ */}
      <section className="section-deep relative py-20 sm:py-24" aria-labelledby="umea-levels">
        <div className="pattern-lines pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker={t("metoLevelsKicker")}
            title={t("metoLevelsTitle")}
            sub={t("metoLevelsSub")}
            dark
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {UMEA_LEVELS.map((lv, i) => (
              <Reveal key={lv.id} delay={i * 0.05}>
                <div className="group h-full rounded-3xl border border-gold/25 bg-deep/70 p-7 shadow-lg shadow-deep/40 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl hover:shadow-gold/15">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-display text-xl font-black tracking-tight text-gradient-gold">
                        {lv.id} — {isId ? lv.nameId : lv.nameEn}
                      </p>
                      <p className="mt-1 text-[11px] font-bold tracking-[0.2em] text-cream/55 uppercase">
                        {lv.code}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/12 px-3.5 py-1.5 font-display text-sm font-bold text-gold-soft">
                      <Users className="h-3.5 w-3.5" aria-hidden="true" />
                      {lv.people} {t("metoLevelPeople")}
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-gold-soft/80 uppercase">
                        {t("metoLevelProfLabel")}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-cream/85">
                        {isId ? lv.profId : lv.profEn}
                      </p>
                    </div>
                    <blockquote className="flex gap-2 rounded-xl border border-gold/20 bg-black/25 p-3.5 text-[13px] italic leading-relaxed text-gold-soft/95">
                      <Quote className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      <span>
                        <span className="mb-1 block text-[10px] font-bold tracking-widest text-gold-soft/80 not-italic uppercase">
                          {t("metoLevelAwamLabel")}
                        </span>
                        {isId ? lv.awamId : lv.awamEn}
                      </span>
                    </blockquote>
                  </div>

                  <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-gold/15 pt-4 text-[13px]">
                    <div>
                      <dt className="font-semibold text-cream/50">{t("metoLevelBest")}</dt>
                      <dd className="mt-0.5 text-cream/85">{isId ? lv.bestForId : lv.bestForEn}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-cream/50">{t("metoLevelDocs")}</dt>
                      <dd className="mt-0.5 font-bold text-gold-soft">{lv.docTier}</dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 21 FUNGSI KRITIS (TERANG) ============ */}
      <section className="bg-background py-20 sm:py-24" aria-labelledby="umea-funcs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker={t("metoFuncKicker")}
            title={t("metoFuncTitle")}
            sub={t("metoFuncSub")}
          />

          <Reveal className="mt-14">
            <div className="card-lux overflow-hidden rounded-3xl">
              <div className="max-h-[620px] overflow-y-auto">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <caption className="sr-only">
                    21 fungsi kritis UMEA dengan wujud jabatan hari ini dan bahasa sehari-hari
                  </caption>
                  <thead className="sticky top-0 z-10 bg-primary/95 backdrop-blur">
                    <tr className="text-[11px] tracking-widest text-gold-soft uppercase">
                      <th scope="col" className="px-5 py-4 font-bold">
                        {t("metoFuncNo")}
                      </th>
                      <th scope="col" className="px-5 py-4 font-bold">
                        Fungsi Kritis
                      </th>
                      <th scope="col" className="px-5 py-4 font-bold">
                        {t("metoFuncRole")}
                      </th>
                      <th scope="col" className="px-5 py-4 font-bold">
                        {t("metoFuncAwamLabel")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {UMEA_FUNCTIONS.map((f, i) => (
                      <tr
                        key={f.no}
                        className={`border-b border-ink/8 transition-colors hover:bg-gold/10 ${
                          i % 2 === 1 ? "bg-gold/4" : ""
                        }`}
                      >
                        <td className="px-5 py-3.5 font-display font-bold text-primary">{f.no}</td>
                        <td className="px-5 py-3.5">
                          <span className="font-semibold text-ink">{f.fn}</span>
                          <span className="mt-0.5 block text-[11px] tracking-wide text-ink/50 uppercase">
                            {GROUP_LABEL[f.group]}
                          </span>
                        </td>
                        <td className="px-5 py-3.5 text-ink/75">{f.roleToday}</td>
                        <td className="px-5 py-3.5 text-[13px] italic text-primary/85">
                          {f.awam}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 5 TINGKAT DOKUMEN (PITA GELAP) ============ */}
      <section className="section-deep relative py-20 sm:py-24" aria-labelledby="umea-docs">
        <div className="pattern-dots pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker={t("metoDocsKicker")}
            title={t("metoDocsTitle")}
            sub={t("metoDocsSub")}
            dark
          />

          <Stagger className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {UMEA_DOC_TIERS.map((d) => (
              <StaggerItem key={d.id}>
                <div className="group flex h-full flex-col rounded-3xl border border-gold/25 bg-deep/70 p-6 shadow-lg shadow-deep/40 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-xl hover:shadow-gold/15">
                  <p className="font-display text-3xl font-black text-gradient-gold">{d.id}</p>
                  <p className="mt-1 text-[11px] font-bold tracking-widest text-cream/55 uppercase">
                    {d.docs} dokumen
                  </p>
                  <h3 className="mt-3 font-display text-base font-bold text-cream">
                    {isId ? d.nameId : d.nameEn}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-cream/75">
                    {isId ? d.descId : d.descEn}
                  </p>
                  <p className="mt-4 border-t border-gold/15 pt-3 text-xs text-cream/65">
                    <span className="font-semibold text-gold-soft/90">{t("metoDocsFor")}: </span>
                    {isId ? d.forWhomId : d.forWhomEn}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ UMI BANDS + CTA (TERANG) ============ */}
      <section className="bg-background py-20 sm:py-24" aria-labelledby="umea-umi">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker={t("metoUmiKicker")}
            title={t("metoUmiTitle")}
            sub={t("metoUmiSub")}
          />

          <Reveal className="mt-14">
            <ol className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
              {UMI_BANDS.map((b) => (
                <li
                  key={b.code}
                  className="card-lux rounded-2xl p-4 text-center transition-transform duration-500 hover:-translate-y-1"
                >
                  <p className="font-display text-xl font-black text-primary">
                    {b.min}
                    {b.max === 100 ? "+" : `–${b.max}`}
                  </p>
                  <p className="mt-1 text-xs font-bold text-ink">{isId ? b.nameId : b.nameEn}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* CTA ke /asesmen */}
          <Reveal className="mx-auto mt-16 max-w-3xl">
            <div className="ornament-frame rounded-3xl p-8 text-center sm:p-12">
              <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                {t("metoCtaTitle")}
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink/70 sm:text-base">
                {t("metoCtaSub")}
              </p>
              <Button
                asChild
                size="lg"
                className="btn-shine mt-7 rounded-full bg-primary px-8 font-bold text-gold-soft shadow-lg shadow-primary/25"
              >
                <Link href="/asesmen">
                  {t("metoCtaBtn")}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal className="mx-auto mt-10 max-w-3xl">
            <p className="flex gap-2.5 rounded-2xl border border-gold/40 bg-gold/10 p-4 text-[12px] leading-relaxed text-ink/70">
              <AlertTriangle className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              {t("metoDisclaimer")}
            </p>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
