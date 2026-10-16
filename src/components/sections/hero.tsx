"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, PlayCircle, Sparkles, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui-custom/counter";
import { DynamicIcon } from "@/components/ui-custom/icon";
import { EASE } from "@/components/ui-custom/animated";
import { HERO_STATS, HERO_FLOAT_CARDS, SITE } from "@/lib/data";

/* Posisi partikel deterministik (hindari hydration mismatch) */
const PARTICLES = [
  { left: "8%", top: "18%", size: 5, delay: 0, dur: 7 },
  { left: "16%", top: "62%", size: 3, delay: 1.2, dur: 8 },
  { left: "24%", top: "34%", size: 4, delay: 0.6, dur: 9 },
  { left: "38%", top: "12%", size: 3, delay: 2, dur: 7.5 },
  { left: "52%", top: "70%", size: 5, delay: 0.3, dur: 8.5 },
  { left: "64%", top: "22%", size: 3, delay: 1.6, dur: 7 },
  { left: "76%", top: "58%", size: 4, delay: 0.9, dur: 9.5 },
  { left: "86%", top: "30%", size: 3, delay: 2.4, dur: 8 },
  { left: "92%", top: "66%", size: 5, delay: 0.4, dur: 7.8 },
  { left: "44%", top: "84%", size: 3, delay: 1.8, dur: 8.2 },
  { left: "70%", top: "88%", size: 4, delay: 2.8, dur: 7.4 },
  { left: "30%", top: "78%", size: 3, delay: 3.1, dur: 8.8 },
] as const;

