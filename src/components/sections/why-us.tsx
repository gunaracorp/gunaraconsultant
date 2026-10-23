"use client";

import {
  Award,
  Building2,
  Compass,
  Globe2,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem, SectionHeading } from "@/components/animations";
import { useLang } from "@/lib/i18n";

const ICONS = [
  Compass,
  ShieldCheck,
  Building2,
  Globe2,
  Award,
  RefreshCcw,
] as const;

export function WhyUs() {
  const { t } = useLang();

  const items = [
    { title: t("why1"), desc: t("why1d") },
    { title: t("why2"), desc: t("why2d") },
    { title: t("why3"), desc: t("why3d") },
    { title: t("why4"), desc: t("why4d") },
    { title: t("why5"), desc: t("why5d") },
    { title: t("why6"), desc: t("why6d") },
  ];

  return (
    <section id="keunggulan" className="bg-background py-20 sm:py-28" aria-label="Keunggulan GConsultant">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={t("whyKicker")} title={t("whyTitle")} sub={t("whySub")} />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <StaggerItem key={item.title}>
                <article className="card-lux group h-full rounded-3xl p-7">
                  <span className="inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-primary text-gold-soft shadow-lg shadow-primary/25 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.2} className="mt-10 text-center">
          <p className="text-sm font-semibold tracking-wide text-primary/70">
            Mic Kinsey Heritage Since 2009 • ISO 9001:2015 Certified
          </p>
        </Reveal>
      </div>
    </section>
  );
}
