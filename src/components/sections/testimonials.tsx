"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import {
  SectionHeading,
  Reveal,
} from "@/components/ui-custom/animated";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
      5200
    );
    return () => clearInterval(id);
  }, [paused]);

  const current = TESTIMONIALS[index];
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section
      id="testimoni"
      className="relative overflow-hidden bg-secondary/50 py-24 sm:py-28"
      aria-label="Testimoni klien Gunara Consultant"
    >
      <div
        className="absolute right-[-10%] top-20 h-80 w-80 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimoni"
          title="Cerita Sukses dari"
          highlight="12.500+ Klien"
          description="Dari UMKM hingga korporasi — kepercayaan mereka adalah bukti nyata komitmen mutu kami."
        />

        <Reveal className="mt-14" y={40}>
          <div
            className="relative mx-auto max-w-4xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Kutip besar */}
            <Quote
              className="absolute -top-8 left-4 z-10 h-16 w-16 text-gold/30 sm:-left-6"
              aria-hidden="true"
            />

            <div className="relative min-h-[300px] overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-2xl shadow-primary/5 sm:min-h-[260px] sm:p-12">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={index}
                  initial={{ opacity: 0, x: 60, filter: "blur(6px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -60, filter: "blur(6px)" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className="flex gap-1"
                    aria-label={`Rating ${current.rating} dari 5 bintang`}
                  >
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -90 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.25 + i * 0.08, type: "spring", stiffness: 300 }}
                      >
                        <Star className="h-5 w-5 fill-gold text-gold" aria-hidden="true" />
                      </motion.span>
                    ))}
                  </div>
                  <blockquote className="mt-5 text-lg font-medium leading-relaxed text-foreground sm:text-xl">
                    &ldquo;{current.content}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex flex-wrap items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-extrabold text-primary-foreground">
                      {current.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-extrabold">{current.name}</p>
                      <p className="text-sm text-muted-foreground">{current.role}</p>
                    </div>
                    <span className="ml-auto rounded-full bg-gold-soft px-4 py-1.5 text-xs font-bold text-gold-foreground">
                      {current.service}
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            {/* Kontrol */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                aria-label="Testimoni sebelumnya"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-primary hover:text-primary hover:-translate-x-0.5"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2" role="tablist" aria-label="Pilih testimoni">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Testimoni ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-8 bg-gold"
                        : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={next}
                aria-label="Testimoni berikutnya"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-primary hover:text-primary hover:translate-x-0.5"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
