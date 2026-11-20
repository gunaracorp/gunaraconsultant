/**
 * Data Direktori 20 Kanal Resmi Pemerintah (v3.11.0).
 * Setiap URL diverifikasi minimal satu jalur independen sebelum masuk daftar
 * (HTTP langsung, DNS, dan/atau hasil pencarian situs resmi) pada 20-11-2026.
 *
 * Domain kementerian dapat berubah karena rebrand — contoh nyata yang ditemukan
 * saat verifikasi: bpom.go.id → pom.go.id, kemenkumham.go.id → kemenham.go.id,
 * kemenkes.go.id → kemkes.go.id. Periksa ulang sebelum mempublikasi ulang.
 */

export interface KanalPemerintah {
  kode: string;
  nama: string;
  badan: string;
  url: string;
  domain: string;
  monogram: string;
  fungsi: string;
  fungsiEn: string;
  cluster: string;
  clusterEn: string;
}

export const KANAL_PEMERINTAH: KanalPemerintah[] = [
  // ── Kluster 1: Fondasi Badan Usaha & Fiskal ─────────────────────────────
  {
    kode: "KR-01",
    nama: "OSS-RBA",
    badan: "Kementerian Investasi / BKPM",
    url: "https://oss.go.id",
    domain: "oss.go.id",
    monogram: "OSS",
    fungsi: "NIB dan seluruh izin berusaha berbasis risiko untuk semua skala usaha",
    fungsiEn: "NIB and all risk-based business licences for every business scale",
    cluster: "Fondasi Badan Usaha & Fiskal",
    clusterEn: "Business Entity & Fiscal Foundation",
  },
  {
    kode: "KR-02",
    nama: "AHU Online",
    badan: "Kementerian Hukum",
    url: "https://ahu.go.id",
    domain: "ahu.go.id",
    monogram: "AHU",
    fungsi: "Pendirian, perubahan, dan pengesahan PT, CV, CVPT, serta Yayasan",
    fungsiEn: "Establishment, amendment and approval of PT, CV, CVPT and foundations",
    cluster: "Fondasi Badan Usaha & Fiskal",
    clusterEn: "Business Entity & Fiscal Foundation",
  },
  {
    kode: "KR-03",
    nama: "DJP — Coretax",
    badan: "Kementerian Keuangan",
    url: "https://pajak.go.id",
    domain: "pajak.go.id",
    monogram: "DJP",
    fungsi: "NPWP badan, registrasi Coretax, faktur pajak, dan kepatuhan pajak",
    fungsiEn: "Corporate NPWP, Coretax registration, tax invoices and tax compliance",
    cluster: "Fondasi Badan Usaha & Fiskal",
    clusterEn: "Business Entity & Fiscal Foundation",
  },
  {
    kode: "KR-04",
    nama: "DJBC — Bea Cukai",
    badan: "Kementerian Keuangan",
    url: "https://beacukai.go.id",
    domain: "beacukai.go.id",
    monogram: "BC",
    fungsi: "Kepabeanan: API, impor, ekspor, dan berbagai fasilitas kepabeanan",
    fungsiEn: "Customs: import identification, import-export and customs facilities",
    cluster: "Fondasi Badan Usaha & Fiskal",
    clusterEn: "Business Entity & Fiscal Foundation",
  },

  // ── Kluster 2: Produk, Halal & Kesehatan ────────────────────────────────
  {
    kode: "KR-05",
    nama: "BPJPH",
    badan: "Badan Penjaminan Produk Halal",
    url: "https://halal.go.id",
    domain: "halal.go.id",
    monogram: "BPJ",
    fungsi: "Sertifikat halal produk, jasa, dan SIHALAL untuk semua jenis usaha",
    fungsiEn: "Halal certification for products and services via SIHALAL",
    cluster: "Produk, Halal & Kesehatan",
    clusterEn: "Products, Halal & Health",
  },
  {
    kode: "KR-06",
    nama: "POM RI (BPOM)",
    badan: "Badan POM",
    url: "https://pom.go.id",
    domain: "pom.go.id",
    monogram: "POM",
    fungsi: "Izin edar obat & suplemen, CPMB pangan olahan, dan notifikasi kosmetik",
    fungsiEn: "Drug & supplement marketing authorisation, CPMB, cosmetic notification",
    cluster: "Produk, Halal & Kesehatan",
    clusterEn: "Products, Halal & Health",
  },
  {
    kode: "KR-07",
    nama: "Kemenkes",
    badan: "Kementerian Kesehatan",
    url: "https://kemkes.go.id",
    domain: "kemkes.go.id",
    monogram: "KK",
    fungsi: "Perizinan fasyankes, apotek, dan izin usaha aplikasi teknologi kesehatan",
    fungsiEn: "Health facility licensing, pharmacies and health-tech application permits",
    cluster: "Produk, Halal & Kesehatan",
    clusterEn: "Products, Halal & Health",
  },
  {
    kode: "KR-08",
    nama: "BSN — SNI",
    badan: "Badan Standardisasi Nasional",
    url: "https://bsn.go.id",
    domain: "bsn.go.id",
    monogram: "SNI",
    fungsi: "Sertifikasi SNI wajib dan sukarela untuk produk industri",
    fungsiEn: "Mandatory and voluntary SNI certification for industrial products",
    cluster: "Produk, Halal & Kesehatan",
    clusterEn: "Products, Halal & Health",
  },

  // ── Kluster 3: Ibadah, Pariwisata & Perdagangan ─────────────────────────
  {
    kode: "KR-09",
    nama: "Kemenag",
    badan: "Kementerian Agama RI",
    url: "https://kemenag.go.id",
    domain: "kemenag.go.id",
    monogram: "KAG",
    fungsi: "Izin PPIU, PPIHK, dan seluruh perizinan penyelenggaraan ibadah",
    fungsiEn: "PPIU, PPIHK licences and all worship-related business permits",
    cluster: "Ibadah, Pariwisata & Perdagangan",
    clusterEn: "Worship, Tourism & Trade",
  },
  {
    kode: "KR-10",
    nama: "Kementerian Pariwisata",
    badan: "Kementerian Pariwisata RI",
    url: "https://kemenpar.go.id",
    domain: "kemenpar.go.id",
    monogram: "PAR",
    fungsi: "TDA pariwisata (BPW) dan legalitas usaha travel umum",
    fungsiEn: "Tourism business registration (BPW) and general travel legality",
    cluster: "Ibadah, Pariwisata & Perdagangan",
    clusterEn: "Worship, Tourism & Trade",
  },
  {
    kode: "KR-11",
    nama: "Kementerian UMKM",
    badan: "Kementerian UMKM RI",
    url: "https://umkm.go.id",
    domain: "umkm.go.id",
    monogram: "UMK",
    fungsi: "Legalitas, pembinaan, dan program pengembangan UMKM",
    fungsiEn: "MSME legality, coaching and development programmes",
    cluster: "Ibadah, Pariwisata & Perdagangan",
    clusterEn: "Worship, Tourism & Trade",
  },
  {
    kode: "KR-12",
    nama: "Kemendag",
    badan: "Kementerian Perdagangan",
    url: "https://kemendag.go.id",
    domain: "kemendag.go.id",
    monogram: "DAG",
    fungsi: "Tanda Pengenal Ekspor (TPE) dan izin usaha perdagangan",
    fungsiEn: "Export identification number (TPE) and trading business permits",
    cluster: "Ibadah, Pariwisata & Perdagangan",
    clusterEn: "Worship, Tourism & Trade",
  },

  // ── Kluster 4: Industri, Tenaga Kerja & Digital ─────────────────────────
  {
    kode: "KR-13",
    nama: "Kemenperin",
    badan: "Kementerian Perindustrian",
    url: "https://kemenperin.go.id",
    domain: "kemenperin.go.id",
    monogram: "PIN",
    fungsi: "Sertifikat industri, fasilitasi IKM, dan standar industri",
    fungsiEn: "Industry certificates, IKM facilitation and industry standards",
    cluster: "Industri, Tenaga Kerja & Digital",
    clusterEn: "Industry, Labour & Digital",
  },
  {
    kode: "KR-14",
    nama: "Kemnaker",
    badan: "Kementerian Ketenagakerjaan",
    url: "https://kemnaker.go.id",
    domain: "kemnaker.go.id",
    monogram: "NAK",
    fungsi: "Wajib Lapor, SMK3, hubungan industrial, dan perizinan TKA",
    fungsiEn: "Compulsory reporting, SMK3, industrial relations and foreign worker permits",
    cluster: "Industri, Tenaga Kerja & Digital",
    clusterEn: "Industry, Labour & Digital",
  },
  {
    kode: "KR-15",
    nama: "ESDM",
    badan: "Kementerian ESDM",
    url: "https://esdm.go.id",
    domain: "esdm.go.id",
    monogram: "SDM",
    fungsi: "Sertifikat Laik Operasi (SLO), sumber daya mineral, dan energi",
    fungsiEn: "Operation worthiness certificate (SLO), mineral and energy resources",
    cluster: "Industri, Tenaga Kerja & Digital",
    clusterEn: "Industry, Labour & Digital",
  },
  {
    kode: "KR-16",
    nama: "Komdigi",
    badan: "Kementerian Komunikasi & Digital",
    url: "https://komdigi.go.id",
    domain: "komdigi.go.id",
    monogram: "DIG",
    fungsi: "Pendaftaran PSE (sistem elektronik) untuk platform dan aplikasi digital",
    fungsiEn: "Electronic system registration (PSE) for digital platforms and apps",
    cluster: "Industri, Tenaga Kerja & Digital",
    clusterEn: "Industry, Labour & Digital",
  },

  // ── Kluster 5: Lingkungan, Konstruksi & Hukum ───────────────────────────
  {
    kode: "KR-17",
    nama: "KLHK",
    badan: "Kementerian Lingkungan Hidup & Kehutanan",
    url: "https://menlhk.go.id",
    domain: "menlhk.go.id",
    monogram: "LHK",
    fungsi: "AMDAL, UKL-UPL, dan perizinan lingkungan hidup",
    fungsiEn: "AMDAL, UKL-UPL and environmental permits",
    cluster: "Lingkungan, Konstruksi & Hukum",
    clusterEn: "Environment, Construction & Law",
  },
  {
    kode: "KR-18",
    nama: "Kementerian PU",
    badan: "Kementerian Pekerjaan Umum",
    url: "https://pu.go.id",
    domain: "pu.go.id",
    monogram: "PU",
    fungsi: "PBG (izin bangunan), SLF, dan persetujuan bangunan gedung",
    fungsiEn: "Building approval (PBG), SLF and building conformity",
    cluster: "Lingkungan, Konstruksi & Hukum",
    clusterEn: "Environment, Construction & Law",
  },
  {
    kode: "KR-19",
    nama: "Ditjen Bina Konstruksi",
    badan: "Direktorat Jenderal Bina Konstruksi",
    url: "https://binakonstruksi.pu.go.id",
    domain: "binakonstruksi.pu.go.id",
    monogram: "BK",
    fungsi: "Sertifikasi keahlian jasa konstruksi dan pengembangan profesi",
    fungsiEn: "Construction service expertise certification and professional development",
    cluster: "Lingkungan, Konstruksi & Hukum",
    clusterEn: "Environment, Construction & Law",
  },
  {
    kode: "KR-20",
    nama: "Kementerian Hukum",
    badan: "Kementerian Hukum RI",
    url: "https://kemenham.go.id",
    domain: "kemenham.go.id",
    monogram: "HAM",
    fungsi: "Legalisasi dokumen, kekayaan intelektual, dan layanan hukum negara",
    fungsiEn: "Document legalisation, intellectual property and state legal services",
    cluster: "Lingkungan, Konstruksi & Hukum",
    clusterEn: "Environment, Construction & Law",
  },
];

export const KANAL_COUNT = KANAL_PEMERINTAH.length; // 20
