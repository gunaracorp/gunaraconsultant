/**
 * DATA LAYANAN — SEMENTARA (6 sampel valid).
 * ⚠️ FILE INI AKAN DIGANTI SELURUHNYA oleh Task 2-a dengan TEPAT 500 layanan.
 * Kontrak tipe: ./services-types.ts (ServiceItem).
 */
import type { ServiceItem } from "./services-types";

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    code: "GC-OS-001",
    name: "Pengurusan Nomor Induk Berusaha (NIB) via OSS-RBA",
    category: "oss-rba",
    desc: "Legitimasi identitas usaha Anda dalam satu nomor resmi — cepat, akurat, dan terintegrasi penuh dengan sistem OSS pemerintah.",
    legalBasis: "Perpres No. 5 Tahun 2021 jo. Perpres No. 74 Tahun 2024",
    phase: 2,
    popular: true,
  },
  {
    id: 2,
    code: "GC-BU-001",
    name: "Pendirian Perseroan Terbatas (PT) — Akta & SK Kemenkumham",
    category: "badan-usaha",
    desc: "Berdiri sebagai badan hukum resmi dengan akta notaris dan pengesahan Kemenkumham yang diurus end-to-end tanpa drama.",
    legalBasis: "UU No. 40 Tahun 2007 jo. UU No. 6 Tahun 2023",
    phase: 1,
    popular: true,
  },
  {
    id: 3,
    code: "GC-PH-001",
    name: "Sertifikasi Halal Produk (BPJPH) — Regular & Seger Terprodusen",
    category: "pangan-halal",
    desc: "Buka pintu pasar Muslim terbesar dunia dengan sertifikat halal resmi BPJPH untuk produk makanan, minuman, dan kosmetik Anda.",
    legalBasis: "UU No. 33 Tahun 2014 jo. PP No. 42 Tahun 2024",
    phase: 2,
    popular: true,
  },
  {
    id: 4,
    code: "GC-KF-001",
    name: "Izin Edar Pangan Olahan (BPOM MD/ML)",
    category: "kesehatan-farmasi",
    desc: "Produk Anda layak beredar nasional — pengurusan izin edar BPOM lengkap dari registrasi hingga terbitnya nomor MD.",
    legalBasis: "UU No. 18 Tahun 2012 jo. Peraturan BPOM Terkait",
    phase: 3,
    popular: true,
  },
  {
    id: 5,
    code: "GC-KP-001",
    name: "Persetujuan Bangunan Gedung (PBG) & Sertifikat Laik Fungsi (SLF)",
    category: "konstruksi-properti",
    desc: "Pastikan bangunan Anda legal, aman, dan laik fungsi — PBG dan SLF diurus tuntas hingga terbit di SIMBG.",
    legalBasis: "UU No. 28 Tahun 2002 jo. PP No. 16 Tahun 2021",
    phase: 3,
    popular: true,
  },
  {
    id: 6,
    code: "GC-ISO-001",
    name: "Sertifikasi Sistem Manajemen Mutu ISO 9001:2015",
    category: "sertifikasi-iso",
    desc: "Tingkatkan kredibilitas dan efisiensi bisnis dengan sertifikasi ISO 9001:2015 — persiapan dokumen hingga audit tuntas.",
    legalBasis: "ISO 9001:2015 (IAF-accredited certification body)",
    phase: 4,
    popular: true,
  },
];
