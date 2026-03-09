'use client'

import { motion } from 'framer-motion'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import WorkWithUsForm from '@/components/forms/WorkWithUsForm'

export default function WorkWithUsSection() {
  return (
    <Section className="py-20">
      <div className="absolute inset-0 bg-background-card/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(42,91,168,0.14),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_80%,rgba(232,117,10,0.12),transparent_45%)]" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
            suppressHydrationWarning={true}
          >
            <p className="text-primary font-semibold mb-4">Oportunidades</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Envie seu currículo
            </h2>
            <p className="text-gray-300/80 text-lg leading-relaxed">
              Preencha o formulário abaixo e anexe seu currículo. Nossa equipe de RH analisará seu perfil e entrará em contato.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            suppressHydrationWarning={true}
          >
            <WorkWithUsForm />
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
