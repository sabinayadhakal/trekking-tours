// src/app/blog/sitemap.ts
import { MetadataRoute } from 'next'

export default function blogSitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.himkalaadventure.com'
  
  // All your blog posts with their published dates
  const blogPosts = [
    { 
      slug: 'solo-trekking-nepal-2026',
      lastModified: '2026-08-07',
      priority: 0.85,
    },
    { 
      slug: 'nepal-trek-cost-2026',
      lastModified: '2026-06-04',
      priority: 0.8,
    },
    { 
      slug: 'everest-vs-annapurna-base-camp',
      lastModified: '2026-05-26',
      priority: 0.9,
    },
    { 
      slug: 'best-beginner-treks-nepal',
      lastModified: '2026-05-24',
      priority: 0.85,
    },
    { 
      slug: 'tilicho-lake-sacred-trek',
      lastModified: '2026-05-20',
      priority: 0.85,
    },
    { 
      slug: 'pigeons-symbol-peace-nepal',
      lastModified: '2026-05-09',
      priority: 0.8,
    },
    { 
      slug: 'best-time-to-visit-nepal',
      lastModified: '2026-05-07',
      priority: 0.9,
    },
  ]
  
  return blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: 'monthly',
    priority: post.priority,
  }))
}