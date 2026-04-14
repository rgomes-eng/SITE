'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import ContactSection from '@/components/sections/ContactSection'
import Container from '@/components/common/Container'
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function ContatoPage() {
  const { language } = useLanguage()
  const isPt = language === 'pt'

  const title = isPt ? 'Entre em Contato' : 'Get in Touch'
  const subtitle = isPt
    ? 'Estamos prontos para atender você. Envie sua mensagem ou utilize um dos canais abaixo.'
    : 'We are ready to assist you. Send your message or use one of the channels below.'

  const contactInfo = [
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '(92) 98124-2509',
      href: 'https://wa.me/5592981242509',
      color: 'text-green-500',
    },
    {
      icon: FaPhone,
      label: isPt ? 'Telefone' : 'Phone',
      value: '(92) 98124-2509',
      href: 'tel:+5592981242509',
      color: 'text-primary',
    },
    {
      icon: FaEnvelope,
      label: 'E-mail',
      value: 'contato@rgomesengenharia.com',
      href: 'mailto:contato@rgomesengenharia.com',
      color: 'text-blue-500',
    },
    {
      icon: FaMapMarkerAlt,
      label: isPt ? 'Localização' : 'Location',
      value: 'Manaus, Amazonas',
      href: '#',
      color: 'text-red-500',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-secondary-dark/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-lg text-gray-300">
              {subtitle}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300"
              >
                <item.icon className={`${item.color} mb-4`} size={28} />
                <h3 className="text-sm font-medium text-gray-400 mb-1">
                  {item.label}
                </h3>
                <p className="text-white font-semibold group-hover:text-primary transition-colors">
                  {item.value}
                </p>
              </motion.a>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <ContactSection />
    </main>
  )
}
