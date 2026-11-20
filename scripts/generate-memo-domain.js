/* Memo Strategi Dua Domain — GConsultant & Gunara (skill docx: R1 + DM-1, tanpa TOC) */
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, PageNumber, NumberFormat, AlignmentType, HeadingLevel,
  WidthType, BorderStyle, ShadingType, TabStopType, SectionType, TableLayoutType,
  LevelFormat,
} = require("docx");
const fs = require("fs");

/* ---------- palette DM-1 (Deep Cyan) ---------- */
const P = {
  bg: "162235", accent: "37DCF2",
  titleColor: "FFFFFF", subtitleColor: "B0B8C0", metaColor: "90989F", footerColor: "687078",
  headingColor: "0A1628",
  table: { headerBg: "1B6B7A", headerText: "FFFFFF", accentLine: "1B6B7A", innerLine: "C8DDE2", surface: "EDF3F5" },
};

const NB = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: NB, bottom: NB, left: NB, right: NB };
const allNoBorders = { top: NB, bottom: NB, left: NB, right: NB, insideHorizontal: NB, insideVertical: NB };

function estimateTextWidth(text, pt) {
  let w = 0;
  for (const ch of text) {
    const code = ch.codePointAt(0);
    const isCJK = (code >= 0x4e00 && code <= 0x9fff) || (code >= 0x3000 && code <= 0x303f) || (code >= 0xff00 && code <= 0xffef);
    w += isCJK ? pt * 20 : pt * 11;
  }
  return w;
}
function wrapLatin(title, maxWidthTwips, pt) {
  const words = title.split(" ");
  const lines = [];
  let cur = "";
  for (const word of words) {
    const probe = cur ? cur + " " + word : word;
    if (estimateTextWidth(probe, pt) <= maxWidthTwips || !cur) cur = probe;
    else { lines.push(cur); cur = word; }
  }
  if (cur) lines.push(cur);
  if (lines.length > 1 && lines[lines.length - 1].length <= 2) {
    const last = lines.pop();
    lines[lines.length - 1] += " " + last;
  }
  return lines;
}
function calcTitleLayout(title, maxWidthTwips, preferredPt = 40, minPt = 24) {
  let titlePt = preferredPt, lines;
  while (titlePt >= minPt) {
    lines = wrapLatin(title, maxWidthTwips, titlePt);
    if (lines.length <= 3 && lines.every((l) => estimateTextWidth(l, titlePt) <= maxWidthTwips)) break;
    titlePt -= 2;
  }
  if (!lines || lines.length > 3) { titlePt = minPt; lines = wrapLatin(title, maxWidthTwips, minPt).slice(0, 3); }
  return { titlePt, titleLines: lines };
}
function calcCoverSpacing(params) {
  const { titleLineCount = 1, titlePt = 36, hasSubtitle = false, hasEnglishLabel = false,
    metaLineCount = 0, fixedHeight = 800, pageHeight = 16838 } = params;
  const SAFETY = 1200;
  const usable = pageHeight - SAFETY;
  const titleH = titleLineCount * (titlePt * 23 + 200);
  const subH = hasSubtitle ? (12 * 23 + 600) : 0;
  const engH = hasEnglishLabel ? (9 * 23 + 600) : 0;
  const metaH = metaLineCount * (10 * 23 + 100);
  const implicit = 3 * 300;
  const content = titleH + subH + engH + metaH + fixedHeight + implicit;
  const remaining = Math.max(usable - content, 400);
  const FOOTER_MIN = 800;
  const rawTop = Math.floor(remaining * 0.45);
  const rawBottom = Math.floor(remaining * 0.45);
  const bottomSpacing = Math.max(rawBottom, FOOTER_MIN);
  const topSpacing = Math.max(rawTop - Math.max(0, FOOTER_MIN - rawBottom), 400);
  return { topSpacing, midSpacing: Math.max(remaining - topSpacing - bottomSpacing, 0), bottomSpacing };
}

