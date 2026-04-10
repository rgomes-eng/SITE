/**
 * Custom hook for managing bilingual content
 * Simplifies content access and reduces verbosity
 */

import { useLanguage } from '@/context/LanguageContext'
import { CONTENT, VALUES, DIFFERENTIALS } from '@/constants/content'

export const useContent = () => {
  const { language } = useLanguage()
  
  const getContent = (section: keyof typeof CONTENT) => CONTENT[section][language]
  const getValues = () => VALUES[language]
  const getDifferentials = () => DIFFERENTIALS[language]
  
  return {
    getContent,
    getValues,
    getDifferentials,
    language,
    isPt: language === 'pt',
  }
}
