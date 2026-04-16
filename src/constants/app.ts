// ============================================
// CONSTANTES DA APLICAÇÃO
// ============================================

export const APP = {
  NAME: 'RGOMES Engenharia',
  SHORT_NAME: 'RGOMES',
  DESCRIPTION: 'Engenharia civil de excelência, unindo tradição construtiva e inovação tecnológica',
  URL: process.env.NEXT_PUBLIC_APP_URL || 'https://rgomesengenharia.com',
  VERSION: '1.0.0',
} as const

export const CONTACT = {
  EMAIL: {
    PRIMARY: 'contato@rgomesengenharia.com',
    SECONDARY: 'engenhariargomes@gmail.com',
    PRIVACY: 'privacidade@rgomesengenharia.com',
    HR: 'rh@rgomesengenharia.com',
  },
  PHONE: {
    WHATSAPP: '5592981242509',
    FORMATTED: '(92) 98124-2509',
  },
  SOCIAL: {
    FACEBOOK: 'https://facebook.com/engenhariargomes',
    INSTAGRAM: 'https://instagram.com/rgomes.engenharia',
    WHATSAPP: 'https://wa.me/5592981242509',
  },
  ADDRESS: {
    CITY: 'Manaus',
    STATE: 'Amazonas',
    COUNTRY: 'Brasil',
    FULL: 'Manaus, Amazonas - Brasil',
  },
} as const

export const META = {
  AUTHOR: 'RGOMES Engenharia',
  KEYWORDS: [
    'engenharia civil',
    'construção',
    'reformas',
    'manutenção predial',
    'Manaus',
    'Amazonas',
  ],
  THEME_COLOR: '#1a365d',
} as const

export const LIMITS = {
  FILE: {
    MAX_SIZE_MB: 5,
    ALLOWED_TYPES: ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png'],
  },
  TEXT: {
    MAX_LENGTH: 2000,
    MIN_LENGTH: 10,
  },
} as const
