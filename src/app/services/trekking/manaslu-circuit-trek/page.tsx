"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
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
  TreePine,
  PawPrint,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    "day": 1,
    "title": "Drive from Kathmandu to Machha Khola",
    "altitude": "1,400m → 890m",
    "distance": "150km / 8-9 hrs drive",
    "description": "Early morning departure from your hotel in Kathmandu for the scenic drive to Machha Khola, the traditional starting point of the Manaslu Circuit Trek. The journey follows the Trishuli River through beautiful rural landscapes, terraced farmlands, and traditional villages. You'll pass through Dhading Besi and Arughat before reaching Soti Khola. The road then continues along the Budhi Gandaki River through increasingly rugged terrain to Machha Khola (890m), a small village named for the 'fish river' that flows beside it. Check into your teahouse, meet your trekking crew, and prepare for the adventure ahead. Evening briefing on the Manaslu Circuit route, including the Larkya La Pass (5,106m) crossing.",
    "overnight": "Teahouse in Machha Khola",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic Trishuli River drive", "Arughat and Soti Khola pass through", "Budhi Gandaki River views", "Machha Khola arrival", "Manaslu Circuit briefing"]
  },
  {
    "day": 2,
    "title": "Trek from Machha Khola to Jagat",
    "altitude": "890m → 1,340m",
    "distance": "14km / 6-7 hrs trek",
    "description": "Your Manaslu Circuit trek begins! Today's trail follows the Budhi Gandaki River through a narrowing gorge with dramatic scenery. You'll cross the river multiple times on suspension bridges, passing through the villages of Khursane and Labubesi. The trail winds through subtropical forests with sal trees, bamboo, and banana plants. Watch for langur monkeys swinging through the trees. You'll pass through Khorlabesi, known for its natural hot springs, and Tatopani (meaning 'hot water') before reaching Jagat (1,340m). Jagat marks the entry point to the Manaslu Conservation Area, where your permits will be checked. This is a beautiful village perched on a ridge with traditional stone houses. Overnight in Jagat.",
    "overnight": "Teahouse in Jagat",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Budhi Gandaki River gorge", "Suspension bridge crossings", "Khorlabesi hot springs", "Manaslu Conservation Area entry", "Jagat village arrival"]
  },
  {
    "day": 3,
    "title": "Trek from Jagat to Namrung",
    "altitude": "1,340m → 2,660m",
    "distance": "15km / 7-8 hrs trek",
    "description": "A significant altitude gain day as you climb deeper into the Manaslu region. From Jagat, you cross a dramatic suspension bridge and begin climbing through terraced farmlands and forests. The trail passes through Salleri and Deng, where Tibetan influence begins to appear with mani walls, chortens, and prayer flags. As you continue climbing through rhododendron and pine forests, the landscape becomes more alpine. You'll pass through Ghap before reaching Namrung (2,660m), a picturesque village with traditional flat-roofed stone houses decorated with colorful prayer flags. Here, the Nubri Valley opens up with stunning views of the surrounding peaks. Overnight in Namrung.",
    "overnight": "Teahouse in Namrung",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Dramatic suspension bridge crossing", "First mani walls and chortens", "Rhododendron and pine forests", "Nubri Valley views", "Namrung Tibetan village"]
  },
  {
    "day": 4,
    "title": "Trek from Namrung to Shyala",
    "altitude": "2,660m → 3,520m",
    "distance": "9km / 5-6 hrs trek",
    "description": "Today you continue gaining altitude with spectacular mountain views beginning to appear. The trail passes through the villages of Lihi and Sho, with the first breathtaking glimpses of Mount Manaslu (8,163m), Ngadi Himal, and Himal Chuli. The landscape becomes more alpine with juniper forests and yak pastures. Shyala (3,520m) is a small settlement situated on a ridge with stunning panoramic views of the Manaslu range. The village has a beautiful gompa and offers opportunities to interact with local Tibetan Buddhist communities. The afternoon light on Manaslu is spectacular from this vantage point. Overnight in Shyala.",
    "overnight": "Teahouse in Shyala",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["First views of Mount Manaslu (8,163m)", "Lihi and Sho villages", "Ngadi Himal and Himal Chuli views", "Alpine juniper forests", "Shyala ridge panorama"]
  },
  {
    "day": 5,
    "title": "Trek from Shyala to Samagaon via Pungyen Gompa Hike",
    "altitude": "3,520m → 3,530m (with detour)",
    "distance": "8km / 5-6 hrs trek + hike",
    "description": "Today's highlight is the hike to the ancient Pungyen Gompa (literally 'Fairy Tale Gompa'), perched on a hillside with spectacular views of Manaslu's north face. From Shyala, you first descend slightly before climbing to the gompa, which sits at approximately 3,800m. The gompa is partly in ruins but holds deep spiritual significance for local Buddhists. From here, the panoramic views of Manaslu, Ngadi Himal, and the glacier below are breathtaking. After exploring the gompa, you continue to Samagaon (also called Sama - 3,530m), the largest village on the Manaslu Circuit. Samagaon is a traditional Tibetan village with flat-roofed stone houses, a school, several gompas, and stunning surrounding peaks. Overnight in Samagaon.",
    "overnight": "Teahouse in Samagaon",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Pungyen Gompa hike", "Manaslu north face views", "Ruins of ancient gompa", "Tibetan Buddhist spirituality", "Samagaon village arrival"]
  },
  {
    "day": 6,
    "title": "Acclimatization Day in Samagaon - Birendra Lake & Manaslu Base Camp Hike",
    "altitude": "3,530m → 4,400m → 3,530m",
    "distance": "10-12km / 5-6 hrs round trip",
    "description": "A crucial acclimatization day before the challenging Larkya La Pass crossing. The golden rule: climb high, sleep low. Today you'll experience some of the most spectacular scenery of the entire trek. Start with a morning hike to Birendra Tal (Birendra Lake), a stunning turquoise glacial lake at approximately 3,700m, fed by the melting ice of the Manaslu Glacier. The reflection of Manaslu in the crystal-clear waters is unforgettable. From there, continue toward Manaslu Base Camp (4,400m) for even closer views of the massive south face of Manaslu, hanging glaciers, and the Khumbu-like icefall. This hike is challenging but provides excellent acclimatization for the high pass ahead. Return to Samagaon for lunch. The afternoon is free to explore Samagaon village, visit the local gompa, or simply rest and hydrate. Overnight in Samagaon.",
    "overnight": "Teahouse in Samagaon",
    "meals": "Breakfast, Packed Lunch, Dinner",
    "highlights": ["Birendra Lake turquoise waters", "Manaslu Glacier views", "Manaslu Base Camp hike (4,400m)", "Manaslu south face close-up", "Acclimatization for Larkya La"]
  },
  {
    "day": 7,
    "title": "Trek from Samagaon to Samdo",
    "altitude": "3,530m → 3,860m",
    "distance": "7km / 4-5 hrs trek",
    "description": "A relatively easy day with gradual climbing, allowing for continued acclimatization. The trail follows the valley northward with spectacular views of Manaslu, Samdo Peak (6,325m), and surrounding glaciers. You'll pass through Kermo Kharka, a seasonal grazing area with yak pastures, and walk through juniper forests. Samdo (3,860m) is the last major village before the Larkya La Pass crossing. This remote settlement has strong Tibetan heritage, with locals who still speak Tibetan dialect and maintain traditional customs. Some families still trade with Tibet via the nearby Lajyang border crossing. Explore the village with its prayer wheels, mani walls, and traditional flat-roofed houses. Overnight in Samdo.",
    "overnight": "Teahouse in Samdo",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Kermo Kharka yak pastures", "Juniper forests", "Samdo Peak views", "Remote Tibetan village culture", "Samdo arrival"]
  },
  {
    "day": 8,
    "title": "Acclimatization Day in Samdo - Optional Hike to Tibet Border",
    "altitude": "3,860m → 4,200m → 3,860m",
    "distance": "8-10km / 4-5 hrs round trip",
    "description": "Another vital acclimatization day before attempting the high Larkya La Pass (5,106m) tomorrow. Today you have the option of hiking toward the Tibetan border at Lajyang (approximately 4,200m). This trail follows the valley northward, passing through stark, high-altitude landscapes with stunning views of the surrounding peaks and the Lajyang Valley. The border area is fascinating, with evidence of old trade routes between Nepal and Tibet. On clear days, you can see into the Tibetan Autonomous Region. Alternatively, you can explore the side valley toward the Gya La pass or simply rest and prepare for the challenging day ahead. Your guide will provide a detailed briefing on the Larkya La crossing, including weather conditions, pacing, and safety protocols. Overnight in Samdo.",
    "overnight": "Teahouse in Samdo",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Optional Tibet border hike (Lajyang)", "High-altitude stark landscapes", "Old Nepal-Tibet trade route", "Final acclimatization for Larkya La", "Pass crossing preparation briefing"]
  },
  {
    "day": 9,
    "title": "Trek from Samdo to Dharmasala (Larkya Phedi)",
    "altitude": "3,860m → 4,460m",
    "distance": "8km / 4-5 hrs trek",
    "description": "A short but important trek to the high camp below Larkya La Pass. The terrain becomes increasingly barren and alpine as you climb above the tree line. The trail follows the valley, passing through rocky moraine and crossing streams. You'll see stunning views of Samdo Peak, Larkya Peak, and the surrounding glaciers. Dharmasala (4,460m), also known as Larkya Phedi, is a basic stone shelter serving as the final stop before the pass crossing. The accommodation here is very basic - this is a true high-altitude camp. Rest early, organize your gear for tomorrow's pre-dawn start, and try to sleep as conditions allow. Your guide will check weather conditions and confirm the departure time (typically 3-4 AM). Overnight at Dharmasala.",
    "overnight": "Basic Lodge at Dharmasala",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Alpine terrain above tree line", "Samdo Peak and Larkya Peak views", "High camp experience", "Pass preparation", "Dharmasala arrival"]
  },
  {
    "day": 10,
    "title": "Cross Larkya La Pass & Trek to Bimthang",
    "altitude": "4,460m → 5,106m → 3,720m",
    "distance": "23km / 10-12 hrs trek",
    "description": "The most challenging and rewarding day of the Manaslu Circuit Trek! Start very early (3-4 AM) to reach the pass before weather conditions deteriorate. The climb from Dharmasala is steady on a moraine path with stone cairns marking the way. The altitude is extreme, so move slowly, breathe deeply, and rest frequently. Reaching Larkya La Pass (5,106m) - the highest point of the trek - is an indescribable feeling. Prayer flags flutter in the wind as you take in the 360-degree panoramic views: Mount Manaslu (8,163m), Himlung Himal (7,126m), Cheo Himal (6,820m), Gyaji Kang, Kang Guru, and Annapurna II in the distance. After celebrating at the pass, begin the long descent to Bimthang (3,720m) through glacial moraine, past yak pastures, and finally into a beautiful valley with rhododendron forests. This is a very long, tiring day but absolutely unforgettable. Overnight in Bimthang.",
    "overnight": "Teahouse in Bimthang",
    "meals": "Breakfast, Packed Lunch, Dinner",
    "highlights": ["Larkya La Pass crossing (5,106m)", "360-degree Himalayan panorama", "Manaslu, Himlung, Annapurna views", "Prayer flag-adorned summit", "Glacial moraine and descent"]
  },
  {
    "day": 11,
    "title": "Trek from Bimthang to Tilje & Jeep to Besisahar",
    "altitude": "3,720m → 2,300m → 760m",
    "distance": "12km trek / 3-4 hrs trek + 4-5 hrs jeep",
    "description": "Your final day of trekking on the Manaslu Circuit. From Bimthang, the trail descends through beautiful rhododendron and pine forests, passing through the villages of Gho, Karche, and finally Tilje (2,300m). You'll cross several streams and suspension bridges, with the landscape transforming from alpine to subtropical. The views back toward the Manaslu range are spectacular. Upon arrival in Tilje, you'll board a private jeep for the scenic drive to Besisahar (760m), the district headquarters of Lamjung and the traditional trailhead for the Annapurna Circuit. The jeep drive follows the Marsyangdi River through dramatic gorges and past terraced farmlands. Arrive in Besisahar by late afternoon. Check into your teahouse and celebrate your incredible achievement - crossing Larkya La Pass (5,106m) and completing the Manaslu Circuit! Overnight in Besisahar.",
    "overnight": "Teahouse in Besisahar",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Final day of Manaslu Circuit trek", "Rhododendron and pine forests", "Tilje village arrival", "Scenic jeep ride to Besisahar", "Manaslu Circuit completion celebration"]
  },
  {
    "day": 12,
    "title": "Bus from Besisahar to Kathmandu",
    "altitude": "760m → 1,400m",
    "distance": "180km / 7-8 hrs bus",
    "description": "After breakfast in Besisahar, board a tourist bus for the scenic drive back to Kathmandu. The journey follows the Marsyangdi River valley before joining the Trishuli River, passing through beautiful landscapes, terraced farmlands, traditional villages, and dramatic river gorges. The bus journey is a wonderful opportunity to relax, reflect on your Manaslu Circuit adventure, and watch the world go by. You'll pass through Besisahar, Dumre, and eventually reach the outskirts of the Kathmandu Valley. Arrive in Kathmandu by late afternoon. Check into your hotel in Thamel, take a well-deserved hot shower, and enjoy the comforts of the city. The remainder of your day is free for souvenir shopping in Thamel, visiting a spa for a much-needed massage, or simply relaxing. In the evening, enjoy a farewell dinner celebrating your successful Manaslu Circuit trek achievement - crossing Larkya La Pass at 5,106m and completing one of Nepal's most spectacular restricted area treks.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic bus journey to Kathmandu", "Marsyangdi and Trishuli Rivers", "Rural Nepali landscapes", "Thamel souvenir shopping", "Farewell celebration dinner"]
  }
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "2 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "All meals during the trek (breakfast, lunch, dinner)",
  "Best available teahouse/lodge accommodation during trek",
  "Experienced English-speaking trekking guide (government licensed)",
  "Assistant guide for groups of 5 or more",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Manaslu Restricted Area Permit",
  "Manaslu Conservation Area Permit (MCAP)",
  "Annapurna Conservation Area Permit (ACAP)",
  "TIMS card (Trekkers' Information Management System)",
  "All ground transportation as per itinerary",
  "First aid medical kit",
  "Oximeter to check pulse and oxygen saturation",
  "Sleeping bag (can be returned after trek)",
  "Down jacket for high altitude (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Manaslu region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude trekking & emergency evacuation)",
  "Personal trekking gear and equipment",
  "Meals in Kathmandu (except welcome dinner and breakfasts)",
  "Bottled/mineral water during trek (purification tablets provided)",
  "Hot showers and battery charging at lodges ($2-5 per use)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, bar bills, souvenirs)",
  "Tips and gratuities for guides and porters (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, landslides, political unrest)",
];

