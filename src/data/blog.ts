/**
 * Data artikel blog GConsultant — modul murni (tanpa "use client")
 * agar dapat dipakai oleh server component (metadata + JSON-LD) maupun
 * client component (render i18n). Semua konten simetris ID + EN.
 */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type BlogCatId =
  | "perizinan"
  | "badan-usaha"
  | "pma"
  | "bpom"
  | "iso"
  | "umkm";

export interface BlogCategory {
  id: BlogCatId;
  nameId: string;
  nameEn: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  { id: "perizinan", nameId: "Perizinan", nameEn: "Licensing" },
  { id: "badan-usaha", nameId: "Badan Usaha", nameEn: "Business Entity" },
  { id: "pma", nameId: "PMA & Investasi", nameEn: "PMA & Investment" },
  { id: "bpom", nameId: "BPOM & Halal", nameEn: "BPOM & Halal" },
  { id: "iso", nameId: "ISO & Mutu", nameEn: "ISO & Quality" },
  { id: "umkm", nameId: "UMKM", nameEn: "SME" },
];

export function blogCategory(id: BlogCatId): BlogCategory {
  return BLOG_CATEGORIES.find((c) => c.id === id) ?? BLOG_CATEGORIES[0];
}

export interface BlogPost {
  slug: string;
  cat: BlogCatId;
  /** ISO date, mis. 2026-10-12 */
  date: string;
  dateModified: string;
  minutes: number;
  /** Path cover 1344x768 di /public */
  image: string;
  titleId: string;
  titleEn: string;
  excerptId: string;
  excerptEn: string;
  tags: string[];
  bodyId: BlogBlock[];
  bodyEn: BlogBlock[];
}

const CTA_ID: BlogBlock = {
  type: "p",
  text: "Tidak ingin repot mengurus sendiri? Tim Dewan Pakar GConsultant siap menangani seluruh proses dari awal hingga dokumen di tangan Anda — transparan, bergaransi tertulis, dan 100% jalur resmi. Hubungi WhatsApp resmi kami di 0813-1651-6524 untuk konsultasi gratis, atau lihat katalog 46 layanan kami di halaman Layanan.",
};
const CTA_EN: BlogBlock = {
  type: "p",
  text: "Don't want to handle it yourself? The Expert Council team at GConsultant is ready to manage the entire process from start to finished documents — transparent, with a written guarantee, and 100% through official channels. Contact our official WhatsApp at 0813-1651-6524 for a free consultation, or browse our catalog of 46 services on the Services page.",
};

