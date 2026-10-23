"use client";

import { useState } from "react";
import {
  AlertTriangle,
  BadgeCheck,
  Copy,
  Landmark,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/animations";
import { useLang } from "@/lib/i18n";
import { BRAND, waLink } from "@/lib/brand";

export function OfficialAccount() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText(BRAND.bank.account);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="rekening" className="section-deep py-20 sm:py-28" aria-label="Rekening resmi">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          kicker={t("bcaKicker")}
          title={t("bcaTitle")}
          sub={t("bcaSub")}
        />

        <Reveal delay={0.15} className="mt-12">
          <div className="animate-glow relative overflow-hidden rounded-[2.2rem] border-2 border-gold/60 bg-gradient-to-br from-deep-soft via-deep to-deep-soft p-8 shadow-2xl sm:p-12">
            <div
              className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-primary/50 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-deep shadow-lg shadow-gold/30">
                    <Landmark className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-display text-xl font-black tracking-[0.2em] text-cream">
                      {t("bcaBank")}
                    </span>
                    <span className="block text-[10px] font-bold tracking-[0.3em] text-gold-soft uppercase">
                      Official Account
                    </span>
                  </span>
                </p>
                <p className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-4 py-1.5 text-[11px] font-black tracking-[0.2em] text-gold-soft uppercase">
                  <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                  100% Resmi
                </p>
              </div>

              <div className="mt-9 grid gap-7 sm:grid-cols-[1.2fr_.8fr] sm:items-end">
                <div>
                  <p className="text-[11px] font-bold tracking-[0.25em] text-cream/60 uppercase">
                    {t("bcaNumber")}
                  </p>
                  <p className="mt-2 font-display text-4xl font-black tracking-[0.12em] text-gradient-gold sm:text-5xl lg:text-6xl">
                    {BRAND.bank.account}
                  </p>
                  <p className="mt-4 flex items-center gap-2 text-sm font-bold text-cream">
                    <UserRound className="h-4.5 w-4.5 text-gold" aria-hidden="true" />
                    <span className="text-[11px] font-bold tracking-[0.2em] text-cream/60 uppercase">
                      {t("bcaHolder")}
                    </span>
                    <span className="font-display text-xl tracking-wide text-gold-soft uppercase">
                      {BRAND.bank.holder}
                    </span>
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:items-end">
                  <Button
                    onClick={copyAccount}
                    className="btn-shine h-12 w-full rounded-full bg-gold px-7 font-black text-deep shadow-xl shadow-gold/30 hover:scale-105 sm:w-auto"
                  >
                    {copied ? (
                      <BadgeCheck className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <Copy className="h-5 w-5" aria-hidden="true" />
                    )}
                    {copied ? t("bcaCopied") : t("bcaCopy")}
                  </Button>
                  <p className="max-w-xs text-[11px] leading-relaxed text-cream/50 sm:text-right">
                    {t("bcaVerify")}{" "}
                    <a
                      href={waLink("Halo, saya ingin verifikasi rekening resmi GConsultant.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-gold-soft underline decoration-gold/40 underline-offset-4 hover:text-gold"
                    >
                      {BRAND.waDisplay}
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-9 flex gap-4 rounded-2xl border border-destructive/40 bg-destructive/10 p-5">
                <AlertTriangle className="h-6 w-6 shrink-0 text-destructive" aria-hidden="true" />
                <div>
                  <p className="text-sm font-black tracking-wide text-destructive uppercase">
                    {t("bcaWarningTitle")}
                  </p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-cream/80">
                    {t("bcaWarning")}
                  </p>
                </div>
              </div>

              <p className="mt-6 flex items-center justify-center gap-2 text-center text-[11px] font-semibold tracking-[0.18em] text-cream/45 uppercase">
                <ShieldCheck className="h-4 w-4 text-gold" aria-hidden="true" />
                {BRAND.name} • {BRAND.iso} • {BRAND.groupSite}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
