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
  TreePine,
  Home,
  MountainSnow,
  Eye,
  Sunset,
  Droplet,
  Building2,
  Coffee,
  ShoppingBag,
  Scroll,
  Sparkles,
  Church,
  History,
  Palette,
  Footprints,
  MessageCircle,
  Globe,
  Navigation,
  Wind,
  Bus,
  Train,
  Wallet,
  Gem,
  Plus,
  Sparkle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Free walking tour options in Kathmandu
const freeWalkingTours = [
  {
    id: 1,
    name: "Kathmandu Free Walking Tour",
    icon: Footprints,
    description:
      "The original tips-based walking tour through Kathmandu's historic heart. Explore Durbar Square, hidden courtyards, local markets, and Swoyambhunath (Monkey Temple).",
    duration: "4-5 hours",
    price: "FREE (tips-based)",
    unesco: "Durbar Square & Swoyambhunath",
    badge: "Most Popular",
    meetingPoint: "Garden of Dreams",
    startTimes: "9:00 AM & 2:00 PM",
    link: "/services/free-walking-tour-kathmandu",
    image: "/images/used/FWT-4.webp",
  },
  {
    id: 2,
    name: "Pashupatinath Free Walking Tour",
    icon: Church,
    description:
      "Explore Nepal's most sacred Hindu temple complex. Witness ancient cremation ceremonies along the Bagmati River and discover the spiritual traditions of Kathmandu.",
    duration: "2-3 hours",
    price: "FREE (tips-based)",
    unesco: "Pashupatinath Temple",
    badge: "Sacred Site",
    meetingPoint: "Pashupatinath Main Entrance",
    startTimes: "8:00 AM & 1:00 PM",
    link: "/services/free-walking-tour-kathmandu",
    image: "/images/used/dakshinkali-2.webp",
  },
  {
    id: 3,
    name: "Bouddhanath Free Walking Tour",
    icon: MountainSnow,
    description:
      "Walk the kora around one of Nepal's largest Buddhist stupas. Spin prayer wheels, visit monasteries, and experience vibrant Tibetan Buddhist culture.",
    duration: "2-3 hours",
    price: "FREE (tips-based)",
    unesco: "Bouddhanath Stupa",
    badge: "Buddhist Heritage",
    meetingPoint: "Bouddhanath Stupa Main Gate",
    startTimes: "9:00 AM & 2:00 PM",
    link: "/services/free-walking-tour-kathmandu",
    image: "/images/used/bouddhanath-kapan.webp",
  },
  {
    id: 4,
    name: "Patan Free Walking Tour",
    icon: Building2,
    description:
      "Discover the ancient Newari city of Patan (Lalitpur). Explore Durbar Square, the Golden Temple, and hidden courtyards filled with art and architecture.",
    duration: "3-4 hours",
    price: "FREE (tips-based)",
    unesco: "Patan Durbar Square",
    badge: "UNESCO Site",
    meetingPoint: "Patan Durbar Square",
    startTimes: "10:00 AM",
    link: "/services/free-walking-tour-kathmandu",
    image: "/images/used/bhaktapur-patan.webp",
  },
  {
    id: 5,
    name: "Bhaktapur Free Walking Tour",
    icon: History,
    description:
      "Step back in time in the medieval city of Bhaktapur. Famous for preserved architecture, pottery square, and authentic Newari culture.",
    duration: "3-4 hours",
    price: "FREE (tips-based)",
    unesco: "Bhaktapur Durbar Square",
    badge: "Medieval Gem",
    meetingPoint: "Bhaktapur Durbar Square",
    startTimes: "10:00 AM",
    link: "/services/free-walking-tour-kathmandu",
    image: "/images/used/bhaktapur-2.webp",
  },
];

