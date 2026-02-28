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
  Sparkles,
  Scroll,
  Crown,
  Building2,
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
    description: "Welcome to Nepal! Upon arrival at Tribhuvan International Airport, our representative will greet you and transfer you to your hotel in Kathmandu. After check-in, attend a comprehensive tour briefing where we'll discuss the itinerary, the significance of temples and stupas in Nepali culture, and handle any arrangements. Evening free to explore the vibrant streets of Thamel. Welcome dinner with traditional Nepali cuisine where you'll meet your tour guide.",
    overnight: "Hotel in Kathmandu",
    meals: "Dinner",
    highlights: ["Airport pickup", "Tour briefing", "Welcome dinner", "Thamel exploration"],
  },
  {
    day: 2,
    title: "Swayambhunath & Kathmandu Durbar Square",
    altitude: "1,350m",
    distance: "Full day tour",
    description: "After breakfast, begin your spiritual journey at Swayambhunath Stupa (Monkey Temple), one of the most sacred Buddhist sites in Nepal. Perched on a hilltop west of Kathmandu, this ancient stupa dates back to the 5th century. Climb the 365 steps past meditation shrines, prayer wheels, and watching monkeys. At the summit, circumambulate the main stupa with its all-seeing eyes of Buddha, representing wisdom and compassion. Visit the surrounding shrines, monasteries, and enjoy panoramic views of the Kathmandu Valley. After lunch, visit Kathmandu Durbar Square, the historic seat of royalty. Explore the ancient palace complex with its intricately carved wooden windows, including the famous Kumari Ghar—home to the Living Goddess Kumari. Visit the Taleju Temple, Hanuman Dhoka Palace, and numerous other temples dedicated to Hindu deities. Evening return to hotel.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Swayambhunath Stupa", "All-seeing eyes of Buddha", "Kumari Living Goddess", "Hanuman Dhoka Palace"],
  },
  {
    day: 3,
    title: "Pashupatinath Temple - Sacred Hindu Shrine",
    altitude: "1,350m",
    distance: "Full day tour",
    description: "Early morning visit to Pashupatinath Temple, the holiest Hindu temple in Nepal dedicated to Lord Shiva. This UNESCO World Heritage Site stretches along the banks of the sacred Bagmati River. Observe morning rituals, including the worship of the Shiva Linga, and the fascinating sadhus (holy men) with their distinctive face paint and dreadlocks. Walk along the riverbank to witness cremation ceremonies and understand Hindu beliefs about death and rebirth. Visit the surrounding temples including the Guhyeshwari Temple and the Ram Temple. Your guide will explain the mythology, symbolism, and rituals of this sacred site. Photography is permitted in the outer areas. Return to hotel in the afternoon. Evening free for personal reflection or exploration.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Pashupatinath Temple", "Bagmati River rituals", "Sadhus (holy men)", "Cremation ceremonies"],
  },
  {
    day: 4,
    title: "Boudhanath Stupa - Center of Tibetan Buddhism",
    altitude: "1,350m",
    distance: "Full day tour",
    description: "After breakfast, visit Boudhanath Stupa, one of the largest spherical stupas in South Asia and the center of Tibetan Buddhism in Nepal. This UNESCO World Heritage Site is a massive mandala representing the Buddhist cosmos. Circumambulate the stupa while spinning the 108 prayer wheels, sending prayers to the universe. Observe Tibetan monks in maroon robes, pilgrims prostrating, and locals engaged in devotion. Visit the surrounding monasteries including the famous Shechen Monastery and Thrangu Tashi Yangtse Monastery. Your guide will explain Buddhist symbolism, the meaning of prayer flags, and the significance of the all-seeing eyes. Optional meditation session at a monastery. Evening return to hotel.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Boudhanath Stupa", "Tibetan Buddhist culture", "Monastery visits", "Prayer wheel circumambulation"],
  },
  {
    day: 5,
    title: "Patan - City of Temples & Monasteries",
    altitude: "1,350m",
    distance: "Half day tour",
    description: "After breakfast, drive to Patan (Lalitpur), the city of fine arts across the Bagmati River. Patan Durbar Square is a stunning collection of temples, statues, and palaces showcasing the finest Newari architecture. Visit the Krishna Temple built entirely of stone, the Hiranya Varna Mahavihar (Golden Temple), and the many intricately carved Hindu and Buddhist temples. Explore the Patan Museum housed in the ancient royal palace, featuring magnificent bronze statues and religious artifacts. Visit the Mahabouddha Temple with its thousands of Buddha images and the Kumbheshwar Temple, one of the few five-story pagodas in Nepal. Watch local artisans at work creating traditional metal statues of deities. Return to Kathmandu by afternoon. Evening at leisure.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Patan Durbar Square", "Krishna Temple", "Golden Temple", "Mahabouddha Temple"],
  },
  {
    day: 6,
    title: "Bhaktapur - Medieval Temple City",
    altitude: "1,350m → 1,401m",
    distance: "Full day tour (1 hr drive each way)",
    description: "After breakfast, drive to Bhaktapur, the best-preserved medieval city in Nepal and a UNESCO World Heritage Site. Known as the 'City of Devotees,' Bhaktapur is home to numerous temples and religious structures. Explore Bhaktapur Durbar Square with its Palace of 55 Windows, the magnificent Golden Gate, and the towering Nyatapola Temple—Nepal's tallest pagoda at five stories, dedicated to the goddess Siddhi Lakshmi. Visit the Bhairavnath Temple with its three-story pagoda, and the Dattatreya Temple with its intricate woodcarvings. Wander through narrow cobblestone streets to Pottery Square, where artisans create traditional clay figures of deities and everyday items. After lunch, drive to the hilltop Changunarayan Temple, the oldest Hindu temple in Nepal dating back to the 4th century. Dedicated to Lord Vishnu, this temple features exquisite stone, wood, and metal craft depicting various incarnations. Return to Kathmandu by evening.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Nyatapola Temple", "Changunarayan Temple", "Pottery Square", "Golden Gate"],
  },
  {
    day: 7,
    title: "Flight to Pokhara & Peace Temple",
    altitude: "1,350m → 820m",
    distance: "30 min flight + tour",
    description: "After breakfast, transfer to Kathmandu Airport for a scenic 30-minute flight to Pokhara. Enjoy aerial views of the Himalayan foothills during the flight. Upon arrival, transfer to your lakeside hotel. After lunch, visit the World Peace Pagoda (Shanti Stupa), a magnificent Buddhist stupa perched on a hilltop overlooking Pokhara Valley. Built by Japanese monks, this white dome stupa features golden Buddha statues and offers panoramic views of the Annapurna range, Phewa Lake, and the city. Hike up through forest trails (or drive partway) and circumambulate the stupa while enjoying the peaceful atmosphere. Evening return to hotel. Free time to explore Lakeside's cafes and shops.",
    overnight: "Hotel in Pokhara",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic mountain flight", "World Peace Pagoda", "Annapurna views", "Phewa Lake panorama"],
  },
  {
    day: 8,
    title: "Sarangkot Sunrise & Pokhara Temples",
    altitude: "820m → 1,592m → 820m",
    distance: "1 hr drive each way",
    description: "Pre-dawn departure (4:30 AM) to Sarangkot hill station for spectacular sunrise over the Annapurna range. Watch the first light illuminate Annapurna South, Annapurna I, Machhapuchhre (Fishtail), and Dhaulagiri. After sunrise, return to hotel for breakfast. Mid-morning, visit Bindhyabasini Temple, Pokhara's most important Hindu temple dedicated to the goddess Bhagwati. Observe local devotees offering prayers and rituals. Continue to Davis Falls, an interesting waterfall that disappears into underground caves, and the adjacent Gupteshwor Cave with its massive shivalinga—a sacred cave temple dedicated to Lord Shiva. After lunch, enjoy a boat ride on Phewa Lake to the Tal Barahi Temple, a two-story pagoda in the middle of the lake dedicated to the goddess Barahi. This is one of Pokhara's most revered temples. Capture the reflection of Machhapuchhre mountain in the calm lake waters. Overnight in Pokhara.",
    overnight: "Hotel in Pokhara",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Sarangkot sunrise", "Bindhyabasini Temple", "Tal Barahi Temple", "Gupteshwor Cave"],
  },
  {
    day: 9,
    title: "Drive to Lumbini - Birthplace of Buddha",
    altitude: "820m → 150m",
    distance: "5-6 hrs drive / 180km",
    description: "After breakfast, drive south to Lumbini, the birthplace of Lord Buddha and the holiest pilgrimage site in Buddhism. This UNESCO World Heritage Site is the spiritual heart of our journey. The drive descends from the hills to the flat Terai plains, with changing landscapes. Arrive in Lumbini by early afternoon. Visit the Mayadevi Temple, the sacred site where Queen Mayadevi gave birth to Siddhartha Gautama in 623 BCE. Explore the excavated remains of ancient monasteries and the marker stone depicting the exact birthplace. See the Ashoka Pillar, erected by Emperor Ashoka in 249 BCE to commemorate his pilgrimage. In the evening, visit the World Peace Pagoda and stroll through the monastic zone with temples built by Buddhist countries from around the world. Overnight in Lumbini.",
    overnight: "Hotel in Lumbini",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Mayadevi Temple", "Ashoka Pillar", "Sacred Garden", "World Peace Pagoda"],
  },
  {
    day: 10,
    title: "Lumbini Monastery Exploration & Return Flight",
    altitude: "150m → 1,350m",
    distance: "30 min flight + drive",
    description: "Early morning visit to the sacred garden for meditation and peaceful atmosphere—a truly spiritual experience. Explore the international monasteries including the magnificent Myanmar Temple (with its striking architecture), the Chinese Temple, the Tibetan Monastery, the Thai Monastery, and the Eternal Peace Flame. Each represents the unique Buddhist traditions of their countries. Visit the Lumbini Museum housing artifacts and manuscripts related to Buddha's life. After lunch, transfer to Bhairahawa Airport for a scenic 30-minute flight back to Kathmandu. Upon arrival, transfer to your hotel. Evening farewell dinner at a traditional Nepali restaurant with cultural music and dance performance. Celebrate your spiritual journey through Nepal's sacred temples and stupas. Overnight in Kathmandu.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Sacred Garden meditation", "International monasteries", "Scenic flight", "Farewell dinner"],
  },
  {
    day: 11,
    title: "Departure",
    altitude: "1,350m",
    distance: "-",
    description: "Transfer to Tribhuvan International Airport for your departure flight. Our representative will ensure you reach the airport with plenty of time. Bid farewell to Nepal with memories of visiting sacred temples and stupas, witnessing ancient rituals, walking in the footsteps of Buddha, and experiencing the profound spirituality of this remarkable country. May the blessings of the temples and stupas accompany you on your journey home. Namaste and until we meet again!",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Airport transfer", "Departure assistance", "Fond farewells"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "10 nights hotel accommodation (3-star with breakfast) as per itinerary",
  "All meals during the tour as specified (breakfast, lunch, dinner)",
  "Experienced English-speaking tour guide (government licensed, religious heritage expert)",
  "Local guides for heritage sites",
  "All ground transportation as per itinerary in private vehicle",
  "Domestic flights: Kathmandu to Pokhara & Bhairahawa to Kathmandu",
  "All monument entrance fees (temples, stupas, and sacred sites)",
  "Swayambhunath Stupa entrance fee",
  "Kathmandu Durbar Square entrance fee",
  "Pashupatinath Temple entrance fee",
  "Boudhanath Stupa entrance fee",
  "Patan Durbar Square entrance fee and museum",
  "Golden Temple entrance fee",
  "Bhaktapur Durbar Square entrance fee",
  "Changunarayan Temple entrance fee",
  "World Peace Pagoda (Pokhara) entrance",
  "Bindhyabasini Temple donation",
  "Tal Barahi Temple boat ride",
  "Davis Falls and Gupteshwor Cave entrance",
  "Sarangkot sunrise transport",
  "Lumbini Sacred Garden entrance",
  "Mayadevi Temple entrance",
  "Lumbini Museum entrance",
  "All international monasteries in Lumbini",
  "First aid medical kit",
  "Farewell dinner with cultural performance",
  "All government taxes and official expenses",
  "Emergency contact number 24/7",
  "Complimentary map of Nepal",
  "Bottled water during tours",
  "Meditation session at Boudhanath (optional)",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover emergency evacuation)",
  "Meals not specified in itinerary",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, etc.)",
  "Tips and gratuities for guides, drivers, and support staff (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, political unrest)",
  "Photography fees at certain temples (where applicable)",
  "Optional activities not mentioned in itinerary",
  "International phone calls and internet charges",
  "Donations at temples (optional, at your discretion)",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Boudhanath Stupa",
    caption: "Boudhanath Stupa - Sacred Buddhist Stupa in Kathmandu",
  },
  {
    src: "https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?q=80&w=2072&auto=format&fit=crop",
    alt: "Swayambhunath Stupa",
    caption: "Swayambhunath Stupa (Monkey Temple) with all-seeing eyes",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    alt: "Pashupatinath Temple",
    caption: "Pashupatinath Temple on the banks of Bagmati River",
  },
  {
    src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    alt: "Nyatapola Temple Bhaktapur",
    caption: "Nyatapola Temple - Nepal's tallest pagoda in Bhaktapur",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "Mayadevi Temple Lumbini",
    caption: "Mayadevi Temple - Birthplace of Lord Buddha, Lumbini",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "World Peace Pagoda Pokhara",
    caption: "World Peace Pagoda (Shanti Stupa) overlooking Pokhara",
  },
];

