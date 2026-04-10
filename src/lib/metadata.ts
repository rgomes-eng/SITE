/**
 * SEO and metadata configuration
 * Centralized metadata management for all pages
 */

import { Metadata } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.rgomesengenharia.com'
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'RGOMES Engenharia'
const DEFAULT_DESCRIPTION = 'Engenharia civil de excelência em Manaus. Construção, reformas, manutenção e projetos com qualidade e inovação.'

export const createMetadata = (options: {
  title?: string
  description?: string
  path?: string
  image?: string
  keywords?: string[]
}): Metadata => {
  const {
    title,
    description = DEFAULT_DESCRIPTION,
    path = '',
    image = '/images/og-image.jpg',
    keywords = ['engenharia civil', 'construção', 'reformas', 'manutenção', 'manaus', 'rgomes engenharia']
  } = options

  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const url = `${SITE_URL}${path}`
  const imageUrl = `${SITE_URL}${image}`

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    
    // Open Graph
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url,
      title: fullTitle,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title || SITE_NAME,
        },
      ],
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: '@rgomes_engenharia',
    },
    
    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Verification
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
    
    // Alternates
    alternates: {
      canonical: url,
      languages: {
        'pt-BR': url,
        'en': `${SITE_URL}/en${path}`,
      },
    },
    
    // Other
    other: {
      'theme-color': '#e8750a',
      'msapplication-TileColor': '#2a5ba8',
    },
  }
}

export const PAGE_METADATA = {
  HOME: createMetadata({
    title: 'Início',
    description: 'Engenharia civil de excelência em Manaus. Da concepção à entrega: construção, reformas, manutenção e gestão de projetos.',
    keywords: ['engenharia civil manaus', 'construção manaus', 'reformas manaus', 'rgomes engenharia'],
  }),
  
  ABOUT: createMetadata({
    title: 'Sobre Nós',
    description: 'Conheça a RGOMES Engenharia. Excelência técnica, integridade e parceria em todos os projetos de engenharia civil.',
    path: '/about',
    keywords: ['sobre rgomes engenharia', 'engenharia civil manaus', 'empresa engenharia'],
  }),
  
  PROJECTS: createMetadata({
    title: 'Projetos',
    description: 'Conheça nossos projetos de engenharia civil. Construções, reformas e infraestrutura com padrão de excelência.',
    path: '/projects',
    keywords: ['projetos engenharia', 'obras civis', 'construções manaus', 'portfolio engenharia'],
  }),
  
  CONTACT: createMetadata({
    title: 'Contato',
    description: 'Entre em contato com a RGOMES Engenharia. Orçamentos, consultorias e informações sobre nossos serviços.',
    path: '/contact',
    keywords: ['contato engenharia', 'orçamento obras', 'telefone rgomes engenharia'],
  }),
  
  SERVICES: createMetadata({
    title: 'Serviços',
    description: 'Serviços de engenharia civil: construção, reformas, manutenção, gestão de projetos e tecnologia.',
    path: '/servicos',
    keywords: ['serviços engenharia', 'construção civil', 'reforma predial', 'manutenção predial'],
  }),
  
  WORK_WITH_US: createMetadata({
    title: 'Trabalhe Conosco',
    description: 'Faça parte da equipe RGOMES Engenharia. Vagas e oportunidades na área de engenharia civil.',
    path: '/trabalhe-conosco',
    keywords: ['trabalhar engenharia', 'vagas engenharia', 'emprego manaus', 'rgomes engenharia'],
  }),
} as const
