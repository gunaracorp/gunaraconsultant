"use client";

import { ChevronDown } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/animations";
import { useLang } from "@/lib/i18n";
import { FAQS } from "@/data/faqs";

export function Faq() {
  const { t } = useLang();

  return (
    <section id="faq" className="bg-muted/40 py-20 sm:py-28" aria-label="Pertanyaan yang sering diajukan">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={t("faqKicker")} title={t("faqTitle")} />

        <Reveal delay={0.15} className="mt-12">
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details
                key={i}
                className="card-lux group rounded-2xl px-6"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-[15px] font-bold text-ink transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
