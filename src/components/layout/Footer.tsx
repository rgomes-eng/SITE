 'use client'

import Link from 'next/link'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa'
import Container from '@/components/common/Container'
import Logo from '@/components/common/Logo'
import { useLanguage } from '@/context/LanguageContext'

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5592999999999'

const servicesLabels = {
  pt: ['Construção', 'Reformas', 'Manutenções', 'Gestão de Projetos', 'Tecnologia'],
  en: ['Construction', 'Renovations', 'Maintenance', 'Project Management', 'Technology'],
} as const

export default function Footer() {
  const { language } = useLanguage()
  const isPt = language === 'pt'

  const brandDescription = isPt
    ? 'Engenharia civil de excelência, unindo tradição construtiva e inovação tecnológica.'
    : 'Civil engineering excellence, bringing together construction tradition and technological innovation.'

  const servicesTitle = isPt ? 'Serviços' : 'Services'
  const quickLinksTitle = isPt ? 'Links Rápidos' : 'Quick Links'
  const contactTitle = isPt ? 'Contato' : 'Contact'

  const aboutLabel = isPt ? 'Sobre Nós' : 'About Us'
  const projectsLabel = isPt ? 'Projetos' : 'Projects'
  const technologyLabel = isPt ? 'Tecnologia' : 'Technology'
  const contactLabel = isPt ? 'Contato' : 'Contact'

  const whatsappLabel = 'WhatsApp'
  const emailLabel = isPt ? 'E-mail' : 'Email'
  const locationLabel = isPt ? 'Manaus, Amazonas' : 'Manaus, Amazonas – Brazil'

  const privacyLabel = isPt ? 'Política de Privacidade' : 'Privacy Policy'
  const termsLabel = isPt ? 'Termos de Uso' : 'Terms of Use'

  const copyright = isPt
    ? 'Todos os direitos reservados.'
    : 'All rights reserved.'

  const servicesNames = servicesLabels[language]

  return (
    <footer className="bg-background-card border-t border-border">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Logo size="lg" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {brandDescription}
            </p>
            <div className="flex gap-4">
              {[
                { icon: FaFacebook, href: '#' },
                { icon: FaInstagram, href: '#' },
                { icon: FaLinkedin, href: '#' },
                { icon: FaWhatsapp, href: `https://wa.me/${whatsappNumber}` },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href !== '#' ? '_blank' : undefined}
                  rel={href !== '#' ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-secondary/80 transition-colors"
                  aria-label={href}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              {servicesTitle}
            </h3>
            <ul className="space-y-2">
              {['construcao', 'reformas', 'manutencoes', 'gestao-projetos', 'tecnologia'].map(
                (slug, i) => (
                  <li key={slug}>
                    <Link
                      href={`/servicos/${slug}`}
                      className="text-gray-400 hover:text-primary transition-colors text-sm"
                    >
                      {servicesNames[i]}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              {quickLinksTitle}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sobre"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {aboutLabel}
                </Link>
              </li>
              <li>
                <Link
                  href="/projetos"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {projectsLabel}
                </Link>
              </li>
              <li>
                <Link
                  href="/tecnologia"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {technologyLabel}
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {contactLabel}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              {contactTitle}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  <FaWhatsapp size={18} className="flex-shrink-0" />
                  {whatsappLabel}
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@rgomesengenharia.com.br"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  <FaEnvelope size={18} className="flex-shrink-0" />
                  <span>
                    {emailLabel}: contato@rgomesengenharia.com.br
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <FaMapMarkerAlt
                  size={18}
                  className="flex-shrink-0 mt-0.5"
                />
                <span>{locationLabel}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} RGOMES Engenharia. {copyright}
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-400"
            >
              {privacyLabel}
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-400"
            >
              {termsLabel}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

