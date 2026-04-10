'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle, FaAward, FaUsers, FaHandshake, FaLightbulb, FaShieldAlt, FaRecycle, FaChartLine } from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'
import Image from 'next/image'
import { cn } from '@/utils/helpers'

const values = {
  pt: [
    {
      icon: FaAward,
      title: 'Excelência Técnica',
      description: 'Priorizamos precisão e inovação em todos os projetos.',
    },
    {
      icon: FaShieldAlt,
      title: 'Integridade',
      description: 'Agimos com ética, transparência e responsabilidade em cada etapa.',
    },
    {
      icon: FaHandshake,
      title: 'Parceria',
      description: 'Construímos relacionamentos sólidos, focados no sucesso mútuo.',
    },
    {
      icon: FaRecycle,
      title: 'Sustentabilidade',
      description: 'Integramos práticas responsáveis para um impacto positivo duradouro.',
    },
    {
      icon: FaChartLine,
      title: 'Melhoria Contínua',
      description: 'Estamos sempre evoluindo processos, métodos e entregas.',
    },
    {
      icon: FaCheckCircle,
      title: 'Gestão de Riscos Proativa',
      description: 'Identificamos e mitigamos vulnerabilidades antecipadamente, assegurando prazos, qualidade e segurança inigualáveis.',
    },
  ],
  en: [
    {
      icon: FaAward,
      title: 'Technical Excellence',
      description: 'We prioritize precision and innovation in all projects.',
    },
    {
      icon: FaShieldAlt,
      title: 'Integrity',
      description: 'We act with ethics, transparency and responsibility in every step.',
    },
    {
      icon: FaHandshake,
      title: 'Partnership',
      description: 'We build solid relationships focused on mutual success.',
    },
    {
      icon: FaRecycle,
      title: 'Sustainability',
      description: 'We integrate responsible practices for lasting positive impact.',
    },
    {
      icon: FaChartLine,
      title: 'Continuous Improvement',
      description: 'We are always evolving processes, methods and deliveries.',
    },
    {
      icon: FaCheckCircle,
      title: 'Proactive Risk Management',
      description: 'We identify and mitigate vulnerabilities in advance, ensuring unparalleled deadlines, quality and safety.',
    },
  ],
} as const

const differentials = {
  pt: [
    'Abordagem técnica orientada à solução',
    'Compromisso com a qualidade em cada etapa',
    'Confiabilidade que gera segurança',
    'Inovação com aplicação prática',
    'Atendimento personalizado',
    'Foco no cliente',
  ],
  en: [
    'Solution-oriented technical approach',
    'Commitment to quality at every step',
    'Reliability that generates security',
    'Innovation with practical application',
    'Personalized service',
    'Customer focus',
  ],
} as const

export default function SobrePage() {
  const { language } = useLanguage()
  const isPt = language === 'pt'

  const content = {
    pt: {
      heading: 'Quem Somos',
      heroParagraph: 'A <span class="text-primary font-bold">RGOMES</span> <span class="text-white font-bold">Engenharia</span> é uma empresa dedicada à excelência em engenharia civil, especializada em obras, reformas e manutenções prediais com foco em soluções integradas e inovadoras. Com uma abordagem técnica rigorosa, combinamos expertise em projetos complexos, gestão de facilities e automação para entregar resultados que superam expectativas. Nosso compromisso é transformar desafios em oportunidades, garantindo qualidade superior, prazos rigorosos e parcerias duradouras baseadas em confiança e transparência.',
      
      visionMissionHeading: 'Visão e Missão',
      vision: 'Ser referência em engenharia pela confiança, excelência nas entregas e soluções inteligentes para diversos segmentos.',
      mission: 'Entregar obras civis inovadoras e de alta qualidade, com foco em eficiência e parcerias sólidas em Manaus e região.',
      
      differentialsHeading: 'Nossos Diferenciais',
      differentialsIntro: 'A RGOMES Engenharia se diferencia por unir solidez técnica, visão estratégica e atendimento próximo, criando soluções que vão além do básico e entregam mais segurança para o cliente.',
    },
    en: {
      heading: 'About Us',
      heroParagraph: '<span class="text-primary font-bold">RGOMES</span> <span class="text-white font-bold">Engineering</span> is a company dedicated to excellence in civil engineering, specializing in construction, renovations and building maintenance with a focus on integrated and innovative solutions. With a rigorous technical approach, we combine expertise in complex projects, facilities management and automation to deliver results that exceed expectations. Our commitment is to transform challenges into opportunities, ensuring superior quality, rigorous deadlines and lasting partnerships based on trust and transparency.',
      
      visionMissionHeading: 'Vision and Mission',
      vision: 'To be a reference in engineering for trust, excellence in deliveries and intelligent solutions for different segments.',
      mission: 'To deliver innovative and high-quality civil works, with a focus on efficiency and solid partnerships in Manaus and region.',
      
      differentialsHeading: 'Our Differentials',
      differentialsIntro: 'RGOMES Engineering differentiates itself by combining technical solidity, strategic vision and close service, creating solutions that go beyond the basic and deliver more security to the client.',
    },
  }

  const currentValues = values[language]
  const currentDifferentials = differentials[language]

  return (
    <div className="pt-32 pb-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/illustrations/SITE_OBRAGRANDE2.png"
          alt="Obra de grande porte"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-background-card/80" />
      
      <div className="container mx-auto px-4 mb-20 relative z-10">
        {/* Hero Section - Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 text-left"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {content[language].heading}
            </span>
          </motion.div>

          {/* Hero Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-300 text-xl leading-relaxed max-w-4xl text-left text-justify"
          >
            <div dangerouslySetInnerHTML={{ __html: content[language].heroParagraph }} />
          </motion.div>
        </motion.div>

        {/* Vision, Mission, Values - Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                {content[language].visionMissionHeading}
              </span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-background-card to-background-card/50 border border-primary/20 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <FaLightbulb className="text-primary" size={16} />
                </div>
                {language === 'pt' ? 'Visão' : 'Vision'}
              </h3>
              <p className="text-gray-300 leading-relaxed">{content[language].vision}</p>
            </motion.div>
            
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-background-card to-background-card/50 border border-primary/20 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <FaAward className="text-primary" size={16} />
                </div>
                {language === 'pt' ? 'Missão' : 'Mission'}
              </h3>
              <p className="text-gray-300 leading-relaxed">{content[language].mission}</p>
            </motion.div>
          </div>

          {/* Values Title - Outside Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-center mb-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                {language === 'pt' ? 'Valores' : 'Values'}
              </span>
            </h3>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-background-card to-background-card/50 border border-primary/20 backdrop-blur-sm"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentValues.map((v, index) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                    <v.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{v.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{v.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Differentials - Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-20"
        >
          {/* Title - Outside Card */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
              {content[language].differentialsHeading}
            </span>
          </motion.h2>
          
          {/* Differentials Grid Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-background-card to-background-card/50 border border-primary/20 backdrop-blur-sm"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentDifferentials.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/0 border border-primary/10 hover:from-primary/10 hover:border-primary/20 transition-all duration-300 group"
                >
                  <FaCheckCircle
                    className="text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300"
                    size={20}
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
