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
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  
  {
    "day": 1,
    "title": "Flight from Kathmandu to Lukla & Trek to Phakding",
    "altitude": "1,400m → 2,840m → 2,610m",
    "distance": "35 min flight / 3-4 hrs trek",
    "description": "Early morning departure from your hotel for the scenic mountain flight from Kathmandu to Lukla (Tenzing-Hillary Airport). This 35-minute flight offers breathtaking aerial views of the Himalayan range, including Langtang, Gauri Shankar, and Everest on clear days. Upon landing at Lukla's famous hillside airstrip, you'll meet your trekking crew and porters. After organizing gear, begin the gentle descent to Phakding. The trail follows the Dudh Koshi River through pine forests, crossing several suspension bridges and passing through small Sherpa settlements. This short trek helps with initial acclimatization while introducing you to the beauty of the Khumbu region. Overnight in Phakding's comfortable teahouse.",
    "overnight": "Teahouse in Phakding",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic mountain flight to Lukla", "Tenzing-Hillary Airport landing", "First views of the Himalayas", "Dudh Koshi River valley", "Suspension bridge crossings"]
  },
  {
    "day": 2,
    "title": "Trek from Phakding to Namche Bazaar",
    "altitude": "2,610m → 3,440m",
    "distance": "10km / 5-6 hrs trek",
    "description": "Today's trek takes you from Phakding to Namche Bazaar, the bustling Sherpa capital and gateway to the Everest region. The trail follows the Dudh Koshi River, crossing the iconic Hillary Suspension Bridge - the highest and longest in the Khumbu. You'll pass through Monjo (Sagarmatha National Park entry point) where permits are checked. The trail steepens considerably on the final climb to Namche, with several switchbacks offering magnificent views. As you approach Namche, your patience is rewarded with your first glimpse of Mount Everest's summit peeking above the ridge. Namche Bazaar is a vibrant town with banks, bakeries, gear shops, and exceptional Sherpa culture. This is a challenging but rewarding day that sets the stage for your Everest adventure.",
    "overnight": "Teahouse in Namche Bazaar",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Hillary Suspension Bridge crossing", "Sagarmatha National Park entry", "First views of Mount Everest", "Traditional Sherpa villages", "Namche Bazaar arrival"]
  },
  {
    "day": 3,
    "title": "Acclimatization Day in Namche Bazaar",
    "altitude": "3,440m",
    "distance": "Optional hikes (2-4 hrs)",
    "description": "A crucial acclimatization day in Namche Bazaar before climbing higher. The golden rule: climb high, sleep low. Your guide will lead an optional morning hike to the Everest View Hotel (3,880m) - a 2-hour uphill climb offering jaw-dropping panoramas of Everest (8,848m), Lhotse (8,516m), Nuptse (7,861m), and Ama Dablam (6,812m). Alternatively, visit the Sherpa Museum to learn about mountaineering history, Sherpa culture, and the famous Tenzing Norgay. Other options include exploring Khumjung village (where the Hillary School is located) or simply resting, hydrating, and enjoying Namche's famous bakeries and cafes. This rest day significantly improves your acclimatization and success rate for higher altitudes.",
    "overnight": "Teahouse in Namche Bazaar",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Everest View Hotel hike", "Panoramic mountain views (Everest, Lhotse, Ama Dablam)", "Sherpa Museum visit", "Khumjung village exploration", "Acclimatization strategy"]
  },
  {
    "day": 4,
    "title": "Trek from Namche Bazaar to Tengboche",
    "altitude": "3,440m → 3,860m",
    "distance": "10km / 5-6 hrs trek",
    "description": "Leaving Namche Bazaar, the trail contours along the hillsides with spectacular views of Everest, Nuptse, Lhotse, and the magnificent Ama Dablam. The path is relatively flat for the first hour before descending to Kayangjuma and crossing the Dudh Koshi River at Phunki Tenga (3,250m) - a great spot for a noodle soup break. The final climb to Tengboche (3,860m) is steep but incredibly rewarding. Tengboche Monastery, the largest Tibetan Buddhist monastery in the Khumbu region, sits majestically with Ama Dablam as its backdrop. Attend the evening prayer ceremony (puja) where monks chant, blow conch shells, and play traditional instruments. The sunset over the Himalayas from Tengboche is unforgettable. This day offers some of the most spectacular mountain photography opportunities on the entire trek.",
    "overnight": "Teahouse in Tengboche",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Ama Dablam close-up views", "Tengboche Monastery visit", "Evening prayer ceremony", "Sunset over the Himalayas", "Rhododendron forests"]
  },
  {
    "day": 5,
    "title": "Trek from Tengboche to Dingboche",
    "altitude": "3,860m → 4,410m",
    "distance": "11km / 5-6 hrs trek",
    "description": "Today's trek descends through beautiful rhododendron and juniper forests to Deboche, then crosses the Imja Khola River. The trail continues through Pangboche village (3,930m), one of the oldest Sherpa settlements in the Khumbu, home to a famous monastery said to contain a Yeti scalp. As you exit the forest, the landscape opens into the vast, alpine Imja Valley with stunning views of Ama Dablam towering above. Dingboche (4,410m) is a beautiful Sherpa village surrounded by stone-walled potato fields and dramatic mountain scenery including Lhotse, Island Peak, and Ama Dablam. This is a key acclimatization point, and you'll notice the air thinning significantly. Spend the afternoon resting, hydrating, and enjoying the mountain atmosphere.",
    "overnight": "Teahouse in Dingboche",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Pangboche Monastery (Yeti scalp)", "Imja Valley alpine landscape", "Ama Dablam panorama", "Island Peak views", "Sherpa farming community"]
  },
  {
    "day": 6,
    "title": "Acclimatization Day in Dingboche",
    "altitude": "4,410m",
    "distance": "Optional hike to Nagarjun Hill (5,100m)",
    "description": "A second crucial rest day for proper acclimatization before heading to higher elevations. Today's recommended activity is the hike to Nagarjun Hill (also known as Nangkartshang Peak at 5,100m). This 3-4 hour round-trip climb offers spectacular 360-degree views of Makalu (8,485m - the world's fifth highest), Lhotse, Nuptse, Ama Dablam, Island Peak, and the entire Imja Valley. The climb is steep but incredibly rewarding, helping you acclimatize more effectively for the altitude above 5,000m. After lunch, you can explore Dingboche's ancient Buddhist monastery, visit local yak herding families, or simply rest. Your guide will monitor your oxygen saturation and ensure you're properly hydrated for the challenging days ahead. This acclimatization day significantly increases your success rate for Everest Base Camp and Kala Patthar.",
    "overnight": "Teahouse in Dingboche",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Nagarjun Hill hike (5,100m)", "360-degree Himalayan panorama", "Views of Mt. Makalu (8,485m)", "Island Peak and Lhotse views", "Monastery and yak herder visits"]
  },
  {
    "day": 7,
    "title": "Trek from Dingboche to Lobuche",
    "altitude": "4,410m → 4,940m",
    "distance": "11km / 5-6 hrs trek",
    "description": "Today's trek continues up the broad, arid Imja Valley with the towering peaks of Nuptse, Lhotse, and Ama Dablam dominating the skyline. The trail climbs gradually to Thukla Pass (4,620m), marked by a field of memorial chortens and stone cairns dedicated to climbers (including the famous Scott Fischer) who lost their lives on Mount Everest and surrounding peaks. This poignant site reminds you of the mountain's power. After a short break, the trail ascends more steeply to Lobuche (4,940m), a small settlement of basic lodges nestled in a dramatic, rocky amphitheater. The air is noticeably thin here - move slowly, breathe deeply, and listen to your body. In the afternoon, you may take a short acclimatization walk toward the Khumbu Glacier. Overnight at Lobuche's high-altitude teahouse.",
    "overnight": "Teahouse in Lobuche",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Thukla Pass memorial chortens", "Climbers' memorial tribute", "Khumbu Glacier views", "Nuptse and Lhotse panorama", "High-alpine landscape entry"]
  },
  {
    "day": 8,
    "title": "Trek from Lobuche to Gorakshep & Everest Base Camp",
    "altitude": "4,940m → 5,164m → 5,364m",
    "distance": "13km / 7-8 hrs trek",
    "description": "This is the day you've been waiting for - reaching Everest Base Camp! Start early for the 3-hour trek to Gorakshep (5,164m), the last settlement before Base Camp. Drop your bags at the teahouse, have a quick snack, then continue along the lateral moraine of the Khumbu Glacier. The trail to Everest Base Camp (5,364m) is rocky and challenging, following prayer flags and cairns across glacier rubble. As you approach Base Camp during the spring climbing season (April-May), you'll see a tent city of expedition teams preparing for summit attempts. You'll have views of the infamous Khumbu Icefall, the first major obstacle for climbers. Stand at the foot of the world's highest mountain - an achievement of a lifetime! Take photos, soak in the atmosphere, and celebrate with your team. Return to Gorakshep for overnight. The thinner air at this altitude will make every step feel effortful - walk slowly and stay hydrated.",
    "overnight": "Teahouse in Gorakshep",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Gorakshep - highest settlement", "Everest Base Camp (5,364m)", "Khumbu Icefall views", "Expedition tent city (spring season)", "Once-in-a-lifetime achievement"]
  },
  {
    "day": 9,
    "title": "Kala Patthar Sunrise & Trek to Pheriche",
    "altitude": "5,164m → 5,545m → 4,240m",
    "distance": "12km / 7-8 hrs trek",
    "description": "The most spectacular morning of the entire trek! Wake at 4 AM for the challenging pre-dawn hike to Kala Patthar (5,545m) - meaning 'black rock' in Nepali. The 2-hour steep climb in the dark is difficult, but the reward is beyond words. Watch the sunrise paint Mount Everest (8,848m) in golden and pink light - the closest you'll ever be to the world's highest peak without climbing it. From Kala Patthar, you get the most unobstructed, face-on view of Everest, plus Nuptse, Changtse (7,580m), and Lhotse. After photography and celebrations, descend to Gorakshep for breakfast, then continue descending to Pheriche (4,240m). The lower altitude brings richer oxygen, better sleep, and relief for your body. Pheriche has the Himalayan Rescue Association's medical clinic where you can learn about altitude sickness. This day is the climax of your Everest Base Camp trek.",
    "overnight": "Teahouse in Pheriche",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Kala Patthar sunrise (5,545m)", "Best unobstructed Everest view", "Golden Himalayan sunrise", "Pheriche arrival and lower altitude", "HRA medical clinic information"]
  },
  {
    "day": 10,
    "title": "Trek from Pheriche to Namche Bazaar",
    "altitude": "4,240m → 3,440m",
    "distance": "15km / 6-7 hrs trek",
    "description": "The descent continues as you retrace your steps through the beautiful Khumbu Valley. The trail passes back through Pangboche, Tengboche, and Kyangjuma. Descending is easier on the lungs but harder on the knees - use trekking poles! The landscape transforms from high-alpine desert back to lush rhododendron and pine forests. The familiar mountains - Everest, Lhotse, and Ama Dablam - appear from new angles. Arrive in Namche Bazaar by afternoon, where you can celebrate your successful Everest Base Camp achievement. Reward yourself with hot showers (worth every rupee), laundry services, and Namche's famous bakeries. You'll feel the oxygen-rich air immediately, and sleep will come easily tonight. This is a day of reflection and celebration with your trekking team.",
    "overnight": "Teahouse in Namche Bazaar",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Return descent through Khumbu", "New mountain perspectives", "Rhododendron forest trails", "Hot shower celebration", "Namche bakeries and cafes"]
  },
  {
    "day": 11,
    "title": "Trek from Namche Bazaar to Lukla",
    "altitude": "3,440m → 2,840m",
    "distance": "18km / 6-7 hrs trek",
    "description": "Your final day of trekking follows the Dudh Koshi River as you make your way back to Lukla. The trail is mostly downhill, passing through Monjo (where you exit Sagarmatha National Park) and crossing familiar suspension bridges including the Hillary Bridge. The lush forests, rushing river, and small Sherpa villages create a peaceful farewell to the Khumbu region. Arrive in Lukla by late afternoon. Check into your teahouse for the final time and attend a farewell ceremony with your guides and porters. This is your chance to thank them with tips and appreciation. Enjoy a celebratory dinner in Lukla, reflecting on your incredible journey to the base of Mount Everest. Pack your bags carefully for tomorrow's early morning flight back to Kathmandu.",
    "overnight": "Teahouse in Lukla",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Final day of Everest Base Camp trek", "Dudh Koshi River valley", "Farewell to the Himalayas", "Celebration dinner with team", "Lukla arrival and packing"]
  },
  {
    "day": 12,
    "title": "Flight from Lukla to Kathmandu",
    "altitude": "2,840m → 1,400m",
    "distance": "35 min flight",
    "description": "Early morning wake-up for your scenic return flight from Lukla to Kathmandu. The 35-minute flight offers final aerial views of the Himalayan range - a last glimpse of Everest, Lhotse, and the peaks you've been trekking among. Upon arrival at Tribhuvan International Airport, our representative will transfer you to your hotel in Thamel. You've earned a well-deserved hot shower, clean clothes, and the comfort of a real bed. The afternoon is free to explore Kathmandu - shop for souvenirs in Thamel, visit a spa for a much-needed massage, or simply rest. In the evening, enjoy a farewell dinner at a traditional Nepali restaurant with cultural performance (optional). Celebrate completing one of the world's greatest treks - reaching Everest Base Camp at 5,364m and Kala Patthar at 5,545m.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast, Dinner",
    "highlights": ["Scenic Lukla to Kathmandu flight", "Final aerial Himalayan views", "Thamel souvenir shopping", "Farewell celebration dinner", "Everest Base Camp achievement celebration"]
  }

];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "2 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "All meals during the trek (breakfast, lunch, dinner)",
  "Best available teahouse/lodge accommodation during trek",
  "Experienced English-speaking trekking guide (government licensed)",
  "Assistant guide for groups of 5 or more",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Round-trip flights Kathmandu - Lukla - Kathmandu",
  "Sagarmatha National Park Permit",
  "Khumbu Rural Municipality Permit (TIMS card)",
  "All ground transportation as per itinerary",
  "First aid medical kit including pulse oximeter",
  "Sleeping bag and down jacket for high altitude (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Everest region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude trekking up to 5,600m & emergency evacuation)",
  "Personal trekking gear and equipment",
  "Meals in Kathmandu (except welcome dinner and breakfasts)",
  "Bottled/mineral water during trek (purification tablets provided)",
  "Hot showers and battery charging at lodges ($2-5 per use)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, bar bills, souvenirs)",
  "Tips and gratuities for guides and porters (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
];

