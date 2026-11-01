/**
 * META KATALOG — taksonomi 4 kategori & 38 sub-kategori (500 layanan PusatPerizinan).
 * Konten lingkup/proses/dokumen/FAQ bersifat keluarga-layanan (sah untuk seluruh anggota
 * sub yang sama), disusun ulang untuk GConsultant v3.2.0 "Full Catalog Integration".
 * Bilingual ID/EN; nama layanan individual tetap Bahasa Indonesia (istilah legal resmi).
 */
import type { ServiceFaq } from "./services-types";

export interface CatalogKat {
  kode: string;
  nameId: string;
  nameEn: string;
  descId: string;
  descEn: string;
}

export interface CatalogSub {
  kode: string;
  kat: string;
  nameId: string;
  nameEn: string;
  lingkupId: string[];
  lingkupEn: string[];
  prosesId: string[];
  prosesEn: string[];
  dokumenId: string[];
  dokumenEn: string[];
  faq: ServiceFaq[];
}

export const KAT4: CatalogKat[] = [
  {
    kode: "BU",
    nameId: "Badan Usaha & Legalitas",
    nameEn: "Business Entities & Legality",
    descId:
      "Pendirian, pengurusan, dan pengembangan badan usaha: PT, CV, UD, PMA, Yayasan, Perdes hingga HKI, sertifikasi sistem manajemen, dan paket pendampingan bisnis.",
    descEn:
      "Establishment, administration, and growth of business entities: PT, CV, UD, PMA, Foundations, Associations to IP rights, management system certification, and business assistance packages.",
  },
  {
    kode: "KP",
    nameId: "Kesehatan, Pangan & Produk",
    nameEn: "Health, Food & Products",
    descId:
      "Izin edar BPOM, sertifikasi halal BPJPH, SNI, PIRT, fasilitas kesehatan, izin tenaga medis, hingga distribusi farmasi dan alat kesehatan.",
    descEn:
      "BPOM distribution permits, BPJPH halal certification, SNI, PIRT, health facilities, medical personnel licenses, to pharmaceutical and medical device distribution.",
  },
  {
    kode: "LH",
    nameId: "Perizinan Lingkungan",
    nameEn: "Environmental Licensing",
    descId:
      "Dokumen lingkungan (AMDAL, UKL-UPL, SPPL), limbah B3, sumber daya air, kehutanan, KLHS, kelautan, hingga pemantauan dan pelaporan lingkungan.",
    descEn:
      "Environmental documents (AMDAL, UKL-UPL, SPPL), hazardous waste, water resources, forestry, SEA, marine affairs, to environmental monitoring and reporting.",
  },
  {
    kode: "SK",
    nameId: "Perizinan Sektoral & Operasional",
    nameEn: "Sectoral & Operational Licensing",
    descId:
      "Izin operasional lintas sektor: perdagangan, konstruksi, energi, ekspor-impor, transportasi, pariwisata, pendidikan, fintech, hingga ketenagakerjaan dan TKA.",
    descEn:
      "Operational licenses across sectors: trade, construction, energy, export-import, transportation, tourism, education, fintech, to manpower and foreign workers.",
  },
];

