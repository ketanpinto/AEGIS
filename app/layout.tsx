import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
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
    default: 'A.E.G.I.S. | Privacy-Preserving Fall Detection System',
    template: '%s | A.E.G.I.S.',
  },
  description: 'Autonomous Elderly Guardian & Intelligent Sensing - A privacy-preserving fall detection and vital monitoring system using Wi-Fi CSI and mmWave sensor fusion.',
  keywords: ['fall detection', 'elderly care', 'Wi-Fi CSI', 'mmWave radar', 'IoT', 'embedded systems', 'machine learning', 'privacy', 'healthcare'],
  authors: [{ name: 'Middlesex University Dubai' }],
  creator: 'Computer Systems Engineering Student',
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'A.E.G.I.S.',
    title: 'A.E.G.I.S. | Privacy-Preserving Fall Detection System',
    description: 'A device-free fall detection system using Wi-Fi CSI and mmWave sensor fusion for privacy-preserving elderly monitoring.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A.E.G.I.S. | Privacy-Preserving Fall Detection System',
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
