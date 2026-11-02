'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function HeroSection() {
  const { t, language } = useLanguage()

  return (
    <section
      style={{ backgroundColor: '#ffffff' }}
      className="flex-1 min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] pt-[6.75rem] pb-6 sm:pt-[7.25rem] sm:pb-8 lg:pt-[7.5rem] lg:pb-10 relative bg-white flex items-center overflow-hidden border-b border-[#E5E7EB]"
    >

      {/* FULL-BACKGROUND DIORAMA CONTAINER (Perfectly Framed & Centered Right) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-end z-20 pt-20">

        {/* Floating Diorama Background Graphic */}
        <motion.div
          className="relative w-full h-full max-w-[1000px] lg:max-w-[1250px] xl:max-w-[1400px] flex items-center justify-end pr-2 sm:pr-6 lg:pr-10 z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -18, 0],
          }}
          transition={{
            opacity: { duration: 1.2, delay: 0.3 },
            scale: { duration: 1.2, delay: 0.3 },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <div className="relative w-[78vw] sm:w-[70vw] h-[380px] sm:h-[460px] lg:h-[520px] max-w-[1050px]">
            <Image
              src="/images/diaroma1.png"
              alt="ESC Utility Services Pvt.Ltd — Energy and Water Infrastructure Diorama"
              fill
              className="object-contain object-right"
              priority
              sizes="100vw"
            />
          </div>
        </motion.div>
      </div>

      {/* Content Foreground (Text column aligned strictly to the left with zero diorama overlap) */}
      <div className="relative z-30 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 w-full">
        <div className="max-w-md sm:max-w-lg lg:max-w-xl">

          {/* Main Headline — exact size & casing matching the red hero */}
          <div className="mb-4 sm:mb-6">
            <motion.h1
              className={`${
                language === 'DE'
                  ? 'text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem]'
                  : 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl'
              } font-light text-[#252B33] leading-[1.08] tracking-tight font-plus-jakarta`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <motion.span
                className="block font-bold text-[#252B33]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {t.home.hero.powering}
              </motion.span>
              <motion.span
                className="block text-[#252B33] font-light"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {t.home.hero.theFutureOf}
              </motion.span>
              <motion.span
                className="block font-extrabold text-[#861F2B] whitespace-nowrap"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {t.home.hero.utilities}
              </motion.span>
            </motion.h1>
          </div>

          {/* Description — Wrapped cleanly to fit left of diorama */}
          <motion.p
            className="text-[#252B33] text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-7 max-w-md sm:max-w-lg font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: 'easeOut' }}
          >
            {t.home.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease: 'easeOut' }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/services"
                className="px-7 py-3.5 text-sm font-bold text-white bg-[#861F2B] hover:bg-[#6E1923] rounded-xl transition-all duration-300 shadow-sm hover:shadow-md inline-block"
              >
                {t.home.hero.ctaServices}
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/about"
                className="px-7 py-3.5 text-sm font-semibold text-[#252B33] rounded-xl border border-[#E5E7EB] hover:border-[#6B7280]/40 hover:bg-[#F1F3F5] transition-all duration-300 inline-block bg-white"
              >
                {t.home.hero.ctaAbout}
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
