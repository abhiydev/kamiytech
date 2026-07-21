import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers & Open Positions | KamiyTech - Join Our Engineering Team",
  description:
    "Explore career opportunities and job openings at KamiyTech. Join our Indore engineering team as a Frontend Developer, Backend Engineer, or UI/UX Designer.",
  keywords: [
    "KamiyTech careers",
    "software engineer jobs Indore",
    "frontend developer jobs Indore",
    "web development careers India",
  ],
  alternates: {
    canonical: "https://kamiytech.com/careers",
  },
  openGraph: {
    title: "Careers at KamiyTech | Join Our Team in Indore",
    description: "Build innovative software with KamiyTech. Apply for open developer and designer roles.",
    url: "https://kamiytech.com/careers",
    siteName: "KamiyTech",
    locale: "en_US",
    type: "website",
  },
};

export default function CareersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CareersPage",
    name: "KamiyTech Careers",
    url: "https://kamiytech.com/careers",
    description: "Explore open software development positions at KamiyTech.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CareersClient />
    </>
  );
}
