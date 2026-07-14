import 'dotenv/config'
import { MetadataRoute } from 'next'
import { portfolioProjects } from '@/data/data'

export const dynamic = 'force-static'

const BASE_URL = process.env.BASE_URL || 'https://epaserocontracting.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      priority: 0.9,
    },
    // /faqs is deliberately absent — spec §7 wants it reachable but unlisted.
  ]

  const dynamicUrls: MetadataRoute.Sitemap = portfolioProjects.map(project => ({
    url: `${BASE_URL}/portfolio/${project.slug}`,
    lastModified: now,
    priority: 0.6,
  }))

  return [...staticUrls, ...dynamicUrls]
}
