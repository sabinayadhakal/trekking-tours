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
  ArrowLeft,
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
  Menu,
  X,
  Flame,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    "day": 1,
    "title": "Drive from Kathmandu to Besisahar by Bus & Jeep to Chame",
    "altitude": "1,400m → 820m → 2,670m",
    "distance": "175km bus / 80km jeep / 9-10 hrs total",
    "description": "Early morning departure from Kathmandu by tourist bus to Besisahar (820m), the traditional starting point of the Annapurna Circuit. The bus journey follows the Trishuli and Marsyangdi Rivers, offering stunning views of rural Nepali life, terraced farmlands, and distant Himalayan peaks. Upon arrival in Besisahar, switch to a private jeep for the rugged drive to Chame (2,670m), the district headquarters of Manang. The jeep section passes through dramatic river valleys, cascading waterfalls, and dense pine forests, with your first breathtaking glimpses of Annapurna II (7,937m) and Lamjung Himal (6,983m). This combination saves multiple trekking days while allowing proper acclimatization. Check into your teahouse and explore Chame's small bazaar and natural hot springs.",
    "overnight": "Teahouse in Chame",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic bus drive from Kathmandu to Besisahar", "Private jeep adventure to Chame", "Trishuli and Marsyangdi River views", "First views of Annapurna II and Lamjung Himal", "Chame hot springs"]
  },
  {
    "day": 2,
    "title": "Trek from Chame to Upper Pisang",
    "altitude": "2,670m → 3,300m",
    "distance": "14km / 5-6 hrs trek",
    "description": "Today's trek begins from Chame, following the Marsyangdi River through dense pine and rhododendron forests. The trail offers spectacular views of Paungda Danda, an immense curved rock face rising 1,500m from the river. You'll pass through the village of Bhratang before reaching Lower Pisang. From here, take the upper trail to Upper Pisang (3,300m), a traditional Tibetan Buddhist village perched on a hillside with a magnificent Gompa (monastery). Upper Pisang offers unrivaled views of Annapurna II, Annapurna IV (7,525m), and Pisang Peak (6,091m). The village retains authentic Tibetan architecture and culture, providing a memorable overnight experience.",
    "overnight": "Teahouse in Upper Pisang",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Paungda Danda rock face", "Pine and rhododendron forests", "Upper Pisang village", "Pisang Peak views", "Traditional Tibetan Buddhist monastery"]
  },
  {
    "day": 3,
    "title": "Trek from Upper Pisang to Manang",
    "altitude": "3,300m → 3,540m",
    "distance": "16km / 6-7 hrs trek",
    "description": "From Upper Pisang, continue along the upper trail (recommended for better views) passing through Ghyaru and Ngawal villages. The trail offers jaw-dropping panoramas of Annapurna II, Annapurna III (7,555m), Annapurna IV, Gangapurna (7,455m), and Tilicho Peak (7,134m). You'll cross several small streams and pass ancient mani walls and chortens. Descend gradually to Manang (3,540m), the largest village in the Manang Valley. Manang is a fascinating town with Tibetan-style architecture, monasteries, a medical clinic, bakeries, and gear shops. The views of Gangapurna and its glacier lake are spectacular.",
    "overnight": "Teahouse in Manang",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Upper trail via Ghyaru and Ngawal", "Annapurna II, III, IV and Gangapurna views", "Ancient mani walls and chortens", "Manang village", "Gangapurna glacier lake"]
  },
  {
    "day": 4,
    "title": "Acclimatization Day in Manang",
    "altitude": "3,540m",
    "distance": "Optional hikes (2-4 hrs)",
    "description": "A crucial rest day for proper acclimatization before crossing Thorong La Pass (5,416m). Today is not about idleness—active acclimatization is key. Hike to Gangapurna Lake (3,550m) for stunning glacier and mountain reflections. For a higher altitude boost, climb to the viewpoint above Manang (4,000m) or hike to Ice Lake (4,600m) for spectacular panoramas. Attend the Himalayan Rescue Association's (HRA) altitude awareness talk (highly recommended). Explore Manang's monasteries, visit the ancient Braga Monastery, or simply rest and hydrate. This day significantly increases your success rate for crossing the world's highest pass.",
    "overnight": "Teahouse in Manang",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Gangapurna Lake hike", "Ice Lake viewpoint (optional)", "HRA altitude awareness talk", "Braga Monastery visit", "Active acclimatization for Thorong La"]
  },
  {
    "day": 5,
    "title": "Trek from Manang to Ledar",
    "altitude": "3,540m → 4,200m",
    "distance": "11km / 4-5 hrs trek",
    "description": "Leaving Manang after the acclimatization day, the landscape transforms dramatically from lush valleys to an arid, alpine desert. The trail climbs gradually through the village of Tenki, then passes through Gunsang before reaching Yak Kharka (4,050m), a small settlement surrounded by grazing yaks and spectacular mountain views of Gangapurna and Tilicho Peak (7,134m). Continue ascending on a broad, gentle path through rocky terrain to Ledar (4,200m), a small collection of teahouses nestled in a dramatic alpine landscape. The afternoon is free for rest and optional short acclimatization walks.",
    "overnight": "Teahouse in Ledar",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Alpine desert landscape", "Yak Kharka and grazing yaks", "Gangapurna and Tilicho Peak views", "Gentle ascent for acclimatization", "Remote mountain atmosphere"]
  },
  {
    "day": 6,
    "title": "Trek from Ledar to Thorong Phedi",
    "altitude": "4,200m → 4,540m",
    "distance": "9km / 4-5 hrs trek",
    "description": "A shorter but steep day as we climb to the base of Thorong La Pass. The trail continues through arid, rocky terrain with prayer flags marking the way. You'll pass the seasonal settlement of Letdar before making the final push to Thorong Phedi (4,540m), nestled dramatically beneath the towering south face of Thorong Peak. The afternoon is crucial for preparation: rest, hydrate, organize your gear for tomorrow's 3-4 AM start. For better acclimatization, consider an optional 1-hour hike to High Camp (4,850m), which can make the pass crossing easier by reducing the total ascent on summit day.",
    "overnight": "Teahouse in Thorong Phedi",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Final approach to Thorong La", "Thorong Phedi base camp", "Optional High Camp hike (4,850m)", "Pass preparation and briefing", "Dramatic mountain amphitheater"]
  },
  {
    "day": 7,
    "title": "Cross Thorong La Pass to Muktinath",
    "altitude": "4,540m → 5,416m → 3,800m",
    "distance": "14km / 8-10 hrs trek",
    "description": "The biggest and most rewarding day of the Annapurna Circuit! Start at 3-4 AM with headlamps for the challenging climb to Thorong La (5,416m) — the world's highest traversable pass. The trail is steep but well-defined, with prayer flags marking the summit. At the top, celebrate your achievement with breathtaking 360-degree views of Annapurna (8,091m), Dhaulagiri (8,167m), Gangapurna (7,455m), and Thorong Peak (6,144m). After photos and celebrations, begin the long descent (1,600m drop) to Muktinath (3,800m), a sacred pilgrimage site for Hindus and Buddhists. Visit the Muktinath Temple with its 108 water spouts and eternal natural flame. Overnight in Muktinath, where you can reflect on your incredible achievement.",
    "overnight": "Teahouse in Muktinath",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Thorong La Pass (5,416m) — world's highest pass", "360-degree sunrise Himalayan panorama", "Annapurna and Dhaulagiri ranges", "1,600m descent to Muktinath", "Muktinath Temple (108 water spouts and eternal flame)"]
  },
  {
    "day": 8,
    "title": "Drive from Muktinath to Pokhara by EV",
    "altitude": "3,800m → 820m",
    "distance": "200km / 6-7 hrs EV drive",
    "description": "After breakfast in Muktinath, board your private Electric Vehicle (EV) for an eco-friendly journey to Pokhara. The drive follows the Kali Gandaki River through the world's deepest gorge, with the Annapurna and Dhaulagiri ranges towering on both sides. You'll pass through the charming villages of Jomsom, Lete, Tatopani (natural hot springs), and Beni. The landscape transforms from arid alpine desert to lush subtropical forests and terraced farmlands. Arrive in Pokhara by late afternoon, the beautiful lake city with stunning views of Machhapuchhre (Fishtail) and the Annapurna range reflecting on Phewa Lake. Check into your hotel and celebrate your Annapurna Circuit achievement with a well-deserved dinner.",
    "overnight": "Hotel in Pokhara",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Eco-friendly EV drive", "Kali Gandaki Gorge — world's deepest gorge", "Jomsom and Tatopani hot springs views", "Arrival in Pokhara", "Phewa Lake and Machhapuchhre views"]
  },
  {
    "day": 9,
    "title": "Drive from Pokhara to Kathmandu",
    "altitude": "820m → 1,400m",
    "distance": "200km / 6-7 hrs drive",
    "description": "After a leisurely breakfast in Pokhara, begin your scenic drive back to Kathmandu along the Prithvi Highway. The journey follows the Trishuli River, offering beautiful views of river valleys, rolling hills, terraced farmlands, and distant mountain peaks. You'll pass through charming towns and witness daily Nepali rural life along the way. Arrive in Kathmandu by late afternoon. The remainder of your day is free for souvenir shopping in Thamel, exploring UNESCO World Heritage sites you may have missed, or simply relaxing after your incredible Annapurna Circuit trek adventure — crossing the world's highest pass at 5,416m.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast",
    "highlights": ["Scenic drive along Trishuli River", "Rural Nepali landscapes", "Terraced farmlands", "Thamel souvenir shopping", "Farewell to the Himalayas"]
  }
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "2 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "1 night hotel accommodation in Pokhara (3-star with breakfast)",
  "All meals during the trek (breakfast, lunch, dinner)",
  "Best available teahouse/lodge accommodation during trek",
  "Experienced English-speaking trekking guide (government licensed)",
  "Assistant guide for groups of 5 or more",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Annapurna Conservation Area Permit (ACAP)",
  "TIMS card (Trekkers' Information Management System)",
  "All ground transportation as per itinerary (Kathmandu-Bhulbhule & Nayapul-Pokhara-Kathmandu)",
  "Jeep transfer Tatopani to Ghorepani road section",
  "First aid medical kit including pulse oximeter",
  "Sleeping bag and down jacket for high altitude (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Annapurna region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude trekking up to 5,500m & emergency evacuation)",
  "Personal trekking gear and equipment",
  "Meals in Kathmandu and Pokhara (except welcome dinner and breakfasts)",
  "Bottled/mineral water during trek (purification tablets provided)",
  "Hot showers and battery charging at lodges ($2-5 per use)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, bar bills, souvenirs)",
  "Tips and gratuities for guides and porters (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, landslides, political unrest)",
  "Optional side trips (Tilicho Lake, Ice Lake, etc.)",
];

