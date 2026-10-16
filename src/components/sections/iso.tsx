"use client";

import { motion } from "framer-motion";
import { Award, FileCheck2, RefreshCcw, Scale } from "lucide-react";
import {
  SectionHeading,
  Stagger,
  StaggerItem,
  Reveal,
} from "@/components/ui-custom/animated";
import { useLang } from "@/components/language-provider";

function IsoBadge() {
  return (
    <div className="relative mx-auto h-64 w-64 sm:h-72 sm:w-72" aria-hidden="true">
      {/* Cincin berputar */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <circle
            cx="100"
            cy="100"
            r="96"
            fill="none"
            stroke="#f5c94c"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            strokeDasharray="3 7"
          />
          {Array.from({ length: 12 }).map((_, i) => (
            <circle
              key={i}
              cx={100 + 96 * Math.cos((i * 30 * Math.PI) / 180)}
              cy={100 + 96 * Math.cos((i * 30 * Math.PI) / 180)}
              r="2.5"
              fill="#f5c94c"
              opacity="0.7"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
        </svg>
      </motion.div>

      {/* Medali */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-6 flex flex-col items-center justify-center rounded-full border-2 border-gold/50 bg-gradient-to-br from-white/10 to-transparent text-center backdrop-blur-xl"
      >
        <Award className="h-10 w-10 text-gold" />
        <p className="mt-3 text-3xl font-extrabold tracking-tight text-white">
          ISO <span className="text-gradient-gold">9001</span>
        </p>
        <p className="text-sm font-bold text-gold">:2015</p>
        <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
          Quality Management
        </p>
      </motion.div>
    </div>
  );
}

export function IsoSection() {
  const { t, copy } = useLang();

  return (
    <section
      className="relative overflow-hidden bg-secondary/50 py-24 sm:py-28"
      aria-label={t("isoAria")}
    >
      <div
        className="absolute left-[-8%] top-1/3 h-96 w-96 rounded-full bg-gold/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t("isoEyebrow")}
          title={t("isoTitle")}
          highlight={t("isoHighlight")}
          description={t("isoDesc")}
        />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Badge ISO */}
          <Reveal y={40}>
            <IsoBadge />
          </Reveal>

          {/* Prinsip-prinsip */}
          <div>
            <Stagger className="grid gap-4 sm:grid-cols-2">
              {copy.isoPrinciples.map((p, i) => (
                <StaggerItem key={p.title}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group h-full rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/10"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/15 text-sm font-extrabold text-gold-foreground transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-[15px] font-extrabold">{p.title}</h3>
                    </div>
                    <p className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.3} className="mt-6">
              <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <FileCheck2 className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                <p className="flex-1 text-sm font-medium text-foreground/85">
                  {t("isoAuditNote")}
                </p>
                <RefreshCcw className="h-5 w-5 text-gold" aria-hidden="true" />
              </div>
            </Reveal>
            <Reveal delay={0.4} className="mt-3">
              <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-gold/30 bg-gold-soft/40 p-5">
                <Scale className="h-6 w-6 shrink-0 text-gold-foreground" aria-hidden="true" />
                <p className="flex-1 text-sm font-medium text-foreground/85">
                  {t("isoComplianceNote")}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
