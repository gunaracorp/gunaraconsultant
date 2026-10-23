"use client";

import { Reveal } from "@/components/animations";
import { useLang } from "@/lib/i18n";
import { PRIVACY_BLOCKS, LEGAL_UPDATED } from "@/data/legal";

export function PrivacyContent() {
  const { lang, t } = useLang();
  const isId = lang === "id";

  return (
    <div className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
      <Reveal>
        <p className="mb-8 text-right text-xs font-semibold tracking-wide text-ink/50 uppercase">
          {t("legalUpdated")}:{" "}
          <time dateTime={LEGAL_UPDATED}>
            {new Date(LEGAL_UPDATED).toLocaleDateString(isId ? "id-ID" : "en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </p>
        <div className="space-y-10">
          {PRIVACY_BLOCKS.map((b) => (
            <section key={b.h} className="card-lux rounded-2xl border border-gold/15 p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-primary sm:text-2xl">
                {isId ? b.h : b.hEn}
              </h2>
              <div className="mt-4 space-y-4">
                {(isId ? b.p : b.pEn).map((par, i) => (
                  <p key={i} className="text-sm leading-relaxed text-ink/80 sm:text-[15px]">
                    {par}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
