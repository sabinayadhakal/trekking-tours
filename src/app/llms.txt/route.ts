// src/app/llms.txt/route.ts
import { NextResponse } from 'next/server'

// Your domain
const baseUrl = 'https://www.himkalaadventure.com'

// Site description shown at the top of llms.txt
const siteName = 'Himkala Adventure'
const siteSummary =
  'Himkala Adventure is a Nepal-based trekking and tour operator offering guided treks, peak climbing, cultural tours, jungle safaris, sightseeing, and mountain flight/helicopter trips across Nepal, Bhutan, and Tibet.'

// Each entry: { path, label } -> label is the human-readable link text
type Entry = { path: string; label: string }

const companyPages: Entry[] = [
  { path: '/about-us', label: 'About Us' },
  { path: '/contact', label: 'Contact' },
  { path: '/blog', label: 'Blog' },
]

const trekkingPages: Entry[] = [
  { path: '/services/trekking', label: 'Trekking Overview' },
  { path: '/services/trekking/everest-base-camp-trek', label: 'Everest Base Camp Trek' },
  { path: '/services/trekking/annapurna-circuit-trek', label: 'Annapurna Circuit Trek' },
  {
    path: '/services/trekking/annapurna-circuit-trek-with-tilicho-lake',
    label: 'Annapurna Circuit Trek with Tilicho Lake',
  },
  { path: '/services/trekking/annapurna-base-camp-trek', label: 'Annapurna Base Camp Trek' },
  { path: '/services/trekking/manaslu-circuit-trek', label: 'Manaslu Circuit Trek' },
  {
    path: '/services/trekking/manaslu-circuit-trek-with-tsum-valley',
    label: 'Manaslu Circuit Trek with Tsum Valley',
  },
  { path: '/services/trekking/upper-mustang-trek', label: 'Upper Mustang Trek' },
  { path: '/services/trekking/langtang-valley-trek', label: 'Langtang Valley Trek' },
  { path: '/services/trekking/langtang-gosainkunda-trek', label: 'Langtang Gosainkunda Trek' },
  { path: '/services/trekking/langtang-helambu-trek', label: 'Langtang Helambu Trek' },
  { path: '/services/trekking/langtang-ganjala-pass-trek', label: 'Langtang Ganjala Pass Trek' },
  {
    path: '/services/trekking/tamang-heritage-trail-and-langtang-valley-trek',
    label: 'Tamang Heritage Trail and Langtang Valley Trek',
  },
  { path: '/services/trekking/everest-gokyo-trek', label: 'Everest Gokyo Trek' },
  { path: '/services/trekking/everest-three-passes-trek', label: 'Everest Three Passes Trek' },
  { path: '/services/trekking/ghorepani-poon-hill-trek', label: 'Ghorepani Poon Hill Trek' },
  { path: '/services/trekking/mardi-himal-trek', label: 'Mardi Himal Trek' },
  {
    path: '/services/trekking/khopra-ridge-trek-with-khayar-lake',
    label: 'Khopra Ridge Trek with Khayar Lake',
  },
  { path: '/services/trekking/nar-phu-trek', label: 'Nar Phu Trek' },
  { path: '/services/trekking/rupina-la-trek', label: 'Rupina La Trek' },
]

const peakClimbingPages: Entry[] = [
  { path: '/services/peak-climbing', label: 'Peak Climbing Overview' },
  { path: '/services/peak-climbing/island-peak-climbing', label: 'Island Peak Climbing' },
  { path: '/services/peak-climbing/mera-peak-climbing', label: 'Mera Peak Climbing' },
  { path: '/services/peak-climbing/yala-peak-climbing', label: 'Yala Peak Climbing' },
]

const dayHikesPages: Entry[] = [
  { path: '/services/day-hikings', label: 'Day Hikes Overview' },
  { path: '/services/day-hikings/champa-devi-hiking', label: 'Champa Devi Hiking' },
  { path: '/services/day-hikings/nagarkot-changunarayan-hiking', label: 'Nagarkot Changunarayan Hiking' },
  { path: '/services/day-hikings/namobuddha-hiking', label: 'Namobuddha Hiking' },
]

