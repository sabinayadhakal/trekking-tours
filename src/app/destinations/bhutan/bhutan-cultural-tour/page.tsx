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
  Landmark,
  Church,
  Compass,
  Trees,
  Cloud,
  MountainSnow,
  Gem,
  Medal,
  Wind,
  ScrollText,
  Soup,
  Cherry,
  Library,
  Warehouse,
  Milestone,
  Castle,
  Flower2,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Paro & Drive to Thimphu",
    altitude: "2,280m → 2,320m",
    distance: "50km / 1.5 hrs drive",
    description: "Welcome to the Land of the Thunder Dragon! Upon arrival at Paro International Airport, you'll be greeted by our representative with a traditional Bhutanese scarf (khata) welcome. Drive through the picturesque Paro Valley alongside the Pachu River, ascending gradually to Bhutan's capital city, Thimphu. After check-in at your hotel, visit the Buddha Dordenma statue - one of the largest Buddha statues in the world at 51.5 meters. Evening exploration of Thimphu's main street and visit to the local craft market. Welcome dinner with traditional Bhutanese cuisine.",
    overnight: "Hotel in Thimphu",
    meals: "Dinner",
    highlights: ["Traditional scarf welcome", "Buddha Dordenma viewpoint", "Thimphu craft market", "Welcome dinner"],
  },
  {
    day: 2,
    title: "Full Day Thimphu Sightseeing",
    altitude: "2,320m",
    distance: "Local sightseeing",
    description: "Full day exploring the cultural treasures of Thimphu. Morning visit to the iconic Tashichho Dzong ('Fortress of the Glorious Religion'), the seat of Bhutan's government and summer residence of the monastic body. Continue to the National Memorial Chorten, built in 1974 in memory of the third King. Visit the School of Arts and Crafts (Zorig Chusum) where students learn traditional Bhutanese painting and sculpture. Afternoon visit to the Folk Heritage Museum and Textile Museum showcasing traditional Bhutanese life and weaving arts. End the day at the massive Buddha Dordenma viewpoint for sunset photos.",
    overnight: "Hotel in Thimphu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Tashichho Dzong", "National Memorial Chorten", "Arts and Crafts School", "Folk Heritage Museum", "Textile Museum"],
  },
  {
    day: 3,
    title: "Thimphu to Punakha via Dochula Pass",
    altitude: "2,320m → 3,100m → 1,300m",
    distance: "75km / 3 hrs drive",
    description: "After breakfast, drive eastward toward Punakha, crossing the spectacular Dochula Pass (3,100m). On a clear day, the pass offers a stunning 360-degree view of the Himalayan range including Gangkar Puensum - the world's highest unclimbed mountain. Visit the 108 Druk Wangyal Chortens and the Druk Wangyal Lhakhang built in honor of Bhutanese soldiers. Descend through changing vegetation to the subtropical Punakha Valley. Afternoon visit to Punakha Dzong - arguably Bhutan's most beautiful dzong, strategically located at the confluence of the Pho Chhu and Mo Chhu rivers.",
    overnight: "Hotel in Punakha",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Dochula Pass (3,100m)", "108 chortens", "Himalayan views", "Punakha Dzong", "River confluence"],
  },
  {
    day: 4,
    title: "Punakha Valley Exploration",
    altitude: "1,300m",
    distance: "Local sightseeing",
    description: "Morning hike to Chimi Lhakhang - the 'Fertility Temple' dedicated to the Divine Madman, Drukpa Kunley. The trail passes through picturesque rice fields and traditional villages. Visit the temple and receive blessings. Afternoon walk across the Punakha Suspension Bridge - one of Bhutan's longest suspension bridges, offering stunning views of the valley. Visit Khamsum Yulley Namgyal Chorten, a beautiful stupa overlooking the valley, built for peace and harmony. Free evening to explore Punakha town.",
    overnight: "Hotel in Punakha",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Chimi Lhakhang hike", "Rice field villages", "Suspension bridge", "Khamsum Yulley Chorten"],
  },
  {
    day: 5,
    title: "Punakha to Gangtey Valley",
    altitude: "1,300m → 2,900m",
    distance: "80km / 3.5 hrs drive",
    description: "Morning drive to the beautiful Gangtey Valley (also known as Phobjikha Valley) - a glacial valley and winter home to the rare Black-Necked Cranes that migrate from Tibet. The scenic drive takes you through rhododendron forests and traditional villages. Afternoon visit to Gangtey Goemba - the only Nyingmapa monastery in western Bhutan, perched on a ridge overlooking the valley. Evening walk through the valley floor for bird watching and sunset views.",
    overnight: "Hotel in Gangtey",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Gangtey Valley scenery", "Black-Necked Crane habitat", "Gangtey Goemba", "Valley walks"],
  },
  {
    day: 6,
    title: "Gangtey Valley Exploration",
    altitude: "2,900m",
    distance: "Nature trail walk",
    description: "Morning visit to the Black-Necked Crane Information Center to learn about these majestic birds and conservation efforts (November-March best for crane sightings). Walk the Gangtey Nature Trail - a beautiful 3-4 hour walk through forest and farmland offering spectacular valley views. Visit local farmhouses to experience traditional Bhutanese rural life. Optional visit to a local potato farm (the valley is famous for organic potatoes). Evening free for photography and reflection.",
    overnight: "Hotel in Gangtey",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Crane Information Center", "Gangtey Nature Trail", "Farmhouse visit", "Rural Bhutan experience"],
  },
  {
    day: 7,
    title: "Gangtey to Trongsa via Pele La Pass",
    altitude: "2,900m → 3,420m → 2,200m",
    distance: "130km / 5 hrs drive",
    description: "Drive eastward crossing Pele La Pass (3,420m) - the traditional boundary between western and central Bhutan. Stop at Chendebji Chorten, built in the 18th century in Nepalese style to cover the remains of an evil spirit. Continue to Trongsa, a historic town dominated by the massive Trongsa Dzong - ancestral home of Bhutan's royal family. Visit the dzong and the Ta Dzong museum housing royal artifacts. Overnight in this historically significant town.",
    overnight: "Hotel in Trongsa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Pele La Pass", "Chendebji Chorten", "Trongsa Dzong", "Ta Dzong Museum", "Royal heritage"],
  },
  {
    day: 8,
    title: "Trongsa to Bumthang Valley",
    altitude: "2,200m → 2,600m",
    distance: "70km / 2.5 hrs drive",
    description: "Morning drive to Bumthang - the spiritual heartland of Bhutan. Bumthang comprises four main valleys: Chokhor, Tang, Ura, and Chhume, each with its own distinct character. En route, visit the picturesque Yathra Weaving Center where traditional woolen fabrics are made. Afternoon exploration of Jakar town and visit to Jakar Dzong - the 'Castle of the White Bird'. Evening visit to Kurje Lhakhang, one of Bhutan's most sacred sites where Guru Rinpoche meditated and left his body imprint.",
    overnight: "Hotel in Bumthang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Bumthang valleys", "Yathra weaving", "Jakar Dzong", "Kurje Lhakhang", "Sacred sites"],
  },
  {
    day: 9,
    title: "Full Day Bumthang Exploration",
    altitude: "2,600m",
    distance: "Local sightseeing",
    description: "Full day exploring Bumthang's spiritual and cultural treasures. Morning visit to Jambay Lhakhang - one of the 108 temples built by Tibetan King Songtsen Gampo in the 7th century. Continue to Tamshing Lhakhang, founded by Pema Lingpa, with its original 500-year-old paintings. Afternoon visit to Mebar Tsho (Burning Lake) where Pema Lingpa discovered religious treasures. Optional visit to a local brewery producing traditional red rice wine and ara (local spirit).",
    overnight: "Hotel in Bumthang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Jambay Lhakhang", "Tamshing Lhakhang", "Mebar Tsho", "Traditional brewing", "Sacred sites"],
  },
  {
    day: 10,
    title: "Bumthang to Paro via Trongsa & Wangdue",
    altitude: "2,600m → various → 2,280m",
    distance: "300km / 9-10 hrs drive",
    description: "Long but scenic drive back to Paro, retracing your route through Trongsa and Wangdue Phodrang. Stop at Wangdue Phodrang Dzong perched on a ridge overlooking the confluence of the Punatsangchhu and Tang Chhu rivers. Photo stops at Dochula Pass if weather permits. Arrive in Paro by evening. Farewell dinner at a traditional farmhouse with cultural performance.",
    overnight: "Hotel in Paro",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Wangdue Phodrang Dzong", "Dochula Pass views", "Scenic drive", "Farewell cultural dinner"],
  },
  {
    day: 11,
    title: "Taktsang Monastery (Tiger's Nest) Hike & Departure",
    altitude: "2,280m → 3,120m → 2,280m",
    distance: "8km round trip / 5-6 hrs hike",
    description: "Early morning drive to the base camp of Taktsang Monastery - Bhutan's most famous landmark and the perfect finale to your cultural journey. Begin the 2-3 hour uphill hike through pine forests adorned with prayer flags. The trail offers spectacular views of the monastery clinging to a cliff 900 meters above the valley. At the cafeteria viewpoint, you'll see the monastery in all its glory. Time permitting, continue to the monastery itself - a sacred site where Guru Rinpoche meditated in the 8th century. After descending, enjoy lunch before transferring to Paro International Airport for your departure flight. Our representative will assist with check-in. Tashi Delek (goodbye and good luck)!",
    overnight: "-",
    meals: "Breakfast, Lunch",
    highlights: ["Tiger's Monastery hike", "Cliff-side monastery", "Prayer flag forests", "Farewell to Bhutan"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "10 nights hotel accommodation (3-star with breakfast) as per itinerary",
  "All meals as per itinerary (breakfast, lunch, dinner)",
  "English-speaking Bhutanese guide (government licensed)",
  "Private vehicle for all sightseeing and transfers",
  "All monument entrance fees",
  "Bhutan Visa fee (processed by us)",
  "Sustainable Development Fee (SDF) of $100 per night (10 nights = $1,000)",
  "Government taxes and royalty",
  "Mineral water during sightseeing",
  "Traditional scarf welcome at airport",
  "Farmhouse visit with traditional welcome",
  "Cultural performance at farewell dinner",
  "First aid medical kit",
  "All government taxes and official expenses",
];

const excludes = [
  "International airfare to/from Paro",
  "Travel insurance (mandatory)",
  "Meals not mentioned in itinerary",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, bar bills)",
  "Tips and gratuities for guide and driver (recommended)",
  "Camera fees at monuments",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
  "Hot stone bath (optional)",
  "Traditional archery experience (optional)",
];

