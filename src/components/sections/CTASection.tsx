'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa'
import Container from '@/components/common/Container'
import { useLanguage } from '@/context/LanguageContext'

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5592981242509'

export default function CTASection() {
  const { language } = useLanguage()
  const isPt = language === 'pt'

  const eyebrow = isPt ? 'Vamos conversar' : "Let's talk"
  const title = isPt
    ? 'Pronto para transformar seu projeto em realidade?'
    : 'Ready to turn your project into reality?'
  const description = isPt
    ? 'Nossa equipe está pronta para atender você com clareza, agilidade e responsabilidade técnica.'
    : 'Our team is ready to support you with clarity, agility and technical responsibility.'
  const primaryCta = isPt ? 'Solicitar orçamento' : 'Request a quote'
  const whatsappLabel = isPt ? 'Falar no WhatsApp' : 'Talk on WhatsApp'

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=""
      >
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 p-8 md:p-12 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(232,117,10,0.22),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(42,91,168,0.18),transparent_55%)]" />

            <div className="relative">
              <p className="text-primary font-semibold mb-4">{eyebrow}</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {title}
              </h2>
              <p className="text-gray-300/80 max-w-2xl mx-auto mb-8 text-lg">
                {description}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors shadow-sm"
                >
                  {primaryCta}
                  <FaArrowRight size={16} />
                </Link>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/15 text-gray-100 font-semibold rounded-xl transition-colors"
                >
                  {whatsappLabel}
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </motion.div>
    </section>
  )
}

