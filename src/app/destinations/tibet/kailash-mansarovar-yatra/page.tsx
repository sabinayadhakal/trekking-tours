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
  Flower2,
  Sun,
  CloudSun,
  Award,
  Eye,
  Navigation,
  Coffee,
  Sparkles,
  Footprints,
  Milestone,
  Info,
  Globe,
  ScrollText,
  MountainIcon,
  Building,
  Library,
  Music,
  Drama,
  PartyPopper,
  Castle,
  Crown,
  Sword,
  Shield,
  History,
  LandPlot,
  ThermometerSnowflake,
  Cloudy,
  Sunrise as SunriseIcon,
  Circle,
  Waves,
  Droplets,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Kathmandu (1,400m)",
    altitude: "1,400m",
    distance: "Airport transfer",
    description: "Welcome to Kathmandu, the gateway to your sacred journey! Upon arrival at Tribhuvan International Airport, you'll be greeted by our representative and transferred to your hotel in the vibrant Thamel district. After check-in, rest and recover from your flight. In the evening, attend a comprehensive briefing about the Kailash Mansarovar pilgrimage, including details about the journey, what to expect, and important tips for high-altitude wellness. Meet your fellow pilgrims and guide. Early dinner and rest recommended. Overnight in Kathmandu.",
    overnight: "Hotel in Kathmandu",
    meals: "Dinner",
    highlights: ["Airport pickup", "Pilgrimage briefing", "Thamel exploration", "Fellow pilgrims meet"],
  },
  {
    day: 2,
    title: "Kathmandu Sightseeing & Preparation",
    altitude: "1,400m",
    distance: "Local sightseeing",
    description: "A day of sightseeing and preparation in the Kathmandu Valley. Visit the sacred Hindu temple of Pashupatinath, one of the most important Shiva temples in the world, where many pilgrims begin their Kailash journey with blessings. Also visit the Boudhanath Stupa, one of the largest Buddhist stupas globally, and Swayambhunath (Monkey Temple) for panoramic valley views. These visits provide spiritual preparation and cultural context for your pilgrimage. In the afternoon, finalize any last-minute preparations, check your gear, and ensure all permits are in order. Early to bed - tomorrow begins your journey toward the sacred mountain. Overnight in Kathmandu.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Pashupatinath Temple blessings", "Boudhanath Stupa", "Swayambhunath views", "Spiritual preparation", "Gear check"],
  },
  {
    day: 3,
    title: "Kathmandu to Kyirong (2,800m) - Drive",
    altitude: "1,400m → 2,800m",
    distance: "170km / 6-7 hrs drive",
    description: "Early morning departure from Kathmandu, driving toward the Tibet border. The scenic journey follows the Trishuli River valley, offering beautiful views of rural Nepal, terraced fields, and distant Himalayas. Cross the border at Gyirong Port (Kerung), complete Chinese immigration formalities, and enter Tibet. Your Tibetan guide and vehicle will meet you on the Tibetan side. Continue to Kyirong town, your first overnight in Tibet at 2,800m. This gradual altitude gain helps with acclimatization. Rest and prepare for the days ahead. Overnight in Kyirong.",
    overnight: "Guesthouse in Kyirong",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Nepal countryside views", "Tibet border crossing", "Gradual altitude gain", "First night in Tibet", "Scenic drive"],
  },
  {
    day: 4,
    title: "Kyirong Acclimatization & Rest",
    altitude: "2,800m",
    distance: "Rest day",
    description: "A crucial rest and acclimatization day in Kyirong. Your body needs time to adjust to the Tibetan altitude before proceeding higher. Take a gentle walk around Kyirong Valley, visiting the local village and monastery. The valley is beautiful with pine forests and traditional Tibetan houses. This gentle activity aids acclimatization while providing cultural immersion. Your guide will provide another briefing about the sacred sites ahead and what to expect during the Kora (circumambulation) of Mount Kailash. Rest, hydrate, and prepare spiritually for the journey. Overnight in Kyirong.",
    overnight: "Guesthouse in Kyirong",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Acclimatization rest", "Kyirong Valley walk", "Local monastery visit", "Traditional Tibetan village", "Pilgrimage preparation"],
  },
  {
    day: 5,
    title: "Kyirong to Saga (4,500m)",
    altitude: "2,800m → 4,500m",
    distance: "320km / 6-7 hrs drive",
    description: "Begin your journey across the vast Tibetan plateau. Today you'll gain significant altitude, so take it slow and stay hydrated. The drive offers spectacular views of the Himalayas, including glimpses of Shishapangma (8,027m), the 14th highest mountain in the world. Cross the Brahmaputra River (Yarlung Tsangpo) and traverse endless plains dotted with nomad tents and grazing yaks. Arrive in Saga, a small town at 4,500m, your overnight stop. This is your first night at high altitude - expect to feel the thin air. Rest well and drink plenty of water. Overnight in Saga.",
    overnight: "Guesthouse in Saga",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Tibetan plateau crossing", "Shishapangma views", "Brahmaputra River", "Nomad settlements", "High-altitude acclimatization"],
  },
  {
    day: 6,
    title: "Saga to Lake Manasarovar (4,590m)",
    altitude: "4,500m → 4,590m",
    distance: "300km / 6-7 hrs drive",
    description: "Continue your sacred journey toward Lake Manasarovar. The drive takes you through ever more dramatic landscapes, with the Himalayas constantly visible on the horizon. Pass through Mayum La Pass (5,200m) with stunning views. Finally, the moment you've been waiting for - your first glimpse of sacred Lake Manasarovar and Mount Kailash in the distance! Reach the shores of the holiest lake in Asia, where Hindus, Buddhists, and Jains have pilgrimaged for millennia. Arrive at your guesthouse near the lake. In the evening, participate in a special puja (prayer ceremony) by the lake, a profoundly spiritual experience. Overnight near Lake Manasarovar.",
    overnight: "Guesthouse near Manasarovar",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["First glimpse of Lake Manasarovar", "First view of Mount Kailash", "Sacred lake arrival", "Evening puja ceremony", "Spiritual culmination"],
  },
  {
    day: 7,
    title: "Lake Manasarovar Full Day - Holy Bath & Puja",
    altitude: "4,590m",
    distance: "Local exploration",
    description: "A full day dedicated to the sacred Lake Manasarovar. According to Hindu mythology, the lake was created in the mind of Brahma, and bathing here cleanses all sins. Take a holy dip in the sacred waters (be prepared - it's cold!), perform your own puja, and offer prayers. Walk along the shores, meditate, and absorb the spiritual energy of this unique place. Visit the nearby monasteries, including Chiu Gompa perched on a hill with spectacular lake views. For Buddhists, Manasarovar is also sacred, associated with legendary tales. This day is about personal spiritual experience - take it at your own pace. Overnight near Lake Manasarovar.",
    overnight: "Guesthouse near Manasarovar",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Holy bath in Manasarovar", "Personal puja and prayers", "Chiu Gompa visit", "Lakeside meditation", "Spiritual immersion"],
  },
  {
    day: 8,
    title: "Lake Manasarovar to Darchen (4,670m) - Kailash South Face",
    altitude: "4,590m → 4,670m",
    distance: "40km / 1 hr drive + exploration",
    description: "Morning drive to Darchen, the base town for Mount Kailash pilgrimage. En route, you'll have your closest view of the south face of Mount Kailash - the most photogenic aspect of the sacred mountain. Stop at the viewpoint for photos and prayers. Arrive in Darchen and check into your guesthouse. In the afternoon, visit the Tarboche Flagpole, where the annual Saga Dawa festival celebrates Buddha's enlightenment. This is also the starting point for the Kora (circumambulation). Your guide will brief you on tomorrow's trek, and you can prepare your gear. Overnight in Darchen.",
    overnight: "Guesthouse in Darchen",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["South face of Mount Kailash", "Tarboche Flagpole", "Kora starting point", "Pilgrimage preparation", "Sacred mountain close-up"],
  },
  {
    day: 9,
    title: "Darchen to Dirapuk (4,900m) - Kora Day 1",
    altitude: "4,670m → 4,900m",
    distance: "20km trek / 6-7 hrs",
    description: "Begin the sacred Kora (circumambulation) of Mount Kailash! The 52km circuit is one of the most important pilgrimages in Asia. Today's trek follows the Lha Chu Valley, with gradual ascent offering ever-changing views of the mountain's west face. The trail passes through beautiful landscapes with prayer flags, mani stones, and occasional pilgrim shelters. You'll see devout pilgrims performing full-body prostrations along the route. Arrive at Dirapuk Monastery (4,900m), your overnight stop, with spectacular views of the north face of Kailash. Settle into the basic guesthouse or tent camp. This is a profound spiritual experience. Overnight at Dirapuk.",
    overnight: "Guesthouse/Tent at Dirapuk",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Kora commencement", "Lha Chu Valley", "West face of Kailash", "Pilgrim encounters", "Dirapuk Monastery"],
  },
  {
    day: 10,
    title: "Dirapuk to Zutulphuk (4,820m) via Dolma La Pass (5,630m)",
    altitude: "4,900m → 5,630m → 4,820m",
    distance: "22km trek / 8-10 hrs",
    description: "The most challenging and spiritually significant day of the Kora. Start early (around 3-4 AM) for the climb to Dolma La Pass (5,630m), the highest point of the circuit. The ascent is steep and demanding, with thin air making every step an effort. Prayer flags mark the summit, where pilgrims offer prayers and leave personal items representing their ego. This is believed to be where the goddess Dolma (Tara) resides. The descent is long and steep, passing through rocky terrain and the beautiful Gauri Kund (Lake of Compassion), associated with Parvati. The trail eventually reaches Zutulphuk Monastery (4,820m), where legend says the great yogi Milarepa meditated. You'll be exhausted but spiritually elevated. Overnight at Zutulphuk.",
    overnight: "Guesthouse/Tent at Zutulphuk",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Dolma La Pass (5,630m)", "Highest point of Kora", "Gauri Kund sacred lake", "Spiritual offerings", "Zutulphuk Monastery", "Milarepa's meditation cave"],
  },
  {
    day: 11,
    title: "Zutulphuk to Darchen - Kora Completion",
    altitude: "4,820m → 4,670m",
    distance: "10km trek / 3-4 hrs + drive",
    description: "Final day of the Kora! The trail descends gradually through the beautiful valley, following the river. The walking is easier today, allowing you to reflect on your spiritual journey. You'll pass more prayer flags, mani walls, and perhaps encounter fellow pilgrims completing their circuit. The trail ends at the road, where your vehicle awaits to drive you back to Darchen (about 30 minutes). Celebrate the completion of this sacred circumambulation! You have achieved something that millions only dream of. Rest, shower, and relax. Evening free for personal reflection. Overnight in Darchen.",
    overnight: "Guesthouse in Darchen",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Final Kora descent", "Scenic valley walk", "Kora completion", "Personal achievement", "Celebration and reflection"],
  },{
    day: 12,
    title: "Darchen Rest Day - Hora Tso Hot Springs",
    altitude: "4,670m",
    distance: "Optional excursion",
    description: "A well-deserved rest day after completing the Kora. You have options for relaxation: visit the nearby Hora Tso Hot Springs, where natural geothermal pools offer a soothing soak for tired muscles - a pilgrim tradition for centuries. Alternatively, rest at your guesthouse, do laundry, or take a gentle walk around Darchen. Those with energy can visit the Tarboche area again for more photos of Mount Kailash. This day is about recovery and absorbing the spiritual experience of the past days. Overnight in Darchen.",
    overnight: "Guesthouse in Darchen",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Hora Tso Hot Springs (optional)", "Rest and recovery", "Mountain photography", "Reflection time", "Pilgrim fellowship"],
  },
  {
    day: 13,
    title: "Darchen to Saga",
    altitude: "4,670m → 4,500m",
    distance: "450km / 8-9 hrs drive",
    description: "Begin your return journey, retracing the route across the Tibetan plateau. The long drive offers final views of the sacred mountain and lake. Stop at viewpoints for last photographs and prayers. The landscape is no less beautiful on the return, with the Himalayas accompanying you. Arrive in Saga by evening, descending slightly in altitude. Rest and reflect on the profound experiences of the past week. Overnight in Saga.",
    overnight: "Guesthouse in Saga",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Farewell views of Kailash", "Last Manasarovar glimpses", "Tibetan plateau crossing", "Reflection time", "Gradual descent"],
  },
  {
    day: 14,
    title: "Saga to Kyirong",
    altitude: "4,500m → 2,800m",
    distance: "320km / 6-7 hrs drive",
    description: "Continue your return to lower altitudes. The drive takes you back through the beautiful landscapes, with air gradually thickening as you descend. Notice how much easier breathing becomes! Arrive in Kyirong by evening, where you'll stay at the same guesthouse as before. Celebrate the successful completion of your pilgrimage with your fellow travelers. The significant drop in altitude allows for better sleep and recovery. Overnight in Kyirong.",
    overnight: "Guesthouse in Kyirong",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Descending to lower altitude", "Scenic return drive", "Easier breathing", "Pilgrimage celebration", "Final night in Tibet"],
  },
  {
    day: 15,
    title: "Kyirong to Kathmandu",
    altitude: "2,800m → 1,400m",
    distance: "170km / 5-6 hrs drive",
    description: "After breakfast, drive to the Nepal-China border at Gyirong. Complete exit formalities from Tibet, cross back into Nepal, and continue to Kathmandu. The drive offers final views of the Himalayas and Nepalese countryside. Arrive in Kathmandu by late afternoon and check into your hotel. Evening free for celebration, last-minute shopping, or simply relaxing. Enjoy a farewell dinner with your group, sharing memories of this once-in-a-lifetime pilgrimage. Overnight in Kathmandu.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Tibet exit", "Nepal re-entry", "Final Himalayan views", "Kathmandu return", "Farewell celebration dinner"],
  },
  {
    day: 16,
    title: "Departure from Kathmandu",
    altitude: "1,400m",
    distance: "Airport transfer",
    description: "After breakfast, transfer to Tribhuvan International Airport for your departure flight. Our representative will assist with check-in and ensure you have a smooth departure. Bid farewell to the Himalayas with the profound spiritual achievement of having completed the Kailash Mansarovar pilgrimage - a journey that will stay in your heart forever. Om Namah Shivaya!",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Airport transfer", "Departure assistance", "Fond farewells", "Sacred pilgrimage memories"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "5 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "10 nights guesthouse/tent accommodation in Tibet as per itinerary",
  "All meals as per itinerary (breakfast, lunch, dinner) in Tibet",
  "Breakfast only in Kathmandu (except farewell dinner)",
  "English-speaking Tibetan guide (government licensed)",
  "English-speaking Nepalese guide for Nepal portion",
  "Private vehicle for all sightseeing and transfers (4WD Land Cruiser in Tibet)",
  "All monument entrance fees in Nepal and Tibet",
  "Kailash Kora entry permit and vehicle permit",
  "Lake Manasarovar entry permit",
  "Tibet Travel Permit (processed by us)",
  "Alien's Travel Permit and Military Permits",
  "Nepal visa (if applicable)",
  "China Visa support documents",
  "Government taxes and service fees",
  "Mineral water during sightseeing",
  "Oxygen cylinders available in vehicle for emergency",
  "First aid medical kit",
  "Puja supplies for Manasarovar ceremony",
  "All government taxes and official expenses",
  "Certificate of pilgrimage completion",
];

