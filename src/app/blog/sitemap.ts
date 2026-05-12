// src/app/blog/sitemap.ts
import { MetadataRoute } from 'next'

export default async function blogSitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.himkalaadventure.com'
  
  // List all your blog posts here
  const blogPosts = [
    'pigeons-symbol-peace-nepal',
    'best-time-to-visit-nepal'
    // Add more blog slugs as you create them
  ]
  
  return blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))
}