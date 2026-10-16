"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/data";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp Gunara Consultant"
      className="fixed bottom-6 right-5 z-50 md:bottom-6 md:right-6"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
    >
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full bg-emerald-500/50 animate-ping"
        aria-hidden="true"
      />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-2xl shadow-emerald-500/40">
        <MessageCircle className="h-7 w-7 text-white" aria-hidden="true" />
      </span>
      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-gold text-[10px] font-extrabold text-gold-foreground">
        1
      </span>
    </motion.a>
  );
}
