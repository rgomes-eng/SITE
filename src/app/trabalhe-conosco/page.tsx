import { Metadata } from 'next'
import WorkWithUsSection from '@/components/sections/WorkWithUsSection'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'

export const metadata: Metadata = {
  title: 'Trabalhe Conosco | RGOMES Engenharia',
  description: 'Junte-se à equipe RGOMES Engenharia. Envie seu currículo e faça parte dos nossos projetos de excelência em Manaus.',
}

export default function WorkWithUsPage() {
  return (
    <>
      <Section className="pt-32 pb-16">
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-semibold mb-5">Faça Parte da Equipe</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.06] tracking-tight mb-6">
              Construa sua{' '}
              <span className="text-primary">carreira conosco</span>
            </h1>
            <p className="text-gray-300/80 text-lg md:text-xl leading-relaxed mb-12">
              Estamos sempre em busca de profissionais talentosos para compor nossa equipe.
              Envie seu currículo e venha fazer parte de projetos que transformam Manaus.
            </p>
          </div>
        </Container>
      </Section>

      <WorkWithUsSection />
    </>
  )
}
