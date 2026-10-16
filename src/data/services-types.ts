/**
 * Gunara Consultant — Katalog Layanan Perizinan 500+
 * Kontrak tipe, kategori, dan fase implementasi.
 * Data mentah: ./services-data.ts | Agregator: ./services.ts
 */

export type PhaseId = 1 | 2 | 3 | 4;

export type CategorySlug =
  | "badan-usaha"
  | "oss-rba"
  | "pangan-halal"
  | "perdagangan"
  | "industri"
  | "pertambangan-energi"
  | "lingkungan"
  | "konstruksi-properti"
  | "ketenagakerjaan-imigrasi"
  | "pajak-keuangan"
  | "kekayaan-intelektual"
  | "ekspor-impor"
  | "pariwisata"
  | "transportasi-logistik"
  | "pertanian-peternakan-perikanan"
  | "kehutanan"
  | "telematika-it"
  | "keuangan-fintech"
  | "pendidikan"
  | "media-kreatif"
  | "event-hiburan"
  | "sertifikasi-iso"
  | "jasa-profesi"
  | "umkm-daerah"
  | "kesehatan-farmasi"
  | "khusus-strategis";

export interface ServiceItem {
  /** ID global 1..500 (urut berdasarkan kategori) */
  id: number;
  /** Kode unik, format GC-<PREFIX>-<NNN>, contoh: GC-BU-001 */
  code: string;
  /** Nama layanan (SEO-friendly, bahasa Indonesia) */
  name: string;
  category: CategorySlug;
  /** Deskripsi 12–22 kata, kaya kata kunci, bahasa profesional */
  desc: string;
  /** Dasar hukum / regulasi riil yang relevan */
  legalBasis: string;
  /** Fase implementasi katalog (1–4) */
  phase: PhaseId;
  /** Layanan marquee / paling dicari (±40 item) */
  popular?: boolean;
}

export interface CategoryMeta {
  slug: CategorySlug;
  name: string;
  short: string;
  /** key ikon lucide (kebab-case) — tersedia di ui-custom/icon.tsx */
  icon: string;
  blurb: string;
}

export interface PhaseMeta {
  id: PhaseId;
  name: string;
  /** Jendela waktu peluncuran */
  window: string;
  tagline: string;
  description: string;
  categories: CategorySlug[];
  status: "live" | "running" | "upcoming";
}

