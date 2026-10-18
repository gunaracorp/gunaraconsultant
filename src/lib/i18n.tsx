"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Lang = "id" | "en";

const UI_ID = {
  // Nav
  navHome: "Beranda",
  navServices: "Layanan",
  navWhy: "Keunggulan",
  navProcess: "Proses",
  navProvinces: "38 Provinsi",
  navFounder: "Pendiri",
  navFaq: "FAQ",
  navContact: "Kontak",
  navCta: "Konsultasi Gratis",
  navTagline: "Standar Kelas Dunia",
  // Hero
  heroBadge: "Berakar dari Mic Kinsey sejak 2009",
  heroTitle1: "Melegalkan Bisnis Anda dengan",
  heroTitleGold: "Standar Kelas Dunia",
  heroSub:
    "Gunara Consultant adalah pusat perizinan terlengkap di Asia — 500+ jenis perizinan, 38 provinsi, dikelola tim bersertifikasi ISO 9001:2015 dengan akar konsultan ternama dunia Mic Kinsey sejak 2009.",
  heroCta1: "Konsultasi Gratis Sekarang",
  heroCta2: "Jelajahi 500+ Layanan",
  heroStat1: "Jenis Perizinan",
  heroStat2: "Provinsi Terjangkau",
  heroStat3: "Tahun Pengalaman",
  heroStat4: "Tingkat Keberhasilan",
  heroIso: "Sistem Manajemen Mutu ISO 9001:2015",
  heroScroll: "Gulir untuk menjelajah",
  // Marquee
  marquee1: "OSS RBA",
  marquee2: "Kemenkumham RI",
  marquee3: "BPOM",
  marquee4: "SNI BSN",
  marquee5: "Halal BPJPH",
  marquee6: "BKPM",
  marquee7: "ISO 9001:2015",
  marquee8: "BNSP",
  marquee9: "38 Provinsi",
  marquee10: "Kepatuhan Penuh",
  marquee11: "46 Dewan Pakar Lintas Bidang",
  marquee12: "6.900 Tahun Pengalaman Gabungan",
  // Stats
  statsTitle: "Kepercayaan yang Dibangun Bertahun-tahun",
  // Why
  whyKicker: "Mengapa Gunara Consultant",
  whyTitle: "Alasan Klien Tidak Pernah Ragu",
  whySub:
    "Kami membangun kepercayaan lewat legalitas yang benar, proses yang transparan, dan standar mutu internasional.",
  why1: "Akar Mic Kinsey Sejak 2009",
  why1d:
    "Metodologi konsultasi kelas dunia yang dipelajari langsung di perusahaan konsultan ternama dunia Mic Kinsey sejak 2009.",
  why2: "Legal 100% Resmi",
  why2d:
    "Setiap dokumen diterbitkan lewat jalur resmi pemerintah — OSS RBA, Kemenkumham, BPOM, BSN, BPJPH. Tanpa jalan pintas berisiko.",
  why3: "Terlengkap di Asia",
  why3d:
    "500+ jenis perizinan lintas sektor: usaha, lingkungan, konstruksi, pangan, kesehatan, pariwisata, pertambangan, hingga investasi asing.",
  why4: "38 Provinsi Indonesia",
  why4d:
    "Jaringan ahli daerah di seluruh 38 provinsi — dari Aceh sampai Papua Pegunungan, termasuk provinsi pemekaran baru.",
  why5: "Tersertifikasi ISO 9001:2015",
  why5d:
    "Proses kerja kami diaudit dan disertifikasi ISO 9001:2015 — konsistensi mutu pada setiap berkas klien.",
  why6: "Transparan & Bergaransi",
  why6d:
    "Kontrak jelas, progres terpantau, dan garansi proses ulang tanpa biaya tambahan bila penolakan bukan karena dokumen klien.",
  // Services
  svcKicker: "Katalog Layanan",
  svcTitle: "500+ Perizinan, Satu Pintu",
  svcSub:
    "Telusuri katalog layanan kami. Setiap layanan memiliki halaman detail lengkap: manfaat, persyaratan, proses, estimasi biaya, dan FAQ.",
  svcSearch: "Cari layanan… mis. NIB, BPOM, SNI, PMA",
  svcAll: "Semua Kategori",
  svcView: "Lihat Detail",
  svcDuration: "Estimasi",
  svcFrom: "Mulai",
  svcCount: "layanan halaman detail SEO penuh",
  svcEmpty: "Tidak ada layanan yang cocok dengan pencarian Anda.",
  // Process
  procKicker: "Alur Kerja",
  procTitle: "5 Langkah Menuju Legalitas",
  procSub: "Proses baku tersertifikasi ISO 9001:2015 — Anda selalu tahu posisi berkas Anda.",
  proc1: "Konsultasi Gratis",
  proc1d:
    "Ceritakan rencana bisnis Anda via WhatsApp. Tim kami memetakan perizinan yang wajib dan opsional.",
  proc2: "Analisis & Penawaran",
  proc2d:
    "Kami kirim analisis kebutuhan, rincian biaya transparan, dan estimasi waktu tanpa biaya tersembunyi.",
  proc3: "Kontrak & Dokumen",
  proc3d:
    "Setuju? Kontrak resmi ditandatangani, pembayaran ke rekening resmi, lalu kami mulai menyusun dokumen.",
  proc4: "Pengurusan Penuh",
  proc4d:
    "Tim kami mengurus seluruh proses ke instansi. Anda hanya perlu menandatangani saat diminta. Progres dilaporkan rutin.",
  proc5: "Penyerahan & Garansi",
  proc5d:
    "Dokumen legal diserahkan lengkap. Bila terjadi penolakan bukan karena kelalaian klien, kami proses ulang gratis.",
  // Provinces
  provKicker: "Cakupan Nasional",
  provTitle: "Melayani 38 Provinsi Indonesia",
  provSub:
    "Dari Sabang sampai Jayapura — termasuk 4 provinsi pemekaran Papua (Papua Selatan, Papua Tengah, Papua Pegunungan, Papua Barat Daya). Tim ahli lokal kami siap menangani regulasi khusus tiap daerah.",
  provCount: "provinsi terjangkau penuh",
  // Founder
  fouKicker: "Tentang Pendiri",
  fouTitle: "Gugun Gunara",
  fouRole: "Pendiri & Direktur Utama",
  fouP1:
    "Perjalanan Gugun Gunara di dunia konsultansi dimulai pada tahun 2009 di Mic Kinsey — perusahaan konsultan ternama dunia. Selama lebih dari satu dekade, ia mendalami standar penelitian, metodologi, dan disiplin layanan kelas internasional yang menjadi fondasi DNA Gunara Consultant.",
  fouP2:
    "Pada tahun 2024, visi tersebut dilembagakan: Gunara Consultant resmi berbadan usaha di Kota Tasikmalaya dengan modal dasar Rp5.000.000.000, terdaftar di Kemenkumham RI (AHU-038293.AH.01.30.Tahun 2024). Dengan sistem mutu tersertifikasi ISO 9001:2015, kami membawa standar konsultan global ke seluruh 38 provinsi Indonesia.",
  fouP3:
    "Misi kami sederhana namun ambisius: menjadikan Gunara Consultant pusat perizinan terlengkap di Asia, tempat setiap pelaku usaha — dari UMKM hingga PMA — melegalkan bisnisnya dengan tenang, cepat, dan 100% resmi.",
  fouChip1: "Dekade Pengalaman",
  fouChip2: "Modal Dasar Rp5 M",
  fouChip3: "ISO 9001:2015",
  fouChip4: "Visi #1 Asia Tenggara",
  fouPrinciples: "Empat Prinsip Pendiri",
  fouPrin1: "Integritas Tanpa Kompromi",
  fouPrin1d: "Tidak ada jalan pintas ilegal. Legalitas harus benar-benar bersih.",
  fouPrin2: "Presisi ala Mic Kinsey",
  fouPrin2d: "Setiap berkas diteliti dua kali sebelum masuk ke instansi.",
  fouPrin3: "Klien adalah Partner",
  fouPrin3d: "Kami sukses ketika bisnis klien resmi berjalan dan bertumbuh.",
  fouPrin4: "Edukasi Membangun Negeri",
  fouPrin4d: "Kami berbagi pengetahuan agar Indonesia makin taat regulasi.",
  fouQuote:
    "“Legalitas bukan biaya, melainkan fondasi keberanian berbisnis besar.”",
  fouPhotoAlt: "Foto Gugun Gunara — Pendiri & Direktur Utama Gunara Consultant",
  // BCA / Official account
  bcaKicker: "Pembayaran Resmi",
  bcaTitle: "Satu-satunya Rekening Resmi",
  bcaSub:
    "Seluruh pembayaran layanan Gunara Consultant HANYA ke rekening di bawah ini. Kami tidak pernah memakai rekening pribadi lain, rekening perantara, atau rekening atas nama siapa pun selain pendiri kami.",
  bcaBank: "BANK BCA",
  bcaNumber: "Nomor Rekening",
  bcaHolder: "Atas Nama",
  bcaCopy: "Salin Nomor",
  bcaCopied: "Tersalin!",
  bcaWarningTitle: "Waspadai Penipuan!",
  bcaWarning:
    "Gunara Consultant TIDAK memiliki rekening lain selain BCA 0860742187 a.n. Gugun Gunara. Bila ada pihak yang meminta transfer ke rekening berbeda dengan mengatasnamakan kami, tolak dan laporkan segera ke kontak resmi kami.",
  bcaVerify: "Verifikasi langsung via WhatsApp resmi:",
  // Testimonials
  tesKicker: "Testimoni",
  tesTitle: "Kata Mereka yang Sudah Legal",
  // FAQ
  faqKicker: "Pertanyaan Umum",
  faqTitle: "Segala yang Ingin Anda Tanyakan",
  // CTA
  ctaTitle: "Siap Melegalkan Bisnis Anda Hari Ini?",
  ctaSub:
    "Konsultasi gratis, tanpa komitmen. Ceritakan rencana Anda — tim kami menjawab cepat di jam kerja.",
  ctaWa: "Chat WhatsApp Sekarang",
  ctaEmail: "Kirim Email",
  // Contact
  conKicker: "Kontak Resmi",
  conTitle: "Kunjungi atau Hubungi Kami",
  conAddress: "Alamat Kantor",
  conAddrHq: "Kantor Pusat — Tasikmalaya",
  conAddrJkt: "Kantor Perwakilan — Jakarta",
  conWa: "WhatsApp / Telepon",
  conEmail: "Email Resmi",
  conFormTitle: "Kirim Permintaan Konsultasi",
  conName: "Nama Lengkap",
  conNamePh: "mis. Budi Santoso",
  conPhone: "Nomor WhatsApp",
  conPhonePh: "mis. 0812xxxxxxx",
  conService: "Layanan yang Dibutuhkan",
  conServicePh: "Pilih layanan…",
  conMsg: "Ceritakan kebutuhan Anda",
  conMsgPh: "mis. Saya ingin mendirikan PT untuk usaha manufaktur di Bekasi…",
  conSubmit: "Kirim via WhatsApp",
  conSending: "Menyiapkan WhatsApp…",
  conGroupSite: "Portal Grup",
  // Footer
  footDesc:
    "Pusat perizinan terlengkap di Asia. Berakar dari Mic Kinsey sejak 2009, tersertifikasi ISO 9001:2015, melayani 38 provinsi Indonesia dengan 500+ jenis perizinan.",
  footServices: "Layanan Populer",
  footCategories: "Kategori",
  footContact: "Kontak",
  footLegal:
    "Berbadan usaha resmi terdaftar Kemenkumham RI (AHU-038293.AH.01.30.Tahun 2024)",
  footRights: "© 2025 Gunara Consultant. Seluruh hak cipta dilindungi.",
  footDisclaimer:
    "Website resmi Gunara Consultant. Pembayaran hanya ke rekening BCA 0860742187 a.n. Gugun Gunara.",
  // Service page
  spBenefits: "Manfaat untuk Anda",
  spReq: "Persyaratan Umum",
  spSteps: "Proses Pengurusan",
  spFaq: "Pertanyaan Seputar Layanan",
  spDuration: "Estimasi Waktu",
  spPrice: "Biaya Mulai",
  spDiscuss: "Diskusikan Layanan Ini",
  spArea: "Area Layanan",
  spAreaD: "Seluruh 38 provinsi Indonesia — offline & online.",
  spTrust: "Pembayaran aman hanya ke rekening resmi BCA 0860742187 a.n. Gugun Gunara.",
  spRelated: "Layanan Terkait",
  spBreadcrumbHome: "Beranda",
  spBreadcrumbServices: "Layanan",
  spGuarantee: "Garansi proses ulang",
  spOfficial: "Jalur 100% resmi",
  spSupport: "Progres dilaporkan rutin",
  // Floating WhatsApp
  waFloatAria: "Chat WhatsApp resmi Gunara Consultant",
  waFloatLabel: "Chat WhatsApp",
  waFloatSub: "Respon Cepat • Resmi",
  // Dewan Pakar
  cnlKicker: "Dewan Pakar Global",
  cnlTitle: "Diperkuat 46 Dewan Pakar Lintas Bidang",
  cnlSub:
    "Setiap bidang dikurasi pakar yang mewarisi praktik terbaik 150 tahun — keahlian berlapis lintas disiplin, hasil yang teruji kelas dunia.",
  cnl1V: "46",
  cnl1L: "Dewan Pakar Lintas Bidang",
  cnl2V: "150 Tahun",
  cnl2L: "Warisan Praktik per Bidang",
  cnl3V: "6.900",
  cnl3L: "Tahun Pengalaman Gabungan",
  cnl4V: "ISO 9001",
  cnl4L: "Standar Mutu Terjamin",
  // Language
  langLabel: "Bahasa",
};

