"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mountain,
  Calendar,
  Clock,
  Users,
  Sparkles,
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

  const tourName = "Historic, Nature & Scenic Photography Tour";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Historic, Nature & Scenic Photography Tour - Himkala Adventure")}`;
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
                  <span>Photography Tour</span>
                </div>
                <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Historic, Nature & Scenic <br />
                  <span className="text-[#cf6943]">Photography Tour</span>
                </h1>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">
                  Capture Nepal's diverse beauty through your lens—from ancient UNESCO heritage sites and vibrant village life 
                  to Himalayan sunrises and exotic wildlife in Chitwan National Park.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                    <Camera className="w-3 h-3 inline mr-1" aria-hidden="true" />
                    Photography Focus
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    12 Days
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    Easy
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
              src="/images/used/historic-scenic-photography-nepal.webp"
              alt="Historic, Nature and Scenic Photography Tour in Nepal - capturing UNESCO heritage sites, Himalayan landscapes and wildlife"
              fill
              className="object-cover opacity-90"
              priority
              quality={85}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
              <span className="bg-[#e47a4f] text-[#fff8ee] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide rounded">
                Best: Sept-May (Year-round)
              </span>
            </div>
            <div className="absolute top-4 right-4 flex flex-wrap gap-2">
              <span className="bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-wide rounded">
                $1,895 / person
              </span>
            </div>
          </figure>
        </div>

        {/* Quick Stats - Free Walking Tour Style */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
            {[
              { label: "Duration", value: "12 Days / 11 Nights" },
              { label: "Group Size", value: "2-10 people" },
              { label: "Destinations", value: "4 Cities" },
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
                The <strong className="text-[#14383b]">Historic, Nature & Scenic Photography Tour</strong> is a 
                carefully crafted 12-day journey designed for photography enthusiasts of all levels. This tour 
                takes you through Nepal's most photogenic locations, from the ancient UNESCO heritage sites of 
                the Kathmandu Valley to the tranquil hilltop town of Bandipur, the stunning Himalayan vistas of 
                Pokhara, and the exotic wildlife of Chitwan National Park.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Nepal offers photographers an incredible diversity of subjects within a relatively small territory. 
                The medieval cities of Bhaktapur and Patan showcase exquisite Newari architecture, intricate 
                woodcarvings, and vibrant street life. The hilltop town of Bandipur provides authentic village 
                scenes and panoramic mountain views. Pokhara's serene lakes reflect the majestic Annapurna range, 
                while Sarangkot offers world-famous sunrise photography. Finally, Chitwan National Park presents 
                opportunities to capture one-horned rhinoceros, exotic birds, and Tharu village culture.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Your experienced photography guide will ensure you're at the right place at the right time for 
                the best light, offer composition tips, and help you capture stunning images throughout your 
                journey. Whether you're a beginner wanting to improve your skills or a seasoned photographer 
                seeking new subjects, this tour provides unparalleled opportunities to photograph Nepal's rich 
                cultural heritage, diverse landscapes, and incredible wildlife.
              </p>
            </article>

            <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
              <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
              <strong>Equipment Recommendations:</strong> Bring a versatile zoom lens (24-70mm), telephoto lens 
              (70-200mm or longer) for wildlife, and a wide-angle lens for landscapes. A sturdy tripod is 
              essential for sunrise/sunset shoots.
            </div>
          </div>
        </section>

        {/* Highlights - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Tour Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Best Time for Photography</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sunrise className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Spring (Mar-May)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Rhododendrons bloom across the hills. Pleasant temperatures and clear mountain views. Excellent for landscape and nature photography.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Autumn (Sep-Nov)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Crystal-clear skies, perfect mountain views, and vibrant festivals including Dashain and Tihar. Ideal for all types of photography.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Snowflake className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Winter (Dec-Feb)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Crisp clear air, snow-dusted peaks, and fewer crowds. Excellent for mountain photography. Cool but sunny days.
                </p>
                <span className="inline-block mt-2 bg-blue-100 text-blue-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Good</span>
              </div>
            </div>
            <p className="mt-3 text-[10px] text-[#66706d]">Note: Monsoon (Jun-Aug) brings lush green landscapes but limited mountain views. Still good for cultural and portrait photography in heritage sites.</p>
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
              A visual showcase of the incredible subjects you'll capture on this photography tour.
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready to Capture Nepal Through Your Lens?</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Book your Historic, Nature & Scenic Photography Tour today and capture stunning images of Nepal's diverse beauty—from ancient temples to Himalayan peaks and exotic wildlife.
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