"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Brain,
  Cpu,
  Landmark,
  ShieldCheck,
  Type,
  Palette,
  Waves,
  Layers,
  LayoutGrid,
  MousePointerClick,
  MessagesSquare,
} from "lucide-react";
import { SectionHeading } from "@/components/animations";
import { useLang, type UIKey } from "@/lib/i18n";

/**
 * Panggung Role Activation (v3.11.0) — empat peran master menyala berurutan,
 * disusul 7 grup fungsi 46 Dewan Pakar dan 7 lapis design. Sequencer berbasis
 * useInView + timer bertingkat; seluruh gerak pakai CSS/framer yang sudah ada.
 */

const ROLES: {
  nameKey: UIKey;
  descKey: UIKey;
  icon: typeof Brain;
  mono: string;
}[] = [
  { nameKey: "kanalRole1Name", descKey: "kanalRole1Desc", icon: Brain, mono: "MP" },
  { nameKey: "kanalRole2Name", descKey: "kanalRole2Desc", icon: Cpu, mono: "PT" },
  { nameKey: "kanalRole3Name", descKey: "kanalRole3Desc", icon: Landmark, mono: "SU" },
  { nameKey: "kanalRole4Name", descKey: "kanalRole4Desc", icon: ShieldCheck, mono: "UP" },
];

const GRUPS: UIKey[] = [
  "kanalGrp1",
  "kanalGrp2",
  "kanalGrp3",
  "kanalGrp4",
  "kanalGrp5",
  "kanalGrp6",
  "kanalGrp7",
];

const LAPIS: { icon: typeof Brain; key: UIKey }[] = [
  { icon: Type, key: "kanalLapis1" },
  { icon: Palette, key: "kanalLapis2" },
  { icon: Waves, key: "kanalLapis3" },
  { icon: Layers, key: "kanalLapis4" },
  { icon: LayoutGrid, key: "kanalLapis5" },
  { icon: MousePointerClick, key: "kanalLapis6" },
  { icon: MessagesSquare, key: "kanalLapis7" },
];

