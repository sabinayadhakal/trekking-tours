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
  Landmark,
  Compass,
  Droplets,
  Award,
  TreePine,
  Bird,
  Flower2,
  PawPrint,
  Rabbit,
  Sun,
  Moon,
  Leaf,
  MountainSnow,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Kathmandu",
    altitude: "1,350m",
    distance: "-",
    description: "Welcome to Nepal! Upon arrival at Tribhuvan International Airport, our representative will greet you and transfer you to your hotel in Kathmandu. After check-in, attend a comprehensive tour briefing where we'll discuss your upcoming Chitwan jungle safari, wildlife viewing tips, what to pack, and handle any arrangements. Evening free to explore the vibrant streets of Thamel. Welcome dinner with traditional Nepali cuisine where you'll meet your guide.",
    overnight: "Hotel in Kathmandu",
    meals: "Dinner",
    highlights: ["Airport pickup", "Tour briefing", "Welcome dinner", "Thamel exploration"],
  },
  {
    day: 2,
    title: "Drive to Chitwan National Park",
    altitude: "1,350m → 415m",
    distance: "5-6 hrs drive / 150km",
    description: "After breakfast, begin the scenic drive to Chitwan National Park, Nepal's first national park and a UNESCO World Heritage Site. The journey descends from the Kathmandu Valley through lush hills, terraced farmlands, and subtropical forests, offering glimpses of rural Nepalese life. Arrive at your jungle resort in Sauraha by early afternoon. After check-in and a welcome drink, enjoy an orientation about the park's history, wildlife, and safari activities. In the late afternoon, take a leisurely village walk to nearby Tharu communities, where you can observe their traditional mud-and-straw houses, learn about their unique culture, and photograph daily life. Return to the resort for dinner and an evening Tharu cultural dance performance featuring their famous stick dance. Overnight at jungle resort.",
    overnight: "Jungle Resort in Chitwan",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic drive", "Tharu village walk", "Cultural dance performance", "Resort orientation"],
  },
  {
    day: 3,
    title: "Chitwan Jungle Safari - Canoeing & Elephant Breeding Center",
    altitude: "415m",
    distance: "Full day safari",
    description: "Early morning wake-up call for your first jungle adventure. Begin with a peaceful canoe ride along the Rapti River in a traditional dugout canoe. Drift silently through the water while your naturalist guide points out aquatic birds including kingfishers, egrets, storks, and if you're lucky, you may spot gharial and mugger crocodiles basking on the riverbanks. After breakfast at the resort, visit the Elephant Breeding Center, where you can observe these gentle giants up close and learn about conservation efforts to protect the endangered Asian elephant. See baby elephants playing and learn about their care and training. After lunch, enjoy a guided nature walk through the jungle with your naturalist. Walk quietly through the sal forests and grasslands, learning to identify animal tracks, bird calls, and medicinal plants. Your guide will share their extensive knowledge of the park's ecosystem. Return to the resort before sunset. Evening free to relax or enjoy the resort's amenities. Overnight at jungle resort.",
    overnight: "Jungle Resort in Chitwan",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Canoe ride on Rapti River", "Elephant Breeding Center", "Nature walk", "Bird watching", "Crocodile spotting"],
  },
  {
    day: 4,
    title: "Chitwan Jungle Safari - Jeep Safari & Wildlife Photography",
    altitude: "415m",
    distance: "Full day safari",
    description: "Early morning departure for the highlight of your safari—a thrilling jeep safari deep into Chitwan National Park. Board an open-top 4WD vehicle with your naturalist guide and venture into the heart of the jungle. The park is home to over 50 species of mammals and 500 species of birds, offering incredible wildlife viewing opportunities. Your guide will navigate through grasslands, riverine forests, and wetlands in search of wildlife. Keep your camera ready for the park's most famous resident—the endangered one-horned rhinoceros. Chitwan has one of the largest populations of these magnificent creatures in the world, and sightings are almost guaranteed. You may also spot spotted deer, sambar deer, wild boar, langur monkeys, and if extremely lucky, the elusive Bengal tiger, leopard, or sloth bear. The park is also a birdwatcher's paradise with kingfishers, hornbills, peacocks, woodpeckers, and many species of waterfowl. After a few hours of exploration, stop at a scenic spot for a picnic breakfast in the jungle. Continue your safari through different ecosystems, maximizing your chances of wildlife encounters. Return to the resort by late morning for lunch and rest. In the late afternoon, enjoy a second safari or optional activities like bird watching or visiting the Gharial Breeding Center. Overnight at jungle resort.",
    overnight: "Jungle Resort in Chitwan",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Jeep safari", "One-horned rhinoceros viewing", "Bengal tiger spotting (rare)", "Bird watching paradise", "Picnic breakfast in jungle"],
  },
  {
    day: 5,
    title: "Chitwan Jungle Safari - Bird Watching & Elephant Safari",
    altitude: "415m",
    distance: "Half day safari",
    description: "Early morning bird watching walk with your naturalist guide. Chitwan is a bird lover's paradise with over 500 species recorded. Your guide will help you spot and identify colorful birds including paradise flycatchers, bee-eaters, barbets, drongos, and if you're lucky, the rare Bengal florican. After breakfast, enjoy an optional elephant safari (included) for a different perspective of the jungle. Ride on the back of a trained elephant through the tall grasslands, giving you a elevated view of wildlife and the chance to get closer to rhinos. The elephants are also excellent at spotting wildlife that might be hidden from the ground. After lunch, you'll have free time to relax by the pool, visit local souvenir shops, or simply enjoy the peaceful jungle surroundings. Late afternoon, enjoy sunset views from the Rapti Riverbank with a cold drink, reflecting on your incredible wildlife experiences. Overnight at jungle resort.",
    overnight: "Jungle Resort in Chitwan",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Bird watching walk", "Elephant safari", "Sunset at Rapti River", "Relaxation time"],
  },
  {
    day: 6,
    title: "Return to Kathmandu",
    altitude: "415m → 1,350m",
    distance: "5-6 hrs drive / 150km",
    description: "After breakfast, begin your scenic drive back to Kathmandu. The journey offers one last chance to enjoy Nepal's beautiful countryside, with stops at viewpoints along the way. Arrive in Kathmandu by late afternoon and transfer to your hotel. Evening free for last-minute souvenir shopping or personal exploration. Farewell dinner at a traditional Nepali restaurant with cultural music and dance performance. Celebrate your incredible wildlife adventures in Chitwan National Park. Overnight in Kathmandu.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic return drive", "Last mountain views", "Farewell dinner", "Wildlife celebration"],
  },
  {
    day: 7,
    title: "Departure",
    altitude: "1,350m",
    distance: "-",
    description: "Transfer to Tribhuvan International Airport for your departure flight. Our representative will ensure you reach the airport with plenty of time. Bid farewell to Nepal with memories of close encounters with one-horned rhinos, peaceful canoe rides along jungle rivers, vibrant Tharu culture, and the incredible biodiversity of Chitwan National Park. Namaste and until we meet again!",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Airport transfer", "Departure assistance", "Fond farewells"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "2 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "4 nights jungle resort accommodation in Chitwan with all meals",
  "All meals during the tour as specified (breakfast, lunch, dinner)",
  "Experienced English-speaking guide for entire tour",
  "Professional naturalist guides for all safari activities",
  "All ground transportation as per itinerary in private vehicle",
  "Chitwan National Park entry permit (multiple days)",
  "Tharu village walk with cultural guide",
  "Tharu cultural dance performance",
  "Canoe ride on Rapti River",
  "Elephant Breeding Center visit",
  "Guided nature walks (multiple days)",
  "Jeep safari (full day with picnic breakfast)",
  "Bird watching walk with expert guide",
  "Elephant safari (one session)",
  "Sunset viewing at Rapti River",
  "All government taxes and official expenses",
  "Emergency contact number 24/7",
  "Complimentary map of Nepal",
  "Bottled water during tours and safaris",
  "Binoculars for wildlife viewing",
  "Wildlife identification booklet",
  "Safari certificate of completion",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover medical emergencies and evacuation)",
  "Meals not specified in itinerary",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, etc.)",
  "Tips and gratuities for guides, naturalists, drivers, and resort staff (recommended)",
  "Emergency evacuation/helicopter rescue costs",
  "Any costs arising from unforeseen circumstances (weather, political unrest)",
  "International phone calls and internet charges",
  "Excess baggage charges",
  "Optional activities not mentioned in itinerary",
];

