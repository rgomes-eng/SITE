import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import CTASection from '@/components/sections/CTASection'
import ContactSection from '@/components/sections/ContactSection'
import { createClient } from '@/lib/supabase/server'

export default async function Home() {
  const hasSupabaseEnv =
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  const projects: any[] = []

  if (hasSupabaseEnv) {
    const supabase = await createClient()

    const projectsRes = await supabase
      .from('projects')
      .select(
        'id, title, slug, short_description, image_url, category'
      )
      .eq('is_featured', true)
      .eq('is_active', true)
      .order('order_index')
      .limit(3)

    projects.push(...(projectsRes.data ?? []))
  }

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection projects={projects} />
      <CTASection />
      <ContactSection />
    </>
  )
}
