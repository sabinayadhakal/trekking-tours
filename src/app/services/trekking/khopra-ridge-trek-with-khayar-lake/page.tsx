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
  Droplets,
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
    "description": "Early morning departure from your hotel in Kathmandu for the scenic drive to Pokhara along the Prithvi Highway, following the winding Trishuli River through lush green hills and terraced farmlands. The journey offers beautiful views of rural Nepali landscapes, distant mountain peaks, and occasional white-water rafters in the river below. You'll pass through charming towns and villages, witnessing daily life in the Nepali countryside. Arrive in Pokhara (820m), Nepal's second-largest city and the gateway to the Annapurna region. Check into your beautiful lakeside hotel and enjoy free time to explore Phewa Lake, go boating, or simply relax with stunning views of the Annapurna range and Machhapuchhre (Fishtail) reflected in the lake. Evening is free to explore Lakeside's vibrant restaurants, bars, and shops. Prepare your gear for tomorrow's trek start.",
    "overnight": "Hotel in Pokhara",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Early morning departure from Kathmandu", "Scenic Prithvi Highway drive", "Trishuli River views", "Rural Nepali countryside", "Phewa Lake and mountain reflections"]
  },
  {
    "day": 2,
    "title": "Drive to Ghandruk & Trek to Tadapani",
    "altitude": "820m → 1,940m → 2,630m",
    "distance": "2 hrs drive / 5-6 hrs trek",
    "description": "After breakfast in Pokhara, take a scenic 2-hour drive to Ghandruk (1,940m), one of the largest and most beautiful Gurung villages in Nepal. The drive offers spectacular views of the Annapurna range. Upon arrival in Ghandruk, explore this charming village with its traditional stone houses, narrow stone-paved streets, and warm Gurung hospitality. Visit the Gurung Museum, which showcases traditional Gurung culture, clothing, tools, and photographs of the village's famous Gurkha soldiers. Enjoy stunning views of Annapurna South (7,219m), Hiunchuli (6,441m), and Machhapuchhre (6,993m - Fishtail). After exploring Ghandruk, begin your trek through beautiful rhododendron forests. The trail climbs steadily through dense forests that burst into brilliant red and pink blooms during spring (March-April). Arrive at Tadapani (2,630m), a scenic ridge-top settlement offering spectacular close-up views of Machhapuchhre and Annapurna South. Overnight in a comfortable teahouse.",
    "overnight": "Teahouse in Tadapani",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic drive to Ghandruk", "Ghandruk village exploration", "Gurung Museum visit", "Rhododendron forests", "Tadapani mountain views"]
  },
  {
    "day": 3,
    "title": "Trek from Tadapani to Dobato",
    "altitude": "2,630m → 3,420m",
    "distance": "8-10km / 5-6 hrs trek",
    "description": "Today we leave the main Annapurna Base Camp trail and head north toward the less-crowded Khopra Ridge. The trail ascends through dense rhododendron and oak forests, which gradually thin as you gain altitude. The path offers beautiful alpine scenery with occasional glimpses of Annapurna South and Machhapuchhre through breaks in the forest. Dobato (3,420m) is a peaceful ridge-top settlement with basic teahouses, offering stunning sunrise and sunset views over the Annapurna and Dhaulagiri ranges. This area is known for its solitude away from the crowded Annapurna trails, providing a truly authentic trekking experience. The afternoon is free to rest and enjoy the spectacular mountain panorama. Overnight in Dobato's simple but comfortable teahouse.",
    "overnight": "Teahouse in Dobato",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Less-crowded Khopra Ridge trail", "Rhododendron and oak forests", "Alpine scenery", "Dobato ridge-top settlement", "Sunrise and sunset mountain views"]
  },
  {
    "day": 4,
    "title": "Trek from Dobato to Khopra Ridge",
    "altitude": "3,420m → 3,660m",
    "distance": "8km / 5-6 hrs trek",
    "description": "Today's trek takes us to the magnificent Khopra Ridge, one of the most spectacular viewpoints in the Annapurna region. The trail first descends through oak forests to the charming Chistibang pastures, a beautiful meadow area with grazing yaks and horses. From Chistibang, the trail begins a steady climb up to Khopra Ridge (3,660m). As you ascend, the trail opens up to breathtaking panoramic views of the entire Annapurna and Dhaulagiri ranges. Khopra Ridge offers one of the most spectacular mountain viewpoints in all of Nepal - Annapurna South (7,219m) towers directly above you to the north, while Dhaulagiri (8,167m - world's 7th highest) dominates the western skyline. The ridge is managed by a community-run teahouse, where your stay directly supports local families. Enjoy sunset over the Himalayas from this incredible location. Overnight at the community teahouse on Khopra Ridge.",
    "overnight": "Community Teahouse at Khopra Ridge",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Chistibang pastures", "Grazing yaks and horses", "Khopra Ridge arrival", "Panoramic Annapurna and Dhaulagiri views", "Community-run teahouse experience"]
  },
  {
    "day": 5,
    "title": "Day Hike to Khayar Lake & Return to Khopra Ridge",
    "altitude": "3,660m → 4,660m → 3,660m",
    "distance": "12-14km / 7-8 hrs round trip",
    "description": "This is the highlight day of the entire trek! Wake early and start the challenging day hike to sacred Khayar Lake (4,660m). The trail climbs steeply through rugged, rocky terrain with increasingly spectacular mountain views. As you gain altitude, the panorama of Annapurna South, Hiunchuli, Machhapuchhre, and Dhaulagiri becomes absolutely breathtaking. After several hours of climbing, you'll suddenly come upon Khayar Lake - a stunning turquoise alpine lake nestled in a glacial basin beneath the towering massif of Annapurna South. The lake is sacred to both Hindus and Buddhists, who believe that bathing in its holy waters fulfills wishes and brings good fortune. The reflection of Annapurna South in the crystal-clear turquoise water is a photographer's dream. Spend time at the lake, enjoy your packed lunch, and soak in the spiritual atmosphere. Afternoon descent back to Khopra Ridge for overnight. This challenging but rewarding day will be one of the most memorable of your life.",
    "overnight": "Community Teahouse at Khopra Ridge",
    "meals": "Breakfast, Packed Lunch, Dinner",
    "highlights": ["Khayar Lake day hike (4,660m)", "Sacred Hindu and Buddhist pilgrimage site", "Turquoise alpine lake", "Annapurna South mountain reflection", "Wish-fulfilling holy waters"]
  },
  {
    "day": 6,
    "title": "Trek from Khopra Ridge to Ghorepani via Swanta Village",
    "altitude": "3,660m → 2,214m → 2,860m",
    "distance": "14-16km / 6-7 hrs trek",
    "description": "Today we descend from Khopra Ridge and make our way toward Ghorepani via the traditional village of Swanta. The trail descends through beautiful forests of rhododendron and oak, passing through Chistibang pastures before reaching Swanta Village (2,214m). Swanta is a traditional Gurung and Magar village where you can experience authentic local culture and hospitality. Take time to explore the village, visit the local monastery, and interact with friendly locals. From Swanta, the trail continues through terraced farmlands and forests, gradually ascending toward Ghorepani (2,860m). Ghorepani is a lively village situated on a ridge, serving as the main gateway to Poon Hill. The village offers spectacular mountain views and a vibrant atmosphere with multiple teahouses, bakeries, and shops. Overnight in Ghorepani, preparing for tomorrow's pre-dawn hike to Poon Hill.",
    "overnight": "Teahouse in Ghorepani",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Descent from Khopra Ridge", "Chistibang pastures", "Swanta village cultural experience", "Traditional Gurung and Magar village", "Ghorepani arrival and preparation"]
  },
  {
    "day": 7,
    "title": "Poon Hill Sunrise & Trek to Hille & Jeep Drive to Pokhara",
    "altitude": "2,860m → 3,210m → 1,490m → 820m",
    "distance": "6km trek / 2.5 hrs jeep drive",
    "description": "Wake up early (around 4:00 AM) for the pre-dawn hike to Poon Hill (3,210m) - one of the most famous viewpoints in the entire Himalayas! The 45-minute to 1-hour climb in the dark is well worth every step. As you reach the viewpoint, watch the sky transform from deep blue to orange and gold. The sun rises behind the Annapurna range, painting the peaks of Dhaulagiri (8,167m), Annapurna I (8,091m), Annapurna South (7,219m), Machhapuchhre (6,993m - Fishtail), Hiunchuli (6,441m), and Tukuche Peak (6,920m) in stunning golden light. This 360-degree Himalayan sunrise panorama is one of the most photographed views in the world. After soaking in the magic, descend back to Ghorepani for breakfast. Then continue trekking down through beautiful rhododendron forests to Hille (1,490m). The descent is gentle and offers changing perspectives of the mountains. At Hille, board a private jeep for an exciting 2.5-hour drive back to Pokhara. The jeep ride offers different views of the landscapes you've traversed. Arrive in Pokhara by late afternoon and check into your hotel. Celebrate your incredible Khopra Ridge and Khayar Lake achievement - you've visited the sacred turquoise lake at 4,660m and witnessed sunrise from Poon Hill! Enjoy a well-deserved dinner at one of Lakeside's excellent restaurants.",
    "overnight": "Hotel in Pokhara",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Poon Hill sunrise (3,210m)", "World-famous 360-degree Himalayan panorama", "Dhaulagiri, Annapurna, and Machhapuchhre views", "Descent to Hille", "Jeep drive to Pokhara and celebration"]
  },
  {
    "day": 8,
    "title": "Drive from Pokhara to Kathmandu",
    "altitude": "820m → 1,400m",
    "distance": "200km / 6-7 hrs drive",
    "description": "After a leisurely breakfast in Pokhara, begin your scenic drive back to Kathmandu along the Prithvi Highway. The journey follows the Trishuli River, offering beautiful views of river valleys, rolling hills, terraced farmlands, and distant mountain peaks. You'll pass through charming towns and witness daily Nepali rural life along the way. The drive is a wonderful opportunity to reflect on your incredible Khopra Ridge and Khayar Lake adventure - visiting the sacred turquoise lake at 4,660m, witnessing sunrise from Khopra Ridge and Poon Hill, and experiencing authentic village life in Swanta. Arrive in Kathmandu by late afternoon. Check into your hotel, take a well-deserved hot shower, and enjoy the comforts of the city. The remainder of your day is free for souvenir shopping in Thamel, exploring UNESCO World Heritage sites you may have missed, or simply relaxing with a good meal. In the evening, enjoy a farewell dinner celebrating your successful Khopra Ridge trek achievement.",
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
  "All ground transportation as per itinerary (Kathmandu-Pokhara-Ghandruk & Tatopani-Pokhara-Kathmandu)",
  "First aid medical kit including pulse oximeter",
  "Sleeping bag and down jacket for high altitude (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Annapurna region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Packed lunch for Khayar Lake day hike",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude trekking up to 4,700m & emergency evacuation)",
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
    src: "/images/used/khopra-2.webp",
    alt: "Sacred Khayar Lake at 4,660m - turquoise alpine lake beneath Annapurna South in Nepal's Annapurna region",
    caption: "Sacred Khayar Lake (4,660m)",
  },
  {
    src: "/images/used/khopra-trek-1.webp",
    alt: "Khopra Ridge panoramic view - spectacular Annapurna and Dhaulagiri range views from Khopra Ridge at 3,660m in Nepal",
    caption: "Khopra Ridge - Annapurna & Dhaulagiri Views",
  },
  {
    src: "/images/used/ghandruk-1.webp",
    alt: "Ghandruk Village - traditional Gurung village with stone houses and mountain views in Nepal's Annapurna region",
    caption: "Traditional Gurung Village - Ghandruk",
  },
];

export default function KhopraRidgeKhayarLakeTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  
  const trekName = "Khopra Ridge with Khayar Lake Trek";
  const canonicalUrl = "https://www.himkalaadventure.com/khopra-ridge-khayar-lake-trek";
  const pageTitle = "Khopra Ridge with Khayar Lake Trek - Himkala Adventure";
  const pageDescription = "Khopra Ridge with Khayar Lake Trek: Trek to sacred Khayar Lake (4,660m) and Khopra Ridge with panoramic Annapurna and Dhaulagiri views. Off-the-beaten-path adventure. Book now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/khopra-trek-1.webp";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Khopra Ridge with Khayar Lake Trek - Himkala Adventure");
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
    "description": "Expert-guided Khopra Ridge with Khayar Lake trekking packages in Nepal. Trek to sacred Khayar Lake at 4,660m with certified guides.",
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
    "name": "Khopra Ridge with Khayar Lake Trek - 8 Days",
    "description": "Khopra Ridge with Khayar Lake Trek: Trek to sacred Khayar Lake at 4,660m and Khopra Ridge with panoramic Annapurna and Dhaulagiri views. A peaceful off-the-beaten-path adventure in Nepal.",
    "image": imageUrl,
    "brand": {
      "@type": "Brand",
      "name": "Himkala Adventure Pvt. Ltd."
    },
    "offers": {
      "@type": "Offer",
      "price": "700",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01",
      "url": canonicalUrl
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "89"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Max Altitude",
        "value": "4,660m"
      },
      {
        "@type": "PropertyValue",
        "name": "Khopra Ridge Altitude",
        "value": "3,660m"
      },
      {
        "@type": "PropertyValue",
        "name": "Khayar Lake Altitude",
        "value": "4,660m"
      },
      {
        "@type": "PropertyValue",
        "name": "Duration",
        "value": "8 Days"
      },
      {
        "@type": "PropertyValue",
        "name": "Difficulty",
        "value": "Moderate"
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
        "value": "Sacred Khayar Lake, Khopra Ridge, Community Teahouses, Annapurna & Dhaulagiri Views"
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
              src="/images/used/khopra-trek-1.webp"
              alt="Khopra Ridge with Khayar Lake Trek - panoramic views of Annapurna and Dhaulagiri ranges from Khopra Ridge in Nepal's Annapurna region"
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
                  Moderate
                </Badge>
                <Badge className="bg-blue-100 text-blue-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                  <Droplets className="w-3 h-3 mr-1" aria-hidden="true" /> Khayar Lake
                </Badge>
              </div>
              
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
                KHOPRA RIDGE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                  WITH KHAYAR LAKE TREK
                </span>
              </h1>
              
              <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
                Discover a hidden gem in the Annapurna region - trek to the spectacular Khopra Ridge 
                and sacred Khayar Lake, with panoramic views of Dhaulagiri and Annapurna ranges.
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
                  <div className="text-xs text-slate-400 line-through">$875</div>
                  <div className="text-lg font-bold text-[#0f2940]">$700</div>
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
                          <span className="text-white/50 text-sm line-through">$875</span>
                          <div className="text-3xl md:text-4xl font-bold text-white mt-1">$700</div>
                          <span className="text-white/60 text-sm">per person</span>
                          <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $175</Badge>
                        </div>

                        <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                          <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                            <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                            <span>8 Days / 7 Nights</span>
                          </div>
                          <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                            <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                            <span>Best: Mar-May, Sep-Nov</span>
                          </div>
                          <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                            <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                            <span>Group Size: 2-10</span>
                          </div>
                          <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                            <Tent className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                            <span>Community Teahouses</span>
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
                          aria-label="Inquire about Khopra Ridge with Khayar Lake trek on WhatsApp"
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
                            <span className="font-medium text-[#0f2940]">Ghandruk / Tatopani</span>
                          </div>
                          <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                            <span className="text-slate-500">Highest Point</span>
                            <span className="font-medium text-[#0f2940]">Khayar Lake (4,660m)</span>
                          </div>
                          <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                            <span className="text-slate-500">Khopra Ridge</span>
                            <span className="font-medium text-[#0f2940]">3,660m</span>
                          </div>
                          <div className="flex justify-between py-1.5 md:py-2">
                            <span className="text-slate-500">Trekking Days</span>
                            <span className="font-medium text-[#0f2940]">7 Days</span>
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
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Overview of Khopra Ridge with Khayar Lake Trek</h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                      The <strong>Khopra Ridge with Khayar Lake Trek</strong> is a hidden gem in the Annapurna region, 
                      offering a peaceful alternative to the more crowded <strong>trekking in Nepal</strong> routes like 
                      Annapurna Base Camp. This off-the-beaten-path adventure takes you through dense rhododendron forests, 
                      traditional Gurung villages, and alpine meadows to the spectacular <strong>Khopra Ridge (3,660m)</strong> - 
                      one of the best vantage points in the Himalayas with panoramic views of Dhaulagiri, Annapurna, 
                      Nilgiri, and Machhapuchhre (Fishtail).
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                      The trek's highlight is the challenging day hike to <strong>sacred Khayar Lake (4,660m)</strong>, 
                      a stunning turquoise alpine lake nestled beneath Annapurna South. The lake holds deep religious 
                      significance for both Hindus and Buddhists, who believe that bathing in its waters fulfills wishes. 
                      The trail to the lake offers breathtaking mountain scenery and a true 
                      sense of wilderness adventure.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                      What makes this trek truly unique is the <strong>community-based tourism model</strong> - trekkers 
                      stay in lodges managed by local communities rather than private owners, with profits contributing 
                      to local schools and village projects. Combined with natural hot springs 
                      at Tatopani, rich Gurung and Magar culture, and far fewer trekkers than mainstream routes, this 
                      trek offers an authentic and serene Himalayan experience.
                    </p>
                  </div>
                </section>

                {/* Highlights */}
                <section className="mb-6 md:mb-12" id="highlights">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Khopra Ridge with Khayar Lake Trek Highlights</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                    {[
                      "Sacred Khayar Lake (4,660m) - turquoise alpine lake with spiritual significance",
                      "Khopra Ridge (3,660m) - spectacular panoramic views of Dhaulagiri & Annapurna",
                      "Community-run teahouses supporting local schools and villages",
                      "Peaceful, less-crowded trail - escape the busy ABC route",
                      "Traditional Gurung and Magar villages with rich cultural heritage",
                      "Dense rhododendron forests blooming in spring",
                      "Natural hot springs at Tatopani for post-trek relaxation",
                      "Views of Dhaulagiri (8,167m), Annapurna I (8,091m), Machhapuchhre, Nilgiri",
                      "Authentic cultural experiences with local communities",
                      "Diverse landscapes - forests, meadows, ridgelines, and alpine lakes",
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
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Best Time to Trek Khopra Ridge with Khayar Lake</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                    <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                      <CardContent className="p-3 md:p-5">
                        <div className="flex items-center gap-2 mb-1 md:mb-3">
                          <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-orange-500" aria-hidden="true" />
                          <h3 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Mar - May)</h3>
                        </div>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                          Rhododendrons bloom in vibrant colors, the forests come alive, and temperatures are warm 
                          with excellent visibility. Khayar Lake may still have ice formations.
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
                          The most popular season with crystal-clear skies, stable weather, and the best mountain views. 
                          Khayar Lake is at its most beautiful turquoise color.
                        </p>
                        <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Detailed Itinerary */}
                <section className="mb-6 md:mb-12" id="itinerary">
                  <div className="flex items-center justify-between mb-3 md:mb-6">
                    <h2 className="text-lg md:text-2xl font-serif text-[#0f2940]">Day-by-Day Khopra Ridge with Khayar Lake Itinerary</h2>
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
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">What's Included in This Khopra Ridge with Khayar Lake Trek</h2>
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
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-4">Important Information for Khopra Ridge with Khayar Lake Trek</h2>
                <div className="bg-amber-50 border border-amber-200 rounded-lg md:rounded-2xl p-3 md:p-6 flex gap-2 md:gap-4 mb-6 md:mb-12">
                  <AlertTriangle className="w-4 h-4 md:w-6 md:h-6 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                      <li>• <strong>Travel insurance is mandatory</strong> and must cover high altitude trekking up to 4,700m and emergency evacuation.</li>
                      <li>• The Khayar Lake day hike is challenging with rugged terrain - good fitness and proper gear are essential.</li>
                      <li>• Community teahouses offer basic but clean accommodation - be prepared for shared bathrooms and limited facilities.</li>
                      <li>• We recommend starting physical preparation <strong>1-2 months before your trek</strong> with regular cardio and stair climbing.</li>
                    </ul>
                  </div>
                </div>

                {/* Photo Gallery */}
                <section className="mb-6 md:mb-12" id="gallery">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Photo Gallery - Khopra Ridge with Khayar Lake Trek</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3">
                    {gallery.map((image, i) => (
                      <div
                        key={i}
                        className="relative h-24 md:h-48 rounded-lg md:rounded-xl overflow-hidden group cursor-pointer"
                      >
                        <Image
                          src={image.src}
                          alt={`${image.alt} - Khopra Ridge with Khayar Lake trekking experience in Nepal's Annapurna region`}
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
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Frequently Asked Questions About Khopra Ridge with Khayar Lake Trek</h2>
                  <div className="space-y-2 md:space-y-4">
                    {[
                      {
                        q: "How difficult is the Khopra Ridge with Khayar Lake Trek?",
                        a: "The trek is rated as moderate. You'll trek 5-7 hours daily on forest trails with some steep ascents. The Khayar Lake day hike is the most challenging section due to altitude and rugged terrain. No technical experience is required, but good fitness is essential.",
                      },
                      {
                        q: "What makes this trek different from Annapurna Base Camp?",
                        a: "This is a much quieter, off-the-beaten-path route with far fewer trekkers. It features community-run teahouses, the sacred Khayar Lake, and spectacular views of both Annapurna and Dhaulagiri ranges from Khopra Ridge. It offers a more authentic and serene experience.",
                      },
                      {
                        q: "What is the accommodation like on this trek?",
                        a: "The trek features community-run teahouses managed by local villages. Rooms are basic with twin beds and shared bathrooms. Facilities become simpler at higher altitudes, but the warm hospitality and authentic experience more than compensate.",
                      },
                      {
                        q: "Is Khayar Lake worth the difficult day hike?",
                        a: "Absolutely! Khayar Lake is a stunning turquoise alpine lake with deep spiritual significance. The views of Annapurna South reflected in the lake, surrounded by snow-capped peaks, create an unforgettable experience. Many trekkers consider it the highlight of their Nepal trip.",
                      },
                      {
                        q: "What permits do I need for this trek?",
                        a: "You need the Annapurna Conservation Area Permit (ACAP) and TIMS card. Both are included in our package and arranged by your guide.",
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