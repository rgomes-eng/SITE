import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description: 'Conheça a RGOMES Engenharia - Mais de 15 anos de experiência em engenharia civil em Manaus.',
}

export default function SobreLayout({ children }: { children: React.ReactNode }) {
  return children
}
