import type { NextConfig } from "next";

/**
 * S6 — Security headers (Abadi-Standard 12).
 * Proporsional: situs publik tanpa auth — fokus klikjacking, MIME sniffing,
 * referrer leakage, dan permission sniffing. Tanpa CSP ketat agar i18n inline
 * & JSON-LD tetap hidup; CSP longgar disiapkan untuk tahap berikutnya.
 *
 * Kebijakan frame:
 * - Sandbox preview z.ai menyematkan situs via <iframe> lintas-origin.
 *   `X-Frame-Options: SAMEORIGIN` memicu error "refused to connect" di browser.
 * - Default: CSP `frame-ancestors *` (iframe preview hidup; XFO tidak dikirim).
 * - Produksi sungguhan: set env FRAME_POLICY=sameorigin → CSP 'self' +
 *   X-Frame-Options SAMEORIGIN dikirim lagi (klikjacking terkunci).
 */
const sameOriginFrame = process.env.FRAME_POLICY === "sameorigin";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: sameOriginFrame ? "frame-ancestors 'self'" : "frame-ancestors *",
  },
  ...(sameOriginFrame
    ? [{ key: "X-Frame-Options", value: "SAMEORIGIN" }]
    : []),
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  devIndicators: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Aset publik immutable-cacheable
        source: "/icons/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        // Endpoint status tidak boleh di-cache
        source: "/api/status",
        headers: [{ key: "Cache-Control", value: "no-store" }],
      },
    ];
  },
};

export default nextConfig;
