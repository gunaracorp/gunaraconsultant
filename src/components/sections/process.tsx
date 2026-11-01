"use client";

import {
  FileSignature,
  Handshake,
  LayoutList,
  Search,
  Trophy,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem, SectionHeading } from "@/components/animations";
import { useLang } from "@/lib/i18n";

export function Process() {
  const { t } = useLang();

  const steps = [
    { icon: Search, title: t("proc1"), desc: t("proc1d") },
    { icon: LayoutList, title: t("proc2"), desc: t("proc2d") },
    { icon: FileSignature, title: t("proc3"), desc: t("proc3d") },
    { icon: Handshake, title: t("proc4"), desc: t("proc4d") },
    { icon: Trophy, title: t("proc5"), desc: t("proc5d") },
  ];

  return (
    <section id="proses" className="bg-background py-20 sm:py-28" aria-label="Proses pengurusan">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={t("procKicker")} title={t("procTitle")} sub={t("procSub")} />

        <div className="relative mt-16">
          <div
            className="absolute top-9 right-[10%] left-[10%] hidden h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent lg:block"
            aria-hidden="true"
          />
          <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <StaggerItem key={s.title}>
                <article className="group relative flex flex-col items-center text-center">
                  <div className="relative">
                    <span className="relative z-10 flex h-18 w-18 items-center justify-center rounded-full border-2 border-gold/50 bg-primary text-gold-soft shadow-xl shadow-primary/25 transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-deep">
                      <s.icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <span className="absolute -top-2 -right-2 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-black text-deep shadow-md">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
