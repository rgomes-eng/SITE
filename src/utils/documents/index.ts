/**
 * Document paths and utilities
 * Centralized access to legal documents
 */

export const DOCUMENTS = {
  TERMS_AND_CONDITIONS: '/utils/documents/Termos e Condições.pdf',
  PRIVACY_POLICY: '/utils/documents/Política de Cookies.pdf',
  COOKIE_POLICY: '/utils/documents/Política de Cookies.pdf',
} as const

export const DOCUMENT_TITLES = {
  TERMS_AND_CONDITIONS: 'Termos e Condições - LGPD',
  PRIVACY_POLICY: 'Política de Privacidade e Proteção de Dados',
  COOKIE_POLICY: 'Política de Cookies',
} as const

export const getDocumentUrl = (document: keyof typeof DOCUMENTS): string => {
  return DOCUMENTS[document]
}

export const getDocumentTitle = (document: keyof typeof DOCUMENT_TITLES): string => {
  return DOCUMENT_TITLES[document]
}
