export interface ServiceFaq {
  qId: string;
  aId: string;
  qEn: string;
  aEn: string;
}

export interface Service {
  slug: string;
  cat: string;
  nameId: string;
  nameEn: string;
  shortId: string;
  shortEn: string;
  descId: string;
  descEn: string;
  benefitsId: string[];
  benefitsEn: string[];
  reqId: string[];
  reqEn: string[];
  stepsId: string[];
  stepsEn: string[];
  durationId: string;
  durationEn: string;
  priceFrom: string;
  keywords: string[];
  faq: ServiceFaq[];
}

export interface ServiceCategory {
  id: string;
  icon: string;
  nameId: string;
  nameEn: string;
  descId: string;
  descEn: string;
}

export const CATEGORIES: ServiceCategory[] = [
  {
    id: "badan-hukum",
    icon: "building",
    nameId: "Izin Usaha & Badan Hukum",
    nameEn: "Business & Legal Entities",
    descId: "Pendirian badan usaha dan legalitas dasar: NIB OSS-RBA, PT, CV, hingga perubahan akta.",
    descEn: "Business entity establishment and basic legality: OSS-RBA NIB, PT, CV, to deed amendments.",
  },
  {
    id: "lingkungan",
    icon: "leaf",
    nameId: "Perizinan Lingkungan",
    nameEn: "Environmental Licensing",
    descId: "AMDAL, UKL-UPL, SPPL, dan persetujuan lingkungan untuk seluruh jenis kegiatan usaha.",
    descEn: "AMDAL, UKL-UPL, SPPL, and environmental approvals for all business activities.",
  },
  {
    id: "konstruksi",
    icon: "hardhat",
    nameId: "Konstruksi & Bangunan",
    nameEn: "Construction & Buildings",
    descId: "PBG (eks-IMB), SLF, SBU konstruksi, dan kesesuaian pemanfaatan ruang (KKPR).",
    descEn: "PBG (ex-IMB), SLF, construction SBU, and spatial utilization conformity (KKPR).",
  },
  {
    id: "perdagangan",
    icon: "cart",
    nameId: "Perdagangan & Impor",
    nameEn: "Trade & Import",
    descId: "API-U, API-P, izin barang tertentu, hingga izin gudang dan TPS untuk kelancaran bisnis Anda.",
    descEn: "API-U, API-P, specific goods licenses, warehouse and TPS permits for smooth business.",
  },
  {
    id: "pangan-obat",
    icon: "pill",
    nameId: "Pangan, Obat & BPOM",
    nameEn: "Food, Drugs & BPOM",
    descId: "Izin edar BPOM, sertifikasi halal, SNI, PIRT, dan registrasi suplemen-kosmetik.",
    descEn: "BPOM distribution permits, halal certification, SNI, PIRT, and supplement-cosmetics registration.",
  },
  {
    id: "kesehatan",
    icon: "heart",
    nameId: "Perizinan Kesehatan",
    nameEn: "Health Licensing",
    descId: "SIP, izin klinik, apotek, laboratorium, dan distribusi alat kesehatan (AKL/AKD).",
    descEn: "Practice licenses, clinic and pharmacy permits, laboratories, and medical device distribution (AKL/AKD).",
  },
  {
    id: "pariwisata",
    icon: "plane",
    nameId: "Pariwisata & Perjalanan",
    nameEn: "Tourism & Travel",
    descId: "Kartu pramuwisata HPI, biro perjalanan wisata, SHR hotel-resto, hingga wisata alam.",
    descEn: "HPI tour guide cards, travel agency licenses, hotel-restaurant SHR, to nature tourism.",
  },
  {
    id: "tambang-energi",
    icon: "mountain",
    nameId: "Pertambangan & Energi",
    nameEn: "Mining & Energy",
    descId: "IUP, IUPK, jasa penunjang pertambangan, hingga perizinan energi terbarukan (EBT/PLTS).",
    descEn: "IUP, IUPK, mining support services, to renewable energy licensing (EBT/PLTS).",
  },
  {
    id: "pma",
    icon: "globe",
    nameId: "PMA & Investasi Asing",
    nameEn: "FDI & Foreign Investment",
    descId: "Pendirian PT PMA, KITAS/KITAP, persetujuan BKPM, kantor perwakilan, dan RPTKA.",
    descEn: "PT PMA establishment, KITAS/KITAP, BKPM approval, representative offices, and RPTKA.",
  },
  {
    id: "ketenagakerjaan",
    icon: "users",
    nameId: "Ketenagakerjaan",
    nameEn: "Employment & HR",
    descId: "Wajib lapor, BPJS, SMK3, dan legalitas ketenagakerjaan agar usaha bebas sanksi.",
    descEn: "Company reporting, BPJS, SMK3, and employment legality to keep your business sanction-free.",
  },
  {
    id: "sertifikasi",
    icon: "award",
    nameId: "Sertifikasi & HKI",
    nameEn: "Certification & IP",
    descId: "ISO 9001:2015 dan ISO lainnya, HKI merek-paten-ciptaan, serta sertifikasi kompetensi BNSP.",
    descEn: "ISO 9001:2015 and other ISOs, trademark-patent-copyright IP, and BNSP competency certification.",
  },
];
