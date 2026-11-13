/**
 * GCONSULTANT v3.5.0 — RESTU IBU (Royal Navy × Imperial Gold) — Asset regenerator
 * Sumber: src/app/icon.svg (sudah diremaphue ke Biru × Gold oleh rebrand-birugold-v35.py)
 * Output:
 *   - favicon.ico multi-size (16/24/32/48) — assembler ICO murni (pelajaran Task 17:
 *     ICO harus di-rebuild byte-per-byte agar hash URL berubah)
 *   - apple-icon.png 180, icon-192.png, icon-512.png
 *   - og-image.jpg 1200x630 (komposisi brand lengkap, gradient Royal Navy + Imperial Gold)
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = "/home/z/my-project";
const ICON_SVG = path.join(ROOT, "src/app/icon.svg");

// ---------- Palet ROYAL NAVY × IMPERIAL GOLD ----------
const GOLD = "#D4AF37";      // Imperial Gold — menang, jaya, kekayaan
const GOLD_SOFT = "#EED88A"; // Illuminated Gold — matahari, ceria
const CREAM = "#F7F5EE";     // Sacred Ivory — putih suci, damai
const DEEP = "#0A1B3D";      // Deep Royal Navy — laut dalam
const MID = "#16345F";       // Royal Navy — langit/tinggi

// ---------- ICO assembler ----------
async function svgToPng(svgPath, size) {
  const buf = await sharp(svgPath, { density: 300 })
    .resize(size, size)
    .png()
    .toBuffer();
  return buf;
}

async function buildIco(pngBuffers, sizes) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type icon
  header.writeUInt16LE(count, 4);

  const dir = Buffer.alloc(16 * count);
  let offset = 6 + 16 * count;
  pngBuffers.forEach((buf, i) => {
    const s = sizes[i];
    const e = 16 * i;
    dir.writeUInt8(s >= 256 ? 0 : s, e + 0);
    dir.writeUInt8(s >= 256 ? 0 : s, e + 1);
    dir.writeUInt8(0, e + 2);
    dir.writeUInt8(0, e + 3);
    dir.writeUInt16LE(1, e + 4);
    dir.writeUInt16LE(32, e + 6);
    dir.writeUInt32LE(buf.length, e + 8);
    dir.writeUInt32LE(offset, e + 12);
    offset += buf.length;
  });

  return Buffer.concat([header, dir, ...pngBuffers]);
}

// ---------- OG image SVG ----------
function ogSvg() {
  // Geometric G mark — sama dengan logo.svg, digambar langsung (scale 2.7)
  const mark = (tx, ty, s, stroke, bar) => `
    <g transform="translate(${tx} ${ty}) scale(${s})" fill="none"
       stroke="${stroke}" stroke-width="7.2" stroke-linecap="round">
      <path d="M 91.4 33.6 A 41 41 0 1 0 91.4 86.4"/>
      <path d="M 80.7 42.6 A 27 27 0 1 0 80.7 77.4" opacity=".55"/>
      <path d="M 100 60 L 72 60" stroke="${bar}" stroke-width="7.6"/>
    </g>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${DEEP}"/>
      <stop offset=".55" stop-color="${MID}"/>
      <stop offset="1" stop-color="${DEEP}"/>
    </linearGradient>
    <radialGradient id="glow" cx=".78" cy=".22" r=".7">
      <stop offset="0" stop-color="${GOLD}" stop-opacity=".18"/>
      <stop offset=".6" stop-color="${GOLD}" stop-opacity=".05"/>
      <stop offset="1" stop-color="${GOLD}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="aug" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${GOLD_SOFT}"/>
      <stop offset="1" stop-color="${GOLD}"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- cincin geometric raksasa kanan -->
  <g fill="none" stroke="${GOLD}">
    <circle cx="1040" cy="315" r="150" stroke-opacity=".12" stroke-width="2"/>
    <circle cx="1040" cy="315" r="220" stroke-opacity=".08" stroke-width="2"/>
    <circle cx="1040" cy="315" r="290" stroke-opacity=".05" stroke-width="2"/>
  </g>

  <!-- mark -->
  ${mark(62, 150, 2.7, "url(#aug)", GOLD)}

  <!-- text block -->
  <text x="440" y="215" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="19"
        font-weight="bold" letter-spacing="4.5" fill="${GOLD}">POLYMATHIC STRATEGY &amp; SYSTEMS ARCHITECTURE</text>
  <text x="436" y="330" font-family="Liberation Serif, DejaVu Serif, serif" font-size="78"
        font-weight="bold" letter-spacing="2" fill="${CREAM}">GCONSULTANT</text>
  <text x="440" y="392" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="24"
        font-weight="bold" letter-spacing="6" fill="${GOLD_SOFT}">THE POLYMATHIC PROBLEM SOLVER</text>

  <rect x="440" y="428" width="330" height="3" rx="1.5" fill="${GOLD}"/>

  <text x="440" y="486" font-family="Liberation Serif, DejaVu Serif, serif" font-size="27"
        font-style="italic" fill="${CREAM}" fill-opacity=".92">Menyatukan ilmu. Menata kompleksitas. Mewujudkan solusi.</text>

  <text x="440" y="548" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="19"
        fill="${CREAM}" fill-opacity=".55">gunara.web.id  •  38 Provinsi Indonesia  •  ISO 9001:2015  •  Est. 2009</text>
</svg>`;
}

(async () => {
  // 1) favicon.ico
  const sizes = [16, 24, 32, 48];
  const pngs = [];
  for (const s of sizes) pngs.push(await svgToPng(ICON_SVG, s));
  const ico = await buildIco(pngs, sizes);
  fs.writeFileSync(path.join(ROOT, "src/app/favicon.ico"), ico);
  console.log("favicon.ico:", ico.length, "bytes (Royal Navy × Imperial Gold)");

  // 2) apple-icon + PWA
  await sharp(ICON_SVG, { density: 300 }).resize(180, 180).png().toFile(path.join(ROOT, "src/app/apple-icon.png"));
  await sharp(ICON_SVG, { density: 300 }).resize(192, 192).png().toFile(path.join(ROOT, "public/icons/icon-192.png"));
  await sharp(ICON_SVG, { density: 300 }).resize(512, 512).png().toFile(path.join(ROOT, "public/icons/icon-512.png"));
  console.log("apple-icon.png, icon-192.png, icon-512.png OK");

  // 3) og-image
  const og = await sharp(Buffer.from(ogSvg())).jpeg({ quality: 92 }).toBuffer();
  fs.writeFileSync(path.join(ROOT, "public/images/og-image.jpg"), og);
  console.log("og-image.jpg:", og.length, "bytes (Royal Navy × Imperial Gold)");

  console.log("DONE v3.5.0");
})().catch((e) => { console.error(e); process.exit(1); });
