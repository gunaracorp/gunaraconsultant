/**
 * Gunara Consultant — Central content & SEO data.
 * Single source of truth untuk seluruh konten website.
 */

export const SITE = {
  name: "Gunara Consultant",
  legalName: "PT Gunara Consultant Indonesia",
  url: "https://www.gunaraconsultant.com",
  tagline: "Mitra Legalitas Usaha Kelas Dunia",
  description:
    "Konsultan perizinan usaha bersertifikasi ISO 9001:2015. NIB, pendirian PT/PMA, sertifikasi halal, BPOM/PIRT, PBG & SLF, izin lingkungan, hingga izin internasional.",
  phone: "+62 812-9000-1234",
  phoneHref: "tel:+6281290001234",
  whatsapp: "https://wa.me/6281290001234",
  email: "info@gunaraconsultant.com",
  address: {
    street: "Jl. Jend. Sudirman Kav. 52-53, SCBD",
    city: "Jakarta Selatan",
    region: "DKI Jakarta",
    postalCode: "12190",
    country: "ID",
  },
  founded: "2010",
  groupBrands: ["Gunara Consultant", "PusatPerizinan.com", "Gunara Legal"],
  social: {
    linkedin: "https://www.linkedin.com/company/gunara-consultant",
    instagram: "https://www.instagram.com/gunaraconsultant",
    facebook: "https://www.facebook.com/gunaraconsultant",
    youtube: "https://www.youtube.com/@gunaraconsultant",
  },
} as const;

export const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Proses", href: "#proses" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
] as const;

export const HERO_STATS = [
  { value: 15000, suffix: "+", label: "Izin Berhasil Terbit" },
  { value: 12500, suffix: "+", label: "Klien Individu & Korporat" },
  { value: 34, suffix: "", label: "Provinsi Terjangkau" },
  { value: 98, suffix: "%", label: "Tingkat Kepuasan Klien" },
] as const;

export const HERO_FLOAT_CARDS = [
  {
    title: "NIB Terbit",
    time: "1 Hari Kerja",
    icon: "zap",
    accent: "gold" as const,
  },
  {
    title: "Pendirian PT",
    time: "3 Hari Kerja",
    icon: "building",
    accent: "emerald" as const,
  },
  {
    title: "Garansi Layanan",
    time: "100% Terpercaya",
    icon: "shield",
    accent: "gold" as const,
  },
] as const;

export const MARQUEE_ITEMS = [
  "NIB & OSS-RBA",
  "Pendirian PT",
  "PT PMA",
  "CV & Koperasi",
  "Sertifikasi Halal",
  "BPOM & PIRT",
  "PBG & SLF",
  "AMDAL & UKL-UPL",
  "SNI",
  "API-U / API-P",
  "KITAS & KITAP",
  "NPWP & SKTU",
  "ISO 9001:2015",
  "Izin Umroh",
  "MISA Saudi Arabia",
  "Yayasan & Perkumpulan",
  "Izin Konstruksi",
  "Izin Logistik",
] as const;

export type ServiceCategory =
  | "legalitas"
  | "sertifikasi"
  | "bangunan"
  | "khusus";

export const SERVICE_CATEGORIES: {
  value: ServiceCategory | "semua";
  label: string;
}[] = [
  { value: "semua", label: "Semua Layanan" },
  { value: "legalitas", label: "Legalitas Usaha" },
  { value: "sertifikasi", label: "Sertifikasi & Produk" },
  { value: "bangunan", label: "Bangunan & Lingkungan" },
  { value: "khusus", label: "Khusus & Internasional" },
];

