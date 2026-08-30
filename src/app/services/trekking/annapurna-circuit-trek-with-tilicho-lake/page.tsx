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
  Flame,
  Droplets,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    "day": 1,
    "title": "Drive from Kathmandu to Besisahar by Bus & Jeep to Chame",
    "altitude": "1,400m → 820m → 2,670m",
    "distance": "175km bus / 80km jeep / 9-10 hrs total",
    "description": "Early morning departure from Kathmandu by tourist bus to Besisahar (820m), the traditional starting point of the Annapurna Circuit. The bus journey follows the Trishuli and Marsyangdi Rivers, offering stunning views of rural Nepali life, terraced farmlands, and distant Himalayan peaks. Upon arrival in Besisahar, switch to a private jeep for the rugged drive to Chame (2,670m), the district headquarters of Manang. The jeep section passes through dramatic river valleys, cascading waterfalls, and dense pine forests, with your first breathtaking glimpses of Annapurna II (7,937m) and Lamjung Himal (6,983m). This combination saves multiple trekking days while allowing proper acclimatization. Check into your teahouse and explore Chame's small bazaar and natural hot springs.",
    "overnight": "Teahouse in Chame",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic bus drive from Kathmandu to Besisahar", "Private jeep adventure to Chame", "Trishuli and Marsyangdi River views", "First views of Annapurna II and Lamjung Himal", "Chame hot springs"]
  },
  {
    "day": 2,
    "title": "Trek from Chame to Upper Pisang",
    "altitude": "2,670m → 3,300m",
    "distance": "14km / 5-6 hrs trek",
    "description": "Today's trek begins from Chame, following the Marsyangdi River through dense pine and rhododendron forests. The trail offers spectacular views of Paungda Danda, an immense curved rock face rising 1,500m from the river. You'll pass through the village of Bhratang before reaching Lower Pisang. From here, take the upper trail to Upper Pisang (3,300m), a traditional Tibetan Buddhist village perched on a hillside with a magnificent Gompa (monastery). Upper Pisang offers unrivaled views of Annapurna II, Annapurna IV (7,525m), and Pisang Peak (6,091m). The village retains authentic Tibetan architecture and culture, providing a memorable overnight experience.",
    "overnight": "Teahouse in Upper Pisang",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Paungda Danda rock face", "Pine and rhododendron forests", "Upper Pisang village", "Pisang Peak views", "Traditional Tibetan Buddhist monastery"]
  },
  {
    "day": 3,
    "title": "Trek from Upper Pisang to Manang",
    "altitude": "3,300m → 3,540m",
    "distance": "16km / 6-7 hrs trek",
    "description": "From Upper Pisang, continue along the upper trail (recommended for better views) passing through Ghyaru and Ngawal villages. The trail offers jaw-dropping panoramas of Annapurna II, Annapurna III (7,555m), Annapurna IV, Gangapurna (7,455m), and Tilicho Peak (7,134m). You'll cross several small streams and pass ancient mani walls and chortens. Descend gradually to Manang (3,540m), the largest village in the Manang Valley. Manang is a fascinating town with Tibetan-style architecture, monasteries, a medical clinic, bakeries, and gear shops. The views of Gangapurna and its glacier lake are spectacular.",
    "overnight": "Teahouse in Manang",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Upper trail via Ghyaru and Ngawal", "Annapurna II, III, IV and Gangapurna views", "Ancient mani walls and chortens", "Manang village", "Gangapurna glacier lake"]
  },
  {
    "day": 4,
    "title": "Acclimatization Day in Manang",
    "altitude": "3,540m",
    "distance": "Optional hikes (2-4 hrs)",
    "description": "A crucial rest day for proper acclimatization before the Tilicho Lake side trip and Thorong La Pass (5,416m). Today is not about idleness—active acclimatization is key. Hike to Gangapurna Lake (3,550m) for stunning glacier and mountain reflections. For a higher altitude boost, climb to the viewpoint above Manang (4,000m) or hike to Ice Lake (4,600m) for spectacular panoramas. Attend the Himalayan Rescue Association's (HRA) altitude awareness talk (highly recommended). Explore Manang's monasteries, visit the ancient Braga Monastery, or simply rest and hydrate. This day significantly increases your success rate for the challenging days ahead.",
    "overnight": "Teahouse in Manang",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Gangapurna Lake hike", "Ice Lake viewpoint (optional)", "HRA altitude awareness talk", "Braga Monastery visit", "Active acclimatization for Tilicho and Thorong La"]
  },
  {
    "day": 5,
    "title": "Trek from Manang to Shreekharka",
    "altitude": "3,540m → 4,050m",
    "distance": "12km / 5-6 hrs trek",
    "description": "Leaving Manang, the trail diverges from the main Annapurna Circuit toward the Tilicho Lake side valley. The path climbs steadily through arid, rocky terrain with spectacular views of Gangapurna and Annapurna III. You'll pass through Khangsar village, the last permanent settlement before Tilicho, with its traditional Tibetan Buddhist culture. Continue ascending to Shreekharka (4,050m), a small collection of teahouses nestled in a dramatic alpine valley. Shreekharka serves as the perfect staging point for the Tilicho Lake trek, offering stunning views of the surrounding peaks and a peaceful mountain atmosphere.",
    "overnight": "Teahouse in Shreekharka",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Divergence from main Annapurna Circuit", "Khangsar village", "Gangapurna and Annapurna III views", "Alpine landscape", "Tilicho approach valley"]
  },
  {
    "day": 6,
    "title": "Trek from Shreekharka to Tilicho Base Camp",
    "altitude": "4,050m → 4,150m",
    "distance": "10km / 5-6 hrs trek",
    "description": "Today's trek follows the dramatic Tilicho Valley, one of the most spectacular sections of the entire Annapurna region. The trail traverses steep, rocky slopes with incredible views of Tilicho Peak (7,134m) and the surrounding Himalayan giants. You'll cross several avalanche-prone sections (carefully managed by experienced guides) before arriving at Tilicho Base Camp (4,150m), a small settlement of teahouses nestled beneath the massive north face of Tilicho Peak. The afternoon is free for rest, photography, and acclimatization before tomorrow's early morning hike to Tilicho Lake—the highest lake in the world.",
    "overnight": "Teahouse at Tilicho Base Camp",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Dramatic Tilicho Valley traverse", "Tilicho Peak (7,134m) views", "Avalanche slope crossings (guided)", "Tilicho Base Camp", "Highest lake approach"]
  },
  {
    "day": 7,
    "title": "Early Hike to Tilicho Lake & Return to Shreekharka",
    "altitude": "4,150m → 4,949m → 4,050m",
    "distance": "6km to lake / 12km return / 7-8 hrs total",
    "description": "Pre-dawn start (4-5 AM) for the challenging but rewarding climb to Tilicho Lake (4,949m) — the highest lake in the world. The trail climbs steeply through rocky moraine and scree slopes, with sunrise painting Tilicho Peak and the surrounding mountains in golden light. Arrive at Tilicho Lake, a breathtaking turquoise alpine lake nestled in a glacial amphitheater with massive icebergs floating in crystal-clear waters. Witness the stunning reflection of Tilicho Peak on the lake's surface. After celebrating your achievement at this sacred site, retrace your steps back to Tilicho Base Camp for breakfast, then continue descending to Shreekharka (4,050m) for overnight. This day is the highlight of the Tilicho side trip and a once-in-a-lifetime experience.",
    "overnight": "Teahouse in Shreekharka",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Pre-dawn sunrise hike", "Tilicho Lake (4,949m) — highest lake in the world", "Turquoise waters and icebergs", "Tilicho Peak reflection", "Sacred Himalayan pilgrimage site"]
  },
  {
    "day": 8,
    "title": "Trek from Shreekharka to Ledar",
    "altitude": "4,050m → 4,200m",
    "distance": "14km / 6-7 hrs trek",
    "description": "After the challenging Tilicho Lake expedition, today rejoins the main Annapurna Circuit. Descend from Shreekharka back through Khangsar village, then take the upper trail connecting to Yak Kharka (4,050m). The landscape is arid alpine desert with panoramic views of Gangapurna, Annapurna III, and Tilicho Peak. Continue ascending gradually to Ledar (4,200m), a small teahouse settlement surrounded by grazing yaks and dramatic mountain scenery. The afternoon is free for rest, allowing your body to recover and acclimatize for the upcoming Thorong La Pass crossing.",
    "overnight": "Teahouse in Ledar",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Rejoining main Annapurna Circuit", "Khangsar village descent", "Yak Kharka and grazing yaks", "Gangapurna and Annapurna III views", "Recovery and acclimatization"]
  },
  {
    "day": 9,
    "title": "Trek from Ledar to Thorong Phedi",
    "altitude": "4,200m → 4,540m",
    "distance": "9km / 4-5 hrs trek",
    "description": "A shorter but steep day as we climb to the base of Thorong La Pass. The trail continues through arid, rocky terrain with prayer flags marking the way. You'll pass the seasonal settlement of Letdar before making the final push to Thorong Phedi (4,540m), nestled dramatically beneath the towering south face of Thorong Peak. The afternoon is crucial for preparation: rest, hydrate, organize your gear for tomorrow's 3-4 AM start. For better acclimatization, consider an optional 1-hour hike to High Camp (4,850m), which can make the pass crossing easier by reducing the total ascent on summit day. The views of the surrounding peaks from Thorong Phedi are spectacular.",
    "overnight": "Teahouse in Thorong Phedi",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Final approach to Thorong La", "Thorong Phedi base camp", "Optional High Camp hike (4,850m)", "Pass preparation and briefing", "Dramatic mountain amphitheater"]
  },
  {
    "day": 10,
    "title": "Cross Thorong La Pass to Muktinath",
    "altitude": "4,540m → 5,416m → 3,800m",
    "distance": "14km / 8-10 hrs trek",
    "description": "The biggest and most rewarding day of the Annapurna Circuit with Tilicho Lake side trip! Start at 3-4 AM with headlamps for the challenging climb to Thorong La (5,416m) — the world's highest traversable pass. The trail is steep but well-defined, with prayer flags marking the summit. At the top, celebrate your double achievement: crossing the world's highest pass after visiting the world's highest lake. Enjoy breathtaking 360-degree views of Annapurna (8,091m), Dhaulagiri (8,167m), Gangapurna (7,455m), Tilicho Peak (7,134m), and Thorong Peak (6,144m). After photos and celebrations, begin the long descent (1,600m drop) to Muktinath (3,800m), a sacred pilgrimage site for Hindus and Buddhists. Visit the Muktinath Temple with its 108 water spouts and eternal natural flame. Overnight in Muktinath, where you can reflect on your incredible double achievement.",
    "overnight": "Teahouse in Muktinath",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Thorong La Pass (5,416m) — world's highest pass", "360-degree sunrise Himalayan panorama", "Annapurna, Dhaulagiri, and Tilicho Peak views", "1,600m descent to Muktinath", "Muktinath Temple (108 water spouts and eternal flame)"]
  },
  {
    "day": 11,
    "title": "Drive from Muktinath to Pokhara by EV",
    "altitude": "3,800m → 820m",
    "distance": "200km / 6-7 hrs EV drive",
    "description": "After breakfast in Muktinath, board your private Electric Vehicle (EV) for an eco-friendly journey to Pokhara. The drive follows the Kali Gandaki River through the world's deepest gorge, with the Annapurna and Dhaulagiri ranges towering on both sides. You'll pass through the charming villages of Jomsom, Lete, Tatopani (natural hot springs), and Beni. The landscape transforms from arid alpine desert to lush subtropical forests and terraced farmlands. Arrive in Pokhara by late afternoon, the beautiful lake city with stunning views of Machhapuchhre (Fishtail) and the Annapurna range reflecting on Phewa Lake. Check into your hotel and celebrate your incredible double achievement—Tilicho Lake and Thorong La Pass—with a well-deserved dinner.",
    "overnight": "Hotel in Pokhara",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Eco-friendly EV drive", "Kali Gandaki Gorge — world's deepest gorge", "Jomsom and Tatopani hot springs views", "Arrival in Pokhara", "Phewa Lake and Machhapuchhre views"]
  },
  {
    "day": 12,
    "title": "Drive from Pokhara to Kathmandu",
    "altitude": "820m → 1,400m",
    "distance": "200km / 6-7 hrs drive",
    "description": "After a leisurely breakfast in Pokhara, begin your scenic drive back to Kathmandu along the Prithvi Highway. The journey follows the Trishuli River, offering beautiful views of river valleys, rolling hills, terraced farmlands, and distant mountain peaks. You'll pass through charming towns and witness daily Nepali rural life along the way. Arrive in Kathmandu by late afternoon. The remainder of your day is free for souvenir shopping in Thamel, exploring UNESCO World Heritage sites you may have missed, or simply relaxing after your incredible Annapurna Circuit trek adventure — having conquered the world's highest lake (Tilicho Lake at 4,949m) and the world's highest pass (Thorong La at 5,416m).",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast",
    "highlights": ["Scenic drive along Trishuli River", "Rural Nepali landscapes", "Terraced farmlands", "Thamel souvenir shopping", "Farewell to the Himalayas"]
  }
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "3 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "1 night hotel accommodation in Pokhara (3-star with breakfast)",
  "All meals during the trek (breakfast, lunch, dinner)",
  "Best available teahouse/lodge accommodation during trek",
  "Experienced English-speaking trekking guide (government licensed)",
  "Assistant guide for groups of 4 or more (essential for Tilicho side trip)",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Annapurna Conservation Area Permit (ACAP)",
  "TIMS card (Trekkers' Information Management System)",
  "Special permit for Tilicho Lake area (where required)",
  "All ground transportation as per itinerary (Kathmandu-Bhulbhule & Nayapul-Pokhara-Kathmandu)",
  "Jeep transfers for Tatopani to Ghorepani road section",
  "First aid medical kit including pulse oximeter and portable oxygen",
  "Sleeping bag and down jacket for high altitude (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Annapurna region including Tilicho",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Crampons/microspikes for Mesokanto La (if needed seasonally)",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude trekking up to 5,500m, Tilicho Lake, and helicopter evacuation)",
  "Personal trekking gear and equipment",
  "Meals in Kathmandu and Pokhara (except welcome dinner and breakfasts)",
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
    src: "/images/used/tilicho-lake-1.webp",
    alt: "Tilicho Lake at 4,920m - the world's highest lake located in the Annapurna region of Nepal",
    caption: "Tilicho Lake (4,920m) - World's Highest Lake",
  },
  {
    src: "/images/used/annapurna-circuit-1.webp",
    alt: "Chulu Mountain from Thorang High Camp on the Annapurna Circuit trek with Tilicho Lake in Nepal",
    caption: "Chulu Mountain from Thorang High Camp",
  },
  {
    src: "/images/used/annapurna-circuit-4.webp",
    alt: "Thorong La Pass at 5,416m - the world's highest traversable pass on the Annapurna Circuit in Nepal",
    caption: "Thorang La- 5416m",
  },
];

export default function AnnapurnaCircuitTilichoTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);

  const trekName = "Annapurna Circuit with Tilicho Lake Trek";
  const canonicalUrl = "https://www.himkalaadventure.com/annapurna-circuit-tilicho-lake-trek";
  const pageTitle = "Annapurna Circuit with Tilicho Lake Trek - Himkala Adventure";
  const pageDescription = "Annapurna Circuit with Tilicho Lake Trek: Visit the world's highest lake (4,920m) and cross Thorong La Pass (5,416m). The ultimate Annapurna adventure. Book now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/tilicho-lake-1.webp";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Annapurna Circuit with Tilicho Lake Trek - Himkala Adventure")}`;
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
                    <span>Annapurna Region</span>
                  </div>
                  <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Annapurna Circuit <br />
                    <span className="text-[#cf6943]">with Tilicho Lake</span>
                  </h1>
                </div>
                <div className="max-w-full md:max-w-[280px]">
                  <p className="text-sm leading-6 text-[#66706d]">
                    The ultimate Annapurna adventure - circumnavigate the massif, visit the world's highest lake, 
                    cross two high passes, and stand atop Thorong La in one epic journey.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                      <Flame className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      Very Strenuous
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      <Droplets className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      Tilicho Lake
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      5,416m
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
                src="/images/used/tilicho-lake-1.webp"
                alt="Annapurna Circuit with Tilicho Lake Trek - the world's highest lake at 4,920m in Nepal's Annapurna region with stunning mountain reflections"
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
                  $1,000 / person
                </span>
              </div>
            </figure>
          </div>

          {/* Quick Stats - Free Walking Tour Style */}
          <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
              {[
                { label: "Duration", value: "12 Days / 11 Nights" },
                { label: "Group Size", value: "2-8 people" },
                { label: "Max Altitude", value: "5,416m" },
                { label: "Difficulty", value: "Very Strenuous" },
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
                  The <strong className="text-[#14383b]">Annapurna Circuit with Tilicho Lake</strong> is the ultimate 
                  Himalayan adventure, combining the world's greatest trek with a visit to the world's highest lake. 
                  This epic journey circumnavigates the entire Annapurna massif while adding the challenging side trip 
                  to <strong className="text-[#14383b]">Tilicho Lake (4,920m)</strong>, sacred to both Hindus and 
                  Buddhists and one of the most spectacular alpine lakes on Earth.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  The route follows the classic Annapurna Circuit through 16 distinct climate zones, from subtropical 
                  forests to high-altitude desert. After acclimatizing in Manang, we venture off the main trail to 
                  Tilicho Base Camp, then ascend to the turquoise waters of Tilicho Lake surrounded by towering peaks. 
                  The adventure continues as we cross <strong className="text-[#14383b]">Mesokanto La Pass (5,100m)</strong> 
                  to rejoin the circuit, then tackle the legendary <strong className="text-[#14383b]">Thorong La Pass 
                  (5,416m)</strong> - the world's highest trekking pass.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  The journey concludes with the famous Poon Hill sunrise over the Annapurna and Dhaulagiri ranges, 
                  offering a spectacular finale to this comprehensive Himalayan experience. This trek is designed 
                  for experienced trekkers seeking the complete Annapurna experience, combining cultural immersion, 
                  challenging passes, and one of nature's most breathtaking alpine lakes.
                </p>
              </article>

              <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
                <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
                <strong>Important:</strong> Travel insurance is mandatory and must cover high altitude trekking 
                up to 5,500m, Tilicho Lake, and helicopter evacuation. This is a very strenuous trek requiring 
                excellent physical fitness and preferably previous high-altitude experience.
              </div>
            </div>
          </section>

          {/* Highlights - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Trek Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Visit Tilicho Lake (4,920m) - world's highest lake",
                  "Cross Thorong La Pass (5,416m) - world's highest pass",
                  "Cross Mesokanto La Pass (5,100m)",
                  "Spectacular sunrise from Poon Hill (3,210m)",
                  "Two high passes and the world's highest lake in one trek",
                  "Sacred Muktinath Temple",
                  "Traditional Gurung, Magar, and Tibetan villages",
                  "Natural hot springs at Tatopani",
                  "Marpha's famous apple orchards and brandy",
                  "16 distinct climate zones from tropics to arctic",
                  "Kali Gandaki - world's deepest gorge",
                  "Annapurna and Dhaulagiri mountain panoramas",
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
                    Rhododendrons bloom, warmer temperatures, good visibility. Tilicho Lake may still be frozen 
                    but creates stunning ice formations. Pass conditions are generally good.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
                </div>
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Snowflake className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Autumn (Sep - Nov)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    The most reliable season with crystal-clear skies, stable weather, and the best mountain views. 
                    Tilicho Lake is at its most beautiful turquoise color.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
                </div>
              </div>
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
                A visual journey through the ultimate Annapurna adventure - from the world's highest lake to the highest pass.
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
                    q: "How does the Tilicho Lake trek differ from the standard Annapurna Circuit?",
                    a: "The Tilicho extension adds 3-4 days to the classic circuit. You leave the main trail at Manang to visit Tilicho Lake (4,920m), the world's highest lake, then cross Mesokanto La Pass (5,100m) to rejoin the circuit at Yak Kharka before Thorong La. It's more challenging but rewards with one of the Himalayas' most spectacular lakes.",
                  },
                  {
                    q: "How difficult is the Tilicho Lake side trip?",
                    a: "The Tilicho section is very challenging. The trail to Base Camp involves a dramatic traverse with potential avalanche risk (your guide assesses conditions). The climb to the lake is steep at high altitude. Mesokanto La crossing requires good fitness and may need crampons seasonally. This section is for experienced trekkers only.",
                  },
                  {
                    q: "Is Tilicho Lake worth the extra effort?",
                    a: "Absolutely! Tilicho Lake is sacred to both Hindus and Buddhists, and its turquoise waters surrounded by snow-capped peaks create one of the most stunning scenes in the Himalayas. Many trekkers consider it the highlight of their entire Nepal experience.",
                  },
                  {
                    q: "What is the accommodation like at Tilicho Base Camp?",
                    a: "Tilicho Base Camp has basic teahouses with simple rooms and shared facilities. Due to its remote location, expect more basic amenities than on the main circuit. This adds to the adventure and sense of remoteness.",
                  },
                  {
                    q: "Can Tilicho Lake be visited in winter?",
                    a: "Winter (Dec-Feb) visits are possible but very challenging. The trail may be snow-covered and Mesokanto La can be closed. Spring (Mar-May) and autumn (Sep-Nov) are the best seasons when the lake is accessible and conditions are most favorable.",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready for the Ultimate Annapurna Adventure?</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Book your Annapurna Circuit with Tilicho Lake Trek today and conquer the world's highest lake and the world's highest pass in one epic journey.
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