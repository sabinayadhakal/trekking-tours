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
  TreePine,
  Bird,
  Flower2,
  Footprints,
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
    description: "Welcome to Nepal! Upon arrival at Tribhuvan International Airport, our representative will greet you and transfer you to your hotel in Kathmandu. After check-in, attend a comprehensive tour briefing where we'll discuss the itinerary, cultural significance of sites, and handle any arrangements. Evening free to explore the vibrant streets of Thamel. Welcome dinner with traditional Nepali cuisine where you'll meet your tour guide.",
    overnight: "Hotel in Kathmandu",
    meals: "Dinner",
    highlights: ["Airport pickup", "Tour briefing", "Welcome dinner", "Thamel exploration"],
  },
  {
    day: 2,
    title: "Kathmandu Valley Heritage Tour",
    altitude: "1,350m",
    distance: "Full day tour",
    description: "After breakfast, begin your heritage journey at Kathmandu Durbar Square, the historic seat of royalty. Explore the ancient palace complex with its intricately carved wooden windows, including the famous Kumari Ghar—home to the Living Goddess Kumari. Continue to Swayambhunath Stupa (Monkey Temple), perched on a hilltop west of the city. Climb the 365 steps past meditation shrines and prayer wheels to reach the main stupa with its all-seeing eyes of Buddha. After lunch, visit Pashupatinath Temple, one of the holiest Hindu temples dedicated to Lord Shiva. Observe afternoon rituals and the fascinating sadhus (holy men). End the day at Boudhanath Stupa, one of the largest spherical stupas in South Asia and the center of Tibetan Buddhism in Nepal. Circumambulate the massive mandala while spinning prayer wheels. Return to hotel for dinner.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Kathmandu Durbar Square", "Swayambhunath Stupa", "Pashupatinath Temple", "Boudhanath Stupa"],
  },
  {
    day: 3,
    title: "Drive to Pokhara - Lakeside Paradise",
    altitude: "1,350m → 820m",
    distance: "6-7 hrs drive / 200km",
    description: "After breakfast, begin the scenic drive to Pokhara, Nepal's most beautiful lakeside city. The journey follows the Prithvi Highway through river valleys, terraced farmlands, and subtropical forests. Stop en-route at viewpoints overlooking the Marsyangdi and Trishuli Rivers. On clear days, enjoy distant views of the Annapurna and Manaslu ranges. Arrive in Pokhara by mid-afternoon and check into your lakeside hotel. Evening free to explore the Lakeside promenade with its cafes, shops, and restaurants. Optional boat ride on Phewa Lake at sunset. Overnight in Pokhara.",
    overnight: "Hotel in Pokhara",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic drive", "River valley views", "Lakeside promenade", "Sunset at Phewa Lake"],
  },
  {
    day: 4,
    title: "Sarangkot Sunrise & Pokhara Valley Exploration",
    altitude: "820m → 1,592m → 820m",
    distance: "1 hr drive each way",
    description: "Pre-dawn departure (4:30 AM) to Sarangkot hill station for the most spectacular sunrise photography in Nepal. Watch the first light illuminate the Annapurna range including Annapurna South, Annapurna I, Machhapuchhre (Fishtail), and Dhaulagiri. After sunrise, return to hotel for breakfast. Mid-morning, visit Davis Falls, an interesting waterfall that disappears into underground caves, and the adjacent Gupteshwor Cave with its massive shivalinga. After lunch, explore the International Mountain Museum for exhibits on Himalayan mountaineering and culture. Late afternoon, enjoy a boat ride on Phewa Lake to the Tal Barahi Temple, a two-story pagoda in the middle of the lake. Capture the reflection of Machhapuchhre mountain in the calm lake waters. Overnight in Pokhara.",
    overnight: "Hotel in Pokhara",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Sarangkot sunrise", "Annapurna panorama", "Davis Falls", "Phewa Lake boat ride"],
  },
  {
    day: 5,
    title: "Drive to Lumbini - Birthplace of Buddha",
    altitude: "820m → 150m",
    distance: "5-6 hrs drive / 180km",
    description: "After breakfast, drive south to Lumbini, the birthplace of Lord Buddha and one of the holiest pilgrimage sites in the world. The journey descends from the hills to the flat Terai plains, with changing landscapes from subtropical forests to agricultural fields. Arrive in Lumbini by early afternoon. Visit the Mayadevi Temple, the sacred site where Queen Mayadevi gave birth to Siddhartha Gautama in 623 BCE. Explore the excavated remains of ancient monasteries and the marker stone depicting the exact birthplace. See the Ashoka Pillar, erected by Emperor Ashoka in 249 BCE to commemorate his pilgrimage. In the evening, visit the World Peace Pagoda and stroll through the monastic zone with temples built by Buddhist countries from around the world including Thailand, Japan, Myanmar, and Sri Lanka. Overnight in Lumbini.",
    overnight: "Hotel in Lumbini",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Mayadevi Temple", "Ashoka Pillar", "Sacred Garden", "International Monasteries"],
  },
  {
    day: 6,
    title: "Lumbini Exploration & Drive to Chitwan",
    altitude: "150m → 415m",
    distance: "4-5 hrs drive / 120km",
    description: "Early morning visit to the sacred garden for meditation and peaceful atmosphere. Explore more international monasteries including the magnificent Myanmar Temple, Chinese Temple, and the Eternal Peace Flame. Visit the Lumbini Museum housing artifacts and manuscripts related to Buddha's life. After lunch, drive east to Chitwan National Park, Nepal's first national park and UNESCO World Heritage Site. The journey continues through the Terai plains with rural landscapes and traditional Tharu villages. Arrive at your jungle resort by late afternoon. Welcome drink and orientation about safari activities. Evening Tharu cultural dance performance. Overnight at jungle resort.",
    overnight: "Jungle Resort in Chitwan",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Sacred Garden meditation", "International monasteries", "Tharu cultural dance", "Jungle resort"],
  },
  {
    day: 7,
    title: "Chitwan National Park Safari - Wildlife & Nature",
    altitude: "415m",
    distance: "Full day safari",
    description: "Early morning jungle walk or bird watching tour with naturalist guide. Return to resort for breakfast. After breakfast, embark on a jeep safari into Chitwan National Park for wildlife viewing. The park is home to one-horned rhinoceros, Bengal tigers (rare), leopards, sloth bears, crocodiles, and over 500 bird species. Your naturalist guide will navigate through grasslands and forests for optimal wildlife sightings. After lunch, enjoy a canoe ride along the Rapti River to photograph aquatic birds, crocodiles, and riverside wildlife. Visit the Elephant Breeding Center to learn about conservation efforts and photograph these gentle giants. Late afternoon, enjoy sunset views from the riverbank or an optional elephant safari. Overnight at jungle resort.",
    overnight: "Jungle Resort in Chitwan",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Jeep safari", "One-horned rhinos", "Canoe ride", "Elephant Breeding Center"],
  },
  {
    day: 8,
    title: "Return to Kathmandu",
    altitude: "415m → 1,350m",
    distance: "5-6 hrs drive / 150km + 25 min flight",
    description: "After breakfast, transfer to Bharatpur Airport for a scenic 25-minute flight back to Kathmandu. The short flight offers aerial views of the Himalayan foothills and terraced landscapes. Alternatively, you may choose to drive (6-7 hours) through scenic countryside. Upon arrival in Kathmandu, transfer to your hotel. Free afternoon for last-minute souvenir shopping, personal exploration, or optional activities. Evening farewell dinner at a traditional Nepali restaurant with cultural music and dance performance. Celebrate your incredible journey through Nepal's cultural and natural heritage. Overnight in Kathmandu.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic flight", "Kathmandu return", "Farewell dinner", "Cultural performance"],
  },
  {
    day: 9,
    title: "Departure",
    altitude: "1,350m",
    distance: "-",
    description: "Transfer to Tribhuvan International Airport for your departure flight. Our representative will ensure you reach the airport with plenty of time. Bid farewell to Nepal with memories of exploring ancient temples, witnessing Himalayan sunrises, walking in the footsteps of Buddha, and encountering exotic wildlife in the jungle. Namaste and until we meet again!",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Airport transfer", "Departure assistance", "Fond farewells"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "7 nights hotel accommodation (3-star with breakfast) as per itinerary",
  "1 night jungle resort accommodation in Chitwan with all meals",
  "All meals during the tour as specified (breakfast, lunch, dinner)",
  "Experienced English-speaking tour guide (government licensed)",
  "Local guides for heritage sites and wildlife safaris",
  "All ground transportation as per itinerary in private vehicle",
  "Domestic flight: Bharatpur to Kathmandu",
  "All monument entrance fees (UNESCO World Heritage Sites)",
  "Kathmandu Durbar Square entrance fee",
  "Swayambhunath entrance fee",
  "Pashupatinath Temple entrance fee",
  "Boudhanath Stupa entrance fee",
  "Sarangkot sunrise transport",
  "Davis Falls and Gupteshwor Cave entrance",
  "International Mountain Museum entrance",
  "Phewa Lake boat ride",
  "Lumbini Sacred Garden entrance",
  "Mayadevi Temple entrance",
  "Lumbini Museum entrance",
  "All safari activities in Chitwan National Park (jeep safari, canoe ride, Elephant Breeding Center)",
  "Tharu cultural dance performance",
  "First aid medical kit",
  "Farewell dinner with cultural performance",
  "All government taxes and official expenses",
  "Emergency contact number 24/7",
  "Complimentary map of Nepal",
  "Bottled water during tours",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover emergency evacuation)",
  "Meals not specified in itinerary",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, etc.)",
  "Tips and gratuities for guides, drivers, and safari staff (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, political unrest)",
  "Photography fees at certain temples (where applicable)",
  "Optional activities not mentioned in itinerary",
  "International phone calls and internet charges",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Boudhanath Stupa",
    caption: "Boudhanath Stupa - Center of Tibetan Buddhism in Kathmandu",
  },
  {
    src: "https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?q=80&w=2072&auto=format&fit=crop",
    alt: "Sarangkot Sunrise",
    caption: "Sunrise over Annapurna range from Sarangkot, Pokhara",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    alt: "Phewa Lake",
    caption: "Phewa Lake with Machhapuchhre reflection, Pokhara",
  },
  {
    src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    alt: "Mayadevi Temple",
    caption: "Mayadevi Temple - Birthplace of Buddha, Lumbini",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "One-horned Rhinoceros",
    caption: "One-horned rhinoceros in Chitwan National Park",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Swayambhunath Stupa",
    caption: "Swayambhunath Stupa (Monkey Temple), Kathmandu",
  },
];

