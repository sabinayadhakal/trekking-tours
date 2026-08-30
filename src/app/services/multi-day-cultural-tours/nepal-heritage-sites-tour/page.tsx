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
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Kathmandu",
    altitude: "1,350m",
    distance: "-",
    description: "Welcome to Nepal! Upon arrival at Tribhuvan International Airport, our representative will greet you and transfer you to your hotel in Kathmandu. After check-in, attend a comprehensive tour briefing where we'll discuss the itinerary, the significance of UNESCO World Heritage Sites, and handle any arrangements. Evening free to explore the vibrant streets of Thamel. Welcome dinner with traditional Nepali cuisine where you'll meet your tour guide.",
    overnight: "Hotel in Kathmandu",
    meals: "Dinner",
    highlights: ["Airport pickup", "Tour briefing", "Welcome dinner", "Thamel exploration"],
  },
  {
    day: 2,
    title: "Kathmandu Durbar Square & Swayambhunath",
    altitude: "1,350m",
    distance: "Full day tour",
    description: "After breakfast, begin your heritage journey at Kathmandu Durbar Square, a UNESCO World Heritage Site and the historic seat of royalty. Explore the ancient palace complex with its intricately carved wooden windows, including the famous Kumari Ghar—home to the Living Goddess Kumari. Visit the Taleju Temple, Hanuman Dhoka Palace, and the many pagoda-style temples dating back to the 12th century. After lunch, visit Swayambhunath Stupa (Monkey Temple), perched on a hilltop west of the city. Climb the 365 steps past meditation shrines and prayer wheels to reach the main stupa with its all-seeing eyes of Buddha. Enjoy panoramic views of the Kathmandu Valley from this UNESCO World Heritage Site. Evening return to hotel.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Kumari Living Goddess", "Hanuman Dhoka Palace", "Swayambhunath Stupa", "Panoramic valley views"],
  },
  {
    day: 3,
    title: "Pashupatinath & Boudhanath - Sacred Sites",
    altitude: "1,350m",
    distance: "Full day tour",
    description: "Early morning visit to Pashupatinath Temple, a UNESCO World Heritage Site and one of the holiest Hindu temples dedicated to Lord Shiva. Located on the banks of the Bagmati River, observe morning rituals, cremation ceremonies, and the fascinating sadhus (holy men) with their distinctive face paint and dreadlocks. Photography is permitted in the outer areas. After lunch, continue to Boudhanath Stupa, another UNESCO World Heritage Site and one of the largest spherical stupas in South Asia. It is the center of Tibetan Buddhism in Nepal. Circumambulate the massive mandala while spinning prayer wheels, and observe Tibetan monks in maroon robes. Visit the surrounding monasteries and enjoy the peaceful atmosphere. Evening return to hotel.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Pashupatinath rituals", "Sadhus photography", "Boudhanath Stupa", "Tibetan Buddhist culture"],
  },
  {
    day: 4,
    title: "Patan Durbar Square - City of Fine Arts",
    altitude: "1,350m",
    distance: "Half day tour",
    description: "After breakfast, drive to Patan (Lalitpur), the city of fine arts across the Bagmati River. Patan Durbar Square is a stunning collection of temples, statues, and palaces showcasing the finest Newari architecture in Nepal. This UNESCO World Heritage Site features the ancient royal palace, now a museum housing magnificent bronze statues and religious artifacts. Marvel at the Krishna Temple built entirely of stone, the Hiranya Varna Mahavihar (Golden Temple), and the many intricately carved wood and metal works. Watch local artisans at work creating traditional metal statues and Thanka paintings. After lunch, enjoy free time for personal exploration or return to Kathmandu. Evening at leisure.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Patan royal palace", "Krishna Temple", "Golden Temple", "Local artisans at work"],
  },
  {
    day: 5,
    title: "Bhaktapur Durbar Square - Medieval Kingdom",
    altitude: "1,350m → 1,401m",
    distance: "Full day tour (1 hr drive each way)",
    description: "After breakfast, drive to Bhaktapur, the best-preserved medieval city in Nepal and a UNESCO World Heritage Site. Often called the 'City of Devotees,' Bhaktapur transports you back to the 15th century. Explore Bhaktapur Durbar Square with its Palace of 55 Windows, the magnificent Golden Gate, and the towering Nyatapola Temple—Nepal's tallest pagoda at five stories. Wander through narrow cobblestone streets lined with traditional houses, pottery squares, and courtyards. Visit Pottery Square to see potters shaping clay using centuries-old techniques. After lunch, drive to the hilltop Changunarayan Temple, another UNESCO World Heritage Site and the oldest Hindu temple in Nepal, dating back to the 4th century. Admire ancient stone inscriptions and exquisite woodcarvings. Return to Kathmandu by evening.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Nyatapola Temple", "Palace of 55 Windows", "Pottery Square artisans", "Changunarayan Temple"],
  },
  {
    day: 6,
    title: "Drive to Pokhara - Lakeside Paradise",
    altitude: "1,350m → 820m",
    distance: "6-7 hrs drive / 200km",
    description: "After breakfast, begin the scenic drive to Pokhara, Nepal's most beautiful lakeside city. The journey follows the Prithvi Highway through river valleys, terraced farmlands, and subtropical forests. Stop en-route at viewpoints overlooking the Marsyangdi and Trishuli Rivers. On clear days, enjoy distant views of the Annapurna and Manaslu ranges. Arrive in Pokhara by mid-afternoon and check into your lakeside hotel. Evening free to explore the Lakeside promenade with its cafes, shops, and restaurants. Optional boat ride on Phewa Lake at sunset. Overnight in Pokhara.",
    overnight: "Hotel in Pokhara",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic drive", "River valley views", "Lakeside promenade", "Sunset at Phewa Lake"],
  },
  {
    day: 7,
    title: "Sarangkot Sunrise & Pokhara Valley Exploration",
    altitude: "820m → 1,592m → 820m",
    distance: "1 hr drive each way",
    description: "Pre-dawn departure (4:30 AM) to Sarangkot hill station for the most spectacular sunrise photography in Nepal. Watch the first light illuminate the Annapurna range including Annapurna South, Annapurna I, Machhapuchhre (Fishtail), and Dhaulagiri. After sunrise, return to hotel for breakfast. Mid-morning, visit Davis Falls, an interesting waterfall that disappears into underground caves, and the adjacent Gupteshwor Cave with its massive shivalinga. After lunch, explore the International Mountain Museum for exhibits on Himalayan mountaineering and culture. Late afternoon, enjoy a boat ride on Phewa Lake to the Tal Barahi Temple, a two-story pagoda in the middle of the lake. Capture the reflection of Machhapuchhre mountain in the calm lake waters. Overnight in Pokhara.",
    overnight: "Hotel in Pokhara",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Sarangkot sunrise", "Annapurna panorama", "Davis Falls", "Phewa Lake boat ride"],
  },
  {
    day: 8,
    title: "Drive to Lumbini - Birthplace of Buddha",
    altitude: "820m → 150m",
    distance: "5-6 hrs drive / 180km",
    description: "After breakfast, drive south to Lumbini, the birthplace of Lord Buddha and one of the holiest pilgrimage sites in the world. This UNESCO World Heritage Site is a must-visit for understanding Nepal's Buddhist heritage. The journey descends from the hills to the flat Terai plains, with changing landscapes from subtropical forests to agricultural fields. Arrive in Lumbini by early afternoon. Visit the Mayadevi Temple, the sacred site where Queen Mayadevi gave birth to Siddhartha Gautama in 623 BCE. Explore the excavated remains of ancient monasteries and the marker stone depicting the exact birthplace. See the Ashoka Pillar, erected by Emperor Ashoka in 249 BCE to commemorate his pilgrimage. In the evening, visit the World Peace Pagoda and stroll through the monastic zone with temples built by Buddhist countries from around the world including Thailand, Japan, Myanmar, and Sri Lanka. Overnight in Lumbini.",
    overnight: "Hotel in Lumbini",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Mayadevi Temple", "Ashoka Pillar", "Sacred Garden", "International Monasteries"],
  },
  {
    day: 9,
    title: "Lumbini Exploration & Return to Kathmandu",
    altitude: "150m → 1,350m",
    distance: "30 min flight + drive",
    description: "Early morning visit to the sacred garden for meditation and peaceful atmosphere. Explore more international monasteries including the magnificent Myanmar Temple, Chinese Temple, and the Eternal Peace Flame. Visit the Lumbini Museum housing artifacts and manuscripts related to Buddha's life. After lunch, transfer to Bhairahawa Airport for a scenic 30-minute flight back to Kathmandu. The short flight offers aerial views of the Himalayan foothills and terraced landscapes. Upon arrival in Kathmandu, transfer to your hotel. Evening free for last-minute souvenir shopping or personal exploration. Farewell dinner at a traditional Nepali restaurant with cultural music and dance performance. Celebrate your incredible journey through Nepal's UNESCO World Heritage Sites. Overnight in Kathmandu.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Sacred Garden meditation", "International monasteries", "Scenic flight", "Farewell dinner"],
  },
  {
    day: 10,
    title: "Departure",
    altitude: "1,350m",
    distance: "-",
    description: "Transfer to Tribhuvan International Airport for your departure flight. Our representative will ensure you reach the airport with plenty of time. Bid farewell to Nepal with memories of exploring ancient temples, witnessing Himalayan sunrises, walking in the footsteps of Buddha, and experiencing the rich cultural heritage of this remarkable country. Namaste and until we meet again!",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Airport transfer", "Departure assistance", "Fond farewells"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "9 nights hotel accommodation (3-star with breakfast) as per itinerary",
  "All meals during the tour as specified (breakfast, lunch, dinner)",
  "Experienced English-speaking tour guide (government licensed, heritage expert)",
  "Local guides for heritage sites",
  "All ground transportation as per itinerary in private vehicle",
  "Domestic flight: Bhairahawa to Kathmandu",
  "All monument entrance fees (UNESCO World Heritage Sites)",
  "Kathmandu Durbar Square entrance fee",
  "Swayambhunath entrance fee",
  "Pashupatinath Temple entrance fee",
  "Boudhanath Stupa entrance fee",
  "Patan Durbar Square entrance fee and museum",
  "Bhaktapur Durbar Square entrance fee",
  "Changunarayan Temple entrance fee",
  "Golden Temple entrance fee",
  "Sarangkot sunrise transport",
  "Davis Falls and Gupteshwor Cave entrance",
  "International Mountain Museum entrance",
  "Phewa Lake boat ride",
  "Lumbini Sacred Garden entrance",
  "Mayadevi Temple entrance",
  "Lumbini Museum entrance",
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
  "Tips and gratuities for guides, drivers, and support staff (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, political unrest)",
  "Photography fees at certain temples (where applicable)",
  "Optional activities not mentioned in itinerary",
  "International phone calls and internet charges",
];

