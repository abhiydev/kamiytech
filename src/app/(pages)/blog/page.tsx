import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog & Insights | KamiyTech - Web & Mobile Tech Trends",
  description:
    "Read the latest technology, web development, mobile app, and startup growth insights from the engineering team at KamiyTech.",
  keywords: [
    "KamiyTech blog",
    "web development blog",
    "tech articles Indore",
    "Next.js tutorial",
    "software engineering blog India",
  ],
  alternates: {
    canonical: "https://kamiytech.com/blog",
  },
  openGraph: {
    title: "Blog & Technical Insights | KamiyTech",
    description: "Expert articles on web development, mobile apps, and business software.",
    url: "https://kamiytech.com/blog",
    siteName: "KamiyTech",
    locale: "en_US",
    type: "website",
  },
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "KamiyTech Blog",
    url: "https://kamiytech.com/blog",
    description: "Insights on software engineering, web development, and tech innovation.",
    publisher: {
      "@type": "Organization",
      name: "KamiyTech",
      logo: "https://kamiytech.com/logo.png",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient />
    </>
  );
}
