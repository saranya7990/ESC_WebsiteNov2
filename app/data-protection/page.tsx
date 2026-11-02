'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, CheckCircle2, ChevronRight } from 'lucide-react'
import PageTransition from '@/components/ui/PageTransition'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import CTAStrip from '@/components/sections/CTAStrip'
import { useLanguage } from '@/context/LanguageContext'

interface NavSection {
  id: string
  titleEN: string
  titleDE: string
}

const SECTIONS: NavSection[] = [
  { id: 'overview', titleEN: '01. Overview & Scope', titleDE: '01. Übersicht & Geltungsbereich' },
  { id: 'collection', titleEN: '02. Information We Collect', titleDE: '02. Erhobene Daten' },
  { id: 'purpose', titleEN: '03. Purpose & Legal Basis', titleDE: '03. Zweck & Rechtsgrundlagen' },
  { id: 'security', titleEN: '04. Data Security & Protection', titleDE: '04. Datensicherheit & Schutz' },
  { id: 'cookies', titleEN: '05. Cookies & Local Storage', titleDE: '05. Cookies & Lokaler Speicher' },
  { id: 'third-party', titleEN: '06. Third-Party Transfers', titleDE: '06. Drittanbieter & Übermittlung' },
  { id: 'rights', titleEN: '07. User & Data Subject Rights', titleDE: '07. Betroffenenrechte' },
  { id: 'retention', titleEN: '08. Data Retention', titleDE: '08. Speicherdauer' },
  { id: 'contact', titleEN: '09. Contact Information & DPO', titleDE: '09. Datenschutzbeauftragter' },
]