export const CATEGORIES: CategoryMeta[] = [
  { slug: "badan-usaha", name: "Pendirian Badan Usaha", short: "Badan Usaha", icon: "building", blurb: "PT, CV, Koperasi, Yayasan, FIR, PT PMA hingga perseorangan." },
  { slug: "oss-rba", name: "Perizinan Berusaha OSS-RBA", short: "OSS-RBA", icon: "shield-check", blurb: "NIB, sertifikat standar, dan izin berbasis risiko via OSS." },
  { slug: "pangan-halal", name: "Pangan, Minuman & Halal", short: "Pangan & Halal", icon: "utensils-crossed", blurb: "PIRT, izin edar, sertifikasi halal BPJPH, dan label pangan." },
  { slug: "perdagangan", name: "Perdagangan & Distribusi", short: "Perdagangan", icon: "shopping-cart", blurb: "SIUP, API-U, izin distributor, TPTS, dan e-commerce." },
  { slug: "industri", name: "Industri & Manufaktur", short: "Industri", icon: "factory", blurb: "IUI, izin pabrik, standar industri, dan kawasan berikat." },
  { slug: "pertambangan-energi", name: "Pertambangan & Energi", short: "Tambang & Energi", icon: "pickaxe", blurb: "IUP, ESDM, migas, panas bumi, EBT, dan RDKB." },
  { slug: "lingkungan", name: "Lingkungan Hidup", short: "Lingkungan", icon: "leaf", blurb: "AMDAL, UKL-UPL, SPARING, izin limbah, dan PROPER." },
  { slug: "konstruksi-properti", name: "Konstruksi & Properti", short: "Konstruksi", icon: "hard-hat", blurb: "BUJK, SBU, PBG, SLF, sertifikasi SKA/SKT, dan LPJK." },
  { slug: "ketenagakerjaan-imigrasi", name: "Ketenagakerjaan & Imigrasi", short: "TK & Imigrasi", icon: "users", blurb: "Wajib lapor, RPTKA, notifikasi RPTKA, KITAS/KITAP." },
  { slug: "pajak-keuangan", name: "Pajak & Administrasi Keuangan", short: "Pajak", icon: "calculator", blurb: "NPWP, SPPKP, faktur pajak, LKP, dan PKP." },
  { slug: "kekayaan-intelektual", name: "Kekayaan Intelektual", short: "KI / HKI", icon: "lightbulb", blurb: "Merek, paten, hak cipta, desain industri, rahasia dagang." },
  { slug: "ekspor-impor", name: "Ekspor Impor & Bea Cukai", short: "Ekspor Impor", icon: "ship", blurb: "NPE, PEB/PIB, HS code, izin Bea Cukai, KITE." },
  { slug: "pariwisata", name: "Pariwisata & Perhotelan", short: "Pariwisata", icon: "palmtree", blurb: "BIU, hotel, restoran, pramuwisata, biro perjalanan." },
  { slug: "transportasi-logistik", name: "Transportasi & Logistik", short: "Transportasi", icon: "truck", blurb: "Izin angkutan, TPT, gudang, forwarding, dan JPS." },
  { slug: "pertanian-peternakan-perikanan", name: "Pertanian, Peternakan & Perikanan", short: "Pertanian", icon: "tractor", blurb: "Izin usaha tani, peternakan, perikanan, dan karantina." },
  { slug: "kehutanan", name: "Kehutanan", short: "Kehutanan", icon: "tree-pine", blurb: "PHL, izin pemanfaatan hutan, SVOELL, dan IPPKH." },
  { slug: "telematika-it", name: "Telematika, IT & PSE", short: "IT & PSE", icon: "wifi", blurb: "PSE Kominfo, izin frekuensi, KBLI teknologi, domain." },
  { slug: "keuangan-fintech", name: "Keuangan, Fintech & OJK", short: "Fintech & OJK", icon: "landmark", blurb: "Registrasi OJK, P2P, asuransi, pegadaian, valuation." },
  { slug: "pendidikan", name: "Pendidikan & Pelatihan", short: "Pendidikan", icon: "graduation-cap", blurb: "Izin lembaga diklat, Bimbel, Jenjang sekolah, pondok." },
  { slug: "media-kreatif", name: "Media & Industri Kreatif", short: "Media & Kreatif", icon: "newspaper", blurb: "SIUP pers, izin penyiaran, film, game, dan musik." },
  { slug: "event-hiburan", name: "Event, Hiburan & Reklame", short: "Event & Hiburan", icon: "party-popper", blurb: "Izin keramaian, atraksi, NPWPD, dan reklame daerah." },
  { slug: "sertifikasi-iso", name: "Sertifikasi ISO & Mutu", short: "ISO & Mutu", icon: "award", blurb: "ISO 9001/14001/45001/22000, SMK3, HACCP, GMP." },
  { slug: "jasa-profesi", name: "Jasa Profesi & Tenaga Teknis", short: "Jasa Profesi", icon: "briefcase", blurb: "SKA/SKT, STR, izin praktik, dan sertifikasi profesi." },
  { slug: "umkm-daerah", name: "UMKM & Perizinan Daerah", short: "UMKM & Daerah", icon: "store", blurb: "IUMK, NIB UMKM, izin pasar, dan perizinan daerah." },
  { slug: "kesehatan-farmasi", name: "Kesehatan & Farmasi", short: "Kesehatan", icon: "heart-pulse", blurb: "BPOM, CPME, CDAKB, izin klinik, apotek, alkes." },
  { slug: "khusus-strategis", name: "Perizinan Khusus & Strategis", short: "Khusus & Strategis", icon: "rocket", blurb: "KEK, kawasan industri, pilot project, dan investasi strategis." },
];

