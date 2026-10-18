/**
 * The Golden Seal of Gunara — inline SVG brand mark.
 *
 * Dipakai langsung di DOM (bukan <img>/<Image>) sehingga:
 *  - bebas dari cache browser/optimizer manapun (tidak ada URL gambar yang bisa basi)
 *  - render vector sempurna di semua DPI/zoom
 *  - tetap tampil bahkan saat offline
 *
 * Sumber path identik dengan public/logo.svg (master brand).
 * idPrefix unik per pemakai untuk mencegah bentrok gradient ID dalam satu dokumen.
 */

type BrandSealProps = {
  className?: string;
  idPrefix?: string;
  title?: string;
};

export function BrandSeal({
  className = "h-11 w-11",
  idPrefix = "gs",
  title = "Logo Gunara Consultant",
}: BrandSealProps) {
  const bg = `${idPrefix}-bg`;
  const glow = `${idPrefix}-glow`;
  const au = `${idPrefix}-au`;
  const au2 = `${idPrefix}-au2`;
  const sheen = `${idPrefix}-sheen`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      role="img"
      aria-label={title}
      className={className}
    >
      <defs>
        <linearGradient id={bg} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0e6144" />
          <stop offset=".5" stopColor="#07382a" />
          <stop offset="1" stopColor="#04231a" />
        </linearGradient>
        <radialGradient id={glow} cx=".5" cy=".26" r=".8">
          <stop offset="0" stopColor="#1d8a63" stopOpacity=".5" />
          <stop offset=".55" stopColor="#1d8a63" stopOpacity=".12" />
          <stop offset="1" stopColor="#1d8a63" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={au} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f7e39c" />
          <stop offset=".45" stopColor="#d4af37" />
          <stop offset="1" stopColor="#9a7410" />
        </linearGradient>
        <linearGradient id={au2} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fbeab2" />
          <stop offset=".5" stopColor="#d4af37" />
          <stop offset="1" stopColor="#8a6a0e" />
        </linearGradient>
        <linearGradient id={sheen} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity=".1" />
          <stop offset=".4" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Base: Emerald Royal */}
      <rect x="4" y="4" width="112" height="112" rx="26" fill={`url(#${bg})`} />
      <rect x="4" y="4" width="112" height="112" rx="26" fill={`url(#${glow})`} />

      {/* Double keyline: bingkai sertifikat internasional */}
      <rect
        x="10.5"
        y="10.5"
        width="99"
        height="99"
        rx="21"
        fill="none"
        stroke={`url(#${au2})`}
        strokeWidth="1.8"
      />
      <rect
        x="15.5"
        y="15.5"
        width="89"
        height="89"
        rx="17"
        fill="none"
        stroke={`url(#${au2})`}
        strokeWidth=".9"
        opacity=".55"
      />

      {/* Perisai: perlindungan hukum & kepercayaan */}
      <path
        d="M60 25 L86 35.5 V59.5 C86 76.5 74.5 89 60 95.5 C45.5 89 34 76.5 34 59.5 V35.5 Z"
        fill="rgba(212,175,55,.07)"
        stroke={`url(#${au})`}
        strokeWidth="2.4"
      />

      {/* Segel intan: puncak keabsahan */}
      <path d="M60 29.5 L63.4 33.6 L60 37.7 L56.6 33.6 Z" fill={`url(#${au})`} />

      {/* Monogram G geometris (pure path — bebas font) */}
      <path
        d="M76.1 45.7 A24 24 0 1 0 76.1 81.3 L76.1 63.8 L59 63.8"
        fill="none"
        stroke={`url(#${au})`}
        strokeWidth="8.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Sheen kaca premium */}
      <rect x="4" y="4" width="112" height="112" rx="26" fill={`url(#${sheen})`} />
    </svg>
  );
}
