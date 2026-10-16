/**
 * Gunara Consultant — Data Saudi Desk / MISA (Ministry of Investment of Saudi Arabia).
 * Single source of truth untuk section #misa:
 *   - src/components/sections/saudi-desk.tsx (UI)
 *   - page.tsx (JSON-LD FAQPage / Service Saudi Desk)
 * Ikon mengacu pada mapper @/components/ui-custom/icon (DynamicIcon).
 */

export interface MisaFaq {
  q: string;
  a: string;
}

export const MISA_FAQ: MisaFaq[] = [
  {
    q: "Apa itu MISA dan apa kaitannya dengan rencana bisnis saya di Arab Saudi?",
    a: "MISA (Ministry of Investment of Saudi Arabia, sebelumnya SAGIA) adalah gerbang tunggal perizinan investasi asing di Arab Saudi, motor inisiatif Vision 2030. Lisensi MISA adalah dokumen pertama yang dibutuhkan perusahaan asing — termasuk dari Indonesia — untuk berdagang/beroperasi resmi di Saudi, sebelum Commercial Registration (CR) dan lisensi sektor terbit.",
  },
  {
    q: "Bisakah investor asing memiliki 100% saham perusahaan di Indonesia?",
    a: "Bisa untuk sebagian besar sektor. Lewat Daftar Positif Investasi (Perpres 10/2021 beserta perubahannya), PT PMA boleh dimiliki asing hingga 100% kecuali KBLI tertentu yang dibatasi. Modal disetor minimal Rp10 miliar per bidang usaha 5 digit KBLI. Tim kami memetakan KBLI yang sah untuk kepemilikan asing sejak awal.",
  },
  {
    q: "Berapa lama proses lisensi MISA dan pendirian perusahaan di Arab Saudi?",
    a: "Setelah dokumen resmi (akta, apostille/legalisasi, power of attorney) lengkap, lisensi MISA umumnya terbit dalam hitungan hari kerja; CR, alamat kantor, dan lisensi munisipal/sektor menyusul total kisaran 2–8 minggu tergantung sektor dan kelengkapan dokumen. Kami beri timeline tertulis di penawaran.",
  },
];

/** Layanan arah Investor Arab Saudi → Indonesia */
export const MISA_SA_TO_ID: { title: string; desc: string; icon: string }[] = [
  {
    title: "Pendirian PT PMA 100%",
    desc: "Positive Investment List (Perpres 10/2021) — kepemilikan asing hingga 100%, modal disetor Rp10 miliar per KBLI, pemetaan KBLI asing-friendly sejak awal.",
    icon: "building",
  },
  {
    title: "Legalitas Inti Perusahaan",
    desc: "SK Kemenkumham, NPWP badan, NIB OSS-RBA, hingga Sertifikat Standar — fondasi legal operasional PT PMA Anda di Indonesia.",
    icon: "file-check",
  },
  {
    title: "Izin Teknis Sektor",
    desc: "Sertifikasi Halal BPJPH untuk F&B, Persetujuan Lingkungan (UKL-UPL/AMDAL), PBG & SLF gedung — disesuaikan sektor usaha Anda.",
    icon: "layers",
  },
  {
    title: "KITAS & KITAP Investor",
    desc: "Izin tinggal investor beserta keluarga: VITAS, KITAS investor, hingga KITAP — termasuk RPTKA dan notifikasi Kemnaker.",
    icon: "id-card",
  },
  {
    title: "Kepatuhan Berjalan",
    desc: "LKPM rutin ke BKPM, pelaporan pajak, dan pembaruan perizinan berkala — agar PT PMA Anda selalu patuh di mata regulator.",
    icon: "receipt",
  },
  {
    title: "KEK & Fasilitas Khusus",
    desc: "Penempatan di Kawasan Ekonomi Khusus (KEK), tax holiday, dan fasilitas kepabeanan untuk efisiensi pajak & operasional maksimal.",
    icon: "palmtree",
  },
];

/** Layanan arah Pelaku Usaha Indonesia → Arab Saudi */
export const MISA_ID_TO_SA: { title: string; desc: string; icon: string }[] = [
  {
    title: "MISA Investment License",
    desc: "Lisensi investasi dari Ministry of Investment of Saudi Arabia — foreign ownership hingga 100% di banyak sektor, pintu masuk resmi ke pasar Vision 2030.",
    icon: "globe",
  },
  {
    title: "Commercial Registration & Munisipal",
    desc: "CR di Ministry of Commerce, alamat kantor terdaftar, dan lisensi munisipal — legalitas dagang lengkap di Arab Saudi.",
    icon: "briefcase",
  },
  {
    title: "Nitaqat & Izin Kerja",
    desc: "Kepatuhan Saudization (Nitaqat), visa & izin kerja GM serta staf expatriate melalui Qiwa/MOLS — rasio penuh tanpa penalti.",
    icon: "users",
  },
  {
    title: "Sertifikasi Produk SABER / SASO",
    desc: "Product Certificate dan Shipment Certificate of Conformity agar barang Anda lolos bea cukai & diterima ritel Saudi.",
    icon: "award",
  },
  {
    title: "SFDA — Pangan, Suplemen & Kosmetik",
    desc: "Registrasi SFDA untuk pangan, suplemen kesehatan, dan kosmetik yang diedarkan ke pasar Arab Saudi.",
    icon: "flask-conical",
  },
  {
    title: "Visa Bisnis & Apostille",
    desc: "Visa bisnis multiple-entry dan legalisasi/apostille dokumen perusahaan — persiapan ekspansi tanpa hambatan birokrasi.",
    icon: "file-signature",
  },
];

/** Timeline 5 langkah Saudi Desk (dua arah) */
export const MISA_STEPS: { step: string; title: string; desc: string }[] = [
  {
    step: "01",
    title: "Konsultasi & Kajian Pasar",
    desc: "Gratis — kami petakan peluang sektor, struktur entitas optimal, dan strategi masuk pasar yang paling efisien.",
  },
  {
    step: "02",
    title: "Struktur & Pemetaan Lisensi",
    desc: "Penentuan entitas, struktur saham, KBLI/lisensi MISA, hingga rencana pajak lintas negara — tertulis jelas.",
  },
  {
    step: "03",
    title: "Pengurusan Dokumen",
    desc: "Akta, apostille/legalisasi, MISA license, CR, hingga NIB/OSS untuk arah Indonesia — dedicated officer mengurus semua.",
  },
  {
    step: "04",
    title: "Operasional & Kepatuhan",
    desc: "Pembukaan rekening, Nitaqat/LKPM, izin sektor, KITAS/visa GM — bisnis Anda resmi beroperasi penuh.",
  },
  {
    step: "05",
    title: "Pendampingan Berkelanjutan",
    desc: "Pelaporan berkala, perluasan lisensi, dan konsultasi ekspansi — partner jangka panjang Anda di dua negara.",
  },
];
