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
  Sparkles,
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
    "title": "Kathmandu Valley Heritage Tour - Four UNESCO Sites",
    "altitude": "1,350m",
    "distance": "Full day tour",
    "description": "After breakfast, begin your heritage journey at Kathmandu Durbar Square (Hanuman Dhoka), the historic seat of Nepalese royalty and a UNESCO World Heritage Site. Explore the ancient palace complex with its intricately carved wooden windows, including the famous Kumari Ghar - home to the Living Goddess Kumari. If you're lucky, you may catch a glimpse of the Kumari at her window. Continue to Swayambhunath Stupa (Monkey Temple), perched on a hilltop west of the city. Climb the 365 stone steps past meditation shrines, prayer wheels, and the resident monkeys who give the temple its nickname. At the top, admire the main stupa with its all-seeing eyes of Buddha painted on all four sides. Enjoy panoramic views of the entire Kathmandu Valley and the surrounding Himalayan peaks on clear days. After lunch, visit Pashupatinath Temple, one of the holiest Hindu temples in the world dedicated to Lord Shiva, located on the sacred banks of the Bagmati River. Observe afternoon puja (worship) rituals, cremation ceremonies along the river ghats, and the fascinating sadhus (holy men) with their distinctive face paint, dreadlocks, and ash-smeared bodies. End the day at Boudhanath Stupa, one of the largest spherical stupas in South Asia and the center of Tibetan Buddhism in Nepal. Circumambulate the massive mandala (the kora) while spinning prayer wheels, observing Tibetan monks in maroon robes, and listening to the continuous chanting. Return to hotel for dinner.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Kathmandu Durbar Square", "Kumari Living Goddess", "Swayambhunath Stupa (Monkey Temple)", "365 steps with valley views", "Pashupatinath Temple & sadhus", "Boudhanath Stupa", "Tibetan Buddhist culture"]
  },
  {
    "day": 3,
    "title": "Drive from Kathmandu to Pokhara - Lakeside Paradise",
    "altitude": "1,350m → 820m",
    "distance": "6-7 hrs drive / 200km",
    "description": "After breakfast, begin the scenic drive to Pokhara, Nepal's most beautiful lakeside city and the gateway to the Annapurna region. The journey follows the Prithvi Highway through river valleys, terraced farmlands, and subtropical forests along the Trishuli River. Stop en-route at various viewpoints overlooking the Marsyangdi and Trishuli Rivers, with opportunities for photos and refreshments. On clear days, enjoy distant views of the Annapurna range, Manaslu, and Ganesh Himal. Arrive in Pokhara by mid-afternoon and check into your lakeside hotel. Evening free to explore the Lakeside promenade with its cafes, shops, and restaurants offering international cuisine. Optional boat ride on Phewa Lake at sunset to capture the reflection of Machhapuchhre (Fishtail) mountain in the calm waters. Overnight in Pokhara.",
    "overnight": "Hotel in Pokhara",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic Prithvi Highway drive", "Trishuli River viewpoints", "Distant Annapurna and Manaslu views", "Lakeside promenade", "Sunset at Phewa Lake"]
  },
  {
    "day": 4,
    "title": "Sarangkot Sunrise & Pokhara Valley Exploration",
    "altitude": "820m → 1,592m → 820m",
    "distance": "1 hr drive each way",
    "description": "Pre-dawn departure (4:30 AM) to Sarangkot hill station for the most spectacular sunrise photography in Nepal. Watch the first light illuminate the Annapurna range including Annapurna South (7,219m), Annapurna I (8,091m), Annapurna II (7,937m), Machhapuchhre (Fishtail - 6,993m), and Dhaulagiri (8,167m). The panoramic views from Sarangkot are absolutely breathtaking. After sunrise, return to hotel for breakfast. Mid-morning, visit Davis Falls, an interesting waterfall on the Bagmati River that disappears into underground caves and tunnels. Adjacent to the falls is Gupteshwor Cave, a sacred limestone cave with a massive shivalinga and views of the waterfall from within. After lunch, explore the International Mountain Museum (IMM), which features exhibits on Himalayan mountaineering, the history of Everest expeditions, the culture of mountain communities, and displays of the world's highest peaks. Late afternoon, enjoy a boat ride on Phewa Lake to the Tal Barahi Temple, a two-story pagoda temple dedicated to the goddess Barahi, located on a small island in the middle of the lake. Capture the stunning reflection of Machhapuchhre mountain in the calm lake waters as the sun sets. Overnight in Pokhara.",
    "overnight": "Hotel in Pokhara",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Sarangkot sunrise (4:30 AM start)", "Annapurna & Dhaulagiri panorama", "Machhapuchhre (Fishtail) views", "Davis Falls underground", "Gupteshwor Cave", "International Mountain Museum", "Phewa Lake boat ride", "Tal Barahi Temple"]
  },
  {
    "day": 5,
    "title": "Drive from Pokhara to Lumbini - Birthplace of Buddha",
    "altitude": "820m → 150m",
    "distance": "5-6 hrs drive / 180km",
    "description": "After breakfast, drive south from Pokhara to Lumbini, the birthplace of Lord Buddha and one of the holiest pilgrimage sites in the world. The journey descends from the Himalayan foothills (820m) down to the flat Terai plains (150m), with dramatically changing landscapes along the way - from subtropical forests and winding mountain roads to open agricultural fields and rural villages. You'll pass through the cities of Palpa and Butwal, with opportunities to see traditional Terai culture and lifestyles. Arrive in Lumbini by early afternoon. Check into your hotel and take a short rest. In the afternoon, take a gentle orientation walk around the Lumbini Sacred Garden area to get acquainted with this peaceful pilgrimage site. Visit the Puskarini Sacred Pond, where Queen Mayadevi is said to have bathed before giving birth to Buddha. As the sun sets, experience the peaceful chanting of prayers from nearby monasteries. Overnight in Lumbini.",
    "overnight": "Hotel in Lumbini",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic drive from Pokhara to Lumbini", "Descend from hills to Terai plains", "Palpa and Butwal pass through", "Lumbini arrival", "Puskarini Sacred Pond", "Peaceful evening atmosphere"]
  },
  {
    "day": 6,
    "title": "Lumbini Exploration - Sacred Garden & International Monasteries",
    "altitude": "150m",
    "distance": "Full day exploration",
    "description": "Today is dedicated to the full exploration of Lumbini, the birthplace of Lord Buddha and a UNESCO World Heritage Site. Start early with a morning visit to the Sacred Garden, the heart of Lumbini. Enter through the majestic Dharma Swami Maharaja Gate and walk the peaceful paths to the Mayadevi Temple, the most sacred site in Lumbini where Queen Mayadevi gave birth to Siddhartha Gautama in 623 BCE. Inside the temple, see the ancient Marker Stone that pinpoints the exact birthplace of Buddha. Adjacent to the temple is the Ashoka Pillar, erected by Emperor Ashoka in 249 BCE during his pilgrimage to Lumbini, with inscriptions in Brahmi script confirming the site as Buddha's birthplace. Explore the excavated remains of ancient monasteries and stupas dating back to the 3rd century BCE to the 5th century CE. After lunch, visit the International Monastic Zone, where Buddhist communities from around the world have built temples, stupas, and monasteries in their traditional architectural styles. Visit the magnificent Myanmar (Burmese) Temple with its golden spire, the Chinese Temple with its beautiful gardens and traditional Chinese architecture, the Japanese Peace Stupa, the Thai Monastery, the Vietnamese Temple, and the Korean Temple. Each monastery offers unique art, architecture, and spiritual atmosphere. In the late afternoon, visit the World Peace Pagoda (Shanti Stupa), a gleaming white stupa built by Japanese Buddhists, offering panoramic views of the entire Lumbini area. End your day at the Eternal Peace Flame and the Lumbini Museum, which houses artifacts, manuscripts, and photographs related to Buddha's life and Buddhist history. As evening falls, you may choose to participate in meditation sessions or listen to chanting at one of the monasteries. Overnight in Lumbini.",
    "overnight": "Hotel in Lumbini",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Mayadevi Temple - Buddha's birthplace", "Marker Stone and Ashoka Pillar (249 BCE)", "Ancient monastery ruins", "International Monasteries (Myanmar, China, Japan, Thailand)", "World Peace Pagoda", "Eternal Peace Flame", "Lumbini Museum", "Evening meditation optional"]
  },
  {
    "day": 7,
    "title": "Drive from Lumbini to Chitwan National Park",
    "altitude": "150m → 415m",
    "distance": "4-5 hrs drive / 120km",
    "description": "After breakfast, drive east from Lumbini to Chitwan National Park, Nepal's first national park and a UNESCO World Heritage Site. The journey continues through the flat Terai plains with rural landscapes, traditional Tharu villages, and agricultural fields. You'll pass through the town of Bhairahawa and continue along the East-West Highway (Mahendra Highway). The drive is relatively short (4-5 hours) and offers glimpses of daily Terai life - farmers tending their fields, women carrying goods, and children walking to school. Arrive at your jungle resort in Chitwan (Sauraha) by late morning or early afternoon. Check into your resort and enjoy a welcome drink with an orientation about the resort and the various safari activities available. After lunch, take a guided village tour to learn about the Tharu culture, traditional mud houses, and local way of life. Visit the Tharu Cultural Museum to see artifacts, tools, and displays about this indigenous community. In the evening, enjoy a spectacular Tharu cultural dance performance at the resort or local community center, featuring traditional sticks dancing and peacock dances. Overnight at jungle resort in Chitwan.",
    "overnight": "Jungle Resort in Chitwan (Sauraha)",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic drive through Terai plains", "Tharu village views", "Chitwan National Park arrival", "Jungle resort check-in", "Tharu village tour", "Tharu Cultural Museum", "Tharu cultural dance performance"]
  },
  {
    "day": 8,
    "title": "Chitwan National Park Safari - Wildlife & Nature",
    "altitude": "415m",
    "distance": "Full day safari",
    "description": "A full day of wildlife adventure in Chitwan National Park! Start early with a pre-breakfast jungle walk or bird watching tour with your naturalist guide. The early morning is the best time for bird watching, with over 500 species recorded in the park. Return to the resort for breakfast. After breakfast, embark on a jeep safari (4-5 hours) into the core area of Chitwan National Park for wildlife viewing. The park is home to the endangered one-horned rhinoceros (over 600 individuals), Bengal tigers (estimated over 120), leopards, sloth bears, wild elephants, crocodiles (both marsh muggers and gharials), deer species (spotted deer, sambar, barking deer), langur and macaque monkeys, and wild boars. Your naturalist guide will navigate through grasslands, forests, and along river banks for optimal wildlife sightings. After lunch at the resort, enjoy a tranquil canoe ride along the Rapti River (approx 1 hour). Photograph aquatic birds, basking crocodiles, and riverside wildlife while floating downstream. Visit the Elephant Breeding Center at Khorsor, where you can see baby elephants and learn about conservation efforts. Late afternoon, you may choose to visit a crocodile breeding center, take an ox-cart ride through local villages, or simply relax by the river with your camera and watch the sunset over the jungle. Overnight at jungle resort in Chitwan.",
    "overnight": "Jungle Resort in Chitwan (Sauraha)",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Pre-breakfast bird watching", "Jeep safari (4-5 hours)", "One-horned rhinoceros", "Bengal tiger possibility", "Crocodiles and gharials", "Canoe ride on Rapti River", "Elephant Breeding Center", "Sunset over the jungle"]
  },
  {
    "day": 9,
    "title": "Return to Kathmandu - Flight Option",
    "altitude": "415m → 1,350m",
    "distance": "20 min flight + transfer",
    "description": "After breakfast at the jungle resort, transfer to Bharatpur Airport (approx 30 minutes drive) for a scenic 20-minute flight back to Kathmandu. The short flight offers spectacular aerial views of the Himalayan foothills, the Terai plains, terraced landscapes, and on clear days, distant views of the Annapurna and Manaslu ranges. Upon arrival at Tribhuvan International Airport in Kathmandu, our representative will meet you and transfer you to your hotel in Thamel. Check into your hotel and freshen up. The afternoon is free for personal exploration - you may choose to do last-minute souvenir shopping in Thamel, visit a spa for a relaxing massage, explore additional sights you may have missed, or simply rest after your incredible journey. In the evening, enjoy a farewell dinner at a traditional Nepali restaurant with cultural music and dance performance. Celebrate your incredible journey through Nepal's cultural and natural heritage - from medieval temples and Himalayan sunrises to the birthplace of Buddha and the wild jungles of Chitwan. Overnight in Kathmandu.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast, Dinner",
    "highlights": ["Scenic flight to Kathmandu (20 min)", "Aerial Himalayan foothill views", "Thamel souvenir shopping", "Spa and relaxation", "Farewell dinner with cultural performance"]
  },
  {
    "day": 10,
    "title": "Departure from Kathmandu",
    "altitude": "1,350m",
    "distance": "-",
    "description": "Transfer to Tribhuvan International Airport for your departure flight. Our representative will ensure you reach the airport with plenty of time, assist with check-in, and bid you farewell. Bid farewell to Nepal with memories of exploring ancient temples in the Kathmandu Valley, witnessing spectacular Himalayan sunrise from Sarangkot, walking in the footsteps of Lord Buddha in Lumbini, and encountering exotic wildlife in the jungles of Chitwan. Take home the sights, sounds, spiritual energy, and warm hospitality of this incredible Himalayan nation. Namaste and until we meet again for another adventure in Nepal!",
    "overnight": "-",
    "meals": "Breakfast",
    "highlights": ["Airport transfer", "Departure assistance", "Fond farewells", "Heritage, nature, and pilgrimage memories"]
  }
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
    src: "/images/used/nepal-heritage-sites-tour-nepal.webp",
    alt: "Boudhanath Stupa - massive Buddhist stupa and center of Tibetan Buddhism in Kathmandu, UNESCO World Heritage Site",
    caption: "Boudhanath Stupa - Center of Tibetan Buddhism in Kathmandu",
  },
  {
    src: "/images/used/pokhara-1.webp",
    alt: "Phewa Lake with Machhapuchhre (Fishtail) mountain reflection, Pokhara's beautiful lakeside paradise",
    caption: "Phewa Lake with Machhapuchhre reflection, Pokhara",
  },
  {
    src: "/images/used/lumbini-1.webp",
    alt: "Mayadevi Temple - sacred birthplace of Lord Buddha in Lumbini, UNESCO World Heritage Site",
    caption: "Mayadevi Temple - Birthplace of Buddha, Lumbini",
  },
  {
    src: "/images/used/nepal-chitwan.webp",
    alt: "One-horned rhinoceros in Chitwan National Park, UNESCO World Heritage Site and wildlife sanctuary in Nepal",
    caption: "One-horned rhinoceros in Chitwan National Park",
  },
  {
    src: "/images/used/monkey_temple.webp",
    alt: "Swayambhunath Stupa (Monkey Temple) with all-seeing eyes of Buddha, Kathmandu Valley UNESCO World Heritage Site",
    caption: "Swayambhunath Stupa (Monkey Temple), Kathmandu",
  },
];

