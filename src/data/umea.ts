/**
 * ============================================================
 * UMEA™ — Universal Minimum Enterprise Architecture
 * Master Dataset (Single Source of Truth)
 * ------------------------------------------------------------
 * Hukum Minimum Usaha™ — metodologi milik GConsultant.
 * Prinsip Z2 (Content Outlives Code): data murni, tanpa UI.
 * Prinsip Z1 (Modular Eternity): dipakai /metodologi, /asesmen,
 * JSON-LD, dan funnel konsultasi — bisa diganti tanpa merobohkan
 * modul lain.
 *
 * © 2026 Gugun Gunara — Trade Secret & Copyright.
 * Weighting, threshold, dan mapping engine TIDAK dipublikasi
 * penuh di luar aplikasi (Lapisan 3 — IP Fortress).
 * ============================================================
 */

/* ---------- TIPE DASAR ---------- */

export interface UmeaLevel {
  id: string; // "UMEA-03"
  people: number;
  code: string; // "Survival Cell"
  nameId: string;
  nameEn: string;
  tagId: string;
  tagEn: string;
  profId: string; // bahasa profesional (ID)
  profEn: string; // bahasa profesional (EN)
  awamId: string; // bahasa awam / analogi (ID)
  awamEn: string; // bahasa awam / analogi (EN)
  docTier: string; // "D-10"
  bestForId: string;
  bestForEn: string;
}

export interface UmeaFunction {
  no: number;
  group: "DIRECTION" | "VALUE" | "MARKET" | "CONTROL" | "PEOPLE" | "INTELLIGENCE" | "RESILIENCE";
  fn: string;
  roleToday: string;
  awam: string;
  whyId: string;
}

export interface UmeaDocTier {
  id: string; // "D-10"
  docs: number;
  nameId: string;
  nameEn: string;
  descId: string;
  descEn: string;
  forWhomId: string;
  forWhomEn: string;
}

export interface UmeaLaw {
  no: number;
  titleId: string;
  titleEn: string;
  lawId: string;
  lawEn: string;
  awamId: string;
}

/* ---------- 6 TINGKAT ORGANISASI (PEOPLE ARCHITECTURE) ---------- */

