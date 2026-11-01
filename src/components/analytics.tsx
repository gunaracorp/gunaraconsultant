"use client";

import { useEffect } from "react";

/**
 * S7 — Wiring analitik resmi: Google Analytics 4 (gtag.js) + Microsoft Clarity.
 * - ID dibaca saat build dari env publik (inline, tanpa state/effect setState).
 * - Tanpa ID = nol script eksternal (aman sandbox, nol jank).
 * - Menghormati Do-Not-Track.
 * - Event konversi terstandardisasi diekspos via trackEvent().
 */
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: ((...args: unknown[]) => void) & { q?: unknown[] };
  }
}

const GA_ID: string | null = process.env.NEXT_PUBLIC_GA_ID || null;
const CLARITY_ID: string | null = process.env.NEXT_PUBLIC_CLARITY_ID || null;

export function Analytics() {
  useEffect(() => {
    if (typeof navigator !== "undefined" && navigator.doNotTrack === "1") return;

    if (GA_ID && !document.getElementById("ga4-script")) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer!.push(args);
      };
      const s = document.createElement("script");
      s.id = "ga4-script";
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(s);
      window.gtag("js", new Date());
      window.gtag("config", GA_ID, { anonymize_ip: true });
    }

    if (CLARITY_ID && !document.getElementById("clarity-script")) {
      window.clarity =
        window.clarity ||
        function (...args: unknown[]) {
          (window.clarity!.q = window.clarity!.q || []).push(args);
        };
      const s = document.createElement("script");
      s.id = "clarity-script";
      s.async = true;
      s.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
      document.head.appendChild(s);
    }
  }, []);

  return null;
}

/** Event konversi terstandardisasi (S7/S8): view_item, begin_checkout, generate_lead */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
  window.clarity?.("event", name);
}
