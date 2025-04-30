import type { Metadata } from "next"
import { Audiowide, Inter, Fira_Code } from "next/font/google"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import Head from "next/head"

export const metadata: Metadata = {
  title: "KamiyTech | Custom Software & Web Solutions",
  description: "KamiyTech delivers custom websites, e-commerce platforms, SEO optimization, and responsive design for businesses and startups.",
  keywords: [
    "custom software development",
    "website development",
    "e-commerce solutions",
    "SEO optimization",
    "KamiyTech",
    "web design for startups",
    "responsive web development"
  ],
  authors: [{ name: "KamiyTech", url: "https://kamiytech.com" }],
  creator: "KamiyTech",
  metadataBase: new URL("https://kamiytech.com"),
  openGraph: {
    title: "KamiyTech | Software Solutions for Your Business",
    description: "Professional website development, SEO services, and scalable digital solutions for modern businesses.",
    url: "https://kamiytech.com",
    siteName: "KamiyTech",
    images: [
      {
        url: "https://kamiytech.com/banner.jpg", // Replace with actual image URL
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
    title: "KamiyTech",
    description: "Custom web and software development for growing businesses.",
    creator: "@kamiytech", // If you have a Twitter handle
    images: ["https://kamiytech.com/banner.jpg"],
  },
  themeColor: "#0d9488",
}


// Load Google fonts and expose CSS variables
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
})
const audiowide = Audiowide({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "400"
})
const firacode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${audiowide.variable} ${firacode.variable} box-border`} style={{ scrollBehavior: "smooth" }}>
      <body className="antialiased">
        <ClerkProvider>
          <Head>
            <link rel="canonical" href="https://kamiytech.com" />
            <meta name="robots" content="index, follow" />
          </Head>
          {children}
        </ClerkProvider>
      </body>
    </html>
  )
}
