"use client";

import { motion } from "framer-motion";
import {
  SectionHeading,
  Stagger,
  StaggerItem,
} from "@/components/ui-custom/animated";
import { AnimatedCounter } from "@/components/ui-custom/counter";
import { DynamicIcon } from "@/components/ui-custom/icon";
import { PROCESS_STEPS, HERO_STATS } from "@/lib/data";

export function Process() {
  return (
    <section
      id="proses"
      className="relative overflow-hidden bg-deep py-24 sm:py-28 noise-overlay"
      aria-label="Proses kerja Gunara Consultant"
    >
      <div
        className="absolute left-1/2 top-0 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[130px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          dark
          eyebrow="Proses Kerja"
          title="5 Langkah Menuju"
          highlight="Izin Terbit"
          description="Alur kerja terstandar ISO 9001:2015 — setiap tahap punya checkpoint mutu dan pelaporan yang jelas, sehingga Anda selalu tahu posisi pengurusan Anda."
        />

        {/* Timeline desktop */}
        <div className="relative mt-16 hidden lg:block">
          <svg
            className="absolute left-0 right-0 top-[52px] h-8 w-full"
            aria-hidden="true"
          >
            <line
              x1="4%"
              y1="16"
              x2="96%"
              y2="16"
              stroke="url(#process-line)"
              strokeWidth="2.5"
              strokeDasharray="8 6"
              className="animate-dash"
            />
            <defs>
              <linearGradient id="process-line" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#f5c94c" />
                <stop offset="50%" stopColor="#108a5f" />
                <stop offset="100%" stopColor="#f5c94c" />
              </linearGradient>
            </defs>
          </svg>
          <Stagger className="grid grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step) => (
              <StaggerItem key={step.step}>
                <motion.div whileHover={{ y: -8 }} className="group text-center">
                  <div className="relative mx-auto flex h-[104px] w-[104px] items-center justify-center">
                    <span className="absolute inset-0 rounded-full border-2 border-dashed border-gold/30 transition-transform duration-700 group-hover:rotate-45" />
                    <span className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-white/15 bg-white/8 backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:bg-gold/15">
                      <DynamicIcon name={step.icon} className="h-8 w-8 text-gold" />
                    </span>
                    <span className="absolute -right-1 -top-1 flex h-9 w-9 items-center justify-center rounded-full bg-gold text-sm font-extrabold text-gold-foreground shadow-lg">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-extrabold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                    {step.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Timeline mobile */}
        <Stagger className="mt-12 space-y-6 lg:hidden">
          {PROCESS_STEPS.map((step) => (
            <StaggerItem key={step.step}>
              <div className="relative flex gap-5 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="relative flex flex-col items-center">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold/15">
                    <DynamicIcon name={step.icon} className="h-7 w-7 text-gold" />
                  </span>
                  <span className="mt-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-extrabold text-gold-foreground">
                    {step.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Statistik strip */}
        <Stagger className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {HERO_STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur transition-all duration-300 hover:border-gold/40 hover:bg-white/10">
                <p className="text-3xl font-extrabold text-gradient-gold sm:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white/55">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
