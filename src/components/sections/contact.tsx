"use client";

import { useState } from "react";
import {
  Building2,
  Globe2,
  Landmark,
  Mail,
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
  const [errors, setErrors] = useState<{ name?: string; phone?: string; msg?: string }>({});

  /**
   * Validasi custom inline — menggantikan bubble validasi native yang
   * mudah terlewat (elemen select appearance-none) dan memberi umpan
   * balik yang jelas + aksesibel (aria-invalid, fokus ke field pertama).
   */
  function validate(): boolean {
    const next: typeof errors = {};
    if (name.trim().length < 2) next.name = t("conErrName");
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 8 || digits.length > 16) next.phone = t("conErrPhone");
    if (msg.trim().length < 5) next.msg = t("conErrMsg");
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = next.name ? "cf-name" : next.phone ? "cf-phone" : "cf-msg";
      document.getElementById(first)?.focus();
      return false;
    }
    return true;
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const svc = SERVICES.find((s) => s.slug === service);
    const text = [
      `Halo ${BRAND.name}, saya ingin konsultasi.`,
      "",
      `Nama: ${name || "-"}`,
      `No. WhatsApp: ${phone || "-"}`,
      `Layanan: ${svc ? (lang === "id" ? svc.nameId : svc.nameEn) : lang === "id" ? "Konsultasi umum" : "General consultation"}`,
      "",
      `Kebutuhan: ${msg || "-"}`,
    ].join("\n");
    window.open(waLink(text), "_blank", "noopener");
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="kontak" className="bg-background py-20 sm:py-28" aria-label="Kontak resmi">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={t("conKicker")} title={t("conTitle")} />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Info cards */}
          <div className="space-y-5">
            <Reveal>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="card-lux rounded-3xl p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-gold-soft">
                    <Building2 className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">
                    {t("conAddrHq")}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {BRAND.address}
                  </p>
                </div>
                <div className="card-lux relative overflow-hidden rounded-3xl border-gold/50 p-6">
                  <div
                    className="pattern-dots pointer-events-none absolute inset-0 opacity-60"
                    aria-hidden="true"
                  />
                  <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold text-deep shadow-lg shadow-gold/30">
                    <Landmark className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="relative mt-4 font-display text-base font-bold text-ink">
                    {t("conAddrJkt")}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {BRAND.addressJkt}
                  </p>
                  <span className="relative mt-3 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] font-bold tracking-wider text-primary uppercase">
                    <Landmark className="h-3 w-3" aria-hidden="true" />
                    Indonesia Stock Exchange
                  </span>
                </div>
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
                    href={waLink("Halo GConsultant!")}
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
              noValidate
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
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
                    }}
                    placeholder={t("conNamePh")}
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "cf-name-err" : undefined}
                    className={`h-11 ${errors.name ? "border-red-500 focus-visible:ring-red-500/30" : ""}`}
                  />
                  {errors.name && (
                    <p id="cf-name-err" role="alert" className="text-xs font-semibold text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cf-phone">{t("conPhone")}</Label>
                  <Input
                    id="cf-phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
                    }}
                    placeholder={t("conPhonePh")}
                    inputMode="tel"
                    autoComplete="tel"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "cf-phone-err" : undefined}
                    className={`h-11 ${errors.phone ? "border-red-500 focus-visible:ring-red-500/30" : ""}`}
                  />
                  {errors.phone && (
                    <p id="cf-phone-err" role="alert" className="text-xs font-semibold text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cf-service">
                    {t("conService")}
                    <span className="ml-1.5 text-xs font-normal text-ink/50">({t("conServiceOpt")})</span>
                  </Label>
                  <div className="relative">
                    <select
                      id="cf-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
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
                    onChange={(e) => {
                      setMsg(e.target.value);
                      if (errors.msg) setErrors((p) => ({ ...p, msg: undefined }));
                    }}
                    placeholder={t("conMsgPh")}
                    rows={4}
                    aria-invalid={!!errors.msg}
                    aria-describedby={errors.msg ? "cf-msg-err" : undefined}
                    className={errors.msg ? "border-red-500 focus-visible:ring-red-500/30" : ""}
                  />
                  {errors.msg && (
                    <p id="cf-msg-err" role="alert" className="text-xs font-semibold text-red-600">
                      {errors.msg}
                    </p>
                  )}
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
                  {sent ? t("conSentBtn") : t("conSubmit")}
                </Button>
                <p aria-live="polite" className="min-h-5 text-center text-xs font-semibold text-primary">
                  {sent ? t("conSuccess") : ""}
                </p>
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
