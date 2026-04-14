import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/server'
import { FaBuilding, FaHammer, FaTools, FaProjectDiagram, FaLaptopCode, FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const iconMap: Record<string, typeof FaBuilding> = {
  FaBuilding: FaBuilding,
  FaHammer: FaHammer,
  FaTools: FaTools,
  FaProjectDiagram: FaProjectDiagram,
  FaLaptopCode: FaLaptopCode,
}

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
    <div className="min-h-screen bg-background-dark">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-secondary-dark/50 to-background-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/12 via-transparent to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8"
          >
            <FaArrowLeft size={16} />
            Voltar para Projetos
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {project.subtitle}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10">
                <Image
                  src={project.image_url}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary-dark/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Características Principais
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 ring-1 ring-white/10 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Serviços Oferecidos
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Soluções completas e especializadas para atender todas as necessidades do seu projeto
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {project.services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 ring-1 ring-white/10 rounded-xl p-6 hover:ring-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaTools className="text-primary" size={16} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">
                      Serviço {index + 1}
                    </h3>
                    <p className="text-gray-300 text-sm">{service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-16 bg-secondary-dark/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Diferenciais da RGOMES ENGENHARIA
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Por que escolher a RGOMES para realizar seu projeto
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.differentials.map((differential, index) => (
              <div
                key={index}
                className="bg-white/5 ring-1 ring-white/10 rounded-xl p-6 hover:ring-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaProjectDiagram className="text-primary" size={16} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">
                      Diferencial {index + 1}
                    </h3>
                    <p className="text-gray-300 text-sm">{differential}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Galeria do Projeto
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className="aspect-video rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10"
              >
                <Image
                  src={image}
                  alt={`${project.title} - Imagem ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 bg-secondary-dark/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Detalhes da Execução
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {project.details.map((detail, index) => (
              <div
                key={index}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaTools className="text-primary" size={16} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Etapa {index + 1}
                  </h3>
                  <p className="text-gray-300">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Transforme seu projeto em realidade
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para discutir como podemos ajudar a realizar seu projeto com a qualidade e excelência que só a RGOMES Engenharia oferece.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/trabalhe-conosco"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors"
            >
              Solicitar Orçamento
              <FaArrowRight size={16} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/15 text-gray-100 font-semibold rounded-xl transition-colors"
            >
              Ver Outros Projetos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  return [
    { slug: 'edificacao-residencial' },
    { slug: 'reforma-corporativa' },
    { slug: 'infraestrutura-industrial' },
    { slug: 'manutencao-predial' },
  ]
}