const excludes = [
  "International airfare to/from Kathmandu",
  "Travel insurance (mandatory - must cover high altitude up to 5,700m and emergency evacuation)",
  "China Visa fee (payable at embassy - we provide support documents)",
  "Nepal visa fee (if applicable - available on arrival)",
  "Meals in Kathmandu not mentioned in itinerary",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, bar bills)",
  "Tips and gratuities for guides, drivers, and porters (recommended)",
  "Camera fees at monasteries (if applicable)",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
  "Additional oxygen (supplemental oxygen available on request)",
  "Sleeping bag (can be rented in Kathmandu)",
  "Porter services during Kora (available for hire locally)",
  "Single room supplement (if applicable)",
  "Horse ride during Kora (optional, available for hire)",
];

const gallery = [
  {
    src: "/images/used/tibet-4.webp",
    alt: "Mount Kailash at 6,638m - sacred mountain of Asia revered by Hindus, Buddhists, Jains, and Bonpos",
    caption: "Mount Kailash - Sacred Mountain of Asia",
  },
  {
    src: "/images/used/views-tibet-train.webp",
    alt: "Vast Tibetan plateau landscape with traditional settlements and mountain views during Kailash Mansarovar pilgrimage",
    caption: "Vast Tibetan Plateau",
  },
];