export default function KathmanduPokharaLumbiniChitwanTourPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Kathmandu, Pokhara, Lumbini & Chitwan Tour - Himkala Adventure");
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
                  >
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white"
                    onClick={() => handleShare("twitter")}
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-slate-800 hover:bg-slate-900 text-white"
                    onClick={handleCopyLink}
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
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop"
            alt="Kathmandu Pokhara Lumbini Chitwan Tour"
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
                <MapPin className="w-3 h-3 mr-1" /> Multi-Day City Tour
              </Badge>
              <Badge className="bg-green-100 text-green-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Easy
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Compass className="w-3 h-3 mr-1" /> 4 Destinations
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              KATHMANDU, POKHARA, LUMBINI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                & CHITWAN GRAND TOUR
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              Experience the complete essence of Nepal—from ancient temples and Himalayan sunrises to the birthplace of Buddha 
              and wildlife encounters in the jungle—on this comprehensive cultural and natural journey.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 md:py-12">
        <div className="container mx-auto px-3 md:px-6 max-w-full overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-4 md:gap-10">
            {/* Mobile Sticky Book Now Bar */}
            <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-[#C5E0ED]/30 shadow-sm py-2">
              <div className="container mx-auto px-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400 line-through">$1,850</div>
                    <div className="text-lg font-bold text-[#0f2940]">$1,595</div>
                  </div>
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] text-white font-bold rounded-full px-4 py-1.5 text-xs">
                      <Heart className="w-3 h-3 mr-1" /> Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar - Hidden on mobile */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24 space-y-4 md:space-y-6">
                {/* Price Card */}
                <Card className="bg-gradient-to-br from-[#0f2940] to-[#1a4166] border-none rounded-xl md:rounded-2xl overflow-hidden">
                  <CardContent className="p-4 md:p-6">
                    <div className="text-center mb-4 md:mb-6">
                      <span className="text-white/50 text-sm line-through">$1,850</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$1,595</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $255</Badge>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>9 Days / 8 Nights</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Best: Sept-May (Year-round)</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Group Size: 2-15</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>4 Major Destinations</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <Map className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Max Altitude: 1,592m</span>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-xs md:text-base">
                        <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Book This Tour
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 rounded-full h-10 md:h-12 text-xs md:text-base">
                        <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Enquire Now
                      </Button>
                    </Link>
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
                        <span className="font-medium text-[#0f2940]">Kathmandu, Pokhara, Lumbini, Chitwan</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Tour Type</span>
                        <span className="font-medium text-[#0f2940]">Cultural, Pilgrimage, Wildlife</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">UNESCO Sites</span>
                        <span className="font-medium text-[#0f2940]">5+ Sites</span>
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
                      >
                        <Facebook className="w-3 h-3 md:w-4 md:h-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg md:rounded-xl text-[8px] md:text-xs"
                        onClick={() => handleShare("twitter")}
                      >
                        <Twitter className="w-3 h-3 md:w-4 md:h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg md:rounded-xl text-[8px] md:text-xs"
                        onClick={handleCopyLink}
                      >
                        {copied ? <Check className="w-3 h-3 md:w-4 md:h-4" /> : <Copy className="w-3 h-3 md:w-4 md:h-4" />}
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
                  className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-lg text-[10px] py-1.5"
                  onClick={() => handleShare("facebook")}
                >
                  <Facebook className="w-3 h-3 mr-1" /> Share
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg text-[10px] py-1.5"
                  onClick={() => handleShare("twitter")}
                >
                  <Twitter className="w-3 h-3 mr-1" /> Tweet
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg text-[10px] py-1.5"
                  onClick={handleCopyLink}
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>

              {/* Overview */}
              <section className="mb-6 md:mb-12" id="overview">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Overview</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The <strong>Kathmandu, Pokhara, Lumbini & Chitwan Grand Tour</strong> is a comprehensive 9-day journey that showcases the incredible diversity of Nepal—from ancient cultural heritage and spiritual pilgrimage to stunning mountain landscapes and wildlife adventures. This tour is designed for travelers who want to experience the complete essence of Nepal in a single, well-paced itinerary.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    Begin in the Kathmandu Valley, exploring UNESCO World Heritage Sites including the living goddess Kumari, the sacred Hindu temple of Pashupatinath, and the massive Buddhist stupa of Boudhanath. Travel to the lakeside paradise of Pokhara for sunrise over the Annapurna Himalayas from Sarangkot and serene boat rides on Phewa Lake. Journey south to Lumbini, the birthplace of Lord Buddha, where you'll walk in the footsteps of the enlightened one through the sacred garden and international monasteries. Conclude in Chitwan National Park for thrilling wildlife safaris, encountering one-horned rhinoceros, exotic birds, and experiencing Tharu village culture.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    This tour offers the perfect balance of culture, nature, and adventure with comfortable accommodations, expert guiding, and seamless logistics. Whether you're a history enthusiast, spiritual seeker, nature lover, or wildlife photographer, this journey through Nepal's heartland will leave you with unforgettable memories and a deep appreciation for this remarkable country.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Tour Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Explore UNESCO World Heritage Sites in Kathmandu Valley including Swayambhunath, Pashupatinath, and Boudhanath",
                    "Witness spectacular sunrise over the Annapurna range from Sarangkot, Pokhara",
                    "Boat ride on Phewa Lake with reflections of Machhapuchhre (Fishtail) mountain",
                    "Visit Lumbini, the birthplace of Lord Buddha and walk in the sacred garden",
                    "Explore international monasteries built by Buddhist countries from around the world",
                    "Jeep safari in Chitwan National Park to see one-horned rhinoceros and exotic wildlife",
                    "Canoe ride along the Rapti River to photograph crocodiles and aquatic birds",
                    "Experience Tharu cultural dance and learn about indigenous village life",
                    "Scenic mountain flight from Bharatpur to Kathmandu with aerial views",
                    "Farewell dinner with traditional Nepali cultural performance",
                  ].map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]"
                    >
                      <Compass className="w-3 h-3 md:w-4 h-4 text-[#2d6a8a] shrink-0" />
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
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Mar-May)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Pleasant temperatures, blooming rhododendrons, and clear mountain views. Ideal for all destinations with excellent wildlife viewing in Chitwan.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Excellent</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Autumn (Sep-Nov)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Crystal-clear skies, perfect temperatures, and vibrant festivals including Dashain and Tihar. Peak season for mountain views and cultural experiences.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Snowflake className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Winter (Dec-Feb)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Crisp clear air, excellent mountain views, and cool sunny days. Good for sightseeing with fewer crowds. Chitwan remains pleasant for wildlife viewing.
                      </p>
                      <Badge className="bg-blue-100 text-blue-700 border-none text-[8px] md:text-xs">Good</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: Monsoon (Jun-Aug) brings lush green landscapes but occasional rain. Lumbini and Chitwan are still accessible with umbrella/raincoat. Pokhara mountain views may be limited.</p>
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
                        >
                          <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex flex-col items-center justify-center shrink-0">
                            <span className="text-[8px] md:text-[10px] font-bold text-[#0f2940] uppercase">Day</span>
                            <span className="text-base md:text-xl font-bold text-[#0f2940] leading-none">{day.day}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-[#0f2940] text-xs md:text-base truncate">{day.title}</h4>
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
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">What's Included</h2>
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
                    <li>• <strong>Dress Code:</strong> Modest dress is required at temples and religious sites. Shoulders and knees should be covered. Remove shoes before entering temple premises.</li>
                    <li>• <strong>Photography:</strong> Photography is permitted in most areas, but some temple interiors may restrict it. Always ask permission before photographing people, especially sadhus and during rituals.</li>
                    <li>• <strong>Physical Requirements:</strong> This tour involves walking on uneven stone streets, climbing stairs at temples, and walking on jungle trails. Comfortable walking shoes are essential.</li>
                    <li>• <strong>Wildlife Safari:</strong> Wildlife sightings are subject to nature. While Chitwan offers excellent opportunities, animals are wild and sightings cannot be guaranteed. Your naturalist will maximize your chances.</li>
                    <li>• <strong>Travel Insurance:</strong> Mandatory - ensure your policy covers medical emergencies, trip cancellation, and evacuation.</li>
                    <li>• <strong>Visa:</strong> Nepal visa available on arrival at Tribhuvan International Airport. Bring two passport photos and cash for visa fees ($30 for 15 days, $50 for 30 days).</li>
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
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 33vw"
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
                      q: "Is this tour suitable for families with children?",
                      a: "Yes, this tour is very family-friendly and suitable for children of all ages. The activities are varied and engaging for kids—from exploring temples and monasteries to boat rides on the lake, visiting the elephant breeding center, and jungle safaris. Children under 10 receive discounted rates. Please inquire about family pricing.",
                    },
                    {
                      q: "What is the accommodation like?",
                      a: "We use carefully selected 3-star hotels in Kathmandu, Pokhara, and Lumbini with modern amenities, comfortable rooms, and attached bathrooms. In Chitwan, you'll stay at a jungle resort with rustic charm and all necessary facilities. Upgrades to 4 or 5-star properties are available upon request for an additional cost.",
                    },
                    {
                      q: "Can I see tigers in Chitwan National Park?",
                      a: "While Bengal tigers are present in Chitwan, they are elusive and sightings are rare (approximately 10-15% chance). Your best chance is during early morning jeep safaris. One-horned rhinoceros sightings are almost guaranteed (95%+ chance). The park is home to many other wildlife species including deer, monkeys, crocodiles, and over 500 bird species.",
                    },
                    {
                      q: "What is the significance of Lumbini?",
                      a: "Lumbini is one of the holiest places in the world for Buddhists as it is the birthplace of Siddhartha Gautama, who became Lord Buddha, in 623 BCE. The Mayadevi Temple marks the exact spot where Queen Mayadevi gave birth. Emperor Ashoka visited in 249 BCE and erected a pillar commemorating the site. Today, countries around the world have built beautiful monasteries representing their Buddhist traditions.",
                    },
                    {
                      q: "How much walking is involved?",
                      a: "This is an easy tour with moderate walking. Heritage sites require walking on uneven stone streets and climbing some stairs (approximately 2-3 hours per day). The Sarangkot sunrise involves a short walk to viewpoints. Safari activities include jeep rides and short jungle walks. Comfortable walking shoes are essential.",
                    },
                    {
                      q: "Can I extend the tour with additional activities?",
                      a: "Absolutely! Popular extensions include: trekking in the Annapurna region (3-14 days), white water rafting on the Trishuli River, paragliding in Pokhara, mountain flight over Everest, or visiting additional cities like Tansen or Janakpur. Please contact us for customization options.",
                    },
                  ].map((faq, i) => (
                    <Card key={i} className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-lg md:rounded-xl">
                      <CardContent className="p-2 md:p-5">
                        <h4 className="font-bold text-[#0f2940] mb-1 md:mb-2 text-xs md:text-base">{faq.q}</h4>
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