const gallery = [
  {
    src: "/images/used/manaslu-main-page.webp",
    alt: "Mount Manaslu at 8,163m - the eighth highest mountain in the world viewed from the Manaslu Circuit trek in Nepal",
    caption: "Mount Manaslu (8,163m)",
  },
  {
    src: "/images/used/manaslu-3.webp",
    alt: "Pungyen Gompa - ancient Buddhist monastery located at the base of Mount Manaslu on the Manaslu Circuit trek in Nepal",
    caption: "Pungyen Gompa located at the base of Manaslu",
  },
  {
    src: "/images/used/manaslu-4.webp",
    alt: "Birendra Lake - stunning turquoise glacial lake fed by the Manaslu Glacier on the Manaslu Circuit trek in Nepal",
    caption: "Birendra Lake-- Manaslu glacial lake",
  },
  {
    src: "/images/used/manaslu-2.webp",
    alt: "Trail to Namrung - traditional Tibetan Buddhist village on the Manaslu Circuit trekking route in Nepal",
    caption: "Way to Namrung",
  },
];

export default function ManasluCircuitTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);

  const trekName = "Manaslu Circuit Trek";
  const canonicalUrl = "https://www.himkalaadventure.com/manaslu-circuit-trek";
  const pageTitle = "Manaslu Circuit Trek - Himkala Adventure";
  const pageDescription = "Manaslu Circuit Trek: Circumnavigate Mount Manaslu (8,163m) and cross Larkya La Pass at 5,106m. A remote Himalayan adventure in Nepal's restricted area. Book now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/manaslu-1.webp";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Manaslu Circuit Trek - Himkala Adventure")}`;
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  };

  const toggleDay = (day: number) => {
    setExpandedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Himkala Adventure" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:site" content="@himkalanepal" />
        <meta name="twitter:creator" content="@himkalanepal" />
      </Head>

      <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
        <main>
          {/* Header - Free Walking Tour Style */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto max-w-[880px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                    <span className="h-px w-6 sm:w-8 bg-[#cf6943]" />
                    <span>Manaslu Region</span>
                  </div>
                  <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Manaslu <br />
                    <span className="text-[#cf6943]">Circuit Trek</span>
                  </h1>
                </div>
                <div className="max-w-full md:max-w-[280px]">
                  <p className="text-sm leading-6 text-[#66706d]">
                    Circumnavigate the world's eighth highest mountain through remote Tibetan villages, 
                    ancient monasteries, and cross the legendary Larkya La Pass at 5,106 meters.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                      Challenging
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      <MapPin className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      Restricted Area
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      5,106m
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
                src="/images/used/manaslu-1.webp"
                alt="Manaslu Circuit Trek - circumnavigating Mount Manaslu at 8,163m in Nepal's restricted Manaslu region with dramatic mountain views"
                fill
                className="object-cover opacity-90"
                priority
                quality={85}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
                <span className="bg-[#e47a4f] text-[#fff8ee] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide rounded">
                  Best Season: Mar-May, Sep-Nov
                </span>
              </div>
              <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                <span className="bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-wide rounded">
                  $1,200 / person
                </span>
              </div>
            </figure>
          </div>

          {/* Quick Stats - Free Walking Tour Style */}
          <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
              {[
                { label: "Duration", value: "12 Days / 11 Nights" },
                { label: "Group Size", value: "2-12 people" },
                { label: "Max Altitude", value: "5,106m" },
                { label: "Difficulty", value: "Challenging" },
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
                  The <strong className="text-[#14383b]">Manaslu Circuit Trek</strong> is one of Nepal's most 
                  rewarding yet challenging treks, circumnavigating <strong className="text-[#14383b]">Mount 
                  Manaslu (8,163m)</strong>, the eighth highest mountain in the world. Often called the 
                  "Killer Mountain" due to its steep faces and unpredictable weather, Manaslu offers trekkers 
                  a unique blend of natural beauty and cultural immersion on this 
                  <strong className="text-[#14383b]"> Manaslu Circuit trekking</strong> adventure.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  Unlike the more popular Annapurna and Everest regions, the Manaslu area remained 
                  closed to foreigners until 1991. This restricted access has preserved its pristine 
                  environment and authentic Tibetan Buddhist culture, making it one of the most 
                  rewarding <strong className="text-[#14383b]">trekking in Nepal</strong> experiences.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  The crown jewel of this trek is the crossing of <strong className="text-[#14383b]">Larkya 
                  La Pass (5,106m)</strong>, one of the highest and most spectacular passes in Nepal, 
                  offering breathtaking views of Manaslu, Himlung Himal, Cheo Himal, and Annapurna II. 
                  The journey takes you through lush subtropical forests, alpine meadows, and remote 
                  Tibetan Buddhist villages, with highlights including the ancient Pungyen Gompa, 
                  Birendra Lake, and the optional climb to Manaslu Base Camp.
                </p>
              </article>

              <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
                <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
                <strong>Important:</strong> The Manaslu region is a restricted area requiring special permits. 
                You must trek with a licensed guide and travel insurance must cover high altitude trekking 
                up to 5,500m and helicopter evacuation.
              </div>
            </div>
          </section>

          {/* Highlights - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Trek Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Cross Larkya La Pass at 5,106m",
                  "Spectacular views of Mount Manaslu (8,163m)",
                  "Explore remote Tibetan Buddhist villages",
                  "Visit ancient Pungyen Gompa monastery",
                  "Hike to Birendra Lake and Manaslu Base Camp",
                  "Experience authentic Tibetan culture",
                  "Diverse landscapes from subtropical to alpine",
                  "Less crowded trails than Everest or Annapurna",
                  "Rich biodiversity including langur monkeys",
                  "Circumnavigate the world's eighth highest mountain",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Best Time to Trek</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Sunrise className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Spring (Mar - May)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    Rhododendrons bloom in vibrant colors, temperatures warm up, and skies are generally 
                    clear. The best time for photography with colorful landscapes.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
                </div>
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Snowflake className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Autumn (Sep - Nov)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    The most popular season with stable weather, crystal-clear visibility, and comfortable 
                    temperatures. Perfect for crossing Larkya La Pass.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
                </div>
              </div>
              <p className="mt-3 text-[10px] text-[#66706d]">Note: Winter (Dec-Feb) is extremely cold with heavy snow, making the pass crossing dangerous. Monsoon (Jun-Aug) brings rain and leeches, with possible landslides.</p>
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
                A visual journey through the Manaslu Circuit - from remote villages to the majestic Larkya La Pass.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {gallery.map((image, i) => (
                  <div key={i} className="relative h-28 sm:h-40 rounded-lg overflow-hidden bg-[#d8cec0]">
                    <Image 
                      src={image.src} 
                      alt={image.alt} 
                      fill 
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 640px) 50vw, 25vw"
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
                    q: "How difficult is the Manaslu Circuit Trek?",
                    a: "The trek is rated as challenging due to its length (12 days), high altitude (crossing Larkya La at 5,106m), and remote terrain. Good physical fitness is essential, and previous trekking experience at altitude is recommended.",
                  },
                  {
                    q: "Do I need a guide for this trek?",
                    a: "Yes, the Manaslu region is a restricted area, and trekking independently is not permitted. You must be accompanied by a licensed guide and have all necessary permits arranged through a registered trekking agency.",
                  },
                  {
                    q: "What about altitude sickness?",
                    a: "The itinerary includes two acclimatization days (at Samagaon and Samdo) to help your body adjust. Our guides are trained in altitude sickness recognition and carry oximeters. We recommend proper hydration and pacing.",
                  },
                  {
                    q: "What is the accommodation like?",
                    a: "Accommodation is in basic teahouses/lodges throughout the trek. Expect simple rooms with twin beds, shared bathrooms, and limited facilities. Hot showers and charging are available at extra cost in most places.",
                  },
                  {
                    q: "Is the Manaslu trek crowded?",
                    a: "No, Manaslu sees far fewer trekkers than Everest or Annapurna regions due to permit restrictions and its remote nature. This is one of its biggest attractions - you'll enjoy a more authentic and peaceful experience.",
                  },
                  {
                    q: "What permits are required?",
                    a: "You need three permits: the Manaslu Restricted Area Permit (RAP), Manaslu Conservation Area Permit (MCAP), and Annapurna Conservation Area Permit (ACAP). All are arranged by Himkala Adventure as part of your package.",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready to Circumnavigate Manaslu?</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Book your Manaslu Circuit Trek today and experience one of Nepal's most spectacular restricted area treks, 
                circumnavigating the world's eighth highest mountain and crossing the legendary Larkya La Pass at 5,106 meters.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link href={`/contact?trek=${encodeURIComponent(trekName)}`}>
                  <Button className="bg-[#cf6943] hover:bg-[#b85a38] text-white font-bold rounded-full px-6 py-2 text-sm">
                    <Heart className="w-4 h-4 mr-2" aria-hidden="true" />
                    Book This Trek
                  </Button>
                </Link>
                <a 
                  href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about the ${trekName}.`)}`}
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
    </>
  );
}