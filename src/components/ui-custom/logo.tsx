import Link from "next/link";

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Logo Gunara Consultant"
    >
      <defs>
        <linearGradient id="logo-em" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#108a5f" />
          <stop offset="100%" stopColor="#0a4f38" />
        </linearGradient>
        <linearGradient id="logo-gd" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5c94c" />
          <stop offset="100%" stopColor="#c9922a" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#logo-em)" />
      <path
        d="M32 10l18 7.2v12.6C50 41.6 42.4 49 32 53.2 21.6 49 14 41.6 14 29.8V17.2L32 10z"
        fill="none"
        stroke="url(#logo-gd)"
        strokeWidth="2.6"
      />
      <text
        x="32"
        y="41"
        fontFamily="inherit"
        fontSize="25"
        fontWeight="800"
        fill="url(#logo-gd)"
        textAnchor="middle"
      >
        G
      </text>
    </svg>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="#beranda"
      className="group flex items-center gap-3"
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
          Gunara<span className="text-gold"> Consultant</span>
        </span>
        <span
          className={`block text-[10px] font-bold uppercase tracking-[0.22em] ${
            dark ? "text-white/50" : "text-muted-foreground"
          }`}
        >
          ISO 9001:2015 Certified
        </span>
      </div>
    </Link>
  );
}
