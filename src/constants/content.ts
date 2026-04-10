/**
 * Centralized content constants to avoid hardcoded text
 * All text content should be managed here
 */

export const CONTENT = {
  // Navigation
  NAV: {
    pt: {
      HOME: 'Início',
      ABOUT: 'Sobre Nós',
      SERVICES: 'Serviços',
      PROJECTS: 'Projetos',
      WORK_WITH_US: 'Trabalhe Conosco',
      CONTACT: 'Contato',
    },
    en: {
      HOME: 'Home',
      ABOUT: 'About Us',
      SERVICES: 'Services',
      PROJECTS: 'Projects',
      WORK_WITH_US: 'Work with Us',
      CONTACT: 'Contact',
    },
  },

  // Hero Section
  HERO: {
    pt: {
      EYEBROW: 'Engenharia Civil de Excelência em Manaus',
      TITLE_MAIN: 'Construímos o futuro com',
      TITLE_EMPHASIS: 'engenharia de precisão',
      DESCRIPTION: 'Da concepção à entrega: construção, reformas, manutenção, gestão e execução de projetos com qualidade, previsibilidade e alto padrão de execução.',
      PRIMARY_CTA: 'Solicitar orçamento',
      SECONDARY_CTA: 'Ver portfólio',
    },
    en: {
      EYEBROW: 'Civil Engineering Excellence in Manaus',
      TITLE_MAIN: 'We build the future with',
      TITLE_EMPHASIS: 'precision engineering',
      DESCRIPTION: 'From concept to delivery: construction, renovations, maintenance, project management and execution with quality, predictability and high standard of execution.',
      PRIMARY_CTA: 'Request a quote',
      SECONDARY_CTA: 'View portfolio',
    },
  },

  // Services
  SERVICES: {
    pt: [
      { slug: 'construcao', title: 'Construção', description: 'Obras civis completas com padrão de excelência.', icon: 'FaHammer' },
      { slug: 'reformas', title: 'Reformas', description: 'Modernização e adequação de espaços existentes.', icon: 'FaBrush' },
      { slug: 'manutencoes', title: 'Manutenções', description: 'Manutenção preventiva e corretiva predial.', icon: 'FaTools' },
      { slug: 'gestao-projetos', title: 'Gestão de Projetos', description: 'Coordenação completa de obras e projetos.', icon: 'FaProjectDiagram' },
      { slug: 'tecnologia', title: 'Tecnologia', description: 'Infraestrutura de redes, CFTV, automação e cabeamento estruturado.', icon: 'FaLaptopCode' },
    ],
    en: [
      { slug: 'construcao', title: 'Construction', description: 'Complete civil works with excellence standard.', icon: 'FaHammer' },
      { slug: 'reformas', title: 'Renovation', description: 'Modernization and adaptation of existing spaces.', icon: 'FaBrush' },
      { slug: 'manutencoes', title: 'Maintenance', description: 'Preventive and corrective building maintenance.', icon: 'FaTools' },
      { slug: 'gestao-projetos', title: 'Project Management', description: 'Complete coordination of works and projects.', icon: 'FaProjectDiagram' },
      { slug: 'tecnologia', title: 'Technology', description: 'Network infrastructure, CCTV, automation and structured cabling.', icon: 'FaLaptopCode' },
    ],
  },

  // About Page
  ABOUT: {
    pt: {
      HEADING: 'Quem Somos',
      HERO_PARAGRAPH: 'A <span class="text-primary font-bold">RGOMES</span> <span class="text-white font-bold">Engenharia</span> é uma empresa dedicada à excelência em engenharia civil, especializada em obras, reformas e manutenções prediais com foco em soluções integradas e inovadoras. Com uma abordagem técnica rigorosa, combinamos expertise em projetos complexos, gestão de facilities e automação para entregar resultados que superam expectativas. Nosso compromisso é transformar desafios em oportunidades, garantindo qualidade superior, prazos rigorosos e parcerias duradouras baseadas em confiança e transparência.',
      VISION_MISSION_HEADING: 'Visão e Missão',
      VISION: 'Ser referência em engenharia pela confiança, excelência nas entregas e soluções inteligentes para diversos segmentos.',
      MISSION: 'Entregar obras civis inovadoras e de alta qualidade, com foco em eficiência e parcerias sólidas em Manaus e região.',
      VALUES_HEADING: 'Valores',
      DIFFERENTIALS_HEADING: 'Nossos Diferenciais',
    },
    en: {
      HEADING: 'About Us',
      HERO_PARAGRAPH: '<span class="text-primary font-bold">RGOMES</span> <span class="text-white font-bold">Engineering</span> is a company dedicated to excellence in civil engineering, specializing in construction, renovations and building maintenance with a focus on integrated and innovative solutions. With a rigorous technical approach, we combine expertise in complex projects, facilities management and automation to deliver results that exceed expectations. Our commitment is to transform challenges into opportunities, ensuring superior quality, rigorous deadlines and lasting partnerships based on trust and transparency.',
      VISION_MISSION_HEADING: 'Vision and Mission',
      VISION: 'To be a reference in engineering for trust, excellence in deliveries and intelligent solutions for different segments.',
      MISSION: 'To deliver innovative and high-quality civil works, with a focus on efficiency and solid partnerships in Manaus and region.',
      VALUES_HEADING: 'Values',
      DIFFERENTIALS_HEADING: 'Our Differentials',
    },
  },

  // Contact
  CONTACT: {
    pt: {
      HEADING: 'Entre em Contato',
      INTRO: 'Preencha o formulário abaixo ou utilize nossos canais de atendimento. Nossa equipe retornará o mais breve possível.',
      OTHER_CHANNELS: 'Outros Canais',
      EMAIL_LABEL: 'E-mail',
      LOCATION_LABEL: 'Manaus, Amazonas',
      SECTION_LABEL: 'Contato',
      TITLE: 'Vamos tirar seu projeto do papel',
      DESCRIPTION: 'Envie sua mensagem e nós retornaremos com um direcionamento claro para o próximo passo.',
    },
    en: {
      HEADING: 'Contact Us',
      INTRO: 'Fill out the form below or use our service channels. Our team will return as soon as possible.',
      OTHER_CHANNELS: 'Other Channels',
      EMAIL_LABEL: 'Email',
      LOCATION_LABEL: 'Manaus, Amazonas',
      SECTION_LABEL: 'Contact',
      TITLE: "Let's bring your project to life",
      DESCRIPTION: 'Send your message and we will return with clear guidance for the next step.',
    },
  },

  // Projects
  PROJECTS: {
    pt: {
      HEADING: 'Nossos Projetos',
      DESCRIPTION: 'Conheça alguns dos principais trabalhos que realizamos em engenharia civil.',
      LABEL: 'Portfólio',
      TITLE: 'Projetos em destaque',
      SUBTITLE: 'Seleção de entregas que mostram qualidade, organização e padrão de execução.',
      VIEW_ALL: 'Ver todos',
    },
    en: {
      HEADING: 'Our Projects',
      DESCRIPTION: 'Meet some of the main works we have carried out in civil engineering.',
      LABEL: 'Portfolio',
      TITLE: 'Featured Projects',
      SUBTITLE: 'Selection of deliveries that show quality, organization and execution standard.',
      VIEW_ALL: 'View all',
    },
  },
} as const

