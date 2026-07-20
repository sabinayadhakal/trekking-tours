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
  Church,
  History,
  Palette,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    "day": 1,
    "title": "Arrival in Kathmandu",
    "altitude": "1,350m",
    "distance": "-",
    "description": "Welcome to Nepal! Upon arrival at Tribhuvan International Airport, our representative will greet you and transfer you to your hotel in Kathmandu. After check-in, attend a comprehensive tour briefing where we'll discuss the itinerary, cultural significance of sites, and handle any arrangements. Evening free to explore the vibrant streets of Thamel, with its bustling shops, restaurants, and cafes. Welcome dinner with traditional Nepali cuisine where you'll meet your tour guide and fellow travelers. Enjoy authentic dal bhat, momos, and other local specialties while learning about the days ahead.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Dinner",
    "highlights": ["Airport pickup", "Tour briefing", "Welcome dinner", "Thamel exploration", "Traditional Nepali cuisine"]
  },
  {
    "day": 2,
    "title": "Kathmandu Durbar Square & Swayambhunath (Monkey Temple)",
    "altitude": "1,350m",
    "distance": "Full day tour",
    "description": "After breakfast, begin your heritage journey at Kathmandu Durbar Square (Hanuman Dhoka), the historic seat of Nepalese royalty. This UNESCO World Heritage Site is a stunning collection of ancient palaces, courtyards, and temples dating back to the 12th to 18th centuries. Explore the intricately carved wooden windows and doors, including the famous Kumari Ghar - home to the Living Goddess Kumari. If you're lucky, you may catch a glimpse of the Kumari at her window. Photograph the majestic Taleju Temple, the massive stone statue of Kal Bhairav, and the nine-story Basantapur Tower. After lunch, visit Swayambhunath Stupa (commonly known as the Monkey Temple), perched on a hilltop west of the city. Climb the 365 stone steps past meditation shrines, prayer wheels, and the resident monkeys who give the temple its nickname. At the top, admire the main stupa with its all-seeing eyes of Buddha painted on all four sides. Enjoy panoramic views of the entire Kathmandu Valley and the surrounding Himalayan peaks on clear days. Learn about the legend that the valley was once a lake and the stupa emerged from a lotus. Evening return to hotel.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Kumari Living Goddess", "Hanuman Dhoka Palace", "Kal Bhairav statue", "Swayambhunath stupa (4th century)", "360-degree Kathmandu Valley views"]
  },
  {
    "day": 3,
    "title": "Pashupatinath Temple & Boudhanath Stupa",
    "altitude": "1,350m",
    "distance": "Full day tour",
    "description": "Early morning visit to Pashupatinath Temple, one of the holiest Hindu temples in the world dedicated to Lord Shiva. Located on the sacred banks of the Bagmati River, this UNESCO World Heritage Site is a sprawling complex of temples, ashrams, and shrines dating back to the 5th century. Observe morning puja (worship) rituals, cremation ceremonies along the river ghats (burning platforms), and the fascinating sadhus (holy men) with their distinctive face paint, dreadlocks, and ash-smeared bodies. Note that non-Hindus are not permitted inside the main temple, but the surrounding areas offer incredible photo opportunities. After lunch, continue to Boudhanath Stupa, one of the largest spherical stupas in South Asia and the center of Tibetan Buddhism in Nepal. This UNESCO World Heritage Site was built in the 5th century and is a powerful symbol of Tibetan Buddhism. Circumambulate the massive mandala (the kora) while spinning the prayer wheels, observing Tibetan monks in maroon robes, and listening to the continuous chanting. Visit the surrounding monasteries, thangka schools, and Tibetan Buddhist handicraft shops. Enjoy the peaceful, spiritual atmosphere. Evening return to hotel.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Pashupatinath morning rituals", "Sadhus and cremation ceremonies", "Bagmati River ghats", "Boudhanath stupa (5th century)", "Tibetan Buddhist culture and monasteries"]
  },
  {
    "day": 4,
    "title": "Patan Durbar Square & Bhaktapur Durbar Square - Twin Medieval Cities",
    "altitude": "1,350m → 1,401m",
    "distance": "Full day tour (30 min drive to Patan, 1 hr to Bhaktapur)",
    "description": "Today you explore two of the most magnificent medieval cities in the Kathmandu Valley - Patan and Bhaktapur. Start after breakfast with a short drive to Patan (Lalitpur), the 'City of Fine Arts', located just across the Bagmati River from Kathmandu. Patan Durbar Square is a stunning UNESCO World Heritage Site with the finest collection of Newari architecture in Nepal. Explore the ancient royal palace complex, now a museum housing magnificent bronze statues, religious artifacts, and a famous collection of Thanka paintings. Marvel at the Krishna Temple, a masterpiece built entirely of black stone with 21 pinnacles and exquisite carvings. Visit the Hiranya Varna Mahavihar (Golden Temple), a stunning Buddhist monastery with golden facades, intricate woodwork, and peaceful courtyards. Watch local artisans at work creating traditional metal statues and Thanka paintings - Patan has been the artistic heart of Nepal for centuries. After lunch, drive to Bhaktapur (1 hour), the best-preserved medieval city in Nepal, also known as 'Bhadgaon' or the 'City of Devotees' (UNESCO World Heritage Site). Bhaktapur Durbar Square transports you back to the 15th century with its magnificent architecture. Explore the Palace of 55 Windows, a masterpiece of wood carving with intricately carved dark red windows. Walk through the magnificent Golden Gate leading to the palace courtyard. Marvel at the towering Nyatapola Temple, Nepal's tallest pagoda at five stories (30 meters), dedicated to the goddess Siddhi Lakshmi. Wander through narrow cobblestone streets lined with traditional red brick houses, pottery squares where artisans shape clay using centuries-old techniques, and hidden courtyards. Visit Pottery Square to see potters at work and even try your hand at shaping a pot. Return to Kathmandu by evening. Farewell dinner at a traditional Newari restaurant with cultural dance performance, celebrating your journey through the heritage of the Kathmandu Valley.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Patan Durbar Square", "Krishna Temple (black stone)", "Golden Temple Hiranya Varna", "Local artisans and Thanka paintings", "Bhaktapur Durbar Square", "Nyatapola Temple (Nepal's tallest pagoda)", "Palace of 55 Windows", "Pottery Square and traditional crafts", "Farewell dinner with cultural dance"]
  },
  {
    "day": 5,
    "title": "Departure from Kathmandu",
    "altitude": "1,350m",
    "distance": "-",
    "description": "Transfer to Tribhuvan International Airport for your departure flight. Our representative will ensure you reach the airport with plenty of time, assist with check-in, and bid you farewell. Bid farewell to Nepal with memories of exploring ancient temples, witnessing living traditions, experiencing the rich cultural heritage of the Kathmandu Valley, and immersing yourself in the unique blend of Hindu and Buddhist cultures. Take home the sights, sounds, and spiritual energy of this Himalayan nation. Namaste and until we meet again for another adventure in the Himalayas!",
    "overnight": "-",
    "meal": "Breakfast",
    "highlights": ["Airport transfer", "Departure assistance", "Fond farewells", "Heritage memories"]
  }
]

