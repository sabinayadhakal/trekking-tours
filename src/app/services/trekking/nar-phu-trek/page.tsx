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
  Landmark,
  Wind,
  Castle,
  Compass,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    "day": 1,
    "title": "Bus from Kathmandu to Besisahar & Jeep to Dharapani",
    "altitude": "1,400m → 760m → 1,860m",
    "distance": "175km bus / 30km jeep / 8-9 hrs total",
    "description": "Early morning departure from your hotel in Kathmandu for the scenic tourist bus journey to Besisahar, the district headquarters of Lamjung and traditional starting point of the Annapurna Circuit. The bus journey follows the Trishuli River through beautiful rural landscapes, terraced farmlands, and traditional villages. Upon arrival in Besisahar (760m), you'll switch to a private 4WD jeep for the rugged drive to Dharapani. The jeep section follows the Marshyangdi River through narrow gorges, past cascading waterfalls, and through remote settlements. This section was once trekked over 2-3 days but now offers a quick and adventurous vehicle transfer. The drive offers stunning views of Manaslu (8,163m), Annapurna II (7,937m), and the surrounding peaks. Arrive in Dharapani (1,860m), a large village at the junction with the Manaslu Circuit trail. Check into your teahouse, meet your trekking crew, and prepare for the Nar Phu Valley adventure. Evening briefing on the restricted area regulations and the Kang La Pass crossing (5,306m).",
    "overnight": "Teahouse in Dharapani",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic tourist bus to Besisahar", "Trishuli River views", "4WD jeep adventure to Dharapani", "Manaslu and Annapurna views", "Evening Nar Phu briefing"]
  },
  {
    "day": 2,
    "title": "Trek from Dharapani to Koto",
    "altitude": "1,860m → 2,600m",
    "distance": "14km / 6-7 hrs trek",
    "description": "Your Nar Phu Valley trek begins! Today you trek through beautiful pine and fir forests with fresh mountain air and stunning views of Annapurna II (7,937m) and Lamjung Himal (6,983m). The trail passes through Bagarchhap, a village with unique pagoda-style Tibetan houses and a small monastery. Continue to Danakyu and Timang, a village perched on a ridge with spectacular views of the Annapurna range and Manaslu. The trail winds through rhododendron forests that burst into brilliant red and pink blooms during spring (March-April). Finally, you reach Koto (2,600m), the last village before entering the restricted Nar Phu Valley. Here, your guide will complete the permit checks at the Annapurna Conservation Area checkpoint. Take time to explore Koto, visit the local monastery, and prepare mentally for the remote Nar Phu region ahead. Overnight in Koto.",
    "overnight": "Teahouse in Koto",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Pine and fir forests", "Annapurna II and Lamjung Himal views", "Bagarchhap pagoda-style houses", "Timang ridge views", "Koto last checkpoint before restricted area"]
  },
  {
    "day": 3,
    "title": "Trek from Koto to Meta",
    "altitude": "2,600m → 3,560m",
    "distance": "15km / 7-8 hrs trek",
    "description": "Today you enter the restricted Nar Phu Valley - a hidden Tibetan enclave that opened to trekkers only in 2003. The trail follows the Soti Khola through narrow, dramatic canyons with steep rock walls. After passing through Dharmasala, where there is a small police checkpoint, the landscape opens into beautiful alpine meadows with breathtaking views of Kang Guru (6,981m) and Pisang Peak (6,091m). You'll see your first yak pastures, mani walls (stone carvings of Buddhist prayers), and colorful prayer flags of the Nar Phu region. The valley feels ancient and untouched - a true step back in time to traditional Tibetan Buddhist culture. A steep climb brings you to Meta (3,560m), a small settlement perched on a ridge with stunning valley views, stone houses, and friendly locals. Overnight in Meta.",
    "overnight": "Teahouse in Meta",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Enter Nar Phu restricted area", "Soti Khola narrow canyons", "Dharmasala checkpoint", "Kang Guru and Pisang Peak views", "Meta ridge village arrival"]
  },
  {
    "day": 4,
    "title": "Trek from Meta to Phu Village",
    "altitude": "3,560m → 4,080m",
    "distance": "14km / 7-8 hrs trek",
    "description": "The landscape becomes increasingly dramatic as you trek through high alpine terrain with yak pastures, sacred chortens (Buddhist shrines), and mani walls. You'll pass through Kyang, a small settlement with a few stone houses, and Jhunam, another tiny village surrounded by towering peaks. As you approach Phu, the valley narrows dramatically with steep cliffs on both sides. Phu Village (4,080m) is one of the most remote villages in Nepal - a stunning Tibetan-style settlement of tightly clustered stone houses nestled beneath towering red cliffs, with the ancient Tashi Lakhang Monastery perched on a hillside above. The village looks like something from another century, with locals wearing traditional Tibetan dress and speaking a Tibetan dialect. The raw beauty and cultural authenticity of Phu is unforgettable. Overnight in Phu Village.",
    "overnight": "Teahouse in Phu Village",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["High alpine terrain and yak pastures", "Sacred chortens and mani walls", "Kyang and Jhunam villages", "Phu village beneath red cliffs", "Tibetan-style stone houses"]
  },
  {
    "day": 5,
    "title": "Acclimatization & Exploration Day in Phu Village",
    "altitude": "4,080m",
    "distance": "Optional hikes (3-6 hrs)",
    "description": "A crucial rest day for acclimatization at high altitude before attempting Kang La Pass (5,306m). The golden rule: climb high, sleep low. Today you have several options. Visit the ancient Tashi Lakhang Gompa (also called Phu Monastery), built by Karma Sonam Rinpoche who came to Nepal with the Dalai Lama in 1959 after fleeing Tibet. The monastery houses ancient Buddhist texts, thangkas, and religious artifacts. For adventurous trekkers, hike to Himlung Himal Base Camp (4,920m) through icy valleys along the frozen river - you may spot blue sheep (bharal) and perhaps even snow leopard tracks. Alternatively, hike to the viewpoint above Phu for stunning panoramic views of the surrounding peaks including Himlung Himal (7,126m). Interact with locals, learn about their Tibetan-influenced culture, visit the local school, and enjoy the raw, untouched beauty of this remote Himalayan valley. Overnight in Phu Village.",
    "overnight": "Teahouse in Phu Village",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Tashi Lakhang Gompa visit", "Himlung Base Camp hike option", "Blue sheep spotting", "Tibetan cultural immersion", "Acclimatization for Kang La Pass"]
  },
  {
    "day": 6,
    "title": "Trek from Phu Village to Nar Phedi",
    "altitude": "4,080m → 3,490m",
    "distance": "12km / 6-7 hrs trek",
    "description": "You leave Phu Village and begin your journey toward Nar Village and the Kang La Pass. Today you retrace your steps slightly, descending through alpine meadows and the narrow Phu Valley. The trail offers different perspectives of the dramatic landscapes you passed on the way up. You'll arrive at Nar Phedi (3,490m), a small settlement at the confluence of trails, situated beside the river. Nar Phedi has a small monastery where you can visit and interact with the resident monks, learning about their daily life, prayers, and Buddhist practices in this remote region. The rustic teahouses provide a quiet, peaceful setting to rest before the final push to Nar Village and the Kang La Pass crossing. The evening light on the surrounding peaks is beautiful. Overnight in Nar Phedi.",
    "overnight": "Teahouse in Nar Phedi",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Descend through Phu Valley", "Alpine meadows and river views", "Nar Phedi settlement", "Monastery visit and monk interactions", "Peaceful pre-pass atmosphere"]
  },
  {
    "day": 7,
    "title": "Trek from Nar Phedi to Nar Village",
    "altitude": "3,490m → 4,110m",
    "distance": "6km / 3-4 hrs trek",
    "description": "A short day allowing for gradual acclimatization before the challenging Kang La Pass crossing tomorrow. The trail follows the river for a short distance, then crosses it and climbs gently towards Nar Village. Colorful prayer flags flutter in the wind, and Buddhist chortens (stupas) and mani walls line the trail as you approach. Nar Village (4,110m) is the larger of the two valley villages (the other being Phu), with tightly clustered flat-roofed stone houses, a vibrant local culture, and spectacular mountain views of the Annapurna range. Unlike Phu, which feels hidden and enclosed, Nar sits on a more open hillside with sweeping views of the valley and surrounding peaks. Spend the afternoon exploring this fascinating settlement, visiting the local monastery, interacting with Nar villagers, and preparing mentally and physically for tomorrow's Kang La Pass crossing. Overnight in Nar Village.",
    "overnight": "Teahouse in Nar Village",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Short acclimatization day", "Prayer flags and chortens", "Nar village arrival", "Traditional Tibetan architecture", "Preparation for Kang La Pass"]
  },
  {
    "day": 8,
    "title": "Trek from Nar Village to Ngawal via Kang La Pass",
    "altitude": "4,110m → 5,306m → 3,660m",
    "distance": "20km / 9-10 hrs trek",
    "description": "The most challenging and rewarding day of the entire Nar Phu Valley Trek! Start very early (4-5 AM) for the ascent to Kang La Pass (5,306m) - the highest point of the trek. The climb is steep and relentless on a rocky moraine path, but every step brings you closer to the breathtaking views. As you ascend, the surrounding peaks - Annapurna II (7,937m), Gangapurna (7,455m), Tilicho Peak (7,134m), Pisang Peak (6,091m), and the entire Annapurna range - grow larger and more dramatic. Reaching the crest of Kang La Pass is an indescribable feeling - prayer flags flutter in the wind as you take in the 360-degree panoramic views of the Himalayas stretching in all directions, with the massive south face of Annapurna dominating the skyline. After celebrating at the pass, taking photographs, and soaking in the incredible scenery, begin the long descent to Ngawal (3,660m). The descent passes through rocky terrain, then into forests, with stunning views of the Pisang Valley. Ngawal is a beautiful village where you rejoin the Annapurna Circuit route. Celebrate your incredible achievement - you've crossed Kang La Pass! Overnight in Ngawal.",
    "overnight": "Teahouse in Ngawal",
    "meals": "Breakfast, Packed Lunch, Dinner",
    "highlights": ["Kang La Pass crossing (5,306m)", "360-degree Himalayan panorama", "Annapurna II, Gangapurna, Tilicho views", "Prayer flag-adorned summit", "Rejoin Annapurna Circuit at Ngawal"]
  },
  {
    "day": 9,
    "title": "Trek from Ngawal to Manang",
    "altitude": "3,660m → 3,540m",
    "distance": "12km / 5-6 hrs trek",
    "description": "A relatively easy day after the Kang La Pass crossing, allowing your body to recover while enjoying some of the most beautiful scenery on the Annapurna Circuit. The trail descends through the beautiful Pisang Valley with sweeping views of the Annapurna range. You'll pass through the village of Pisang, with its traditional architecture and spectacular views of Pisang Peak (6,091m). The trail offers new perspectives of the Annapurna range before reaching Manang (3,540m), the largest village in the Manang Valley. Manang is a fascinating town with Tibetan-style architecture, numerous gompas (monasteries), several excellent bakeries (famous for apple pie), gear shops, and the Himalayan Rescue Association (HRA) medical clinic. Spend the afternoon exploring Manang, visit the Gangapurna Glacier and Lake, or simply rest in one of the comfortable teahouses. Overnight in Manang.",
    "overnight": "Teahouse in Manang",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Pisang Valley descent", "Pisang Peak (6,091m) views", "Traditional Tibetan architecture", "Manang village arrival", "Gangapurna Glacier and Lake"]
  },
  {
    "day": 10,
    "title": "Trek from Manang to Ledar",
    "altitude": "3,540m → 4,200m",
    "distance": "11km / 4-5 hrs trek",
    "description": "Today you continue on the Annapurna Circuit toward Thorong La Pass. Leaving Manang, the landscape transforms dramatically from lush valleys to an arid, alpine desert. The trail climbs gradually through the village of Tenki, then passes through Gunsang before reaching Yak Kharka (4,050m), a small settlement surrounded by grazing yaks and spectacular mountain views of Gangapurna and Tilicho Peak (7,134m). Continue ascending on a broad, gentle path through rocky terrain to Ledar (4,200m), a small collection of teahouses nestled in a dramatic alpine landscape. The afternoon is free for rest and optional short acclimatization walks. This gradual ascent is crucial for preparing your body for the high altitude of Thorong La Pass. Overnight in Ledar.",
    "overnight": "Teahouse in Ledar",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Alpine desert landscape", "Yak Kharka and grazing yaks", "Gangapurna and Tilicho Peak views", "Gentle ascent for acclimatization", "Ledar alpine settlement"]
  },
  {
    "day": 11,
    "title": "Trek from Ledar to Thorong Phedi",
    "altitude": "4,200m → 4,540m",
    "distance": "9km / 4-5 hrs trek",
    "description": "A shorter but steep day as you climb to the base of Thorong La Pass. The trail continues through arid, rocky terrain with prayer flags marking the way. You'll pass the seasonal settlement of Letdar before making the final push to Thorong Phedi (4,540m), nestled dramatically beneath the towering south face of Thorong Peak. The afternoon is crucial for preparation: rest, hydrate, organize your gear for tomorrow's 3-4 AM start. For better acclimatization, consider an optional 1-hour hike to High Camp (4,850m), which can make the pass crossing easier by reducing the total ascent on summit day. The views of the surrounding peaks from Thorong Phedi are spectacular. Overnight in Thorong Phedi.",
    "overnight": "Teahouse in Thorong Phedi",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Final approach to Thorong La", "Thorong Phedi base camp", "Optional High Camp hike (4,850m)", "Pass preparation and briefing", "Dramatic mountain amphitheater"]
  },
  {
    "day": 12,
    "title": "Cross Thorong La Pass to Muktinath & Drive to Pokhara",
    "altitude": "4,540m → 5,416m → 3,800m → 820m",
    "distance": "14km trek / 8-10 hrs trek + 6-7 hrs drive",
    "description": "The biggest day of the Annapurna Circuit section! Start very early (3-4 AM) with headlamps for the challenging climb to Thorong La (5,416m) — the world's highest traversable pass. The trail is steep but well-defined, with prayer flags marking the summit. At the top, celebrate your double achievement: crossing Kang La Pass (5,306m) in Nar Phu and now Thorong La Pass (5,416m) on the Annapurna Circuit. Enjoy breathtaking 360-degree views of Annapurna (8,091m), Dhaulagiri (8,167m), Gangapurna (7,455m), and Thorong Peak (6,144m). After photos and celebrations, begin the long descent (1,600m drop) to Muktinath (3,800m), a sacred pilgrimage site for Hindus and Buddhists. Visit the Muktinath Temple with its 108 water spouts and eternal natural flame. From Muktinath, board your private vehicle for the scenic drive to Pokhara, passing through the dramatic Kali Gandaki Gorge (world's deepest). Arrive in Pokhara by late evening. Check into your hotel and celebrate completing both Nar Phu Valley and the Annapurna Circuit! Overnight in Pokhara.",
    "overnight": "Hotel in Pokhara",
    "meals": "Breakfast, Packed Lunch, Dinner",
    "highlights": ["Thorong La Pass (5,416m) - world's highest pass", "360-degree sunrise Himalayan panorama", "Annapurna and Dhaulagiri ranges", "Muktinath Temple (108 water spouts)", "Nar Phu + Annapurna Circuit double achievement"]
  },
  {
    "day": 13,
    "title": "Drive from Pokhara to Kathmandu",
    "altitude": "820m → 1,400m",
    "distance": "200km / 6-7 hrs drive",
    "description": "After a leisurely breakfast in Pokhara, begin your scenic drive back to Kathmandu along the Prithvi Highway. The journey follows the Trishuli River, offering beautiful views of river valleys, rolling hills, terraced farmlands, and distant mountain peaks. You'll pass through charming towns and witness daily Nepali rural life along the way. The drive is a wonderful opportunity to reflect on your incredible Nar Phu Valley and Annapurna Circuit adventure - exploring the remote Tibetan villages of Phu and Nar, crossing Kang La Pass (5,306m), and conquering Thorong La Pass (5,416m) - the world's highest pass. Arrive in Kathmandu by late afternoon. Check into your hotel in Thamel, take a well-deserved hot shower, and enjoy the comforts of the city. The remainder of your day is free for souvenir shopping in Thamel, visiting a spa for a much-needed massage, or simply relaxing. In the evening, enjoy a farewell dinner celebrating your successful double pass trek - Nar Phu Valley + Annapurna Circuit!",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast, Dinner",
    "highlights": ["Scenic Pokhara to Kathmandu drive", "Trishuli River and countryside views", "Rural Nepali landscapes", "Thamel souvenir shopping", "Farewell celebration dinner"]
  }
]

