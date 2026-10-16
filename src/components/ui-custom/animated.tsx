"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
  x = 0,
  scale = 1,
  once = true,
  duration = 0.7,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  once?: boolean;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: EASE },
  },
};

export function Stagger({
  children,
  className,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

/** Judul section konsisten + animasi reveal */
export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      <Reveal>
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] ${
            dark
              ? "border-gold/40 bg-gold/10 text-gold"
              : "border-primary/20 bg-secondary text-primary"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-glow" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className={`mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.12] tracking-tight ${
            dark ? "text-white" : "text-foreground"
          }`}
        >
          {title}{" "}
          {highlight && (
            <span className={dark ? "text-gradient-gold" : "text-gradient-emerald"}>
              {highlight}
            </span>
          )}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p
            className={`mt-5 text-base sm:text-lg leading-relaxed ${
              dark ? "text-white/70" : "text-muted-foreground"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export { EASE };