const includes = [
  "All airport/hotel transfers in private vehicle",
  "5 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "All meals during the tour as specified (breakfast, lunch, dinner)",
  "Experienced English-speaking tour guide (government licensed, cultural heritage expert)",
  "All ground transportation as per itinerary in private vehicle",
  "All monument entrance fees (UNESCO World Heritage Sites)",
  "Pashupatinath Temple entrance fee",
  "Boudhanath Stupa entrance fee",
  "Swayambhunath entrance fee",
  "Kathmandu Durbar Square entrance fee",
  "Patan Durbar Square entrance fee and museum",
  "Bhaktapur Durbar Square entrance fee",
  "Changunarayan Temple entrance fee",
  "Golden Temple entrance fee",
  "First aid medical kit",
  "Farewell dinner with cultural performance",
  "All government taxes and official expenses",
  "Emergency contact number 24/7",
  "Complimentary map of Kathmandu Valley",
  "Bottled water during tours",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover emergency evacuation)",
  "Meals not specified in itinerary",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, etc.)",
  "Tips and gratuities for guides and drivers (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, political unrest)",
  "Photography fees at certain temples (where applicable)",
  "Optional activities not mentioned in itinerary",
];

const gallery = [
  {
    src: "/images/used/monkey_temple.webp",
    alt: "Swayambhunath Stupa (Monkey Temple) with all-seeing eyes of Buddha, a UNESCO World Heritage Site in Kathmandu Valley",
    caption: "Swayambhunath Stupa (Monkey Temple) with all-seeing eyes of Buddha",
  },
  {
    src: "/images/used/bhaktapur-2.webp",
    alt: "Bhaktapur Durbar Square with Nyatapola Temple, UNESCO World Heritage Site showcasing medieval Newari architecture",
    caption: "Bhaktapur Durbar Square with Nyatapola Temple",
  },
  {
    src: "/images/used/patan-1.webp",
    alt: "Patan Durbar Square - City of Fine Arts with ancient royal palace and Krishna Temple in Lalitpur",
    caption: "Patan Durbar Square - City of Fine Arts",
  },
  {
    src: "/images/used/nepal-stupa.webp",
    alt: "Boudhanath Stupa - massive Buddhist stupa and center of Tibetan Buddhism in Nepal, UNESCO World Heritage Site",
    caption: "Boudhanath Stupa - Center of Tibetan Buddhism",
  },
  {
    src: "/images/used/pashupati-1.webp",
    alt: "Pashupatinath Temple on the banks of Bagmati River, sacred Hindu temple dedicated to Lord Shiva",
    caption: "Pashupatinath Temple on the banks of Bagmati River",
  },
  {
    src: "/images/used/bhaktapur-4.webp",
    alt: "Traditional potters at work in Bhaktapur's Pottery Square, preserving centuries-old Newari craftsmanship",
    caption: "Traditional potters at work in Bhaktapur's Pottery Square",
  },
];