const includes = [
  "All airport/hotel transfers in private vehicle",
  "3 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "All meals during the trek (breakfast, lunch, dinner)",
  "Best available teahouse/lodge accommodation during trek",
  "Experienced English-speaking trekking guide (government licensed)",
  "Assistant guide for groups of 4 or more",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Nar Phu Restricted Area Permit (RAP)",
  "Annapurna Conservation Area Permit (ACAP)",
  "TIMS card (Trekkers' Information Management System)",
  "All ground transportation as per itinerary (Kathmandu-Jagat & Jomsom-Pokhara-Kathmandu)",
  "4WD jeep transportation for rough road sections",
  "Round-trip flight Jomsom - Pokhara",
  "First aid medical kit including pulse oximeter",
  "Sleeping bag and down jacket (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Nar Phu region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Packed lunch for Kang La Pass crossing day",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude trekking up to 5,400m & helicopter evacuation)",
  "Personal trekking gear and equipment",
  "Meals in Kathmandu (except welcome dinner and breakfasts)",
  "Bottled/mineral water during trek (purification tablets provided)",
  "Hot showers and battery charging at lodges ($3-6 per use)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, bar bills, souvenirs)",
  "Tips and gratuities for guides and porters (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
  "Extra day permit fees if trek exceeds 7 days in restricted area",
];

