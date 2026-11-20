import type { Service } from "./services-types";
import { iataProduct } from "./iata";

/**
 * GARIS PRODUK IATA 2026 (v3.8.0) — 4 layanan unggulan pada kategori
 * "pariwisata": 1 halaman pilar + 3 halaman produk (GoLite/GoStandard/GoGlobal).
 * Disiplin klaim (wajib): konsultan independen, tanpa klaim afiliasi resmi
 * IATA, tanpa jaminan persetujuan, harga = jasa konsultasi (biaya resmi IATA
 * terpisah), financial security selalu "dinilai IATA sesuai profil".
 * Harga diambil dari src/data/iata.ts — satu sumber, tidak pernah di-hardcode.
 */

const P = {
  golite: iataProduct("golite"),
  gostandard: iataProduct("gostandard"),
  goglobal: iataProduct("goglobal"),
};

export const SERVICES_IATA: Service[] = [
  // ============ IATA — PILAR ============
  {
    slug: "konsultasi-akreditasi-iata",
    cat: "pariwisata",
    nameId: "Konsultasi Akreditasi IATA untuk Travel Agent",
    nameEn: "IATA Accreditation Consultancy for Travel Agents",
    shortId:
      "Konsultasi & pendampingan persiapan akreditasi IATA: pemilihan model (GoLite/GoStandard/GoGlobal), review dokumen korporasi, penilaian kesiapan finansial, hingga pendampingan aplikasi.",
    shortEn:
      "Consultancy & application preparation for IATA accreditation: model selection (GoLite/GoStandard/GoGlobal), corporate document review, financial readiness assessment, to application assistance.",
    descId:
      "Akreditasi IATA adalah bagian dari kerangka Agency Programme yang memungkinkan travel agent yang memenuhi syarat berpartisipasi dalam sistem distribusi tiket internasional (BSP). Model yang tepat bergantung pada kebutuhan bisnis, struktur operasional, kesiapan finansial, dan persyaratan negara yang berlaku — memilih model tanpa memahami implikasinya sering menimbulkan masalah persiapan yang sebenarnya bisa dihindari. GConsultant menyediakan konsultasi independen dan pendampingan persiapan aplikasi: penilaian kesiapan awal, review dokumen korporasi dan legalitas, penilaian kesiapan finansial, hingga penyiapan berkas aplikasi sesuai model yang dipilih. Kewenangan evaluasi kelayakan, persyaratan, financial security, dan keputusan akreditasi sepenuhnya berada di tangan IATA. Harga jasa konsultasi mulai Rp9.750.000 — biaya resmi IATA selalu dinyatakan terpisah dalam quotation.",
    descEn:
      "IATA accreditation is part of the Agency Programme framework that enables eligible travel agents to participate in the international ticketing distribution system (BSP). The right model depends on business needs, operating structure, financial readiness, and applicable country requirements — choosing a model without understanding its implications often leads to avoidable preparation problems. GConsultant provides independent consultancy and application preparation assistance: initial readiness assessment, corporate document and licensing review, financial readiness assessment, up to application file preparation for the selected model. Authority over eligibility evaluation, requirements, financial security, and the accreditation decision rests entirely with IATA. Consultancy fees start at Rp9,750,000 — official IATA fees are always stated separately in the quotation.",
    benefitsId: [
      "Pemilihan model akreditasi yang tepat sejak awal — GoLite, GoStandard, atau GoGlobal",
      "Review menyeluruh dokumen korporasi, legalitas, dan lisensi usaha perjalanan",
      "Penilaian kesiapan finansial sebelum aplikasi diajukan ke IATA",
      "Pendampingan administratif terstruktur dari persiapan hingga handover dokumen",
    ],
    benefitsEn: [
      "The right accreditation model from day one — GoLite, GoStandard, or GoGlobal",
      "Comprehensive review of corporate documents, legality, and travel business licensing",
      "Financial readiness assessed before the application is submitted to IATA",
      "Structured administrative assistance from preparation to document handover",
    ],
    reqId: [
      "Akta pendirian & perubahan terakhir beserta persetujuan/pemberitahuan AHU",
      "NIB dan NPWP perusahaan",
      "Izin usaha perjalanan/biro perjalanan yang relevan (mis. legalitas biro perjalanan wisata)",
      "Laporan keuangan perusahaan terkini",
      "Informasi rekening bank perusahaan & data direksi/perwakilan resmi",
      "Dokumen pendukung sesuai checklist resmi IATA terkini untuk negara Anda",
    ],
    reqEn: [
      "Deed of establishment & latest amendments with AHU approval/notification",
      "Company NIB and NPWP",
      "Relevant travel agency licensing (e.g., travel bureau legality)",
      "Latest company financial statements",
      "Company bank account information & directors/authorized representatives data",
      "Supporting documents per the latest official IATA checklist for your country",
    ],
    stepsId: [
      "Discovery — memahami profil & rencana usaha perjalanan Anda",
      "Assessment — review legal, operasional, dan kesiapan finansial",
      "Gap analysis — identifikasi kekurangan & tindakan perbaikan",
      "Model assessment — rekomendasi GoLite / GoStandard / GoGlobal",
      "Preparation — penyiapan dokumen & bahan aplikasi",
      "Assistance — pendampingan proses administrasi aplikasi",
      "Follow-up — koordinasi klarifikasi & tugas lanjutan yang disepakati",
      "Handover — serah terima dokumentasi & panduan langkah berikutnya",
    ],
    stepsEn: [
      "Discovery — understanding your travel business profile & plans",
      "Assessment — review of legal, operational, and financial readiness",
      "Gap analysis — identifying deficiencies & corrective actions",
      "Model assessment — GoLite / GoStandard / GoGlobal recommendation",
      "Preparation — document & application material preparation",
      "Assistance — administrative application process support",
      "Follow-up — coordinating agreed clarification & follow-up tasks",
      "Handover — documentation handover & next-step guidance",
    ],
    durationId:
      "Proses konsultasi ±2–8 minggu sesuai kesiapan; timeline akreditasi mengikuti evaluasi IATA",
    durationEn:
      "Consultancy runs ±2–8 weeks depending on readiness; the accreditation timeline follows IATA evaluation",
    priceFrom: `Mulai ${P.golite.pricePromo}`,
    keywords: [
      "konsultasi akreditasi IATA",
      "konsultan IATA Indonesia",
      "akreditasi IATA travel agent",
      "biaya konsultasi IATA",
      "IATA accreditation consultant Indonesia",
      "jasa pendampingan IATA",
      "IATA agency programme Indonesia",
      "BSP travel agent Indonesia",
    ],
    faq: [
      {
        qId: "Apa itu akreditasi IATA?",
        aId: "Akreditasi IATA adalah bagian kerangka yang membuat travel agent yang memenuhi syarat dapat berpartisipasi dalam Agency Programme yang relevan, termasuk akses ke sistem distribusi tiket seperti BSP. Kelayakan, persyaratan, dan keputusannya sepenuhnya dievaluasi dan ditetapkan oleh IATA — peran kami adalah persiapan dan pendampingan administrasi.",
        qEn: "What is IATA accreditation?",
        aEn: "IATA accreditation is part of the framework through which eligible travel agents participate in the relevant IATA Agency Programme, including access to ticketing distribution systems such as BSP. Eligibility, requirements, and decisions are evaluated and set entirely by IATA — our role is preparation and administrative assistance.",
      },
      {
        qId: "Apa perbedaan GoLite dan GoStandard?",
        aId: "GoLite adalah model Standard Accreditation tanpa cash facility, sedangkan GoStandard adalah model Standard Accreditation dengan cash facility sesuai ketentuan IATA yang berlaku. Pilihan yang tepat bergantung pada kebutuhan metode pembayaran dan kesiapan finansial perusahaan Anda.",
        qEn: "What is the difference between GoLite and GoStandard?",
        aEn: "GoLite is the Standard Accreditation model without cash facility, while GoStandard is the Standard Accreditation model with cash facility under applicable IATA rules. The right choice depends on your company's payment method needs and financial readiness.",
      },
      {
        qId: "Apa itu GoGlobal?",
        aId: "GoGlobal adalah model Multi-Country Accreditation untuk grup travel yang memenuhi syarat dan beroperasi di beberapa negara/lokasi. Model ini bukan sekadar 'upgrade' GoStandard — ia menuntut review terstruktur atas struktur grup, entitas, lokasi, dan kesiapan finansial lintas negara.",
        qEn: "What is GoGlobal?",
        aEn: "GoGlobal is the Multi-Country Accreditation model for qualifying travel agency groups operating across multiple countries and locations. It is not simply an 'upgrade' of GoStandard — it requires a structured review of group structure, entities, locations, and cross-country financial readiness.",
      },
      {
        qId: "Apakah travel agent yang baru berdiri bisa mendaftar?",
        aId: "Perusahaan baru dapat mempersiapkan diri untuk mengajukan, namun kelayakan dan persyaratannya dievaluasi langsung oleh IATA sesuai ketentuan yang berlaku. Kami membantu penilaian kesiapan awal — legalitas, dokumen, dan kesiapan finansial — agar aplikasi disiapkan dengan benar sejak awal.",
        qEn: "Can a newly established travel agent apply?",
        aEn: "A newly established company can prepare to apply, but eligibility and requirements are evaluated directly by IATA under the applicable rules. We help with an initial readiness assessment — legality, documents, and financial readiness — so the application is prepared correctly from the start.",
      },
      {
        qId: "Apakah konsultasi ini menjamin persetujuan IATA?",
        aId: "Tidak. GConsultant adalah konsultan independen dan tidak memiliki afiliasi resmi dengan IATA; kami tidak dapat menjamin persetujuan. IATA memegang kewenangan penuh atas evaluasi, persyaratan, financial security, dan keputusan akreditasi. Yang kami jamin adalah kualitas persiapan dan ketertiban administrasi aplikasi Anda.",
        qEn: "Does this consultancy guarantee IATA approval?",
        aEn: "No. GConsultant is an independent consultancy with no official affiliation with IATA; we cannot guarantee approval. IATA retains full authority over evaluation, requirements, financial security, and accreditation decisions. What we commit to is the quality of your preparation and the orderliness of your application administration.",
      },
      {
        qId: "Apakah biaya resmi IATA sudah termasuk dalam harga?",
        aId: "Tidak. Harga kami adalah jasa konsultasi dan pendampingan. Application fee, annual fee, financial security, audit, notaris, terjemahan tersumpah, biaya bank, dan pajak merupakan biaya resmi/pihak ketiga yang dinyatakan terpisah dalam quotation.",
        qEn: "Are official IATA fees included in the price?",
        aEn: "No. Our price is for consultancy and assistance services. The application fee, annual fee, financial security, audit, notary, sworn translation, bank charges, and taxes are official/third-party costs stated separately in the quotation.",
      },
    ],
  },

  // ============ IATA — GOLITE ============
  {
    slug: "iata-golite",
    cat: "pariwisata",
    nameId: "IATA GoLite — Standard Accreditation tanpa Cash Facility",
    nameEn: "IATA GoLite — Standard Accreditation without Cash Facility",
    shortId:
      "Pendampingan aplikasi GoLite untuk travel agent yang tidak memerlukan fasilitas tunai — review dokumen, kesiapan finansial, dan administrasi aplikasi.",
    shortEn:
      "GoLite application assistance for travel agents that do not require a cash facility — document review, financial readiness, and application administration.",
    descId:
      "IATA GoLite adalah model Standard Accreditation tanpa cash facility standar. Model ini dapat dipertimbangkan oleh travel agent yang berniat beroperasi menggunakan metode pembayaran yang diizinkan dalam program GoLite yang berlaku, termasuk kartu kredit dan/atau IATA EasyPay sesuai aturan IATA. GConsultant menata review dokumen korporasi, legalitas usaha perjalanan, kesiapan finansial, dan persyaratan administrasi secara terorganisir sehingga aplikasi Anda siap diajukan. Catatan penting: GoLite tidak menjamin bebas financial security dalam segala keadaan — financial security kondisional tetap mungkin berlaku sesuai profil pemohon dan aturan IATA yang berlaku. Harga jasa konsultasi: katalog Rp19.500.000, Promo Konsultasi 2026 Rp9.750.000; seluruh biaya resmi IATA dinyatakan terpisah.",
    descEn:
      "IATA GoLite is the Standard Accreditation model without a standard cash facility. It may be considered by travel agents that intend to operate using payment methods permitted under the applicable GoLite programme, including credit cards and/or IATA EasyPay according to IATA rules. GConsultant organizes the review of corporate documents, travel business licensing, financial readiness, and administrative requirements so your application is ready to submit. Important note: GoLite does not guarantee the absence of financial security in all circumstances — conditional financial security may still apply depending on the applicant profile and applicable IATA rules. Consultancy fee: catalog Rp19,500,000, 2026 Consultancy Promo Rp9,750,000; all official IATA fees are stated separately.",
    benefitsId: [
      "Tanpa cash facility standar — relevan untuk usaha tanpa kebutuhan fasilitas tunai",
      "Alternatif pembayaran melalui metode yang diizinkan program GoLite",
      "Persyaratan finansial berbeda dari GoStandard — lebih fokus pada profil operasional",
      "Proses persiapan terorganisir: dokumen → kesiapan → aplikasi → handover",
    ],
    benefitsEn: [
      "No standard cash facility — relevant for businesses without cash facility needs",
      "Alternative payments via methods permitted under the GoLite programme",
      "Financial requirements differ from GoStandard — more focused on operational profile",
      "An organized preparation process: documents → readiness → application → handover",
    ],
    reqId: [
      "Akta pendirian & perubahan terakhir, persetujuan/pemberitahuan AHU",
      "NIB & NPWP perusahaan",
      "Izin usaha perjalanan/biro perjalanan yang relevan",
      "Laporan keuangan perusahaan & informasi rekening bank perusahaan",
      "Data direksi & perwakilan resmi yang ditunjuk",
      "Dokumen pendukung sesuai checklist resmi IATA terkini",
    ],
    reqEn: [
      "Deed of establishment & latest amendments, AHU approval/notification",
      "Company NIB & NPWP",
      "Relevant travel agency licensing",
      "Company financial statements & company bank account information",
      "Directors & designated authorized representatives data",
      "Supporting documents per the latest official IATA checklist",
    ],
    stepsId: [
      "Konsultasi awal & penilaian kelayakan awal",
      "Review dokumen korporasi & legalitas",
      "Review lisensi usaha perjalanan",
      "Review kesiapan finansial (termasuk potensi security kondisional)",
      "Penyiapan dokumen & bahan aplikasi",
      "Pendampingan proses aplikasi administratif",
      "Koordinasi klarifikasi & follow-up yang disepakati",
      "Panduan administratif pasca-persetujuan",
    ],
    stepsEn: [
      "Initial consultation & preliminary eligibility assessment",
      "Corporate document & legality review",
      "Travel business licensing review",
      "Financial readiness review (including potential conditional security)",
      "Document & application material preparation",
      "Administrative application process assistance",
      "Agreed clarification & follow-up coordination",
      "Post-approval administrative guidance",
    ],
    durationId:
      "Proses konsultasi ±2–6 minggu sesuai kesiapan dokumen; keputusan akreditasi mengikuti evaluasi IATA",
    durationEn:
      "Consultancy ±2–6 weeks depending on document readiness; the accreditation decision follows IATA evaluation",
    priceFrom: P.golite.pricePromo,
    keywords: [
      "IATA GoLite",
      "IATA GoLite Indonesia",
      "konsultan GoLite",
      "biaya akreditasi IATA GoLite",
      "IATA accreditation without cash facility",
      "IATA EasyPay travel agent",
      "jasa daftar akreditasi IATA",
      "GoLite consultancy Indonesia",
    ],
    faq: [
      {
        qId: "Apa itu akreditasi IATA GoLite?",
        aId: "GoLite adalah model Standard Accreditation tanpa cash facility standar — dirancang bagi travel agent yang tidak memerlukan fasilitas tunai dan akan menggunakan metode pembayaran yang diizinkan program GoLite (kartu kredit dan/atau IATA EasyPay) sesuai aturan IATA yang berlaku.",
        qEn: "What is IATA GoLite accreditation?",
        aEn: "GoLite is the Standard Accreditation model without a standard cash facility — designed for travel agents that do not require a cash facility and will use payment methods permitted under the GoLite programme (credit cards and/or IATA EasyPay) according to applicable IATA rules.",
      },
      {
        qId: "Apakah GoLite pasti bebas financial security?",
        aId: "Tidak dijamin. GoLite tidak memiliki cash facility standar, tetapi financial security kondisional tetap mungkin dikenakan sesuai profil pemohon dan aturan IATA yang berlaku. Kami membantu menilai kesiapan Anda terhadap kemungkinan tersebut — penetapan akhirnya selalu di tangan IATA.",
        qEn: "Is GoLite always free of financial security?",
        aEn: "Not guaranteed. GoLite has no standard cash facility, but conditional financial security may still apply depending on the applicant profile and applicable IATA rules. We help assess your readiness for that possibility — the final determination always rests with IATA.",
      },
      {
        qId: "Metode pembayaran apa yang dapat digunakan di GoLite?",
        aId: "Program GoLite mengizinkan metode pembayaran tertentu — umumnya kartu kredit dan/atau IATA EasyPay — sesuai aturan yang berlaku. Daftar metode yang tepat dapat berubah; kami membantu memverifikasi terhadap referensi resmi IATA terkini sebelum Anda memutuskan.",
        qEn: "Which payment methods can be used under GoLite?",
        aEn: "The GoLite programme permits specific payment methods — generally credit cards and/or IATA EasyPay — under applicable rules. The exact list can change; we help verify against the latest official IATA references before you decide.",
      },
      {
        qId: "Apakah nanti bisa pindah ke GoStandard?",
        aId: "Bila kebutuhan bisnis berubah (misalnya mulai memerlukan cash facility), pengubahan model mengikuti proses dan ketentuan IATA yang berlaku dan dievaluasi ulang oleh IATA. Kami membantu menilai kesiapan finansial dan administrasi untuk peralihan tersebut.",
        qEn: "Can we switch to GoStandard later?",
        aEn: "If business needs change (for example, a cash facility becomes necessary), changing models follows the applicable IATA process and rules and is re-evaluated by IATA. We help assess the financial and administrative readiness for such a transition.",
      },
      {
        qId: "Berapa biaya jasa konsultasi GoLite?",
        aId: "Harga katalog Rp19.500.000; Promo Konsultasi 2026 Rp9.750.000 (berlaku selama diumumkan). Harga adalah jasa konsultasi & pendampingan — application fee, annual fee, financial security, dan biaya resmi lain dari IATA/pihak ketiga dinyatakan terpisah dalam quotation.",
        qEn: "How much is the GoLite consultancy fee?",
        aEn: "Catalog price Rp19,500,000; 2026 Consultancy Promo Rp9,750,000 (valid while announced). The price covers consultancy & assistance — the application fee, annual fee, financial security, and other official IATA/third-party costs are stated separately in the quotation.",
      },
    ],
  },

  // ============ IATA — GOSTANDARD ============
  {
    slug: "iata-gostandard",
    cat: "pariwisata",
    nameId: "IATA GoStandard — Standard Accreditation dengan Cash Facility",
    nameEn: "IATA GoStandard — Standard Accreditation with Cash Facility",
    shortId:
      "Konsultasi GoStandard untuk travel agent yang memerlukan cash facility — penilaian kesiapan finansial menjadi kunci persiapan aplikasi.",
    shortEn:
      "GoStandard consultancy for travel agencies requiring a cash facility — financial readiness assessment is the key to application preparation.",
    descId:
      "IATA GoStandard adalah model Standard Accreditation dengan cash facility sesuai ketentuan IATA yang berlaku — relevan bagi travel agent yang membutuhkan fasilitas tunai dalam operasional tiketnya. Kesiapan finansial adalah pertimbangan utama model ini: kriteria finansial, persyaratan laporan keuangan (laporan audited bila disyaratkan, atau neraca pembuka untuk perusahaan baru yang memenuhi syarat), dan potensi financial security harus dievaluasi dengan cermat sebelum aplikasi diajukan. GConsultant membantu menilai kesiapan finansial perusahaan, memetakan dokumen yang diminta, dan menata administrasi aplikasi dari awal hingga handover. Jumlah financial security ditetapkan oleh IATA sesuai profil pemohon — kami membantu kesiapan, bukan menentukan angkanya. Harga jasa konsultasi: katalog Rp37.500.000, Promo Konsultasi 2026 Rp18.750.000; biaya resmi IATA dinyatakan terpisah.",
    descEn:
      "IATA GoStandard is the Standard Accreditation model with cash facility under applicable IATA rules — relevant for travel agents that need a cash facility in their ticketing operations. Financial readiness is this model's main consideration: financial criteria, financial statement requirements (audited statements where required, or an opening balance sheet for qualifying newly established companies), and potential financial security must be carefully evaluated before the application is submitted. GConsultant helps assess your company's financial readiness, map the requested documents, and organize application administration from start to handover. The financial security amount is set by IATA according to the applicant profile — we help with readiness, not with setting the figure. Consultancy fee: catalog Rp37,500,000, 2026 Consultancy Promo Rp18,750,000; official IATA fees are stated separately.",
    benefitsId: [
      "Akses cash facility sesuai ketentuan IATA yang berlaku",
      "Penilaian kriteria & kesiapan finansial yang menyeluruh sebelum aplikasi",
      "Pemetaan persyaratan laporan keuangan — audited atau neraca pembuka",
      "Kesiapan menghadapi potensi financial security tanpa kejutan",
    ],
    benefitsEn: [
      "Cash facility access under applicable IATA rules",
      "Comprehensive financial criteria & readiness assessment before applying",
      "Mapped financial statement requirements — audited statements or opening balance sheet",
      "Readiness for potential financial security with no surprises",
    ],
    reqId: [
      "Laporan keuangan audited (bila disyaratkan) atau neraca pembuka untuk perusahaan baru yang memenuhi syarat",
      "Akta pendirian & perubahan terakhir, persetujuan/pemberitahuan AHU",
      "NIB & NPWP perusahaan",
      "Izin usaha perjalanan yang relevan",
      "Informasi rekening bank perusahaan",
      "Dokumen pendukung sesuai checklist resmi IATA terkini",
    ],
    reqEn: [
      "Audited financial statements (where required) or an opening balance sheet for qualifying newly established companies",
      "Deed of establishment & latest amendments, AHU approval/notification",
      "Company NIB & NPWP",
      "Relevant travel agency licensing",
      "Company bank account information",
      "Supporting documents per the latest official IATA checklist",
    ],
    stepsId: [
      "Konsultasi awal & review kelayakan",
      "Review legal korporasi & lisensi usaha perjalanan",
      "Assessment kesiapan finansial sesuai kriteria yang berlaku",
      "Kesiapan financial security (penilaian & pengumpulan data, bukan penetapan angka)",
      "Penyiapan dokumen & bahan aplikasi",
      "Pendampingan proses aplikasi administratif",
      "Assistance klarifikasi & koordinasi follow-up",
      "Handover administratif & panduan langkah berikutnya",
    ],
    stepsEn: [
      "Initial consultation & eligibility review",
      "Corporate legality & travel licensing review",
      "Financial readiness assessment under applicable criteria",
      "Financial security readiness (assessment & data gathering, not setting the amount)",
      "Document & application material preparation",
      "Administrative application process assistance",
      "Clarification assistance & follow-up coordination",
      "Administrative handover & next-step guidance",
    ],
    durationId:
      "Proses konsultasi ±3–8 minggu (lebih lama bila dokumen finansial perlu dilengkapi); keputusan akreditasi mengikuti evaluasi IATA",
    durationEn:
      "Consultancy ±3–8 weeks (longer if financial documents need completing); the accreditation decision follows IATA evaluation",
    priceFrom: P.gostandard.pricePromo,
    keywords: [
      "IATA GoStandard",
      "IATA GoStandard Indonesia",
      "konsultan GoStandard",
      "IATA cash facility",
      "financial security IATA",
      "laporan keuangan audited IATA",
      "akreditasi IATA cash facility",
      "GoStandard consultancy Indonesia",
    ],
    faq: [
      {
        qId: "Apa itu cash facility pada akreditasi IATA?",
        aId: "Cash facility adalah fasilitas tunai dalam sistem penjualan tiket yang tersedia bagi pemohon Standard Accreditation yang memenuhi ketentuan IATA berlaku. GoStandard adalah model Standard Accreditation yang mencakup cash facility tersebut — dengan konsekuensi kriteria finansial dan potensi financial security yang lebih ketat.",
        qEn: "What is the cash facility in IATA accreditation?",
        aEn: "The cash facility is a cash facility in the ticketing system available to Standard Accreditation applicants that meet applicable IATA rules. GoStandard is the Standard Accreditation model that includes this cash facility — with stricter financial criteria and potential financial security implications.",
      },
      {
        qId: "Apakah wajib laporan keuangan audited?",
        aId: "Laporan keuangan audited disyaratkan bila kriteria IATA yang berlaku menuntutnya; perusahaan baru yang memenuhi syarat umumnya dapat menggunakan neraca pembuka. Ketentuan pastinya mengikuti kriteria resmi IATA terkini — kami membantu memetakan mana yang berlaku untuk profil perusahaan Anda.",
        qEn: "Are audited financial statements mandatory?",
        aEn: "Audited financial statements are required when applicable IATA criteria demand them; qualifying newly established companies may generally use an opening balance sheet. The exact rule follows the latest official IATA criteria — we help map which applies to your company profile.",
      },
      {
        qId: "Berapa besar financial security yang harus disiapkan?",
        aId: "Jumlahnya ditetapkan oleh IATA berdasarkan profil dan kriteria yang berlaku — GConsultant tidak menentukan dan tidak dapat membebaskan kewajiban tersebut. Kami membantu Anda memahami mekanismenya, menilai kesiapan, dan menyiapkan data yang diminta.",
        qEn: "How large is the financial security to prepare?",
        aEn: "The amount is set by IATA based on the applicant profile and applicable criteria — GConsultant does not set it and cannot waive the obligation. We help you understand the mechanism, assess readiness, and prepare the requested data.",
      },
      {
        qId: "Dokumen keuangan apa saja yang perlu disiapkan?",
        aId: "Umumnya laporan keuangan terkini perusahaan (audited bila disyaratkan) atau neraca pembuka untuk perusahaan baru yang memenuhi syarat, data rekening bank perusahaan, dan dokumen pendukung sesuai checklist resmi IATA terkini. Daftar persisnya kami susun bersama pada tahap assessment.",
        qEn: "Which financial documents need to be prepared?",
        aEn: "Generally the company's latest financial statements (audited where required) or an opening balance sheet for qualifying new companies, company bank account data, and supporting documents per the latest official IATA checklist. We compile the exact list together during the assessment stage.",
      },
      {
        qId: "Apakah biaya resmi IATA termasuk dalam harga?",
        aId: "Tidak termasuk. Harga Rp37.500.000 (katalog) / Rp18.750.000 (Promo Konsultasi 2026) adalah jasa konsultasi & pendampingan. Application fee, annual fee, financial security, audit, dan biaya resmi lainnya dinyatakan terpisah dalam quotation.",
        qEn: "Are official IATA fees included in the price?",
        aEn: "No. The Rp37,500,000 (catalog) / Rp18,750,000 (2026 Consultancy Promo) price covers consultancy & assistance. The application fee, annual fee, financial security, audit, and other official fees are stated separately in the quotation.",
      },
    ],
  },

  // ============ IATA — GOGLOBAL ============
  {
    slug: "iata-goglobal",
    cat: "pariwisata",
    nameId: "IATA GoGlobal — Akreditasi Multi-Negara",
    nameEn: "IATA GoGlobal — Multi-Country Accreditation",
    shortId:
      "Konsultasi GoGlobal untuk grup travel multi-negara: review struktur grup, pemetaan entitas & lokasi, kesiapan finansial, dan koordinasi aplikasi.",
    shortEn:
      "GoGlobal consultancy for multi-country travel groups: group structure review, entity & location mapping, financial readiness, and application coordination.",
    descId:
      "IATA GoGlobal adalah model Multi-Country Accreditation yang dirancang untuk grup travel yang memenuhi syarat dan beroperasi melalui beberapa negara dan lokasi. Model ini menuntut review terstruktur atas pengaturan grup korporasi, entitas, lokasi operasi, persyaratan lisensi lokal, dan kesiapan finansial lintas negara — ia bukan sekadar 'upgrade' GoStandard, melainkan proyek dengan kompleksitas sendiri. GConsultant menjalankan pendekatan enam fase: discovery, review struktur grup, pemetaan persyaratan negara, penilaian kesiapan finansial, persiapan aplikasi, dan koordinasi administrasi. Harga jasa konsultasi: katalog Rp75.000.000, mulai Rp37.500.000 untuk Promo Konsultasi 2026 — harga final bergantung pada jumlah negara, entitas, lokasi, struktur grup, dan ruang lingkup proyek; seluruh biaya resmi IATA dinyatakan terpisah dalam quotation.",
    descEn:
      "IATA GoGlobal is the Multi-Country Accreditation model designed for qualifying travel groups operating through multiple countries and locations. The model requires a structured review of corporate group arrangements, entities, operating locations, local licensing requirements, and cross-country financial readiness — it is not simply a GoStandard 'upgrade', but a project with its own complexity. GConsultant runs a six-phase approach: discovery, group structure review, country requirements mapping, financial readiness assessment, application preparation, and administrative coordination. Consultancy fee: catalog Rp75,000,000, starting from Rp37,500,000 under the 2026 Consultancy Promo — the final price depends on the number of countries, entities, locations, group structure, and project scope; all official IATA fees are stated separately in the quotation.",
    benefitsId: [
      "Pendekatan proyek terstruktur untuk operasi travel multi-negara",
      "Pemetaan entitas, lokasi, dan persyaratan lisensi lokal tiap negara",
      "Koordinasi dokumentasi lintas entitas dalam satu rencana kerja",
      "Fase proyek jelas: discovery → struktur → negara → finansial → aplikasi → koordinasi",
    ],
    benefitsEn: [
      "A structured project approach for multi-country travel operations",
      "Mapped entities, locations, and local licensing requirements per country",
      "Cross-entity documentation coordination in one work plan",
      "Clear project phases: discovery → structure → countries → financials → application → coordination",
    ],
    reqId: [
      "Struktur organisasi grup & hubungan antar-entitas",
      "Daftar negara & lokasi operasi grup",
      "Dokumen legal tiap entitas (akta, NIB/NPWP atau padanan lokal)",
      "Lisensi usaha perjalanan lokal yang relevan tiap negara/lokasi",
      "Laporan keuangan entitas dan/atau grup",
      "Dokumen pendukung sesuai checklist resmi IATA terkini",
    ],
    reqEn: [
      "Group organizational structure & inter-entity relationships",
      "List of the group's operating countries & locations",
      "Legal documents of each entity (deed, NIB/NPWP or local equivalents)",
      "Relevant local travel agency licensing per country/location",
      "Entity and/or group financial statements",
      "Supporting documents per the latest official IATA checklist",
    ],
    stepsId: [
      "Fase 1 — Discovery & pemahaman struktur grup",
      "Fase 2 — Review struktur grup & relasi entitas",
      "Fase 3 — Pemetaan persyaratan per negara & lokasi",
      "Fase 4 — Penilaian kesiapan finansial lintas entitas",
      "Fase 5 — Persiapan dokumen & aplikasi",
      "Fase 6 — Koordinasi administrasi & follow-up",
    ],
    stepsEn: [
      "Phase 1 — Discovery & group structure understanding",
      "Phase 2 — Group structure & entity relationship review",
      "Phase 3 — Country & location requirements mapping",
      "Phase 4 — Cross-entity financial readiness assessment",
      "Phase 5 — Document & application preparation",
      "Phase 6 — Administrative coordination & follow-up",
    ],
    durationId:
      "Proyek terencana per fase — estimasi disusun setelah pemetaan negara & entitas; keputusan akreditasi mengikuti evaluasi IATA",
    durationEn:
      "A phased project plan — the estimate is set after country & entity mapping; the accreditation decision follows IATA evaluation",
    priceFrom: P.goglobal.pricePromo,
    keywords: [
      "IATA GoGlobal",
      "IATA multi-country accreditation",
      "konsultan GoGlobal",
      "akreditasi IATA multi negara",
      "IATA group accreditation",
      "GoGlobal consultancy Indonesia",
      "travel agency group accreditation",
      "biaya IATA GoGlobal",
    ],
    faq: [
      {
        qId: "Untuk siapa model GoGlobal dirancang?",
        aId: "Untuk grup travel yang memenuhi syarat dengan operasi multi-negara: perusahaan travel dengan beberapa entitas, grup bisnis perjalanan regional, serta perusahaan yang berekspansi ke pasar internasional dan membutuhkan koordinasi akreditasi lintas negara.",
        qEn: "Who is the GoGlobal model designed for?",
        aEn: "For qualifying travel groups with multi-country operations: travel companies with multiple entities, regional travel business groups, and companies expanding into international markets that need cross-country accreditation coordination.",
      },
      {
        qId: "Apakah GoGlobal hanya 'upgrade' dari GoStandard?",
        aId: "Bukan. GoGlobal adalah model Multi-Country Accreditation dengan pertimbangan tingkat grup tersendiri: struktur grup, relasi entitas, lokasi operasi, dan persyaratan lokal per negara. Menyamakannya dengan upgrade GoStandard akan menyesatkan penilaian kompleksitas proyek.",
        qEn: "Is GoGlobal just an upgrade of GoStandard?",
        aEn: "No. GoGlobal is the Multi-Country Accreditation model with its own group-level considerations: group structure, entity relationships, operating locations, and local requirements per country. Treating it as a GoStandard upgrade would misjudge the project's complexity.",
      },
      {
        qId: "Berapa harga final konsultasi GoGlobal?",
        aId: "Promo Konsultasi 2026 dimulai dari Rp37.500.000 (katalog Rp75.000.000). Harga final bergantung pada jumlah negara, entitas, lokasi, struktur grup, dan ruang lingkup — kami menyusun quotation terperinci setelah fase discovery.",
        qEn: "What is the final GoGlobal consultancy price?",
        aEn: "The 2026 Consultancy Promo starts from Rp37,500,000 (catalog Rp75,000,000). The final price depends on the number of countries, entities, locations, group structure, and scope — we prepare a detailed quotation after the discovery phase.",
      },
      {
        qId: "Berapa minimum negara untuk GoGlobal?",
        aId: "Definisi kualifikasi multi-negara mengikuti aturan program IATA yang berlaku dan dapat berubah. Kami membantu mengonfirmasi kriteria terkini terhadap referensi resmi IATA sebelum grup Anda memutuskan model ini.",
        qEn: "What is the minimum number of countries for GoGlobal?",
        aEn: "The multi-country qualification definition follows the applicable IATA programme rules and can change. We help confirm the latest criteria against official IATA references before your group decides on this model.",
      },
      {
        qId: "Apakah biaya resmi IATA termasuk dalam harga?",
        aId: "Tidak. Harga kami adalah jasa konsultasi & koordinasi. Application fee, annual fee, financial security, audit, dan seluruh biaya resmi IATA/pihak ketiga di setiap negara dinyatakan terpisah dalam quotation proyek.",
        qEn: "Are official IATA fees included in the price?",
        aEn: "No. Our price is for consultancy & coordination. The application fee, annual fee, financial security, audit, and all official IATA/third-party costs in each country are stated separately in the project quotation.",
      },
    ],
  },
];
