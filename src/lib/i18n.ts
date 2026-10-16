/**
 * Gunara Consultant — Fondasi i18n (Tahap 1: ID ⇄ EN).
 *
 * - Pure data (TANPA "use client") — aman dipakai di server & client.
 * - COPY_ID dibangun dari src/lib/data.ts (single source of truth) dan
 *   dibungkus ke interface ketat; COPY_EN adalah terjemahan Inggris
 *   profesional kelas bisnis dari seluruh konten Tahap 1.
 * - UI_ID / UI_EN: dictionary string UI dengan PARITY KEY dijamin compiler
 *   (UI_EN bertipe Record<keyof typeof UI_ID, string>).
 * - Angka, nama brand, dan regulasi TIDAK diterjemahkan
 *   (NIB, OSS-RBA, BPOM, AHU-038293, Mic Kinsey, dst. tetap).
 */

import {
  NAV_LINKS,
  HERO_STATS,
  HERO_FLOAT_CARDS,
  MARQUEE_ITEMS,
  CONTACT_SERVICES,
  WHY_US,
  COMPARISON,
  PROCESS_STEPS,
  ISO_PRINCIPLES,
  FAQS,
  TESTIMONIALS,
  INTERNATIONAL,
  COVERAGE_REGIONS,
  SERVICES,
  SERVICE_CATEGORIES,
} from "@/lib/data";
import { PHASES, type PhaseMeta } from "@/data/services-types";
import { SITE } from "@/lib/data";
import {
  MISA_FAQ,
  MISA_ID_TO_SA,
  MISA_SA_TO_ID,
  MISA_STEPS,
} from "@/data/misa";

/* ============ Types ============ */

export type Lang = "id" | "en";

