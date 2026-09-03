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
  Plus,
  Copy,
  Check,
  ChevronDown,
  Star,
  Heart,
  Camera,
  AlertTriangle,
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
  Coffee,
  ShoppingBag,
  Droplet,
  Phone,
  Mail,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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

  const tourName = "Kathmandu Free Walking Tours - UNESCO Heritage Exploration";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  const toggleStop = (idx: number) => {
    setExpandedStops((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
      <main>
        {/* Header - Matching Free Walking Tour style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="mx-auto max-w-[880px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                  <span className="h-px w-6 sm:w-8 bg-[#cf6943]" />
                  <span>Free Walking Tours</span>
                </div>
                <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Kathmandu <br />
                  <span className="text-[#cf6943]">Free Walking Tours</span>
                </h1>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">
                  Explore UNESCO World Heritage sites with our tips-based free walking tours. Choose from 5 different tours across Kathmandu Valley.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                    FREE · Tips-based
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    5 Tour Options
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Image */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
          <figure className="relative h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px] rounded-lg overflow-hidden bg-[#14383b]">
            <Image
              src="/images/used/free-walking-tour-nepal.webp"
              alt="Kathmandu free walking tours - Explore UNESCO World Heritage sites"
              fill
              className="object-cover opacity-90"
              priority
              quality={85}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
              <span className="bg-[#e47a4f] text-[#fff8ee] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide rounded">
                Tips-based · Free to join
              </span>
            </div>
            <div className="absolute top-4 right-4 flex flex-wrap gap-2">
              <span className="bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-wide rounded">
                7 UNESCO Sites
              </span>
            </div>
          </figure>
        </div>

        {/* Quick Stats - Minimal inline */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
            {[
              { label: "Tour Options", value: "5 Free Tours" },
              { label: "UNESCO Sites", value: "7 Sites" },
              { label: "Rating", value: "4.9/5 (450+)" },
              { label: "Duration", value: "2-5 hours" },
            ].map((stat, i) => (
              <div key={i} className="bg-[#f7f2e9] rounded-lg p-3 text-center shadow-sm border border-[#d8cec0]/30">
                <p className="text-[10px] text-[#66706d] uppercase tracking-wider font-semibold">{stat.label}</p>
                <p className="text-sm font-bold text-[#14383b]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content - Editorial Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            {/* Overview */}
            <article className="prose prose-sm sm:prose-base max-w-none">
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                <strong className="text-[#14383b]">Kathmandu Free Walking Tours</strong> offer the most authentic and budget-friendly way to explore Nepal's capital and its UNESCO World Heritage sites. Our tips-based tours are led by <strong className="text-[#14383b]">expert local guides</strong> who bring the city's rich history, culture, and spirituality to life.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Choose from <strong className="text-[#14383b]">5 different free tour options</strong> across Kathmandu Valley. The signature <strong className="text-[#14383b]">Kathmandu Free Walking Tour</strong> covers Durbar Square and Swoyambhunath (Monkey Temple). We also conduct dedicated free tours for <strong className="text-[#14383b]">Pashupatinath</strong> and <strong className="text-[#14383b]">Bouddhanath</strong>.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                For those wanting to explore further, we offer <strong className="text-[#14383b]">free walking tours in Patan and Bhaktapur  </strong>  upon special request. All tours are <strong className="text-[#14383b]">tips-based</strong> — you decide the value of your guide's expertise.
              </p>
            </article>

            <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
              <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
              <strong>Tips‑based model:</strong> All tours are completely free to join. You decide the value of the tour. Your guide's time and expertise are appreciated through tips.
            </div>
          </div>
        </section>

        {/* Free Tour Options - Clean cards */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="free-tours">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Free Walking Tour Options</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6">Choose from 5 different free walking tours across Kathmandu Valley. All are tips-based.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {freeWalkingTours.map((tour) => {
                const Icon = tour.icon;
                return (
                  <div key={tour.id} className="bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/30 overflow-hidden hover:shadow-md transition-all p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#cf6943]/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#cf6943]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-[#14383b] text-sm">{tour.name}</h4>
                          <Badge className="bg-[#cf6943] text-[#fff8ee] border-none text-[9px] px-2 py-0.5">FREE</Badge>
                        </div>
                        <p className="text-[#556363] text-xs leading-relaxed mt-1">{tour.description}</p>
                        <div className="flex items-center gap-3 mt-2 text-xs text-[#66706d]">
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#cf6943]" /> {tour.duration}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#cf6943]" /> {tour.meetingPoint}</span>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1">
                          <Badge variant="outline" className="border-[#d8cec0] text-[#556363] text-[9px]">
                            <Landmark className="w-2.5 h-2.5 mr-1" /> {tour.unesco}
                          </Badge>
                          <Badge variant="outline" className="border-[#d8cec0] text-[#556363] text-[9px]">
                            <Clock className="w-2.5 h-2.5 mr-1" /> {tour.startTimes}
                          </Badge>
                        </div>
                        <div className="mt-3">
                          <Link href={`/contact?trek=${encodeURIComponent(tour.name)}`}>
                            <Button size="sm" className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#fff8ee] font-bold rounded-full px-4 py-1.5 text-xs">
                              Join Tour <ChevronRight className="w-3 h-3 ml-1" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Kathmandu Tour Itinerary */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="itinerary">
          <div className="mx-auto max-w-[880px]">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b]">Original Kathmandu Free Walking Tour</h2>
              <Badge className="bg-[#cf6943] text-[#fff8ee] border-none font-bold">
                <Footprints className="w-3 h-3 mr-1" /> Tips-Based
              </Badge>
            </div>
            <p className="text-[#556363] text-sm sm:text-base mb-6">
              Our signature Kathmandu Free Walking Tour follows this route through the city's most iconic sites.
            </p>

            <div className="space-y-3">
              {tourStops.map((stop, idx) => {
                const Icon = stop.icon;
                const isExpanded = expandedStops.includes(idx);
                return (
                  <div
                    key={idx}
                    className={`bg-[#f7f2e9] border border-[#d8cec0]/30 rounded-lg overflow-hidden transition-all ${
                      isExpanded ? "shadow-sm" : "hover:shadow-sm"
                    }`}
                  >
                    <button
                      className="w-full flex items-center gap-4 p-4 text-left"
                      onClick={() => toggleStop(idx)}
                    >
                      <div className="w-10 h-10 bg-[#cf6943]/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[#cf6943]" aria-hidden="true" />
                      </div>
                      <span className="font-medium text-[#14383b] text-sm flex-1">{stop.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#66706d] transition-transform shrink-0 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {isExpanded && (
                      <div className="px-4 pb-4 border-t border-[#d8cec0]/30">
                        <p className="text-[#556363] text-sm leading-relaxed pt-3">{stop.description}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Extensions & Special Requests */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="extensions">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Extensions & Special Requests</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6">
              Want to explore more? We offer free walking tours for these additional UNESCO sites upon request.
              <strong className="block mt-2 text-[#14383b]">All extensions are also tips-based and free to join.</strong>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {extensionOptions.map((ext, idx) => {
                const Icon = ext.icon;
                return (
                  <div key={idx} className="bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/30 p-4 hover:shadow-md transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#cf6943]/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#cf6943]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-[#14383b] text-sm">{ext.name}</h4>
                          <Badge className="bg-[#cf6943] text-[#fff8ee] border-none text-[9px] px-2 py-0.5">FREE</Badge>
                        </div>
                        <p className="text-[#556363] text-xs leading-relaxed mt-1">{ext.description}</p>
                        <div className="flex items-center gap-3 mt-2 text-xs text-[#66706d]">
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#cf6943]" /> {ext.duration}</span>
                          <span className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-[#cf6943]" /> Tips-based</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-4 bg-[#f7f2e9] border border-[#d8cec0]/30 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#cf6943]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Plus className="w-4 h-4 text-[#cf6943]" />
                </div>
                <div>
                  <p className="font-medium text-[#14383b] text-sm">Special Requests Welcome</p>
                  <p className="text-[#556363] text-sm">
                    We also conduct free walking tours for <strong>Patan</strong> and <strong>Bhaktapur</strong> 
                    upon special request. Just let us know your interests, and we'll arrange a free guided tour 
                    with one of our expert local guides.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" aria-hidden="true" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b]">4.9 · 450+ Reviews</h2>
              <span className="text-[#66706d] text-sm">on TripAdvisor</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {[
                { label: "Avg Rating", value: "4.9" },
                { label: "Total Reviews", value: "450+" },
                { label: "Excellent", value: "97%" },
                { label: "Nationalities", value: "60+" },
              ].map((stat, i) => (
                <div key={i} className="bg-[#f7f2e9] rounded-lg p-3 text-center border border-[#d8cec0]/30">
                  <div className="text-lg font-bold text-[#14383b]">{stat.value}</div>
                  <div className="text-[10px] text-[#66706d]">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="text-[#556363] italic text-sm">"Previous visitors have come from a wide range of countries and have included both 'first timers' and seasoned travellers to Nepal."</p>
          </div>
        </section>

        {/* Practical Info */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Practical Information</h2>
            <div className="bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/30 p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <p className="text-[#556363] text-sm flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span><strong className="text-[#14383b]">All Tours are FREE:</strong> Tips-based model - you decide the value.</span>
                  </p>
                  <p className="text-[#556363] text-sm flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span><strong className="text-[#14383b]">No Reservation Needed:</strong> Just show up 5-10 minutes early.</span>
                  </p>
                  <p className="text-[#556363] text-sm flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span><strong className="text-[#14383b]">Entrance Fees:</strong> Swoyambhu NPR 200, Pashupatinath NPR 1000, Bouddhanath NPR 400.</span>
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-[#556363] text-sm flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span><strong className="text-[#14383b]">Best Time:</strong> Year-round, but Oct-Nov and Mar-April offer optimal weather.</span>
                  </p>
                  <p className="text-[#556363] text-sm flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span><strong className="text-[#14383b]">What to Bring:</strong> Comfortable shoes, camera, water, cash for entrance fees.</span>
                  </p>
                  <p className="text-[#556363] text-sm flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-[#cf6943] shrink-0 mt-0.5" />
                    <span><strong className="text-[#14383b]">Special Requests:</strong> Patan, Bhaktapur, or custom routes welcome!</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#14383b] py-12 sm:py-16 lg:py-20">
          <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#f7f2e9] mb-3">Ready to Explore Kathmandu?</h2>
            <p className="text-[#b9c9c0] text-sm sm:text-base max-w-2xl mx-auto mb-6">
              Join our free tips-based walking tours and discover the rich cultural heritage of Nepal's capital.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact">
                <Button className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#fff8ee] font-bold rounded-full px-6 py-3 text-sm h-auto">
                  <Heart className="w-4 h-4 mr-2" /> Book Your Free Tour
                </Button>
              </Link>
              <a 
                href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to join a free walking tour in Kathmandu.`)}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-full px-6 py-3 text-sm h-auto">
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                </Button>
              </a>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[#b9c9c0]/60">
              <span>Daily tours available</span>
              <span>·</span>
              <span>Tips-based model</span>
              <span>·</span>
              <span>Expert local guides</span>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4 text-[#b9c9c0]/40 text-xs">
              <a href="tel:+9779841376470" className="hover:text-[#f7f2e9] transition-colors flex items-center gap-1">
                <Phone className="w-3 h-3" /> +977 9841376470
              </a>
              <span>·</span>
              <a href="mailto:info@himkalaadventure.com" className="hover:text-[#f7f2e9] transition-colors flex items-center gap-1">
                <Mail className="w-3 h-3" /> info@himkalaadventure.com
              </a>
              <span>·</span>
              <button onClick={handleCopyLink} className="hover:text-[#f7f2e9] transition-colors flex items-center gap-1">
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />} Share
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}