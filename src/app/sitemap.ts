import { MetadataRoute } from 'next'
import { PATHS } from '@/config/paths'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rgomesengenharia.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()
  
  const routes = [
    PATHS.HOME,
    PATHS.ABOUT,
    PATHS.CONTACT,
    PATHS.PROJECTS,
    PATHS.SERVICES,
    PATHS.WORK_WITH_US,
    PATHS.QUICK_SERVICES,
  ]

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: currentDate,
    changeFrequency: route === PATHS.HOME ? 'daily' : 'weekly',
    priority: route === PATHS.HOME ? 1.0 : 0.8,
  }))
}
