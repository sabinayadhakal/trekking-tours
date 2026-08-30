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
  Sparkles,
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
  Church,
  History,
  Palette,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const tourName = "Kathmandu, Bhaktapur & Lalitpur Heritage Tour";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Kathmandu, Bhaktapur & Lalitpur Heritage Tour - Himkala Adventure")}`;
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
                  <span>Multi-Day City Tour</span>
                </div>
                <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Kathmandu, Bhaktapur <br />
                  <span className="text-[#cf6943]">& Lalitpur Heritage Tour</span>
                </h1>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">
                  Discover the cultural heart of Nepal through its three ancient royal cities—exploring UNESCO World Heritage Sites, 
                  living traditions, medieval architecture, and the rich Newari heritage of the Kathmandu Valley.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                    Easy
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    <Landmark className="w-3 h-3 inline mr-1" aria-hidden="true" />
                    7 UNESCO Sites
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    5 Days
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
              src="/images/used/durbar_square.webp"
              alt="Kathmandu Durbar Square UNESCO World Heritage Site with ancient temples and royal palace in Kathmandu Valley"
              fill
              className="object-cover opacity-90"
              priority
              quality={85}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
              <span className="bg-[#e47a4f] text-[#fff8ee] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide rounded">
                Best Season: Year-round
              </span>
            </div>
            <div className="absolute top-4 right-4 flex flex-wrap gap-2">
              <span className="bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-wide rounded">
                $750 / person
              </span>
            </div>
          </figure>
        </div>

        {/* Quick Stats - Free Walking Tour Style */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
            {[
              { label: "Duration", value: "5 Days / 4 Nights" },
              { label: "Group Size", value: "2-15 people" },
              { label: "UNESCO Sites", value: "7 Sites" },
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
                The <strong className="text-[#14383b]">Kathmandu, Bhaktapur & Lalitpur Heritage Tour</strong> is a 
                comprehensive 5-day journey through the cultural heart of Nepal, exploring the three ancient royal 
                cities of the Kathmandu Valley. This <strong className="text-[#14383b]">Nepal cultural tour</strong> 
                offers an immersive experience into the rich history, stunning architecture, and living traditions 
                of the Newari people, who have inhabited this valley for over two millennia.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                The Kathmandu Valley is home to seven UNESCO World Heritage Sites, all of which are included in 
                this <strong className="text-[#14383b]">heritage walking tour</strong>. From the sacred Hindu 
                temple of Pashupatinath on the banks of the Bagmati River to the massive Buddhist stupa of 
                Boudhanath, from the medieval palace squares of Kathmandu, Patan, and Bhaktapur to the hilltop 
                monkey temple of Swayambhunath—each site tells a unique story of Nepal's syncretic culture where 
                Hinduism and Buddhism have coexisted harmoniously for centuries.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Your expert guide will bring these ancient stones to life with stories of kings and gods, tales 
                of craftsmanship and devotion, and insights into the living traditions that continue today. You'll 
                witness artisans at work, explore narrow cobblestone streets, sample traditional Newari cuisine, 
                and experience the warm hospitality of the Nepali people. This 
                <strong className="text-[#14383b]"> Kathmandu Valley UNESCO tour</strong> is perfect for culture 
                enthusiasts, history buffs, photographers, and anyone seeking to understand the soul of Nepal.
              </p>
            </article>

            <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
              <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
              <strong>Important:</strong> Modest dress is required at Hindu and Buddhist temples. Shoulders and 
              knees should be covered. Remove shoes before entering temple premises. Photography of cremation 
              ceremonies at Pashupatinath is strictly prohibited.
            </div>
          </div>
        </section>

        {/* Highlights - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Tour Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Best Time to Visit</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sunrise className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Spring (Mar-May)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Pleasant temperatures and blooming flowers. Clear mornings for photography. Ideal for exploring heritage sites comfortably.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Autumn (Sep-Nov)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Crystal-clear skies, perfect temperatures, and vibrant festivals including Dashain and Tihar. Peak cultural season.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Snowflake className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Winter (Dec-Feb)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Crisp clear air, cool sunny days, and fewer crowds. Excellent for photography with clear mountain views from the valley.
                </p>
                <span className="inline-block mt-2 bg-blue-100 text-blue-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Good</span>
              </div>
            </div>
            <p className="mt-3 text-[10px] text-[#66706d]">Note: Monsoon (Jun-Aug) brings lush green landscapes but occasional rain. Heritage sites are still accessible with umbrella/raincoat.</p>
          </div>
        </section>

        {/* Itinerary - Free Walking Tour Style (Accordion) */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
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
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="includes">
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
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="gallery">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Photo Gallery</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6">
              A visual journey through the cultural heart of Nepal - the ancient cities of Kathmandu, Bhaktapur, and Lalitpur.
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
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="faq">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                <div key={i}>
                  <h4 className="font-semibold text-[#14383b] text-sm mb-1">{faq.q}</h4>
                  <p className="text-[#556363] text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Book Now / CTA - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px] text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready to Explore Nepal's Cultural Heart?</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Book your Kathmandu, Bhaktapur & Lalitpur Heritage Tour today and discover the ancient temples, royal palaces, and living traditions of Nepal's UNESCO World Heritage Sites.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href={`/contact?trek=${encodeURIComponent(tourName)}`}>
                <Button className="bg-[#cf6943] hover:bg-[#b85a38] text-white font-bold rounded-full px-6 py-2 text-sm">
                  <Heart className="w-4 h-4 mr-2" aria-hidden="true" />
                  Book This Tour
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