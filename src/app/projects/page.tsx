import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/server'
import ProjectsClient from './ProjectsClient'

export const metadata: Metadata = {
  title: 'Projetos',
  description:
    'Portfólio de projetos da RGOMES Engenharia - construção, reformas e obras de engenharia civil.',
}

export default async function ProjetosPage() {
  const hasSupabaseEnv =
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  let projects: any[] | null = null

  if (hasSupabaseEnv) {
    const supabase = await createClient()
    const { data } = await supabase
      .from('projects')
      .select('*')
      .eq('is_active', true)
      .order('order_index')
    projects = data
  }

  const displayProjects = projects?.length
    ? projects
    : [
        {
          id: '1',
          title: 'Edificação Residencial',
          slug: 'edificacao-residencial',
          short_description: 'Obra completa com alta qualidade.',
          image_url: '/illustrations/SITE_Residencial3_16x9.png',
          category: 'Construção',
        },
        {
          id: '2',
          title: 'Reforma Corporativa',
          slug: 'reforma-corporativa',
          short_description: 'Modernização de espaços comerciais.',
          image_url: '/illustrations/[Projetos]Reforma Corporativa.png',
          category: 'Reformas',
        },
        {
          id: '3',
          title: 'Infraestrutura Industrial',
          slug: 'infraestrutura-industrial',
          short_description: 'Projeto com gestão BIM.',
          image_url: '/illustrations/SITE_Tecnologia_Infra.png',
          category: 'Tecnologia',
        },
        {
          id: '4',
          title: 'Condomínio Residencial',
          slug: 'condominio-residencial',
          short_description: 'Construção de unidades habitacionais.',
          image_url: '/illustrations/SITE_OBRAGRANDE2.png',
          category: 'Construção',
        },
        {
          id: '5',
          title: 'Manutenção Predial',
          slug: 'manutencao-predial',
          short_description: 'Serviços preventivos em edificações.',
          image_url: '/illustrations/Reforma_Fachada.png',
          category: 'Manutenções',
        },
        {
          id: '6',
          title: 'Centro Comercial',
          slug: 'centro-comercial',
          short_description: 'Ampliação e adequações.',
          image_url: '/illustrations/SITE_ManutençãoShopping.png',
          category: 'Reformas',
        },
      ]

  return <ProjectsClient projects={displayProjects} />
}
