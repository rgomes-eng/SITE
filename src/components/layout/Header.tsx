'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes } from 'react-icons/fa'
import { cn } from '@/lib/utils'
import Container from '@/components/common/Container'
import Logo from '@/components/common/Logo'
import { useLanguage } from '@/context/LanguageContext'

const navLinks = {
  pt: [
    { href: '/', label: 'Início' },
    { href: '/sobre', label: 'Sobre Nós' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/projetos', label: 'Projetos' },
    { href: '/tecnologia', label: 'Tecnologia' },
    { href: '/contato', label: 'Contato' },
  ],
  en: [
    { href: '/', label: 'Home' },
    { href: '/sobre', label: 'About Us' },
    { href: '/servicos', label: 'Services' },
    { href: '/projetos', label: 'Projects' },
    { href: '/tecnologia', label: 'Technology' },
    { href: '/contato', label: 'Contact' },
  ],
} as const

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = navLinks[language]

  const ctaLabel = language === 'pt' ? 'Orçamento' : 'Request Quote'
  const mobileCtaLabel =
    language === 'pt' ? 'Solicitar Orçamento' : 'Request a Quote'

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background-dark/80 backdrop-blur-xl shadow-[0_12px_40px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/10'
          : 'bg-transparent'
      )}
    >
      <nav className="py-4">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <Logo size="lg" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-white',
                    pathname === link.href ? 'text-white' : 'text-gray-300'
                  )}
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex items-center gap-4">
                <div className="flex items-center rounded-full bg-white/5 ring-1 ring-white/10 p-0.5 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setLanguage('pt')}
                    className={cn(
                      'px-2.5 py-1 rounded-full transition-colors',
                      language === 'pt'
                        ? 'bg-primary text-white'
                        : 'text-gray-300 hover:text-white'
                    )}
                  >
                    PT
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage('en')}
                    className={cn(
                      'px-2.5 py-1 rounded-full transition-colors',
                      language === 'en'
                        ? 'bg-primary text-white'
                        : 'text-gray-300 hover:text-white'
                    )}
                  >
                    EN
                  </button>
                </div>

                <Link
                  href="/contato"
                  className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
                >
                  {ctaLabel}
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center rounded-full bg-white/5 ring-1 ring-white/10 p-0.5 text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setLanguage('pt')}
                      className={cn(
                        'px-2.5 py-1 rounded-full transition-colors',
                        language === 'pt'
                          ? 'bg-primary text-white'
                          : 'text-gray-300 hover:text-white'
                      )}
                    >
                      PT
                    </button>
                    <button
                      type="button"
                      onClick={() => setLanguage('en')}
                      className={cn(
                        'px-2.5 py-1 rounded-full transition-colors',
                        language === 'en'
                          ? 'bg-primary text-white'
                          : 'text-gray-300 hover:text-white'
                      )}
                    >
                      EN
                    </button>
                  </div>
                </div>

                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'text-base font-medium py-2',
                      pathname === link.href ? 'text-white' : 'text-gray-300'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href="/contato"
                  className="px-5 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {mobileCtaLabel}
                </Link>
              </div>
            </div>
          )}
        </Container>
      </nav>
    </header>
  )
}