export const UMEA_LEVELS: UmeaLevel[] = [
  {
    id: "UMEA-03",
    people: 3,
    code: "Survival Cell",
    nameId: "Sel Survival",
    nameEn: "Survival Cell",
    tagId: "Usaha bisa mulai",
    tagEn: "The business can start",
    profId:
      "Tiga orang adalah jumlah minimum yang memungkinkan tiga mesin utama hidup: Arah & Tata Kelola, Operasi & Produk, serta Komersial & Kendali Keuangan. Fungsi hukum, teknologi, dan pemasaran dapat di-outsourcing dengan kendali eksternal yang jelas.",
    profEn:
      "Three people are the minimum to keep three core engines alive: Direction & Governance, Operations & Product, and Commercial & Financial Control. Legal, technology, and marketing can be outsourced under clear external controls.",
    awamId:
      "Seperti gerobak makanan: satu orang menentukan mau jual apa dan ke mana, satu orang memasak dan melayani, satu orang mencari pembeli sekaligus menjaga uang. Kalau cuma satu orang dan ia sakit, gerobak berhenti. Tiga orang, gerobak tetap jalan.",
    awamEn:
      "Like a food cart: one decides what and where to sell, one cooks and serves, one finds buyers and guards the money. With one person, the cart stops when they fall sick. With three, the cart keeps moving.",
    docTier: "D-10",
    bestForId: "UMKM, toko, usaha perorangan, startup tahap awal",
    bestForEn: "MSMEs, shops, solo businesses, early startups",
  },
  {
    id: "UMEA-05",
    people: 5,
    code: "Launch Cell",
    nameId: "Sel Peluncuran",
    nameEn: "Launch Cell",
    tagId: "Usaha mulai profesional",
    tagEn: "The business turns professional",
    profId:
      "Lima fungsi mulai terpisah: Direction, Operations, Product & Technology, Finance & Control, Commercial & Customer. Legal masih memakai external counsel, tetapi setiap fungsi sudah memiliki pemilik tunggal yang jelas.",
    profEn:
      "Five functions begin to separate: Direction, Operations, Product & Technology, Finance & Control, Commercial & Customer. Legal may still use external counsel, but every function now has a single accountable owner.",
    awamId:
      "Kapten + kepala mesin + tukang bangun + bendahara + penjual. Kapal mulai punya struktur — bukan lagi semua orang melakukan semua hal secara acak.",
    awamEn:
      "Captain + chief engineer + builder + treasurer + salesperson. The ship now has a structure — no longer everyone doing everything at random.",
    docTier: "D-21",
    bestForId: "usaha bertumbuh, tim 5 orang, klinik, agensi",
    bestForEn: "growing businesses, 5-person teams, clinics, agencies",
  },
  {
    id: "UMEA-07",
    people: 7,
    code: "Core Organization",
    nameId: "Organisasi Inti",
    nameEn: "Core Organization",
    tagId: "Kelengkapan fungsional",
    tagEn: "Functional completeness",
    profId:
      "Tujuh fungsi kritis wajib hidup: Direction, Operations, Technology, Finance, Legal & Compliance, Customer & Product, Revenue & Partnership. Prinsip Seven Critical Functions: satu orang boleh memegang lebih dari satu fungsi, tetapi satu fungsi tidak boleh tanpa pemilik.",
    profEn:
      "Seven critical functions must be alive: Direction, Operations, Technology, Finance, Legal & Compliance, Customer & Product, Revenue & Partnership. Seven Critical Functions Principle: one person may hold multiple functions, but no function may be left ownerless.",
    awamId:
      "Tujuh peran wajib ada: penentu arah, penggerak harian, pembuat mesin, penjaga uang, pelindung hukum, pendengar pelanggan, pencari uang & mitra. Hilang satu, roda berhenti.",
    awamEn:
      "Seven roles must exist: the direction-setter, the daily mover, the machine builder, the money guard, the legal shield, the customer listener, the money-and-partners finder. Lose one, the wheel stops.",
    docTier: "D-21",
    bestForId: "perusahaan menengah, manufaktur kecil, distributor",
    bestForEn: "mid-size companies, small manufacturers, distributors",
  },
  {
    id: "UMEA-10",
    people: 10,
    code: "Operational Organization",
    nameId: "Organisasi Operasional",
    nameEn: "Operational Organization",
    tagId: "Kelengkapan operasional",
    tagEn: "Operational completeness",
    profId:
      "Formula emas pertama: 7 pemilik fungsi + 3 eksekutor (Full-Stack Developer, Finance & Admin Executive, Community & Field Coordinator). Kepemimpinan dan pelaksanaan terpisah sehingga harian tidak lagi bergantung pada C-suite.",
    profEn:
      "The first golden formula: 7 functional owners + 3 executors (Full-Stack Developer, Finance & Admin Executive, Community & Field Coordinator). Leadership and execution separate so daily work no longer depends on the C-suite.",
    awamId:
      "Tujuh komandan ditambah tiga prajurit andalan: tukang bangunan digital, juru catat harian, dan mata-telinga lapangan. Pimpinan memutuskan, pekerjaan harian tetap berjalan walau pimpinan rapat sepanjang hari.",
    awamEn:
      "Seven commanders plus three reliable soldiers: the digital builder, the daily bookkeeper, the eyes and ears in the field. Leaders decide; daily work keeps flowing even when leaders are in meetings all day.",
    docTier: "D-39",
    bestForId: "perusahaan multi-cabang, startup Series A, koperasi menengah",
    bestForEn: "multi-branch companies, Series A startups, mid cooperatives",
  },
  {
    id: "UMEA-15",
    people: 15,
    code: "Scale Organization",
    nameId: "Organisasi Skala",
    nameEn: "Scale Organization",
    tagId: "Siap scale-up",
    tagEn: "Ready to scale",
    profId:
      "Spesialisasi + kedalaman (depth): setiap fungsi mulai memiliki Lead + Executor + spesialis pendukung (QA, marketing, customer support, analis). Organisasi mampu menerima kompleksitas multi-produk, multi-cabang, dan investor.",
    profEn:
      "Specialization + depth: each function gains Lead + Executor + supporting specialists (QA, marketing, customer support, analysts). The organization can absorb multi-product, multi-branch, and investor complexity.",
    awamId:
      "Bukan lagi satu orang satu peran — tiap divisi punya tim kecil. Kalau satu orang resign, ada yang bisa mengambil alih tanpa panik. Kapal kini punya cadangan di setiap posisi penting.",
    awamEn:
      "No longer one person per role — each division has a small team. If one resigns, someone takes over without panic. The ship now has backup at every critical post.",
    docTier: "D-39 / D-75",
    bestForId: "perusahaan besar, grup usaha, franchise",
    bestForEn: "large companies, business groups, franchises",
  },
  {
    id: "UMEA-21",
    people: 21,
    code: "Resilient Organization",
    nameId: "Organisasi Tangguh",
    nameEn: "Resilient Organization",
    tagId: "Ketahanan institusional",
    tagEn: "Institutional resilience",
    profId:
      "Hukum Redundansi: setiap fungsi kritis memiliki Lead + Executor + Backup/Analyst — 7 grup fungsi × 3 lapis = 21. Tidak ada fungsi kritis yang bergantung permanen pada satu manusia. Inilah standar resilient enterprise.",
    profEn:
      "The Redundancy Law: every critical function has Lead + Executor + Backup/Analyst — 7 function groups × 3 layers = 21. No critical function permanently depends on one individual. This is the resilient enterprise standard.",
    awamId:
      "Setiap posisi penting punya tiga lapis: komandan, pelaksana, dan pengganti siaga. Orang mana pun bisa cuti, sakit, atau pindah — sistem TIDAK ikut mati. Inilah organisasi yang bisa hidup lebih lama dari pendirinya.",
    awamEn:
      "Every critical post has three layers: commander, executor, and standby backup. Anyone can take leave, fall sick, or leave — the system does NOT die with them. This is an organization that can outlive its founder.",
    docTier: "D-75 / D-165",
    bestForId: "holding, asosiasi, federasi, koperasi multipihak, ekosistem",
    bestForEn: "holdings, associations, federations, multiparty cooperatives, ecosystems",
  },
];

