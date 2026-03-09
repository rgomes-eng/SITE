'use client'

import ContactForm from '@/components/forms/ContactForm'
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5592999999999'

export default function ContatoPage() {
  const { language } = useLanguage()
  const isPt = language === 'pt'

  const heading = isPt ? 'Entre em Contato' : 'Get in Touch'
  const intro = isPt
    ? 'Preencha o formulário abaixo ou utilize nossos canais de atendimento. Nossa equipe retornará o mais breve possível.'
    : 'Fill out the form below or use our support channels. Our team will get back to you as soon as possible.'

  const otherChannels = isPt ? 'Outros Canais' : 'Other Channels'
  const emailLabel = isPt ? 'E-mail' : 'Email'
  const locationLabel = isPt
    ? 'Manaus, Amazonas'
    : 'Manaus, Amazonas – Brazil'

  return (
    <div className="pt-24 pb-20">
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {heading}
          </h1>
          <p className="text-gray-400 text-lg">{intro}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-background-card border border-border">
              <h3 className="font-semibold text-white mb-4">
                {otherChannels}
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
                  >
                    <FaWhatsapp
                      size={24}
                      className="text-green-500"
                    />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contato@rgomesengenharia.com.br"
                    className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
                  >
                    <FaEnvelope size={20} />
                    <span>
                      {emailLabel}: contato@rgomesengenharia.com.br
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <FaMapMarkerAlt
                    size={20}
                    className="flex-shrink-0 mt-1"
                  />
                  <span>{locationLabel}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
