import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Bellabit | Offensive Security Team",
  description:
    "Competitive CTF team and security researchers. Binary exploitation, reverse engineering, web security, and cryptography.",
  keywords: ["CTF", "Cybersecurity", "Penetration Testing", "Security Research", "Bellabit", "Red Team"],
  authors: [{ name: "Bellabit" }],
  openGraph: {
    title: "Bellabit | Offensive Security Team",
    description: "Competitive CTF team and security researchers.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