/* ---------- 21 FUNGSI KRITIS (FUNCTION-FIRST, BUKAN TITLE-FIRST) ---------- */

export const UMEA_FUNCTIONS: UmeaFunction[] = [
  { no: 1, group: "DIRECTION", fn: "Purpose & Vision", roleToday: "CEO / Founder", awam: "Penentu arah", whyId: "Tanpa arah, semua tenaga terbuang ke mana-mana." },
  { no: 2, group: "DIRECTION", fn: "Strategy", roleToday: "Chief Strategy", awam: "Pembuat peta jalan", whyId: "Arah tanpa strategi hanya impian; strategi mengubah arah menjadi langkah." },
  { no: 3, group: "DIRECTION", fn: "Governance & Decision", roleToday: "Board / Dewan", awam: "Wasit keputusan", whyId: "Keputusan tanpa aturan main memicu konflik dan penyalahgunaan wewenang." },
  { no: 4, group: "VALUE", fn: "Product / Service", roleToday: "CPO / Head of Product", awam: "Pembuat barang/jasa", whyId: "Inilah yang dibayar pelanggan; tanpa produk, tidak ada usaha." },
  { no: 5, group: "VALUE", fn: "Technology & Infrastructure", roleToday: "CTO", awam: "Pembuat mesin", whyId: "Era modern: tanpa alat & sistem, nilai sulit dihasilkan cepat." },
  { no: 6, group: "VALUE", fn: "Operations & Delivery", roleToday: "COO", awam: "Penggerak harian", whyId: "Visi hanya mimpi bila tidak ada yang mengkoordinir pekerjaan sehari-hari." },
  { no: 7, group: "VALUE", fn: "Quality & Improvement", roleToday: "QA / Quality Lead", awam: "Pemeriksa mutu", whyId: "Produksi tanpa kontrol mutu mengikis kepercayaan pelanggan perlahan." },
  { no: 8, group: "MARKET", fn: "Customer & Experience", roleToday: "CX Lead", awam: "Pendengar pelanggan", whyId: "Produk yang tak didengar keluhannya akan ditinggalkan diam-diam." },
  { no: 9, group: "MARKET", fn: "Marketing & Brand", roleToday: "CMO", awam: "Penyampai pesan", whyId: "Barang bagus yang tak terdengar sama saja dengan barang tak ada." },
  { no: 10, group: "MARKET", fn: "Sales & Revenue", roleToday: "CRO / Sales Lead", awam: "Pencari uang", whyId: "Tanpa penjualan, kas terkuras dan usaha kelaparan perlahan." },
  { no: 11, group: "MARKET", fn: "Partnership & Ecosystem", roleToday: "BizDev Lead", awam: "Penjalin mitra", whyId: "Mitra memperluas jangkauan jauh melampaui kekuatan sendiri." },
  { no: 12, group: "CONTROL", fn: "Finance", roleToday: "CFO", awam: "Penjaga uang", whyId: "Banyak usaha mati bukan karena tidak untung, tapi karena kas kering tanpa sadar." },
  { no: 13, group: "CONTROL", fn: "Risk", roleToday: "CRO / Risk Lead", awam: "Penduga bahaya", whyId: "Risiko yang tak dipetakan akan datang di waktu paling salah." },
  { no: 14, group: "CONTROL", fn: "Legal & Compliance", roleToday: "CLO", awam: "Pelindung hukum", whyId: "Tanpa pelindung hukum, bisnis bisa disegel atau digugat kapan saja." },
  { no: 15, group: "CONTROL", fn: "Audit & Assurance", roleToday: "Internal Audit", awam: "Pemeriksa mandiri", whyId: "Yang memegang uang tidak boleh sekaligus memeriksa dirinya sendiri." },
  { no: 16, group: "PEOPLE", fn: "Human Capital", roleToday: "CHRO", awam: "Pengelola manusia", whyId: "Orang yang salah posisi membuat fungsi lain ikut tumbang." },
  { no: 17, group: "PEOPLE", fn: "Leadership & Succession", roleToday: "Board / Mentor", awam: "Penumbuh pemimpin", whyId: "Organisasi yang bergantung pada satu pemimpin mati bersama beliau." },
  { no: 18, group: "INTELLIGENCE", fn: "Data & Analytics", roleToday: "CDO / Data Lead", awam: "Pembaca angka", whyId: "Keputusan tanpa data = menebak dengan uang sungguhan." },
  { no: 19, group: "INTELLIGENCE", fn: "Knowledge & Innovation", roleToday: "Knowledge Lead", awam: "Penjaga ilmu", whyId: "Ilmu yang hanya di kepala satu orang hilang saat ia pergi." },
  { no: 20, group: "RESILIENCE", fn: "Security, Safety & Continuity", roleToday: "CSO / BCP Lead", awam: "Penjaga keselamatan", whyId: "Bencana, kebobolan, atau kerusuhan tak mengenal jadwal usaha." },
  { no: 21, group: "RESILIENCE", fn: "Reputation, Stakeholder & Legacy", roleToday: "Comms / PR Lead", awam: "Penjaga nama baik", whyId: "Nama baik dibangun bertahun-tahun dan runtuh dalam semalam." },
];

