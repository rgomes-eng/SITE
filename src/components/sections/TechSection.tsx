'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaCube, FaRulerCombined, FaFileAlt, FaSync } from 'react-icons/fa'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'

const techFeatures = [
  {
    icon: FaCube,
    title: 'BIM',
    description: 'Building Information Modeling para projetos integrados e precisos.',
  },
  {
    icon: FaRulerCombined,
    title: 'Modelagem 3D',
    description: 'Visualização e detecção de interferências antes da obra.',
  },
  {
    icon: FaFileAlt,
    title: 'Gestão Documental',
    description: 'Controle centralizado de projetos e documentação.',
  },
  {
    icon: FaSync,
    title: 'Integração',
    description: 'Fluxo de trabalho conectado da concepção à execução.',
  },
]

export default function TechSection() {
  return (
    <Section
      className="py-20"
      backgroundImageAlt="Sala de reunião"
    >
      <div className="absolute inset-0 bg-background-card/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(42,91,168,0.14),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,rgba(232,117,10,0.12),transparent_45%)]" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <p className="text-primary font-semibold mb-4">Tecnologia</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Engenharia guiada por <span className="text-primary">dados</span> e precisão
            </h2>
            <p className="text-gray-300/80 text-lg leading-relaxed mb-8">
              BIM, modelagem e processos integrados para reduzir retrabalho, aumentar previsibilidade e melhorar a tomada de decisão.
            </p>

            <div className="relative rounded-3xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(42,91,168,0.22),transparent_55%)]" />
              <Image
                src="/illustrations/tech.svg"
                alt="Ilustração de tecnologia"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>

            <div className="mt-8">
              <Link
                href="/tecnologia"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors shadow-sm"
              >
                Conhecer nossas soluções
              </Link>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {techFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 ring-1 ring-primary/20 flex items-center justify-center mb-4">
                  <feature.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300/75 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