export default function NepalTemplesAndStupasTourPage() {
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
    const title = encodeURIComponent("Nepal Temples and Stupas Tour - Sacred Pilgrimage - Himkala Adventure");
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
            alt="Nepal Temples and Stupas Tour"
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
                <MapPin className="w-3 h-3 mr-1" /> Spiritual Pilgrimage Tour
              </Badge>
              <Badge className="bg-green-100 text-green-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Easy
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Sacred Sites
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              NEPAL TEMPLES <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                AND STUPAS TOUR
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              A sacred journey through Nepal's most revered temples and stupas—from ancient Hindu shrines and Buddhist stupas 
              to the birthplace of Buddha, exploring the spiritual heart of the Himalayas.
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
                    <div className="text-xs text-slate-400 line-through">$2,050</div>
                    <div className="text-lg font-bold text-[#0f2940]">$1,795</div>
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
                      <span className="text-white/50 text-sm line-through">$2,050</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$1,795</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $255</Badge>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>11 Days / 10 Nights</span>
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
                        <span>20+ Sacred Sites</span>
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
                        <span className="font-medium text-[#0f2940]">Kathmandu, Patan, Bhaktapur, Pokhara, Lumbini</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Tour Type</span>
                        <span className="font-medium text-[#0f2940]">Spiritual, Pilgrimage, Cultural</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Sacred Sites</span>
                        <span className="font-medium text-[#0f2940]">Swayambhunath, Pashupatinath, Boudhanath, Golden Temple, Nyatapola, Changunarayan, World Peace Pagoda, Bindhyabasini, Tal Barahi, Mayadevi, and more</span>
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
                    The <strong>Nepal Temples and Stupas Tour</strong> is a sacred 11-day pilgrimage through the most revered religious sites of Nepal. From ancient Hindu temples along the Bagmati River to magnificent Buddhist stupas adorned with all-seeing eyes, and from the birthplace of Lord Buddha to hilltop shrines with panoramic Himalayan views, this journey offers a profound exploration of Nepal's spiritual heritage.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    Nepal is a land where Hinduism and Buddhism have coexisted and intertwined for centuries, creating a unique syncretic culture. In the Kathmandu Valley alone, you'll visit Swayambhunath with its 2,000-year history, the sacred Hindu temple of Pashupatinath where sadhus meditate and cremation ceremonies take place, and the massive Boudhanath Stupa where Tibetan monks circumambulate daily. You'll explore the temple squares of Patan and Bhaktapur, each with their own distinct architectural styles and religious significance.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The journey continues to Pokhara, where the World Peace Pagoda overlooks the serene Phewa Lake and the Tal Barahi Temple sits on an island sanctuary. The spiritual climax comes in Lumbini, where you'll walk in the footsteps of Buddha himself at the Mayadevi Temple and explore monasteries built by Buddhist countries from around the world.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    Whether you seek spiritual enlightenment, cultural understanding, or simply the beauty of sacred architecture, this tour offers a deeply moving experience. Your expert guide will explain the mythology, symbolism, and rituals of each site, while allowing time for personal reflection and meditation. This is more than a tour—it's a spiritual journey through the heart of Nepal.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Tour Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Visit Swayambhunath Stupa (Monkey Temple) with its all-seeing eyes of Buddha",
                    "Witness Hindu rituals and cremation ceremonies at Pashupatinath Temple",
                    "Circumambulate Boudhanath Stupa, one of the largest in South Asia",
                    "See the Living Goddess Kumari at Kathmandu Durbar Square",
                    "Explore Patan's Golden Temple and Krishna Temple",
                    "Climb Nepal's tallest pagoda, Nyatapola Temple in Bhaktapur",
                    "Visit Changunarayan Temple, the oldest Hindu temple in Nepal (4th century)",
                    "Meditate at the World Peace Pagoda overlooking Pokhara Valley",
                    "Boat ride to Tal Barahi Temple on Phewa Lake",
                    "Walk in the footsteps of Buddha at Mayadevi Temple, Lumbini",
                    "Explore international monasteries in Lumbini (Thailand, Myanmar, China, Tibet)",
                    "Witness sunrise over the Annapurna range from Sarangkot",
                    "Visit sacred caves: Gupteshwor Cave with its Shiva Linga",
                    "Observe prayer flag ceremonies and spinning prayer wheels",
                    "Optional meditation sessions at Buddhist monasteries",
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
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Mar-May)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Pleasant temperatures, blooming flowers, and clear mountain views. Ideal for temple exploration and photography. Special festivals like Buddha Jayanti.
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
                        Crystal-clear skies, perfect temperatures, and major festivals including Dashain and Tihar. Temples are beautifully decorated and full of devotees.
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
                        Crisp clear air, excellent mountain views, and fewer crowds. Cool but sunny days perfect for exploring temples without the heat.
                      </p>
                      <Badge className="bg-blue-100 text-blue-700 border-none text-[8px] md:text-xs">Good</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: Monsoon (Jun-Aug) brings lush green landscapes but occasional rain. Temple visits are still possible with umbrella/raincoat. Lumbini remains accessible.</p>
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
                  <h4 className="font-bold text-amber-800 mb-1 md:mb-2 text-xs md:text-base">Important Information for Pilgrims</h4>
                  <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                    <li>• <strong>Dress Code:</strong> Modest dress is required at all temples and stupas. Shoulders and knees must be covered. Remove shoes before entering temple premises. Carry socks for comfort.</li>
                    <li>• <strong>Photography:</strong> Photography is permitted in most areas, but some temple interiors restrict it. Always ask permission before photographing people, especially sadhus and during rituals. Flash photography is often prohibited inside sanctums.</li>
                    <li>• <strong>Temple Etiquette:</strong> Circumambulate stupas and temples clockwise. Do not touch religious artifacts or offerings. Speak softly and maintain respectful behavior. Follow your guide's instructions.</li>
                    <li>• <strong>Physical Requirements:</strong> This tour involves walking on uneven stone streets and climbing stairs at temples. Comfortable walking shoes are essential. Some sites like Swayambhunath have 365 steps.</li>
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
                      q: "What is the difference between a temple and a stupa?",
                      a: "In Nepal, temples are generally Hindu places of worship, often with pagoda-style architecture housing deities. Stupas are Buddhist structures containing relics, with a dome-shaped form representing the Buddha's mind. Stupas are circumambulated clockwise while spinning prayer wheels. Both are sacred and coexist throughout Nepal.",
                    },
                    {
                      q: "Can I enter the inner sanctums of temples?",
                      a: "Some temples allow Hindus only in the inner sanctum. Non-Hindus can observe from outside and explore the outer courtyards. Your guide will advise on which temples allow entry. Pashupatinath's inner court is for Hindus only, but the outer areas offer excellent viewing. Buddhist stupas and monasteries welcome all visitors.",
                    },
                    {
                      q: "What is the significance of the all-seeing eyes on stupas?",
                      a: "The eyes on Buddhist stupas (like Swayambhunath and Boudhanath) represent the all-seeing wisdom of Buddha. The nose is shaped like the Nepali number 'one' (ek), symbolizing unity. The third eye represents inner vision. They remind us that Buddha sees all actions and thoughts with wisdom and compassion.",
                    },
                    {
                      q: "Can I participate in rituals or meditation?",
                      a: "Yes! Many sites welcome respectful participation. You can spin prayer wheels, offer butter lamps at monasteries, receive tikka blessings at Hindu temples, and join meditation sessions (optional). Your guide will help you participate appropriately and explain the meaning of each ritual.",
                    },
                    {
                      q: "Is it appropriate to take photos of sadhus (holy men)?",
                      a: "Sadhus are accustomed to being photographed, but always ask permission first. Most expect a small donation (Rs. 50-100) for photos. Be respectful, as they are engaged in spiritual practice. Some sadhus will pose willingly; others prefer privacy. Your guide will help negotiate appropriately.",
                    },
                    {
                      q: "What should I bring for temple visits?",
                      a: "Bring modest clothing (shawls are useful for covering shoulders), socks for removing shoes, small denomination rupees for donations, a notebook for insights, and an open heart. Offerings like flowers or tikka powder can be purchased at temple entrances if you wish to participate in rituals.",
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