function buildCoverR1(config) {
  const padL = 1200, padR = 800;
  const availableWidth = 11906 - padL - padR - 300;
  const { titlePt, titleLines } = calcTitleLayout(config.title, availableWidth, 40, 24);
  const titleSize = titlePt * 2;
  const spacing = calcCoverSpacing({
    titleLineCount: titleLines.length, titlePt,
    hasSubtitle: !!config.subtitle, hasEnglishLabel: !!config.englishLabel,
    metaLineCount: (config.metaLines || []).length, fixedHeight: 400,
  });
  const accentLeft = { style: BorderStyle.SINGLE, size: 8, color: P.accent, space: 12 };
  const children = [];
  children.push(new Paragraph({ spacing: { before: spacing.topSpacing } }));
  if (config.englishLabel) {
    children.push(new Paragraph({
      indent: { left: padL, right: padR }, spacing: { after: 500 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: P.accent, space: 8 } },
      children: [new TextRun({ text: config.englishLabel.split("").join("  "), size: 18, color: P.accent, font: { ascii: "Calibri", eastAsia: "SimHei" }, characterSpacing: 40 })],
    }));
  }
  for (let i = 0; i < titleLines.length; i++) {
    children.push(new Paragraph({
      indent: { left: padL },
      spacing: { after: i < titleLines.length - 1 ? 100 : 300, line: Math.ceil(titlePt * 23), lineRule: "atLeast" },
      children: [new TextRun({ text: titleLines[i], size: titleSize, bold: true, color: P.titleColor, font: { eastAsia: "SimHei", ascii: "Arial" } })],
    }));
  }
  if (config.subtitle) {
    children.push(new Paragraph({
      indent: { left: padL, right: padR }, spacing: { after: 800, line: 312 },
      children: [new TextRun({ text: config.subtitle, size: 24, color: P.subtitleColor, font: { eastAsia: "Microsoft YaHei", ascii: "Arial" } })],
    }));
  }
  for (const line of config.metaLines || []) {
    children.push(new Paragraph({
      indent: { left: padL + 200 }, spacing: { after: 80 },
      border: { left: accentLeft },
      children: [new TextRun({ text: line, size: 24, color: P.metaColor, font: { eastAsia: "Microsoft YaHei", ascii: "Arial" } })],
    }));
  }
  children.push(new Paragraph({ spacing: { before: spacing.bottomSpacing } }));
  children.push(new Paragraph({
    indent: { left: padL, right: padR },
    border: { top: { style: BorderStyle.SINGLE, size: 2, color: P.accent, space: 8 } },
    spacing: { before: 200 },
    tabStops: [{ type: TabStopType.RIGHT, position: 11906 - padL - padR }],
    children: [
      new TextRun({ text: config.footerLeft || "", size: 16, color: P.footerColor, font: { ascii: "Arial" } }),
      new TextRun({ text: "\t" }),
      new TextRun({ text: config.footerRight || "", size: 16, color: P.footerColor, font: { ascii: "Arial" } }),
    ],
  }));
  return [new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
    borders: allNoBorders,
    rows: [new TableRow({
      height: { value: 16838, rule: "exact" },
      children: [new TableCell({ shading: { type: ShadingType.CLEAR, fill: P.bg }, borders: noBorders, children })],
    })],
  })];
}