export const PHASES: PhaseMeta[] = [
  {
    id: 1,
    name: "Fase 1 — Legalitas Fondasi",
    window: "Q3–Q4 2024",
    tagline: "Setiap bisnis dimulai dari nama yang sah.",
    description:
      "78 layanan inti: pendirian seluruh bentuk badan usaha, perizinan UMKM & daerah, administrasi pajak, hingga pengamanan kekayaan intelektual — fondasi legal yang menjadi pintu masuk katalog kami.",
    categories: ["badan-usaha", "umkm-daerah", "pajak-keuangan", "kekayaan-intelektual"],
    status: "live",
  },
  {
    id: 2,
    name: "Fase 2 — Operasional & Industri",
    window: "Q1–Q2 2025",
    tagline: "Dari legal itu berdiri, kini ia beroperasi.",
    description:
      "131 layanan untuk mesin bisnis berputar: perizinan berusaha berbasis risiko (OSS-RBA), perdagangan & distribusi, industri, logistik, tenaga kerja & imigrasi, serta pangan & halal.",
    categories: ["oss-rba", "perdagangan", "industri", "transportasi-logistik", "ketenagakerjaan-imigrasi", "pangan-halal"],
    status: "running",
  },
  {
    id: 3,
    name: "Fase 3 — Sektor Regulasi Kompleks",
    window: "Q3–Q4 2025",
    tagline: "Sektor paling ketat, ditangani paling tenang.",
    description:
      "156 layanan sektor terregulasi: kesehatan & farmasi (BPOM), pertambangan & energi, lingkungan hidup, konstruksi & properti, pariwisata, pertanian–peternakan–perikanan, kehutanan, hingga event & hiburan.",
    categories: ["kesehatan-farmasi", "pertambangan-energi", "lingkungan", "konstruksi-properti", "pariwisata", "pertanian-peternakan-perikanan", "kehutanan", "event-hiburan"],
    status: "upcoming",
  },
  {
    id: 4,
    name: "Fase 4 — Enterprise & Global",
    window: "H1 2026",
    tagline: "Menuju korporasi kelas dunia.",
    description:
      "135 layanan kelas enterprise: keuangan & fintech (OJK), telematika & PSE, ekspor impor & bea cukai, pendidikan, media kreatif, jasa profesi, sertifikasi ISO & mutu, hingga perizinan khusus & strategis.",
    categories: ["keuangan-fintech", "telematika-it", "ekspor-impor", "pendidikan", "media-kreatif", "jasa-profesi", "sertifikasi-iso", "khusus-strategis"],
    status: "upcoming",
  },
];

/** Target jumlah layanan per kategori — total TEPAT 500 */
export const CATEGORY_TARGETS: Record<CategorySlug, number> = {
  "badan-usaha": 26,
  "oss-rba": 24,
  "pangan-halal": 24,
  "perdagangan": 24,
  "industri": 20,
  "pertambangan-energi": 24,
  "lingkungan": 20,
  "konstruksi-properti": 24,
  "ketenagakerjaan-imigrasi": 20,
  "pajak-keuangan": 20,
  "kekayaan-intelektual": 20,
  "ekspor-impor": 19,
  "pariwisata": 15,
  "transportasi-logistik": 19,
  "pertanian-peternakan-perikanan": 19,
  "kehutanan": 13,
  "telematika-it": 19,
  "keuangan-fintech": 17,
  "pendidikan": 15,
  "media-kreatif": 15,
  "event-hiburan": 13,
  "sertifikasi-iso": 24,
  "jasa-profesi": 18,
  "umkm-daerah": 12,
  "kesehatan-farmasi": 28,
  "khusus-strategis": 8,
};

export const TOTAL_TARGET = 500;

/** Kategori → fase (untuk validasi & filter) */
export const CATEGORY_TO_PHASE: Record<CategorySlug, PhaseId> = Object.fromEntries(
  PHASES.flatMap((p) => p.categories.map((c) => [c, p.id]))
) as Record<CategorySlug, PhaseId>;

/** Prefix kode layanan per kategori */
export const CATEGORY_CODES: Record<CategorySlug, string> = {
  "badan-usaha": "BU",
  "oss-rba": "OS",
  "pangan-halal": "PH",
  "perdagangan": "PD",
  "industri": "IN",
  "pertambangan-energi": "PE",
  "lingkungan": "LH",
  "konstruksi-properti": "KP",
  "ketenagakerjaan-imigrasi": "TK",
  "pajak-keuangan": "PK",
  "kekayaan-intelektual": "KI",
  "ekspor-impor": "EI",
  "pariwisata": "PW",
  "transportasi-logistik": "TL",
  "pertanian-peternakan-perikanan": "PP",
  "kehutanan": "KH",
  "telematika-it": "IT",
  "keuangan-fintech": "FN",
  "pendidikan": "ED",
  "media-kreatif": "MK",
  "event-hiburan": "EH",
  "sertifikasi-iso": "ISO",
  "jasa-profesi": "JP",
  "umkm-daerah": "UD",
  "kesehatan-farmasi": "KF",
  "khusus-strategis": "KS",
};
