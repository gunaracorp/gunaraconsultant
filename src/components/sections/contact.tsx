"use client";

import { useState } from "react";
import {
  Building2,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/animations";
import { useLang } from "@/lib/i18n";
import { BRAND, waLink } from "@/lib/brand";
import { SERVICES } from "@/data/services";

export function Contact() {
  const { t, lang } = useLang();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const svc = SERVICES.find((s) => s.slug === service);
    const text = [
      `Halo ${BRAND.name}, saya ingin konsultasi.`,
      "",
      `Nama: ${name || "-"}`,
      `No. WhatsApp: ${phone || "-"}`,
      `Layanan: ${svc ? (lang === "id" ? svc.nameId : svc.nameEn) : "-"}`,
      "",
      `Kebutuhan: ${msg || "-"}`,
    ].join("\n");
    window.open(waLink(text), "_blank", "noopener");
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="kontak" className="bg-background py-20 sm:py-28" aria-label="Kontak resmi">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={t("conKicker")} title={t("conTitle")} />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Info cards */}
          <div className="space-y-5">
            <Reveal>
              <div className="card-lux rounded-3xl p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-gold-soft">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {t("conAddress")}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {BRAND.address}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="card-lux rounded-3xl p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-gold-soft">
                    <PhoneCall className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">
                    {t("conWa")}
                  </h3>
                  <a
                    href={waLink("Halo Gunara Consultant!")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-sm font-bold text-primary underline decoration-gold/40 underline-offset-4 hover:text-gold"
                  >
                    {BRAND.waDisplay}
                  </a>
                </div>
                <div className="card-lux rounded-3xl p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-gold-soft">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">
                    {t("conEmail")}
                  </h3>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="mt-2 block text-sm font-bold text-primary underline decoration-gold/40 underline-offset-4 hover:text-gold"
                  >
                    {BRAND.email}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="rounded-3xl border border-gold/30 bg-secondary p-6">
                <p className="flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-primary uppercase">
                  <Globe2 className="h-4 w-4 text-gold" aria-hidden="true" />
                  {t("conGroupSite")}: {BRAND.groupSite}
                </p>
                <p className="mt-2 flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-primary/70 uppercase">
                  <Building2 className="h-4 w-4 text-gold" aria-hidden="true" />
                  {BRAND.iso} Certified • {t("footLegal")}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={submit}
              className="card-lux h-full rounded-3xl p-7 sm:p-8"
              aria-label={t("conFormTitle")}
            >
              <h3 className="font-display text-xl font-bold text-ink">
                {t("conFormTitle")}
              </h3>
              <div className="mt-6 grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="cf-name">{t("conName")}</Label>
                  <Input
                    id="cf-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("conNamePh")}
                    required
                    className="h-11"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cf-phone">{t("conPhone")}</Label>
                  <Input
                    id="cf-phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t("conPhonePh")}
                    inputMode="tel"
                    required
                    className="h-11"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cf-service">{t("conService")}</Label>
                  <div className="relative">
                    <select
                      id="cf-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      required
                      className="h-11 w-full appearance-none rounded-md border border-input bg-transparent px-3 pr-10 text-sm text-foreground shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                    >
                      <option value="" disabled className="text-ink">
                        {t("conServicePh")}
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s.slug} value={s.slug} className="text-ink">
                          {lang === "id" ? s.nameId : s.nameEn}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-gold"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cf-msg">{t("conMsg")}</Label>
                  <Textarea
                    id="cf-msg"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder={t("conMsgPh")}
                    rows={4}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="btn-shine h-12 rounded-full bg-gold font-black text-deep shadow-lg shadow-gold/25 hover:scale-[1.02]"
                >
                  {sent ? (
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Send className="h-5 w-5" aria-hidden="true" />
                  )}
                  {sent ? t("bcaCopied") : t("conSubmit")}
                </Button>
                <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
                  {t("spTrust")}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