const tourStops = [
  {
    name: "Garden of Dreams - Meeting Point",
    icon: Home,
    description:
      "Start your journey at this neo-classical garden oasis in the heart of Kathmandu. Built in the 1920s, it's the perfect meeting point with its tranquil fountains and European-inspired pavilions.",
  },
  {
    name: "Kathe Swoyambhu Temple Complex",
    icon: Church,
    description:
      "A beautiful embodiment of religious harmony where Hindu, Buddhist and Tibetan cultures coexist. Small stupas with symbolic paintings surround the main stupa. Very photogenic, often undergoing gentle construction.",
  },
  {
    name: "Traditional Lassi & Bead Market",
    icon: Coffee,
    description:
      "Near the glass-bead market, try freshly churned lassi with sugar, yogurt, dried fruits and concentrated milk (khuwa). A must-try refreshment — NPR 40 (small) / NPR 70 (large). Then explore generations of Kathmandu's Muslim minority making colourful glass beads for Hindu ceremonies.",
  },
  {
    name: "Indra Chowk & Durbar Square Area",
    icon: Building2,
    description:
      "The bustling heart of old Kathmandu. Pass through the vibrant Indra Chowk market filled with spices, textiles, and traditional goods before circling the UNESCO-listed Durbar Square with its ancient palaces and temples.",
  },
  {
    name: "UNESCO Durbar Square",
    icon: Landmark,
    description:
      "A UNESCO World Heritage site featuring the Hanuman Dhoka Palace, Kumari Ghar (Living Goddess residence), and numerous temples dating back to the 12th century. Marvel at the intricate Newari architecture and royal history.",
  },
  {
    name: "Bishnumati River & Cremation Ghats",
    icon: Droplet,
    description:
      "Walk along the sacred Bishnumati River, witnessing the ancient cremation ghats where Hindu rituals have been performed for centuries. A powerful and authentic glimpse into Nepal's spiritual traditions.",
  },
  {
    name: "Swoyambhunath (Monkey Temple)",
    icon: MountainSnow,
    description:
      "Now 424 steps (post‑quake reconstruction). Hundreds of monkeys, not aggressive but will pester if you carry sweets. Panoramic valley views, symbolic carvings, souvenir shops. Entrance NPR 200.",
  },
];

// Extension options
const extensionOptions = [
  {
    name: "Pashupatinath Extension",
    icon: Church,
    description:
      "Add a visit to Nepal's most sacred Hindu temple. Witness cremation ceremonies along the Bagmati River and explore the temple complex.",
    duration: "+2 hours",
    price: "FREE (tips-based)",
  },
  {
    name: "Bouddhanath Extension",
    icon: MountainSnow,
    description:
      "Extend your tour to Bouddhanath Stupa. Walk the kora, spin prayer wheels, and immerse in Tibetan Buddhist culture.",
    duration: "+2.5 hours",
    price: "FREE (tips-based)",
  },
  {
    name: "Patan Extension",
    icon: Building2,
    description:
      "Visit the ancient Newari city of Patan with its magnificent Durbar Square, Golden Temple, and art-filled courtyards.",
    duration: "+3 hours",
    price: "FREE (tips-based)",
  },
  {
    name: "Bhaktapur Extension",
    icon: History,
    description:
      "Explore medieval Bhaktapur with its preserved architecture, pottery square, and authentic Newari culture.",
    duration: "+3 hours",
    price: "FREE (tips-based)",
  },
];

export default function KathmanduFreeWalkingTourPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedStops, setExpandedStops] = React.useState<number[]>([0]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  const [selectedTour, setSelectedTour] = React.useState(0);

  const tourName = "Kathmandu Free Walking Tours - UNESCO Heritage Exploration";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Kathmandu Free Walking Tours - Explore UNESCO Heritage Sites");
    let shareUrl = "";
    if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    }
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const toggleStop = (idx: number) => {
    setExpandedStops((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  // Schema.org structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TouristInformationCenter",
    "name": "Himkala Adventure Pvt. Ltd.",
    "description": "Free walking tours in Kathmandu exploring UNESCO World Heritage sites including Durbar Square, Swoyambhunath, Pashupatinath, Bouddhanath, Patan, and Bhaktapur.",
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
    "name": "Kathmandu Free Walking Tours",
    "description": "Free tips-based walking tours in Kathmandu exploring UNESCO World Heritage sites including Durbar Square, Swoyambhunath, Pashupatinath, Bouddhanath, Patan, and Bhaktapur.",
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
                <a href="#overview" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">Overview</a>
                <a href="#free-tours" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">Free Tours</a>
                <a href="#itinerary" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">Itinerary</a>
                <a href="#extensions" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">Extensions</a>
                <a href="#practical" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">Practical Info</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] overflow-hidden bg-[#0f2940]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/used/free-walking-tour-nepal.webp"
            alt="Kathmandu free walking tours - Explore UNESCO World Heritage sites in Nepal's capital"
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
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                  Kathmandu
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4]">Free Walking Tours</span>
                </h1>
                
                <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-xl leading-relaxed">
                  Explore <strong>Kathmandu's UNESCO World Heritage sites</strong> with our tips-based free walking tours. 
                  Choose from <strong>Durbar Square, Swoyambhunath, Pashupatinath, Bouddhanath, Patan, or Bhaktapur</strong>.
                </p>

                <div className="flex flex-wrap gap-2 text-white/70 text-xs sm:text-sm">
                  <span className="flex items-center"><Clock className="w-4 h-4 mr-1 text-[#C5E0ED]" /> 2-5 hours</span>
                  <span className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-[#C5E0ED]" /> Multiple locations</span>
                  <span className="flex items-center"><Sparkle className="w-4 h-4 mr-1 text-[#C5E0ED]" /> Tips-based</span>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
  <Link href="/services/free-tour-kathmandu">
    <Button className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] hover:from-[#1a4166] hover:to-[#0f2940] text-white font-bold rounded-full px-6 py-2 shadow-lg shadow-[#0f2940]/30">
      <Heart className="w-4 h-4 mr-2" /> Book Free Tours
    </Button>
  </Link>
 
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
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardContent className="p-4 text-center">
                    <Users className="w-8 h-8 text-[#C5E0ED] mx-auto mb-2" />
                    <div className="text-sm font-bold text-white">Tips-Based</div>
                    <div className="text-xs text-white/70">You Decide Value</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardContent className="p-4 text-center">
                    <Globe className="w-8 h-8 text-[#C5E0ED] mx-auto mb-2" />
                    <div className="text-sm font-bold text-white">UNESCO Sites</div>
                    <div className="text-xs text-white/70">Full Valley Coverage</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-24 space-y-6">
                {/* Mobile Share */}
                <div className="lg:hidden flex gap-2 mb-4">
                  <Button size="sm" className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-lg" onClick={() => handleShare("facebook")}>
                    <Facebook className="w-3 h-3 mr-1" /> Share
                  </Button>
                  <Button size="sm" className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg" onClick={() => handleShare("twitter")}>
                    <Twitter className="w-3 h-3 mr-1" /> Tweet
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg" onClick={handleCopyLink}>
                    {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>

                {/* Contact Card */}
                <Card className="bg-gradient-to-br from-[#0f2940] to-[#1a4166] border-none rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-white font-bold text-lg mb-2">Join a Free Tour</h3>
                    <p className="text-white/70 text-sm mb-4">Choose from 5 different free walking tours across Kathmandu Valley. All tips-based.</p>
                    
                    <div className="space-y-2">
                      <Link href="/contact">
                        <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-11">
                          <Calendar className="w-4 h-4 mr-2" /> Book Your Tour
                        </Button>
                      </Link>
                      <a 
                        href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to join a free walking tour in Kathmandu.`)}`}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold rounded-full h-11">
                          <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                        </Button>
                      </a>
                      <p className="text-[10px] text-white/40 text-center">No reservation needed for most tours</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Facts */}
                <Card className="bg-white border-[#C5E0ED]/30 rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[#0f2940] mb-4 flex items-center gap-2">
                      <Wind className="w-4 h-4 text-[#2d6a8a]" /> Free Tour Options
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between py-2 border-b border-slate-100">
                        <span className="text-slate-500">Kathmandu</span>
                        <span className="font-medium text-[#0f2940]">9am & 2pm</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-slate-100">
                        <span className="text-slate-500">Pashupatinath</span>
                        <span className="font-medium text-[#0f2940]">8am & 1pm</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-slate-100">
                        <span className="text-slate-500">Bouddhanath</span>
                        <span className="font-medium text-[#0f2940]">9am & 2pm</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-slate-100">
                        <span className="text-slate-500">Patan</span>
                        <span className="font-medium text-[#0f2940]">10am</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-slate-500">Bhaktapur</span>
                        <span className="font-medium text-[#0f2940]">10am</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Share Card */}
                <Card className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[#0f2940] mb-4 flex items-center gap-2">
                      <Share2 className="w-4 h-4 text-[#2d6a8a]" /> Share This Page
                    </h3>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-xl" onClick={() => handleShare("facebook")}>
                        <Facebook className="w-4 h-4" />
                      </Button>
                      <Button size="sm" className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-xl" onClick={() => handleShare("twitter")}>
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-xl" onClick={handleCopyLink}>
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-2 order-1 lg:order-2">
              {/* Overview */}
              <section className="mb-10" id="overview">
                <h2 className="text-2xl font-serif text-[#0f2940] mb-4">Explore Kathmandu for Free</h2>
                
                <div className="relative h-48 md:h-64 w-full rounded-2xl overflow-hidden mb-6">
                  <Image
                    src="/images/used/FWT-4.webp"
                    alt="Kathmandu free walking tours exploring UNESCO heritage sites"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/60 to-transparent flex items-end p-4">
                    <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none font-bold">
                      <Sparkle className="w-3 h-3 mr-1" /> FREE Tips-Based Tours
                    </Badge>
                  </div>
                </div>

                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed mb-4">
                    <strong>Kathmandu Free Walking Tours</strong> offer the most authentic and budget-friendly way to 
                    explore Nepal's capital and its UNESCO World Heritage sites. Our tips-based tours are led by
                    <strong> expert local guides</strong> who bring the city's rich history, culture, and spirituality to life.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Choose from <strong>5 different free tour options</strong> across Kathmandu Valley. The signature
                    <strong> Kathmandu Free Walking Tour</strong> covers Durbar Square and Swoyambhunath (Monkey Temple). 
                    We also conduct dedicated free tours for <strong>Pashupatinath</strong> - Nepal's most sacred Hindu temple, 
                    and <strong>Bouddhanath</strong> - one of the largest Buddhist stupas in the world.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    For those wanting to explore further, we offer <strong>free walking tours in Patan and Bhaktapur </strong> 
                     upon special request. All tours are <strong>tips-based</strong> - you decide the value of your guide's 
                    expertise and time. No fixed fees, just gratitude for an unforgettable experience.
                  </p>
                </div>

                <div className="mt-4 p-4 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
                  <AlertTriangle className="w-4 h-4 inline mr-2" />
                  <strong>Tips-based model:</strong> All tours are completely free to join. You decide the value of the tour. 
                  Your guide's time and expertise are appreciated through tips.
                </div>
              </section>

              {/* Free Tour Options */}
              <section className="mb-10" id="free-tours">
                <h2 className="text-2xl font-serif text-[#0f2940] mb-4">Free Walking Tour Options</h2>
                <p className="text-slate-600 text-sm mb-4">
                  Choose from 5 different free walking tours across Kathmandu Valley. All are tips-based.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {freeWalkingTours.map((tour) => {
                    const Icon = tour.icon;
                    return (
                      <Card key={tour.id} className="bg-white border-[#C5E0ED]/30 rounded-xl overflow-hidden hover:shadow-lg transition-all h-full group">
                        <CardContent className="p-5">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                              <Icon className="w-5 h-5 text-[#0f2940]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <h4 className="font-bold text-[#0f2940] text-sm truncate">{tour.name}</h4>
                                <Badge className="bg-[#C5E0ED]/30 text-[#2d6a8a] border-none text-[8px] shrink-0">FREE</Badge>
                              </div>
                              <p className="text-slate-600 text-xs leading-relaxed mt-1">{tour.description}</p>
                              <div className="flex items-center gap-3 mt-2 text-xs">
                                <span className="flex items-center text-slate-500"><Clock className="w-3 h-3 mr-1" /> {tour.duration}</span>
                                <span className="flex items-center text-slate-500"><MapPin className="w-3 h-3 mr-1" /> {tour.meetingPoint}</span>
                              </div>
                              <div className="mt-2 flex flex-wrap gap-1">
                                <Badge variant="outline" className="border-[#C5E0ED] text-[#2d6a8a] text-[8px]">
                                  <Landmark className="w-2.5 h-2.5 mr-1" /> {tour.unesco}
                                </Badge>
                                <Badge variant="outline" className="border-[#C5E0ED] text-[#2d6a8a] text-[8px]">
                                  <Clock className="w-2.5 h-2.5 mr-1" /> {tour.startTimes}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </section>

              {/* Kathmandu Tour Itinerary */}
              <section className="mb-10" id="itinerary">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-serif text-[#0f2940]">Original Kathmandu Free Walking Tour Itinerary</h2>
                  <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none font-bold">
                    <Footprints className="w-3 h-3 mr-1" /> Tips-Based
                  </Badge>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Our signature Kathmandu Free Walking Tour follows this route through the city's most iconic sites. 
                  The tour is tips-based - you decide the value.
                </p>

                <div className="space-y-3">
                  {tourStops.map((stop, idx) => {
                    const Icon = stop.icon;
                    return (
                      <Card key={idx} className={`bg-white border-[#C5E0ED]/30 rounded-xl overflow-hidden transition-all ${expandedStops.includes(idx) ? "shadow-md shadow-[#C5E0ED]/20" : ""}`}>
                        <CardContent className="p-0">
                          <button className="w-full flex items-center gap-4 p-4 text-left" onClick={() => toggleStop(idx)}>
                            <div className="w-10 h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg flex items-center justify-center shrink-0">
                              <Icon className="w-4 h-4 text-[#0f2940]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-[#0f2940] text-sm truncate">{stop.name}</h3>
                            </div>
                            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform shrink-0 ${expandedStops.includes(idx) ? "rotate-180" : ""}`} />
                          </button>
                          {expandedStops.includes(idx) && (
                            <div className="px-4 pb-4 border-t border-[#C5E0ED]/20">
                              <p className="text-slate-600 text-sm leading-relaxed pt-4">{stop.description}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </section>

              {/* Extensions & Special Requests */}
              <section className="mb-10" id="extensions">
                <h2 className="text-2xl font-serif text-[#0f2940] mb-4">Extensions & Special Requests</h2>
                <p className="text-slate-600 text-sm mb-4">
                  Want to explore more? We offer free walking tours for these additional UNESCO sites upon request.
                  <strong className="block mt-2 text-[#0f2940]">All extensions are also tips-based and free to join.</strong>
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {extensionOptions.map((ext, idx) => {
                    const Icon = ext.icon;
                    return (
                      <Card key={idx} className="bg-gradient-to-br from-[#f8fbfc] to-white border-[#C5E0ED]/30 rounded-xl overflow-hidden">
                        <CardContent className="p-5">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg flex items-center justify-center shrink-0">
                              <Icon className="w-5 h-5 text-[#0f2940]" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h4 className="font-bold text-[#0f2940] text-sm">{ext.name}</h4>
                                <Badge className="bg-[#C5E0ED]/30 text-[#2d6a8a] border-none text-[8px]">FREE</Badge>
                              </div>
                              <p className="text-slate-600 text-xs leading-relaxed mt-1">{ext.description}</p>
                              <div className="flex items-center gap-3 mt-2 text-xs">
                                <span className="flex items-center text-slate-500"><Clock className="w-3 h-3 mr-1" /> {ext.duration}</span>
                                <span className="flex items-center text-slate-500 font-medium text-[#2d6a8a]"><Sparkle className="w-3 h-3 mr-1" /> Tips-based</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#C5E0ED]/30 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Plus className="w-4 h-4 text-[#2d6a8a]" />
                    </div>
                    <div>
                      <p className="text-blue-800 text-sm font-medium">Special Requests Welcome</p>
                      <p className="text-blue-700 text-sm">
                        We also conduct free walking tours for <strong>Patan</strong> and <strong>Bhaktapur</strong> 
                        upon special request. Just let us know your interests, and we'll arrange a free guided tour 
                        with one of our expert local guides.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Reviews */}
              <section className="mb-10" id="practical">
                <Card className="bg-white border-[#C5E0ED]/30 rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[#0f2940] mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" /> What Travelers Say
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      <div className="text-center p-3 bg-[#f8fbfc] rounded-xl">
                        <div className="text-2xl font-bold text-[#0f2940]">4.9</div>
                        <div className="text-xs text-slate-500">Avg Rating</div>
                      </div>
                      <div className="text-center p-3 bg-[#f8fbfc] rounded-xl">
                        <div className="text-2xl font-bold text-[#0f2940]">450+</div>
                        <div className="text-xs text-slate-500">Total Reviews</div>
                      </div>
                      <div className="text-center p-3 bg-[#f8fbfc] rounded-xl">
                        <div className="text-2xl font-bold text-green-600">97%</div>
                        <div className="text-xs text-slate-500">Excellent</div>
                      </div>
                      <div className="text-center p-3 bg-[#f8fbfc] rounded-xl">
                        <div className="text-2xl font-bold text-[#0f2940]">60+</div>
                        <div className="text-xs text-slate-500">Nationalities</div>
                      </div>
                    </div>
                    <p className="text-slate-600 italic text-sm">"Previous visitors have come from a wide range of countries and have included both 'first timers' and seasoned travellers to Nepal."</p>
                  </CardContent>
                </Card>
              </section>

              {/* Practical Info */}
              <section>
                <h2 className="text-2xl font-serif text-[#0f2940] mb-4">Practical Information</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <p className="text-blue-800 text-sm">
                        <strong>✓ All Tours are FREE:</strong> Tips-based model - you decide the value of your guide's expertise.
                      </p>
                      <p className="text-blue-700 text-sm">
                        <strong>✓ No Reservation Needed:</strong> Just show up at the meeting point 5-10 minutes before start time.
                      </p>
                      <p className="text-blue-700 text-sm">
                        <strong>✓ Entrance Fees:</strong> Swoyambhu NPR 200, Pashupatinath NPR 1000, Bouddhanath NPR 400 (approximate).
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-blue-700 text-sm">
                        <strong>✓ Best Time:</strong> Year-round, but October-November and March-April offer optimal weather.
                      </p>
                      <p className="text-blue-700 text-sm">
                        <strong>✓ What to Bring:</strong> Comfortable shoes, camera, water, cash for entrance fees & refreshments.
                      </p>
                      <p className="text-blue-700 text-sm font-medium">
                        <Sparkle className="w-3 h-3 inline mr-1 text-[#2d6a8a]" /> Special requests for Patan, Bhaktapur, or custom routes welcome!
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}