const gallery = [
  {
    src: "/images/used/nepal-chitwan.webp",
    alt: "One-horned Rhinoceros",
    caption: "One-horned rhinoceros - Chitwan's most famous resident",
  },
  {
    src: "/images/used/chitwan-2.webp",
    alt: "Bengal Tiger",
    caption: "Bengal tiger - the elusive king of Chitwan",
  },
  {
    src: "/images/used/chitwan-1.webp",
    alt: "Elephant Ride",
    caption: "Elephant Ride in Chitwan National Park",
  },
];

export default function ChitwanNationalParkJungleSafariPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);

  const tourName = "Chitwan National Park Jungle Safari";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    if (platform === "facebook") {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank", "noopener,noreferrer");
    } else if (platform === "twitter") {
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Chitwan National Park Jungle Safari - Himkala Adventure")}`;
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  };

  const toggleDay = (day: number) => {
    setExpandedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
      <main>
        {/* Header - Free Walking Tour Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="mx-auto max-w-[880px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                  <span className="h-px w-6 sm:w-8 bg-[#cf6943]" />
                  <span>Jungle Safari</span>
                </div>
                <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Chitwan National Park <br />
                  <span className="text-[#cf6943]">Jungle Safari</span>
                </h1>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">
                  Embark on an unforgettable wildlife adventure in Nepal's first national park—track one-horned rhinoceros, 
                  canoe past crocodiles, spot Bengal tigers, and immerse yourself in Tharu culture.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                    Easy
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    <PawPrint className="w-3 h-3 inline mr-1" aria-hidden="true" />
                    One-horned Rhinos
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    7 Days
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Image - Free Walking Tour Style */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
          <figure className="relative h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px] rounded-lg overflow-hidden bg-[#14383b]">
            <Image
              src="/images/used/chitwan-1.webp"
              alt="Chitwan National Park jungle safari in Nepal - elephant ride through grasslands with wildlife viewing"
              fill
              className="object-cover opacity-90"
              priority
              quality={85}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
              <span className="bg-[#e47a4f] text-[#fff8ee] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide rounded">
                Best Season: Oct-Mar
              </span>
            </div>
            <div className="absolute top-4 right-4 flex flex-wrap gap-2">
              <span className="bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-wide rounded">
                $650 / person
              </span>
            </div>
          </figure>
        </div>

        {/* Quick Stats - Free Walking Tour Style */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
            {[
              { label: "Duration", value: "7 Days / 6 Nights" },
              { label: "Group Size", value: "2-12 people" },
              { label: "Park Size", value: "952 sq km" },
              { label: "Difficulty", value: "Easy" },
            ].map((stat, i) => (
              <div key={i} className="bg-[#f7f2e9] rounded-lg p-3 text-center shadow-sm border border-[#d8cec0]/30">
                <p className="text-[10px] text-[#66706d] uppercase tracking-wider font-semibold">{stat.label}</p>
                <p className="text-sm font-bold text-[#14383b]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Overview - Free Walking Tour Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <article className="prose prose-sm sm:prose-base max-w-none">
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                The <strong className="text-[#14383b]">Chitwan National Park Jungle Safari</strong> is a 7-day 
                wildlife adventure into Nepal's most famous protected area. Established in 1973 as Nepal's first 
                national park and designated a UNESCO World Heritage Site in 1984, Chitwan covers 952 square 
                kilometers of pristine subtropical lowland wilderness.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Chitwan is home to an astonishing array of wildlife, including over 50 species of mammals and 
                500 species of birds. The park's most famous resident is the endangered 
                <strong className="text-[#14383b]"> one-horned rhinoceros</strong>, with Chitwan harboring one 
                of the largest populations in the world—sightings are almost guaranteed. Other charismatic species 
                include the elusive <strong className="text-[#14383b]">Bengal tiger</strong>, leopards, sloth bears, 
                Asian elephants, wild boar, several species of deer, and two species of crocodiles.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Your safari experience includes a variety of activities designed to maximize wildlife viewing 
                while providing different perspectives of the jungle. Explore the park's rivers by traditional 
                dugout canoe, venture deep into the wilderness on thrilling jeep safaris, walk quietly through 
                the forest with expert naturalist guides, and ride on the back of trained elephants for an 
                elevated view of the grasslands.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Beyond wildlife, you'll also discover the rich cultural heritage of the Tharu people, who have 
                lived in harmony with the jungle for centuries. With comfortable jungle lodge accommodations, 
                expert guides, and a thoughtfully designed itinerary, this safari delivers an unforgettable 
                wildlife experience in one of Asia's premier national parks.
              </p>
            </article>

            <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
              <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
              <strong>Important:</strong> Wildlife sightings cannot be guaranteed but rhino sightings are 95%+ 
              successful. Tigers are elusive and require patience. Follow your guide's instructions at all times.
            </div>
          </div>
        </section>

        {/* Highlights - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Safari Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Track endangered one-horned rhinoceros in their natural habitat",
                "Search for the elusive Bengal tiger on thrilling jeep safaris",
                "Canoe along the Rapti River past basking crocodiles",
                "Explore the park on foot with expert naturalist guides",
                "Visit the Elephant Breeding Center and see baby elephants",
                "Ride on elephant-back through tall grasslands",
                "Spot over 500 bird species including kingfishers, hornbills, and peacocks",
                "Experience traditional Tharu village life and culture",
                "Enjoy energetic Tharu stick dance performances",
                "Photograph wildlife from open-top safari vehicles",
                "Picnic breakfast in the heart of the jungle",
                "Sunset views over the Rapti River",
                "Learn about conservation efforts protecting endangered species",
                "Relax in comfortable jungle resort accommodations",
              ].map((highlight, i) => (
                <li key={i} className="flex items-start gap-3 text-[#14383b] text-sm sm:text-base">
                  <span className="text-[#cf6943] mt-1">✦</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Best Season - Free Walking Tour Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Best Time for Safari</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sunrise className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Spring (Mar-May)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Warm temperatures and good wildlife viewing. Animals gather near water sources as temperatures rise. Excellent bird watching with migratory species still present.
                </p>
                <span className="inline-block mt-2 bg-blue-100 text-blue-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Good</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sun className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Autumn (Sep-Nov)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Pleasant temperatures, clear skies, and excellent wildlife viewing. Post-monsoon vegetation is lush but animals are active. Ideal time for safaris.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Snowflake className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Winter (Dec-Feb)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Cool, dry weather with excellent wildlife viewing. Animals are active throughout the day and visibility is clear. Best time for tiger tracking.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
              </div>
            </div>
            <p className="mt-3 text-[10px] text-[#66706d]">Note: Summer/Monsoon (Jun-Aug) brings high temperatures and heavy rainfall. Safari activities are limited.</p>
          </div>
        </section>

        {/* Wildlife Facts - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2 text-sm">
                <PawPrint className="w-4 h-4" aria-hidden="true" /> Chitwan's Amazing Wildlife
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="font-bold text-lg sm:text-2xl text-green-800">645+</div>
                  <div className="text-xs sm:text-sm text-green-600">One-horned Rhinos</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg sm:text-2xl text-green-800">120-150</div>
                  <div className="text-xs sm:text-sm text-green-600">Bengal Tigers</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg sm:text-2xl text-green-800">500+</div>
                  <div className="text-xs sm:text-sm text-green-600">Bird Species</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg sm:text-2xl text-green-800">2 Species</div>
                  <div className="text-xs sm:text-sm text-green-600">Crocodiles</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary - Free Walking Tour Style (Accordion) */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b]">Day-by-Day Itinerary</h2>
              <button
                className="text-[#cf6943] text-xs font-semibold hover:underline"
                onClick={() =>
                  setExpandedDays(expandedDays.length === itinerary.length ? [] : itinerary.map((d) => d.day))
                }
              >
                {expandedDays.length === itinerary.length ? "Collapse All" : "Expand All"}
              </button>
            </div>

            <div className="space-y-2">
              {itinerary.map((day) => {
                const isExpanded = expandedDays.includes(day.day);
                return (
                  <div
                    key={day.day}
                    className="bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/30 overflow-hidden"
                  >
                    <button
                      className="w-full flex items-center gap-4 p-4 text-left"
                      onClick={() => toggleDay(day.day)}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#cf6943]/10 rounded-lg flex flex-col items-center justify-center shrink-0">
                        <span className="text-[8px] font-bold text-[#cf6943] uppercase">Day</span>
                        <span className="text-base sm:text-lg font-bold text-[#14383b] leading-none">{day.day}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-medium text-[#14383b] text-sm sm:text-base block truncate">{day.title}</span>
                        <div className="flex flex-wrap gap-2 text-[10px] sm:text-xs text-[#66706d] mt-0.5">
                          <span>{day.altitude}</span>
                          <span>·</span>
                          <span>{day.distance}</span>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[#66706d] transition-transform shrink-0 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {isExpanded && (
                      <div className="px-4 pb-4 pt-0">
                        <p className="text-[#556363] text-sm leading-relaxed mb-4">{day.description}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                          <div className="flex items-center gap-2 text-xs text-[#556363] bg-[#f2ede4] rounded-lg p-2">
                            <Tent className="w-3 h-3 text-[#cf6943]" aria-hidden="true" />
                            <span><strong>Overnight:</strong> {day.overnight}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-[#556363] bg-[#f2ede4] rounded-lg p-2">
                            <Utensils className="w-3 h-3 text-[#cf6943]" aria-hidden="true" />
                            <span><strong>Meals:</strong> {day.meals}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {day.highlights.map((h, i) => (
                            <span key={i} className="bg-[#cf6943]/10 text-[#cf6943] text-[10px] font-medium px-2 py-0.5 rounded">
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Includes / Excludes - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="includes">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">What's Included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <h3 className="font-semibold text-[#14383b] text-sm mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" aria-hidden="true" />
                  Cost Includes
                </h3>
                <ul className="space-y-1.5">
                  {includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#556363] text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <h3 className="font-semibold text-[#14383b] text-sm mb-4 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500" aria-hidden="true" />
                  Cost Excludes
                </h3>
                <ul className="space-y-1.5">
                  {excludes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#556363] text-sm">
                      <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery - Free Walking Tour Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="gallery">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Photo Gallery</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6">
              A visual journey through Chitwan National Park's incredible wildlife and jungle landscapes.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {gallery.map((image, i) => (
                <div key={i} className="relative h-28 sm:h-40 rounded-lg overflow-hidden bg-[#d8cec0]">
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    fill 
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                      <p className="text-white text-[10px] font-medium truncate">{image.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="faq">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  q: "What are my chances of seeing a tiger?",
                  a: "Bengal tigers are elusive and sightings require patience and luck. Chitwan has an estimated 120-150 tigers, but they are shy and well-camouflaged. Your chances increase with longer safaris and experienced guides. Even without tiger sightings, you're almost guaranteed to see rhinos, deer, monkeys, and numerous bird species.",
                },
                {
                  q: "Will I definitely see a one-horned rhinoceros?",
                  a: "Yes, with over 95% success rate! Chitwan has one of the largest populations of one-horned rhinos in the world (645+ individuals). Our experienced guides know the best areas for rhino sightings, and they are often seen during jeep safaris, elephant safaris, and even from the river during canoe rides.",
                },
                {
                  q: "Is the safari safe?",
                  a: "Absolutely. All safari activities are conducted with experienced, licensed naturalist guides who have extensive knowledge of the park and its wildlife. You'll receive safety briefings before each activity. Vehicles are designed for safari use, and guides carry communication devices. Follow your guide's instructions at all times for a safe and enjoyable experience.",
                },
                {
                  q: "What kind of accommodation can I expect?",
                  a: "You'll stay at a comfortable jungle resort in Sauraha, just outside the park boundary. Accommodations range from standard rooms to deluxe options, all with attached bathrooms, hot showers, and reliable electricity. Resorts offer restaurants, gardens, and often swimming pools. The atmosphere is relaxed and immersed in nature.",
                },
                {
                  q: "Is this tour suitable for children?",
                  a: "Yes, Chitwan safaris are excellent for families. Children love the wildlife, elephant experiences, and canoe rides. Age-appropriate activities can be arranged. Most safari vehicles accommodate families comfortably. Please inform us of children's ages when booking so we can make appropriate arrangements.",
                },
                {
                  q: "What is the best time of year for bird watching?",
                  a: "Winter (December-February) is excellent for bird watching as many migratory species arrive from Siberia and Tibet. Spring (March-April) offers good resident bird viewing. Chitwan is home to over 500 bird species year-round, so bird enthusiasts will be delighted in any season.",
                },
              ].map((faq, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-[#14383b] text-sm mb-1">{faq.q}</h4>
                  <p className="text-[#556363] text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Book Now / CTA - Free Walking Tour Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px] text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready for Your Wildlife Adventure?</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Book your Chitwan National Park Jungle Safari today and experience the incredible wildlife of Nepal's UNESCO World Heritage Site.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href={`/contact?trek=${encodeURIComponent(tourName)}`}>
                <Button className="bg-[#cf6943] hover:bg-[#b85a38] text-white font-bold rounded-full px-6 py-2 text-sm">
                  <Heart className="w-4 h-4 mr-2" aria-hidden="true" />
                  Book This Safari
                </Button>
              </Link>
              <a 
                href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about the ${tourName}.`)}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-full px-6 py-2 text-sm">
                  <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                  WhatsApp Now
                </Button>
              </a>
              <Button
                variant="outline"
                className="border-[#cf6943] text-[#cf6943] hover:bg-[#cf6943]/10 rounded-full px-6 py-2 text-sm"
                onClick={() => {
                  const url = encodeURIComponent(window.location.href);
                  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank", "noopener,noreferrer");
                }}
              >
                <Share2 className="w-4 h-4 mr-2" aria-hidden="true" />
                Share
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}