/* ---------- 5 TINGKAT DOKUMEN (DOCUMENT ARCHITECTURE) ---------- */

export const UMEA_DOC_TIERS: UmeaDocTier[] = [
  {
    id: "D-10",
    docs: 10,
    nameId: "Minimum Launch Pack",
    nameEn: "Minimum Launch Pack",
    descId:
      "10 dokumen wajib untuk memulai: identitas bisnis, masalah & tujuan, profil pelanggan, katalog produk, harga & model pendapatan, peta proses, matriks peran, checklist legal, kendali kas, dan brief produk/website.",
    descEn:
      "10 mandatory launch documents: business identity, problem & objective, customer profile, product catalog, pricing & revenue model, process map, role matrix, legal checklist, cash control, and product/website brief.",
    forWhomId: "UMKM & usaha baru",
    forWhomEn: "MSMEs & new businesses",
  },
  {
    id: "D-21",
    docs: 21,
    nameId: "Professional Foundation",
    nameEn: "Professional Foundation",
    descId:
      "D-10 + lapisan tata kelola: RACI, SOP, KPI, manajemen risiko, perjalanan pelanggan, vendor, data, keamanan, dan kesinambungan bisnis. Selaras semangat ISO 37000 tentang tata kelola organisasi.",
    descEn:
      "D-10 + a governance layer: RACI, SOPs, KPIs, risk management, customer journey, vendor, data, security, and business continuity. Aligned with the spirit of ISO 37000 on organizational governance.",
    forWhomId: "usaha bertumbuh & profesional",
    forWhomEn: "growing & professional businesses",
  },
  {
    id: "D-39",
    docs: 39,
    nameId: "International Scale",
    nameEn: "International Scale",
    descId:
      "39 dokumen bisnis kelas dunia dalam 6 level: Vision, Strategic, Product & Technology, People & Organization, Ecosystem, hingga Investor — arsitektur JE-P3 yang disempurnakan.",
    descEn:
      "39 world-class business documents in 6 levels: Vision, Strategic, Product & Technology, People & Organization, Ecosystem, up to Investor — the refined JE-P3 architecture.",
    forWhomId: "perusahaan scale-up & investor-ready",
    forWhomEn: "scale-ups & investor-ready companies",
  },
  {
    id: "D-75",
    docs: 75,
    nameId: "Enterprise Architecture",
    nameEn: "Enterprise Architecture",
    descId:
      "Jembatan 39 → 165: dokumentasi untuk banyak unit, cabang, sistem, vendor, dan aliran pendapatan ganda — termasuk tata kelola grup dan kontrol lintas entitas.",
    descEn:
      "The 39 → 165 bridge: documentation for multiple units, branches, systems, vendors, and dual revenue streams — including group governance and cross-entity controls.",
    forWhomId: "perusahaan besar & grup usaha",
    forWhomEn: "large companies & business groups",
  },
  {
    id: "D-165",
    docs: 165,
    nameId: "Institutional Architecture",
    nameEn: "Institutional Architecture",
    descId:
      "Arsitektur puncak PGA: 165 dokumen dalam 20 domain — Identity, Strategy, Governance & Legal, Finance, People, Data, International, Sovereignty Economics, hingga Defense/Resilience. Untuk institusi yang ingin bertahan seabad.",
    descEn:
      "The PGA peak architecture: 165 documents in 20 domains — Identity, Strategy, Governance & Legal, Finance, People, Data, International, Sovereignty Economics, up to Defense/Resilience. For institutions built to last a century.",
    forWhomId: "holding, asosiasi, federasi, koperasi besar",
    forWhomEn: "holdings, associations, federations, large cooperatives",
  },
];

