'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="w-full bg-[#801c21] text-white/90 border-t border-red-950/40 py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-medium">
        <Link
          href="/certifications"
          className="hover:text-white transition-colors duration-200"
        >
          {t.footer.certifications}
        </Link>
        <Link
          href="/data-protection"
          className="hover:text-white transition-colors duration-200"
        >
          {t.footer.dataProtection}
        </Link>
        <Link
          href="/imprint"
          className="hover:text-white transition-colors duration-200"
        >
          {t.footer.imprint}
        </Link>
      </div>
    </footer>
  )
}