"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Lang = "id" | "en";

const UI_ID = {
  // Nav
  navHome: "Beranda",
  navServices: "Layanan",
  navWhy: "Keunggulan",
  navProcess: "Proses",
  navProvinces: "38 Provinsi",
  navFounder: "Pendiri",
  navFaq: "FAQ",
  navContact: "Kontak",
  navAbout: "Tentang Kami",
  navBlog: "Blog",
  navCta: "Konsultasi Gratis",
  navTagline: "The Polymathic Problem Solver",
  // Hero
  heroTitle1: "Kompleksitas memiliki struktur.",
  heroTitleGold: "Solusi memiliki jalur.",
  heroSub:
    "GConsultant menyatukan strategi, sistem bisnis, dan teknologi untuk mengubah tantangan kompleks menjadi solusi yang jelas, praktis, dan terukur — dari 500+ perizinan & legalitas usaha hingga arsitektur sistem bisnis UMEA™ di 38 provinsi Indonesia.",
  heroCta1: "Jelajahi Pendekatan Kami",
  heroCta2: "Konsultasi Gratis via WhatsApp",
  // Approach strip (DIAGNOSE / ARCHITECT / EXECUTE)
  appSectionLabel: "Pendekatan Kami",
  app1Title: "Temukan masalah sejatinya.",
  app1Desc: "Pisahkan gejala dari penyebab, asumsi, dan kendala.",
  app2Title: "Satukan sistemnya.",
  app2Desc: "Petakan strategi, orang, proses, teknologi, dan risiko.",
  app3Title: "Buat kemajuan terlihat.",
  app3Desc: "Ubah rancangan menjadi pekerjaan terprioritas dan hasil yang terukur.",
  heroStat1: "Jenis Perizinan",
  heroStat2: "Provinsi Terjangkau",
  heroStat3: "Tahun Pengalaman",
  heroStat4: "Tingkat Keberhasilan",
  heroIso: "Sistem Manajemen Mutu ISO 9001:2015",
  heroScroll: "Gulir untuk menjelajah",
  // Marquee
  marquee1: "OSS RBA",
  marquee2: "Kemenkumham RI",
  marquee3: "BPOM",
  marquee4: "SNI BSN",
  marquee5: "Halal BPJPH",
  marquee6: "BKPM",
  marquee7: "ISO 9001:2015",
  marquee8: "BNSP",
  marquee9: "38 Provinsi",
  marquee10: "Kepatuhan Penuh",
  marquee11: "46 Dewan Pakar Lintas Bidang",
  marquee12: "6.900 Tahun Pengalaman Gabungan",
  // Stats
  statsTitle: "Kepercayaan yang Dibangun Bertahun-tahun",
  // Why
  whyKicker: "Mengapa GConsultant",
  whyTitle: "Alasan Klien Tidak Pernah Ragu",
  whySub:
    "Kami membangun kepercayaan lewat legalitas yang benar, proses yang transparan, dan standar mutu internasional.",
  why1: "Akar Mic Kinsey Sejak 2009",
  why1d:
    "Metodologi konsultasi kelas dunia yang dipelajari langsung di perusahaan konsultan ternama dunia Mic Kinsey sejak 2009.",
  why2: "Legal 100% Resmi",
  why2d:
    "Setiap dokumen diterbitkan lewat jalur resmi pemerintah — OSS RBA, Kemenkumham, BPOM, BSN, BPJPH. Tanpa jalan pintas berisiko.",
  why3: "Terlengkap di Asia",
  why3d:
    "500+ jenis perizinan lintas sektor: usaha, lingkungan, konstruksi, pangan, kesehatan, pariwisata, pertambangan, hingga investasi asing.",
  why4: "38 Provinsi Indonesia",
  why4d:
    "Jaringan ahli daerah di seluruh 38 provinsi — dari Aceh sampai Papua Pegunungan, termasuk provinsi pemekaran baru.",
  why5: "Tersertifikasi ISO 9001:2015",
  why5d:
    "Proses kerja kami diaudit dan disertifikasi ISO 9001:2015 — konsistensi mutu pada setiap berkas klien.",
  why6: "Transparan & Bergaransi",
  why6d:
    "Kontrak jelas, progres terpantau, dan garansi proses ulang tanpa biaya tambahan bila penolakan bukan karena dokumen klien.",
  // Services
  svcKicker: "Katalog Layanan",
  svcTitle: "500+ Perizinan, Satu Pintu",
  svcSub:
    "Telusuri katalog layanan kami. Setiap layanan memiliki halaman detail lengkap: manfaat, persyaratan, proses, estimasi biaya, dan FAQ.",
  svcSearch: "Cari layanan… mis. NIB, BPOM, SNI, PMA",
  svcAll: "Semua Kategori",
  svcView: "Lihat Detail",
  svcDuration: "Estimasi",
  svcFrom: "Mulai",
  svcCount: "layanan halaman detail SEO penuh",
  svcEmpty: "Tidak ada layanan yang cocok dengan pencarian Anda.",
  // Process
  procKicker: "Alur Kerja",
  procTitle: "5 Langkah Menuju Legalitas",
  procSub: "Proses baku tersertifikasi ISO 9001:2015 — Anda selalu tahu posisi berkas Anda.",
  proc1: "Konsultasi Gratis",
  proc1d:
    "Ceritakan rencana bisnis Anda via WhatsApp. Tim kami memetakan perizinan yang wajib dan opsional.",
  proc2: "Analisis & Penawaran",
  proc2d:
    "Kami kirim analisis kebutuhan, rincian biaya transparan, dan estimasi waktu tanpa biaya tersembunyi.",
  proc3: "Kontrak & Dokumen",
  proc3d:
    "Setuju? Kontrak resmi ditandatangani, pembayaran ke rekening resmi, lalu kami mulai menyusun dokumen.",
  proc4: "Pengurusan Penuh",
  proc4d:
    "Tim kami mengurus seluruh proses ke instansi. Anda hanya perlu menandatangani saat diminta. Progres dilaporkan rutin.",
  proc5: "Penyerahan & Garansi",
  proc5d:
    "Dokumen legal diserahkan lengkap. Bila terjadi penolakan bukan karena kelalaian klien, kami proses ulang gratis.",
  // Provinces
  provKicker: "Cakupan Nasional",
  provTitle: "Melayani 38 Provinsi Indonesia",
  provSub:
    "Dari Sabang sampai Jayapura — termasuk 4 provinsi pemekaran Papua (Papua Selatan, Papua Tengah, Papua Pegunungan, Papua Barat Daya). Tim ahli lokal kami siap menangani regulasi khusus tiap daerah.",
  provCount: "provinsi terjangkau penuh",
  // Founder
  fouKicker: "Tentang Pendiri",
  fouTitle: "Gugun Gunara",
  fouRole: "Pendiri & Direktur Utama",
  fouP1:
    "Perjalanan Gugun Gunara di dunia konsultansi dimulai pada tahun 2009 di Mic Kinsey — perusahaan konsultan ternama dunia. Selama lebih dari satu dekade, ia mendalami standar penelitian, metodologi, dan disiplin layanan kelas internasional yang menjadi fondasi DNA GConsultant.",
  fouP2:
    "Pada tahun 2024, visi tersebut dilembagakan: GConsultant resmi berbadan usaha di Kota Tasikmalaya dengan modal dasar Rp5.000.000.000, terdaftar di Kemenkumham RI (AHU-038293.AH.01.30.Tahun 2024). Dengan sistem mutu tersertifikasi ISO 9001:2015, kami membawa standar konsultan global ke seluruh 38 provinsi Indonesia.",
  fouP3:
    "Misi kami sederhana namun ambisius: menjadikan GConsultant pusat perizinan terlengkap di Asia, tempat setiap pelaku usaha — dari UMKM hingga PMA — melegalkan bisnisnya dengan tenang, cepat, dan 100% resmi.",
  fouChip1: "Dekade Pengalaman",
  fouChip2: "Modal Dasar Rp5 M",
  fouChip3: "ISO 9001:2015",
  fouChip4: "Visi #1 Asia Tenggara",
  fouPrinciples: "Empat Prinsip Pendiri",
  fouPrin1: "Integritas Tanpa Kompromi",
  fouPrin1d: "Tidak ada jalan pintas ilegal. Legalitas harus benar-benar bersih.",
  fouPrin2: "Presisi ala Mic Kinsey",
  fouPrin2d: "Setiap berkas diteliti dua kali sebelum masuk ke instansi.",
  fouPrin3: "Klien adalah Partner",
  fouPrin3d: "Kami sukses ketika bisnis klien resmi berjalan dan bertumbuh.",
  fouPrin4: "Edukasi Membangun Negeri",
  fouPrin4d: "Kami berbagi pengetahuan agar Indonesia makin taat regulasi.",
  fouQuote:
    "“Legalitas bukan biaya, melainkan fondasi keberanian berbisnis besar.”",
  fouPhotoAlt: "Foto Gugun Gunara — Pendiri & Direktur Utama GConsultant",
  // BCA / Official account
  bcaKicker: "Pembayaran Resmi",
  bcaTitle: "Satu-satunya Rekening Resmi",
  bcaSub:
    "Seluruh pembayaran layanan GConsultant HANYA ke rekening di bawah ini. Kami tidak pernah memakai rekening pribadi lain, rekening perantara, atau rekening atas nama siapa pun selain pendiri kami.",
  bcaBank: "BANK BCA",
  bcaNumber: "Nomor Rekening",
  bcaHolder: "Atas Nama",
  bcaCopy: "Salin Nomor",
  bcaCopied: "Tersalin!",
  bcaWarningTitle: "Waspadai Penipuan!",
  bcaWarning:
    "GConsultant TIDAK memiliki rekening lain selain BCA 0860742187 a.n. Gugun Gunara. Bila ada pihak yang meminta transfer ke rekening berbeda dengan mengatasnamakan kami, tolak dan laporkan segera ke kontak resmi kami.",
  bcaVerify: "Verifikasi langsung via WhatsApp resmi:",
  // Testimonials
  tesKicker: "Testimoni",
  tesTitle: "Kata Mereka yang Sudah Legal",
  // FAQ
  faqKicker: "Pertanyaan Umum",
  faqTitle: "Segala yang Ingin Anda Tanyakan",
  // CTA
  ctaTitle: "Siap Melegalkan Bisnis Anda Hari Ini?",
  ctaSub:
    "Konsultasi gratis, tanpa komitmen. Ceritakan rencana Anda — tim kami menjawab cepat di jam kerja.",
  ctaWa: "Chat WhatsApp Sekarang",
  ctaEmail: "Kirim Email",
  // Contact
  conKicker: "Kontak Resmi",
  conTitle: "Kunjungi atau Hubungi Kami",
  conAddress: "Alamat Kantor",
  conAddrHq: "Kantor Pusat — Tasikmalaya",
  conAddrJkt: "Kantor Perwakilan — Jakarta",
  conWa: "WhatsApp / Telepon",
  conEmail: "Email Resmi",
  conFormTitle: "Kirim Permintaan Konsultasi",
  conName: "Nama Lengkap",
  conNamePh: "mis. Budi Santoso",
  conPhone: "Nomor WhatsApp",
  conPhonePh: "mis. 0812xxxxxxx",
  conService: "Layanan yang Dibutuhkan",
  conServicePh: "Pilih layanan…",
  conMsg: "Ceritakan kebutuhan Anda",
  conMsgPh: "mis. Saya ingin mendirikan PT untuk usaha manufaktur di Bekasi…",
  conSubmit: "Kirim via WhatsApp",
  conSending: "Menyiapkan WhatsApp…",
  conServiceOpt: "Opsional — boleh dipilih nanti",
  conErrName: "Mohon isi nama lengkap Anda.",
  conErrPhone: "Nomor WhatsApp tidak valid (8–16 digit).",
  conErrMsg: "Ceritakan singkat kebutuhan Anda.",
  conSuccess: "WhatsApp terbuka di tab baru — kami menanti pesan Anda!",
  conSentBtn: "WhatsApp Terbuka",
  conGroupSite: "Portal Grup",
  // Footer
  footDesc:
    "GConsultant — The Polymathic Problem Solver. Menyatukan ilmu, menata kompleksitas, mewujudkan solusi: 500+ perizinan & legalitas usaha, arsitektur sistem bisnis UMEA™, ISO 9001:2015, melayani 38 provinsi Indonesia.",
  footServices: "Layanan Populer",
  footCategories: "Kategori",
  footContact: "Kontak",
  footLegal:
    "Berbadan usaha resmi terdaftar Kemenkumham RI (AHU-038293.AH.01.30.Tahun 2024)",
  footRights: "© 2026 GConsultant. Seluruh hak cipta dilindungi.",
  footDisclaimer:
    "Website resmi GConsultant. Pembayaran hanya ke rekening BCA 0860742187 a.n. Gugun Gunara.",
  // Service page
  spBenefits: "Manfaat untuk Anda",
  spReq: "Persyaratan Umum",
  spSteps: "Proses Pengurusan",
  spFaq: "Pertanyaan Seputar Layanan",
  spDuration: "Estimasi Waktu",
  spPrice: "Biaya Mulai",
  spDiscuss: "Diskusikan Layanan Ini",
  spArea: "Area Layanan",
  spAreaD: "Seluruh 38 provinsi Indonesia — offline & online.",
  spTrust: "Pembayaran aman hanya ke rekening resmi BCA 0860742187 a.n. Gugun Gunara.",
  spRelated: "Layanan Terkait",
  spBreadcrumbHome: "Beranda",
  spBreadcrumbServices: "Layanan",
  spGuarantee: "Garansi proses ulang",
  spOfficial: "Jalur 100% resmi",
  spSupport: "Progres dilaporkan rutin",
  // Floating WhatsApp
  waFloatAria: "Chat WhatsApp resmi GConsultant",
  waFloatLabel: "Chat WhatsApp",
  waFloatSub: "Respon Cepat • Resmi",
  // Dewan Pakar
  cnlKicker: "Dewan Pakar Global",
  cnlTitle: "Diperkuat 46 Dewan Pakar Lintas Bidang",
  cnlSub:
    "Setiap bidang dikurasi pakar yang mewarisi praktik terbaik 150 tahun — keahlian berlapis lintas disiplin, hasil yang teruji kelas dunia.",
  cnl1V: "46",
  cnl1L: "Dewan Pakar Lintas Bidang",
  cnl2V: "150 Tahun",
  cnl2L: "Warisan Praktik per Bidang",
  cnl3V: "6.900",
  cnl3L: "Tahun Pengalaman Gabungan",
  cnl4V: "ISO 9001",
  cnl4L: "Standar Mutu Terjamin",
  // Language
  langLabel: "Bahasa",
  // Halaman mandiri (PageHero)
  pgLayananKicker: "Pusat Perizinan Terlengkap",
  pgLayananTitle: "546 Layanan Perizinan & Legalitas Usaha",
  pgLayananSub:
    "Dari NIB hingga AMDAL — 546 layanan dalam katalog terpadu: 46 halaman panduan penuh + 500 layanan katalog berharga transparan. Satu pintu, tersertifikasi ISO 9001:2015.",
  // Katalog lengkap (500 layanan PusatPerizinan)
  katKicker: "Katalog Lengkap",
  katTitle: "546 Layanan, Harga Transparan",
  katSub: "Jelajahi katalog terpadu 546 layanan perizinan & legalitas — lengkap dengan harga, diskon aktif, dan estimasi hemat langsung di halaman detail.",
  katSearch: "Cari layanan / kode (mis. PT, halal, AMDAL, BU-PT-001)…",
  katAll: "Semua Kategori",
  katFeatured: "Unggulan (Panduan Penuh)",
  katEmpty: "Tidak ada layanan yang cocok. Coba kata kunci atau kode lain.",
  katMore: "Tampilkan lebih banyak",
  katPriceNow: "Harga",
  katWas: "Harga normal",
  katSave: "Hemat",
  katDetail: "Lihat detail",
  katCatNote: "Deskripsi resmi layanan ditampilkan dalam Bahasa Indonesia (istilah legal).",
  katScope: "Lingkup Layanan",
  katProcess: "Cara Pengurusan",
  katDocs: "Dokumen yang Disiapkan",
  katRelated: "Layanan Sejenis di Katalog",
  pgWhyKicker: "Keunggulan Kompetitif",
  pgWhyTitle: "Mengapa Bisnis Memilih GConsultant",
  pgWhySub:
    "Warisan praktik terbaik konsultan kelas dunia sejak 2009, 46 Dewan Pakar lintas bidang, dan garansi tertulis di setiap kontrak.",
  pgProcKicker: "Alur Kerja Baku",
  pgProcTitle: "5 Langkah Menuju Legalitas Usaha Anda",
  pgProcSub:
    "Proses baku tersertifikasi ISO 9001:2015 — transparan dari konsultasi pertama sampai dokumen di tangan Anda.",
  pgProvKicker: "Cakupan Nasional",
  pgProvTitle: "Jangkauan Layanan 38 Provinsi Indonesia",
  pgProvSub:
    "Dari Sabang sampai Jayapura — tim ahli lokal kami memahami regulasi khusus setiap daerah, online maupun pendampingan fisik.",
  pgFounderKicker: "Profil Pemimpin",
  pgFounderTitle: "Gugun Gunara — Founder & CEO",
  pgFounderSub:
    "Di balik GConsultant: pengalaman 15+ tahun berakar dari praktik konsultan ternama dunia, dengan visi pusat perizinan terlengkap di Asia.",
  pgFaqKicker: "Pusat Bantuan",
  pgFaqTitle: "Pertanyaan yang Sering Diajukan",
  pgFaqSub:
    "Jawaban jujur atas 8 pertanyaan terpenting tentang legalitas, pembayaran, garansi, dan cakupan layanan kami.",
  pgContactKicker: "Hubungi Kami",
  pgContactTitle: "Konsultasi Gratis — Balasan Cepat",
  pgContactSub:
    "Kantor pusat Tasikmalaya & perwakilan Jakarta (Indonesia Stock Exchange Tower). WhatsApp resmi aktif Senin–Sabtu, 08.00–17.00 WIB.",
  // Tentang Kami
  pgAboutKicker: "Profil Perusahaan",
  pgAboutTitle: "Tentang GConsultant",
  pgAboutSub:
    "Perusahaan konsultan perizinan Indonesia dengan akar praktik konsultan ternama dunia sejak 2009 — kini melayani 38 provinsi dengan 500+ jenis perizinan dan sistem mutu ISO 9001:2015.",
  aboutStoryKicker: "Cerita Kami",
  aboutStoryTitle: "Dari Meja Konsultan Dunia Menuju 38 Provinsi Indonesia",
  aboutP1:
    "GConsultant lahir dari pengalaman panjang di Mic Kinsey — perusahaan konsultan ternama dunia — yang dimulai pada tahun 2009. Lebih dari satu dekade, standar riset, disiplin metodologi, dan budaya layanan kelas internasional itu dipelajari langsung dari sumbernya, hingga menjadi fondasi DNA perusahaan.",
  aboutP2:
    "Pada 11 Juli 2024, visi itu dilembagakan menjadi badan usaha resmi: GConsultant berdiri di Kota Tasikmalaya dengan modal dasar Rp5.000.000.000 dan pengesahan Kemenkumham RI (AHU-038293.AH.01.30.Tahun 2024). Sistem manajemen mutu kami tersertifikasi ISO 9001:2015 — konsistensi mutu pada setiap berkas klien.",
  aboutP3:
    "Hari ini, dengan dukungan 46 Dewan Pakar lintas bidang yang mewarisi praktik terbaik 150 tahun per bidang, kami menjadi satu pintu bagi pelaku usaha — dari UMKM hingga PMA — untuk melegalkan bisnis dengan tenang, cepat, dan 100% resmi.",
  aboutVisionKicker: "Visi",
  aboutVisionD:
    "Menjadi pusat perizinan terlengkap di Asia — rumah pertama yang terpikir oleh setiap pelaku usaha ketika berbicara tentang legalitas bisnis.",
  aboutMissionKicker: "Misi",
  aboutMission1:
    "Menyediakan 500+ jenis perizinan dalam satu pintu layanan dengan standar mutu internasional.",
  aboutMission2:
    "Menjaga integritas 100%: seluruh proses melalui jalur resmi pemerintah, tanpa jalan pintas.",
  aboutMission3:
    "Mendidik pasar melalui konten dan konsultasi agar Indonesia makin taat regulasi.",
  aboutMission4:
    "Membangun jaringan ahli daerah di seluruh 38 provinsi, termasuk provinsi pemekaran baru.",
  aboutValuesKicker: "Nilai Perusahaan",
  aboutValuesTitle: "Empat Nilai yang Kami Pegang",
  aboutVal1: "Legalitas Tanpa Kompromi",
  aboutVal1d:
    "Kami hanya menempuh jalur resmi. Tidak ada dokumen abal-abal, tidak ada jalan pintas berisiko.",
  aboutVal2: "Presisi Kelas Dunia",
  aboutVal2d:
    "Setiap berkas diperiksa dua kali sebelum masuk ke instansi — warisan disiplin Mic Kinsey.",
  aboutVal3: "Transparansi Radikal",
  aboutVal3d:
    "Biaya jelas di depan, progres dilaporkan rutin, dan kontrak bergaransi tertulis.",
  aboutVal4: "Edukasi untuk Indonesia",
  aboutVal4d:
    "Kami berbagi pengetahuan lewat blog, konsultasi gratis, dan edukasi publik.",
  aboutTimelineKicker: "Perjalanan Kami",
  aboutTimelineTitle: "Milestone yang Membentuk Hari Ini",
  aboutM1T: "Pengalaman konsultansi dimulai di Mic Kinsey — perusahaan konsultan ternama dunia.",
  aboutM2T: "GConsultant resmi berbadan usaha: AHU-038293.AH.01.30.Tahun 2024, modal dasar Rp5 M.",
  aboutM3T: "Kantor Perwakilan Jakarta dibuka di Indonesia Stock Exchange Tower 1, Sudirman — pusat bisnis nasional.",
  aboutM4T: "46 layanan halaman detail penuh, 38 provinsi terjangkau, dan sistem mutu ISO 9001:2015 berjalan penuh.",
  aboutLegalKicker: "Legalitas",
  aboutLegalTitle: "Data Resmi Perusahaan",
  aboutLegalHeritage: "Warisan Praktik",
  aboutLegalFounded: "Berbadan Usaha Sejak",
  aboutLegalAhu: "Pengesahan Kemenkumham",
  aboutLegalCapital: "Modal Dasar",
  aboutLegalIso: "Sistem Manajemen Mutu",
  aboutLegalHq: "Kantor Pusat",
  aboutLegalJkt: "Kantor Perwakilan",
  aboutQuote:
    "Kami tidak menjual izin — kami membangun fondasi legal di mana keberanian berbisnis tumbuh.",
  aboutFounderLink: "Lihat Profil Pendiri",
  aboutBlogLink: "Baca Insight Terbaru",
  // Blog
  pgBlogKicker: "Insight & Wawasan",
  pgBlogTitle: "Blog Perizinan & Legalitas Bisnis",
  pgBlogSub:
    "Panduan praktis dari praktisi: perizinan, badan usaha, PMA, BPOM, ISO, dan strategi legalitas UMKM — ditulis oleh tim yang mengurusnya setiap hari.",
  blogAll: "Semua",
  blogFeatured: "Artikel Utama",
  blogReadMore: "Baca Artikel",
  blogMinRead: "menit baca",
  blogArticles: "artikel",
  blogEmpty: "Tidak ada artikel dalam kategori ini.",
  blogRelated: "Artikel Terkait",
  blogBack: "Kembali ke Blog",
  artPublished: "Diterbitkan",
  artUpdated: "Diperbarui",
  artBy: "oleh",
  artShare: "Bagikan",
  artAuthorBio:
    "Pendiri GConsultant dengan pengalaman konsultansi berakar dari Mic Kinsey sejak 2009. Memimpin 46 Dewan Pakar lintas bidang untuk melegalkan bisnis di seluruh 38 provinsi Indonesia.",
  artCtaTitle: "Butuh Bantuan Mengurus Legalitas Ini?",
  artCtaSub:
    "Konsultasi gratis 100% — tim kami memetakan kebutuhan perizinan Anda dan memberi estimasi biaya-waktu yang jujur.",
  // Nav & Footer — GOD MODE v2
  navMetodologi: "Metodologi",
  navAsesmen: "Asesmen UMEA",
  footPrivacy: "Kebijakan Privasi",
  footTerms: "Syarat & Ketentuan",
  footVersionLabel: "Versi",
  // Halaman Metodologi UMEA
  pgMetoKicker: "Hukum Minimum Usaha™",
  pgMetoTitle: "UMEA™ — Universal Minimum Enterprise Architecture",
  pgMetoSub:
    "Metodologi milik GConsultant yang menjawab satu pertanyaan: berapa fungsi kritis yang harus selalu hidup agar usaha Anda tidak runtuh — berapa orang, berapa dokumen, dan tingkat mana yang wajib Anda capai.",
  metoLawKicker: "3 Hukum Besar",
  metoLawTitle: "Fondasi yang Tidak Bisa Ditawar",
  metoLawSub:
    "Bukan teori dari rak buku — tiga hukum inilah yang kami audit di setiap klien sebelum satu dokumen pun dibuat.",
  metoLevelsKicker: "6 Tingkat Organisasi",
  metoLevelsTitle: "Tangga Kedewasaan UMEA-03 sampai UMEA-21",
  metoLevelsSub:
    "Jumlah orang boleh kecil. Jumlah fungsi kritis tidak boleh hilang. Pilih tingkat yang cocok dengan usaha Anda hari ini — naik tingkat tanpa membongkar sistem dari nol.",
  metoLevelPeople: "Orang",
  metoLevelBest: "Cocok untuk",
  metoLevelDocs: "Paket dokumen",
  metoLevelProfLabel: "Bahasa profesional",
  metoLevelAwamLabel: "Bahasa sehari-hari",
  metoFuncKicker: "21 Fungsi Kritis",
  metoFuncTitle: "Function-First, Bukan Title-First",
  metoFuncSub:
    "Jabatan boleh berganti nama sepanjang zaman — fungsi Direction, Value Creation, Market, Control, People, Intelligence, dan Resilience akan tetap ada. Satu orang boleh memegang banyak fungsi; satu fungsi tidak boleh tanpa pemilik.",
  metoFuncNo: "No",
  metoFuncRole: "Wujud hari ini",
  metoFuncAwamLabel: "Bahasa sehari-hari",
  metoDocsKicker: "5 Tingkat Dokumen",
  metoDocsTitle: "Tangga Dokumentasi D-10 sampai D-165",
  metoDocsSub:
    "Prinsip Minimum Necessary Architecture: berikan organisasi hanya kompleksitas yang ia butuhkan. Toko tidak dibuat seperti holding; holding tidak diberi paket 10 dokumen.",
  metoDocsFor: "Untuk siapa",
  metoUmiKicker: "UMEA Maturity Index™",
  metoUmiTitle: "Ukur Sebelum Membangun",
  metoUmiSub:
    "Organisasi tidak dinilai dari banyaknya orang, melainkan dari banyaknya fungsi kritis yang tetap hidup terus-menerus. Skor 0–100, delapan band kematangan, satu rencana perbaikan.",
  metoCtaTitle: "Ingin Tahu Tingkat UMEA Usaha Anda?",
  metoCtaSub:
    "Lakukan asesmen mandiri 2 menit — mesin kami menghitung Maturity Index Anda dan merekomendasikan tingkat organisasi serta paket dokumen yang tepat.",
  metoCtaBtn: "Mulai Asesmen Gratis",
  metoDisclaimer:
    "UMEA™, Hukum Minimum Usaha™, UMEA Master Matrix™, dan UMEA Maturity Index™ adalah metodologi milik GConsultant — dilindungi sebagai merek, hak cipta, dan rahasia dagang. Pemakaian tanpa izin tertulis akan ditindak hukum.",
  // Halaman Asesmen
  pgAsmKicker: "UMEA Maturity Index™",
  pgAsmTitle: "Asesmen Kematangan Usaha",
  pgAsmSub:
    "12 pertanyaan • 2 menit • hasil langsung: skor UMI 0–100, tingkat UMEA, titik terlemah, dan paket dokumen yang direkomendasikan.",
  asmIntro:
    "Jawab jujur sesuai kondisi nyata hari ini — bukan yang ideal. Semakin jujur, semakin akurat rencana perbaikannya.",
  asmPeopleLabel: "Berapa orang yang bekerja di usaha Anda (termasuk pemilik)?",
  asmPeopleHint: "Masukkan angka, misal 3",
  asmStart: "Mulai Asesmen",
  asmQuestion: "Pertanyaan",
  asmOf: "dari",
  asmPrev: "Kembali",
  asmNext: "Lanjut",
  asmSeeResult: "Lihat Hasil",
  asmResultTitle: "Hasil Asesmen UMEA™ Anda",
  asmScoreLabel: "Skor UMI",
  asmBandLabel: "Band kematangan",
  asmLevelLabel: "Tingkat UMEA Anda",
  asmWeakLabel: "3 Titik Terlemah — prioritaskan ini",
  asmStrongLabel: "Kekuatan Anda",
  asmDocsLabel: "Paket dokumen yang direkomendasikan",
  asmWaTitle: "Konsultasikan Hasil Ini Gratis",
  asmWaSub:
    "Kirim hasil asesmen Anda ke tim GConsultant via WhatsApp — kami bantu susun rencana naik tingkat + daftar dokumen yang wajib disiapkan.",
  asmWaBtn: "Kirim Hasil via WhatsApp",
  asmRestart: "Ulangi Asesmen",
  asmPrivacyNote:
    "Asesmen berjalan sepenuhnya di perangkat Anda — tidak ada jawaban yang dikirim ke server.",
  // 404
  nfTitle: "Halaman Tidak Ditemukan",
  nfSub:
    "Halaman yang Anda cari mungkin sudah dipindah, dihapus, atau alamatnya salah tulis.",
  nfCta: "Kembali ke Beranda",
  nfServices: "Lihat 46 Layanan",
  // Legal
  pgPrivTitle: "Kebijakan Privasi",
  pgPrivSub:
    "Bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda — selaras UU PDP No. 27 Tahun 2022 dan siap GDPR.",
  pgTermsTitle: "Syarat & Ketentuan",
  pgTermsSub:
    "Aturan penggunaan website dan layanan GConsultant — baca sebelum menggunakan layanan kami.",
  legalUpdated: "Terakhir diperbarui",
  // Piagam 2125
  chartKicker: "Piagam 2125",
  chartTitle: "Dilihat dari Seratus Tahun ke Depan",
};

