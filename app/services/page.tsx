'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import CTAStrip from '@/components/sections/CTAStrip'
import HeroBridge from '@/components/sections/HeroBridge'
import PageTransition from '@/components/ui/PageTransition'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import { useLanguage } from '@/context/LanguageContext'

interface ReferenceProject {
  title: string
  description: string
}

interface ServiceItem {
  number: string
  title: string
  image: string
  imageScale?: string
  description: string
  capabilities: string[]
  referenceProject?: ReferenceProject
}

const servicesEN: ServiceItem[] = [
  {
    number: '01',
    title: 'Business Process Management / Outsourcing (BPM / BPO)',
    image: '/images/backoffice removed.png',
    imageScale: 'scale-105 lg:scale-115 xl:scale-120',
    description:
      'We provide IT-enabled Business Process Management and Outsourcing services tailored to energy and water utilities. Using SAP IS-U, Wilken, SAP ERP, and other enterprise platforms, we help streamline operational processes, improve data quality, and support efficient business operations.',
    capabilities: [
      'SAP IS-U process handling',
      'Wilken and ERP support',
      'Utility-specific process management',
      'Metering point identification',
      'Meter reading validation',
      'Customer master data management',
      'Contract and tariff administration',
      'Bank details and discount updates',
      'External grid meter data validation',
      'Data quality checks',
      'Standardized reporting',
      'Quality assurance',
    ],
  },
  {
    number: '02',
    title: 'Robotic Process Automation (RPA)',
    image: '/images/automation removed.png',
    imageScale: 'scale-105 lg:scale-115 xl:scale-120',
    description:
      'We automate repetitive business processes to reduce manual effort, improve operational efficiency, and deliver consistent results through streamlined workflows.',
    capabilities: [
      'Repetitive task automation',
      'Workflow automation',
      'Reduced manual processing',
      'Improved process accuracy',
      'Consistent task execution',
    ],
  },
  {
    number: '03',
    title: 'Digitalization',
    image: '/images/generative removed.png',
    imageScale: 'scale-105 lg:scale-115 xl:scale-120',
    description:
      'We help businesses convert archived documents containing critical information into digital formats using semi-automated solutions designed for efficient and cost-effective processing.',
    capabilities: [
      'Document digitization',
      'Data capture',
      'Archived record conversion',
      'Semi-automated processing',
      'Cost-efficient workflows',
    ],
  },
  {
    number: '04',
    title: 'Market Research',
    image: '/images/market research removed.png',
    imageScale: 'scale-105 lg:scale-115 xl:scale-120',
    description:
      'Together with our sister company, ISI Management Consulting GmbH, we conduct web-based market research, data collection, validation, and analysis tailored to customer requirements.',
    capabilities: [
      'Market data collection',
      'Data validation and analysis',
      'Price comparison',
      'Authentication checks',
      'Customer-specific research',
    ],
  },
  {
    number: '05',
    title: 'Application Development (Web & Mobile)',
    image: '/images/softwareengineering-trimmed.png',
    imageScale: 'scale-[1.35] lg:scale-[1.42] xl:scale-[1.48]',
    description:
      'We design, develop, and deploy custom web and mobile applications for iOS and Android, helping businesses and partners simplify workflows and manage key activities efficiently.',
    capabilities: [
      'Web application development',
      'iOS app development',
      'Android app development',
      'Business workflow solutions',
      'Custom application design',
    ],
  },
]

