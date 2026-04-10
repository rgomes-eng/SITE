import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import Providers from '@/components/common/Providers'
import { createMetadata } from '@/lib/metadata'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = createMetadata({
  title: 'RGOMES Engenharia',
  description: 'Engenharia civil de excelência em Manaus. Construção, reformas, manutenção e projetos com qualidade e inovação.',
  keywords: ['engenharia civil', 'construção', 'reformas', 'manaus', 'rgomes engenharia', 'obras civis'],
})

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