/* ---------- body builders ---------- */
function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1, alignment: AlignmentType.CENTER,
    spacing: { before: 360, after: 160, line: 380, lineRule: "atLeast" },
    children: [new TextRun({ text, bold: true, size: 32, color: P.headingColor, font: { ascii: "Times New Roman", eastAsia: "SimHei" } })],
  });
}
function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 240, after: 120, line: 360, lineRule: "atLeast" },
    children: [new TextRun({ text, bold: true, size: 30, color: P.headingColor, font: { ascii: "Times New Roman", eastAsia: "SimHei" } })],
  });
}
function t(text, extra = {}) {
  return new TextRun({ text, size: 24, color: "000000", font: { ascii: "Times New Roman", eastAsia: "SimSun" }, ...extra });
}
function bold(text) { return t(text, { bold: true }); }
function body(runsOrText, opts = {}) {
  const runs = typeof runsOrText === "string" ? [t(runsOrText)] : runsOrText;
  return new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { line: 312, after: opts.after !== undefined ? opts.after : 120 },
    children: runs,
  });
}
function numItem(reference, runsOrText) {
  const runs = typeof runsOrText === "string" ? [t(runsOrText)] : runsOrText;
  return new Paragraph({
    numbering: { reference, level: 0 },
    alignment: AlignmentType.LEFT,
    spacing: { line: 312, after: 80 },
    children: runs,
  });
}
function caption(text) {
  return new Paragraph({
    keepNext: true, alignment: AlignmentType.LEFT,
    spacing: { before: 160, after: 80, line: 312 },
    children: [new TextRun({ text, bold: true, size: 21, color: "000000", font: { ascii: "Times New Roman", eastAsia: "SimSun" } })],
  });
}
function cellPara(text, opts = {}) {
  return new Paragraph({
    alignment: opts.center ? AlignmentType.CENTER : AlignmentType.LEFT,
    spacing: { line: 276 },
    children: [new TextRun({
      text, size: 21, bold: !!opts.bold,
      color: opts.color || "000000",
      font: { ascii: opts.mono ? "Consolas" : "Times New Roman", eastAsia: "SimSun" },
    })],
  });
}
function dataTable(headers, widths, rows, opts = {}) {
  const headerRow = new TableRow({
    tableHeader: true, cantSplit: true,
    children: headers.map((text, i) => new TableCell({
      children: [cellPara(text, { bold: true, color: P.table.headerText, center: !!opts.centerCols && opts.centerCols.includes(i) })],
      shading: { type: ShadingType.CLEAR, fill: P.table.headerBg },
      margins: { top: 70, bottom: 70, left: 120, right: 120 },
      width: { size: widths[i], type: WidthType.PERCENTAGE },
    })),
  });
  const dataRows = rows.map((cells, rIdx) => new TableRow({
    cantSplit: true,
    children: cells.map((cell, i) => new TableCell({
      children: (typeof cell === "object" && cell.lines)
        ? cell.lines.map((ln) => cellPara(ln, { center: !!opts.centerCols && opts.centerCols.includes(i) }))
        : [cellPara(typeof cell === "string" ? cell : cell.text, {
          center: !!opts.centerCols && opts.centerCols.includes(i),
          bold: typeof cell === "object" && cell.bold,
          color: typeof cell === "object" && cell.color,
        })],
      shading: rIdx % 2 === 0
        ? { type: ShadingType.CLEAR, fill: P.table.surface }
        : { type: ShadingType.CLEAR, fill: "FFFFFF" },
      margins: { top: 60, bottom: 60, left: 120, right: 120 },
      width: { size: widths[i], type: WidthType.PERCENTAGE },
    })),
  }));
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 2, color: P.table.accentLine },
      bottom: { style: BorderStyle.SINGLE, size: 2, color: P.table.accentLine },
      left: NB, right: NB,
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: P.table.innerLine },
      insideVertical: NB,
    },
    rows: [headerRow, ...dataRows],
  });
}

/* ---------- content ---------- */
const B = [];

/* 1. Ringkasan Keputusan */
B.push(h1("1. Ringkasan Keputusan"));
B.push(body([
  t("Sidang lintas disiplin ini memutuskan satu hal utama: "),
  bold("jangan sekadar menonaktifkan gunara.web.id — matikan cermin gandanya, migrasikan ekuitasnya, lalu lahirkan kembali sebagai situs niche arsitektur."),
  t(" Temuan medan tanggal 20 November 2026: gunara.web.id saat ini menayangkan situs GConsultant yang identik (judul halaman persis sama dengan www.gconsultant.web.id), hanya berbeda alamat. Inilah akar kebingungan SEO Anda — bukan karena dua domain bercampur, melainkan karena dua domain menayangkan konten yang sama."),
]));
B.push(body([
  t("Aturan dasarnya sederhana: satu domain dengan banyak topik yang tak berkaitan membuat Google bingung menentukan identitas; dua domain dengan konten sama membuat saudara kembar berebut satu kursi hasil pencarian; hanya dua domain dengan topik berbeda dan fokus yang saling menopang yang memberi dua pintu ke dua pasar tanpa saling merampas. Rekomendasi final: "),
  bold("gconsultant.web.id tetap menjadi kantor pusat korporat"),
  t(" (perizinan dan legalitas usaha, arsitektur sistem bisnis UMEA, ISO, IATA), sedangkan "),
  bold("gunara.web.id dilahirkan kembali sebagai situs niche arsitektur"),
  t(" di bawah merek pribadi pendiri. Ekuitas halaman lama dipindahkan lewat pengalihan 301 sebelum situs baru berdiri, dan domain gunara diperkuat dengan record anti-pemalsuan surat karena email tetap dipusatkan di gconsultant. Rincian tiga fase, pembagian keyword, serta roadmap empat minggu tersaji pada Bab 4 sampai Bab 7."),
]));

