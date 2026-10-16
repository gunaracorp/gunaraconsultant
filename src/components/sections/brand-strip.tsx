"use client";

import { Marquee } from "@/components/ui-custom/marquee";
import { MARQUEE_ITEMS } from "@/lib/data";

export function BrandStrip() {
  return (
    <section
      aria-label="Layanan andalan kami"
      className="relative -mt-1 border-y border-white/10 bg-deep py-6"
    >
      <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.3em] text-white/40">
        Dipercaya mengurus 18+ jenis perizinan — semua terbit resmi dari instansi
      </p>
      <Marquee items={MARQUEE_ITEMS} />
      <Marquee items={[...MARQUEE_ITEMS].reverse()} reverse className="mt-3 opacity-60" />
    </section>
  );
}
