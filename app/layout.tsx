import type { Metadata } from 'next'
import { Inter, Outfit, JetBrains_Mono } from 'next/font/google'
import { Toaster } from 'sonner'
import SessionProvider from '@frontend/components/providers/SessionProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://narhub.com'),
  title: 'Narhub | Enterprise Software That Prints Money',
  description:
    '19 production-ready SaaS platforms. 400K+ lines of audited code. Zero technical debt. Deploy today, profit tomorrow. $40M ARR Year 1.',
  keywords: [
    'SaaS acquisition',
    'enterprise software for sale',
    'buy software company',
    'DeFi platform',
    'crypto software',
    'Web3 platform',
    'software marketplace',
    'ffollowme',
  ],
  authors: [{ name: 'ffollowme oü' }],
  creator: 'ffollowme oü',
  publisher: 'ffollowme oü',
  openGraph: {
    title: 'Narhub | 19 Enterprise SaaS Platforms',
    description: 'Production-ready platforms generating $40M ARR Year 1. Deploy in 7 weeks.',
    url: 'https://narhub.com',
    siteName: 'Narhub',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Narhub - Enterprise Software Marketplace',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narhub | Enterprise Software That Prints Money',
    description: '19 platforms. 400K+ LOC. Deploy in 7 weeks.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body antialiased bg-white text-gray-900">
        <SessionProvider>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: 'white',
                border: '1px solid #e2e8f0',
                color: '#0f172a',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              },
            }}
          />
        </SessionProvider>
      </body>
    </html>
  )
}