const gallery = [
  {
    src: "/images/used/narphu-1.webp",
    alt: "Phu Village - remote Tibetan settlement in Nepal's Nar Phu Valley with traditional stone houses and mountain views",
    caption: "Phu Village - Remote Tibetan Settlement",
  },
  {
    src: "/images/used/narphu-3.webp",
    alt: "Kang La Pass at 5,306m - spectacular high pass in Nepal's Nar Phu Valley with panoramic Annapurna views",
    caption: "Kang La Pass (5,306m)",
  },
  {
    src: "/images/used/narphu-4.webp",
    alt: "Nar Village with mountain views - traditional Tibetan-style village in Nepal's Nar Phu Valley with Annapurna range backdrop",
    caption: "Nar Village with Mountain Views",
  },
];

export default function NarPhuTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  const trekName = "Nar Phu Valley Trek";
  const canonicalUrl = "https://www.himkalaadventure.com/nar-phu-valley-trek";
  const pageTitle = "Nar Phu Valley Trek - Himkala Adventure";
  const pageDescription = "Nar Phu Valley Trek: Explore remote Tibetan villages, cross Kang La Pass at 5,306m, and discover Nepal's best-kept secret. A restricted area adventure. Book now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/narphu-2.webp";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Nar Phu Valley Trek - Himkala Adventure");
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
    "description": "Expert-guided Nar Phu Valley trekking packages in Nepal. Explore remote Tibetan villages and cross Kang La Pass with certified guides.",
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
    "name": "Nar Phu Valley Trek - 13 Days",
    "description": "Nar Phu Valley Trek: Explore remote Tibetan villages, cross Kang La Pass at 5,306m, and discover Nepal's best-kept secret. A restricted area adventure in the Annapurna region.",
    "image": imageUrl,
    "brand": {
      "@type": "Brand",
      "name": "Himkala Adventure Pvt. Ltd."
    },
    "offers": {
      "@type": "Offer",
      "price": "1350",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01",
      "url": canonicalUrl
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "67"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Max Altitude",
        "value": "5,306m"
      },
      {
        "@type": "PropertyValue",
        "name": "Kang La Pass Altitude",
        "value": "5,306m"
      },
      {
        "@type": "PropertyValue",
        "name": "Phu Village Altitude",
        "value": "4,080m"
      },
      {
        "@type": "PropertyValue",
        "name": "Nar Village Altitude",
        "value": "4,110m"
      },
      {
        "@type": "PropertyValue",
        "name": "Duration",
        "value": "13 Days"
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
        "name": "Trek Type",
        "value": "Restricted Area Trek - Nar Phu Valley"
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
              src="/images/used/narphu-2.webp"
              alt="Nar Phu Valley Trek - remote Tibetan Buddhist villages and dramatic Himalayan landscapes in Nepal's restricted Nar Phu Valley"
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
                <Badge className="bg-red-100 text-red-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                  Challenging
                </Badge>
                <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                  <Landmark className="w-3 h-3 mr-1" aria-hidden="true" /> Restricted Area
                </Badge>
              </div>
              
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
                NAR PHU <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                  VALLEY TREK
                </span>
              </h1>
              
              <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
                Discover one of Nepal's best-kept secrets - a remote Himalayan valley with ancient Tibetan villages, 
                dramatic canyons, and the legendary Kang La Pass.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-6 md:py-12">
          <div className="container mx-auto px-3 md:px-6 max-w-full overflow-hidden">
            {/* Mobile Sticky Book Now Bar */}
            <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-[#C5E0ED]/30 shadow-sm py-2 -mx-3 px-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400 line-through">$1,605</div>
                  <div className="text-lg font-bold text-[#0f2940]">$1,350</div>
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
                <div className="sticky top-24 space-y-4 md:space-y-6">
                  {/* Price Card */}
                  <Card className="bg-gradient-to-br from-[#0f2940] to-[#1a4166] border-none rounded-xl md:rounded-2xl overflow-hidden">
                    <CardContent className="p-4 md:p-6">
                      <div className="text-center mb-4 md:mb-6">
                        <span className="text-white/50 text-sm line-through">$1,605</span>
                        <div className="text-3xl md:text-4xl font-bold text-white mt-1">$1,350</div>
                        <span className="text-white/60 text-sm">per person</span>
                        <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $255</Badge>
                      </div>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>13 Days / 12 Nights</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>Best: Mar-May, Sep-Nov</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>Group Size: 2-8</span>
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
                        aria-label="Inquire about Nar Phu Valley trek on WhatsApp"
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
                          <span className="font-medium text-[#0f2940]">Kathmandu</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">End Point</span>
                          <span className="font-medium text-[#0f2940]">Kathmandu</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Trek Start/End</span>
                          <span className="font-medium text-[#0f2940]">Jagat / Jomsom</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Highest Point</span>
                          <span className="font-medium text-[#0f2940]">Kang La Pass (5,306m)</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Permit Cost</span>
                          <span className="font-medium text-[#0f2940]">$100 (peak) + ACAP</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2">
                          <span className="text-slate-500">Trekking Days</span>
                          <span className="font-medium text-[#0f2940]">10 Days</span>
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
              </aside>

              {/* Main Content */}
              <article className="lg:col-span-8 w-full overflow-hidden">
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
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Overview of Nar Phu Valley Trek</h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                      The <strong>Nar Phu Valley Trek</strong> is one of Nepal's best-kept secrets, a remote and restricted region 
                      that opened to trekkers only in 2003. Tucked away north of the Annapurna Circuit, this hidden valley offers 
                      an authentic adventure through dramatic landscapes, ancient Tibetan Buddhist villages, and pristine wilderness 
                      untouched by mass tourism on this <strong>Nar Phu Valley trekking</strong> journey.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                      The journey takes you through narrow canyons, alpine meadows, and yak pastures to the villages of 
                      <strong>Phu (4,080m)</strong> and <strong>Nar (4,110m)</strong>, where time seems to have stood still. Here you'll find 
                      centuries-old monasteries like Tashi Lakhang Gompa, traditional stone houses, and warm hospitality from locals who 
                      maintain their Tibetan-influenced culture.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                      The trek's climax is crossing the <strong>Kang La Pass (5,306m)</strong>, offering breathtaking 360-degree views of the 
                      Annapurna range including Annapurna II, Gangapurna, and Tilicho Peak. This challenging <strong>trekking in Nepal</strong> 
                      adventure requires special permits and is ideal for experienced trekkers seeking solitude, cultural immersion, 
                      and raw Himalayan beauty away from crowded trails.
                    </p>
                  </div>
                </section>

                {/* Highlights */}
                <section className="mb-6 md:mb-12" id="highlights">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Nar Phu Valley Trek Highlights</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                    {[
                      "Remote Tibetan-influenced villages of Phu and Nar, frozen in time",
                      "Cross Kang La Pass (5,306m) with 360° Annapurna panorama",
                      "Ancient Tashi Lakhang Gompa with centuries-old Buddhist murals",
                      "Restricted area with few trekkers - true wilderness solitude",
                      "Dramatic landscapes: narrow canyons, alpine meadows, yak pastures",
                      "Himlung Himal Base Camp excursion (4,920m) with blue sheep sightings",
                      "Traditional stone houses, mani walls, and colorful prayer flags",
                      "Spectacular views of Annapurna II, Gangapurna, and Pisang Peak",
                      "Cultural immersion with Tibetan Buddhist communities",
                      "Off-the-beaten-path adventure - Nepal's best-kept secret",
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
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Best Time to Trek Nar Phu Valley</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                    <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                      <CardContent className="p-3 md:p-5">
                        <div className="flex items-center gap-2 mb-1 md:mb-3">
                          <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-orange-500" aria-hidden="true" />
                          <h3 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Mar - May)</h3>
                        </div>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                          Warmer temperatures, blooming wildflowers, and excellent visibility. Snow remains above 4,500m on Kang La Pass, adding to the scenic beauty.
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
                          Crystal-clear skies, stable weather, and perfect trekking conditions. The most reliable season for crossing Kang La Pass with spectacular mountain views.
                        </p>
                        <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                      </CardContent>
                    </Card>
                  </div>
                  <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: Winter (Dec-Feb) is extremely cold with possible pass closures. Summer (Jun-Aug) brings monsoon rains on lower trails but the rain shadow keeps upper valleys drier.</p>
                </section>

                {/* Detailed Itinerary */}
                <section className="mb-6 md:mb-12" id="itinerary">
                  <div className="flex items-center justify-between mb-3 md:mb-6">
                    <h2 className="text-lg md:text-2xl font-serif text-[#0f2940]">Day-by-Day Nar Phu Valley Itinerary</h2>
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
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">What's Included in This Nar Phu Valley Trek</h2>
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
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-4">Important Information for Nar Phu Valley Trek</h2>
                <div className="bg-amber-50 border border-amber-200 rounded-lg md:rounded-2xl p-3 md:p-6 flex gap-2 md:gap-4 mb-6 md:mb-12">
                  <AlertTriangle className="w-4 h-4 md:w-6 md:h-6 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                      <li>• <strong>Restricted Area Permits Required:</strong> Nar Phu requires a special permit costing $100 (Sept-Nov) or $75 (Dec-Aug) for 7 days, plus ACAP and TIMS.</li>
                      <li>• <strong>Guide is Mandatory:</strong> Independent trekking is not permitted in this restricted region - you must trek with a licensed guide.</li>
                      <li>• <strong>Challenging Trek:</strong> This is a strenuous trek with long days (8-9 hours), high altitude (5,306m), and remote terrain. Prior high-altitude experience recommended.</li>
                      <li>• <strong>Limited Facilities:</strong> Teahouses are basic with shared bathrooms, no heating, and limited menu options. Prepare for rustic conditions.</li>
                      <li>• <strong>No Connectivity:</strong> Most of the trek has no mobile network or WiFi - be prepared for digital detox.</li>
                    </ul>
                  </div>
                </div>

                {/* Photo Gallery */}
                <section className="mb-6 md:mb-12" id="gallery">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Photo Gallery - Nar Phu Valley Trek</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3">
                    {gallery.map((image, i) => (
                      <div
                        key={i}
                        className="relative h-24 md:h-48 rounded-lg md:rounded-xl overflow-hidden group cursor-pointer"
                      >
                        <Image
                          src={image.src}
                          alt={`${image.alt} - Nar Phu Valley trekking experience in Nepal's Annapurna region`}
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
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Frequently Asked Questions About Nar Phu Valley Trek</h2>
                  <div className="space-y-2 md:space-y-4">
                    {[
                      {
                        q: "How difficult is the Nar Phu Valley Trek?",
                        a: "The trek is rated as challenging. You'll trek 6-9 hours daily on rugged terrain with significant altitude gain. The Kang La Pass day is particularly demanding with 9-10 hours of trekking at over 5,000m. Prior high-altitude trekking experience and excellent fitness are essential.",
                      },
                      {
                        q: "Do I need special permits for Nar Phu?",
                        a: "Yes, Nar Phu is a restricted area requiring a special permit costing $100 per person (Sept-Nov) or $75 (Dec-Aug) for the first 7 days, plus $15 per extra day. You also need ACAP and TIMS cards. Permits must be arranged through a registered trekking agency.",
                      },
                      {
                        q: "Is a guide mandatory for this trek?",
                        a: "Yes, independent trekking is not permitted in the Nar Phu restricted area. You must trek with a licensed government guide. This is for your safety and to preserve the region's fragile culture and environment.",
                      },
                      {
                        q: "What is the accommodation like?",
                        a: "Teahouses in Nar Phu are basic compared to the Annapurna Circuit. Rooms are simple with twin beds and shared squat toilets. No heating, so a warm sleeping bag is essential. Hot showers (bucket type) are available at some lodges for an extra fee.",
                      },
                      {
                        q: "Can I see Annapurna from Kang La Pass?",
                        a: "Absolutely! Kang La Pass offers spectacular 360-degree views of the Annapurna range including Annapurna II (7,937m), Gangapurna (7,455m), Tilicho Peak (7,134m), and Pisang Peak, plus distant views of Manaslu and Dhaulagiri.",
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