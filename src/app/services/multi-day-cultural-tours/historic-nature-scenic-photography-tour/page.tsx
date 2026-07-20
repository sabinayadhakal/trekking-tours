"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
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
  Compass,
  Droplets,
  Award,
  CameraIcon,
  ImageIcon,
  Sun,
  Sunset,
  Trees,
  Bird,
  Flower2,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Kathmandu",
    altitude: "1,350m",
    distance: "-",
    description: "Welcome to Nepal! Upon arrival at Tribhuvan International Airport, our representative will greet you and transfer you to your hotel in Kathmandu. After check-in, attend a comprehensive tour briefing where we'll discuss the itinerary, photography opportunities, and handle any arrangements. Evening free to explore the vibrant streets of Thamel. Welcome dinner with traditional Nepali cuisine where you'll meet your photography guide.",
    overnight: "Hotel in Kathmandu",
    meals: "Dinner",
    highlights: ["Airport pickup", "Tour briefing", "Welcome dinner", "Thamel exploration"],
  },
  {
    day: 2,
    title: "Kathmandu Valley Photography - Heritage Sites",
    altitude: "1,350m",
    distance: "Full day tour",
    description: "Early morning drive to Swayambhunath Stupa (Monkey Temple) for sunrise photography. Capture the golden light illuminating the stupa and panoramic views of the Kathmandu Valley. After breakfast, visit Pashupatinath Temple, one of the holiest Hindu temples, where you can photograph sadhus (holy men), cremation ceremonies along the Bagmati River, and intricate temple architecture. After lunch, continue to Boudhanath Stupa, one of the largest in South Asia. Photograph the massive mandala, fluttering prayer flags, and Tibetan monks circumambulating the stupa as evening light creates dramatic shadows. Return to hotel for dinner and rest.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Swayambhunath sunrise", "Pashupatinath sadhus", "Boudhanath stupa", "Tibetan Buddhist culture"],
  },
  {
    day: 3,
    title: "Bhaktapur & Patan - Medieval Kingdom Photography",
    altitude: "1,350m",
    distance: "Full day tour",
    description: "After breakfast, drive to Bhaktapur Durbar Square, a UNESCO World Heritage Site and medieval Newari city. Spend the morning photographing the Palace of 55 Windows, Nyatapola Temple (Nepal's tallest pagoda), and the Lion Gate. Capture local potters at work in Pottery Square, where traditional techniques have remained unchanged for centuries. After lunch, visit Patan Durbar Square, the ancient royal city known for its finest Newari architecture. Photograph the Krishna Temple, royal palace with its intricate woodcarvings, and local artisans creating metalwork and statues. The late afternoon light creates beautiful opportunities for architectural photography. Return to Kathmandu for overnight.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Bhaktapur Durbar Square", "Pottery Square artisans", "Patan architecture", "Newari culture"],
  },
  {
    day: 4,
    title: "Drive to Bandipur - Hilltop Heritage Town",
    altitude: "1,350m → 1,030m",
    distance: "5-6 hrs drive / 140km",
    description: "After breakfast, begin the scenic drive to Bandipur, a beautifully preserved hilltop town with panoramic Himalayan views. The journey follows the Prithvi Highway through river valleys and terraced farmlands. Stop en-route for landscape photography at viewpoints overlooking the Marsyangdi River. Arrive in Bandipur by afternoon, a living museum of Newari culture with traditional houses, cobblestone streets, and ancient temples. Explore the town's main street, photograph local life, and capture the sunset over the Manaslu and Annapurna ranges from the hilltop viewpoint. Overnight in a restored heritage hotel.",
    overnight: "Heritage Hotel in Bandipur",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic highway drive", "Bandipur hilltop town", "Heritage architecture", "Himalayan sunset"],
  },
  {
    day: 5,
    title: "Bandipur Village Life & Morning Photography",
    altitude: "1,030m",
    distance: "Half day exploration",
    description: "Early morning walk through Bandipur's ancient streets as the village awakens. Photograph local women fetching water, children heading to school, and shopkeepers opening their stores in the soft morning light. Visit the Bindabasini Temple and Siddha Gufa (cave) area for unique landscape compositions. After breakfast, explore the surrounding terraced farmlands and interact with local farming communities. Learn about traditional Newari lifestyle and capture authentic portraits with permission. After lunch, free time for personal exploration or relaxation before evening photography of the town lit by warm golden hour light. Overnight in Bandipur.",
    overnight: "Heritage Hotel in Bandipur",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Village life photography", "Morning rituals", "Terraced landscapes", "Authentic portraits"],
  },
  {
    day: 6,
    title: "Drive to Pokhara - Lakeside Paradise",
    altitude: "1,030m → 820m",
    distance: "3-4 hrs drive / 80km",
    description: "After breakfast, continue the journey to Pokhara, Nepal's most beautiful lakeside city. The drive offers stunning views of the Annapurna range, with opportunities to stop for landscape photography along the way. Arrive in Pokhara by midday and check into your lakeside hotel. After lunch, begin exploring Phewa Lake with a boat ride to the Tal Barahi Temple, a two-story pagoda in the middle of the lake. Photograph the reflection of Machhapuchhre (Fishtail) mountain in the calm lake waters as the afternoon light creates mirror-like conditions. Evening free to explore the Lakeside promenade with its cafes, shops, and restaurants.",
    overnight: "Hotel in Pokhara",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Annapurna views", "Phewa Lake boat ride", "Tal Barahi Temple", "Mountain reflections"],
  },
  {
    day: 7,
    title: "Sarangkot Sunrise & Pokhara Valley Photography",
    altitude: "820m → 1,592m → 820m",
    distance: "1 hr drive each way",
    description: "Pre-dawn departure (4:30 AM) to Sarangkot hill station for the most spectacular sunrise photography in Nepal. Watch the first light illuminate the Annapurna range including Annapurna South, Annapurna I, Machhapuchhre, and Dhaulagiri. The changing colors from deep blue to pink to golden create extraordinary photo opportunities. After sunrise, return to hotel for breakfast. Mid-morning, visit Davis Falls, an interesting waterfall that disappears into underground caves, and the adjacent Gupteshwor Cave with its massive shivalinga. After lunch, explore the International Mountain Museum for exhibits on Himalayan mountaineering and culture. Late afternoon, hike to the World Peace Pagoda for sunset photography overlooking Pokhara Valley and Phewa Lake. Overnight in Pokhara.",
    overnight: "Hotel in Pokhara",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Sarangkot sunrise", "Annapurna panorama", "Davis Falls", "World Peace Pagoda sunset"],
  },
  {
    day: 8,
    title: "Dhampus Village Trek - Gurung Culture Photography",
    altitude: "820m → 1,650m → 820m",
    distance: "4-5 hrs hike",
    description: "After breakfast, drive to Kande and begin the scenic hike to Dhampus, a traditional Gurung village with spectacular mountain views. The trail winds through rhododendron forests and terraced farmlands, offering continuous photo opportunities of the Annapurna and Machhapuchhre ranges. Upon reaching Dhampus, explore the village, photograph traditional Gurung architecture, and interact with locals. Enjoy lunch with mountain views before descending back to Pokhara. The afternoon light creates beautiful conditions for landscape photography along the trail. Return to Pokhara by late afternoon. Evening free for portfolio review with your guide or personal exploration.",
    overnight: "Hotel in Pokhara",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Dhampus village trek", "Gurung culture", "Rhododendron forests", "Close-up mountain views"],
  },
  {
    day: 9,
    title: "Drive to Chitwan National Park - Wildlife Photography",
    altitude: "820m → 415m",
    distance: "5-6 hrs drive / 150km",
    description: "After breakfast, drive south to Chitwan National Park, Nepal's first national park and UNESCO World Heritage Site. The journey descends through subtropical forests and river valleys, with changing vegetation and landscapes. Arrive at your jungle resort by lunchtime. After check-in and orientation, enjoy a village walk to nearby Tharu communities, photographing traditional mud-and-straw houses, local crafts, and daily life. In the evening, attend a cultural performance by the Tharu people featuring their unique stick dance and traditional music. Overnight at jungle resort.",
    overnight: "Jungle Resort in Chitwan",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic drive to lowlands", "Tharu village walk", "Cultural performance", "Traditional lifestyle"],
  },
  {
    day: 10,
    title: "Chitwan Safari - Wildlife & Nature Photography",
    altitude: "415m",
    distance: "Full day safari",
    description: "Early morning jeep safari into Chitwan National Park for wildlife photography. The park is home to one-horned rhinoceros, Bengal tigers (rare), leopards, sloth bears, crocodiles, and over 500 bird species. Your naturalist guide will position the vehicle for optimal photography opportunities. Capture images of rhinos grazing in grasslands, deer drinking at waterholes, and exotic birds including kingfishers, hornbills, and egrets. After breakfast, enjoy a canoe ride along the Rapti River to photograph aquatic birds, crocodiles, and riverside wildlife. After lunch, visit the Elephant Breeding Center to photograph these gentle giants and learn about conservation efforts. Late afternoon elephant safari or nature walk for sunset photography. Overnight at jungle resort.",
    overnight: "Jungle Resort in Chitwan",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["One-horned rhinos", "Bird photography", "Canoe safari", "Elephant Breeding Center"],
  },
  {
    day: 11,
    title: "Return to Kathmandu - Valley Views",
    altitude: "415m → 1,350m",
    distance: "6-7 hrs drive",
    description: "After breakfast, begin the scenic drive back to Kathmandu. The journey offers changing landscapes from subtropical forests to mid-hill terraces. Stop at viewpoints overlooking the Trishuli River and surrounding hills for final landscape photography. Arrive in Kathmandu by late afternoon. Check into your hotel and freshen up. Evening farewell dinner at a traditional Nepali restaurant with cultural music and dance performances. Share your favorite photographs with your guide and fellow travelers. Overnight in Kathmandu.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic return drive", "River valley views", "Farewell dinner", "Photo sharing"],
  },
  {
    day: 12,
    title: "Departure",
    altitude: "1,350m",
    distance: "-",
    description: "Transfer to Tribhuvan International Airport for your departure flight. Our representative will ensure you reach the airport with plenty of time. Bid farewell to Nepal with memories of capturing stunning Himalayan sunrises, ancient heritage sites, vibrant village life, and exotic wildlife through your lens. Namaste and until we meet again!",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Airport transfer", "Departure assistance", "Fond farewells"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "3 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "2 nights heritage hotel accommodation in Bandipur with all meals",
  "3 nights hotel accommodation in Pokhara with all meals",
  "2 nights jungle resort accommodation in Chitwan with all meals",
  "All meals during the tour as specified (breakfast, lunch, dinner)",
  "Experienced English-speaking photography guide (government licensed)",
  "Local guides for heritage sites and wildlife safaris",
  "All ground transportation as per itinerary in private vehicle",
  "All monument entrance fees (UNESCO sites, museums, etc.)",
  "All safari activities in Chitwan National Park (jeep safari, canoe ride, elephant breeding center)",
  "Boat ride on Phewa Lake",
  "Sarangkot sunrise transport",
  "Dhampus village trek with local guide",
  "First aid medical kit",
  "Cultural performance in Chitwan",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Photography tips and guidance throughout the tour",
  "Complimentary map of Nepal",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover emergency evacuation)",
  "Meals not specified in itinerary",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, etc.)",
  "Tips and gratuities for guides, drivers, and local staff (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, landslides, political unrest)",
  "Personal photography equipment (cameras, lenses, tripods, etc.)",
  "Travel insurance for camera equipment (recommended)",
];

