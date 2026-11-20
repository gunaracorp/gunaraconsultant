/**
 * GCONSULTANT — Single Source of Truth brand.
 * Sumber: GConsultant_Brand_Tokens.json + GConsultant_Brand_Guideline v1.0
 * Semua nama, tagline, domain, kontak mengalir dari sini.
 */
export const BRAND = {
  name: "GConsultant",
  wordmark: "GCONSULTANT",
  shortName: "GConsultant",
  tagline: "THE POLYMATHIC PROBLEM SOLVER",
  descriptor: "POLYMATHIC STRATEGY & SYSTEMS ARCHITECTURE",
  promiseId: "Menyatukan ilmu. Menata kompleksitas. Mewujudkan solusi.",
  promiseEn: "Uniting knowledge. Structuring complexity. Delivering solutions.",
  taglineId: "Konsultan Bisnis, Legalitas & Strategi Terpadu",
  taglineEn: "Integrated Business, Licensing & Strategy Consulting",
  since: 2009,
  founded: 2024,
  heritage: "Mic Kinsey",
  iso: "ISO 9001:2015",
  siteUrl: "https://www.gconsultant.web.id",
  address:
    "Andalusia Garden Cluster Granada No.11, Jln. Abdi Negara II, Kota Tasikmalaya, Jawa Barat 46115",
  addressJkt:
    "Indonesia Stock Exchange Tower 1 Level 3, Unit 304, Jl. Jendral Sudirman Kav 52-53, Desa/Kelurahan Senayan, Kec. Kebayoran Baru, Kota Adm. Jakarta Selatan, Provinsi DKI Jakarta",
  email: "halo@gconsultant.web.id",
  mailDomain: "gconsultant.web.id",
  emails: {
    general: "halo@gconsultant.web.id",
    info: "info@gconsultant.web.id",
    cs: "cs@gconsultant.web.id",
    finance: "finance@gconsultant.web.id",
    admin: "admin@gconsultant.web.id",
    founder: "gunara@gconsultant.web.id",
  },
  waNumber: "6281316516524",
  waDisplay: "+62 813-1651-6524",
  ahu: "AHU-038293.AH.01.30.Tahun 2024",
  capital: "Rp5.000.000.000",
  bank: {
    name: "BANK BCA",
    account: "0860742187",
    holder: "Gugun Gunara",
  },
} as const;

export const waLink = (text: string) =>
  `https://wa.me/${BRAND.waNumber}?text=${encodeURIComponent(text)}`;

/**
 * Email Command Center — 6 kanal email resmi cPanel (v3.9.0).
 * Satu sumber untuk UI kontak, JSON-LD contactPoint, dan README.
 * Routing: halo=umum/penawaran · info=informasi · cs=pelanggan ·
 * finance=pembayaran · admin=administrasi · gunara=kantor pendiri.
 */
export const MAIL_CHANNELS = [
  {
    key: "general",
    email: BRAND.emails.general,
    labelKey: "mailGenT",
    descKey: "mailGenD",
  },
  {
    key: "info",
    email: BRAND.emails.info,
    labelKey: "mailInfoT",
    descKey: "mailInfoD",
  },
  {
    key: "cs",
    email: BRAND.emails.cs,
    labelKey: "mailCsT",
    descKey: "mailCsD",
  },
  {
    key: "finance",
    email: BRAND.emails.finance,
    labelKey: "mailFinT",
    descKey: "mailFinD",
  },
  {
    key: "admin",
    email: BRAND.emails.admin,
    labelKey: "mailAdmT",
    descKey: "mailAdmD",
  },
  {
    key: "founder",
    email: BRAND.emails.founder,
    labelKey: "mailFouT",
    descKey: "mailFouD",
  },
] as const;

export type MailChannel = (typeof MAIL_CHANNELS)[number];

export const PROVINCE_COUNT = 38;
