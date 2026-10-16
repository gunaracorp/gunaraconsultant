"use client";

import { Marquee } from "@/components/ui-custom/marquee";
import { useLang } from "@/components/language-provider";

export function BrandStrip() {
  const { t, copy } = useLang();

  return (
    <section
      aria-label={t("brandAriaLabel")}
      className="relative -mt-1 border-y border-white/10 bg-deep py-6"
    >
      <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.3em] text-white/40">
        {t("brandCaption")}
      </p>
      <Marquee items={copy.marquee} />
      <Marquee items={[...copy.marquee].reverse()} reverse className="mt-3 opacity-60" />
    </section>
  );
}