const spiritualSignificance = [
  {
    religion: "Hinduism",
    significance: "Mount Kailash is the abode of Lord Shiva and Goddess Parvati. Lake Manasarovar was created in the mind of Brahma. Pilgrimage here liberates the soul from the cycle of rebirth.",
    practices: "Holy bath in Manasarovar, circumambulation of Kailash, puja at the mountain",
  },
  {
    religion: "Buddhism",
    significance: "Mount Kailash (known as Kangrinboqê) is the dwelling place of Demchok (Chakrasamvara) and his consort Dorje Phagmo. A single kora erases the sins of a lifetime.",
    practices: "Kora (circumambulation), prostration, offering prayer flags",
  },
  {
    religion: "Jainism",
    significance: "Mount Kailash is Mount Ashtapada, where the first Tirthankara, Rishabhanatha, attained nirvana.",
    practices: "Pilgrimage to the sacred mountain",
  },
  {
    religion: "Bon",
    significance: "Mount Kailash is the sacred mountain of the Bon religion, where the founder Tonpa Shenrab descended from heaven.",
    practices: "Circumambulation counter-clockwise (unique to Bon)",
  },
];

const altitudeInfo = [
  {
    location: "Kathmandu",
    altitude: "1,400m",
    overnight: "2 nights",
    notes: "Start point, comfortable altitude",
  },
  {
    location: "Kyirong",
    altitude: "2,800m",
    overnight: "2 nights",
    notes: "First acclimatization",
  },
  {
    location: "Saga",
    altitude: "4,500m",
    overnight: "2 nights",
    notes: "High altitude acclimatization",
  },
  {
    location: "Manasarovar",
    altitude: "4,590m",
    overnight: "2 nights",
    notes: "Sacred lake, puja site",
  },
  {
    location: "Darchen",
    altitude: "4,670m",
    overnight: "3 nights",
    notes: "Kailash base, rest days",
  },
  {
    location: "Dirapuk",
    altitude: "4,900m",
    overnight: "1 night",
    notes: "Kora first night stop",
  },
  {
    location: "Dolma La Pass",
    altitude: "5,630m",
    overnight: "Pass only",
    notes: "Highest point of pilgrimage",
  },
  {
    location: "Zutulphuk",
    altitude: "4,820m",
    overnight: "1 night",
    notes: "Kora second night stop",
  },
];

