import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { FaCheckCircle, FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const projectContent: Record<string, { 
  title: string
  subtitle: string
  description: string
  image_url: string
  features: string[]
  services: string[]
  differentials: string[]
  gallery: string[]
  details: string[]
}> = {
  'edificacao-residencial': {
    title: 'Edificação Residencial',
    subtitle: 'Construções residenciais com qualidade e conforto',
    description: 'Desenvolvemos projetos residenciais completos, desde casas unifamiliares até condomínios de alto padrão. Nossa equipe garante qualidade em cada etapa, desde o projeto arquitetônico até a entrega final, com atenção especial aos detalhes e às necessidades dos moradores.',
    image_url: '/illustrations/SITE_Residencial3_16x9.png',
    features: [
      'Projetos arquitetônicos personalizados',
      'Construção de casas e sobrados',
      'Condomínios residenciais',
      'Acabamentos de alto padrão',
      'Sustentabilidade e eficiência energética',
      'Aprovações legais e alvarás'
    ],
    services: [
      'Projeto arquitetônico completo com visualização 3D',
      'Construção de fundações e estruturas de concreto',
      'Instalações elétricas, hidráulicas e de gás',
      'Revestimentos internos e externos de alta qualidade',
      'Paisagismo e design de áreas externas',
      'Sistemas de segurança, automação e climatização',
      'Gestão completa de documentação e aprovações legais'
    ],
    differentials: [
      'Equipe multidisciplinar com mais de 10 anos de experiência',
      'Tecnologia BIM para gestão precisa de projetos',
      'Materiais de alta qualidade e fornecedores certificados',
      'Acompanhamento transparente com reportings semanais',
      'Garantia estendida de 5 anos em estruturas',
      'Sustentabilidade com foco em eficiência energética',
      'Atendimento personalizado e suporte pós-obra'
    ],
    gallery: [
      '/illustrations/SITE_Residencial3_16x9.png',
      '/illustrations/SITE_Residencial4.png',
      '/illustrations/Campo_de_Obra.png'
    ],
    details: [
      'Construção de zero com fundações e estrutura',
      'Instalações elétricas e hidráulicas completas',
      'Revestimentos e acabamentos finos',
      'Paisagismo e áreas externas',
      'Sistemas de segurança e automação'
    ]
  },
  'reforma-corporativa': {
    title: 'Reforma Corporativa',
    subtitle: 'Transformação de espaços comerciais e industriais',
    description: 'Especializados em reformas corporativas, transformamos espaços existentes em ambientes modernos e funcionais. Nossos projetos otimizam o uso do espaço, melhoram a produtividade e valorizam o imóvel, com mínimo impacto nas operações do cliente.',
    image_url: '/illustrations/[Projetos]Reforma Corporativa.png',
    features: [
      'Reformas de escritórios e salas comerciais',
      'Adaptação de espaços industriais',
      'Modernização de fachadas',
      'Otimização de layout',
      'Acessibilidade e normas de segurança',
      'Trabalho em horários flexíveis'
    ],
    services: [
      'Levantamento técnico e análise de espaços existentes',
      'Projeto de arquitetura e design de interiores corporativo',
      'Demolições controladas e preparação de áreas',
      'Reforços estruturais e adaptações de carga',
      'Instalações elétricas de alta potência e data center',
      'Redes estruturadas, sistemas de telecomunicações',
      'Climatização, ventilação e sistemas de exaustão',
      'Acabamentos corporativos de alto padrão',
      'Modernização de fachadas e identidade visual'
    ],
    differentials: [
      'Equipe especializada em projetos corporativos',
      'Planejamento detalhado para não parar operações',
      'Execução em horários flexíveis (noite/finde)',
      'Tecnologia BIM para visualização antes da execução',
      'Gestão de resíduos e sustentabilidade ambiental',
      'Conformidade total com normas de segurança NR',
      'Garantia de qualidade e assistência técnica',
      'Valorização imediata do imóvel após reforma'
    ],
    gallery: [
      '/illustrations/[Projetos]Reforma Corporativa.png',
      '/illustrations/MeetingRoom.png',
      '/illustrations/BIM_Office.png'
    ],
    details: [
      'Demolições controladas e preparação',
      'Reforços estruturais quando necessário',
      'Novas instalações elétricas e de dados',
      'Climatização e ventilação',
      'Acabamentos corporativos de qualidade'
    ]
  },
  'infraestrutura-industrial': {
    title: 'Infraestrutura Industrial',
    subtitle: 'Obras civis para indústria e logística',
    description: 'Executamos obras de infraestrutura industrial com foco em segurança, durabilidade e eficiência operacional. Galpões industriais, plataformas de carga, vias internas e estruturas de suporte são construídos seguindo as mais rigorosas normas técnicas.',
    image_url: '/illustrations/SITE_Tecnologia_Infra.png',
    features: [
      'Galpões industriais e armazéns',
      'Plataformas de carga e descarga',
      'Vias internas e estacionamentos',
      'Estruturas de suporte e fundações',
      'Instalações industriais especializadas',
      'Conformidade com normas de segurança'
    ],
    services: [
      'Terraplanagem e preparação de terreno industrial',
      'Construção de galpões metálicos e de concreto',
      'Plataformas de carga e descarga com sistemas de segurança',
      'Vias internas pavimentadas e estacionamentos industriais',
      'Estruturas de suporte para equipamentos pesados',
      'Fundações profundas e superficiais especializadas',
      'Pisos industriais de alta resistência e antiderrapantes',
      'Sistemas de drenagem, esgoto e utilidades industriais',
      'Instalações elétricas de alta tensão e iluminação'
    ],
    differentials: [
      'Engenharia especializada em projetos industriais',
      'Conhecimento profundo de normas NR e ABNT',
      'Equipe certificada para trabalhos em altura e espaços confinados',
      'Planejamento detalhado de cronograma e recursos',
      'Uso de tecnologia BIM para coordenação de disciplinas',
      'Materiais e métodos de construção de alta durabilidade',
      'Segurança rigorosa com zero acidentes graves',
      'Capacidade de execução em grandes áreas e volumes'
    ],
    gallery: [
      '/illustrations/SITE_Tecnologia_Infra.png',
      '/illustrations/BIM_CPU.png',
      '/illustrations/Obra.png'
    ],
    details: [
      'Terraplanagem e preparação do terreno',
      'Fundações profundas e superficiais',
      'Estruturas metálicas e de concreto',
      'Pisos industriais de alta resistência',
      'Sistemas de drenagem e utilidades'
    ]
  },
  'manutencao-predial': {
    title: 'Manutenção Predial',
    subtitle: 'Conservação e manutenção de edificações',
    description: 'Programas completos de manutenção predial para garantir a durabilidade e segurança das edificações. Oferecemos serviços de conservação, reparos e modernização, com equipes especializadas e materiais de qualidade.',
    image_url: '/illustrations/SITE_Manutenção.png',
    features: [
      'Manutenção preventiva e corretiva',
      'Reparos estruturais',
      'Conservação de fachadas',
      'Manutenção hidráulica e elétrica',
      'Pintura e acabamentos',
      'Limpeza e conservação'
    ],
    services: [
      'Manutenção preventiva programada com inspeções periódicas',
      'Reparos estruturais e de alvenaria',
      'Conservação e limpeza de fachadas e áreas externas',
      'Manutenção hidráulica (tubulações, bombas, reservatórios)',
      'Manutenção elétrica (quadros, iluminação, aterramento)',
      'Pintura interna e externa com materiais de qualidade',
      'Substituição de revestimentos e pisos',
      'Serviços de vidraçaria e carpintaria',
      'Limpeza e conservação de áreas comuns'
    ],
    differentials: [
      'Equipe técnica própria e treinada continuamente',
      'Serviço de emergência 24/7 para reparos urgentes',
      'Contratos de manutenção preventiva com descontos',
      'Uso de materiais de alta durabilidade e eficiência',
      'Sistema de gestão digital de chamados e histórico',
      'Laudos técnicos para conformidade legal',
      'Atendimento personalizado e comunicação transparente',
      'Garantia em todos os serviços executados'
    ],
    gallery: [
      '/illustrations/SITE_Manutenção.png',
      '/illustrations/SITE_ManutençãoShopping.png',
      '/illustrations/Secretária.png'
    ],
    details: [
      'Inspeções periódicas e laudos técnicos',
      'Reparos emergenciais 24/7',
      'Modernização de sistemas',
      'Substituição de revestimentos',
      'Conservação de áreas comuns'
    ]
  },
  'condominio-residencial': {
    title: 'Condomínio Residencial',
    subtitle: 'Complexos residenciais completos e modernos',
    description: 'Desenvolvemos condomínios residenciais completos, com infraestrutura moderna e áreas comuns bem planejadas. Nossos projetos priorizam a qualidade de vida dos moradores, segurança e valorização do patrimônio.',
    image_url: '/illustrations/SITE_OBRAGRANDE2.png',
    features: [
      'Projetos arquitetônicos integrados',
      'Infraestrutura completa de utilidades',
      'Áreas comuns e lazer',
      'Sistema de segurança integrado',
      'Gestão sustentável de resíduos',
      'Acessibilidade total'
    ],
    services: [
      'Projeto arquitetônico e urbanístico do condomínio',
      'Construção de unidades habitacionais personalizadas',
      'Infraestrutura de água, esgoto e energia elétrica',
      'Pavimentação de vias internas e estacionamentos',
      'Áreas comuns: salão de festas, academia, playground',
      'Sistemas de segurança: CFTV, controle de acesso, alarmes',
      'Paisagismo e áreas verdes comuns',
      'Gestão de documentação e aprovações em órgãos públicos'
    ],
    differentials: [
      'Experiência em condomínios de pequeno e grande porte',
      'Planejamento integrado de áreas comuns e privativas',
      'Foco em sustentabilidade e eficiência energética',
      'Equipe especializada em obras simultâneas',
      'Tecnologia BIM para visualização 3D do empreendimento',
      'Acompanhamento rigoroso de cronograma e qualidade',
      'Pós-entrega com suporte à administração do condomínio'
    ],
    gallery: [
      '/illustrations/SITE_OBRAGRANDE2.png',
      '/illustrations/SITE_Residencial3_16x9.png',
      '/illustrations/HomeNight.png'
    ],
    details: [
      'Planejamento urbanístico integrado',
      'Construção simultânea de múltiplas unidades',
      'Infraestrutura de utilidades centralizada',
      'Áreas comuns equipadas e decoradas',
      'Sistemas de segurança e automação'
    ]
  },
  'centro-comercial': {
    title: 'Centro Comercial',
    subtitle: 'Ampliação e modernização de espaços comerciais',
    description: 'Especialistas em projetos comerciais, realizamos ampliações, reformas e adequações de shoppings, lojas e galpões comerciais. Nossas obras minimizam impactos na operação do negócio e entregam resultados que valorizam o imóvel.',
    image_url: '/illustrations/SITE_ManutençãoShopping.png',
    features: [
      'Ampliação de áreas comerciais',
      'Reformas em áreas operacionais',
      'Modernização de fachadas',
      'Adequação a normas técnicas',
      'Obras com mínima parada operacional',
      'Gestão de cronograma rigorosa'
    ],
    services: [
      'Levantamento técnico e diagnóstico do espaço existente',
      'Projeto de ampliação de área construída',
      'Reformas de lojas, quiosques e âncoras',
      'Modernização de fachadas e vitrines',
      'Reformas de praças de alimentação e áreas comuns',
      'Adequação de acessibilidade e normas técnicas',
      'Instalações elétricas e de climatização comerciais',
      'Pisos e revestimentos de alta resistência',
      'Sinalização e comunicação visual integrada'
    ],
    differentials: [
      'Experiência em obras em shoppings e centros comerciais',
      'Execução em horários noturnos e de menor movimento',
      'Planejamento para não interromper operações',
      'Equipe treinada para trabalhar em áreas abertas ao público',
      'Coordenação com administradoras de shoppings',
      'Materiais de alta durabilidade para área de grande fluxo',
      'Entrega rápida sem comprometer a qualidade'
    ],
    gallery: [
      '/illustrations/SITE_ManutençãoShopping.png',
      '/illustrations/[Projetos]Reforma Corporativa.png',
      '/illustrations/MeetingRoom.png'
    ],
    details: [
      'Diagnóstico técnico completo do espaço',
      'Projeto de ampliação ou reforma',
      'Execução em horários especiais',
      'Instalações elétricas e climatização',
      'Acabamentos de alta resistência'
    ]
  }
}

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projectContent[slug]

  if (!project) {
    return {
      title: 'Projeto não encontrado',
      description: 'O projeto solicitado não foi encontrado.'
    }
  }

  return {
    title: `${project.title} | RGOMES Engenharia`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image_url],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projectContent[slug]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background-dark pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8"
        >
          <FaArrowLeft size={14} />
          <span>Voltar para Projetos</span>
        </Link>

        {/* 1. Título da página */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {project.title}
        </h1>

        {/* 2. Subtítulo / Mensagem introdutória */}
        <p className="text-xl text-primary font-medium mb-4">
          {project.subtitle}
        </p>
        <p className="text-gray-400 leading-relaxed mb-8">
          {project.description}
        </p>

        {/* 3. Imagem ilustrativa - largura total do container */}
        <div className="mb-12">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10">
            <Image
              src={project.image_url}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* 4. Serviços e Diferenciais em duas colunas */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Serviços Oferecidos */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 pb-2 border-b border-white/10">
              Serviços Oferecidos
            </h2>
            <ul className="space-y-3">
              {project.services.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Diferenciais */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 pb-2 border-b border-white/10">
              Diferenciais
            </h2>
            <ul className="space-y-3">
              {project.differentials.map((differential, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-300">{differential}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* CTA Simples */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 border-t border-white/10">
          <Link
            href="/contato"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
          >
            Solicitar Orçamento
            <FaArrowRight size={16} />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-gray-100 font-semibold rounded-lg transition-colors"
          >
            Ver Outros Projetos
          </Link>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return [
    { slug: 'edificacao-residencial' },
    { slug: 'reforma-corporativa' },
    { slug: 'infraestrutura-industrial' },
    { slug: 'manutencao-predial' },
    { slug: 'condominio-residencial' },
    { slug: 'centro-comercial' },
  ]
}
