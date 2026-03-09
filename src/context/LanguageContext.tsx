'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

type Language = 'pt' | 'en'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const stored = window.localStorage.getItem(
      'rgomes-language'
    ) as Language | null

    if (stored === 'pt' || stored === 'en') {
      setLanguageState(stored)
      return
    }

    const browserLang =
      typeof navigator !== 'undefined' &&
      navigator.language &&
      navigator.language.toLowerCase().startsWith('en')
        ? 'en'
        : 'pt'

    setLanguageState(browserLang)
  }, [])

  const setLanguage = (value: Language) => {
    setLanguageState(value)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('rgomes-language', value)
    }
  }

  const toggleLanguage = () => {
    setLanguageState((prev: 'pt' | 'en') => (prev === 'pt' ? 'en' : 'pt'))
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
      }}
    >
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

