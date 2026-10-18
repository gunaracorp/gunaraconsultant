import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { BlogArticle } from "@/components/blog-article";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { BRAND } from "@/lib/brand";
import { POSTS, getPost } from "@/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const title = post.titleId;
  const description = post.excerptId;
  const ogAlt = `${post.titleId} — ${BRAND.taglineId}`;

  return {
    ...pageMetadata({
      title,
      description,
      keywords: [...post.tags, "panduan perizinan", "blog gunara consultant"],
      path: `/blog/${post.slug}`,
    }),
    openGraph: {
      type: "article",
      locale: "id_ID",
      alternateLocale: ["en_US"],
      url: `${BRAND.siteUrl}/blog/${post.slug}`,
      siteName: BRAND.name,
      title: `${title} | ${BRAND.name}`,
      description,
      publishedTime: post.date,
      modifiedTime: post.dateModified,
      authors: ["Gugun Gunara"],
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1344,
          height: 768,
          alt: ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${BRAND.name}`,
      description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${BRAND.siteUrl}/blog/${post.slug}#article`,
    url: `${BRAND.siteUrl}/blog/${post.slug}`,
    headline: post.titleId,
    alternativeHeadline: post.titleEn,
    description: post.excerptId,
    image: [`${BRAND.siteUrl}${post.image}`],
    datePublished: post.date,
    dateModified: post.dateModified,
    inLanguage: "id-ID",
    wordCount: post.bodyId.reduce(
      (acc, b) => acc + ("text" in b ? b.text.split(/\s+/).length : 0),
      0
    ),
    timeRequired: `PT${post.minutes}M`,
    articleSection: post.cat,
    keywords: post.tags.join(", "),
    author: {
      "@type": "Person",
      name: "Gugun Gunara",
      jobTitle: "Pendiri & Direktur Utama",
      url: `${BRAND.siteUrl}/pendiri`,
      worksFor: { "@id": `${BRAND.siteUrl}/#organization` },
    },
    publisher: { "@id": `${BRAND.siteUrl}/#organization` },
    mainEntityOfPage: `${BRAND.siteUrl}/blog/${post.slug}`,
    isPartOf: { "@id": `${BRAND.siteUrl}/blog#blog` },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <BlogArticle slug={post.slug} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbJsonLd(`/blog/${post.slug}`, post.titleId)
            ),
          }}
        />
      </main>
      <Footer />
    </div>
  );
}
