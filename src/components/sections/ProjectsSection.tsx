'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import Container from '@/components/common/Container'
import { useLanguage } from '@/context/LanguageContext'

interface Project {
  id: string
  title: string
  slug: string
  short_description: string | null
  image_url: string | null
  category: string | null
}

interface ProjectsSectionProps {
  projects?: Project[]
}

const fallbackProjects: Project[] = [
  {
    id: '1',
    title: 'Edificação Residencial',
    slug: 'edificacao-residencial',
    short_description: 'Obra completa com alta qualidade de acabamento.',
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
    short_description: 'Projeto de grande porte com gestão BIM.',
    image_url: null,
    category: 'Tecnologia',
  },
  {
    id: '4',
    title: 'Manutenção Predial',
    slug: 'manutencao-predial',
    short_description: 'Conservação e manutenção predial completa.',
    image_url: null,
    category: 'Reformas',
  },
]

function getPlaceholderImage(project: Project): string {
  const cat = (project.category || '').toLowerCase()
  const slug = (project.slug || '').toLowerCase()
  if (cat.includes('construção') || cat.includes('construcao') || slug.includes('edificacao-residencial')) {
    return '/illustrations/HomeNight.png'
  }
  if (cat.includes('reforma') || slug.includes('reforma') || slug.includes('manutencao-predial')) {
    return '/illustrations/[Projetos]Reforma Corporativa.png'
  }
  if (cat.includes('tecnologia') || slug.includes('infraestrutura-industrial')) {
    return '/illustrations/SITE_Tecnologia_Infra.png'
  }
  return '/illustrations/projects.svg'
}

export default function ProjectsSection({ projects = [] }: ProjectsSectionProps) {
  const { language } = useLanguage()
  const displayProjects = projects.length > 0 ? projects : fallbackProjects

  const content = {
    pt: {
      label: 'Portfólio',
      title: 'Projetos em destaque',
      description: 'Exemplos de projetos que somos capazes de entregar',
      viewAll: 'Ver todos',
    },
    en: {
      label: 'Portfolio',
      title: 'Featured Projects',
      description: 'Examples of projects we are capable of delivering',
      viewAll: 'View all',
    },
  }

  const projectTranslations = {
    pt: {
      'Edificação Residencial': 'Edificação Residencial',
      'Reforma Corporativa': 'Reforma Corporativa',
      'Infraestrutura Industrial': 'Infraestrutura Industrial',
      'Manutenção Predial': 'Manutenção Predial',
      'Obra completa com alta qualidade de acabamento.': 'Obra completa com alta qualidade de acabamento.',
      'Modernização de espaços comerciais.': 'Modernização de espaços comerciais.',
      'Projeto de grande porte com gestão BIM.': 'Projeto de grande porte com gestão BIM.',
      'Conservação e manutenção predial completa.': 'Conservação e manutenção predial completa.',
      'Construção': 'Construção',
      'Reformas': 'Reformas',
      'Tecnologia': 'Tecnologia',
    },
    en: {
      'Edificação Residencial': 'Residential Building',
      'Reforma Corporativa': 'Corporate Renovation',
      'Infraestrutura Industrial': 'Industrial Infrastructure',
      'Manutenção Predial': 'Building Maintenance',
      'Obra completa com alta qualidade de acabamento.': 'Complete work with high quality finishing.',
      'Modernização de espaços comerciais.': 'Modernization of commercial spaces.',
      'Projeto de grande porte com gestão BIM.': 'Large-scale project with BIM management.',
      'Conservação e manutenção predial completa.': 'Complete building conservation and maintenance.',
      'Construção': 'Construction',
      'Reformas': 'Renovations',
      'Tecnologia': 'Technology',
    },
  }

  const t = projectTranslations[language]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(42,91,168,0.10),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(232,117,10,0.10),transparent_45%)]" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-primary font-semibold mb-4">{content[language].label}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{content[language].title}</h2>
            <p className="text-gray-300/80 max-w-xl text-lg">
              {content[language].description}
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/15 text-gray-100 font-semibold rounded-xl transition-colors shrink-0"
          >
            {content[language].viewAll}
            <FaArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.slice(0, 3).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-primary/30 transition-colors"
              >
                <div className="aspect-video relative overflow-hidden">
                  {project.image_url ? (
                    <Image
                      src={project.image_url}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-secondary/20" />
                      <Image
                        src={getPlaceholderImage(project)}
                        alt=""
                        fill
                        className="object-cover opacity-90"
                      />
                    </>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-90" />
                </div>
                <div className="p-5">
                  {project.category && (
                    <span className="text-primary text-sm font-medium">{t[project.category as keyof typeof t] || project.category}</span>
                  )}
                  <h3 className="text-lg font-semibold text-white mt-1 group-hover:text-primary transition-colors">
                    {t[project.title as keyof typeof t] || project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                    {t[project.short_description as keyof typeof t] || project.short_description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
