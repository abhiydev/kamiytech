import type { Metadata } from "next";
import Footer from "@/components/Footer";
import BookDemoForm from "@/components/GoogleForm";
import Navbar from "@/components/Navbar";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us | KamiyTech - Custom Web & App Development",
  description:
    "Get in touch with KamiyTech for custom website development, mobile apps, CRM solutions, and technical consultation in Indore, India.",
  keywords: [
    "Contact KamiyTech",
    "KamiyTech office address",
    "hire web developers Indore",
    "custom software consultation",
  ],
  alternates: {
    canonical: "https://kamiytech.com/contact",
  },
  openGraph: {
    title: "Contact KamiyTech | Get a Free Technical Consultation",
    description:
      "Transform your idea into reality. Reach out to KamiyTech for custom software, web, and mobile app development.",
    url: "https://kamiytech.com/contact",
    siteName: "KamiyTech",
    locale: "en_US",
    type: "website",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact KamiyTech",
    url: "https://kamiytech.com/contact",
    description: "Contact KamiyTech for custom software & web development inquiries.",
    mainEntity: {
      "@type": "Organization",
      name: "KamiyTech",
      url: "https://kamiytech.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Indore",
        addressRegion: "Madhya Pradesh",
        addressCountry: "India",
      },
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <BookDemoForm />
      <Footer />
    </div>
  );
}