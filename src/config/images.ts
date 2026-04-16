export const IMAGES = {
  // Background Images
  backgrounds: {
    bimOffice: '/backgrounds/BIM_OFFICE_BG.png',
    hero: '/backgrounds/BIM_OFFICE_BG.png',
  },
  
  // Illustrations
  illustrations: {
    // Projects
    residential: '/illustrations/SITE_Residencial3_16x9.png',
    reformaCorporativa: '/illustrations/[Projetos]Reforma Corporativa.png',
    reformaFachada: '/illustrations/Reforma_Fachada.png',
    tecnologiaInfra: '/illustrations/SITE_Tecnologia_Infra.png',
    homeNight: '/illustrations/HomeNight.png',
    gestao2: '/illustrations/SITE_Gestão2.png',
    campoObras: '/illustrations/CampoObrasPagInicial.png',
    
    // Quick Services
    revisaoEletrica: '/illustrations/[Quick]Revisão_Elétrica.png',
    forroGesso: '/illustrations/[Quick]_Forro de Gesso e Drywall.png',
    vidrosEsquadrias: '/illustrations/[Quick]_Vidros e esquadrias.png',
    servicosAcabamento: '/illustrations/[Quick]_Serviços de acabamento.png',
    pinturaGeral: '/illustrations/{Quick]PinturaGeral.png',
    instalacoesHidro: '/illustrations/[Quick]Instalações Hidro.jpg',
    
    // Other
    secretaria: '/illustrations/Secretária.png',
    projects: '/illustrations/projects.svg',
  },
} as const;

// Helper function
export const getImage = (category: keyof typeof IMAGES, key: string): string => {
  const images = IMAGES[category];
  if (key in images) {
    return images[key as keyof typeof images];
  }
  return IMAGES.illustrations.projects; // fallback
};