export const POSTS: BlogPost[] = [
  {
    slug: "panduan-nib-oss-rba",
    cat: "perizinan",
    date: "2026-10-12",
    dateModified: "2026-10-15",
    minutes: 8,
    image: "/images/blog/nib-oss-rba-2025.png",
    titleId: "Panduan Lengkap NIB OSS RBA: Syarat, Proses, dan Biaya Terbaru",
    titleEn: "The Complete Guide to NIB OSS RBA: Latest Requirements, Process, and Costs",
    excerptId:
      "Nomor Induk Berusaha (NIB) adalah identitas resmi pertama setiap bisnis di Indonesia. Pelajari syarat, langkah pengajuan di OSS RBA, biayanya, dan kesalahan yang membuat NIB sering bermasalah.",
    excerptEn:
      "The Business Identification Number (NIB) is the first official identity of every business in Indonesia. Learn the requirements, the OSS RBA submission steps, the costs, and the mistakes that often cause NIB problems.",
    tags: ["NIB", "OSS RBA", "KBLI", "perizinan usaha"],
    bodyId: [
      {
        type: "p",
        text: "Setiap bisnis yang beroperasi legal di Indonesia wajib memiliki Nomor Induk Berusaha (NIB). Sejak pemberlakuan sistem OSS RBA (Risk-Based Approach), NIB bukan lagi sekadar kartu izin — ia sekaligus berfungsi sebagai NIB, Registrasi Perusahaan, akses kemudahan berusaha, dan identitas tunggal pelaku usaha di seluruh sistem pemerintah. Sayangnya, ribuan pelaku usaha setiap tahunnya mengisi profil risiko dan KBLI dengan keliru, sehingga NIB mereka terbit tetapi tidak benar-benar bisa dipakai untuk mengurus izin turunan, membuka rekening korporat, atau mengikuti tender.",
      },
      {
        type: "h2",
        text: "Apa Itu NIB dan Mengapa Begitu Penting?",
      },
      {
        type: "p",
        text: "NIB diterbitkan melalui sistem Online Single Submission (OSS) berbasis risiko di oss.go.id. Dokumen ini wajib dimiliki oleh seluruh bentuk badan usaha — dari Usaha Perorangan, CV, PT, hingga Perwakilan Perusahaan Asing — serta oleh UMKM. Tanpa NIB, Anda tidak dapat mengajukan izin operasional, izin edar, mengikuti lelang pemerintah, membuka rekening bank atas nama perusahaan, hingga mengurus KITAS untuk tenaga kerja asing.",
      },
      {
        type: "list",
        items: [
          "Identitas tunggal: menggantikan SIUP dan TDP pada rezim perizinan lama.",
          "Dasar skala usaha: menentukan status mikro, kecil, menengah, atau besar — yang memengaruhi kewajiban modal dan insentif.",
          "Kunci izin turunan: izin fungsional (BPOM, SNI, PBG, dll.) hanya bisa diproses setelah NIB dan rating risiko KBLI benar.",
          "Kemudahan fiskal: dasar pengurusan NPWP badan dan fasilitas perpajakan tertentu.",
        ],
      },
      {
        type: "h2",
        text: "Syarat Pengajuan NIB di OSS RBA",
      },
      {
        type: "p",
        text: "Syarat NIB sebenarnya sederhana, tetapi urutan dan isinya yang sering membuat pengajuan macet. Untuk badan usaha (PT/CV), NIB hanya dapat diajukan setelah akta pendirian dan SK pengesahan Kemenkumham terbit. Untuk Usaha Perorangan, kini cukup NIK aktif yang terverifikasi Dukcapil.",
      },
      {
        type: "list",
        items: [
          "Usaha Perorangan: NIK, nomor HP aktif, email, alamat usaha, dan data rencana investasi.",
          "CV: akta notaris, SK Kemenkumham, NPWP, data mitra, rencana investasi.",
          "PT: akta pendirian, SK Kemenkumham, NPWP badan, data direksi/komisaris, rencana investasi, dan KBLI yang sesuai bidang usaha.",
          "PMA: penyertaan modal minimum Rp10 miliar di luar tanah dan bangunan per KBLI 5 digit, ditambah dokumen investor asing.",
        ],
      },
      {
        type: "h2",
        text: "Proses Pengajuan Langkah demi Langkah",
      },
      {
        type: "p",
        text: "Alur resminya lima tahap: registrasi akun OSS, pengisian data dan KBLI, penetapan profil risiko, pernyataan mandiri, lalu terbit NIB. Kesalahan paling mahal terjadi di tahap pemilihan KBLI dan pengisian angka rencana investasi — keduanya menentukan rating risiko (rendah, menengah rendah, menengah tinggi, tinggi) yang berbeda kewajiban izinnya di setiap daerah.",
      },
      {
        type: "h2",
        text: "Berapa Biayanya?",
      },
      {
        type: "p",
        text: "NIB sendiri gratis — pemerintah tidak memungut biaya untuk penerbitannya. Biaya yang muncul biasanya dari jasa pendampingan profesional (menyusun KBLI dan profil risiko yang tepat), penyesuaian domisili usaha, dan izin turunan yang mungkin dipersyakatkan instansi teknis setelah NIB aktif. Hati-hati pada pihak yang menawarkan NIB berbayar tanpa transparansi layanan.",
      },
      {
        type: "quote",
        text: "NIB yang benar sejak hari pertama adalah aset; NIB yang asal jadi adalah bom waktu administrasi.",
      },
      {
        type: "h2",
        text: "Kesalahan yang Paling Sering Kami Temui",
      },
      {
        type: "list",
        items: [
          "Memilih KBLI hanya berdasarkan nama, tanpa membaca ruang lingkup di KBLI 2020.",
          "Mengisi rencana investasi asal besar — menaikkan rating risiko dan kewajiban izin yang sebenarnya tidak Anda butuhkan.",
          "Alamat usaha tidak sesuai dokumen kepemilikan (sewa/perorangan) sehingga izin turunan tertolak.",
          "Menganggap NIB selesai = izin lengkap, padahal izin fungsional baru mengikuti setelahnya.",
        ],
      },
      CTA_ID,
    ],
    bodyEn: [
      {
        type: "p",
        text: "Every business operating legally in Indonesia must have a Business Identification Number (NIB). Since the adoption of the Risk-Based Approach (OSS RBA) system, the NIB is no longer just a license card — it simultaneously serves as the NIB, Company Registration, access to business ease, and the single business identity across all government systems. Unfortunately, thousands of business owners each year fill in their risk profile and KBLI incorrectly, so their NIB gets issued but cannot actually be used to process derivative licenses, open corporate bank accounts, or join tenders.",
      },
      {
        type: "h2",
        text: "What Is the NIB and Why Does It Matter?",
      },
      {
        type: "p",
        text: "The NIB is issued through the Online Single Submission (OSS) risk-based system at oss.go.id. This document is mandatory for all business entity types — from Sole Proprietorships, CVs, PTs, to Foreign Company Representatives — as well as SMEs. Without a NIB, you cannot apply for operational licenses, distribution licenses, join government tenders, open a corporate bank account, or arrange KITAS for foreign workers.",
      },
      {
        type: "list",
        items: [
          "Single identity: replaces SIUP and TDP from the old licensing regime.",
          "Business scale basis: determines micro, small, medium, or large status — which affects capital obligations and incentives.",
          "Key to derivative licenses: functional licenses (BPOM, SNI, PBG, etc.) can only be processed after the NIB and KBLI risk rating are correct.",
          "Fiscal ease: the basis for corporate NPWP registration and certain tax facilities.",
        ],
      },
      {
        type: "h2",
        text: "Requirements for NIB Submission via OSS RBA",
      },
      {
        type: "p",
        text: "The NIB requirements are simple on paper, but the sequence and contents often cause delays. For business entities (PT/CV), the NIB can only be submitted after the deed of establishment and the Ministry of Law's approval decree (SK) are issued. For Sole Proprietorships, an active NIK verified by Dukcapil is now sufficient.",
      },
      {
        type: "list",
        items: [
          "Sole Proprietorship: active NIK, active phone number, email, business address, and planned investment data.",
          "CV: notarial deed, Kemenkumham SK, NPWP, partner data, investment plan.",
          "PT: deed of establishment, Kemenkumham SK, corporate NPWP, directors/commissioners data, investment plan, and KBLI codes matching the business field.",
          "PMA: minimum investment of IDR 10 billion excluding land and buildings per 5-digit KBLI, plus foreign investor documents.",
        ],
      },
      {
        type: "h2",
        text: "The Submission Process Step by Step",
      },
      {
        type: "p",
        text: "The official flow has five stages: OSS account registration, data and KBLI entry, risk profile determination, self-declaration, then NIB issuance. The most costly mistakes happen at the KBLI selection and investment-plan figures — both determine the risk rating (low, medium-low, medium-high, high) which carries different license obligations in each region.",
      },
      {
        type: "h2",
        text: "How Much Does It Cost?",
      },
      {
        type: "p",
        text: "The NIB itself is free — the government charges nothing for its issuance. Costs that appear usually come from professional assistance (preparing the right KBLI and risk profile), business domicile adjustments, and derivative licenses that technical agencies may require after the NIB is active. Beware of parties offering paid NIBs without service transparency.",
      },
      {
        type: "quote",
        text: "A correct NIB from day one is an asset; a carelessly issued NIB is an administrative time bomb.",
      },
      {
        type: "h2",
        text: "The Mistakes We See Most Often",
      },
      {
        type: "list",
        items: [
          "Choosing a KBLI by name only, without reading its scope in the 2020 KBLI.",
          "Filling in inflated investment plans — raising the risk rating and license obligations you never needed.",
          "Business address not matching ownership documents (lease/individual), causing derivative license rejections.",
          "Assuming NIB issuance = complete licensing, while functional licenses only follow afterward.",
        ],
      },
      CTA_EN,
    ],
  },
  {
    slug: "pt-cv-atau-perorangan",
    cat: "badan-usaha",
    date: "2026-09-28",
    dateModified: "2026-09-28",
    minutes: 9,
    image: "/images/blog/pt-cv-perorangan.png",
    titleId: "PT, CV, atau Usaha Perorangan? Panduan Memilih Badan Usaha yang Tepat",
    titleEn: "PT, CV, or Sole Proprietorship? A Guide to Choosing the Right Business Entity",
    excerptId:
      "Memilih badan usaha menentukan kredibilitas, pajak, dan batas tanggung jawab Anda. Bandingkan PT, CV, dan Usaha Perorangan dari sisi modal, tanggung jawab hukum, pajak, dan akses pendanaan.",
    excerptEn:
      "Your business entity determines credibility, taxes, and your liability limits. Compare PT, CV, and Sole Proprietorship in terms of capital, legal liability, taxes, and access to funding.",
    tags: ["PT", "CV", "Usaha Perorangan", "badan usaha", "NIB perorangan"],
    bodyId: [
      {
        type: "p",
        text: "Pertanyaan paling sering masuk ke meja konsultasi kami: “Haruskah saya bikin PT, CV, atau cukup Usaha Perorangan?” Jawabannya tidak pernah seragam — pilihan yang tepat bergantung pada skala modal, jumlah pemilik, tingkat risiko usaha, target pasar, dan rencana ekspansi Anda. Memilih keliru bukan sekadar soal biaya ganda; Anda bisa terjebak pada struktur yang membatasi kontrak besar, atau sebaliknya membayar biaya pendirian yang tidak perlu.",
      },
      {
        type: "h2",
        text: "Usaha Perorangan: Cepat, Ringan, Pribadi",
      },
      {
        type: "p",
        text: "Sejak UU Cipta Kerja dan OSS RBA, Usaha Perorangan kini resmi diakui dengan NIB berbasis NIK — tanpa akta notaris. Cocok untuk usaha mikro dengan omzet kecil, satu pemilik, dan risiko hukum rendah. Kelemahannya jelas: tanggung jawab utang menyatu dengan aset pribadi Anda, dan banyak instansi/partner besar meminta legalitas bentuk PT untuk kontrak bernilai besar.",
      },
      {
        type: "h2",
        text: "CV: Mitra Usaha Tanpa Struktur Rumit",
      },
      {
        type: "p",
        text: "Commanditaire Vennootschap (CV) adalah persekutuan antara sekutu aktif (vennoot) dan sekutu pasif (kommanditer). CV populer untuk usaha keluarga, konstruksi kecil, dan distribusi karena pendiriannya lebih murah dari PT. Namun perhatikan: sekutu aktif bertanggung jawab penuh atas utang CV. Bila bisnis Anda berisiko tinggi (produksi, makanan, konstruksi), tanggung jawab tak terbatas ini adalah risiko nyata.",
      },
      {
        type: "h2",
        text: "PT: Standar untuk Bisnis yang Serius Bertumbuh",
      },
      {
        type: "p",
        text: "Perseroan Terbatas (PT) adalah badan hukum dengan tanggung jawab pemilik terbatas pada modal yang disetor. PT adalah pilihan wajib bila Anda menargetkan: kontrak B2B korporat, tender pemerintah, pendanaan investor, perluasan cabang, atau perlindungan aset pribadi. Untuk asing, PT PMA adalah satu-satunya bentuk yang memungkinkan kepemilikan asing penuh di sektor terbuka.",
      },
      {
        type: "list",
        items: [
          "Modal PT minimum Rp50 juta dengan penyetoran wajib sebagian saat pendirian (UU Cipta Kerja).",
          "Pajak PT: tarif badan 22%, dengan fasilitas 0,5% dari omzet untuk modal di bawah Rp4,8 miliar (sampai batas omzet tertentu).",
          "Pengurus & pemegang saham bisa satu orang sejak UU Cipta Kerja — PT perseorangan kini legal.",
          "Kredibilitas: bank, vendor besar, dan marketplace korporat umumnya memprioritaskan PT.",
        ],
      },
      {
        type: "h2",
        text: "Perbandingan Cepat",
      },
      {
        type: "list",
        items: [
          "Pendirian tercepat: Usaha Perorangan (NIB 1–3 hari) → CV/PT (5–10 hari kerja setelah akta).",
          "Perlindungan aset terbaik: PT — pemisahan tegas aset perusahaan dan pribadi.",
          "Biaya awal termurah: Usaha Perorangan; CV menengah; PT tertinggi (akta + pengesahan).",
          "Akses pendanaan/investor: PT jauh unggul — struktur saham memungkinkan masuknya investor.",
          "Kepemilikan asing: hanya PT PMA (dan Perwakilan untuk kegiatan non-pemasaran).",
        ],
      },
      {
        type: "quote",
        text: "Badan usaha yang tepat adalah yang mengikuti arah pertumbuhan bisnis Anda, bukan yang paling murah hari ini.",
      },
      {
        type: "h2",
        text: "Kapan Harus Naik Kelas dari Perorangan/CV ke PT?",
      },
      {
        type: "p",
        text: "Tiga sinyal utama: omzet Anda sudah konstan dan tumbuh, Anda mulai menerima kontrak yang mensyaratkan badan hukum, atau Anda berencana membawa mitra/investor. Proses naik kelas paling efisien adalah mendirikan PT baru lalu memindahkan aset dan kontrak secara terdokumentasi — bukan mengubah CV menjadi PT, yang secara hukum tidak dapat dilakukan langsung.",
      },
      CTA_ID,
    ],
    bodyEn: [
      {
        type: "p",
        text: "The most common question reaching our consultation desk: “Should I establish a PT, a CV, or just a Sole Proprietorship?” The answer is never uniform — the right choice depends on your capital scale, number of owners, business risk level, target market, and expansion plans. Choosing wrong is not merely about double costs; you can get stuck in a structure that limits large contracts, or conversely pay for establishment you never needed.",
      },
      {
        type: "h2",
        text: "Sole Proprietorship: Fast, Light, Personal",
      },
      {
        type: "p",
        text: "Since the Job Creation Law and OSS RBA, Sole Proprietorships are now officially recognized with a NIK-based NIB — no notarial deed required. It suits micro businesses with small turnover, a single owner, and low legal risk. Its weaknesses are clear: business debts merge with your personal assets, and many agencies/large partners require a PT for high-value contracts.",
      },
      {
        type: "h2",
        text: "CV: Business Partnerships Without Complex Structure",
      },
      {
        type: "p",
        text: "A Commanditaire Vennootschap (CV) is a partnership between active partners (vennoot) and passive partners (kommanditer). CVs are popular for family businesses, small construction, and distribution because they are cheaper to establish than a PT. But note: active partners bear full liability for CV debts. If your business is high-risk (manufacturing, food, construction), this unlimited liability is a real danger.",
      },
      {
        type: "h2",
        text: "PT: The Standard for Businesses Serious About Growth",
      },
      {
        type: "p",
        text: "A Perseroan Terbatas (PT — limited liability company) is a legal entity where owners' liability is limited to paid-up capital. A PT is the mandatory choice if you target: corporate B2B contracts, government tenders, investor funding, branch expansion, or personal asset protection. For foreigners, a PT PMA is the only vehicle allowing full foreign ownership in open sectors.",
      },
      {
        type: "list",
        items: [
          "Minimum PT capital of IDR 50 million with partial mandatory deposit at establishment (Job Creation Law).",
          "PT taxes: 22% corporate rate, with a 0.5%-of-turnover facility for capital under IDR 4.8 billion (up to certain turnover limits).",
          "Directors & shareholders can be one person since the Job Creation Law — single-shareholder PTs are now legal.",
          "Credibility: banks, large vendors, and corporate marketplaces generally prioritize PTs.",
        ],
      },
      {
        type: "h2",
        text: "Quick Comparison",
      },
      {
        type: "list",
        items: [
          "Fastest to establish: Sole Proprietorship (NIB 1–3 days) → CV/PT (5–10 working days after the deed).",
          "Best asset protection: PT — firm separation of company and personal assets.",
          "Cheapest initial cost: Sole Proprietorship; CV medium; PT highest (deed + approval).",
          "Funding/investor access: PT excels — its share structure allows investors to enter.",
          "Foreign ownership: only a PT PMA (and a Representative Office for non-marketing activities).",
        ],
      },
      {
        type: "quote",
        text: "The right business entity is the one that follows your growth trajectory — not the cheapest one today.",
      },
      {
        type: "h2",
        text: "When Should You Upgrade from Sole Proprietorship/CV to PT?",
      },
      {
        type: "p",
        text: "Three main signals: your turnover is constant and growing, you start receiving contracts that require a legal entity, or you plan to bring in partners/investors. The most efficient upgrade path is establishing a new PT then transferring assets and contracts with proper documentation — not converting a CV into a PT, which legally cannot be done directly.",
      },
      CTA_EN,
    ],
  },
  {
    slug: "cara-pendirian-pt-pma",
    cat: "pma",
    date: "2026-09-10",
    dateModified: "2026-09-12",
    minutes: 10,
    image: "/images/blog/pendirian-pt-pma.png",
    titleId: "Cara Mendirikan PT PMA di Indonesia: Panduan Lengkap Investor Asing",
    titleEn: "How to Establish a PT PMA in Indonesia: A Complete Guide for Foreign Investors",
    excerptId:
      "PT PMA adalah satu-satunya badan usaha yang memungkinkan investor asing memiliki bisnis penuh di Indonesia. Pelajari syarat modal, sektor terbuka, proses OSS, KITAS direksi, dan biaya realistisnya.",
    excerptEn:
      "A PT PMA is the only business entity that allows foreign investors to fully own a business in Indonesia. Learn the capital requirements, open sectors, the OSS process, director KITAS, and realistic costs.",
    tags: ["PT PMA", "investasi asing", "KITAS", "BKPM", "DPI"],
    bodyId: [
      {
        type: "p",
        text: "Indonesia tetap menjadi magnet investasi di Asia Tenggara: pasar 270+ juta penduduk, kelas menengah yang tumbuh, dan posisi strategis lintas perdagangan global. Namun investor asing tidak dapat sembarangan mendirikan CV atau menjadi pemilik tunggal Usaha Perorangan. Satu-satunya kendaraan legal untuk kepemilikan asing penuh adalah Penanaman Modal Asing (PT PMA) — perseroan terbatas yang didirikan di bawah rezim UU Penanaman Modal dan diawasi BKPM/Kementerian Investasi.",
      },
      {
        type: "h2",
        text: "Syarat Modal: Angka yang Sering Salah Dipahami",
      },
      {
        type: "p",
        text: "Aturan modal PT PMA sering diringkas keliru menjadi “modal Rp10 miliar”. Yang benar: rencana investasi per KBLI 5 digit minimum Rp10 miliar (di luar tanah dan bangunan), dan nilai penyetoran modal dasar yang wajib direalisasikan minimal Rp10 miliar sesuai ketentuan BKPM. Modal dasar perusahaan sendiri minimal Rp10 miliar dengan penyetoran awal minimal 25% dari modal dasar yang dinyatakan dalam akta.",
      },
      {
        type: "list",
        items: [
          "Rencana investasi ≥ Rp10 miliar per KBLI 5 digit (di luar tanah & bangunan).",
          "Pemegang saham asing minimal menyuntik modal sesuai rencana investasi terbut.",
          "Struktur saham: 100% asing diperbolehkan di sektor terbuka; sektor tertentu terbatas oleh Daftar Negatif Investasi (DNI) posif.",
          "Kantor wajib di lokasi yang sesuai peruntukan (bukan rumah tinggal sembarangan — perlu PBG dan domisili).",
        ],
      },
      {
        type: "h2",
        text: "Periksa DNI Positif dan Persentase Kepemilikan",
      },
      {
        type: "p",
        text: "Sebelum membelanjakan apa pun, investor wajib memeriksa Perpres Bidang Usaha Penanaman Modal (DNI positif): sektor tertentu membatasi kepemilikan asing maksimal 49–95% atau mensyaratkan kemitraan UMKM. Salah membaca sektor = akta pendirian harus diubah ulang, biayanya jauh melebihi biaya konsultasi awal.",
      },
      {
        type: "h2",
        text: "Alur Pendirian PT PMA Langkah demi Langkah",
      },
      {
        type: "list",
        items: [
          "Konsultasi sektor & KBLI: verifikasi DNI positif, persentase kepemilikan asing, dan lisensi khusus.",
          "Nama perseroan: pengajuan ke Akun Single Submission (ASS) Kemenkumham.",
          "Akta pendirian notaris: anggaran dasar, struktur saham, direksi & komisaris.",
          "Pengesahan Kemenkumham: SK badan hukum (5–10 hari kerja).",
          "OSS RBA: NIB, izin usaha, dan pengajuan perizinan berusaha sesuai rating risiko.",
          "Pasca-pendirian: NPWP, domisili perpajakan, laporan penanaman modal (LKPM) berkala ke BKPM.",
          "KITAS direksi & tenaga asing: RPTKA, IMTA, VITAS lalu KITAS — hanya setelah PT PMA legal dan rencana penempatan TKA disetujui.",
        ],
      },
      {
        type: "h2",
        text: "Biaya Realistis dan Timeline",
      },
      {
        type: "p",
        text: "Biaya pemerintah utama: notaris + pengesahan (bervariasi sesuai modal dasar), tidak ada “biaya BKPM” untuk pendirian. Total biaya profesional pendirian PT PMA umumnya berkisar puluhan juta rupiah, ditambah biaya KITAS per orang. Timeline realistis dari nama terverifikasi hingga NIB + izin usaha: 2–4 minggu bila dokumen investor (paspor, dokumen perusahaan induk, surat kuasa yang dilegalisasi) sudah lengkap.",
      },
      {
        type: "quote",
        text: "Kecepatan pendirian PT PMA ditentukan oleh kualitas dokumen sebelum akta ditandatangani — bukan oleh kecepatan ketikan notaris.",
      },
      {
        type: "h2",
        text: "Kewajiban Berkelanjutan yang Sering Terlewat",
      },
      {
        type: "p",
        text: "PT PMA wajib melaporkan LKPM setiap kuartal (investasi < Rp50 miliar) atau setiap semester (≥ Rp50 miliar), menyampaikan laporan keuangan tahunan, serta memperbarui izin bila KBLI/kantor berubah. Kelalaian LKPM dapat memengaruhi perpanjangan KITAS direksi dan fasilitas perizinan berikutnya.",
      },
      CTA_ID,
    ],
    bodyEn: [
      {
        type: "p",
        text: "Indonesia remains an investment magnet in Southeast Asia: a market of 270+ million people, a growing middle class, and a strategic position in global trade. However, foreign investors cannot simply establish a CV or become a sole owner of a Sole Proprietorship. The only legal vehicle for full foreign ownership is a PT PMA (Foreign Investment Company) — a limited liability company established under the Investment Law regime and supervised by BKPM/Ministry of Investment.",
      },
      {
        type: "h2",
        text: "Capital Requirements: The Numbers Often Misunderstood",
      },
      {
        type: "p",
        text: "PT PMA capital rules are often wrongly summarized as “Rp10 billion capital”. The correct version: the investment plan per 5-digit KBLI must be at least IDR 10 billion (excluding land and buildings), and the issued capital must be realized at a minimum of IDR 10 billion per BKPM provisions. The company's authorized capital itself is a minimum of IDR 10 billion, with an initial deposit of at least 25% of the authorized capital stated in the deed.",
      },
      {
        type: "list",
        items: [
          "Investment plan ≥ IDR 10 billion per 5-digit KBLI (excluding land & buildings).",
          "Foreign shareholders must inject capital matching the stated investment plan.",
          "Share structure: 100% foreign ownership is allowed in open sectors; certain sectors are limited by the positive investment list.",
          "Office must be in a properly zoned location (not just any residence — PBG building permit and domicile required).",
        ],
      },
      {
        type: "h2",
        text: "Check the Positive Investment List and Ownership Percentages",
      },
      {
        type: "p",
        text: "Before spending anything, investors must check the Presidential Regulation on Investment Business Fields (positive list): certain sectors cap foreign ownership at 49–95% or require SME partnerships. Misreading a sector means the deed of establishment must be amended — costing far more than an initial consultation.",
      },
      {
        type: "h2",
        text: "PT PMA Establishment Flow Step by Step",
      },
      {
        type: "list",
        items: [
          "Sector & KBLI consultation: verify the positive list, foreign ownership percentage, and special licenses.",
          "Company name: submission via the Single Submission Account (ASS) at the Ministry of Law.",
          "Notarial deed of establishment: articles of association, share structure, directors & commissioners.",
          "Ministry of Law approval: legal entity decree (5–10 working days).",
          "OSS RBA: NIB, business license, and application for business licenses according to risk rating.",
          "Post-establishment: NPWP, tax domicile, periodic investment activity reports (LKPM) to BKPM.",
          "Directors' & foreign workers' KITAS: RPTKA, IMTA, VITAS then KITAS — only after the PT PMA is legal and the foreign placement plan is approved.",
        ],
      },
      {
        type: "h2",
        text: "Realistic Costs and Timeline",
      },
      {
        type: "p",
        text: "Main government costs: notary + approval (varying by authorized capital); there is no “BKPM fee” for establishment. Total professional costs for PT PMA establishment generally range in the tens of millions of rupiah, plus KITAS costs per person. A realistic timeline from verified name to NIB + business license: 2–4 weeks when investor documents (passports, parent company documents, legalized powers of attorney) are complete.",
      },
      {
        type: "quote",
        text: "The speed of PT PMA incorporation is determined by document quality before the deed is signed — not by the notary's typing speed.",
      },
      {
        type: "h2",
        text: "Ongoing Obligations Often Missed",
      },
      {
        type: "p",
        text: "PT PMAs must report LKPM quarterly (investment < IDR 50 billion) or semi-annually (≥ IDR 50 billion), submit annual financial statements, and update licenses whenever KBLI/office changes. LKPM negligence can affect the directors' KITAS renewals and future licensing facilities.",
      },
      CTA_EN,
    ],
  },
  {
    slug: "izin-edar-bpom-makanan-minuman",
    cat: "bpom",
    date: "2026-08-22",
    dateModified: "2026-08-25",
    minutes: 8,
    image: "/images/blog/izin-edar-bpom.png",
    titleId: "Izin Edar BPOM untuk Makanan & Minuman: Langkah demi Langkah",
    titleEn: "BPOM Distribution License for Food & Beverages: Step by Step",
    excerptId:
      "Produk makanan-minuman tanpa izin edar BPOM tidak boleh dipasarkan. Pahami jalur PIRT vs izin edar MD, syarat fasilitas produksi, dokumen produk, dan estimasi waktunya.",
    excerptEn:
      "Food and beverage products without a BPOM distribution license cannot be marketed. Understand the PIRT vs MD route, production facility requirements, product documents, and realistic timelines.",
    tags: ["BPOM", "izin edar", "PIRT", "MD", "makanan minuman"],
    bodyId: [
      {
        type: "p",
        text: "Brand makanan-minuman lokal tumbuh pesat — tetapi hukumnya tegas: produk olahan yang dipasarkan wajib punya izin edar. Bagi UMKM ada dua pintu: PIRT (Pengawasan Pangan Industri Rumah Tangga) untuk risiko rendah, dan Izin Edar MD (Makanan Olahan Kering) dari BPOM untuk produk yang lebih luas distribusinya. Memilih jalur yang salah membuat Anda membuang waktu berminggu-minggu dan denda ketika ketahuan beredar tanpa izin.",
      },
      {
        type: "h2",
        text: "PIRT atau Izin Edar MD?",
      },
      {
        type: "p",
        text: "PIRT diterbitkan dinas kesehatan kabupaten/kota untuk produk risiko rendah dengan daya tahan singkat — keripik, sambal botol, kopi kemasan, jus pasteurisasi pendek. Izin edar MD dari BPOM diperlukan untuk produk risiko menengah hingga tinggi: kue kering dengan umur simpan panjang, minuman UHT, susu, produk dengan bahan fortifikasi, hingga semua produk yang diekspor atau masuk ritel modern yang mensyaratkan BPOM.",
      },
      {
        type: "list",
        items: [
          "PIRT: proses lebih cepat (±2–4 minggu), gratis/berbiaya sangat rendah, masa berlaku sesuai regulasi daerah.",
          "MD BPOM: proses lebih panjang (±1–4 bulan), berbiaya per penerbitan, berlaku nasional dan menjadi prasyarat ekspor.",
          "Ritel modern & marketplace besar umumnya menuntut izin edar BPOM, bukan sekadar PIRT.",
          "Produk herbal/Suplemen kesehatan masuk jalur berbeda (SWT/ST) dengan syarat khas BPOM.",
        ],
      },
      {
        type: "h2",
        text: "Syarat Fasilitas Produksi: Sihalal & Prinsip CPPOB",
      },
      {
        type: "p",
        text: "Sebelum dokumen produk disiapkan, fasilitas produksi harus lahap: sertifikat halal BPJPH (kini prasyarat yang diperkuat UU Halal dan kewajiban bertahap bagi makanan-minuman), serta implementasi CPPOB/Cara Produksi Pangan Olahan yang Baik. Petugas BPOM/dinas akan memverifikasi tata letak, kebersihan, dan pencatatan produksi — fabrikasi foto ruangan tidak pernah lolos.",
      },
      {
        type: "h2",
        text: "Dokumen Produk yang Wajib Disiapkan",
      },
      {
        type: "list",
        items: [
          "Resep/racikan lengkap dengan persentase bahan dan spesifikasi bahan baku.",
          "Proses produksi langkah demi langkah, termasuk suhu/tekanan kritis.",
          "Hasil uji laboratorium (mikrobiologi & kimia) dari lab terakreditasi.",
          "Rancangan label sesuai Acuan Pemberian Label Pangan Olahan: nama jenis, berat bersih, komposisi, tanggal kedaluwarsa, kode produksi, distributor.",
          "Mock-up kemasan final dan alasan fungsionalitas bahan tambahan.",
        ],
      },
      {
        type: "h2",
        text: "Proses Pengajuan MD di OSS BPOM",
      },
      {
        type: "p",
        text: "Pengajuan dilakukan daring melalui OSS BPOM dengan akun perusahaan. Alur: verifikasi profil perusahaan → pembayaran PNBP → unggah dokumen produk → telaah administratif → telaah penilaian keamanan pangan (bila perlu, sampel diuji) → terbit izin edar dengan nomor MD. Ketelitian label dan kelayakan hasil lab adalah dua penyebab tertolak yang paling sering kami temukan.",
      },
      {
        type: "quote",
        text: "Izin edar bukan penghalang — ia adalah tiket masuk ke ritel modern, ekspor, dan kepercayaan konsumen jangka panjang.",
      },
      {
        type: "h2",
        text: "Estimasi Waktu dan Tips Agar Tidak Tertunda",
      },
      {
        type: "p",
        text: "Dengan dokumen lengkap: MD kering 1–2 bulan, produk berisiko menengah 2–3 bulan, produk fortifikasi/berbahan baru hingga 4 bulan. Tiga tips tercepat: (1) uji lab dilakukan paralel dengan penyusunan dokumen, (2) rancang label mengikuti acuan terbaru sebelum dikirim ke desainer, (3) pastikan sertifikat halal sudah terbit karena menjadi bagian dari kelengkapan produk.",
      },
      CTA_ID,
    ],
    bodyEn: [
      {
        type: "p",
        text: "Local food & beverage brands are growing fast — but the law is firm: processed products placed on the market must have a distribution license. SMEs have two doors: PIRT (Household Food Industry Supervision) for low-risk products, and an MD distribution license from BPOM for products with broader distribution. Choosing the wrong route wastes weeks and incurs fines when caught selling without a license.",
      },
      {
        type: "h2",
        text: "PIRT or MD Distribution License?",
      },
      {
        type: "p",
        text: "PIRT is issued by the regency/city health office for low-risk, short shelf-life products — chips, bottled sambal, packaged coffee, short-pasteurized juice. An MD license from BPOM is required for medium-to-high risk products: cookies with long shelf life, UHT drinks, milk, fortified products, and everything exported or entering modern retail that requires BPOM.",
      },
      {
        type: "list",
        items: [
          "PIRT: faster process (±2–4 weeks), free/very low cost, validity per regional regulation.",
          "MD BPOM: longer process (±1–4 months), per-issuance fees, valid nationally and a prerequisite for export.",
          "Modern retail & large marketplaces generally demand a BPOM license, not merely PIRT.",
          "Herbal/health supplement products follow a different route (SWT/ST) with specific BPOM requirements.",
        ],
      },
      {
        type: "h2",
        text: "Production Facility Requirements: Halal Certificate & CPPOB Principles",
      },
      {
        type: "p",
        text: "Before product documents are prepared, the production facility must be clean: a BPJPH halal certificate (now a prerequisite reinforced by the Halal Law and phased obligations for food & beverages), plus implementation of CPPOB (Good Processed Food Production Practices). BPOM/health officers will verify layout, hygiene, and production records — fabricated room photos never pass.",
      },
      {
        type: "h2",
        text: "Product Documents You Must Prepare",
      },
      {
        type: "list",
        items: [
          "Complete recipe with ingredient percentages and raw material specifications.",
          "Step-by-step production process, including critical temperatures/pressures.",
          "Laboratory test results (microbiology & chemistry) from an accredited lab.",
          "Label draft following the Processed Food Labelling Guideline: product type, net weight, composition, expiry date, production code, distributor.",
          "Final packaging mock-up and the functional justification for additives.",
        ],
      },
      {
        type: "h2",
        text: "The MD Submission Process via OSS BPOM",
      },
      {
        type: "p",
        text: "Submission is done online through OSS BPOM with a company account. The flow: company profile verification → PNBP payment → product document upload → administrative review → food safety assessment (sampling if needed) → distribution license issuance with an MD number. Label accuracy and lab validity are the two most common rejection causes we encounter.",
      },
      {
        type: "quote",
        text: "A distribution license is not a barrier — it is the entry ticket to modern retail, exports, and long-term consumer trust.",
      },
      {
        type: "h2",
        text: "Timeline and Tips to Avoid Delays",
      },
      {
        type: "p",
        text: "With complete documents: dry MD products 1–2 months, medium-risk products 2–3 months, fortified/novel-ingredient products up to 4 months. Three fastest tips: (1) run lab tests in parallel with document preparation, (2) design the label following the latest guideline before sending it to your designer, (3) make sure the halal certificate is already issued since it is part of product completeness.",
      },
      CTA_EN,
    ],
  },
  {
    slug: "mengapa-iso-9001-penting",
    cat: "iso",
    date: "2026-07-30",
    dateModified: "2026-08-01",
    minutes: 7,
    image: "/images/blog/iso-9001-penting.png",
    titleId: "Mengapa ISO 9001:2015 Menjadi Standar Wajib Bisnis Modern",
    titleEn: "Why ISO 9001:2015 Has Become a Must-Have Standard for Modern Businesses",
    excerptId:
      "ISO 9001:2015 bukan sekadar sertifikat dinding kantor. Pahami bagaimana sistem manajemen mutu ini meningkatkan efisiensi, kredibilitas tender, dan daya saing ekspor bisnis Anda.",
    excerptEn:
      "ISO 9001:2015 is not just a wall certificate. Understand how this quality management system boosts efficiency, tender credibility, and your business's export competitiveness.",
    tags: ["ISO 9001", "SMM", "mutu", "tender", "sertifikasi"],
    bodyId: [
      {
        type: "p",
        text: "ISO 9001:2015 adalah standar internasional Sistem Manajemen Mutu (SMM) yang diterbitkan ISO dan diadopsi di Indonesia sebagai SNI ISO 9001:2015. Lebih dari 1,2 juta organisasi di 190 negara tersertifikasi — dari pabrik besar hingga jasa profesional. Bagi bisnis Indonesia, sertifikasi ini kini menjadi syarat faktual di tender pemerintah, vendor korporat global, dan mitra rantai pasok ekspor.",
      },
      {
        type: "h2",
        text: "Apa yang Sebenarnya Diubah ISO 9001:2015?",
      },
      {
        type: "p",
        text: "Struktur High Level Structure (HLS) membuat ISO 9001 mudah diintegrasikan dengan standar lain (ISO 14001 lingkungan, ISO 45001 keselamatan). Poin kunci revisi 2015: pendekatan berbasis risiko menggantikan tindakan preventif, penekanan pada konteks organisasi dan pemangku kepentingan, kepemimpinan aktif manajemen puncak, serta manajemen perubahan yang terdokumentasi.",
      },
      {
        type: "list",
        items: [
          "7 prinsip mutu: orientasi pelanggan, kepemimpinan, pelibatan orang, pendekatan proses, perbaikan berkelanjutan, keputusan berbasis bukti, manajemen relasi.",
          "Dokumentasi lebih fleksibel dari revisi 2008 — fokus pada efektivitas, bukan menumpuk prosedur.",
          "Wajib ada analisis risiko dan peluang di setiap proses utama.",
          "Audit internal dan tinjauan manajemen menjadi denyut perbaikan berkelanjutan.",
        ],
      },
      {
        type: "h2",
        text: "Manfaat Nyata: Bukan Sekadar Estetika Legalitas",
      },
      {
        type: "p",
        text: "Dari pengalaman mendampingi klien kami: setelah tersertifikasi, rata-rata klien mengalami penurunan keluhan pelanggan karena proses baku, lolos pra-kualifikasi tender yang mensyaratkan SMM, memperoleh kepercayaan vendor internasional, dan — yang paling diabaikan — efisiensi internal karena setiap proses punya indikator dan penanggung jawab yang jelas.",
      },
      {
        type: "h2",
        text: "Proses Sertifikasi: Berapa Lama dan Bagaimana Alurnya?",
      },
      {
        type: "p",
        text: "Jalur realistis: gap analysis (2–4 minggu) → penyusunan dokumentasi SMM (4–8 minggu, tergantung kesiapan) → implementasi dan audit internal (4–8 minggu) → audit sertifikasi tahap 1 & 2 oleh lembaga sertifikasi terakreditasi KAN (2–4 minggu) → terbit sertifikat berlaku 3 tahun dengan audit pengawasan tahunan. Total umumnya 4–7 bulan untuk perusahaan yang serius; jangan percai tawaran “ISO kilat 2 minggu” tanpa audit nyata.",
      },
      {
        type: "quote",
        text: "Sistem mutu yang baik membuat kualitas tidak bergantung pada sifat baik karyawan — ia menjadi disiplin organisasi.",
      },
      {
        type: "h2",
        text: "Biaya dan Cara Memilih Lembaga Sertifikasi",
      },
      {
        type: "p",
        text: "Biaya terdiri dari jasa konsultansi (opsional tapi sangat mempercepat) dan biaya sertifikasi lembaga (variasi lebar — pastikan lembaga terakreditasi KAN atau lembaga internasional bereputasi). Waspadai sertifikat murah dari lembaga tidak terakreditasi: dokumen itu ditolak di tender dan merusak reputasi.",
      },
      CTA_ID,
    ],
    bodyEn: [
      {
        type: "p",
        text: "ISO 9001:2015 is the international Quality Management System (QMS) standard published by ISO and adopted in Indonesia as SNI ISO 9001:2015. Over 1.2 million organizations in 190 countries are certified — from large factories to professional services. For Indonesian businesses, this certification is now a factual requirement in government tenders, global corporate vendor lists, and export supply chains.",
      },
      {
        type: "h2",
        text: "What Did ISO 9001:2015 Actually Change?",
      },
      {
        type: "p",
        text: "The High Level Structure (HLS) makes ISO 9001 easy to integrate with other standards (ISO 14001 environment, ISO 45001 safety). Key points of the 2015 revision: a risk-based approach replacing preventive action, emphasis on organizational context and stakeholders, active top-management leadership, and documented change management.",
      },
      {
        type: "list",
        items: [
          "7 quality principles: customer focus, leadership, people engagement, process approach, continual improvement, evidence-based decisions, relationship management.",
          "More flexible documentation than the 2008 revision — focused on effectiveness, not piling up procedures.",
          "Risk and opportunity analysis is mandatory in every main process.",
          "Internal audits and management review become the heartbeat of continual improvement.",
        ],
      },
      {
        type: "h2",
        text: "Real Benefits: More Than Legal Aesthetics",
      },
      {
        type: "p",
        text: "From our experience assisting clients: after certification, clients on average see reduced customer complaints due to standardized processes, pass pre-qualification tenders requiring a QMS, gain trust from international vendors, and — most overlooked — gain internal efficiency because every process has clear indicators and owners.",
      },
      {
        type: "h2",
        text: "The Certification Process: How Long and How Does It Flow?",
      },
      {
        type: "p",
        text: "A realistic path: gap analysis (2–4 weeks) → QMS documentation (4–8 weeks, depending on readiness) → implementation and internal audit (4–8 weeks) → stage 1 & 2 certification audits by a KAN-accredited body (2–4 weeks) → certificate issuance valid 3 years with annual surveillance audits. Total is generally 4–7 months for serious companies; never trust “2-week express ISO” offers without real audits.",
      },
      {
        type: "quote",
        text: "A good quality system makes quality independent of employee goodwill — it becomes organizational discipline.",
      },
      {
        type: "h2",
        text: "Costs and How to Choose a Certification Body",
      },
      {
        type: "p",
        text: "Costs consist of consultancy services (optional but greatly accelerating) and the certification body's fees (wide variation — make sure the body is KAN-accredited or a reputable international one). Beware of cheap certificates from unaccredited bodies: they get rejected in tenders and damage reputation.",
      },
      CTA_EN,
    ],
  },
  {
    slug: "kesalahan-umkm-perizinan",
    cat: "umkm",
    date: "2026-07-08",
    dateModified: "2026-07-10",
    minutes: 6,
    image: "/images/blog/kesalahan-umkm-perizinan.png",
    titleId: "5 Kesalahan Fatal UMKM saat Mengurus Perizinan (dan Cara Menghindarinya)",
    titleEn: "5 Fatal SME Mistakes When Handling Business Licenses (and How to Avoid Them)",
    excerptId:
      "Salah KBLI, abaikan izin turunan, sampai percaya joki ilegal — lima kesalahan perizinan ini paling sering merugikan UMKM Indonesia. Kenali dan hindari sejak awal.",
    excerptEn:
      "Wrong KBLI, ignoring derivative licenses, to trusting illegal brokers — these five licensing mistakes most often hurt Indonesian SMEs. Recognize and avoid them from the start.",
    tags: ["UMKM", "perizinan", "KBLI", "joki perizinan"],
    bodyId: [
      {
        type: "p",
        text: "Berdasarkan ribuan konsultasi yang kami tangani di 38 provinsi, hampir semua masalah perizinan UMKM berulang pada lima pola yang sama. Kabar baiknya: kelima kesalahan itu sepenuhnya bisa dihindari dengan pemetaan yang benar sejak awal — dan sebagian besar justru gratis untuk dicegah.",
      },
      {
        type: "h2",
        text: "Kesalahan 1: Memilih KBLI Asal Banyak",
      },
      {
        type: "p",
        text: "Mitos populer: “semakin banyak KBLI, semakin lengkap”. Kenyataannya, setiap KBLI punya rating risiko dan kewajiban izin berbeda. Menambah KBLI yang tidak dipakai membuat bisnis Anda tervalidasi lebih ketat, kewajiban LKPM/lapor bertambah, dan berpotensi memicu temuan audit. Pilih KBLI yang benar-benar sesuai aktivitas hari ini plus rencana 12 bulan ke depan.",
      },
      {
        type: "h2",
        text: "Kesalahan 2: Menganggap NIB = Izin Lengkap",
      },
      {
        type: "p",
        text: "NIB hanyalah langkah pertama. Untuk KBLI berisiko menengah-tinggi, Anda wajib mengurus izin fungsional: PBG untuk bangunan, izin lingkungan, sertifikat laik fungsi, izin edar, sertifikasi halal, dan lainnya. Banyak UMKM baru menyadari ini ketika marketplace menangguhkan toko mereka atau mitra besar meminta dokumen yang belum ada.",
      },
      {
        type: "h2",
        text: "Kesalahan 3: Alamat Usaha Tidak Tertib Dokumen",
      },
      {
        type: "p",
        text: "Alamat rumah untuk usaha tetap sah, tetapi harus didukung dokumen: surat keterangan domisili dari kelurahan, bukti kepemilikan/sewa, dan bila dipersyakatkan, persetujuan lingkungan. Untuk usaha produksi di kawasan perumahan, sering muncul permasalahan izin lingkungan — pemetaan lokasi harus dilakukan sebelum NIB, bukan sesudah.",
      },
      {
        type: "h2",
        text: "Kesalahan 4: Percaya Joki dan Rekening Tidak Resmi",
      },
      {
        type: "p",
        text: "Setiap bulan kami menerima laporan UMKM yang ditipu “joki perizinan” — dokumen tidak terbit, uang hilang, bahkan NIB palsu dibuat di situs tiruan. Aturan aman: seluruh proses resmi gratis atau berbiaya PNBP transparan; jangan pernah transfer ke rekening pribadi; minta akses akun OSS di nama Anda sendiri, bukan di nama perantara.",
      },
      {
        type: "list",
        items: [
          "Selalu verifikasi situs resmi: oss.go.id untuk NIB, dan domain resmi instansi lainnya.",
          "Simpan bukti pembayaran PNBP atas nama badan usaha Anda.",
          "Minta kontrak tertulis bila memakai jasa konsultan — profesional tidak keberatan.",
          "Verifikasi keaslian sertifikat melalui kanal resmi instansi penerbit.",
        ],
      },
      {
        type: "h2",
        text: "Kesalahan 5: Tidak Menjaga Kelengkapan Pasca-Terbit",
      },
      {
        type: "p",
        text: "Perizinan bukan titik akhir: ada kewajiban lapor (LKPM bagi yang menaikkan modal), perpanjangan (PIRT, sertifikat), dan pembaruan bila KBLI/alamat berubah. Kalahkan kebiasaan buruk ini dengan satu folder digital berisi seluruh dokumen legalitas beserta tanggal jatuh tempo — dan tinjau setiap kuartal.",
      },
      {
        type: "quote",
        text: "Legalitas yang tertib hari ini jauh lebih murah daripada membenahi posisi yang berantakan besok.",
      },
      {
        type: "h2",
        text: "Cara Cepat Menghindari Kelima Kesalahan Itu",
      },
      {
        type: "p",
        text: "Satu langkah sederhana: minta pemetaan perizinan gratis sebelum mengajukan apa pun. Dalam satu sesi konsultasi, Anda akan tahu KBLI mana yang tepat, izin turunan apa yang wajib, urutan pengajuannya, dan estimasi biaya–waktunya. Untuk UMKM, kami menyediakan paket pendampingan khusus dengan biaya ramah — karena melegalisasi usaha seharusnya menjadi awal pertumbuhan, bukan beban baru.",
      },
      CTA_ID,
    ],
    bodyEn: [
      {
        type: "p",
        text: "Based on thousands of consultations we handled across 38 provinces, almost all SME licensing problems repeat the same five patterns. The good news: all five are entirely avoidable with proper mapping from the start — and most are free to prevent.",
      },
      {
        type: "h2",
        text: "Mistake 1: Adding KBLI Codes Carelessly",
      },
      {
        type: "p",
        text: "A popular myth: “the more KBLI codes, the more complete”. In reality, every KBLI carries its own risk rating and license obligations. Adding unused KBLI codes makes your business subject to tighter validation, increases reporting obligations, and can trigger audit findings. Choose KBLI codes that genuinely match today's activities plus your 12-month plan.",
      },
      {
        type: "h2",
        text: "Mistake 2: Assuming NIB = Complete Licensing",
      },
      {
        type: "p",
        text: "The NIB is only the first step. For medium-high risk KBLI, you must process functional licenses: PBG for buildings, environmental permits, feasibility certificates, distribution licenses, halal certification, and more. Many SMEs only realize this when a marketplace suspends their shop or a large partner asks for documents that don't exist yet.",
      },
      {
        type: "h2",
        text: "Mistake 3: Untidy Business Address Documents",
      },
      {
        type: "p",
        text: "Using a home address for business is still valid, but it must be supported by documents: a domicile certificate from the urban village, proof of ownership/lease, and if required, environmental consent. For production activities inside housing estates, environmental permit issues often arise — location mapping must happen before the NIB, not after.",
      },
      {
        type: "h2",
        text: "Mistake 4: Trusting Brokers and Unofficial Accounts",
      },
      {
        type: "p",
        text: "Every month we receive reports of SMEs scammed by “licensing brokers” — documents never issued, money gone, even fake NIBs created on clone sites. The safe rule: all official processes are free or charge transparent PNBP fees; never transfer to personal accounts; demand OSS account access under your own name, not the middleman's.",
      },
      {
        type: "list",
        items: [
          "Always verify official sites: oss.go.id for NIB, and the official domains of other agencies.",
          "Keep PNBP payment receipts under your business entity's name.",
          "Ask for a written contract when using consultant services — professionals don't mind.",
          "Verify certificate authenticity through the issuing agency's official channel.",
        ],
      },
      {
        type: "h2",
        text: "Mistake 5: Neglecting Post-Issuance Compliance",
      },
      {
        type: "p",
        text: "Licensing is not the finish line: there are reporting duties (LKPM for growing capital), renewals (PIRT, certificates), and updates whenever KBLI/address changes. Beat this bad habit with a single digital folder containing all legality documents with their expiry dates — and review it every quarter.",
      },
      {
        type: "quote",
        text: "Compliant legality today is far cheaper than fixing a messy position tomorrow.",
      },
      {
        type: "h2",
        text: "The Fastest Way to Avoid All Five Mistakes",
      },
      {
        type: "p",
        text: "One simple step: request a free licensing map before submitting anything. In a single consultation session, you'll know which KBLI fits, which derivative licenses are mandatory, the submission order, and the estimated cost–time. For SMEs, we provide a special assistance package with friendly pricing — because legalizing a business should be the start of growth, not a new burden.",
      },
      CTA_EN,
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** Validasi slug unik + struktur konten minimal */
export function validatePosts(): string[] {
  const errors: string[] = [];
  const seen = new Set<string>();
  for (const p of POSTS) {
    if (seen.has(p.slug)) errors.push(`Duplicate slug: ${p.slug}`);
    seen.add(p.slug);
    if (!p.titleId || !p.titleEn) errors.push(`Missing title: ${p.slug}`);
    if (!p.excerptId || !p.excerptEn) errors.push(`Missing excerpt: ${p.slug}`);
    if (p.bodyId.length < 4 || p.bodyEn.length < 4)
      errors.push(`Body too short: ${p.slug}`);
  }
  return errors;
}

/** Artikel terbaru dulu */
export const POSTS_NEWEST = [...POSTS].sort((a, b) =>
  b.date.localeCompare(a.date)
);
