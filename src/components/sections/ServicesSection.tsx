'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  FaBuilding,
  FaHammer,
  FaTools,
  FaProjectDiagram,
  FaLaptopCode,
} from 'react-icons/fa'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import { useLanguage } from '@/context/LanguageContext'

const servicesByLanguage = {
  pt: [
    {
      slug: 'construcao',
      title: 'Construção',
      description:
        'Obras residenciais, comerciais e industriais com excelência técnica.',
      icon: FaBuilding,
    },
    {
      slug: 'reformas',
      title: 'Reformas',
      description: 'Reformas completas e parciais para residências e empresas.',
      icon: FaHammer,
    },
    {
      slug: 'manutencoes',
      title: 'Manutenções',
      description: 'Serviços preventivos e corretivos para sua edificação.',
      icon: FaTools,
    },
    {
      slug: 'gestao-projetos',
      title: 'Gestão de Projetos',
      description: 'Planejamento e acompanhamento técnico de obras.',
      icon: FaProjectDiagram,
    },
    {
      slug: 'tecnologia',
      title: 'Tecnologia',
      description:
        'BIM, modelagem 3D e soluções digitais para engenharia.',
      icon: FaLaptopCode,
    },
  ],
  en: [
    {
      slug: 'construcao',
      title: 'Construction',
      description:
        'Residential, commercial and industrial works with technical excellence.',
      icon: FaBuilding,
    },
    {
      slug: 'reformas',
      title: 'Renovations',
      description: 'Full and partial renovations for homes and businesses.',
      icon: FaHammer,
    },
    {
      slug: 'manutencoes',
      title: 'Maintenance',
      description: 'Preventive and corrective services for your building.',
      icon: FaTools,
    },
    {
      slug: 'gestao-projetos',
      title: 'Project Management',
      description: 'Planning and technical monitoring of construction sites.',
      icon: FaProjectDiagram,
    },
    {
      slug: 'tecnologia',
      title: 'Technology',
      description:
        'BIM, 3D modeling and digital solutions for engineering.',
      icon: FaLaptopCode,
    },
  ],
} as const

export default function ServicesSection() {
  const { language } = useLanguage()
  const isPt = language === 'pt'
  const services = servicesByLanguage[language]

  const sectionLabel = isPt ? 'Serviços' : 'Services'
  const sectionTitle = isPt
    ? 'Soluções completas do projeto à execução'
    : 'Complete solutions from design to execution'
  const sectionDescription = isPt
    ? 'Planejamento, obra e tecnologia em um só lugar. Cada etapa com controle, previsibilidade e qualidade.'
    : 'Planning, construction and technology in one place. Every stage with control, predictability and quality.'
  const imageAlt = isPt ? 'Ambiente corporativo' : 'Corporate environment'
  const viewAllLabel = isPt ? 'Ver todos os serviços' : 'View all services'
  const learnMoreLabel = isPt ? 'Saiba mais' : 'Learn more'

  return (
    <Section
      id="servicos"
      className="py-20"
      backgroundImageAlt={imageAlt}
    >
      <div className="absolute inset-0 bg-background-card/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(232,117,10,0.14),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(42,91,168,0.14),transparent_45%)]" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <p className="text-primary font-semibold mb-4">{sectionLabel}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              {sectionTitle}
            </h2>
            <p className="text-gray-300/80 text-lg leading-relaxed mb-8">
              {sectionDescription}
            </p>

            <div className="relative rounded-3xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(232,117,10,0.22),transparent_55%)]" />
              <Image
                src="/backgrounds/Editedimage_1761959139215.png"
                alt={imageAlt}
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>

            <div className="mt-8">
              <Link
                href="/servicos"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/15 text-gray-100 font-semibold rounded-xl transition-colors"
              >
                {viewAllLabel}
              </Link>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={`/servicos/${service.slug}`}
                  className="block p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-primary/30 hover:bg-white/[0.07] transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 ring-1 ring-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="text-primary" size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300/75 text-sm mt-2 leading-relaxed">
                        {service.description}
                      </p>
                      <span className="inline-block mt-4 text-primary text-sm font-semibold">
                        {learnMoreLabel}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

