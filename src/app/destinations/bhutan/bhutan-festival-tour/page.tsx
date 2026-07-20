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
  Landmark,
  Church,
  Compass,
  Trees,
  Cloud,
  MountainSnow,
  Gem,
  Medal,
  Wind,
  ScrollText,
  Soup,
  Cherry,
  Library,
  Warehouse,
  Milestone,
  Castle,
  Flower2,
  PartyPopper,
  Music,
  Drama,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Paro & Drive to Thimphu",
    altitude: "2,280m → 2,320m",
    distance: "50km / 1.5 hrs drive",
    description: "Welcome to the Land of the Thunder Dragon during festival season! Upon arrival at Paro International Airport, you'll be greeted by our representative with a traditional Bhutanese scarf (khata) welcome. Drive through the picturesque Paro Valley alongside the Pachu River, ascending gradually to Bhutan's capital city, Thimphu. After check-in at your hotel, receive a festival briefing from your guide about the Tshechu (festival) you'll experience. Evening free to explore Thimphu's main street and visit the local craft market. Welcome dinner with traditional Bhutanese cuisine.",
    overnight: "Hotel in Thimphu",
    meals: "Dinner",
    highlights: ["Traditional scarf welcome", "Festival briefing", "Thimphu craft market", "Welcome dinner"],
  },
  {
    day: 2,
    title: "Thimphu Tshechu (Festival Day)",
    altitude: "2,320m",
    distance: "Local festival attendance",
    description: "Full day immersion at the Thimphu Tshechu - one of Bhutan's most spectacular religious festivals. Witness colorful masked dances (cham) performed by monks and laypeople, depicting Buddhist teachings and legends. The festival grounds come alive with thousands of Bhutanese families dressed in their finest traditional attire (kira and gho). Watch the unfolding of the giant thongdrel (religious scroll) at dawn, believed to cleanse sins. Interact with locals, enjoy festival food, and capture incredible photographs of the vibrant ceremonies. Your guide will explain the symbolism behind each dance and ritual throughout the day.",
    overnight: "Hotel in Thimphu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Thimphu Tshechu masked dances", "Traditional Bhutanese attire", "Thongdrel unveiling", "Local festival atmosphere", "Cultural explanations"],
  },
  {
    day: 3,
    title: "Thimphu Sightseeing & Festival Continuation",
    altitude: "2,320m",
    distance: "Local sightseeing",
    description: "Morning visit to the iconic Tashichho Dzong ('Fortress of the Glorious Religion'), the seat of Bhutan's government and summer residence of the monastic body. Continue to the National Memorial Chorten, built in 1974 in memory of the third King. Visit the School of Arts and Crafts (Zorig Chusum) where students learn traditional painting and sculpture. Afternoon return to the festival grounds for more dances and ceremonies, or explore the weekend market if timing aligns. Evening visit to Buddha Dordenma viewpoint for sunset photos overlooking the valley.",
    overnight: "Hotel in Thimphu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Tashichho Dzong", "National Memorial Chorten", "Arts and Crafts School", "Additional festival time", "Buddha Dordenma sunset"],
  },
  {
    day: 4,
    title: "Thimphu to Punakha via Dochula Pass",
    altitude: "2,320m → 3,100m → 1,300m",
    distance: "75km / 3 hrs drive",
    description: "After breakfast, drive eastward toward Punakha, crossing the spectacular Dochula Pass (3,100m). On a clear day, the pass offers a stunning 360-degree view of the Himalayan range including Gangkar Puensum - the world's highest unclimbed mountain. Visit the 108 Druk Wangyal Chortens and the Druk Wangyal Lhakhang built in honor of Bhutanese soldiers. Descend through changing vegetation to the subtropical Punakha Valley. Afternoon visit to Punakha Dzong - arguably Bhutan's most beautiful dzong, strategically located at the confluence of the Pho Chhu and Mo Chhu rivers. Evening walk across the Punakha Suspension Bridge.",
    overnight: "Hotel in Punakha",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Dochula Pass (3,100m)", "108 chortens", "Himalayan views", "Punakha Dzong", "Suspension bridge"],
  },
  {
    day: 5,
    title: "Punakha Valley Exploration",
    altitude: "1,300m",
    distance: "Local sightseeing",
    description: "Morning hike to Chimi Lhakhang - the 'Fertility Temple' dedicated to the Divine Madman, Drukpa Kunley. The trail passes through picturesque rice fields and traditional villages. Visit the temple and receive blessings from the wooden phallus symbols. Afternoon visit to Khamsum Yulley Namgyal Chorten, a beautiful stupa overlooking the valley, built for peace and harmony. Time permitting, visit a local farmhouse to experience traditional Bhutanese rural life and perhaps sample ara (local wine). Return to Punakha for overnight.",
    overnight: "Hotel in Punakha",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Chimi Lhakhang hike", "Rice field villages", "Khamsum Yulley Chorten", "Farmhouse visit", "Traditional rural life"],
  },
  {
    day: 6,
    title: "Punakha to Paro",
    altitude: "1,300m → 2,280m",
    distance: "130km / 4 hrs drive",
    description: "Morning drive back to Paro, retracing your route through Dochula Pass with another opportunity for Himalayan photos. En route, stop at Simtokha Dzong - the oldest dzong in Bhutan (1629), now a monastic school. Arrive in Paro by afternoon. Visit the National Museum (Ta Dzong) housed in a historic watchtower, showcasing Bhutanese art, relics, and national costume. Explore Paro Rinpung Dzong, a magnificent fortress-monastery overlooking the valley. Evening free for last-minute souvenir shopping in Paro town. Farewell dinner at a traditional farmhouse with cultural performance.",
    overnight: "Hotel in Paro",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Dochula Pass", "Simtokha Dzong", "National Museum", "Rinpung Dzong", "Farewell cultural dinner"],
  },
  {
    day: 7,
    title: "Taktsang Monastery (Tiger's Nest) Hike & Departure",
    altitude: "2,280m → 3,120m → 2,280m",
    distance: "8km round trip / 5-6 hrs hike",
    description: "Early morning drive to the base camp of Taktsang Monastery - Bhutan's most famous landmark and the perfect finale to your festival journey. Begin the 2-3 hour uphill hike through pine forests adorned with prayer flags. The trail offers spectacular views of the monastery clinging to a cliff 900 meters above the valley. At the cafeteria viewpoint, you'll see the monastery in all its glory. Time permitting, continue to the monastery itself - a sacred site where Guru Rinpoche meditated in the 8th century. After descending, enjoy lunch before transferring to Paro International Airport for your departure flight. Our representative will assist with check-in. Tashi Delek (goodbye and good luck) - may the festival blessings accompany you home!",
    overnight: "-",
    meals: "Breakfast, Lunch",
    highlights: ["Tiger's Monastery hike", "Cliff-side monastery", "Prayer flag forests", "Festival farewell", "Departure assistance"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "6 nights hotel accommodation (3-star with breakfast) as per itinerary",
  "All meals as per itinerary (breakfast, lunch, dinner)",
  "English-speaking Bhutanese guide (government licensed)",
  "Private vehicle for all sightseeing and transfers",
  "All monument entrance fees",
  "Bhutan Visa fee (processed by us)",
  "Sustainable Development Fee (SDF) of $100 per night (6 nights = $600)",
  "Government taxes and royalty",
  "Mineral water during sightseeing",
  "Traditional scarf welcome at airport",
  "Festival entrance fees and special access arrangements",
  "Farmhouse visit with traditional welcome",
  "Cultural performance at farewell dinner",
  "First aid medical kit",
  "All government taxes and official expenses",
];

const excludes = [
  "International airfare to/from Paro",
  "Travel insurance (mandatory)",
  "Meals not mentioned in itinerary",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, bar bills)",
  "Tips and gratuities for guide and driver (recommended)",
  "Camera fees at monuments (if applicable)",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
  "Hot stone bath (optional)",
  "Traditional archery experience (optional)",
];

