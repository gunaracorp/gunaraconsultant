/* Panduan Setup Email & DNS GConsultant — generator docx (skill docx: R1 + DM-1, TOC 3-seksi) */
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  ImageRun, PageBreak, Header, Footer, PageNumber, NumberFormat,
  AlignmentType, HeadingLevel, WidthType, BorderStyle, ShadingType,
  TabStopType, TabStopPosition, LevelFormat, TableOfContents,
  SectionType, TableLayoutType, ExternalHyperlink,
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

/* ---------- title layout (Latin-aware width) ---------- */
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
    metaLineCount = 0, fixedHeight = 800, pageHeight = 16838, marginTop = 0, marginBottom = 0 } = params;
  const SAFETY = 1200;
  const usable = pageHeight - marginTop - marginBottom - SAFETY;
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
  const midSpacing = Math.max(remaining - topSpacing - bottomSpacing, 0);
  return { topSpacing, midSpacing, bottomSpacing };
}

/* ---------- cover R1 ---------- */
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
function body(runsOrText, opts = {}) {
  const runs = typeof runsOrText === "string"
    ? [new TextRun({ text: runsOrText, size: 24, color: "000000", font: { ascii: "Times New Roman", eastAsia: "SimSun" } })]
    : runsOrText;
  return new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { line: 312, after: opts.after !== undefined ? opts.after : 120 },
    children: runs,
  });
}
function t(text, extra = {}) {
  return new TextRun({ text, size: 24, color: "000000", font: { ascii: "Times New Roman", eastAsia: "SimSun" }, ...extra });
}
function bold(text) { return t(text, { bold: true }); }
function mono(text) {
  return new TextRun({ text, size: 21, color: "1A2B40", font: { ascii: "Consolas", eastAsia: "SimSun" } });
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
function figCaption(text) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 80, after: 200, line: 312 },
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
      children: [cellPara(typeof cell === "string" ? cell : cell.text, {
        center: !!opts.centerCols && opts.centerCols.includes(i),
        mono: typeof cell === "object" && cell.mono,
        bold: typeof cell === "object" && cell.bold,
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

/* ---------- diagram image ---------- */
const IMG_PATH = "/home/z/my-project/download/diagram-arsitektur-gconsultant.png";
const imgBuf = fs.readFileSync(IMG_PATH);
const pngW = imgBuf.readUInt32BE(16), pngH = imgBuf.readUInt32BE(20);
const dispW = 580, dispH = Math.round(dispW * (pngH / pngW));

/* ---------- content ---------- */
const bodyChildren = [];

/* 1. Ringkasan Eksekutif */
bodyChildren.push(h1("1. Ringkasan Eksekutif"));
bodyChildren.push(body([
  t("Dokumen ini adalah panduan kerja lengkap untuk menyatukan dua platform yang sudah dimiliki GConsultant: "),
  bold("Vercel sebagai pabrik website"),
  t(" (menjalankan www.gconsultant.web.id dan terhubung otomatis ke GitHub) dan "),
  bold("cPanel hosting sebagai kantor pos email"),
  t(" (menampung enam mailbox resmi: halo, info, cs, finance, admin, dan gunara pada domain gconsultant.web.id)."),
]));
bodyChildren.push(body([
  t("Hasil pemeriksaan DNS tanggal 20 November 2026 menunjukkan kondisi berikut: website berjalan normal dan versi terbaru (v3.9.0) sudah tayang; enam mailbox di cPanel sudah dibuat; tetapi "),
  bold("record MX, SPF, DKIM, dan DMARC belum ada"),
  t(" di DNS. Akibatnya, surat dari luar (misalnya Gmail) belum bisa masuk ke mailbox, dan surat keluar dari cPanel belum terverifikasi sehingga berisiko jatuh ke folder spam. Selain itu, seluruh subdomain saat ini mengarah ke Vercel, sehingga alamat seperti cpanel.gconsultant.web.id menabrak halaman Vercel — inilah alasan cPanel terasa tidak bisa dibuka melalui domain."),
]));
bodyChildren.push(body([
  t("Panduan ini menyediakan: peta arsitektur hulu-ke-hilir (Bab 2), diagnosis akses cPanel (Bab 3), kamus setiap record DNS beserta fungsinya (Bab 4), langkah setup tiga tahap yang rinci (Bab 5), mode otomatis di mana asisten dapat memasang seluruh record langsung (Bab 6), checklist pengujian akhir (Bab 7), serta pertanyaan umum dan perawatan jangka panjang (Bab 8). Untuk menjalankan Bab 5, hanya dua data yang perlu diambil dari cPanel: "),
  bold("IP shared server"),
  t(" dan "),
  bold("nilai SPF serta DKIM dari menu Email Deliverability"),
  t(". Setelah semua record tayang, seluruh enam kanal email yang telah dipublikasikan di website berfungsi penuh."),
]));

/* 2. Peta besar */
bodyChildren.push(h1("2. Peta Besar: Domain, DNS, dan Dua Platform"));
bodyChildren.push(body([
  t("Perjalanan dimulai dari hulu: domain "),
  bold("gconsultant.web.id"),
  t(" adalah aset yang disewa melalui registrar, dengan registri .web.id diurus PANDI. Domain sendiri tidak menyimpan apa pun selain kepemilikan dan satu penunjuk penting: alamat buku alamatnya (nameserver). Saat ini nameserver domain mengarah ke "),
  bold("Vercel DNS"),
  t(" (ns1.vercel-dns.com dan ns2.vercel-dns.com), sehingga semua catatan alamat — record A, CNAME, MX, dan TXT — diatur di dashboard Vercel. Vercel DNS adalah layanan anycast kelas internasional: catatan yang kita tulis disebarkan ke puluhan titik di dunia, sehingga pencarian alamat dari mana pun cepat dan mengikuti standar terbuka IETF (RFC 1034 dan RFC 1035 untuk DNS, RFC 5321 untuk pengiriman surat SMTP)."),
]));
bodyChildren.push(body([
  t("Dari buku alamat itu, setiap permintaan dibelokkan ke salah satu dari dua pintu. Pengunjung website ditunjuk ke "),
  bold("Vercel"),
  t(" melalui record A dan CNAME yang sudah terpasang; developer yang mendorong kode ke GitHub membuat Vercel membangun ulang situs secara otomatis, dan hasilnya tayang di www.gconsultant.web.id. Sementara itu, setiap surat yang ditujukan ke alamat @gconsultant.web.id harus dibawa oleh kurir "),
  bold("MX"),
  t(" ke "),
  bold("cPanel"),
  t(" — server hosting tempat enam kotak surat menunggu. Karena record MX belum ditulis, kurir tidak tahu ke mana harus membawa surat: inilah hilir yang belum tersambung. Bab 5 akan memasang kurir tersebut, dan Bab 4 menjelaskan fungsi setiap record satu per satu."),
]));
bodyChildren.push(caption("Tabel 1: Peran setiap aktor dalam sistem GConsultant"));
bodyChildren.push(dataTable(
  ["Aktor", "Peran dalam sistem", "Analogi kantor pos"],
  [24, 44, 32],
  [
    ["PANDI dan registrar", "Menyimpan kepemilikan domain dan mencatat nameserver yang berlaku", "Instansi penerbit alamat kantor"],
    ["Vercel DNS (ns1/ns2.vercel-dns.com)", "Buku alamat resmi domain; tempat semua record A, CNAME, MX, TXT diatur", "Papan pengumuman alamat di depan kota"],
    ["Vercel", "Menjalankan website Next.js; deploy otomatis setiap kali GitHub diperbarui", "Pabrik dan galeri toko online"],
    ["cPanel (hosting)", "Server email: menyimpan enam mailbox, menyediakan webmail, mengirim dan menerima surat", "Kantor pos dengan enam kotak surat"],
    ["GitHub", "Gudang kode sumber website yang memicu deploy otomatis", "Gudang arsitek dan spesifikasi"],
  ]
));
bodyChildren.push(body([
  t("Gambar 1 merangkum seluruh arsitektur dalam satu pandangan: satu domain, satu buku alamat, dan tiga jalur — web, surat, serta kepercayaan. Jalur web sudah berjalan; jalur surat dan jalur kepercayaan adalah pekerjaan yang akan diselesaikan panduan ini."),
], { after: 80 }));
bodyChildren.push(new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { before: 120 },
  children: [new ImageRun({ data: imgBuf, transformation: { width: dispW, height: dispH }, type: "png" })],
}));
bodyChildren.push(figCaption("Gambar 1: Arsitektur dua platform GConsultant per 20 November 2026"));

/* 3. Diagnosis cPanel */
bodyChildren.push(h1("3. Diagnosis: Mengapa cPanel Tidak Terbuka"));
bodyChildren.push(body([
  t("Keluhan \u201ctidak bisa buka cPanel\u201d bukan kerusakan, melainkan konsekuensi arsitektur yang justru benar. Saat ini hampir semua subdomain — mail, webmail, cpanel, whm, smtp, autodiscover — mengarah ke IP Vercel (216.198.79.x dan 64.29.17.x), kemungkinan karena satu record wildcard yang dibuat saat domain ditambahkan ke Vercel. Akibatnya, setiap percobaan membuka cpanel.gconsultant.web.id berakhir di server Vercel yang tidak menjalankan cPanel, sehingga tampil halaman tidak ditemukan. Server cPanel tidak pernah dihubungi sama sekali."),
]));
bodyChildren.push(body([
  t("Sebelum record pintu dibuat (Bab 5), cPanel tetap dapat dibuka melalui tiga pintu lain. "),
  bold("Pertama"),
  t(", masuk ke area klien (client area) penyedia hosting Anda dan gunakan tombol Login cPanel yang biasanya tersedia di daftar layanan. "),
  bold("Kedua"),
  t(", gunakan URL langsung server dari email selamat datang hosting — umumnya berformat https://nama-server.perusahaan-hosting.com:2083 atau https://nomor-IP:2083 untuk cPanel, dan port 2096 untuk webmail; email selamat datang Anda pasti mencantumkan alamat ini. "),
  bold("Ketiga"),
  t(", setelah Bab 5 selesai, pintu berdomain akan berfungsi: https://cpanel.gconsultant.web.id:2083 untuk login cPanel dan https://webmail.gconsultant.web.id untuk membaca surat di browser. Jika penyedia hosting mengaktifkan fitur proxy subdomain, port bahkan tidak perlu diketik."),
]));
bodyChildren.push(body([
  t("Perlu ditegaskan: seluruh pekerjaan dalam panduan ini tidak menyentuh jalur website. Record A dan CNAME milik Vercel dibiarkan apa adanya, sehingga www.gconsultant.web.id tetap tayang tanpa jeda. Yang kami tambahkan hanyalah catatan baru untuk surat dan pintu cPanel."),
]));

/* 4. Kamus DNS */
bodyChildren.push(h1("4. Kamus DNS: Setiap Record dan Fungsinya"));
bodyChildren.push(body([
  t("Record DNS adalah baris-baris catatan di buku alamat domain. Tabel 2 memuat daftar lengkap untuk gconsultant.web.id: apa yang sudah ada, apa yang perlu dibuat, dan nilai yang dijanjikan. Penjelasan fungsi tiap kelompok record ada pada empat sub-bab di bawahnya, ditulis dengan analogi kantor pos agar mudah diikuti."),
]));
bodyChildren.push(caption("Tabel 2: Daftar record DNS gconsultant.web.id — status dan nilai"));
bodyChildren.push(dataTable(
  ["Name", "Tipe", "Nilai", "Status"],
  [22, 13, 41, 24],
  [
    ["@", { text: "A", center: false }, "216.198.79.1, 64.29.17.65 (Vercel)", "Sudah ada"],
    ["www", "CNAME/A", "Mengarah ke Vercel", "Sudah ada"],
    ["@", "MX", "mail.gconsultant.web.id (prioritas 0)", "Perlu dibuat"],
    ["mail", "A", "IP shared server cPanel", "Perlu dibuat"],
    ["webmail", "A", "IP shared server cPanel", "Perlu dibuat"],
    ["cpanel", "A", "IP shared server cPanel", "Perlu dibuat"],
    ["@", "TXT (SPF)", "Nilai dari cPanel, atau v=spf1 +a +mx +ip4:IP-cPanel ~all", "Perlu dibuat"],
    ["default._domainkey", "TXT (DKIM)", "Nilai DKIM dari menu Email Deliverability cPanel", "Perlu dibuat"],
    ["_dmarc", "TXT (DMARC)", "v=DMARC1; p=quarantine; rua=mailto:admin@gconsultant.web.id; fo=1", "Perlu dibuat"],
    ["autodiscover", "CNAME", "mail.gconsultant.web.id (opsional, untuk Outlook/Apple Mail)", "Perlu dibuat"],
  ]
));
bodyChildren.push(h2("4.1 Record A dan CNAME — alamat gedung dan aliasnya"));
bodyChildren.push(body([
  t("Record A memetakan sebuah nama ke alamat IP server — seperti alamat gedung. Record A milik @ dan www sudah ada dan menunjuk ke Vercel, itulah sebabnya website Anda hidup. Record A baru yang akan kita buat (mail, webmail, cpanel) memetakan tiga pintu ke alamat gedung yang berbeda, yaitu server cPanel. CNAME adalah alias: autodiscover.gconsultant.web.id hanya berkedip ke mail.gconsultant.web.id, sehingga aplikasi Outlook atau Apple Mail dapat menemukan konfigurasi surat secara otomatis saat pemakai memasukkan alamat emailnya."),
]));
bodyChildren.push(h2("4.2 Record MX — alamat kurir surat masuk"));
bodyChildren.push(body([
  t("MX (Mail Exchange, RFC 5321) menjawab satu pertanyaan: ketika seseorang di dunia mengirim surat ke halo@gconsultant.web.id, ke server mana kurir harus menyerahkan surat itu? Saat ini jawabannya kosong, dan aturan internasional mengatakan tanpa MX pengirim akan mencoba alamat A domain langsung — yang berarti mengetuk pintu Vercel, bukan kantor pos. Itulah mekanisme persisnya mengapa surat eksternal tidak pernah sampai. Kita menulis satu MX: @ menuju mail.gconsultant.web.id dengan prioritas 0, dan mail.gconsultant.web.id sendiri menunjuk ke IP cPanel. Prioritas 0 berarti pilihan utama dan tunggal; angka lebih kecil selalu diprioritaskan."),
]));
bodyChildren.push(h2("4.3 SPF, DKIM, DMARC — trilogi kepercayaan surat keluar"));
bodyChildren.push(body([
  t("Tiga record TXT bekerja sebagai satu tim untuk memastikan surat keluar dari cPanel Anda dianggap sah oleh penerima seperti Gmail. "),
  bold("SPF"),
  t(" (RFC 7208) adalah daftar pengirim resmi: ia menyatakan hanya server tertentu — di kasus kita server cPanel — yang berhak mengirim surat atas nama gconsultant.web.id; ibarat kartu pegawai resmi. "),
  bold("DKIM"),
  t(" (RFC 6376) adalah tanda tangan digital: cPanel menandatangani setiap surat dengan kunci kriptografi, dan kunci verifikasinya dipublikasikan di DNS pada default._domainkey; ibarat tanda tangan basah yang tidak bisa dipalsukan. "),
  bold("DMARC"),
  t(" (RFC 7489) adalah polisinya: ia memeriksa apakah dua bukti di atas konsisten dengan alamat pengirim, memutuskan surat curang harus dikarantina, dan mengirimkan laporan penyalahgunaan ke admin@gconsultant.web.id melalui opsi rua. Tanpa ketiganya, Gmail kerap menaruh surat bisnis yang sah ke folder spam; dengan ketiganya, deliverability naik ke standar internasional yang diharapkan perusahaan konsultan."),
]));
bodyChildren.push(h2("4.4 Pintu praktis: webmail, cpanel, dan autodiscover"));
bodyChildren.push(body([
  t("Tiga record A terakhir adalah kenyamanan operasional. webmail memberi Anda alamat surat yang rapi untuk membaca mailbox di browser tanpa ingat nama server; cpanel memberi pintu login administrasi berdomain sendiri; autodiscover menyambungkan aplikasi surat di ponsel dan laptop secara otomatis. Ketiganya opsional namun sangat disarankan, dan ketiganya hanya butuh satu nilai yang sama: IP shared server cPanel Anda."),
]));

/* 5. Langkah setup */
bodyChildren.push(h1("5. Langkah Setup Lengkap: dari cPanel ke Vercel"));
bodyChildren.push(h2("5.1 Tahap 0 — Kumpulkan tiga data dari cPanel"));
bodyChildren.push(body([
  t("Semua nilai pada tabel pengaturan di bawah ini berasal dari cPanel Anda sendiri, bukan dari tebakan. Ikuti urutan berikut; butuh sekitar sepuluh menit."),
]));
bodyChildren.push(numItem("list-t0", [t("Buka cPanel melalui salah satu pintu di Bab 3 (paling mudah: tombol Login cPanel di client area hosting).")]));
bodyChildren.push(numItem("list-t0", [t("Di beranda cPanel, buka bagian "), bold("General Information"), t(" (biasanya di kanan atas) dan catat nilai "), bold("Shared IP Address"), t(" — inilah 【IP Shared cPanel】 yang dipakai di record mail, webmail, dan cpanel.")]));
bodyChildren.push(numItem("list-t0", [t("Buka menu "), bold("Email Deliverability"), t(" (di grup Email). Baris untuk gconsultant.web.id akan menampilkan status SPF dan DKIM.")]));
bodyChildren.push(numItem("list-t0", [t("Jika SPF atau DKIM berstatus Problem, klik "), bold("Repair"), t(" atau Enable sehingga menjadi Valid, lalu klik Manage dan salin nilai "), bold("SPF record value"), t(" dan "), bold("DKIM record value"), t(" ke catatan Anda.")]));
bodyChildren.push(h2("5.2 Tahap 1 — Tulis record di dashboard Vercel"));
bodyChildren.push(body([
  t("Masuk ke vercel.com dengan akun Anda, pilih project GConsultant, buka "), bold("Settings"),
  t(" \u2192 "), bold("Domains"),
  t(" \u2192 klik "), bold("gconsultant.web.id"),
  t(" \u2192 gulir ke "), bold("DNS Records"),
  t(" \u2192 klik Add dan tambahkan baris-baris pada Tabel 3 satu per satu. Biarkan TTL pada nilai bawaan (auto); Vercel memakai TTL pendek sehingga perubahan tayang cepat. Nilai yang ditulis dalam kurung siku pada Tabel 3 diisi dengan data dari Tahap 0."),
]));
bodyChildren.push(caption("Tabel 3: Enam record untuk ditambahkan di Vercel DNS Records"));
bodyChildren.push(dataTable(
  ["Tipe", "Name", "Value", "TTL", "Priority"],
  [14, 20, 38, 12, 16],
  [
    ["MX", "@", "mail.gconsultant.web.id", "auto", "0"],
    ["A", "mail", "【IP Shared cPanel】", "auto", "\u2014"],
    ["A", "webmail", "【IP Shared cPanel】", "auto", "\u2014"],
    ["A", "cpanel", "【IP Shared cPanel】", "auto", "\u2014"],
    ["TXT", "@", "Nilai SPF dari cPanel (atau v=spf1 +a +mx +ip4:IP-cPanel ~all)", "auto", "\u2014"],
    ["TXT", "default._domainkey", "Nilai DKIM dari cPanel (satu baris panjang)", "auto", "\u2014"],
    ["TXT", "_dmarc", "v=DMARC1; p=quarantine; rua=mailto:admin@gconsultant.web.id; fo=1", "auto", "\u2014"],
    ["CNAME", "autodiscover", "mail.gconsultant.web.id", "auto", "\u2014"],
  ],
  { centerCols: [0, 3, 4] }
));
bodyChildren.push(h2("5.3 Tahap 2 — Selesaikan di cPanel dan uji pertama"));
bodyChildren.push(numItem("list-t1", [t("Kembali ke cPanel \u2192 Email Deliverability dan pastikan status SPF serta DKIM kini Valid; jika masih Problem, klik Repair sekali lagi.")]));
bodyChildren.push(numItem("list-t1", [t("Kirim surat uji dari akun Gmail pribadi ke halo@gconsultant.web.id, lalu buka webmail dan pastikan surat tiba.")]));
bodyChildren.push(numItem("list-t1", [t("Balas dari webmail ke Gmail Anda, buka surat tersebut, pilih Show original, dan pastikan SPF, DKIM, serta DMARC bertanda PASS.")]));
bodyChildren.push(h2("5.4 Berapa lama menunggu"));
bodyChildren.push(body([
  t("Dengan TTL pendek Vercel, record biasanya tayang dalam hitungan menit hingga satu jam di seluruh dunia; batas paling konservatif yang dijanjikan standar adalah 48 jam untuk kasus jaringan yang lambat memperbarui cache. Jangan menghapus dan menulis ulang record di tengah jendela propagasi — cukup pantau dengan checklist Bab 7."),
]));

/* 6. Mode otomatis */
bodyChildren.push(h1("6. Mode Otomatis: Asisten yang Memasang"));
bodyChildren.push(body([
  t("Jika Anda lebih suka tidak menyentuh dashboard sama sekali, seluruh pemasangan di Bab 5 dapat dilakukan asisten secara langsung. Ada dua tingkat otomatisasi, dan keduanya aman untuk website yang sedang berjalan karena hanya menambah record baru, tidak mengubah record A milik Vercel."),
]));
bodyChildren.push(body([
  bold("Opsi A — kirim dua nilai, terima konfigurasi jadi. "),
  t("Kirimkan IP shared server cPanel beserta nilai SPF dan DKIM dari Email Deliverability. Asisten akan menyusun daftar record final persis untuk domain Anda, memverifikasi setiap nilai, dan setelah Anda menambahkannya (atau pada Opsi B), memeriksa DNS publik dari sisi asisten hingga seluruh record tayang dan pengujian Bab 7 lolos."),
]));
bodyChildren.push(body([
  bold("Opsi B — token Vercel, asisten memasang semua. "),
  t("Buat token API: masuk ke vercel.com \u2192 klik avatar \u2192 Account Settings \u2192 tab Tokens \u2192 Create Token; beri nama seperti dns-setup, pilih scope Full Account dan masa berlaku 1 hari, lalu kirimkan token beserta IP cPanel ke asisten. Asisten akan memasang seluruh record melalui API resmi Vercel (POST api.vercel.com/v9/domains/gconsultant.web.id/records untuk setiap baris Tabel 3), memverifikasi tayang, lalu meminta Anda menghapus token. Perlakukan token seperti kunci rumah: gunakan hanya lewat percakapan ini, jangan unggah ke tempat publik, dan hapus begitu pekerjaan selesai."),
]));

/* 7. Checklist */
bodyChildren.push(h1("7. Checklist Pengujian dan Verifikasi"));
bodyChildren.push(body([
  t("Jalankan enam pengujian berikut setelah record ditambahkan. Empat yang pertama bisa dijalankan siapa pun tanpa alat khusus; dua yang terakhir memakai layanan pengujian publik gratis. Semua hasil yang diharapkan bersifat objektif — lolos atau tidak, tidak ada abu-abu."),
]));
bodyChildren.push(caption("Tabel 4: Checklist pengujian akhir dengan hasil yang diharapkan"));
bodyChildren.push(dataTable(
  ["Pengujian", "Cara", "Hasil yang diharapkan"],
  [24, 40, 36],
  [
    ["MX tayang", "Buka mxtoolbox.com, pilih MX, masukkan gconsultant.web.id", "mail.gconsultant.web.id muncul dengan prioritas 0"],
    ["SPF tayang", "mxtoolbox.com pilih SPF, atau dig TXT gconsultant.web.id", "Berawalan v=spf1 dan memuat IP cPanel"],
    ["DKIM tayang", "mxtoolbox.com pilih DKIM, selector default, domain gconsultant.web.id", "Kunci publik berawalan p= muncul"],
    ["Surat masuk", "Kirim dari Gmail ke halo@gconsultant.web.id, buka webmail", "Surat tiba di kotak masuk"],
    ["Surat keluar sah", "Balas dari webmail, di Gmail pilih Show original", "SPF=PASS, DKIM=PASS, DMARC=PASS"],
    ["Skor deliverability", "Kirim surat dari webmail ke alamat penguji di mail-tester.com", "Skor 9-10 dari 10"],
  ]
));
bodyChildren.push(body([
  t("Setelah enam pengujian lolos dan berjalan stabil selama dua sampai empat minggu, naikkan kebijakan DMARC dengan mengubah p=quarantine menjadi "),
  bold("p=reject"),
  t(" pada record _dmarc — puncak standar internasional yang membuat pemalsuan identitas email GConsultant ditolak mentah-mentah oleh seluruh server di dunia. Sebelum itu, pantau laporan harian yang dikirim DMARC ke admin@gconsultant.web.id; laporan berisi daftar siapa saja yang mengirim atas nama domain Anda dan apakah lolos verifikasi."),
]));

/* 8. FAQ */
bodyChildren.push(h1("8. FAQ dan Perawatan Jangka Panjang"));
bodyChildren.push(body([
  bold("Mengapa surat awal kadang masuk folder spam penerima? "),
  t("Domain Anda baru saja mulai mengirim dan belum punya reputasi. Gmail dan rekan-rekannya menilai reputasi dari perilaku: volume kecil dan konsisten, penerima jarang menandai spam, dan tiga verifikasi lolos. Kirim secara wajar di awal, hindari blokir massal, dan reputasi terbangun dalam hitungan minggu. Trilogi SPF-DKIM-DMARC yang baru dipasang adalah fondasi utamanya."),
]));
bodyChildren.push(body([
  bold("Apakah perlu pindah nameserver ke penyedia DNS lain? "),
  t("Tidak perlu. Vercel DNS adalah layanan anycast internasional yang mengikuti standar terbuka dan gratis untuk domain Anda; memindahkan nameserver berarti menyalin ulang seluruh record dan berisiko kesalahan salin. Jika suatu hari ingin pindah (misalnya ke Cloudflare untuk fitur tertentu), pindahkan seluruh sepuluh record di Tabel 2 sekaligus dalam satu sesi, jangan sebagian."),
]));
bodyChildren.push(body([
  bold("Bagaimana dengan domain gunara.web.id? "),
  t("Pemeriksaan yang sama menunjukkan gunara.web.id juga belum memiliki MX dan SPF. Jika kelak alamat di domain itu diaktifkan, terapkan pola yang persis sama: MX menuju subdomain mail di domain itu, A record ke IP server email yang dipakai, lalu SPF, DKIM, dan DMARC. Hingga saat itu, seluruh komunikasi resmi memakai @gconsultant.web.id — sesuai klausul di Syarat dan Ketentuan website."),
]));
bodyChildren.push(body([
  bold("Perawatan bulanan yang disarankan: "),
  t("baca laporan DMARC yang masuk ke admin@gconsultant.web.id (tujuh bulan pertama adalah masa belajar — pastikan hanya server cPanel Anda yang muncul); periksa kuota mailbox di cPanel; dan setiap kali menyusun kampanye besar, kirim uji mail-tester terlebih dahulu. Standar lanjutan seperti MTA-STS dan TLS-RPT (RFC 8461 dan RFC 8460) dapat ditambahkan belakangan untuk memaksa koneksi surat memakai enkripsi TLS — asisten dapat membantu memasangnya saat infrastruktur ini sudah stabil."),
]));
bodyChildren.push(body([
  t("Dengan seluruh record di Tabel 3 tayang dan enam pengujian di Bab 7 lolos, enam kanal email resmi yang telah dipublikasikan di www.gconsultant.web.id — halo, info, cs, finance, admin, dan gunara — berfungsi penuh sebagai pintu layanan klien, dan fondasi komunikasi GConsultant berdiri di atas standar internasional yang sama dengan perusahaan global."),
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
      children: [new TextRun({ text: "Panduan Setup Email & DNS GConsultant", size: 18, color: "808080", font: { ascii: "Times New Roman" } })],
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
      { reference: "list-t0", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "list-t1", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ],
  },
  sections: [
    { /* Section 1: Cover */
      properties: { page: { size: pgSize, margin: { top: 0, bottom: 0, left: 0, right: 0 } } },
      children: buildCoverR1({
        title: "Panduan Setup Email & DNS GConsultant",
        subtitle: "cPanel sebagai kantor pos email, Vercel sebagai pabrik website — satu domain, standar internasional",
        englishLabel: "TECH SETUP GUIDE",
        metaLines: [
          "Domain: gconsultant.web.id",
          "Platform: Vercel (website) + cPanel (email)",
          "Disusun: 20 November 2026",
          "Untuk: Pemilik dan Tim Operasional GConsultant",
        ],
        footerLeft: "GCONSULTANT - THE POLYMATHIC PROBLEM SOLVER",
        footerRight: "November 2026",
      }),
    },
    { /* Section 2: Front matter — TOC, Roman */
      properties: {
        type: SectionType.NEXT_PAGE,
        page: { size: pgSize, margin: pgMargin, pageNumbers: { start: 1, formatType: NumberFormat.UPPER_ROMAN } },
      },
      footers: { default: pageFooter() },
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 480, after: 360, line: 380, lineRule: "atLeast" },
          children: [new TextRun({ text: "Daftar Isi", bold: true, size: 32, color: P.headingColor, font: { ascii: "Times New Roman", eastAsia: "SimHei" } })],
        }),
        new TableOfContents("Daftar Isi", { hyperlink: true, headingStyleRange: "1-2" }),
        new Paragraph({
          spacing: { before: 200 },
          children: [new TextRun({
            text: "Catatan: Daftar isi dibuat dengan field code. Setelah dokumen diedit, klik kanan daftar isi lalu pilih Update Field agar nomor halaman akurat.",
            italics: true, size: 18, color: "888888", font: { ascii: "Times New Roman" },
          })],
        }),
      ],
    },
    { /* Section 3: Body — Arabic */
      properties: {
        type: SectionType.NEXT_PAGE,
        page: { size: pgSize, margin: pgMargin, pageNumbers: { start: 1, formatType: NumberFormat.DECIMAL } },
      },
      headers: { default: pageHeader() },
      footers: { default: pageFooter() },
      children: bodyChildren,
    },
  ],
});

Packer.toBuffer(doc).then((buf) => {
  const out = "/home/z/my-project/download/Panduan-Setup-Email-DNS-GConsultant.docx";
  fs.writeFileSync(out, buf);
  console.log("OK " + out + " (" + Math.round(buf.length / 1024) + "KB)");
});