export default function DataProtectionPage() {
  const { t, language } = useLanguage()
  const isDE = language === 'DE'
  const [activeSection, setActiveSection] = useState<string>('overview')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      const offset = 120
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <PageTransition>
      <div className="w-full bg-[#F1F3F6] text-[#252932] min-h-screen font-sans overflow-hidden">
        
        {/* ========================================================================= */}
        {/* HERO SECTION — DARK MAROON SECURITY THEME */}
        {/* ========================================================================= */}
        <section
          className="esc-hero-section relative flex items-center overflow-hidden border-b border-[#65191F]"
          style={{
            background: 'linear-gradient(100deg, #35090D 0%, #451419 42%, #65191F 78%, #7D1B24 100%)',
          }}
        >
          {/* Full-Height Right-Side Digital Security Globe & Shield Visual (Visible Area Below Navbar) */}
          <div className="absolute top-[72px] sm:top-[84px] lg:top-[108px] bottom-0 inset-x-0 overflow-hidden pointer-events-none select-none">
            <div className="absolute right-[-18%] sm:right-[-6%] lg:right-0 top-1/2 -translate-y-1/2 w-[135%] sm:w-[105%] lg:w-[88%] xl:w-[85%] max-w-[1460px] aspect-[16/9]">
              <img
                src="/images/data-protection-hero.jpg"
                alt="Digital Security Globe and Shield"
                className="w-full h-full object-cover object-right opacity-65 sm:opacity-85 lg:opacity-100"
                style={{
                  WebkitMaskImage:
                    'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.45) 18%, black 36%, black 100%)',
                  maskImage:
                    'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.45) 18%, black 36%, black 100%)',
                }}
              />
            </div>

            {/* Subtle Left-Side Readability Gradient on Mobile/Tablet */}
            <div
              className="absolute inset-0 lg:hidden"
              style={{
                background:
                  'linear-gradient(90deg, rgba(53,9,13,0.92) 0%, rgba(69,20,25,0.78) 52%, rgba(69,20,25,0.25) 100%)',
              }}
            />

            {/* Subtle Warm Crimson Glow Behind Lower-Left Introductory Text (Matches Reference) */}
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
                  {/* Legal / Privacy Badge */}
                  <div
                    className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-5 sm:mb-6 border"
                    style={{
                      backgroundColor: 'rgba(82, 18, 24, 0.65)',
                      borderColor: 'rgba(255, 255, 255, 0.22)',
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
                    <span className="text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.18em] uppercase text-[#FFFFFF]/95">
                      {isDE ? t.legal.dataProtectionBadge : 'LEGAL & PRIVACY POLICY'}
                    </span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-4xl sm:text-6xl lg:text-[4.4rem] xl:text-[5rem] font-black tracking-[-0.02em] uppercase leading-[0.94] mb-5 sm:mb-6 font-plus-jakarta">
                    <span className="text-[#E6E8EC]">{isDE ? 'DATEN' : 'DATA'}</span>
                    <br />
                    <span className="text-[#FFFFFF]">{isDE ? 'SCHUTZ.' : 'PROTECTION.'}</span>
                  </h1>

                  {/* Small Horizontal White Accent Divider */}
                  <div className="w-14 h-[2.5px] bg-[#FFFFFF]/90 mb-5 sm:mb-6 rounded-full" />

                  {/* Introductory Text */}
                  <p className="text-sm sm:text-base lg:text-[1.125rem] xl:text-[1.18rem] text-[#FFFFFF]/90 font-normal leading-[1.58] max-w-[530px]">
                    {isDE
                      ? 'Transparenz und ein verantwortungsvoller Umgang mit Informationen sind grundlegend für die Arbeitsweise von ESC Utility Services in Indien und Deutschland.'
                      : 'Transparency and responsible handling of information are fundamental to how ESC Utility Services operates across India and Germany.'}
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* DESKTOP STICKY SIDEBAR NAVIGATION (TABLE OF CONTENTS) */}
              <aside className="hidden lg:block lg:col-span-4">
                <div className="sticky top-28 p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border border-[#252932]/10 shadow-[0_12px_36px_rgba(37,41,50,0.06)]">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1F3F6] border border-[#252932]/10 mb-5">
                    <span className="w-2 h-2 rounded-full bg-[#8F1D26]" />
                    <span className="text-[11px] font-mono font-bold tracking-[0.18em] uppercase text-[#252932]">
                      {isDE ? 'INHALTSVERZEICHNIS' : 'TABLE OF CONTENTS'}
                    </span>
                  </div>

                  <nav className="space-y-2">
                    {SECTIONS.map((sec) => {
                      const isActive = activeSection === sec.id
                      const title = isDE ? sec.titleDE : sec.titleEN
                      return (
                        <button
                          key={sec.id}
                          onClick={() => scrollToSection(sec.id)}
                          className={`w-full text-left px-4 py-3 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center justify-between cursor-pointer font-outfit ${
                            isActive
                              ? 'bg-[#8F1D26] text-[#FFFFFF] font-bold shadow-sm'
                              : 'bg-[#F1F3F6] text-[#252932] hover:bg-[#65191F]/10 hover:text-[#65191F]'
                          }`}
                        >
                          <span>{title}</span>
                          <ChevronRight
                            className={`w-3.5 h-3.5 ${
                              isActive ? 'text-[#FFFFFF]' : 'text-[#252932]/45'
                            }`}
                          />
                        </button>
                      )
                    })}
                  </nav>

                  <div className="mt-7 pt-6 border-t border-[#252932]/10 text-xs text-[#252932]/80 space-y-2">
                    <p className="font-bold text-[#252932] font-outfit uppercase tracking-wider text-[10px]">
                      {isDE ? 'Standards & Richtlinien:' : 'Compliance Standard:'}
                    </p>
                    <p className="font-normal leading-relaxed">
                      {isDE
                        ? 'EU-Datenschutz-Grundverordnung (DSGVO) & Digital Personal Data Protection (DPDP) Act Indien.'
                        : 'EU General Data Protection Regulation (GDPR) & Digital Personal Data Protection (DPDP) Act India.'}
                    </p>
                  </div>
                </div>
              </aside>

              {/* MOBILE HORIZONTAL NAVIGATION SELECTOR */}
              <div className="lg:hidden col-span-1">
                <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#252932]/10 shadow-sm overflow-x-auto flex items-center gap-2 no-scrollbar">
                  {SECTIONS.map((sec) => {
                    const isActive = activeSection === sec.id
                    const title = isDE ? sec.titleDE : sec.titleEN
                    return (
                      <button
                        key={sec.id}
                        onClick={() => scrollToSection(sec.id)}
                        className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors flex-shrink-0 font-outfit ${
                          isActive
                            ? 'bg-[#8F1D26] text-[#FFFFFF] font-bold'
                            : 'bg-[#F1F3F6] text-[#252932]'
                        }`}
                      >
                        {title}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* MAIN CONTENT AREA */}
              <main className="lg:col-span-8 space-y-8 text-[#252932] font-normal leading-relaxed">
                
                {/* 01. OVERVIEW */}
                <section id="overview" className="scroll-mt-32 p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#252932]/10 shadow-[0_12px_36px_rgba(37,41,50,0.06)]">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8F1D26] block mb-2">
                    {isDE ? 'ABSCHNITT 01 // GELTUNGSBEREICH' : 'SECTION 01 // GENERAL SCOPE'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#252932] font-plus-jakarta uppercase tracking-tight mb-5">
                    {isDE ? '01. Übersicht & Geltungsbereich' : '01. Overview & Scope'}
                  </h2>
                  <div className="space-y-4 text-base text-[#252932]/85">
                    <p>
                      {isDE
                        ? 'Die ESC Utility Services Pvt.Ltd („ESC“, „wir“, „uns“) nimmt den Schutz Ihrer personenbezogenen Daten sehr ernst. Diese Datenschutzerklärung erläutert, wie wir Daten erheben, verarbeiten, speichern und schützen, die von Besuchern, Kunden, Partnern und Bewerbern auf unseren digitalen Plattformen und internationalen Standorten in Indien und Deutschland bereitgestellt werden.'
                        : 'ESC Utility Services Pvt.Ltd ("ESC", "we", "our", or "us") takes the protection of your personal data very seriously. This Data Protection Policy explains how we collect, process, store, and safeguard information provided by visitors, clients, partners, and job applicants across our digital platforms and international operational hubs in India and Germany.'}
                    </p>
                    <p>
                      {isDE
                        ? 'Wir halten internationale Datenschutzstandards ein, insbesondere die Datenschutz-Grundverordnung der Europäischen Union (EU-DSGVO) sowie das Digital Personal Data Protection Gesetz (DPDP Act, Indien).'
                        : 'We comply with international data privacy standards, including the European Union General Data Protection Regulation (EU GDPR) and the Digital Personal Data Protection Act (DPDP Act, India). This notice applies to all websites, web applications, customer portals, and online services operated by ESC Utility Services Pvt.Ltd.'}
                    </p>
                  </div>
                </section>

                {/* 02. INFORMATION WE COLLECT */}
                <section id="collection" className="scroll-mt-32 p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#252932]/10 shadow-[0_12px_36px_rgba(37,41,50,0.06)]">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8F1D26] block mb-2">
                    {isDE ? 'ABSCHNITT 02 // DATENKATEGORIEN' : 'SECTION 02 // DATA CATEGORIES'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#252932] font-plus-jakarta uppercase tracking-tight mb-5">
                    {isDE ? '02. Erhobene Daten' : '02. Information We Collect'}
                  </h2>
                  <div className="space-y-4 text-base text-[#252932]/85">
                    <p>
                      {isDE
                        ? 'Je nach Art Ihrer Interaktion mit ESC verarbeiten wir folgende Datenkategorien:'
                        : 'Depending on your interaction with ESC, we collect and process the following categories of data:'}
                    </p>
                    <ul className="space-y-3 pl-4 list-disc marker:text-[#8F1D26]">
                      <li>
                        <strong className="text-[#252932]">
                          {isDE ? 'Kontakt- & Anfragedaten:' : 'Contact & Inquiry Information:'}
                        </strong>{' '}
                        {isDE
                          ? 'Vollständiger Name, geschäftliche E-Mail-Adresse, Unternehmensname, Telefonnummer und der Inhalt von Anfragen.'
                          : 'Full name, professional email address, organization name, telephone number, and the specific contents of messages submitted through our contact forms or service inquiries.'}
                      </li>
                      <li>
                        <strong className="text-[#252932]">
                          {isDE ? 'Technische Protokolldaten:' : 'Technical & Log Data:'}
                        </strong>{' '}
                        {isDE
                          ? 'IP-Adresse, Browser-Spezifikationen, Betriebssystem, Referrer-URL und Zugriffszeitpunkte.'
                          : 'Internet Protocol (IP) address, browser specifications, operating system details, referring URLs, access timestamps, and device identifiers automatically generated during your site visit.'}
                      </li>
                      <li>
                        <strong className="text-[#252932]">
                          {isDE ? 'Bewerbungsdaten:' : 'Recruitment Data:'}
                        </strong>{' '}
                        {isDE
                          ? 'Lebenslauf, beruflicher Werdegang, Qualifikationen und Kontaktdaten im Rahmen von Bewerbungen.'
                          : 'Curriculum vitae (CV), employment background, academic credentials, cover letter notes, and contact details submitted when applying for open career positions.'}
                      </li>
                    </ul>
                  </div>
                </section>

                {/* 03. PURPOSE & LEGAL BASIS */}
                <section id="purpose" className="scroll-mt-32 p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#252932]/10 shadow-[0_12px_36px_rgba(37,41,50,0.06)]">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8F1D26] block mb-2">
                    {isDE ? 'ABSCHNITT 03 // RECHTSGRUNDLAGEN' : 'SECTION 03 // LAWFUL PROCESSING'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#252932] font-plus-jakarta uppercase tracking-tight mb-5">
                    {isDE ? '03. Zweck & Rechtsgrundlagen der Verarbeitung' : '03. Purpose & Legal Basis for Processing'}
                  </h2>
                  <div className="space-y-4 text-base text-[#252932]/85">
                    <p>
                      {isDE
                        ? 'Wir verarbeiten personenbezogene Daten streng im Rahmen der gesetzlichen Bestimmungen:'
                        : 'We process personal data strictly in accordance with lawful legal bases:'}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                      <div className="p-5 rounded-2xl bg-[#F1F3F6] border border-[#252932]/10">
                        <h4 className="font-bold text-[#252932] mb-1 font-plus-jakarta text-sm uppercase">
                          {isDE ? 'Vertragserfüllung' : 'Contractual Performance'}
                        </h4>
                        <p className="text-xs text-[#252932]/80 font-normal">
                          {isDE
                            ? 'Zur Erbringung vertraglich vereinbarter IT- und Automatisierungsleistungen sowie Angebotserstellung.'
                            : 'Processing necessary to deliver requested technology services, fulfill project proposals, or execute contractual obligations.'}
                        </p>
                      </div>
                      <div className="p-5 rounded-2xl bg-[#F1F3F6] border border-[#252932]/10">
                        <h4 className="font-bold text-[#252932] mb-1 font-plus-jakarta text-sm uppercase">
                          {isDE ? 'Berechtigtes Interesse' : 'Legitimate Business Interest'}
                        </h4>
                        <p className="text-xs text-[#252932]/80 font-normal">
                          {isDE
                            ? 'Gewährleistung der Netz- und Informationssicherheit sowie Optimierung unserer Webangebote.'
                            : 'Ensuring network security, optimizing web performance, maintaining client relationships, and protecting system infrastructure.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 04. DATA SECURITY */}
                <section id="security" className="scroll-mt-32 p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#252932]/10 shadow-[0_12px_36px_rgba(37,41,50,0.06)]">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8F1D26] block mb-2">
                    {isDE ? 'ABSCHNITT 04 // SCHUTZMASSNAHMEN' : 'SECTION 04 // SAFEGUARDS'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#252932] font-plus-jakarta uppercase tracking-tight mb-5">
                    {isDE ? '04. Datensicherheit & Schutzmaßnahmen' : '04. Data Security & Protection Measures'}
                  </h2>
                  <div className="space-y-4 text-base text-[#252932]/85">
                    <p>
                      {isDE
                        ? 'ESC setzt modernste technische und organisatorische Sicherheitsmaßnahmen (TOMs) ein, um Daten vor unbefugtem Zugriff, Verlust und Zerstörung zu schützen.'
                        : 'ESC implements state-of-the-art technical and organizational security protocols (TOMs) to safeguard personal data against unauthorized access, loss, destruction, alteration, or unlawful disclosure.'}
                    </p>
                    <p>
                      {isDE
                        ? 'Dazu gehören durchgehende TLS/SSL-Verschlüsselung bei der Datenübertragung, AES-256 Verschlüsselung gespeicherter Daten sowie ISO/IEC 27001 zertifizierte Sicherheitsverfahren.'
                        : 'Security controls include end-to-end TLS/SSL encryption for data in transit, AES-256 encryption at rest, strict role-based access control, periodic vulnerability scans, and ISO-compliant server infrastructure.'}
                    </p>
                  </div>
                </section>

                {/* 05. COOKIES */}
                <section id="cookies" className="scroll-mt-32 p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#252932]/10 shadow-[0_12px_36px_rgba(37,41,50,0.06)]">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8F1D26] block mb-2">
                    {isDE ? 'ABSCHNITT 05 // COOKIES & SPEICHER' : 'SECTION 05 // TELEMETRY'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#252932] font-plus-jakarta uppercase tracking-tight mb-5">
                    {isDE ? '05. Cookies & Lokale Speicherung' : '05. Cookies & Local Storage'}
                  </h2>
                  <div className="space-y-4 text-base text-[#252932]/85">
                    <p>
                      {isDE
                        ? 'Unsere Website verwendet technisch notwendige Cookies und Speicherwerte (z. B. Spracheinstellungen), um die Navigation und Funktionalität sicherzustellen. Wir betreiben kein aufdringliches Werbetracking.'
                        : 'Our website utilizes essential technical cookies required for core navigation, layout rendering, and security features. We do not engage in intrusive cross-site tracking or commercial data brokerage.'}
                    </p>
                  </div>
                </section>

                {/* 06. THIRD-PARTY TRANSFERS */}
                <section id="third-party" className="scroll-mt-32 p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#252932]/10 shadow-[0_12px_36px_rgba(37,41,50,0.06)]">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8F1D26] block mb-2">
                    {isDE ? 'ABSCHNITT 06 // INTERNATIONALE ÜBERMITTLUNG' : 'SECTION 06 // GLOBAL TRANSFERS'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#252932] font-plus-jakarta uppercase tracking-tight mb-5">
                    {isDE ? '06. Drittanbieter & Internationaler Datentransfer' : '06. Third-Party Services & International Transfers'}
                  </h2>
                  <div className="space-y-4 text-base text-[#252932]/85">
                    <p>
                      {isDE
                        ? 'Als deutsch-indisches Technologieunternehmen können Daten zwischen Standorten in Deutschland und Indien unter Anwendung von EU-Standardvertragsklauseln (SCCs) sicher übertragen werden.'
                        : 'As an Indo-German technology organization, personal information may be transferred between our legal entities in Germany and India under Standard Contractual Clauses (SCCs) and strict data protection agreements ensuring equivalent security safeguards.'}
                    </p>
                    <p>
                      {isDE
                        ? 'Wir verkaufen oder vermieten zu keinem Zeitpunkt personenbezogene Daten an Dritte.'
                        : 'We never sell, lease, or commercialize your personal data to third parties. Data is shared with specialized service providers solely for operational delivery under strict Data Processing Agreements (DPAs).'}
                    </p>
                  </div>
                </section>

                {/* 07. USER RIGHTS */}
                <section id="rights" className="scroll-mt-32 p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#252932]/10 shadow-[0_12px_36px_rgba(37,41,50,0.06)]">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8F1D26] block mb-2">
                    {isDE ? 'ABSCHNITT 07 // BETROFFENENRECHTE' : 'SECTION 07 // STATUTORY RIGHTS'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#252932] font-plus-jakarta uppercase tracking-tight mb-5">
                    {isDE ? '07. Rechte der betroffenen Personen' : '07. User & Data Subject Rights'}
                  </h2>
                  <div className="space-y-4 text-base text-[#252932]/85">
                    <p>
                      {isDE
                        ? 'Ihnen stehen nach den geltenden Datenschutzgesetzen folgende Rechte zu:'
                        : 'Under applicable statutory data protection laws, you possess fundamental rights regarding your stored personal data:'}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F1F3F6] border border-[#252932]/10">
                        <CheckCircle2 className="w-5 h-5 text-[#8F1D26] flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#252932] block text-sm font-bold">
                            {isDE ? 'Recht auf Auskunft' : 'Right of Access & Information'}
                          </strong>
                          <span className="text-xs text-[#252932]/80 font-normal">
                            {isDE
                              ? 'Bestätigung über die Verarbeitung Ihrer Daten und Kopie der gespeicherten Datensätze anfordern.'
                              : 'Request confirmation regarding whether personal data relating to you is being processed, and receive a copy of stored records.'}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F1F3F6] border border-[#252932]/10">
                        <CheckCircle2 className="w-5 h-5 text-[#8F1D26] flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#252932] block text-sm font-bold">
                            {isDE ? 'Recht auf Berichtigung & Löschung' : 'Right to Rectification & Erasure'}
                          </strong>
                          <span className="text-xs text-[#252932]/80 font-normal">
                            {isDE
                              ? 'Korrektur unzutreffender Daten oder Löschung unberechtigt gespeicherter Daten verlangen.'
                              : 'Request correction of inaccurate information or deletion of records where legal storage criteria no longer apply.'}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F1F3F6] border border-[#252932]/10">
                        <CheckCircle2 className="w-5 h-5 text-[#8F1D26] flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#252932] block text-sm font-bold">
                            {isDE ? 'Widerspruchsrecht' : 'Right to Object & Restrict Processing'}
                          </strong>
                          <span className="text-xs text-[#252932]/80 font-normal">
                            {isDE
                              ? 'Widerspruch gegen die Verarbeitung einlegen oder erteilte Einwilligungen jederzeit widerrufen.'
                              : 'Object to data processing based on legitimate interests or withdraw previously given consent at any time.'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 08. RETENTION */}
                <section id="retention" className="scroll-mt-32 p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#252932]/10 shadow-[0_12px_36px_rgba(37,41,50,0.06)]">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8F1D26] block mb-2">
                    {isDE ? 'ABSCHNITT 08 // SPEICHERDAUER' : 'SECTION 08 // RETENTION PERIODS'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#252932] font-plus-jakarta uppercase tracking-tight mb-5">
                    {isDE ? '08. Speicherdauer & Löschung' : '08. Data Retention & Storage Period'}
                  </h2>
                  <div className="space-y-4 text-base text-[#252932]/85">
                    <p>
                      {isDE
                        ? 'Personenbezogene Daten werden nur so lange aufbewahrt, wie dies zur Erreichung des Erhebungszwecks oder aufgrund gesetzlicher Aufbewahrungsfristen erforderlich ist.'
                        : 'Personal data is retained only for as long as necessary to fulfill the specific purposes for which it was collected, or to comply with statutory legal, tax, or regulatory archiving requirements.'}
                    </p>
                  </div>
                </section>

                {/* 09. CONTACT & DPO */}
                <section id="contact" className="scroll-mt-32 p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#8F1D26]/30 shadow-[0_12px_36px_rgba(101,25,31,0.08)]">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8F1D26] block mb-2">
                    {isDE ? 'ABSCHNITT 09 // DATENSCHUTZBEAUFTRAGTER' : 'SECTION 09 // PRIVACY OFFICER'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#252932] font-plus-jakarta uppercase tracking-tight mb-5">
                    {isDE ? '09. Kontakt & Datenschutzbeauftragter' : '09. Contact Information & DPO'}
                  </h2>
                  <div className="space-y-6 text-[#252932]/85">
                    <p className="text-base">
                      {isDE
                        ? 'Bei Fragen zum Datenschutz oder zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an unseren Datenschutzbeauftragten:'
                        : 'If you have questions regarding this Data Protection Policy, wish to exercise your legal data rights, or submit a privacy inquiry, please contact our Data Protection Officer:'}
                    </p>

                    <div className="space-y-3 text-sm pt-4 border-t border-[#252932]/10">
                      <p className="font-bold text-[#252932] font-plus-jakarta text-base">
                        {isDE ? 'Datenschutzbeauftragter' : 'Data Protection Officer'} &bull; ESC Utility Services Pvt.Ltd
                      </p>
                      <p className="text-[#252932] flex items-center gap-2 font-medium">
                        <Mail className="w-4 h-4 text-[#8F1D26]" />
                        <span>E-Mail:</span>
                        <a href="mailto:info@esc-ind.com" className="text-[#8F1D26] hover:text-[#65191F] hover:underline font-bold">
                          info@esc-ind.com
                        </a>
                      </p>
                      <p className="text-[#252932] flex items-center gap-2 font-medium">
                        <Phone className="w-4 h-4 text-[#8F1D26]" />
                        <span>{isDE ? 'Telefon:' : 'Telephone:'}</span>
                        <a href="tel:+914714066071" className="text-[#252932] hover:text-[#8F1D26] font-mono font-bold">
                          +91 471 40660 71
                        </a>
                      </p>
                    </div>
                  </div>
                </section>

              </main>

            </div>
          </div>
        </section>

        <CTAStrip />
      </div>
    </PageTransition>
  )
}