/* ---------- 3 HUKUM BESAR ---------- */

export const UMEA_LAWS: UmeaLaw[] = [
  {
    no: 1,
    titleId: "Hukum Cakupan Fungsional",
    titleEn: "Functional Coverage Law",
    lawId: "Setiap fungsi kritis wajib memiliki penanggung jawab yang jelas — orang boleh merangkap, fungsi tidak boleh yatim.",
    lawEn: "Every critical function must have a clear accountable owner — people may double up, functions may never be orphaned.",
    awamId: "Boleh satu orang pakai banyak topi, tapi tidak boleh ada topi yang tak dipakai siapa pun.",
  },
  {
    no: 2,
    titleId: "Hukum Pemisahan Konflik Kritis",
    titleEn: "Separation of Critical Conflicts Law",
    lawId: "Satu orang tidak boleh mengendalikan fungsi yang saling bertentangan tanpa kendali kompensasi — Sales ≠ approval pembayaran, Finance ≠ audit independen, Developer ≠ approval produksi tunggal.",
    lawEn: "One person must not control conflicting functions without compensating controls — Sales ≠ payment approval, Finance ≠ independent audit, Developer ≠ sole production approval.",
    awamId: "Yang mengisi kas tidak boleh sekaligus memeriksa kas — seperti wasit tak boleh bermain di satu tim.",
  },
  {
    no: 3,
    titleId: "Hukum Kontinuitas",
    titleEn: "Continuity Law",
    lawId: "Tidak ada fungsi kritis yang boleh bergantung permanen pada satu individu — harus ada backup, dokumentasi, dan jalur penggantian.",
    lawEn: "No critical function may permanently depend on one individual — there must be backup, documentation, and a succession path.",
    awamId: "Orang boleh pergi, fungsi harus tetap hidup — itulah beda organisasi dengan kelompok penggemar.",
  },
];

