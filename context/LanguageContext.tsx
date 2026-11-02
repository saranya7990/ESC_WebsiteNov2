'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations, Language, TranslationData } from '@/lib/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationData
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'EN',
  setLanguage: () => {},
  t: translations.EN,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('EN')

  // Load saved preference on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('esc_language') as Language | null
      if (saved === 'EN' || saved === 'DE') {
        setLanguageState(saved)
        document.documentElement.lang = saved.toLowerCase()
      }
    } catch {
      // localStorage may fail in restricted/private contexts
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem('esc_language', lang)
      document.documentElement.lang = lang.toLowerCase()
    } catch {
      // ignore
    }
  }

  const currentTranslations = (translations[language] || translations.EN) as TranslationData

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: currentTranslations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
