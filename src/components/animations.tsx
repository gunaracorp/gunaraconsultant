"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
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
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

export function CountUp({
  to,
  suffix = "",
  duration = 2.2,
  className,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => {
        if (ref.current) {
          ref.current.textContent =
            new Intl.NumberFormat("id-ID").format(Math.round(v)) + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [inView, mv, to, duration, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

export function SectionHeading({
  kicker,
  title,
  sub,
  dark = false,
  center = true,
}: {
  kicker: string;
  title: string;
  sub?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] uppercase ${
          dark
            ? "border-gold/40 bg-gold/10 text-gold-soft"
            : "border-gold/50 bg-gold/10 text-primary"
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
        {kicker}
      </p>
      <h2
        className={`mt-5 font-display text-3xl leading-tight font-bold sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {sub ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? "text-cream/75" : "text-muted-foreground"
          }`}
        >
          {sub}
        </p>
      ) : null}
      <div className={`gold-divider mt-6 w-40 ${center ? "mx-auto" : ""}`} />
    </Reveal>
  );
}