const gallery = [
  {
    src: "/images/used/nepal-stupa.webp",
    alt: "Boudhanath Stupa - massive Buddhist stupa and UNESCO World Heritage Site in Kathmandu, center of Tibetan Buddhism in Nepal",
    caption: "Boudhanath Stupa - UNESCO World Heritage Site in Kathmandu",
  },
  {
    src: "/images/used/bhaktapur-3.webp",
    alt: "Bhaktapur Durbar Square - medieval UNESCO World Heritage Site with Nyatapola Temple and Palace of 55 Windows",
    caption: "Bhaktapur Durbar Square - Medieval UNESCO Heritage Site",
  },
  {
    src: "/images/used/patan-1.webp",
    alt: "Patan Durbar Square - City of Fine Arts and UNESCO World Heritage Site with Krishna Temple and ancient royal palace",
    caption: "Patan Durbar Square - City of Fine Arts, UNESCO Site",
  },
  {
    src: "/images/used/monkey_temple.webp",
    alt: "Swayambhunath Stupa (Monkey Temple) - ancient Buddhist stupa and UNESCO World Heritage Site with panoramic Kathmandu Valley views",
    caption: "Swayambhunath Stupa (Monkey Temple) with valley views",
  },
  {
    src: "/images/used/pashupati-1.webp",
    alt: "Pashupatinath Temple on the banks of Bagmati River - sacred Hindu temple and UNESCO World Heritage Site dedicated to Lord Shiva",
    caption: "Pashupatinath Temple on the banks of Bagmati River",
  },
  {
    src: "/images/used/lumbini-1.webp",
    alt: "Mayadevi Temple in Lumbini - sacred birthplace of Lord Buddha and UNESCO World Heritage Site with Ashoka Pillar",
    caption: "Mayadevi Temple - Birthplace of Buddha, UNESCO Site",
  },
];

export default function NepalHeritageSitesTourPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);

  const tourName = "Nepal Heritage Sites Tour - UNESCO World Heritage Journey";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Nepal Heritage Sites Tour - UNESCO World Heritage Journey - Himkala Adventure")}`;
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
                  <span>Multi-Day Heritage Tour</span>
                </div>
                <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Nepal Heritage Sites <br />
                  <span className="text-[#cf6943]">UNESCO World Heritage Tour</span>
                </h1>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">
                  A comprehensive journey through Nepal's UNESCO World Heritage Sites—from ancient palace squares and sacred temples 
                  to the birthplace of Buddha and stunning Himalayan vistas.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                    Easy
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    <Landmark className="w-3 h-3 inline mr-1" aria-hidden="true" />
                    8+ UNESCO Sites
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    10 Days
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
              src="/images/used/nepal-heritage-sites-tour-nepal.webp"
              alt="Nepal Heritage Sites Tour - UNESCO World Heritage journey through Kathmandu Valley, Pokhara, and Lumbini"
              fill
              className="object-cover opacity-90"
              priority
              quality={85}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
              <span className="bg-[#e47a4f] text-[#fff8ee] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide rounded">
                Best Season: Sept-May (Year-round)
              </span>
            </div>
            <div className="absolute top-4 right-4 flex flex-wrap gap-2">
              <span className="bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-wide rounded">
                $2,300 / person
              </span>
            </div>
          </figure>
        </div>

        {/* Quick Stats - Free Walking Tour Style */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
            {[
              { label: "Duration", value: "10 Days / 9 Nights" },
              { label: "Group Size", value: "2-15 people" },
              { label: "UNESCO Sites", value: "8+ Sites" },
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
                The <strong className="text-[#14383b]">Nepal Heritage Sites Tour</strong> is a comprehensive 
                10-day journey that takes you through the cultural heart of Nepal, exploring the country's 
                magnificent <strong className="text-[#14383b]">UNESCO World Heritage Sites</strong>. From the 
                ancient palace squares of the Kathmandu Valley to the sacred birthplace of Lord Buddha in 
                Lumbini, and from the stunning Himalayan vistas of Pokhara to the medieval craftsmanship of 
                Newari artisans, this <strong className="text-[#14383b]">Nepal cultural heritage tour</strong> 
                offers an unparalleled immersion into Nepal's rich cultural heritage.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                The Kathmandu Valley alone is home to seven UNESCO World Heritage Sites, all included in this 
                tour: the three durbar squares of Kathmandu, Patan, and Bhaktapur; the Buddhist stupas of 
                Swayambhunath and Boudhanath; the Hindu temple of Pashupatinath; and the ancient hilltop temple 
                of Changunarayan. Beyond the valley, you'll journey to Pokhara for sunrise over the Annapurna 
                Himalayas and to Lumbini, where you'll walk in the footsteps of Buddha himself.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Your expert guide will bring these ancient stones to life with stories of kings and gods, tales 
                of craftsmanship and devotion, and insights into the living traditions that continue today. 
                With comfortable accommodations, seamless logistics, and expert guidance throughout, this 
                <strong className="text-[#14383b]"> UNESCO heritage walking tour</strong> is perfect for culture 
                enthusiasts, history buffs, photographers, and anyone seeking to understand the soul of Nepal.
              </p>
            </article>

            <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
              <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
              <strong>Important:</strong> Modest dress is required at temples and religious sites. Photography 
              of cremation ceremonies at Pashupatinath is strictly prohibited. Travel insurance is mandatory.
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
                "Marvel at Patan's finest Newari architecture and metal crafts",
                "Step back in time at medieval Bhaktapur and its Pottery Square",
                "Witness Hindu rituals at Pashupatinath Temple on the Bagmati River",
                "Circumambulate the massive Boudhanath Stupa with Tibetan monks",
                "Climb Swayambhunath (Monkey Temple) for panoramic valley views",
                "Visit the ancient Changunarayan Temple dating to the 4th century",
                "Witness spectacular sunrise over the Annapurna range from Sarangkot",
                "Walk in the footsteps of Buddha at Lumbini's sacred garden",
                "Explore international monasteries in Lumbini built by Buddhist countries",
                "Scenic flight from Bhairahawa to Kathmandu with aerial views",
                "Farewell dinner with traditional Nepali cultural performance",
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
                  Pleasant temperatures, blooming rhododendrons, and clear mountain views. Ideal for photography and exploring heritage sites comfortably.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Autumn (Sep-Nov)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Crystal-clear skies, perfect temperatures, and vibrant festivals including Dashain and Tihar. Peak season for cultural experiences and mountain views.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Snowflake className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Winter (Dec-Feb)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Crisp clear air, excellent mountain views, and cool sunny days. Good for sightseeing with fewer crowds. Lumbini remains pleasant for pilgrimage.
                </p>
                <span className="inline-block mt-2 bg-blue-100 text-blue-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Good</span>
              </div>
            </div>
            <p className="mt-3 text-[10px] text-[#66706d]">Note: Monsoon (Jun-Aug) brings lush green landscapes but occasional rain. Heritage sites are still accessible with umbrella/raincoat. Pokhara mountain views may be limited.</p>
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
              A visual journey through Nepal's magnificent UNESCO World Heritage Sites.
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
                  q: "What are the UNESCO World Heritage Sites included in this tour?",
                  a: "This tour includes all 7 UNESCO World Heritage Sites in the Kathmandu Valley: Kathmandu Durbar Square, Patan Durbar Square, Bhaktapur Durbar Square, Swayambhunath Stupa, Boudhanath Stupa, Pashupatinath Temple, and Changunarayan Temple. Additionally, it includes Lumbini, the birthplace of Buddha, which is also a UNESCO World Heritage Site.",
                },
                {
                  q: "Is this tour suitable for seniors or those with mobility concerns?",
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
                  q: "What is the significance of Lumbini?",
                  a: "Lumbini is one of the holiest places in the world for Buddhists as it is the birthplace of Siddhartha Gautama, who became Lord Buddha, in 623 BCE. The Mayadevi Temple marks the exact spot where Queen Mayadevi gave birth. Emperor Ashoka visited in 249 BCE and erected a pillar commemorating the site.",
                },
                {
                  q: "Can I extend this tour with trekking or other activities?",
                  a: "Absolutely! Popular extensions include: trekking in the Annapurna region (3-14 days), white water rafting on the Trishuli River, paragliding in Pokhara, mountain flight over Everest, or visiting Chitwan National Park for wildlife safaris. Please contact us for customization options.",
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready to Explore Nepal's UNESCO Heritage?</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Book your Nepal Heritage Sites Tour today and discover the ancient temples, royal palaces, and sacred sites that tell the story of this remarkable Himalayan nation.
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