export type UIKey = keyof typeof UI_ID;

const UI_EN: Record<UIKey, string> = {
  navHome: "Home",
  navServices: "Services",
  navWhy: "Why Us",
  navProcess: "Process",
  navProvinces: "38 Provinces",
  navFounder: "Founder",
  navFaq: "FAQ",
  navContact: "Contact",
  navAbout: "About Us",
  navBlog: "Blog",
  navCta: "Free Consultation",
  navTagline: "The Polymathic Problem Solver",
  heroTitle1: "Complexity has a structure.",
  heroTitleGold: "Solutions have a path.",
  heroSub:
    "GConsultant connects strategy, business systems and technology to turn complex challenges into clear, practical and measurable solutions — from 500+ licensing & legalization services to UMEA™ business systems architecture across 38 provinces of Indonesia.",
  heroCta1: "Explore Our Approach",
  heroCta2: "Free Consultation via WhatsApp",
  // Approach strip (DIAGNOSE / ARCHITECT / EXECUTE)
  appSectionLabel: "Our Approach",
  app1Title: "Find the real problem.",
  app1Desc: "Separate symptoms from causes, assumptions and constraints.",
  app2Title: "Connect the system.",
  app2Desc: "Map strategy, people, process, technology and risk.",
  app3Title: "Make progress visible.",
  app3Desc: "Turn the design into prioritized work and measurable outcomes.",
  heroStat1: "License Types",
  heroStat2: "Provinces Covered",
  heroStat3: "Years of Experience",
  heroStat4: "Success Rate",
  heroIso: "ISO 9001:2015 Quality Management System",
  heroScroll: "Scroll to explore",
  marquee1: "OSS RBA",
  marquee2: "Kemenkumham RI",
  marquee3: "BPOM",
  marquee4: "SNI BSN",
  marquee5: "Halal BPJPH",
  marquee6: "BKPM",
  marquee7: "ISO 9001:2015",
  marquee8: "BNSP",
  marquee9: "38 Provinces",
  marquee10: "Full Compliance",
  marquee11: "46 Cross-Disciplinary Expert Councils",
  marquee12: "6,900 Years of Combined Expertise",
  statsTitle: "Trust Built Over the Years",
  whyKicker: "Why GConsultant",
  whyTitle: "Why Clients Never Hesitate",
  whySub:
    "We build trust through genuine legality, transparent processes, and international quality standards.",
  why1: "Mic Kinsey Roots Since 2009",
  why1d:
    "World-class consulting methodology learned directly at the renowned global firm Mic Kinsey since 2009.",
  why2: "100% Official Legal Path",
  why2d:
    "Every document is issued through official government channels — OSS RBA, Kemenkumham, BPOM, BSN, BPJPH. No risky shortcuts.",
  why3: "Most Complete in Asia",
  why3d:
    "500+ license types across sectors: business, environment, construction, food, health, tourism, mining, and foreign investment.",
  why4: "38 Provinces of Indonesia",
  why4d:
    "Local expert network across all 38 provinces — from Aceh to Papua Pegunungan, including the newest split provinces.",
  why5: "ISO 9001:2015 Certified",
  why5d:
    "Our workflow is audited and certified ISO 9001:2015 — consistent quality on every client file.",
  why6: "Transparent & Guaranteed",
  why6d:
    "Clear contracts, monitored progress, and a free reprocessing guarantee if rejection is not caused by client documents.",
  svcKicker: "Service Catalog",
  svcTitle: "500+ Licenses, One Door",
  svcSub:
    "Browse our catalog. Every service has a fully SEO-optimized detail page: benefits, requirements, process, estimated cost, and FAQ.",
  svcSearch: "Search services… e.g. NIB, BPOM, SNI, PMA",
  svcAll: "All Categories",
  svcView: "View Details",
  svcDuration: "Duration",
  svcFrom: "From",
  svcCount: "services with full-SEO detail pages",
  svcEmpty: "No services match your search.",
  procKicker: "Workflow",
  procTitle: "5 Steps to Legality",
  procSub:
    "ISO 9001:2015 certified standard process — you always know where your file stands.",
  proc1: "Free Consultation",
  proc1d:
    "Tell us your business plan via WhatsApp. Our team maps the mandatory and optional licenses.",
  proc2: "Analysis & Offer",
  proc2d:
    "We send a needs analysis, transparent cost breakdown, and timeline — no hidden fees.",
  proc3: "Contract & Documents",
  proc3d:
    "Agree? Official contract signed, payment to the official account, then we start preparing documents.",
  proc4: "Full Processing",
  proc4d:
    "Our team handles everything with the authorities. You only sign when needed. Progress reported regularly.",
  proc5: "Handover & Guarantee",
  proc5d:
    "Legal documents handed over complete. If rejection is not caused by client negligence, we reprocess for free.",
  provKicker: "National Coverage",
  provTitle: "Serving All 38 Provinces of Indonesia",
  provSub:
    "From Sabang to Jayapura — including the 4 new Papua provinces (Papua Selatan, Papua Tengah, Papua Pegunungan, Papua Barat Daya). Our local experts are ready for each region's specific regulations.",
  provCount: "provinces fully covered",
  fouKicker: "About the Founder",
  fouTitle: "Gugun Gunara",
  fouRole: "Founder & Chief Executive Officer",
  fouP1:
    "Gugun Gunara's journey in consulting began in 2009 at Mic Kinsey — a world-renowned consulting firm. For over a decade he mastered international-grade research standards, methodology, and service discipline that became the DNA foundation of GConsultant.",
  fouP2:
    "In 2024, that vision was institutionalized: GConsultant officially became a legal entity in Kota Tasikmalaya with Rp5,000,000,000 authorized capital, registered with the Ministry of Law of the Republic of Indonesia (AHU-038293.AH.01.30.Tahun 2024). With an ISO 9001:2015 certified quality system, we bring global consulting standards to all 38 provinces of Indonesia.",
  fouP3:
    "Our mission is simple yet ambitious: to make GConsultant the most complete licensing center in Asia — where every entrepreneur, from SMEs to foreign investors, legalizes their business calmly, quickly, and 100% officially.",
  fouChip1: "Decade of Experience",
  fouChip2: "Rp5B Authorized Capital",
  fouChip3: "ISO 9001:2015",
  fouChip4: "Vision: #1 in Southeast Asia",
  fouPrinciples: "The Founder's Four Principles",
  fouPrin1: "Integrity Without Compromise",
  fouPrin1d: "No illegal shortcuts. Legality must be genuinely clean.",
  fouPrin2: "Mic Kinsey Precision",
  fouPrin2d: "Every file is double-checked before entering government offices.",
  fouPrin3: "Clients are Partners",
  fouPrin3d: "We succeed when our clients' businesses run legally and grow.",
  fouPrin4: "Educating the Nation",
  fouPrin4d: "We share knowledge so Indonesia grows more compliant.",
  fouQuote:
    "“Legality is not a cost — it is the foundation of courage to build a big business.”",
  fouPhotoAlt: "Photo of Gugun Gunara — Founder & CEO of GConsultant",
  bcaKicker: "Official Payment",
  bcaTitle: "The Only Official Bank Account",
  bcaSub:
    "All payments for GConsultant services go ONLY to the account below. We never use other personal accounts, intermediary accounts, or accounts under any name other than our founder.",
  bcaBank: "BANK BCA",
  bcaNumber: "Account Number",
  bcaHolder: "Account Holder",
  bcaCopy: "Copy Number",
  bcaCopied: "Copied!",
  bcaWarningTitle: "Beware of Fraud!",
  bcaWarning:
    "GConsultant does NOT have any other bank account besides BCA 0860742187 under the name Gugun Gunara. If anyone asks you to transfer to a different account claiming to be us, refuse and report immediately to our official contact.",
  bcaVerify: "Verify directly via our official WhatsApp:",
  tesKicker: "Testimonials",
  tesTitle: "What Our Legalized Clients Say",
  faqKicker: "Frequently Asked Questions",
  faqTitle: "Everything You Want to Ask",
  ctaTitle: "Ready to Legalize Your Business Today?",
  ctaSub:
    "Free consultation, no commitment. Tell us your plan — our team replies fast during office hours.",
  ctaWa: "Chat on WhatsApp Now",
  ctaEmail: "Send an Email",
  conKicker: "Official Contact",
  conTitle: "Visit or Reach Us",
  conAddress: "Office Address",
  conAddrHq: "Head Office — Tasikmalaya",
  conAddrJkt: "Jakarta Representative Office",
  conWa: "WhatsApp / Phone",
  conEmail: "Official Email",
  conFormTitle: "Send a Consultation Request",
  conName: "Full Name",
  conNamePh: "e.g. Budi Santoso",
  conPhone: "WhatsApp Number",
  conPhonePh: "e.g. 0812xxxxxxx",
  conService: "Service Needed",
  conServicePh: "Choose a service…",
  conMsg: "Tell us your needs",
  conMsgPh: "e.g. I want to establish a PT for a manufacturing business in Bekasi…",
  conSubmit: "Send via WhatsApp",
  conSending: "Preparing WhatsApp…",
  conServiceOpt: "Optional — you can choose later",
  conErrName: "Please enter your full name.",
  conErrPhone: "Invalid WhatsApp number (8–16 digits).",
  conErrMsg: "Briefly tell us your needs.",
  conSuccess: "WhatsApp opened in a new tab — we await your message!",
  conSentBtn: "WhatsApp Opened",
  conGroupSite: "Group Portal",
  footDesc:
    "GConsultant — The Polymathic Problem Solver. Uniting knowledge, structuring complexity, delivering solutions: 500+ licensing & legalization services, UMEA™ business systems architecture, ISO 9001:2015, serving 38 provinces of Indonesia.",
  footServices: "Popular Services",
  footCategories: "Categories",
  footContact: "Contact",
  footLegal:
    "Officially registered entity at the Ministry of Law of the Republic of Indonesia (AHU-038293.AH.01.30.Tahun 2024)",
  footRights: "© 2026 GConsultant. All rights reserved.",
  footDisclaimer:
    "Official website of GConsultant. Payments only to BCA account 0860742187 under the name Gugun Gunara.",
  spBenefits: "Benefits for You",
  spReq: "General Requirements",
  spSteps: "Processing Steps",
  spFaq: "Questions About This Service",
  spDuration: "Estimated Time",
  spPrice: "Price From",
  spDiscuss: "Discuss This Service",
  spArea: "Service Area",
  spAreaD: "All 38 provinces of Indonesia — on-site & online.",
  spTrust:
    "Secure payment only to the official BCA account 0860742187 under the name Gugun Gunara.",
  spRelated: "Related Services",
  spBreadcrumbHome: "Home",
  spBreadcrumbServices: "Services",
  spGuarantee: "Reprocess guarantee",
  spOfficial: "100% official channel",
  spSupport: "Progress reported regularly",
  // Floating WhatsApp
  waFloatAria: "Official GConsultant WhatsApp chat",
  waFloatLabel: "Chat on WhatsApp",
  waFloatSub: "Fast Response • Official",
  // Expert Council
  cnlKicker: "Global Expert Council",
  cnlTitle: "Backed by 46 Cross-Disciplinary Expert Councils",
  cnlSub:
    "Every field is curated by experts inheriting 150 years of best practice — layered cross-disciplinary expertise, world-class proven results.",
  cnl1V: "46",
  cnl1L: "Cross-Disciplinary Expert Councils",
  cnl2V: "150 Years",
  cnl2L: "Practice Legacy per Field",
  cnl3V: "6,900",
  cnl3L: "Combined Years of Expertise",
  cnl4V: "ISO 9001",
  cnl4L: "Certified Quality Standard",
  langLabel: "Language",
  // Dedicated pages (PageHero)
  pgLayananKicker: "The Most Complete Licensing Center",
  pgLayananTitle: "546 Business Licensing & Legality Services",
  pgLayananSub:
    "From NIB to AMDAL — 546 services in one unified catalog: 46 full-guide pages + 500 catalog services with transparent pricing. One door, ISO 9001:2015 certified.",
  // Full catalog (500 PusatPerizinan services)
  katKicker: "Full Catalog",
  katTitle: "546 Services, Transparent Pricing",
  katSub: "Browse the unified catalog of 546 licensing & legality services — complete with prices, active discounts, and estimated savings right on each detail page.",
  katSearch: "Search services / codes (e.g. PT, halal, AMDAL, BU-PT-001)…",
  katAll: "All Categories",
  katFeatured: "Featured (Full Guides)",
  katEmpty: "No matching service. Try another keyword or code.",
  katMore: "Show more",
  katPriceNow: "Price",
  katWas: "Regular price",
  katSave: "Save",
  katDetail: "View details",
  katCatNote: "Official service descriptions are shown in Indonesian (legal terms).",
  katScope: "Service Scope",
  katProcess: "How It Works",
  katDocs: "Documents to Prepare",
  katRelated: "Related Catalog Services",
  pgWhyKicker: "Competitive Edge",
  pgWhyTitle: "Why Businesses Choose GConsultant",
  pgWhySub:
    "World-class consulting best practice heritage since 2009, 46 cross-disciplinary Expert Councils, and written guarantees in every contract.",
  pgProcKicker: "Standard Workflow",
  pgProcTitle: "5 Steps to Your Business Legality",
  pgProcSub:
    "ISO 9001:2015 certified process — transparent from first consultation until documents are in your hands.",
  pgProvKicker: "National Coverage",
  pgProvTitle: "Serving All 38 Provinces of Indonesia",
  pgProvSub:
    "From Sabang to Jayapura — our local expert teams understand each region's specific regulations, online or with on-site assistance.",
  pgFounderKicker: "Leadership Profile",
  pgFounderTitle: "Gugun Gunara — Founder & CEO",
  pgFounderSub:
    "Behind GConsultant: 15+ years of experience rooted in world-renowned consulting practice, with the vision of Asia's most complete licensing center.",
  pgFaqKicker: "Help Center",
  pgFaqTitle: "Frequently Asked Questions",
  pgFaqSub:
    "Honest answers to the 8 most important questions about legality, payment, guarantees, and our service coverage.",
  pgContactKicker: "Contact Us",
  pgContactTitle: "Free Consultation — Fast Response",
  pgContactSub:
    "Tasikmalaya headquarters & Jakarta representative office (Indonesia Stock Exchange Tower). Official WhatsApp active Monday–Saturday, 08.00–17.00 WIB.",
  // About Us
  pgAboutKicker: "Company Profile",
  pgAboutTitle: "About GConsultant",
  pgAboutSub:
    "An Indonesian licensing consultancy rooted in world-renowned consulting practice since 2009 — now serving 38 provinces with 500+ license types and an ISO 9001:2015 quality system.",
  aboutStoryKicker: "Our Story",
  aboutStoryTitle: "From the Desks of a World-Class Consultancy to All 38 Provinces",
  aboutP1:
    "GConsultant was born from a long journey at Mic Kinsey — a world-renowned consulting firm — that began in 2009. For over a decade, international-grade research standards, methodological discipline, and service culture were learned directly from the source, becoming the company's DNA foundation.",
  aboutP2:
    "On 11 July 2024, that vision was institutionalized into a legal entity: GConsultant was founded in Kota Tasikmalaya with Rp5,000,000,000 authorized capital and approval from the Ministry of Law of the Republic of Indonesia (AHU-038293.AH.01.30.Tahun 2024). Our quality management system is ISO 9001:2015 certified — consistent quality on every client file.",
  aboutP3:
    "Today, backed by 46 cross-disciplinary Expert Councils inheriting 150 years of best practice per field, we are the one door for every entrepreneur — from SMEs to PMA — to legalize their business calmly, quickly, and 100% officially.",
  aboutVisionKicker: "Vision",
  aboutVisionD:
    "To become the most complete licensing center in Asia — the first home every entrepreneur thinks of when it comes to business legality.",
  aboutMissionKicker: "Mission",
  aboutMission1:
    "Provide 500+ license types in one service door with international quality standards.",
  aboutMission2:
    "Maintain 100% integrity: every process through official government channels, no shortcuts.",
  aboutMission3:
    "Educate the market through content and consultations so Indonesia grows more compliant.",
  aboutMission4:
    "Build a local expert network across all 38 provinces, including the newest split provinces.",
  aboutValuesKicker: "Company Values",
  aboutValuesTitle: "The Four Values We Hold",
  aboutVal1: "Legality Without Compromise",
  aboutVal1d:
    "We only take official channels. No questionable documents, no risky shortcuts.",
  aboutVal2: "World-Class Precision",
  aboutVal2d:
    "Every file is double-checked before entering government offices — a Mic Kinsey discipline heritage.",
  aboutVal3: "Radical Transparency",
  aboutVal3d:
    "Costs clear upfront, progress reported regularly, and contracts with written guarantees.",
  aboutVal4: "Education for Indonesia",
  aboutVal4d:
    "We share knowledge through our blog, free consultations, and public education.",
  aboutTimelineKicker: "Our Journey",
  aboutTimelineTitle: "Milestones That Shaped Today",
  aboutM1T: "Consulting experience began at Mic Kinsey — a world-renowned consulting firm.",
  aboutM2T: "GConsultant officially became a legal entity: AHU-038293.AH.01.30.Tahun 2024, Rp5B authorized capital.",
  aboutM3T: "Jakarta Representative Office opened at Indonesia Stock Exchange Tower 1, Sudirman — the nation's business heart.",
  aboutM4T: "46 services with full detail pages, all 38 provinces covered, and ISO 9001:2015 quality system fully running.",
  aboutLegalKicker: "Legality",
  aboutLegalTitle: "Official Company Data",
  aboutLegalHeritage: "Practice Heritage",
  aboutLegalFounded: "Legal Entity Since",
  aboutLegalAhu: "Ministry of Law Approval",
  aboutLegalCapital: "Authorized Capital",
  aboutLegalIso: "Quality Management System",
  aboutLegalHq: "Head Office",
  aboutLegalJkt: "Representative Office",
  aboutQuote:
    "We don't sell licenses — we build the legal foundation where business courage grows.",
  aboutFounderLink: "View Founder Profile",
  aboutBlogLink: "Read Latest Insights",
  // Blog
  pgBlogKicker: "Insights & Knowledge",
  pgBlogTitle: "Licensing & Business Legality Blog",
  pgBlogSub:
    "Practical guides from practitioners: licensing, business entities, PMA, BPOM, ISO, and SME legality strategy — written by the team that handles them every day.",
  blogAll: "All",
  blogFeatured: "Featured Article",
  blogReadMore: "Read Article",
  blogMinRead: "min read",
  blogArticles: "articles",
  blogEmpty: "No articles in this category.",
  blogRelated: "Related Articles",
  blogBack: "Back to Blog",
  artPublished: "Published",
  artUpdated: "Updated",
  artBy: "by",
  artShare: "Share",
  artAuthorBio:
    "Founder of GConsultant with consulting experience rooted in Mic Kinsey since 2009. Leads 46 cross-disciplinary Expert Councils to legalize businesses across all 38 provinces of Indonesia.",
  artCtaTitle: "Need Help With This Legality Process?",
  artCtaSub:
    "100% free consultation — our team maps your licensing needs and gives honest cost–time estimates.",
  // Nav & Footer — GOD MODE v2
  navMetodologi: "Methodology",
  navAsesmen: "UMEA Assessment",
  footPrivacy: "Privacy Policy",
  footTerms: "Terms & Conditions",
  footVersionLabel: "Version",
  // Metodologi page
  pgMetoKicker: "Minimum Business Law™",
  pgMetoTitle: "UMEA™ — Universal Minimum Enterprise Architecture",
  pgMetoSub:
    "GConsultant's proprietary methodology answering one question: how many critical functions must stay alive so your business never collapses — how many people, how many documents, and which level you must reach.",
  metoLawKicker: "3 Great Laws",
  metoLawTitle: "The Non-Negotiable Foundation",
  metoLawSub:
    "Not shelf theory — these three laws are audited on every client before a single document is drafted.",
  metoLevelsKicker: "6 Organization Levels",
  metoLevelsTitle: "The Maturity Ladder: UMEA-03 to UMEA-21",
  metoLevelsSub:
    "Headcount may stay small. Critical functions may never disappear. Pick the level that fits today — and level up without rebuilding from zero.",
  metoLevelPeople: "People",
  metoLevelBest: "Best for",
  metoLevelDocs: "Document package",
  metoLevelProfLabel: "Professional language",
  metoLevelAwamLabel: "Plain language",
  metoFuncKicker: "21 Critical Functions",
  metoFuncTitle: "Function-First, Not Title-First",
  metoFuncSub:
    "Job titles change across eras — the functions of Direction, Value Creation, Market, Control, People, Intelligence, and Resilience remain. One person may hold many functions; no function may be left ownerless.",
  metoFuncNo: "No",
  metoFuncRole: "Today's form",
  metoFuncAwamLabel: "Plain language",
  metoDocsKicker: "5 Document Tiers",
  metoDocsTitle: "The Documentation Ladder: D-10 to D-165",
  metoDocsSub:
    "Minimum Necessary Architecture principle: give an organization only the complexity it needs. A shop is not dressed up as a holding; a holding is never handed a 10-document pack.",
  metoDocsFor: "For whom",
  metoUmiKicker: "UMEA Maturity Index™",
  metoUmiTitle: "Measure Before You Build",
  metoUmiSub:
    "Organizations are not judged by headcount but by how many critical functions stay continuously alive. Score 0–100, eight maturity bands, one improvement plan.",
  metoCtaTitle: "Want to Know Your Business's UMEA Level?",
  metoCtaSub:
    "Take the 2-minute self-assessment — our engine computes your Maturity Index and recommends the right organization level and document package.",
  metoCtaBtn: "Start Free Assessment",
  metoDisclaimer:
    "UMEA™, Minimum Business Law™, UMEA Master Matrix™, and UMEA Maturity Index™ are proprietary methodologies of GConsultant — protected as trademarks, copyrights, and trade secrets. Unauthorized use will be prosecuted.",
  // Assessment page
  pgAsmKicker: "UMEA Maturity Index™",
  pgAsmTitle: "Business Maturity Assessment",
  pgAsmSub:
    "12 questions • 2 minutes • instant results: UMI score 0–100, your UMEA level, weakest points, and the recommended document package.",
  asmIntro:
    "Answer honestly based on today's real condition — not the ideal one. The more honest, the more accurate the improvement plan.",
  asmPeopleLabel: "How many people work in your business (including the owner)?",
  asmPeopleHint: "Enter a number, e.g. 3",
  asmStart: "Start Assessment",
  asmQuestion: "Question",
  asmOf: "of",
  asmPrev: "Back",
  asmNext: "Next",
  asmSeeResult: "See Results",
  asmResultTitle: "Your UMEA™ Assessment Result",
  asmScoreLabel: "UMI Score",
  asmBandLabel: "Maturity band",
  asmLevelLabel: "Your UMEA Level",
  asmWeakLabel: "3 Weakest Points — prioritize these",
  asmStrongLabel: "Your Strengths",
  asmDocsLabel: "Recommended document package",
  asmWaTitle: "Discuss This Result for Free",
  asmWaSub:
    "Send your assessment result to the GConsultant team via WhatsApp — we help you build the level-up plan plus the mandatory document list.",
  asmWaBtn: "Send Result via WhatsApp",
  asmRestart: "Retake Assessment",
  asmPrivacyNote:
    "The assessment runs entirely on your device — no answers are sent to any server.",
  // 404
  nfTitle: "Page Not Found",
  nfSub:
    "The page you are looking for may have been moved, deleted, or the address is mistyped.",
  nfCta: "Back to Home",
  nfServices: "Browse 46 Services",
  // Legal
  pgPrivTitle: "Privacy Policy",
  pgPrivSub:
    "How we collect, use, and protect your personal data — aligned with Indonesia's PDP Law No. 27/2022 and GDPR-ready.",
  pgTermsTitle: "Terms & Conditions",
  pgTermsSub:
    "Rules for using the GConsultant website and services — please read before using our services.",
  legalUpdated: "Last updated",
  // 2125 Charter
  chartKicker: "The 2125 Charter",
  chartTitle: "Seen from a Hundred Years Ahead",
};

const DICT: Record<Lang, Record<UIKey, string>> = { id: UI_ID, en: UI_EN };

const LANG_KEY = "gunara-lang";
const LANG_LISTENERS = new Set<() => void>();

function subscribeLang(onChange: () => void) {
  LANG_LISTENERS.add(onChange);
  return () => LANG_LISTENERS.delete(onChange);
}

function getLangSnapshot(): Lang {
  if (typeof window === "undefined") return "id";
  try {
    return window.localStorage.getItem(LANG_KEY) === "en" ? "en" : "id";
  } catch {
    return "id";
  }
}

function getLangServerSnapshot(): Lang {
  return "id";
}

function writeLang(next: Lang) {
  try {
    window.localStorage.setItem(LANG_KEY, next);
  } catch {
    /* noop */
  }
  LANG_LISTENERS.forEach((fn) => fn());
}

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: UIKey) => string;
}

const LanguageContext = createContext<LangCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(
    subscribeLang,
    getLangSnapshot,
    getLangServerSnapshot
  );

  const setLang = useCallback((l: Lang) => writeLang(l), []);

  const t = useCallback((k: UIKey) => DICT[lang][k] ?? DICT.id[k], [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang(): LangCtx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
