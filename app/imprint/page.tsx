'use client'

import { Palette } from 'lucide-react'
import PageTransition from '@/components/ui/PageTransition'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import CTAStrip from '@/components/sections/CTAStrip'
import { useLanguage } from '@/context/LanguageContext'

export default function ImprintPage() {
  const { t, language } = useLanguage()
  const isDE = language === 'DE'

  return (
    <PageTransition>
      <div className="w-full bg-[#F1F3F6] text-[#252932] min-h-screen font-sans overflow-hidden">

        {/* ========================================================================= */}
        {/* HERO SECTION — DARK MAROON CORPORATE GOVERNANCE THEME */}
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
                <AnimateOnScroll direction="up" className="max-w-[580px]">
                  {/* Legal Information Badge */}
                  <div
                    className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-5 sm:mb-6 border"
                    style={{
                      backgroundColor: 'rgba(82, 18, 24, 0.65)',
                      borderColor: 'rgba(255, 255, 255, 0.22)',
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
                    <span className="text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.18em] uppercase text-[#FFFFFF]/95">
                      {t.legal.imprintBadge}
                    </span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-4xl sm:text-6xl lg:text-[4.4rem] xl:text-[5rem] font-black text-[#FFFFFF] tracking-[-0.02em] uppercase leading-[0.94] mb-5 sm:mb-6 font-plus-jakarta">
                    {t.legal.imprintTitle}
                  </h1>

                  {/* Small Horizontal White Accent Divider */}
                  <div className="w-14 h-[2.5px] bg-[#FFFFFF]/90 mb-5 sm:mb-6 rounded-full" />

                  {/* Introductory Text */}
                  <p className="text-sm sm:text-base lg:text-[1.125rem] xl:text-[1.18rem] text-[#FFFFFF]/90 font-normal leading-[1.58] max-w-[530px]">
                    {t.legal.imprintSubtitle}
                  </p>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* DOCUMENT BODY — LIGHT GREY (#F1F3F6) WITH CLEAN WHITE CARDS (#FFFFFF) */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-[#F1F3F6] relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">

            {/* 01. COMPANY INFORMATION & 02. CORPORATE HEAD OFFICE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">

              {/* 01. INDIA OFFICE */}
              <AnimateOnScroll
                direction="up"
                className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#252932]/10 shadow-[0_12px_36px_rgba(37,41,50,0.06)] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold tracking-[0.22em] uppercase text-[#8F1D26] block mb-3">
                    {isDE ? '01 // BETRIEBSGESELLSCHAFT (INDIEN)' : '01 // OPERATING ENTITY (INDIA)'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#252932] font-plus-jakarta uppercase tracking-tight mb-4">
                    ESC Utility Services Pvt.Ltd
                  </h2>
                  <div className="w-12 h-1 bg-[#8F1D26] rounded-full mb-6" />
                  <div className="space-y-1.5 text-[#252932]/85 text-sm font-normal mb-8 leading-relaxed">
                    <p>Module 2605, 6th Floor</p>
                    <p>Yamuna Tower</p>
                    <p>Technopark Phase III Campus</p>
                    <p>Trivandrum 695583, Kerala</p>
                    <p className="font-bold text-[#252932]">{isDE ? 'Indien' : 'India'}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#252932]/10 space-y-2.5 text-xs sm:text-sm font-medium text-[#252932]">
                  <div className="flex items-center justify-between">
                    <span className="text-[#252932]/65 uppercase tracking-widest text-[10px] font-mono font-bold">
                      {isDE ? 'Telefon' : 'Telephone'}
                    </span>
                    <a
                      href="tel:+918086228000"
                      className="text-[#252932] hover:text-[#8F1D26] font-mono font-bold transition-colors"
                    >
                      +91 8086 22 8000
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#252932]/65 uppercase tracking-widest text-[10px] font-mono font-bold">
                      E-Mail
                    </span>
                    <a
                      href="mailto:info@esc-ind.com"
                      className="text-[#8F1D26] hover:text-[#65191F] hover:underline font-bold transition-colors"
                    >
                      info@esc-ind.com
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* 02. GERMANY HEAD OFFICE */}
              <AnimateOnScroll
                direction="up"
                className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#252932]/10 shadow-[0_12px_36px_rgba(37,41,50,0.06)] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold tracking-[0.22em] uppercase text-[#8F1D26] block mb-3">
                    {isDE ? '02 // KONZERNZENTRALE (DEUTSCHLAND)' : '02 // CORPORATE HEAD OFFICE (GERMANY)'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#252932] font-plus-jakarta uppercase tracking-tight mb-4">
                    ISI Consulting Group GmbH
                  </h2>
                  <div className="w-12 h-1 bg-[#8F1D26] rounded-full mb-6" />
                  <div className="space-y-1.5 text-[#252932]/85 text-sm font-normal mb-8 leading-relaxed">
                    <p>Goltsteinstraße 30–31</p>
                    <p>40211 Düsseldorf</p>
                    <p className="font-bold text-[#252932]">{isDE ? 'Deutschland' : 'Germany'}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#252932]/10 space-y-2.5 text-xs sm:text-sm font-medium text-[#252932]">
                  <div className="flex items-center justify-between">
                    <span className="text-[#252932]/65 uppercase tracking-widest text-[10px] font-mono font-bold">
                      {isDE ? 'Telefon' : 'Telephone'}
                    </span>
                    <a
                      href="tel:+4921194684130"
                      className="text-[#252932] hover:text-[#8F1D26] font-mono font-bold transition-colors"
                    >
                      02 11 / 9 46 84 13-0
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#252932]/65 uppercase tracking-widest text-[10px] font-mono font-bold">
                      Fax
                    </span>
                    <span className="text-[#252932]/80 font-mono">02 11 / 9 46 84 13-13</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#252932]/65 uppercase tracking-widest text-[10px] font-mono font-bold">
                      E-Mail
                    </span>
                    <a
                      href="mailto:info@isi-cg.com"
                      className="text-[#8F1D26] hover:text-[#65191F] hover:underline font-bold transition-colors"
                    >
                      info@isi-cg.com
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>

            </div>

            {/* 03. BOARD OF DIRECTORS */}
            <AnimateOnScroll
              direction="up"
              className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#252932]/10 shadow-[0_12px_36px_rgba(37,41,50,0.06)]"
            >
              <span className="text-xs font-mono font-bold tracking-[0.22em] uppercase text-[#8F1D26] block mb-3">
                {isDE ? '03 // UNTERNEHMENSFÜHRUNG & MANAGEMENT' : '03 // GOVERNANCE & MANAGEMENT'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#252932] font-plus-jakarta uppercase tracking-tight mb-4">
                {isDE ? 'Geschäftsführung & Vertretungsberechtigte' : 'Board of Directors'}
              </h2>
              <div className="w-12 h-1 bg-[#8F1D26] rounded-full mb-6" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[#F1F3F6] border border-[#252932]/10">
                  <span className="text-[11px] font-mono font-bold uppercase text-[#8F1D26] tracking-widest block mb-1.5">
                    {isDE ? 'VORSITZENDER & GESCHÄFTSFÜHRER' : 'CHAIRMAN & DIRECTOR'}
                  </span>
                  <h3 className="text-xl font-bold text-[#252932] font-plus-jakarta">
                    Matthias Ulrich Niederprüm
                  </h3>
                </div>
                <div className="p-6 rounded-2xl bg-[#F1F3F6] border border-[#252932]/10">
                  <span className="text-[11px] font-mono font-bold uppercase text-[#8F1D26] tracking-widest block mb-1.5">
                    {isDE ? 'GESCHÄFTSFÜHRER' : 'MANAGING DIRECTOR'}
                  </span>
                  <h3 className="text-xl font-bold text-[#252932] font-plus-jakarta">
                    Manoj Nirmala Sukumaran
                  </h3>
                </div>
              </div>
            </AnimateOnScroll>

            {/* 04. CORPORATE IDENTITY & REGISTRATION */}
            <AnimateOnScroll
              direction="up"
              className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#252932]/10 shadow-[0_12px_36px_rgba(37,41,50,0.06)]"
            >
              <span className="text-xs font-mono font-bold tracking-[0.22em] uppercase text-[#8F1D26] block mb-3">
                {isDE ? '04 // REGISTERDATEN & GERICHTSSTAND' : '04 // REGISTRATION METADATA'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#252932] font-plus-jakarta uppercase tracking-tight mb-4">
                {isDE ? 'Gerichtsstand & Registrierungsinformationen' : 'Judiciary & Registration Information'}
              </h2>
              <div className="w-12 h-1 bg-[#8F1D26] rounded-full mb-6" />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-[#F1F3F6] border border-[#252932]/10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#252932]/65 block mb-1">
                    {isDE ? 'Gerichtsstand' : 'Judiciary / Court'}
                  </span>
                  <span className="text-sm font-bold text-[#252932] font-plus-jakarta">Trivandrum, India</span>
                </div>
                <div className="p-4 rounded-xl bg-[#F1F3F6] border border-[#252932]/10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#252932]/65 block mb-1">
                    CIN Number
                  </span>
                  <span className="text-sm font-mono font-bold text-[#252932]">U72200KL2014PTC035882</span>
                </div>
                <div className="p-4 rounded-xl bg-[#F1F3F6] border border-[#252932]/10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#252932]/65 block mb-1">
                    PAN Number
                  </span>
                  <span className="text-sm font-mono font-bold text-[#252932]">AADCE5866E</span>
                </div>
                <div className="p-4 rounded-xl bg-[#F1F3F6] border border-[#252932]/10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#252932]/65 block mb-1">
                    GST Number
                  </span>
                  <span className="text-sm font-mono font-bold text-[#252932]">32AADCE5866E1ZS</span>
                </div>
              </div>
            </AnimateOnScroll>

            {/* 05. DISCLAIMER / LIABILITY */}
            <AnimateOnScroll
              direction="up"
              className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#252932]/10 shadow-[0_12px_36px_rgba(37,41,50,0.06)] space-y-6 text-[#252932]/90 text-sm font-normal leading-relaxed"
            >
              <div>
                <span className="text-xs font-mono font-bold tracking-[0.22em] uppercase text-[#8F1D26] block mb-3">
                  {isDE ? '05 // RECHTLICHE HINWEISE' : '05 // LEGAL DISCLAIMER'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#252932] font-plus-jakarta uppercase tracking-tight mb-4">
                  {isDE ? 'Haftungsausschluss & Hinweise' : 'Disclaimer & Liability Statement'}
                </h2>
                <div className="w-12 h-1 bg-[#8F1D26] rounded-full" />
              </div>

              <div className="space-y-5">
                <div className="p-5 rounded-2xl bg-[#F1F3F6] border border-[#252932]/10">
                  <h4 className="font-bold text-[#252932] mb-1.5 font-plus-jakarta uppercase text-sm">
                    {isDE ? 'Haftung für Inhalte' : 'Accountability for Content'}
                  </h4>
                  <p className="text-[#252932]/85">
                    {isDE
                      ? 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß den gesetzlichen Vorschriften für eigene Inhalte auf diesen Seiten verantwortlich.'
                      : "The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages."}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F1F3F6] border border-[#252932]/10">
                  <h4 className="font-bold text-[#252932] mb-1.5 font-plus-jakarta uppercase text-sm">
                    {isDE ? 'Haftung für externe Links' : 'Accountability for External Links'}
                  </h4>
                  <p className="text-[#252932]/85">
                    {isDE
                      ? 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.'
                      : 'Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations of law were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.'}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F1F3F6] border border-[#252932]/10">
                  <h4 className="font-bold text-[#252932] mb-1.5 font-plus-jakarta uppercase text-sm">
                    {isDE ? 'Urheberrecht' : 'Copyright & Intellectual Property'}
                  </h4>
                  <p className="text-[#252932]/85">
                    {isDE
                      ? 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen schriftlichen Zustimmung.'
                      : 'Our web pages and their contents are subject to applicable international copyright law. Unless expressly permitted by law, every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights.'}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* 06. WEBSITE VISUALS & IMAGE CREDITS */}
            <AnimateOnScroll
              direction="up"
              className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border-2 border-[#8F1D26]/25 shadow-[0_12px_36px_rgba(101,25,31,0.08)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <Palette className="w-5 h-5 text-[#8F1D26]" />
                <span className="text-xs font-mono font-bold tracking-[0.22em] uppercase text-[#8F1D26]">
                  {isDE ? '06 // BILDNACHWEISE & URHEBERRECHTE' : '06 // CREATIVE ASSETS ATTRIBUTION'}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#252932] font-plus-jakarta uppercase tracking-tight mb-4">
                {isDE ? 'Bildrechte & Mediengestaltung' : 'Website Visuals & Image Credits'}
              </h2>
              <div className="w-12 h-1 bg-[#8F1D26] rounded-full mb-6" />

              <div className="p-6 rounded-2xl bg-[#F1F3F6] border border-[#252932]/10 text-sm text-[#252932]/90 leading-relaxed font-normal space-y-4">
                <p>
                  {isDE
                    ? 'Die visuellen Elemente und Grafiken auf der ESC-Website wurden vom Design-Team unter Verwendung professioneller Werkzeuge erstellt. Bestimmte Bildmotive enthalten lizenzierte oder lizenzfreie Referenzgrafiken, die im Einklang mit den geltenden Rechten und Bestimmungen eingesetzt werden.'
                    : 'The visual assets and imagery used throughout the redesigned ESC website have been created and composed by the ESC design team using professional design and photo-editing tools. Certain visuals may incorporate licensed, publicly available, or reference imagery as part of the creative and design process. All such material has been adapted, edited, or used in accordance with the applicable rights, licenses, or permissions.'}
                </p>

                <div className="pt-4 border-t border-[#252932]/10 space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#8F1D26]">
                    {isDE ? 'Bildnachweise & abgebildete Personen' : 'Image Credits & Featured Persons'}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed font-medium text-[#252932]">
                    © Matthias Ulrich Niederprüm, © Manoj Nirmala Sukumaran, © Nagaraj Deivanayagam, © Pooja Babu, © Parvathy Ajitha, © Reshma Suresh, © Soumya Arayilvalapil
                  </p>
                </div>

                <p className="text-xs text-[#252932]/70 border-t border-[#252932]/10 pt-3 font-outfit">
                  {isDE
                    ? 'Alle auf dieser Website genannten Marken, Warenzeichen und Firmennamen sind Eigentum der jeweiligen Inhaber.'
                    : 'All trademarks, brand names, and logos referenced on this website remain the property of their respective owners.'}
                </p>
              </div>
            </AnimateOnScroll>

          </div>
        </section>

        <CTAStrip />
      </div>
    </PageTransition>
  )
}
