'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ExternalLink,
  Clock,
  CheckCircle2,
  Sparkles,
  UserCheck,
} from 'lucide-react'
import PageTransition from '@/components/ui/PageTransition'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import CTAStrip from '@/components/sections/CTAStrip'
import { useLanguage } from '@/context/LanguageContext'

type LocationKey = 'india' | 'germany'

interface LocationDetails {
  id: LocationKey
  labelEN: string
  labelDE: string
  flag: string
  officeNameEN: string
  officeNameDE: string
  addressLines: string[]
  email?: string
  phone: string
  mapsUrl: string
  embedMapUrl: string
  coordinates: string
  timezone: string
}

const LOCATIONS: Record<LocationKey, LocationDetails> = {
  india: {
    id: 'india',
    labelEN: 'INDIA',
    labelDE: 'INDIEN',
    flag: '🇮🇳',
    officeNameEN: 'ESC Utility Services Pvt.Ltd',
    officeNameDE: 'ESC Utility Services Pvt.Ltd',
    addressLines: [
      'Module 2605, 6th Floor',
      'Yamuna Building',
      'Technopark Phase 3 Campus',
      'Trivandrum, Kerala – 695583',
      'India',
    ],
    email: 'support@esc-ind.com',
    phone: '+91 8086 22 8000',
    mapsUrl: 'https://maps.google.com/?q=Yamuna+Building+Technopark+Phase+3+Trivandrum+Kerala+India',
    embedMapUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=76.8717,8.5514,76.8877,8.5634&layer=mapnik&marker=8.5574,76.8797',
    coordinates: '8.5574° N, 76.8797° E',
    timezone: 'IST (UTC+5:30)',
  },
  germany: {
    id: 'germany',
    labelEN: 'GERMANY',
    labelDE: 'DEUTSCHLAND',
    flag: '🇩🇪',
    officeNameEN: 'Group Head Office',
    officeNameDE: 'Konzernzentrale Deutschland',
    addressLines: [
      'Goltsteinstraße 30–31',
      '40211 Düsseldorf',
      'Germany',
    ],
    phone: '+49 (211) 138 66 454',
    mapsUrl: 'https://maps.google.com/?q=Goltsteinstra%C3%9Fe+30-31+40211+D%C3%BCsseldorf+Germany',
    embedMapUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=6.7655,51.2217,6.7815,51.2337&layer=mapnik&marker=51.2277,6.7735',
    coordinates: '51.2277° N, 6.7735° E',
    timezone: 'CET (UTC+1)',
  },
}