/* 2. Fakta medan */
B.push(h1("2. Fakta Medan: Apa yang Sebenarnya Terjadi Hari Ini"));
B.push(body([
  t("Empat fakta hasil pemeriksaan langsung menjadi dasar putusan. "),
  bold("Pertama"),
  t(", gunara.web.id dan www.gconsultant.web.id menayangkan aplikasi yang sama persis — keduanya bernilai 200 dan memuat judul GConsultant The Polymathic Problem Solver. Vercel memang mengizinkan beberapa domain pada satu project, sehingga yang Anda lihat adalah satu situs dengan dua wajah alamat. "),
  bold("Kedua"),
  t(", sejak v3.7 (Domain Ascension) alamat kanonik situs adalah www.gconsultant.web.id, jadi mesin pencari seharusnya menggabungkan sinyal ke alamat itu — tetapi pengunjung yang datang lewat gunara tetap melihat alamat berbeda, dan setiap tautan dari luar yang menempel di gunara menjadi sinyal yang tidak optimal. "),
  bold("Ketiga"),
  t(", kedua domain dipegang DNS Vercel dan gunara tidak memiliki record surat sama sekali. "),
  bold("Keempat"),
  t(", di katalog layanan GConsultant sudah ada garis produk rumpun konstruksi-arsitektur (gambar teknis arsitektur dan struktur, sertifikasi keahlian profesi konstruksi), dan metodologi UMEA sendiri adalah arsitektur sistem bisnis — artinya kata arsitektur punya dua pengertian di rumah Anda, dan keduanya perlu dipisahkan tempatnya supaya tidak saling menyeret."),
]));
B.push(caption("Tabel 1: Kondisi aset digital GConsultant per 20 November 2026"));
B.push(dataTable(
  ["Aset", "Kondisi terverifikasi", "Implikasi strategis"],
  [24, 40, 36],
  [
    [{ lines: ["www.gconsultant", ".web.id"] }, "Situs utama v3.9.0, LIVE, kanonik sejak v3.7", "Pusat ekuitas merek — jangan ganggu"],
    ["gunara.web.id", "Menayangkan situs GConsultant yang identik (cermin)", "Sumber kebingungan SEO — harus berubah"],
    ["DNS kedua domain", "Vercel DNS (ns1/ns2.vercel-dns.com)", "Kendali penuh pengalihan di satu tempat"],
    ["Surat gunara.web.id", "Tanpa MX, SPF, DKIM, DMARC", "Peluang: pasang tameng anti-pemalsuan"],
    ["Jejak produk konstruksi-arsitektur", "Gambar teknis, sertifikasi profesi di katalog", "Bahan lahirnya situs niche di gunara"],
    ["Metodologi UMEA", "Arsitektur sistem bisnis milik GConsultant", "Tetap di kantor pusat, bukan di gunara"],
  ]
));

