"use client";

import { Sparkle } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function TrustMarquee() {
  const { t } = useLang();
  const items = [
    t("marquee1"),
    t("marquee2"),
    t("marquee3"),
    t("marquee4"),
    t("marquee5"),
    t("marquee6"),
    t("marquee7"),
    t("marquee8"),
    t("marquee9"),
    t("marquee10"),
    t("marquee11"),
    t("marquee12"),
  ];
  const doubled = [...items, ...items];

  return (
    <div
      className="marquee-wrap relative overflow-hidden border-y border-gold/25 bg-deep py-4"
      aria-hidden="true"
    >
      <div className="animate-marquee flex w-max items-center gap-10 pr-10">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-sm font-bold tracking-[0.22em] whitespace-nowrap text-gold-soft/90 uppercase"
          >
            {item}
            <Sparkle className="h-3.5 w-3.5 text-gold" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-deep to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-deep to-transparent" />
    </div>
  );
}
