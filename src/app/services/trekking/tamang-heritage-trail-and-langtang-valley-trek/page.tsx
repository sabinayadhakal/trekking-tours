"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import {
  Mountain,
  Calendar,
  Clock,
  Users,
  MapPin,
  Share2,
  Facebook,
  Twitter,
  Copy,
  Check,
  ChevronDown,
  Star,
  TrendingUp,
  Tent,
  Utensils,
  Heart,
  Camera,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Phone,
  Sunrise,
  Snowflake,
  Map,
  Backpack,
  TreePine,
  PawPrint,
  MessageCircle,
  Landmark,
  Droplets,
  Flower,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    "day": 1,
    "title": "Drive from Kathmandu to Syabrubesi",
    "altitude": "1,350m → 1,550m",
    "distance": "122km / 7-8 hrs drive",
    "description": "Early morning departure from your hotel in Kathmandu for the scenic drive to Syabrubesi, the gateway to both the Tamang Heritage Trail and Langtang Valley. The journey follows the Trishuli River valley through beautiful rural landscapes, terraced farmlands, and traditional villages. You'll pass through Dhunche (1,950m), the district headquarters of Rasuwa, where your Langtang National Park permit will be checked. The road winds through hillside forests with occasional views of Ganesh Himal (7,422m). Arrive in Syabrubesi (1,550m), a charming village situated at the confluence of the Bhote Koshi and Trishuli Rivers. Check into your teahouse, meet your trekking crew, and prepare for the adventure ahead. Evening briefing on the Tamang Heritage Trail and Langtang Valley route.",
    "overnight": "Teahouse in Syabrubesi",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic Trishuli River drive", "Ganesh Himal views", "Dhunche permit check", "Gateway to Tamang Heritage Trail", "Syabrubesi arrival"]
  },
  {
    "day": 2,
    "title": "Trek from Syabrubesi to Gatlang",
    "altitude": "1,550m → 2,238m",
    "distance": "12km / 5-6 hrs trek",
    "description": "Your Tamang Heritage Trail trek begins! You cross the Bhote Koshi River and start a steady ascent through pine forests and terraced fields. The trail passes through Goljung village, offering your first taste of Tamang culture with its traditional stone houses, colorful prayer flags, and friendly locals. A viewpoint along the way provides spectacular panoramic views of Ganesh Himal (7,422m) and the Langtang range. Gatlang (2,238m) is a beautiful Tamang village perched on a hillside, known for its traditional architecture, Parvatikunda Lake (a sacred pond), and warm hospitality. Experience a traditional Tamang welcome and enjoy cultural interactions with locals. Visit the local monastery and explore the village's stone-paved streets. Overnight in Gatlang.",
    "overnight": "Teahouse/Homestay in Gatlang",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["First Tamang village experience", "Goljung village", "Ganesh Himal views", "Parvatikunda Lake", "Traditional Tamang welcome"]
  },
  {
    "day": 3,
    "title": "Trek from Gatlang to Tatopani",
    "altitude": "2,238m → 2,607m",
    "distance": "12km / 6-7 hrs trek",
    "description": "Today's trail descends to the Thangbuche River, crossing a suspension bridge, then climbs steadily through terraced fields and beautiful rhododendron forests. The effort is rewarded with stunning views of Ganesh Himal and the Langtang range throughout the day, with the peaks seeming to follow you as you trek. Tatopani (2,607m), meaning 'hot water' in Nepali, is famous for its natural hot springs. Soak your tired muscles in the warm, mineral-rich waters (approximately 40°C/104°F) - a truly rejuvenating experience believed to have healing properties for aching muscles and joints. The village is nestled in a beautiful valley surrounded by forests and mountains. Overnight in Tatopani.",
    "overnight": "Teahouse in Tatopani",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Suspension bridge crossing", "Rhododendron forests", "Ganesh Himal and Langtang views", "Natural hot springs soak", "Therapeutic mineral waters"]
  },
  {
    "day": 4,
    "title": "Trek from Tatopani to Thuman via Nagthali",
    "altitude": "2,607m → 3,165m → 2,338m",
    "distance": "12km / 6-7 hrs trek",
    "description": "A challenging but rewarding day as you climb to Nagthali (3,165m), the highest point of the Tamang Heritage Trail. Nagthali was once a meditation retreat for Tibetan Buddhist monks and still maintains a peaceful, spiritual atmosphere with stunning mountain views. The viewpoint offers breathtaking 360-degree panoramas of the Langtang range, Ganesh Himal, and even glimpses of the Tibetan plateau on clear days. After soaking in the views and having a packed lunch, you descend through rhododendron and pine forests to Thuman (2,338m), a large traditional Tamang village with intricately carved wooden houses, ancient monasteries, prayer flags fluttering in the wind, and spectacular mountain views. Explore the village and interact with friendly locals. Overnight in Thuman.",
    "overnight": "Teahouse in Thuman",
    "meals": "Breakfast, Packed Lunch, Dinner",
    "highlights": ["Nagthali viewpoint (3,165m)", "360-degree Himalayan panorama", "Meditation retreat site", "Traditional Thuman village", "Ancient monasteries"]
  },
  {
    "day": 5,
    "title": "Trek from Thuman to Briddim",
    "altitude": "2,338m → 2,345m",
    "distance": "12km / 5-6 hrs trek",
    "description": "Today's trail takes you through beautiful rhododendron and oak forests, with occasional openings revealing stunning mountain views of Ganesh Himal and Langtang Lirung. You'll pass through the village of Timure, located near the Tibetan border, where you can visit the historic Rasuwagadi Fort - a reminder of ancient Nepal-Tibet trade relations and the old salt trade route. Briddim (2,345m) is a charming Tamang village nestled at the foot of Langtang Himal, with distinctive stone houses with wooden shingle roofs. Experience authentic homestay hospitality, learn about traditional weaving, and enjoy cultural performances arranged by the local community. The village has a unique layout with narrow stone-paved alleys and a beautiful monastery. Overnight in Briddim.",
    "overnight": "Teahouse/Homestay in Briddim",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Rhododendron and oak forests", "Rasuwagadi Fort", "Tibetan border proximity", "Traditional weaving demonstrations", "Briddim village homestay"]
  },
  {
    "day": 6,
    "title": "Trek from Briddim to Sherpa Gaon",
    "altitude": "2,345m → 2,500m",
    "distance": "10km / 4-5 hrs trek",
    "description": "A relatively short day allowing for gradual acclimatization and cultural exploration. The trail continues through beautiful forests and terraced fields, with stunning views of the surrounding peaks. Sherpa Gaon (2,500m) is a traditional Sherpa village that offers a unique blend of Sherpa and Tamang culture. The village is named after the Sherpa community who migrated here centuries ago and still maintain their distinct traditions, architecture, and Buddhist practices. Explore the village with its mani walls, prayer wheels, chortens, and a beautiful monastery. The views of Langtang Lirung and the surrounding peaks are spectacular from this vantage point. This is an excellent spot for photography and cultural immersion before continuing to the Langtang Valley. Overnight in Sherpa Gaon.",
    "overnight": "Teahouse in Sherpa Gaon",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Short acclimatization day", "Traditional Sherpa village", "Sherpa-Tamang cultural blend", "Mani walls and prayer wheels", "Langtang Lirung views"]
  },
  {
    "day": 7,
    "title": "Trek from Sherpa Gaon to Lama Hotel",
    "altitude": "2,500m → 2,380m",
    "distance": "14km / 6-7 hrs trek",
    "description": "You leave the Tamang Heritage Trail and join the classic Langtang Valley route. The trail descends through dense forests of oak, rhododendron, and bamboo, following the Langtang Khola river. This section is rich in wildlife - keep your eyes open for langur monkeys swinging through the trees, and if you're extremely lucky, the endangered red panda in the dense bamboo thickets. The forest is magical with moss-covered trees, colorful rhododendrons (blooming spectacularly in March-April), and the sound of the river below. Lama Hotel (2,380m) is a cluster of teahouses nestled in the forest beside the roaring river, marking your entry into the main Langtang Valley. Overnight in Lama Hotel.",
    "overnight": "Teahouse in Lama Hotel",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Join Langtang Valley trail", "Wildlife spotting (langur monkeys)", "Dense bamboo forests", "Rhododendron and oak forests", "Lama Hotel arrival"]
  },
  {
    "day": 8,
    "title": "Trek from Lama Hotel to Langtang Village",
    "altitude": "2,380m → 3,430m",
    "distance": "14km / 6-7 hrs trek",
    "description": "Today the valley opens up dramatically as you gain altitude, offering your first breathtaking views of Langtang Lirung (7,227m) and other surrounding peaks. The trail passes through Ghoda Tabela (3,000m) - meaning 'horse stable' - a clearing with teahouses and yak pastures where you can see grazing yaks and horses. Above the tree line, you enter alpine terrain with beautiful mani walls, prayer flags, and traditional stone houses. Langtang Village (3,430m) was devastated by the 2015 earthquake but has been beautifully rebuilt, showcasing the incredible resilience of the local Tamang community. The village offers stunning mountain views and a chance to interact with friendly locals and hear their stories of rebuilding. Visit the memorial chorten dedicated to those who lost their lives. Overnight in Langtang Village.",
    "overnight": "Teahouse in Langtang Village",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["First views of Langtang Lirung (7,227m)", "Ghoda Tabela yak pastures", "Alpine terrain with mani walls", "Rebuilt Langtang Village", "Earthquake memorial chorten"]
  },
  {
    "day": 9,
    "title": "Trek from Langtang Village to Kyanjin Gompa",
    "altitude": "3,430m → 3,870m",
    "distance": "10km / 4-5 hrs trek",
    "description": "A relatively short day allowing for gradual acclimatization before the optional climbs tomorrow. The trail follows a broad, open valley with stunning mountain scenery on all sides - Langtang Lirung (7,227m) dominates the skyline, while peaks like Gangchempo (6,387m), Langtang II, and Dorje Lakpa surround you. You'll pass through Mundu village with its ancient chortens, prayer wheels, and traditional stone houses. Continue past yak pastures with grazing animals and beautiful mountain streams. Kyanjin Gompa (3,870m) is the last settlement in the Langtang Valley, a beautiful village dominated by its ancient Buddhist monastery (gompa) and surrounded by towering peaks. Visit the famous Kyanjin Cheese Factory, established by Swiss experts in the 1950s, to sample delicious yak cheese, curd, and fresh bread. Explore the monastery with its centuries-old Buddhist artifacts. Overnight in Kyanjin Gompa.",
    "overnight": "Teahouse in Kyanjin Gompa",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Broad valley panorama", "Mundu village chortens", "Yak pastures", "Kyanjin Gompa monastery", "Yak cheese factory visit and tasting"]
  },
  {
    "day": 10,
    "title": "Exploration Day - Kyanjin Ri or Tserko Ri",
    "altitude": "3,870m → 4,773m / 4,985m → 3,870m",
    "distance": "8-12km / 5-8 hrs hike",
    "description": "The highlight of the Langtang Valley section! Choose your adventure based on fitness and weather. Kyanjin Ri (4,773m) offers a challenging 2-3 hour climb to a spectacular ridge with 360-degree views of the entire Langtang range including Langtang Lirung (7,227m), Langtang II, Dorje Lakpa (6,966m), and Yala Peak (5,732m). For experienced trekkers seeking an extra challenge, Tserko Ri (4,985m) is a longer, steeper climb with even more dramatic panoramas stretching to the Tibetan plateau. As the sun rises, the peaks glow golden - an unforgettable experience. After descending, explore the ancient Kyanjin Gompa monastery more thoroughly, walk to the glacial moraine of Langtang Lirung, visit the yak cheese factory again, or simply relax and soak in the mountain atmosphere. Overnight at Kyanjin Gompa.",
    "overnight": "Teahouse in Kyanjin Gompa",
    "meals": "Breakfast, Packed Lunch, Dinner",
    "highlights": ["Kyanjin Ri sunrise (4,773m)", "Tserko Ri option (4,985m)", "360-degree Himalayan panorama", "Langtang Lirung glacial moraine", "Yak cheese factory tasting"]
  },
  {
    "day": 11,
    "title": "Trek from Kyanjin Gompa to Lama Hotel",
    "altitude": "3,870m → 2,380m",
    "distance": "18km / 6-7 hrs trek",
    "description": "Today you retrace your steps down the Langtang Valley, descending through Kyanjin Gompa, Mundu village, and Langtang Village. The descent offers completely different perspectives of the mountains and valley - the peaks that towered above you on the way up now appear from new angles. You'll pass through Ghoda Tabela with its yak pastures and continue into the lush forests. The forest feels magical in the afternoon light as you return to Lama Hotel (2,380m) for the night. This long descent day allows time to reflect on the incredible experiences of the past days - the mountain views, the rebuilt villages, and the warm hospitality of the Tamang people. Overnight in a comfortable teahouse at Lama Hotel.",
    "overnight": "Teahouse in Lama Hotel",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Descending through Langtang Valley", "New mountain perspectives", "Ghoda Tabela yak pastures", "Forest return", "Reflection time"]
  },
  {
    "day": 12,
    "title": "Trek from Lama Hotel to Syabrubesi",
    "altitude": "2,380m → 1,550m",
    "distance": "15km / 5-6 hrs trek",
    "description": "Your final day of trekking on the Tamang Heritage Trail and Langtang Valley combined journey. The trail descends through beautiful forests of oak, rhododendron, and bamboo, following the Langtang Khola downstream. You'll cross several suspension bridges and pass through the small settlements of Bamboo and Domen. The rushing river, lush forest, and occasional waterfall create a peaceful farewell to the Langtang region. Arrive in Syabrubesi (1,550m) by early afternoon. Check into your teahouse, take a well-deserved hot shower, and enjoy cold drinks and snacks. In the evening, celebrate your successful Tamang Heritage Trail and Langtang Valley trek achievement - including your climb to Kyanjin Ri or Tserko Ri - with a celebration dinner with your guide and porters. Overnight in Syabrubesi.",
    "overnight": "Teahouse in Syabrubesi",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Final day of combined trek", "Suspension bridge crossings", "Forest descent", "Syabrubesi arrival", "Celebration dinner with team"]
  },
  {
    "day": 13,
    "title": "Drive from Syabrubesi to Kathmandu",
    "altitude": "1,550m → 1,350m",
    "distance": "122km / 7-8 hrs drive",
    "description": "After breakfast in Syabrubesi, begin your scenic drive back to Kathmandu along the Trishuli River, retracing your journey from nearly two weeks ago. The drive offers beautiful views of river valleys, rolling hills, terraced farmlands, and distant mountain peaks. You'll pass through charming towns and witness daily Nepali rural life along the way. The drive is a wonderful opportunity to reflect on your Tamang Heritage Trail and Langtang Valley adventure - the natural hot springs at Tatopani, the spiritual Nagthali viewpoint, the traditional villages of Gatlang, Thuman, Briddim, and Sherpa Gaon, the breathtaking views from Kyanjin Ri or Tserko Ri, the rebuilt Langtang Village, and the warm hospitality of the Tamang and Sherpa people. Arrive in Kathmandu by late afternoon. Check into your hotel in Thamel, take a well-deserved hot shower, and enjoy the comforts of the city. The remainder of your day is free for souvenir shopping in Thamel, visiting a spa for a much-needed massage, or simply relaxing. In the evening, enjoy a farewell dinner celebrating your successful Tamang Heritage Trail and Langtang Valley trek achievement - a unique journey combining cultural immersion with Himalayan mountain views.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast, Dinner",
    "highlights": ["Scenic drive to Kathmandu", "Trishuli River and countryside views", "Rural Nepali landscapes", "Thamel souvenir shopping", "Farewell celebration dinner"]
  }
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "3 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "All meals during the trek (breakfast, lunch, dinner)",
  "Best available teahouse/homestay accommodation during trek",
  "Experienced English-speaking trekking guide (government licensed)",
  "Assistant guide for groups of 5 or more",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Langtang National Park Entry Permit",
  "TIMS card (Trekkers' Information Management System)",
  "All ground transportation as per itinerary (Kathmandu-Syabrubesi-Kathmandu by private jeep)",
  "First aid medical kit including pulse oximeter",
  "Sleeping bag and down jacket (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Langtang and Tamang Heritage region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Packed lunch for Kyanjin Ri/Tserko Ri exploration day",
  "Yak cheese tasting at Kyanjin Gompa",
  "Cultural program in Tamang villages (where available)",
  "Two passport-sized photographs for permits (if needed)",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude trekking up to 5,000m & helicopter evacuation)",
  "Personal trekking gear and equipment",
  "Meals in Kathmandu (except welcome dinner and breakfasts)",
  "Bottled/mineral water during trek (purification tablets provided)",
  "Hot showers and battery charging at lodges ($2-4 per use)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, bar bills, souvenirs)",
  "Tips and gratuities for guides and porters (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, landslides, political unrest)",
];

