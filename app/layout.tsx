import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Atlas CNB | FTC Robotics Team - Timisoara, Romania",
  description:
    "Atlas CNB is a Romanian FTC (FIRST Tech Challenge) robotics team from Timisoara, Romania. Built to carry the future through innovation, engineering, and community.",
  keywords: ["FTC", "FIRST Tech Challenge", "robotics", "Timisoara", "Romania", "Atlas CNB", "STEM"],
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
