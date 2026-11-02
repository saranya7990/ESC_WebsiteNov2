'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Workflow,
  Server,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MousePointer,
  Zap,
  Lock,
  LineChart,
  FileText,
  Smartphone,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function ServicesPreview() {
  const { language, t } = useLanguage()
  const stageRef = useRef<HTMLDivElement>(null)
  const [rotationAngle, setRotationAngle] = useState(0)
  const targetAngleRef = useRef(0)
  const currentAngleRef = useRef(0)
  const isHoveredRef = useRef(false)
  const touchStartY = useRef<number | null>(null)
  const animFrameId = useRef<number | null>(null)

  const serviceItems = [
    {
      id: '01',
      badge: t.home.servicesPreview.card1Badge,
      icon: Server,
      category: t.home.servicesPreview.card1Category,
      title: t.home.servicesPreview.card1Title,
      description: t.home.servicesPreview.card1Desc,
      tags: t.home.servicesPreview.card1Tags,
      href: '/services',
    },
    {
      id: '02',
      badge: t.home.servicesPreview.card2Badge,
      icon: Workflow,
      category: t.home.servicesPreview.card2Category,
      title: t.home.servicesPreview.card2Title,
      description: t.home.servicesPreview.card2Desc,
      tags: t.home.servicesPreview.card2Tags,
      href: '/services',
    },
    {
      id: '03',
      badge: t.home.servicesPreview.card3Badge,
      icon: FileText,
      category: t.home.servicesPreview.card3Category,
      title: t.home.servicesPreview.card3Title,
      description: t.home.servicesPreview.card3Desc,
      tags: t.home.servicesPreview.card3Tags,
      href: '/services',
    },
    {
      id: '04',
      badge: t.home.servicesPreview.card4Badge,
      icon: LineChart,
      category: t.home.servicesPreview.card4Category,
      title: t.home.servicesPreview.card4Title,
      description: t.home.servicesPreview.card4Desc,
      tags: t.home.servicesPreview.card4Tags,
      href: '/services',
    },
    {
      id: '05',
      badge: t.home.servicesPreview.card5Badge,
      icon: Smartphone,
      category: t.home.servicesPreview.card5Category,
      title: t.home.servicesPreview.card5Title,
      description: t.home.servicesPreview.card5Desc,
      tags: t.home.servicesPreview.card5Tags,
      href: '/services',
    },
  ]

  const ringCards = serviceItems

  // Smooth animation frame loop for physics momentum interpolation and auto-rotation
  useEffect(() => {
    const updatePhysics = () => {
      // Auto-rotate slowly when not interacted with
      if (!isHoveredRef.current && touchStartY.current === null) {
        targetAngleRef.current -= 0.15
      }

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

  // Wheel listener to hijack scroll and spin the deck while hovered
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const handleWheel = (e: WheelEvent) => {
      if (!isHoveredRef.current) return
      e.preventDefault()
      e.stopPropagation()
      targetAngleRef.current += e.deltaY * 0.12 // Sensitivity multiplier
    }

    stage.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      stage.removeEventListener('wheel', handleWheel)
    }
  }, [])

  // Touch handlers for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return
    const diffY = touchStartY.current - e.touches[0].clientY
    targetAngleRef.current += diffY * 0.3
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = () => {
    touchStartY.current = null
  }

  const numCards = ringCards.length

  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden border-y border-[#E5E7EB]">

      <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 w-full">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 sm:mb-8 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            {/* Section Tag Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F1F3F5] border border-[#E5E7EB] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#861F2B] animate-pulse" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#861F2B] font-outfit">
                {language === 'DE' ? 'Kompetenzen & Portfolio' : 'Capabilities & Expertise'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#252B33] leading-[1.15] tracking-tight font-plus-jakarta">
              {t.home.servicesPreview.headingPre}{' '}
              <span className="text-[#861F2B]">
                {t.home.servicesPreview.headingHighlight}
              </span>{' '}
              {t.home.servicesPreview.headingPost}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6B7280] font-normal max-w-2xl leading-relaxed">
              {t.home.servicesPreview.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            {/* Scroll Hint Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#E5E7EB] text-xs font-medium text-[#6B7280] font-outfit">
              <MousePointer className="w-3.5 h-3.5 text-[#861F2B] animate-bounce" />
              <span>{language === 'DE' ? 'Karten antippen oder drehen' : 'Tap cards or drag to spin'}</span>
            </div>

            <Link
              href="/services"
              className="group inline-flex items-center gap-3 px-7 py-3.5 text-sm font-semibold text-white bg-[#861F2B] hover:bg-[#6E1923] rounded-xl shadow-sm hover:shadow-md transition-all duration-300 font-outfit"
            >
              <span>{language === 'DE' ? 'Alle Leistungen entdecken' : 'Explore All Capabilities'}</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* 3D TILTED OVAL RING STAGE CONTAINER */}
        <div
          ref={stageRef}
          onMouseEnter={() => {
            isHoveredRef.current = true
          }}
          onMouseLeave={() => {
            isHoveredRef.current = false
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full h-[620px] sm:h-[680px] lg:h-[720px] flex items-center justify-center mt-10 sm:mt-14 mb-6 overflow-visible select-none cursor-grab active:cursor-grabbing"
          style={{
            perspective: '1400px',
            perspectiveOrigin: '50% 55%',
          }}
        >
          {/* Tilted Ring Coordinate Plane */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateX(22deg) rotateZ(-4deg)',
            }}
          >
            {ringCards.map((service, index) => {
              const IconComponent = service.icon

              // Calculate angle position around the card 360 degree ring
              const baseAngle = (360 / numCards) * index
              const currentCardAngle = baseAngle + rotationAngle
              const rad = (currentCardAngle * Math.PI) / 180

              // Tuned radii parameters
              const rx = 390
              const ry = 140

              // Compute 3D Cartesian coordinates on tilted ellipse
              const x = Math.sin(rad) * rx
              const z = Math.cos(rad) * ry
              const y = -Math.cos(rad) * 35

              // Normalize depth metrics
              const depthRatio = (z + ry) / (2 * ry)
              const isFront = depthRatio > 0.72

              // Dynamic scale, opacity, and layering
              const scale = 0.72 + depthRatio * 0.35
              const opacity = 0.55 + depthRatio * 0.45
              const zIndex = Math.round((z + ry) * 10)

              return (
                <div
                  key={`${service.id}-${index}`}
                  suppressHydrationWarning
                  onClick={() => {
                    // Click card to rotate directly to front center
                    const targetCardAngle = -baseAngle
                    targetAngleRef.current = targetCardAngle
                  }}
                  className="absolute w-[270px] sm:w-[310px] transition-transform duration-75 ease-out"
                  style={{
                    transform: `translate3d(${x}px, ${y}px, ${z}px) scale(${scale}) rotateX(-15deg)`,
                    opacity,
                    zIndex,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* CLEAN WHITE CARD */}
                  <div
                    className={`relative w-full rounded-3xl p-6 sm:p-7 transition-all duration-300 overflow-hidden bg-white border ${
                      isFront
                        ? 'border-[#E5E7EB] shadow-[0_20px_45px_rgba(37,43,51,0.12)]'
                        : 'border-[#E5E7EB] shadow-[0_8px_24px_rgba(37,43,51,0.06)] hover:border-[#6B7280]/30'
                    }`}
                  >
                    {/* Card Inner Layout with Edge Padding */}
                    <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
                      <div>
                        {/* Header: Icon & Capability Status Badge */}
                        <div className="flex items-center justify-between mb-4">
                          {/* Icon Badge */}
                          <div
                            className={`p-3 rounded-2xl transition-all duration-300 ${
                              isFront
                                ? 'bg-[#861F2B] text-white'
                                : 'bg-[#F1F3F5] border border-[#E5E7EB] text-[#861F2B]'
                            }`}
                          >
                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>

                          {/* CAPABILITY STATUS BADGE */}
                          <div
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase border bg-[#F1F3F5] border-[#E5E7EB] ${
                              isFront ? 'text-[#861F2B]' : 'text-[#6B7280]'
                            }`}
                          >
                            <Zap className="w-3 h-3 text-[#861F2B]" />
                            <span>{service.badge}</span>
                          </div>
                        </div>

                        {/* Category Tag */}
                        <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[#861F2B] mb-1 block font-outfit">
                          {service.category}
                        </span>

                        {/* SERVICE TITLE */}
                        <h3 className="text-base sm:text-lg font-bold text-[#252B33] mb-2 tracking-tight leading-snug font-plus-jakarta line-clamp-2">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-[#6B7280] font-normal leading-relaxed mb-3 line-clamp-3">
                          {service.description}
                        </p>
                      </div>

                      {/* Footer Tags & Discover Button */}
                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-3.5 pt-3.5 border-t border-[#E5E7EB]">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-medium text-[#252B33] bg-[#F1F3F5] border border-[#E5E7EB] rounded-full"
                            >
                              <CheckCircle2 className="w-3 h-3 text-[#861F2B]" />
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={service.href}
                          onClick={(e) => {
                            if (!isFront) {
                              e.preventDefault()
                              targetAngleRef.current = -baseAngle
                            }
                          }}
                          className={`group/btn inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 font-outfit ${
                            isFront
                              ? 'text-white bg-[#861F2B] hover:bg-[#6E1923] shadow-sm'
                              : 'text-[#252B33] hover:text-[#861F2B] bg-white border border-[#E5E7EB] hover:border-[#861F2B]/40'
                          }`}
                        >
                          <span>{language === 'DE' ? 'Leistung ansehen' : 'Discover Capability'}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-current group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}