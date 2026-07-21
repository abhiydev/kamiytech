import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UnderConstruction from "@/components/UnderConstruction";
import React from "react";

export const metadata: Metadata = {
  title: "Projects & Portfolio | KamiyTech - Custom Software Showcase",
  description:
    "Explore KamiyTech's portfolio of custom web applications, mobile apps, SaaS platforms, and enterprise solutions developed for clients across India.",
  keywords: [
    "KamiyTech projects",
    "web development portfolio",
    "mobile app portfolio Indore",
    "custom software case studies",
  ],
  alternates: {
    canonical: "https://kamiytech.com/projects",
  },
  openGraph: {
    title: "Projects Showcase | KamiyTech",
    description: "Discover our portfolio of web and mobile software solutions.",
    url: "https://kamiytech.com/projects",
    siteName: "KamiyTech",
    locale: "en_US",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <div>
      <Navbar />
      <UnderConstruction />
      <Footer />
    </div>
  );
}