"use client";

import { motion } from "framer-motion";
import { Check, X, Crown } from "lucide-react";
import {
  SectionHeading,
  Stagger,
  StaggerItem,
  Reveal,
} from "@/components/ui-custom/animated";
import { DynamicIcon } from "@/components/ui-custom/icon";
import { WHY_US, COMPARISON } from "@/lib/data";

export function WhyUs() {
  return (
    <section
      id="keunggulan"
      className="relative overflow-hidden py-24 sm:py-28"
      aria-label="Keunggulan Gunara Consultant"
    >
      <div
        className="absolute right-[-10%] bottom-20 h-96 w-96 rounded-full bg-secondary blur-[130px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Mengapa Gunara"
          title="Standar yang Membuat Kami"
          highlight="Melampaui Kompetitor"
          description="Kami tidak sekadar mengurus izin — kami membangun sistem layanan bersertifikasi internasional yang menjamin hasil untuk setiap klien."
        />

        {/* Grid keunggulan */}
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, i) => (
            <StaggerItem key={item.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`group relative h-full overflow-hidden rounded-3xl border p-6 transition-shadow duration-300 ${
                  i === 4
                    ? "border-gold/50 bg-gradient-to-br from-gold-soft/80 via-card to-card shadow-lg shadow-gold/10"
                    : "border-border bg-card hover:shadow-xl hover:shadow-primary/10"
                }`}
              >
                <div
                  className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-secondary transition-transform duration-500 group-hover:scale-[1.8]"
                  aria-hidden="true"
                />
                <div className="relative">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-6">
                    <DynamicIcon name={item.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Tabel perbandingan */}
        <Reveal className="mt-16" y={40}>
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-2xl shadow-primary/5">
            <div className="grid grid-cols-2 bg-deep text-white">
              <div className="flex items-center gap-3 p-5 sm:p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/20">
                  <Crown className="h-5 w-5 text-gold" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-base sm:text-lg font-extrabold">{COMPARISON.us.name}</p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-gold">
                    Pilihan Terbaik
                  </p>
                </div>
              </div>
              <div className="border-l border-white/10 p-5 sm:p-6">
                <p className="text-base sm:text-lg font-bold text-white/60">
                  {COMPARISON.others.name}
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                  Rata-rata pasar
                </p>
              </div>
            </div>
            {COMPARISON.us.points.map((point, i) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className={`grid grid-cols-2 items-center ${
                  i % 2 === 0 ? "bg-card" : "bg-secondary/40"
                }`}
              >
                <div className="flex items-center gap-3 p-4 sm:p-5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-semibold text-foreground">{point}</p>
                </div>
                <div className="flex items-center gap-3 border-l border-border p-4 sm:p-5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <X className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="text-sm text-muted-foreground">
                    {COMPARISON.others.points[i]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