/* ---------- UMEA MATURITY INDEX (UMI) ---------- */

export const UMI_BANDS = [
  { min: 0, max: 20, code: "Fragile", nameId: "Rapuh", nameEn: "Fragile" },
  { min: 21, max: 40, code: "Survival", nameId: "Bertahan", nameEn: "Survival" },
  { min: 41, max: 60, code: "Functional", nameId: "Fungsional", nameEn: "Functional" },
  { min: 61, max: 75, code: "Professional", nameId: "Profesional", nameEn: "Professional" },
  { min: 76, max: 85, code: "Scalable", nameId: "Scalable", nameEn: "Scalable" },
  { min: 86, max: 92, code: "Resilient", nameId: "Tangguh", nameEn: "Resilient" },
  { min: 93, max: 97, code: "Institutional", nameId: "Institusional", nameEn: "Institutional" },
  { min: 98, max: 100, code: "Adaptive", nameId: "Adaptif / Frontier", nameEn: "Adaptive / Frontier" },
] as const;

export function umiBand(score: number): (typeof UMI_BANDS)[number] {
  return UMI_BANDS.find((b) => score >= b.min && score <= b.max) ?? UMI_BANDS[0];
}

/* ---------- UMEA LEVEL DARI SKOR + UKURAN ---------- */

export function umiToLevel(score: number, people: number): UmeaLevel {
  const byPeople = [...UMEA_LEVELS].reverse().find((l) => l.people <= people) ?? UMEA_LEVELS[0];
  const byScore =
    score >= 86 ? UMEA_LEVELS[5]
    : score >= 76 ? UMEA_LEVELS[4]
    : score >= 61 ? UMEA_LEVELS[3]
    : score >= 41 ? UMEA_LEVELS[2]
    : score >= 21 ? UMEA_LEVELS[1]
    : UMEA_LEVELS[0];
  // Ambil yang lebih tinggi antara ukuran tim vs skor — target realistis
  return byPeople.people >= byScore.people ? byPeople : byScore;
}

/* ---------- 12 PERTANYAAN ASESMEN (SCORING ENGINE) ----------
 * Bobot per dimensi = komponen trade secret.
 * Skala jawaban 0-3 (0 = tidak ada, 1 = mulai, 2 = jalan, 3 = terdokumentasi & diaudit).
 */

