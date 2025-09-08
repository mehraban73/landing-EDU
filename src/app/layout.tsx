import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Noto_Sans_Arabic } from 'next/font/google' // ← fallback برای فارسی

export const metadata: Metadata = {
  title: 'آینو',
  description: '...',
}

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300','400','500','700'],
  variable: '--font-roboto',
  display: 'swap',
})

const notoArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400','500','700'],
  variable: '--font-arabic',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={`${roboto.variable} ${notoArabic.variable}`}>
      <body>{children}</body>
    </html>
  )
}
