 'use client'

import Link from 'next/link'
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import Container from '@/components/common/Container'
import Logo from '@/components/common/Logo'
import { useLanguage } from '@/context/LanguageContext'
import { APP, CONTACT } from '@/constants/app'

const SERVICES = [
  { slug: 'construcao', pt: 'Construção', en: 'Construction' },
  { slug: 'reformas', pt: 'Reformas', en: 'Renovation' },
  { slug: 'manutencoes', pt: 'Manutenções', en: 'Maintenance' },
  { slug: 'gestao-projetos', pt: 'Gestão de Projetos', en: 'Project Management' },
  { slug: 'tecnologia', pt: 'Tecnologia', en: 'Technology' },
] as const

const COMPANY_LINKS = [
  { href: '/sobre', pt: 'Sobre Nós', en: 'About Us' },
  { href: '/trabalhe-conosco', pt: 'Trabalhe Conosco', en: 'Work with Us' },
  { href: '/projects', pt: 'Projetos', en: 'Projects' },
  { href: '/tecnologia', pt: 'Tecnologia', en: 'Technology' },
] as const

const SOCIAL_LINKS = [
  { icon: FaFacebook, href: CONTACT.SOCIAL.FACEBOOK, color: 'hover:text-blue-500' },
  { icon: FaInstagram, href: CONTACT.SOCIAL.INSTAGRAM, color: 'hover:text-pink-500' },
  { icon: FaWhatsapp, href: CONTACT.SOCIAL.WHATSAPP, color: 'hover:text-green-500' },
] as const

export default function Footer() {
  const { language } = useLanguage()
  const isPt = language === 'pt'

  return (
    <footer className="bg-background-card border-t border-border">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Logo size="lg" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {APP.DESCRIPTION}
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href, color }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-gray-400 ${color} hover:bg-secondary/80 transition-colors`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold text-white mb-4">{isPt ? 'Serviços' : 'Services'}</h3>
            <ul className="space-y-2">
              {SERVICES.map(({ slug, ...labels }) => (
                <li key={slug}>
                  <Link href={`/servicos/${slug}`} className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {isPt ? labels.pt : labels.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold text-white mb-4">{isPt ? 'Empresa' : 'Company'}</h3>
            <ul className="space-y-3">
              {COMPANY_LINKS.map(({ href, ...labels }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-primary transition-colors">
                    {isPt ? labels.pt : labels.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-white mb-4">{isPt ? 'Contato' : 'Contact'}</h3>
            <div className="space-y-3">
              <a href={`https://wa.me/${CONTACT.PHONE.WHATSAPP}`} className="flex items-center gap-3 text-gray-400 hover:text-green-500 transition-colors">
                <FaWhatsapp className="text-green-500" size={18} />
                <span className="text-sm">{CONTACT.PHONE.FORMATTED}</span>
              </a>
              <a href={CONTACT.SOCIAL.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-pink-500 transition-colors">
                <FaInstagram className="text-pink-500" size={18} />
                <span className="text-sm">@rgomes.engenharia</span>
              </a>
              <a href={`mailto:${CONTACT.EMAIL.PRIMARY}`} className="flex items-center gap-3 text-gray-400 hover:text-blue-500 transition-colors">
                <FaEnvelope className="text-blue-500" size={18} />
                <span className="text-sm">{CONTACT.EMAIL.PRIMARY}</span>
              </a>
              <a href={`mailto:${CONTACT.EMAIL.SECONDARY}`} className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors">
                <FaEnvelope className="text-red-500" size={18} />
                <span className="text-sm">{CONTACT.EMAIL.SECONDARY}</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-red-500" size={18} />
                <span className="text-sm">{CONTACT.ADDRESS.FULL}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {new Date().getFullYear()} {APP.NAME}. {isPt ? 'Todos os direitos reservados.' : 'All rights reserved.'}
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/politica-de-privacidade" className="text-gray-400 hover:text-primary transition-colors">
                {isPt ? 'Política de Privacidade' : 'Privacy Policy'}
              </Link>
              <Link href="/termos-de-uso" className="text-gray-400 hover:text-primary transition-colors">
                {isPt ? 'Termos de Uso' : 'Terms of Use'}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

