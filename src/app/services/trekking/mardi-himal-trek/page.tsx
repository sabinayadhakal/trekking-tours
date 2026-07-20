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
  Flower,
  Eye,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    "day": 1,
    "title": "Drive from Kathmandu to Pokhara",
    "altitude": "1,400m → 820m",
    "distance": "200km / 6-7 hrs drive",
    "description": "Early morning departure from your hotel in Kathmandu for the scenic drive to Pokhara, the gateway to the Annapurna region and starting point for the Mardi Himal Trek. The journey follows the Prithvi Highway along the winding Trishuli River through beautiful rural landscapes, terraced farmlands, and traditional villages. You'll pass through charming towns and witness daily Nepali rural life along the way, with occasional views of distant Himalayan peaks including Manaslu and Ganesh Himal on clear days. Arrive in Pokhara (820m), Nepal's second-largest city and the beautiful lake city. Check into your lakeside hotel and enjoy free time to explore Phewa Lake - take a boat ride, visit the Tal Barahi Temple in the middle of the lake, or simply relax with stunning views of the Annapurna range and Machhapuchhre (Fishtail) reflecting on the water. In the evening, explore Lakeside's vibrant restaurants, bars, and shops, and prepare your gear for the trek ahead.",
    "overnight": "Hotel in Pokhara",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic Prithvi Highway drive", "Trishuli River views", "Rural Nepali countryside", "Phewa Lake and mountain reflections", "Pokhara preparation for Mardi Himal"]
  },
  {
    "day": 2,
    "title": "Drive from Pokhara to Phedi & Trek to Pitam Deurali",
    "altitude": "820m → 1,130m → 2,100m",
    "distance": "30 min drive / 4-5 hrs trek",
    "description": "After breakfast in Pokhara, take a short 30-minute drive to Phedi (1,130m), the traditional trailhead for the Mardi Himal Trek. From Phedi, your trek begins with a steady ascent through beautiful rhododendron and oak forests. The trail is well-marked and passes through several small villages with traditional stone houses and terraced farmlands. As you climb, you'll be rewarded with your first glimpses of Machhapuchhre (Fishtail Mountain - 6,993m) and Annapurna South (7,219m). The trail continues through dense forest, crossing small streams and offering occasional views of the valley below. Arrive at Pitam Deurali (2,100m), a small settlement perched on a ridge with stunning mountain views. The teahouses here offer basic but comfortable accommodation and the sunset views over the Annapurna range are spectacular. Overnight at Pitam Deurali.",
    "overnight": "Teahouse in Pitam Deurali",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Short drive to Phedi", "Rhododendron and oak forests", "First views of Machhapuchhre", "Traditional villages and farmlands", "Pitam Deurali sunset panorama"]
  },
  {
    "day": 3,
    "title": "Trek from Pitam Deurali to Low Camp",
    "altitude": "2,100m → 2,985m",
    "distance": "12km / 6-7 hrs trek",
    "description": "Today you trek deeper into the Mardi Himal region, climbing steadily through dense rhododendron and oak forests. The trail becomes increasingly beautiful as you gain altitude, with moss-covered trees, colorful rhododendrons (blooming spectacularly in March-April), and occasional views of the mountains through breaks in the forest canopy. You'll pass through Forest Camp (2,520m), a small clearing with a few basic lodges situated in a beautiful forest setting - a great spot for a tea or lunch break. From Forest Camp, the trail continues climbing through the forest, with the trees becoming shorter as you approach the tree line. The sound of birds and the rustling of leaves create a peaceful atmosphere. Arrive at Low Camp (2,985m), also known as Rest Camp, a small collection of teahouses nestled in a clearing with stunning views of the surrounding peaks. The afternoon light on the mountains is magical from this location. Overnight at Low Camp.",
    "overnight": "Teahouse at Low Camp",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Dense rhododendron forest", "Forest Camp (2,520m)", "Moss-covered trees", "Bird watching opportunities", "Low Camp mountain views"]
  },
  {
    "day": 4,
    "title": "Trek from Low Camp to High Camp",
    "altitude": "2,985m → 3,550m",
    "distance": "6km / 4-5 hrs trek",
    "description": "A shorter but steeper day as you climb above the tree line and enter the alpine zone of the Mardi Himal Trek. The trail continues through thinning forest until you emerge above the tree line, where the landscape transforms dramatically into open, alpine terrain with stunning panoramic mountain views. Machhapuchhre (Fishtail - 6,993m) dominates the skyline directly ahead, with Annapurna South (7,219m) and Hiunchuli (6,441m) visible to the west. You'll pass through Mid Camp, a small collection of basic tea shops at approximately 3,300m - a good spot for a rest and hot drink. From Mid Camp, the trail continues up a steep ridge to High Camp (3,550m), perched dramatically on a ridge with breathtaking 360-degree views of the Annapurna range, Machhapuchhre, and the surrounding valleys. The afternoon is free to rest, acclimatize, and enjoy the stunning mountain panorama. The sunset from High Camp is unforgettable, as the peaks glow golden and pink in the fading light. Overnight at High Camp.",
    "overnight": "Teahouse at High Camp",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Above tree line alpine zone", "Panoramic mountain views", "Mid Camp tea stop (3,300m)", "Machhapuchhre close-up", "High Camp sunset panorama"]
  },
  {
    "day": 5,
    "title": "Hike to Mardi Himal Base Camp & Return to High Camp",
    "altitude": "3,550m → 4,500m → 3,550m",
    "distance": "12km / 8-9 hrs round trip",
    "description": "The biggest and most rewarding day of the entire Mardi Himal Trek! Wake very early (around 4:00 AM) to begin the pre-dawn hike to Mardi Himal Base Camp. The trail climbs steeply along a narrow, exposed ridge with incredible views of Machhapuchhre (Fishtail), Annapurna South, Hiunchuli, and the entire Annapurna range. As you ascend, the peaks seem to grow larger with every step. You'll first reach the Viewpoint (4,200m), where you'll witness a spectacular sunrise - the peaks glow golden and pink as the sun rises behind the Himalayas - an unforgettable experience and a photographer's dream. Continue climbing to Mardi Himal Base Camp (4,500m) for even closer views of Mardi Himal (5,587m), the sheer east face of Machhapuchhre, and the massive Annapurna massif. The feeling of standing beneath these giants is indescribable. After celebrating your achievement, taking photos, and soaking in the incredible scenery, descend back to High Camp for a well-deserved lunch and rest. Spend the afternoon relaxing and enjoying the mountain views from High Camp. Overnight at High Camp.",
    "overnight": "Teahouse at High Camp",
    "meals": "Breakfast, Packed Lunch, Dinner",
    "highlights": ["Pre-dawn sunrise hike", "Viewpoint (4,200m) sunrise panorama", "Mardi Himal Base Camp (4,500m)", "Close-up Machhapuchhre east face", "Annapurna and Hiunchuli views"]
  },
  {
    "day": 6,
    "title": "Trek from High Camp to Siding Village & Jeep to Pokhara",
    "altitude": "3,550m → 1,350m → 820m",
    "distance": "7-8km trek / 4-5 hrs trek + 2.5 hrs jeep",
    "description": "Your final day of trekking on the Mardi Himal Trek. From High Camp, you descend via an alternative route through beautiful forests and traditional villages. The trail descends steeply at first, then gradually through dense rhododendron and oak forests. As you lose altitude, the vegetation becomes lush and the air warmer. You'll pass through small settlements and terraced farmlands, with beautiful views back toward the mountains you've just conquered. Arrive at Siding Village (1,350m), a charming traditional Gurung village with stone houses, friendly locals, and stunning views of the surrounding hills. Take some time to explore the village, visit the local monastery, and experience the warm Gurung hospitality. From Siding, board a private jeep for the adventurous 2.5-hour drive back to Pokhara, winding through scenic mountain roads with beautiful valley views. Arrive in Pokhara by late afternoon. Check into your hotel at Lakeside, take a well-deserved hot shower, and relax. In the evening, enjoy a celebration dinner at a lakeside restaurant, celebrating your incredible achievement of reaching Mardi Himal Base Camp (4,500m) and standing beneath the majestic Machhapuchhre. Overnight in Pokhara.",
    "overnight": "Hotel in Pokhara",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Final descent from High Camp", "Rhododendron and oak forests", "Siding Gurung village visit", "Scenic jeep ride to Pokhara", "Mardi Himal achievement celebration dinner"]
  },
  {
    "day": 7,
    "title": "Drive from Pokhara to Kathmandu",
    "altitude": "820m → 1,400m",
    "distance": "200km / 6-7 hrs drive",
    "description": "After a leisurely breakfast in Pokhara, begin your scenic drive back to Kathmandu along the Prithvi Highway. The journey follows the Trishuli River, offering beautiful views of river valleys, rolling hills, terraced farmlands, and distant mountain peaks. You'll pass through charming towns and witness daily Nepali rural life along the way. The drive is a wonderful opportunity to reflect on your Mardi Himal adventure - the pre-dawn hike to Base Camp, the spectacular sunrise over Machhapuchhre, the stunning views from High Camp, and the warm hospitality of the teahouse owners. Arrive in Kathmandu by late afternoon. Check into your hotel in Thamel, take a well-deserved hot shower, and enjoy the comforts of the city. The remainder of your day is free for souvenir shopping in Thamel, exploring UNESCO World Heritage sites you may have missed, visiting a spa for a much-needed massage, or simply relaxing with a good meal. In the evening, enjoy a farewell dinner celebrating your successful Mardi Himal Base Camp trek achievement - standing at 4,500m beneath the majestic Fishtail Mountain. Overnight in Kathmandu.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast, Dinner",
    "highlights": ["Scenic Pokhara to Kathmandu drive", "Trishuli River and countryside views", "Rural Nepali landscapes", "Thamel souvenir shopping", "Farewell celebration dinner"]
  }
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "2 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "2 nights hotel accommodation in Pokhara (3-star with breakfast)",
  "All meals during the trek (breakfast, lunch, dinner)",
  "Best available teahouse/lodge accommodation during trek",
  "Experienced English-speaking trekking guide (government licensed)",
  "Assistant guide for groups of 5 or more",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Annapurna Conservation Area Permit (ACAP)",
  "TIMS card (Trekkers' Information Management System)",
  "All ground transportation as per itinerary (Kathmandu-Pokhara-Kande & Siding-Pokhara-Kathmandu)",
  "First aid medical kit including pulse oximeter",
  "Sleeping bag and down jacket (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Annapurna region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Packed lunch for Mardi Himal Base Camp day",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude trekking up to 4,500m & emergency evacuation)",
  "Personal trekking gear and equipment",
  "Meals in Kathmandu and Pokhara (except welcome dinner and breakfasts)",
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
    src: "/images/used/mardi-himal-1.webp",
    alt: "Trail to Mardi Himal Base Camp at 4,500m - spectacular mountain views of Machhapuchhre and Annapurna on the Mardi Himal trek in Nepal",
    caption: "Way to Mardi Himal Base Camp (4,500m)",
  },
  {
    src: "/images/used/mardi-1.webp",
    alt: "High Camp Mardi - panoramic ridge-top teahouse with stunning views of Machhapuchhre (Fishtail) on the Mardi Himal trek in Nepal",
    caption: "High Camp Mardi",
  },
  {
    src: "/images/used/mardi-3.webp",
    alt: "Ridge Trail to High Camp - dramatic mountain ridge with Annapurna and Machhapuchhre views on the Mardi Himal trek in Nepal",
    caption: "Ridge Trail to High Camp",
  },
  {
    src: "/images/used/mardi-2.webp",
    alt: "Forest Camp - beautiful rhododendron and oak forest section of the Mardi Himal trek in Nepal's Annapurna region",
    caption: "Forest Camp",
  },
];

