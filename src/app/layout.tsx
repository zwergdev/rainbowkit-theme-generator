import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@rainbow-me/rainbowkit/styles.css'
import './globals.css'
import { Header } from '@/components/home/header'
import { Footer } from '@/components/home/footer'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

const title = 'RainbowKit Theme Generator'
const description =
  'Easily create custom RainbowKit theme from a single colour that you can copy and paste into your web3 apps.'
const url = 'https://rainbowkit-theme-generator.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    siteId: '1654564851425869826',
    creator: '@zwergdev',
    creatorId: '1654564851425869826',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Web3Provider> */}
        <div className="flex flex-col w-full items-center justify-center min-h-screen relative overflow-hidden">
          <Header />
          <main className="container flex flex-col w-full items-center justify-center pb-10 pt-20">
            {children}
            <div className="grow" />
          </main>
          <div className="grow" />
          <Footer />
        </div>
        {/* </Web3Provider> */}
        <Toaster />
      </body>
    </html>
  )
}
