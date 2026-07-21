import type { Metadata, Viewport } from "next";
import { Audiowide, Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";

// ✅ Move themeColor here
export const viewport: Viewport = {
  themeColor: "#0d9488",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kamiytech.com"),
  title: "KamiyTech | Custom Software & Web Solutions",
  description:
    "KamiyTech builds custom websites, mobile apps, CRMs, and digital solutions that help businesses grow. Based in Indore, serving clients across India.",
  keywords: [
    "KamiyTech",
    "Kamiy tech",
    "custom software development",
    "website development",
    "web design for startups",
    "responsive web development",
    "e-commerce solutions",
    "mobile app development",
    "UI/UX design",
    "SEO optimization",
    "Indore software company",
    "digital marketing agency",
    "CRM development",
    "business automation",
    "custom ERP development",
  ],
  authors: [{ name: "KamiyTech", url: "https://kamiytech.com" }],
  creator: "KamiyTech",
  openGraph: {
    title: "KamiyTech | Software Solutions for Your Business",
    description:
      "Professional website development, mobile apps, and SEO solutions for businesses in Indore and across India.",
    url: "https://kamiytech.com",
    siteName: "KamiyTech",
    images: [
      {
        url: "https://kamiytech.com/logo.png",
        width: 1200,
        height: 630,
        alt: "KamiyTech Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KamiyTech | Web & App Development in India",
    description:
      "KamiyTech empowers businesses with modern websites, mobile apps, and CRM solutions to help them grow faster.",
    images: ["https://kamiytech.com/logo.png"],
    creator: "@kamiytech",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
      { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Fonts
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});
const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});
const firacode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${audiowide.variable} ${firacode.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="antialiased">
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "pk_test_Y2xlcmsua2FtaXl0ZWNoLmNvbSQ"}>
          {children}
          <Analytics />

          {/* ✅ JSON-LD for Google SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "KamiyTech",
                url: "https://kamiytech.com",
                logo: "https://kamiytech.com/logo.png",
                sameAs: [
                  "https://www.linkedin.com/company/kamiytech",
                  "https://github.com/kamiytech",
                ],
                description:
                  "KamiyTech helps startups and industries grow through website, mobile app, and CRM development.",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Indore",
                  addressRegion: "Madhya Pradesh",
                  addressCountry: "India",
                },
              }),
            }}
          />
        </ClerkProvider>
      </body>
    </html>
  );
}
