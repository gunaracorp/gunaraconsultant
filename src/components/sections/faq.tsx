"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading, Stagger, StaggerItem } from "@/components/ui-custom/animated";
import { FAQS } from "@/lib/data";

export function Faq() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden py-24 sm:py-28"
      aria-label="Pertanyaan yang sering diajukan"
    >
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan yang Sering"
          highlight="Diajukan"
          description="Semua yang perlu Anda ketahui sebelum memulai pengurusan bersama kami. Masih penasaran? Tim kami siap menjawab 24/7."
        />

        <Stagger className="mt-12">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <StaggerItem key={faq.question}>
                <AccordionItem
                  value={`faq-${i}`}
                  className="rounded-2xl border border-border bg-card px-5 transition-all duration-300 data-[state=open]:border-gold/50 data-[state=open]:shadow-lg data-[state=open]:shadow-gold/10 sm:px-6"
                >
                  <AccordionTrigger className="py-5 text-left text-[15px] font-extrabold hover:no-underline hover:text-primary sm:text-base">
                    <span className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-xs font-extrabold text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pl-11 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </StaggerItem>
            ))}
          </Accordion>
        </Stagger>
      </div>
    </section>
  );
}
