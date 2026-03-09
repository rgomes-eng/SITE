import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tecnologia',
  description:
    'Soluções tecnológicas para engenharia civil - BIM, modelagem 3D e gestão digital de projetos.',
}

export default function TecnologiaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
