/**
 * Konfigurasi layanan programmatic SEO (v3.12.0): satu halaman per kota/kabupaten
 * dan per provinsi untuk lini ibadah — PPIU & PIHK. Konten halaman dirakit oleh
 * src/components/sections/kota-programmatic.tsx dari konfigurasi + data wilayah.
 */

export interface LayananProgrammatic {
  key: "ppiu" | "pihk";
  /** Nama singkat untuk H1/heading, mis. "Izin PPIU (Umrah)" */
  nama: string;
  /** Nama paling ringkas untuk judul SERP (≤52 karakter bersama nama kota) */
  metaNama: string;
  namaPanjang: string;
  /** Prefix URL halaman programmatic, mis. "/sertifikasi-travel/ppiu" */
  pathPrefix: string;
  crumb: string;
  /** Slug produk di katalog (untuk tautan detail & Offer JSON-LD) */
  layananSlug: string;
  dasarHukum: string;
  berlaku: string;
  /** Frasa akhir ruang lingkup, mis. "hingga izin Kemenag terbit" */
  izinText: string;
  /** Kalimat target pemilik usaha */
  target: string;
  ruang: string[];
  /** Awalan pesan WhatsApp, disambung nama kota oleh template */
  waGreeting: string;
  /** Layanan pasangan untuk tautan silang */
  lawan: "pihk" | "ppiu";
}

export const LAYANAN_PROGRAMMATIC: Record<"ppiu" | "pihk", LayananProgrammatic> = {
  ppiu: {
    key: "ppiu",
    nama: "Izin PPIU (Umrah)",
    metaNama: "Izin PPIU",
    namaPanjang: "Izin Usaha PPIU Umrah",
    pathPrefix: "/sertifikasi-travel/ppiu",
    crumb: "Izin PPIU Umrah",
    layananSlug: "izin-usaha-ppiu-umrah",
    dasarHukum: "UU No. 13 Tahun 2008 jo. Permenag No. 15 Tahun 2012",
    berlaku: "Izin PPIU berlaku 5 tahun (dapat diperpanjang)",
    izinText: "izin Kemenag terbit",
    target:
      "Travel ibadah umrah: jualan paket umrah dengan izin Kementerian Agama",
    ruang: [
      "Badan usaha PT, akta, SK Kemenkumham, NIB & KBLI",
      "Dokumen rekomendasi & pengurusan izin Kemenag",
      "Panduan deposit/dana talangan & pembimbing ibadah",
      "Pendampingan pelaporan keberangkatan pertama",
    ],
    waGreeting: "Halo GConsultant, saya ingin konsultasi Izin PPIU untuk travel di",
    lawan: "pihk",
  },
  pihk: {
    key: "pihk",
    nama: "Izin PPIHK (Haji Khusus)",
    metaNama: "Izin PPIHK",
    namaPanjang: "Izin Usaha PPIHK Haji Khusus",
    pathPrefix: "/sertifikasi-travel/pihk",
    crumb: "Izin PIHK Haji Khusus",
    layananSlug: "izin-usaha-ppihk-haji-khusus",
    dasarHukum: "UU No. 13 Tahun 2008 tentang Penyelenggaraan Haji",
    berlaku: "Izin PIHK berlaku 3 tahun (dapat diperpanjang)",
    izinText: "izin PIHK terbit",
    target:
      "Penyelenggara haji khusus: layanan ibadah eksklusif premium",
    ruang: [
      "Pemetaan prasyarat & jalur naik kelas dari PPIU",
      "Badan hukum, dokumen & administrasi Kemenag",
      "Pengurusan izin PIHK berdasarkan UU 13/2008",
      "Konsultasi kemitraan & struktur layanan haji khusus",
    ],
    waGreeting:
      "Halo GConsultant, saya ingin konsultasi Izin PIHK (haji khusus) untuk layanan di",
    lawan: "ppiu",
  },
};
