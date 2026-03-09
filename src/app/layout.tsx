import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import Providers from '@/components/common/Providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'RGOMES Engenharia | Engenharia Civil em Manaus',
    template: '%s | RGOMES Engenharia',
  },
  description: 'RGOMES Engenharia - Construção, reformas, manutenções, gestão de projetos e soluções tecnológicas para engenharia civil em Manaus. Mais de 15 anos de experiência.',
  keywords: ['engenharia civil', 'construção', 'reformas', 'Manaus', 'BIM', 'gestão de projetos'],
  authors: [{ name: 'RGOMES Engenharia' }],
  openGraph: {
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  )
}
