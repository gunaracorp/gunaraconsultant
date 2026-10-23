/**
 * GCONSULTANT — "The Geometric G" inline SVG brand mark (v3.0).
 *
 * Simbol G geometris kontinu: cincin konsentris yang menyatu + palang menuju pusat —
 * disiplin yang saling terhubung, rute terstruktur dari kompleksitas menuju solusi.
 * (Brand Guideline v1.0: TANPA perisai, mahkota, laurel, atau segel pseudo-resmi.)
 *
 * Dipakai langsung di DOM (bukan <img>/<Image>) sehingga:
 *  - bebas dari cache browser/optimizer manapun (tidak ada URL gambar yang bisa basi)
 *  - render vector sempurna di semua DPI/zoom
 *  - tetap tampil bahkan saat offline
 *
 * Path identik dengan public/logo.svg (master mark).
 * idPrefix unik per pemakai untuk mencegah bentrok gradient ID dalam satu dokumen.
 */

type BrandSealProps = {
  className?: string;
  idPrefix?: string;
  title?: string;
};

export function BrandSeal({
  className = "h-11 w-11",
  idPrefix = "gc",
  title = "Logo GConsultant",
}: BrandSealProps) {
  const au = `${idPrefix}-au`;
  const auBar = `${idPrefix}-au-bar`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      role="img"
      aria-label={title}
      className={className}
    >
      <defs>
        <linearGradient id={au} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E5C97A" />
          <stop offset="1" stopColor="#C6A15B" />
        </linearGradient>
        {/* userSpaceOnUse — gradient objectBoundingBox tidak dirender pada garis horizontal (bbox tinggi-0) */}
        <linearGradient id={auBar} gradientUnits="userSpaceOnUse" x1="101" y1="60" x2="58" y2="60">
          <stop offset="0" stopColor="#E5C97A" />
          <stop offset="1" stopColor="#C6A15B" />
        </linearGradient>
      </defs>

      {/* Cincin luar — disiplin & sistem yang terhubung */}
      <path
        d="M 91.4 33.6 A 41 41 0 1 0 91.4 86.4"
        fill="none"
        stroke={`url(#${au})`}
        strokeWidth="7.2"
        strokeLinecap="round"
      />
      {/* Cincin dalam — kedalaman polymathic (echo konsentris) */}
      <path
        d="M 80.7 42.6 A 27 27 0 1 0 80.7 77.4"
        fill="none"
        stroke={`url(#${au})`}
        strokeWidth="7.2"
        strokeLinecap="round"
        opacity=".5"
      />
      {/* Palang — rute terstruktur menuju inti solusi */}
      <path
        d="M 101 60 L 58 60"
        fill="none"
        stroke={`url(#${auBar})`}
        strokeWidth="8.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