export const SUB_BU: CatalogSub[] = [
  {
    kode: "BU-PT",
    kat: "BU",
    nameId: "Pendirian Badan Usaha",
    nameEn: "Business Entity Establishment",
    lingkupId: [
      "Penetapan nama, KBLI, struktur modal, dan status bidang usaha",
      "Akta notaris, pengesahan SK Kemenkumham, NPWP badan",
      "NIB OSS-RBA aktif beserta surat izin dasar turunannya",
    ],
    lingkupEn: [
      "Name, KBLI, capital structure, and business field risk status",
      "Notarial deed, Ministry of Law approval, corporate NPWP",
      "Active OSS-RBA NIB with its derivative base licenses",
    ],
    prosesId: [
      "Konsultasi bentuk badan, KBLI, dan modal ideal",
      "Reservasi nama & pelaksanaan akta di notaris mitra",
      "Pengesahan SK, NPWP badan, dan penerbitan NIB",
      "Serah terima dokumen legal + briefing pemakaian",
    ],
    prosesEn: [
      "Consultation on entity type, KBLI, and ideal capital",
      "Name reservation & notarial deed execution",
      "Decree approval, corporate NPWP, and NIB issuance",
      "Handover of legal documents + usage briefing",
    ],
    dokumenId: [
      "KTP & NPWP seluruh pendiri/pemegang saham",
      "Alamat domisili usaha (sewa/milik/kuasa)",
      "Data direktur, komisaris, dan komposisi modal",
      "Deskripsi rencana kegiatan usaha",
    ],
    dokumenEn: [
      "ID & tax cards of all founders/shareholders",
      "Business domicile address (lease/owned/authorization)",
      "Directors, commissioners, and capital composition data",
      "Description of planned business activities",
    ],
    faq: [
      {
        qId: "Berapa lama proses pendirian badan usaha?",
        aId: "Umumnya 3–10 hari kerja sejak data lengkap dan akta ditandatangani, tergantung jenis badan dan antrean Kemenkumham.",
        qEn: "How long does entity establishment take?",
        aEn: "Generally 3–10 working days after documents are complete and the deed is signed, depending on entity type and Ministry queues.",
      },
      {
        qId: "Apakah NIB langsung terbit bersama pendirian?",
        aId: "Ya, NIB melalui OSS-RBA kami terbitkan segera setelah SK dan NPWP badan aktif, sehingga perusahaan siap beroperasi.",
        qEn: "Is the NIB issued together with incorporation?",
        aEn: "Yes, through OSS-RBA we issue the NIB as soon as the decree and corporate NPWP are active, so your company is ready to operate.",
      },
    ],
  },
  {
    kode: "BU-LG",
    kat: "BU",
    nameId: "Legalitas Dasar & Administrasi",
    nameEn: "Basic Legality & Administration",
    lingkupId: [
      "NIB, NPWP, SKDU, dan legalitas domisili perusahaan",
      "Pendaftaran BPJS Ketenagakerjaan & Kesehatan perusahaan",
      "Surat keterangan terdaftar dan dokumen tender/pengadaan",
    ],
    lingkupEn: [
      "NIB, NPWP, business registration letters, domicile legality",
      "Corporate manpower & health social security registration",
      "Registered certificates and tender/procurement documents",
    ],
    prosesId: [
      "Audit legalitas: memetakan dokumen yang belum dimiliki",
      "Penyusunan data & pengajuan ke instansi terkait",
      "Penerbitan dokumen dan arsip digital perusahaan",
    ],
    prosesEn: [
      "Legality audit: mapping missing corporate documents",
      "Data preparation & submission to related agencies",
      "Document issuance and digital corporate archiving",
    ],
    dokumenId: [
      "Akta & SK pengesahan badan usaha",
      "NPWP perusahaan & KTP penanggung jawab",
      "Bukti alamat usaha aktif",
    ],
    dokumenEn: [
      "Deed & entity approval decree",
      "Corporate tax card & responsible person's ID",
      "Proof of active business address",
    ],
    faq: [
      {
        qId: "Perusahaan saya sudah lama berdiri, masih perlu rapikan legalitas?",
        aId: "Sangat disarankan — legalitas yang lengkap menentukan kelolosan tender, akses kredit, dan kepatuhan pajak. Kami mulai dari audit legalitas gratis.",
        qEn: "My company is long established; do I still need legality cleanup?",
        aEn: "Strongly recommended — complete legality determines tender eligibility, credit access, and tax compliance. We start with a free legality audit.",
      },
      {
        qId: "Apakah BPJS perusahaan wajib?",
        aId: "Ya, pendaftaran BPJS Ketenagakerjaan dan Kesehatan wajib bagi perusahaan yang mempekerjakan karyawan sesuai peraturan ketenagakerjaan.",
        qEn: "Is corporate social security registration mandatory?",
        aEn: "Yes, manpower and health social security registration is mandatory for companies employing workers under manpower regulations.",
      },
    ],
  },
  {
    kode: "BU-PM",
    kat: "BU",
    nameId: "Investasi & PMA",
    nameEn: "Investment & Foreign-Owned Companies",
    lingkupId: [
      "Pendirian PT PMA asing 100% atau patungan",
      "Persetujuan investasi BKPM & LKPM berkala",
      "KITAS/KITAP investor dan kerja serta kantor perwakilan",
    ],
    lingkupEn: [
      "100% foreign-owned or joint-venture PMA establishment",
      "BKPM investment approval & periodic LKPM reports",
      "Investor/worker KITAS-KITAP and representative office",
    ],
    prosesId: [
      "Strukturisasi kepemilikan & rencana investasi (Oss, KBLI asing)",
      "Akta PMA, SK, NPWP, dan persetujuan BKPM",
      "NIB, izin lokasi, hingga perizinan berusaha turunan",
    ],
    prosesEn: [
      "Ownership structuring & investment plan (OSS, foreign KBLI)",
      "PMA deed, decree, NPWP, and BKPM approval",
      "NIB, location license, to derivative business licensing",
    ],
    dokumenId: [
      "Paspor asing seluruh pemegang saham/direktur",
      "Rencana investasi & jadwal realisasi (LKPM)",
      "Alamat kantor di Indonesia (perjanjian sewa)",
    ],
    dokumenEn: [
      "Foreign passports of all shareholders/directors",
      "Investment plan & realization schedule (LKPM)",
      "Indonesian office address (lease agreement)",
    ],
    faq: [
      {
        qId: "Berapa modal minimum PT PMA?",
        aId: "Total modal ditempatkan umumnya di atas Rp10 miliar per KBLI 5-digit, dengan modal disetor minimal Rp10 miliar sesuai regulasi BKPM terkini.",
        qEn: "What is the minimum capital for a PMA?",
        aEn: "Total paid-in plan is generally above IDR 10 billion per 5-digit KBLI, with minimum paid-up capital per the latest BKPM regulations.",
      },
      {
        qId: "Apakah LKPM harus dilaporkan rutin?",
        aId: "Ya, LKPM wajib dilaporkan tiap triwulan/semester sesuai skala usaha — kelalaian dapat menghambat perpanjangan izin. Kami menangani seluruh siklusnya.",
        qEn: "Must LKPM investment reports be filed regularly?",
        aEn: "Yes, LKPM must be filed quarterly/semi-annually per business scale — negligence can block license renewals. We handle the full cycle.",
      },
    ],
  },
  {
    kode: "BU-PC",
    kat: "BU",
    nameId: "Perubahan & Restrukturisasi",
    nameEn: "Amendments & Restructuring",
    lingkupId: [
      "Perubahan anggaran dasar, pemegang saham, direktur/komisaris",
      "Naik/migrasi kualifikasi usaha kecil ke menengah-besar",
      "Fusi, akuisisi, peleburan, dan pembubaran badan usaha",
    ],
    lingkupEn: [
      "Amendments to articles, shareholders, directors/commissioners",
      "Upgrading/migrating business scale from small to medium-large",
      "Merger, acquisition, consolidation, and entity dissolution",
    ],
    prosesId: [
      "Analisis dampak perubahan (perizinan, pajak, kontrak)",
      "RUPS & akta perubahan di notaris",
      "Pembaruan SK, NIB/OSS, dan dokumen turunannya",
    ],
    prosesEn: [
      "Impact analysis (licenses, tax, contracts)",
      "GMS & amendment deed before a notary",
      "Updating decree, NIB/OSS, and derivative documents",
    ],
    dokumenId: [
      "Akta terakhir & SK pengesahan",
      "Data pemegang saham/pengurus baru",
      "NIB dan perizinan berusaha terkait",
    ],
    dokumenEn: [
      "Latest deed & approval decree",
      "New shareholders/management data",
      "NIB and related business licenses",
    ],
    faq: [
      {
        qId: "Setelah ganti direktur, dokumen apa yang harus diperbarui?",
        aId: "SK Kemenkumham, NPWP badan, NIB/OSS, rekening korporat, dan perizinan yang menyebut pengurus lama. Kami petakan semuanya agar tidak ada yang tertinggal.",
        qEn: "After changing directors, which documents need updating?",
        aEn: "The Ministry decree, corporate NPWP, NIB/OSS, corporate bank accounts, and licenses naming the old management. We map everything.",
      },
      {
        qId: "Apakah migrasi kualifikasi usaha wajib?",
        aId: "Bila modal riil Anda sudah melampaui batas kualifikasi, penyesuaian wajib agar NIB dan perizinan berusaha sesuai — menghindari sanksi administratif.",
        qEn: "Is business scale migration mandatory?",
        aEn: "If your real capital exceeds the qualification threshold, adjustment is mandatory so NIB and licenses match — avoiding administrative sanctions.",
      },
    ],
  },
  {
    kode: "BU-KP",
    kat: "BU",
    nameId: "Korporat & Tata Kelola",
    nameEn: "Corporate & Governance",
    lingkupId: [
      "Pembukuan akta, legal opinion, dan corporate secretarial",
      "Penyusunan perjanjian kerja sama & kontrak niaga",
      "Registered office address & perwakilan dokumen tahunan",
    ],
    lingkupEn: [
      "Deed filing, legal opinions, and corporate secretarial",
      "Partnership agreements & commercial contracts drafting",
      "Registered office address & annual document representation",
    ],
    prosesId: [
      "Konsultasi kebutuhan tata kelola & dokumen yang dipersyaratkan",
      "Penyusunan draf oleh tim hukum mitra",
      "Revisi bersama hingga finalisasi & pengesahan",
    ],
    prosesEn: [
      "Consultation on governance needs & required documents",
      "Drafting by partner legal team",
      "Joint revision to finalization & execution",
    ],
    dokumenId: [
      "Akta & SK terakhir perusahaan",
      "Dokumen transaksi/kerja sasam yang mendasari",
      "Data para pihak yang menandatangani",
    ],
    dokumenEn: [
      "Company's latest deed & decree",
      "Underlying transaction/partnership documents",
      "Details of all signing parties",
    ],
    faq: [
      {
        qId: "Apa itu layanan corporate secretarial?",
        aId: "Pengelolaan kepatuhan korporasi rutin: rapat umum, laporan tahunan, pembaruan data pengurus, dan arsip legal agar perusahaan selalu patuh.",
        qEn: "What is corporate secretarial service?",
        aEn: "Routine corporate compliance management: general meetings, annual reports, management data updates, and legal archiving to keep the company compliant.",
      },
      {
        qId: "Apakah kontrak yang dibuat notaris?",
        aId: "Kontrak niaga disusun tim hukum kami; akta otentik (seperti perubahan AD) dilakukan notaris mitra. Keduanya kami koordinasikan penuh.",
        qEn: "Are the contracts notarized?",
        aEn: "Commercial contracts are drafted by our legal team; authentic deeds (e.g., article amendments) are executed by partner notaries. We coordinate both.",
      },
    ],
  },
  {
    kode: "BU-KI",
    kat: "BU",
    nameId: "Kekayaan Intelektual (HKI)",
    nameEn: "Intellectual Property",
    lingkupId: [
      "Pendaftaran merek, paten, desain industri, dan hak cipta",
      "Pencarian & pemeriksaan awal keterpakan/kesamaan",
      "Perpanjangan, lisensi, hingga gugatan sengketa HKI",
    ],
    lingkupEn: [
      "Trademark, patent, industrial design, and copyright registration",
      "Prior search & registrability/similarity examination",
      "Renewal, licensing, up to IP dispute actions",
    ],
    prosesId: [
      "Penelusuran basis data DJKI untuk memastikan ketersediaan",
      "Penyusunan berkas & pengajuan e-filing DJKI",
      "Pemantauan pemeriksaan hingga sertifikat terbit",
    ],
    prosesEn: [
      "DJKI database search to confirm availability",
      "File preparation & DJKI e-filing submission",
      "Examination monitoring until certificate issuance",
    ],
    dokumenId: [
      "KTP/NPWP & akta perusahaan pemohon",
      "Label/logo/materai karya yang didaftarkan",
      "Surat pernyataan kepemilikan & contoh penggunaan",
    ],
    dokumenEn: [
      "Applicant ID/tax card & company deed",
      "Label/logo/artwork of the subject",
      "Ownership statement & evidence of use",
    ],
    faq: [
      {
        qId: "Berapa lama pendaftaran merek sampai terbit?",
        aId: "Proses pemeriksaan substansi merek umumnya 5–8 bulan; merek terdaftar berlaku 10 tahun dan dapat diperpanjang tanpa batas.",
        qEn: "How long does trademark registration take?",
        aEn: "Substantive examination generally takes 5–8 months; a registered mark is valid for 10 years and renewable indefinitely.",
      },
      {
        qId: "Merek saya ditolak karena kesamaan, bisa diajukan ulang?",
        aId: "Bisa — kami analisis dasar penolakan, lalu ajukan ulang dengan pembeda signifikan atau banding ke Komisi Banding Merek.",
        qEn: "My mark was refused for similarity; can I refile?",
        aEn: "Yes — we analyze the refusal grounds, then refile with significant differentiation or appeal to the Trademark Appeal Commission.",
      },
    ],
  },
  {
    kode: "BU-MS",
    kat: "BU",
    nameId: "Sertifikasi Sistem Manajemen",
    nameEn: "Management System Certification",
    lingkupId: [
      "ISO 9001 (mutu), ISO 14001 (lingkungan), ISO 45001 (K3)",
      "ISO 27001 (keamanan informasi), ISO 22000/HACCP (pangan)",
      "Sertifikasi SMK3 & kompetensi BNSP tenaga kerja",
    ],
    lingkupEn: [
      "ISO 9001 (quality), ISO 14001 (environment), ISO 45001 (OH&S)",
      "ISO 27001 (information security), ISO 22000/HACCP (food)",
      "SMK3 occupational safety & BNSP competency certification",
    ],
    prosesId: [
      "Gap analysis & penyusunan dokumen sistem manajemen",
      "Implementasi, pelatihan, dan audit internal",
      "Pendampingan audit sertifikasi lembaga terakreditasi",
    ],
    prosesEn: [
      "Gap analysis & management system documentation",
      "Implementation, training, and internal audit",
      "Accredited certification body audit assistance",
    ],
    dokumenId: [
      "Legalitas perusahaan (NIB, akta, NPWP)",
      "Data proses bisnis, alur kerja & personel",
      "Dokumen K3/lingkungan bila relevan",
    ],
    dokumenEn: [
      "Company legality (NIB, deed, NPWP)",
      "Business process, workflow & personnel data",
      "OH&S/environmental documents when relevant",
    ],
    faq: [
      {
        qId: "Berapa lama sertifikasi ISO sampai terbit?",
        aId: "Umumnya 2–4 bulan tergantung kesiapan sistem dan jadwal audit lembaga; perusahaan dengan dokumen rapi bisa lebih cepat.",
        qEn: "How long until ISO certification is issued?",
        aEn: "Generally 2–4 months depending on system readiness and audit body schedules; companies with tidy documentation move faster.",
      },
      {
        qId: "Apakah ISO wajib untuk ikut tender?",
        aId: "Banyak pengadaan pemerintah dan korporasi mensyaratkan ISO 9001/SMK3 — kepemilikan sertifikat meningkatkan kelolosan secara signifikan.",
        qEn: "Is ISO mandatory for tenders?",
        aEn: "Many government and corporate procurements require ISO 9001/SMK3 — holding certificates significantly improves pass rates.",
      },
    ],
  },
  {
    kode: "BU-PK",
    kat: "BU",
    nameId: "Paket & Pendampingan Bisnis",
    nameEn: "Packages & Business Assistance",
    lingkupId: [
      "Paket legalitas usaha siap jalan (start-up baru & UMKM)",
      "Pendampingan tahunan: perizinan, pajak, LKPM, kepatuhan",
      "Konsultasi strategi ekspansi & pembukaan cabang",
    ],
    lingkupEn: [
      "Ready-to-operate legality packages (new ventures & SMEs)",
      "Annual assistance: licensing, tax, LKPM, compliance",
      "Expansion strategy consulting & branch opening",
    ],
    prosesId: [
      "Pemetaan kebutuhan legalitas sesuai model bisnis",
      "Penetapan paket, jadwal, dan penanggung jawab",
      "Eksekusi terjadwal + laporan kemajuan berkala",
    ],
    prosesEn: [
      "Mapping legality needs per business model",
      "Package, schedule, and PIC determination",
      "Scheduled execution + periodic progress reports",
    ],
    dokumenId: [
      "Data diri pendiri & rencana usaha",
      "Dokumen legalitas yang sudah dimiliki",
      "Anggaran & target waktu pendirian",
    ],
    dokumenEn: [
      "Founder identity & business plan",
      "Existing legality documents",
      "Budget & establishment timeline targets",
    ],
    faq: [
      {
        qId: "Apa bedanya paket biasa dan pendampingan tahunan?",
        aId: "Paket biasa menyelesaikan satu pekerjaan; pendampingan tahunan mengawal seluruh kewajiban rutin (LKPM, pajak, perizinan) dengan PIC khusus.",
        qEn: "What differs between a package and annual assistance?",
        aEn: "A package completes one job; annual assistance covers all routine obligations (LKPM, tax, licensing) with a dedicated PIC.",
      },
      {
        qId: "Bisakah paket disesuaikan kebutuhan saya?",
        aId: "Tentu — kami susun paket à la carte dari 500 layanan katalog sesuai prioritas dan anggaran Anda.",
        qEn: "Can packages be customized?",
        aEn: "Absolutely — we assemble à la carte packages from the 500-service catalog per your priorities and budget.",
      },
    ],
  },
];

