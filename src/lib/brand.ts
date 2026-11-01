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
  taglineId: "Pusat Perizinan Terlengkap di Asia",
  taglineEn: "The Most Complete Licensing Center in Asia",
  since: 2009,
  founded: 2024,
  heritage: "Mic Kinsey",
  iso: "ISO 9001:2015",
  siteUrl: "https://gunara.web.id",
  groupSite: "pusatperizinan.com",
  address:
    "Andalusia Garden Cluster Granada No.11, Jln. Abdi Negara II, Kota Tasikmalaya, Jawa Barat 46115",
  addressJkt:
    "Indonesia Stock Exchange Tower 1 Level 3, Unit 304, Jl. Jendral Sudirman Kav 52-53, Desa/Kelurahan Senayan, Kec. Kebayoran Baru, Kota Adm. Jakarta Selatan, Provinsi DKI Jakarta",
  email: "halo@gunara.web.id",
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

export const PROVINCE_COUNT = 38;