export const SERVICES: {
  title: string;
  category: ServiceCategory;
  description: string;
  price: string;
  time: string;
  icon: string;
  features: string[];
}[] = [
  {
    title: "NIB & OSS-RBA",
    category: "legalitas",
    description:
      "Nomor Induk Berusaha via OSS (Online Single Submission) — fondasi legal semua usaha di Indonesia.",
    price: "Mulai Rp 350rb",
    time: "1 hari kerja",
    icon: "file-check",
    features: ["Resmi Kemeninvest/BKPM", "Berlaku seumur hidup usaha", "Termasuk konsultasi KBLI"],
  },
  {
    title: "Pendirian PT & CV",
    category: "legalitas",
    description:
      "Pendirian badan usaha resmi via Notaris + Kemenkumham (AHU Online) + OSS, akta langsung jadi.",
    price: "Mulai Rp 3,5jt",
    time: "3-7 hari kerja",
    icon: "building",
    features: ["Akta notaris resmi", "SK Kemenkumham", "NPWP & NIB langsung aktif"],
  },
  {
    title: "PT PMA (Investasi Asing)",
    category: "legalitas",
    description:
      "Badan usaha untuk investor asing dengan kepemilikan saham hingga 100% sesuai Positive Investment List.",
    price: "Mulai Rp 8jt",
    time: "7-14 hari kerja",
    icon: "globe",
    features: ["Struktur saham asing hingga 100%", "KBLI asing sesuai Perpres", "Pendampingan laporan BKPM"],
  },
  {
    title: "PT Perorangan & UMKM",
    category: "legalitas",
    description:
      "Legalitas usaha mikro-kecil tanpa notaris, cukup NIB sebagai identitas hukum resmi.",
    price: "Mulai Rp 350rb",
    time: "1 hari kerja",
    icon: "store",
    features: ["Tanpa modal minimum", "Gratis biaya pemerintah", "Cocok untuk UMKM & online shop"],
  },
  {
    title: "Yayasan & Perkumpulan",
    category: "legalitas",
    description:
      "Pendirian Yayasan, Perkumpulan, dan Koperasi untuk kegiatan sosial, pendidikan, dan keagamaan.",
    price: "Mulai Rp 4jt",
    time: "7-10 hari kerja",
    icon: "heart-handshake",
    features: ["Akta & SK Kemenkumham", "NPWP yayasan", "Pendampingan Organizational Structure"],
  },
  {
    title: "Sertifikasi Halal",
    category: "sertifikasi",
    description:
      "Sertifikasi produk halal BPJPH via SIHALAL — kewajiban wajib halal sesuai UU No. 33/2014.",
    price: "Mulai Rp 1,5jt",
    time: "14-30 hari kerja",
    icon: "badge-check",
    features: ["Pendampingan auditor halal", "Dokumen SJPH lengkap", "Berlaku 4 tahun & bisa diperpanjang"],
  },
  {
    title: "BPOM & PIRT",
    category: "sertifikasi",
    description:
      "Izin edar pangan & kosmetika: MD untuk produk industri, PIRT untuk pangan olahan UMKM.",
    price: "Mulai Rp 2,5jt",
    time: "14-45 hari kerja",
    icon: "flask-conical",
    features: ["Pendaftaran BPOM e-registration", "Uji laboratorium terakreditasi", "Label sesuai regulasi"],
  },
  {
    title: "Sertifikasi SNI",
    category: "sertifikasi",
    description:
      "Sertifikasi produk wajib SNI via LSPro — syarat masuk ritel modern & tender pemerintah.",
    price: "Mulai Rp 6jt",
    time: "30-90 hari kerja",
    icon: "award",
    features: ["Pendampingan audit pabrik", "Pengujian sampel produk", "Konsultasi SNI system"],
  },
  {
    title: "Sertifikasi ISO",
    category: "sertifikasi",
    description:
      "ISO 9001:2015, 14001, 22000, 27001, dan 45001 bersama registrar akreditasi internasional.",
    price: "Mulai Rp 12jt",
    time: "30-60 hari kerja",
    icon: "shield-check",
    features: ["Training internal tim", "Dokumentasi manual mutu", "Sertifikat berakreditasi IAF"],
  },
  {
    title: "PBG & SLF",
    category: "bangunan",
    description:
      "Persetujuan Bangunan Gedung (PBG) & Sertifikat Laik Fungsi via SIMBG — legalitas bangunan Anda.",
    price: "Mulai Rp 2jt",
    time: "7-30 hari kerja",
    icon: "landmark",
    features: ["Gambar teknis oleh ahli", "Konsultasi DPMPTSP", "SLF gedung existing & baru"],
  },
  {
    title: "Izin Lingkungan",
    category: "bangunan",
    description:
      "AMDAL, UKL-UPL, SPPL, dan Persetujuan Lingkungan sesuai UU Cipta Kerja & PP 22/2021.",
    price: "Mulai Rp 5jt",
    time: "14-60 hari kerja",
    icon: "leaf",
    features: ["UKL-UPL & AMDAL lengkap", "Tim ahli lingkungan", "Pendampingan matriks"],
  },
  {
    title: "Izin Ekspor-Impor",
    category: "khusus",
    description:
      "API-U/API-P, NIB sebagai custom access, hingga perizinan kepabeanan untuk bisnis lintas negara.",
    price: "Mulai Rp 1,5jt",
    time: "3-7 hari kerja",
    icon: "ship",
    features: ["API-U & API-P", "Registrasi Bea Cukai", "HS Code & PIB konsultasi"],
  },
  {
    title: "KITAS & KITAP",
    category: "khusus",
    description:
      "Izin tinggal & kerja tenaga asing: IMTA, VITAS, KITAS, hingga KITAP untuk ekspat dan keluarga.",
    price: "Mulai Rp 3,5jt",
    time: "5-14 hari kerja",
    icon: "id-card",
    features: ["RPTKA & IMTA", "Notifikasi Kemnaker", "MERP & multiple exit"],
  },
  {
    title: "Izin Usaha Khusus",
    category: "khusus",
    description:
      "Izin umroh & travel, logistik, konstruksi (SBU), pendidikan, kesehatan, hingga fintech.",
    price: "Mulai Rp 5jt",
    time: "14-45 hari kerja",
    icon: "layers",
    features: ["Izin Kemenag umroh", "SBU Konstruksi LPJK", "Izin izin sektor vertikal"],
  },
  {
    title: "MISA — Izin Usaha Arab Saudi",
    category: "khusus",
    description:
      "Pendirian badan usaha di Arab Saudi via MISA untuk ekspansi bisnis Anda ke Timur Tengah.",
    price: "Konsultasi",
    time: "30-60 hari kerja",
    icon: "plane",
    features: ["MISA investment license", "CR (Commercial Registration)", "Visa & GM izin kerja"],
  },
  {
    title: "Perpajakan & NPWP",
    category: "legalitas",
    description:
      "NPWP badan/pribadi, SKTU, SPT Tahunan, hingga konsultasi perpajakan & fasilitas khusus.",
    price: "Mulai Rp 500rb",
    time: "1-3 hari kerja",
    icon: "receipt",
    features: ["NPWP & SKTU cepat", "Lapor SPT rutin", "Konsultasi tax planning"],
  },
];

