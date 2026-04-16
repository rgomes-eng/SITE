'use client'

import { motion } from 'framer-motion'
import { useState, FormEvent } from 'react'
import {
  FaBolt,
  FaPlug,
  FaBorderAll,
  FaGlassWhiskey,
  FaPaintRoller,
  FaTint,
  FaHammer,
  FaArrowRight,
  FaTools,
  FaRuler,
  FaWindowMaximize,
  FaBrush,
  FaWater,
  FaGlasses,
  FaCheckCircle,
  FaSpinner,
} from 'react-icons/fa'
import Image from 'next/image'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'

const quickServices = [
  {
    id: 'revisao-eletrica',
    title: 'Revisão Elétrica',
    description: 'Inspeção completa da instalação elétrica com identificação de falhas e soluções rápidas.',
    icon: FaPlug,
    sla: '24-48h',
  },
  {
    id: 'forro-gesso-drywall',
    title: 'Forro de Gesso e Drywall',
    description: 'Instalação e manutenção de forros, divisórias e acabamentos em drywall.',
    icon: FaBorderAll,
    sla: '2-3 dias',
  },
  {
    id: 'vidros-esquadrias',
    title: 'Vidros e Esquadrias',
    description: 'Instalação e substituição de vidros, janelas, portas e esquadrias de alumínio.',
    icon: FaGlassWhiskey,
    sla: '2-4 dias',
  },
  {
    id: 'acabamentos',
    title: 'Serviços de Acabamento',
    description: 'Acabamentos finos em pisos, paredes e tetos com materiais de alta qualidade.',
    icon: FaPaintRoller,
    sla: '2-5 dias',
  },
  {
    id: 'pintura',
    title: 'Pintura Geral',
    description: 'Pintura interna e externa com preparação de superfície e acabamento profissional.',
    icon: FaBrush,
    sla: '2-5 dias',
  },
  {
    id: 'hidraulica',
    title: 'Instalações Hidráulicas',
    description: 'Reparos e instalações de tubulações, torneiras, vasos sanitários e sistemas hidráulicos.',
    icon: FaTint,
    sla: '1-3 dias',
  },
]

export default function QuickServicesPage() {
  const pageTitle = 'Quick Service'
  const pageSubtitle = 'Serviços rápidos com SLA definido'
  const pageDescription = 'Solicite um orçamento para serviços de manutenção e pequenas reformas com prazo garantido.'
  const contactTitle = 'Solicitar Orçamento'
  const slaLabel = 'Prazo (Padrão Popular)'
  const selectServiceLabel = 'Selecionar serviço'
  const requestQuoteLabel = 'Solicitar orçamento'

  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const selectedServiceTitle = selectedService 
      ? quickServices.find(s => s.id === selectedService)?.title 
      : 'Não selecionado'

    const fullMessage = `Serviço Quick Service: ${selectedServiceTitle}\n\nDescrição: ${message}`

    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone: phone || undefined,
          subject: `Orçamento Quick Service - ${selectedServiceTitle || 'Geral'}`,
          message: fullMessage,
        }),
      })

      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        throw new Error(json.error || 'Erro ao enviar. Tente novamente.')
      }

      setSubmitted(true)
      setName('')
      setPhone('')
      setEmail('')
      setMessage('')
      setSelectedService(null)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Erro ao enviar. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center mx-auto mb-6">
              <FaBolt className="text-primary" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {pageTitle}
            </h1>
            <p className="text-xl text-primary font-semibold mb-4">
              {pageSubtitle}
            </p>
            <p className="text-gray-300/80 text-lg">
              {pageDescription}
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-primary/30 hover:bg-white/[0.07] transition-all cursor-pointer ${
                  selectedService === service.id ? 'ring-primary ring-2' : ''
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                {/* Service Image */}
                <div className="h-40 w-full relative overflow-hidden">
                  <Image
                    src={
                      service.id === 'revisao-eletrica' ? '/illustrations/[Quick]Revisão_Elétrica.png' :
                      service.id === 'forro-gesso-drywall' ? '/illustrations/[Quick]_Forro de Gesso e Drywall.png' :
                      service.id === 'vidros-esquadrias' ? '/illustrations/[Quick]_Vidros e esquadrias.png' :
                      service.id === 'acabamentos' ? '/illustrations/[Quick]_Serviços de acabamento.png' :
                      service.id === 'pintura' ? '/illustrations/{Quick]PinturaGeral.png' :
                      '/illustrations/[Quick]Instalações Hidro.jpg'
                    }
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                {/* Service Content */}
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 ring-1 ring-primary/20 flex items-center justify-center shrink-0">
                      <service.icon className="text-primary" size={22} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-300/75 text-sm leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary text-xs font-semibold whitespace-nowrap">
                        <span className="bg-primary/10 px-2 py-1 rounded">
                          {slaLabel}: {service.sla}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Form Section */}
      <Section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="p-8 rounded-3xl bg-white/5 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                {contactTitle}
              </h2>

              {submitted ? (
                <div className="p-6 rounded-xl bg-green-500/20 border border-green-500/50 text-center">
                  <FaCheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Solicitação enviada com sucesso!
                  </h3>
                  <p className="text-gray-300">Obrigado pelo contato. Nossa equipe retornará em breve pelo email ou WhatsApp.</p>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="Seu telefone"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="Seu e-mail"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                      Serviço Selecionado
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 transition-colors"
                      value={selectedService || ''}
                      onChange={(e) => setSelectedService(e.target.value)}
                    >
                      <option value="" className="bg-gray-800">
                        {selectServiceLabel}
                      </option>
                      {quickServices.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Descrição do Serviço
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    placeholder="Descreva o serviço que você precisa"
                  />
                </div>

                {error && <p className="text-sm text-red-400">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" size={18} />
                      Enviando...
                    </>
                  ) : (
                    <>
                      {requestQuoteLabel}
                      <FaArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
              )}
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
