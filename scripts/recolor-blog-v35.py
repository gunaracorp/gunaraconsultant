#!/usr/bin/env python3
"""
GConsultant v3.5.0 — recolor cover blog: hijau → Royal Navy.

Mask SEMPIT agar aman untuk ilustrasi: hanya piksel keluarga hijau–teal
(hue 60–185°, sat > 0.12, val > 0.10) yang dihue-shift ke 219° (Royal Navy)
dengan saturasi ×1.12. Gold/ivory/merah/biru/abu/foto tidak disentuh.
og-image.jpg tidak lewat sini (diregenerasi penuh dari SVG oleh sharp).
"""
from pathlib import Path
import numpy as np
from PIL import Image

BLOG = Path("/home/z/my-project/public/images/blog")
NAVY_HUE = 219.0

def rgb_to_hsv(a: np.ndarray):
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    mx = a.max(-1)
    mn = a.min(-1)
    d = mx - mn
    hue = np.zeros_like(mx)
    nz = d > 1e-6
    ir = nz & (mx == r)
    ig = nz & (mx == g) & ~ir
    ib = nz & (mx == b) & ~ir & ~ig
    hue[ir] = (60.0 * ((g - b)[ir] / d[ir])) % 360.0
    hue[ig] = 60.0 * ((b - r)[ig] / d[ig]) + 120.0
    hue[ib] = 60.0 * ((r - g)[ib] / d[ib]) + 240.0
    sat = np.where(mx > 1e-6, d / np.maximum(mx, 1e-6), 0.0)
    return hue, sat, mx

def hsv_to_rgb(h: np.ndarray, s: np.ndarray, v: np.ndarray) -> np.ndarray:
    h6 = (h / 60.0) % 6.0
    i = h6.astype(int)
    f = h6 - i
    p = v * (1 - s)
    q = v * (1 - f * s)
    t = v * (1 - (1 - f) * s)
    r = np.select([i == 0, i == 1, i == 2, i == 3, i == 4, i == 5], [v, q, p, p, t, v])
    g = np.select([i == 0, i == 1, i == 2, i == 3, i == 4, i == 5], [t, v, v, q, p, p])
    b = np.select([i == 0, i == 1, i == 2, i == 3, i == 4, i == 5], [p, p, t, v, v, q])
    return np.stack([r, g, b], axis=-1)

def main() -> None:
    files = sorted(BLOG.glob("*.png"))
    if not files:
        print("Tidak ada PNG di", BLOG)
        return
    for p in files:
        img = Image.open(p).convert("RGBA")
        arr = np.asarray(img).astype(np.float32) / 255.0
        rgb, alpha = arr[..., :3], arr[..., 3:]
        h, s, v = rgb_to_hsv(rgb)
        mask = (h >= 60) & (h <= 185) & (s > 0.12) & (v > 0.10)
        if not mask.any():
            print(f"[—] {p.name}: 0 px hijau — dilewati")
            continue
        h2 = np.where(mask, NAVY_HUE, h)
        s2 = np.where(mask, np.clip(s * 1.12, 0.0, 1.0), s)
        rgb2 = hsv_to_rgb(h2, s2, v)
        out = np.concatenate([rgb2, alpha], axis=-1)
        Image.fromarray((np.clip(out, 0.0, 1.0) * 255.0).astype(np.uint8), "RGBA").save(p, optimize=True)
        pct = 100.0 * mask.sum() / mask.size
        print(f"[OK] {p.name}: {int(mask.sum()):,} px hijau→navy ({pct:.1f}%)")
    print("DONE")

if __name__ == "__main__":
    main()
