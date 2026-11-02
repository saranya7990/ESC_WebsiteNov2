'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState, useEffect, useCallback } from 'react'
import { ArrowLeft, ArrowRight, Webhook, FileSearch, Boxes, BrainCog, Share2, Database } from 'lucide-react'
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiHtml5, SiCss, SiPython, SiFastapi,
  SiDjango, SiStreamlit, SiSap, SiUipath, SiMysql, SiMongodb, SiPostgresql,
  SiGithub, SiGitlab, SiDocker, SiNginx,
} from 'react-icons/si'
import { TbBrandAzure } from 'react-icons/tb'
import { BsOpenai } from 'react-icons/bs'
import { FaThLarge, FaBolt, FaChartBar, FaGlobe } from 'react-icons/fa'
import CTAStrip from '@/components/sections/CTAStrip'
import HeroBridge from '@/components/sections/HeroBridge'
import PageTransition from '@/components/ui/PageTransition'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import { useLanguage } from '@/context/LanguageContext'

// A few entries have no dedicated logo in any icon set available to us
// (Power Apps/Automate/BI/Pages, SharePoint, REST APIs, RAG, Vector
// Databases, Machine Learning, SQL) — these use generic icons in a
// representative brand/theme color as a stand-in until real logos are supplied.
const techCategories = [
  {
    name: 'Frontend',
    items: [
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#000000' },
      { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
      { name: 'HTML', Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', Icon: SiCss, color: '#1572B6' },
    ],
  },
  {
    name: 'Backend & APIs',
    items: [
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'FastAPI', Icon: SiFastapi, color: '#009688' },
      { name: 'Django', Icon: SiDjango, color: '#092E20' },
      { name: 'REST APIs', Icon: Webhook, color: '#4F46E5' },
    ],
  },
  {
    name: 'AI & Data',
    items: [
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'OpenAI', Icon: BsOpenai, color: '#10A37F' },
      { name: 'RAG', Icon: FileSearch, color: '#7C3AED' },
      { name: 'Vector Databases', Icon: Boxes, color: '#0EA5E9' },
      { name: 'Machine Learning', Icon: BrainCog, color: '#DB2777' },
      { name: 'Streamlit', Icon: SiStreamlit, color: '#FF4B4B' },
    ],
  },
  {
    name: 'Enterprise & Automation',
    items: [
      { name: 'SAP', Icon: SiSap, color: '#0FAAFF' },
      { name: 'Power Apps', Icon: FaThLarge, color: '#742774' },
      { name: 'Power Automate', Icon: FaBolt, color: '#0066FF' },
      { name: 'Power BI', Icon: FaChartBar, color: '#F2C811' },
      { name: 'Power Pages', Icon: FaGlobe, color: '#1B75BC' },
      { name: 'SharePoint', Icon: Share2, color: '#038387' },
      { name: 'UiPath', Icon: SiUipath, color: '#FA4616' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    items: [
      { name: 'Azure', Icon: TbBrandAzure, color: '#0078D4' },
      { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
      { name: 'Nginx', Icon: SiNginx, color: '#009639' },
      { name: 'GitHub', Icon: SiGithub, color: '#181717' },
      { name: 'GitLab', Icon: SiGitlab, color: '#FC6D26' },
    ],
  },
  {
    name: 'Databases',
    items: [
      { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
      { name: 'SQL', Icon: Database, color: '#64748B' },
    ],
  },
]

type Value = {
  title: string
  description: string
}

const valuesEN: Value[] = [
  {
    title: 'Engineering Excellence',
    description: 'We approach every solution with precision, technical expertise, and a commitment to delivering work that stands the test of time.',
  },
  {
    title: 'Customer Partnership',
    description: 'We work as an extension of our clients\' teams, building trusted relationships through collaboration, transparency, and measurable results.',
  },
  {
    title: 'Intelligent Innovation',
    description: 'We embrace emerging technologies and automation to create practical, future-ready solutions that deliver real business value.',
  },
  {
    title: 'Quality Without Compromise',
    description: 'From planning to delivery, we maintain the highest standards to ensure reliability, security, and long-term performance.',
  },
  {
    title: 'Ownership & Accountability',
    description: 'We take responsibility for every project we undertake, delivering on our commitments with professionalism and attention to detail.',
  },
  {
    title: 'Continuous Improvement',
    description: 'We believe every process can be refined. By learning, adapting, and optimizing, we help our clients stay ahead in a changing world.',
  },
  {
    title: 'Global Standards, Local Excellence',
    description: 'Combining German engineering discipline with Indian technical expertise, we deliver solutions that meet international expectations with local agility.',
  },
  {
    title: 'Security by Design',
    description: 'Information security, data protection, and dependable systems are integrated into every solution we build—not added later.',
  },
]

const valuesDE: Value[] = [
  {
    title: 'Technische Spitzenleistung',
    description: 'Wir entwickeln jede Lösung mit höchster Präzision, fundiertem Fachwissen und dem Anspruch an dauerhafte Zukunftsfähigkeit.',
  },
  {
    title: 'Partnerschaftliche Zusammenarbeit',
    description: 'Wir agieren als verlässliche Erweiterung der Teams unserer Kunden – auf Basis von Vertrauen, Transparenz und messbarem Erfolg.',
  },
  {
    title: 'Intelligente Innovation',
    description: 'Wir nutzen modernste Technologien und Automatisierung, um praxisnahe, zukunftsfähige Lösungen mit echtem Mehrwert zu schaffen.',
  },
  {
    title: 'Kompromisslose Qualität',
    description: 'Von der Konzeption bis zur Einführung gewährleisten wir höchste Standards für Zuverlässigkeit, Sicherheit und Performance.',
  },
  {
    title: 'Eigenverantwortung & Verlässlichkeit',
    description: 'Wir übernehmen Verantwortung für jedes Projekt und erfüllen unsere Zusagen mit Professionalität und Sorgfalt.',
  },
  {
    title: 'Kontinuierliche Verbesserung',
    description: 'Jeder Prozess lässt sich optimieren. Durch kontinuierliches Lernen und Weiterentwickeln sichern wir Kunden Wettbewerbsvorteile.',
  },
  {
    title: 'Globale Standards, lokale Exzellenz',
    description: 'Durch die Verbindung deutscher Ingenieursdisziplin mit indischer Entwicklungsstärke bieten wir erstklassige Lösungen mit hoher Agilität.',
  },
  {
    title: 'Sicherheit von Beginn an',
    description: 'Informationssicherheit, Datenschutz und Systemstabilität sind integraler Bestandteil jeder unserer Lösungen – von Tag eins an.',
  },
]

type TeamMember = {
  initials: string
  name: string
  role: string
  photo: string
  bio: string
}

const team: TeamMember[] = [
  {
    initials: 'ND',
    name: 'Nagaraj Deivanayagam',
    role: 'Business Process Management Services',
    photo: '/images/team-1.png',
    bio: 'Leading strategic technology initiatives, managing operational team workflows, and driving high-quality software engineering execution.',
  },
  {
    initials: 'PB',
    name: 'Pooja Babu',
    role: 'Technology and Innovation',
    photo: '/images/team-2.png',
    bio: 'Coordinating cross-functional engineering teams, facilitating technical delivery, and ensuring project milestones meet international quality standards.',
  },
  {
    initials: 'PA',
    name: 'Parvathy Ajitha',
    role: 'Digitalisation',
    photo: '/images/team-3.png',
    bio: 'Guiding core software engineering teams, overseeing daily technical operations, and driving project quality across client engagements.',
  },
  {
    initials: 'RS',
    name: 'Reshma Suresh',
    role: 'Operations & HRM',
    photo: '/images/team-4.png',
    bio: 'Managing human resource management, operational strategy, organizational growth, and talent development across ESC.',
  },
  {
    initials: 'SA',
    name: 'Soumya Arayilvalapil',
    role: 'Security & Compliance',
    photo: '/images/team-5.png',
    bio: 'Leading technical delivery units, orchestrating software development workflows, and maintaining rigorous QA standards.',
  },
]

// Sparkle particle component
const Sparkle = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-white rounded-full pointer-events-none"
    style={{
      left: `${x}%`,
      top: `${y}%`,
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
)

const CoreValuesSection = ({ values }: { values: Value[] }) => {
  const wrapperRef = useRef<HTMLElement>(null)
  const [rotationAngle, setRotationAngle] = useState(0)
  const targetAngleRef = useRef(0)
  const currentAngleRef = useRef(0)
  const animFrameId = useRef<number | null>(null)

  // Smooth animation frame loop for physics momentum interpolation
  useEffect(() => {
    const updatePhysics = () => {
      const diff = targetAngleRef.current - currentAngleRef.current
      if (Math.abs(diff) > 0.01) {
        currentAngleRef.current += diff * 0.12
        setRotationAngle(currentAngleRef.current)
      }
      animFrameId.current = requestAnimationFrame(updatePhysics)
    }

    animFrameId.current = requestAnimationFrame(updatePhysics)
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current)
    }
  }, [])

  // Maps scroll progress through the pinned section to a 0–360° rotation
  useEffect(() => {
    const handleScroll = () => {
      const el = wrapperRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      // Scrollable distance is the total height of the wrapper (200vh) minus one viewport (100vh)
      const scrollableDistance = rect.height - window.innerHeight
      if (scrollableDistance <= 0) return

      // Calculate exact progress from 0 to 1
      const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1)

      // Map progress exactly to one full 360-degree rotation
      targetAngleRef.current = progress * 360
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const numCards = values.length

  return (
    <section
      ref={wrapperRef}
      className="relative w-full bg-white"
      style={{ height: '200vh', backgroundColor: '#FFFFFF' }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden bg-white" style={{ backgroundColor: '#FFFFFF' }}>
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 lg:pt-28 w-full">
          <AnimateOnScroll direction="up" className="mb-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#E5E7EB] shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-[#861F2B] animate-pulse" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#861F2B] font-outfit">
                What Drives Us
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#252B33] leading-[1.15] tracking-tight font-plus-jakarta">
              Our{' '}
              <span className="text-[#861F2B]">
                Core Values
              </span>
            </h2>
          </AnimateOnScroll>
        </div>

        {/* 3D Wheel Area */}
        <div
          className="flex-1 w-full flex items-center justify-center relative"
          style={{
            perspective: '1800px',
            perspectiveOrigin: '50% 55%',
          }}
        >
          {/* Tilted Ring */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateX(22deg) rotateZ(-4deg)',
            }}
          >
            {values.map((value: Value, index: number) => {
              const baseAngle = (360 / numCards) * index
              const currentCardAngle = baseAngle + rotationAngle
              const rad = (currentCardAngle * Math.PI) / 180

              const rx = 560
              const ry = 220

              const x = Math.sin(rad) * rx
              const z = Math.cos(rad) * ry
              const y = -Math.cos(rad) * 50

              const depthRatio = (z + ry) / (2 * ry)
              const isFront = depthRatio > 0.72

              const scale = 0.75 + depthRatio * 0.45
              const opacity = 0.55 + depthRatio * 0.45
              const zIndex = Math.round((z + ry) * 10)

              return (
                <div
                  key={value.title}
                  className="absolute w-[340px] sm:w-[420px] lg:w-[460px] transition-transform duration-75 ease-out"
                  style={{
                    transform: `translate3d(${x}px, ${y}px, ${z}px) scale(${scale}) rotateX(-15deg)`,
                    opacity,
                    zIndex,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Clean White Card */}
                  <div
                    className={`relative w-full rounded-3xl p-7 sm:p-9 transition-all duration-300 overflow-hidden bg-white border border-[#E5E7EB] ${
                      isFront
                        ? 'shadow-[0_20px_45px_rgba(37,43,51,0.12)]'
                        : 'shadow-[0_8px_24px_rgba(37,43,51,0.06)] hover:border-[#6B7280]/30'
                    }`}
                    style={{ backgroundColor: '#FFFFFF' }}
                  >
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start gap-3 mb-4">
                        <div
                          className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            isFront
                              ? 'bg-[#861F2B] text-white shadow-sm'
                              : 'bg-[#F1F3F5] border border-[#E5E7EB] text-[#861F2B]'
                          }`}
                        >
                          <span className="text-lg font-bold">●</span>
                        </div>
                      </div>

                      <h3
                        className="text-xl sm:text-2xl font-bold mb-3 tracking-tight font-plus-jakarta text-[#252B33]"
                      >
                        {value.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm leading-relaxed text-[#6B7280] font-normal"
                      >
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-[#6B7280] pointer-events-none flex flex-col items-center gap-1 px-4 py-2 rounded-full bg-white border border-[#E5E7EB] shadow-sm"
          >
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.span>
            Scroll to rotate
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Leadership team — flat horizontal "movie poster" selector. Same hover+wheel /
// touch-drag spin as the Core Values ring, but cards sit in a straight row
// instead of a 3D ring: the center card is large, sharp and lifted, and its
// neighbors stay fully visible (not shrunk to a sliver) right beside it.
// Leadership team — Modern 3D Coverflow Deck matching reference design.
// Autoplay continuously cycles each member into the center spotlight with smooth momentum physics,
// pause-on-hover, touch swipe gesture support, and reduced-motion accessibility.
const LeadershipWheel = ({ team }: { team: TeamMember[] }) => {
  const stageRef = useRef<HTMLDivElement>(null)
  const [centerIndex, setCenterIndex] = useState(0)
  const targetIndexRef = useRef(0)
  const currentIndexRef = useRef(0)
  const isHoveredRef = useRef(false)
  const isInteractingRef = useRef(false)
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null)
  const animFrameId = useRef<number | null>(null)
  const touchStartX = useRef<number | null>(null)
  const touchDeltaX = useRef(0)
  const mouseStartX = useRef<number | null>(null)
  const mouseDeltaX = useRef(0)
  const isMouseDownRef = useRef(false)

  const [spacing, setSpacing] = useState(250)

  const numCards = team.length

  // Responsive spacing for mobile, tablet, and desktop
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      if (w < 640) {
        setSpacing(175)
      } else if (w < 1024) {
        setSpacing(215)
      } else {
        setSpacing(250)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Autoplay function: smoothly moves to the next card every 3.6 seconds
  const startAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current)

    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
      if (mq.matches) return
    }

    autoplayTimerRef.current = setInterval(() => {
      if (!isHoveredRef.current && !isInteractingRef.current) {
        targetIndexRef.current = Math.round(targetIndexRef.current) + 1
      }
    }, 3600)
  }, [])

  const resetAutoplayTimer = useCallback(() => {
    startAutoplay()
  }, [startAutoplay])

  useEffect(() => {
    startAutoplay()
    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current)
    }
  }, [startAutoplay])

  // Smooth momentum interpolation loop (60fps / 120fps physics)
  useEffect(() => {
    const updatePhysics = () => {
      const diff = targetIndexRef.current - currentIndexRef.current
      if (Math.abs(diff) > 0.001) {
        // 0.08 produces an elegant, fluid exponential decay glide into center spotlight (~1s transition)
        currentIndexRef.current += diff * 0.08
        setCenterIndex(currentIndexRef.current)
      }
      animFrameId.current = requestAnimationFrame(updatePhysics)
    }

    animFrameId.current = requestAnimationFrame(updatePhysics)
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current)
    }
  }, [])

  // Wheel listener: snap smoothly when scrolled
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    let wheelTimeout: NodeJS.Timeout | null = null

    const handleWheel = (e: WheelEvent) => {
      if (!isHoveredRef.current) return
      e.preventDefault()
      e.stopPropagation()
      isInteractingRef.current = true
      targetIndexRef.current += e.deltaY * 0.003

      if (wheelTimeout) clearTimeout(wheelTimeout)
      wheelTimeout = setTimeout(() => {
        targetIndexRef.current = Math.round(targetIndexRef.current)
        isInteractingRef.current = false
        resetAutoplayTimer()
      }, 150)
    }

    stage.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      stage.removeEventListener('wheel', handleWheel)
      if (wheelTimeout) clearTimeout(wheelTimeout)
    }
  }, [resetAutoplayTimer])

  // Touch gesture handlers for mobile & tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    isInteractingRef.current = true
    touchStartX.current = e.touches[0].clientX
    touchDeltaX.current = 0
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
  }

  const handleTouchEnd = () => {
    isInteractingRef.current = false
    if (Math.abs(touchDeltaX.current) > 35) {
      if (touchDeltaX.current < 0) {
        targetIndexRef.current = Math.round(targetIndexRef.current) + 1
      } else {
        targetIndexRef.current = Math.round(targetIndexRef.current) - 1
      }
    } else {
      targetIndexRef.current = Math.round(targetIndexRef.current)
    }
    touchStartX.current = null
    touchDeltaX.current = 0
    resetAutoplayTimer()
  }

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    isMouseDownRef.current = true
    isInteractingRef.current = true
    mouseStartX.current = e.clientX
    mouseDeltaX.current = 0
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current || mouseStartX.current === null) return
    mouseDeltaX.current = e.clientX - mouseStartX.current
  }

  const handleMouseUp = () => {
    if (!isMouseDownRef.current) return
    isMouseDownRef.current = false
    isInteractingRef.current = false
    if (Math.abs(mouseDeltaX.current) > 40) {
      if (mouseDeltaX.current < 0) {
        targetIndexRef.current = Math.round(targetIndexRef.current) + 1
      } else {
        targetIndexRef.current = Math.round(targetIndexRef.current) - 1
      }
    } else {
      targetIndexRef.current = Math.round(targetIndexRef.current)
    }
    mouseStartX.current = null
    mouseDeltaX.current = 0
    resetAutoplayTimer()
  }

  const handlePrev = () => {
    targetIndexRef.current = Math.round(targetIndexRef.current) - 1
    resetAutoplayTimer()
  }

  const handleNext = () => {
    targetIndexRef.current = Math.round(targetIndexRef.current) + 1
    resetAutoplayTimer()
  }

  const handleSelect = (targetMemberIndex: number) => {
    const currentWrapped = ((Math.round(targetIndexRef.current) % numCards) + numCards) % numCards
    let diff = targetMemberIndex - currentWrapped
    while (diff > numCards / 2) diff -= numCards
    while (diff < -numCards / 2) diff += numCards
    targetIndexRef.current = Math.round(targetIndexRef.current) + diff
    resetAutoplayTimer()
  }

  // The member currently centered
  const wrappedFrontIndex = ((Math.round(centerIndex) % numCards) + numCards) % numCards

  return (
    <div className="w-full py-6">
      {/* 3D Coverflow Stage */}
      <div
        ref={stageRef}
        onMouseEnter={() => {
          isHoveredRef.current = true
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false
          if (isMouseDownRef.current) handleMouseUp()
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full h-[440px] sm:h-[500px] lg:h-[540px] flex items-center justify-center overflow-hidden select-none cursor-grab active:cursor-grabbing"
        style={{ perspective: '1400px' }}
      >
        {/* Soft Ambient Red Radial Spotlight under the active card */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[140px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(150,34,40,0.18) 0%, transparent 75%)' }}
        />

        {team.map((member, index) => {
          // Shortest signed distance from the center in a wrapping (circular) index space
          let diff = (index - centerIndex) % numCards
          while (diff > numCards / 2) diff -= numCards
          while (diff < -numCards / 2) diff += numCards

          const absDiff = Math.abs(diff)
          const isFront = absDiff < 0.5

          // Tuned spacing & continuous depth transformation matching reference coverflow
          const translateX = diff * spacing
          // Continuous smooth lift: active center card lifts by -16px, neighbors at 0
          const lift = -16 * Math.max(0, 1 - absDiff)

          // Continuous smooth scaling: 1.06 at center, ~0.88 at neighbors, ~0.78 at outer edges
          const scale = 0.78 + 0.28 * Math.max(0, 1 - absDiff / 2.2) ** 1.6

          // Smooth opacity: 1.0 at center, fading seamlessly to 0 at the extreme rear wrap (absDiff > 2.0)
          let opacity = 1.0
          if (absDiff <= 2.0) {
            opacity = Math.max(0.65, 1 - absDiff * 0.18)
          } else {
            const fadeProgress = Math.min(1, Math.max(0, (absDiff - 2.0) / 0.4))
            opacity = (1 - fadeProgress) * 0.65
          }

          const zIndex = Math.round(100 - absDiff * 25)

          return (
            <div
              key={member.name}
              onClick={() => {
                let cardDiff = (index - Math.round(centerIndex)) % numCards
                while (cardDiff > numCards / 2) cardDiff -= numCards
                while (cardDiff < -numCards / 2) cardDiff += numCards
                targetIndexRef.current = Math.round(targetIndexRef.current) + cardDiff
                resetAutoplayTimer()
              }}
              className="absolute w-[260px] sm:w-[310px] lg:w-[350px] h-[360px] sm:h-[420px] lg:h-[460px] group cursor-pointer"
              style={{
                transform: `translate3d(${translateX}px, ${lift}px, 0px) scale(${scale})`,
                opacity,
                zIndex,
                pointerEvents: opacity < 0.2 ? 'none' : 'auto',
              }}
            >
              {/* Premium 3:4 Aspect Ratio Portrait Card */}
              <div
                className={`relative w-full h-full rounded-3xl overflow-hidden transition-all duration-500 bg-slate-900 ${
                  isFront
                    ? 'shadow-[0_25px_60px_rgba(0,0,0,0.3),0_0_35px_rgba(150,34,40,0.25)] border-2 border-[#962228]'
                    : 'shadow-[0_15px_35px_rgba(0,0,0,0.15)] border border-slate-300/80 hover:border-slate-400'
                }`}
              >
                {/* Full Uncropped Photo */}
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="350px"
                  priority={isFront}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Navigation Arrow Controls & Member Indicator Dots */}
      <div 
        className="flex items-center justify-center gap-4 sm:gap-6 mt-4"
        onMouseEnter={() => {
          isHoveredRef.current = true
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false
        }}
      >
        <button
          onClick={handlePrev}
          aria-label="Previous Team Member"
          className="w-11 h-11 rounded-full bg-white/80 border border-slate-300 shadow-md backdrop-blur-md flex items-center justify-center text-slate-800 hover:bg-[#962228] hover:text-white hover:border-[#962228] transition-all duration-300 group cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* 5 Indicator Pills for the 5 Team Members */}
        <div className="flex items-center gap-2">
          {team.map((member, i) => {
            const isActive = i === wrappedFrontIndex
            return (
              <button
                key={member.name}
                onClick={() => handleSelect(i)}
                aria-label={`View ${member.name} - ${member.role}`}
                className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                  isActive
                    ? 'w-7 bg-[#962228] shadow-[0_0_10px_rgba(150,34,40,0.4)]'
                    : 'w-2.5 bg-slate-400/50 hover:bg-slate-500'
                }`}
              />
            )
          })}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next Team Member"
          className="w-11 h-11 rounded-full bg-white/80 border border-slate-300 shadow-md backdrop-blur-md flex items-center justify-center text-slate-800 hover:bg-[#962228] hover:text-white hover:border-[#962228] transition-all duration-300 group cursor-pointer"
        >
          <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  )
}

// Deterministic positions for hydration-safe sparkle rendering
const SPARKLE_POSITIONS = [
  { x: 15, y: 25 },
  { x: 35, y: 55 },
  { x: 75, y: 30 },
  { x: 85, y: 65 },
  { x: 45, y: 75 },
  { x: 20, y: 80 },
  { x: 60, y: 20 },
  { x: 90, y: 40 },
  { x: 10, y: 60 },
  { x: 50, y: 35 },
  { x: 30, y: 15 },
  { x: 70, y: 85 },
  { x: 80, y: 15 },
  { x: 25, y: 45 },
  { x: 65, y: 60 },
  { x: 40, y: 90 },
  { x: 95, y: 70 },
  { x: 5, y: 35 },
  { x: 55, y: 50 },
  { x: 88, y: 25 },
]

export default function AboutPage() {
  const { language, t } = useLanguage()
  const values = language === 'DE' ? valuesDE : valuesEN

  const currentTeam: TeamMember[] = [
    {
      initials: 'ND',
      name: 'Nagaraj Deivanayagam',
      role: t.about.roles.nagaraj,
      photo: '/images/team-1.png',
      bio: 'Leading strategic technology initiatives, managing operational team workflows, and driving high-quality software engineering execution.',
    },
    {
      initials: 'PB',
      name: 'Pooja Babu',
      role: t.about.roles.pooja,
      photo: '/images/team-2.png',
      bio: 'Coordinating cross-functional engineering teams, facilitating technical delivery, and ensuring project milestones meet international quality standards.',
    },
    {
      initials: 'PA',
      name: 'Parvathy Ajitha',
      role: t.about.roles.parvathy,
      photo: '/images/team-3.png',
      bio: 'Guiding core software engineering teams, overseeing daily technical operations, and driving project quality across client engagements.',
    },
    {
      initials: 'RS',
      name: 'Reshma Suresh',
      role: t.about.roles.reshma,
      photo: '/images/team-4.png',
      bio: 'Managing human resource management, operational strategy, organizational growth, and talent development across ESC.',
    },
    {
      initials: 'SA',
      name: 'Soumya Arayilvalapil',
      role: t.about.roles.soumya,
      photo: '/images/team-5.png',
      bio: 'Leading technical delivery units, orchestrating software development workflows, and maintaining rigorous QA standards.',
    },
  ]

  return (
    <PageTransition>
      {/* Who We Are - ESC doorway hero */}
      <section className="esc-hero-section relative overflow-hidden flex items-center justify-start text-left bg-gradient-to-br from-slate-100 via-slate-200/60 to-slate-100">
        {/* Background image — ESC keyboard image first, then silver overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/About.png"
            alt="ESC About Hero"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_75%] opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-slate-100/85 via-slate-100/40 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-100/30 via-transparent to-slate-100/60 z-10 pointer-events-none" />
        </div>

        {/* Ambient background glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#962228]/10 rounded-full blur-[150px] pointer-events-none" />

        {/* Animated sparkles */}
        {SPARKLE_POSITIONS.map((pos, i) => (
          <Sparkle
            key={i}
            delay={i * 0.1}
            x={pos.x}
            y={pos.y}
          />
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-end">
          <div className="max-w-xl sm:max-w-2xl lg:max-w-[46rem] text-right">
            <AnimateOnScroll direction="up">
              <div className="flex items-center justify-end gap-2 mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-slate-600 font-outfit">
                  {t.about.heroBadge}
                </span>
                <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
              </div>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light text-slate-900 mb-5 sm:mb-7 leading-[1.05] tracking-tight font-plus-jakarta">
                {t.about.heroTitlePre}{' '}
                <span className="font-extrabold" style={{ color: '#962228' }}>
                  {t.about.heroTitleHighlight}
                </span>
              </h1>
              <p className="text-slate-950 text-lg sm:text-xl lg:text-2xl leading-relaxed font-semibold mb-6 sm:mb-10 drop-shadow-sm">
                {t.about.heroSubtitle}
              </p>

              {/* Scroll down indicator */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-end justify-end text-slate-500 mt-6 sm:mt-10"
              >
                <span className="text-xs uppercase tracking-widest mb-2 sm:mb-3 font-outfit font-bold text-slate-600">
                  {t.about.scrollPrompt}
                </span>
                <div className="w-[2px] h-10 sm:h-12 bg-gradient-to-b from-[#962228] to-transparent" />
              </motion.div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Indo-German Laser Banner Bridge */}
      <HeroBridge />

      {/* Mission - Silverish Modern */}
      <section className="relative py-32 overflow-hidden">
        {/* Silverish gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #e8e8e8 0%, #d4d4d4 50%, #f0f0f0 100%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, margin: '-100px' }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-600">
                {t.about.missionBadge}
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl font-light text-gray-900 mb-8 leading-tight font-['Sora',sans-serif]">
              {t.about.missionTitlePre}{' '}
              <motion.span
                className="font-bold"
                style={{ color: '#962228' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t.about.missionTitleHighlight}
              </motion.span>{' '}
              {t.about.missionTitlePost}
            </h2>

            <div className="grid lg:grid-cols-1 gap-8 max-w-4xl">
              <motion.p
                className="text-lg text-gray-700 leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {t.about.missionP1}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values - Full Screen Sticky 3D Spinning Wheel */}
      <CoreValuesSection values={values} />

      {/* Tech Stack */}
      <section className="relative bg-white py-24 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateOnScroll direction="up" className="mb-14 text-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-[#962228] animate-pulse" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#962228] font-outfit">
                {t.about.techBadge}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight font-plus-jakarta">
              {t.about.techTitle}
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7"
              >
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#962228] mb-5 font-outfit">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((tech) => {
                    const Icon = tech.Icon
                    return (
                      <div
                        key={tech.name}
                        className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#962228]/40 hover:shadow-md transition-all duration-300"
                      >
                        <Icon size={16} style={{ color: tech.color }} className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-xs font-semibold text-slate-700 font-outfit whitespace-nowrap">
                          {tech.name}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership - Premium Dark Theme */}
      <section className="relative bg-[#111216] py-32 overflow-hidden">
        {/* Deep dark backdrop with subtle radial glow */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at top, #1a1c23 0%, #111216 100%)' }}
        />
        {/* Subtle grid pattern for texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateOnScroll direction="up" className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px]" style={{ backgroundColor: '#e0575f' }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
                {t.about.leadershipBadge}
              </span>
            </div>
            <motion.h2
              className="text-5xl sm:text-6xl font-light text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t.about.leadershipTitlePre}{' '}
              <motion.span
                className="font-bold text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(90deg, #962228 0%, #e0575f 100%)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t.about.leadershipTitleHighlight}
              </motion.span>
            </motion.h2>
          </AnimateOnScroll>

          <LeadershipWheel team={currentTeam} />
        </div>
      </section>

      <CTAStrip />
    </PageTransition>
  )
}