const gallery = [
  {
    src: "/images/used/bhutan-culture.webp",
    alt: "Thimphu Tshechu - traditional Bhutanese mask dance festival with colorful costumes and cultural performances",
    caption: "Thimphu Tshechu - Masked Dances",
  },
  {
    src: "/images/used/bhutan-page-2.webp",
    alt: "Punakha Dzong - magnificent fortress-monastery at the confluence of two rivers in Punakha Valley, Bhutan",
    caption: "Punakha Dzong",
  },
  {
    src: "/images/used/mask-bhutan.webp",
    alt: "Bhutanese mask dancer - traditional cham dance performer in elaborate costume during Tshechu festival",
    caption: "Cham Dance Performer",
  },
];

export default function BhutanFestivalTourPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2, 3]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  const tourName = "7-Day Bhutan Festival Tour";
  const canonicalUrl = "https://www.himkalaadventure.com/destinations/bhutan/bhutan-festival-tour";
  const pageTitle = "7-Day Bhutan Festival Tour - Himkala Adventure";
  const pageDescription = "7-Day Bhutan Festival Tour: Experience Thimphu Tshechu's masked dances, ancient rituals, and vibrant culture. Includes Punakha Dzong, Dochula Pass, and Tiger's Nest. Book your festival adventure now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/bhutan-culture.webp";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("7-Day Bhutan Festival Tour - Himkala Adventure");
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
    "description": "Expert-guided Bhutan festival tour packages. 7-Day Bhutan Festival Tour featuring Thimphu Tshechu, Punakha Dzong, and Tiger's Nest.",
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

  // Schema.org Product/Tour schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "7-Day Bhutan Festival Tour",
    "description": pageDescription,
    "image": imageUrl,
    "url": canonicalUrl,
    "brand": {
      "@type": "Organization",
      "name": "Himkala Adventure Pvt. Ltd."
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "2750",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": canonicalUrl,
      "validFrom": "2024-01-01"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "67"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Duration",
        "value": "7 Days / 6 Nights"
      },
      {
        "@type": "PropertyValue",
        "name": "Festival",
        "value": "Thimphu Tshechu"
      },
      {
        "@type": "PropertyValue",
        "name": "Max Altitude",
        "value": "3,100m"
      },
      {
        "@type": "PropertyValue",
        "name": "Difficulty",
        "value": "Easy (moderate for Tiger's Nest)"
      },
      {
        "@type": "PropertyValue",
        "name": "Destinations",
        "value": "Paro, Thimphu, Punakha"
      },
      {
        "@type": "PropertyValue",
        "name": "Highlights",
        "value": "Thimphu Tshechu, Punakha Dzong, Dochula Pass, Tiger's Nest Monastery"
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
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
                  <a href="#festival-calendar" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                    Festival Calendar
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
              src="/images/used/bhutan-culture.webp"
              alt="7-Day Bhutan Festival Tour - colorful Thimphu Tshechu festival with masked dancers and traditional Bhutanese culture"
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
                  <MapPin className="w-3 h-3 mr-1" aria-hidden="true" /> Kingdom of Bhutan
                </Badge>
                <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                  <PartyPopper className="w-3 h-3 mr-1" aria-hidden="true" /> Festival Tshechu
                </Badge>
                <Badge className="bg-amber-100 text-amber-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                  <Sparkles className="w-3 h-3 mr-1" aria-hidden="true" /> Masked Dances
                </Badge>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
                7 DAYS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                  BHUTAN FESTIVAL TOUR
                </span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-light px-2">
                Experience the magic of Bhutan's sacred Tshechu festivals - witness vibrant masked dances, 
                ancient rituals, and Bhutanese culture at its most colorful. Includes Thimphu Tshechu, 
                Punakha Dzong, and the iconic Tiger's Nest Monastery.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-4 md:py-12">
          <div className="container mx-auto px-3 md:px-6 max-w-full overflow-hidden">
            {/* Mobile Sticky Book Now Bar */}
            <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-[#C5E0ED]/30 shadow-sm py-2 -mx-3 px-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400 line-through">$2,950</div>
                  <div className="text-lg font-bold text-[#0f2940]">$2,750</div>
                </div>
                <Link href={`/contact?trek=${encodeURIComponent(tourName)}`}>
                  <Button className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] text-white font-bold rounded-full px-4 py-1.5 text-xs min-h-[44px]" aria-label={`Book ${tourName} now`}>
                    <Heart className="w-3 h-3 mr-1" aria-hidden="true" /> Book Now
                  </Button>
                </Link>
              </div>
            </div>

            {/* Desktop Layout - Grid with sticky sidebar */}
            <div className="lg:grid lg:grid-cols-12 lg:gap-4 lg:gap-10">
              {/* Sidebar - Sticky on desktop */}
              <aside className="hidden lg:block lg:col-span-4">
                <div className="sticky top-24 space-y-4 md:space-y-6">
                  {/* Price Card */}
                  <Card className="bg-gradient-to-br from-[#0f2940] to-[#1a4166] border-none rounded-xl md:rounded-2xl overflow-hidden">
                    <CardContent className="p-4 md:p-6">
                      <div className="text-center mb-4 md:mb-6">
                        <span className="text-white/50 text-sm line-through">$2,950</span>
                        <div className="text-3xl md:text-4xl font-bold text-white mt-1">$2,750</div>
                        <span className="text-white/60 text-sm">per person</span>
                        <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-xs">Save $200</Badge>
                      </div>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>7 Days / 6 Nights</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>Festival Dates: Sep-Oct (Thimphu Tshechu)</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                          <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>Group Size: 2-12</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                          <Landmark className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>3-Star Hotels & Resorts</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                          <Utensils className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>All Meals Included</span>
                        </div>
                      </div>

                      {/* Book Now Button */}
                      <Link href={`/contact?trek=${encodeURIComponent(tourName)}`}>
                        <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-sm md:text-base" aria-label={`Book ${tourName}`}>
                          <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" aria-hidden="true" /> Book This Tour
                        </Button>
                      </Link>
                      
                      {/* WhatsApp Now Button */}
                      <a 
                        href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about the ${tourName}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="block"
                        aria-label="Inquire about Bhutan festival tour on WhatsApp"
                      >
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold rounded-full h-10 md:h-12 text-sm md:text-base">
                          <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" aria-hidden="true" /> WhatsApp Now
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  {/* Quick Facts */}
                  <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                        <Map className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" /> Quick Facts
                      </h3>
                      <div className="space-y-2 text-xs md:text-sm">
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Start/End Point</span>
                          <span className="font-medium text-[#0f2940]">Paro Airport</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Festival</span>
                          <span className="font-medium text-[#0f2940]">Thimphu Tshechu</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Typical Dates</span>
                          <span className="font-medium text-[#0f2940]">Sep-Oct (3-5 days)</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Duration</span>
                          <span className="font-medium text-[#0f2940]">7 Days / 6 Nights</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Difficulty</span>
                          <span className="font-medium text-[#0f2940]">Easy (moderate for Tiger's Nest)</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2">
                          <span className="text-slate-500">Visa & SDF</span>
                          <span className="font-medium text-[#0f2940]">Fully Included</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Festival Calendar Card */}
                  <Card className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" /> Major Bhutan Festivals
                      </h3>
                      <div className="space-y-3 text-xs md:text-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Thimphu Tshechu</span>
                          <Badge className="bg-[#C5E0ED]/30 text-[#0f2940]">Sep-Oct</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Paro Tshechu</span>
                          <Badge className="bg-[#C5E0ED]/30 text-[#0f2940]">Mar-Apr</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Punakha Drubchen</span>
                          <Badge className="bg-[#C5E0ED]/30 text-[#0f2940]">Feb-Mar</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Wangdue Tshechu</span>
                          <Badge className="bg-[#C5E0ED]/30 text-[#0f2940]">Sep-Oct</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Jambay Lhakhang Drup</span>
                          <Badge className="bg-[#C5E0ED]/30 text-[#0f2940]">Oct-Nov</Badge>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">*Exact dates vary yearly based on lunar calendar</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Share */}
                  <Card className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                        <Share2 className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" /> Share
                      </h3>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-lg md:rounded-xl text-xs"
                          onClick={() => handleShare("facebook")}
                          aria-label="Share on Facebook"
                        >
                          <Facebook className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg md:rounded-xl text-xs"
                          onClick={() => handleShare("twitter")}
                          aria-label="Share on Twitter"
                        >
                          <Twitter className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg md:rounded-xl text-xs"
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
                <div className="lg:hidden flex gap-2 mb-4">
                  <Button
                    size="sm"
                    className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-lg text-xs py-1.5 min-h-[44px]"
                    onClick={() => handleShare("facebook")}
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="w-3 h-3 mr-1" aria-hidden="true" /> Share
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg text-xs py-1.5 min-h-[44px]"
                    onClick={() => handleShare("twitter")}
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-3 h-3 mr-1" aria-hidden="true" /> Tweet
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg text-xs py-1.5 min-h-[44px]"
                    onClick={handleCopyLink}
                    aria-label="Copy link to clipboard"
                  >
                    {copied ? <Check className="w-3 h-3" aria-hidden="true" /> : <Copy className="w-3 h-3" aria-hidden="true" />}
                  </Button>
                </div>

                {/* Overview */}
                <section className="mb-6 md:mb-12" id="overview">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Overview of 7-Day Bhutan Festival Tour</h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                      The <strong>7-Day Bhutan Festival Tour</strong> offers a magical window into the soul of Bhutan 
                      during its most vibrant and sacred celebrations. The centerpiece is the <strong>Thimphu Tshechu</strong>, 
                      one of Bhutan's largest and most spectacular religious festivals, where masked dances (cham) 
                      reenact Buddhist teachings and legends passed down through centuries.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                      Tshechus are not merely tourist attractions but deeply spiritual events where Bhutanese families 
                      gather in their finest traditional attire to receive blessings, socialize, and witness the
                      <strong> unveiling of the giant thongdrel (religious scroll)</strong> at dawn. Your experienced 
                      guide will explain the symbolism behind each dance, the stories they represent, and the cultural 
                      significance of the rituals you witness.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                      Beyond the festival, this carefully paced <strong>Bhutan festival tour</strong> includes visits to 
                      <strong>Punakha Dzong</strong> (Bhutan's most beautiful fortress), the <strong>Dochula Pass</strong> 
                      with its 108 chortens, and culminates with the iconic <strong>hike to Taktsang Monastery (Tiger's Nest)</strong>. 
                      With all meals, visas, and the Sustainable Development Fee included, this is a complete cultural immersion 
                      into the Land of the Thunder Dragon at its most festive.
                    </p>
                  </div>
                </section>

                {/* Highlights */}
                <section className="mb-6 md:mb-12" id="highlights">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Bhutan Festival Tour Highlights</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                    {[
                      "Full day at Thimphu Tshechu with masked dances",
                      "Witness giant thongdrel (religious scroll) unveiling",
                      "Bhutanese families in traditional festival attire",
                      "Visit Punakha Dzong - Bhutan's most beautiful fortress",
                      "Cross Dochula Pass with 108 chortens & Himalayan views",
                      "Hike to iconic Taktsang Monastery (Tiger's Nest)",
                      "Explore Tashichho Dzong and National Memorial Chorten",
                      "Walk through rice fields to Chimi Lhakhang",
                      "Farmhouse visit with traditional hospitality",
                      "Farewell dinner with cultural performance",
                      "All visas and SDF fees ($600 for 6 nights) included",
                      "Expert guide explaining festival symbolism",
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

                {/* Festival Calendar Section */}
                <section className="mb-6 md:mb-12" id="festival-calendar">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Thimphu Tshechu Festival Dates</h2>
                  <Card className="bg-gradient-to-br from-purple-50 to-amber-50 border-purple-200/50 rounded-lg md:rounded-2xl mb-4">
                    <CardContent className="p-3 md:p-6">
                      <p className="text-slate-600 text-xs md:text-base mb-3 md:mb-4">The Thimphu Tshechu is held annually according to the Bhutanese lunar calendar. Below are the upcoming festival dates:</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                        <div className="text-center p-2 md:p-3 bg-white/80 rounded-lg">
                          <div className="font-bold text-[#0f2940] text-xs md:text-base">2024</div>
                          <div className="text-[10px] md:text-sm text-slate-600">Sep 15-17</div>
                        </div>
                        <div className="text-center p-2 md:p-3 bg-white/80 rounded-lg">
                          <div className="font-bold text-[#0f2940] text-xs md:text-base">2025</div>
                          <div className="text-[10px] md:text-sm text-slate-600">Oct 3-5</div>
                        </div>
                        <div className="text-center p-2 md:p-3 bg-white/80 rounded-lg">
                          <div className="font-bold text-[#0f2940] text-xs md:text-base">2026</div>
                          <div className="text-[10px] md:text-sm text-slate-600">Sep 22-24</div>
                        </div>
                        <div className="text-center p-2 md:p-3 bg-white/80 rounded-lg">
                          <div className="font-bold text-[#0f2940] text-xs md:text-base">2027</div>
                          <div className="text-[10px] md:text-sm text-slate-600">Oct 10-12</div>
                        </div>
                      </div>
                      <p className="text-[10px] md:text-xs text-slate-500 mt-3 md:mt-4">*Dates are approximate and confirmed 6 months in advance. We can also arrange tours for Paro Tshechu (spring) and other festivals.</p>
                    </CardContent>
                  </Card>
                </section>

                {/* Detailed Itinerary */}
                <section className="mb-6 md:mb-12" id="itinerary">
                  <div className="flex items-center justify-between mb-3 md:mb-6">
                    <h2 className="text-lg md:text-2xl font-serif text-[#0f2940]">Day-by-Day Bhutan Festival Itinerary</h2>
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
                              <p className="text-slate-600 text-xs md:text-sm leading-relaxed pt-2 md:pt-4 mb-2 md:mb-4">{day.description}</p>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-2 md:mb-4">
                                <div className="flex items-center gap-2 text-xs text-slate-600 bg-[#f8fbfc] rounded-lg p-2 md:p-3">
                                  <Landmark className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" />
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
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">What's Included in This Bhutan Festival Tour</h2>
                  <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                    <Card className="bg-green-50/50 border-green-200/50 rounded-lg md:rounded-2xl">
                      <CardContent className="p-3 md:p-6">
                        <h3 className="font-bold text-green-800 mb-2 md:mb-4 flex items-center gap-2 text-sm md:text-base">
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
                        <h3 className="font-bold text-red-800 mb-2 md:mb-4 flex items-center gap-2 text-sm md:text-base">
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

                {/* Important Festival Information */}
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-4">Important Festival Information</h2>
                <div className="bg-amber-50 border border-amber-200 rounded-lg md:rounded-2xl p-3 md:p-6 flex gap-2 md:gap-4 mb-6 md:mb-12">
                  <AlertTriangle className="w-4 h-4 md:w-6 md:h-6 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                      <li>• <strong>Travel insurance is mandatory</strong> and must cover medical emergencies and evacuation.</li>
                      <li>• Festival dates are confirmed by the Bhutanese government approximately 6 months in advance based on the lunar calendar.</li>
                      <li>• <strong>Early booking is essential</strong> for festival tours as accommodations fill quickly.</li>
                      <li>• The Tiger's Nest hike takes 5-6 hours round trip with significant uphill sections - good walking shoes are essential.</li>
                      <li>• <strong>Visa is processed by us</strong> - we need a clear passport copy and passport photo at least 15 days before travel.</li>
                      <li>• The Sustainable Development Fee (SDF) of $100 per night for 6 nights ($600) is fully included in our package.</li>
                    </ul>
                  </div>
                </div>

                {/* Photo Gallery */}
                <section className="mb-6 md:mb-12" id="gallery">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Festival Gallery</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3">
                    {gallery.map((image, i) => (
                      <div
                        key={i}
                        className="relative h-24 md:h-48 rounded-lg md:rounded-xl overflow-hidden group cursor-pointer"
                      >
                        <Image
                          src={image.src}
                          alt={`${image.alt} - 7-Day Bhutan Festival tour experience`}
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
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Festival FAQ</h2>
                  <div className="space-y-2 md:space-y-4">
                    {[
                      {
                        q: "What is a Tshechu festival?",
                        a: "Tshechu means 'tenth day' and celebrates the birthday of Guru Rinpoche (Padmasambhava), who introduced Buddhism to Bhutan. These annual religious festivals feature masked dances (cham) performed by monks and laypeople, depicting Buddhist teachings, stories, and legends. They are occasions for the community to gather, receive blessings, and socialize.",
                      },
                      {
                        q: "What should I wear to the festival?",
                        a: "Comfortable, modest clothing is recommended. While there's no strict dress code for tourists, showing respect by covering shoulders and knees is appreciated. The festival grounds involve standing and walking on grass/dirt, so comfortable shoes are essential. Mornings can be cool, so layers are recommended. Your guide will advise on appropriate attire.",
                      },
                      {
                        q: "Can I take photographs at the festival?",
                        a: "Yes, photography is generally allowed at Tshechus, and the colorful dances make for incredible photos. However, be respectful - avoid using flash during dances, don't block views of Bhutanese attendees, and always ask before photographing individuals. Some inner monastery areas may prohibit photography - your guide will advise.",
                      },
                      {
                        q: "What is the thongdrel unveiling?",
                        a: "The thongdrel is a giant religious scroll (often the size of a building) depicting Guru Rinpoche and other deities. It is unfurled at dawn on the final day of the Tshechu, and it's believed that simply viewing it cleanses sins and brings blessings. This is a highlight of the festival and draws huge crowds before dawn.",
                      },
                      {
                        q: "Is the Sustainable Development Fee (SDF) really included?",
                        a: "Yes! The SDF of $100 per night ($600 for 6 nights) is fully included in our package price. You don't need to pay anything extra. This fee funds free education, healthcare, and infrastructure while preserving Bhutan's culture and environment.",
                      },
                      {
                        q: "Can I combine this with other festivals?",
                        a: "Absolutely! While this itinerary focuses on Thimphu Tshechu, we can customize to include Paro Tshechu (spring), Punakha Drubchen, or Jambay Lhakhang Drup. Contact us with your preferred dates and interests for a personalized festival itinerary.",
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