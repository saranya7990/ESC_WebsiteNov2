'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Search } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname()
  const router = useRouter()

  // Consistent maroon header and rectangular active highlight across all pages
  const topIconClass = 'text-red-300'
  const topIconAltClass = 'text-red-200'
  const activeLangTextClass = 'text-[#801c21]'
  const activeNavClass = 'font-bold text-[#962228] bg-red-50/90 border-b-2 border-[#962228] shadow-xs'
  const inactiveNavClass = 'font-medium text-gray-700 hover:text-[#962228] hover:bg-red-50'
  const labDotClass = 'bg-[#B52B35]'
  const labDotGlowClass = 'shadow-[0_0_8px_rgba(181,43,53,0.6)]'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close search on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSearchOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.services, href: '/services' },
    { label: t.nav.careers, href: '/careers' },
    { label: t.nav.lab, href: '/lab', isSpecial: true },
    {
      label: t.nav.insights,
      href: '#',
      children: [
        { label: t.nav.blog, href: '/blog' },
        { label: t.nav.news, href: '/news' },
      ],
    },
    { label: t.nav.contact, href: '/contact' },
  ]

  const searchablePages = [
    { title: t.nav.home, href: '/', category: 'Navigation', desc: language === 'DE' ? 'Haupt-Startseite und Überblick' : 'Main landing page and overview' },
    { title: t.nav.about, href: '/about', category: 'Company', desc: language === 'DE' ? 'Unternehmensvision, Führung und deutsch-indische Wurzeln' : 'Company vision, leadership, and Indo-German roots' },
    { title: language === 'DE' ? 'Software-Engineering' : 'Software Engineering', href: '/services', category: 'Services', desc: language === 'DE' ? 'Individuelle Anwendungen & SCADA-Entwicklung' : 'Custom application & SCADA development' },
    { title: language === 'DE' ? 'Prozessautomatisierung' : 'Intelligent Automation', href: '/services', category: 'Services', desc: language === 'DE' ? 'RPA und automatisierte Workflows' : 'RPA and workflow automation' },
    { title: language === 'DE' ? 'IT-Back-Office-Dienste' : 'IT Back-Office Services', href: '/services', category: 'Services', desc: language === 'DE' ? 'Infrastruktur, Support & Betrieb' : 'Infrastructure, helpdesk & operations' },
    { title: language === 'DE' ? 'Marktforschung & Analyse' : 'Market Research & Analysis', href: '/services', category: 'Services', desc: language === 'DE' ? 'Business Intelligence & Datenprüfung' : 'Business intelligence & data validation' },
    { title: t.nav.careers, href: '/careers', category: 'Company', desc: language === 'DE' ? 'Offene Stellen und Arbeitskultur' : 'Open positions and working culture' },
    { title: t.nav.lab, href: '/lab', category: 'Innovation', desc: language === 'DE' ? 'KI-Agenten und Demos' : 'AI agentic sandbox & demos' },
    { title: t.nav.blog, href: '/blog', category: 'Insights', desc: language === 'DE' ? 'Aktuelle technologische Erkenntnisse' : 'Latest technological insights' },
    { title: t.nav.news, href: '/news', category: 'Insights', desc: language === 'DE' ? 'Pressemitteilungen und Neuigkeiten' : 'Press releases and company updates' },
    { title: t.nav.contact, href: '/contact', category: 'Support', desc: language === 'DE' ? 'Kontaktieren Sie unser Team' : 'Get in touch with our team' },
    { title: t.footer.imprint, href: '/imprint', category: 'Legal', desc: language === 'DE' ? 'Impressum und rechtliche Hinweise' : 'Corporate registration & legal information' },
    { title: t.footer.dataProtection, href: '/data-protection', category: 'Legal', desc: language === 'DE' ? 'Datenschutzerklärung und DSGVO-Compliance' : 'Privacy policy and GDPR compliance' },
    { title: t.footer.certifications, href: '/certifications', category: 'Compliance', desc: language === 'DE' ? 'ISO/IEC 27001:2022 Informationssicherheit' : 'ISO/IEC 27001:2022 Information Security Certification' },
  ]

  const filteredSearchResults = searchQuery.trim() === ''
    ? searchablePages.slice(0, 6)
    : searchablePages.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-slate-200 ${
          scrolled ? 'bg-[#F3F4F6] shadow-md' : 'bg-[#F3F4F6]/95 backdrop-blur-md shadow-sm'
        }`}
      >
        {/* ========================================================================= */}
        {/* TOP PRE-HEADER BANNER (Consistently Visible with Language Switcher) */}
        {/* ========================================================================= */}
        <div className="text-white/90 transition-all duration-300 py-1.5 bg-[#801c21] border-b border-red-950/30">
          <div className="w-full px-3 sm:px-5 lg:px-6 flex items-center justify-between text-xs font-medium">
            
            {/* Left Info: Contact Phone, Email & Address aligned closer to far left */}
            <div className="flex items-center gap-3 sm:gap-5 overflow-x-auto no-scrollbar py-0.5 shrink-0 pl-0 sm:pl-1">
              <a
                href="tel:+918086228000"
                className="flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap"
              >
                <Phone size={12} className={topIconClass} />
                <span>+91 8086 22 8000</span>
              </a>

              <a
                href="mailto:info@esc-ind.com"
                className="flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap hidden sm:flex"
              >
                <Mail size={12} className={topIconClass} />
                <span>info@esc-ind.com</span>
              </a>

              <span className="items-center gap-1.5 text-white/90 whitespace-nowrap hidden lg:flex">
                <MapPin size={12} className={topIconClass} />
                <span>Yamuna Building, Technopark Phase 3 campus, Trivandrum</span>
              </span>
            </div>

            {/* Right Action Icons: Language Selector, Quick Search & Social */}
            <div className="flex items-center gap-2 sm:gap-4 pl-2 sm:pl-3 border-l border-white/20 shrink-0">
              
              {/* EN / DE Language Toggle Pill */}
              <div
                className="flex items-center bg-black/35 rounded-full p-0.5 border border-white/25 text-xs font-semibold shadow-inner"
                role="group"
                aria-label="Language Selector"
              >
                <button
                  type="button"
                  onClick={() => setLanguage('EN')}
                  className={`px-2.5 py-0.5 rounded-full transition-all duration-200 text-[11px] font-bold ${
                    language === 'EN'
                      ? `bg-white ${activeLangTextClass} shadow-md scale-100`
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  aria-label="Switch language to English"
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('DE')}
                  className={`px-2.5 py-0.5 rounded-full transition-all duration-200 text-[11px] font-bold ${
                    language === 'DE'
                      ? `bg-white ${activeLangTextClass} shadow-md scale-100`
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  aria-label="Sprache auf Deutsch umstellen"
                >
                  DE
                </button>
              </div>

              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-1.5 hover:text-white transition-colors p-1 rounded hover:bg-white/10"
                title={t.nav.search}
                aria-label={t.nav.search}
              >
                <Search size={13} className={topIconAltClass} />
                <span className="hidden sm:inline text-[11px] uppercase tracking-wider font-semibold">
                  {t.nav.search}
                </span>
              </button>

              <a
                href="https://www.linkedin.com/company/esc-utility-services"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors p-1 rounded hover:bg-white/10 flex items-center"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <svg className={`w-3.5 h-3.5 fill-current ${topIconAltClass}`} viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 1.63 1.63A1.63 1.63 0 0 0 7.86 6.7z"/>
                </svg>
              </a>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* MAIN NAVIGATION BAR */}
        {/* ========================================================================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-default">
              <div
                className="w-9 h-9 rounded flex items-center justify-center text-white font-bold text-sm tracking-tight"
                style={{ backgroundColor: '#962228' }}
              >
                ESC
              </div>
              <div className="leading-tight">
                <span className="block text-sm font-bold text-gray-900 tracking-tight whitespace-nowrap">
                  ESC Utility Services Pvt.Ltd
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                if (link.children) {
                  const isParentActive = link.children.some(
                    (child) => pathname === child.href || (child.href !== '/' && pathname?.startsWith(child.href))
                  )
                  return (
                    <div key={link.label} className="relative">
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className={`flex items-center gap-1 px-3 py-2 text-sm transition-colors rounded-md ${
                          isParentActive
                            ? 'font-bold text-[#962228] bg-red-50/90 border-b-2 border-[#962228]'
                            : inactiveNavClass
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {dropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                          {link.children.map((child) => {
                            const isChildActive = pathname === child.href
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setDropdownOpen(false)}
                                className={`block px-4 py-2 text-sm transition-colors ${
                                  isChildActive
                                    ? 'font-bold text-[#962228] bg-red-50 border-l-4 border-[#962228]'
                                    : 'text-gray-700 hover:text-[#962228] hover:bg-red-50'
                                }`}
                              >
                                {child.label}
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                }

                const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href))

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 text-sm transition-colors rounded-md flex items-center gap-1.5 relative ${
                      isActive ? activeNavClass : inactiveNavClass
                    }`}
                  >
                    {link.label}
                    {link.isSpecial && (
                      <span className="relative flex h-2 w-2">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${labDotClass} opacity-75`}></span>
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${labDotClass} ${labDotGlowClass}`}></span>
                      </span>
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                className="p-2 rounded-md text-gray-600 hover:text-[#962228] hover:bg-red-50 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            {/* Mobile Language Switcher */}
            <div className="px-4 py-3 bg-slate-50 border-b border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                {language === 'DE' ? 'Sprache / Language' : 'Language'}
              </span>
              <div className="flex items-center bg-gray-200/80 rounded-full p-0.5 border border-gray-300 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => {
                    setLanguage('EN')
                    setMenuOpen(false)
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    language === 'EN' ? 'bg-[#962228] text-white shadow-sm' : 'text-gray-700 hover:text-black'
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setLanguage('DE')
                    setMenuOpen(false)
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    language === 'DE' ? 'bg-[#962228] text-white shadow-sm' : 'text-gray-700 hover:text-black'
                  }`}
                >
                  DE
                </button>
              </div>
            </div>

            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => {
                if (link.children) {
                  return (
                    <div key={link.label}>
                      <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-widest">
                        {link.label}
                      </p>
                      {link.children.map((child) => {
                        const isChildActive = pathname === child.href
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMenuOpen(false)}
                            className={`block px-6 py-2 text-sm rounded-md transition-colors ${
                              isChildActive
                                ? 'font-bold text-[#962228] bg-red-50 border-l-4 border-[#962228]'
                                : 'text-gray-700 hover:text-[#962228] hover:bg-red-50'
                            }`}
                          >
                            {child.label}
                          </Link>
                        )
                      })}
                    </div>
                  )
                }

                const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href))

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                      isActive
                        ? 'font-bold text-[#962228] bg-red-50 border-l-4 border-[#962228]'
                        : 'font-medium text-gray-700 hover:text-[#962228] hover:bg-red-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.isSpecial && (
                      <span className="relative flex h-2.5 w-2.5">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${labDotClass} opacity-75`}></span>
                        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${labDotClass} ${labDotGlowClass}`}></span>
                      </span>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* QUICK SEARCH MODAL */}
      {/* ========================================================================= */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 backdrop-blur-md">
          <div
            className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 bg-slate-50/80">
              <Search size={18} className="text-[#962228]" />
              <input
                type="text"
                placeholder={t.nav.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm focus:outline-none font-medium"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-md hover:bg-slate-200/60 transition-colors"
                aria-label="Close search"
              >
                <X size={18} />
              </button>
            </div>

            {/* Search Results List */}
            <div className="max-h-80 overflow-y-auto p-3 space-y-1">
              <p className="px-3 py-1.5 text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                {searchQuery.trim() ? t.nav.searchMatching : t.nav.searchSuggested}
              </p>
              {filteredSearchResults.length === 0 ? (
                <div className="py-8 text-center text-slate-500 text-sm">
                  {t.nav.noResults} &quot;{searchQuery}&quot;
                </div>
              ) : (
                filteredSearchResults.map((item) => (
                  <button
                    key={item.title + item.href}
                    onClick={() => {
                      setSearchOpen(false)
                      router.push(item.href)
                    }}
                    className="w-full text-left flex items-center justify-between p-3 rounded-xl hover:bg-red-50/80 transition-colors group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-900 group-hover:text-[#962228] transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-red-100 group-hover:text-[#962228]">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 font-light">
                        {item.desc}
                      </p>
                    </div>
                  </button>
                ))
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-2.5 bg-slate-100/80 border-t border-slate-200 text-right">
              <span className="text-[11px] text-slate-500 font-mono">{t.nav.pressEsc}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}