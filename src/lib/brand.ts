export const BRAND = {
  name: "Gunara Consultant",
  shortName: "Gunara",
  taglineId: "Pusat Perizinan Terlengkap di Asia",
  taglineEn: "The Most Complete Licensing Center in Asia",
  since: 2009,
  founded: 2024,
  heritage: "Mic Kinsey",
  iso: "ISO 9001:2015",
  siteUrl: "https://gunaraconsultant.com",
  groupSite: "pusatperizinan.com",
  address:
    "Andalusia Garden Cluster Granada No.11, Jln. Abdi Negara II, Kota Tasikmalaya, Jawa Barat 46115",
  addressJkt:
    "Indonesia Stock Exchange Tower 1 Level 3, Unit 304, Jl. Jendral Sudirman Kav 52-53, Desa/Kelurahan Senayan, Kec. Kebayoran Baru, Kota Adm. Jakarta Selatan, Provinsi DKI Jakarta",
  email: "halo@gunaraconsultant.com",
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