const gallery = [
  {
    src: "/images/used/cultural-bhutan.webp",
    alt: "Tashichho Dzong - Fortress of the Glorious Religion in Thimphu, Bhutan",
    caption: "Tashicho Dzong- Fortress of the glorious religion",
  },
  {
    src: "/images/used/bhutan-culture.webp",
    alt: "Bhutanese mask festival - traditional Tshechu cultural performance with colorful masks and costumes",
    caption: "Mask Festival- Where culture wears a mask.",
  },
  {
    src: "/images/used/bhutan-dochula.webp",
    alt: "Dochula Pass - 108 stupas with panoramic Himalayan mountain views in Bhutan",
    caption: "Dochula, Bhutan- 108 stupas, one breathtaking view",
  },
];

export default function BhutanCulturalTourPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2, 3]);

  const tourName = "11-Day Bhutan Cultural Tour";
  const canonicalUrl = "https://www.himkalaadventure.com/destinations/bhutan/bhutan-cultural-tour";
  const pageTitle = "11-Day Bhutan Cultural Tour - Himkala Adventure";
  const pageDescription = "11-Day Bhutan Cultural Tour: Explore five valleys, ancient dzongs, sacred monasteries, and the Tiger's Nest. A comprehensive cultural journey through the Kingdom of Bhutan. Book now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/cultural-bhutan.webp";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("11-Day Bhutan Cultural Tour - Himkala Adventure")}`;
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
                    <span>Bhutan Cultural Tour</span>
                  </div>
                  <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    11 Days <br />
                    <span className="text-[#cf6943]">Bhutan Cultural Tour</span>
                  </h1>
                </div>
                <div className="max-w-full md:max-w-[280px]">
                  <p className="text-sm leading-6 text-[#66706d]">
                    Journey through the spiritual heartland of the Himalayas - explore ancient dzongs, 
                    sacred monasteries, traditional villages, and witness living Buddhist culture across 
                    five stunning valleys.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                      Cultural Immersion
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      5 Valleys
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      Tiger's Nest
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
                src="/images/used/cultural-bhutan.webp"
                alt="11-Day Bhutan Cultural Tour - Tashichho Dzong fortress in Thimphu, Bhutan with traditional Bhutanese architecture"
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
                  $3,950 / person
                </span>
              </div>
            </figure>
          </div>

          {/* Quick Stats - Free Walking Tour Style */}
          <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
              {[
                { label: "Duration", value: "11 Days / 10 Nights" },
                { label: "Group Size", value: "2-12 people" },
                { label: "Valleys", value: "5 Valleys" },
                { label: "Difficulty", value: "Easy to Moderate" },
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
                  The <strong className="text-[#14383b]">11-Day Bhutan Cultural Tour</strong> is our most comprehensive 
                  cultural journey through the Kingdom of Bhutan, taking you deep into the heart of this Himalayan 
                  Buddhist kingdom. This carefully crafted <strong className="text-[#14383b]">Bhutan cultural tour</strong> 
                  explores <strong className="text-[#14383b]">five distinct valleys</strong> - Paro, Thimphu, Punakha, 
                  Gangtey, and Bumthang - each offering unique insights into Bhutan's living traditions, sacred 
                  architecture, and timeless way of life.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  From the bustling capital of Thimphu to the spiritual heartland of Bumthang, you'll visit 
                  <strong className="text-[#14383b]"> ancient dzongs, sacred monasteries, and traditional villages</strong>. 
                  Walk through rice fields to the fertility temple of Chimi Lhakhang, witness the endangered 
                  Black-Necked Cranes in Gangtey Valley, and explore the historic Trongsa Dzong - ancestral home 
                  of Bhutan's royal family.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  The journey culminates with the <strong className="text-[#14383b]">iconic hike to Taktsang Monastery 
                  (Tiger's Nest)</strong>, Bhutan's most revered site perched dramatically on a cliff face. With expert 
                  local guides, all meals included, and the mandatory Sustainable Development Fee covered, this 
                  tour offers an authentic and hassle-free immersion into the Land of the Thunder Dragon.
                </p>
              </article>

              <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
                <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
                <strong>Important:</strong> Travel insurance is mandatory and must cover medical emergencies and evacuation. 
                Bhutan requires a minimum Sustainable Development Fee (SDF) of $100 per night - for 10 nights this is 
                $1,000, which is fully included in our package.
              </div>
            </div>
          </section>

          {/* Highlights - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Tour Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Hike to iconic Taktsang Monastery (Tiger's Nest)",
                  "Explore five valleys: Paro, Thimphu, Punakha, Gangtey, Bumthang",
                  "Visit Punakha Dzong - Bhutan's most beautiful fortress",
                  "Witness Black-Necked Cranes in Gangtey Valley (seasonal)",
                  "Explore Bumthang - spiritual heartland of Bhutan",
                  "Cross Dochula Pass with 108 chortens & Himalayan views",
                  "Walk through rice fields to Chimi Lhakhang",
                  "Visit Trongsa Dzong - royal heritage site",
                  "Experience traditional farmhouse hospitality",
                  "Farewell dinner with cultural performance",
                  "All visas and SDF fees included",
                  "Expert local guides sharing deep cultural insights",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Best Time to Visit Bhutan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Flower2 className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Spring (Mar - May)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    Pleasant temperatures, blooming rhododendrons, and clear skies. Perfect for valley exploration 
                    and the Tiger's Nest hike. Paro and Thimphu Tshechu festivals often fall in spring.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
                </div>
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Sunrise className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Autumn (Sep - Nov)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    The most popular season with crystal-clear mountain views, pleasant weather, and vibrant 
                    festivals. Black-Necked Cranes begin arriving in Gangtey from November.
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
                              <Landmark className="w-3 h-3 text-[#cf6943]" aria-hidden="true" />
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
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">What's Included in This Bhutan Cultural Tour</h2>
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
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Photo Gallery - Bhutan Cultural Tour</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6">
                A visual journey through Bhutan's majestic dzongs, sacred monasteries, and breathtaking Himalayan landscapes across five valleys.
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
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    q: "What is the Sustainable Development Fee (SDF) and is it included?",
                    a: "The SDF is a $100 per night fee that all international visitors pay to visit Bhutan. It funds free education, healthcare, and infrastructure while preserving Bhutan's culture and environment. For this 10-night tour, the SDF of $1,000 is fully included in our package price - you don't need to pay anything extra.",
                  },
                  {
                    q: "Do I need a visa? How does it work?",
                    a: "Yes, all international visitors except Indian nationals require a visa for Bhutan. We process your visa as part of the package. You'll need to send us a clear passport copy and passport photo at least 15 days before travel. The visa is stamped in your passport upon arrival at Paro Airport.",
                  },
                  {
                    q: "How much walking/hiking is involved?",
                    a: "This is primarily a cultural tour with easy walking at monasteries and dzongs. The main exception is the Tiger's Nest hike (day 11) which takes 5-6 hours round trip with significant uphill sections. There are also optional short walks at Chimi Lhakhang (30 mins), Gangtey Nature Trail (2-3 hours), and Punakha suspension bridge (30 mins).",
                  },
                  {
                    q: "What is the accommodation like?",
                    a: "We use comfortable 3-star hotels and resorts throughout your journey. All rooms have attached bathrooms with hot water, comfortable beds, and heating. Properties are locally rated and offer authentic Bhutanese hospitality. Upgrades to 4 or 5-star hotels (like Zhiwa Ling, Amankora, or Taj) are available on request with supplement.",
                  },
                  {
                    q: "Will I see the Black-Necked Cranes?",
                    a: "Black-Necked Cranes migrate to Gangtey Valley from late October to early March. If you're traveling during this period, you have an excellent chance of seeing them. The Crane Information Center provides spotting scopes and updates on crane sightings. Outside these months, the valley is still beautiful but cranes will not be present.",
                  },
                  {
                    q: "What should I pack for this tour?",
                    a: "Pack comfortable walking shoes for the Tiger's Nest hike, layers for varying temperatures (mornings/evenings can be cool even in summer), sunscreen, sunglasses, a hat, and modest clothing for monastery visits (shoulders and knees covered). A lightweight rain jacket is recommended year-round. Your guide will provide more detailed packing advice before travel.",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready for Your Bhutan Cultural Adventure?</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Book your 11-Day Bhutan Cultural Tour today and immerse yourself in the rich heritage of the Land of the Thunder Dragon.
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
    </>
  );
}