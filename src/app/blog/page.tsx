import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { CtaBanner } from "@/components/sections/cta-banner";
import { BlogIndex } from "@/components/sections/blog-index";
import { PageHero } from "@/components/page-hero";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { BRAND } from "@/lib/brand";
import { POSTS } from "@/data/blog";

export const metadata: Metadata = pageMetadata({
  title: "Blog Perizinan & Legalitas Bisnis — Panduan Praktis Terlengkap",
  description:
    "Panduan praktis perizinan bisnis Indonesia dari praktisi: NIB OSS RBA, memilih PT/CV/Perorangan, pendirian PT PMA, izin edar BPOM, ISO 9001, dan strategi legalitas UMKM — gratis & selalu diperbarui.",
  keywords: [
    "blog perizinan bisnis",
    "panduan perizinan usaha",
    "cara mengurus izin usaha",
    "panduan nib oss rba",
    "cara mendirikan pt",
    "cara mendirikan pt pma",
    "izin edar bpom makanan",
    "tips legalitas umkm",
    "blog konsultan perizinan",
    "wawasan legalitas bisnis indonesia",
  ],
  path: "/blog",
});

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${BRAND.siteUrl}/blog#blog`,
  url: `${BRAND.siteUrl}/blog`,
  name: "Blog Perizinan & Legalitas Bisnis GConsultant",
  description:
    "Panduan praktis perizinan dan legalitas bisnis Indonesia dari praktisi GConsultant.",
  inLanguage: "id-ID",
  isPartOf: { "@id": `${BRAND.siteUrl}/#website` },
  publisher: { "@id": `${BRAND.siteUrl}/#organization` },
  blogPost: POSTS.map((p) => ({
    "@type": "BlogPosting",
    "@id": `${BRAND.siteUrl}/blog/${p.slug}#article`,
    url: `${BRAND.siteUrl}/blog/${p.slug}`,
    headline: p.titleId,
    alternativeHeadline: p.titleEn,
    description: p.excerptId,
    image: `${BRAND.siteUrl}${p.image}`,
    datePublished: p.date,
    dateModified: p.dateModified,
    author: {
      "@type": "Person",
      name: "Gugun Gunara",
      jobTitle: "Pendiri & Direktur Utama",
      url: `${BRAND.siteUrl}/pendiri`,
    },
    publisher: { "@id": `${BRAND.siteUrl}/#organization` },
    inLanguage: "id-ID",
  })),
};

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero
          crumbKey="navBlog"
          kickerKey="pgBlogKicker"
          titleKey="pgBlogTitle"
          subKey="pgBlogSub"
        />
        <BlogIndex />
        <CtaBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd("/blog", "Blog")),
          }}
        />
      </main>
      <Footer />
    </div>
  );
}