export const SUB_KP: CatalogSub[] = [
  {
    kode: "KP-BP",
    kat: "KP",
    nameId: "BPOM & Izin Edar Produk",
    nameEn: "BPOM & Product Distribution Permits",
    lingkupId: [
      "Izin edar obat, suplemen, kosmetik, dan pangan olahan (MD/ML)",
      "Pendaftaran CPPOB/food safety & notifikasi pangan",
      "Perpanjangan & variasi izin edar (ukuran, rasa, kemasan)",
    ],
    lingkupEn: [
      "Distribution permits for drugs, supplements, cosmetics, processed food (MD/ML)",
      "CPPOB/food safety registration & food notifications",
      "Renewals & distribution permit variants (size, flavor, packaging)",
    ],
    prosesId: [
      "Klasifikasi produk & penetapan jalur registrasi BPOM",
      "Penyusunan dossiers (komposisi, uji lab, label)",
      "Pengajuan e-registration & tanggapan pertanyaan BPOM",
      "Izin edar terbit + pendampingan produksi awal",
    ],
    prosesEn: [
      "Product classification & BPOM registration route",
      "Dossier preparation (composition, lab tests, label)",
      "E-registration submission & BPOM query responses",
      "Permit issuance + initial production assistance",
    ],
    dokumenId: [
      "NIB & profil perusahaan (KBLI sesuai produk)",
      "Formula, spesifikasi, hasil uji laboratorium",
      "Artwork label & mockup kemasan sesuai regulasi",
      "Sertifikat CPPOB/GMP fasilitas produksi",
    ],
    dokumenEn: [
      "NIB & company profile (product-appropriate KBLI)",
      "Formula, specifications, laboratory test results",
      "Label artwork & packaging mockup per regulation",
      "CPPOB/GMP certificate of production facility",
    ],
    faq: [
      {
        qId: "Berapa lama izin edar BPOM terbit?",
        aId: "Notifikasi pangan/kosmetik sekitar 5–14 hari kerja setelah berkas tuntas; registrasi obat/suplemen lebih lama sesuai kelas risiko.",
        qEn: "How long until a BPOM distribution permit is issued?",
        aEn: "Food/cosmetic notifications take around 5–14 working days after complete files; drug/supplement registration is longer per risk class.",
      },
      {
        qId: "Produksi rumahan bisa didaftarkan BPOM?",
        aId: "Bisa melalui jalur PIRT untuk pangan olahan berisiko rendah, atau izin edar dengan fasilitas yang memenuhi CPPOB. Kami bantu pilih jalurnya.",
        qEn: "Can home production be BPOM registered?",
        aEn: "Yes — via PIRT for low-risk processed foods, or full distribution permits with CPPOB-compliant facilities. We help choose the route.",
      },
    ],
  },
  {
    kode: "KP-HL",
    kat: "KP",
    nameId: "Sertifikasi Halal BPJPH",
    nameEn: "BPJPH Halal Certification",
    lingkupId: [
      "Sertifikasi halal reguler & jalur sendiri (SIHALAL)",
      "Pendampingan pembinaan proses produk halal (PPH)",
      "Sertifikasi halal tambah variasi & perpanjangan",
    ],
    lingkupEn: [
      "Regular & self-declare (SIHALAL) halal certification",
      "Halal product process (PPH) assistance",
      "Variant additions & halal certificate renewal",
    ],
    prosesId: [
      "Inventarisasi bahan & pemasok (daftar bahan halal)",
      "Penyusunan sistem PPH & dokumen SIHALAL",
      "Audit auditor halal & keputusan fatwa",
      "Sertifikat halal + label muhal kemasan",
    ],
    prosesEn: [
      "Ingredient & supplier inventory (halal material list)",
      "PPH system & SIHALAL document preparation",
      "Halal auditor assessment & fatwa decision",
      "Halal certificate + Indonesian halal label",
    ],
    dokumenId: [
      "NIB, akta, NPWP perusahaan",
      "Daftar nama produk & komposisi bahan",
      "Dokumen pemasok bahan (spesifikasi/sertifikat)",
      "Foto alur proses produksi",
    ],
    dokumenEn: [
      "Company NIB, deed, NPWP",
      "Product name list & ingredient composition",
      "Supplier documents (specs/certificates)",
      "Photos of production process flow",
    ],
    faq: [
      {
        qId: "Apakah sertifikat halal kini wajib?",
        aId: "Ya, sesuai UU JPH produk pangan-minuman serta bahan yang diedarkan di Indonesia wajib halal secara bertahap — batas waktu mengikuti jadwal BPJPH.",
        qEn: "Is halal certification now mandatory?",
        aEn: "Yes, under the Halal Law, food-beverage products and materials distributed in Indonesia must be halal-certified in stages per the BPJPH schedule.",
      },
      {
        qId: "Apa itu jalur sendiri (self-declare)?",
        aId: "Jalur gratis untuk UMKM berskala kecil melalui pembinaan PPH; sertifikat berlaku sama dengan jalur reguler. Kami dampingi penuh prosesnya.",
        qEn: "What is the self-declare route?",
        aEn: "A free route for small-scale enterprises via PPH assistance; the certificate is equivalent to the regular route. We assist end to end.",
      },
    ],
  },
  {
    kode: "KP-SN",
    kat: "KP",
    nameId: "SNI & Sertifikasi Produk",
    nameEn: "SNI & Product Certification",
    lingkupId: [
      "SPPT-SNI untuk produk wajib SNI (sepatu, kabel, baja, dll.)",
      "Pengurusan LSPro & pengujian sampel di lab terakreditasi",
      "Surat tanda daftar mutu produk & pemantauan berkala",
    ],
    lingkupEn: [
      "SPPT-SNI for mandatory-SNI products (footwear, cables, steel, etc.)",
      "LSPro arrangement & accredited laboratory sample testing",
      "Product quality registration mark & periodic surveillance",
    ],
    prosesId: [
      "Verifikasi produk terkena wajib SNI & standarnya",
      "Persiapan kondisi produksi & uji sampel lab",
      "Audit pabrik oleh LSPro & penerbitan SPPT",
    ],
    prosesEn: [
      "Verify mandatory-SNI applicability & the standard",
      "Production readiness & laboratory sample testing",
      "LSPro factory audit & SPPT issuance",
    ],
    dokumenId: [
      "NIB & KBLI produsen",
      "Spesifikasi teknis produk & proses produksi",
      "Hasil uji laboratorium terakreditasi",
    ],
    dokumenEn: [
      "Manufacturer NIB & KBLI",
      "Technical product specs & production process",
      "Accredited laboratory test results",
    ],
    faq: [
      {
        qId: "Produk saya masuk daftar wajib SNI bagaimana ceknya?",
        aId: "Kirim nama produk dan kegiatannya — tim kami cocokkan dengan peraturan BSN terbaru dan beri rekomendasi jalur sertifikasi yang tepat.",
        qEn: "How do I check if my product requires SNI?",
        aEn: "Send us the product name and activity — we match it against the latest BSN regulations and recommend the right certification route.",
      },
      {
        qId: "Apakah importir juga harus SNI?",
        aId: "Ya, produk wajib SNI yang diimpor harus memiliki SPPT-SNI importir sebelum keluar pelabuhan. Kami tangani jalur importir maupun produsen.",
        qEn: "Do importers also need SNI?",
        aEn: "Yes, mandatory-SNI imports require an importer SPPT-SNI before port release. We handle both importer and manufacturer routes.",
      },
    ],
  },
  {
    kode: "KP-FA",
    kat: "KP",
    nameId: "Pangan, Minuman & Higiene",
    nameEn: "Food, Beverages & Hygiene",
    lingkupId: [
      "PIRT pangan olahan, sertifikat laik higiene sanitasi",
      "Registrasi pangan khusus (fortifikasi, organik, gizi)",
      "Pendampingan CPPOB & syarat label pangan olahan",
    ],
    lingkupEn: [
      "PIRT for processed food, hygiene-sanitation certificates",
      "Special food registration (fortification, organic, nutrition)",
      "CPPOB assistance & processed food labeling requirements",
    ],
    prosesId: [
      "Klasifikasi pangan & jalur (PIRT vs izin edar MD)",
      "Penyusunan komposisi, uji lab, dan desain label",
      "Pengajuan ke Dinas Kesehatan/BPOM hingga terbit",
    ],
    prosesEn: [
      "Food classification & route (PIRT vs MD distribution permit)",
      "Composition, lab testing, and label design",
      "Submission to Health Office/BPOM until issuance",
    ],
    dokumenId: [
      "NIB usaha & KTP pemilik",
      "Formula produk & hasil uji laboratorium",
      "Foto kondisi tempat produksi",
    ],
    dokumenEn: [
      "Business NIB & owner ID",
      "Product formula & laboratory results",
      "Photos of production site conditions",
    ],
    faq: [
      {
        qId: "PIRT berlaku berapa lama dan di mana sahnya?",
        aId: "PIRT berlaku 5 tahun dan sah untuk pangan berisiko rendah yang diedarkan di seluruh Indonesia melalui jalur distributor.",
        qEn: "How long is PIRT valid and where does it apply?",
        aEn: "PIRT is valid for 5 years and applies nationwide for low-risk processed foods distributed through licensed channels.",
      },
      {
        qId: "Apa beda PIRT dan izin edar MD?",
        aId: "PIRT untuk pangan olahan berisiko rendah skala kecil; MD (dalam negeri) untuk produk dengan pabrik ber-CPPOB dan masuk kelas risiko lebih tinggi.",
        qEn: "What differs PIRT from MD permit?",
        aEn: "PIRT covers small-scale low-risk processed foods; MD (domestic) covers products from CPPOB factories in higher risk classes.",
      },
    ],
  },
  {
    kode: "KP-FK",
    kat: "KP",
    nameId: "Fasilitas Pelayanan Kesehatan",
    nameEn: "Healthcare Facilities",
    lingkupId: [
      "Izin klinik, laboratorium, optik, fisioterapi & fasilitas lain",
      "Izin apotek dan PBF (pedagang besar farmasi)",
      "Sertifikat laik fungsional & akreditasi fasilitas",
    ],
    lingkupEn: [
      "Clinic, laboratory, optical, physiotherapy & facility licenses",
      "Pharmacy and PBF (pharmaceutical wholesaler) permits",
      "Functional eligibility certificates & facility accreditation",
    ],
    prosesId: [
      "Penetapan bentuk fasilitas & standar (SKP/standar profesi)",
      "Kelengkapan sarana, personel, dan alur SOP",
      "Pengajuan OSS/Dinkes & penilaian laik sehat",
    ],
    prosesEn: [
      "Facility form & standards determination",
      "Facilities, personnel, and SOP readiness",
      "OSS/Health Office submission & eligibility assessment",
    ],
    dokumenId: [
      "Badan hukum/NIB & lokasi usaha layak",
      "STR & SIP tenaga medis/paramedis",
      "Denah, daftar sarana, dan SOP layanan",
    ],
    dokumenEn: [
      "Legal entity/NIB & suitable premises",
      "Medical staff STR & practice licenses",
      "Floor plan, equipment list, and service SOPs",
    ],
    faq: [
      {
        qId: "Bisnis optik atau klinik gigi butuh izin apa saja?",
        aId: "Minimal NIB, izin fasilitas pelayanan kesehatan dari Dinkes/OSS, dan SIP tenaga medis penanggung jawab teknis. Kami urus rangkaiannya sekaligus.",
        qEn: "What licenses do optical shops or dental clinics need?",
        aEn: "At minimum: NIB, a health facility license from the Health Office/OSS, and the technical lead's medical license. We arrange the whole chain.",
      },
      {
        qId: "Apakah apotek harus dimiliki apoteker?",
        aId: "Ya, apotek wajib memiliki apoteker penanggung jawab dengan SIP apoteker aktif; kami bantu perizinan dan kesiapan strukturnya.",
        qEn: "Must a pharmacy be owned/helmed by a pharmacist?",
        aEn: "Yes, a pharmacy requires an active licensed pharmacist in charge; we assist with permits and structural readiness.",
      },
    ],
  },
  {
    kode: "KP-TH",
    kat: "KP",
    nameId: "Izin Tenaga Kesehatan",
    nameEn: "Medical Personnel Licensing",
    lingkupId: [
      "SIP dokter, gigi, bidan, perawat & tenaga kesehatan lain",
      "SIP praktek mandiri, klinik, dan kunjungan pasien",
      "Perpanjangan SIP & registrasi STR berkala",
    ],
    lingkupEn: [
      "Practice licenses for doctors, dentists, midwives, nurses & others",
      "Private, clinic, and home-visit practice licenses",
      "License renewals & periodic STR registration",
    ],
    prosesId: [
      "Verifikasi STR, masa kerja, dan lokasi praktek",
      "Penyusunan berkas ke Konsil/Dinkes terkait",
      "SIP terbit + pendampingan penempatan",
    ],
    prosesEn: [
      "STR, work record, and practice location verification",
      "File preparation for the Council/Health Office",
      "License issuance + placement assistance",
    ],
    dokumenId: [
      "STR aktif & ijazah profesi",
      "KTP, NPWP & pas foto terbaru",
      "Surat rekomendasi fasilitas/praktek tujuan",
    ],
    dokumenEn: [
      "Active STR & professional degree",
      "ID, tax card & latest photo",
      "Recommendation letter from target facility/practice",
    ],
    faq: [
      {
        qId: "SIP berlaku di seluruh Indonesia?",
        aId: "SIP terikat provinsi penerbit. Praktek lintas provinsi perlu SIP per provinsi — kami bantu pengurusan multi-lokasi.",
        qEn: "Is the practice license valid nationwide?",
        aEn: "The license is province-bound. Cross-province practice needs a license per province — we handle multi-location processing.",
      },
      {
        qId: "Berapa lama SIP dokter terbit?",
        aId: "Umumnya 3–10 hari kerja setelah berkas lengkap, tergantung konsil provinsi dan jenis tenaga kesehatan.",
        qEn: "How long until a doctor's license is issued?",
        aEn: "Generally 3–10 working days after complete files, depending on the provincial council and personnel type.",
      },
    ],
  },
  {
    kode: "KP-DA",
    kat: "KP",
    nameId: "Distribusi Farmasi & Alkes",
    nameEn: "Pharma & Medical Device Distribution",
    lingkupId: [
      "Izin PBF, UKL alkes (AKL/AKD), dan IPAK",
      "Sertifikat CPAKB/CPAKB penanggung jawab",
      "Sirkuler izin edar & distribusi antar wilayah",
    ],
    lingkupEn: [
      "PBF permits, medical device licenses (AKL/AKD), IPAK",
      "CPAKB technical lead certificates",
      "Distribution permits & inter-region distribution",
    ],
    prosesId: [
      "Penetapan kelas alkes & jalur (AKL/AKD/IPAK)",
      "Persiapan gudang, SOP distribusi & CPAKB",
      "Pengajuan OSS/BPOM hingga terbit",
    ],
    prosesEn: [
      "Device class & route determination (AKL/AKD/IPAK)",
      "Warehouse, distribution SOP & technical lead prep",
      "OSS/BPOM submission until issuance",
    ],
    dokumenId: [
      "NIB dengan KBLI distribusi sesuai",
      "Sertifikat kompetensi penanggung jawab (CPAKB)",
      "Data gudang & SOP penyimpanan-distribusi",
    ],
    dokumenEn: [
      "NIB with matching distribution KBLI",
      "Technical lead competency certificate (CPAKB)",
      "Warehouse data & storage-distribution SOPs",
    ],
    faq: [
      {
        qId: "Alat kesehatan kelas apa yang butuh AKL/AKD?",
        aId: "Kelas A memakai pendaftaran AKL, kelas B–D memakai AKD — klasifikasi mengikuti tingkat risiko alat menurut Kemenkes/BPOM.",
        qEn: "Which device classes need AKL/AKD?",
        aEn: "Class A uses AKL registration; classes B–D use AKD — classification follows device risk per Health Ministry/BPOM rules.",
      },
      {
        qId: "Bisakah PBF melayani lintas provinsi?",
        aId: "Ya, dengan jaringan cabang/pendistribusian yang terdaftar. Kami bantu struktur perizinan PBF pusat dan cabangnya.",
        qEn: "Can a PBF serve across provinces?",
        aEn: "Yes, with registered branch/distribution networks. We assist with central and branch PBF licensing structure.",
      },
    ],
  },
  {
    kode: "KP-KK",
    kat: "KP",
    nameId: "Kesehatan Lingkungan & Laik Sanitasi",
    nameEn: "Environmental Health & Sanitation",
    lingkupId: [
      "Sertifikat laik higiene sanitasi (jasa boga, hotel, kolam)",
      "SLHS & sertifikat laik sehat bangunan komersial",
      "Pengawasan sanitasi & pemenuhan standar Kemenkes",
    ],
    lingkupEn: [
      "Hygiene-sanitation eligibility (catering, hotels, pools)",
      "Sanitation eligibility & healthy building certificates",
      "Sanitation surveillance & Health Ministry standards",
    ],
    prosesId: [
      "Survei awal kondisi sanitasi objek",
      "Perbaikan/penyesuaian mengikuti standar",
      "Penilaian petugas & terbitnya sertifikat laik",
    ],
    prosesEn: [
      "Initial site sanitation survey",
      "Improvements per applicable standards",
      "Officer assessment & eligibility certificate",
    ],
    dokumenId: [
      "NIB/izin usaha & data lokasi",
      "Dokumen pengelolaan air/sampah/limbah",
      "Data personel & SOP kebersihan",
    ],
    dokumenEn: [
      "NIB/business license & site data",
      "Water/waste management documents",
      "Personnel data & hygiene SOPs",
    ],
    faq: [
      {
        qId: "Restoran wajib punya sertifikat laik higiene?",
        aId: "Ya, objek penyelenggaraan jasa boga wajib bersertifikat laik higiene sanitasi dari Dinkes — termasuk syarat renova perpanjangan izin.",
        qEn: "Do restaurants need a hygiene certificate?",
        aEn: "Yes, food service operators require a hygiene-sanitation eligibility certificate from the Health Office — often also a license renewal prerequisite.",
      },
      {
        qId: "Berapa lama berlaku sertifikatnya?",
        aId: "Umumnya 2–3 tahun sesuai jenis objek dan kebijakan Dinkes setempat, dengan penilaian ulang berkala.",
        qEn: "How long is the certificate valid?",
        aEn: "Generally 2–3 years depending on object type and local Health Office policy, with periodic reassessment.",
      },
    ],
  },
  {
    kode: "KP-MS",
    kat: "KP",
    nameId: "Mutu, Standar & Pendukung Produk",
    nameEn: "Quality, Standards & Product Support",
    lingkupId: [
      "Sertifikasi GMP, CPPOB, HACCP & keamanan pangan",
      "Uji lab produk & penyiapan dokumen mutu",
      "Labeling nutrisi, klaim, dan kepatuhan kemasan",
    ],
    lingkupEn: [
      "GMP, CPPOB, HACCP & food safety certification",
      "Product lab testing & quality document preparation",
      "Nutrition labeling, claims, and packaging compliance",
    ],
    prosesId: [
      "Gap analysis mutu terhadap standar sasaran",
      "Penyusunan dokumen & pelatihan produksi",
      "Audit/inspeksi & penerbitan sertifikat",
    ],
    prosesEn: [
      "Quality gap analysis against target standard",
      "Documentation & production training",
      "Audit/inspection & certificate issuance",
    ],
    dokumenId: [
      "Legalitas usaha & data fasilitas produksi",
      "Formula/spesifikasi produk",
      "Hasil uji lab terkini",
    ],
    dokumenEn: [
      "Business legality & production facility data",
      "Product formula/specifications",
      "Latest lab test results",
    ],
    faq: [
      {
        qId: "Kapan produk butuh CPPOB vs HACCP?",
        aId: "CPPOB wajib bagi fasilitas pangan olahan untuk izin edar; HACCP menambah jaminan keamanan pangan yang sering disyaratkan pembeli besar/ekspor.",
        qEn: "When is CPPOB vs HACCP needed?",
        aEn: "CPPOB is mandatory for processed-food facilities seeking distribution permits; HACCP adds food-safety assurance often required by large buyers/exporters.",
      },
      {
        qId: "Apakah uji lab bisa diatur sekalian?",
        aId: "Ya, kami koordinasi dengan laboratorium terakreditasi KAN untuk parameter yang disyaratkan regulasi masing-masing produk.",
        qEn: "Can lab testing be arranged too?",
        aEn: "Yes, we coordinate with KAN-accredited laboratories for the parameters required by each product's regulations.",
      },
    ],
  },
  {
    kode: "KP-BD",
    kat: "KP",
    nameId: "Paket & Konsultasi Produk",
    nameEn: "Product Packages & Consulting",
    lingkupId: [
      "Paket launching produk: legalitas + BPOM/halal + label",
      "Strategi registrasi multi-produk & multi-varian",
      "Konsultasi regulasi ekspansi pasar & distribusi",
    ],
    lingkupEn: [
      "Product launch packages: legality + BPOM/halal + labeling",
      "Multi-product & multi-variant registration strategy",
      "Market expansion & distribution regulatory consulting",
    ],
    prosesId: [
      "Workshop produk: target pasar & regulasi yang berlaku",
      "Peta jalan perizinan & anggaran",
      "Eksekusi paket dengan milestone terukur",
    ],
    prosesEn: [
      "Product workshop: target market & applicable regulations",
      "Licensing roadmap & budget",
      "Package execution with measurable milestones",
    ],
    dokumenId: [
      "Profil produk & rencana peluncuran",
      "Legalitas perusahaan yang ada",
      "Daftar varian/packaging yang direncanakan",
    ],
    dokumenEn: [
      "Product profile & launch plan",
      "Existing company legality",
      "Planned variants/packaging list",
    ],
    faq: [
      {
        qId: "Saya punya 10 varian produk, bagaimana efisiennya?",
        aId: "Varian sekelas & sekategori bisa dirangkai dalam satu strategi registrasi dengan berkas bersama — biaya per varian turun signifikan.",
        qEn: "I have 10 product variants; how to be efficient?",
        aEn: "Same-class, same-category variants can share one registration strategy with common dossiers — per-variant cost drops significantly.",
      },
      {
        qId: "Apakah konsultasi produk dikenakan biaya?",
        aId: "Konsultasi awal gratis; penjelasan mendalam dengan roadmap tertulis masuk paket konsultasi produk yang tercantum di katalog.",
        qEn: "Is product consulting charged?",
        aEn: "Initial consultation is free; in-depth sessions with a written roadmap fall under the product consulting package listed in the catalog.",
      },
    ],
  },
];