/* 3. Sidang dewan */
B.push(h1("3. Sidang Dewan: Empat Opsi dan Putusannya"));
B.push(body([
  t("Empat jalur dipertimbangkan dari sudut pandang mesin pencari, merek, dan biaya perawatan. Tabel 2 merangkum; paragraf di bawahnya menjelaskan alasan setiap putusan."),
]));
B.push(caption("Tabel 2: Perbandingan empat opsi pengelolaan gunara.web.id"));
B.push(dataTable(
  ["Opsi", "Mekanisme", "Kelebihan", "Kekurangan", "Putusan"],
  [16, 26, 22, 22, 14],
  [
    ["0. Parkir / nonaktif kosong", "Domain disimpan, tidak ada situs", "Nol pekerjaan", "Ekuitas hilang, nama rentan diperebutkan, hasil pencarian nama tak terkendali", { text: "Ditolak", bold: true, color: "7A2E2E" }],
    ["A. Satu domain semua", "301 permanen gunara ke gconsultant", "Ekuitas terkonsolidasi penuh, perawatan minimum", "Kehilangan aset merek kedua; niche arsitektur bercampur di satu domain", "Cadangan"],
    ["B. Dua brand dua niche", "301 ekuitas dulu, lalu situs niche baru di gunara", "Dua pintu dua pasar, otoritas topik bersih, merek pribadi terjaga", "Dua situs dirawat (murah di Vercel)", { text: "Diterima", bold: true, color: "1B6B7A" }],
    ["C. Cermin ganda (kini)", "Satu situs, dua domain, tanpa pengalihan", "Pengunjung semua alamat dilayani", "Sinyal terbelah, risiko duplikasi, merek tak jelas", { text: "Ditolak", bold: true, color: "7A2E2E" }],
  ]
));
B.push(body([
  bold("Mengapa Opsi 0 ditolak. "),
  t("Domain yang dibiarkan kosong adalah aset yang membusuk: tautan dari luar yang pernah menunjuk ke gunara mati tanpa meneruskan kekuatan, halaman yang terindeks hilang satu per satu, dan nama pribadi Anda di hasil pencarian menjadi tak terkendali — bisa diisi siapa saja. Menonaktifkan situs bukanlah tindakan netral; itu keputusan menyerahkan tanah yang sudah Anda bayar."),
]));
B.push(body([
  bold("Mengapa Opsi C (kondisi sekarang) ditolak. "),
  t("Cermin ganda adalah kondisi terburuk yang jarang disadari: semua pekerjaan SEO terbelah ke dua alamat untuk satu konten. Canonical sudah menolong, tetapi Google tetap harus memilih satu alamat setiap kali menayangkan halaman, pengunjung memakai dua alamat yang membuat statistik terpecah, dan merek Anda tampil seperti dua entitas berbeda kepada pelanggan baru. Kebingungan SEO yang Anda rasakan bukan khayalan — inilah bentuk teknisnya."),
]));
B.push(body([
  bold("Mengapa Opsi B diterima dan Opsi A menjadi cadangan. "),
  t("Kekuatan penentu Opsi B: niche arsitektur adalah pasar dengan kata kunci yang sangat berbeda dari perizinan usaha — pemakai jasa desain tidak mengetik kata legalitas, dan sebaliknya. Google menganugerahi otoritas pada domain yang fokus satu topik; dua domain fokus dengan entitas yang terhubung jelas (pendiri sama, Gugun Gunara) memberi dua kursi hasil pencarian sekaligus. Domain bernama pribadi adalah rumah alami untuk merek niche: saat seseorang mencari nama Anda, gunara.web.id menjaga halaman pertama. Opsi A tetap dicadangkan untuk satu skenario: jika akhirnya diputuskan tidak akan ada situs niche sama sekali, maka pengalihan 301 penuh adalah satu-satunya cara menutup gunara dengan hormat."),
]));