export default function MardiHimalTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  
  const trekName = "Mardi Himal Base Camp Trek";
  const canonicalUrl = "https://www.himkalaadventure.com/mardi-himal-base-camp-trek";
  const pageTitle = "Mardi Himal Base Camp Trek - Himkala Adventure";
  const pageDescription = "Mardi Himal Base Camp Trek: Trek to 4,500m beneath Machhapuchhre (Fishtail) through rhododendron forests. A hidden gem in Nepal's Annapurna region. Book now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/mardi-1.webp";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Mardi Himal Base Camp Trek - Himkala Adventure");
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
    "description": "Expert-guided Mardi Himal Base Camp trekking packages in Nepal. Trek to 4,500m beneath Machhapuchhre with certified guides.",
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
    "name": "Mardi Himal Base Camp Trek - 7 Days",
    "description": "Mardi Himal Base Camp Trek: Trek to 4,500m beneath Machhapuchhre (Fishtail) through enchanting rhododendron forests. A hidden gem in Nepal's Annapurna region.",
    "image": imageUrl,
    "brand": {
      "@type": "Brand",
      "name": "Himkala Adventure Pvt. Ltd."
    },
    "offers": {
      "@type": "Offer",
      "price": "600",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01",
      "url": canonicalUrl
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "112"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Max Altitude",
        "value": "4,500m"
      },
      {
        "@type": "PropertyValue",
        "name": "Mardi Himal Base Camp Altitude",
        "value": "4,500m"
      },
      {
        "@type": "PropertyValue",
        "name": "Viewpoint Altitude",
        "value": "4,200m"
      },
      {
        "@type": "PropertyValue",
        "name": "Duration",
        "value": "7 Days"
      },
      {
        "@type": "PropertyValue",
        "name": "Difficulty",
        "value": "Easy-Moderate"
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
        "name": "Trek Highlights",
        "value": "Mardi Himal Base Camp, Machhapuchhre Views, Rhododendron Forests, High Camp Ridge"
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
              src="/images/used/mardi-1.webp"
              alt="Mardi Himal Base Camp Trek - panoramic views of Machhapuchhre (Fishtail) and the Annapurna range from High Camp in Nepal"
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
                <Badge className="bg-green-100 text-green-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                  Easy-Moderate
                </Badge>
                <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                  <Eye className="w-3 h-3 mr-1" aria-hidden="true" /> Fishtail Views
                </Badge>
              </div>
              
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
                MARDI HIMAL <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                  BASE CAMP TREK
                </span>
              </h1>
              
              <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
                A hidden gem in the Annapurna region - trek through enchanting rhododendron forests 
                to a spectacular ridge with breathtaking views of Machhapuchhre (Fishtail).
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
                  <div className="text-xs text-slate-400 line-through">$755</div>
                  <div className="text-lg font-bold text-[#0f2940]">$600</div>
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
                          <span className="text-white/50 text-sm line-through">$755</span>
                          <div className="text-3xl md:text-4xl font-bold text-white mt-1">$600</div>
                          <span className="text-white/60 text-sm">per person</span>
                          <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $155</Badge>
                        </div>

                        <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                          <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                            <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                            <span>7 Days / 6 Nights</span>
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
                          aria-label="Inquire about Mardi Himal Base Camp trek on WhatsApp"
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
                            <span className="font-medium text-[#0f2940]">Kande / Siding</span>
                          </div>
                          <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                            <span className="text-slate-500">Highest Point</span>
                            <span className="font-medium text-[#0f2940]">Mardi Base Camp (4,500m)</span>
                          </div>
                          <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                            <span className="text-slate-500">Viewpoint</span>
                            <span className="font-medium text-[#0f2940]">4,200m</span>
                          </div>
                          <div className="flex justify-between py-1.5 md:py-2">
                            <span className="text-slate-500">Trekking Days</span>
                            <span className="font-medium text-[#0f2940]">5 Days</span>
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
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Overview of Mardi Himal Base Camp Trek</h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                      The <strong>Mardi Himal Base Camp Trek</strong> is one of the Annapurna region's best-kept secrets - a hidden gem that offers spectacular mountain views, enchanting forests, and a genuine sense of wilderness without the crowds of the more famous treks. Opened to trekkers in 2012, this relatively new <strong>Mardi Himal Base Camp trekking</strong> route takes you to the base of <strong>Mardi Himal (5,587m)</strong>, a beautiful peak nestled beside the iconic Machhapuchhre (Fishtail).
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                      The trek begins with a scenic drive to Pokhara, then to the trailhead at Kande. The trail winds through enchanting rhododendron and oak forests, past traditional villages and terraced farmlands, before emerging above the tree line onto a spectacular ridge. The views from the ridge are simply breathtaking - <strong>Machhapuchhre</strong> dominates the skyline, while Annapurna South, Hiunchuli, and the entire Annapurna range stretch out before you.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                      The highlight is the early morning hike to <strong>Mardi Himal Base Camp (4,500m)</strong>, where you stand at the foot of the mountain with Machhapuchhre towering beside you. This trek is perfect for those with limited time who still want an authentic Himalayan experience - it's shorter and less demanding than treks like Annapurna Base Camp, but no less rewarding in terms of scenery and mountain intimacy.
                    </p>
                  </div>
                </section>

                {/* Highlights */}
                <section className="mb-6 md:mb-12" id="highlights">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Mardi Himal Base Camp Trek Highlights</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                    {[
                      "Mardi Himal Base Camp (4,500m) with close-up mountain views",
                      "Spectacular sunrise from Mardi Viewpoint (4,200m)",
                      "Unobstructed views of Machhapuchhre (Fishtail) throughout the trek",
                      "Enchanting rhododendron and oak forests - stunning in spring",
                      "Panoramic Annapurna & Dhaulagiri range views from the ridge",
                      "Less crowded trail - a peaceful alternative to ABC",
                      "Traditional Gurung and Magar villages with warm hospitality",
                      "Shorter duration - perfect for those with limited time",
                      "Dramatic ridge walk above the tree line",
                      "Scenic drives through rural Nepal and Pokhara's lakeside",
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
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Best Time to Trek Mardi Himal Base Camp</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                    <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                      <CardContent className="p-3 md:p-5">
                        <div className="flex items-center gap-2 mb-1 md:mb-3">
                          <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-orange-500" aria-hidden="true" />
                          <h3 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Mar - May)</h3>
                        </div>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                          Rhododendron forests burst into vibrant red, pink, and white blooms. Warm temperatures during the day, clear skies, and excellent visibility. The most colorful time to trek.
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
                          Crystal-clear skies, stable weather, and perfect trekking conditions. Lush green trails after the monsoon and spectacular mountain views. Festive atmosphere with Dashain and Tihar celebrations.
                        </p>
                        <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Detailed Itinerary */}
                <section className="mb-6 md:mb-12" id="itinerary">
                  <div className="flex items-center justify-between mb-3 md:mb-6">
                    <h2 className="text-lg md:text-2xl font-serif text-[#0f2940]">Day-by-Day Mardi Himal Itinerary</h2>
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
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">What's Included in This Mardi Himal Base Camp Trek</h2>
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
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-4">Important Information for Mardi Himal Base Camp Trek</h2>
                <div className="bg-amber-50 border border-amber-200 rounded-lg md:rounded-2xl p-3 md:p-6 flex gap-2 md:gap-4 mb-6 md:mb-12">
                  <AlertTriangle className="w-4 h-4 md:w-6 md:h-6 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                      <li>• <strong>Travel insurance is mandatory</strong> and must cover high altitude trekking up to 4,500m.</li>
                      <li>• The Mardi Himal trek is suitable for beginners but requires good fitness - 5-7 hours walking daily.</li>
                      <li>• The trail to Base Camp can be steep and exposed - trekking poles are highly recommended.</li>
                      <li>• Winter conditions may limit access beyond the Viewpoint (4,200m) - your guide will advise.</li>
                    </ul>
                  </div>
                </div>

                {/* Photo Gallery */}
                <section className="mb-6 md:mb-12" id="gallery">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Photo Gallery - Mardi Himal Base Camp Trek</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3">
                    {gallery.map((image, i) => (
                      <div
                        key={i}
                        className="relative h-24 md:h-48 rounded-lg md:rounded-xl overflow-hidden group cursor-pointer"
                      >
                        <Image
                          src={image.src}
                          alt={`${image.alt} - Mardi Himal Base Camp trekking experience in Nepal's Annapurna region`}
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
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Frequently Asked Questions About Mardi Himal Base Camp Trek</h2>
                  <div className="space-y-2 md:space-y-4">
                    {[
                      {
                        q: "How difficult is the Mardi Himal Trek?",
                        a: "The Mardi Himal Trek is rated as easy to moderate. You'll trek 4-7 hours daily on well-defined trails with some steep sections. The highest point is 4,500m, so altitude is manageable. It's perfect for beginners with good fitness and those with limited time.",
                      },
                      {
                        q: "Is Mardi Himal less crowded than other Annapurna treks?",
                        a: "Yes! Mardi Himal is much less crowded than Annapurna Base Camp or Ghorepani Poon Hill. It was opened to trekkers in 2012 and remains a hidden gem, offering a more peaceful and authentic experience.",
                      },
                      {
                        q: "What is the accommodation like on the trek?",
                        a: "Teahouses along the route are basic but comfortable. Low Camp and High Camp have simple lodges with shared bathrooms and communal dining areas. Facilities become more basic at higher altitudes, but the hospitality is warm.",
                      },
                      {
                        q: "Can I see Machhapuchhre (Fishtail) from the trek?",
                        a: "Absolutely! Machhapuchhre dominates the views throughout the trek, especially from High Camp and the ridge. The close-up views of Fishtail Mountain are among the best in the Annapurna region.",
                      },
                      {
                        q: "How many days do I need for the Mardi Himal Trek?",
                        a: "The trek typically takes 5 days (4 nights) from Kande to Siding. Including travel from Kathmandu, you should allow 8-9 days total. Some operators offer shorter 4-day options for experienced trekkers.",
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