import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gunara Consultant — Konsultan Perizinan Usaha Terbaik Indonesia",
    short_name: "Gunara",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0b2b22",
    theme_color: "#0e7a55",
    lang: "id",
    orientation: "portrait",
    categories: ["business", "legal", "consulting"],
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