/* 4. Rekomendasi */
B.push(h1("4. Rekomendasi: Strategi Dua Brand, Satu Ekuitas"));
B.push(body([
  t("Satu pertanyaan penentu sebelum pelaksanaan: arsitektur yang mana yang akan tinggal di gunara.web.id? "),
  bold("Jawaban A"),
  t(" — layanan rumpun konstruksi dan desain (gambar teknis arsitektur-struktur, sertifikasi profesi konstruksi, kelak studio desain): itu pasien ideal untuk situs niche gunara. "),
  bold("Jawaban B"),
  t(" — yang Anda maksud adalah arsitektur sistem bisnis UMEA: maka UMEA jangan dipindah; ia adalah metode milik korporat dan tetap di gconsultant, sementara gunara ditutup dengan Opsi A. Seluruh rencana di bawah ini mengasumsikan Jawaban A, karena itu yang paling konsisten dengan keputusan Anda mengalihfungsikan gunara dan dengan aset produk yang sudah ada di katalog."),
]));
B.push(h2("4.1 Fase 1 — Migrasi ekuitas (minggu ini)"));
B.push(numItem("list-f1", [t("Petakan halaman gunara yang terindeks: buka Google Search Console (properti domain gunara.web.id; bila belum ada, buat dan verifikasi), lihat laporan Halaman, catat setiap URL yang pernah tayang.")]));
B.push(numItem("list-f1", [t("Susun peta pengalihan: setiap halaman perizinan lama diarahkan ke halaman padanannya di www.gconsultant.web.id; yang tidak punya padanan diarahkan ke beranda. Pengalihan permanen 301 dipasang sebagai redirect Vercel pada project, bukan sekadar tautan.")]));
B.push(numItem("list-f1", [t("Matikan gunara sebagai domain tampilan project GConsultant (hapus dari project atau alihkan ke project baru), pasang peta 301, lalu pantau Search Console dua minggu: indeks lama turun, ekuitas naik ke gconsultant.")]));
B.push(numItem("list-f1", [t("Sambil di sana, pasang tameng surat gunara (Bab 6): tanpa MX, SPF v=spf1 -all, DMARC p=reject — pekerjaan satu sesi di DNS Vercel, sekaligus dengan persiapan email gconsultant dari panduan kemarin.")]));
B.push(h2("4.2 Fase 2 — Kelahiran kembali sebagai situs niche (minggu 2-4)"));
B.push(body([
  t("Situs baru dibangun dengan satu aturan besi: "),
  bold("nol konten yang sama dengan gconsultant"),
  t(". Struktur ringkas tujuh halaman: Beranda (posisi niche dan bukti), Layanan (gambar teknis, sertifikasi profesi, pendampingan proyek), Portofolio (proyek nyata dengan foto dan cerita), Metode (cara kerja studio), Tentang (profil Gugun Gunara dengan markah Person terhubung ke entitas GConsultant), Artikel (satu tulisan mingguan), Kontak. Setiap halaman membawa satu topik dan satu cluster kata kunci — kunci supaya dua domain tidak pernah berebut."),
]));
B.push(h2("4.3 Fase 3 — Mesin SEO terjadwal (berkelanjutan)"));
B.push(body([
  t("Kedua domain didaftarkan sebagai properti domain di satu akun Search Console sehingga statistik menyatu dalam satu pandangan. Ritme bulanannya: satu artikel di gunara (topik arsitektur lokal), satu artikel di gconsultant (topik perizinan atau UMEA), pemeriksaan laporan cakupan indeks, dan peninjauan sepuluh kata kunci inti tiap domain. Tautan silang hanya dua arah yang bermakna — dari profil pendiri ke situs niche, dan dari situs niche ke korporat — bukan jaringan tautan buatan yang berbau manipulasi."),
]));