export default function KailashMansarovarTourPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2, 3, 6, 7, 8, 9, 10]);

  const tourName = "Kailash Mansarovar Tour";
  const canonicalUrl = "https://www.himkalaadventure.com/tours/kailash-mansarovar-tour";
  const pageTitle = "Kailash Mansarovar Tour - 16 Days Sacred Pilgrimage";
  const pageDescription = "Kailash Mansarovar Tour: Sacred 16-day pilgrimage to Mount Kailash and Lake Manasarovar. Circumambulate Kailash, cross Dolma La Pass at 5,630m. Book your spiritual journey now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/tibet-4.webp";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Kailash Mansarovar Tour - Himkala Adventure")}`;
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
                    <span>Sacred Pilgrimage</span>
                  </div>
                  <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    16 Days <br />
                    <span className="text-[#cf6943]">Kailash Mansarovar Tour</span>
                  </h1>
                </div>
                <div className="max-w-full md:max-w-[280px]">
                  <p className="text-sm leading-6 text-[#66706d]">
                    The ultimate spiritual journey - circumambulate sacred Mount Kailash, bathe in holy Lake Manasarovar, 
                    and cross Dolma La Pass (5,630m). A lifetime pilgrimage sacred to Hindus, Buddhists, Jains, and Bonpos.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                      <MountainSnow className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      5,630m
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      Sacred Kora
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      Manasarovar
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
                src="/images/used/tibet-4.webp"
                alt="Mount Kailash at 6,638m - sacred mountain of Asia and spiritual pilgrimage destination in Tibet"
                fill
                className="object-cover opacity-90"
                priority
                quality={85}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
                <span className="bg-[#e47a4f] text-[#fff8ee] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide rounded">
                  Best Season: May-Sep
                </span>
              </div>
              <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                <span className="bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-wide rounded">
                  $2,950 / person
                </span>
              </div>
            </figure>
          </div>

          {/* Quick Stats - Free Walking Tour Style */}
          <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
              {[
                { label: "Duration", value: "16 Days / 15 Nights" },
                { label: "Group Size", value: "4-15 people" },
                { label: "Max Altitude", value: "5,630m" },
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
                  The <strong className="text-[#14383b]">Kailash Mansarovar Tour</strong> is the ultimate spiritual 
                  journey - a pilgrimage to the most sacred mountain in Asia. <strong className="text-[#14383b]">Mount Kailash (6,638m)</strong> 
                  is revered by Hindus as the abode of Lord Shiva, by Buddhists as the dwelling of Demchok, by Jains 
                  as the site of Rishabhanatha's nirvana, and by Bonpos as the sacred mountain of their tradition. 
                  The nearby <strong className="text-[#14383b]">Lake Manasarovar</strong> is the holiest lake in Asia, 
                  believed to cleanse all sins.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  This 16-day pilgrimage takes you from Kathmandu across the Tibetan plateau to the sacred sites. 
                  You'll perform puja and bathe in the holy waters of Manasarovar, then undertake the 52km
                  <strong className="text-[#14383b]"> Kora (circumambulation)</strong> of Mount Kailash, crossing the 
                  <strong className="text-[#14383b]"> Dolma La Pass at 5,630m</strong> - the highest point of the 
                  journey. This is not merely a tour but a profound spiritual experience that has drawn pilgrims 
                  for millennia.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  With careful acclimatization, experienced guides, and all permits arranged, we facilitate this 
                  sacred journey while prioritizing your safety and spiritual needs. Whether you seek blessings, 
                  personal transformation, or simply to witness one of the world's most remarkable places, the 
                  Kailash Mansarovar pilgrimage is an experience that will stay with you forever.
                </p>
              </article>

              <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
                <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
                <strong>Important:</strong> Travel insurance is MANDATORY and must cover high altitude up to 5,700m and emergency helicopter evacuation. 
                China Visa required (we arrange all Tibet permits including Kailash permit). Submit passport copy at least 30 days before travel.
              </div>
            </div>
          </section>

          {/* Highlights - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Pilgrimage Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Circumambulate sacred Mount Kailash (52km Kora)",
                  "Cross Dolma La Pass at 5,630m - highest point",
                  "Holy bath and puja at Lake Manasarovar",
                  "Visit Pashupatinath Temple for blessings before departure",
                  "South face view of Mount Kailash - most photogenic aspect",
                  "Experience four religions' sacred mountain",
                  "Walk in the footsteps of millennia of pilgrims",
                  "Visit Dirapuk and Zutulphuk monasteries",
                  "See Gauri Kund - sacred lake of compassion",
                  "Tibetan plateau crossing with Himalayan views",
                  "All permits and logistics arranged",
                  "Certificate of pilgrimage completion",
                ].map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#14383b] text-sm sm:text-base">
                    <span className="text-[#cf6943] mt-1">✦</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Spiritual Significance - Free Walking Tour Style */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Spiritual Significance</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {spiritualSignificance.map((item, index) => (
                  <div key={index} className="bg-[#f7f2e9] p-4 rounded-lg border border-[#d8cec0]/30">
                    <span className="bg-[#cf6943]/10 text-[#cf6943] text-[10px] font-bold px-2 py-0.5 rounded inline-block mb-2">
                      {item.religion}
                    </span>
                    <p className="text-[#556363] text-sm leading-relaxed mb-2">{item.significance}</p>
                    <p className="text-[#66706d] text-xs italic">Practices: {item.practices}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Best Season - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Best Time for Kailash Pilgrimage</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Flower2 className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Summer (Jun - Aug)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    Warmest temperatures, least snow on passes, and best conditions for Kora. Peak pilgrimage 
                    season with many devotees. Clear skies and long daylight hours.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
                </div>
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <SunriseIcon className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Early Autumn (Sep)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    Stable weather, clear skies, and excellent visibility. Fewer pilgrims than summer peak. 
                    Perfect conditions for photography and spiritual practice.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
                </div>
              </div>
            </div>
          </section>

          {/* Kora Overview - Free Walking Tour Style */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200/50">
                <h3 className="text-xl font-serif text-[#14383b] mb-3">The Sacred Kora - 3 Days Around Mount Kailash</h3>
                <p className="text-[#556363] text-sm leading-relaxed mb-4">
                  The 52km circumambulation of Mount Kailash is the spiritual heart of this pilgrimage.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white/80 p-3 rounded-lg text-center">
                    <span className="text-[#cf6943] font-bold text-xs block">Day 1</span>
                    <p className="text-[#14383b] text-sm font-medium">Darchen to Dirapuk</p>
                    <p className="text-[#556363] text-xs">20km, 6-7 hrs</p>
                    <p className="text-[#66706d] text-xs">Gradual ascent, west face views</p>
                  </div>
                  <div className="bg-white/80 p-3 rounded-lg text-center">
                    <span className="text-[#cf6943] font-bold text-xs block">Day 2</span>
                    <p className="text-[#14383b] text-sm font-medium">Dirapuk to Zutulphuk</p>
                    <p className="text-[#556363] text-xs">22km, 8-10 hrs</p>
                    <p className="text-[#66706d] text-xs">Dolma La (5,630m), Gauri Kund</p>
                  </div>
                  <div className="bg-white/80 p-3 rounded-lg text-center">
                    <span className="text-[#cf6943] font-bold text-xs block">Day 3</span>
                    <p className="text-[#14383b] text-sm font-medium">Zutulphuk to Darchen</p>
                    <p className="text-[#556363] text-xs">10km, 3-4 hrs</p>
                    <p className="text-[#66706d] text-xs">Easy descent, completion</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Altitude Profile - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Altitude Profile</h2>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="space-y-2">
                  {altitudeInfo.map((item, index) => (
                    <div key={index} className="flex flex-wrap items-center gap-2 border-b border-[#d8cec0]/30 last:border-0 pb-2 last:pb-0">
                      <span className="font-semibold text-[#14383b] text-sm w-20">{item.location}</span>
                      <span className="text-[#cf6943] font-medium text-sm w-20">{item.altitude}</span>
                      <span className="text-[#66706d] text-xs">{item.overnight}</span>
                      <span className="text-[#556363] text-xs flex-1">{item.notes}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-amber-50 p-3 rounded-lg border-l-4 border-amber-400">
                  <p className="text-amber-700 text-xs flex items-start gap-2">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>Acclimatization:</strong> Gradual ascent with rest days at Kyirong and Saga before high altitude.</span>
                  </p>
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
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">What's Included in Kailash Mansarovar Tour</h2>
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
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Kailash Mansarovar Photo Gallery</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6">
                A visual journey through the most sacred pilgrimage in Asia - Mount Kailash and Lake Manasarovar.
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
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    q: "Is this a religious pilgrimage or a tour?",
                    a: "This journey is both. While we handle all logistics professionally, the experience is deeply spiritual. We facilitate puja at Manasarovar, provide time for personal practice, and respect the sacred nature of the sites. Many pilgrims join for religious reasons, while others come for the unique cultural and natural experience. Both are welcome.",
                  },
                  {
                    q: "How difficult is the Kora (circumambulation)?",
                    a: "The 52km Kora is challenging, primarily due to the altitude. Day 1 is moderate (20km, gradual ascent). Day 2 is extremely challenging - you climb to Dolma La at 5,630m, then descend long distances. Total walking time 8-10 hours at extreme altitude. Day 3 is easy (10km descent). Good fitness, prior high-altitude experience, and mental determination are essential. Horses can be hired for those who cannot trek the entire circuit.",
                  },
                  {
                    q: "Can I skip the Kora and just visit Manasarovar?",
                    a: "Yes! Some pilgrims, particularly those with health concerns or limited time, choose to only visit Lake Manasarovar and view Mount Kailash from Darchen without doing the full Kora. This is perfectly acceptable. Please inform us at booking so we can adjust arrangements.",
                  },
                  {
                    q: "What permits do I need for Kailash?",
                    a: "You need: 1) China Visa (from your local Chinese embassy), 2) Tibet Travel Permit, 3) Alien's Travel Permit, 4) Military Permit, and 5) Special Kailash Permit. We arrange all Tibet permits for you - we need your passport copy at least 30 days before travel. China Visa must be obtained separately, but we provide support documents.",
                  },
                  {
                    q: "How do I get to Kathmandu?",
                    a: "Kathmandu is served by Tribhuvan International Airport with flights from major cities including Delhi, Dubai, Doha, Bangkok, Kuala Lumpur, and Singapore. Many pilgrims also arrive overland from India. We recommend arriving at least one day before the tour starts to rest and prepare.",
                  },
                  {
                    q: "What is the accommodation like during the pilgrimage?",
                    a: "In Kathmandu, you'll stay in comfortable 3-star hotels. In Tibet, accommodation ranges from basic guesthouses (Kyirong, Saga, Darchen) to very basic guesthouses/tents during the Kora (Dirapuk, Zutulphuk). Expect shared facilities, no frills, and the focus on spiritual experience rather than luxury. This is part of the pilgrimage tradition.",
                  },
                  {
                    q: "Will I suffer from altitude sickness?",
                    a: "Most people experience some symptoms at altitude - headache, fatigue, shortness of breath. Our itinerary includes gradual acclimatization with rest days. However, Dolma La at 5,630m is extremely high and affects everyone. We carry oxygen and our guides are trained in altitude sickness recognition. Listen to your body and inform your guide immediately if you feel unwell.",
                  },
                  {
                    q: "What should I pack for this pilgrimage?",
                    a: "Essentials: warm layers (temperatures near freezing at night), waterproof jacket, comfortable trekking boots, trekking poles, sleeping bag (rated to -10°C), headlamp, water bottles, sunscreen, sunglasses, hat, personal medications, and toiletries. Modest clothing for monastery visits. A detailed packing list will be provided after booking.",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready for the Sacred Pilgrimage of a Lifetime?</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Book your Kailash Mansarovar Tour today and embark on the most sacred pilgrimage in Asia - a journey that will transform your spirit and stay with you forever.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link href={`/contact?trek=${encodeURIComponent(tourName)}`}>
                  <Button className="bg-[#cf6943] hover:bg-[#b85a38] text-white font-bold rounded-full px-6 py-2 text-sm">
                    <Heart className="w-4 h-4 mr-2" aria-hidden="true" />
                    Book This Pilgrimage
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