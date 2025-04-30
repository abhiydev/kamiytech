import type { Metadata } from "next"
import { Audiowide, Inter, Fira_Code } from "next/font/google"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"

export const metadata: Metadata = {
  title: "KamiyTech",
  description: "Custom software solutions & MCA student portfolio",
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
          {children}
        </ClerkProvider>
      </body>
    </html>
  )
}