/* 5. Pembagian peran */
B.push(h1("5. Pembagian Peran: Siapa Menjaga Apa"));
B.push(caption("Tabel 3: Pembagian peran dua domain — jawaban atas kebingungan pembagian SEO"));
B.push(dataTable(
  ["Dimensi", "gconsultant.web.id (kantor pusat)", "gunara.web.id (situs niche)"],
  [22, 39, 39],
  [
    ["Peran", "Merek korporat: konsultan pemecah masalah bisnis", "Merek pribadi niche: jasa arsitektur dan konstruksi"],
    ["Topik inti", "Perizinan, legalitas, UMEA, ISO, IATA", "Desain, gambar teknis, sertifikasi profesi, portofolio"],
    ["Pelanggan", "Pemilik usaha yang butuh legalitas dan sistem", "Pemilik bangunan dan proyek yang butuh desain"],
    ["Kata kunci", "Perizinan usaha, legalitas PT, NIB, sertifikasi", "Jasa arsitektur, gambar teknis, desain bangunan"],
    ["Email", "Enam kanal resmi (halo, info, cs, finance, admin, gunara)", "Tanpa surat keluar — hanya tameng anti-pemalsuan"],
    ["Markah data", "Organization + ProfessionalService", "Person (Gugun Gunara) + LocalBusiness"],
    ["Ukuran sukses", "Leads perizinan, klien UMEA, skor email", "Permintaan penawaran desain, tampil untuk nama Gunara"],
  ]
));
B.push(caption("Tabel 4: Contoh cluster kata kunci agar tidak pernah berebut kursi"));
B.push(dataTable(
  ["Domain", "Cluster", "Contoh query yang dituju"],
  [24, 30, 46],
  [
    ["gconsultant", "Perizinan & legalitas", "cara mengurus NIB PT, izin edar, legalitas usaha Jawa Barat"],
    ["gconsultant", "Sistem & jaminan mutu", "konsultan ISO 9001, arsitektur sistem bisnis, UMEA"],
    ["gconsultant", "Solusi IATA", "agen tiket GoLite GoStandard GoGlobal"],
    ["gunara", "Jasa arsitektur lokal", "jasa desain rumah, jasa arsitektur kota Anda, harga desain per m2"],
    ["gunara", "Gambar teknis & IMB/PBG", "gambar teknis untuk PBG, gambar struktur MEP"],
    ["gunara", "Profesi konstruksi", "sertifikat keahlian arsitek, SKA SKT konstruksi"],
  ]
));
B.push(body([
  t("Perhatikan irama pembagian di atas: kedua domain memang sama-sama menyentuh dunia konstruksi pada satu titik (gambar teknis untuk PBG di gunara, pengurusan PBG di gconsultant) — dan itu justru bahan tautan silang yang alami, bukan kompetisi, karena satu menjual gambar dan sertifikasi, yang lain mengurus perizinannya. Aturan tiga larangan menjaga kebersihan: jangan menyalin paragraf yang sama ke dua domain; jangan menargetkan query yang sama persis di dua domain; jangan membuat halaman di gunara yang fungsinya sudah ada di gconsultant."),
]));

/* 6. Pengamanan domain */
B.push(h1("6. Pengamanan Domain Gunara: Tameng Anti-Pemalsuan"));
B.push(body([
  t("Karena semua surat resmi berpusat di gconsultant (enam kanal dari Mail Suite), domain gunara tidak perlu menerima surat — tetapi justru karena itu ia perlu menutup pintunya rapat. Tanpa record berikut, penipu bisa mengirim surat yang mengaku dari admin@gunara.web.id dan memakai nama Anda. Tiga record di DNS Vercel menutupnya selamanya: tanpa record MX (tak ada yang menerima), TXT SPF berisi v=spf1 -all (tak ada satu server pun yang sah mengirim), dan TXT DMARC berisi v=DMARC1; p=reject (tolak mentah semua surat pemalsuan). Konfigurasi seperti ini adalah standar internasional untuk domain tanpa surat dan membuat pencuri identitas menyerah sebelum mencoba."),
]));
B.push(body([
  t("Catatan lintas dokumen: pertanyaan pada panduan DNS sebelumnya tentang email untuk gunara.web.id kini terjawab oleh keputusan ini — tidak akan ada mailbox di gunara; enam kanal tetap di gconsultant. Dua data yang diminta panduan tersebut (IP shared cPanel serta nilai SPF dan DKIM dari Email Deliverability) tetap menjadi prasyarat Bab 5 panduan dan tidak berubah."),
]));