const servicesDE: ServiceItem[] = [
  {
    number: '01',
    title: 'Geschäftsprozessmanagement / Outsourcing (BPM / BPO)',
    image: '/images/backoffice removed.png',
    imageScale: 'scale-105 lg:scale-115 xl:scale-120',
    description:
      'Wir bieten IT-gestützte Geschäftsprozessmanagement- und Outsourcing-Dienstleistungen für Energie- und Wasserversorger. Mit SAP IS-U, Wilken, SAP ERP und weiteren Plattformen optimieren wir Betriebsprozesse und sichern hohe Datenqualität.',
    capabilities: [
      'SAP IS-U Prozessabwicklung',
      'Wilken- und ERP-Support',
      'Versorgerspezifisches Prozessmanagement',
      'Zählpunktidentifikation',
      'Zählerstandsvalidierung',
      'Stammdatenpflege',
      'Vertrags- und Tarifverwaltung',
      'Bankdaten- und Abschlagsaktualisierung',
      'Netznutzungsdatenprüfung',
      'Datenqualitätsprüfungen',
      'Standardisiertes Berichtswesen',
      'Qualitätssicherung',
    ],
  },
  {
    number: '02',
    title: 'Robotergestützte Prozessautomatisierung (RPA)',
    image: '/images/automation removed.png',
    imageScale: 'scale-105 lg:scale-115 xl:scale-120',
    description:
      'Wir automatisieren wiederkehrende Geschäftsprozesse zur Senkung manueller Aufwände, Steigerung der Effizienz und verlässlicher Umsetzung.',
    capabilities: [
      'Automatisierung wiederkehrender Aufgaben',
      'Workflow-Automatisierung',
      'Reduzierung manueller Aufwände',
      'Höhere Prozessgenauigkeit',
      'Verlässliche Aufgabenausführung',
    ],
  },
  {
    number: '03',
    title: 'Digitalisierung',
    image: '/images/generative removed.png',
    imageScale: 'scale-105 lg:scale-115 xl:scale-120',
    description:
      'Wir unterstützen Unternehmen dabei, archivierte Dokumente mit kritischen Informationen durch teilautomatisierte Verfahren in digitale Formate zu überführen.',
    capabilities: [
      'Dokumentendigitalisierung',
      'Datenerfassung',
      'Konvertierung von Bestandsakten',
      'Teilautomatisierte Verarbeitung',
      'Kosteneffiziente Workflows',
    ],
  },
  {
    number: '04',
    title: 'Marktforschung & Analyse',
    image: '/images/market research removed.png',
    imageScale: 'scale-105 lg:scale-115 xl:scale-120',
    description:
      'Gemeinsam mit unserem Schwesterunternehmen ISI Management Consulting GmbH führen wir webbasierte Marktrecherchen, Datenanalysen und Validierungen durch.',
    capabilities: [
      'Marktdatenerhebung',
      'Datenvalidierung und -analyse',
      'Preisvergleiche',
      'Plausibilitätsprüfungen',
      'Kundenspezifische Recherchen',
    ],
  },
  {
    number: '05',
    title: 'Anwendungsentwicklung (Web & Mobile)',
    image: '/images/softwareengineering-trimmed.png',
    imageScale: 'scale-[1.35] lg:scale-[1.42] xl:scale-[1.48]',
    description:
      'Wir konzipieren und entwickeln maßgeschneiderte Web- und Mobilanwendungen für iOS und Android zur Vereinfachung Ihrer Arbeitsabläufe.',
    capabilities: [
      'Webanwendungsentwicklung',
      'iOS-App-Entwicklung',
      'Android-App-Entwicklung',
      'Workflow-Lösungen für Unternehmen',
      'Individuelles Anwendungsdesign',
    ],
  },
]

function renderTitle(title: string) {
  const parenIndex = title.indexOf('(')
  if (parenIndex > 0) {
    const mainPart = title.slice(0, parenIndex)
    const parenPart = title.slice(parenIndex)
    return (
      <>
        <span>{mainPart}</span>
        <span className="font-bold" style={{ color: '#962228' }}>
          {parenPart}
        </span>
      </>
    )
  }
  const words = title.split(' ')
  if (words.length <= 1) {
    return (
      <span className="font-bold" style={{ color: '#962228' }}>
        {title}
      </span>
    )
  }
  const mainPart = words.slice(0, -1).join(' ')
  const lastWord = words[words.length - 1]
  return (
    <>
      <span>{mainPart} </span>
      <span className="font-bold" style={{ color: '#962228' }}>
        {lastWord}
      </span>
    </>
  )
}