export default function KathmanduPokharaLumbiniChitwanTourPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);

  const tourName = "Kathmandu, Pokhara, Lumbini & Chitwan Grand Tour";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Kathmandu, Pokhara, Lumbini & Chitwan Grand Tour - Himkala Adventure")}`;
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
                  Kathmandu, Pokhara, Lumbini <br />
                  <span className="text-[#cf6943]">& Chitwan Grand Tour</span>
                </h1>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">
                  Experience the complete essence of Nepal—from ancient temples and Himalayan sunrises to the birthplace of Buddha 
                  and wildlife encounters in the jungle—on this comprehensive cultural and natural journey.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                    Easy
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    <Compass className="w-3 h-3 inline mr-1" aria-hidden="true" />
                    4 Destinations
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
              src="/images/used/kathmandu-lumbini-pokhara-nepal.webp"
              alt="Kathmandu Pokhara Lumbini Chitwan Grand Tour - Experience Nepal's cultural heritage, Himalayan sunrises, Buddha's birthplace, and wildlife safaris"
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
                $2,200 / person
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
                The <strong className="text-[#14383b]">Kathmandu, Pokhara, Lumbini & Chitwan Grand Tour</strong> is 
                a comprehensive 10-day journey that showcases the incredible diversity of Nepal—from ancient cultural 
                heritage and spiritual pilgrimage to stunning mountain landscapes and wildlife adventures. This 
                <strong className="text-[#14383b]"> Nepal multi-destination tour</strong> is designed for travelers 
                who want to experience the complete essence of Nepal in a single, well-paced itinerary.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Begin in the Kathmandu Valley, exploring UNESCO World Heritage Sites including the living goddess 
                Kumari, the sacred Hindu temple of Pashupatinath, and the massive Buddhist stupa of Boudhanath. 
                Travel to the lakeside paradise of Pokhara for sunrise over the Annapurna Himalayas from Sarangkot 
                and serene boat rides on Phewa Lake. Journey south to Lumbini, the birthplace of Lord Buddha, where 
                you'll walk in the footsteps of the enlightened one through the sacred garden and international 
                monasteries. Conclude in Chitwan National Park for thrilling wildlife safaris, encountering 
                one-horned rhinoceros, exotic birds, and experiencing Tharu village culture.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                This <strong className="text-[#14383b]">Nepal cultural and wildlife tour</strong> offers the 
                perfect balance of culture, nature, and adventure with comfortable accommodations, expert guiding, 
                and seamless logistics. Whether you're a history enthusiast, spiritual seeker, nature lover, or 
                wildlife photographer, this journey through Nepal's heartland will leave you with unforgettable 
                memories and a deep appreciation for this remarkable country.
              </p>
            </article>

            <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
              <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
              <strong>Important:</strong> Modest dress is required at temples. Wildlife sightings in Chitwan 
              are subject to nature—rhino sightings are 95%+ successful, but tigers are elusive. Travel 
              insurance is mandatory.
            </div>
          </div>
        </section>

        {/* Highlights - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Tour Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Best Time to Visit Nepal</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sunrise className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Spring (Mar-May)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Pleasant temperatures, blooming rhododendrons, and clear mountain views. Ideal for all destinations with excellent wildlife viewing in Chitwan.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Autumn (Sep-Nov)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Crystal-clear skies, perfect temperatures, and vibrant festivals including Dashain and Tihar. Peak season for mountain views and cultural experiences.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Snowflake className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Winter (Dec-Feb)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Crisp clear air, excellent mountain views, and cool sunny days. Good for sightseeing with fewer crowds. Chitwan remains pleasant for wildlife viewing.
                </p>
                <span className="inline-block mt-2 bg-blue-100 text-blue-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Good</span>
              </div>
            </div>
            <p className="mt-3 text-[10px] text-[#66706d]">Note: Monsoon (Jun-Aug) brings lush green landscapes but occasional rain. Lumbini and Chitwan are still accessible with umbrella/raincoat. Pokhara mountain views may be limited.</p>
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
              A visual journey through Nepal's diverse landscapes - from ancient temples to Himalayan lakes and wildlife.
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready for Your Grand Nepal Adventure?</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Book your Kathmandu, Pokhara, Lumbini & Chitwan Grand Tour today and experience the complete essence of Nepal—from ancient temples to Himalayan peaks and wildlife jungles.
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