export interface NavItem {
  label: string;
  href: string;
  xlOnly?: boolean;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface FloatCard {
  title: string;
  time: string;
  icon: string;
  accent: string;
}

export interface MarqueeItem {
  text: string;
}

export interface WhyItem {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStepItem {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  rating: number;
  service: string;
}

export interface IntlItem {
  country: string;
  service: string;
}

export interface PhaseText {
  id: number;
  name: string;
  tagline: string;
  description: string;
}

export interface MisaServiceItem {
  title: string;
  desc: string;
  icon: string;
}

export interface MisaStepItem {
  step: string;
  title: string;
  desc: string;
}

export interface MisaQaItem {
  q: string;
  a: string;
}

export interface ComparisonSide {
  name: string;
  points: string[];
}

export interface ComparisonPair {
  us: ComparisonSide;
  others: ComparisonSide;
}

export interface ServiceCard {
  title: string;
  category: string;
  description: string;
  price: string;
  time: string;
  icon: string;
  features: string[];
}

export interface ServiceCategoryItem {
  value: string;
  label: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  text: string;
}

export interface CertRow {
  label: string;
  value: string;
  mono?: boolean;
}

export interface Copy {
  nav: NavItem[];
  heroStats: StatItem[];
  floatCards: FloatCard[];
  marquee: string[];
  contactServices: readonly string[];
  whyUs: WhyItem[];
  comparison: ComparisonPair;
  processSteps: ProcessStepItem[];
  isoPrinciples: { title: string; description: string }[];
  faqs: FaqItem[];
  testimonials: TestimonialItem[];
  international: IntlItem[];
  coverageRegions: string[];
  phases: PhaseText[];
  trustItems: string[];
  misaFaq: MisaQaItem[];
  misaSaToId: MisaServiceItem[];
  misaIdToSa: MisaServiceItem[];
  misaSteps: MisaStepItem[];
  services: ServiceCard[];
  serviceCategories: ServiceCategoryItem[];
  values: { title: string; text: string }[];
  trustPoints: string[];
  timeline: TimelineItem[];
  certRows: CertRow[];
  months: string[];
}

/* ============ Mappers: bungkus data const (as const) ke interface ketat ============ */

function toNavItems(links: readonly { label: string; href: string; xlOnly?: boolean }[]): NavItem[] {
  return links.map((l) => {
    const item: NavItem = { label: l.label, href: l.href };
    if (l.xlOnly) item.xlOnly = true;
    return item;
  });
}

function toStats(stats: readonly { value: number; suffix: string; label: string }[]): StatItem[] {
  return stats.map((s) => ({ value: s.value, suffix: s.suffix, label: s.label }));
}

function toFloatCards(
  cards: readonly { title: string; time: string; icon: string; accent: string }[]
): FloatCard[] {
  return cards.map((c) => ({ title: c.title, time: c.time, icon: c.icon, accent: c.accent }));
}

function toMarquee(items: readonly string[]): string[] {
  return items.map((item) => item);
}

function toWhyItems(
  rows: readonly { title: string; description: string; icon: string }[]
): WhyItem[] {
  return rows.map((r) => ({
    title: r.title,
    description: r.description,
    icon: r.icon,
  }));
}

function toProcessSteps(
  rows: readonly { step: string; title: string; description: string; icon: string }[]
): ProcessStepItem[] {
  return rows.map((r) => ({
    step: r.step,
    title: r.title,
    description: r.description,
    icon: r.icon,
  }));
}

function toFaqs(
  rows: readonly { question: string; answer: string }[]
): FaqItem[] {
  return rows.map((r) => ({ question: r.question, answer: r.answer }));
}

function toTestimonials(
  rows: readonly {
    name: string;
    role: string;
    content: string;
    rating: number;
    service: string;
  }[]
): TestimonialItem[] {
  return rows.map((r) => ({
    name: r.name,
    role: r.role,
    content: r.content,
    rating: r.rating,
    service: r.service,
  }));
}

function toInternational(
  rows: readonly { country: string; service: string }[]
): IntlItem[] {
  return rows.map((r) => ({ country: r.country, service: r.service }));
}

function toComparison(c: {
  us: { name: string; points: readonly string[] };
  others: { name: string; points: readonly string[] };
}): ComparisonPair {
  return {
    us: { name: c.us.name, points: [...c.us.points] },
    others: { name: c.others.name, points: [...c.others.points] },
  };
}

function toPhaseTexts(rows: readonly PhaseMeta[]): PhaseText[] {
  return rows.map((p) => ({
    id: p.id,
    name: p.name,
    tagline: p.tagline,
    description: p.description,
  }));
}

const MISA_TRUST_ID = [
  "ISO 9001:2015",
  "Warisan Mic Kinsey sejak 2009",
  "AHU-038293 Kemenkumham 2024",
  "English-Speaking Desk",
] as const;

/* ---- Konstanta ID untuk about & heritage (dipindah dari komponen) ---- */

const VALUES_ABOUT = [
  {
    title: "Misi",
    text: "Menyederhanakan legalitas bisnis Indonesia dengan layanan cepat, transparan, dan bergaransi — agar pelaku usaha fokus tumbuh.",
  },
  {
    title: "Visi",
    text: "Menjadi pusat perizinan terlengkap di Asia — bahkan dunia — dengan standar mutu internasional ISO 9001:2015 yang paling terpercaya.",
  },
  {
    title: "Nilai Kami",
    text: "Integritas tanpa kompromi, kecepatan tanpa mengorbankan ketelitian, dan empati pada setiap cerita bisnis klien.",
  },
] as const;

const TRUST_POINTS_ABOUT = [
  "Berakar sejak 2009 — 15+ tahun pengalaman konsultansi kelas dunia",
  "Resmi berbadan hukum 2024: PT TOP KONSULTAN INTERNASIONAL (AHU Kemenkumham RI)",
  "Katalog 600+ layanan — terlengkap di Asia, mencakup perizinan lintas negara",
  "Bagian dari Gunara Consultant Group bersama pusatperizinan.com",
  "Sistem manajemen mutu ISO 9001:2015 teraudit",
  "Tim bersertifikasi: hukum, perpajakan & lingkungan",
] as const;

const TIMELINE_HERITAGE = [
  {
    year: "2009",
    title: "Berdirinya Visi",
    text: "Sejak 2009, para pendiri Gunara Consultant menekuni ilmu konsultansi kelas dunia di bawah naungan Mic Kinsey — menyerap metodologi, disiplin mutu, dan budaya solusi global yang kini menjadi DNA layanan kami: presisi, integritas, dan obsesi pada hasil klien.",
  },
  {
    year: "2009–2024",
    title: "15 Tahun Membekali Ribuan Pelaku Usaha",
    text: "Lebih dari satu dekade menemani UMKM hingga korporasi menembus kerumitan birokrasi. Pengalaman lintas sektor itu mengkristal menjadi penguasaan 600+ jenis perizinan — terlengkap di Asia — dari izin UMKM kampung hingga pendirian perusahaan di Singapura, Dubai, dan Arab Saudi.",
  },
  {
    year: "11 Juli 2024",
    title: "Kelahiran Badan Hukum",
    text: "Gunara Consultant resmi berbadan usaha sebagai PT TOP KONSULTAN INTERNASIONAL — Sertifikat Nomor AHU-038293.AH.01.30.Tahun 2024, terbit dari Kementerian Hukum dan HAM RI, berkedudukan di Kota Tasikmalaya, dengan modal usaha Rp5.000.000.000,00.",
  },
  {
    year: "Kini",
    title: "Gunara Consultant Group",
    text: "Mengelola pusatperizinan.com sebagai jendela digital layanan perizinan; satu pintu kepastian hukum untuk seluruh Indonesia — dan terus bertumbuh.",
  },
] as const;

const CERT_ROWS_HERITAGE = [
  { label: "Nomor Sertifikat", value: SITE.ahucert, mono: true },
  { label: "Entitas", value: SITE.legalName },
  { label: "Diterbitkan Oleh", value: "Kementerian Hukum dan HAM RI" },
  { label: "Tanggal Terbit", value: "11 Juli 2024" },
  { label: "Kedudukan", value: "Kota Tasikmalaya, Jawa Barat" },
  { label: "Modal Usaha", value: SITE.capital },
  { label: "Pendiri", value: SITE.founder },
] as const;

/* ============ COPY_ID — dari data.ts (Bahasa Indonesia, SSR default) ============ */

const COPY_ID: Copy = {
  nav: toNavItems(NAV_LINKS),
  heroStats: toStats(HERO_STATS),
  floatCards: toFloatCards(HERO_FLOAT_CARDS),
  marquee: toMarquee(MARQUEE_ITEMS),
  contactServices: CONTACT_SERVICES,
  whyUs: toWhyItems(WHY_US),
  comparison: toComparison(COMPARISON),
  processSteps: toProcessSteps(PROCESS_STEPS),
  isoPrinciples: ISO_PRINCIPLES.map((p) => ({
    title: p.title,
    description: p.description,
  })),
  faqs: toFaqs(FAQS),
  testimonials: toTestimonials(TESTIMONIALS),
  international: toInternational(INTERNATIONAL),
  coverageRegions: toMarquee(COVERAGE_REGIONS),
  phases: toPhaseTexts(PHASES),
  trustItems: [...MISA_TRUST_ID],
  misaFaq: MISA_FAQ.map((f) => ({ q: f.q, a: f.a })),
  misaSaToId: MISA_SA_TO_ID.map((s) => ({ ...s })),
  misaIdToSa: MISA_ID_TO_SA.map((s) => ({ ...s })),
  misaSteps: MISA_STEPS.map((s) => ({ ...s })),
  services: SERVICES.map((s) => ({
    title: s.title,
    category: s.category,
    description: s.description,
    price: s.price,
    time: s.time,
    icon: s.icon,
    features: [...s.features],
  })),
  serviceCategories: SERVICE_CATEGORIES.map((c) => ({
    value: c.value,
    label: c.label,
  })),
  values: VALUES_ABOUT.map((v) => ({ title: v.title, text: v.text })),
  trustPoints: [...TRUST_POINTS_ABOUT],
  timeline: TIMELINE_HERITAGE.map((t) => ({
    year: t.year,
    title: t.title,
    text: t.text,
  })),
  certRows: CERT_ROWS_HERITAGE.map((r) => ({
    label: r.label,
    value: r.value,
    ...(r.mono ? { mono: true } : {}),
  })),
  months: [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ],
};

/* ============ COPY_EN — terjemahan Inggris profesional ============ */

const COPY_EN: Copy = {
  nav: [
    { label: "Home", href: "#beranda" },
    { label: "About", href: "#tentang" },
    { label: "Services", href: "#layanan" },
    { label: "Catalog 600+", href: "#katalog" },
    { label: "Phases", href: "#fase" },
    { label: "Why Us", href: "#keunggulan" },
    { label: "Process", href: "#proses", xlOnly: true },
    { label: "Testimonials", href: "#testimoni", xlOnly: true },
    { label: "FAQ", href: "#faq", xlOnly: true },
    { label: "Articles", href: "#artikel", xlOnly: true },
    { label: "Saudi Desk", href: "#misa", xlOnly: true },
    { label: "Contact", href: "#kontak" },
  ],
  heroStats: [
    { value: 16, suffix: "+", label: "Years of Consulting Excellence" },
    { value: 600, suffix: "+", label: "Licensing Services — The Most Complete in Asia" },
    { value: 34, suffix: "", label: "Provinces Covered" },
    { value: 98, suffix: "%", label: "Satisfied Clients Who Recommend Us" },
  ],
  floatCards: [
    { title: "NIB Issued", time: "1 Business Day", icon: "zap", accent: "gold" },
    { title: "PT Incorporation", time: "3 Business Days", icon: "building", accent: "emerald" },
    {
      title: "AHU Certificate",
      time: "AHU-038293.AH.01.30.Tahun 2024",
      icon: "file-check",
      accent: "emerald",
    },
  ],
  marquee: [
    "NIB & OSS-RBA",
    "PT Company Formation",
    "PT PMA",
    "CV & Cooperatives",
    "Halal Certification",
    "BPOM & PIRT",
    "PBG & SLF",
    "AMDAL & UKL-UPL",
    "SNI",
    "API-U / API-P",
    "KITAS & KITAP",
    "NPWP & SKTU",
    "ISO 9001:2015",
    "Umrah Permits",
    "MISA Saudi Arabia",
    "Foundations & Associations",
    "Construction Permits",
    "Logistics Permits",
    "600+ Services — The Most Complete in Asia",
    "Mic Kinsey Standard",
    "AHU Verified",
    "SMK3",
    "PSE Kominfo",
  ],
  contactServices: [
    "NIB & OSS-RBA",
    "PT / CV / Sole Proprietorship Incorporation",
    "PT PMA (Foreign Investment)",
    "Global & International Licensing",
    "Halal Certification",
    "BPOM & PIRT",
    "SNI Certification",
    "ISO 9001:2015 Certification",
    "PBG & SLF",
    "Environmental Permits (AMDAL/UKL-UPL)",
    "Export-Import Permits (API-U/API-P)",
    "KITAS & KITAP",
    "Special Sector Permits",
    "MISA — Saudi Arabia",
    "Taxation & NPWP",
    "Other / General Consultation",
  ],
  whyUs: [
    {
      title: "100% Money-Back Guarantee",
      description:
        "The only consultancy with a written guarantee: if your permit is not issued as promised, you get a full refund — no drama.",
      icon: "shield-check",
    },
    {
      title: "Fastest in Its Class",
      description:
        "NIB in 1 business day, PT in 3. Our ISO 9001:2015-automated workflow ensures not a single day is wasted.",
      icon: "zap",
    },
    {
      title: "Transparent & Best-Value Pricing",
      description:
        "Every cost itemized upfront — no hidden fees, no dubious charges. Official invoices for every payment.",
      icon: "receipt",
    },
    {
      title: "Certified Expert Team",
      description:
        "Legal consultants, partner notaries, certified HSE specialists, and tax consultants with 15+ years of experience.",
      icon: "users",
    },
    {
      title: "ISO 9001:2015 Quality Management",
      description:
        "Every service process is audited against the international ISO 9001:2015 quality standard — consistent, measurable, trustworthy.",
      icon: "badge-check",
    },
    {
      title: "Lifetime Business Support",
      description:
        "After your permit is issued, we stay by your side: renewals, periodic reporting, and business expansion consulting.",
      icon: "infinity",
    },
  ],
  comparison: {
    us: {
      name: "Gunara Consultant",
      points: [
        "Written 100% money-back guarantee",
        "NIB in 1 day, PT in 3 business days",
        "ISO 9001:2015 certified",
        "Transparent pricing, official invoices",
        "34 provinces + 8 countries worldwide",
        "Lifetime business support",
        "24/7 customer support via WhatsApp",
      ],
    },
    others: {
      name: "Other Consultants",
      points: [
        "No written guarantee",
        "1–2 weeks slower",
        "Generally without quality certification",
        "Hidden fees mid-process",
        "Coverage limited to 1–2 cities",
        "Service ends when the permit is issued",
        "Limited office hours",
      ],
    },
  },
  processSteps: [
    {
      step: "01",
      title: "Free Consultation",
      description:
        "Tell us your business plan via WhatsApp, phone, or our form. Our team responds within 15 minutes during business hours.",
      icon: "message-circle",
    },
    {
      step: "02",
      title: "Analysis & Quotation",
      description:
        "We map your KBLI codes, mandatory permits, and the best legal structure. You receive a transparent quotation with no hidden fees.",
      icon: "search",
    },
    {
      step: "03",
      title: "Documents & Processing",
      description:
        "Hand over the documents — we handle the rest. Notaries, government agencies, and signatures are managed by your dedicated officer.",
      icon: "file-signature",
    },
    {
      step: "04",
      title: "Real-time Monitoring",
      description:
        "Track your application progress anytime through our dashboard and daily WhatsApp updates. No surprises.",
      icon: "activity",
    },
    {
      step: "05",
      title: "Issued & Ongoing Support",
      description:
        "Receive your official permit, guaranteed. We continue assisting with routine obligations and your business's legal growth.",
      icon: "rocket",
    },
  ],
  isoPrinciples: [
    {
      title: "Customer Focus",
      description:
        "Client satisfaction is our highest measure of quality — NPS is monitored monthly.",
    },
    {
      title: "Leadership",
      description:
        "Management is directly involved to ensure quality objectives are met in every division.",
    },
    {
      title: "People Engagement",
      description:
        "The entire team is internally certified and follows regular quality training.",
    },
    {
      title: "Process Approach",
      description:
        "Every application follows ISO-standard SOPs with quality checkpoints.",
    },
    {
      title: "Continual Improvement",
      description:
        "Internal audits and corrective actions run continuously every quarter.",
    },
    {
      title: "Evidence-Based Decisions",
      description:
        "Permit success rates, speed, and satisfaction are measured and published.",
    },
  ],
  faqs: [
    {
      question: "What is Gunara Consultant's relationship with Mic Kinsey?",
      answer:
        "Since 2009, the team behind Gunara Consultant has honed its consulting craft under Mic Kinsey, a world-renowned consulting firm. For more than 15 years we absorbed global-class methodology, quality discipline, and solution culture — then applied them to thousands of Indonesian business licensing cases before formally incorporating in 2024.",
    },
    {
      question: "Is Gunara Consultant a legally registered company?",
      answer:
        "Yes. Gunara Consultant operates through PT TOP KONSULTAN INTERNASIONAL, officially registered with Indonesia's Ministry of Law and Human Rights under incorporation certificate No. AHU-038293.AH.01.30.Tahun 2024 (issued July 11, 2024), domiciled in Kota Tasikmalaya with business capital of Rp5.000.000.000,00. Our legal standing is open for verification at any time.",
    },
    {
      question:
        "Are there really 600 licensing services — the most complete in Asia?",
      answer:
        "Yes. Our catalog lists 600+ services across 27 sectors — the only catalog covering all of Indonesia's business licensing (NIB, OSS-RBA, PT/PMA incorporation, halal, BPOM, PBG/SLF, ISO) plus Global & International Licensing: company incorporation in Singapore, Malaysia, Saudi Arabia (MISA), the United Arab Emirates, China, down to apostille and cross-border taxation. No other consultancy offers this coverage. The catalog launches in 4 implementation phases (2024–2026) and the entire workflow is audited under the ISO 9001:2015 quality management system.",
    },
    {
      question:
        "What is Gunara Consultant and how does it relate to PusatPerizinan.com?",
      answer:
        "Gunara Consultant is a business licensing & legality consultancy rooted in consulting experience since 2009. PusatPerizinan.com is the digital licensing service unit within our group. Together we have served more than 12,500 clients across 34 Indonesian provinces and 8 countries — making us the most complete licensing hub in Asia.",
    },
    {
      question:
        "Can you handle permits for businesses abroad — Singapore, Dubai, or Saudi Arabia?",
      answer:
        "Yes — this is what sets us apart from other consultants in Asia. Our Global & International Licensing category covers: Singapore Pte Ltd incorporation (ACRA), Malaysian Sdn Bhd & Labuan, Saudi Arabia MISA Investment License, Dubai & UAE free zones, China WFOE and Hong Kong, apostille for 120+ countries, cross-border holding structures, and cross-border taxation (P3B tax treaties). One team, one contract, multi-country legality.",
    },
    {
      question:
        "What makes Gunara Consultant the most complete licensing hub in Asia?",
      answer:
        "Three things: (1) coverage — 600+ official services across 27 sectors; no other Southeast Asian consultant catalogs licensing in this much detail; (2) depth — every service has a unique code, an explicit legal basis, and a measurable implementation phase; (3) reach — from village SMEs to cross-border corporations in 34 Indonesian provinces and 8 countries, all handled with ISO 9001:2015-audited SOPs.",
    },
    {
      question:
        "What does it mean that Gunara Consultant is ISO 9001:2015 certified?",
      answer:
        "ISO 9001:2015 is the international quality management standard. Our entire service process — from initial consultation and document processing to permit handover — follows standardized SOPs, undergoes periodic internal audits, and applies the principle of continual improvement. In short: consistent, measurable, accountable service.",
    },
    {
      question: "How long does the business permit process take?",
      answer:
        "NIB via OSS: 1 business day. PT/CV incorporation: 3–7 business days. Halal Certification: 14–30 days. BPOM/PIRT: 14–45 days. PBG & SLF: 7–30 days. A specific estimate is provided during your free consultation, based on the permit type and your document readiness.",
    },
    {
      question: "Is there a guarantee if the permit is not issued?",
      answer:
        "Yes. We provide a written 100% money-back guarantee if the permit is not issued as agreed due to factors on our side. This quality commitment is written into the service contract — something almost no other consultant in Indonesia offers.",
    },
    {
      question: "Do your prices include government fees?",
      answer:
        "Every quotation itemizes: consultancy fees, notary fees, and government fees (PNBP) transparently. No hidden charges. For NIB & OSS, the government even waives PNBP for micro and small businesses.",
    },
    {
      question: "I'm outside Jakarta — can I still be served?",
      answer:
        "Absolutely. The entire process can run 100% online via OSS, AHU Online, SIMBG, and SIHALAL. Our team serves 34 Indonesian provinces. For deed signing, we arrange partner notaries in your city.",
    },
    {
      question: "What documents do I need to prepare?",
      answer:
        "Generally: the owner's KTP (ID) & NPWP (tax ID), a photo of your business premises, and your intended business fields (KBLI). For a PT: at least 2 founders/shareholders. Your dedicated officer will guide you through the complete checklist step by step after the free consultation.",
    },
    {
      question: "How do I start a consultation?",
      answer:
        "Click the 'Free Consultation' button on this page, fill in the contact form, or message our WhatsApp directly at +62 812-9000-1234. Our team responds within 15 minutes during business hours (Monday–Saturday, 08.00–20.00 WIB).",
    },
  ],
  testimonials: [
    {
      name: "Budi Santoso",
      role: "Founder, Kopi Nusantara Group",
      content:
        "From NIB to halal certification for 12 products, Gunara handled everything. Fast process, responsive team, honest pricing. Their guarantee isn't just a slogan — it's genuinely written into the contract.",
      rating: 5,
      service: "NIB + Halal Certification",
    },
    {
      name: "Sarah Wijaya",
      role: "Director, PT Estetika Kosmetik",
      content:
        "The BPOM licenses for our 8 cosmetic SKUs finished faster than estimated. The consultants truly understand the regulations — they even helped review our product labels. Their ISO 9001 shows in how tidy the process is.",
      rating: 5,
      service: "BPOM License",
    },
    {
      name: "Michael Tan",
      role: "CEO, Sinar Logistik Internasional",
      content:
        "As a foreign investor, I needed certainty. Gunara handled my PT PMA, API-P, and my team's KITAS without drama. Periodic BKPM reporting was also assisted. Worth every rupiah.",
      rating: 5,
      service: "PT PMA + KITAS",
    },
    {
      name: "Drs. H. Abdul Rahman",
      role: "Owner, Pusat Oleh-oleh Makassar",
      content:
        "My family business has run for generations, but I only realized the importance of legality when we wanted to enter modern retail. Within 2 weeks, our PIRT, NIB, and trademark were done. Thank you, Gunara!",
      rating: 5,
      service: "PIRT + NIB",
    },
    {
      name: "Lintang Pramesti",
      role: "Owner, Villa Canggu Retreat",
      content:
        "Our villa's PBG and SLF in Canggu finally got settled after being stuck for 2 years with another firm. Gunara's team truly understands the SIMBG process and the DPMPTSP consultations. Highly recommended!",
      rating: 5,
      service: "PBG & SLF",
    },
    {
      name: "Fajar Nugroho",
      role: "GM, PT Baja Konstruksi Utama",
      content:
        "SBU construction certification + ISO 9001:2015 for a government tender, completed before the tender deadline. Served by a dedicated officer who always kept us updated. This is world-class service.",
      rating: 5,
      service: "SBU + ISO Certification",
    },
  ],
  international: [
    { country: "Saudi Arabia", service: "MISA & Investment License" },
    { country: "Malaysia", service: "Sdn Bhd & Labuan" },
    { country: "Singapore", service: "Pte Ltd & ACRA" },
    { country: "United Arab Emirates", service: "Free Zone & Mainland" },
    { country: "China", service: "WFOE & Hong Kong" },
    { country: "Qatar", service: "QFC & GCC Expansion" },
    { country: "Australia", service: "Pty Ltd & ASIC" },
    { country: "Netherlands", service: "BV & KVK Europe" },
  ],
  coverageRegions: [
    "DKI Jakarta",
    "West Java",
    "Central Java",
    "East Java",
    "Banten",
    "Bali",
    "North Sumatra",
    "South Sumatra",
    "Riau",
    "Riau Islands",
    "South Sulawesi",
    "East Kalimantan",
    "Yogyakarta",
    "Semarang",
    "Surabaya",
    "Medan",
    "Makassar",
    "Batam",
    "Balikpapan",
    "Denpasar",
    "+ 14 More Provinces",
  ],
  phases: [
    {
      id: 1,
      name: "Phase 1 — Foundation Legality",
      tagline: "Every business starts with a lawful name.",
      description:
        "90 core services: incorporation of every business entity, SME & regional licensing, tax administration, down to intellectual property protection — the legal foundation that opens our catalog.",
    },
    {
      id: 2,
      name: "Phase 2 — Operations & Industry",
      tagline: "Legal at birth, now in full operation.",
      description:
        "154 services to keep the business machine turning: risk-based business licensing (OSS-RBA), trade & distribution, manufacturing, logistics, workforce & immigration, plus food & halal.",
    },
    {
      id: 3,
      name: "Phase 3 — Complex Regulatory Sectors",
      tagline: "The strictest sectors, handled with total peace of mind.",
      description:
        "180 services for regulated sectors: health & pharmaceuticals (BPOM), mining & energy, environment, construction & property, tourism, agriculture–livestock–fisheries, forestry, down to events & entertainment.",
    },
    {
      id: 4,
      name: "Phase 4 — Enterprise & Global",
      tagline: "Toward world-class corporations.",
      description:
        "176 enterprise-grade services: finance & fintech (OJK), telematics & PSE, export-import & customs, education, creative media, professional services, ISO & quality certification, special & strategic licensing, up to Global & International Licensing.",
    },
  ],
  trustItems: [
    "ISO 9001:2015",
    "Mic Kinsey heritage since 2009",
    "AHU-038293 Ministry of Law & Human Rights 2024",
    "English-Speaking Desk",
  ],
  misaFaq: [
    {
      q: "What is MISA and how does it relate to my business plans in Saudi Arabia?",
      a: "MISA (Ministry of Investment of Saudi Arabia, formerly SAGIA) is the single gateway for foreign investment licensing in Saudi Arabia and the engine of Vision 2030. The MISA license is the first document a foreign company — including from Indonesia — needs in order to trade and operate legally in Saudi Arabia, before the Commercial Registration (CR) and sector licenses are issued.",
    },
    {
      q: "Can foreign investors own 100% of a company in Indonesia?",
      a: "Yes, for most sectors. Under the Positive Investment List (Presidential Regulation 10/2021 and its amendments), a PT PMA may be up to 100% foreign-owned except for certain restricted KBLI codes. Minimum paid-up capital is Rp10 billion per 5-digit KBLI field. Our team maps the KBLI codes open to foreign ownership from the very start.",
    },
    {
      q: "How long do the MISA license and company incorporation in Saudi Arabia take?",
      a: "Once official documents (deed, apostille/legalization, power of attorney) are complete, the MISA license is generally issued within business days; CR, office address, and municipal/sector licenses follow — totaling roughly 2–8 weeks depending on the sector and document readiness. We provide a written timeline in every quotation.",
    },
  ],
  misaSaToId: [
    {
      title: "100% PT PMA Establishment",
      desc: "Positive Investment List (Presidential Regulation 10/2021) — up to 100% foreign ownership, Rp10 billion paid-up capital per KBLI, foreign-friendly KBLI mapping from day one.",
      icon: "building",
    },
    {
      title: "Core Company Legality",
      desc: "Ministry of Law & Human Rights approval (SK), corporate NPWP, NIB via OSS-RBA, up to Standard Certificates — the legal foundation of your PT PMA in Indonesia.",
      icon: "file-check",
    },
    {
      title: "Sector-Specific Technical Permits",
      desc: "BPJPH Halal Certification for F&B, Environmental Approval (UKL-UPL/AMDAL), PBG & SLF building permits — tailored to your business sector.",
      icon: "layers",
    },
    {
      title: "Investor KITAS & KITAP",
      desc: "Investor residence permits including family: VITAS, investor KITAS, up to KITAP — including RPTKA and Kemnaker notification.",
      icon: "id-card",
    },
    {
      title: "Ongoing Compliance",
      desc: "Regular LKPM reports to BKPM, tax reporting, and periodic permit renewals — keeping your PT PMA always compliant with the regulators.",
      icon: "receipt",
    },
    {
      title: "SEZ & Special Facilities",
      desc: "Placement in Special Economic Zones (KEK), tax holidays, and customs facilities for maximum tax & operational efficiency.",
      icon: "palmtree",
    },
  ],
  misaIdToSa: [
    {
      title: "MISA Investment License",
      desc: "Investment license from the Ministry of Investment of Saudi Arabia — up to 100% foreign ownership in many sectors, your official gateway to the Vision 2030 market.",
      icon: "globe",
    },
    {
      title: "Commercial Registration & Municipal",
      desc: "CR with the Ministry of Commerce, registered office address, and municipal license — complete trading legality in Saudi Arabia.",
      icon: "briefcase",
    },
    {
      title: "Nitaqat & Work Permits",
      desc: "Saudization (Nitaqat) compliance, GM and expatriate staff visas & work permits via Qiwa/MOLS — a full ratio without penalties.",
      icon: "users",
    },
    {
      title: "SABER / SASO Product Certification",
      desc: "Product Certificates and Shipment Certificates of Conformity so your goods clear customs and are accepted by Saudi retailers.",
      icon: "award",
    },
    {
      title: "SFDA — Food, Supplements & Cosmetics",
      desc: "SFDA registration for food, health supplements, and cosmetics distributed in the Saudi market.",
      icon: "flask-conical",
    },
    {
      title: "Business Visas & Apostille",
      desc: "Multiple-entry business visas and corporate document legalization/apostille — expansion without bureaucratic hurdles.",
      icon: "file-signature",
    },
  ],
  misaSteps: [
    {
      step: "01",
      title: "Consultation & Market Study",
      desc: "Free — we map sector opportunities, the optimal entity structure, and the most efficient market-entry strategy.",
    },
    {
      step: "02",
      title: "Structure & License Mapping",
      desc: "Entity selection, share structure, KBLI/MISA licensing, and cross-border tax planning — all in writing.",
    },
    {
      step: "03",
      title: "Document Processing",
      desc: "Deeds, apostille/legalization, MISA license, CR, up to NIB/OSS for the Indonesia direction — your dedicated officer handles it all.",
    },
    {
      step: "04",
      title: "Operations & Compliance",
      desc: "Bank account opening, Nitaqat/LKPM, sector permits, KITAS/GM visa — your business officially operating in full.",
    },
    {
      step: "05",
      title: "Continued Partnership",
      desc: "Periodic reporting, license expansion, and growth consulting — your long-term partner in two countries.",
    },
  ],
  services: [
    {
      title: "NIB & OSS-RBA",
      category: "legalitas",
      description:
        "Business Identification Number via OSS (Online Single Submission) — the legal foundation of every business in Indonesia.",
      price: "From IDR 350K",
      time: "1 business day",
      icon: "file-check",
      features: [
        "Officially issued by Kemeninvest/BKPM",
        "Valid for the company's lifetime",
        "Includes KBLI consultation",
      ],
    },
    {
      title: "PT & CV Incorporation",
      category: "legalitas",
      description:
        "Official incorporation via Notary + Ministry of Law & Human Rights (AHU Online) + OSS — deed ready within days.",
      price: "From IDR 3.5M",
      time: "3–7 business days",
      icon: "building",
      features: [
        "Official notarial deed",
        "Ministry of Law & Human Rights decree (SK)",
        "NPWP & NIB active immediately",
      ],
    },
    {
      title: "PT PMA (Foreign Investment)",
      category: "legalitas",
      description:
        "The entity for foreign investors with shareholding of up to 100% under the Positive Investment List.",
      price: "From IDR 8M",
      time: "7–14 business days",
      icon: "globe",
      features: [
        "Up to 100% foreign shareholding",
        "Foreign-friendly KBLI per regulation",
        "BKPM reporting assistance",
      ],
    },
    {
      title: "Sole Proprietor PT & SME",
      category: "legalitas",
      description:
        "Micro-small business legality without a notary — the NIB alone serves as your official legal identity.",
      price: "From IDR 350K",
      time: "1 business day",
      icon: "store",
      features: [
        "No minimum capital",
        "Government fees waived",
        "Perfect for SMEs & online shops",
      ],
    },
    {
      title: "Foundations & Associations",
      category: "legalitas",
      description:
        "Incorporation of Foundations, Associations, and Cooperatives for social, educational, and religious activities.",
      price: "From IDR 4M",
      time: "7–10 business days",
      icon: "heart-handshake",
      features: [
        "Deed & Ministry of Law decree",
        "Foundation NPWP",
        "Organizational structure assistance",
      ],
    },
    {
      title: "Halal Certification",
      category: "sertifikasi",
      description:
        "BPJPH halal certification via SIHALAL — the mandatory halal obligation under Law No. 33/2014.",
      price: "From IDR 1.5M",
      time: "14–30 business days",
      icon: "badge-check",
      features: [
        "Halal auditor assistance",
        "Complete SJPH documentation",
        "Valid 4 years & renewable",
      ],
    },
    {
      title: "BPOM & PIRT",
      category: "sertifikasi",
      description:
        "Food & cosmetics distribution licenses: MD for industrial products, PIRT for SME processed foods.",
      price: "From IDR 2.5M",
      time: "14–45 business days",
      icon: "flask-conical",
      features: [
        "BPOM e-registration filing",
        "Accredited laboratory testing",
        "Regulation-compliant labeling",
      ],
    },
    {
      title: "SNI Certification",
      category: "sertifikasi",
      description:
        "Mandatory SNI product certification via LSPro — the entry ticket to modern retail & government tenders.",
      price: "From IDR 6M",
      time: "30–90 business days",
      icon: "award",
      features: [
        "Factory audit assistance",
        "Product sample testing",
        "SNI system consulting",
      ],
    },
    {
      title: "ISO Certification",
      category: "sertifikasi",
      description:
        "ISO 9001:2015, 14001, 22000, 27001, and 45001 with internationally accredited registrars.",
      price: "From IDR 12M",
      time: "30–60 business days",
      icon: "shield-check",
      features: [
        "Internal team training",
        "Quality manual documentation",
        "IAF-accredited certificate",
      ],
    },
    {
      title: "PBG & SLF",
      category: "bangunan",
      description:
        "Building Approval (PBG) & Certificate of Functional Feasibility (SLF) via SIMBG — your building's legality.",
      price: "From IDR 2M",
      time: "7–30 business days",
      icon: "landmark",
      features: [
        "Drawings by certified experts",
        "DPMPTSP consultation",
        "SLF for existing & new buildings",
      ],
    },
    {
      title: "Environmental Permits",
      category: "bangunan",
      description:
        "AMDAL, UKL-UPL, SPPL, and Environmental Approval under the Job Creation Law & PP 22/2021.",
      price: "From IDR 5M",
      time: "14–60 business days",
      icon: "leaf",
      features: [
        "Complete UKL-UPL & AMDAL",
        "Environmental expert team",
        "Matrix assistance",
      ],
    },
    {
      title: "Export-Import Permits",
      category: "khusus",
      description:
        "API-U/API-P, NIB as customs access, up to customs licensing for cross-border business.",
      price: "From IDR 1.5M",
      time: "3–7 business days",
      icon: "ship",
      features: [
        "API-U & API-P",
        "Customs registration",
        "HS Code & PIB consulting",
      ],
    },
    {
      title: "KITAS & KITAP",
      category: "khusus",
      description:
        "Foreigner stay & work permits: IMTA, VITAS, KITAS, up to KITAP for expatriates and families.",
      price: "From IDR 3.5M",
      time: "5–14 business days",
      icon: "id-card",
      features: [
        "RPTKA & IMTA",
        "Manpower notification",
        "MERP & multiple exit",
      ],
    },
    {
      title: "Special Sector Permits",
      category: "khusus",
      description:
        "Umrah & travel permits, logistics, construction (SBU), education, health, down to fintech.",
      price: "From IDR 5M",
      time: "14–45 business days",
      icon: "layers",
      features: [
        "Ministry of Religious Affairs permits",
        "LPJK construction SBU",
        "Vertical-sector licensing",
      ],
    },
    {
      title: "MISA — Saudi Arabia Business License",
      category: "khusus",
      description:
        "Company establishment in Saudi Arabia via MISA for your business expansion into the Middle East.",
      price: "By consultation",
      time: "30–60 business days",
      icon: "plane",
      features: [
        "MISA investment license",
        "CR (Commercial Registration)",
        "GM visa & work permit",
      ],
    },
    {
      title: "Taxation & NPWP",
      category: "legalitas",
      description:
        "Corporate/personal NPWP, SKTU, annual tax returns, up to tax consulting & special facilities.",
      price: "From IDR 500K",
      time: "1–3 business days",
      icon: "receipt",
      features: [
        "Fast NPWP & SKTU",
        "Routine annual returns",
        "Tax planning consulting",
      ],
    },
  ],
  serviceCategories: [
    { value: "semua", label: "All Services" },
    { value: "legalitas", label: "Business Legality" },
    { value: "sertifikasi", label: "Certification & Products" },
    { value: "bangunan", label: "Building & Environment" },
    { value: "khusus", label: "Special & International" },
  ],
  values: [
    {
      title: "Mission",
      text: "Simplifying Indonesian business legality with fast, transparent, guaranteed service — so entrepreneurs can focus on growth.",
    },
    {
      title: "Vision",
      text: "To become the most complete licensing hub in Asia — even the world — with the most trusted ISO 9001:2015 international quality standards.",
    },
    {
      title: "Our Values",
      text: "Uncompromising integrity, speed without sacrificing precision, and empathy for every client's business story.",
    },
  ],
  trustPoints: [
    "Rooted since 2009 — 15+ years of world-class consulting experience",
    "Officially incorporated 2024: PT TOP KONSULTAN INTERNASIONAL (Ministry of Law & Human Rights RI)",
    "600+ service catalog — the most complete in Asia, covering cross-border licensing",
    "Part of Gunara Consultant Group together with pusatperizinan.com",
    "Audited ISO 9001:2015 quality management system",
    "Certified team: legal, taxation & environmental",
  ],
  timeline: [
    {
      year: "2009",
      title: "The Birth of a Vision",
      text: "Since 2009, Gunara Consultant's founders honed world-class consulting expertise under Mic Kinsey — absorbing the methodology, quality discipline, and global solution culture that now form our service DNA: precision, integrity, and an obsession with client outcomes.",
    },
    {
      year: "2009–2024",
      title: "15 Years Equipping Thousands of Entrepreneurs",
      text: "More than a decade accompanying SMEs and corporations through bureaucratic complexity. That cross-sector experience crystallized into mastery of 600+ license types — the most complete in Asia — from village SME permits to company incorporation in Singapore, Dubai, and Saudi Arabia.",
    },
    {
      year: "11 July 2024",
      title: "The Birth of a Legal Entity",
      text: "Gunara Consultant officially became PT TOP KONSULTAN INTERNASIONAL — Certificate No. AHU-038293.AH.01.30.Tahun 2024, issued by the Ministry of Law and Human Rights of the Republic of Indonesia, domiciled in Kota Tasikmalaya, with business capital of Rp5.000.000.000,00.",
    },
    {
      year: "Today",
      title: "Gunara Consultant Group",
      text: "Operating pusatperizinan.com as the digital gateway of our licensing services — one door to legal certainty for all of Indonesia, and still growing.",
    },
  ],
  certRows: [
    { label: "Certificate Number", value: SITE.ahucert, mono: true },
    { label: "Entity", value: SITE.legalName },
    {
      label: "Issued By",
      value: "Ministry of Law and Human Rights of the Republic of Indonesia",
    },
    { label: "Issue Date", value: "July 11, 2024" },
    { label: "Domicile", value: "Kota Tasikmalaya, West Java" },
    { label: "Business Capital", value: SITE.capital },
    { label: "Founder", value: SITE.founder },
  ],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

/* ============ UI dictionaries — key parity dijamin compiler ============ */

const UI_ID = {
  /* ---- Navbar ---- */
  topbarIso: "Tersertifikasi ISO 9001:2015 — Grup PusatPerizinan.com —",
  topbarSince: "Berdiri sejak",
  navAriaLabel: "Navigasi utama",
  navCta: "Konsultasi Gratis",
  ariaMenu: "Buka menu navigasi",
  sheetTitle: "Menu navigasi",

  /* ---- Hero ---- */
  heroAriaLabel: "Beranda Gunara Consultant",
  heroBadge: "Bernaung di Mic Kinsey sejak",
  heroBadge2: "Berbadan Hukum 2024 • ISO 9001:2015",
  heroTitleLead1: "Segala",
  heroTitleGold1: "Perizinan",
  heroTitleAfter1: "Usaha Anda,",
  heroTitleLead2: "Kami Yang",
  heroTitleGold2: "Urus.",
  heroTitleAfter2: "",
  heroSubA: "— sejak",
  heroSubB: "kami menyerap standar konsultansi kelas dunia di bawah naungan",
  heroSubC: ", kini resmi berbadan hukum 2024 sebagai",
  heroSubD: " (AHU Kemenkumham RI). Lebih dari",
  heroSubGold: "600+ layanan perizinan terlengkap di Asia",
  heroSubE:
    "dalam satu pintu — dari NIB UMKM hingga pendirian perusahaan internasional — bagian dari grup pusatperizinan.com.",
  heroSubF: "Cepat, resmi, transparan, bergaransi 100%.",
  heroCtaPrimary: "Konsultasi Gratis Sekarang",
  heroCtaSecondary: "Jelajahi Layanan",
  heroFloatNote1: "via OSS — BKPM RI",
  heroFloatNote2: "Notaris → AHU → OSS",
  heroFloatCertNote: "Kemenkumham RI • 11 Juli 2024",
  heroScrollAria: "Gulir ke bawah",

  /* ---- Brand strip ---- */
  brandAriaLabel: "Layanan andalan kami",
  brandCaption: "Dipercaya mengurus 18+ jenis perizinan — semua terbit resmi dari instansi",

  /* ---- Contact ---- */
  contactAriaLabel: "Hubungi Gunara Consultant",
  contactEyebrow: "Hubungi Kami",
  contactTitle: "Mulai dengan",
  contactHighlight: "Konsultasi Gratis",
  contactDesc:
    "Ceritakan kebutuhan perizinan Anda — tanpa biaya, tanpa komitmen. Tim ahli kami merespons maksimal 15 menit pada jam kerja.",
  contactCardPhone: "Telepon / WhatsApp",
  contactCardPhoneNote: "Respons < 15 menit (jam kerja)",
  contactCardEmail: "Email",
  contactCardEmailNote: "Balasan maksimal 1x24 jam",
  contactCardOffice: "Kantor Pusat",
  contactCardOfficeNote: "Senin–Sabtu, 08.00–20.00 WIB",
  directWa: "Chat Langsung via WhatsApp",
  directWaNote: "Fast track konsultasi — dibalas dalam hitungan menit",
  contactPrivacy:
    "Data Anda aman & dijaga kerahasiaannya sesuai standar mutu ISO 9001:2015 dan UU Perlindungan Data Pribadi.",
  contactFormTitle: "Form Konsultasi Gratis",
  contactFormSub: "Isi form di bawah — kami yang menghubungi Anda.",
  labelNama: "Nama Lengkap *",
  placeholderNama: "Nama Anda",
  labelCompany: "Nama Usaha",
  placeholderCompany: "Opsional",
  labelEmail: "Email *",
  labelPhone: "No. WhatsApp / Telepon",
  labelService: "Layanan yang Dibutuhkan",
  placeholderService: "Pilih layanan perizinan",
  labelMessage: "Ceritakan Kebutuhan Anda *",
  placeholderMessage:
    "Contoh: Saya ingin mendirikan PT bidang kuliner di Bandung dan perlu izin halal untuk 5 produk...",
  submitBtn: "Kirim & Dapatkan Konsultasi Gratis",
  submitting: "Mengirim Pesan...",
  toastIncomplete: "Form belum lengkap",
  toastIncompleteDesc: "Mohon isi nama, email, dan pesan Anda.",
  toastSuccess: "Pesan terkirim!",
  toastSuccessDesc:
    "Terima kasih! Tim Gunara Consultant akan menghubungi Anda maksimal 15 menit di jam kerja.",
  toastError: "Gagal mengirim",
  toastErrorDesc: "Silakan coba lagi atau hubungi WhatsApp kami.",
  errFallback: "Gagal mengirim pesan",
  contactResponseNote: "Respons maksimal 15 menit (Senin–Sabtu, 08.00–20.00 WIB)",

  /* ---- Footer ---- */
  footerCtaTitle: "Siap melegalkan bisnis Anda",
  footerCtaTitleGold: "hari ini?",
  footerCtaSub: "Konsultasi gratis, respons 15 menit, garansi 100%.",
  footerCtaBtn: "Konsultasi Gratis",
  footerAboutA:
    "Konsultan perizinan & legalitas usaha bersertifikasi ISO 9001:2015. Bagian dari Gunara Group bersama",
  footerAboutB: ". Berdiri sejak",
  footerAboutC:
    ", dipercaya 12.500+ klien di 34 provinsi Indonesia dan 8 negara — pusat perizinan terlengkap di Asia.",
  footerNavTitle: "Navigasi",
  footerNavAriaLabel: "Navigasi footer",
  footerServicesTitle: "Layanan Populer",
  footerServicesAriaLabel: "Layanan populer",
  footerContactTitle: "Kontak & Sertifikasi",
  footerIsoTitle: "TERSERTIFIKASI ISO 9001:2015",
  footerIsoDesc: "Sistem Manajemen Mutu — diaudit tahunan oleh badan sertifikasi berakreditasi IAF.",
  footerCopyright: "Seluruh hak cipta dilindungi.",
  footerBrands: "Grup Gunara:",
  footerMade: "Dibuat dengan standar kelas dunia di Indonesia",
  footerVerifyPre: "Terverifikasi Kemenkumham RI No.",
  footerVerifyMid: "Sistem Manajemen Mutu ISO 9001:2015",
  footerVerifyPost: "Bagian dari Gunara Consultant Group",
  linkIndeks: "Indeks Katalog 600 Layanan",
  linkArtikel: "Artikel & Panduan Perizinan",

  /* ---- FAQ ---- */
  faqAria: "Pertanyaan yang sering diajukan",
  faqEyebrow: "FAQ",
  faqTitle: "Pertanyaan yang Sering",
  faqHighlight: "Diajukan",
  faqDesc:
    "Semua yang perlu Anda ketahui sebelum memulai pengurusan bersama kami. Masih penasaran? Tim kami siap menjawab 24/7.",

  /* ---- Testimoni ---- */
  testiAria: "Testimoni klien Gunara Consultant",
  testiEyebrow: "Testimoni",
  testiTitle: "Cerita Sukses dari",
  testiHighlight: "12.500+ Klien",
  testiDesc:
    "Dari UMKM hingga korporasi — kepercayaan mereka adalah bukti nyata komitmen mutu kami.",
  testiRatingPre: "Rating",
  testiRatingMid: "dari",
  testiRatingPost: "bintang",
  testiPrev: "Testimoni sebelumnya",
  testiNext: "Testimoni berikutnya",
  testiDotsAria: "Pilih testimoni",
  testiDotPre: "Testimoni",

  /* ---- Why Us ---- */
  whyUsAria: "Keunggulan Gunara Consultant",
  whyUsEyebrow: "Mengapa Gunara",
  whyUsTitle: "Standar yang Membuat Kami",
  whyUsHighlight: "Melampaui Kompetitor",
  whyUsDesc:
    "Kami tidak sekadar mengurus izin — kami membangun sistem layanan bersertifikasi internasional yang menjamin hasil untuk setiap klien.",
  whyUsBest: "Pilihan Terbaik",
  whyUsAvg: "Rata-rata pasar",

  /* ---- Proses ---- */
  processAria: "Proses kerja Gunara Consultant",
  processEyebrow: "Proses Kerja",
  processTitle: "5 Langkah Menuju",
  processHighlight: "Izin Terbit",
  processDesc:
    "Alur kerja terstandar ISO 9001:2015 — setiap tahap punya checkpoint mutu dan pelaporan yang jelas, sehingga Anda selalu tahu posisi pengurusan Anda.",

  /* ---- ISO ---- */
  isoAria: "Komitmen mutu ISO 9001:2015",
  isoEyebrow: "Akreditasi Mutu",
  isoTitle: "Sistem Manajemen Mutu",
  isoHighlight: "ISO 9001:2015",
  isoDesc:
    "Gunara Consultant mengoperasikan seluruh layanannya di bawah Sistem Manajemen Mutu ISO 9001:2015 — standar mutu yang diadopsi perusahaan kelas dunia seperti Toyota, Samsung, dan Siemens. Kini, standar yang sama bekerja untuk perizinan bisnis Anda.",
  isoAuditNote:
    "Sertifikat mutu kami diaudit setiap tahun oleh badan sertifikasi independen berakreditasi IAF.",
  isoComplianceNote:
    "Kepatuhan penuh pada UU Cipta Kerja, PP 5/2021 (OSS-RBA), dan seluruh regulasi perizinan terkini.",

  /* ---- Coverage ---- */
  coverageAria: "Cakupan wilayah layanan",
  coverageEyebrow: "Cakupan Layanan",
  coverageTitle: "Melayani Seluruh",
  coverageHighlight: "Indonesia & Dunia",
  coverageDesc:
    "Proses 100% online via OSS, AHU Online, SIMBG, dan SIHALAL. Di mana pun bisnis Anda berada, tim Gunara siap mengurusnya.",

  /* ---- Fase ---- */
  phaseAria: "Fase implementasi katalog layanan",
  phaseEyebrow: "Peta Jalan Implementasi",
  phaseTitle: "Satu Katalog, Empat Fase,",
  phaseHighlight: "Nol Kebingungan",
  phaseDesc:
    "Kami membangun katalog 600 layanan — terlengkap di Asia — secara terukur: setiap fase diuji, setiap layanan diaudit mutu ISO 9001:2015 sebelum diluncurkan.",
  phaseStatusLive: "Aktif",
  phaseStatusRunning: "Sedang Berjalan",
  phaseStatusUpcoming: "Segera",
  phaseCountSuffix: "layanan",
  phasePctMid: "dari",
  phaseCatAriaPre: "Kategori pada",
  phaseFootPre: "Total target katalog",
  phaseFootMid: "dalam",
  phaseCountWord: "kategori",
  phaseFootPost:
    "— diluncurkan bertahap 2024–2026 dengan audit mutu ISO 9001:2015 di setiap fase.",

  /* ---- Saudi Desk (MISA) ---- */
  misaAria: "Saudi Desk — Layanan Investasi MISA Arab Saudi",
  misaChip: "Saudi Desk • Jembatan Investasi",
  misaTitle: "MISA Arab Saudi",
  misaTitleGold: "⇄ Indonesia",
  misaSub:
    "Gerbang tunggal investasi Vision 2030 — lisensi MISA, PT PMA, dan segala legalitas di antaranya, diurus satu tim dedicated.",
  misaCta: "Konsultasi Saudi Desk",
  misaCtaWa: "Chat WhatsApp",
  misaBannerAlt: "Jembatan investasi Jakarta dan Riyadh — Saudi Desk Gunara Consultant",
  misaIntroStrong: "MISA (Ministry of Investment of Saudi Arabia",
  misaIntroA:
    " — dahulu SAGIA) adalah gerbang tunggal perizinan investasi asing dan motor inisiatif",
  misaIntroB: ". Sebagai",
  misaIntroC:
    " Gunara Consultant, satu tim menangani dua arah sekaligus: investor Saudi yang mendirikan PT PMA di Indonesia, dan pelaku usaha Indonesia yang merebut peluang Vision 2030 di Riyadh — komunikasi bahasa Inggris, SOP teraudit",
  misaIntroD: ".",
  misaDirEyebrow: "Dua Arah, Satu Tim",
  misaDirTitle: "Layanan Saudi Desk",
  misaDirHighlight: "Tanpa Batas Negara",
  misaDirDesc:
    "Dari pendirian PT PMA di Indonesia hingga MISA Investment License di Arab Saudi — katalog layanan lengkap kedua jurusan.",
  misaCardATitle: "Investor Arab Saudi → Indonesia",
  misaCardATagline: "MISA → PT PMA • KITAS • Kepatuhan RI",
  misaCardBTitle: "Pelaku Usaha Indonesia → Arab Saudi",
  misaCardBTagline: "Indonesia → MISA • CR • SABER/SFDA",
  misaStepsEyebrow: "Alur Kerja Saudi Desk",
  misaStepsTitle: "5 Langkah Menuju Operasional",
  misaStepsSub:
    "Timeline tertulis di penawaran — dari kajian pasar gratis hingga pendampingan berkelanjutan di dua negara.",
  misaFaqEyebrow: "FAQ Saudi Desk",
  misaFaqTitle: "Pertanyaan Umum tentang MISA",
  misaFaqOutroPre: "Pertanyaan lain tentang investasi Saudi–Indonesia?",
  misaFaqLink: "Konsultasi gratis dengan Saudi Desk kami",

  /* ---- About ---- */
  aboutAria: "Tentang Gunara Consultant",
  aboutEyebrow: "Tentang Kami",
  aboutTitle: "Konsultan Perizinan dengan Standar",
  aboutHighlight: "Kelas Dunia",
  aboutDesc:
    "Gunara Consultant berakar pada pengalaman konsultansi sejak 2009 dan resmi berbadan hukum pada 2024 sebagai PT TOP KONSULTAN INTERNASIONAL — rumah layanan legalitas bersama pusatperizinan.com. Lebih dari 15 tahun, kami menjadi jembatan antara ambisi bisnis Anda dan kepastian hukum: dari warung kopi hingga korporasi lintas negara.",
  aboutStoryA: "Cerita kami dimulai di ruang kelas konsultansi dunia: sejak",
  aboutStoryB: "menekuni ilmu konsultansi di bawah naungan",
  aboutStoryC:
    " — menyerap disiplin mutu dan budaya solusi global. Puncaknya tercapai pada",
  aboutStoryD: ", ketika Gunara Consultant resmi berbadan hukum sebagai",
  aboutStoryE: " — dan kini mengelola grup",
  aboutStoryF: "untuk seluruh Indonesia.",
  aboutJourney: "Baca Perjalanan Kami",
  aboutJourneyAria: "Baca perjalanan kami di bagian Warisan dan Legalitas",
  aboutExpLabel: "Tahun Pengalaman",
  aboutGroup: "Grup PusatPerizinan.com",
  aboutImgAlt: "Tim konsultan Gunara Consultant sedang meninjau dokumen perizinan di kantor Jakarta",

  /* ---- Heritage ---- */
  herAria: "Warisan dan legalitas Gunara Consultant",
  herEyebrow: "Warisan & Legalitas",
  herTitle: "Sejak 2009 di Ruang Kelas Dunia,",
  herHighlight: "Sejak 2024 Berbadan Hukum Indonesia",
  herQuotePre:
    "“Dari ruang kelas konsultansi dunia, kami membawa pulang satu pelajaran yang tak pernah usang:",
  herQuoteGold: "kepastian hukum adalah fondasi dari segala pertumbuhan.",
  herQuoteCaptionPre: "— Prinsip pendiri,",
  herCertBadge: "Dokumen Resmi",
  herCertCountry: "Republik Indonesia",
  herCertTitle: "Sertifikat",
  herCertTitleGold: "Pendirian",
  herCertSub: "Perseroan Terbatas — Sistem Administrasi Badan Hukum",
  herChipGroup: "Grup: pusatperizinan.com",
  herChipVerified: "Legalitas Terverifikasi",
  herChipServing: "Melayani Seluruh Indonesia",

  /* ---- Brand / Filosofi Logo ---- */
  brandEyebrow: "Identitas Merek",
  brandTitle: "Filosofi Logo",
  brandHighlight: "The Sovereign G",
  brandDesc:
    "Setiap elemen emblem Gunara Consultant dirancang dengan presisi heraldika korporat — menceritakan siapa kami: konsultan yang menjaga struktur hukum, melindungi bisnis, dan membuka era baru bagi klien.",
  brandIconAlt: "Emblem logo Gunara Consultant — monogram G dengan pilar klasik di dalam perisai",
  brandTileAlt: "Emblem logo Gunara Consultant versi gelap dengan matahari terbit emas",
  brandLockAlt: "Logo lengkap Gunara Consultant — emblem perisai dengan wordmark GUNARA CONSULTANT",
  brandMean1Title: "Pilar Klasik",
  brandMean1Text: "Batang monogram G dibangun dari pilar Ionic — simbol struktur hukum yang kokoh sejak 2009.",
  brandMean2Title: "Perisai",
  brandMean2Text: "Bentuk perisai melambangkan perlindungan penuh atas legalitas dan kepentingan bisnis klien.",
  brandMean3Title: "Matahari Terbit",
  brandMean3Text: "Sinar matahari menandai era baru 2024 dan jangkauan Asia yang terus naik kelas.",
  brandMean4Title: "Emerald & Gold",
  brandMean4Text: "Hijau zamrud kemewahan dan emas standar kelas dunia — warna otoritas, bukan sekadar gaya.",
  brandBadge: "Identitas resmi — selaras ISO 9001:2015",

  /* ---- Services (16) ---- */
  svcAria: "Layanan perizinan Gunara Consultant",
  svcEyebrow: "Layanan Kami",
  svcTitle: "Satu Pintu untuk",
  svcHighlight: "Semua Perizinan",
  svcDesc:
    "Dari legalitas dasar hingga sertifikasi internasional — 16 layanan utama yang mencakup seluruh kebutuhan perizinan bisnis Anda di Indonesia dan mancanegara.",
  svcNotFound: "Tidak menemukan izin yang Anda butuhkan?",
  svcAsk: "Tanyakan pada tim kami",
  svcMore: " — 18+ jenis perizinan lainnya juga kami urus.",

  /* ---- Explorer (katalog 600) ---- */
  expAria: "Katalog 600 layanan perizinan terlengkap di Asia",
  expEyebrow: "Katalog Layanan",
  expTitle: "600+ Layanan Perizinan",
  expHighlight: "Terlengkap di Asia",
  expDesc:
    "Telusuri katalog perizinan terlengkap di Asia — satu-satunya yang mencakup seluruh perizinan Indonesia: pendirian badan usaha, OSS-RBA, halal & BPOM, sektor regulasi kompleks, ISO — plus Perizinan Global & Internasional (Singapura, Dubai, Arab Saudi, Tiongkok). Cari, filter, temukan dalam hitungan detik.",
  expPlaceholder: "Cari layanan — mis. NIB, halal, BPOM, KITAS…",
  expSearchAria: "Cari layanan perizinan",
  expPhaseAria: "Filter berdasarkan fase implementasi",
  expPhaseAll: "Semua Fase",
  expPhaseWord: "Fase",
  expCountSuffix: "layanan",
  expPopularLabel: "Hanya Layanan Unggulan",
  expPopularAria: "Hanya tampilkan layanan unggulan",
  expChipsAria: "Filter kategori layanan",
  expAll: "Semua",
  expLoading: "Memuat katalog layanan…",
  expShowingPre: "Menampilkan",
  expShowingMid: "dari",
  expNoMatch: "Tidak ada layanan yang cocok",
  expTarget:
    "Target katalog: 600 layanan • 27 bidang • 4 fase — Terlengkap di Asia",
  expError: "Gagal memuat katalog. Periksa koneksi Anda dan coba lagi.",
  expRetry: "Coba Lagi",
  expNoTitle: "Layanan tidak ditemukan",
  expNoDesc:
    "Coba kata kunci lain atau longgarkan filter — katalog kami terus bertumbuh setiap fase. Tim kami juga siap membantu mencarikan izin yang Anda butuhkan.",
  expReset: "Reset Semua Filter",
  expFeatured: "Unggulan",
  expConsult: "Konsultasikan",
  expConsultAriaPre: "Konsultasikan layanan",
  expIndexLink: "Lihat Indeks Lengkap 600 Layanan — Terbaca Google",
  expLoadAria: "Memuat layanan",
  expPagePrev: "Sebelumnya",
  expPageNext: "Berikutnya",
  expPage: "Halaman",
  expPageOf: "dari",
  expPagePrevAria: "Halaman sebelumnya",
  expPageNextAria: "Halaman berikutnya",
  expPageNavAria: "Navigasi halaman katalog",

  /* ---- Insights (artikel bulanan) ---- */
  insAria: "Artikel dan panduan perizinan usaha",
  insEyebrow: "Artikel & Panduan — Edisi Bulanan",
  insTitle: "Perpustakaan Perizinan",
  insHighlight: "— Diperbarui Setiap Bulan",
  insDesc:
    "12 panduan mendalam seputar perizinan usaha Indonesia — artikel baru terbit setiap bulan oleh tim hukum Gunara Consultant: dari PT & PT PMA, KBLI, OSS-RBA, sertifikasi halal ekspor, hingga MISA Arab Saudi.",
  insOpen: "Baca artikel lengkap",
  insClose: "Tutup artikel",
  insEditionPre: "Edisi",
  insEditionCount: "artikel",
  insFooterPre: "panduan mendalam — edisi baru setiap bulan oleh tim hukum",
  insFooterPost: "Gunara Consultant",
  insEnNote:
    "Artikel ditulis dalam Bahasa Indonesia — konsultan kami siap memberi briefing berbahasa Inggris untuk Anda.",
  insCtaConsult: "Butuh pendampingan langsung?",
  insCtaConsultLink: "Konsultasi gratis",
  insCtaCatalogPre: "— atau telusuri",
  insCtaCatalogLink: "katalog 600+ layanan perizinan",
  insCtaCatalogPost: "untuk menemukan izin yang Anda butuhkan.",
  insCtaMisa: "Ekspansi ke Arab Saudi? Lihat Saudi Desk MISA →",

  /* ---- Catalog Index (indeks SSR) ---- */
  catAria: "Indeks lengkap 600 layanan perizinan terlengkap di Asia Gunara Consultant",
  catEyebrow: "Indeks Katalog Lengkap",
  catTitlePre: "Indeks",
  catTitlePost: "Layanan Perizinan",
  catHighlight: "— Semua Terbaca Google",
  catDesc:
    "Daftar lengkap seluruh layanan perizinan yang kami tangani — terlengkap di Asia — dikelompokkan dalam 27 bidang: dari NIB & OSS-RBA, pendirian PT/PMA, sertifikasi halal & BPOM, PBG/SLF, AMDAL, KITAS/KITAP, sertifikasi ISO 9001:2015, hingga pendirian perusahaan di Singapura, Dubai, dan Arab Saudi. Klik bidang untuk membuka rinciannya — atau gunakan katalog interaktif untuk mencari & memfilter.",
  catSearch: "Cari & Filter di Katalog Interaktif",
  catMetaA: "bidang •",
  catMetaB: "layanan •",
  catMetaC: "fase implementasi •",
  catMetaD: "teraudit ISO 9001:2015",
  catCountSuffix: "layanan",
  catEnNote:
    "Entri layanan dicantumkan dalam Bahasa Indonesia (istilah regulasi resmi) — tim kami menjelaskan semuanya dalam Bahasa Inggris untuk Anda.",
  catFeatured: "Unggulan",
  catPhaseQPre: "Bagaimana katalog",
  catPhaseQPost: "layanan ini diimplementasikan?",
  catPhaseIntroPre: "Seluruh",
  catPhaseIntroPost:
    "layanan perizinan di atas diimplementasikan secara bertahap dalam",
  catPhaseLink: "4 fase implementasi",
  catPhase1Name: "Fase 1 Legalitas Fondasi",
  catPhase1Detail: "pendirian badan usaha, UMKM, pajak, kekayaan intelektual",
  catPhase2Name: "Fase 2 Operasional & Industri",
  catPhase2Detail:
    "OSS-RBA, perdagangan, industri, logistik, ketenagakerjaan, pangan & halal",
  catPhase3Name: "Fase 3 Sektor Regulasi Kompleks",
  catPhase3Detail:
    "kesehatan-farmasi, pertambangan-energi, lingkungan, konstruksi, pariwisata",
  catPhaseAnd: "dan",
  catPhase4Name: "Fase 4 Enterprise & Global",
  catPhase4Detail:
    "fintech, telematika, ekspor-impor, pendidikan, media kreatif, sertifikasi ISO, serta Perizinan Global & Internasional — Singapura, Malaysia, Arab Saudi, UAE, Tiongkok",
  catPhaseLegal:
    "Setiap layanan ditangani tim bersertifikat ISO 9001:2015 dengan basis hukum yang jelas — UU, PP, Perpres, hingga regulasi khusus BPOM, BPJPH, OJK, dan Kemenkumham RI.",
  catPhaseAsk:
    "Tidak menemukan izin yang Anda cari — di Indonesia maupun luar negeri? Tim Gunara Consultant — bernaung di standar konsultansi Mic Kinsey sejak 2009, resmi berbadan hukum 2024 sebagai PT TOP KONSULTAN INTERNASIONAL (AHU-038293.AH.01.30.Tahun 2024) — siap menangani kebutuhan perizinan di luar daftar.",
  catPhaseCta: "Konsultasikan sekarang",
  catPhaseCtaPost: "— gratis, tanpa komitmen.",

  /* ---- WhatsApp Float ---- */
  waAria: "Chat WhatsApp Gunara Consultant",
  waTooltip: "Konsultasi gratis — balasan cepat",
};

type UIKey = keyof typeof UI_ID;

const UI_EN: Record<UIKey, string> = {
  /* ---- Navbar ---- */
  topbarIso: "ISO 9001:2015 Certified — PusatPerizinan.com Group —",
  topbarSince: "Established since",
  navAriaLabel: "Main navigation",
  navCta: "Free Consultation",
  ariaMenu: "Open navigation menu",
  sheetTitle: "Navigation menu",

  /* ---- Hero ---- */
  heroAriaLabel: "Gunara Consultant Home",
  heroBadge: "Backed by Mic Kinsey heritage since",
  heroBadge2: "Legally Incorporated 2024 • ISO 9001:2015",
  heroTitleLead1: "Every",
  heroTitleGold1: "License",
  heroTitleAfter1: "Your Business Needs,",
  heroTitleLead2: "We Handle",
  heroTitleGold2: "It All.",
  heroTitleAfter2: "",
  heroSubA: "— since",
  heroSubB: "we have absorbed world-class consulting standards under the banner of",
  heroSubC: ", and in 2024 we were formally incorporated as",
  heroSubD: " (Ministry of Law and Human Rights of the Republic of Indonesia). More than",
  heroSubGold: "600+ licensing services — the most complete in Asia",
  heroSubE:
    "under one roof — from SME NIB registration to international company incorporation — as part of the pusatperizinan.com group.",
  heroSubF: "Fast, official, transparent, and backed by a 100% guarantee.",
  heroCtaPrimary: "Get Your Free Consultation",
  heroCtaSecondary: "Explore Our Services",
  heroFloatNote1: "via OSS — BKPM RI",
  heroFloatNote2: "Notary → AHU → OSS",
  heroFloatCertNote: "Ministry of Law & Human Rights RI • July 11, 2024",
  heroScrollAria: "Scroll down",

  /* ---- Brand strip ---- */
  brandAriaLabel: "Our flagship licensing services",
  brandCaption:
    "Trusted to handle 18+ types of business permits — all officially issued by government agencies",

  /* ---- Contact ---- */
  contactAriaLabel: "Contact Gunara Consultant",
  contactEyebrow: "Contact Us",
  contactTitle: "Start with a",
  contactHighlight: "Free Consultation",
  contactDesc:
    "Tell us about your licensing needs — no fees, no commitment. Our expert team responds within 15 minutes during business hours.",
  contactCardPhone: "Phone / WhatsApp",
  contactCardPhoneNote: "Response < 15 minutes (business hours)",
  contactCardEmail: "Email",
  contactCardEmailNote: "Replies within 24 hours",
  contactCardOffice: "Head Office",
  contactCardOfficeNote: "Monday–Saturday, 08.00–20.00 WIB (GMT+7)",
  directWa: "Chat Directly via WhatsApp",
  directWaNote: "Fast-track consultation — replies within minutes",
  contactPrivacy:
    "Your data is safe and treated as confidential in accordance with our ISO 9001:2015 quality standards and the Indonesian Personal Data Protection Law.",
  contactFormTitle: "Free Consultation Form",
  contactFormSub: "Fill in the form below — we will be the one reaching out to you.",
  labelNama: "Full Name *",
  placeholderNama: "Your name",
  labelCompany: "Business Name",
  placeholderCompany: "Optional",
  labelEmail: "Email *",
  labelPhone: "WhatsApp / Phone Number",
  labelService: "Service You Need",
  placeholderService: "Select a licensing service",
  labelMessage: "Tell Us What You Need *",
  placeholderMessage:
    "Example: I want to establish a culinary PT in Bandung and need halal certification for 5 products...",
  submitBtn: "Send & Get Your Free Consultation",
  submitting: "Sending Your Message...",
  toastIncomplete: "Form incomplete",
  toastIncompleteDesc: "Please fill in your name, email, and message.",
  toastSuccess: "Message sent!",
  toastSuccessDesc:
    "Thank you! The Gunara Consultant team will contact you within 15 minutes during business hours.",
  toastError: "Failed to send",
  toastErrorDesc: "Please try again or reach us on WhatsApp.",
  errFallback: "Failed to send your message",
  contactResponseNote: "Response within 15 minutes (Monday–Saturday, 08.00–20.00 WIB)",

  /* ---- Footer ---- */
  footerCtaTitle: "Ready to legalize your business",
  footerCtaTitleGold: "today?",
  footerCtaSub: "Free consultation, 15-minute response, 100% guarantee.",
  footerCtaBtn: "Free Consultation",
  footerAboutA:
    "An ISO 9001:2015-certified business licensing & legality consultancy. Part of Gunara Group together with",
  footerAboutB: ". Established in",
  footerAboutC:
    ", trusted by 12,500+ clients across 34 Indonesian provinces and 8 countries — the most complete licensing hub in Asia.",
  footerNavTitle: "Navigation",
  footerNavAriaLabel: "Footer navigation",
  footerServicesTitle: "Popular Services",
  footerServicesAriaLabel: "Popular services",
  footerContactTitle: "Contact & Certification",
  footerIsoTitle: "ISO 9001:2015 CERTIFIED",
  footerIsoDesc:
    "Quality Management System — audited annually by an IAF-accredited certification body.",
  footerCopyright: "All rights reserved.",
  footerBrands: "Gunara Group:",
  footerMade: "Built to world-class standards in Indonesia",
  footerVerifyPre:
    "Verified by the Ministry of Law and Human Rights of the Republic of Indonesia (Kemenkumham) No.",
  footerVerifyMid: "ISO 9001:2015 Quality Management System",
  footerVerifyPost: "Part of Gunara Consultant Group",
  linkIndeks: "600-Service Catalog Index",
  linkArtikel: "Articles & Licensing Guides",

  /* ---- FAQ ---- */
  faqAria: "Frequently asked questions",
  faqEyebrow: "FAQ",
  faqTitle: "Frequently",
  faqHighlight: "Asked Questions",
  faqDesc:
    "Everything you need to know before starting your application with us. Still curious? Our team is ready to answer 24/7.",

  /* ---- Testimonials ---- */
  testiAria: "Gunara Consultant client testimonials",
  testiEyebrow: "Testimonials",
  testiTitle: "Success Stories from",
  testiHighlight: "12,500+ Clients",
  testiDesc:
    "From SMEs to corporations — their trust is living proof of our quality commitment.",
  testiRatingPre: "Rated",
  testiRatingMid: "out of",
  testiRatingPost: "stars",
  testiPrev: "Previous testimonial",
  testiNext: "Next testimonial",
  testiDotsAria: "Choose a testimonial",
  testiDotPre: "Testimonial",

  /* ---- Why Us ---- */
  whyUsAria: "Why choose Gunara Consultant",
  whyUsEyebrow: "Why Gunara",
  whyUsTitle: "The Standards That Put Us",
  whyUsHighlight: "Ahead of Competitors",
  whyUsDesc:
    "We don't just process permits — we build an internationally certified service system that guarantees results for every client.",
  whyUsBest: "The Best Choice",
  whyUsAvg: "Market average",

  /* ---- Process ---- */
  processAria: "Gunara Consultant work process",
  processEyebrow: "Our Process",
  processTitle: "5 Steps to Your",
  processHighlight: "Permit Issued",
  processDesc:
    "An ISO 9001:2015-standardized workflow — every stage has quality checkpoints and clear reporting, so you always know where your application stands.",

  /* ---- ISO ---- */
  isoAria: "ISO 9001:2015 quality commitment",
  isoEyebrow: "Quality Accreditation",
  isoTitle: "Quality Management System",
  isoHighlight: "ISO 9001:2015",
  isoDesc:
    "Gunara Consultant runs its entire operation under the ISO 9001:2015 Quality Management System — the quality standard adopted by world-class companies like Toyota, Samsung, and Siemens. Now, that same standard works for your business licensing.",
  isoAuditNote:
    "Our quality certificate is audited annually by an independent IAF-accredited certification body.",
  isoComplianceNote:
    "Full compliance with the Job Creation Law, PP 5/2021 (OSS-RBA), and all current licensing regulations.",

  /* ---- Coverage ---- */
  coverageAria: "Service coverage areas",
  coverageEyebrow: "Service Coverage",
  coverageTitle: "Serving All of",
  coverageHighlight: "Indonesia & the World",
  coverageDesc:
    "A 100% online process via OSS, AHU Online, SIMBG, and SIHALAL. Wherever your business is, the Gunara team is ready to handle it.",

  /* ---- Phases ---- */
  phaseAria: "Catalog implementation phases",
  phaseEyebrow: "Implementation Roadmap",
  phaseTitle: "One Catalog, Four Phases,",
  phaseHighlight: "Zero Confusion",
  phaseDesc:
    "We build the 600-service catalog — the most complete in Asia — measurably: every phase is tested and every service passes ISO 9001:2015 quality audits before launch.",
  phaseStatusLive: "Live",
  phaseStatusRunning: "In Progress",
  phaseStatusUpcoming: "Upcoming",
  phaseCountSuffix: "services",
  phasePctMid: "of",
  phaseCatAriaPre: "Categories in",
  phaseFootPre: "Total catalog target",
  phaseFootMid: "across",
  phaseCountWord: "categories",
  phaseFootPost:
    "— rolled out in phases across 2024–2026 with ISO 9001:2015 quality audits at every phase.",

  /* ---- Saudi Desk (MISA) ---- */
  misaAria: "Saudi Desk — MISA Saudi Arabia Investment Services",
  misaChip: "Saudi Desk • Investment Bridge",
  misaTitle: "Saudi MISA",
  misaTitleGold: "⇄ Indonesia",
  misaSub:
    "Vision 2030's single investment gateway — MISA license, PT PMA, and every legality in between, handled by one dedicated team.",
  misaCta: "Consult the Saudi Desk",
  misaCtaWa: "WhatsApp Chat",
  misaBannerAlt: "Jakarta–Riyadh investment bridge — Gunara Consultant Saudi Desk",
  misaIntroStrong: "MISA (Ministry of Investment of Saudi Arabia",
  misaIntroA: " — formerly SAGIA) is the single gateway for foreign investment licensing and the driving force behind",
  misaIntroB: ". As",
  misaIntroC:
    " of Gunara Consultant, one dedicated team handles both directions at once: Saudi investors establishing a PT PMA in Indonesia, and Indonesian businesses seizing Vision 2030 opportunities in Riyadh — English communication, SOPs audited under",
  misaIntroD: ".",
  misaDirEyebrow: "Two Directions, One Team",
  misaDirTitle: "Saudi Desk Services",
  misaDirHighlight: "Without Country Limits",
  misaDirDesc:
    "From PT PMA incorporation in Indonesia to the MISA Investment License in Saudi Arabia — a complete service catalog for both directions.",
  misaCardATitle: "Saudi Investors → Indonesia",
  misaCardATagline: "MISA → PT PMA • KITAS • RI Compliance",
  misaCardBTitle: "Indonesian Businesses → Saudi Arabia",
  misaCardBTagline: "Indonesia → MISA • CR • SABER/SFDA",
  misaStepsEyebrow: "Saudi Desk Workflow",
  misaStepsTitle: "5 Steps to Full Operation",
  misaStepsSub:
    "A written timeline in every quotation — from a free market study to continued partnership in two countries.",
  misaFaqEyebrow: "Saudi Desk FAQ",
  misaFaqTitle: "Common Questions about MISA",
  misaFaqOutroPre: "More questions about Saudi–Indonesia investment?",
  misaFaqLink: "Free consultation with our Saudi Desk",

  /* ---- About ---- */
  aboutAria: "About Gunara Consultant",
  aboutEyebrow: "About Us",
  aboutTitle: "A Licensing Consultant with",
  aboutHighlight: "World-Class Standards",
  aboutDesc:
    "Gunara Consultant is rooted in consulting experience since 2009 and was formally incorporated in 2024 as PT TOP KONSULTAN INTERNASIONAL — a legality services home together with pusatperizinan.com. For more than 15 years, we have been the bridge between your business ambitions and legal certainty: from coffee stalls to cross-border corporations.",
  aboutStoryA: "Our story began in the classrooms of world consulting: since",
  aboutStoryB: "our founders honed the craft of consulting under",
  aboutStoryC:
    " — absorbing quality discipline and a global solution culture. The milestone came on",
  aboutStoryD: ", when Gunara Consultant was formally incorporated as",
  aboutStoryE: " — and now operates the",
  aboutStoryF: "group for all of Indonesia.",
  aboutJourney: "Read Our Journey",
  aboutJourneyAria: "Read our journey in the Heritage and Legality section",
  aboutExpLabel: "Years of Experience",
  aboutGroup: "PusatPerizinan.com Group",
  aboutImgAlt: "The Gunara Consultant team reviewing licensing documents at the Jakarta office",

  /* ---- Heritage ---- */
  herAria: "Heritage and legality of Gunara Consultant",
  herEyebrow: "Heritage & Legality",
  herTitle: "World-Class Classrooms Since 2009,",
  herHighlight: "An Indonesian Legal Entity Since 2024",
  herQuotePre:
    "“From the classrooms of world consulting, we brought home one lesson that never ages:",
  herQuoteGold: "legal certainty is the foundation of all growth.",
  herQuoteCaptionPre: "— The founder's principle,",
  herCertBadge: "Official Document",
  herCertCountry: "Republic of Indonesia",
  herCertTitle: "Certificate",
  herCertTitleGold: "of Incorporation",
  herCertSub: "Limited Liability Company — Legal Entity Administration System",
  herChipGroup: "Group: pusatperizinan.com",
  herChipVerified: "Verified Legality",
  herChipServing: "Serving All of Indonesia",

  /* ---- Brand / Logo Philosophy ---- */
  brandEyebrow: "Brand Identity",
  brandTitle: "Logo Philosophy",
  brandHighlight: "The Sovereign G",
  brandDesc:
    "Every element of the Gunara Consultant emblem is crafted with corporate heraldic precision — telling who we are: consultants who uphold legal structure, protect businesses, and open a new era for clients.",
  brandIconAlt: "Gunara Consultant logo emblem — monogram G with classical pillars inside a shield",
  brandTileAlt: "Gunara Consultant dark logo emblem with a golden rising sun",
  brandLockAlt: "Full Gunara Consultant logo — shield emblem with the GUNARA CONSULTANT wordmark",
  brandMean1Title: "Classical Pillar",
  brandMean1Text: "The G monogram is built from an Ionic column — a symbol of solid legal structure since 2009.",
  brandMean2Title: "Shield",
  brandMean2Text: "The shield shape represents full protection of clients' legality and business interests.",
  brandMean3Title: "Rising Sun",
  brandMean3Text: "Sun rays mark the new era of 2024 and a rising reach across Asia.",
  brandMean4Title: "Emerald & Gold",
  brandMean4Text: "Luxurious emerald green and world-class gold — colors of authority, not mere style.",
  brandBadge: "Official identity — aligned with ISO 9001:2015",

  /* ---- Services (16) ---- */
  svcAria: "Gunara Consultant licensing services",
  svcEyebrow: "Our Services",
  svcTitle: "One Gateway for",
  svcHighlight: "Every License",
  svcDesc:
    "From basic legality to international certification — 16 flagship services covering every licensing need of your business in Indonesia and abroad.",
  svcNotFound: "Can't find the permit you need?",
  svcAsk: "Ask our team",
  svcMore: " — we also handle 18+ other types of permits.",

  /* ---- Explorer (600 catalog) ---- */
  expAria: "The 600 most complete licensing services catalog in Asia",
  expEyebrow: "Service Catalog",
  expTitle: "600+ Licensing Services",
  expHighlight: "The Most Complete in Asia",
  expDesc:
    "Explore the most complete licensing catalog in Asia — the only one covering all of Indonesia's licensing: company incorporation, OSS-RBA, halal & BPOM, complex regulatory sectors, ISO — plus Global & International Licensing (Singapore, Dubai, Saudi Arabia, China). Search, filter, and find within seconds.",
  expPlaceholder: "Search services — e.g. NIB, halal, BPOM, KITAS…",
  expSearchAria: "Search licensing services",
  expPhaseAria: "Filter by implementation phase",
  expPhaseAll: "All Phases",
  expPhaseWord: "Phase",
  expCountSuffix: "services",
  expPopularLabel: "Featured Services Only",
  expPopularAria: "Show featured services only",
  expChipsAria: "Filter service categories",
  expAll: "All",
  expLoading: "Loading the service catalog…",
  expShowingPre: "Showing",
  expShowingMid: "of",
  expNoMatch: "No matching services",
  expTarget:
    "Catalog target: 600 services • 27 sectors • 4 phases — The Most Complete in Asia",
  expError: "Failed to load the catalog. Check your connection and try again.",
  expRetry: "Try Again",
  expNoTitle: "Services not found",
  expNoDesc:
    "Try another keyword or loosen the filters — our catalog keeps growing every phase. Our team is also ready to help find the permit you need.",
  expReset: "Reset All Filters",
  expFeatured: "Featured",
  expConsult: "Ask About This",
  expConsultAriaPre: "Ask about the service",
  expIndexLink: "View the Full 600-Service Index — Read by Google",
  expLoadAria: "Loading services",
  expPagePrev: "Previous",
  expPageNext: "Next",
  expPage: "Page",
  expPageOf: "of",
  expPagePrevAria: "Previous page",
  expPageNextAria: "Next page",
  expPageNavAria: "Catalog pagination",

  /* ---- Insights (monthly articles) ---- */
  insAria: "Business licensing articles and guides",
  insEyebrow: "Articles & Guides — Monthly Editions",
  insTitle: "The Licensing Library",
  insHighlight: "— Updated Every Month",
  insDesc:
    "12 in-depth guides on Indonesian business licensing — a new article is published every month by the Gunara Consultant legal team: from PT & PT PMA, KBLI, OSS-RBA, export halal certification, to MISA Saudi Arabia.",
  insOpen: "Read the full article",
  insClose: "Close article",
  insEditionPre: "Edition",
  insEditionCount: "articles",
  insFooterPre: "in-depth guides — a new edition every month by the",
  insFooterPost: "Gunara Consultant legal team",
  insEnNote:
    "Guides are written in Bahasa Indonesia — our consultants are ready to brief you in English.",
  insCtaConsult: "Need hands-on assistance?",
  insCtaConsultLink: "Free consultation",
  insCtaCatalogPre: "— or browse the",
  insCtaCatalogLink: "600+ licensing services catalog",
  insCtaCatalogPost: "to find the permit you need.",
  insCtaMisa: "Expanding to Saudi Arabia? See our Saudi Desk MISA →",

  /* ---- Catalog Index (SSR index) ---- */
  catAria: "The full index of 600 most complete licensing services in Asia — Gunara Consultant",
  catEyebrow: "Complete Catalog Index",
  catTitlePre: "Index of",
  catTitlePost: "Licensing Services",
  catHighlight: "— All Read by Google",
  catDesc:
    "The complete list of every licensing service we handle — the most complete in Asia — grouped into 27 sectors: from NIB & OSS-RBA, PT/PMA incorporation, halal & BPOM certification, PBG/SLF, AMDAL, KITAS/KITAP, ISO 9001:2015 certification, down to company incorporation in Singapore, Dubai, and Saudi Arabia. Click a sector to open its details — or use the interactive catalog to search & filter.",
  catSearch: "Search & Filter in the Interactive Catalog",
  catMetaA: "sectors •",
  catMetaB: "services •",
  catMetaC: "implementation phases •",
  catMetaD: "audited under ISO 9001:2015",
  catCountSuffix: "services",
  catEnNote:
    "Service entries are listed in Bahasa Indonesia (official regulatory terms) — our team explains everything in English for you.",
  catFeatured: "Featured",
  catPhaseQPre: "How is this catalog of",
  catPhaseQPost: "services implemented?",
  catPhaseIntroPre: "All",
  catPhaseIntroPost:
    "licensing services above are implemented progressively across",
  catPhaseLink: "4 implementation phases",
  catPhase1Name: "Phase 1 — Legal Foundations",
  catPhase1Detail:
    "business entity establishment, MSMEs, taxation, intellectual property",
  catPhase2Name: "Phase 2 — Operations & Industry",
  catPhase2Detail:
    "OSS-RBA, trade, manufacturing, logistics, manpower, food & halal",
  catPhase3Name: "Phase 3 — Complex Regulatory Sectors",
  catPhase3Detail:
    "health & pharmaceuticals, mining & energy, environment, construction, tourism",
  catPhaseAnd: "and",
  catPhase4Name: "Phase 4 — Enterprise & Global",
  catPhase4Detail:
    "fintech, telematics, import-export, education, creative media, ISO certification, plus Global & International Licensing — Singapore, Malaysia, Saudi Arabia, UAE, China",
  catPhaseLegal:
    "Every service is handled by an ISO 9001:2015-certified team with a clear legal basis — from national statutes (UU), government regulations (PP), and presidential regulations (Perpres) to sector-specific rules issued by BPOM, BPJPH, OJK, and Indonesia's Ministry of Law and Human Rights (Kemenkumham RI).",
  catPhaseAsk:
    "Can't find the license you are looking for — in Indonesia or abroad? The Gunara Consultant team — operating under Mic Kinsey consulting standards since 2009 and formally incorporated in 2024 as PT TOP KONSULTAN INTERNASIONAL (AHU-038293.AH.01.30.Tahun 2024) — is ready to handle licensing needs beyond this list.",
  catPhaseCta: "Consult with us now",
  catPhaseCtaPost: "— free of charge, with no commitment.",

  /* ---- WhatsApp Float ---- */
  waAria: "Chat with Gunara Consultant on WhatsApp",
  waTooltip: "Free consultation — fast reply",
};

/* ============ Public API ============ */

/** Konten terstruktur (nav, stats, float cards, marquee, opsi layanan kontak). */
export function getCopy(lang: Lang): Copy {
  return lang === "en" ? COPY_EN : COPY_ID;
}

/** Dictionary string UI; fallback ke UI_ID bila key tidak ditemukan. */
export function getUi(lang: Lang): Record<string, string> {
  return lang === "en" ? { ...UI_EN } : { ...UI_ID };
}
