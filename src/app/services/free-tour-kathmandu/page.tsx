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
  Share2,
  Facebook,
  Twitter,
  Copy,
  Check,
  ChevronDown,
  Star,
  Heart,
  Camera,
  AlertTriangle,
  Map,
  Menu,
  X,
  Landmark,
  Compass,
  Home,
  MountainSnow,
  Building2,
  Church,
  History,
  Footprints,
  MessageCircle,
  Globe,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Award,
  TrendingUp,
  Coffee,
  ShoppingBag,
  Droplet,
  Eye,
  Sunrise,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// All free tour options
const freeTourOptions = [
  {
    id: 1,
    name: "Original Kathmandu Free Walking Tour",
    slug: "kathmandu",
    icon: Footprints,
    description:
      "The original tips-based walking tour through Kathmandu's historic heart. Explore Durbar Square, hidden courtyards, local markets, and Swoyambhunath (Monkey Temple).",
    duration: "4-5 hours",
    difficulty: "Easy",
    price: "FREE (tips-based)",
    unesco: "Durbar Square & Swoyambhunath",
    badge: "Most Popular",
    meetingPoint: "Garden of Dreams",
    startTimes: "9:00 AM & 2:00 PM",
    image: "/images/used/fwt-1.webp",
    highlights: [
      "UNESCO Durbar Square & ancient palaces",
      "Hidden Buddhist stupas and monasteries",
      "Local markets and traditional handicrafts",
      "Sacred Bishnumati river & cremation ghats",
      "Swoyambhunath (Monkey Temple) panoramic views",
    ],
    link: "/services/free-walking-tour-kathmandu",
    featured: true,
  },
  {
    id: 2,
    name: "Pashupatinath Free Walking Tour",
    slug: "pashupatinath",
    icon: Church,
    description:
      "Explore Nepal's most sacred Hindu temple complex. Witness ancient cremation ceremonies along the Bagmati River and discover the spiritual traditions of Kathmandu.",
    duration: "2-3 hours",
    difficulty: "Easy",
    price: "FREE (tips-based)",
    unesco: "Pashupatinath Temple",
    badge: "Sacred Site",
    meetingPoint: "Pashupatinath Main Entrance",
    startTimes: "8:00 AM & 1:00 PM",
    image: "/images/used/pashupati-1.webp",
    highlights: [
      "Sacred Pashupatinath Temple complex",
      "Bagmati River cremation ceremonies",
      "Ancient ashrams and sadhus",
      "Spiritual Hindu traditions",
      "Panoramic temple views",
    ],
    link: "/services/free-walking-tour-kathmandu",
    featured: false,
  },
  {
    id: 3,
    name: "Bouddhanath Free Walking Tour",
    slug: "bouddhanath",
    icon: MountainSnow,
    description:
      "Walk the kora around one of Nepal's largest Buddhist stupas. Spin prayer wheels, visit monasteries, and experience vibrant Tibetan Buddhist culture.",
    duration: "2-3 hours",
    difficulty: "Easy",
    price: "FREE (tips-based)",
    unesco: "Bouddhanath Stupa",
    badge: "Buddhist Heritage",
    meetingPoint: "Bouddhanath Stupa Main Gate",
    startTimes: "9:00 AM & 2:00 PM",
    image: "/images/used/nepal-stupa.webp",
    highlights: [
      "Bouddhanath Stupa - one of Nepal's largest",
      "Prayer wheel circumambulation (kora)",
      "Tibetan Buddhist monasteries",
      "Colorful prayer flags and rituals",
      "Local Tibetan culture and cuisine",
    ],
    link: "/services/free-walking-tour-kathmandu",
    featured: false,
  },
  {
    id: 4,
    name: "Patan Free Walking Tour",
    slug: "patan",
    icon: Building2,
    description:
      "Discover the ancient Newari city of Patan (Lalitpur). Explore Durbar Square, the Golden Temple, and hidden courtyards filled with art and architecture.",
    duration: "3-4 hours",
    difficulty: "Easy",
    price: "FREE (tips-based)",
    unesco: "Patan Durbar Square",
    badge: "UNESCO Site",
    meetingPoint: "Patan Durbar Square",
    startTimes: "10:00 AM (Upon Request)",
    image: "/images/used/patan-1.webp",
    highlights: [
      "Patan Durbar Square UNESCO site",
      "Golden Temple (Hiranya Varna Mahavihar)",
      "Newari art and architecture",
      "Hidden courtyards and temples",
      "Local artisan workshops",
    ],
    link: "/services/free-walking-tour-kathmandu",
    featured: false,
  },
  {
    id: 5,
    name: "Bhaktapur Free Walking Tour",
    slug: "bhaktapur",
    icon: History,
    description:
      "Step back in time in the medieval city of Bhaktapur. Famous for preserved architecture, pottery square, and authentic Newari culture.",
    duration: "3-4 hours",
    difficulty: "Easy",
    price: "FREE (tips-based)",
    unesco: "Bhaktapur Durbar Square",
    badge: "Medieval Gem",
    meetingPoint: "Bhaktapur Durbar Square",
    startTimes: "10:00 AM (Upon Request)",
    image: "/images/used/bhaktapur-2.webp",
    highlights: [
      "Bhaktapur Durbar Square UNESCO site",
      "Pottery Square and traditional crafts",
      "Nyatapola Temple - tallest pagoda",
      "Medieval Newari architecture",
      "Authentic local culture",
    ],
    link: "/services/free-walking-tour-kathmandu",
    featured: false,
  },
];

