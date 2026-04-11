import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/server'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params

  const hasSupabaseEnv =
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!hasSupabaseEnv) {
    return { title: slug as string }
  }

  const supabase = await createClient()
  const { data } = await supabase.from('projects').select('title').eq('slug', slug).single()
  const title = data?.title || slug
  return { title: title as string }
}

export default async function ProjetoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const hasSupabaseEnv =
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!hasSupabaseEnv) notFound()

  const supabase = await createClient()
  const { data: project } = await supabase.from('projects').select('*').eq('slug', slug).single()

  if (!project) notFound()

  const images = (project.images as string[]) || []

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <Link href="/projetos" className="text-primary hover:underline mb-6 inline-block">
          ← Voltar aos Projetos / Back to Projects
        </Link>

        <article className="max-w-4xl">
          {project.image_url && (
            <div className="aspect-video rounded-xl overflow-hidden bg-secondary/30 mb-8 relative">
              <Image
                src={project.image_url}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {project.category && (
            <span className="text-primary font-medium">{project.category}</span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">{project.title}</h1>
          {project.location && (
            <p className="text-gray-500 text-sm mb-4">{project.location}</p>
          )}
          {project.description && (
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 text-lg leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>
        )}

          {images.length > 0 && (
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {images.map((url: string, i: number) => (
                <div key={i} className="aspect-video rounded-lg overflow-hidden bg-secondary/30 relative">
                  <Image src={url} alt={`${project.title} - ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          )}

          <div className="mt-12">
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
            >
              Solicitar Orçamento / Request Quote
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}
