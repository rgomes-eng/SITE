import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import TechSection from '@/components/sections/TechSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'
import ContactSection from '@/components/sections/ContactSection'
import { createClient } from '@/lib/supabase/server'

export default async function Home() {
  const hasSupabaseEnv =
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  const projects: any[] = []
  const testimonials: any[] = []

  if (hasSupabaseEnv) {
    const supabase = await createClient()

    const [projectsRes, testimonialsRes] = await Promise.all([
      supabase
        .from('projects')
        .select(
          'id, title, slug, short_description, image_url, category'
        )
        .eq('is_featured', true)
        .eq('is_active', true)
        .order('order_index')
        .limit(3),
      supabase
        .from('testimonials')
        .select('*')
        .eq('is_active', true)
        .order('order_index')
        .limit(3),
    ])

    projects.push(...(projectsRes.data ?? []))
    testimonials.push(...(testimonialsRes.data ?? []))
  }

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection projects={projects} />
      <TechSection />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection />
      <ContactSection />
    </>
  )
}