export interface UmeaQuestion {
  id: string;
  dim: string; // dimensi fungsi (dipetakan ke 21 fungsi via grup)
  group: UmeaFunction["group"];
  qId: string;
  qEn: string;
  weight: number; // bobot internal
}

export const UMEA_QUESTIONS: UmeaQuestion[] = [
  { id: "q1", dim: "Direction", group: "DIRECTION", qId: "Apakah bisnis Anda punya visi, target, dan strategi tertulis yang jelas?", qEn: "Does your business have a clear written vision, targets, and strategy?", weight: 3 },
  { id: "q2", dim: "Governance", group: "DIRECTION", qId: "Apakah keputusan penting punya aturan main (siapa memutuskan apa)?", qEn: "Do key decisions have ground rules (who decides what)?", weight: 2 },
  { id: "q3", dim: "Operations", group: "VALUE", qId: "Apakah pekerjaan harian punya SOP sehingga tidak bergantung pada ingatan orang?", qEn: "Does daily work follow SOPs rather than living in people's heads?", weight: 3 },
  { id: "q4", dim: "Technology", group: "VALUE", qId: "Apakah alat/teknologi inti (sistem, website, mesin) terpelihara dan punya penanggung jawab?", qEn: "Are core tools/technology (systems, website, machines) maintained with a clear owner?", weight: 2 },
  { id: "q5", dim: "Customer", group: "MARKET", qId: "Apakah ada sistem menerima dan menindaklanjuti keluhan/masukan pelanggan?", qEn: "Is there a system to receive and act on customer complaints/feedback?", weight: 2 },
  { id: "q6", dim: "Revenue", group: "MARKET", qId: "Apakah alur penjualan terukur (dari prospek sampai closing)?", qEn: "Is the sales pipeline measured (from lead to closing)?", weight: 2 },
  { id: "q7", dim: "Finance", group: "CONTROL", qId: "Apakah keuangan dicatat terpisah dari uang pribadi, dengan laporan rutin?", qEn: "Are finances recorded separately from personal money, with regular reports?", weight: 3 },
  { id: "q8", dim: "Legal", group: "CONTROL", qId: "Apakah legalitas inti (badan usaha, izin, perizinan KBLI) lengkap dan ter-update?", qEn: "Are core legalities (entity, permits, KBLI licensing) complete and up to date?", weight: 3 },
  { id: "q9", dim: "Audit", group: "CONTROL", qId: "Apakah ada pemeriksaan silang (pencatatan ≠ yang memeriksa)?", qEn: "Is there cross-checking (bookkeeping ≠ the checker)?", weight: 2 },
  { id: "q10", dim: "People", group: "PEOPLE", qId: "Apakah setiap peran kritis punya backup atau dokumentasi penggantian?", qEn: "Does every critical role have a backup or handover documentation?", weight: 3 },
  { id: "q11", dim: "Data", group: "INTELLIGENCE", qId: "Apakah keputusan penting didukung data (angka penjualan, biaya, pelanggan)?", qEn: "Are key decisions supported by data (sales, cost, customer numbers)?", weight: 2 },
  { id: "q12", dim: "Continuity", group: "RESILIENCE", qId: "Jika pemilik/pimpinan utama hilang 30 hari, apakah usaha tetap jalan?", qEn: "If the owner/leader disappears for 30 days, does the business keep running?", weight: 3 },
];

export const UMEA_SCALE = [
  { value: 0, idId: "Tidak ada", idEn: "Not at all", descId: "Sama sekali belum ada", descEn: "Does not exist at all" },
  { value: 1, idId: "Mulai", idEn: "Starting", descId: "Ada niatnya, belum jalan", descEn: "Intended, not running yet" },
  { value: 2, idId: "Berjalan", idEn: "Running", descId: "Jalan tapi belum terdokumentasi", descEn: "Running but undocumented" },
  { value: 3, idId: "Terdokumentasi", idEn: "Documented", descId: "Tercatat, terukur, dan diaudit", descEn: "Recorded, measured, and audited" },
] as const;