const gallery = [
  {
    src: "/images/used/everest-3.webp",
    alt: "Mount Everest (8,848m) - the world's highest mountain viewed from the Everest Base Camp trekking route in Nepal",
    caption: "Mount Everest (8,848m)",
  },
  {
    src: "/images/used/everest-1.webp",
    alt: "Namche Bazaar - the vibrant Sherpa capital and gateway to the Everest region in Nepal",
    caption: "Namche Bazaar",
  },
  {
    src: "/images/used/everest-2.webp",
    alt: "Tengboche Monastery - the largest Tibetan Buddhist monastery in the Khumbu region with Ama Dablam backdrop",
    caption: "Tengboche Monastery",
  },
  {
    src: "/images/used/everest-main-page.webp",
    alt: "Everest Base Camp at 5,364m - the ultimate destination of the Everest Base Camp trek in Nepal's Khumbu region",
    caption: "Everest Base Camp",
  },
];

export default function EverestBaseCampTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  
  const trekName = "Everest Base Camp Trek";
  const canonicalUrl = "https://www.himkalaadventure.com/everest-base-camp-trek";
  const pageTitle = "Everest Base Camp Trek - Himkala Adventure";
  const pageDescription = "Everest Base Camp Trek: Trek to the foot of Mount Everest at 5,364m through Sherpa villages and the Khumbu Valley. Sunrise from Kala Patthar. Book now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/everest-main-page.webp";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Everest Base Camp Trek - Himkala Adventure");
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
    "description": "Expert-guided Everest Base Camp trekking packages in Nepal. Trek to 5,364m through Sherpa villages with certified guides.",
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
    "name": "Everest Base Camp Trek - 12 Days",
    "description": "Everest Base Camp Trek: Trek to the foot of Mount Everest at 5,364m through Sherpa villages, ancient monasteries, and the Khumbu Valley. Witness sunrise from Kala Patthar at 5,545m.",
    "image": imageUrl,
    "brand": {
      "@type": "Brand",
      "name": "Himkala Adventure Pvt. Ltd."
    },
    "offers": {
      "@type": "Offer",
      "price": "1520",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01",
      "url": canonicalUrl
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "245"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Max Altitude",
        "value": "5,545m"
      },
      {
        "@type": "PropertyValue",
        "name": "Everest Base Camp Altitude",
        "value": "5,364m"
      },
      {
        "@type": "PropertyValue",
        "name": "Duration",
        "value": "12 Days"
      },
      {
        "@type": "PropertyValue",
        "name": "Difficulty",
        "value": "Challenging"
      },
      {
        "@type": "PropertyValue",
        "name": "Region",
        "value": "Everest Region"
      },
      {
        "@type": "PropertyValue",
        "name": "Best Season",
        "value": "Mar-May, Sep-Nov"
      },
      {
        "@type": "PropertyValue",
        "name": "Trek Style",
        "value": "Teahouse Trekking"
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
              src="/images/used/everest-main-page.webp"
              alt="Everest Base Camp Trek - trekking to the foot of Mount Everest at 5,364m through Nepal's Khumbu Valley with stunning Himalayan views"
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
                  <MapPin className="w-3 h-3 mr-1" aria-hidden="true" /> Everest Region
                </Badge>
                <Badge className="bg-orange-100 text-orange-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                  Challenging
                </Badge>
                <Badge className="bg-white/20 backdrop-blur-sm text-white border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                  World Heritage
                </Badge>
              </div>
              
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
                EVEREST <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                  BASE CAMP TREK
                </span>
              </h1>
              
              <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
                Trek to the foot of the world's highest mountain through Sherpa villages, 
                ancient monasteries, and reach Everest Base Camp at 5,364 meters.
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
                  <div className="text-xs text-slate-400 line-through">$1,720</div>
                  <div className="text-lg font-bold text-[#0f2940]">$1,520</div>
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
                          <span className="text-white/50 text-sm line-through">$1,720</span>
                          <div className="text-3xl md:text-4xl font-bold text-white mt-1">$1,520</div>
                          <span className="text-white/60 text-sm">per person</span>
                          <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $200</Badge>
                        </div>

                        <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                          <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                            <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                            <span>14 Days / 13 Nights</span>
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
                          aria-label="Inquire about Everest Base Camp trek on WhatsApp"
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
                            <span className="text-slate-500">Start/End</span>
                            <span className="font-medium text-[#0f2940]">Kathmandu</span>
                          </div>
                          <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                            <span className="text-slate-500">Trek Start</span>
                            <span className="font-medium text-[#0f2940]">Lukla</span>
                          </div>
                          <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                            <span className="text-slate-500">Trek End</span>
                            <span className="font-medium text-[#0f2940]">Lukla</span>
                          </div>
                          <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                            <span className="text-slate-500">Highest Point</span>
                            <span className="font-medium text-[#0f2940]">5,545m (Kala Patthar)</span>
                          </div>
                          <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                            <span className="text-slate-500">Trekking Days</span>
                            <span className="font-medium text-[#0f2940]">11 Days</span>
                          </div>
                          <div className="flex justify-between py-1.5 md:py-2">
                            <span className="text-slate-500">Permits</span>
                            <span className="font-medium text-[#0f2940]">National Park, TIMS</span>
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
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Overview of Everest Base Camp Trek</h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                      The <strong>Everest Base Camp Trek</strong> is the ultimate Himalayan adventure, 
                      taking you to the foot of the world's highest mountain - <strong>Mount Everest (8,848m)</strong>. 
                      This iconic <strong>Everest Base Camp trekking</strong> experience follows in the footsteps of 
                      legendary climbers through the heart of Sherpa country, offering unparalleled mountain 
                      scenery and rich cultural experiences.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                      Starting with a thrilling flight to Lukla, the trail winds through the Dudh Koshi 
                      Valley, past colorful prayer flags, and through traditional Sherpa villages like 
                      Namche Bazaar and Tengboche, home to the region's most famous monastery.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                      The trek culminates with a sunrise hike to <strong>Kala Patthar (5,545m)</strong> for 
                      breathtaking close-up views of Everest, followed by the ultimate destination: 
                      <strong> Everest Base Camp (5,364m)</strong> itself, nestled at the foot of the 
                      Khumbu Icefall.
                    </p>
                  </div>
                </section>

                {/* Highlights */}
                <section className="mb-6 md:mb-12" id="highlights">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Everest Base Camp Trek Highlights</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                    {[
                      "Stand at Everest Base Camp (5,364m)",
                      "Sunrise from Kala Patthar (5,545m)",
                      "Scenic flight to/from Lukla",
                      "Visit Tengboche Monastery",
                      "Explore Namche Bazaar",
                      "Sherpa culture and hospitality",
                      "Views of Everest, Lhotse, Nuptse, Ama Dablam",
                      "Sagarmatha National Park",
                      "Khumbu Glacier and Icefall",
                      "Climbers' Memorial at Thukla",
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
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Best Time to Trek Everest Base Camp</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                    <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                      <CardContent className="p-3 md:p-5">
                        <div className="flex items-center gap-2 mb-1 md:mb-3">
                          <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-orange-500" aria-hidden="true" />
                          <h3 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Mar - May)</h3>
                        </div>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                          Rhododendrons bloom in vibrant colors, moderate temperatures, and excellent visibility. 
                          Popular season with busy trails and lodges.
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
                          mountain views. Comfortable temperatures at all altitudes.
                        </p>
                        <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Detailed Itinerary */}
                <section className="mb-6 md:mb-12" id="itinerary">
                  <div className="flex items-center justify-between mb-3 md:mb-6">
                    <h2 className="text-lg md:text-2xl font-serif text-[#0f2940]">Day-by-Day Everest Base Camp Itinerary</h2>
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
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">What's Included in This Everest Base Camp Trek</h2>
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
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-4">Important Information for Everest Base Camp Trek</h2>
                <div className="bg-amber-50 border border-amber-200 rounded-lg md:rounded-2xl p-3 md:p-6 flex gap-2 md:gap-4 mb-6 md:mb-12">
                  <AlertTriangle className="w-4 h-4 md:w-6 md:h-6 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                      <li>• <strong>Travel insurance is mandatory</strong> and must cover high altitude trekking up to 5,600m.</li>
                      <li>• Flights to/from Lukla are weather-dependent and may experience delays.</li>
                      <li>• We recommend starting physical preparation <strong>2-3 months before your trek</strong>.</li>
                      <li>• The itinerary may be modified due to weather conditions or other circumstances.</li>
                    </ul>
                  </div>
                </div>

                {/* Photo Gallery */}
                <section className="mb-6 md:mb-12" id="gallery">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Photo Gallery - Everest Base Camp Trek</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3">
                    {gallery.map((image, i) => (
                      <div
                        key={i}
                        className="relative h-24 md:h-48 rounded-lg md:rounded-xl overflow-hidden group cursor-pointer"
                      >
                        <Image
                          src={image.src}
                          alt={`${image.alt} - Everest Base Camp trekking experience in Nepal's Khumbu region`}
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
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Frequently Asked Questions About Everest Base Camp Trek</h2>
                  <div className="space-y-2 md:space-y-4">
                    {[
                      {
                        q: "How difficult is the Everest Base Camp Trek?",
                        a: "The trek is rated as challenging but achievable for anyone with good fitness. You'll trek 5-7 hours daily at high altitude. Previous trekking experience is helpful but not essential if you prepare well with cardio training.",
                      },
                      {
                        q: "Do I need previous trekking experience?",
                        a: "No, many first-time trekkers complete the EBC trek successfully. However, good physical fitness and proper preparation are essential. Regular cardio exercise and hill walking before the trek is highly recommended.",
                      },
                      {
                        q: "What about altitude sickness?",
                        a: "Our itinerary includes two acclimatization days (at Namche and Dingboche). Guides are trained in altitude sickness recognition and carry oximeters. We recommend Diamox after consulting your doctor and following proper hydration protocols.",
                      },
                      {
                        q: "What is the accommodation like on the trek?",
                        a: "Teahouses provide basic but comfortable rooms with twin beds and shared bathrooms. Facilities become more basic at higher altitudes. Hot showers and battery charging are available at extra cost in most places.",
                      },
                      {
                        q: "What happens if Lukla flights are cancelled?",
                        a: "Weather delays are common. We build buffer days into the itinerary. If delays occur, we have contingency plans including helicopter options (covered by insurance) if needed for tight schedules.",
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