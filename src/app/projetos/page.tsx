import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/server'

export const metadata: Metadata = {
  title: 'Projetos',
  description:
    'Portfólio de projetos da RGOMES Engenharia - construção, reformas e obras de engenharia civil.',
}

export default async function ProjetosPage() {
  const hasSupabaseEnv =
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  let projects: any[] | null = null

  if (hasSupabaseEnv) {
    const supabase = await createClient()
    const { data } = await supabase
      .from('projects')
      .select('*')
      .eq('is_active', true)
      .order('order_index')
    projects = data
  }

  const displayProjects = projects?.length
    ? projects
    : [
        {
          id: '1',
          title: 'Edificação Residencial',
          slug: 'edificacao-residencial',
          short_description: 'Obra completa com alta qualidade.',
          image_url: null,
          category: 'Construção',
        },
        {
          id: '2',
          title: 'Reforma Corporativa',
          slug: 'reforma-corporativa',
          short_description: 'Modernização de espaços comerciais.',
          image_url: null,
          category: 'Reformas',
        },
        {
          id: '3',
          title: 'Infraestrutura Industrial',
          slug: 'infraestrutura-industrial',
          short_description: 'Projeto com gestão BIM.',
          image_url: null,
          category: 'Tecnologia',
        },
        {
          id: '4',
          title: 'Condomínio Residencial',
          slug: 'condominio-residencial',
          short_description: 'Construção de unidades habitacionais.',
          image_url: null,
          category: 'Construção',
        },
        {
          id: '5',
          title: 'Manutenção Predial',
          slug: 'manutencao-predial',
          short_description: 'Serviços preventivos em edificações.',
          image_url: null,
          category: 'Manutenções',
        },
        {
          id: '6',
          title: 'Centro Comercial',
          slug: 'centro-comercial',
          short_description: 'Ampliação e adequações.',
          image_url: null,
          category: 'Reformas',
        },
      ]

  return (
    <div className="pt-24 pb-20">
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos Projetos /{' '}
            <span className="text-primary">Our Projects</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Conheça alguns dos principais trabalhos que realizamos em
            engenharia civil.
          </p>
          <p className="text-gray-400 text-lg mt-3">
            Discover some of the key civil engineering projects we have
            delivered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map(
            (project: {
              id: string
              title: string
              slug: string
              short_description?: string
              image_url?: string | null
              category?: string | null
            }) => (
              <Link
                key={project.id}
                href={`/projetos/${project.slug}`}
                className="block group overflow-hidden rounded-xl bg-background-card border border-border hover:border-primary/50 transition-all"
              >
                <div className="aspect-video bg-secondary/30 relative overflow-hidden">
                  {project.image_url ? (
                    <Image
                      src={project.image_url}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl text-secondary/50 font-bold">
                        RG
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  {project.category && (
                    <span className="text-primary text-sm font-medium">
                      {project.category}
                    </span>
                  )}
                  <h2 className="text-xl font-semibold text-white mt-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                    {project.short_description}
                  </p>
                </div>
              </Link>
            )
          )}
        </div>
      </section>
    </div>
  )
}
