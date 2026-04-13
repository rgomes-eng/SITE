/**
 * Configuration file for all project paths and image directories
 * Centralized path management to avoid hardcoded values
 */

export const PATHS = {
  // App routes
  HOME: '/',
  ABOUT: '/sobre',
  CONTACT: '/contato',
  PROJECTS: '/projetos',
  SERVICES: '/servicos',
  WORK_WITH_US: '/trabalhe-conosco',
  QUICK_SERVICES: '/servicos/quick-services',
  
  // Dynamic routes
  PROJECT_DETAIL: (slug: string) => `/projetos/${slug}`,
  SERVICE_DETAIL: (slug: string) => `/servicos/${slug}`,
} as const

export const IMAGE_PATHS = {
  // Background images
  BACKGROUNDS: {
    BIM_OFFICE: '/backgrounds/BIM_OFFICE_BG.png',
    HERO: '/backgrounds/hero-bg.jpg',
    CONTACT: '/backgrounds/contact-bg.jpg',
  },
  
  // Illustrations
  ILLUSTRATIONS: {
    CAMPO_OBRAS: '/illustrations/CampoObrasPagInicial.png',
    SECRETARIA: '/illustrations/Secretária.png',
    OBRA_GRANDE: '/illustrations/SITE_OBRAGRANDE2.png',
    RESIDENTIAL: '/illustrations/SITE_Residencial3_16x9.png',
    REFORMA_CORPORATIVA: '/illustrations/[Projetos]Reforma Corporativa.png',
    TECNOLOGIA_INFRA: '/illustrations/SITE_Tecnologia_Infra.png',
    REFORMA_FACHADA: '/illustrations/Reforma_Fachada.png',
    MANUTENCAO_SHOPPING: '/illustrations/SITE_ManutençãoShopping.png',
    HOME_NIGHT: '/illustrations/HomeNight.png',
    PROJECTS_DEFAULT: '/illustrations/projects.svg',
  },
  
  // Icons and assets
  ICONS: {
    LOGO: '/icons/logo.svg',
    FAVICON: '/icons/favicon.ico',
  },
} as const

export const SOCIAL_LINKS = {
  WHATSAPP: 'https://wa.me/5592981242509',
  INSTAGRAM: 'https://instagram.com/rgomes.engenharia',
  FACEBOOK: 'https://facebook.com/engenhariargomes',
  INSTAGRAM_ENG: 'https://instagram.com/engenharia.rgomes',
} as const

export const CONTACT_INFO = {
  PHONE: '(92) 98124-2509',
  PHONE_FULL: '+5592981242509',
  EMAIL_1: 'contato@rgomesengenharia.com',
  EMAIL_2: 'engenhariargomes@gmail.com',
  LOCATION: 'Manaus, Amazonas',
} as const

export const API_ENDPOINTS = {
  CONTACTS: '/api/contacts',
  WORK_WITH_US: '/api/work-with-us',
} as const