/* 7. Roadmap */
B.push(h1("7. Roadmap Empat Minggu dan KPI"));
B.push(caption("Tabel 5: Roadmap pelaksanaan dan ukuran keberhasilan"));
B.push(dataTable(
  ["Waktu", "Aksi utama", "Hasil yang diharapkan"],
  [18, 44, 38],
  [
    ["Minggu 1", "Peta 301 dari Search Console, pasang redirect, lepaskan cermin ganda, pasang tameng SPF/DMARC gunara", "Duplikasi nol; ekuitas mengalir ke gconsultant; pemalsuan surat tertutup"],
    ["Minggu 2", "Bangun kerangka situs niche: 7 halaman, markah Person dan LocalBusiness, properti Search Console", "Situs baru terindeks dengan identitas jelas"],
    ["Minggu 3", "Isi portofolio dan 2 artikel cluster lokal; tautan silang profil pendiri", "Halaman mulai menampung query niche"],
    ["Minggu 4", "Artikel pertama gconsultant pasca-migrasi; audit akhir Search Console kedua domain", "Kedua domain tumbuh di cluster masing-masing"],
    ["Bulanan", "1 artikel per domain, pantau 10 kata kunci inti, review cakupan indeks", "Otoritas topik naik stabil; tidak ada regenerasi duplikasi"],
  ]
));
B.push(body([
  t("Putusan dewan ini menutup kebingungan Anda dengan satu kalimat yang bisa dipegang: "),
  bold("gconsultant.web.id adalah kantor pusat yang mengurus izin dan sistem usaha klien; gunara.web.id adalah studio pribadi tempat nama Anda menjual keahlian arsitektur"),
  t(" — dua rumah berbeda di atas tanah yang sama, dengan ekuitas lama dipindahkan dengan hormat sebelum rumah baru dibangun. Ketika Anda siap, langkah pertama minggu ini hanya butuh dua hal yang sudah tersedia: akses Search Console dan dasbor Vercel yang selama ini Anda kelola sendiri."),
]));

/* ---------- document ---------- */
const pgSize = { width: 11906, height: 16838 };
const pgMargin = { top: 1440, bottom: 1440, left: 1701, right: 1417 };

function pageFooter() {
  return new Footer({
    children: [new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ children: [PageNumber.CURRENT], size: 18, color: "808080", font: { ascii: "Times New Roman" } })],
    })],
  });
}
function pageHeader() {
  return new Header({
    children: [new Paragraph({
      alignment: AlignmentType.CENTER,
      border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: "C8DDE2", space: 4 } },
      children: [new TextRun({ text: "Memo Strategi Dua Domain — GConsultant & Gunara", size: 18, color: "808080", font: { ascii: "Times New Roman" } })],
    })],
  });
}

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: { ascii: "Times New Roman", eastAsia: "SimSun" }, size: 24, color: "000000" },
        paragraph: { spacing: { line: 312 } },
      },
      heading1: {
        run: { font: { ascii: "Times New Roman", eastAsia: "SimHei" }, size: 32, bold: true, color: P.headingColor },
        paragraph: { spacing: { before: 360, after: 160, line: 380 } },
      },
      heading2: {
        run: { font: { ascii: "Times New Roman", eastAsia: "SimHei" }, size: 30, bold: true, color: P.headingColor },
        paragraph: { spacing: { before: 240, after: 120, line: 360 } },
      },
    },
  },
  numbering: {
    config: [
      { reference: "list-f1", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ],
  },
  sections: [
    {
      properties: { page: { size: pgSize, margin: { top: 0, bottom: 0, left: 0, right: 0 } } },
      children: buildCoverR1({
        title: "Memo Strategi Dua Domain: GConsultant & Gunara",
        subtitle: "Putusan dewan lintas disiplin: dua merek, dua niche, satu ekuitas — dan akhir kebingungan SEO",
        englishLabel: "STRATEGY MEMO",
        metaLines: [
          "Domain: gconsultant.web.id dan gunara.web.id",
          "Basis fakta: pemeriksaan DNS dan situs 20 November 2026",
          "Untuk: Pemilik dan Tim Operasional GConsultant",
        ],
        footerLeft: "GCONSULTANT - THE POLYMATHIC PROBLEM SOLVER",
        footerRight: "November 2026",
      }),
    },
    {
      properties: {
        type: SectionType.NEXT_PAGE,
        page: { size: pgSize, margin: pgMargin, pageNumbers: { start: 1, formatType: NumberFormat.DECIMAL } },
      },
      headers: { default: pageHeader() },
      footers: { default: pageFooter() },
      children: B,
    },
  ],
});

Packer.toBuffer(doc).then((buf) => {
  const out = "/home/z/my-project/download/Memo-Strategi-Dua-Domain-GConsultant-Gunara.docx";
  fs.writeFileSync(out, buf);
  console.log("OK " + out + " (" + Math.round(buf.length / 1024) + "KB)");
});
