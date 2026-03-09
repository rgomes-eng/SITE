import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { FaBuilding, FaHammer, FaTools, FaProjectDiagram, FaLaptopCode } from 'react-icons/fa'

const iconMap: Record<string, typeof FaBuilding> = {
  FaBuilding: FaBuilding,
  FaHammer: FaHammer,
  FaTools: FaTools,
  FaProjectDiagram: FaProjectDiagram,
  FaLaptopCode: FaLaptopCode,
}

const serviceContent: Record<string, { features: string[] }> = {
  construcao: {
    features: [
      'Fundações e estruturas',
      'Alvenaria e acabamentos',
      'Instalações elétricas e hidráulicas',
      'Obras residenciais, comerciais e industriais',
      'Acompanhamento técnico completo',
    ],
  },
  reformas: {
    features: [
      'Reformas estruturais',
      'Reformas elétricas e hidráulicas',
      'Acabamentos e pintura',
      'Ampliações',
      'Modernização de espaços',
    ],
  },
  manutencoes: {
    features: [
      'Manutenção preventiva',
      'Manutenção corretiva',
      'Laudos técnicos',
      'Diagnóstico de patologias',
      'Acompanhamento periódico',
    ],
  },
  'gestao-projetos': {
    features: [
      'Planejamento e cronograma',
      'Controle orçamentário',
      'Gestão de qualidade',
      'Segurança do trabalho',
      'Relatórios e documentação',
    ],
  },
  tecnologia: {
    features: [
      'Building Information Modeling (BIM)',
      'Modelagem 3D',
      'Gestão documental',
      'Softwares especializados',
      'Integração de processos',
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

  const title = service?.title || slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  const description = service?.description || 'Serviço de engenharia civil com excelência e tecnologia.'
  const features = (service?.features as string[]) || fallbackContent?.features || []

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <Link href="/servicos" className="text-primary hover:underline mb-6 inline-block">
          ← Voltar aos Serviços / Back to Services
        </Link>

        <div className="max-w-4xl">
          <div className="w-20 h-20 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
            <IconComponent className="text-primary" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-12">{description}</p>

          {features.length > 0 && (
            <div className="p-6 rounded-xl bg-background-card border border-border">
              <h2 className="text-xl font-semibold text-white mb-4">
                O que oferecemos / What we offer
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

          <div className="mt-12">
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
            >
              Solicitar Orçamento / Request Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
