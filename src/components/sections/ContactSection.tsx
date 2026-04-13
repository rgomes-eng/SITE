'use client'

import ContactForm from '@/components/forms/ContactForm'
import Image from 'next/image'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import { FaWhatsapp, FaPhone, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'

export default function ContactSection() {
  const { language } = useLanguage()
  
  const content = {
    pt: {
      sectionLabel: 'Contato',
      title: 'Vamos tirar seu projeto do papel',
      description: 'Envie sua mensagem e nós retornaremos com um direcionamento claro para o próximo passo.',
      imageAlt: 'Secretária atendendo',
    },
    en: {
      sectionLabel: 'Contact',
      title: "Let's bring your project to life",
      description: 'Send your message and we will return with clear guidance for the next step.',
      imageAlt: 'Secretary assisting',
    },
  }

  return (
    <Section
      id="contato"
      className="py-20"
      backgroundImageAlt={content[language].imageAlt}
    >
      <div className="absolute inset-0 bg-background-card/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(42,91,168,0.14),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_80%,rgba(232,117,10,0.12),transparent_45%)]" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="text-primary font-semibold mb-4">{content[language].sectionLabel}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {content[language].title}
            </h2>
            <p className="text-gray-300/80 text-lg leading-relaxed mb-8">
              {content[language].description}
            </p>

            <div className="relative rounded-3xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(42,91,168,0.22),transparent_55%)]" />
              <Image
                src="/illustrations/Secretária.png"
                alt={content[language].imageAlt}
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>

            {/* Contact Information */}
            <div className="mt-8 space-y-4">
              <a
                href="tel:+5592981242509"
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
              >
                <FaPhone className="text-primary" size={20} />
                <span className="text-sm">(92) 98124-2509</span>
              </a>
              
              <a
                href="mailto:contato@rgomesengenharia.com"
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
              >
                <FaEnvelope className="text-primary" size={20} />
                <span className="text-sm">contato@rgomesengenharia.com</span>
              </a>
              
              <a
                href="https://wa.me/5592981242509"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
              >
                <FaWhatsapp className="text-green-500" size={20} />
                <span className="text-sm">(92) 98124-2509</span>
              </a>
              
              <a
                href="https://instagram.com/engenharia.rgomes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-pink-500 transition-colors"
              >
                <FaInstagram className="text-pink-500" size={20} />
                <span className="text-sm">@engenharia.rgomes</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