const gallery = [
  
  {
    src: "/images/used/monkey_temple.webp",
    alt: "Swayambhunath Stupa",
    caption: "Swayambhunath Stupa (Monkey Temple) at dawn",
  },
  {
    src: "/images/used/bhaktapur-3.webp",
    alt: "Bhaktapur Durbar Square",
    caption: "Medieval architecture at Bhaktapur Durbar Square",
  },
  {
    src: "/images/used/pokhara-1.webp",
    alt: "Phewa Lake",
    caption: "Phewa Lake with Machhapuchhre reflection",
  },
  {
    src: "/images/used/nepal-chitwan.webp",
    alt: "One-horned Rhinoceros",
    caption: "One-horned rhinoceros in Chitwan National Park",
  },
  {
    src: "/images/used/bandipur-1.webp",
    alt: "Bandipur Village",
    caption: "Traditional Newari village of Bandipur at sunset",
  },
];

export default function HistoricNatureScenicPhotographyTourPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  
  // Tour name constant for auto-fill functionality
  const tourName = "Historic, Nature & Scenic Photography Tour";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Historic, Nature & Scenic Photography Tour - Himkala Adventure");
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

  // Schema.org Product schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Historic, Nature & Scenic Photography Tour",
    "description": "A 12-day photography tour through Nepal's UNESCO heritage sites, hilltop towns, Himalayan lakes, and wildlife national parks with expert photography guidance.",
    "image": "https://www.himkalaadventure.com/images/used/historic-scenic-photography-nepal.webp",
    "brand": {
      "@type": "Brand",
      "name": "Himkala Adventure Pvt. Ltd."
    },
    "offers": {
      "@type": "Offer",
      "price": "1895",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01",
      "url": "https://www.himkalaadventure.com/services/multi-day-cultural-tours/historic-nature-scenic-photography-tour"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "67"
    }
  };

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TouristInformationCenter",
    "name": "Himkala Adventure Pvt. Ltd.",
    "description": "Expert-guided photography tours in Nepal exploring historic sites, nature, and scenic landscapes.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thamel, Lekhnath Marga",
      "addressLocality": "Kathmandu",
      "addressCountry": "Nepal"
    },
    "telephone": "+977 9841376470",
    "email": "info@himkalaadventure.com",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.7172,
      "longitude": 85.3240
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Mobile Navigation Drawer */}
      {showMobileNav && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowMobileNav(false)}
            aria-label="Close navigation"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg text-[#0f2940]">Quick Navigation</h3>
                <button 
                  onClick={() => setShowMobileNav(false)}
                  className="p-2 rounded-lg hover:bg-slate-100"
                  aria-label="Close navigation"
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
            src="/images/used/historic-scenic-photography-nepal.webp"
            alt="Historic, Nature and Scenic Photography Tour in Nepal - capturing UNESCO heritage sites, Himalayan landscapes and wildlife"
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
                <MapPin className="w-3 h-3 mr-1" aria-hidden="true" /> Multi-Day City Tour
              </Badge>
              <Badge className="bg-green-100 text-green-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Easy
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Camera className="w-3 h-3 mr-1" aria-hidden="true" /> Photography Focus
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              HISTORIC, NATURE & SCENIC <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                PHOTOGRAPHY TOUR
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              Capture Nepal's diverse beauty through your lens—from ancient UNESCO heritage sites and vibrant village life 
              to Himalayan sunrises and exotic wildlife in Chitwan National Park.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - with proper sticky sidebar */}
      <section className="py-6 md:py-12 relative">
        <div className="container mx-auto px-3 md:px-6 max-w-full">
          {/* Mobile Sticky Book Now Bar */}
          <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-[#C5E0ED]/30 shadow-sm py-2 -mx-3 px-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 line-through">$2,200</div>
                <div className="text-lg font-bold text-[#0f2940]">$1,895</div>
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
              <div className="sticky top-24">
                <div className="space-y-4 md:space-y-6">
                  {/* Price Card */}
                  <Card className="bg-gradient-to-br from-[#0f2940] to-[#1a4166] border-none rounded-xl md:rounded-2xl overflow-hidden">
                    <CardContent className="p-4 md:p-6">
                      <div className="text-center mb-4 md:mb-6">
                        <span className="text-white/50 text-sm line-through">$2,200</span>
                        <div className="text-3xl md:text-4xl font-bold text-white mt-1">$1,895</div>
                        <span className="text-white/60 text-sm">per person</span>
                        <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $305</Badge>
                      </div>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>12 Days / 11 Nights</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>Best: Year-round</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>Group Size: 2-10</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Camera className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>Photography Focused</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Map className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>Max Altitude: 1,592m</span>
                        </div>
                      </div>

                      {/* Book Now Button */}
                      <Link href={`/contact?trek=${encodeURIComponent(tourName)}`}>
                        <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-xs md:text-base" aria-label={`Book ${tourName}`}>
                          <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" aria-hidden="true" /> Book This Tour
                        </Button>
                      </Link>
                      
                      {/* WhatsApp Now Button */}
                      <a 
                        href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about the ${tourName}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        aria-label="Inquire about photography tour on WhatsApp"
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
                          <span className="text-slate-500">Destinations</span>
                          <span className="font-medium text-[#0f2940]">Kathmandu, Bandipur, Pokhara, Chitwan</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Tour Type</span>
                          <span className="font-medium text-[#0f2940]">Cultural, Nature, Wildlife</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Best Season</span>
                          <span className="font-medium text-[#0f2940]">Sept-May (all year)</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2">
                          <span className="text-slate-500">Difficulty</span>
                          <span className="font-medium text-[#0f2940]">Easy - Suitable for all</span>
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
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Overview</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The <strong>Historic, Nature & Scenic Photography Tour</strong> is a carefully crafted 12-day journey designed for photography enthusiasts of all levels. This tour takes you through Nepal's most photogenic locations, from the ancient UNESCO heritage sites of the Kathmandu Valley to the tranquil hilltop town of Bandipur, the stunning Himalayan vistas of Pokhara, and the exotic wildlife of Chitwan National Park.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    Nepal offers photographers an incredible diversity of subjects within a relatively small territory. The medieval cities of Bhaktapur and Patan showcase exquisite Newari architecture, intricate woodcarvings, and vibrant street life. The hilltop town of Bandipur provides authentic village scenes and panoramic mountain views. Pokhara's serene lakes reflect the majestic Annapurna range, while Sarangkot offers world-famous sunrise photography. Finally, Chitwan National Park presents opportunities to capture one-horned rhinoceros, exotic birds, and Tharu village culture.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    Your experienced photography guide will ensure you're at the right place at the right time for the best light, offer composition tips, and help you capture stunning images throughout your journey. Whether you're a beginner wanting to improve your skills or a seasoned photographer seeking new subjects, this tour provides unparalleled opportunities to photograph Nepal's rich cultural heritage, diverse landscapes, and incredible wildlife.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Tour Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Photograph UNESCO World Heritage Sites including Swayambhunath, Pashupatinath, Boudhanath, Bhaktapur, and Patan",
                    "Capture stunning sunrise over the Annapurna range from Sarangkot hill station",
                    "Explore the medieval hilltop town of Bandipur with its traditional Newari architecture",
                    "Boat ride on Phewa Lake with reflections of Machhapuchhre (Fishtail) mountain",
                    "Wildlife photography in Chitwan National Park including one-horned rhinos and exotic birds",
                    "Village walks to photograph authentic rural life in Dhampus and Tharu communities",
                    "Portrait photography opportunities with sadhus, monks, and local artisans",
                    "Cultural performances and traditional dance photography",
                    "Golden hour and blue hour shoots at heritage sites",
                    "Professional photography guidance throughout your journey",
                  ].map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]"
                    >
                      <Camera className="w-3 h-3 md:w-4 h-4 text-[#2d6a8a] shrink-0" aria-hidden="true" />
                      <span className="text-[#0f2940] font-medium text-xs md:text-base leading-tight">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Best Season */}
              <section className="mb-6 md:mb-12">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Best Time for Photography</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
                  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-orange-500" aria-hidden="true" />
                        <h3 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Mar-May)</h3>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Rhododendrons bloom across the hills. Pleasant temperatures and clear mountain views. Excellent for landscape and nature photography.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Excellent</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Sun className="w-4 h-4 md:w-5 md:h-5 text-blue-500" aria-hidden="true" />
                        <h3 className="font-bold text-[#0f2940] text-xs md:text-base">Autumn (Sep-Nov)</h3>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Crystal-clear skies, perfect mountain views, and vibrant festivals including Dashain and Tihar. Ideal for all types of photography.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Snowflake className="w-4 h-4 md:w-5 md:h-5 text-amber-500" aria-hidden="true" />
                        <h3 className="font-bold text-[#0f2940] text-xs md:text-base">Winter (Dec-Feb)</h3>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Crisp clear air, snow-dusted peaks, and fewer crowds. Excellent for mountain photography. Cool but sunny days.
                      </p>
                      <Badge className="bg-blue-100 text-blue-700 border-none text-[8px] md:text-xs">Good</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: Monsoon (Jun-Aug) brings lush green landscapes but limited mountain views. Still good for cultural and portrait photography in heritage sites.</p>
              </section>

              {/* Detailed Itinerary */}
              <section className="mb-6 md:mb-12" id="itinerary">
                <div className="flex items-center justify-between mb-3 md:mb-6">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940]">Day-by-Day Itinerary</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[#2d6a8a] border-[#C5E0ED] hover:bg-[#C5E0ED]/20 rounded-full text-xs md:text-sm px-2 md:px-4"
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
                          className="w-full flex items-center gap-2 md:gap-4 p-2 md:p-4 text-left"
                          onClick={() => toggleDay(day.day)}
                          aria-label={expandedDays.includes(day.day) ? `Collapse ${day.title}` : `Expand ${day.title}`}
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
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">What's Included</h2>
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

              {/* Important Note */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg md:rounded-2xl p-3 md:p-6 flex gap-2 md:gap-4 mb-6 md:mb-12">
                <AlertTriangle className="w-4 h-4 md:w-6 md:h-6 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-1 md:mb-2 text-xs md:text-base">Important Information for Photographers</h3>
                  <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                    <li>• <strong>Equipment Recommendations:</strong> Bring a versatile zoom lens (24-70mm or similar) for heritage and street photography, a telephoto lens (70-200mm or longer) for wildlife and mountain details, and a wide-angle lens for landscapes. A sturdy tripod is essential for sunrise/sunset shoots and low-light conditions.</li>
                    <li>• <strong>Best Light:</strong> Our itinerary is designed around golden hour (sunrise and sunset) for optimal photography conditions. Be prepared for early morning starts (4:30 AM for Sarangkot).</li>
                    <li>• <strong>Permissions:</strong> Some temples may restrict photography inside sanctums. Your guide will advise on where photography is permitted. Portrait photography of locals should be done with permission and respect.</li>
                    <li>• <strong>Physical Requirements:</strong> This is an easy tour suitable for all fitness levels. Some walking on uneven stone streets in heritage areas and short hikes (Dhampus village) are included.</li>
                    <li>• <strong>Travel Insurance:</strong> Mandatory - ensure your policy covers camera equipment if desired. Medical evacuation coverage is also required.</li>
                    <li>• <strong>Visa:</strong> Nepal visa available on arrival at Tribhuvan International Airport. Bring two passport photos and cash for visa fees.</li>
                  </ul>
                </div>
              </div>

              {/* Photo Gallery */}
              <section className="mb-6 md:mb-12" id="gallery">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Photo Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3">
                  {gallery.map((image, i) => (
                    <div
                      key={i}
                      className="relative h-24 md:h-48 rounded-lg md:rounded-xl overflow-hidden group cursor-pointer"
                    >
                      <Image
                        src={image.src}
                        alt={`${image.alt} - Historic, Nature and Scenic Photography Tour in Nepal`}
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
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Frequently Asked Questions</h2>
                <div className="space-y-2 md:space-y-4">
                  {[
                    {
                      q: "What photography experience level is required?",
                      a: "This tour is suitable for all photography levels from beginners to advanced. Beginners will receive guidance on composition, camera settings, and techniques. Experienced photographers will have the freedom to focus on their craft while benefiting from optimal timing and location knowledge. Our guide adapts to individual needs and skill levels.",
                    },
                    {
                      q: "What camera equipment should I bring?",
                      a: "Recommended equipment includes: a DSLR or mirrorless camera body (consider bringing a backup body), wide-angle lens (16-35mm) for landscapes and architecture, standard zoom (24-70mm) for general and street photography, telephoto lens (70-200mm or longer) for wildlife and compressed mountain views, tripod for sunrise/sunset shoots, extra batteries (cold drains them faster), memory cards, lens cleaning kit, and a camera bag that protects against dust and rain.",
                    },
                    {
                      q: "Will I have time for personal photography exploration?",
                      a: "Yes! While we follow a structured itinerary to ensure optimal timing and lighting, there is always flexibility for personal exploration. Your guide can suggest locations and times for independent shoots, and some afternoons/evenings are free for you to explore and photograph at your own pace.",
                    },
                    {
                      q: "What types of subjects will I photograph?",
                      a: "This tour offers incredible diversity: UNESCO heritage sites (temples, stupas, palaces), street life and portraits in medieval cities, traditional village life in Bandipur and Dhampus, Himalayan landscapes and sunrise from Sarangkot, lakes and mountain reflections in Pokhara, wildlife including one-horned rhinos and exotic birds in Chitwan, and Tharu cultural performances.",
                    },
                    {
                      q: "Is this tour suitable for non-photographer companions?",
                      a: "Absolutely! Non-photographers will enjoy the same incredible destinations, cultural experiences, and scenic beauty. While photographers may spend more time at certain spots during golden hours, the itinerary includes plenty of cultural activities and experiences for everyone. Couples and groups with mixed interests are very welcome.",
                    },
                    {
                      q: "How many photographers are in a group?",
                      a: "We maintain small group sizes of 2-10 participants to ensure personalized attention and minimal disruption at photography locations. This allows your guide to provide individual assistance and ensures everyone has ample space and time to capture their images.",
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
  );
}