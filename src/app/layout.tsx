import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE } from "@/lib/data";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

/* ===== Verifikasi Search Engine (isi via .env — lihat .env.example) ===== */
const verificationOther: Record<string, string> = {};
if (process.env.BING_SITE_VERIFICATION)
  verificationOther["msvalidate.01"] = process.env.BING_SITE_VERIFICATION;
if (process.env.YANDEX_VERIFICATION)
  verificationOther["yandex-verification"] = process.env.YANDEX_VERIFICATION;

const BASE_KEYWORDS = [
  "Gunara Consultant",
  "konsultan perizinan",
  "jasa pengurusan izin usaha",
  "konsultan perizinan usaha",
  "pengurusan NIB",
  "OSS-RBA",
  "pendirian PT",
  "pendirian PT PMA",
  "jasa pendirian badan usaha",
  "sertifikasi halal",
  "izin BPOM",
  "PIRT",
  "PBG",
  "SLF",
  "izin lingkungan",
  "AMDAL",
  "UKL UPL",
  "izin ekspor impor",
  "API-U",
  "API-P",
  "KITAS",
  "KITAP",
  "konsultan ISO 9001:2015",
  "konsultan perizinan terbaik",
  "konsultan perizinan Indonesia",
  "pusatperizinan.com",
  "legalitas usaha",
  "konsultan bisnis",
  "izin usaha cepat",
  "jasa legalitas perusahaan",
  "Mic Kinsey",
  "PT Top Konsultan Internasional",
  "AHU-038293.AH.01.30.Tahun 2024",
  "konsultan perizinan Tasikmalaya",
  "katalog 500 layanan perizinan",
  "konsultan perizinan terlengkap",
  "jasa perizinan seluruh Indonesia",
  "konsultan izin berbasis risiko",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Gunara Consultant — Konsultan Perizinan Usaha Terbaik Indonesia | Tersertifikasi ISO 9001:2015",
    template: "%s | Gunara Consultant",
  },
  description:
    "Konsultan perizinan Indonesia bernaung di Mic Kinsey sejak 2009, resmi berbadan hukum 2024 sebagai PT TOP KONSULTAN INTERNASIONAL (AHU Kemenkumham RI). Katalog 500+ layanan perizinan — NIB, PT/PMA, halal, BPOM, PBG/SLF — teraudit ISO 9001:2015, bergaransi 100%.",
  keywords: BASE_KEYWORDS,
  authors: [{ name: "Gunara Consultant", url: SITE.url }],
  creator: "Gunara Consultant",
  publisher: "Gunara Group",
  applicationName: "Gunara Consultant Website",
  category: "Business Consulting",
  classification: "Konsultan Perizinan & Legalitas Usaha",
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
      "x-default": "/",
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(Object.keys(verificationOther).length > 0 ? { other: verificationOther } : {}),
  },
  appleWebApp: {
    capable: true,
    title: "Gunara Consultant",
    statusBarStyle: "black-translucent",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE.url,
    siteName: "Gunara Consultant",
    title:
      "Gunara Consultant — Konsultan Perizinan Usaha Terbaik Indonesia | ISO 9001:2015",
    description:
      "Sejak 2009 di bawah standar konsultansi dunia Mic Kinsey, resmi berbadan hukum 2024 sebagai PT TOP KONSULTAN INTERNASIONAL. Katalog 500+ layanan perizinan teraudit ISO 9001:2015 — cepat, resmi, bergaransi 100%.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1344,
        height: 768,
        alt: "Gunara Consultant — Konsultan Perizinan Usaha Terbaik Indonesia",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gunara Consultant — Konsultan Perizinan Usaha Terbaik Indonesia",
    description:
      "Bernaung di Mic Kinsey sejak 2009 • Berbadan hukum 2024 (PT TOP KONSULTAN INTERNASIONAL). 500+ layanan perizinan, ISO 9001:2015, grup pusatperizinan.com.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icons/apple-icon-180.png" }],
  },
  manifest: "/manifest.webmanifest",
  other: {
    referrer: "origin-when-cross-origin",
    "geo.region": "ID-JI",
    "geo.placename": "Kota Tasikmalaya",
    "ICBM": "-7.3274, 108.2207",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0e7a55" },
    { media: "(prefers-color-scheme: dark)", color: "#0b2b22" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} antialiased bg-background text-foreground font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
