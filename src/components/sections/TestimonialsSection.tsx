'use client'

import { motion } from 'framer-motion'
import Container from '@/components/common/Container'

interface Testimonial {
  id: string
  client_name: string
  client_role?: string
  company?: string
  content: string
  rating: number
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[]
}

const fallbackTestimonials: Testimonial[] = [
  {
    id: '1',
    client_name: 'Carlos Silva',
    client_role: 'Diretor',
    company: 'Construtora Norte',
    content: 'Excelente parceiro em nossos projetos. Comprometimento e qualidade em todas as etapas.',
    rating: 5,
  },
  {
    id: '2',
    client_name: 'Maria Santos',
    client_role: 'Proprietária',
    company: 'Imobiliária Santos',
    content: 'Reformamos nosso escritório com a RGOMES. Profissionalismo e prazo cumprido.',
    rating: 5,
  },
  {
    id: '3',
    client_name: 'João Oliveira',
    client_role: 'Engenheiro',
    company: 'Oliveira Engenharia',
    content: 'Parceria sólida em gestão de projetos. Recomendo fortemente.',
    rating: 5,
  },
]

export default function TestimonialsSection({ testimonials = [] }: TestimonialsSectionProps) {
  const display = testimonials.length > 0 ? testimonials : fallbackTestimonials

  return (
    <section className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-4">Depoimentos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Confiança construída na prática</h2>
          <p className="text-gray-300/80 max-w-2xl mx-auto text-lg">
            Feedback de quem já viveu o processo com a RGOMES Engenharia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {display.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} className="text-primary">★</span>
                ))}
              </div>
              <p className="text-gray-200/90 italic mb-6 leading-relaxed">&ldquo;{t.content}&rdquo;</p>
              <div>
                <div className="font-semibold text-white">{t.client_name}</div>
                {(t.client_role || t.company) && (
                  <div className="text-gray-500 text-sm">
                    {[t.client_role, t.company].filter(Boolean).join(' · ')}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
