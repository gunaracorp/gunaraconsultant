"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, Moon, Sun, Mail, BadgeCheck } from "lucide-react";
import { useTheme } from "next-themes";
import { Logo } from "@/components/ui-custom/logo";
import { NAV_LINKS, SITE } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={mounted && resolvedTheme === "dark" ? "Mode terang" : "Mode gelap"}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative h-10 w-10 rounded-full overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && resolvedTheme === "dark" ? (
          <motion.span
            key="sun"
            initial={{ y: 14, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -14, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.25 }}
          >
            <Sun className="h-5 w-5 text-gold" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ y: 14, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -14, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.25 }}
          >
            <Moon className="h-5 w-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#beranda");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Topbar */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`hidden lg:block border-b transition-all duration-500 ${
          scrolled
            ? "h-0 opacity-0 border-transparent overflow-hidden"
            : "h-10 border-white/10 bg-deep text-white/85"
        }`}
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-xs">
          <p className="flex items-center gap-2 font-semibold">
            <BadgeCheck className="h-4 w-4 text-gold" />
            Tersertifikasi ISO 9001:2015 — Grup PusatPerizinan.com — Berdiri sejak {SITE.founded}
          </p>
          <div className="flex items-center gap-5">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-1.5 transition-colors hover:text-gold"
            >
              <Phone className="h-3.5 w-3.5" /> {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-gold"
            >
              <Mail className="h-3.5 w-3.5" /> {SITE.email}
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main navbar */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className={`transition-all duration-500 ${
          scrolled
            ? "glass shadow-lg shadow-black/5 border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex h-16 md:h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6"
          aria-label="Navigasi utama"
        >
          <Logo dark={!scrolled} />

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              // Link sekunder hanya tampil di layar xl+ agar navbar tetap rapi
              const isXlOnly = "xlOnly" in link && link.xlOnly;
              return (
                <li
                  key={link.href}
                  className={isXlOnly ? "hidden xl:block" : undefined}
                >
                  <a
                    href={link.href}
                    className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      scrolled
                        ? isActive
                          ? "text-primary"
                          : "text-foreground/70 hover:text-foreground"
                        : isActive
                          ? "text-gold"
                          : "text-white/80 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-secondary border border-primary/15"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <div
              className={
                scrolled
                  ? ""
                  : "[&_button]:bg-white/10 [&_button]:text-white [&_button:hover]:bg-white/20"
              }
            >
              <ThemeToggle />
            </div>
            <Button
              asChild
              className="hidden sm:inline-flex shimmer bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 font-bold shadow-lg shadow-primary/25"
            >
              <a href="#kontak">Konsultasi Gratis</a>
            </Button>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className={`lg:hidden rounded-full h-10 w-10 ${
                    scrolled
                      ? ""
                      : "border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                  }`}
                  aria-label="Buka menu navigasi"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                aria-describedby={undefined}
                className="w-[300px] overflow-y-auto"
              >
                <SheetHeader className="p-0 border-0">
                  <SheetTitle className="sr-only">Menu navigasi</SheetTitle>
                  <div className="pt-2">
                    <Logo />
                  </div>
                </SheetHeader>
                <motion.ul
                  className="mt-6 flex flex-col gap-1 px-2"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
                  }}
                >
                  {NAV_LINKS.map((link) => (
                    <motion.li
                      key={link.href}
                      variants={{
                        hidden: { opacity: 0, x: 24 },
                        show: { opacity: 1, x: 0 },
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                      >
                        {link.label}
                        <span className="text-gold">→</span>
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
                <div className="mt-6 px-4">
                  <Button
                    asChild
                    className="w-full rounded-full bg-primary font-bold shadow-lg shadow-primary/25"
                  >
                    <a href="#kontak" onClick={() => setOpen(false)}>
                      Konsultasi Gratis
                    </a>
                  </Button>
                  <p className="mt-4 text-center text-xs text-muted-foreground">
                    {SITE.phone} • {SITE.email}
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </motion.div>
    </header>
  );
}
