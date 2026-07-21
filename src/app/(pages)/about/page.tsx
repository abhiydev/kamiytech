import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About KamiyTech | Custom Software & Web Solutions in Indore",
  description:
    "Discover KamiyTech’s story, mission, team, success stories, and office location in Indore. Leading custom software development in Madhya Pradesh & India.",
  keywords: [
    "About KamiyTech",
    "KamiyTech team",
    "software company Indore",
    "custom software development Indore",
    "web development team Madhya Pradesh",
  ],
  alternates: {
    canonical: "https://kamiytech.com/about",
  },
  openGraph: {
    title: "About KamiyTech | Leading Software Solutions in Indore",
    description:
      "Empowering businesses with custom web applications, mobile apps, and enterprise software.",
    url: "https://kamiytech.com/about",
    siteName: "KamiyTech",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About KamiyTech – Indore’s Premier Custom Software Solutions",
    url: "https://kamiytech.com/about",
    description:
      "Learn about KamiyTech’s history, mission, success stories, team, core values, and office location in Indore.",
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
      <AboutClient />
    </>
  );
}
