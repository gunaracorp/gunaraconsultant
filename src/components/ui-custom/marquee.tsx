"use client";

import { BadgeCheck } from "lucide-react";
import { Fragment } from "react";

export function Marquee({
  items,
  reverse = false,
  className,
}: {
  items: readonly string[];
  reverse?: boolean;
  className?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div
      className={`relative overflow-hidden marquee-paused ${className ?? ""}`}
      aria-hidden="true"
    >
      <div
        className={`flex w-max items-center gap-3 pr-3 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((item, i) => (
          <Fragment key={i}>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/85 whitespace-nowrap">
              <BadgeCheck className="h-4 w-4 text-gold" aria-hidden="true" />
              {item}
            </span>
          </Fragment>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-deep to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-deep to-transparent" />
    </div>
  );
}
