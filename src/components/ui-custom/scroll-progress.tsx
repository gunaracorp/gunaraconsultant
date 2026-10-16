"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-primary via-gold to-primary"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.button
      type="button"
      aria-label="Kembali ke atas"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.6,
        pointerEvents: visible ? "auto" : "none",
      }}
      whileHover={{ y: -4 }}
      className="fixed bottom-24 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-card text-primary shadow-lg shadow-primary/20 md:bottom-6 md:right-6"
    >
      <ArrowUp className="h-5 w-5" />
    </motion.button>
  );
}
