"use client";

import { motion } from "framer-motion";
import { MapPin, Globe2, Plane } from "lucide-react";
import { SectionHeading, Stagger, StaggerItem } from "@/components/ui-custom/animated";
import { COVERAGE_REGIONS, INTERNATIONAL } from "@/lib/data";

export function Coverage() {
  return (
    <section
      className="relative overflow-hidden py-24 sm:py-28"
      aria-label="Cakupan wilayah layanan"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Cakupan Layanan"
          title="Melayani Seluruh"
          highlight="Indonesia & Dunia"
          description="Proses 100% online via OSS, AHU Online, SIMBG, dan SIHALAL. Di mana pun bisnis Anda berada, tim Gunara siap mengurusnya."
        />

        <Stagger className="mt-12 flex flex-wrap justify-center gap-2.5">
          {COVERAGE_REGIONS.map((region) => (
            <StaggerItem key={region}>
              <motion.span
                whileHover={{ scale: 1.08, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="inline-flex cursor-default items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-[13px] font-semibold text-foreground/80 shadow-sm transition-colors hover:border-primary/40 hover:text-primary"
              >
                <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                {region}
              </motion.span>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Internasional */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
          {INTERNATIONAL.map((c, i) => (
            <StaggerItem key={c.country}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-secondary/60 p-6 text-center transition-all duration-300 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/10"
              >
                <span
                  className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold/10 transition-transform duration-500 group-hover:scale-[2]"
                  aria-hidden="true"
                />
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {i === 0 ? (
                    <Plane className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Globe2 className="h-6 w-6" aria-hidden="true" />
                  )}
                </span>
                <h3 className="relative mt-4 text-lg font-extrabold">{c.country}</h3>
                <p className="relative mt-1 text-[13px] font-medium text-muted-foreground">
                  {c.service}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  );
}
