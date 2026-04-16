import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/server'
import { FaBuilding, FaHammer, FaTools, FaProjectDiagram, FaLaptopCode } from 'react-icons/fa'

const iconMap: Record<string, typeof FaBuilding> = {
  FaBuilding: FaBuilding,
  FaHammer: FaHammer,
  FaTools: FaTools,
  FaProjectDiagram: FaProjectDiagram,
  FaLaptopCode: FaLaptopCode,
}

const serviceContent: Record<string, { 
  title: string
  subtitle: string
  description: string
  image_url: string
  features: string[] 
}> = {
  construcao: {
    title: 'Construção',
    subtitle: 'Engenharia de excelência para edificações de todos os portes',
    description: 'Na RGomes Engenharia, oferecemos suporte completo em todas as etapas da construção da sua edificação comercial ou residencial. Desde o levantamento inicial das suas necessidades até a entrega final, nossa equipe acompanha cada fase com dedicação e expertise: concepção do projeto personalizado, elaboração de projetos arquitetônicos e complementares, aprovações em todos os órgãos competentes, execução da obra com gerenciamento profissional, controle de qualidade rigoroso, acompanhamento pós-obra e garantia estendida. Sua visão se torna realidade com o apoio de quem entende e executa com excelência.',
    image_url: '/illustrations/SITE_Residencial3_16x9.png',
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
    image_url: '/illustrations/[Projetos]Reforma Corporativa.png',
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
    image_url: '/illustrations/Reforma_Fachada.png',
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
  'gestao-projetos': {
    title: 'Gestão de Projetos',
    subtitle: 'Planejamento e acompanhamento técnico especializado',
    description: 'Planejamento e acompanhamento técnico completo para projetos de engenharia civil.',
    image_url: '/illustrations/SITE_Gestão2.png',
    features: [
      'Planejamento e cronograma',
      'Controle orçamentário',
      'Gestão de qualidade',
      'Segurança do trabalho',
      'Relatórios e documentação',
    ],
  },
  tecnologia: {
    title: 'Soluções de Tecnologia',
    subtitle: 'Infraestrutura e automação para operações eficientes',
    description: 'Expertise em infraestrutura industrial, redes de computadores, sistemas de segurança e automação elétrica. Oferecemos soluções completas de tecnologia que podem ser executadas sem paralisar as operações corporativas, com SLA precisos e garantia de qualidade.',
    image_url: '/illustrations/SITE_Tecnologia_Infra.png',
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
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params

  const hasSupabaseEnv =
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!hasSupabaseEnv) {
    return { title: slug as string }
  }

  const supabase = await createClient()
  const { data } = await supabase.from('services').select('title').eq('slug', slug).single()
  const title = data?.title || slug
  return { title: title as string }
}

export default async function ServicoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const hasSupabaseEnv =
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  const supabase = hasSupabaseEnv ? await createClient() : null
  const { data: service } = supabase
    ? await supabase.from('services').select('*').eq('slug', slug).single()
    : { data: null }

  const fallbackContent = serviceContent[slug]
  const icon = service?.icon || 'FaBuilding'
  const IconComponent = iconMap[icon] ?? FaBuilding

  if (!service && !fallbackContent) notFound()

  const title = service?.title || fallbackContent?.title || slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  const subtitle = service?.subtitle || fallbackContent?.subtitle || ''
  const description = service?.description || fallbackContent?.description || 'Serviço de engenharia civil com excelência e tecnologia.'
  const imageUrl = service?.image_url || fallbackContent?.image_url || null
  const features = (service?.features as string[]) || fallbackContent?.features || []

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Link href="/servicos" className="text-primary hover:underline mb-6 inline-block">
          ← Voltar aos Serviços
        </Link>

        <div className="max-w-4xl">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="w-20 h-20 rounded-2xl bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center mb-6">
              <IconComponent className="text-primary" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-primary font-semibold mb-6">
                {subtitle}
              </p>
            )}
            <p className="text-gray-300/80 text-lg leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>

          {/* Image Section */}
          {imageUrl && (
            <div className="aspect-video rounded-xl overflow-hidden bg-secondary/30 mb-12 relative">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          )}

          {/* Features Section */}
          {features.length > 0 && (
            <div className="p-6 rounded-xl bg-background-card border border-border">
              <h2 className="text-xl font-semibold text-white mb-4">
                O que oferecemos
              </h2>
              <ul className="space-y-3">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-12">
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
