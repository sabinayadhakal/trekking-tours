// src/app/sitemap.ts
import { MetadataRoute } from 'next'

// Replace with your actual domain
const baseUrl = 'https://www.himkalaadventure.com'

// You can add more pages to this list as you create them
const staticPages = [
  { path: '', priority: 1.0, changefreq: 'daily' },  // Homepage
  { path: '/about-us', priority: 0.9, changefreq: 'monthly' },
  { path: '/contact', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/free-walking-tour', priority: 0.9, changefreq: 'weekly' },
  { path: '/destinations/nepal', priority: 0.9, changefreq: 'weekly' },
  { path: '/destinations/bhutan', priority: 0.9, changefreq: 'weekly' },
  { path: '/destinations/tibet', priority: 0.9, changefreq: 'weekly' },
]

// Trekking pages (based on your file structure)
const trekkingPages = [
  { path: '/services/trekking/everest-base-camp-trek', priority: 0.9, changefreq: 'weekly' },
  { path: '/services/trekking/annapurna-base-camp-trek', priority: 0.9, changefreq: 'weekly' },
  { path: '/services/trekking/annapurna-circuit-trek', priority: 0.9, changefreq: 'weekly' },
  { path: '/services/trekking/annapurna-circuit-trek-with-tilicho-lake', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/trekking/everest-gokyo-trek', priority: 0.85, changefreq: 'weekly' },
  { path: '/services/trekking/everest-three-passes-trek', priority: 0.85, changefreq: 'weekly' },
  { path: '/services/trekking/ghorepani-poon-hill-trek', priority: 0.85, changefreq: 'weekly' },
  { path: '/services/trekking/khopra-ridge-trek-with-khayar-lake', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/trekking/langtang-valley-trek', priority: 0.85, changefreq: 'weekly' },
  { path: '/services/trekking/langtang-gosainkunda-trek', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/trekking/langtang-helambu-trek', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/trekking/langtang-ganjala-pass-trek', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/trekking/manaslu-circuit-trek', priority: 0.9, changefreq: 'weekly' },
  { path: '/services/trekking/manaslu-circuit-trek-with-tsum-valley', priority: 0.9, changefreq: 'weekly' },
  { path: '/services/trekking/mardi-himal-trek', priority: 0.85, changefreq: 'weekly' },
  { path: '/services/trekking/nar-phu-trek', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/trekking/rupina-la-trek', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/trekking/tamang-heritage-trail-and-langtang-valley-trek', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/trekking/upper-mustang-trek', priority: 0.85, changefreq: 'weekly' },
]

// Peak climbing pages
const peakClimbingPages = [
  { path: '/services/peak-climbing/island-peak-climbing', priority: 0.85, changefreq: 'weekly' },
  { path: '/services/peak-climbing/mera-peak-climbing', priority: 0.85, changefreq: 'weekly' },
  { path: '/services/peak-climbing/yala-peak-climbing', priority: 0.8, changefreq: 'weekly' },
]

// Day sightseeing pages
const sightseeingPages = [
  { path: '/services/day-sightseeings/kathmandu-sightseeing', priority: 0.85, changefreq: 'weekly' },
  { path: '/services/day-sightseeings/bhaktapur-patan-sightseeing', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/day-sightseeings/bouddhanath-kapan-sightseeing', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/day-sightseeings/bungamati-khokana-patan-sightseeing', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/day-sightseeings/changunarayan-bhaktapur-sanga-sightseeing', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/day-sightseeings/dakshinkali-pharping-kirtipur-sightseeing', priority: 0.8, changefreq: 'weekly' },
]

// Day hikes
const dayHikesPages = [
  { path: '/services/day-hikings/champa-devi-hiking', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/day-hikings/nagarkot-changunarayan-hiking', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/day-hikings/namobuddha-hiking', priority: 0.8, changefreq: 'weekly' },
]

// Mountain flight / Heli trips
const flightPages = [
  { path: '/services/mountain-flight-heli-trip/everest-region-mountain-flight-trip', priority: 0.85, changefreq: 'weekly' },
  { path: '/services/mountain-flight-heli-trip/everest-region-helicopter-trip', priority: 0.85, changefreq: 'weekly' },
  { path: '/services/mountain-flight-heli-trip/annapurna-region-mountain-flight-trip', priority: 0.85, changefreq: 'weekly' },
  { path: '/services/mountain-flight-heli-trip/langtang-region-helicopter-trip', priority: 0.8, changefreq: 'weekly' },
]

// Multi-day cultural tours
const culturalToursPages = [
  { path: '/services/multi-day-cultural-tours/kathmandu-bhaktapur-lalitpur-tour', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/multi-day-cultural-tours/kathmandu-pokhara-lumbini-chitwan-tour', priority: 0.85, changefreq: 'weekly' },
  { path: '/services/multi-day-cultural-tours/nepal-heritage-sites-tour', priority: 0.85, changefreq: 'weekly' },
  { path: '/services/multi-day-cultural-tours/nepal-temples-and-stupas-tour', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/multi-day-cultural-tours/historic-nature-scenic-photography-tour', priority: 0.8, changefreq: 'weekly' },
]

// Jungle safari
const safariPages = [
  { path: '/services/jungle-safari/chitwan-np-jungle-safari', priority: 0.85, changefreq: 'weekly' },
]

// Bhutan pages
const bhutanPages = [
  { path: '/destinations/bhutan/3-nights-4-days-bhutan-tour', priority: 0.85, changefreq: 'weekly' },
  { path: '/destinations/bhutan/bhutan-cultural-tour', priority: 0.85, changefreq: 'weekly' },
  { path: '/destinations/bhutan/bhutan-festival-tour', priority: 0.8, changefreq: 'weekly' },
  { path: '/destinations/bhutan/delightful-bhutan-tour', priority: 0.85, changefreq: 'weekly' },
  { path: '/destinations/bhutan/druk-path-trek', priority: 0.85, changefreq: 'weekly' },
  { path: '/destinations/bhutan/jomolhari-trek', priority: 0.85, changefreq: 'weekly' },
  { path: '/destinations/bhutan/short-and-sweet-bhutan-tour', priority: 0.8, changefreq: 'weekly' },
  { path: '/destinations/bhutan/snowman-trek', priority: 0.85, changefreq: 'weekly' },
  { path: '/destinations/bhutan/tigers-nest-day-hiking', priority: 0.85, changefreq: 'weekly' },
]

// Tibet pages
const tibetPages = [
  { path: '/destinations/tibet/ancient-kingdoms-tour', priority: 0.85, changefreq: 'weekly' },
  { path: '/destinations/tibet/everest-base-camp-tibet', priority: 0.9, changefreq: 'weekly' },
  { path: '/destinations/tibet/kailash-mansarovar-yatra', priority: 0.9, changefreq: 'weekly' },
  { path: '/destinations/tibet/lhasa-city-tour', priority: 0.85, changefreq: 'weekly' },
  { path: '/destinations/tibet/monastery-discovery-tour', priority: 0.8, changefreq: 'weekly' },
  { path: '/destinations/tibet/tibetan-plateau-adventure', priority: 0.85, changefreq: 'weekly' },
  { path: '/destinations/tibet/tibet-overland-tour', priority: 0.85, changefreq: 'weekly' },
  { path: '/destinations/tibet/tibet-tour-namtso-lake', priority: 0.8, changefreq: 'weekly' },
  { path: '/destinations/tibet/tibet-unique-cultural-tour', priority: 0.85, changefreq: 'weekly' },
]

// Blog pages (you can add more as you create blog posts)
const blogPages = [
  { path: '/blog/pigeons-symbol-peace-nepal', priority: 0.7, changefreq: 'monthly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  // Combine all pages
  const allPages = [
    ...staticPages,
    ...trekkingPages,
    ...peakClimbingPages,
    ...sightseeingPages,
    ...dayHikesPages,
    ...flightPages,
    ...culturalToursPages,
    ...safariPages,
    ...bhutanPages,
    ...tibetPages,
    ...blogPages,
  ]

  return allPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changefreq as 'daily' | 'weekly' | 'monthly',
    priority: page.priority,
  }))
}