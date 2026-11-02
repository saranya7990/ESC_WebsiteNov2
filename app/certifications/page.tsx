'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Maximize2, Download } from 'lucide-react'
import PageTransition from '@/components/ui/PageTransition'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import CTAStrip from '@/components/sections/CTAStrip'
import { useLanguage } from '@/context/LanguageContext'

export default function CertificationsPage() {
  const { t, language } = useLanguage()
  const [modalOpen, setModalOpen] = useState(false)

  const isDE = language === 'DE'

  return (
    <PageTransition>
      <div className="w-full bg-[#F1F3F6] text-[#252932] min-h-screen font-sans overflow-hidden">

        {/* ========================================================================= */}
        {/* HERO SECTION — DARK MAROON SECURITY CERTIFICATION THEME */}
        {/* ========================================================================= */}
        <section
          className="esc-hero-section relative flex items-center overflow-hidden border-b border-[#65191F]"
          style={{
            background: 'linear-gradient(100deg, #35090D 0%, #451419 42%, #65191F 78%, #7D1B24 100%)',
          }}
        >
          {/* Subtle Ambient Maroon Glow (Visible Area Below Navbar) */}
          <div className="absolute top-[72px] sm:top-[84px] lg:top-[108px] bottom-0 inset-x-0 overflow-hidden pointer-events-none select-none">
            {/* Subtle Warm Crimson Glow Behind Lower-Left Introductory Text */}
            <div
              className="
                absolute bottom-[8%] left-[4%] sm:left-[7%] lg:left-[8%]
                w-[240px] sm:w-[320px] h-[140px] sm:h-[170px]
                rounded-full blur-2xl pointer-events-none
              "
              style={{
                background:
                  'radial-gradient(circle, rgba(181,43,53,0.42) 0%, rgba(143,29,38,0.18) 48%, transparent 75%)',
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* LEFT COLUMN: LABEL, HEADING, DIVIDER, INTRODUCTORY TEXT */}
              <div className="lg:col-span-7 xl:col-span-6 text-left">
                <AnimateOnScroll direction="up" className="max-w-[600px]">
                  {/* Official Certification Badge */}
                  <div
                    className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-5 sm:mb-6 border"
                    style={{
                      backgroundColor: 'rgba(82, 18, 24, 0.65)',
                      borderColor: 'rgba(255, 255, 255, 0.22)',
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
                    <span className="text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.18em] uppercase text-[#FFFFFF]/95">
                      {t.certifications.badge}
                    </span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-3xl sm:text-5xl lg:text-[3.8rem] xl:text-[4.35rem] font-black tracking-[-0.02em] uppercase leading-[0.96] mb-5 sm:mb-6 font-plus-jakarta">
                    <span className="text-[#E6E8EC]">ISO/IEC 27001:2022</span>
                    <br />
                    <span className="text-[#FFFFFF]">{t.certifications.titleHighlight}</span>
                  </h1>

                  {/* Small Horizontal White Accent Divider */}
                  <div className="w-14 h-[2.5px] bg-[#FFFFFF]/90 mb-5 sm:mb-6 rounded-full" />

                  {/* Introductory Text */}
                  <p className="text-sm sm:text-base lg:text-[1.125rem] xl:text-[1.18rem] text-[#FFFFFF]/90 font-normal leading-[1.58] max-w-[530px]">
                    {t.certifications.subtitle}
                  </p>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CERTIFICATION BODY — LIGHT GREY (#F1F3F6) WITH CLEAN WHITE CARDS (#FFFFFF) */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-[#F1F3F6] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

              {/* LEFT COLUMN: CERTIFICATE IMAGE DISPLAY & METADATA */}
              <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">

                {/* Main High-Res Certificate Card */}
                <AnimateOnScroll
                  direction="up"
                  className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#252932]/10 shadow-[0_12px_36px_rgba(37,41,50,0.06)] text-center group"
                >
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1F3F6] border border-[#252932]/10 mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#8F1D26]" />
                    <span className="text-[11px] font-mono font-bold tracking-[0.18em] uppercase text-[#252932]">
                      {t.certifications.officialDoc}
                    </span>
                  </div>

                  {/* Interactive Certificate Preview Box */}
                  <div
                    onClick={() => setModalOpen(true)}
                    className="relative w-full aspect-[1/1.4] rounded-2xl overflow-hidden border border-[#252932]/15 shadow-sm group-hover:shadow-xl transition-all duration-500 cursor-pointer bg-[#F1F3F6] flex items-center justify-center"
                  >
                    <img
                      src="/images/isms-certificate.png"
                      alt="ISO/IEC 27001:2022 Certificate"
                      className="w-full h-full object-contain p-2 group-hover:scale-[1.03] transition-transform duration-500"
                    />

                    {/* Hover Overlay Badge */}
                    <div className="absolute inset-0 bg-[#252932]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-[#FFFFFF] gap-2 backdrop-blur-[2px]">
                      <div className="w-12 h-12 rounded-full bg-[#8F1D26] border border-[#FFFFFF]/30 flex items-center justify-center shadow-lg">
                        <Maximize2 className="w-5 h-5 text-[#FFFFFF]" />
                      </div>
                      <span className="text-xs font-mono font-bold uppercase tracking-widest bg-[#65191F] px-3.5 py-1.5 rounded-full">
                        {isDE ? 'Klicken zum Vergrößern' : 'Click to Expand'}
                      </span>
                    </div>
                  </div>

                  {/* Document Actions */}
                  <div className="mt-6 flex items-center justify-center gap-3">
                    <button
                      onClick={() => setModalOpen(true)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-[#252932] bg-[#F1F3F6] border border-[#252932]/15 hover:bg-[#252932]/10 transition-colors font-outfit"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-[#8F1D26]" />
                      <span>{isDE ? 'Vollansicht' : 'Expand View'}</span>
                    </button>
                    <a
                      href="/images/isms-certificate.png"
                      download="ISO_27001_2022_Certificate_ESC.png"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-[#FFFFFF] bg-[#8F1D26] hover:bg-[#65191F] transition-colors shadow-sm font-outfit"
                    >
                      <Download className="w-3.5 h-3.5 text-[#FFFFFF]" />
                      <span>{isDE ? 'Herunterladen' : 'Download'}</span>
                    </a>
                  </div>
                </AnimateOnScroll>

                {/* Certificate Quick Metadata Box */}
                <AnimateOnScroll
                  direction="up"
                  className="p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border border-[#252932]/10 shadow-[0_12px_36px_rgba(37,41,50,0.06)] space-y-4"
                >
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#8F1D26] border-b border-[#252932]/10 pb-3">
                    {isDE ? 'REGISTRIERUNGSDATEN' : 'REGISTRATION METADATA'}
                  </h3>
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-[#252932]/65 font-mono">Standard:</span>
                      <span className="font-bold text-[#252932] font-mono">ISO/IEC 27001:2022</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#252932]/65 font-mono">{isDE ? 'Bereich:' : 'Domain:'}</span>
                      <span className="font-bold text-[#252932]">
                        {isDE ? 'Informationssicherheit (ISMS)' : 'Information Security (ISMS)'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#252932]/65 font-mono">{isDE ? 'Status:' : 'Verification:'}</span>
                      <span className="font-bold text-[#8F1D26] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> {isDE ? 'Verifiziert Aktiv' : 'Verified Active'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#252932]/65 font-mono">{isDE ? 'Geltungsbereich:' : 'Scope:'}</span>
                      <span className="font-bold text-[#252932]">
                        {isDE ? 'Software- & Versorgungsdienste' : 'Software & Utility Services'}
                      </span>
                    </div>
                  </div>
                </AnimateOnScroll>

              </div>

              {/* RIGHT COLUMN: WRITINGS & DETAILS ABOUT THE CERTIFICATE */}
              <div className="lg:col-span-7 space-y-8 sm:space-y-10 text-[#252932] font-normal leading-relaxed">

                {/* 01. HEADER & COMMITMENT STATEMENT */}
                <AnimateOnScroll
                  direction="up"
                  className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#252932]/10 shadow-[0_12px_36px_rgba(37,41,50,0.06)]"
                >
                  <span className="text-xs font-mono font-bold tracking-[0.22em] uppercase text-[#8F1D26] block mb-3">
                    {isDE ? '01 // ZERTIFIZIERUNGSERKLÄRUNG' : '01 // CERTIFICATION STATEMENT'}
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-black text-[#252932] font-plus-jakarta uppercase tracking-tight mb-2">
                    {isDE ? 'ISO/IEC 27001:2022 Zertifiziert' : 'ISO/IEC 27001:2022 Certified'}
                  </h2>
                  <p className="text-base sm:text-lg font-semibold text-[#8F1D26] mb-4 font-outfit">
                    {isDE ? 'Verpflichtung zu höchster Informationssicherheit' : 'Commitment to Information Security Excellence'}
                  </p>
                  <div className="w-12 h-1 bg-[#8F1D26] rounded-full mb-6" />

                  <div className="space-y-4 text-sm sm:text-base text-[#252932]/85 leading-relaxed">
                    <p>
                      {isDE
                        ? 'Wir sind stolz auf unsere Zertifizierung nach ISO/IEC 27001:2022, dem international anerkannten Standard für Informationssicherheits-Managementsysteme (ISMS). Diese Zertifizierung belegt unser kontinuierliches Engagement für den Schutz der Vertraulichkeit, Integrität und Verfügbarkeit von Unternehmens- und Kundendaten.'
                        : 'We are proud to maintain certification to ISO/IEC 27001:2022, the internationally recognized standard for Information Security Management Systems (ISMS). This certification demonstrates our commitment to protecting the confidentiality, integrity, and availability of information through the implementation of robust security controls, risk management practices, and continuous improvement processes.'}
                    </p>
                    <p>
                      {isDE
                        ? 'Unser Managementsystem ist darauf ausgerichtet, Informationssicherheitsrisiken systematisch zu identifizieren, zu bewerten und zu steuern, um sicherzustellen, dass Geschäftsprozesse und Daten stets widerstandsfähig geschützt bleiben.'
                        : 'Our Information Security Management System is designed to identify, assess, and manage information security risks while ensuring that business operations and customer data remain secure and resilient. Through adherence to ISO/IEC 27001:2022 requirements, we maintain a structured approach to safeguarding information assets and supporting regulatory and contractual obligations.'}
                    </p>
                  </div>
                </AnimateOnScroll>

                {/* 02. WHAT ISO/IEC 27001:2022 MEANS */}
                <AnimateOnScroll
                  direction="up"
                  className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#252932]/10 shadow-[0_12px_36px_rgba(37,41,50,0.06)]"
                >
                  <span className="text-xs font-mono font-bold tracking-[0.22em] uppercase text-[#8F1D26] block mb-3">
                    {isDE ? '02 // STANDARD-RAHMENWERK' : '02 // STANDARD FRAMEWORK'}
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-black text-[#252932] font-plus-jakarta uppercase tracking-tight mb-4">
                    {isDE ? 'Bedeutung der ISO/IEC 27001:2022' : 'What ISO/IEC 27001:2022 Means'}
                  </h2>
                  <div className="w-12 h-1 bg-[#8F1D26] rounded-full mb-6" />

                  <p className="text-sm sm:text-base text-[#252932]/85 leading-relaxed mb-6">
                    {isDE
                      ? 'ISO/IEC 27001:2022 bietet einen umfassenden Rahmen für die Einrichtung, Umsetzung, Aufrechterhaltung und ständige Verbesserung eines Informationssicherheits-Managementsystems.'
                      : 'ISO/IEC 27001:2022 provides a comprehensive framework for establishing, implementing, maintaining, and continually improving an Information Security Management System. The standard promotes a risk-based approach to information security, helping organizations effectively manage threats, vulnerabilities, and emerging security challenges.'}
                  </p>

                  <div className="space-y-3">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#252932]/70 mb-2">
                      {isDE ? 'Mit dieser Zertifizierung belegt unsere Organisation:' : 'By achieving this certification, our organization demonstrates that:'}
                    </p>
                    {(isDE
                      ? [
                          'Sicherheitsrisiken werden systematisch identifiziert, bewertet und gesteuert.',
                          'Geeignete Sicherheitskontrollen werden implementiert und regelmäßig überprüft.',
                          'Vertrauliche Daten sind vor unbefugtem Zugriff, Verlust und Manipulation geschützt.',
                          'Sicherheitsprozesse werden fortlaufend überwacht und optimiert.',
                          'Gesetzliche, behördliche und vertragliche Anforderungen werden strikt eingehalten.',
                        ]
                      : [
                          'Information security risks are systematically identified, assessed, and managed.',
                          'Appropriate security controls are implemented and regularly reviewed.',
                          'Sensitive information is protected against unauthorized access, disclosure, alteration, and loss.',
                          'Security processes are continually monitored and improved.',
                          'Compliance with applicable legal, regulatory, and contractual requirements is maintained.',
                        ]
                    ).map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F1F3F6] border border-[#252932]/10">
                        <CheckCircle2 className="w-5 h-5 text-[#8F1D26] flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-[#252932]">{point}</span>
                      </div>
                    ))}
                  </div>
                </AnimateOnScroll>

                {/* 03. OUR SECURITY OBJECTIVES */}
                <AnimateOnScroll
                  direction="up"
                  className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#252932]/10 shadow-[0_12px_36px_rgba(37,41,50,0.06)]"
                >
                  <span className="text-xs font-mono font-bold tracking-[0.22em] uppercase text-[#8F1D26] block mb-3">
                    {isDE ? '03 // SICHERHEITSZIELE' : '03 // CORE OBJECTIVES'}
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-black text-[#252932] font-plus-jakarta uppercase tracking-tight mb-4">
                    {isDE ? 'Unsere Sicherheitsziele' : 'Our Security Objectives'}
                  </h2>
                  <div className="w-12 h-1 bg-[#8F1D26] rounded-full mb-6" />

                  <p className="text-sm sm:text-base text-[#252932]/85 leading-relaxed mb-6">
                    {isDE
                      ? 'Im Rahmen unserer ISO/IEC 27001:2022 Verpflichtung verfolgen wir folgende Kernziele:'
                      : 'As part of our ISO/IEC 27001:2022 commitment, we strive to:'}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(isDE
                      ? [
                          'Schutz von Kunden-, Mitarbeiter- und Unternehmensdaten.',
                          'Sicherer Betrieb aller Geschäftsprozesse und Technologieplattformen.',
                          'Förderung eines kontinuierlichen Sicherheitsbewusstseins im Team.',
                          'Sicherstellung von Business Continuity und betrieblicher Resilienz.',
                          'Kontinuierliche Verbesserung unserer Sicherheitskontrollen.',
                        ]
                      : [
                          'Protect customer, employee, and business information.',
                          'Ensure the secure operation of business processes and technology platforms.',
                          'Promote a culture of security awareness across the organization.',
                          'Maintain business continuity and operational resilience.',
                          'Continuously improve our information security controls and practices.',
                        ]
                    ).map((obj, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-[#F1F3F6] border border-[#252932]/10 flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#8F1D26] mt-2 flex-shrink-0" />
                        <span className="text-sm font-semibold text-[#252932] leading-snug">{obj}</span>
                      </div>
                    ))}
                  </div>
                </AnimateOnScroll>

                {/* 04. ONGOING COMMITMENT */}
                <AnimateOnScroll
                  direction="up"
                  className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border-2 border-[#8F1D26]/25 shadow-[0_12px_36px_rgba(101,25,31,0.08)]"
                >
                  <span className="text-xs font-mono font-bold tracking-[0.22em] uppercase text-[#8F1D26] block mb-3">
                    {isDE ? '04 // KONTINUIERLICHE GOVERNANCE' : '04 // CONTINUOUS GOVERNANCE'}
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-black text-[#252932] font-plus-jakarta uppercase tracking-tight mb-4">
                    {isDE ? 'Fortlaufende Verpflichtung' : 'Ongoing Commitment'}
                  </h2>
                  <div className="w-12 h-1 bg-[#8F1D26] rounded-full mb-6" />

                  <div className="space-y-4 text-sm sm:text-base text-[#252932]/85 leading-relaxed">
                    <p>
                      {isDE
                        ? 'Informationssicherheit ist eine fortlaufende Verantwortung. Durch regelmäßige Audits, Risikobewertungen und kontinuierliche Überwachung stellen wir sicher, dass unser Informationssicherheits-Managementsystem stets wirksam bleibt.'
                        : 'Information security is an ongoing responsibility. Through regular audits, risk assessments, management reviews, and continuous monitoring activities, we ensure that our Information Security Management System remains effective and aligned with evolving business and security requirements.'}
                    </p>
                    <div className="p-6 rounded-2xl bg-[#F1F3F6] border-l-4 border-[#8F1D26] text-[#252932] font-medium text-sm leading-relaxed">
                      {isDE
                        ? 'Unsere ISO/IEC 27001:2022 Zertifizierung spiegelt unser Engagement wider, höchste Standards der Informationssicherheit einzuhalten und vertrauenswürdige Dienstleistungen für unsere Kunden bereitzustellen.'
                        : 'Our ISO/IEC 27001:2022 certification reflects our dedication to maintaining the highest standards of information security and delivering trusted services to our customers and stakeholders.'}
                    </div>
                  </div>
                </AnimateOnScroll>

              </div>

            </div>
          </div>
        </section>

        {/* Modal Lightbox Viewer */}
        <AnimatePresence>
          {modalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#252932]/85 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full max-h-[90vh] bg-[#FFFFFF] rounded-3xl p-4 sm:p-6 overflow-hidden border border-[#252932]/15 shadow-2xl flex flex-col items-center justify-center"
              >
                <div className="relative w-full h-[72vh] bg-[#F1F3F6] rounded-2xl p-3 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/isms-certificate.png"
                    alt="ISO 27001 Full View"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-full pt-4 flex items-center justify-between border-t border-[#252932]/10 text-[#252932] px-2 mt-2">
                  <span className="text-xs font-mono font-bold text-[#252932]">
                    ISO/IEC 27001:2022 ISMS Certificate
                  </span>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="px-5 py-2 rounded-xl bg-[#8F1D26] hover:bg-[#65191F] text-[#FFFFFF] text-xs font-bold font-outfit transition-colors"
                  >
                    {isDE ? 'Schließen' : 'Close Viewer'}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <CTAStrip />
      </div>
    </PageTransition>
  )
}