const gallery = [
  {
    src: "/images/used/ganjala-pass-1.webp",
    alt: "Kyanjin Gompa with Langtang Lirung - ancient Buddhist monastery beneath the 7,227m peak in Nepal's Langtang Valley",
    caption: "Kyanjin Gompa with Langtang Lirung",
  },
  {
    src: "/images/used/tamang-heritage-1.webp",
    alt: "Thuman village - traditional Tamang village with intricately carved wooden houses and Tibetan Buddhist culture in Nepal",
    caption: "Traditional Tamang Village - Thuman",
  },
  {
    src: "/images/used/tht-2.webp",
    alt: "Nagthali Viewpoint at 3,165m - panoramic Himalayan views of Langtang and Ganesh Himal ranges on the Tamang Heritage Trail in Nepal",
    caption: "Nagthali Viewpoint (3,165m)",
  },
  {
    src: "/images/used/langtang-1.webp",
    alt: "Sunrise from Kyanjin Ri at 4,773m - spectacular Himalayan sunrise over the Langtang range in Nepal's Langtang Valley",
    caption: "Sunrise from Kyanjin Ri (4,773m)",
  },
];

export default function TamangHeritageLangtangTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);

  const trekName = "Tamang Heritage & Langtang Valley Trek";
  const canonicalUrl = "https://www.himkalaadventure.com/tamang-heritage-langtang-valley-trek";
  const pageTitle = "Tamang Heritage & Langtang Valley Trek - Himkala Adventure";
  const pageDescription = "Tamang Heritage & Langtang Valley Trek: Explore traditional Tamang villages, soak in hot springs at Tatopani, and trek to Kyanjin Gompa. A cultural Himalayan adventure. Book now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/tht-4.webp";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    if (platform === "facebook") {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank", "noopener,noreferrer");
    } else if (platform === "twitter") {
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Tamang Heritage & Langtang Valley Trek - Himkala Adventure")}`;
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  };

  const toggleDay = (day: number) => {
    setExpandedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Himkala Adventure" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:site" content="@himkalanepal" />
        <meta name="twitter:creator" content="@himkalanepal" />
      </Head>

      <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
        <main>
          {/* Header - Free Walking Tour Style */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto max-w-[880px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                    <span className="h-px w-6 sm:w-8 bg-[#cf6943]" />
                    <span>Langtang Region</span>
                  </div>
                  <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Tamang Heritage <br />
                    <span className="text-[#cf6943]">& Langtang Valley Trek</span>
                  </h1>
                </div>
                <div className="max-w-full md:max-w-[280px]">
                  <p className="text-sm leading-6 text-[#66706d]">
                    A perfect blend of cultural immersion and Himalayan scenery - trek through traditional Tamang villages, 
                    soak in natural hot springs, and explore the majestic Langtang Valley.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                      Moderate
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      <Landmark className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      Tamang Heritage
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      4,985m
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Feature Image - Free Walking Tour Style */}
          <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
            <figure className="relative h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px] rounded-lg overflow-hidden bg-[#14383b]">
              <Image
                src="/images/used/tht-4.webp"
                alt="Tamang Heritage and Langtang Valley Trek - cultural Himalayan adventure through traditional Tamang villages and the majestic Langtang Valley in Nepal"
                fill
                className="object-cover opacity-90"
                priority
                quality={85}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
                <span className="bg-[#e47a4f] text-[#fff8ee] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide rounded">
                  Best Season: Mar-May, Sep-Nov
                </span>
              </div>
              <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                <span className="bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-wide rounded">
                  $1,195 / person
                </span>
              </div>
            </figure>
          </div>

          {/* Quick Stats - Free Walking Tour Style */}
          <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
              {[
                { label: "Duration", value: "13 Days / 12 Nights" },
                { label: "Group Size", value: "2-12 people" },
                { label: "Max Altitude", value: "4,985m" },
                { label: "Difficulty", value: "Moderate" },
              ].map((stat, i) => (
                <div key={i} className="bg-[#f7f2e9] rounded-lg p-3 text-center shadow-sm border border-[#d8cec0]/30">
                  <p className="text-[10px] text-[#66706d] uppercase tracking-wider font-semibold">{stat.label}</p>
                  <p className="text-sm font-bold text-[#14383b]">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Overview - Free Walking Tour Style */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <article className="prose prose-sm sm:prose-base max-w-none">
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  The <strong className="text-[#14383b]">Tamang Heritage and Langtang Valley Trek</strong> is a 
                  unique combination of cultural immersion and spectacular Himalayan scenery, offering one of 
                  Nepal's most rewarding and accessible <strong className="text-[#14383b]">trekking in Nepal</strong> 
                  experiences. This 14-day journey takes you through the recently opened Tamang Heritage Trail, 
                  restricted until 2004, and into the majestic Langtang Valley, known as the "Valley of Glaciers."
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  The trek begins with cultural exploration in traditional Tamang villages like Gatlang, Tatopani, 
                  Thuman, and Briddim, where you'll experience authentic Tibetan-influenced Buddhist culture, 
                  ancient monasteries, and warm homestay hospitality. A highlight is soaking in the natural 
                  hot springs at Tatopani, believed to have healing properties. From 
                  <strong className="text-[#14383b]"> Nagthali viewpoint (3,165m)</strong>, you'll enjoy 
                  panoramic views of the Langtang and Ganesh Himal ranges.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  The second half of the trek follows the classic Langtang Valley route to 
                  <strong className="text-[#14383b]"> Kyanjin Gompa (3,870m)</strong>, with optional hikes to 
                  Kyanjin Ri (4,773m) or Tserko Ri (4,985m) for breathtaking 360-degree Himalayan panoramas. 
                  This moderate <strong className="text-[#14383b]">Tamang Heritage and Langtang Valley trekking</strong> 
                  adventure is perfect for those seeking authentic cultural encounters, diverse wildlife 
                  including red pandas and Himalayan black bears, and stunning mountain scenery without the 
                  crowds of Everest or Annapurna.
                </p>
              </article>

              <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
                <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
                <strong>Important:</strong> Since 2023, solo trekking without a guide is banned in Langtang 
                National Park - you must trek with a licensed guide for safety. Travel insurance must cover 
                high altitude trekking up to 5,000m and helicopter evacuation. Bring two passport photos for permits.
              </div>
            </div>
          </section>

          {/* Highlights - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Trek Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Authentic Tamang culture in traditional villages (Gatlang, Thuman, Briddim)",
                  "Natural hot springs at Tatopani - therapeutic soak with mountain views",
                  "Nagthali viewpoint (3,165m) with panoramic Langtang & Ganesh Himal views",
                  "Kyanjin Gompa (3,870m) and famous yak cheese factory",
                  "Summit Kyanjin Ri (4,773m) or Tserko Ri (4,985m) for 360° Himalayan panorama",
                  "Langtang National Park - home to red pandas and Himalayan black bears",
                  "Traditional homestay experiences and cultural performances",
                  "Spectacular views of Langtang Lirung (7,227m) and surrounding peaks",
                  "Historic Rasuwagadi Fort near Tibetan border",
                  "Less crowded trails - perfect for authentic Himalayan experience",
                ].map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#14383b] text-sm sm:text-base">
                    <span className="text-[#cf6943] mt-1">✦</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Best Season - Free Walking Tour Style */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Best Time to Trek</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Sunrise className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Spring (Mar - May)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    Rhododendron forests burst into vibrant red, pink, and white blooms. Mild temperatures, clear skies, and excellent visibility. The most colorful time to trek.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
                </div>
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Snowflake className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Autumn (Sep - Nov)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    Crystal-clear skies, stable weather, and perfect trekking conditions. Lush green trails after monsoon and spectacular mountain views. Festival atmosphere with local celebrations.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
                </div>
              </div>
              <p className="mt-3 text-[10px] text-[#66706d]">Note: Winter (Dec-Feb) is cold with possible snow but offers solitude. Monsoon (Jun-Aug) brings lush greenery but leeches and possible landslides.</p>
            </div>
          </section>

          {/* Itinerary - Free Walking Tour Style (Accordion) */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b]">Day-by-Day Itinerary</h2>
                <button
                  className="text-[#cf6943] text-xs font-semibold hover:underline"
                  onClick={() =>
                    setExpandedDays(expandedDays.length === itinerary.length ? [] : itinerary.map((d) => d.day))
                  }
                >
                  {expandedDays.length === itinerary.length ? "Collapse All" : "Expand All"}
                </button>
              </div>

              <div className="space-y-2">
                {itinerary.map((day) => {
                  const isExpanded = expandedDays.includes(day.day);
                  return (
                    <div
                      key={day.day}
                      className="bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/30 overflow-hidden"
                    >
                      <button
                        className="w-full flex items-center gap-4 p-4 text-left"
                        onClick={() => toggleDay(day.day)}
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#cf6943]/10 rounded-lg flex flex-col items-center justify-center shrink-0">
                          <span className="text-[8px] font-bold text-[#cf6943] uppercase">Day</span>
                          <span className="text-base sm:text-lg font-bold text-[#14383b] leading-none">{day.day}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="font-medium text-[#14383b] text-sm sm:text-base block truncate">{day.title}</span>
                          <div className="flex flex-wrap gap-2 text-[10px] sm:text-xs text-[#66706d] mt-0.5">
                            <span>{day.altitude}</span>
                            <span>·</span>
                            <span>{day.distance}</span>
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-[#66706d] transition-transform shrink-0 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      {isExpanded && (
                        <div className="px-4 pb-4 pt-0">
                          <p className="text-[#556363] text-sm leading-relaxed mb-4">{day.description}</p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                            <div className="flex items-center gap-2 text-xs text-[#556363] bg-[#f2ede4] rounded-lg p-2">
                              <Tent className="w-3 h-3 text-[#cf6943]" aria-hidden="true" />
                              <span><strong>Overnight:</strong> {day.overnight}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-[#556363] bg-[#f2ede4] rounded-lg p-2">
                              <Utensils className="w-3 h-3 text-[#cf6943]" aria-hidden="true" />
                              <span><strong>Meals:</strong> {day.meals}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1">
                            {day.highlights.map((h, i) => (
                              <span key={i} className="bg-[#cf6943]/10 text-[#cf6943] text-[10px] font-medium px-2 py-0.5 rounded">
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Includes / Excludes - Free Walking Tour Style */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="includes">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">What's Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <h3 className="font-semibold text-[#14383b] text-sm mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" aria-hidden="true" />
                    Cost Includes
                  </h3>
                  <ul className="space-y-1.5">
                    {includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#556363] text-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <h3 className="font-semibold text-[#14383b] text-sm mb-4 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-500" aria-hidden="true" />
                    Cost Excludes
                  </h3>
                  <ul className="space-y-1.5">
                    {excludes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#556363] text-sm">
                        <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="gallery">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Photo Gallery</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6">
                A visual journey through the Tamang Heritage Trail and the majestic Langtang Valley.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {gallery.map((image, i) => (
                  <div key={i} className="relative h-28 sm:h-40 rounded-lg overflow-hidden bg-[#d8cec0]">
                    <Image 
                      src={image.src} 
                      alt={image.alt} 
                      fill 
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-2">
                        <p className="text-white text-[10px] font-medium truncate">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ - Free Walking Tour Style */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="faq">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    q: "How difficult is the Tamang Heritage and Langtang Valley Trek?",
                    a: "The trek is rated as moderate. You'll trek 5-7 hours daily on well-maintained trails with some steep sections, particularly to Nagthali and Kyanjin Ri. The highest point is 4,985m at Tserko Ri, so proper acclimatization is important. No technical experience is required, and it's suitable for beginners with good fitness.",
                  },
                  {
                    q: "What is unique about the Tamang Heritage Trail?",
                    a: "The Tamang Heritage Trail was restricted until 2004 and offers authentic cultural immersion in traditional Tamang villages with Tibetan Buddhist heritage. You'll experience homestays, cultural performances, ancient monasteries, and the famous natural hot springs at Tatopani. The Tamang people are descendants of Tibetan horse traders who have preserved their unique language and customs.",
                  },
                  {
                    q: "What is the accommodation like?",
                    a: "Accommodation varies from basic homestays in Tamang villages to teahouses along the Langtang Valley. Rooms typically have twin beds with foam mattresses and shared bathrooms. Hot showers and charging are available for small fees. Homestays offer an authentic cultural experience with local families.",
                  },
                  {
                    q: "What wildlife might I see?",
                    a: "Langtang National Park is home to red pandas, Himalayan black bears, musk deer, langur monkeys, and over 250 bird species. The forests between Lama Hotel and Ghoda Tabela are prime red panda habitat, though sightings require luck.",
                  },
                  {
                    q: "Do I need special permits for this trek?",
                    a: "You need a Langtang National Park Entry Permit and TIMS card. No special restricted area permits are required as the Tamang Heritage Trail is now open. Your trekking agency will arrange these permits for you.",
                  },
                  {
                    q: "Can I do just the Tamang Heritage Trail without Langtang Valley?",
                    a: "Yes, the Tamang Heritage Trail can be done as a standalone 6-7 day trek. However, combining it with the Langtang Valley offers the best of both worlds - cultural immersion and spectacular mountain scenery. Our 13-day itinerary includes both sections.",
                  },
                ].map((faq, i) => (
                  <div key={i}>
                    <h4 className="font-semibold text-[#14383b] text-sm mb-1">{faq.q}</h4>
                    <p className="text-[#556363] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Book Now / CTA - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px] text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready to Experience Tamang Heritage & Langtang Valley?</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Book your Tamang Heritage and Langtang Valley Trek today and immerse yourself in authentic Tamang culture, 
                soak in natural hot springs, and trek through the majestic Valley of Glaciers to Kyanjin Gompa at 4,985 meters.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link href={`/contact?trek=${encodeURIComponent(trekName)}`}>
                  <Button className="bg-[#cf6943] hover:bg-[#b85a38] text-white font-bold rounded-full px-6 py-2 text-sm">
                    <Heart className="w-4 h-4 mr-2" aria-hidden="true" />
                    Book This Trek
                  </Button>
                </Link>
                <a 
                  href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about the ${trekName}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <Button className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-full px-6 py-2 text-sm">
                    <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                    WhatsApp Now
                  </Button>
                </a>
                <Button
                  variant="outline"
                  className="border-[#cf6943] text-[#cf6943] hover:bg-[#cf6943]/10 rounded-full px-6 py-2 text-sm"
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank", "noopener,noreferrer");
                  }}
                >
                  <Share2 className="w-4 h-4 mr-2" aria-hidden="true" />
                  Share
                </Button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}