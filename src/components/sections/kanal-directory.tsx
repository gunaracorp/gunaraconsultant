"use client";

import { ExternalLink, ShieldCheck, Workflow, ClipboardList, Building2, KeyRound, BadgeCheck } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/animations";
import { useLang } from "@/lib/i18n";
import { KANAL_PEMERINTAH } from "@/data/kanal-pemerintah";
import type { Lang } from "@/lib/i18n";

/**
 * Direktori 20 Kanal Resmi Pemerintah (v3.11.0) + alur kerja 4 langkah +
 * disclaimer kemandirian. Kelompok kanal ditarik dari kluster di data.
 */

export function KanalDirectory() {
  const { t, lang } = useLang();
  const clusters: string[] = [];
  for (const k of KANAL_PEMERINTAH) {
    if (!clusters.includes(k.cluster)) clusters.push(k.cluster);
  }
  const clusterEn = (c: string) =>
    KANAL_PEMERINTAH.find((k) => k.cluster === c)?.clusterEn ?? c;

  return (
    <section className="relative overflow-hidden py-16 sm:py-20" aria-label={t("kanalDirTitle")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={t("kanalDirKicker")} title={t("kanalDirTitle")} />
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t("kanalDirSub")}
          </p>
        </Reveal>

        {clusters.map((c, ci) => (
          <div key={c} className="mt-12">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-gold/10 px-3 py-1 font-display text-xs font-black tracking-widest text-gold">
                  {String(ci + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-bold sm:text-xl">
                  {lang === "id" ? c : clusterEn(c)}
                </h3>
                <span className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" aria-hidden="true" />
              </div>
            </Reveal>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {KANAL_PEMERINTAH.filter((k) => k.cluster === c).map((k, i) => (
                <Reveal key={k.kode} delay={0.06 * i}>
                  <article className="group flex h-full flex-col rounded-3xl border border-gold/20 bg-card p-5 shadow-lg shadow-deep/5 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/55 hover:shadow-xl hover:shadow-gold/10">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 font-display text-sm font-black text-gold transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                        {k.monogram}
                      </span>
                      <span className="font-display text-[10px] font-black tracking-widest text-muted-foreground/70">
                        {k.kode}
                      </span>
                    </div>
                    <h4 className="mt-3.5 font-display text-base font-bold leading-snug">{k.nama}</h4>
                    <p className="mt-0.5 text-xs text-muted-foreground">{k.badan}</p>
                    <p className="mt-3 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                      {lang === "id" ? k.fungsi : k.fungsiEn}
                    </p>
                    <div className="mt-4 flex items-center justify-between gap-2 border-t border-gold/15 pt-3.5">
                      <span className="rounded-full bg-deep/80 px-2.5 py-1 font-mono text-[11px] font-semibold text-gold-soft">
                        {k.domain}
                      </span>
                      <a
                        href={k.url}
                        target="_blank"
                        rel="noopener noreferrer external"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-gold transition-colors hover:text-gold-soft"
                      >
                        {t("kanalVisit")}
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const FLOW = [
  { icon: ClipboardList, tKey: "kanalFlow1T" as const, dKey: "kanalFlow1D" as const },
  { icon: Workflow, tKey: "kanalFlow2T" as const, dKey: "kanalFlow2D" as const },
  { icon: Building2, tKey: "kanalFlow3T" as const, dKey: "kanalFlow3D" as const },
  { icon: BadgeCheck, tKey: "kanalFlow4T" as const, dKey: "kanalFlow4D" as const },
];

export function KanalAlur() {
  const { t } = useLang();
  return (
    <section
      className="section-deep relative overflow-hidden border-y border-gold/20 py-16 sm:py-20"
      aria-label={t("kanalFlowTitle")}
    >
      <div className="pattern-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={t("kanalFlowKicker")} title={t("kanalFlowTitle")} dark />
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-cream/75 sm:text-base">
            {t("kanalFlowSub")}
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FLOW.map((f, i) => (
            <Reveal key={f.tKey} delay={0.08 * i}>
              <div className="group relative h-full rounded-3xl border border-gold/25 bg-deep/70 p-6 shadow-lg shadow-deep/40 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60">
                <span className="absolute right-5 top-5 font-display text-3xl font-black text-gold/15 transition-colors duration-500 group-hover:text-gold/30" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <f.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-black text-gradient-gold">
                  {t(f.tKey)}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-cream/70">{t(f.dKey)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function KanalDisclaimer() {
  const { t } = useLang();
  return (
    <Reveal>
      <aside className="mx-auto mt-14 max-w-4xl rounded-3xl border border-gold/25 bg-gold/5 p-6 sm:p-7">
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 text-gold">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h2 className="font-display text-base font-black text-gradient-gold">
              {t("kanalDiscTitle")}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t("kanalDisc")}</p>
            <p className="mt-3 flex items-center gap-2 text-xs font-bold text-gold">
              <KeyRound className="h-3.5 w-3.5" aria-hidden="true" />
              {t("kanalDiscAccount")}
            </p>
          </div>
        </div>
      </aside>
    </Reveal>
  );
}
