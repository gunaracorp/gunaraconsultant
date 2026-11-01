"use client";

import { MapPin } from "lucide-react";
import { Reveal, Stagger, StaggerItem, SectionHeading } from "@/components/animations";
import { useLang } from "@/lib/i18n";
import { PROVINCES, PROVINCE_GROUPS } from "@/data/provinces";

export function Provinces() {
  const { t } = useLang();

  return (
    <section id="provinsi" className="section-deep relative overflow-hidden py-20 sm:py-28" aria-label="Cakupan 38 provinsi">
      <div className="pattern-lines absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          kicker={t("provKicker")}
          title={t("provTitle")}
          sub={t("provSub")}
        />

        <Reveal delay={0.15} className="mt-8 text-center">
          <p className="inline-flex items-center gap-3 rounded-2xl border border-gold/40 bg-gold/10 px-6 py-3">
            <MapPin className="h-5 w-5 text-gold" aria-hidden="true" />
            <span className="font-display text-2xl font-bold text-gradient-gold">38</span>
            <span className="text-xs font-bold tracking-[0.2em] text-gold-soft uppercase">
              {t("provCount")}
            </span>
          </p>
        </Reveal>

        <div className="mt-12 space-y-9">
          {PROVINCE_GROUPS.map((group, gi) => {
            const list = PROVINCES.filter((p) => p.island === group);
            return (
              <Reveal key={group} delay={gi * 0.06}>
                <div className="rounded-3xl border border-gold/20 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-lg font-bold text-cream">
                      {group}
                    </h3>
                    <span className="rounded-full bg-gold px-3 py-1 text-[11px] font-black text-deep">
                      {list.length}
                    </span>
                  </div>
                  <Stagger className="mt-4 flex flex-wrap gap-2.5">
                    {list.map((p) => (
                      <StaggerItem key={p.name}>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-cream/15 bg-deep/50 px-3.5 py-1.5 text-xs font-semibold text-cream/85 transition-all hover:border-gold/60 hover:text-gold-soft">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                          {p.name}
                        </span>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <p className="mx-auto max-w-2xl text-xs leading-relaxed text-cream/55">
            Sumatera (10) • Jawa (6) • Bali &amp; Nusa Tenggara (3) • Kalimantan (5) •
            Sulawesi (6) • Maluku &amp; Papua (8) = 38 Provinsi
          </p>
        </Reveal>
      </div>
    </section>
  );
}
