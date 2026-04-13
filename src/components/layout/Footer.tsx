 'use client'

import Link from 'next/link'
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa'
import Container from '@/components/common/Container'
import Logo from '@/components/common/Logo'
import { useLanguage } from '@/context/LanguageContext'

const whatsappNumber = '5592981242509'

const servicesLabels = {
  pt: ['Construção', 'Reformas', 'Manutenções', 'Gestão de Projetos', 'Tecnologia'],
  en: ['Construction', 'Renovation', 'Maintenance', 'Project Management', 'Technology'],
}

const companyLabels = {
  pt: ['Sobre Nós', 'Trabalhe Conosco', 'Projetos', 'Tecnologia'],
  en: ['About Us', 'Work with Us', 'Projects', 'Technology'],
}

export default function Footer() {
  const { language } = useLanguage()
  const isPt = language === 'pt'

  const brandDescription = isPt
    ? 'Engenharia civil de excelência, unindo tradição construtiva e inovação tecnológica.'
    : 'Civil engineering excellence, bringing together construction tradition and technological innovation.'

  const servicesTitle = isPt ? 'Serviços' : 'Services'
  const companyTitle = isPt ? 'Empresa' : 'Company'
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
  const companyNames = companyLabels[language]

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
                { icon: FaFacebook, href: 'https://facebook.com/engenhariargomes' },
                { icon: FaInstagram, href: 'https://instagram.com/rgomes.engenharia' },
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

          {/* Empresa */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              {companyTitle}
            </h3>
            <ul className="space-y-3">
              {companyNames.map((item, i) => (
                <li key={i}>
                  <Link
                    href={
                      item === 'Sobre Nós' || item === 'About Us'
                        ? '/sobre'
                        : item === 'Trabalhe Conosco' || item === 'Work with Us'
                        ? '/trabalhe-conosco'
                        : item === 'Projetos' || item === 'Projects'
                        ? '/projects'
                        : '/tecnologia'
                    }
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              {contactTitle}
            </h3>
            <div className="space-y-3">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
              >
                <FaWhatsapp className="text-green-500" size={18} />
                <span className="text-sm">(92) 98124-2509</span>
              </a>
              <a
                href="https://instagram.com/rgomes.engenharia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-pink-500 transition-colors"
              >
                <FaInstagram className="text-pink-500" size={18} />
                <span className="text-sm">@rgomes.engenharia</span>
              </a>
              <a
                href="mailto:contato@rgomesengenharia.com"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
              >
                <FaEnvelope className="text-blue-500" size={18} />
                <span className="text-sm">contato@rgomesengenharia.com</span>
              </a>
              <a
                href="mailto:engenhariargomes@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
              >
                <FaEnvelope className="text-red-500" size={18} />
                <span className="text-sm">engenhariargomes@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-red-500" size={18} />
                <span className="text-sm">{locationLabel}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {new Date().getFullYear()} RGOMES Engenharia. {copyright}
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                {privacyLabel}
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                {termsLabel}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

