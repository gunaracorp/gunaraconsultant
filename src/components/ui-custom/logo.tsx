import Link from "next/link";
import Image from "next/image";

/**
 * Logo Gunara Consultant — "The Sovereign G"
 * Emblem AI: monogram G pilar klasik + perisai + matahari terbit,
 * tile emerald gelap dengan ring emas — terbaca di tema terang & gelap.
 */
export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <span
      className={`relative inline-block shrink-0 overflow-hidden rounded-xl ring-1 ring-gold/40 ${className}`}
      aria-hidden="true"
    >
      <Image
        src="/images/logo-icon-dark-256.png"
        alt=""
        width={256}
        height={256}
        className="h-full w-full object-cover"
      />
    </span>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="#beranda"
      className="group flex shrink-0 items-center gap-3 whitespace-nowrap"
      aria-label="Gunara Consultant - Beranda"
    >
      <div className="relative">
        <LogoMark className="h-10 w-10 transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110" />
        <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-gold animate-glow" />
      </div>
      <div className="leading-tight">
        <span
          className={`block text-lg font-extrabold tracking-tight ${
            dark ? "text-white" : "text-foreground"
          }`}
        >
          Gunara<span className="text-gold">&nbsp;Consultant</span>
        </span>
        <span
          className={`block whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.22em] ${
            dark ? "text-white/50" : "text-muted-foreground"
          }`}
        >
          ISO 9001:2015 Certified
        </span>
      </div>
    </Link>
  );
}
