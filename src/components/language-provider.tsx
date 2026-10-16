"use client";

/**
 * Gunara Consultant — Language Provider (Tahap 1 i18n ID ⇄ EN).
 *
 * - Initial state WAJIB "id" → render SSR & render pertama client identik
 *   (Google tetap mengindeks versi Bahasa Indonesia penuh, tanpa hydration mismatch).
 * - Preferensi bahasa dipulihkan dari localStorage ("gunara-lang") SETELAH
 *   hydration (via rAF, pattern sama dengan ThemeToggle) lalu dipersist
 *   setiap kali bahasa berganti; <html lang> ikut diperbarui.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCopy, getUi, type Copy, type Lang } from "@/lib/i18n";

const STORAGE_KEY = "gunara-lang";

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  copy: Copy;
  ui: Record<string, string>;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");
  const hydratedRef = useRef(false);

  /* Efek 1 — sekali setelah mount: pulihkan preferensi dari localStorage. */
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      let stored: string | null = null;
      try {
        stored = window.localStorage.getItem(STORAGE_KEY);
      } catch {
        stored = null;
      }
      if (stored === "en") setLangState("en");
      document.documentElement.lang = stored === "en" ? "en" : "id";
      hydratedRef.current = true;
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  /* Efek 2 — setiap kali lang berubah: simpan preferensi + update <html lang>. */
  useEffect(() => {
    if (!hydratedRef.current) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage tidak tersedia (mis. private mode) — abaikan */
    }
    document.documentElement.lang = lang === "en" ? "en" : "id";
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);

  const t = useCallback(
    (key: string) => getUi(lang)[key] ?? getUi("id")[key] ?? key,
    [lang]
  );

  const copy = useMemo(() => getCopy(lang), [lang]);
  const ui = useMemo(() => getUi(lang), [lang]);

  const value = useMemo(
    () => ({ lang, setLang, t, copy, ui }),
    [lang, setLang, t, copy, ui]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang harus dipakai di dalam LanguageProvider");
  }
  return ctx;
}

/**
 * Toggle bahasa — dipakai di navbar, gaya mengikuti ThemeToggle.
 * Label menampilkan bahasa TARGET ("EN" saat id, "ID" saat en).
 */
export function LanguageToggle({ dark = false }: { dark?: boolean }) {
  const { lang, setLang } = useLang();
  const target = lang === "id" ? "EN" : "ID";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Ganti bahasa / Switch language"
      onClick={() => setLang(lang === "id" ? "en" : "id")}
      className={`h-10 w-auto gap-1.5 rounded-full px-3 ${
        dark ? "text-white hover:bg-white/20 hover:text-white" : ""
      }`}
    >
      <Globe className="size-[18px]" aria-hidden="true" />
      <span className="text-xs font-extrabold tracking-wider">{target}</span>
    </Button>
  );
}