export const SUB_LH: CatalogSub[] = [
  {
    kode: "LH-AM",
    kat: "LH",
    nameId: "Dokumen Lingkungan",
    nameEn: "Environmental Documents",
    lingkupId: [
      "SPPL, UKL-UPL, dan AMDAL sesuai skala risiko kegiatan",
      "Persetujuan lingkungan terintegrasi OSS-RBA",
      "Penyusunan RKL-RPL & dokumen pendukung",
    ],
    lingkupEn: [
      "SPPL, UKL-UPL, and AMDAL per activity risk scale",
      "Environmental approval integrated with OSS-RBA",
      "RKL-RPL & supporting document preparation",
    ],
    prosesId: [
      "Pemantakan (screening) tingkat risiko kegiatan",
      "Kajian lapangan, seminar teknis bila perlu",
      "Persetujuan lingkungan terbit & integrasi OSS",
    ],
    prosesEn: [
      "Risk-level screening of the activity",
      "Field assessment, technical seminar if required",
      "Environmental approval & OSS integration",
    ],
    dokumenId: [
      "NIB/KBLI & data kegiatan usaha",
      "Lokasi, KKPR/peta lahan & rencana teknis",
      "Data sosial-ekonomi sekitar lokasi",
    ],
    dokumenEn: [
      "NIB/KBLI & activity data",
      "Location, KKPR/site map & technical plan",
      "Socio-economic data around the site",
    ],
    faq: [
      {
        qId: "Kegiatan saya perlu SPPL, UKL-UPL, atau AMDAL?",
        aId: "Tergantung skala risiko menurut OSS-RBA: rendah → SPPL, menengah → UKL-UPL, tinggi → AMDAL. Kami lakukan screening gratis di awal.",
        qEn: "Do I need SPPL, UKL-UPL, or AMDAL?",
        aEn: "Depends on OSS-RBA risk: low → SPPL, medium → UKL-UPL, high → AMDAL. We run a free initial screening.",
      },
      {
        qId: "Berapa lama persetujuan lingkungan terbit?",
        aId: "SPPL segera (deklaratif), UKL-UPL umumnya 1–2 bulan, AMDAL 3–6 bulan tergantung kompleksitas dan seminar teknis.",
        qEn: "How long until environmental approval is issued?",
        aEn: "SPPL immediate (declarative), UKL-UPL generally 1–2 months, AMDAL 3–6 months depending on complexity and technical seminars.",
      },
    ],
  },
  {
    kode: "LH-B3",
    kat: "LH",
    nameId: "Limbah B3 & Material Berbahaya",
    nameEn: "Hazardous Waste & Materials",
    lingkupId: [
      "Izin pengelolaan limbah B3: simpan, kumpul, angkut, olah",
      "Fasyankes & manifest limbah elektronik",
      "Perpanjangan persetujuan teknis limbah B3",
    ],
    lingkupEn: [
      "Hazardous waste permits: store, collect, transport, treat",
      "Healthcare waste & electronic waste manifests",
      "Renewal of technical hazardous waste approvals",
    ],
    prosesId: [
      "Inventarisasi jenis & volume limbah terbangun",
      "Penyusunan SOP, TPS B3 & kontrak pihak ketiga",
      "Persetujuan teknis DLH/KLHK terbit",
    ],
    prosesEn: [
      "Inventory of generated waste types & volumes",
      "SOP, B3 storage yard & third-party contracts",
      "Technical approval issuance by DLH/KLHK",
    ],
    dokumenId: [
      "Perizinan dasar usaha (NIB, lingkungan)",
      "Data limbah: jenis, sumber, estimasi volume",
      "Fotografi TPS B3 & rencana pengelolaan",
    ],
    dokumenEn: [
      "Base business licensing (NIB, environmental)",
      "Waste data: types, sources, volume estimates",
      "B3 storage yard photos & management plan",
    ],
    faq: [
      {
        qId: "Perusahaan kecil pun limbah B3, wajib izin?",
        aId: "Ya, penghasil limbah B3 wajib mengelola sesuai regulasi walau volumenya kecil — termasuk menyimpan di TPS B3 dan menyerahkan ke pengelola berizin.",
        qEn: "Small company with hazardous waste — is a permit required?",
        aEn: "Yes, B3 generators must manage waste per regulations regardless of volume — including B3 storage yards and delivery to licensed managers.",
      },
      {
        qId: "Apa itu manifest limbah B3?",
        aId: "Dokumen digital perjalanan limbah dari penghasil ke pengolah final melalui SIMEL — bukti kepatuhan yang diperiksa saat audit.",
        qEn: "What is a hazardous waste manifest?",
        aEn: "A digital waste tracking document from generator to final processor via SIMEL — audited proof of compliance.",
      },
    ],
  },
  {
    kode: "LH-AU",
    kat: "LH",
    nameId: "Sumber Daya Air & Sanitasi",
    nameEn: "Water Resources & Sanitation",
    lingkupId: [
      "SIPA/pengambilan air baku & izin guna air",
      "Pembuangan air limbah ke media air (IPAL)",
      "IMPA & koordinasi SDA terkait bendungan/DAS",
    ],
    lingkupEn: [
      "Raw water abstraction & water use permits",
      "Wastewater discharge to water bodies (IPAL)",
      "IMPA & water resource coordination (dams/watersheds)",
    ],
    prosesId: [
      "Kajian ketersediaan & rencana pengambilan/pembuangan",
      "Penyusunan dokumen teknis & persetujuan instansi",
      "Izin terbit + pendampingan pemasangan meteran",
    ],
    prosesEn: [
      "Availability study & abstraction/discharge plan",
      "Technical documents & agency approvals",
      "Permit issuance + metering installation assistance",
    ],
    dokumenId: [
      "Perizinan usaha & lingkungan yang ada",
      "Rencana teknis pengambilan/limbah (debit, lokasi)",
      "Desain IPAL bila relevan",
    ],
    dokumenEn: [
      "Existing business & environmental licenses",
      "Technical abstraction/discharge plan (flow, location)",
      "IPAL design when relevant",
    ],
    faq: [
      {
        qId: "Mengambil air tanah untuk pabrik perlu izin apa?",
        aId: "SIPA (izin penggunaan air) dari instansi SDA provinsi/kabupaten, dengan bayaran PNBP sesuai debit. Kami urus sejak kajian awal.",
        qEn: "What permit is needed to extract groundwater?",
        aEn: "A water use permit (SIPA) from provincial/regency water authorities, with PNBP fees per volume. We handle from initial study.",
      },
      {
        qId: "Apakah IPAL wajib semua pabrik?",
        aId: "Pabrik yang menghasilkan air limbah wajib memproses sebelum dibuang — desain dan pemenuhan baku mutu kami dampingi penuh.",
        qEn: "Is a wastewater plant mandatory for all factories?",
        aEn: "Factories producing wastewater must treat it before discharge — we assist fully with design and quality-standard compliance.",
      },
    ],
  },
  {
    kode: "LH-KE",
    kat: "LH",
    nameId: "Kehutanan & Lahan",
    nameEn: "Forestry & Land",
    lingkupId: [
      "PKKH/izin pinjam pakai kawasan hutan",
      "Pemanfaatan kawasan hutan sosial & perizinan kehutanan",
      "Pelepasan kawasan & penyelesaian status lahan",
    ],
    lingkupEn: [
      "Forest area borrowing-utilization permits (PKKH)",
      "Social forestry utilization & forestry licensing",
      "Area release & land status resolution",
    ],
    prosesId: [
      "Verifikasi status kawasan (tifografis, peta KLHK)",
      "Penyusunan dokumen pinjam pakai/rencana kegiatan",
      "Koordinasi KLHK/Dishut hingga keputusan terbit",
    ],
    prosesEn: [
      "Area status verification (topography, KLHK maps)",
      "Borrowing-use documents & activity planning",
      "KLHK/Forestry Office coordination to decision",
    ],
    dokumenId: [
      "Perizinan usaha & persetujuan lingkungan",
      "Peta lokasi & rencana teknis pemanfaatan",
      "Dokumen kepemilikan/penguasaan lahan",
    ],
    dokumenEn: [
      "Business licensing & environmental approval",
      "Location map & utilization technical plan",
      "Land ownership/control documents",
    ],
    faq: [
      {
        qId: "Lahan saya masuk kawasan hutan, bisa dibangun?",
        aId: "Hanya melalui pinjam pakai kawasan hutan (PKKH) atau pelepasan sesuai regulasi — kami mulai dari pengecekan status peta KLHK.",
        qEn: "My land is inside forest area — can I build?",
        aEn: "Only via forest borrowing-use (PKKH) or regulated area release — we start with a KLHK map status check.",
      },
      {
        qId: "Berapa lama proses PKKH?",
        aId: "Umumnya 2–5 bulan tergantung luasan dan kelengkapan dokumen teknis, termasuk pemeriksaan lapangan bersama.",
        qEn: "How long does PKKH take?",
        aEn: "Generally 2–5 months depending on area size and technical document completeness, including joint field checks.",
      },
    ],
  },
  {
    kode: "LH-KL",
    kat: "LH",
    nameId: "KLHS & Tata Ruang",
    nameEn: "SEA & Spatial Planning",
    lingkupId: [
      "KLHS kebijakan/rencana/kegiatan (PPK)",
      "KKPR: kesesuaian kegiatan pemanfaatan ruang",
      "Konsultasi RDTR, rencana detail tata ruang",
    ],
    lingkupEn: [
      "Strategic environmental assessment for policies/plans",
      "KKPR: spatial utilization activity conformity",
      "Detailed spatial plan (RDTR) consultations",
    ],
    prosesId: [
      "Identifikasi ruang lingkup KLHS/kesisuaian ruang",
      "Penyusunan dokumen & konsultasi publik",
      "Pernyataan/persetujuan instansi tata ruang",
    ],
    prosesEn: [
      "Scoping of SEA/spatial conformity",
      "Document preparation & public consultation",
      "Spatial agency statement/approval",
    ],
    dokumenId: [
      "Dokumen rencana/kegiatan yang diujikan",
      "Peta RDTR & KKPR setempat",
      "Data kegiatan & dampak yang direncanakan",
    ],
    dokumenEn: [
      "Assessed plan/activity documents",
      "Local RDTR maps & KKPR",
      "Activity data & planned impacts",
    ],
    faq: [
      {
        qId: "Apa itu KKPR dan mengapa penting?",
        aId: "KKPR adalah kesesuaian kegiatan dengan rencana tata ruang — prasyarat penerbitan izin bangunan dan perizinan berusaha berbasis lokasi.",
        qEn: "What is KKPR and why does it matter?",
        aEn: "KKPR is conformity of an activity with the spatial plan — a prerequisite for building permits and location-based business licensing.",
      },
      {
        qId: "KLHS untuk proyek siapa yang wajib?",
        aId: "Kebijakan/rencana besar dan kegiatan berisiko tinggi tertentu wajib KLHS sebelum persetujuan lingkungan — kami bantu identifikasi kewajibannya.",
        qEn: "Which projects require SEA?",
        aEn: "Major policies/plans and certain high-risk activities require SEA before environmental approval — we help identify obligations.",
      },
    ],
  },
  {
    kode: "LH-PL",
    kat: "LH",
    nameId: "Kelautan & Pesisir",
    nameEn: "Marine & Coastal",
    lingkupId: [
      "Pertek/PKL & izin pemanfaatan ruang laut",
      "Izin budidaya/tangkap & lokasi akuakultur",
      "Konservasi pesisir & perizinan reklamasi",
    ],
    lingkupEn: [
      "Marine technical study & sea space utilization permits",
      "Aquaculture/capture & mariculture site permits",
      "Coastal conservation & reclamation licensing",
    ],
    prosesId: [
      "Pemetaan zona laut & kesesuaian kegiatan",
      "Kajian teknis/marine assessment",
      "Persetujuan KKP/daerah terbit",
    ],
    prosesEn: [
      "Sea zoning mapping & activity conformity",
      "Technical/marine assessment",
      "Fisheries/Regional authority approval",
    ],
    dokumenId: [
      "Perizinan usaha & lingkungan",
      "Peta lokasi laut/pantai & rencana kegiatan",
      "Data kapal/keramba bila relevan",
    ],
    dokumenEn: [
      "Business & environmental licensing",
      "Sea/coastal location map & activity plan",
      "Vessel/net-pen data when relevant",
    ],
    faq: [
      {
        qId: "Keramba laut butuh izin apa?",
        aId: "Izin lokasi budidaya dan pemanfaatan ruang laut, plus dokumen lingkungan sesuai skala. Kami petakan zona yang diizinkan dulu.",
        qEn: "What permits do sea net-pens need?",
        aEn: "Aquaculture site and sea-space utilization permits, plus environmental documents per scale. We first map allowed zones.",
      },
      {
        qId: "Apakah reklamasi pantai boleh?",
        aId: "Hanya dengan studi kelayakan, persetujuan lingkungan, dan perizinan khusus yang ketat — kami dampingi sejak kajian awal.",
        qEn: "Is coastal reclamation allowed?",
        aEn: "Only with feasibility studies, environmental approval, and strict special licensing — we assist from the initial assessment.",
      },
    ],
  },
  {
    kode: "LH-PM",
    kat: "LH",
    nameId: "Pemantauan, Pengujian & Pelaporan",
    nameEn: "Monitoring, Testing & Reporting",
    lingkupId: [
      "Pemantauan RKL-RPL & pelaporan berkala ke DLH",
      "Pengujian emisi, air limbah, dan kualitas lingkungan",
      "Pelaporan PROPER & sistem pelaporan daring",
    ],
    lingkupEn: [
      "RKL-RPL monitoring & periodic reports to authorities",
      "Emissions, wastewater, and ambient quality testing",
      "PROPER reporting & online reporting systems",
    ],
    prosesId: [
      "Penetapan parameter & jadwal pemantauan",
      "Pengambilan sampel bersama lab terakreditasi",
      "Penyusunan & pengiriman laporan resmi",
    ],
    prosesEn: [
      "Parameter & monitoring schedule determination",
      "Sampling with accredited laboratories",
      "Official report preparation & submission",
    ],
    dokumenId: [
      "Persetujuan lingkungan & dokumen RKL-RPL",
      "Data operasional kegiatan",
      "Riwayat laporan sebelumnya",
    ],
    dokumenEn: [
      "Environmental approval & RKL-RPL documents",
      "Operational activity data",
      "Previous report history",
    ],
    faq: [
      {
        qId: "Laporan lingkungan wajib kapan?",
        aId: "Umumnya triwulanan/semester sesuai dokumen lingkungan Anda; keterlambatan berisiko teguran hingga pembekuan perizinan berusaha.",
        qEn: "When are environmental reports due?",
        aEn: "Generally quarterly/semi-annually per your environmental documents; delays risk warnings up to license suspension.",
      },
      {
        qId: "Bisakah kalian tangani pemantauan penuh?",
        aId: "Ya — jadwal, pengambilan sampel lab, analisis, sampai laporan terkirim dan diarsipkan siap audit.",
        qEn: "Can you handle monitoring end to end?",
        aEn: "Yes — scheduling, lab sampling, analysis, through to submission and audit-ready archiving.",
      },
    ],
  },
  {
    kode: "LH-KP",
    kat: "LH",
    nameId: "Kepatuhan & Pemulihan",
    nameEn: "Compliance & Remediation",
    lingkupId: [
      "Penyelesaian teguran & sanksi administratif lingkungan",
      "Rencana pemulihan/pascatambang & revegetasi",
      "Audit kepatuhan lingkungan & penguatan dokumen",
    ],
    lingkupEn: [
      "Resolution of environmental warnings & sanctions",
      "Reclamation/mine-closure & revegetation plans",
      "Environmental compliance audits & document strengthening",
    ],
    prosesId: [
      "Analisis temuan teguran/audit",
      "Penyusunan rencana tindak lanjut terukur",
      "Pendampingan pembuktian pemenuhan ke instansi",
    ],
    prosesEn: [
      "Analysis of warning/audit findings",
      "Measurable corrective action planning",
      "Assistance proving compliance to authorities",
    ],
    dokumenId: [
      "Surat teguran/hasil audit",
      "Dokumen lingkungan & laporan pemantauan",
      "Data operasional terkait temuan",
    ],
    dokumenEn: [
      "Warning letters/audit results",
      "Environmental documents & monitoring reports",
      "Operational data related to findings",
    ],
    faq: [
      {
        qId: "Perusahaan saya kena pembekuan izin, apa langkah pertama?",
        aId: "Segera audit akar masalah & susun rencana pemenuhan berjadwal, lalu komunikasi formal ke instansi — kami tangani seluruh siklusnya.",
        qEn: "My license was suspended; what is step one?",
        aEn: "Immediately audit root causes & build a scheduled compliance plan, then formally engage the authority — we handle the whole cycle.",
      },
      {
        qId: "Apakah rencana pascatambang wajib?",
        aId: "Ya untuk kegiatan pertambangan — dokumen jaminan pemulihan wajib disusun sejak awal dan diperbarui sesuai progres.",
        qEn: "Is a mine closure plan mandatory?",
        aEn: "Yes for mining activities — rehabilitation guarantee documents are required from the start and updated with progress.",
      },
    ],
  },
  {
    kode: "LH-TM",
    kat: "LH",
    nameId: "Pertambangan & Energi",
    nameEn: "Mining & Energy",
    lingkupId: [
      "IUP/IUPK operasi produksi & eksplorasi",
      "Perizinan panas bumi & energi terbarukan (PLTS)",
      "RKAB, kajian teknis, dan kepatuhan minerba",
    ],
    lingkupEn: [
      "Production & exploration mining permits (IUP/IUPK)",
      "Geothermal & renewable energy licensing (PLTS)",
      "Work plans (RKAB), technical studies & compliance",
    ],
    prosesId: [
      "Pemetaan wilayah & ketersediaan WIUP",
      "Kajian teknis & dokumen kewajiban (RKAB, lingkungan)",
      "Pengajuan ke ESDM/Minerba & pemantauan",
    ],
    prosesEn: [
      "Area mapping & WIUP availability",
      "Technical studies & obligation documents (RKAB, environment)",
      "Energy/Mineral agency submission & monitoring",
    ],
    dokumenId: [
      "Badan hukum & modal dasar sesuai kewenangan",
      "Peta wilayah izang & data eksplorasi",
      "Dokumen lingkungan & kesepakatan masyarakat",
    ],
    dokumenEn: [
      "Legal entity & capital per authority level",
      "Area maps & exploration data",
      "Environmental documents & community agreements",
    ],
    faq: [
      {
        qId: "Izin PLTS skala kecil butuh apa saja?",
        aId: "NIB dengan KBLI energi terbarukan, perizinan berusaha berbasis risiko, dan dokumen lingkungan bila melewati ambang. Kami hitung ambangnya untuk Anda.",
        qEn: "What does a small PLTS need?",
        aEn: "NIB with renewable-energy KBLI, risk-based business licensing, and environmental documents above thresholds. We compute thresholds for you.",
      },
      {
        qId: "Apa konsekuensi tidak mengirim RKAB?",
        aId: "RKAB yang tidak disetujui menghambat operasi produksi dan perpanjangan — kami pastikan jadwal penyusunan dan pengajuan tepat waktu.",
        qEn: "What happens without approved RKAB?",
        aEn: "Unapproved work plans block production operations and renewals — we ensure timely preparation and submission.",
      },
    ],
  },
];

