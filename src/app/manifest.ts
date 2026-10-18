import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BRAND.name} — ${BRAND.taglineId}`,
    short_name: "Gunara",
    description:
      "Gunara Consultant — pusat perizinan terlengkap di Asia. 500+ jenis perizinan usaha, 38 provinsi Indonesia, diperkuat 46 Dewan Pakar Lintas Bidang, tersertifikasi ISO 9001:2015.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#04231a",
    theme_color: "#04231a",
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
