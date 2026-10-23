const sharp = require("sharp");
const fs = require("fs");

// Parse ICO → ekstrak entri terbesar sebagai PNG
function extractLargestPng(icoPath) {
  const b = fs.readFileSync(icoPath);
  const count = b.readUInt16LE(4);
  let best = { size: 0, offset: 0, len: 0 };
  for (let i = 0; i < count; i++) {
    const e = 6 + 16 * i;
    const w = b.readUInt8(e) || 256;
    const len = b.readUInt32LE(e + 8);
    const off = b.readUInt32LE(e + 12);
    if (w > best.size) best = { size: w, offset: off, len };
  }
  console.log(`ICO: ${count} entri, terbesar ${best.size}px`);
  // validasi signature PNG
  const sig = b.slice(best.offset, best.offset + 8).toString("hex");
  if (sig !== "89504e470d0a1a0a") throw new Error("entri bukan PNG!");
  return b.slice(best.offset, best.offset + best.len);
}

(async () => {
  const favPng = extractLargestPng("/home/z/my-project/src/app/favicon.ico");
  const og = await sharp("/home/z/my-project/public/images/og-image.jpg").resize(580).toBuffer();
  const fav = await sharp(favPng).resize(110).png().toBuffer();
  const ic = await sharp("/home/z/my-project/public/icons/icon-512.png").resize(110).png().toBuffer();
  const apple = await sharp("/home/z/my-project/src/app/apple-icon.png").resize(110).png().toBuffer();

  await sharp({ create: { width: 800, height: 400, channels: 4, background: "#f6f1e4" } })
    .composite([
      { input: og, top: 15, left: 15 },
      { input: fav, top: 20, left: 630 },
      { input: ic, top: 145, left: 630 },
      { input: apple, top: 270, left: 630 },
    ])
    .png()
    .toFile("/home/z/my-project/work/verify-brand.png");
  console.log("verify-brand.png OK");
})().catch((e) => { console.error(e); process.exit(1); });