export type UIKey = keyof typeof UI_ID;

const UI_EN: Record<UIKey, string> = {
  navHome: "Home",
  navServices: "Services",
  navWhy: "Why Us",
  navProcess: "Process",
  navProvinces: "38 Provinces",
  navFounder: "Founder",
  navFaq: "FAQ",
  navContact: "Contact",
  navCta: "Free Consultation",
  navTagline: "World-Class Standards",
  heroBadge: "Rooted in Mic Kinsey since 2009",
  heroTitle1: "Legalize Your Business with",
  heroTitleGold: "World-Class Standards",
  heroSub:
    "Gunara Consultant is the most complete licensing center in Asia — 500+ license types across 38 provinces, managed by an ISO 9001:2015 certified team rooted in the world-renowned consultancy Mic Kinsey since 2009.",
  heroCta1: "Free Consultation Now",
  heroCta2: "Explore 500+ Services",
  heroStat1: "License Types",
  heroStat2: "Provinces Covered",
  heroStat3: "Years of Experience",
  heroStat4: "Success Rate",
  heroIso: "ISO 9001:2015 Quality Management System",
  heroScroll: "Scroll to explore",
  marquee1: "OSS RBA",
  marquee2: "Kemenkumham RI",
  marquee3: "BPOM",
  marquee4: "SNI BSN",
  marquee5: "Halal BPJPH",
  marquee6: "BKPM",
  marquee7: "ISO 9001:2015",
  marquee8: "BNSP",
  marquee9: "38 Provinces",
  marquee10: "Full Compliance",
  marquee11: "46 Cross-Disciplinary Expert Councils",
  marquee12: "6,900 Years of Combined Expertise",
  statsTitle: "Trust Built Over the Years",
  whyKicker: "Why Gunara Consultant",
  whyTitle: "Why Clients Never Hesitate",
  whySub:
    "We build trust through genuine legality, transparent processes, and international quality standards.",
  why1: "Mic Kinsey Roots Since 2009",
  why1d:
    "World-class consulting methodology learned directly at the renowned global firm Mic Kinsey since 2009.",
  why2: "100% Official Legal Path",
  why2d:
    "Every document is issued through official government channels — OSS RBA, Kemenkumham, BPOM, BSN, BPJPH. No risky shortcuts.",
  why3: "Most Complete in Asia",
  why3d:
    "500+ license types across sectors: business, environment, construction, food, health, tourism, mining, and foreign investment.",
  why4: "38 Provinces of Indonesia",
  why4d:
    "Local expert network across all 38 provinces — from Aceh to Papua Pegunungan, including the newest split provinces.",
  why5: "ISO 9001:2015 Certified",
  why5d:
    "Our workflow is audited and certified ISO 9001:2015 — consistent quality on every client file.",
  why6: "Transparent & Guaranteed",
  why6d:
    "Clear contracts, monitored progress, and a free reprocessing guarantee if rejection is not caused by client documents.",
  svcKicker: "Service Catalog",
  svcTitle: "500+ Licenses, One Door",
  svcSub:
    "Browse our catalog. Every service has a fully SEO-optimized detail page: benefits, requirements, process, estimated cost, and FAQ.",
  svcSearch: "Search services… e.g. NIB, BPOM, SNI, PMA",
  svcAll: "All Categories",
  svcView: "View Details",
  svcDuration: "Duration",
  svcFrom: "From",
  svcCount: "services with full-SEO detail pages",
  svcEmpty: "No services match your search.",
  procKicker: "Workflow",
  procTitle: "5 Steps to Legality",
  procSub:
    "ISO 9001:2015 certified standard process — you always know where your file stands.",
  proc1: "Free Consultation",
  proc1d:
    "Tell us your business plan via WhatsApp. Our team maps the mandatory and optional licenses.",
  proc2: "Analysis & Offer",
  proc2d:
    "We send a needs analysis, transparent cost breakdown, and timeline — no hidden fees.",
  proc3: "Contract & Documents",
  proc3d:
    "Agree? Official contract signed, payment to the official account, then we start preparing documents.",
  proc4: "Full Processing",
  proc4d:
    "Our team handles everything with the authorities. You only sign when needed. Progress reported regularly.",
  proc5: "Handover & Guarantee",
  proc5d:
    "Legal documents handed over complete. If rejection is not caused by client negligence, we reprocess for free.",
  provKicker: "National Coverage",
  provTitle: "Serving All 38 Provinces of Indonesia",
  provSub:
    "From Sabang to Jayapura — including the 4 new Papua provinces (Papua Selatan, Papua Tengah, Papua Pegunungan, Papua Barat Daya). Our local experts are ready for each region's specific regulations.",
  provCount: "provinces fully covered",
  fouKicker: "About the Founder",
  fouTitle: "Gugun Gunara",
  fouRole: "Founder & Chief Executive Officer",
  fouP1:
    "Gugun Gunara's journey in consulting began in 2009 at Mic Kinsey — a world-renowned consulting firm. For over a decade he mastered international-grade research standards, methodology, and service discipline that became the DNA foundation of Gunara Consultant.",
  fouP2:
    "In 2024, that vision was institutionalized: Gunara Consultant officially became a legal entity in Kota Tasikmalaya with Rp5,000,000,000 authorized capital, registered with the Ministry of Law of the Republic of Indonesia (AHU-038293.AH.01.30.Tahun 2024). With an ISO 9001:2015 certified quality system, we bring global consulting standards to all 38 provinces of Indonesia.",
  fouP3:
    "Our mission is simple yet ambitious: to make Gunara Consultant the most complete licensing center in Asia — where every entrepreneur, from SMEs to foreign investors, legalizes their business calmly, quickly, and 100% officially.",
  fouChip1: "Decade of Experience",
  fouChip2: "Rp5B Authorized Capital",
  fouChip3: "ISO 9001:2015",
  fouChip4: "Vision: #1 in Southeast Asia",
  fouPrinciples: "The Founder's Four Principles",
  fouPrin1: "Integrity Without Compromise",
  fouPrin1d: "No illegal shortcuts. Legality must be genuinely clean.",
  fouPrin2: "Mic Kinsey Precision",
  fouPrin2d: "Every file is double-checked before entering government offices.",
  fouPrin3: "Clients are Partners",
  fouPrin3d: "We succeed when our clients' businesses run legally and grow.",
  fouPrin4: "Educating the Nation",
  fouPrin4d: "We share knowledge so Indonesia grows more compliant.",
  fouQuote:
    "“Legality is not a cost — it is the foundation of courage to build a big business.”",
  fouPhotoAlt: "Photo of Gugun Gunara — Founder & CEO of Gunara Consultant",
  bcaKicker: "Official Payment",
  bcaTitle: "The Only Official Bank Account",
  bcaSub:
    "All payments for Gunara Consultant services go ONLY to the account below. We never use other personal accounts, intermediary accounts, or accounts under any name other than our founder.",
  bcaBank: "BANK BCA",
  bcaNumber: "Account Number",
  bcaHolder: "Account Holder",
  bcaCopy: "Copy Number",
  bcaCopied: "Copied!",
  bcaWarningTitle: "Beware of Fraud!",
  bcaWarning:
    "Gunara Consultant does NOT have any other bank account besides BCA 0860742187 under the name Gugun Gunara. If anyone asks you to transfer to a different account claiming to be us, refuse and report immediately to our official contact.",
  bcaVerify: "Verify directly via our official WhatsApp:",
  tesKicker: "Testimonials",
  tesTitle: "What Our Legalized Clients Say",
  faqKicker: "Frequently Asked Questions",
  faqTitle: "Everything You Want to Ask",
  ctaTitle: "Ready to Legalize Your Business Today?",
  ctaSub:
    "Free consultation, no commitment. Tell us your plan — our team replies fast during office hours.",
  ctaWa: "Chat on WhatsApp Now",
  ctaEmail: "Send an Email",
  conKicker: "Official Contact",
  conTitle: "Visit or Reach Us",
  conAddress: "Office Address",
  conAddrHq: "Head Office — Tasikmalaya",
  conAddrJkt: "Jakarta Representative Office",
  conWa: "WhatsApp / Phone",
  conEmail: "Official Email",
  conFormTitle: "Send a Consultation Request",
  conName: "Full Name",
  conNamePh: "e.g. Budi Santoso",
  conPhone: "WhatsApp Number",
  conPhonePh: "e.g. 0812xxxxxxx",
  conService: "Service Needed",
  conServicePh: "Choose a service…",
  conMsg: "Tell us your needs",
  conMsgPh: "e.g. I want to establish a PT for a manufacturing business in Bekasi…",
  conSubmit: "Send via WhatsApp",
  conSending: "Preparing WhatsApp…",
  conGroupSite: "Group Portal",
  footDesc:
    "The most complete licensing center in Asia. Rooted in Mic Kinsey since 2009, ISO 9001:2015 certified, serving 38 provinces of Indonesia with 500+ license types.",
  footServices: "Popular Services",
  footCategories: "Categories",
  footContact: "Contact",
  footLegal:
    "Officially registered entity at the Ministry of Law of the Republic of Indonesia (AHU-038293.AH.01.30.Tahun 2024)",
  footRights: "© 2025 Gunara Consultant. All rights reserved.",
  footDisclaimer:
    "Official website of Gunara Consultant. Payments only to BCA account 0860742187 under the name Gugun Gunara.",
  spBenefits: "Benefits for You",
  spReq: "General Requirements",
  spSteps: "Processing Steps",
  spFaq: "Questions About This Service",
  spDuration: "Estimated Time",
  spPrice: "Price From",
  spDiscuss: "Discuss This Service",
  spArea: "Service Area",
  spAreaD: "All 38 provinces of Indonesia — on-site & online.",
  spTrust:
    "Secure payment only to the official BCA account 0860742187 under the name Gugun Gunara.",
  spRelated: "Related Services",
  spBreadcrumbHome: "Home",
  spBreadcrumbServices: "Services",
  spGuarantee: "Reprocess guarantee",
  spOfficial: "100% official channel",
  spSupport: "Progress reported regularly",
  // Floating WhatsApp
  waFloatAria: "Official Gunara Consultant WhatsApp chat",
  waFloatLabel: "Chat on WhatsApp",
  waFloatSub: "Fast Response • Official",
  // Expert Council
  cnlKicker: "Global Expert Council",
  cnlTitle: "Backed by 46 Cross-Disciplinary Expert Councils",
  cnlSub:
    "Every field is curated by experts inheriting 150 years of best practice — layered cross-disciplinary expertise, world-class proven results.",
  cnl1V: "46",
  cnl1L: "Cross-Disciplinary Expert Councils",
  cnl2V: "150 Years",
  cnl2L: "Practice Legacy per Field",
  cnl3V: "6,900",
  cnl3L: "Combined Years of Expertise",
  cnl4V: "ISO 9001",
  cnl4L: "Certified Quality Standard",
  langLabel: "Language",
};

const DICT: Record<Lang, Record<UIKey, string>> = { id: UI_ID, en: UI_EN };

const LANG_KEY = "gunara-lang";
const LANG_LISTENERS = new Set<() => void>();

function subscribeLang(onChange: () => void) {
  LANG_LISTENERS.add(onChange);
  return () => LANG_LISTENERS.delete(onChange);
}

function getLangSnapshot(): Lang {
  if (typeof window === "undefined") return "id";
  try {
    return window.localStorage.getItem(LANG_KEY) === "en" ? "en" : "id";
  } catch {
    return "id";
  }
}

function getLangServerSnapshot(): Lang {
  return "id";
}

function writeLang(next: Lang) {
  try {
    window.localStorage.setItem(LANG_KEY, next);
  } catch {
    /* noop */
  }
  LANG_LISTENERS.forEach((fn) => fn());
}

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: UIKey) => string;
}

const LanguageContext = createContext<LangCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(
    subscribeLang,
    getLangSnapshot,
    getLangServerSnapshot
  );

  const setLang = useCallback((l: Lang) => writeLang(l), []);

  const t = useCallback((k: UIKey) => DICT[lang][k] ?? DICT.id[k], [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang(): LangCtx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