/* ---------- MESIN SKOR ----------
 * UMI = Σ(weight × answer) / Σ(3 × weight) × 100
 * Titik lemah = dimensi dengan rasio terendah (prioritas perbaikan).
 */

export interface UmeaResult {
  umi: number;
  band: (typeof UMI_BANDS)[number];
  level: UmeaLevel;
  weakest: { dim: string; ratio: number }[];
  strengths: { dim: string; ratio: number }[];
  docs: UmeaDocTier;
}

export function scoreUmea(answers: Record<string, number>, people: number): UmeaResult {
  let num = 0;
  let den = 0;
  const ratios: { dim: string; ratio: number; weight: number }[] = [];
  for (const q of UMEA_QUESTIONS) {
    const a = Math.max(0, Math.min(3, answers[q.id] ?? 0));
    num += q.weight * a;
    den += q.weight * 3;
    ratios.push({ dim: q.dim, ratio: a / 3, weight: q.weight });
  }
  const umi = den === 0 ? 0 : Math.round((num / den) * 100);
  const sorted = [...ratios].sort((a, b) => a.ratio - b.ratio);
  const level = umiToLevel(umi, people);
  const docs =
    UMEA_DOC_TIERS.find((d) => d.id === level.docTier.split(" / ")[0]) ?? UMEA_DOC_TIERS[0];
  return {
    umi,
    band: umiBand(umi),
    level,
    weakest: sorted.slice(0, 3).map((r) => ({ dim: r.dim, ratio: Math.round(r.ratio * 100) })),
    strengths: [...sorted].reverse().slice(0, 2).map((r) => ({ dim: r.dim, ratio: Math.round(r.ratio * 100) })),
    docs,
  };
}

/* ---------- PIAGAM 2125 (FASE 3 — ARSITEKTUR ABADI) ---------- */

export const PIAGAM_2125 = {
  titleId: "Piagam 2125",
  titleEn: "The 2125 Charter",
  bodyId: [
    "Dilihat dari seratus tahun ke depan, GConsultant berdiri bukan sebagai penjual jasa, melainkan sebagai arsitek ketahanan organisasi Indonesia.",
    "Kami percaya usaha, asosiasi, koperasi, dan negara tidak runtuh karena kehilangan orang — mereka runtuh karena kehilangan fungsi kritis tanpa pengganti. Karena itu setiap karya kami diuji dengan satu pertanyaan: masihkah ini bernilai di tahun 2125?",
    "Kami mewariskan metodologi, bukan tren; arsitektur, bukan sekadar nasihat; dan keberanian moral untuk menolak jalan pintas yang mengkhianati amanah.",
    "Kepada pengguna tahun 2125: semoga sistem yang kami bangun hari ini membuat Anda lebih mudah membangun hari esok Anda.",
  ],
  bodyEn: [
    "Seen from a hundred years ahead, GConsultant stands not as a service vendor but as the architect of organizational resilience for Indonesia.",
    "We believe businesses, associations, cooperatives, and nations do not collapse from losing people — they collapse from losing critical functions without successors. Therefore every work of ours is tested with one question: will this still be valuable in 2125?",
    "We bequeath methodology, not trends; architecture, not mere advice; and the moral courage to refuse shortcuts that betray trust.",
    "To our users in 2125: may the systems we build today make it easier for you to build your tomorrow.",
  ],
} as const;

/* ---------- VALIDATOR (defensive — data harus utuh) ---------- */

export const UMEA_LEVELS_VALID = UMEA_LEVELS.length === 6;
export const UMEA_FUNCTIONS_VALID = UMEA_FUNCTIONS.length === 21;
export const UMEA_DOC_TIERS_VALID = UMEA_DOC_TIERS.length === 5;
export const UMEA_LAWS_VALID = UMEA_LAWS.length === 3;
export const UMEA_QUESTIONS_VALID = UMEA_QUESTIONS.length === 12;