const sightseeingPages: Entry[] = [
  { path: '/services/day-sightseeings', label: 'Day Sightseeing Overview' },
  { path: '/services/day-sightseeings/kathmandu-sightseeing', label: 'Kathmandu Sightseeing' },
  { path: '/services/day-sightseeings/bhaktapur-patan-sightseeing', label: 'Bhaktapur Patan Sightseeing' },
  {
    path: '/services/day-sightseeings/bouddhanath-kapan-sightseeing',
    label: 'Bouddhanath Kapan Sightseeing',
  },
  {
    path: '/services/day-sightseeings/bungamati-khokana-patan-sightseeing',
    label: 'Bungamati Khokana Patan Sightseeing',
  },
  {
    path: '/services/day-sightseeings/changunarayan-bhaktapur-sanga-sightseeing',
    label: 'Changunarayan Bhaktapur Sanga Sightseeing',
  },
  {
    path: '/services/day-sightseeings/dakshinkali-pharping-kirtipur-sightseeing',
    label: 'Dakshinkali Pharping Kirtipur Sightseeing',
  },
]

const culturalToursPages: Entry[] = [
  { path: '/services/multi-day-cultural-tours', label: 'Cultural Tours Overview' },
  {
    path: '/services/multi-day-cultural-tours/kathmandu-pokhara-lumbini-chitwan-tour',
    label: 'Kathmandu Pokhara Lumbini Chitwan Tour',
  },
  { path: '/services/multi-day-cultural-tours/nepal-heritage-sites-tour', label: 'Nepal Heritage Sites Tour' },
  {
    path: '/services/multi-day-cultural-tours/kathmandu-bhaktapur-lalitpur-tour',
    label: 'Kathmandu Bhaktapur Lalitpur Tour',
  },
  {
    path: '/services/multi-day-cultural-tours/nepal-temples-and-stupas-tour',
    label: 'Nepal Temples and Stupas Tour',
  },
  {
    path: '/services/multi-day-cultural-tours/historic-nature-scenic-photography-tour',
    label: 'Historic Nature Scenic Photography Tour',
  },
]

const safariPages: Entry[] = [
  { path: '/services/jungle-safari/chitwan-np-jungle-safari', label: 'Chitwan National Park Jungle Safari' },
]

const flightPages: Entry[] = [
  {
    path: '/services/mountain-flight-heli-trip/everest-region-mountain-flight-trip',
    label: 'Everest Region Mountain Flight',
  },
  {
    path: '/services/mountain-flight-heli-trip/everest-region-helicopter-trip',
    label: 'Everest Region Helicopter Trip',
  },
  {
    path: '/services/mountain-flight-heli-trip/annapurna-region-mountain-flight-trip',
    label: 'Annapurna Region Mountain Flight',
  },
  {
    path: '/services/mountain-flight-heli-trip/langtang-region-helicopter-trip',
    label: 'Langtang Region Helicopter Trip',
  },
]

const bhutanPages: Entry[] = [
  { path: '/destinations/bhutan', label: 'Bhutan Overview' },
  { path: '/destinations/bhutan/snowman-trek', label: 'Snowman Trek' },
  { path: '/destinations/bhutan/jomolhari-trek', label: 'Jomolhari Trek' },
  { path: '/destinations/bhutan/druk-path-trek', label: 'Druk Path Trek' },
  { path: '/destinations/bhutan/tigers-nest-day-hiking', label: "Tiger's Nest Day Hiking" },
  { path: '/destinations/bhutan/3-nights-4-days-bhutan-tour', label: '3 Nights 4 Days Bhutan Tour' },
  { path: '/destinations/bhutan/bhutan-cultural-tour', label: 'Bhutan Cultural Tour' },
  { path: '/destinations/bhutan/delightful-bhutan-tour', label: 'Delightful Bhutan Tour' },
  { path: '/destinations/bhutan/bhutan-festival-tour', label: 'Bhutan Festival Tour' },
  { path: '/destinations/bhutan/short-and-sweet-bhutan-tour', label: 'Short and Sweet Bhutan Tour' },
]

