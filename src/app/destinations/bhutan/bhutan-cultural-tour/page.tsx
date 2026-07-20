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
    description: "Welcome to the Land of the Thunder Dragon! Upon arrival at Paro International Airport, you'll be greeted by our representative with a traditional Bhutanese scarf (khata) welcome. Drive through the picturesque Paro Valley alongside the Pachu River, ascending gradually to Bhutan's capital city, Thimphu. After check-in at your hotel, visit the Buddha Dordenma statue - one of the largest Buddha statues in the world at 51.5 meters. Evening exploration of Thimphu's main street and visit to the local craft market. Welcome dinner with traditional Bhutanese cuisine.",
    overnight: "Hotel in Thimphu",
    meals: "Dinner",
    highlights: ["Traditional scarf welcome", "Buddha Dordenma viewpoint", "Thimphu craft market", "Welcome dinner"],
  },
  {
    day: 2,
    title: "Full Day Thimphu Sightseeing",
    altitude: "2,320m",
    distance: "Local sightseeing",
    description: "Full day exploring the cultural treasures of Thimphu. Morning visit to the iconic Tashichho Dzong ('Fortress of the Glorious Religion'), the seat of Bhutan's government and summer residence of the monastic body. Continue to the National Memorial Chorten, built in 1974 in memory of the third King. Visit the School of Arts and Crafts (Zorig Chusum) where students learn traditional Bhutanese painting and sculpture. Afternoon visit to the Folk Heritage Museum and Textile Museum showcasing traditional Bhutanese life and weaving arts. End the day at the massive Buddha Dordenma viewpoint for sunset photos.",
    overnight: "Hotel in Thimphu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Tashichho Dzong", "National Memorial Chorten", "Arts and Crafts School", "Folk Heritage Museum", "Textile Museum"],
  },
  {
    day: 3,
    title: "Thimphu to Punakha via Dochula Pass",
    altitude: "2,320m → 3,100m → 1,300m",
    distance: "75km / 3 hrs drive",
    description: "After breakfast, drive eastward toward Punakha, crossing the spectacular Dochula Pass (3,100m). On a clear day, the pass offers a stunning 360-degree view of the Himalayan range including Gangkar Puensum - the world's highest unclimbed mountain. Visit the 108 Druk Wangyal Chortens and the Druk Wangyal Lhakhang built in honor of Bhutanese soldiers. Descend through changing vegetation to the subtropical Punakha Valley. Afternoon visit to Punakha Dzong - arguably Bhutan's most beautiful dzong, strategically located at the confluence of the Pho Chhu and Mo Chhu rivers.",
    overnight: "Hotel in Punakha",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Dochula Pass (3,100m)", "108 chortens", "Himalayan views", "Punakha Dzong", "River confluence"],
  },
  {
    day: 4,
    title: "Punakha Valley Exploration",
    altitude: "1,300m",
    distance: "Local sightseeing",
    description: "Morning hike to Chimi Lhakhang - the 'Fertility Temple' dedicated to the Divine Madman, Drukpa Kunley. The trail passes through picturesque rice fields and traditional villages. Visit the temple and receive blessings. Afternoon walk across the Punakha Suspension Bridge - one of Bhutan's longest suspension bridges, offering stunning views of the valley. Visit Khamsum Yulley Namgyal Chorten, a beautiful stupa overlooking the valley, built for peace and harmony. Free evening to explore Punakha town.",
    overnight: "Hotel in Punakha",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Chimi Lhakhang hike", "Rice field villages", "Suspension bridge", "Khamsum Yulley Chorten"],
  },
  {
    day: 5,
    title: "Punakha to Gangtey Valley",
    altitude: "1,300m → 2,900m",
    distance: "80km / 3.5 hrs drive",
    description: "Morning drive to the beautiful Gangtey Valley (also known as Phobjikha Valley) - a glacial valley and winter home to the rare Black-Necked Cranes that migrate from Tibet. The scenic drive takes you through rhododendron forests and traditional villages. Afternoon visit to Gangtey Goemba - the only Nyingmapa monastery in western Bhutan, perched on a ridge overlooking the valley. Evening walk through the valley floor for bird watching and sunset views.",
    overnight: "Hotel in Gangtey",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Gangtey Valley scenery", "Black-Necked Crane habitat", "Gangtey Goemba", "Valley walks"],
  },
  {
    day: 6,
    title: "Gangtey Valley Exploration",
    altitude: "2,900m",
    distance: "Nature trail walk",
    description: "Morning visit to the Black-Necked Crane Information Center to learn about these majestic birds and conservation efforts (November-March best for crane sightings). Walk the Gangtey Nature Trail - a beautiful 3-4 hour walk through forest and farmland offering spectacular valley views. Visit local farmhouses to experience traditional Bhutanese rural life. Optional visit to a local potato farm (the valley is famous for organic potatoes). Evening free for photography and reflection.",
    overnight: "Hotel in Gangtey",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Crane Information Center", "Gangtey Nature Trail", "Farmhouse visit", "Rural Bhutan experience"],
  },
  {
    day: 7,
    title: "Gangtey to Trongsa via Pele La Pass",
    altitude: "2,900m → 3,420m → 2,200m",
    distance: "130km / 5 hrs drive",
    description: "Drive eastward crossing Pele La Pass (3,420m) - the traditional boundary between western and central Bhutan. Stop at Chendebji Chorten, built in the 18th century in Nepalese style to cover the remains of an evil spirit. Continue to Trongsa, a historic town dominated by the massive Trongsa Dzong - ancestral home of Bhutan's royal family. Visit the dzong and the Ta Dzong museum housing royal artifacts. Overnight in this historically significant town.",
    overnight: "Hotel in Trongsa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Pele La Pass", "Chendebji Chorten", "Trongsa Dzong", "Ta Dzong Museum", "Royal heritage"],
  },
  {
    day: 8,
    title: "Trongsa to Bumthang Valley",
    altitude: "2,200m → 2,600m",
    distance: "70km / 2.5 hrs drive",
    description: "Morning drive to Bumthang - the spiritual heartland of Bhutan. Bumthang comprises four main valleys: Chokhor, Tang, Ura, and Chhume, each with its own distinct character. En route, visit the picturesque Yathra Weaving Center where traditional woolen fabrics are made. Afternoon exploration of Jakar town and visit to Jakar Dzong - the 'Castle of the White Bird'. Evening visit to Kurje Lhakhang, one of Bhutan's most sacred sites where Guru Rinpoche meditated and left his body imprint.",
    overnight: "Hotel in Bumthang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Bumthang valleys", "Yathra weaving", "Jakar Dzong", "Kurje Lhakhang", "Sacred sites"],
  },
  {
    day: 9,
    title: "Full Day Bumthang Exploration",
    altitude: "2,600m",
    distance: "Local sightseeing",
    description: "Full day exploring Bumthang's spiritual and cultural treasures. Morning visit to Jambay Lhakhang - one of the 108 temples built by Tibetan King Songtsen Gampo in the 7th century. Continue to Tamshing Lhakhang, founded by Pema Lingpa, with its original 500-year-old paintings. Afternoon visit to Mebar Tsho (Burning Lake) where Pema Lingpa discovered religious treasures. Optional visit to a local brewery producing traditional red rice wine and ara (local spirit).",
    overnight: "Hotel in Bumthang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Jambay Lhakhang", "Tamshing Lhakhang", "Mebar Tsho", "Traditional brewing", "Sacred sites"],
  },
  {
    day: 10,
    title: "Bumthang to Paro via Trongsa & Wangdue",
    altitude: "2,600m → various → 2,280m",
    distance: "300km / 9-10 hrs drive",
    description: "Long but scenic drive back to Paro, retracing your route through Trongsa and Wangdue Phodrang. Stop at Wangdue Phodrang Dzong perched on a ridge overlooking the confluence of the Punatsangchhu and Tang Chhu rivers. Photo stops at Dochula Pass if weather permits. Arrive in Paro by evening. Farewell dinner at a traditional farmhouse with cultural performance.",
    overnight: "Hotel in Paro",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Wangdue Phodrang Dzong", "Dochula Pass views", "Scenic drive", "Farewell cultural dinner"],
  },
  {
    day: 11,
    title: "Taktsang Monastery (Tiger's Nest) Hike & Departure",
    altitude: "2,280m → 3,120m → 2,280m",
    distance: "8km round trip / 5-6 hrs hike",
    description: "Early morning drive to the base camp of Taktsang Monastery - Bhutan's most famous landmark and the perfect finale to your cultural journey. Begin the 2-3 hour uphill hike through pine forests adorned with prayer flags. The trail offers spectacular views of the monastery clinging to a cliff 900 meters above the valley. At the cafeteria viewpoint, you'll see the monastery in all its glory. Time permitting, continue to the monastery itself - a sacred site where Guru Rinpoche meditated in the 8th century. After descending, enjoy lunch before transferring to Paro International Airport for your departure flight. Our representative will assist with check-in. Tashi Delek (goodbye and good luck)!",
    overnight: "-",
    meals: "Breakfast, Lunch",
    highlights: ["Tiger's Monastery hike", "Cliff-side monastery", "Prayer flag forests", "Farewell to Bhutan"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "10 nights hotel accommodation (3-star with breakfast) as per itinerary",
  "All meals as per itinerary (breakfast, lunch, dinner)",
  "English-speaking Bhutanese guide (government licensed)",
  "Private vehicle for all sightseeing and transfers",
  "All monument entrance fees",
  "Bhutan Visa fee (processed by us)",
  "Sustainable Development Fee (SDF) of $100 per night (10 nights = $1,000)",
  "Government taxes and royalty",
  "Mineral water during sightseeing",
  "Traditional scarf welcome at airport",
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
  "Camera fees at monuments",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
  "Hot stone bath (optional)",
  "Traditional archery experience (optional)",
];

const gallery = [
  {
    src: "/images/used/cultural-bhutan.webp",
    alt: "Tashichho Dzong - Fortress of the Glorious Religion in Thimphu, Bhutan",
    caption: "Tashicho Dzong- Fortress of the glorious religion",
  },
  {
    src: "/images/used/bhutan-culture.webp",
    alt: "Bhutanese mask festival - traditional Tshechu cultural performance with colorful masks and costumes",
    caption: "Mask Festival- Where culture wears a mask.",
  },
  {
    src: "/images/used/bhutan-dochula.webp",
    alt: "Dochula Pass - 108 stupas with panoramic Himalayan mountain views in Bhutan",
    caption: "Dochula, Bhutan- 108 stupas, one breathtaking view",
  },
];

export default function BhutanCulturalTourPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2, 3]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  const tourName = "11-Day Bhutan Cultural Tour";
  const canonicalUrl = "https://www.himkalaadventure.com/destinations/bhutan/bhutan-cultural-tour";
  const pageTitle = "11-Day Bhutan Cultural Tour - Himkala Adventure";
  const pageDescription = "11-Day Bhutan Cultural Tour: Explore five valleys, ancient dzongs, sacred monasteries, and the Tiger's Nest. A comprehensive cultural journey through the Kingdom of Bhutan. Book now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/cultural-bhutan.webp";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("11-Day Bhutan Cultural Tour - Himkala Adventure");
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
    "description": "Expert-guided Bhutan cultural tour packages. 11-Day Bhutan Cultural Tour exploring five valleys, ancient dzongs, and sacred monasteries.",
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
    "name": "11-Day Bhutan Cultural Tour",
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
      "price": "3950",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": canonicalUrl,
      "validFrom": "2024-01-01"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "89"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Duration",
        "value": "11 Days / 10 Nights"
      },
      {
        "@type": "PropertyValue",
        "name": "Valleys Explored",
        "value": "Paro, Thimphu, Punakha, Gangtey, Bumthang"
      },
      {
        "@type": "PropertyValue",
        "name": "Max Altitude",
        "value": "3,100m"
      },
      {
        "@type": "PropertyValue",
        "name": "Difficulty",
        "value": "Easy to Moderate"
      },
      {
        "@type": "PropertyValue",
        "name": "Destinations",
        "value": "Paro, Thimphu, Punakha, Gangtey, Trongsa, Bumthang"
      },
      {
        "@type": "PropertyValue",
        "name": "Highlights",
        "value": "Tiger's Nest Monastery, Punakha Dzong, Dochula Pass, Gangtey Valley, Bumthang, Black-Necked Cranes"
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
              src="/images/used/cultural-bhutan.webp"
              alt="11-Day Bhutan Cultural Tour - Tashichho Dzong fortress in Thimphu, Bhutan with traditional Bhutanese architecture"
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
                <Badge className="bg-orange-100 text-orange-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                  <Compass className="w-3 h-3 mr-1" aria-hidden="true" /> Cultural Immersion
                </Badge>
                <Badge className="bg-amber-100 text-amber-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                  <Landmark className="w-3 h-3 mr-1" aria-hidden="true" /> 5 Valleys
                </Badge>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
                11 DAYS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                  BHUTAN CULTURAL TOUR
                </span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-light px-2">
                Journey through the spiritual heartland of the Himalayas - explore ancient dzongs, 
                sacred monasteries, traditional villages, and witness living Buddhist culture across 
                five stunning valleys. Includes the iconic Tiger's Nest Monastery.
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
                  <div className="text-xs text-slate-400 line-through">$4,250</div>
                  <div className="text-lg font-bold text-[#0f2940]">$3,950</div>
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
                        <span className="text-white/50 text-sm line-through">$4,250</span>
                        <div className="text-3xl md:text-4xl font-bold text-white mt-1">$3,950</div>
                        <span className="text-white/60 text-sm">per person</span>
                        <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-xs">Save $300</Badge>
                      </div>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>11 Days / 10 Nights</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>Best: Mar-May, Sep-Nov</span>
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
                        aria-label="Inquire about Bhutan cultural tour on WhatsApp"
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
                          <span className="text-slate-500">Valleys</span>
                          <span className="font-medium text-[#0f2940]">5 Valleys</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Highest Point</span>
                          <span className="font-medium text-[#0f2940]">Dochula Pass (3,100m)</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Duration</span>
                          <span className="font-medium text-[#0f2940]">11 Days / 10 Nights</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Difficulty</span>
                          <span className="font-medium text-[#0f2940]">Easy to Moderate</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2">
                          <span className="text-slate-500">Visa & SDF</span>
                          <span className="font-medium text-[#0f2940]">Fully Included</span>
                        </div>
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
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Overview of 11-Day Bhutan Cultural Tour</h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                      The <strong>11-Day Bhutan Cultural Tour</strong> is our most comprehensive cultural journey through 
                      the <strong>Kingdom of Bhutan</strong>, taking you deep into the heart of this Himalayan Buddhist 
                      kingdom. This carefully crafted <strong>Bhutan cultural tour</strong> explores <strong>five distinct valleys</strong> - Paro, 
                      Thimphu, Punakha, Gangtey, and Bumthang - each offering unique insights into Bhutan's living traditions, 
                      sacred architecture, and timeless way of life.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                      From the bustling capital of Thimphu to the spiritual heartland of Bumthang, you'll visit 
                      <strong> ancient dzongs, sacred monasteries, and traditional villages</strong>. Walk through rice 
                      fields to the fertility temple of Chimi Lhakhang, witness the endangered Black-Necked Cranes in 
                      Gangtey Valley, and explore the historic Trongsa Dzong - ancestral home of Bhutan's royal family.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                      The journey culminates with the <strong>iconic hike to Taktsang Monastery (Tiger's Nest)</strong>, 
                      Bhutan's most revered site perched dramatically on a cliff face. With expert local guides, all meals 
                      included, and the mandatory Sustainable Development Fee covered, this tour offers an authentic and 
                      hassle-free immersion into the Land of the Thunder Dragon.
                    </p>
                  </div>
                </section>

                {/* Highlights */}
                <section className="mb-6 md:mb-12" id="highlights">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Bhutan Cultural Tour Highlights</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                    {[
                      "Hike to iconic Taktsang Monastery (Tiger's Nest)",
                      "Explore five valleys: Paro, Thimphu, Punakha, Gangtey, Bumthang",
                      "Visit Punakha Dzong - Bhutan's most beautiful fortress",
                      "Witness Black-Necked Cranes in Gangtey Valley (seasonal)",
                      "Explore Bumthang - spiritual heartland of Bhutan",
                      "Cross Dochula Pass with 108 chortens & Himalayan views",
                      "Walk through rice fields to Chimi Lhakhang",
                      "Visit Trongsa Dzong - royal heritage site",
                      "Experience traditional farmhouse hospitality",
                      "Farewell dinner with cultural performance",
                      "All visas and SDF fees included",
                      "Expert local guides sharing deep cultural insights",
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
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Best Time to Visit Bhutan</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                    <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                      <CardContent className="p-3 md:p-5">
                        <div className="flex items-center gap-2 mb-1 md:mb-3">
                          <Flower2 className="w-4 h-4 md:w-5 md:h-5 text-orange-500" aria-hidden="true" />
                          <h3 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Mar - May)</h3>
                        </div>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                          Pleasant temperatures, blooming rhododendrons, and clear skies. Perfect for valley exploration 
                          and the Tiger's Nest hike. Paro and Thimphu Tshechu festivals often fall in spring.
                        </p>
                        <Badge className="bg-green-100 text-green-700 border-none text-xs">Excellent</Badge>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 rounded-lg md:rounded-2xl">
                      <CardContent className="p-3 md:p-5">
                        <div className="flex items-center gap-2 mb-1 md:mb-3">
                          <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-blue-500" aria-hidden="true" />
                          <h3 className="font-bold text-[#0f2940] text-xs md:text-base">Autumn (Sep - Nov)</h3>
                        </div>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                          The most popular season with crystal-clear mountain views, pleasant weather, and vibrant 
                          festivals. Black-Necked Cranes begin arriving in Gangtey from November.
                        </p>
                        <Badge className="bg-green-100 text-green-700 border-none text-xs">Best Season</Badge>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Detailed Itinerary */}
                <section className="mb-6 md:mb-12" id="itinerary">
                  <div className="flex items-center justify-between mb-3 md:mb-6">
                    <h2 className="text-lg md:text-2xl font-serif text-[#0f2940]">Day-by-Day Bhutan Cultural Itinerary</h2>
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
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">What's Included in This Bhutan Cultural Tour</h2>
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

                {/* Important Information */}
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-4">Important Information for Bhutan Cultural Tour</h2>
                <div className="bg-amber-50 border border-amber-200 rounded-lg md:rounded-2xl p-3 md:p-6 flex gap-2 md:gap-4 mb-6 md:mb-12">
                  <AlertTriangle className="w-4 h-4 md:w-6 md:h-6 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                      <li>• <strong>Travel insurance is mandatory</strong> and must cover medical emergencies and evacuation.</li>
                      <li>• Bhutan requires a minimum <strong>Sustainable Development Fee (SDF) of $100 per night</strong> - for 10 nights this is $1,000, which is fully included in our package.</li>
                      <li>• The Tiger's Nest hike takes 5-6 hours round trip with significant uphill sections - good walking shoes are essential.</li>
                      <li>• <strong>Visa is processed by us</strong> - we need a clear passport copy and passport photo at least 15 days before travel.</li>
                      <li>• This itinerary covers multiple valleys with long driving days - comfortable private vehicles provided.</li>
                    </ul>
                  </div>
                </div>

                {/* Photo Gallery */}
                <section className="mb-6 md:mb-12" id="gallery">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Photo Gallery - Bhutan Cultural Tour</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3">
                    {gallery.map((image, i) => (
                      <div
                        key={i}
                        className="relative h-24 md:h-48 rounded-lg md:rounded-xl overflow-hidden group cursor-pointer"
                      >
                        <Image
                          src={image.src}
                          alt={`${image.alt} - 11-Day Bhutan Cultural tour experience`}
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
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Frequently Asked Questions About Bhutan Cultural Tour</h2>
                  <div className="space-y-2 md:space-y-4">
                    {[
                      {
                        q: "What is the Sustainable Development Fee (SDF) and is it included?",
                        a: "The SDF is a $100 per night fee that all international visitors pay to visit Bhutan. It funds free education, healthcare, and infrastructure while preserving Bhutan's culture and environment. For this 10-night tour, the SDF of $1,000 is fully included in our package price - you don't need to pay anything extra.",
                      },
                      {
                        q: "Do I need a visa? How does it work?",
                        a: "Yes, all international visitors except Indian nationals require a visa for Bhutan. We process your visa as part of the package. You'll need to send us a clear passport copy and passport photo at least 15 days before travel. The visa is stamped in your passport upon arrival at Paro Airport.",
                      },
                      {
                        q: "How much walking/hiking is involved?",
                        a: "This is primarily a cultural tour with easy walking at monasteries and dzongs. The main exception is the Tiger's Nest hike (day 11) which takes 5-6 hours round trip with significant uphill sections. There are also optional short walks at Chimi Lhakhang (30 mins), Gangtey Nature Trail (2-3 hours), and Punakha suspension bridge (30 mins).",
                      },
                      {
                        q: "What is the accommodation like?",
                        a: "We use comfortable 3-star hotels and resorts throughout your journey. All rooms have attached bathrooms with hot water, comfortable beds, and heating. Properties are locally rated and offer authentic Bhutanese hospitality. Upgrades to 4 or 5-star hotels (like Zhiwa Ling, Amankora, or Taj) are available on request with supplement.",
                      },
                      {
                        q: "Will I see the Black-Necked Cranes?",
                        a: "Black-Necked Cranes migrate to Gangtey Valley from late October to early March. If you're traveling during this period, you have an excellent chance of seeing them. The Crane Information Center provides spotting scopes and updates on crane sightings. Outside these months, the valley is still beautiful but cranes will not be present.",
                      },
                      {
                        q: "What should I pack for this tour?",
                        a: "Pack comfortable walking shoes for the Tiger's Nest hike, layers for varying temperatures (mornings/evenings can be cool even in summer), sunscreen, sunglasses, a hat, and modest clothing for monastery visits (shoulders and knees covered). A lightweight rain jacket is recommended year-round. Your guide will provide more detailed packing advice before travel.",
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