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
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Gunara Consultant — Konsultan Perizinan Usaha Terbaik Indonesia | Tersertifikasi ISO 9001:2015",
    template: "%s | Gunara Consultant",
  },
  description:
    "Gunara Consultant adalah konsultan perizinan usaha kelas dunia bersertifikasi ISO 9001:2015. Pengurusan NIB, pendirian PT/PMA, sertifikasi halal, BPOM/PIRT, PBG & SLF, izin lingkungan, hingga izin internasional. Cepat, resmi, transparan, bergaransi 100%.",
  keywords: BASE_KEYWORDS,
  authors: [{ name: "Gunara Consultant", url: SITE.url }],
  creator: "Gunara Consultant",
  publisher: "Gunara Group",
  applicationName: "Gunara Consultant Website",
  category: "Business Consulting",
  classification: "Konsultan Perizinan & Legalitas Usaha",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
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
      "Mengurus segala perizinan usaha Anda: NIB 1 hari, PT 3 hari, sertifikasi halal, BPOM, PBG/SLF, hingga izin internasional. Tersertifikasi ISO 9001:2015, bergaransi 100%.",
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
      "Tersertifikasi ISO 9001:2015. NIB 1 hari, PT 3 hari, segala izin usaha diurus cepat, resmi & bergaransi 100%. Grup PusatPerizinan.com.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon.svg" }],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "geo.region": "ID-JK",
    "geo.placename": "Jakarta",
    "ICBM": "-6.2247, 106.8090",
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
