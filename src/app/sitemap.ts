import { getAllTreks, getAllRegions } from '@/lib/supabase/treks';
import { getAllBlogPosts } from '@/lib/supabase/blog';
import { MetadataRoute } from 'next';

const baseUrl = 'https://www.himkalaadventure.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const treks = await getAllTreks();
  const regions = await getAllRegions();
  const blogs = await getAllBlogPosts();

  // Static pages (your existing hardcoded pages)
  const staticPages = [
    { path: '', priority: 1.0, changefreq: 'daily' },
    { path: '/about-us', priority: 0.9, changefreq: 'monthly' },
    { path: '/contact', priority: 0.8, changefreq: 'monthly' },
    { path: '/blog', priority: 0.8, changefreq: 'weekly' },
    { path: '/services/trekking', priority: 0.95, changefreq: 'weekly' },
    { path: '/destinations/nepal', priority: 0.95, changefreq: 'weekly' },
    // Add your other static pages here
  ];

  // Dynamic trek pages
  const trekPages = treks.map((trek) => ({
    url: `${baseUrl}/services/trekking/${trek.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Comparison pages (trek1-vs-trek2)
  const comparisonPages = [];
  for (let i = 0; i < treks.length; i++) {
    for (let j = i + 1; j < treks.length; j++) {
      comparisonPages.push({
        url: `${baseUrl}/compare/${treks[i].slug}-vs-${treks[j].slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      });
    }
  }

  // Region pages
  const regionPages = regions.map((region) => ({
    url: `${baseUrl}/destinations/${region.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // Blog pages
  const blogPages = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.updated_at),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changefreq as 'daily' | 'weekly' | 'monthly' | 'yearly',
      priority: page.priority,
    })),
    ...trekPages,
    ...comparisonPages,
    ...regionPages,
    ...blogPages,
  ];
}