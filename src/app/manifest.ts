import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BRAND.name} — ${BRAND.tagline}`,
    short_name: "GConsultant",
    description:
      "GConsultant — The Polymathic Problem Solver. Menyatukan ilmu, menata kompleksitas, mewujudkan solusi: 500+ perizinan & legalitas usaha, arsitektur sistem bisnis UMEA™, 38 provinsi Indonesia, ISO 9001:2015.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0f241d",
    theme_color: "#0f241d",
    lang: "id",
    categories: ["business", "legal", "government"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