const whyChoose = [
  {
    icon: Award,
    title: "Expert Local Guides",
    description: "All tours led by certified guides with decades of experience and deep cultural knowledge.",
  },
  {
    icon: Globe,
    title: "UNESCO World Heritage",
    description: "Visit 7 UNESCO World Heritage sites across Kathmandu Valley - all completely free.",
  },
  {
    icon: Users,
    title: "Tips-Based Model",
    description: "You decide the value of the tour. No fixed fees - just gratitude for your guide's expertise.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Daily tours with multiple start times. Special requests for Patan, Bhaktapur, and custom routes welcome.",
  },
];

const faqs = [
  {
    question: "Are the tours really free?",
    answer:
      "Yes! All our tours are completely free to join. We operate on a tips-based model - you decide what the experience was worth to you at the end of the tour.",
  },
  {
    question: "Do I need to book in advance?",
    answer:
"Please use the 'Join Tour' button on this page or visit our Contact page to reserve your spot. We recommend booking at least 24 hours in advance to ensure guide availability.",  },
  {
    question: "What should I bring?",
    answer:
      "Comfortable walking shoes, water, camera, and small cash for entrance fees (Swoyambhu NPR 200, Pashupatinath NPR 1000, Bouddhanath NPR 400) and refreshments.",
  },
  {
    question: "Can I combine multiple tours?",
    answer:
      "Absolutely! We can arrange combination tours covering multiple UNESCO sites in one day. Contact us to customize your experience.",
  },
  {
    question: "Are the tours suitable for children?",
    answer:
      "Yes, all our free tours are family-friendly. The pace is relaxed and guides are experienced with travelers of all ages.",
  },
];

