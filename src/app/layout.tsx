import type { Metadata } from "next"
import { Audiowide, Inter, Fira_Code } from "next/font/google"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import Head from "next/head"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "KamiyTech | Custom Software & Web Solutions",
  description: "KamiyTech delivers custom websites, e-commerce platforms, SEO optimization, and responsive design for businesses and startups.",
  keywords: [
    "custom software development",
    "Kamiy tech",
    "website development",
    "e-commerce solutions",
    "mobile app development",
    "UI/UX design",
    "digital marketing",
    "SEO optimization",
    "KamiyTech",
    "web design for startups",
    "responsive web development",
    "Indore software company",
  ],
  authors: [{ name: "KamiyTech", url: "https://kamiytech.com" }],
  creator: "KamiyTech",
  metadataBase: new URL("https://kamiytech.com"),
  openGraph: {
    title: "KamiyTech | Software Solutions for Your Business",
    description: "Professional website development, SEO services, and scalable digital solutions for modern businesses in indore, madhya pradesh and india.",
    url: "https://kamiytech.com",
    siteName: "KamiyTech",
    images: [
      {
        url: "https://kamiytech.com/_next/image?url=%2Flogo.png&w=256&q=75", // Replace with actual image URL
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
    description: "Custom web and software development for growing businesses in indore, madhya pradesh and india.",
    creator: "@kamiytech", // If you have a Twitter handle
    images: ["https://kamiytech.com/_next/image?url=%2Flogo.png&w=256&q=75"],
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
            <link rel="icon" type="image/png" href="/https://kamiytech.com/favicon.ico/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/svg+xml" href="/https://kamiytech.com/favicon.ico/favicon.svg" />
            <link rel="shortcut icon" href="/https://kamiytech.com/favicon.ico/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/https://kamiytech.com/favicon.ico/apple-touch-icon.png" />
            <link rel="manifest" href="/https://kamiytech.com/favicon.ico/site.webmanifest" />
          </Head>
          {children}
          <Analytics />
        </ClerkProvider>
      </body>
    </html>
  )
}