const SilverServiceSequence = ({
  service,
  index,
  totalServices,
  progress,
  language,
}: {
  service: ServiceItem
  index: number
  totalServices: number
  progress: MotionValue<number>
  language: string
}) => {
  const step = 1 / totalServices
  const start = index * step
  
  const inStart = index === 0 ? 0 : start
  const inEnd = index === 0 ? step * 0.12 : start + step * 0.18
  const outStart = index === totalServices - 1 ? start + step * 0.85 : start + step * 0.78
  const outEnd = index === totalServices - 1 ? 1 : start + step * 0.98

  const textOpacity = useTransform(
    progress,
    [inStart, inEnd, outStart, outEnd],
    [index === 0 ? 1 : 0, 1, 1, 0],
    { clamp: true }
  )

  const display = useTransform(textOpacity, (v) => (v <= 0.01 ? 'none' : 'flex'))

  const textY = useTransform(
    progress,
    [inStart, inEnd],
    [index === 0 ? 0 : 25, 0],
    { clamp: true }
  )

  return (
    <motion.div
      style={{ opacity: textOpacity, y: textY, display }}
      className="absolute inset-0 z-20 items-center justify-center pointer-events-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Service Details & Capabilities */}
          <div className="w-full lg:col-span-6 text-left relative z-10">
            {/* Step Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/90 border border-slate-300/90 mb-3 sm:mb-5 shadow-sm">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#e0575f' }} />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-700 font-outfit">
                {language === 'DE' ? `Leistung ${service.number} von 0${totalServices}` : `Service ${service.number} of 0${totalServices}`}
              </span>
            </div>

            {/* Large Typography Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-slate-900 mb-3 sm:mb-5 tracking-tight leading-tight font-plus-jakarta">
              {renderTitle(service.title)}
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-light mb-4 sm:mb-6 max-w-xl">
              {service.description}
            </p>

            {/* Capabilities Pill Matrix */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2 sm:mb-3 font-outfit">
                {language === 'DE' ? 'Kernkompetenzen' : 'Core Capabilities'}
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {service.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-medium bg-white/90 text-slate-800 border border-slate-300/80 shadow-xs"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Service Showcase Graphic */}
          <div className="w-full lg:col-span-6 flex items-center justify-center relative mt-4 lg:mt-0">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[540px] xl:max-w-[580px] aspect-[4/3] flex items-center justify-center">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className={`object-contain pointer-events-none drop-shadow-xl ${service.imageScale || ''}`}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default function ServicesPage() {
  const { language } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const currentServices = language === 'DE' ? servicesDE : servicesEN

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const { scrollYProgress: entranceProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.5', 'start 0.08'],
  })
  const sectionOpacity = useTransform(entranceProgress, [0, 1], [0, 1], { clamp: true })
  const sectionY = useTransform(entranceProgress, [0, 1], [24, 0], { clamp: true })

  return (
    <PageTransition>
      <div className="relative bg-white text-slate-900">
        
        {/* Silverish Hero Section */}
        <section className="esc-hero-section relative overflow-hidden flex items-center justify-start text-left bg-gradient-to-br from-slate-100 via-slate-200/60 to-slate-100">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/services1.png"
              alt="ESC Services"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_75%] opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-slate-100/85 via-slate-100/40 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-100/30 via-transparent to-slate-100/60 z-10 pointer-events-none" />
          </div>

          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#962228]/10 rounded-full blur-[150px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-end">
            <div className="max-w-xl sm:max-w-2xl lg:max-w-[46rem] text-right">
              <AnimateOnScroll direction="up">
                <div className="flex items-center justify-end gap-2 mb-4 sm:mb-6">
                  <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-slate-600 font-outfit">
                    {language === 'DE' ? 'Unser Angebot' : 'What We Offer'}
                  </span>
                  <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
                </div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-light text-slate-900 mb-5 sm:mb-7 leading-[1.05] tracking-tight font-plus-jakarta">
                  {language === 'DE' ? 'Unsere ' : 'Our '}
                  <span className="font-extrabold" style={{ color: '#962228' }}>
                    {language === 'DE' ? 'Leistungen' : 'Services'}
                  </span>
                </h1>
                <p className="text-slate-950 text-base sm:text-xl lg:text-2xl leading-relaxed font-semibold mb-6 sm:mb-10 drop-shadow-sm">
                  {language === 'DE'
                    ? 'In allen betreuten Bereichen schenken uns zufriedene Kunden langfristiges Vertrauen und die Basis für kontinuierliches Wachstum.'
                    : 'Whatever areas we served, our happy customers wanted to retain us and gave confidence to scale up our capabilities.'}
                </p>
                
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex flex-col items-end justify-end text-slate-500 mt-6 sm:mt-10"
                >
                  <span className="text-xs uppercase tracking-widest mb-2 sm:mb-3 font-outfit font-bold text-slate-600">
                    {language === 'DE' ? 'Nach unten scrollen' : 'Scroll To Explore'}
                  </span>
                  <div className="w-[2px] h-10 sm:h-12 bg-gradient-to-b from-[#962228] to-transparent" />
                </motion.div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Indo-German Laser Banner Bridge */}
        <HeroBridge />

        {/* The 1000vh timeline container for the 5 individual service sections */}
        <div
          ref={containerRef}
          className="relative w-full h-[1000vh] bg-[#F8F9FB]"
          style={{ backgroundColor: '#F8F9FB' }}
        >
          {/* Sticky Pin Frame */}
          <motion.div
            className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-10 bg-[#F8F9FB] pt-16"
            style={{ backgroundColor: '#F8F9FB', opacity: sectionOpacity, y: sectionY }}
          >
            {currentServices.map((service, index) => (
              <SilverServiceSequence
                key={service.number}
                service={service}
                index={index}
                totalServices={currentServices.length}
                progress={scrollYProgress}
                language={language}
              />
            ))}

            {/* Bottom Scroll Progress Line Bar */}
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 w-64 sm:w-80 h-1 bg-slate-300/80 rounded-full overflow-hidden z-30 pointer-events-none">
              <motion.div
                className="h-full w-full bg-[#962228] origin-left rounded-full"
                style={{ scaleX: scrollYProgress }}
              />
            </div>
          </motion.div>
        </div>

        <CTAStrip />
      </div>
    </PageTransition>
  )
}