export default function FreeToursKathmanduPage() {
  const [copied, setCopied] = React.useState(false);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

  const tourName = "Free Tours Kathmandu Valley";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Free Tours Kathmandu Valley - UNESCO Heritage Tours");
    let shareUrl = "";
    if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    }
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const toggleFaq = (idx: number) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };

  // Schema.org structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TouristInformationCenter",
    "name": "Himkala Adventure Pvt. Ltd.",
    "description": "Free walking tours in Kathmandu Valley exploring UNESCO World Heritage sites. Tips-based tours in Kathmandu, Pashupatinath, Bouddhanath, Patan, and Bhaktapur.",
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

  const tourSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Free Tours Kathmandu Valley",
    "description": "Free tips-based walking tours in Kathmandu Valley exploring UNESCO World Heritage sites including Kathmandu Durbar Square, Swoyambhunath, Pashupatinath, Bouddhanath, Patan, and Bhaktapur.",
    "brand": {
      "@type": "Brand",
      "name": "Himkala Adventure Pvt. Ltd."
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "450"
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Schema.org structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }} />

      {/* Mobile Navigation Drawer */}
      {showMobileNav && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowMobileNav(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg text-[#0f2940]">Quick Navigation</h3>
                <button onClick={() => setShowMobileNav(false)} className="p-2 rounded-lg hover:bg-slate-100">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                <a href="#tours" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">Free Tours</a>
                <a href="#why-choose" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">Why Choose Us</a>
                <a href="#how-it-works" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">How It Works</a>
                <a href="#faq" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">FAQ</a>
                <a href="#contact" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">Contact</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[55vh] md:min-h-[65vh] overflow-hidden bg-[#0f2940]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/used/FWT-4.webp"
            alt="Free tours Kathmandu Valley - Explore UNESCO World Heritage sites including Pashupatinath, Bouddhanath, Patan, and Bhaktapur"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f2940]/20 via-[#0f2940]/50 to-[#0f2940]/95" />
        </div>

        <div className="absolute inset-0 flex items-center z-10 px-4">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none font-bold px-3 py-1.5">
                    <Footprints className="w-3 h-3 mr-1" /> FREE Tips-Based Tours
                  </Badge>
                  <Badge className="bg-[#C5E0ED]/20 text-[#C5E0ED] border-[#C5E0ED]/40 font-bold px-3 py-1.5">
                    <Globe className="w-3 h-3 mr-1" /> 7 UNESCO Sites
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 border-none font-bold px-3 py-1.5">
                    <Users className="w-3 h-3 mr-1" /> 5 Tour Options
                  </Badge>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                  Free Tours
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4]">Kathmandu Valley</span>
                </h1>
                
                <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-xl leading-relaxed">
                  Choose from <strong>5 free tips-based tours</strong> across Kathmandu Valley. Explore 
                  <strong> UNESCO World Heritage sites</strong> including Pashupatinath, Bouddhanath, Patan, and Bhaktapur.
                </p>

                <div className="flex flex-wrap gap-2 text-white/70 text-xs sm:text-sm">
                  <span className="flex items-center"><Clock className="w-4 h-4 mr-1 text-[#C5E0ED]" /> 2-5 hours</span>
                  <span className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-[#C5E0ED]" /> Multiple locations</span>
                  <span className="flex items-center"><Sparkles className="w-4 h-4 mr-1 text-[#C5E0ED]" /> Tips-based</span>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a href="#tours">
                    <Button className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] hover:from-[#1a4166] hover:to-[#0f2940] text-white font-bold rounded-full px-6 py-2 shadow-lg shadow-[#0f2940]/30">
                      <Heart className="w-4 h-4 mr-2" /> Choose Your Free Tour
                    </Button>
                  </a>
                 
                </div>
              </div>

              {/* Stats Cards */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardContent className="p-4 text-center">
                    <Landmark className="w-8 h-8 text-[#C5E0ED] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">5</div>
                    <div className="text-xs text-white/70">Free Tour Options</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardContent className="p-4 text-center">
                    <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">4.9</div>
                    <div className="text-xs text-white/70">450+ Reviews</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-md border-white/20 col-span-2">
                  <CardContent className="p-4 text-center">
                    <Users className="w-8 h-8 text-[#C5E0ED] mx-auto mb-2" />
                    <div className="text-sm font-bold text-white">All Tours are Tips-Based</div>
                    <div className="text-xs text-white/70">You decide the value of your guide's expertise</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Options Section - FIXED: All cards equal height, Join Tour links to contact */}
      <section className="py-12 md:py-20 bg-white" id="tours">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-2">Choose Your Tour</h2>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif text-[#0f2940] mb-4">Free Tours Across the Valley</h3>
            <p className="text-slate-600 text-sm md:text-base">
              Select from 5 different free walking tours covering Kathmandu Valley's most iconic UNESCO World Heritage sites. 
              All tours are tips-based and led by expert local guides.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {freeTourOptions.map((tour) => {
              const Icon = tour.icon;
              return (
                <Card 
                  key={tour.id} 
                  className="bg-white border-[#C5E0ED]/30 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={tour.image}
                      alt={`${tour.name} - free walking tour in Kathmandu Valley`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      {tour.featured && (
                        <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none text-[10px] font-bold">
                          Most Popular
                        </Badge>
                      )}
                      <Badge className="bg-emerald-500/90 text-white border-none text-[10px] font-bold">
                        FREE
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <Badge variant="outline" className="border-white/50 text-white bg-black/30 backdrop-blur-sm text-[10px]">
                        <Landmark className="w-2.5 h-2.5 inline mr-1" /> {tour.unesco}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-white/90 backdrop-blur-sm text-[#0f2940] border-none text-[10px] font-bold">
                        <Star className="w-3 h-3 inline fill-yellow-400 text-yellow-400 mr-0.5" /> 4.9
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[#0f2940]" />
                      </div>
                      <h4 className="font-bold text-[#0f2940] text-sm">{tour.name}</h4>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed mb-3 flex-1 line-clamp-2">{tour.description}</p>
                    <div className="flex flex-wrap gap-2 text-xs text-slate-500 mb-3">
                      <span className="flex items-center"><Clock className="w-3 h-3 mr-1 text-[#2d6a8a]" /> {tour.duration}</span>
                      <span className="flex items-center"><MapPin className="w-3 h-3 mr-1 text-[#2d6a8a]" /> {tour.meetingPoint}</span>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
                      <div className="text-xs text-emerald-600 font-bold flex items-center">
                        <Sparkles className="w-3 h-3 mr-1" /> Tips-based
                      </div>
                      {/* FIXED: Links to contact page with tour name pre-filled */}
                      <Link href={`/contact?trek=${encodeURIComponent(tour.name)}`}>
                        <Button size="sm" className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] hover:from-[#1a4166] hover:to-[#0f2940] text-white font-bold rounded-full px-4 py-1.5 text-xs">
                          Join Tour <ChevronRight className="w-3 h-3 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Special Request Banner */}
          <div className="mt-8 p-4 md:p-6 bg-gradient-to-r from-blue-50 to-[#f0f7fa] border border-[#C5E0ED]/30 rounded-2xl text-center">
            <p className="text-[#0f2940] text-sm md:text-base">
              <strong className="text-[#2d6a8a]">Special Request?</strong> We also conduct free walking tours for 
              <strong> Patan</strong> and <strong>Bhaktapur</strong> upon request. 
              <Link href="/contact" className="text-[#2d6a8a] font-bold underline ml-1">Contact us</Link> to customize your experience.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#f0f7fa] to-white" id="why-choose">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-2">Why Choose Our Free Tours</h2>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif text-[#0f2940]">Explore Kathmandu Valley for Free</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {whyChoose.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="bg-white border-[#C5E0ED]/30 rounded-2xl overflow-hidden hover:shadow-lg transition-all text-center group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-[#0f2940]" />
                    </div>
                    <h4 className="font-bold text-[#0f2940] text-sm mb-2">{item.title}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-20 bg-white" id="how-it-works">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-2">How It Works</h2>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif text-[#0f2940]">Join a Free Tour in 4 Simple Steps</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                step: "1",
                title: "Choose Your Tour",
                description: "Select from 5 free tour options across Kathmandu Valley.",
                icon: Compass,
              },
              {
                step: "2",
                title: "Show Up",
                description: "Meet your guide at the designated meeting point 5-10 minutes early.",
                icon: MapPin,
              },
              {
                step: "3",
                title: "Explore & Learn",
                description: "Enjoy an expert-guided tour through UNESCO World Heritage sites.",
                icon: Landmark,
              },
              {
                step: "4",
                title: "Tip Your Guide",
                description: "You decide the value of your guide's time and expertise.",
                icon: Heart,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center relative">
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[40%] h-0.5 bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0]" />
                  )}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <span className="text-2xl font-bold text-[#0f2940]">{item.step}</span>
                  </div>
                  <div className="w-12 h-12 bg-[#f0f7fa] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-[#2d6a8a]" />
                  </div>
                  <h4 className="font-bold text-[#0f2940] text-sm mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed max-w-xs mx-auto">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="#tours">
              <Button className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] hover:from-[#1a4166] hover:to-[#0f2940] text-white font-bold rounded-full px-8 py-3">
                Choose Your Free Tour Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#f0f7fa] to-white" id="faq">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-2">FAQ</h2>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif text-[#0f2940]">Frequently Asked Questions</h3>
            <p className="text-slate-600 text-sm md:text-base mt-2">Everything you need to know about our free tours.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <Card key={idx} className={`bg-white border-[#C5E0ED]/30 rounded-xl overflow-hidden transition-all ${expandedFaq === idx ? 'shadow-md shadow-[#C5E0ED]/20' : ''}`}>
                <CardContent className="p-0">
                  <button className="w-full flex items-center justify-between p-4 md:p-5 text-left" onClick={() => toggleFaq(idx)}>
                    <span className="font-bold text-[#0f2940] text-sm md:text-base pr-4">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#2d6a8a] transition-transform shrink-0 ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedFaq === idx && (
                    <div className="px-4 md:px-5 pb-4 md:pb-5 border-t border-[#C5E0ED]/20">
                      <p className="text-slate-600 text-sm leading-relaxed pt-3">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}