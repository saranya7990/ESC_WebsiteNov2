import type { Metadata } from 'next'
import { Geist, Outfit, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageTransition from '@/components/ui/PageTransition'
import { LanguageProvider } from '@/context/LanguageContext'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta' })

export const metadata: Metadata = {
  title: 'ESC Utility Services Pvt.Ltd',
  description:
    'IT Back Office & Automation Service Provider for Energy, Gas and Water Industry companies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${outfit.variable} ${plusJakarta.variable} bg-white antialiased font-sans`}>
        <LanguageProvider>
          <Navbar />
          <main className="pt-16">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}