export const VALUES = {
  pt: [
    { title: 'Excelência Técnica', description: 'Priorizamos precisão e inovação em todos os projetos.', icon: 'FaAward' },
    { title: 'Integridade', description: 'Agimos com ética, transparência e responsabilidade em cada etapa.', icon: 'FaShieldAlt' },
    { title: 'Parceria', description: 'Construímos relacionamentos sólidos, focados no sucesso mútuo.', icon: 'FaHandshake' },
    { title: 'Sustentabilidade', description: 'Integramos práticas responsáveis para um impacto positivo duradouro.', icon: 'FaRecycle' },
    { title: 'Melhoria Contínua', description: 'Estamos sempre evoluindo processos, métodos e entregas.', icon: 'FaChartLine' },
    { title: 'Gestão de Riscos Proativa', description: 'Identificamos e mitigamos vulnerabilidades antecipadamente, assegurando prazos, qualidade e segurança inigualáveis.', icon: 'FaCheckCircle' },
  ],
  en: [
    { title: 'Technical Excellence', description: 'We prioritize precision and innovation in all projects.', icon: 'FaAward' },
    { title: 'Integrity', description: 'We act with ethics, transparency and responsibility in every step.', icon: 'FaShieldAlt' },
    { title: 'Partnership', description: 'We build solid relationships focused on mutual success.', icon: 'FaHandshake' },
    { title: 'Sustainability', description: 'We integrate responsible practices for lasting positive impact.', icon: 'FaRecycle' },
    { title: 'Continuous Improvement', description: 'We are always evolving processes, methods and deliveries.', icon: 'FaChartLine' },
    { title: 'Proactive Risk Management', description: 'We identify and mitigate vulnerabilities in advance, ensuring unparalleled deadlines, quality and safety.', icon: 'FaCheckCircle' },
  ],
} as const

export const DIFFERENTIALS = {
  pt: [
    'Abordagem técnica orientada à solução',
    'Compromisso com a qualidade em cada etapa',
    'Confiabilidade que gera segurança',
    'Inovação com aplicação prática',
    'Atendimento personalizado',
    'Foco no cliente',
  ],
  en: [
    'Solution-oriented technical approach',
    'Commitment to quality at every step',
    'Reliability that generates security',
    'Innovation with practical application',
    'Personalized service',
    'Customer focus',
  ],
} as const
