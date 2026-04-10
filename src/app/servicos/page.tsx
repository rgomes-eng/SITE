import { Metadata } from 'next'
import Link from 'next/link'
import NextImage from 'next/image'
import { createClient } from '@/lib/supabase/server'
import {
  FaBuilding,
  FaHammer,
  FaTools,
  FaProjectDiagram,
  FaLaptopCode,
  FaBolt,
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
  FaBolt: FaBolt,
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
            'Edificações residenciais, condomínios e projetos de grande porte com engenharia de excelência.',
          icon: 'FaBuilding',
          image_url: '/illustrations/SITE_Residencial3_16x9.png',
        },
        {
          slug: 'reformas',
          title: 'Reformas',
          short_description: 'Reformas corporativas com zero downtime e centro comercial com operação contínua.',
          icon: 'FaHammer',
          image_url: '/illustrations/[Projetos]Reforma Corporativa.png',
        },
        {
          slug: 'manutencoes',
          title: 'Manutenções',
          short_description: 'Manutenção predial por demanda ou contratual para edifícios comerciais e residenciais.',
          icon: 'FaTools',
          image_url: '/illustrations/Reforma_Fachada.png',
        },
        {
          slug: 'tecnologia',
          title: 'Soluções de Tecnologia',
          short_description:
            'Infraestrutura industrial, redes, sistemas de segurança e automação elétrica.',
          icon: 'FaLaptopCode',
          image_url: '/illustrations/SITE_Tecnologia_Infra.png',
        },
        {
          slug: 'gestao-projetos',
          title: 'Gestão de Projetos',
          short_description: 'Planejamento e acompanhamento técnico.',
          icon: 'FaProjectDiagram',
          image_url: '/illustrations/HomeNight.png',
        },
        {
          slug: 'quick-services',
          title: 'Quick Service',
          short_description: 'Reformas rápidas e especializadas.',
          icon: 'FaBolt',
          image_url: '/illustrations/[Quick]Revisão_Elétrica.png',
        },
      ]

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos Serviços
          </h1>
          <p className="text-gray-400 text-lg">
            Soluções completas em engenharia civil, do projeto à execução.
            Conheça cada uma de nossas áreas de atuação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map(
            (service: {
              slug: string
              title: string
              short_description?: string
              icon?: string
              image_url?: string
            }) => {
              const Icon = iconMap[service.icon || 'FaBuilding'] ?? FaBuilding
              return (
                <Link
                  key={service.slug}
                  href={service.slug === 'quick-services' ? '/servicos/quick-services' : `/servicos/${service.slug}`}
                  className="block overflow-hidden rounded-xl bg-background-card border border-border hover:border-primary/50 transition-all group"
                >
                  {/* Service Image */}
                  <div className="aspect-video relative overflow-hidden">
                    <NextImage
                      src={service.image_url || '/illustrations/projects.svg'}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/15 ring-1 ring-primary/20 flex items-center justify-center shrink-0">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                          {service.title}
                        </h2>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.short_description}
                    </p>
                    <span className="inline-block mt-4 text-primary text-sm font-medium">
                      Saiba mais →
                    </span>
                  </div>
                </Link>
              )
            }
          )}
        </div>
      </div>
    </div>
  )
}