export const WHY_US = [
  {
    title: "Garansi 100% Uang Kembali",
    description:
      "Satu-satunya konsultan dengan garansi tertulis: izin tidak terbit sesuai janji? Uang Anda kembali penuh, tanpa drama.",
    icon: "shield-check",
  },
  {
    title: "Tercepat di Kelasnya",
    description:
      "NIB 1 hari kerja, PT 3 hari kerja. Sistem workflow terotomatisasi ISO 9001:2015 memastikan tidak ada hari terbuang.",
    icon: "zap",
  },
  {
    title: "Harga Transparan & Terbaik",
    description:
      "Rincian biaya jelas di awal — tanpa biaya siluman, tanpa biaya pungutan. Invoice resmi untuk setiap pembayaran.",
    icon: "receipt",
  },
  {
    title: "Tim Ahli Bersertifikasi",
    description:
      "Konsultan hukum, notaris partner, ahli K3L, dan konsultan pajak bersertifikasi dengan pengalaman 15+ tahun.",
    icon: "users",
  },
  {
    title: "Manajemen Mutu ISO 9001:2015",
    description:
      "Seluruh proses layanan diaudit sesuai standar manajemen mutu internasional ISO 9001:2015 — konsisten, terukur, dapat dipercaya.",
    icon: "badge-check",
  },
  {
    title: "Pendampingan Seumur Hidup",
    description:
      "Setelah izin terbit, kami tetap mendampingi: pengurusan perpanjangan, pelaporan berkala, hingga konsultasi ekspansi bisnis.",
    icon: "infinity",
  },
] as const;

export const COMPARISON = {
  us: {
    name: "Gunara Consultant",
    points: [
      "Garansi 100% uang kembali tertulis",
      "NIB 1 hari, PT 3 hari kerja",
      "Tersertifikasi ISO 9001:2015",
      "Harga transparan, invoice resmi",
      "34 provinsi + 3 negara internasional",
      "Pendampingan seumur hidup usaha",
      "Customer support 24/7 via WA",
    ],
  },
  others: {
    name: "Konsultan Lain",
    points: [
      "Tanpa garansi tertulis",
      "Proses 1-2 minggu lebih lama",
      "Umumnya tanpa sertifikasi mutu",
      "Biaya siluman di tengah proses",
      "Cakupan terbatas 1-2 kota",
      "Selesai saat izin terbit",
      "Jam kerja terbatas",
    ],
  },
} as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Konsultasi Gratis",
    description:
      "Ceritakan rencana bisnis Anda via WA, telepon, atau form. Tim kami merespons maksimal 15 menit di jam kerja.",
    icon: "message-circle",
  },
  {
    step: "02",
    title: "Analisis & Penawaran",
    description:
      "Kami petakan KBLI, perizinan wajib, dan struktur legal terbaik. Anda terima penawaran transparan tanpa biaya tersembunyi.",
    icon: "search",
  },
  {
    step: "03",
    title: "Dokumen & Pengurusan",
    description:
      "Serahkan dokumen — sisanya kami urus. Notaris, instansi, hingga tanda tangan diatur oleh dedicated officer Anda.",
    icon: "file-signature",
  },
  {
    step: "04",
    title: "Monitoring Real-time",
    description:
      "Pantau progres pengurusan Anda kapan saja lewat dashboard & update harian via WhatsApp. Tidak ada kejutan.",
    icon: "activity",
  },
  {
    step: "05",
    title: "Izin Terbit & Pendampingan",
    description:
      "Izin resmi diterima dengan garansi. Kami lanjut mendampingi kewajiban rutin & pengembangan legalitas bisnis Anda.",
    icon: "rocket",
  },
] as const;

