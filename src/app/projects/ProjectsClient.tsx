'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function ProjectsClient({ projects }: { projects: any[] }) {
  const { language } = useLanguage()
  const isPt = language === 'pt'

  const content = {
    pt: {
      title: 'Nossos Projetos',
      description: 'Conheça alguns dos principais trabalhos que realizamos em engenharia civil.',
    },
    en: {
      title: 'Our Projects',
      description: 'Meet some of the main works we have carried out in civil engineering.',
    },
  }

  const projectTranslations = {
    pt: {
      'Edificação Residencial': 'Edificação Residencial',
      'Reforma Corporativa': 'Reforma Corporativa',
      'Infraestrutura Industrial': 'Infraestrutura Industrial',
      'Condomínio Residencial': 'Condomínio Residencial',
      'Manutenção Predial': 'Manutenção Predial',
      'Centro Comercial': 'Centro Comercial',
      'Construção': 'Construção',
      'Reformas': 'Reformas',
      'Tecnologia': 'Tecnologia',
      'Manutenções': 'Manutenções',
      'Obra completa com alta qualidade.': 'Obra completa com alta qualidade.',
      'Modernização de espaços comerciais.': 'Modernização de espaços comerciais.',
      'Projeto com gestão BIM.': 'Projeto com gestão BIM.',
      'Construção de unidades habitacionais.': 'Construção de unidades habitacionais.',
      'Serviços preventivos em edificações.': 'Serviços preventivos em edificações.',
      'Ampliação e adequações.': 'Ampliação e adequações.',
    },
    en: {
      'Edificação Residencial': 'Residential Building',
      'Reforma Corporativa': 'Corporate Renovation',
      'Infraestrutura Industrial': 'Industrial Infrastructure',
      'Condomínio Residencial': 'Residential Condominium',
      'Manutenção Predial': 'Building Maintenance',
      'Centro Comercial': 'Shopping Center',
      'Construção': 'Construction',
      'Reformas': 'Renovations',
      'Tecnologia': 'Technology',
      'Manutenções': 'Maintenance',
      'Obra completa com alta qualidade.': 'Complete work with high quality.',
      'Modernização de espaços comerciais.': 'Modernization of commercial spaces.',
      'Projeto com gestão BIM.': 'Project with BIM management.',
      'Construção de unidades habitacionais.': 'Construction of housing units.',
      'Serviços preventivos em edificações.': 'Preventive services in buildings.',
      'Ampliação e adequações.': 'Expansion and adaptations.',
    },
  }

  const t = projectTranslations[language]

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {content[language].title}
          </h1>
          <p className="text-gray-400 text-lg">
            {content[language].description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(
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
                href={`/projects/${project.slug}`}
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
                      {t[project.category as keyof typeof t] || project.category}
                    </span>
                  )}
                  <h2 className="text-xl font-semibold text-white mt-1 group-hover:text-primary transition-colors">
                    {t[project.title as keyof typeof t] || project.title}
                  </h2>
                  <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                    {t[project.short_description as keyof typeof t] || project.short_description}
                  </p>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  )
}
