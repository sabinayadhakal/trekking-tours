import { getAllTreks, getAllRegions } from '@/lib/supabase/treks';
import { getAllBlogPosts } from '@/lib/supabase/blog';
import { MetadataRoute } from 'next';

const baseUrl = 'https://www.himkalaadventure.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const treks = await getAllTreks();
  const regions = await getAllRegions();
  const blogs = await getAllBlogPosts();

  // ============================================
  // STATIC PAGES (Your existing hardcoded pages)
  // ============================================
  const staticPages = [
    // Main pages
    { path: '', priority: 1.0, changefreq: 'daily' },
    { path: '/about-us', priority: 0.9, changefreq: 'monthly' },
    { path: '/contact', priority: 0.8, changefreq: 'monthly' },
    { path: '/blog', priority: 0.8, changefreq: 'weekly' },
    
    // Trekking services
    { path: '/services/trekking', priority: 0.95, changefreq: 'weekly' },
    { path: '/services/free-tour-kathmandu', priority: 0.9, changefreq: 'weekly' },
    { path: '/services/free-walking-tour-kathmandu', priority: 0.9, changefreq: 'weekly' },
    { path: '/services/local-city-tour-kathmandu-free', priority: 0.9, changefreq: 'weekly' },
    
    // Destinations
    { path: '/destinations/nepal', priority: 0.95, changefreq: 'weekly' },
    { path: '/destinations/bhutan', priority: 0.9, changefreq: 'weekly' },
    { path: '/destinations/tibet', priority: 0.9, changefreq: 'weekly' },
    
    // Other services
    { path: '/services/multi-day-cultural-tours', priority: 0.85, changefreq: 'weekly' },
    { path: '/services/jungle-safari', priority: 0.85, changefreq: 'weekly' },
    { path: '/services/day-hikings', priority: 0.8, changefreq: 'weekly' },
    { path: '/services/day-sightseeings', priority: 0.8, changefreq: 'weekly' },
    { path: '/services/mountain-flight-heli-trip', priority: 0.85, changefreq: 'weekly' },

    // Day Sightseeing Pages (9 pages)
    { path: '/services/day-sightseeings/kathmandu-sightseeing', priority: 0.85, changefreq: 'weekly' },
    { path: '/services/day-sightseeings/bhaktapur-patan-sightseeing', priority: 0.8, changefreq: 'weekly' },
    { path: '/services/day-sightseeings/bouddhanath-kapan-sightseeing', priority: 0.8, changefreq: 'weekly' },
    { path: '/services/day-sightseeings/bungamati-khokana-patan-sightseeing', priority: 0.8, changefreq: 'weekly' },
    { path: '/services/day-sightseeings/changunarayan-bhaktapur-sanga-sightseeing', priority: 0.8, changefreq: 'weekly' },
    { path: '/services/day-sightseeings/dakshinkali-pharping-kirtipur-sightseeing', priority: 0.8, changefreq: 'weekly' },

    // Day Hikes Pages (3 pages)
    { path: '/services/day-hikings/champa-devi-hiking', priority: 0.8, changefreq: 'weekly' },
    { path: '/services/day-hikings/nagarkot-changunarayan-hiking', priority: 0.8, changefreq: 'weekly' },
    { path: '/services/day-hikings/namobuddha-hiking', priority: 0.8, changefreq: 'weekly' },

    // Mountain Flight / Heli Pages (4 pages)
    { path: '/services/mountain-flight-heli-trip/everest-region-mountain-flight-trip', priority: 0.85, changefreq: 'weekly' },
    { path: '/services/mountain-flight-heli-trip/everest-region-helicopter-trip', priority: 0.85, changefreq: 'weekly' },
    { path: '/services/mountain-flight-heli-trip/annapurna-region-mountain-flight-trip', priority: 0.85, changefreq: 'weekly' },
    { path: '/services/mountain-flight-heli-trip/langtang-region-helicopter-trip', priority: 0.8, changefreq: 'weekly' },

    // Multi-day Cultural Tours (5 pages)
    { path: '/services/multi-day-cultural-tours/kathmandu-pokhara-lumbini-chitwan-tour', priority: 0.9, changefreq: 'weekly' },
    { path: '/services/multi-day-cultural-tours/nepal-heritage-sites-tour', priority: 0.85, changefreq: 'weekly' },
    { path: '/services/multi-day-cultural-tours/kathmandu-bhaktapur-lalitpur-tour', priority: 0.8, changefreq: 'weekly' },
    { path: '/services/multi-day-cultural-tours/nepal-temples-and-stupas-tour', priority: 0.8, changefreq: 'weekly' },
    { path: '/services/multi-day-cultural-tours/historic-nature-scenic-photography-tour', priority: 0.8, changefreq: 'weekly' },

    // Jungle Safari (1 page)
    { path: '/services/jungle-safari/chitwan-np-jungle-safari', priority: 0.85, changefreq: 'weekly' },

    // Bhutan Pages (6 pages)
    { path: '/destinations/bhutan/tigers-nest-day-hiking', priority: 0.85, changefreq: 'weekly' },
    { path: '/destinations/bhutan/3-nights-4-days-bhutan-tour', priority: 0.85, changefreq: 'weekly' },
    { path: '/destinations/bhutan/bhutan-cultural-tour', priority: 0.85, changefreq: 'weekly' },
    { path: '/destinations/bhutan/delightful-bhutan-tour', priority: 0.8, changefreq: 'weekly' },
    { path: '/destinations/bhutan/bhutan-festival-tour', priority: 0.8, changefreq: 'weekly' },
    { path: '/destinations/bhutan/short-and-sweet-bhutan-tour', priority: 0.8, changefreq: 'weekly' },

    // Tibet Pages (6 pages)
    { path: '/destinations/tibet/everest-base-camp-tibet', priority: 0.9, changefreq: 'weekly' },
    { path: '/destinations/tibet/kailash-mansarovar-yatra', priority: 0.9, changefreq: 'weekly' },
    { path: '/destinations/tibet/lhasa-city-tour', priority: 0.85, changefreq: 'weekly' },
    { path: '/destinations/tibet/tibet-overland-tour', priority: 0.85, changefreq: 'weekly' },
    { path: '/destinations/tibet/tibet-unique-cultural-tour', priority: 0.85, changefreq: 'weekly' },
    { path: '/destinations/tibet/tibet-tour-namtso-lake', priority: 0.8, changefreq: 'weekly' },

    // Blog Pages (7 existing blogs)
    { path: '/blog/nepal-trek-cost-2026', priority: 0.8, changefreq: 'monthly' },
    { path: '/blog/solo-trekking-nepal-2026', priority: 0.85, changefreq: 'monthly' },
    { path: '/blog/best-time-to-visit-nepal', priority: 0.9, changefreq: 'monthly' },
    { path: '/blog/everest-vs-annapurna-base-camp', priority: 0.9, changefreq: 'monthly' },
    { path: '/blog/tilicho-lake-sacred-trek', priority: 0.85, changefreq: 'monthly' },
    { path: '/blog/best-beginner-treks-nepal', priority: 0.85, changefreq: 'monthly' },
    { path: '/blog/pigeons-symbol-peace-nepal', priority: 0.8, changefreq: 'monthly' },

    // Free Tours (3 pages)
    { path: '/services/free-tour-kathmandu', priority: 0.9, changefreq: 'weekly' },
    { path: '/services/free-walking-tour-kathmandu', priority: 0.9, changefreq: 'weekly' },
    { path: '/services/local-city-tour-kathmandu-free', priority: 0.9, changefreq: 'weekly' },
  ];

  // ============================================
  // DYNAMIC PAGES (Generated from Supabase)
  // ============================================

  // 1. Dynamic trek pages (12 pages)
  const trekPages = treks.map((trek) => ({
    url: `${baseUrl}/services/trekking/${trek.slug}`,
    lastModified: new Date(trek.updated_at),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // 2. Comparison pages (66 pages)
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

  // 3. Region pages (4 pages)
  const regionPages = regions.map((region) => ({
    url: `${baseUrl}/destinations/${region.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // 4. Blog pages (from Supabase - future blogs)
  const blogPages = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.updated_at),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // ============================================
  // COMBINE EVERYTHING
  // ============================================
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