export const ISO_PRINCIPLES = [
  {
    title: "Fokus pada Pelanggan",
    description: "Kepuasan klien adalah ukuran mutu tertinggi kami — NPS dipantau bulanan.",
  },
  {
    title: "Kepemimpinan",
    description: "Manajemen terlibat langsung menjamin tujuan mutu tercapai di setiap divisi.",
  },
  {
    title: "Keterlibatan Orang",
    description: "Seluruh tim bersertifikasi internal & mengikuti pelatihan mutu berkala.",
  },
  {
    title: "Pendekatan Proses",
    description: "Setiap pengurusan mengikuti SOP terstandar ISO dengan checkpoint mutu.",
  },
  {
    title: "Perbaikan Berkelanjutan",
    description: "Audit internal & tindakan korektif dijalankan terus-menerus setiap kuartal.",
  },
  {
    title: "Keputusan Berbasis Data",
    description: "KPI keberhasilan izin, kecepatan, dan kepuasan diukur & dipublikasikan.",
  },
] as const;

export const COVERAGE_REGIONS = [
  "DKI Jakarta",
  "Jawa Barat",
  "Jawa Tengah",
  "Jawa Timur",
  "Banten",
  "Bali",
  "Sumatera Utara",
  "Sumatera Selatan",
  "Riau",
  "Kepulauan Riau",
  "Sulawesi Selatan",
  "Kalimantan Timur",
  "Yogyakarta",
  "Semarang",
  "Surabaya",
  "Medan",
  "Makassar",
  "Batam",
  "Balikpapan",
  "Denpasar",
  "+ 14 Provinsi Lain",
] as const;

export const INTERNATIONAL = [
  { country: "Arab Saudi", service: "MISA & Investment License" },
  { country: "Malaysia", service: "Sdn Bhd & Labuan" },
  { country: "Singapura", service: "Pte Ltd & ACRA" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Budi Santoso",
    role: "Founder, Kopi Nusantara Group",
    content:
      "Dari NIB sampai sertifikasi halal 12 produk, semua diurus Gunara. Prosesnya cepat, timnya responsif, harganya jujur. Garansi mereka bukan cuma jargon — benar-benar tertulis di kontrak.",
    rating: 5,
    service: "NIB + Sertifikasi Halal",
  },
  {
    name: "Sarah Wijaya",
    role: "Direktur, PT Estetika Kosmetik",
    content:
      "Izin BPOM untuk 8 SKU kosmetik kami selesai lebih cepat dari estimasi. Konsultannya paham banget regulasi, bahkan bantu review label produk. ISO 9001 mereka terasa dari kerapihan prosesnya.",
    rating: 5,
    service: "Izin BPOM",
  },
  {
    name: "Michael Tan",
    role: "CEO, Sinar Logistik Internasional",
    content:
      "Sebagai investor asing, saya butuh kepastian. Gunara mengurus PT PMA, API-P, dan KITAS tim saya tanpa drama. Laporan berkala ke BKPM juga didampingi. Worth every rupiah.",
    rating: 5,
    service: "PT PMA + KITAS",
  },
  {
    name: "Drs. H. Abdul Rahman",
    role: "Pemilik, Pusat Oleh-oleh Makassar",
    content:
      "Usaha saya turun-temurun, tapi baru sadar pentingnya legalitas setelah mau masuk ritel modern. Dalam 2 minggu, PIRT, NIB, dan merek saya beres. Terima kasih Gunara!",
    rating: 5,
    service: "PIRT + NIB",
  },
  {
    name: "Lintang Pramesti",
    role: "Owner, Villa Canggu Retreat",
    content:
      "PBG dan SLF villa kami di Canggu akhirnya beres setelah 2 tahun buntu dengan pihak lain. Tim Gunara paham betul proses SIMBG dan konsultasi DPMPTSP-nya. Sangat recommended!",
    rating: 5,
    service: "PBG & SLF",
  },
  {
    name: "Fajar Nugroho",
    role: "GM, PT Baja Konstruksi Utama",
    content:
      "SBU konstruksi + ISO 9001:2015 untuk tender pemerintah, selesai sebelum deadline tender. Dilayani dedicated officer yang selalu update progres. Ini standar layanan kelas dunia.",
    rating: 5,
    service: "SBU + Sertifikasi ISO",
  },
] as const;