export default function ContactPage() {
  const { t, language } = useLanguage()
  const [activeLocation, setActiveLocation] = useState<LocationKey>('india')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const resetForm = () => {
    setSubmitted(false)
    setFormData({ name: '', email: '', company: '', service: '', message: '' })
  }

  const currentLocation = LOCATIONS[activeLocation]
  const currentLabel = language === 'DE' ? currentLocation.labelDE : currentLocation.labelEN
  const currentOfficeName = language === 'DE' ? currentLocation.officeNameDE : currentLocation.officeNameEN

  const managingDirectors = [
    {
      name: 'Matthias Ulrich Niederprüm',
      role: language === 'DE' ? 'Vorsitzender & Geschäftsführer' : 'Chairman & Director',
      location: language === 'DE' ? '🇩🇪 Deutschland Hauptsitz' : '🇩🇪 Germany Head Office',
      photo: '/images/Matthias.jpg',
      objectPosition: 'object-top',
      email: 'ceo@esc-ind.com',
      bio: language === 'DE'
        ? 'Verantwortet Unternehmensführung, technologische Strategie und das Management von Unternehmensinfrastrukturen für führende Energie- und Wasserkunden.'
        : 'Leading high-level governance, technological strategy, and enterprise infrastructure management for critical energy and water clients.',
    },
    {
      name: 'Manoj Nirmala Sukumaran',
      role: language === 'DE' ? 'Geschäftsführer' : 'Managing Director',
      location: language === 'DE' ? '🇮🇳 Indien Standort' : '🇮🇳 India Office',
      photo: '/images/Manoj.jpeg?v=3',
      objectPosition: 'object-top',
      email: 'ceo@esc-ind.com',
      bio: language === 'DE'
        ? 'Leitet die strategische Geschäftsentwicklung, das operative Management und deutsch-indische Partnerschaften für europäische und asiatische Märkte.'
        : 'Directing strategic business development, executive operations, and Indo-German utility partnerships for European and Asian markets.',
    },
  ]

  return (
    <PageTransition>
      <div className="w-full bg-gradient-to-b from-[#e2e8f0] via-[#f1f5f9] to-[#cbd5e1] text-slate-900 overflow-hidden">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <section className="esc-hero-section relative flex items-center overflow-hidden border-b border-slate-300/80">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full opacity-60 blur-[130px]"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(226,232,240,0.7) 60%, transparent 100%)',
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-15 blur-[140px]"
              style={{ background: 'radial-gradient(circle, rgba(150,34,40,0.6) 0%, transparent 70%)' }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_70%,transparent_100%)]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <AnimateOnScroll direction="up" className="max-w-3xl">
              {/* Location Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/90 border border-slate-300 shadow-sm mb-6 backdrop-blur-md">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#962228] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#962228]"></span>
                </span>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#962228] font-outfit">
                  {t.contact.heroBadge}
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 font-plus-jakarta">
                {t.contact.heroTitlePre}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#962228] via-[#e63946] to-red-700">
                  {t.contact.heroTitleHighlight}
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-lg sm:text-xl text-slate-700 font-light leading-relaxed max-w-2xl">
                {t.contact.heroSubtitle}
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. QUICK CONTACT BAR */}
        {/* ========================================================================= */}
        <section className="py-12 bg-white/60 border-b border-slate-300/80 backdrop-blur-md relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              {/* Email Card */}
              <motion.a
                href="mailto:support@esc-ind.com"
                whileHover={{ y: -3 }}
                className="group p-6 rounded-2xl bg-white border border-slate-300/90 shadow-sm hover:border-[#962228]/50 hover:shadow-md transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#962228]/10 border border-[#962228]/20 flex items-center justify-center text-[#962228] group-hover:bg-[#962228] group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-slate-500 font-outfit block">
                    {t.contact.emailSupport}
                  </span>
                  <span className="text-base font-bold text-slate-900 group-hover:text-[#962228] transition-colors font-plus-jakarta">
                    support@esc-ind.com
                  </span>
                </div>
              </motion.a>

              {/* Phone Card */}
              <motion.a
                href="tel:+918086228000"
                whileHover={{ y: -3 }}
                className="group p-6 rounded-2xl bg-white border border-slate-300/90 shadow-sm hover:border-[#962228]/50 hover:shadow-md transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#962228]/10 border border-[#962228]/20 flex items-center justify-center text-[#962228] group-hover:bg-[#962228] group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-slate-500 font-outfit block">
                    {t.contact.phoneDirect}
                  </span>
                  <span className="text-base font-bold text-slate-900 group-hover:text-[#962228] transition-colors font-plus-jakarta font-mono">
                    +91 8086 22 8000
                  </span>
                </div>
              </motion.a>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. INTERACTIVE LOCATION & EMBEDDED MAP VIEWPORT */}
        {/* ========================================================================= */}
        <section className="py-20 bg-gradient-to-b from-white/70 via-slate-100/80 to-white/70 relative border-b border-slate-300/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll direction="up" className="mb-10 text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#962228] font-outfit block mb-2">
                {t.contact.facilitiesBadge}
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-plus-jakarta mb-3">
                {t.contact.facilitiesTitle}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-normal">
                {t.contact.facilitiesSubtitle}
              </p>
            </AnimateOnScroll>

            {/* Location Switcher Tabs */}
            <div className="flex items-center justify-center gap-3 mb-10">
              {(Object.keys(LOCATIONS) as LocationKey[]).map((key) => {
                const loc = LOCATIONS[key]
                const label = language === 'DE' ? loc.labelDE : loc.labelEN
                const isActive = activeLocation === key
                return (
                  <button
                    key={key}
                    onClick={() => setActiveLocation(key)}
                    className={`relative px-8 py-3.5 rounded-full text-xs font-black tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2.5 cursor-pointer font-outfit ${
                      isActive
                        ? 'bg-[#962228] text-white shadow-lg shadow-[#962228]/20'
                        : 'bg-white text-slate-700 hover:text-slate-950 border border-slate-300 shadow-sm'
                    }`}
                  >
                    <span>{loc.flag}</span>
                    <span>{label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeLocationTab"
                        className="absolute inset-0 rounded-full border-2 border-white/30 pointer-events-none"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Single Consolidated Map & Office Details Container */}
            <div className="relative w-full rounded-3xl bg-white border border-slate-300 shadow-xl overflow-hidden backdrop-blur-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentLocation.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]"
                >
                  {/* Left Column: Comprehensive Office Information */}
                  <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200 bg-white">
                    <div>
                      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
                          <MapPin className="w-3.5 h-3.5 text-[#962228]" />
                          <span>{currentLocation.coordinates}</span>
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#962228] font-outfit">
                          {currentLocation.timezone}
                        </span>
                      </div>

                      <span className="text-xs font-black tracking-[0.2em] uppercase text-red-600 font-outfit block mb-1">
                        {currentLabel} {language === 'DE' ? 'STANDORT' : 'OFFICE'}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-plus-jakarta mb-6">
                        {currentOfficeName}
                      </h3>

                      {/* Full Address */}
                      <div className="space-y-1.5 text-slate-700 text-sm sm:text-base font-normal mb-8">
                        {currentLocation.addressLines.map((line, i) => (
                          <p key={i} className="leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </div>

                      {/* Contacts */}
                      <div className="space-y-3 pt-6 border-t border-slate-200 text-sm text-slate-800 font-medium">
                        {currentLocation.email && (
                          <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-[#962228]" />
                            <a href={`mailto:${currentLocation.email}`} className="hover:text-[#962228] transition-colors">
                              {currentLocation.email}
                            </a>
                          </div>
                        )}
                        <div className="flex items-center gap-3">
                          <Phone className="w-4 h-4 text-[#962228]" />
                          <a href={`tel:${currentLocation.phone}`} className="hover:text-[#962228] transition-colors font-mono">
                            {currentLocation.phone}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Get Directions CTA */}
                    <div className="mt-10 pt-6 border-t border-slate-200">
                      <a
                        href={currentLocation.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-[#962228] hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#962228]/20 group cursor-pointer"
                      >
                        <span>{t.contact.getDirections}</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Embedded Interactive Map (OpenStreetMap) */}
                  <div className="lg:col-span-7 relative w-full h-[360px] lg:h-auto min-h-[380px] bg-slate-200">
                    <iframe
                      title={`Map for ${currentOfficeName}`}
                      src={currentLocation.embedMapUrl}
                      className="w-full h-full border-0 opacity-90 hover:opacity-100 transition-opacity duration-300"
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. EXECUTIVE MANAGEMENT & LEADERSHIP CONTACT SECTION */}
        {/* ========================================================================= */}
        <section className="py-24 bg-white/70 relative border-b border-slate-300/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll direction="up" className="mb-14 text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#962228]/10 border border-[#962228]/20 text-xs font-bold uppercase tracking-widest text-[#962228] mb-3 font-outfit">
                <UserCheck className="w-3.5 h-3.5" />
                <span>{t.contact.execBadge}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-plus-jakarta mb-3">
                {t.contact.execTitle}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-normal">
                {t.contact.execSubtitle}
              </p>
            </AnimateOnScroll>

            {/* Wide Stacked Executive Cards Container */}
            <div className="space-y-12 max-w-5xl mx-auto">
              {managingDirectors.map((director, idx) => (
                <motion.div
                  key={director.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="rounded-3xl bg-white border border-slate-300/90 shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-10 overflow-hidden backdrop-blur-xl"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
                    
                    {/* Left: Extra Wide Executive Portrait */}
                    <div className="md:col-span-7 flex justify-center">
                      <div className="relative w-full max-w-[560px] h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-[#fafafa] flex-shrink-0">
                        <Image
                          src={director.photo}
                          alt={director.name}
                          fill
                          unoptimized
                          className={`object-cover ${director.objectPosition} hover:scale-105 transition-transform duration-500`}
                          sizes="(max-width: 768px) 100vw, 560px"
                          priority={idx === 0}
                        />
                      </div>
                    </div>

                    {/* Right: Executive Details & Aligned Tel / Mobil / Email List */}
                    <div className="md:col-span-5 flex flex-col justify-center text-left space-y-4">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 font-plus-jakarta tracking-tight">
                        {director.name}
                      </h3>

                      <p className="text-base sm:text-lg text-slate-500 font-medium font-outfit pb-2">
                        {director.role}
                      </p>

                      <div className="space-y-2 text-sm sm:text-base font-normal text-slate-600 font-mono pt-3 border-t border-slate-100">
                        <div className="flex items-center gap-3">
                          <span className="w-14 text-slate-500 font-sans">Email</span>
                          <span className="text-slate-400">:</span>
                          <a
                            href={`mailto:${director.email}`}
                            className="text-[#962228] font-semibold hover:underline"
                          >
                            {director.email}
                          </a>
                        </div>
                      </div>

                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. INQUIRY FORM */}
        {/* ========================================================================= */}
        <section className="py-24 bg-gradient-to-b from-[#f1f5f9] to-[#cbd5e1] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white/90 border border-slate-300/90 rounded-3xl p-8 sm:p-12 shadow-xl backdrop-blur-xl">
              <AnimateOnScroll direction="up" className="mb-10 text-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#962228]/10 border border-[#962228]/20 text-xs font-bold uppercase tracking-widest text-[#962228] mb-3 font-outfit">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.contact.formBadge}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-plus-jakarta mb-2">
                  {t.contact.formTitle}
                </h2>
                <p className="text-slate-600 text-sm font-normal">
                  {t.contact.formSubtitle}
                </p>
              </AnimateOnScroll>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-plus-jakarta mb-2">
                    {t.contact.formSuccessTitle}
                  </h3>
                  <p className="text-slate-600 text-sm max-w-sm leading-relaxed mb-8">
                    {t.contact.formSuccessDesc}
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-[#962228] transition-colors cursor-pointer"
                  >
                    {t.contact.formSendAnother}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-600 mb-2 font-outfit">
                        {t.contact.formName}
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={language === 'DE' ? 'Max Mustermann' : 'John Smith'}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#962228] focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Work Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-600 mb-2 font-outfit">
                        {t.contact.formEmail}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#962228] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-600 mb-2 font-outfit">
                        {t.contact.formCompany}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder={language === 'DE' ? 'Ihr Unternehmen' : 'Your company name'}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#962228] focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-600 mb-2 font-outfit">
                        {t.contact.formArea}
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#962228] focus:bg-white transition-colors"
                      >
                        <option value="">{t.contact.formAreaSelect}</option>
                        <option value="software">{language === 'DE' ? 'Software-Engineering & SCADA' : 'Software Engineering & SCADA'}</option>
                        <option value="ai">{language === 'DE' ? 'Generative KI & Machine Learning' : 'Generative AI & Machine Learning'}</option>
                        <option value="automation">{language === 'DE' ? 'Intelligente Prozessautomatisierung' : 'Intelligent Process Automation'}</option>
                        <option value="backoffice">{language === 'DE' ? 'IT- & Grid-Backoffice-Services' : 'IT & Grid Back-Office Services'}</option>
                        <option value="market">{language === 'DE' ? 'Marktforschung & Beratung' : 'Utility Market Research & Consulting'}</option>
                        <option value="other">{language === 'DE' ? 'Allgemeine Kooperationsanfrage' : 'General Partnership Inquiry'}</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-600 mb-2 font-outfit">
                      {t.contact.formMessage}
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t.contact.formMessagePlaceholder}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#962228] focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading || !formData.name || !formData.email || !formData.message}
                    className="w-full py-4 rounded-xl bg-[#962228] hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#962228]/25 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>{t.contact.formSubmitting}</span>
                    ) : (
                      <>
                        <span>{t.contact.formSubmit}</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    {t.contact.formPrivacy}
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        <CTAStrip />
      </div>
    </PageTransition>
  )
}