import { Metadata } from 'next'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import {
  FaBuilding,
  FaHammer,
  FaTools,
  FaProjectDiagram,
  FaLaptopCode,
} from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Serviços',
  description:
    'Construção, reformas, manutenções, gestão de projetos e soluções de tecnologia para engenharia civil.',
}

const iconMap: Record<string, typeof FaBuilding> = {
  FaBuilding: FaBuilding,
  FaHammer: FaHammer,
  FaTools: FaTools,
  FaProjectDiagram: FaProjectDiagram,
  FaLaptopCode: FaLaptopCode,
}

export default async function ServicosPage() {
  const hasSupabaseEnv =
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  let services: any[] | null = null

  if (hasSupabaseEnv) {
    const supabase = await createClient()
    const { data } = await supabase
      .from('services')
      .select('*')
      .eq('is_active', true)
      .order('order_index')
    services = data
  }

  const displayServices = services?.length
    ? services
    : [
        {
          slug: 'construcao',
          title: 'Construção',
          short_description:
            'Obras residenciais, comerciais e industriais.',
          icon: 'FaBuilding',
        },
        {
          slug: 'reformas',
          title: 'Reformas',
          short_description: 'Reformas completas e parciais.',
          icon: 'FaHammer',
        },
        {
          slug: 'manutencoes',
          title: 'Manutenções',
          short_description: 'Serviços preventivos e corretivos.',
          icon: 'FaTools',
        },
        {
          slug: 'gestao-projetos',
          title: 'Gestão de Projetos',
          short_description: 'Planejamento e acompanhamento técnico.',
          icon: 'FaProjectDiagram',
        },
        {
          slug: 'tecnologia',
          title: 'Soluções de Tecnologia',
          short_description:
            'BIM, modelagem 3D e ferramentas digitais.',
          icon: 'FaLaptopCode',
        },
      ]

  return (
    <div className="pt-24 pb-20">
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos Serviços / <span className="text-primary">Our Services</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Soluções completas em engenharia civil, do projeto à execução.
            Conheça cada uma de nossas áreas de atuação.
          </p>
          <p className="text-gray-400 text-lg mt-3">
            Complete civil engineering solutions, from design to execution.
            Explore each of our areas of expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map(
            (service: {
              slug: string
              title: string
              short_description?: string
              icon?: string
            }) => {
              const Icon = iconMap[service.icon || 'FaBuilding'] ?? FaBuilding
              return (
                <Link
                  key={service.slug}
                  href={`/servicos/${service.slug}`}
                  className="block p-6 rounded-xl bg-background-card border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    {service.short_description}
                  </p>
                  <span className="inline-block mt-4 text-primary text-sm font-medium">
                    Saiba mais / Learn more →
                  </span>
                </Link>
              )
            }
          )}
        </div>
      </section>
    </div>
  )
}