export default function KathmanduBhaktapurLalitpurTourPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  
  // Tour name constant for auto-fill functionality
  const tourName = "Kathmandu, Bhaktapur & Lalitpur Heritage Tour";

  // Schema.org structured data for Tour/Product
  const tourSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Kathmandu, Bhaktapur & Lalitpur Heritage Tour - 6 Days",
    "description": "Explore the cultural heart of Nepal through its three ancient royal cities—Kathmandu, Bhaktapur, and Lalitpur. Visit 7 UNESCO World Heritage Sites including Pashupatinath Temple, Boudhanath Stupa, Swayambhunath, and the Durbar Squares of Kathmandu, Patan, and Bhaktapur.",
    "duration": "P6D",
    "offers": {
      "@type": "Offer",
      "price": "750",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01"
    },
    "itinerary": {
      "@type": "Itinerary",
      "numberOfDays": 6
    },
    "provider": {
      "@type": "TravelAgency",
      "name": "Himkala Adventure Pvt. Ltd.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Thamel, Lekhnath Marga",
        "addressLocality": "Kathmandu",
        "addressCountry": "Nepal"
      },
      "telephone": "+9779841376470",
      "email": "info@himkalaadventure.com",
      "url": "https://www.himkalaadventure.com"
    },
    "touristType": ["Culture Enthusiasts", "History Buffs", "Photographers", "Heritage Travelers"],
    "tourDifficulty": "Easy",
    "touristAttraction": [
      {
        "@type": "TouristAttraction",
        "name": "Kathmandu Durbar Square",
        "description": "Ancient royal palace complex and UNESCO World Heritage Site in Kathmandu"
      },
      {
        "@type": "TouristAttraction",
        "name": "Swayambhunath Stupa",
        "description": "Ancient Buddhist stupa on a hilltop overlooking Kathmandu Valley"
      },
      {
        "@type": "TouristAttraction",
        "name": "Pashupatinath Temple",
        "description": "Sacred Hindu temple complex on the banks of Bagmati River"
      },
      {
        "@type": "TouristAttraction",
        "name": "Boudhanath Stupa",
        "description": "One of the largest spherical stupas in South Asia and center of Tibetan Buddhism"
      },
      {
        "@type": "TouristAttraction",
        "name": "Patan Durbar Square",
        "description": "Medieval royal palace square with finest Newari architecture in Lalitpur"
      },
      {
        "@type": "TouristAttraction",
        "name": "Bhaktapur Durbar Square",
        "description": "Best-preserved medieval city in Nepal with Nyatapola Temple and Pottery Square"
      }
    ]
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Kathmandu, Bhaktapur & Lalitpur Heritage Tour - Himkala Adventure");
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

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }}
      />

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
                  className="p-2 rounded-lg hover:bg-slate-100"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
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
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white"
                    onClick={() => handleShare("twitter")}
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-slate-800 hover:bg-slate-900 text-white"
                    onClick={handleCopyLink}
                    aria-label="Copy link to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
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
            src="/images/used/durbar_square.webp"
            alt="Kathmandu Durbar Square UNESCO World Heritage Site with ancient temples and royal palace in Kathmandu Valley"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940] via-[#0f2940]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/80 via-transparent to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
          <div className="max-w-5xl mx-auto text-center w-full">
            <div className="flex flex-wrap gap-2 mb-4 md:mb-6 justify-center">
              <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <MapPin className="w-3 h-3 mr-1" /> Multi-Day City Tour
              </Badge>
              <Badge className="bg-green-100 text-green-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Easy
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Landmark className="w-3 h-3 mr-1" /> 7 UNESCO Sites
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              KATHMANDU, BHAKTAPUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                & LALITPUR HERITAGE TOUR
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              Discover the cultural heart of Nepal through its three ancient royal cities—exploring UNESCO World Heritage Sites, 
              living traditions, medieval architecture, and the rich Newari heritage of the Kathmandu Valley.
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
                <div className="text-xs text-slate-400 line-through">$950</div>
                <div className="text-lg font-bold text-[#0f2940]">$750</div>
              </div>
              <Link href={`/contact?trek=${encodeURIComponent(tourName)}`}>
                <Button className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] text-white font-bold rounded-full px-4 py-1.5 text-xs min-h-[44px]">
                  <Heart className="w-3 h-3 mr-1" /> Book Now
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
                        <span className="text-white/50 text-sm line-through">$950</span>
                        <div className="text-3xl md:text-4xl font-bold text-white mt-1">$750</div>
                        <span className="text-white/60 text-sm">per person</span>
                        <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $200</Badge>
                      </div>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>5 Days / 4 Nights</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Best: Year-round</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Group Size: 2-15</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Landmark className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>7 UNESCO Heritage Sites</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Map className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Max Altitude: 1,401m</span>
                        </div>
                      </div>

                      {/* Book Now Button */}
                      <Link href={`/contact?trek=${encodeURIComponent(tourName)}`}>
                        <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-xs md:text-base">
                          <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Book This Tour
                        </Button>
                      </Link>
                      
                      {/* WhatsApp Now Button */}
                      <a 
                        href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about the ${tourName}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        aria-label="Contact via WhatsApp"
                      >
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold rounded-full h-10 md:h-12 text-xs md:text-base">
                          <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> WhatsApp Now
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  {/* Quick Facts */}
                  <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-[10px] md:text-base">
                        <Map className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> Quick Facts
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
                          <span className="font-medium text-[#0f2940]">Kathmandu, Patan, Bhaktapur</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Tour Type</span>
                          <span className="font-medium text-[#0f2940]">Cultural, Heritage, UNESCO</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">UNESCO Sites</span>
                          <span className="font-medium text-[#0f2940]">7 Sites</span>
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
                        <Share2 className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> Share
                      </h3>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-lg md:rounded-xl text-[8px] md:text-xs"
                          onClick={() => handleShare("facebook")}
                          aria-label="Share on Facebook"
                        >
                          <Facebook className="w-3 h-3 md:w-4 md:h-4" />
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg md:rounded-xl text-[8px] md:text-xs"
                          onClick={() => handleShare("twitter")}
                          aria-label="Share on Twitter"
                        >
                          <Twitter className="w-3 h-3 md:w-4 md:h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg md:rounded-xl text-[8px] md:text-xs"
                          onClick={handleCopyLink}
                          aria-label="Copy link to clipboard"
                        >
                          {copied ? <Check className="w-3 h-3 md:w-4 md:h-4" /> : <Copy className="w-3 h-3 md:w-4 md:h-4" />}
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
                  <Facebook className="w-3 h-3 mr-1" /> Share
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg text-[10px] py-1.5 min-h-[44px]"
                  onClick={() => handleShare("twitter")}
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-3 h-3 mr-1" /> Tweet
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg text-[10px] py-1.5 min-h-[44px]"
                  onClick={handleCopyLink}
                  aria-label="Copy link to clipboard"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>

              {/* Overview */}
              <section className="mb-6 md:mb-12" id="overview">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Overview of Kathmandu Valley Heritage Tour</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The <strong>Kathmandu, Bhaktapur & Lalitpur Heritage Tour</strong> is a comprehensive 6-day journey through the cultural heart of Nepal, exploring the three ancient royal cities of the Kathmandu Valley. This <strong>Nepal cultural tour</strong> offers an immersive experience into the rich history, stunning architecture, and living traditions of the Newari people, who have inhabited this valley for over two millennia.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The Kathmandu Valley is home to seven UNESCO World Heritage Sites, all of which are included in this <strong>heritage walking tour</strong>. From the sacred Hindu temple of Pashupatinath on the banks of the Bagmati River to the massive Buddhist stupa of Boudhanath, from the medieval palace squares of Kathmandu, Patan, and Bhaktapur to the hilltop monkey temple of Swayambhunath—each site tells a unique story of Nepal's syncretic culture where Hinduism and Buddhism have coexisted harmoniously for centuries.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    Your expert guide will bring these ancient stones to life with stories of kings and gods, tales of craftsmanship and devotion, and insights into the living traditions that continue today. You'll witness artisans at work, explore narrow cobblestone streets, sample traditional Newari cuisine, and experience the warm hospitality of the Nepali people. This <strong>Kathmandu Valley UNESCO tour</strong> is perfect for culture enthusiasts, history buffs, photographers, and anyone seeking to understand the soul of Nepal.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Tour Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Visit all 7 UNESCO World Heritage Sites in the Kathmandu Valley",
                    "Explore Kathmandu Durbar Square and see the Living Goddess Kumari",
                    "Witness Hindu rituals and cremation ceremonies at Pashupatinath Temple",
                    "Circumambulate the massive Boudhanath Stupa with Tibetan monks",
                    "Climb Swayambhunath (Monkey Temple) for panoramic valley views",
                    "Discover Patan's finest Newari architecture and metal crafts",
                    "Step back in time at medieval Bhaktapur and its Pottery Square",
                    "Visit the ancient Changunarayan Temple dating to the 4th century",
                    "Watch traditional artisans create Thanka paintings and metal statues",
                    "Experience a farewell Newari cultural dinner with dance performance",
                  ].map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]"
                    >
                      <span className="text-[#0f2940] font-medium text-xs md:text-base leading-tight">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Best Season */}
              <section className="mb-6 md:mb-12">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Best Time to Visit</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
                  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                        <h3 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Mar-May)</h3>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Pleasant temperatures and blooming flowers. Clear mornings for photography. Ideal for exploring heritage sites comfortably.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Excellent</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <h3 className="font-bold text-[#0f2940] text-xs md:text-base">Autumn (Sep-Nov)</h3>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Crystal-clear skies, perfect temperatures, and vibrant festivals including Dashain and Tihar. Peak cultural season.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Snowflake className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />
                        <h3 className="font-bold text-[#0f2940] text-xs md:text-base">Winter (Dec-Feb)</h3>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Crisp clear air, cool sunny days, and fewer crowds. Excellent for photography with clear mountain views from the valley.
                      </p>
                      <Badge className="bg-blue-100 text-blue-700 border-none text-[8px] md:text-xs">Good</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: Monsoon (Jun-Aug) brings lush green landscapes but occasional rain. Heritage sites are still accessible with umbrella/raincoat.</p>
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
                          aria-label={`Toggle day ${day.day} itinerary details`}
                        >
                          <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex flex-col items-center justify-center shrink-0">
                            <span className="text-[8px] md:text-[10px] font-bold text-[#0f2940] uppercase">Day</span>
                            <span className="text-base md:text-xl font-bold text-[#0f2940] leading-none">{day.day}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-[#0f2940] text-xs md:text-base truncate">{day.title}</h3>
                            <div className="flex flex-wrap gap-1 md:gap-3 text-xs text-slate-500 mt-0.5 md:mt-1">
                              <span className="flex items-center gap-0.5 md:gap-1 text-[10px] md:text-xs">
                                <TrendingUp className="w-2.5 h-2.5 md:w-3 md:h-3" /> {day.altitude}
                              </span>
                              <span className="flex items-center gap-0.5 md:gap-1 text-[10px] md:text-xs">
                                <Backpack className="w-2.5 h-2.5 md:w-3 md:h-3" /> {day.distance}
                              </span>
                            </div>
                          </div>
                          <ChevronDown
                            className={`w-3 h-3 md:w-5 md:h-5 text-slate-400 transition-transform shrink-0 ${
                              expandedDays.includes(day.day) ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {expandedDays.includes(day.day) && (
                          <div className="px-2 md:px-4 pb-2 md:pb-4 border-t border-[#C5E0ED]/20">
                            <p className="text-slate-600 text-[10px] md:text-sm leading-relaxed pt-2 md:pt-4 mb-2 md:mb-4">{day.description}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-2 md:mb-4">
                              <div className="flex items-center gap-2 text-xs text-slate-600 bg-[#f8fbfc] rounded-lg p-2 md:p-3">
                                <Tent className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" />
                                <span className="text-[10px] md:text-xs"><strong>Overnight:</strong> {day.overnight}</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-slate-600 bg-[#f8fbfc] rounded-lg p-2 md:p-3">
                                <Utensils className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" />
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
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">What's Included in This Nepal Heritage Tour</h2>
                <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                  <Card className="bg-green-50/50 border-green-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-6">
                      <h3 className="font-bold text-green-800 mb-2 md:mb-4 flex items-center gap-2 text-xs md:text-base">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" /> Cost Includes
                      </h3>
                      <ul className="space-y-1 md:space-y-2">
                        {includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-[10px] md:text-sm text-slate-600">
                            <CheckCircle2 className="w-2.5 h-2.5 md:w-4 md:h-4 text-green-600 shrink-0 mt-0.5" />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-red-50/50 border-red-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-6">
                      <h3 className="font-bold text-red-800 mb-2 md:mb-4 flex items-center gap-2 text-xs md:text-base">
                        <XCircle className="w-4 h-4 md:w-5 md:h-5" /> Cost Excludes
                      </h3>
                      <ul className="space-y-1 md:space-y-2">
                        {excludes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-[10px] md:text-sm text-slate-600">
                            <XCircle className="w-2.5 h-2.5 md:w-4 md:h-4 text-red-500 shrink-0 mt-0.5" />
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
                <AlertTriangle className="w-4 h-4 md:w-6 md:h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-800 mb-1 md:mb-2 text-xs md:text-base">Important Information</h4>
                  <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                    <li>• <strong>Dress Code:</strong> Modest dress is required at Hindu and Buddhist temples. Shoulders and knees should be covered. Remove shoes before entering temple premises.</li>
                    <li>• <strong>Photography:</strong> Photography is permitted in most areas, but some temple interiors may restrict it. Always ask permission before photographing people, especially sadhus and during cremation ceremonies at Pashupatinath.</li>
                    <li>• <strong>Physical Requirements:</strong> This tour involves walking on uneven stone streets and climbing stairs at temples (Swayambhunath has 365 steps). Comfortable walking shoes are essential.</li>
                    <li>• <strong>Cultural Sensitivity:</strong> Hinduism and Buddhism are living traditions. Be respectful of worshippers, avoid touching religious artifacts, and follow your guide's instructions on proper behavior.</li>
                    <li>• <strong>Travel Insurance:</strong> Mandatory - ensure your policy covers medical emergencies and trip cancellation.</li>
                    <li>• <strong>Visa:</strong> Nepal visa available on arrival at Tribhuvan International Airport. Bring two passport photos and cash for visa fees ($30 for 15 days, $50 for 30 days).</li>
                  </ul>
                </div>
              </div>

              {/* Photo Gallery */}
              <section className="mb-6 md:mb-12" id="gallery">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Photo Gallery - Kathmandu Valley Heritage Sites</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3">
                  {gallery.map((image, i) => (
                    <div
                      key={i}
                      className="relative h-24 md:h-48 rounded-lg md:rounded-xl overflow-hidden group cursor-pointer"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
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
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Frequently Asked Questions About Kathmandu Valley Tour</h2>
                <div className="space-y-2 md:space-y-4">
                  {[
                    {
                      q: "What are the 7 UNESCO World Heritage Sites included?",
                      a: "The Kathmandu Valley has seven UNESCO World Heritage Sites: Kathmandu Durbar Square, Patan Durbar Square, Bhaktapur Durbar Square, Swayambhunath Stupa (Monkey Temple), Boudhanath Stupa, Pashupatinath Temple, and Changunarayan Temple. All seven are included in this tour.",
                    },
                    {
                      q: "Is this tour suitable for elderly or less mobile travelers?",
                      a: "Yes, this tour can be customized for different mobility levels. While some sites require walking on uneven streets and climbing stairs (Swayambhunath has 365 steps), alternative routes and vehicle access can be arranged. Please inform us of any mobility concerns when booking so we can accommodate accordingly.",
                    },
                    {
                      q: "What is the Living Goddess Kumari?",
                      a: "The Kumari is a prepubescent girl selected from the Newari Buddhist community who is worshipped as the living incarnation of the goddess Taleju. She lives in the Kumari Ghar palace at Kathmandu Durbar Square and appears at certain times of day to bless visitors. Seeing her is considered very auspicious.",
                    },
                    {
                      q: "Can I see cremations at Pashupatinath?",
                      a: "Yes, open-air cremations take place daily on the banks of the Bagmati River at Pashupatinath. Photography of the cremation itself is strictly prohibited out of respect, but observing from a distance is acceptable. Your guide will explain the Hindu death rituals and their spiritual significance.",
                    },
                    {
                      q: "What should I wear for temple visits?",
                      a: "Modest clothing covering shoulders and knees is required at all temples. Comfortable walking shoes are essential as you'll be on your feet for several hours. You'll need to remove shoes before entering temple premises, so slip-on shoes are convenient.",
                    },
                    {
                      q: "Are meals included and what kind of food can I expect?",
                      a: "All meals are included as per the itinerary. You'll experience a variety of Nepali cuisine including dal bhat (lentil soup with rice), Newari specialties, momo dumplings, and international options. The farewell dinner includes a traditional Newari cultural performance. Vegetarian and other dietary requirements can be accommodated with advance notice.",
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