export const SUB_SK: CatalogSub[] = [
  {
    kode: "SK-PT",
    kat: "SK",
    nameId: "Perdagangan & Distribusi",
    nameEn: "Trade & Distribution",
    lingkupId: [
      "API-U/API-P, izin usaha perdagangan barang tertentu",
      "Izin gudang, TPS, dan distribusi barang tertentu",
      "Izin promosi & diskon (event penjualan)",
    ],
    lingkupEn: [
      "General/importer trade licenses (API-U/API-P)",
      "Warehouse, bonded storage & specific goods distribution",
      "Sales promotion & discount event permits",
    ],
    prosesId: [
      "Pemetaan barang dagangan & regulasi terkait",
      "Penyusunan berkas ke Kemendag/Daglu",
      "Izin terbit + pendampingan kepatuhan berkala",
    ],
    prosesEn: [
      "Goods mapping & related regulations",
      "Trade Ministry file preparation",
      "License issuance + periodic compliance assistance",
    ],
    dokumenId: [
      "NIB, akta & NPWP perusahaan",
      "Data barang & pemasok/perjanjian agensi",
      "Data gudang/pemasangan usaha",
    ],
    dokumenEn: [
      "NIB, deed & corporate NPWP",
      "Goods data & supplier/agency agreements",
      "Warehouse/business premises data",
    ],
    faq: [
      {
        qId: "Kapan perusahaan butuh API-P?",
        aId: "Bila Anda mengimpor barang untuk sendiri/dipasarkan — API-P dicabut bila tak realisasi impor 3 tahun; kami bantu kalkulasi kebutuhan.",
        qEn: "When is an importer API-P needed?",
        aEn: "When importing for own use/resale — API-P is revoked if no import realization in 3 years; we help assess your needs.",
      },
      {
        qId: "Barang tertentu apa yang butuh izin khusus?",
        aId: "Misal: bahan berbahaya, tekstil & tekstil produk, elektronik, kosmetik impor — daftar berganti sesuai Permendag terbaru.",
        qEn: "Which goods need special trade licenses?",
        aEn: "E.g., hazardous materials, textiles, electronics, imported cosmetics — the list changes with the latest Trade Ministry rules.",
      },
    ],
  },
  {
    kode: "SK-EI",
    kat: "SK",
    nameId: "Ekspor-Impor & Logistik",
    nameEn: "Export-Import & Logistics",
    lingkupId: [
      "Pendaftaran eksportir/importir & NIK di INSW",
      "Persetujuan impor (PI), PEB/BC dokumen kepabeanan",
      "Izin logistik, freight forwarder & ekspor terbatas",
    ],
    lingkupEn: [
      "Exporter/importer registration & NIK on INSW",
      "Import approvals (PI) & customs documents (PEB/BC)",
      "Logistics, freight forwarder & restricted export permits",
    ],
    prosesId: [
      "Klasifikasi HS/barang & jalur kepabeanan",
      "Pengurusan NIK, API, dan persetujuan sektor",
      "Pendampingan muat & dokumen pengeluaran barang",
    ],
    prosesEn: [
      "HS/goods classification & customs route",
      "NIK, API, and sector approval processing",
      "Loading & release document assistance",
    ],
    dokumenId: [
      "NIB, API & NPWP",
      "Invoice, kontrak, dan data barang (HS)",
      "Dokumen pemasok/pembeli luar negeri",
    ],
    dokumenEn: [
      "NIB, API & NPWP",
      "Invoice, contracts, goods data (HS)",
      "Foreign supplier/buyer documents",
    ],
    faq: [
      {
        qId: "Impor pertama kali butuh berapa lama?",
        aId: "Persiapan legalitas (API, NIK) sekitar 1–2 minggu; persetujuan impor per pengiriman 1–5 hari kerja sesuai barang.",
        qEn: "How long for a first-time import?",
        aEn: "Legality setup (API, NIK) takes 1–2 weeks; per-shipment approvals 1–5 working days depending on goods.",
      },
      {
        qId: "Apa itu Lartas dan bagaimana tahu produkku kena?",
        aId: "Lartas = larangan terbatas: barang yang butuh persetujuan instansi tertentu. Tim kami cek per HS code sebelum Anda muat barang.",
        qEn: "What is Lartas and does it affect my goods?",
        aEn: "Lartas = import restrictions requiring agency approvals. We check per HS code before you ship.",
      },
    ],
  },
  {
    kode: "SK-KS",
    kat: "SK",
    nameId: "Konstruksi & Bangunan",
    nameEn: "Construction & Buildings",
    lingkupId: [
      "PBG (eks-IMB), SLF, dan konsultasi bangunan",
      "SBU konstruksi & sertifikasi SKTTK personel",
      "KKPR & perizinan lokasi proyek",
    ],
    lingkupEn: [
      "Building permits (PBG), occupancy (SLF), consulting",
      "Construction SBU & SKTTK personnel certification",
      "KKPR & project site licensing",
    ],
    prosesId: [
      "Pengecekan kesesuaian ruang & gambar teknis",
      "Pengajuan SIMBG/BG untuk PBG atau SLF",
      "Pendampingan pemeriksaan & terbitnya dokumen",
    ],
    prosesEn: [
      "Spatial conformity & technical drawing checks",
      "SIMBG submission for PBG or SLF",
      "Inspection assistance & document issuance",
    ],
    dokumenId: [
      "KKPR, sertifikat/bukti hak atas tanah",
      "Gambar teknis arsitektur-struktur-MEP",
      "Data personel & badan usaha (bila SBU)",
    ],
    dokumenEn: [
      "KKPR, land certificate/proof of title",
      "Architectural-structural-MEP technical drawings",
      "Personnel & entity data (for SBU)",
    ],
    faq: [
      {
        qId: "SLF wajib sebelum gedung dipakai?",
        aId: "Ya, SLF (Sertifikat Laik Fungsi) wajib sebelum okupansi — menerbitkan setelah PBG dipenuhi dan bangunan sesuai rencana.",
        qEn: "Is SLF mandatory before occupancy?",
        aEn: "Yes, the Function Eligibility Certificate is mandatory before occupancy — issued after PBG compliance and as-built conformity.",
      },
      {
        qId: "Kontraktor kecil butuh SBU?",
        aId: "SBU menaikkan kredibilitas & kualifikasi tender. Untuk pekerjaan kecil ada jalur kualifikasi sesuai nilai proyek — kami bantu pilih.",
        qEn: "Do small contractors need SBU?",
        aEn: "SBU boosts credibility & tender eligibility. Small works have qualification routes per project value — we help you choose.",
      },
    ],
  },
  {
    kode: "SK-PR",
    kat: "SK",
    nameId: "Pariwisata, Jasa & Hiburan",
    nameEn: "Tourism, Services & Entertainment",
    lingkupId: [
      "Izin biro perjalanan, TUM, dan SHR hotel-resto",
      "Kartu pramuwisata (HPI) & sertifikasi wisata alam",
      "Izin tempat hiburan/rekreasi & promosi wisata",
    ],
    lingkupEn: [
      "Travel bureau, TUM, hotel-restaurant certificates",
      "Tour guide cards (HPI) & nature tourism certification",
      "Entertainment/recreation venue & promotion permits",
    ],
    prosesId: [
      "Penetapan jenis usaha & standar operasional",
      "Kelengkapan personel bersertifikat & sarana",
      "Pengajuan OSS/Kemenpar/Dishub terkait",
    ],
    prosesEn: [
      "Business type & operational standards",
      "Certified personnel & facility readiness",
      "OSS/Tourism Ministry/Agency submissions",
    ],
    dokumenId: [
      "NIB & akta dengan KBLI wisata",
      "Sertifikat kompetensi personel kunci",
      "Data armada/akomodasi & SOP layanan",
    ],
    dokumenEn: [
      "NIB & tourism-KBLI deed",
      "Key personnel competency certificates",
      "Fleet/accommodation data & service SOPs",
    ],
    faq: [
      {
        qId: "Biro perjalanan wajib anggota Asita?",
        aId: "Anggota organisasi (Asita/HPI) umumnya disyaratkan untuk akses tertentu; izin intinya tetap melalui OSS & Kemenpar. Kami urus keduanya.",
        qEn: "Must travel bureaus join Asita?",
        aEn: "Organization membership (Asita/HPI) is often required for certain access; core licensing remains via OSS & Tourism Ministry. We handle both.",
      },
      {
        qId: "Berapa lama kartu pramuwisata terbit?",
        aId: "Setelah pelatihan & uji kompetensi, kartu umumnya terbit 2–4 minggu melalui HPI/himpausan setempat.",
        qEn: "How long for a tour guide card?",
        aEn: "After training & competency tests, cards are generally issued within 2–4 weeks via HPI/local guide associations.",
      },
    ],
  },
  {
    kode: "SK-TR",
    kat: "SK",
    nameId: "Transportasi & Logistik",
    nameEn: "Transportation & Logistics",
    lingkupId: [
      "Izin angkutan barang/orang (TDUPA/TDUPB)",
      "Izin armada logistik & gandengan (uji KIR)",
      "Izin operator pecat retan/terminal",
    ],
    lingkupEn: [
      "Freight/passenger transport licenses",
      "Logistics fleet & trailer permits (roadworthiness)",
      "Terminal/cargo-handling operator permits",
    ],
    prosesId: [
      "Penetapan jenis angkutan & armada",
      "Pengujian kendaraan & dokumen armada",
      "Izin trayek/operator terbit via OSS/Hubdat",
    ],
    prosesEn: [
      "Transport type & fleet determination",
      "Vehicle testing & fleet documents",
      "Route/operator issuance via OSS/Transport Office",
    ],
    dokumenId: [
      "NIB & KBLI transportasi",
      "STNK, KIR & data armada",
      "Data pengemudi (SIM sesuai jenis)",
    ],
    dokumenEn: [
      "NIB & transport KBLI",
      "Vehicle registration & roadworthiness certificates",
      "Driver data (appropriate license class)",
    ],
    faq: [
      {
        qId: "Truk kontainer butuh izin apa?",
        aId: "Izin angkutan barang, uji KIR tiap 6 bulan, dan kelengkapan armada sesuai trayek — kami urus siklus perizinan armadanya.",
        qEn: "What licenses do container trucks need?",
        aEn: "Freight permits, six-monthly roadworthiness tests, and fleet documents per route — we manage the fleet licensing cycle.",
      },
      {
        qId: "Apakah armada sewa juga perlu izin sendiri?",
        aId: "Perizinan mengikuti pemilik armada & operator; kontrak sewa harus dengan perusahaan berizin agar rantai kepatuhan aman.",
        qEn: "Do rented fleets need separate licenses?",
        aEn: "Licensing follows fleet owner & operator; lease contracts must be with licensed companies to keep the compliance chain safe.",
      },
    ],
  },
  {
    kode: "SK-TK",
    kat: "SK",
    nameId: "Ketenagakerjaan & TKA",
    nameEn: "Manpower & Foreign Workers",
    lingkupId: [
      "RPTKA, IMTA/notifikasi & KITAS tenaga asing",
      "Wajib lapor perusahaan & ketenagakerjaan (WLKP)",
      "Pengurusan BPJS, PP pengelolaan & jaminan DKP-TKA",
    ],
    lingkupEn: [
      "RPTKA, work permits & foreign worker KITAS",
      "Company reporting & manpower obligations (WLKP)",
      "Social security, management regulations & DKP guarantee",
    ],
    prosesId: [
      "Analisis posisi & pemenuhan komposisi TKA (tenaga lokal)",
      "Pengajuan RPTKA & notifikasi ke Kemnaker",
      "KITAS terbit & kepatuhan berkala (WLKP, LK)",
    ],
    prosesEn: [
      "Position analysis & local worker ratio compliance",
      "RPTKA & notification submission to Manpower Ministry",
      "KITAS issuance & periodic compliance (WLKP, reports)",
    ],
    dokumenId: [
      "Legalitas perusahaan & NPWP",
      "Paspor, ijazah & pengalaman TKA",
      "Surat penunjukan & perjanjian kerja",
    ],
    dokumenEn: [
      "Company legality & NPWP",
      "Foreign worker passport, degree & experience",
      "Appointment letter & employment agreement",
    ],
    faq: [
      {
        qId: "Berapa lama KITAS kerja terbit?",
        aId: "Setelah RPTKA disetujui, KITAS umumnya 5–10 hari kerja; total proses 2–4 minggu termasuk dokumen pendukung.",
        qEn: "How long for a work KITAS?",
        aEn: "After RPTKA approval, KITAS generally takes 5–10 working days; 2–4 weeks total including supporting documents.",
      },
      {
        qId: "Apakah setiap perusahaan wajib WLKP?",
        aId: "Ya, wajib lapor ketenagakerjaan tahunan bagi seluruh perusahaan — modal dasar kewajiban K3 dan hubungan industrial.",
        qEn: "Is annual manpower reporting mandatory?",
        aEn: "Yes, annual manpower reporting applies to all companies — the base for OSH and industrial relations obligations.",
      },
    ],
  },
  {
    kode: "SK-EN",
    kat: "SK",
    nameId: "Energi, Migas & EBT",
    nameEn: "Energy, Oil-Gas & Renewables",
    lingkupId: [
      "Izin usaha migas (Niaga BBM, gas, CNG)",
      "Izin EBT: PLTS, PLTMH, biomassa & skala kecil",
      "IUPTLU & konsultasi jaringan distribusi",
    ],
    lingkupEn: [
      "Oil-gas business licenses (fuel retail, gas, CNG)",
      "Renewable licenses: solar, mini-hydro, biomass & small scale",
      "IUPTLU & distribution network consulting",
    ],
    prosesId: [
      "Penetapan skala usaha & KBLI energi",
      "Kajian teknis (lokasi, kapasitas, jaringan)",
      "Pengajuan ESDM/OSS & kepatuhan operasional",
    ],
    prosesEn: [
      "Business scale & energy KBLI determination",
      "Technical studies (site, capacity, network)",
      "Energy Ministry/OSS submission & operational compliance",
    ],
    dokumenId: [
      "Akta, NIB & data modal",
      "Lokasi & rencana teknis instalasi",
      "Data pasokan bahan/pembeli tenaga",
    ],
    dokumenEn: [
      "Deed, NIB & capital data",
      "Site & installation technical plan",
      "Supply/offtaker data",
    ],
    faq: [
      {
        qId: "Spa koperasi bisa bangun PLTS skala desa?",
        aId: "Bisa melalui izin usaha penyediaan tenaga listrik skala kecil dengan pelayanan area terbatas — struktur perizinan kami bantu dari nol.",
        qEn: "Can a cooperative build a village-scale solar plant?",
        aEn: "Yes, via a small-scale electricity supply license with limited service area — we help structure licensing from zero.",
      },
      {
        qId: "Niaga BBM butuh modal besar?",
        aId: "Modal disesuaikan skala (SPBE/pangkalan minor). Kami hitung kebutuhan modal & kewajiban cadangan sesuai regulasi migas.",
        qEn: "Does fuel retail need large capital?",
        aEn: "Capital scales with the format (SPBE/minor depot). We compute capital needs & reserve obligations per oil-gas regulations.",
      },
    ],
  },
  {
    kode: "SK-KE",
    kat: "SK",
    nameId: "Jasa Keuangan & Fintech",
    nameEn: "Financial Services & Fintech",
    lingkupId: [
      "Pendaftaran OJK: P2P, pembayaran digital, asuransi",
      "Izin BI: penyelenggara jasa pembayaran (PJP)",
      "Konsultasi kepatuhan APU-PPT & laporan berkala",
    ],
    lingkupEn: [
      "OJK registration: P2P, digital payments, insurance",
      "Bank Indonesia licenses: payment service providers",
      "APU-PPT compliance & periodic reporting consulting",
    ],
    prosesId: [
      "Penetapan model bisnis & regulator yang berwenang",
      "Penyusunan dokumen lisensi, komposisi & sistem",
      "Pengajuan OJK/BI & pendampingan uji kelayakan",
    ],
    prosesEn: [
      "Business model & regulator determination",
      "License, composition & system documentation",
      "OJK/BI submission & fit-and-proper assistance",
    ],
    dokumenId: [
      "Badan hukum & modal terkini",
      "Profil pengurus & pemegang saham",
      "Rencana teknologi, SOP & manajemen risiko",
    ],
    dokumenEn: [
      "Legal entity & current capital",
      "Management & shareholder profiles",
      "Technology plan, SOPs & risk management",
    ],
    faq: [
      {
        qId: "Aplikasi pinjaman online butuh izin apa?",
        aId: "Pendanaan gotong royong (P2P) wajib terdaftar di OJK sebelum operasi — legal id sekaligus izin beroperasi. Kami dampingi penuh.",
        qEn: "What license does a P2P lending app need?",
        aEn: "Peer-to-peer funding must be OJK-registered before operating — legal id and operating permit. We assist end to end.",
      },
      {
        qId: "Apa risiko beroperasi tanpa izin OJK/BI?",
        aId: "Pemblokiran sistem, sanksi pidana, dan blacklist pengurus — regulasi fintech ditegakkan ketat; kepatuhan sejak hari pertama adalah satu-satunya jalur aman.",
        qEn: "What risks without OJK/BI licenses?",
        aEn: "System blocking, criminal sanctions, and management blacklisting — fintech rules are strictly enforced; day-one compliance is the only safe path.",
      },
    ],
  },
  {
    kode: "SK-DG",
    kat: "SK",
    nameId: "Digital, Telekomunikasi & Media",
    nameEn: "Digital, Telecom & Media",
    lingkupId: [
      "PSE Terdaftar Komdigi (website/aplikasi asing & lokal)",
      "Izin jaringan/layanan telekomunikasi & ISP",
      "Izin siaran & media (multiplatform)",
    ],
    lingkupEn: [
      "Komdigi PSE registration (local & foreign sites/apps)",
      "Network/telecom service & ISP licenses",
      "Broadcasting & media permits (multiplatform)",
    ],
    prosesId: [
      "Klasifikasi sistem elektronik & layanan",
      "Penyusunan dokumen (data, server, privasi)",
      "Pendaftaran/izin terbit & kepatuhan berkala",
    ],
    prosesEn: [
      "Electronic system & service classification",
      "Document preparation (data, server, privacy)",
      "Registration/license issuance & periodic compliance",
    ],
    dokumenId: [
      "Legalitas penyelenggara & NPWP",
      "Deskripsi sistem, alamat server & PIC",
      "Kebijakan privasi & Syarat Ketentuan",
    ],
    dokumenEn: [
      "Operator legality & NPWP",
      "System description, server address & PIC",
      "Privacy policy & Terms of Service",
    ],
    faq: [
      {
        qId: "Website saya wajib PSE Terdaftar?",
        aId: "Ya untuk penyelenggara sistem elektronik komersial termasuk situs asing yang melayani Indonesia — pendaftaran cepat, sanksi pemblokiran bila diabaikan.",
        qEn: "Does my website need PSE registration?",
        aEn: "Yes for commercial electronic system operators including foreign sites serving Indonesia — registration is quick; blocking is the risk of ignoring it.",
      },
      {
        qId: "Berapa lama PSE terdaftar terbit?",
        aId: "Proses pendaftaran umumnya beberapa hari kerja setelah dokumen lengkap; kami pastikan tidak ada kelalaian data.",
        qEn: "How long until PSE registration is issued?",
        aEn: "Usually several working days after complete documents; we ensure no data omissions.",
      },
    ],
  },
  {
    kode: "SK-AG",
    kat: "SK",
    nameId: "Pertanian, Perkebunan & Perikanan",
    nameEn: "Agriculture, Plantations & Fisheries",
    lingkupId: [
      "Izin usaha perkebunan & sertifikat laik budidaya",
      "Pendaftaran perikanan tangkap/budidaya (SIUP/SIIB)",
      "Sertifikasi petani, karantina & mutu hasil bumi",
    ],
    lingkupEn: [
      "Plantation business licenses & cultivation eligibility",
      "Fisheries registration (capture/aquaculture)",
      "Farmer certification, quarantine & commodity quality",
    ],
    prosesId: [
      "Pemetaan komoditas & kewajiban perizinan",
      "Koordinasi Distan/DP/Karantina terkait",
      "Sertifikat/izin terbit & pendampingan produksi",
    ],
    prosesEn: [
      "Commodity mapping & licensing obligations",
      "Agriculture/Fisheries/Quarantine coordination",
      "Certificate issuance & production assistance",
    ],
    dokumenId: [
      "Legalitas usaha & data lahan/kolam",
      "Rencana produksi & komoditas",
      "Data alat/kapal bila relevan",
    ],
    dokumenEn: [
      "Business legality & land/pond data",
      "Production plan & commodities",
      "Equipment/vessel data when relevant",
    ],
    faq: [
      {
        qId: "Ekspor komoditas kebun butuh izin tambahan?",
        aId: "Ya — sertifikat karantina, mutu (SNI/standar tujuan), dan pendaftaran eksportir. Kami rangkai sekaligus dengan izin usahanya.",
        qEn: "Do plantation exports need extra permits?",
        aEn: "Yes — quarantine certificates, quality (SNI/destination standards), and exporter registration. We arrange them together with the business license.",
      },
      {
        qId: "Budidaya ikan di tambak perlu izin?",
        aId: "Perlu pendaftaran budidaya dan dokumen lingkungan sesuai skala; kawasan tertentu butuh kesesuaian ruang laut/pesisir.",
        qEn: "Does pond aquaculture need permits?",
        aEn: "Yes — cultivation registration and environmental documents per scale; certain areas need coastal/marine spatial conformity.",
      },
    ],
  },
  {
    kode: "SK-PU",
    kat: "SK",
    nameId: "Pendidikan & Sosial",
    nameEn: "Education & Social",
    lingkupId: [
      "Izin lembaga pendidikan formal & nonformal",
      "Izin Yayasan & operasional lembaga kursus",
      "Perizinan organisasi sosial & LSM",
    ],
    lingkupEn: [
      "Formal & nonformal education institution licenses",
      "Foundation permits & course operation licensing",
      "Social organization & NGO permits",
    ],
    prosesId: [
      "Penetapan bentuk lembaga & standar kemendikbud",
      "Penyusunan dokumen pendirian & personel",
      "Izin terbit & pendampingan akreditasi awal",
    ],
    prosesEn: [
      "Institution form & education standards",
      "Founding documents & personnel preparation",
      "License issuance & initial accreditation assistance",
    ],
    dokumenId: [
      "Data pendiri & pengurus",
      "Lokasi & sarana prasarana pendidikan",
      "Rencana kurikulum/program",
    ],
    dokumenEn: [
      "Founder & management data",
      "Location & educational facilities",
      "Curriculum/program plan",
    ],
    faq: [
      {
        qId: "Buka kursus bahasa perlu yayasan?",
        aId: "Perlu badan hukum (yayasan/PT) dengan KBLI pendidikan dan izin lembaga kursus dari dinas terkait — kami urus rangkaiannya.",
        qEn: "Does a language course need a foundation?",
        aEn: "You need a legal entity (foundation/PT) with education KBLI and a course institution license from the local office — we arrange the chain.",
      },
      {
        qId: "Berpakaian lembaga bimbel wajib akreditasi?",
        aId: "Akreditasi memperkuat kredibilitas & beberapa kemitraan mensyaratkannya; kewajiban mengikuti jenis lembaga. Kami bantu jalurnya.",
        qEn: "Is accreditation mandatory for tutoring centers?",
        aEn: "Accreditation strengthens credibility & some partnerships require it; obligations vary by institution type. We help you navigate.",
      },
    ],
  },
];

/** Ambil sub berdasarkan kode; null bila tak ditemukan. */
export function getCatalogSub(kode: string): CatalogSub | undefined {
  return [...SUB_BU, ...SUB_KP, ...SUB_LH, ...SUB_SK].find((s) => s.kode === kode);
}

/** Ambil kategori berdasarkan kode. */
export function getCatalogKat(kode: string): CatalogKat | undefined {
  return KAT4.find((k) => k.kode === kode);
}

export const SUB_ALL: CatalogSub[] = [...SUB_BU, ...SUB_KP, ...SUB_LH, ...SUB_SK];
export const SUB_COUNT = SUB_ALL.length;
