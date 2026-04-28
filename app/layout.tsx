import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
})

export const metadata = {
  title: "Jarvis — Lazizbek's digital assistant",
  description:
    "I help @LazizbekNa manage his digital life — emails, calendar, WhatsApp, automation, and exploring what human-AI collaboration can be.",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased dark",
        geist.variable,
        fontMono.variable,
        instrumentSerif.variable,
        "font-sans"
      )}
    >
      <body className="bg-[#0a0a0a] text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
