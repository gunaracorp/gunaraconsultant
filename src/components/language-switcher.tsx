"use client";

import { Languages } from "lucide-react";
import { useLang, type Lang } from "@/lib/i18n";

export function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { lang, setLang } = useLang();

  const btn = (code: Lang, label: string) => (
    <button
      type="button"
      onClick={() => setLang(code)}
      aria-pressed={lang === code}
      aria-label={`Switch to ${label}`}
      className={`rounded-md px-2.5 py-1 text-xs font-bold tracking-wide transition-all ${
        lang === code
          ? "bg-gold text-deep shadow"
          : dark
            ? "text-cream/70 hover:text-gold-soft"
            : "text-primary/70 hover:text-primary"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div
      className={`flex items-center gap-1 rounded-lg border p-1 ${
        dark ? "border-gold/30 bg-white/5" : "border-primary/15 bg-white/60"
      }`}
      role="group"
      aria-label="Language selector"
    >
      <Languages className="ml-1 h-3.5 w-3.5 text-gold" aria-hidden="true" />
      {btn("id", "ID")}
      {btn("en", "EN")}
    </div>
  );
}
