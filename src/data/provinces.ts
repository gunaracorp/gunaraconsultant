export interface Province {
  name: string;
  island: string;
}

/**
 * 38 provinsi Indonesia (rasionalisasi 2022 — pemekaran Papua).
 * Sumber: UU Dprd & Keppres 2022 — total resmi 38 provinsi.
 */
export const PROVINCES: Province[] = [
  // Sumatera (10)
  { name: "Aceh", island: "Sumatera" },
  { name: "Sumatera Utara", island: "Sumatera" },
  { name: "Sumatera Barat", island: "Sumatera" },
  { name: "Riau", island: "Sumatera" },
  { name: "Kepulauan Riau", island: "Sumatera" },
  { name: "Jambi", island: "Sumatera" },
  { name: "Sumatera Selatan", island: "Sumatera" },
  { name: "Kepulauan Bangka Belitung", island: "Sumatera" },
  { name: "Bengkulu", island: "Sumatera" },
  { name: "Lampung", island: "Sumatera" },
  // Jawa (6)
  { name: "Banten", island: "Jawa" },
  { name: "DKI Jakarta", island: "Jawa" },
  { name: "Jawa Barat", island: "Jawa" },
  { name: "Jawa Tengah", island: "Jawa" },
  { name: "DI Yogyakarta", island: "Jawa" },
  { name: "Jawa Timur", island: "Jawa" },
  // Bali & Nusa Tenggara (3)
  { name: "Bali", island: "Bali & Nusa Tenggara" },
  { name: "Nusa Tenggara Barat", island: "Bali & Nusa Tenggara" },
  { name: "Nusa Tenggara Timur", island: "Bali & Nusa Tenggara" },
  // Kalimantan (5)
  { name: "Kalimantan Barat", island: "Kalimantan" },
  { name: "Kalimantan Tengah", island: "Kalimantan" },
  { name: "Kalimantan Selatan", island: "Kalimantan" },
  { name: "Kalimantan Timur", island: "Kalimantan" },
  { name: "Kalimantan Utara", island: "Kalimantan" },
  // Sulawesi (6)
  { name: "Sulawesi Utara", island: "Sulawesi" },
  { name: "Gorontalo", island: "Sulawesi" },
  { name: "Sulawesi Tengah", island: "Sulawesi" },
  { name: "Sulawesi Barat", island: "Sulawesi" },
  { name: "Sulawesi Selatan", island: "Sulawesi" },
  { name: "Sulawesi Tenggara", island: "Sulawesi" },
  // Maluku & Papua (8)
  { name: "Maluku", island: "Maluku & Papua" },
  { name: "Maluku Utara", island: "Maluku & Papua" },
  { name: "Papua Barat", island: "Maluku & Papua" },
  { name: "Papua Barat Daya", island: "Maluku & Papua" },
  { name: "Papua", island: "Maluku & Papua" },
  { name: "Papua Selatan", island: "Maluku & Papua" },
  { name: "Papua Tengah", island: "Maluku & Papua" },
  { name: "Papua Pegunungan", island: "Maluku & Papua" },
];

export const PROVINCE_GROUPS = [
  "Sumatera",
  "Jawa",
  "Bali & Nusa Tenggara",
  "Kalimantan",
  "Sulawesi",
  "Maluku & Papua",
] as const;
