"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Gauge,
  ShieldAlert,
  ShieldCheck,
  FileStack,
  RotateCcw,
  MessageCircle,
  Lock,
  Trophy,
  TrendingDown,
} from "lucide-react";
import { Reveal } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import { BRAND, waLink } from "@/lib/brand";
import { trackEvent } from "@/components/analytics";
import {
  UMEA_QUESTIONS,
  UMEA_SCALE,
  UMEA_LEVELS,
  scoreUmea,
  type UmeaResult,
} from "@/data/umea";

type Step = "intro" | "quiz" | "result";

/**
 * Mesin asesmen UMEA Maturity Index™ — pola visual terang situs
 * (kartu putih card-lux + teks ink) dengan aksen emerald-gold.
 * Seluruh skor dihitung di perangkat pengguna (privasi penuh).
 */
export function UmeaAssessment() {
  const { t, lang } = useLang();
  const isId = lang === "id";

  const [step, setStep] = useState<Step>("intro");
  const [people, setPeople] = useState<number>(3);
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const result: UmeaResult | null = useMemo(
    () => (step === "result" ? scoreUmea(answers, people) : null),
    [step, answers, people]
  );

  const q = UMEA_QUESTIONS[idx];
  const total = UMEA_QUESTIONS.length;
  const progress = step === "quiz" ? ((idx + 1) / total) * 100 : step === "result" ? 100 : 0;

  function pick(value: number) {
    setAnswers((prev) => ({ ...prev, [q.id]: value }));
    if (idx < total - 1) {
      setIdx(idx + 1);
    } else {
      setStep("result");
      // S7 — event konversi: asesmen selesai
      const r = scoreUmea({ ...answers, [q.id]: value }, people);
      trackEvent("view_item", {
        item_id: "umea-assessment",
        item_name: `UMI ${r.umi} — ${r.level.id}`,
        value: r.umi,
      });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function restart() {
    setStep("intro");
    setIdx(0);
    setAnswers({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startAssessment() {
    // S7 — event konversi: mulai asesmen
    trackEvent("begin_checkout", { item_id: "umea-assessment" });
    setStep("quiz");
  }

  function sendResult() {
    // S8 — event konversi: lead WhatsApp dari asesmen
    trackEvent("generate_lead", {
      item_id: "umea-assessment",
      value: result?.umi ?? 0,
      currency: "IDR",
    });
  }

  const waMessage = result
    ? isId
      ? `Halo ${BRAND.name}, saya baru menyelesaikan Asesmen UMEA™ (v2.0):\n\n• Skor UMI: ${result.umi}/100 (${isId ? result.band.nameId : result.band.nameEn})\n• Tingkat: ${result.level.id} — ${result.level.nameId}\n• Rekomendasi dokumen: ${result.docs.id}\n• Titik terlemah: ${result.weakest.map((w) => w.dim).join(", ")}\n\nMohon bantuan menyusun rencana naik tingkat. Terima kasih.`
      : `Hello ${BRAND.name}, I just completed the UMEA™ Assessment (v2.0):\n\n• UMI Score: ${result.umi}/100 (${result.band.nameEn})\n• Level: ${result.level.id} — ${result.level.nameEn}\n• Recommended documents: ${result.docs.id}\n• Weakest points: ${result.weakest.map((w) => w.dim).join(", ")}\n\nPlease help me build a level-up plan. Thank you.`
    : "";

  /* ---------- INTRO ---------- */
  if (step === "intro") {
    return (
      <section className="bg-background py-16 sm:py-20" aria-labelledby="asm-intro">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="card-lux rounded-3xl p-7 sm:p-10">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] text-primary uppercase">
                <Gauge className="h-4 w-4" aria-hidden="true" />
                {t("pgAsmKicker")}
              </p>
              <p className="mt-5 text-base leading-relaxed text-ink/75">{t("asmIntro")}</p>

              <div className="mt-8">
                <label
                  htmlFor="asm-people"
                  className="block font-display text-lg font-bold text-ink"
                >
                  {t("asmPeopleLabel")}
                </label>
                <input
                  id="asm-people"
                  type="number"
                  min={1}
                  max={10000}
                  inputMode="numeric"
                  value={people}
                  onChange={(e) => setPeople(Math.max(1, Number(e.target.value) || 1))}
                  aria-describedby="asm-people-hint"
                  className="mt-3 w-36 rounded-xl border border-primary/30 bg-white px-4 py-3 font-display text-2xl font-black text-primary outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/40"
                />
                <p id="asm-people-hint" className="mt-2 text-xs text-ink/55">
                  {t("asmPeopleHint")}
                </p>
              </div>

              <Button
                size="lg"
                onClick={startAssessment}
                className="btn-shine mt-8 w-full rounded-full bg-primary py-6 font-bold text-gold-soft shadow-lg shadow-primary/25 sm:w-auto sm:px-10"
              >
                {t("asmStart")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>

              <p className="mt-6 flex items-start gap-2 text-[12px] leading-relaxed text-ink/55">
                <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
                {t("asmPrivacyNote")}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  /* ---------- QUIZ ---------- */
  if (step === "quiz") {
    return (
      <section className="bg-background py-16 sm:py-20" aria-live="polite">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {/* Progres */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-bold tracking-widest text-ink/60 uppercase">
              <span>
                {t("asmQuestion")} {idx + 1} {t("asmOf")} {total}
              </span>
              <span className="text-primary">{Math.round(progress)}%</span>
            </div>
            <div
              className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink/10"
              role="progressbar"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-gold transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="card-lux rounded-3xl p-7 sm:p-10">
            <h2 className="font-display text-xl leading-snug font-bold text-ink sm:text-2xl">
              {isId ? q.qId : q.qEn}
            </h2>

            <div
              className="mt-7 grid gap-3"
              role="radiogroup"
              aria-label={isId ? q.qId : q.qEn}
            >
              {UMEA_SCALE.map((opt) => {
                const selected = answers[q.id] === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => pick(opt.value)}
                    className={`group flex items-center justify-between gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none ${
                      selected
                        ? "border-gold bg-gold/15 shadow-md shadow-gold/10"
                        : "border-ink/12 bg-white hover:border-gold/50 hover:bg-gold/8"
                    }`}
                  >
                    <span>
                      <span className="block text-sm font-bold text-ink">
                        {isId ? opt.idId : opt.idEn}
                      </span>
                      <span className="mt-0.5 block text-xs text-ink/55">
                        {isId ? opt.descId : opt.descEn}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`font-display text-lg font-black ${
                        selected ? "text-primary" : "text-ink/25 group-hover:text-gold"
                      }`}
                    >
                      {opt.value}
                    </span>
                  </button>
                );
              })}
            </div>

            {idx > 0 && (
              <Button
                variant="ghost"
                onClick={() => setIdx(idx - 1)}
                className="mt-6 rounded-full text-ink/60 hover:bg-ink/5 hover:text-ink"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                {t("asmPrev")}
              </Button>
            )}
          </div>
        </div>
      </section>
    );
  }

  /* ---------- RESULT ---------- */
  const levelMeta = UMEA_LEVELS.find((l) => l.id === result?.level.id);
  return (
    <section className="bg-background py-16 sm:py-20" aria-labelledby="asm-result">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            id="asm-result"
            className="text-center font-display text-3xl font-bold text-ink sm:text-4xl"
          >
            {t("asmResultTitle")}
          </h2>
          <div className="gold-divider mx-auto mt-5 w-32" />
        </Reveal>

        {result && (
          <>
            {/* Skor utama — pita gelap untuk momen dramatis */}
            <Reveal delay={0.08} className="mt-10">
              <div className="section-deep relative overflow-hidden rounded-3xl p-8 text-center shadow-xl shadow-deep/30 sm:p-10">
                <div className="pattern-dots pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
                <div className="relative">
                  <p className="text-[11px] font-bold tracking-[0.25em] text-cream/70 uppercase">
                    {t("asmScoreLabel")}
                  </p>
                  <p
                    className="mt-3 font-display text-7xl font-black text-gradient-gold sm:text-8xl"
                    aria-label={`${result.umi} dari 100`}
                  >
                    {result.umi}
                    <span className="text-3xl text-cream/45">/100</span>
                  </p>
                  <dl className="mx-auto mt-6 grid max-w-xl gap-3 text-left sm:grid-cols-2">
                    <div className="rounded-xl border border-gold/25 bg-deep/70 px-4 py-3 backdrop-blur">
                      <dt className="text-[11px] font-bold tracking-widest text-cream/60 uppercase">
                        {t("asmBandLabel")}
                      </dt>
                      <dd className="mt-0.5 font-display text-lg font-bold text-gold-soft">
                        {isId ? result.band.nameId : result.band.nameEn}
                      </dd>
                    </div>
                    <div className="rounded-xl border border-gold/25 bg-deep/70 px-4 py-3 backdrop-blur">
                      <dt className="text-[11px] font-bold tracking-widest text-cream/60 uppercase">
                        {t("asmLevelLabel")}
                      </dt>
                      <dd className="mt-0.5 font-display text-lg font-bold text-gold-soft">
                        {result.level.id} — {isId ? result.level.nameId : result.level.nameEn}
                      </dd>
                    </div>
                  </dl>
                  {levelMeta && (
                    <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-cream/80">
                      {isId ? levelMeta.tagId : levelMeta.tagEn} ·{" "}
                      {isId ? levelMeta.bestForId : levelMeta.bestForEn}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {/* Terlemah */}
              <Reveal delay={0.12}>
                <div className="card-lux h-full rounded-3xl border-l-4 border-l-red-400 p-6 sm:p-7">
                  <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
                    <TrendingDown className="h-5 w-5 text-red-500" aria-hidden="true" />
                    {t("asmWeakLabel")}
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {result.weakest.map((w, i) => (
                      <li key={w.dim} className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 font-display text-xs font-black text-red-600"
                        >
                          {i + 1}
                        </span>
                        <span className="flex-1 text-sm font-semibold text-ink/90">{w.dim}</span>
                        <span
                          className="h-1.5 w-20 overflow-hidden rounded-full bg-ink/10 sm:w-24"
                          aria-hidden="true"
                        >
                          <span
                            className="block h-full rounded-full bg-red-400"
                            style={{ width: `${Math.max(6, w.ratio)}%` }}
                          />
                        </span>
                        <span className="w-10 text-right text-xs font-bold text-ink/60">
                          {w.ratio}%
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Kekuatan */}
              <Reveal delay={0.16}>
                <div className="card-lux h-full rounded-3xl border-l-4 border-l-emerald-500 p-6 sm:p-7">
                  <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
                    <Trophy className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                    {t("asmStrongLabel")}
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {result.strengths.map((s) => (
                      <li key={s.dim} className="flex items-center gap-3">
                        <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                        <span className="flex-1 text-sm font-semibold text-ink/90">{s.dim}</span>
                        <span
                          className="h-1.5 w-20 overflow-hidden rounded-full bg-ink/10 sm:w-24"
                          aria-hidden="true"
                        >
                          <span
                            className="block h-full rounded-full bg-emerald-500"
                            style={{ width: `${Math.max(6, s.ratio)}%` }}
                          />
                        </span>
                        <span className="w-10 text-right text-xs font-bold text-ink/60">
                          {s.ratio}%
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Dokumen direkomendasikan */}
            <Reveal delay={0.2} className="mt-8">
              <div className="card-lux rounded-3xl p-7 sm:p-9">
                <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
                  <FileStack className="h-5 w-5 text-gold" aria-hidden="true" />
                  {t("asmDocsLabel")}
                </h3>
                <p className="mt-4 font-display text-3xl font-black text-primary">
                  {result.docs.id}{" "}
                  <span className="text-base font-bold text-ink/65">
                    · {result.docs.docs} {isId ? "dokumen" : "documents"} —{" "}
                    {isId ? result.docs.nameId : result.docs.nameEn}
                  </span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  {isId ? result.docs.descId : result.docs.descEn}
                </p>
              </div>
            </Reveal>

            {/* CTA WhatsApp */}
            <Reveal delay={0.24} className="mt-8">
              <div className="ornament-frame rounded-3xl p-7 text-center sm:p-10">
                <ShieldAlert className="mx-auto h-9 w-9 text-primary" aria-hidden="true" />
                <h3 className="mt-3 font-display text-2xl font-bold text-ink">
                  {t("asmWaTitle")}
                </h3>
                <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-ink/70">
                  {t("asmWaSub")}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="btn-shine mt-6 rounded-full bg-primary px-8 font-bold text-gold-soft shadow-lg shadow-primary/25"
                >
                  <a
                    href={waLink(waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={sendResult}
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    {t("asmWaBtn")}
                  </a>
                </Button>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                  <Button
                    variant="ghost"
                    onClick={restart}
                    className="rounded-full text-ink/60 hover:bg-ink/5 hover:text-ink"
                  >
                    <RotateCcw className="h-4 w-4" aria-hidden="true" />
                    {t("asmRestart")}
                  </Button>
                  <Link
                    href="/metodologi"
                    className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    {t("navMetodologi")} →
                  </Link>
                </div>
              </div>
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}
