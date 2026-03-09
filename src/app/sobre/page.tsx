'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle, FaAward, FaUsers, FaHandshake } from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'

const values = {
  pt: [
    {
      icon: FaAward,
      title: 'Excelência',
      description:
        'Compromisso com a qualidade em cada etapa dos projetos.',
    },
    {
      icon: FaUsers,
      title: 'Equipe Qualificada',
      description:
        'Profissionais especializados e em constante atualização.',
    },
    {
      icon: FaHandshake,
      title: 'Parceria',
      description:
        'Relacionamento transparente e de confiança com clientes.',
    },
  ],
  en: [
    {
      icon: FaAward,
      title: 'Excellence',
      description:
        'Commitment to quality at every stage of the projects.',
    },
    {
      icon: FaUsers,
      title: 'Qualified Team',
      description:
        'Specialized professionals who are constantly updating their skills.',
    },
    {
      icon: FaHandshake,
      title: 'Partnership',
      description:
        'Transparent and trustworthy relationships with our clients.',
    },
  ],
} as const

const differentials = {
  pt: [
    'Metodologias modernas e comprovadas',
    'Tecnologia BIM e ferramentas digitais',
    'Cumprimento de prazos e orçamentos',
    'Atendimento personalizado',
    'Suporte pós-obra',
  ],
  en: [
    'Modern and proven methodologies',
    'BIM technology and digital tools',
    'On-time and on-budget delivery',
    'Personalized customer service',
    'Post-construction support',
  ],
} as const

export default function SobrePage() {
  const { language } = useLanguage()
  const isPt = language === 'pt'

  const heading = isPt ? 'Sobre Nós' : 'About Us'
  const heroParagraph1Before = isPt ? 'A ' : ''
  const heroParagraph1After = isPt
    ? ' atua em Manaus e região há mais de 15 anos, oferecendo soluções completas em engenharia civil. Unimos tradição construtiva e inovação tecnológica para entregar projetos que superam expectativas.'
    : ' has been operating in Manaus and the surrounding region for over 15 years, offering complete solutions in civil engineering. We combine construction tradition and technological innovation to deliver projects that exceed expectations.'

  const heroParagraph2 = isPt
    ? 'Nossa missão é transformar ideias em realidade, com precisão técnica, compromisso com prazos e orçamentos e um atendimento diferenciado. Trabalhamos com construção, reformas, manutenções, gestão de projetos e soluções de tecnologia para engenharia civil.'
    : 'Our mission is to turn ideas into reality, with technical precision, commitment to deadlines and budgets, and differentiated service. We work with construction, renovations, maintenance, project management and technology solutions for civil engineering.'

  const differentialsHeading = isPt
    ? 'Nossos Diferenciais'
    : 'Our Differentials'

  const currentValues = values[language]
  const currentDifferentials = differentials[language]

  return (
    <div className="pt-24 pb-20">
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {heading}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            {heroParagraph1Before}
            <span className="text-primary font-semibold">
              RGOMES Engenharia
            </span>
            {heroParagraph1After}
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mt-6">
            {heroParagraph2}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {currentValues.map((v) => (
            <div
              key={v.title}
              className="p-6 rounded-xl bg-background-card border border-border"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <v.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {v.title}
              </h3>
              <p className="text-gray-400">{v.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 p-8 rounded-xl bg-background-card border border-border"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            {differentialsHeading}
          </h2>
          <ul className="space-y-3">
            {currentDifferentials.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-gray-300"
              >
                <FaCheckCircle
                  className="text-primary flex-shrink-0"
                  size={20}
                />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>
    </div>
  )
}