const tibetPages: Entry[] = [
  { path: '/destinations/tibet', label: 'Tibet Overview' },
  { path: '/destinations/tibet/everest-base-camp-tibet', label: 'Everest Base Camp Tibet' },
  { path: '/destinations/tibet/kailash-mansarovar-yatra', label: 'Kailash Mansarovar Yatra' },
  { path: '/destinations/tibet/lhasa-city-tour', label: 'Lhasa City Tour' },
  { path: '/destinations/tibet/tibet-overland-tour', label: 'Tibet Overland Tour' },
  { path: '/destinations/tibet/tibetan-plateau-adventure', label: 'Tibetan Plateau Adventure' },
  { path: '/destinations/tibet/tibet-unique-cultural-tour', label: 'Tibet Unique Cultural Tour' },
  { path: '/destinations/tibet/ancient-kingdoms-tour', label: 'Ancient Kingdoms Tour' },
  { path: '/destinations/tibet/monastery-discovery-tour', label: 'Monastery Discovery Tour' },
  { path: '/destinations/tibet/tibet-tour-namtso-lake', label: 'Tibet Tour Namtso Lake' },
]

const walkingTourPages: Entry[] = [
  { path: '/services/free-walking-tour-kathmandu', label: 'Free Walking Tour Kathmandu' },
]

const blogPages: Entry[] = [
  { path: '/blog/best-time-to-visit-nepal', label: 'Best Time to Visit Nepal' },
  { path: '/blog/everest-vs-annapurna-base-camp', label: 'Everest vs Annapurna Base Camp' },
  { path: '/blog/tilicho-lake-sacred-trek', label: 'Tilicho Lake Sacred Trek' },
  { path: '/blog/best-beginner-treks-nepal', label: 'Best Beginner Treks in Nepal' },
  { path: '/blog/pigeons-symbol-peace-nepal', label: 'Pigeons: A Symbol of Peace in Nepal' },
]

// Grouped sections in the order they'll appear in llms.txt
const sections: { heading: string; entries: Entry[] }[] = [
  { heading: 'Company', entries: companyPages },
  { heading: 'Trekking (Nepal)', entries: trekkingPages },
  { heading: 'Peak Climbing', entries: peakClimbingPages },
  { heading: 'Day Hikes', entries: dayHikesPages },
  { heading: 'Day Sightseeing', entries: sightseeingPages },
  { heading: 'Multi-Day Cultural Tours', entries: culturalToursPages },
  { heading: 'Jungle Safari', entries: safariPages },
  { heading: 'Mountain Flights & Helicopter Trips', entries: flightPages },
  { heading: 'Bhutan', entries: bhutanPages },
  { heading: 'Tibet', entries: tibetPages },
  { heading: 'Free Walking Tour', entries: walkingTourPages },
  { heading: 'Blog / Guides', entries: blogPages },
]

function buildLlmsTxt(): string {
  const lines: string[] = []

  lines.push(`# ${siteName}`)
  lines.push('')
  lines.push(`> ${siteSummary}`)
  lines.push('')
  lines.push(
    'This file follows the llms.txt standard (llmstxt.org) to help AI assistants and LLMs understand the structure and offerings of this site.'
  )

  for (const section of sections) {
    lines.push('')
    lines.push(`## ${section.heading}`)
    lines.push('')
    for (const entry of section.entries) {
      lines.push(`- [${entry.label}](${baseUrl}${entry.path})`)
    }
  }

  lines.push('')
  lines.push('## Optional')
  lines.push('')
  lines.push(`- [Sitemap](${baseUrl}/sitemap.xml): Full machine-readable list of all indexed pages.`)
  lines.push('')

  return lines.join('\n')
}

export async function GET() {
  return new NextResponse(buildLlmsTxt(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}