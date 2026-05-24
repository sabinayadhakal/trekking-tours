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
  ArrowLeft,
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
  Menu,
  X,
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
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    alt: "Mount Kailash",
    caption: "Mount Kailash - Sacred Mountain of Asia",
  },
 
  
  
  {
    src: "/images/used/tibet-plateau.webp",
    alt: "Tibetan Plateau",
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
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  // Tour name constant for auto-fill functionality
  const tourName = "16-Day Kailash Mansarovar Tour";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Kailash Mansarovar Tour - Himkala Adventure");
    let shareUrl = "";
    if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    }
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const toggleDay = (day: number) => {
    setExpandedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Mobile Navigation Drawer */}
      {showMobileNav && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowMobileNav(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg text-[#0f2940]">Quick Navigation</h3>
                <button 
                  onClick={() => setShowMobileNav(false)}
                  className="p-2 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                <a href="#overview" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  Overview
                </a>
                <a href="#highlights" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  Highlights
                </a>
                <a href="#spiritual" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  Spiritual Significance
                </a>
                <a href="#altitude" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  Altitude Guide
                </a>
                <a href="#itinerary" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  Itinerary
                </a>
                <a href="#includes" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  What's Included
                </a>
                <a href="#gallery" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  Gallery
                </a>
                <a href="#faq" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  FAQ
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white"
                    onClick={() => handleShare("facebook")}
                  >
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white"
                    onClick={() => handleShare("twitter")}
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-slate-800 hover:bg-slate-900 text-white"
                    onClick={handleCopyLink}
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[380px] md:h-[60vh] md:min-h-[500px] overflow-hidden bg-[#0f2940]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/used/tibet-4.webp"
            alt="Kailash Mansarovar Tour"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940] via-[#0f2940]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/80 via-transparent to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
          <div className="max-w-5xl mx-auto text-center w-full">
            <div className="flex flex-wrap gap-2 mb-4 md:mb-6 justify-center">
              <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <MapPin className="w-3 h-3 mr-1" /> Tibet, China
              </Badge>
              <Badge className="bg-amber-100 text-amber-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Sacred Pilgrimage
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <MountainSnow className="w-3 h-3 mr-1" /> 5,630m Pass
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              16 DAYS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                KAILASH MANSAROVAR TOUR
              </span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-light px-2">
              The ultimate spiritual journey - circumambulate sacred Mount Kailash, bathe in holy Lake Manasarovar, 
              and cross Dolma La Pass (5,630m). A lifetime pilgrimage sacred to Hindus, Buddhists, Jains, and Bonpos.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-4 md:py-12">
        <div className="container mx-auto px-3 md:px-6 max-w-full overflow-hidden">
          {/* Mobile Sticky Book Now Bar */}
          <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-[#C5E0ED]/30 shadow-sm py-2 -mx-3 px-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 line-through">$3,250</div>
                <div className="text-lg font-bold text-[#0f2940]">$2,950</div>
              </div>
              <Link href={`/contact?trek=${encodeURIComponent(tourName)}`}>
                <Button className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] text-white font-bold rounded-full px-4 py-1.5 text-xs min-h-[44px]">
                  <Heart className="w-3 h-3 mr-1" /> Book Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Desktop Layout - Grid with sticky sidebar */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-4 lg:gap-10">
            {/* Sidebar - Sticky on desktop */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24 space-y-4 md:space-y-6">
                {/* Price Card */}
                <Card className="bg-gradient-to-br from-[#0f2940] to-[#1a4166] border-none rounded-xl md:rounded-2xl overflow-hidden">
                  <CardContent className="p-4 md:p-6">
                    <div className="text-center mb-4 md:mb-6">
                      <span className="text-white/50 text-sm line-through">$3,250</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$2,950</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-xs">Save $300</Badge>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>16 Days / 15 Nights</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Best: May-Sep</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Group Size: 4-15</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Tent className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>3 Nights Camping / 12 Nights Guesthouse</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <MountainSnow className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Max Altitude: 5,630m</span>
                      </div>
                    </div>

                    {/* Book Now Button */}
                    <Link href={`/contact?trek=${encodeURIComponent(tourName)}`}>
                      <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-sm md:text-base">
                        <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Book This Pilgrimage
                      </Button>
                    </Link>
                    
                    {/* WhatsApp Now Button */}
                    <a 
                      href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about the ${tourName}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold rounded-full h-10 md:h-12 text-sm md:text-base">
                        <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> WhatsApp Now
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                {/* Quick Facts */}
                <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                      <Map className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> Quick Facts
                    </h3>
                    <div className="space-y-2 text-xs md:text-sm">
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Start/End Point</span>
                        <span className="font-medium text-[#0f2940]">Kathmandu, Nepal</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Route</span>
                        <span className="font-medium text-[#0f2940]">Kathmandu - Kyirong - Saga - Manasarovar - Kailash</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Highest Point</span>
                        <span className="font-medium text-[#0f2940]">Dolma La Pass (5,630m)</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Kora Distance</span>
                        <span className="font-medium text-[#0f2940]">52km / 3 days</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Difficulty</span>
                        <span className="font-medium text-[#0f2940]">Challenging (high altitude)</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2">
                        <span className="text-slate-500">Permits</span>
                        <span className="font-medium text-[#0f2940]">Tibet Permit + Kailash Permit</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Spiritual Significance Card */}
                <Card className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                      Spiritual Significance
                    </h3>
                    <div className="space-y-3 text-xs md:text-sm">
                      {spiritualSignificance.map((item, index) => (
                        <div key={index} className="border-b border-[#C5E0ED]/20 last:border-0 pb-2 last:pb-0">
                          <div className="flex items-center gap-1 mb-1">
                            <Badge className="bg-[#C5E0ED]/30 text-[#0f2940] text-[8px]">{item.religion}</Badge>
                          </div>
                          <p className="text-slate-600 text-[10px] mb-1">{item.significance}</p>
                          <p className="text-slate-500 text-[8px]">Practices: {item.practices}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Altitude Guide Card */}
                <Card className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                      <MountainSnow className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> Altitude Profile
                    </h3>
                    <div className="space-y-2 text-xs md:text-sm">
                      {altitudeInfo.map((item, index) => (
                        <div key={index} className="flex items-start gap-2 border-b border-[#C5E0ED]/20 last:border-0 pb-1.5 last:pb-0">
                          <div className="w-16 font-medium text-[#0f2940] text-[10px]">{item.location}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-slate-600 text-[10px]">{item.altitude}</span>
                              <span className="text-slate-400 text-[8px]">{item.overnight}</span>
                            </div>
                            <p className="text-slate-500 text-[8px]">{item.notes}</p>
                          </div>
                        </div>
                      ))}
                      <div className="mt-2 bg-amber-50 p-2 rounded-lg">
                        <p className="text-amber-700 text-[8px] flex items-start gap-1">
                          <Info className="w-2.5 h-2.5 shrink-0 mt-0.5" />
                          <span><strong>Acclimatization:</strong> Gradual ascent with rest days at Kyirong and Saga before high altitude.</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Share */}
                <Card className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                      <Share2 className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> Share
                    </h3>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-lg md:rounded-xl text-xs"
                        onClick={() => handleShare("facebook")}
                      >
                        <Facebook className="w-3 h-3 md:w-4 md:h-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg md:rounded-xl text-xs"
                        onClick={() => handleShare("twitter")}
                      >
                        <Twitter className="w-3 h-3 md:w-4 md:h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg md:rounded-xl text-xs"
                        onClick={handleCopyLink}
                      >
                        {copied ? <Check className="w-3 h-3 md:w-4 md:h-4" /> : <Copy className="w-3 h-3 md:w-4 md:h-4" />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-8 w-full overflow-hidden">
              {/* Mobile Share Buttons */}
              <div className="lg:hidden flex gap-2 mb-4">
                <Button
                  size="sm"
                  className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-lg text-xs py-1.5 min-h-[44px]"
                  onClick={() => handleShare("facebook")}
                >
                  <Facebook className="w-3 h-3 mr-1" /> Share
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg text-xs py-1.5 min-h-[44px]"
                  onClick={() => handleShare("twitter")}
                >
                  <Twitter className="w-3 h-3 mr-1" /> Tweet
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg text-xs py-1.5 min-h-[44px]"
                  onClick={handleCopyLink}
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>

              {/* Overview */}
              <section className="mb-6 md:mb-12" id="overview">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Overview</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The <strong>Kailash Mansarovar Tour</strong> is the ultimate spiritual journey - a pilgrimage to 
                    the most sacred mountain in Asia. <strong>Mount Kailash (6,638m)</strong> is revered by Hindus as 
                    the abode of Lord Shiva, by Buddhists as the dwelling of Demchok, by Jains as the site of Rishabhanatha's 
                    nirvana, and by Bonpos as the sacred mountain of their tradition. The nearby <strong>Lake Manasarovar</strong> 
                    is the holiest lake in Asia, believed to cleanse all sins.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    This 16-day pilgrimage takes you from Kathmandu across the Tibetan plateau to the sacred sites. 
                    You'll perform puja and bathe in the holy waters of Manasarovar, then undertake the 52km
                    <strong> Kora (circumambulation)</strong> of Mount Kailash, crossing the <strong>Dolma La Pass 
                    at 5,630m</strong> - the highest point of the journey. This is not merely a tour but a profound 
                    spiritual experience that has drawn pilgrims for millennia.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    With careful acclimatization, experienced guides, and all permits arranged, we facilitate this 
                    sacred journey while prioritizing your safety and spiritual needs. Whether you seek blessings, 
                    personal transformation, or simply to witness one of the world's most remarkable places, the 
                    Kailash Mansarovar pilgrimage is an experience that will stay with you forever.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Pilgrimage Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
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
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]"
                    >
                      <Star className="w-3 h-3 md:w-4 h-4 text-[#2d6a8a] fill-[#C5E0ED] shrink-0" />
                      <span className="text-[#0f2940] font-medium text-xs md:text-base leading-tight">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Best Season */}
              <section className="mb-6 md:mb-12">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Best Time for Pilgrimage</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                  <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Flower2 className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Summer (Jun - Aug)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Warmest temperatures, least snow on passes, and best conditions for Kora. Peak pilgrimage 
                        season with many devotees. Clear skies and long daylight hours.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-xs">Excellent</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <SunriseIcon className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Early Autumn (Sep)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Stable weather, clear skies, and excellent visibility. Fewer pilgrims than summer peak. 
                        Perfect conditions for photography and spiritual practice.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Kora Day Highlights - Special Section */}
              <section className="mb-6 md:mb-12">
                <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200/50 rounded-lg md:rounded-2xl overflow-hidden">
                  <CardContent className="p-3 md:p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-[#0f2940] text-sm md:text-lg">The Sacred Kora - 3 Days Around Kailash</h3>
                    </div>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-3">
                      The 52km circumambulation of Mount Kailash is the spiritual heart of this pilgrimage.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                      <div className="bg-white/80 p-2 rounded-lg">
                        <span className="text-[#0f2940] font-bold text-xs">Day 1</span>
                        <p className="text-slate-600 text-[10px]">Darchen to Dirapuk (20km, 6-7 hrs)</p>
                        <p className="text-slate-500 text-[8px]">Gradual ascent, west face views</p>
                      </div>
                      <div className="bg-white/80 p-2 rounded-lg">
                        <span className="text-[#0f2940] font-bold text-xs">Day 2</span>
                        <p className="text-slate-600 text-[10px]">Dirapuk to Zutulphuk (22km, 8-10 hrs)</p>
                        <p className="text-slate-500 text-[8px]">Dolma La (5,630m), Gauri Kund</p>
                      </div>
                      <div className="bg-white/80 p-2 rounded-lg">
                        <span className="text-[#0f2940] font-bold text-xs">Day 3</span>
                        <p className="text-slate-600 text-[10px]">Zutulphuk to Darchen (10km, 3-4 hrs)</p>
                        <p className="text-slate-500 text-[8px]">Easy descent, completion</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Detailed Itinerary */}
              <section className="mb-6 md:mb-12" id="itinerary">
                <div className="flex items-center justify-between mb-3 md:mb-6">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940]">Day-by-Day Itinerary</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[#2d6a8a] border-[#C5E0ED] hover:bg-[#C5E0ED]/20 rounded-full text-xs md:text-sm px-2 md:px-4"
                    onClick={() =>
                      setExpandedDays(expandedDays.length === itinerary.length ? [] : itinerary.map((d) => d.day))
                    }
                  >
                    {expandedDays.length === itinerary.length ? "Collapse All" : "Expand All"}
                  </Button>
                </div>

                <div className="space-y-2 md:space-y-3">
                  {itinerary.map((day) => (
                    <Card
                      key={day.day}
                      className={`bg-white border-[#C5E0ED]/30 rounded-lg md:rounded-xl overflow-hidden transition-all ${
                        expandedDays.includes(day.day) ? "shadow-md md:shadow-lg shadow-[#C5E0ED]/20" : "hover:shadow-sm"
                      }`}
                    >
                      <CardContent className="p-0">
                        <button
                          className="w-full flex items-center gap-2 md:gap-4 p-2 md:p-4 text-left"
                          onClick={() => toggleDay(day.day)}
                        >
                          <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex flex-col items-center justify-center shrink-0">
                            <span className="text-[8px] md:text-[10px] font-bold text-[#0f2940] uppercase">Day</span>
                            <span className="text-base md:text-xl font-bold text-[#0f2940] leading-none">{day.day}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-[#0f2940] text-xs md:text-base truncate">{day.title}</h4>
                            <div className="flex flex-wrap gap-1 md:gap-3 text-xs text-slate-500 mt-0.5 md:mt-1">
                              <span className="flex items-center gap-0.5 md:gap-1 text-[10px] md:text-xs">
                                <TrendingUp className="w-2.5 h-2.5 md:w-3 md:h-3" /> {day.altitude}
                              </span>
                              <span className="flex items-center gap-0.5 md:gap-1 text-[10px] md:text-xs">
                                <Backpack className="w-2.5 h-2.5 md:w-3 md:h-3" /> {day.distance}
                              </span>
                            </div>
                          </div>
                          <ChevronDown
                            className={`w-3 h-3 md:w-5 md:h-5 text-slate-400 transition-transform shrink-0 ${
                              expandedDays.includes(day.day) ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {expandedDays.includes(day.day) && (
                          <div className="px-2 md:px-4 pb-2 md:pb-4 border-t border-[#C5E0ED]/20">
                            <p className="text-slate-600 text-xs md:text-sm leading-relaxed pt-2 md:pt-4 mb-2 md:mb-4">{day.description}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-2 md:mb-4">
                              <div className="flex items-center gap-2 text-xs text-slate-600 bg-[#f8fbfc] rounded-lg p-2 md:p-3">
                                <Tent className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" />
                                <span className="text-[10px] md:text-xs"><strong>Overnight:</strong> {day.overnight}</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-slate-600 bg-[#f8fbfc] rounded-lg p-2 md:p-3">
                                <Utensils className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" />
                                <span className="text-[10px] md:text-xs"><strong>Meals:</strong> {day.meals}</span>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-1 md:gap-2">
                              {day.highlights.map((h, i) => (
                                <Badge key={i} variant="secondary" className="bg-[#C5E0ED]/20 text-[#2d6a8a] text-[8px] md:text-xs px-1.5 py-0.5 md:px-2 md:py-1">
                                  {h}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Includes / Excludes */}
              <section className="mb-6 md:mb-12" id="includes">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">What's Included</h2>
                <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                  <Card className="bg-green-50/50 border-green-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-6">
                      <h3 className="font-bold text-green-800 mb-2 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" /> Cost Includes
                      </h3>
                      <ul className="space-y-1 md:space-y-2">
                        {includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-[10px] md:text-sm text-slate-600">
                            <CheckCircle2 className="w-2.5 h-2.5 md:w-4 md:h-4 text-green-600 shrink-0 mt-0.5" />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-red-50/50 border-red-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-6">
                      <h3 className="font-bold text-red-800 mb-2 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                        <XCircle className="w-4 h-4 md:w-5 md:h-5" /> Cost Excludes
                      </h3>
                      <ul className="space-y-1 md:space-y-2">
                        {excludes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-[10px] md:text-sm text-slate-600">
                            <XCircle className="w-2.5 h-2.5 md:w-4 md:h-4 text-red-500 shrink-0 mt-0.5" />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Important Note */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg md:rounded-2xl p-3 md:p-6 flex gap-2 md:gap-4 mb-6 md:mb-12">
                <AlertTriangle className="w-4 h-4 md:w-6 md:h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-800 mb-1 md:mb-2 text-xs md:text-base">Important Information - Sacred Pilgrimage</h4>
                  <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                    <li>• <strong>Travel insurance is MANDATORY</strong> and must cover high altitude up to 5,700m and emergency helicopter evacuation.</li>
                    <li>• <strong>Altitude Acclimatization:</strong> This itinerary includes rest days at Kyirong and Saga. Even so, Dolma La at 5,630m is extremely high. Listen to your body and guide.</li>
                    <li>• <strong>Physical Preparation:</strong> The Kora involves 3 days of trekking (52km) at high altitude with one very challenging pass day. Good fitness and prior high-altitude experience recommended.</li>
                    <li>• <strong>Passport and Permits:</strong> You need a valid passport (6+ months) and China Visa. We arrange all Tibet permits including Kailash permit. Submit passport copy at least 30 days before travel.</li>
                    <li>• <strong>Spiritual Respect:</strong> This is a living pilgrimage site for multiple religions. Dress modestly, behave respectfully, and follow your guide's instructions at sacred sites.</li>
                    <li>• <strong>Horses and Porters:</strong> Available for hire during Kora if you cannot trek the entire circuit (payable locally).</li>
                  </ul>
                </div>
              </div>

              {/* Photo Gallery */}
              <section className="mb-6 md:mb-12" id="gallery">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Photo Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3">
                  {gallery.map((image, i) => (
                    <div
                      key={i}
                      className="relative h-24 md:h-48 rounded-lg md:rounded-xl overflow-hidden group cursor-pointer"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-1 md:p-3">
                          <p className="text-white text-[8px] md:text-xs font-medium truncate">{image.caption}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ Section */}
              <section className="mb-6 md:mb-12" id="faq">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Frequently Asked Questions</h2>
                <div className="space-y-2 md:space-y-4">
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
                    <Card key={i} className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-lg md:rounded-xl">
                      <CardContent className="p-2 md:p-5">
                        <h4 className="font-bold text-[#0f2940] mb-1 md:mb-2 text-xs md:text-base">{faq.q}</h4>
                        <p className="text-slate-600 text-[10px] md:text-sm leading-relaxed">{faq.a}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}