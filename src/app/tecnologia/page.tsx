'use client'

import Link from 'next/link'
import {
  FaCube,
  FaRulerCombined,
  FaFileAlt,
  FaSync,
  FaChartLine,
  FaDatabase,
} from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'

const techItems = {
  pt: [
    {
      icon: FaCube,
      title: 'Building Information Modeling (BIM)',
      description:
        'Modelagem de informações da construção que integra geometria, dados e documentação em um único modelo digital. Reduz retrabalhos e facilita a comunicação entre equipes.',
    },
    {
      icon: FaRulerCombined,
      title: 'Modelagem 3D',
      description:
        'Criação de modelos tridimensionais para visualização, detecção de interferências e planejamento antes da execução física da obra.',
    },
    {
      icon: FaFileAlt,
      title: 'Gestão Documental',
      description:
        'Controle centralizado de projetos, especificações, memoriais e documentação técnica. Acesso organizado e versionamento.',
    },
    {
      icon: FaSync,
      title: 'Integração de Processos',
      description:
        'Fluxo de trabalho conectado da concepção à execução, com interfaces entre software de projeto e obra.',
    },
    {
      icon: FaChartLine,
      title: 'Análise e Simulações',
      description:
        'Simulações de desempenho, análise estrutural e otimização de projetos com ferramentas especializadas.',
    },
    {
      icon: FaDatabase,
      title: 'Base de Dados de Projetos',
      description:
        'Armazenamento estruturado de informações para reaproveitamento e padrões em futuros projetos.',
    },
  ],
  en: [
    {
      icon: FaCube,
      title: 'Building Information Modeling (BIM)',
      description:
        'Construction information modeling that integrates geometry, data and documentation into a single digital model. Reduces rework and improves communication between teams.',
    },
    {
      icon: FaRulerCombined,
      title: '3D Modeling',
      description:
        'Creation of three-dimensional models for visualization, clash detection and planning before the physical execution of the project.',
    },
    {
      icon: FaFileAlt,
      title: 'Document Management',
      description:
        'Centralized control of drawings, specifications, reports and technical documentation. Organized access and versioning.',
    },
    {
      icon: FaSync,
      title: 'Process Integration',
      description:
        'Connected workflow from concept to execution, integrating design and construction software.',
    },
    {
      icon: FaChartLine,
      title: 'Analysis and Simulations',
      description:
        'Performance simulations, structural analysis and project optimization with specialized tools.',
    },
    {
      icon: FaDatabase,
      title: 'Project Data Repository',
      description:
        'Structured storage of information for reuse and standardization in future projects.',
    },
  ],
} as const

export default function TecnologiaPage() {
  const { language } = useLanguage()
  const isPt = language === 'pt'
  const items = techItems[language]

  const heading = isPt
    ? 'Soluções de Tecnologia para Engenharia Civil'
    : 'Technology Solutions for Civil Engineering'

  const intro = isPt
    ? 'Utilizamos as mais modernas ferramentas digitais para elevar a qualidade, precisão e eficiência dos seus projetos. Da modelagem à execução, tecnologia a serviço da engenharia.'
    : 'We use the most modern digital tools to increase the quality, precision and efficiency of your projects. From modeling to execution, technology at the service of engineering.'

  const ctaHeading = isPt ? 'Quer saber mais?' : 'Want to know more?'
  const ctaText = isPt
    ? 'Entre em contato para conhecer como podemos aplicar tecnologia nos seus projetos.'
    : 'Get in touch to learn how we can apply technology to your projects.'
  const ctaButton = isPt
    ? 'Falar com Nossa Equipe'
    : 'Talk to Our Team'

  return (
    <div className="pt-24 pb-20">
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {heading}
          </h1>
          <p className="text-gray-400 text-lg">{intro}</p>
        </div>

        <div className="space-y-8 mb-16">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-background-card border border-border flex flex-col md:flex-row gap-6"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <item.icon className="text-primary" size={32} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-gradient-to-br from-primary/20 to-secondary/30 border border-primary/30 p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            {ctaHeading}
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">{ctaText}</p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
          >
            {ctaButton}
          </Link>
        </div>
      </section>
    </div>
  )
}
