/**
 * MASTER PRICING IATA 2026 — SATU SUMBER HARGA (single source of truth).
 * Aturan pemilik: harga sama di semua kanal & tampilan; jangan mengubah,
 * membulatkan, atau menampilkan harga lama; harga adalah jasa konsultasi &
 * pendampingan — BUKAN tarif resmi IATA; seluruh biaya resmi IATA dinyatakan
 * terpisah dalam quotation; label promo "Promo Konsultasi 2026"; masa promo
 * dapat diatur administrator. Dipakai oleh services-iata.ts (priceFrom) dan
 * seluruh tampilan harga IATA agar antar-halaman tidak pernah berbeda.
 */

export interface IataProduct {
  code: "golite" | "gostandard" | "goglobal";
  nameId: string;
  nameEn: string;
  modelId: string;
  modelEn: string;
  priceCatalog: string;
  pricePromo: string;
  /** true bila harga promo adalah harga "mulai" (proyek multi-negara) */
  isStarting: boolean;
}

export const IATA_PROMO_LABEL = {
  id: "Promo Konsultasi 2026",
  en: "2026 Consultancy Promo",
} as const;

export const IATA_PRODUCTS: IataProduct[] = [
  {
    code: "golite",
    nameId: "IATA GoLite",
    nameEn: "IATA GoLite",
    modelId: "Standard Accreditation tanpa Cash Facility",
    modelEn: "Standard Accreditation without Cash Facility",
    priceCatalog: "Rp19.500.000",
    pricePromo: "Rp9.750.000",
    isStarting: false,
  },
  {
    code: "gostandard",
    nameId: "IATA GoStandard",
    nameEn: "IATA GoStandard",
    modelId: "Standard Accreditation dengan Cash Facility",
    modelEn: "Standard Accreditation with Cash Facility",
    priceCatalog: "Rp37.500.000",
    pricePromo: "Rp18.750.000",
    isStarting: false,
  },
  {
    code: "goglobal",
    nameId: "IATA GoGlobal",
    nameEn: "IATA GoGlobal",
    modelId: "Multi-Country Accreditation",
    modelEn: "Multi-Country Accreditation",
    priceCatalog: "Rp75.000.000",
    pricePromo: "Mulai Rp37.500.000",
    isStarting: true,
  },
];

/** Catatan kewenangan & batasan klaim — wajib tampil di halaman IATA. */
export const IATA_AUTHORITY_NOTE = {
  id: "GConsultant adalah konsultan independen — bukan afiliasi, kantor cabang, maupun agen resmi IATA. Kami membantu persiapan dan pendampingan administrasi aplikasi akreditasi; IATA tetap memegang kewenangan penuh atas evaluasi kelayakan, persyaratan, financial security, dan keputusan akreditasi. Konsultasi tidak menjamin persetujuan. Biaya resmi IATA (application fee, annual fee, financial security, audit, notaris, terjemahan tersumpah, biaya bank, pajak) berada di luar jasa konsultasi dan dinyatakan terpisah dalam quotation.",
  en: "GConsultant is an independent consultancy — not an affiliate, branch office, or official agent of IATA. We assist with preparation and administrative application assistance for accreditation; IATA retains full authority over eligibility evaluation, requirements, financial security, and accreditation decisions. Consultancy does not guarantee approval. Official IATA fees (application fee, annual fee, financial security, audit, notary, sworn translation, bank charges, taxes) are outside our consultancy fee and stated separately in the quotation.",
} as const;

/** Referensi resmi IATA untuk verifikasi (E-E-A-T). */
export const IATA_OFFICIAL_REFERENCES = [
  {
    label: "IATA Travel Agent Accreditation",
    url: "https://www.iata.org/en/services/travel-agency-program/accreditation-travel/",
  },
  {
    label: "IATA Indonesia Country Requirements",
    url: "https://www.iata.org/en/services/travel-agency-program/accreditation-travel/country-requirements/a52w0000000fy2naaa/pax/",
  },
  {
    label: "IATA FAQ — What is GoLite Accreditation",
    url: "https://portal.iata.org/faq/s/article/What-is-GoLite-Accreditation?language=en_US",
  },
] as const;

export function iataProduct(code: IataProduct["code"]): IataProduct {
  const p = IATA_PRODUCTS.find((x) => x.code === code);
  if (!p) throw new Error(`Produk IATA tidak ditemukan: ${code}`);
  return p;
}
