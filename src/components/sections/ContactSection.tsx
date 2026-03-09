'use client'

import ContactForm from '@/components/forms/ContactForm'
import Image from 'next/image'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import { useLanguage } from '@/context/LanguageContext'

export default function ContactSection() {
  const { language } = useLanguage()
  const isPt = language === 'pt'

  const sectionLabel = isPt ? 'Contato' : 'Contact'
  const title = isPt
    ? 'Vamos tirar seu projeto do papel'
    : 'Let’s bring your project to life'
  const description = isPt
    ? 'Envie sua mensagem e nós retornaremos com um direcionamento claro para o próximo passo.'
    : 'Send us your message and we will get back to you with a clear next step.'
  const imageAlt = isPt ? 'Ilustração de contato' : 'Contact illustration'

  return (
    <Section
      id="contato"
      className="py-20"
      backgroundImageAlt={imageAlt}
    >
      <div className="absolute inset-0 bg-background-card/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(42,91,168,0.14),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_80%,rgba(232,117,10,0.12),transparent_45%)]" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="text-primary font-semibold mb-4">{sectionLabel}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-gray-300/80 text-lg leading-relaxed mb-8">
              {description}
            </p>

            <div className="relative rounded-3xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(42,91,168,0.22),transparent_55%)]" />
              <Image
                src="/illustrations/contact.svg"
                alt={imageAlt}
                width={1200}
                height={900}
                className="w-full h-auto"
              />
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

