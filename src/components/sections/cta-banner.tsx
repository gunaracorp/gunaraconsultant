"use client";

import { ArrowRight, Mail, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations";
import { useLang } from "@/lib/i18n";
import { BRAND, waLink } from "@/lib/brand";

export function CtaBanner() {
  const { t } = useLang();

  return (
    <section className="section-deep relative overflow-hidden py-20 sm:py-24" aria-label="Ajakan konsultasi">
      <div className="pattern-lines absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight font-bold text-cream sm:text-4xl lg:text-5xl">
            {t("ctaTitle")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-cream/75 sm:text-lg">
            {t("ctaSub")}
          </p>
          <div className="gold-divider mx-auto mt-7 w-40" />
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              className="btn-shine h-13 rounded-full bg-gold px-8 text-base font-bold text-deep shadow-xl shadow-gold/30 hover:scale-105"
            >
              <a
                href={waLink("Halo GConsultant, saya siap memulai pengurusan perizinan bisnis saya.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PhoneCall className="h-5 w-5" aria-hidden="true" />
                {t("ctaWa")}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-13 rounded-full border-cream/30 bg-white/5 px-8 text-base font-semibold text-cream hover:border-gold/60 hover:text-gold-soft"
            >
              <a href={`mailto:${BRAND.email}?subject=Konsultasi Perizinan — ${BRAND.name}`}>
                <Mail className="h-5 w-5" aria-hidden="true" />
                {t("ctaEmail")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
