export const CONTENT = {
  // Services content
  services: {
    construcao: {
      title: 'Construção',
      subtitle: 'Engenharia de excelência para edificações de todos os portes',
      description: 'Na RGomes Engenharia, oferecemos suporte completo em todas as etapas da construção da sua edificação comercial ou residencial. Desde o levantamento inicial das suas necessidades até a entrega final, nossa equipe acompanha cada fase com dedicação e expertise: concepção do projeto personalizado, elaboração de projetos arquitetônicos e complementares, aprovações em todos os órgãos competentes, execução da obra com gerenciamento profissional, controle de qualidade rigoroso, acompanhamento pós-obra e garantia estendida. Sua visão se torna realidade com o apoio de quem entende e executa com excelência.',
      image: 'residential',
      icon: 'FaBuilding',
      features: [
        'Edificação Residencial completa',
        'Condomínios Residenciais com aprovações legais',
        'Projetos estruturais e complementares',
        'Fundações e estrutura de alta qualidade',
        'Instalações elétricas e hidráulicas',
        'Acabamentos finais de excelência',
        'Acompanhamento técnico completo',
        'Conformidade com normas técnicas',
      ],
    },
    
    reformas: {
      title: 'Reformas',
      subtitle: 'Transformação de espaços com operação contínua',
      description: 'Expertise em reformas corporativas com zero downtime operacional e centros comerciais com operação ininterrupta. Utilizamos metodologias avançadas como Lean Construction e Phased Execution para garantir que seu negócio continue funcionando durante as intervenções.',
      image: 'reformaCorporativa',
      icon: 'FaHammer',
      features: [
        'Reformas corporativas sem paralisar operações',
        'Centros comerciais com operação contínua',
        'Planejamento detalhado com BIM 4D',
        'Execução noturna e horários off-peak',
        'Gestão de risco e planos de contingência',
        'Segurança e conforto durante obras',
        'Comunicação em tempo real',
        'Zero downtime garantido',
      ],
    },
    
    manutencoes: {
      title: 'Manutenções',
      subtitle: 'Soluções completas para preservação e valorização',
      description: 'Serviços especializados de manutenção predial por demanda ou contratual, adaptáveis para edifícios comerciais e residenciais. Oferecemos ciclo completo de manutenção com levantamento de necessidades, checklists personalizados e acompanhamento técnico contínuo.',
      image: 'reformaFachada',
      icon: 'FaTools',
      features: [
        'Manutenção por demanda ou contratual',
        'Levantamento técnico de necessidades',
        'Checklists personalizados por tipologia',
        'Vistoria técnica com equipamentos avançados',
        'Execução com mão de obra certificada',
        'Validação conjunta com cliente',
        'Monitoramento pós-serviço',
        'Fortalecimento de relacionamento',
      ],
    },
    
    tecnologia: {
      title: 'Soluções de Tecnologia',
      subtitle: 'Infraestrutura e automação para operações eficientes',
      description: 'Expertise em infraestrutura industrial, redes de computadores, sistemas de segurança e automação elétrica. Oferecemos soluções completas de tecnologia que podem ser executadas sem paralisar as operações corporativas, com SLA precisos e garantia de qualidade.',
      image: 'tecnologiaInfra',
      icon: 'FaLaptopCode',
      features: [
        'Infraestrutura de redes e servidores',
        'Sistemas de segurança CFTV e alarmes',
        'Automação de painéis elétricos',
        'Cabeamento estruturado',
        'Instalação de switches e roteadores',
        'Configuração e treinamento',
        'Acompanhamento pós-obra',
        'SLA precisos e garantia de qualidade',
      ],
    },
    
    'gestao-projetos': {
      title: 'Gestão de Projetos',
      subtitle: 'Planejamento e acompanhamento técnico especializado',
      description: 'Planejamento e acompanhamento técnico completo para projetos de engenharia civil.',
      image: 'gestao2',
      icon: 'FaProjectDiagram',
      features: [
        'Planejamento e cronograma',
        'Controle orçamentário',
        'Gestão de qualidade',
        'Segurança do trabalho',
        'Relatórios e documentação',
      ],
    },
    
    'quick-services': {
      title: 'Quick Service',
      subtitle: 'Serviços rápidos com SLA definido',
      description: 'Serviços rápidos e especializados com prazo garantido.',
      image: 'revisaoEletrica',
      icon: 'FaBolt',
      features: [],
    },
  },
  
  // Get service content
  getService: (slug: string) => {
    return CONTENT.services[slug as keyof typeof CONTENT.services];
  },
  
  // Get all services
  getAllServices: () => {
    return Object.entries(CONTENT.services).map(([slug, service]) => ({
      slug,
      ...service,
    }));
  },
} as const;
