'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight, FaPlay } from 'react-icons/fa'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import { useLanguage } from '@/context/LanguageContext'
import { getImagePath } from '@/utils/helpers'
import { cn } from '@/utils/helpers'

const HERO_CONFIG = {
  images: {
    background: 'backgrounds.bimOffice',
    secondary: 'illustrations.campoObras',
  },
} as const

export default function HeroSection() {
  const { language } = useLanguage()
  const isPt = language === 'pt'

  const content = {
    eyebrow: isPt ? 'Engenharia de Excelência' : 'Engineering Excellence',
    title: isPt 
      ? 'Transformando Visões em Realidade' 
      : 'Transforming Visions into Reality',
    subtitle: isPt
      ? 'Construção, reformas e soluções tecnológicas com qualidade e inovação.'
      : 'Construction, renovation and technology solutions with quality and innovation.',
    cta: isPt ? 'Fale Conosco' : 'Contact Us',
    secondary: isPt ? 'Nossos Projetos' : 'Our Projects',
    imageAlt: isPt ? 'Escritório BIM' : 'BIM Office',
  }

  const eyebrow = isPt
    ? 'Engenharia Civil de Excelência em Manaus'
    : 'Civil Engineering Excellence in Manaus'

  const titleMain = isPt
    ? 'Construímos o futuro com'
    : 'We build the future with'

  const titleEmphasis = isPt
    ? 'engenharia de precisão'
    : 'precision engineering'

  const description = isPt
    ? 'Da concepção à entrega: construção, reformas, manutenção, gestão e execução de projetos com qualidade, previsibilidade e alto padrão de execução.'
    : 'From concept to delivery: construction, renovations, maintenance, project management and execution with quality, predictability and high standard of execution.'

  const primaryCta = isPt ? 'Solicitar orçamento' : 'Request a quote'
  const secondaryCta = isPt ? 'Ver portfólio' : 'View portfolio'

  const imageAlt = isPt ? 'Ambiente de engenharia' : 'Engineering environment'

  return (
    <Section
      className="pt-28 pb-16"
      backgroundImageSrc="/backgrounds/BIM_OFFICE_BG.png"
      backgroundImageAlt={imageAlt}
      overlayClassName="bg-background-dark/80"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background-dark/60 via-secondary-dark/25 to-background-dark/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/12 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/18 via-transparent to-transparent" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-primary font-semibold mb-5"
            >
              {eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.06] tracking-tight mb-6"
            >
              {titleMain}{' '}
              <span className="text-primary">{titleEmphasis}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="text-gray-300/80 text-lg md:text-xl leading-relaxed mb-10"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors shadow-sm"
              >
                {primaryCta}
                <FaArrowRight size={16} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/15 text-gray-100 font-semibold rounded-xl transition-colors"
              >
                {secondaryCta}
                <FaPlay size={16} />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/10 via-transparent to-secondary/20 blur-2xl" />
            <div className="relative rounded-3xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(232,117,10,0.25),transparent_55%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(42,91,168,0.22),transparent_55%)]" />
              <Image
                src="/illustrations/CampoObrasPagInicial.png"
                alt={imageAlt}
                width={1200}
                height={900}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

