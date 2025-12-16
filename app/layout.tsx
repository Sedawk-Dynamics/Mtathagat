import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MTathagat Developers Pvt. Ltd. - Crafting Landmarks, Creating Value",
  description:
    "Premium real estate development company in Ranchi, creating exceptional residential and commercial properties",
  generator: "v0.app",
  icons: {
    icon: "/logo.png",       
    shortcut: "/logo.png",   
    apple: "/logo.png",     
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