const gallery = [
  {
    src: "/images/used/annapurna-circuit-main-page.webp",
    alt: "Manang town - beautiful Tibetan Buddhist village in the Annapurna Circuit trekking region of Nepal",
    caption: "Beautiful Manang Town from a cliff",
  },
  {
    src: "/images/used/annapurna-circuit-1.webp",
    alt: "Chulu Himal mountain view from Thorong High Camp on the Annapurna Circuit trek in Nepal",
    caption: "View from Thorang High Camp",
  },
  {
    src: "/images/used/annapurna-circuit-2.webp",
    alt: "Ngawal town - traditional village on the Annapurna Circuit trekking route in Nepal",
    caption: "Small town on the way to Manang-- Ngawal",
  },
  {
    src: "/images/used/annapurna-circuit-3.webp",
    alt: "Annapurna Range from Manang - spectacular Himalayan mountain views on the Annapurna Circuit trek in Nepal",
    caption: "Annapurna Range from Manang",
  },
  {
    src: "/images/used/annapurna-circuit-4.webp",
    alt: "Thorong La Pass at 5,416m - the highest point on the Annapurna Circuit trek in Nepal's Himalayas",
    caption: "Thorang La- 5416m",
  },
];

export default function AnnapurnaCircuitTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  
  const trekName = "Annapurna Circuit Trek";
  const canonicalUrl = "https://www.himkalaadventure.com/annapurna-circuit-trek";
  const pageTitle = "Annapurna Circuit Trek - Himkala Adventure";
  const pageDescription = "Annapurna Circuit Trek: Circumnavigate the Annapurna massif and cross Thorong La Pass at 5,416m. The world's most diverse trek through 16 climate zones. Book now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/annapurna-circuit-2.webp";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Annapurna Circuit Trek - Himkala Adventure");
    let shareUrl = "";
    if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    }
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const toggleDay = (day: number) => {
    setExpandedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  // Schema.org Organization schema
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Himkala Adventure Pvt. Ltd.",
    "description": "Expert-guided Annapurna Circuit trekking packages in Nepal. Trek around the Annapurna massif and cross Thorong La Pass at 5,416m with certified guides.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thamel, Lekhnath Marga",
      "addressLocality": "Kathmandu",
      "addressCountry": "Nepal"
    },
    "telephone": "+977 9841376470",
    "email": "info@himkalaadventure.com",
    "url": "https://www.himkalaadventure.com",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.7172,
      "longitude": 85.3240
    }
  };

  // Schema.org Product/Trek schema
  const trekSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Annapurna Circuit Trek - 9 Days",
    "description": "Annapurna Circuit Trek: Circumnavigate the Annapurna massif and cross Thorong La Pass at 5,416m. Experience 16 climate zones, traditional villages, and spectacular Himalayan views in Nepal.",
    "image": imageUrl,
    "brand": {
      "@type": "Brand",
      "name": "Himkala Adventure Pvt. Ltd."
    },
    "offers": {
      "@type": "Offer",
      "price": "800",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01",
      "url": canonicalUrl
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "187"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Max Altitude",
        "value": "5,416m"
      },
      {
        "@type": "PropertyValue",
        "name": "Duration",
        "value": "9 Days"
      },
      {
        "@type": "PropertyValue",
        "name": "Difficulty",
        "value": "Challenging"
      },
      {
        "@type": "PropertyValue",
        "name": "Region",
        "value": "Annapurna Region"
      },
      {
        "@type": "PropertyValue",
        "name": "Best Season",
        "value": "Mar-May, Sep-Nov"
      },
      {
        "@type": "PropertyValue",
        "name": "Highest Pass",
        "value": "Thorong La (5,416m)"
      }
    ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(trekSchema) }}
        />
      </Head>

      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Mobile Navigation Drawer */}
        {showMobileNav && (
          <div className="lg:hidden fixed inset-0 z-50">
            <div 
              className="absolute inset-0 bg-black/50"
              onClick={() => setShowMobileNav(false)}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg text-[#0f2940]">Quick Navigation</h3>
                  <button 
                    onClick={() => setShowMobileNav(false)}
                    className="p-2 rounded-lg hover:bg-slate-100 min-h-[44px] min-w-[44px]"
                    aria-label="Close navigation menu"
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <a href="#overview" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                    Overview
                  </a>
                  <a href="#highlights" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                    Highlights
                  </a>
                  <a href="#itinerary" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                    Itinerary
                  </a>
                  <a href="#includes" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                    What's Included
                  </a>
                  <a href="#gallery" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                    Gallery
                  </a>
                  <a href="#faq" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                    FAQ
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white"
                      onClick={() => handleShare("facebook")}
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="w-4 h-4" aria-hidden="true" />
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white"
                      onClick={() => handleShare("twitter")}
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="w-4 h-4" aria-hidden="true" />
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-slate-800 hover:bg-slate-900 text-white"
                      onClick={handleCopyLink}
                      aria-label="Copy link to clipboard"
                    >
                      {copied ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section className="relative h-[45vh] min-h-[380px] md:h-[60vh] md:min-h-[500px] overflow-hidden bg-[#0f2940]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/used/annapurna-circuit-2.webp"
              alt="Annapurna Circuit Trek - spectacular mountain views along the world's most diverse trekking route in Nepal's Himalayas"
              fill
              className="object-cover"
              priority
              quality={85}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940] via-[#0f2940]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/80 via-transparent to-transparent" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
            <div className="max-w-5xl mx-auto text-center w-full">
              <div className="flex flex-wrap gap-2 mb-4 md:mb-6 justify-center">
                <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                  <MapPin className="w-3 h-3 mr-1" aria-hidden="true" /> Annapurna Region
                </Badge>
                <Badge className="bg-orange-100 text-orange-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                  Challenging
                </Badge>
                <Badge className="bg-amber-100 text-amber-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                  <Flame className="w-3 h-3 mr-1" aria-hidden="true" /> Thorong La Pass
                </Badge>
              </div>
              
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
                ANNAPURNA <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                  CIRCUIT TREK
                </span>
              </h1>
              
              <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
                Circumnavigate the Annapurna massif, cross the legendary Thorong La Pass (5,416m), 
                and experience the world's most diverse trek through 16 distinct climate zones.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-6 md:py-12 relative">
          <div className="container mx-auto px-3 md:px-6 max-w-full">
            {/* Mobile Sticky Book Now Bar */}
            <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-[#C5E0ED]/30 shadow-sm py-2 -mx-3 px-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400 line-through">$1,000</div>
                  <div className="text-lg font-bold text-[#0f2940]">$800</div>
                </div>
                <Link href={`/contact?trek=${encodeURIComponent(trekName)}`}>
                  <Button className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] text-white font-bold rounded-full px-4 py-1.5 text-xs min-h-[44px]" aria-label={`Book ${trekName} now`}>
                    <Heart className="w-3 h-3 mr-1" aria-hidden="true" /> Book Now
                  </Button>
                </Link>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="lg:grid lg:grid-cols-12 lg:gap-4 lg:gap-10">
              {/* Sidebar */}
              <aside className="hidden lg:block lg:col-span-4">
                <div className="sticky top-24">
                  <div className="space-y-4 md:space-y-6">
                    {/* Price Card */}
                    <Card className="bg-gradient-to-br from-[#0f2940] to-[#1a4166] border-none rounded-xl md:rounded-2xl overflow-hidden">
                      <CardContent className="p-4 md:p-6">
                        <div className="text-center mb-4 md:mb-6">
                          <span className="text-white/50 text-sm line-through">$1,000</span>
                          <div className="text-3xl md:text-4xl font-bold text-white mt-1">$800</div>
                          <span className="text-white/60 text-sm">per person</span>
                          <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $200</Badge>
                        </div>

                        <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                          <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                            <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                            <span>9 Days / 8 Nights</span>
                          </div>
                          <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                            <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                            <span>Best: Mar-May, Sep-Nov</span>
                          </div>
                          <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                            <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                            <span>Group Size: 2-12</span>
                          </div>
                          <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                            <Tent className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                            <span>Teahouse Accommodation</span>
                          </div>
                          <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                            <Utensils className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                            <span>All Meals Included</span>
                          </div>
                        </div>

                        <Link href={`/contact?trek=${encodeURIComponent(trekName)}`}>
                          <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-xs md:text-base" aria-label={`Book ${trekName}`}>
                            <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" aria-hidden="true" /> Book This Trek
                          </Button>
                        </Link>
                        
                        <a 
                          href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about the ${trekName}.`)}`}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="block"
                          aria-label="Inquire about Annapurna Circuit trek on WhatsApp"
                        >
                          <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold rounded-full h-10 md:h-12 text-xs md:text-base">
                            <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" aria-hidden="true" /> WhatsApp Now
                          </Button>
                        </a>
                      </CardContent>
                    </Card>

                    {/* Quick Facts */}
                    <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                      <CardContent className="p-4 md:p-6">
                        <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-[10px] md:text-base">
                          <Map className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" /> Quick Facts
                        </h3>
                        <div className="space-y-2 text-[10px] md:text-sm">
                          <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                            <span className="text-slate-500">Start Point</span>
                            <span className="font-medium text-[#0f2940]">Bhulbhule</span>
                          </div>
                          <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                            <span className="text-slate-500">End Point</span>
                            <span className="font-medium text-[#0f2940]">Nayapul → Pokhara</span>
                          </div>
                          <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                            <span className="text-slate-500">Highest Point</span>
                            <span className="font-medium text-[#0f2940]">Thorong La (5,416m)</span>
                          </div>
                          <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                            <span className="text-slate-500">Trek Duration</span>
                            <span className="font-medium text-[#0f2940]">14 Trekking Days</span>
                          </div>
                          <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                            <span className="text-slate-500">Difficulty</span>
                            <span className="font-medium text-[#0f2940]">Challenging</span>
                          </div>
                          <div className="flex justify-between py-1.5 md:py-2">
                            <span className="text-slate-500">Permits</span>
                            <span className="font-medium text-[#0f2940]">ACAP, TIMS</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Share */}
                    <Card className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                      <CardContent className="p-4 md:p-6">
                        <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-[10px] md:text-base">
                          <Share2 className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" /> Share
                        </h3>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-lg md:rounded-xl text-[8px] md:text-xs"
                            onClick={() => handleShare("facebook")}
                            aria-label="Share on Facebook"
                          >
                            <Facebook className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />
                          </Button>
                          <Button
                            size="sm"
                            className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg md:rounded-xl text-[8px] md:text-xs"
                            onClick={() => handleShare("twitter")}
                            aria-label="Share on Twitter"
                          >
                            <Twitter className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg md:rounded-xl text-[8px] md:text-xs"
                            onClick={handleCopyLink}
                            aria-label="Copy link to clipboard"
                          >
                            {copied ? <Check className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" /> : <Copy className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <article className="lg:col-span-8 w-full overflow-hidden mt-6 lg:mt-0">
                {/* Mobile Share Buttons */}
                <div className="lg:hidden flex gap-2 mb-6">
                  <Button
                    size="sm"
                    className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-lg text-[10px] py-1.5 min-h-[44px]"
                    onClick={() => handleShare("facebook")}
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="w-3 h-3 mr-1" aria-hidden="true" /> Share
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg text-[10px] py-1.5 min-h-[44px]"
                    onClick={() => handleShare("twitter")}
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-3 h-3 mr-1" aria-hidden="true" /> Tweet
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg text-[10px] py-1.5 min-h-[44px]"
                    onClick={handleCopyLink}
                    aria-label="Copy link to clipboard"
                  >
                    {copied ? <Check className="w-3 h-3" aria-hidden="true" /> : <Copy className="w-3 h-3" aria-hidden="true" />}
                  </Button>
                </div>

                {/* Overview */}
                <section className="mb-6 md:mb-12" id="overview">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Overview of Annapurna Circuit Trek</h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                      The <strong>Annapurna Circuit Trek</strong> is widely regarded as one of the world's greatest 
                      treks, offering unparalleled diversity in landscapes, cultures, and ecosystems. Circumnavigating 
                      the entire Annapurna massif, this <strong>Annapurna Circuit trekking</strong> adventure takes you through 
                      <strong>16 distinct climate zones</strong> - from subtropical forests to alpine deserts, and finally 
                      to the world's highest pass, <strong>Thorong La (5,416m)</strong>.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                      The journey begins in the lush Marsyangdi Valley, passing through traditional Gurung and Magar 
                      villages before entering the Tibetan Buddhist cultural zone of Manang. As you gain altitude, 
                      the landscape transforms dramatically into a high-altitude desert, culminating in the exhilarating 
                      crossing of Thorong La Pass. The descent into the Mustang region brings you to the sacred 
                      Muktinath Temple before traversing the world's deepest gorge - the Kali Gandaki.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                      The trek concludes with the famous Poon Hill sunrise over the Annapurna and Dhaulagiri ranges, 
                      offering a spectacular finale to this classic Himalayan adventure. This itinerary follows the 
                      standard circuit route focusing on Thorong La Pass without the Tilicho Lake side trip.
                    </p>
                  </div>
                </section>

                {/* Highlights */}
                <section className="mb-6 md:mb-12" id="highlights">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Annapurna Circuit Trek Highlights</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                    {[
                      "Cross Thorong La Pass (5,416m) - world's highest pass",
                      "Spectacular sunrise from Poon Hill (3,210m)",
                      "Visit sacred Muktinath Temple",
                      "16 distinct climate zones - from tropics to arctic",
                      "Traditional Gurung, Magar, and Tibetan villages",
                      "Annapurna and Dhaulagiri mountain panoramas",
                      "Natural hot springs at Tatopani",
                      "Kali Gandaki - world's deepest gorge",
                      "Marsyangdi River valley",
                      "Marpha's famous apple orchards and brandy",
                    ].map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]"
                      >
                        <Star className="w-3 h-3 md:w-4 h-4 text-[#2d6a8a] fill-[#C5E0ED] shrink-0" aria-hidden="true" />
                        <span className="text-[#0f2940] font-medium text-xs md:text-base leading-tight">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Best Season */}
                <section className="mb-6 md:mb-12">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Best Time to Trek Annapurna Circuit</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                    <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                      <CardContent className="p-3 md:p-5">
                        <div className="flex items-center gap-2 mb-1 md:mb-3">
                          <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-orange-500" aria-hidden="true" />
                          <h3 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Mar - May)</h3>
                        </div>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                          Rhododendrons bloom in vibrant colors, warming temperatures, and excellent visibility. 
                          Some snow may remain on Thorong La early in the season.
                        </p>
                        <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Excellent</Badge>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 rounded-lg md:rounded-2xl">
                      <CardContent className="p-3 md:p-5">
                        <div className="flex items-center gap-2 mb-1 md:mb-3">
                          <Snowflake className="w-4 h-4 md:w-5 md:h-5 text-blue-500" aria-hidden="true" />
                          <h3 className="font-bold text-[#0f2940] text-xs md:text-base">Autumn (Sep - Nov)</h3>
                        </div>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                          The most popular season with crystal-clear skies, stable weather, and the best 
                          mountain views. Perfect conditions for crossing Thorong La.
                        </p>
                        <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Detailed Itinerary */}
                <section className="mb-6 md:mb-12" id="itinerary">
                  <div className="flex items-center justify-between mb-3 md:mb-6">
                    <h2 className="text-lg md:text-2xl font-serif text-[#0f2940]">Day-by-Day Annapurna Circuit Itinerary</h2>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-[#2d6a8a] border-[#C5E0ED] hover:bg-[#C5E0ED]/20 rounded-full text-xs md:text-sm px-2 md:px-4 min-h-[44px]"
                      onClick={() =>
                        setExpandedDays(expandedDays.length === itinerary.length ? [] : itinerary.map((d) => d.day))
                      }
                      aria-label={expandedDays.length === itinerary.length ? "Collapse all itinerary days" : "Expand all itinerary days"}
                    >
                      {expandedDays.length === itinerary.length ? "Collapse All" : "Expand All"}
                    </Button>
                  </div>

                  <div className="space-y-2 md:space-y-3">
                    {itinerary.map((day) => (
                      <Card
                        key={day.day}
                        className={`bg-white border-[#C5E0ED]/30 rounded-lg md:rounded-xl overflow-hidden transition-all ${
                          expandedDays.includes(day.day) ? "shadow-md md:shadow-lg shadow-[#C5E0ED]/20" : "hover:shadow-sm"
                        }`}
                      >
                        <CardContent className="p-0">
                          <button
                            className="w-full flex items-center gap-2 md:gap-4 p-2 md:p-4 text-left min-h-[44px]"
                            onClick={() => toggleDay(day.day)}
                            aria-expanded={expandedDays.includes(day.day)}
                            aria-label={expandedDays.includes(day.day) ? `Collapse day ${day.day}` : `Expand day ${day.day}`}
                          >
                            <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex flex-col items-center justify-center shrink-0">
                              <span className="text-[8px] md:text-[10px] font-bold text-[#0f2940] uppercase">Day</span>
                              <span className="text-base md:text-xl font-bold text-[#0f2940] leading-none">{day.day}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-[#0f2940] text-xs md:text-base truncate">{day.title}</h3>
                              <div className="flex flex-wrap gap-1 md:gap-3 text-xs text-slate-500 mt-0.5 md:mt-1">
                                <span className="flex items-center gap-0.5 md:gap-1 text-[10px] md:text-xs">
                                  <TrendingUp className="w-2.5 h-2.5 md:w-3 md:h-3" aria-hidden="true" /> {day.altitude}
                                </span>
                                <span className="flex items-center gap-0.5 md:gap-1 text-[10px] md:text-xs">
                                  <Backpack className="w-2.5 h-2.5 md:w-3 md:h-3" aria-hidden="true" /> {day.distance}
                                </span>
                              </div>
                            </div>
                            <ChevronDown
                              className={`w-3 h-3 md:w-5 md:h-5 text-slate-400 transition-transform shrink-0 ${
                                expandedDays.includes(day.day) ? "rotate-180" : ""
                              }`}
                              aria-hidden="true"
                            />
                          </button>

                          {expandedDays.includes(day.day) && (
                            <div className="px-2 md:px-4 pb-2 md:pb-4 border-t border-[#C5E0ED]/20">
                              <p className="text-slate-600 text-[10px] md:text-sm leading-relaxed pt-2 md:pt-4 mb-2 md:mb-4">{day.description}</p>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-2 md:mb-4">
                                <div className="flex items-center gap-2 text-xs text-slate-600 bg-[#f8fbfc] rounded-lg p-2 md:p-3">
                                  <Tent className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" />
                                  <span className="text-[10px] md:text-xs"><strong>Overnight:</strong> {day.overnight}</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-slate-600 bg-[#f8fbfc] rounded-lg p-2 md:p-3">
                                  <Utensils className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" />
                                  <span className="text-[10px] md:text-xs"><strong>Meals:</strong> {day.meals}</span>
                                </div>
                              </div>

                              <div className="flex flex-wrap gap-1 md:gap-2">
                                {day.highlights.map((h, i) => (
                                  <Badge key={i} variant="secondary" className="bg-[#C5E0ED]/20 text-[#2d6a8a] text-[8px] md:text-xs px-1.5 py-0.5 md:px-2 md:py-1">
                                    {h}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Includes / Excludes */}
                <section className="mb-6 md:mb-12" id="includes">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">What's Included in This Annapurna Circuit Trek</h2>
                  <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                    <Card className="bg-green-50/50 border-green-200/50 rounded-lg md:rounded-2xl">
                      <CardContent className="p-3 md:p-6">
                        <h3 className="font-bold text-green-800 mb-2 md:mb-4 flex items-center gap-2 text-xs md:text-base">
                          <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" /> Cost Includes
                        </h3>
                        <ul className="space-y-1 md:space-y-2">
                          {includes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-[10px] md:text-sm text-slate-600">
                              <CheckCircle2 className="w-2.5 h-2.5 md:w-4 md:h-4 text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                              <span className="leading-tight">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-red-50/50 border-red-200/50 rounded-lg md:rounded-2xl">
                      <CardContent className="p-3 md:p-6">
                        <h3 className="font-bold text-red-800 mb-2 md:mb-4 flex items-center gap-2 text-xs md:text-base">
                          <XCircle className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" /> Cost Excludes
                        </h3>
                        <ul className="space-y-1 md:space-y-2">
                          {excludes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-[10px] md:text-sm text-slate-600">
                              <XCircle className="w-2.5 h-2.5 md:w-4 md:h-4 text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
                              <span className="leading-tight">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Important Information */}
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-4">Important Information for Annapurna Circuit Trek</h2>
                <div className="bg-amber-50 border border-amber-200 rounded-lg md:rounded-2xl p-3 md:p-6 flex gap-2 md:gap-4 mb-6 md:mb-12">
                  <AlertTriangle className="w-4 h-4 md:w-6 md:h-6 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                      <li>• <strong>Travel insurance is mandatory</strong> and must cover high altitude trekking up to 5,500m and emergency evacuation.</li>
                      <li>• The Thorong La Pass crossing requires an extremely early start (3-4 AM) and good physical preparation.</li>
                      <li>• Road conditions may affect driving times - we use private jeeps for the Tatopani to Ghorepani section.</li>
                      <li>• We recommend starting physical preparation <strong>2-3 months before your trek</strong> with cardio and strength training.</li>
                    </ul>
                  </div>
                </div>

                {/* Photo Gallery */}
                <section className="mb-6 md:mb-12" id="gallery">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Photo Gallery - Annapurna Circuit Trek</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3">
                    {gallery.map((image, i) => (
                      <div
                        key={i}
                        className="relative h-24 md:h-48 rounded-lg md:rounded-xl overflow-hidden group cursor-pointer"
                      >
                        <Image
                          src={image.src}
                          alt={`${image.alt} - Annapurna Circuit trekking experience in Nepal's Annapurna region`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                          sizes="(max-width: 768px) 50vw, 33vw"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute bottom-0 left-0 right-0 p-1 md:p-3">
                            <p className="text-white text-[8px] md:text-xs font-medium truncate">{image.caption}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-6 md:mb-12" id="faq">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Frequently Asked Questions About Annapurna Circuit Trek</h2>
                  <div className="space-y-2 md:space-y-4">
                    {[
                      {
                        q: "How difficult is the Annapurna Circuit Trek?",
                        a: "The trek is rated as challenging due to the Thorong La Pass crossing at 5,416m and the long days (8-10 hours on pass day). However, with proper acclimatization and good fitness, it's achievable for most active trekkers. The itinerary includes a rest day in Manang for acclimatization.",
                      },
                      {
                        q: "What is the Thorong La Pass crossing like?",
                        a: "It's the biggest day of the trek. You start at 3-4 AM from Thorong Phedi (4,540m) and climb steadily for 4-5 hours to the pass (5,416m). The trail is steep but well-defined. After enjoying the views, you descend 1,600m to Muktinath. Total time is 8-10 hours.",
                      },
                      {
                        q: "Is it better to do the circuit clockwise or counter-clockwise?",
                        a: "This itinerary follows the classic clockwise direction, which is recommended for safer acclimatization. The gradual altitude gain over 10 days before reaching Thorong La gives your body time to adjust, resulting in higher success rates for crossing the pass.",
                      },
                      {
                        q: "What is accommodation like on the circuit?",
                        a: "Teahouses range from basic lodges in remote areas to comfortable ones in larger villages. Rooms typically have twin beds with foam mattresses and shared bathrooms. Facilities improve each year, with most offering hot showers (paid) and charging points.",
                      },
                      {
                        q: "Do I need a guide for the Annapurna Circuit?",
                        a: "While technically possible to trek independently, we strongly recommend a guide for safety, cultural insights, and logistics management. A guide ensures proper acclimatization, handles permits and accommodation, and provides crucial support during the pass crossing.",
                      },
                    ].map((faq, i) => (
                      <Card key={i} className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-lg md:rounded-xl">
                        <CardContent className="p-2 md:p-5">
                          <h3 className="font-bold text-[#0f2940] mb-1 md:mb-2 text-xs md:text-base">{faq.q}</h3>
                          <p className="text-slate-600 text-[10px] md:text-sm leading-relaxed">{faq.a}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}