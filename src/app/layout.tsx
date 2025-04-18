import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "KamiyTech – Your Digital Innovation Partner",
    template: "%s | KamiyTech",
  },
  description:
    "KamiyTech provides cost-effective, scalable software solutions—from gym management systems to B2B platforms—to help your business grow.",
  keywords: [
    "Software Development",
    "Gym Management System",
    "B2B SaaS",
    "Web Development",
    "India",
    "KamiyTech",
  ],
  authors: [{ name: "KamiyTech", url: "https://kamiytech.com" }],
  creator: "KamiyTech",
  publisher: "KamiyTech",
  openGraph: {
    title: "KamiyTech – Your Digital Innovation Partner",
    description:
      "Build, manage, and scale your business with KamiyTech’s custom software solutions and expert guidance.",
    url: "https://kamiytech.com",
    siteName: "KamiyTech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "KamiyTech – Digital Innovation Partner",
    description:
      "Cost-effective, scalable software for gyms, B2B SaaS, and more. Get started today!",
    creator: "@KamiyTech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://kamiytech.com",
    languages: {
      "en-US": "https://kamiytech.com",
      "hi-IN": "https://kamiytech.com/hi",
    },
  },
};

// ✅ Fix viewport moved outside metadata
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
