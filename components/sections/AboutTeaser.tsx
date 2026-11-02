'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Globe2,
  Award,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function AboutTeaser() {
  const { t } = useLanguage()

  const stats = [
    {
      icon: Award,
      value: t.home.aboutTeaser.stat1Value,
      label: t.home.aboutTeaser.stat1Label,
      desc: t.home.aboutTeaser.stat1Desc,
    },
    {
      icon: Building2,
      value: t.home.aboutTeaser.stat2Value,
      label: t.home.aboutTeaser.stat2Label,
      desc: t.home.aboutTeaser.stat2Desc,
    },
    {
      icon: ShieldCheck,
      value: t.home.aboutTeaser.stat3Value,
      label: t.home.aboutTeaser.stat3Label,
      desc: t.home.aboutTeaser.stat3Desc,
    },
    {
      icon: Globe2,
      value: t.home.aboutTeaser.stat4Value,
      label: t.home.aboutTeaser.stat4Label,
      desc: t.home.aboutTeaser.stat4Desc,
    },
  ]

  return (
    <section className="relative bg-gradient-to-b from-[#e2e8f0] via-[#f1f5f9] to-[#cbd5e1] py-24 lg:py-32 overflow-hidden border-y border-slate-300/80 shadow-inner">
      {/* Background Metallic Light Reflections & Silver Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Metallic Light Beam */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full opacity-40 blur-[130px]"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(226,232,240,0.6) 60%, transparent 100%)',
          }}
        />

        {/* Bottom Crimson Accent Glow */}
        <div
          className="absolute -bottom-40 right-10 w-[500px] h-[500px] rounded-full opacity-15 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(150,34,40,0.5) 0%, transparent 70%)',
          }}
        />

        {/* Silver Metallic Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Text & Value Proposition with Motion Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-6"
          >
            {/* Section Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-slate-300 shadow-sm mb-6 backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-[#962228] animate-pulse" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#962228] font-outfit">
                {t.home.aboutTeaser.badge}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-6 font-plus-jakarta"
            >
              {t.home.aboutTeaser.headlinePre}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#962228] via-[#e63946] to-red-700">
                {t.home.aboutTeaser.headlineHighlight}
              </span>{' '}
              {t.home.aboutTeaser.headlinePost}
            </motion.h2>

            {/* Sub-Description Paragraphs */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-700 text-base sm:text-lg font-light leading-relaxed mb-4"
            >
              {t.home.aboutTeaser.p1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-600 text-sm sm:text-base font-light leading-relaxed mb-8"
            >
              {t.home.aboutTeaser.p2}
            </motion.p>

            {/* Action Link Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#962228] to-[#b82830] hover:from-[#7a1b20] hover:to-[#962228] rounded-2xl shadow-lg shadow-[#962228]/25 hover:shadow-xl hover:shadow-[#962228]/35 transition-all duration-300 font-outfit"
              >
                <span>{t.home.aboutTeaser.btn}</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Animated Glassmorphic Silver Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {stats.map((stat, index) => {
              const IconComp = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 * index,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative p-7 rounded-3xl bg-white/70 border border-slate-300 shadow-lg shadow-slate-300/30 backdrop-blur-xl hover:shadow-xl hover:border-slate-400/80 transition-all duration-300 overflow-hidden"
                >
                  {/* Subtle top edge metallic highlight */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300 flex items-center justify-center text-[#962228] group-hover:scale-110 group-hover:bg-[#962228] group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComp className="w-6 h-6 transition-colors duration-300" />
                    </div>
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-plus-jakarta tracking-tight group-hover:text-[#962228] transition-colors duration-300">
                      {stat.value}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1.5 font-plus-jakarta leading-snug">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {stat.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}