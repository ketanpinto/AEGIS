import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { SmoothScroll } from '@/components/smooth-scroll'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'A.E.G.I.S | Privacy-Preserving Fall Detection System',
    template: '%s | A.E.G.I.S',
  },
  description: 'Autonomous Elderly Guardian & Intelligent Sensing - A privacy-preserving fall detection and vital monitoring system using Wi-Fi CSI and mmWave sensor fusion.',
  keywords: ['fall detection', 'elderly care', 'Wi-Fi CSI', 'mmWave radar', 'IoT', 'embedded systems', 'machine learning', 'privacy', 'healthcare'],
  authors: [{ name: 'Middlesex University Dubai' }],
  creator: 'Computer Systems Engineering Student',
  generator: 'Next.js',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'A.E.G.I.S',
    title: 'A.E.G.I.S | Privacy-Preserving Fall Detection System',
    description: 'A device-free fall detection system using Wi-Fi CSI and mmWave sensor fusion for privacy-preserving elderly monitoring.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A.E.G.I.S | Privacy-Preserving Fall Detection System',
    description: 'A device-free fall detection system using Wi-Fi CSI and mmWave sensor fusion for privacy-preserving elderly monitoring.',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f14' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased text-foreground bg-background`}>
        {/* Global Noise & Light Effects */}
        <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SmoothScroll>
            <Navigation />
            {children}
          </SmoothScroll>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