export const FAQS = [
  {
    question: "Apa itu Gunara Consultant dan apa hubungannya dengan PusatPerizinan.com?",
    answer:
      "Gunara Consultant adalah perusahaan konsultan legalitas & perizinan usaha yang berdiri sejak 2010. PusatPerizinan.com merupakan unit layanan pengurusan perizinan digital di dalam grup Gunara. Bersama-sama kami melayani lebih dari 12.500 klien di 34 provinsi Indonesia dan 3 negara.",
  },
  {
    question: "Apa arti Gunara Consultant bersertifikasi ISO 9001:2015?",
    answer:
      "ISO 9001:2015 adalah standar manajemen mutu internasional. Seluruh proses layanan kami — dari konsultasi awal, pengurusan dokumen, hingga serah terima izin — mengikuti SOP terstandar, diaudit internal berkala, dan dijalankan dengan prinsip perbaikan berkelanjutan. Artinya: layanan yang konsisten, terukur, dan dapat dipertanggungjawabkan.",
  },
  {
    question: "Berapa lama proses pengurusan izin usaha?",
    answer:
      "NIB via OSS: 1 hari kerja. Pendirian PT/CV: 3-7 hari kerja. Sertifikasi Halal: 14-30 hari. BPOM/PIRT: 14-45 hari. PBG & SLF: 7-30 hari. Estimasi spesifik akan kami berikan pada konsultasi gratis sesuai jenis izin dan kelengkapan dokumen Anda.",
  },
  {
    question: "Apakah ada garansi jika izin tidak terbit?",
    answer:
      "Ya. Kami memberikan garansi tertulis 100% uang kembali jika izin tidak terbit sesuai kesepakatan karena faktor dari pihak kami. Ini adalah komitmen mutu yang tercantum di kontrak layanan — sesuatu yang hampir tidak dimiliki konsultan manapun di Indonesia.",
  },
  {
    question: "Apakah harga yang ditawarkan sudah termasuk biaya pemerintah?",
    answer:
      "Setiap penawaran kami cantumkan rincian: jasa konsultan, biaya notaris, dan biaya pemerintah (PNBP) secara transparan. Tidak ada biaya siluman. Untuk NIB & OSS, pemerintah bahkan membebaskan PNBP bagi UMKM.",
  },
  {
    question: "Saya di luar Jakarta — apakah bisa dilayani?",
    answer:
      "Tentu. Seluruh proses dapat dijalankan 100% online via OSS, AHU Online, SIMBG, dan SIHALAL. Tim kami melayani 34 provinsi Indonesia. Untuk kebutuhan tanda tangan akta, kami siapkan notaris partner di kota Anda.",
  },
  {
    question: "Dokumen apa saja yang perlu saya siapkan?",
    answer:
      "Umumnya: KTP & NPWP pemilik, foto usaha, dan rencana bidang usaha (KBLI). Untuk PT: minimal 2 pendiri/pemegang saham. Daftar dokumen lengkap akan kami pandu step-by-step oleh dedicated officer setelah konsultasi gratis.",
  },
  {
    question: "Bagaimana cara memulai konsultasi?",
    answer:
      "Klik tombol 'Konsultasi Gratis' di halaman ini, isi form kontak, atau langsung chat WhatsApp kami di +62 812-9000-1234. Tim kami merespons maksimal 15 menit pada jam kerja (Senin-Sabtu, 08.00-20.00 WIB).",
  },
] as const;

export const CONTACT_SERVICES = [
  "NIB & OSS-RBA",
  "Pendirian PT / CV / PT Perorangan",
  "PT PMA (Investasi Asing)",
  "Sertifikasi Halal",
  "BPOM & PIRT",
  "Sertifikasi SNI",
  "Sertifikasi ISO 9001:2015",
  "PBG & SLF",
  "Izin Lingkungan (AMDAL/UKL-UPL)",
  "Izin Ekspor-Impor (API-U/API-P)",
  "KITAS & KITAP",
  "Izin Usaha Khusus",
  "MISA — Arab Saudi",
  "Perpajakan & NPWP",
  "Lainnya / Konsultasi Umum",
] as const;