const HEADLINE_LINES = [
  { before: "Segala", gold: "Perizinan", after: "Usaha Anda," },
  { before: "Kami Yang", gold: "Urus.", after: "" },
] as const;

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-deep noise-overlay"
      aria-label="Beranda Gunara Consultant"
    >
      {/* ===== Background animasi ===== */}
      <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden="true" />
      <div
        className="absolute -left-40 top-[-10%] h-[34rem] w-[34rem] rounded-full bg-primary/35 blur-[110px] animate-orb"
        aria-hidden="true"
      />
      <div
        className="absolute -right-40 bottom-[-15%] h-[30rem] w-[30rem] rounded-full bg-gold/25 blur-[120px] animate-orb-alt"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-1/3 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-emerald-300/10 blur-[100px] animate-orb"
        aria-hidden="true"
      />
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-gold/70"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{ y: [0, -26, 0], opacity: [0.25, 0.9, 0.25] }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        />
      ))}

      {/* ===== Konten ===== */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 sm:px-6 pt-36 pb-16 lg:pt-44">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Kiri: teks */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            >
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-gold sm:text-[13px]">
                  <Sparkles className="h-4 w-4 animate-glow" aria-hidden="true" />
                  Bernaung di Mic Kinsey sejak {SITE.founded}
                </span>
                <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-300 sm:text-[13px]">
                  <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                  Berbadan Hukum 2024 • ISO 9001:2015
                </span>
              </div>
            </motion.div>

            {/* Headline dengan word-reveal */}
            <h1 className="mt-7 text-[2.6rem] leading-[1.06] sm:text-6xl lg:text-[4.4rem] font-extrabold tracking-tight text-white">
              {HEADLINE_LINES.map((line, li) => (
                <span key={li} className="block overflow-hidden pb-1">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.45 + li * 0.18, ease: EASE }}
                  >
                    {line.before}{" "}
                    <span className="text-gradient-gold">{line.gold}</span>
                    {line.after && ` ${line.after}`}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95, ease: EASE }}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
            >
              <strong className="text-white">Gunara Consultant</strong> — sejak {" "}
              {SITE.founded} kami menyerap standar konsultansi kelas dunia di bawah
              naungan <strong className="text-white">Mic Kinsey</strong>, kini resmi
              berbadan hukum 2024 sebagai <strong className="text-white">PT TOP
              KONSULTAN INTERNASIONAL</strong> (AHU Kemenkumham RI). Lebih dari{" "}
              <span className="text-gold font-semibold">500+ layanan perizinan</span>{" "}
              dalam satu pintu — bagian dari grup pusatperizinan.com. Cepat, resmi,
              transparan, bergaransi 100%.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="group h-14 rounded-full bg-gold px-8 text-base font-extrabold text-gold-foreground shadow-xl shadow-gold/25 transition-all hover:shadow-gold/40 hover:-translate-y-0.5"
              >
                <a href="#kontak">
                  Konsultasi Gratis Sekarang
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-white/25 bg-white/5 px-8 text-base font-bold text-white backdrop-blur transition-all hover:bg-white/10 hover:border-gold/50"
              >
                <a href="#layanan">
                  <PlayCircle className="mr-2 h-5 w-5 text-gold" />
                  Jelajahi Layanan
                </a>
              </Button>
            </motion.div>

            {/* Statistik */}
            <motion.dl
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.3, ease: EASE }}
              className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4"
            >
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="border-l-2 border-gold/40 pl-4">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-extrabold text-white sm:text-[1.7rem]">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </dd>
                  <dd className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-white/55">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Kanan: floating cards */}
          <div className="relative hidden min-h-[420px] lg:block" aria-hidden="true">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 1.15, ease: EASE }}
              className="absolute right-6 top-2 w-72 animate-floaty"
            >
              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/20">
                    <DynamicIcon name="zap" className="h-6 w-6 text-gold" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">NIB Terbit</p>
                    <p className="text-xl font-extrabold text-gold">1 Hari Kerja</p>
                  </div>
                </div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-gold to-amber-200"
                    animate={{ width: ["12%", "96%", "12%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                <p className="mt-2.5 text-xs text-white/60">via OSS — BKPM RI</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 1.35, ease: EASE }}
              className="absolute left-0 top-44 w-80 animate-floaty-slow"
            >
              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/20">
                    <DynamicIcon name="building" className="h-6 w-6 text-gold" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">Pendirian PT</p>
                    <p className="text-xl font-extrabold text-gold">3 Hari Kerja</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1.5">
                  {[1, 2, 3, 4].map((n) => (
                    <motion.span
                      key={n}
                      className="h-2 w-2 rounded-full bg-gold"
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        delay: n * 0.3,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                  <span className="ml-2 text-xs text-white/60">
                    Notaris → AHU → OSS
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.55, ease: EASE }}
              className="absolute bottom-2 right-14 w-72 animate-floaty"
            >
              <div className="flex items-center gap-4 rounded-3xl border border-emerald-300/30 bg-gradient-to-br from-emerald-400/25 to-emerald-400/5 p-5 shadow-2xl backdrop-blur-xl">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-emerald-300/60">
                  <DynamicIcon name="file-check" className="h-7 w-7 text-emerald-300" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-extrabold text-white">
                    Sertifikat AHU
                  </p>
                  <p className="truncate font-mono text-xs font-bold text-emerald-300">
                    {SITE.ahucert}
                  </p>
                  <p className="text-[11px] text-white/65">
                    Kemenkumham RI • 11 Juli 2024
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Cincin ISO dekoratif */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.7 }}
              className="absolute -left-8 bottom-16 h-28 w-28"
            >
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-gold/40 animate-spin-slow" />
              <div className="absolute inset-3 flex items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur">
                <span className="text-center text-[10px] font-extrabold leading-tight text-gold">
                  ISO
                  <br />
                  9001
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#tentang"
        aria-label="Gulir ke bawah"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur"
        >
          <ChevronDown className="h-5 w-5 text-gold" />
        </motion.div>
      </motion.a>

      {/* Wave divider */}
      <AnimatePresence>
        <motion.svg
          viewBox="0 0 1440 90"
          className="absolute bottom-0 left-0 right-0 z-[5] h-[60px] w-full text-background"
          preserveAspectRatio="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,90L0,90Z"
          />
        </motion.svg>
      </AnimatePresence>
    </section>
  );
}