export function KanalActivation() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  // step: 0 = belum mulai; 1..4 = peran ke-i aktif; 5 = dewan; 6 = lapis design
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timers: number[] = [];
    for (let i = 1; i <= 6; i++) {
      timers.push(window.setTimeout(() => setStep(i), i * 800));
    }
    return () => timers.forEach((tm) => window.clearTimeout(tm));
  }, [inView]);

  return (
    <section
      className="section-deep relative overflow-hidden border-y border-gold/20 py-16 sm:py-20"
      aria-label={t("kanalRolesTitle")}
    >
      <div className="pattern-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading kicker={t("kanalRolesKicker")} title={t("kanalRolesTitle")} dark />
        <RevealText text={t("kanalRolesSub")} />

        {/* Garis rel penghubung antar peran */}
        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[68px] hidden h-0.5 rounded bg-gold/15 lg:block"
          >
            <div
              className="h-full rounded bg-gradient-to-r from-gold/70 via-gold-soft to-gold/70 transition-all duration-700 ease-out"
              style={{ width: `${Math.min(step, 4) * 25}%` }}
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ROLES.map((r, i) => {
              const active = step > i;
              return (
                <div
                  key={r.nameKey}
                  className={`relative flex flex-col items-center rounded-3xl border p-6 text-center backdrop-blur transition-all duration-700 ${
                    active
                      ? "border-gold/60 bg-deep/80 shadow-xl shadow-gold/15 -translate-y-1"
                      : "border-gold/20 bg-deep/50"
                  }`}
                >
                  {/* Lencana nomor */}
                  <span
                    className="absolute left-4 top-4 font-display text-xs font-black tracking-widest text-gold/50"
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>

                  {/* Emblem: cincin putus-putus berputar + ikon yang menyala */}
                  <span className="relative mt-2 flex h-[88px] w-[88px] items-center justify-center">
                    <span
                      aria-hidden="true"
                      className={`absolute inset-0 rounded-full border-2 border-dashed transition-colors duration-700 ${
                        active ? "border-gold/60 animate-[spin_12s_linear_infinite]" : "border-gold/20"
                      }`}
                    />
                    <span
                      aria-hidden="true"
                      className={`absolute inset-2 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,var(--color-gold)_355deg,transparent_360deg)] transition-opacity duration-700 ${
                        active ? "animate-[spin_3.2s_linear_infinite] opacity-90" : "opacity-0"
                      }`}
                    />
                    <span
                      className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-700 ${
                        active
                          ? "scale-110 border-gold/70 bg-gold/15 text-gold shadow-lg shadow-gold/30"
                          : "border-gold/25 bg-gold/5 text-cream/40"
                      }`}
                    >
                      <r.icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                  </span>

                  <h3 className="mt-4 font-display text-base font-black tracking-wide text-gradient-gold">
                    {t(r.nameKey)}
                  </h3>
                  <p className="mt-2 min-h-[72px] text-[13px] leading-relaxed text-cream/70">
                    {t(r.descKey)}
                  </p>

                  {/* Pil status STANDBY → AKTIF */}
                  <span
                    aria-live="polite"
                    className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-black tracking-[0.18em] transition-all duration-500 ${
                      active
                        ? "bg-gold/20 text-gold-soft ring-1 ring-gold/50"
                        : "bg-cream/5 text-cream/40"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${
                        active ? "bg-gold animate-pulse" : "bg-cream/40"
                      }`}
                    />
                    {active ? t("kanalActive") : t("kanalStandby")}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 46 Dewan Pakar — 7 grup fungsi menyala setelah peran lengkap */}
        <div
          className={`mt-12 rounded-3xl border p-6 transition-all duration-700 sm:p-8 ${
            step >= 5 ? "border-gold/40 bg-deep/70" : "border-gold/15 bg-deep/40"
          }`}
        >
          <h3 className="text-center font-display text-lg font-black text-gradient-gold sm:text-xl">
            {t("kanalCouncilTitle")}
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm leading-relaxed text-cream/70">
            {t("kanalCouncilSub")}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {GRUPS.map((g, i) => (
              <span
                key={g}
                className={`rounded-full border px-4 py-2 text-xs font-bold transition-all duration-500 ${
                  step >= 5
                    ? "border-gold/50 bg-gold/10 text-gold-soft shadow-md shadow-gold/10"
                    : "border-gold/15 bg-transparent text-cream/35"
                }`}
                style={{ transitionDelay: step >= 5 ? `${i * 110}ms` : "0ms" }}
              >
                {t(g)}
              </span>
            ))}
          </div>
        </div>

        {/* 7 Lapis Design Terbaik Dunia */}
        <div className="mt-8">
          <h3 className="text-center font-display text-lg font-black text-gradient-gold sm:text-xl">
            {t("kanalLapisTitle")}
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm leading-relaxed text-cream/70">
            {t("kanalLapisSub")}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {LAPIS.map((l, i) => (
              <div
                key={l.key}
                className={`flex flex-col items-center gap-2 rounded-2xl border px-3 py-4 text-center transition-all duration-500 ${
                  step >= 6
                    ? "border-gold/35 bg-deep/70 translate-y-0 opacity-100"
                    : "border-gold/10 bg-deep/40 translate-y-2 opacity-40"
                }`}
                style={{ transitionDelay: step >= 6 ? `${i * 90}ms` : "0ms" }}
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors duration-500 ${
                    step >= 6 ? "bg-gold/15 text-gold" : "bg-cream/5 text-cream/40"
                  }`}
                >
                  <l.icon className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <span className="text-[11px] font-bold leading-tight text-cream/80">
                  {t(l.key)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Paragraf pembuka section (dipisah agar Reveal bisa dipakai di sini tanpa siklus import). */
function RevealText({ text }: { text: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-cream/75 sm:text-base"
    >
      {text}
    </motion.p>
  );
}
