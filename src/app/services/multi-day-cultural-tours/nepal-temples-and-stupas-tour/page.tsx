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
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    "day": 1,
    "title": "Arrival in Kathmandu",
    "altitude": "1,350m",
    "distance": "-",
    "description": "Welcome to Nepal! Upon arrival at Tribhuvan International Airport, our representative will greet you and transfer you to your hotel in Kathmandu. After check-in, attend a comprehensive tour briefing where we'll discuss the itinerary, the significance of UNESCO World Heritage Sites, and handle any arrangements. Evening free to explore the vibrant streets of Thamel, with its bustling shops, restaurants, and cafes. Welcome dinner with traditional Nepali cuisine where you'll meet your tour guide and fellow travelers. Enjoy authentic dal bhat, momos, and other local specialties while learning about the cultural heritage of the Kathmandu Valley.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Dinner",
    "highlights": ["Airport pickup", "Tour briefing", "Welcome dinner", "Thamel exploration", "Traditional Nepali cuisine"]
  },
  {
    "day": 2,
    "title": "Kathmandu Durbar Square & Swayambhunath (Monkey Temple)",
    "altitude": "1,350m",
    "distance": "Full day tour",
    "description": "After breakfast, begin your UNESCO heritage journey at Kathmandu Durbar Square (Hanuman Dhoka), a UNESCO World Heritage Site and the historic seat of Nepalese royalty. Explore the ancient palace complex with its intricately carved wooden windows and doors, including the famous Kumari Ghar—home to the Living Goddess Kumari. If you're lucky, you may catch a glimpse of the Kumari at her window. Visit the massive stone statue of Kal Bhairav, the nine-story Basantapur Tower, the Taleju Temple, and the numerous pagoda-style temples dating back to the 12th to 18th centuries. Your guide will explain the history of the Malla kings and the significance of each structure. After lunch, visit Swayambhunath Stupa (Monkey Temple), perched on a hilltop west of the city. This UNESCO World Heritage Site dates back to the 5th century. Climb the 365 stone steps past meditation shrines, prayer wheels, and the resident monkeys who give the temple its nickname. At the summit, circumambulate the main stupa with its all-seeing eyes of Buddha, representing wisdom and compassion watching over the valley. Visit the surrounding shrines, monasteries, and the stunning golden vajra (thunderbolt) statue. Your guide will explain Buddhist symbolism, the meaning of the all-seeing eyes, and the legend of the lotus that emerged from the valley's lake. Enjoy panoramic views of the entire Kathmandu Valley and on clear days, the Himalayan peaks. Evening return to hotel.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Kathmandu Durbar Square", "Kumari Living Goddess", "Kal Bhairav statue", "Hanuman Dhoka Palace", "Taleju Temple", "Swayambhunath Stupa (5th century)", "365 steps and monkeys", "All-seeing eyes of Buddha", "Panoramic Kathmandu Valley views"]
  },
  {
    "day": 3,
    "title": "Pashupatinath Temple & Boudhanath Stupa - Sacred Hindu & Buddhist Sites",
    "altitude": "1,350m",
    "distance": "Full day tour",
    "description": "Today you visit two of the most sacred UNESCO World Heritage Sites in Nepal - one Hindu and one Buddhist. Early morning visit to Pashupatinath Temple, the holiest Hindu temple in Nepal dedicated to Lord Shiva, located on the sacred banks of the Bagmati River. This UNESCO World Heritage Site dates back to the 5th century. Observe morning puja (worship) rituals, including the worship of the Shiva Linga, and the fascinating sadhus (holy men) with their distinctive face paint, dreadlocks, and ash-smeared bodies. Walk along the riverbank to witness cremation ceremonies at the open-air ghats (burning platforms) and understand Hindu beliefs about death, rebirth, and the cycle of samsara. Your guide will explain the mythology of Lord Shiva, the significance of the Bagmati River, and the symbolism of cremation rituals. Visit the surrounding temples including the Guhyeshwari Temple and the Ram Temple. Photography is permitted in the outer areas. After lunch, visit Boudhanath Stupa, one of the largest spherical stupas in South Asia and the center of Tibetan Buddhism in Nepal. This UNESCO World Heritage Site is a massive mandala representing the Buddhist cosmos, rebuilt in the 5th century after being first constructed in the 14th century. Circumambulate the massive stupa (the kora) while spinning the 108 prayer wheels, sending prayers to the universe. Observe Tibetan monks in maroon robes, pilgrims prostrating, and locals engaged in devotion. Your guide will explain Buddhist symbolism, the meaning of the all-seeing eyes, the significance of prayer flags (five colors representing the five elements), and the importance of circumambulation. Visit the surrounding monasteries including the famous Shechen Monastery and Thrangu Tashi Yangtse Monastery. Optional meditation session at a monastery. As evening falls, the stupa is beautifully illuminated, creating a magical spiritual atmosphere. Return to hotel.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Pashupatinath Temple (5th century)", "Bagmati River ghats", "Cremation ceremonies", "Sadhus (holy men)", "Shiva Linga worship", "Boudhanath Stupa", "Tibetan Buddhist culture", "Prayer wheel circumambulation", "Shechen Monastery", "Evening stupa illumination"]
  },
  {
    "day": 4,
    "title": "Patan Durbar Square & Bhaktapur Durbar Square - Twin Medieval Cities",
    "altitude": "1,350m → 1,401m",
    "distance": "Full day tour (30 min to Patan, 1 hr to Bhaktapur from Patan)",
    "description": "Today you explore two of the most magnificent medieval cities in the Kathmandu Valley - Patan and Bhaktapur, both UNESCO World Heritage Sites. Start after breakfast with a short 30-minute drive to Patan (Lalitpur), the 'City of Fine Arts', located just across the Bagmati River from Kathmandu. Patan Durbar Square is the finest collection of Newari temple architecture in Nepal. Visit the Krishna Temple, a masterpiece built entirely of black stone with 21 pinnacles and exquisite carvings depicting scenes from the Mahabharata and Ramayana. Explore the ancient royal palace complex, now the Patan Museum, housed in the old royal palace, featuring magnificent bronze statues, religious artifacts, and a famous collection of Thanka paintings. Visit the Hiranya Varna Mahavihar (Golden Temple), a stunning Buddhist monastery with golden facades, intricate woodwork, peaceful courtyards, and a small stupa. See the Mahabouddha Temple with its thousands of Buddha images on terracotta tiles, and the Kumbheshwar Temple, one of the few five-story pagodas in Nepal. Watch local artisans at work creating traditional metal statues of deities - Patan has been the artistic heart of Nepal for centuries. Your guide will explain the fusion of Hindu and Buddhist architecture found throughout the square. After lunch, drive 1 hour to Bhaktapur, the best-preserved medieval city in Nepal, also known as 'Bhadgaon' or the 'City of Devotees'. Bhaktapur Durbar Square transports you back to the 15th century with its magnificent temple architecture. Explore the Palace of 55 Windows, a masterpiece of wood carving with intricately carved dark red windows. Walk through the magnificent Golden Gate (Sun Dhoka) leading to the palace courtyard. Marvel at the towering Nyatapola Temple, Nepal's tallest pagoda at five stories (30 meters), dedicated to the goddess Siddhi Lakshmi. Visit the Bhairavnath Temple with its three-story pagoda, and the Dattatreya Temple with its intricate woodcarvings. Wander through narrow cobblestone streets to Pottery Square, where artisans create traditional clay figures of deities and everyday items using centuries-old techniques. Your guide will explain the significance of each temple and the stories of the deities worshipped. Return to Kathmandu by evening.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Patan Durbar Square", "Krishna Temple (black stone)", "Golden Temple (Hiranya Varna)", "Patan Museum", "Local metal statue artisans", "Bhaktapur Durbar Square", "Nyatapola Temple (Nepal's tallest pagoda)", "Palace of 55 Windows", "Golden Gate", "Pottery Square"]
  },
  {
    "day": 5,
    "title": "Drive from Kathmandu to Pokhara - Lakeside Paradise",
    "altitude": "1,350m → 820m",
    "distance": "6-7 hrs drive / 200km",
    "description": "After breakfast, begin the scenic drive to Pokhara, Nepal's most beautiful lakeside city and the gateway to the Annapurna region. The journey follows the Prithvi Highway through river valleys, terraced farmlands, and subtropical forests along the Trishuli River. Stop en-route at various viewpoints overlooking the Marsyangdi and Trishuli Rivers, with opportunities for photos and refreshments. On clear days, enjoy distant views of the Annapurna range, Manaslu (8,163m), and Ganesh Himal. Arrive in Pokhara by mid-afternoon and check into your lakeside hotel. Evening free to explore the Lakeside promenade with its cafes, shops, and restaurants offering international cuisine. Optional boat ride on Phewa Lake at sunset to capture the reflection of Machhapuchhre (Fishtail) mountain in the calm waters. Overnight in Pokhara.",
    "overnight": "Hotel in Pokhara",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic Prithvi Highway drive", "Trishuli River viewpoints", "Distant Annapurna and Manaslu views", "Lakeside promenade", "Sunset at Phewa Lake"]
  },
  {
    "day": 6,
    "title": "Sarangkot Sunrise & Pokhara Valley Exploration",
    "altitude": "820m → 1,592m → 820m",
    "distance": "1 hr drive each way",
    "description": "Pre-dawn departure (4:30 AM) to Sarangkot hill station for the most spectacular sunrise photography in Nepal. Watch the first light illuminate the Annapurna range including Annapurna South (7,219m), Annapurna I (8,091m), Annapurna II (7,937m), Machhapuchhre (Fishtail - 6,993m), and Dhaulagiri (8,167m). The panoramic views from Sarangkot are absolutely breathtaking. After sunrise, return to hotel for breakfast. Mid-morning, visit Davis Falls, an interesting waterfall on the Bagmati River that disappears into underground caves and tunnels. Adjacent to the falls is Gupteshwor Cave, a sacred limestone cave with a massive shivalinga and views of the waterfall from within. After lunch, explore the International Mountain Museum (IMM), which features exhibits on Himalayan mountaineering, the history of Everest expeditions, the culture of mountain communities, and displays of the world's highest peaks. Late afternoon, enjoy a boat ride on Phewa Lake to the Tal Barahi Temple, a two-story pagoda temple dedicated to the goddess Barahi, located on a small island in the middle of the lake. Capture the stunning reflection of Machhapuchhre mountain in the calm lake waters as the sun sets. Overnight in Pokhara.",
    "overnight": "Hotel in Pokhara",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Sarangkot sunrise (4:30 AM start)", "Annapurna & Dhaulagiri panorama", "Machhapuchhre (Fishtail) views", "Davis Falls underground", "Gupteshwor Cave", "International Mountain Museum", "Phewa Lake boat ride", "Tal Barahi Temple"]
  },
  {
    "day": 7,
    "title": "Drive from Pokhara to Lumbini - Birthplace of Buddha",
    "altitude": "820m → 150m",
    "distance": "5-6 hrs drive / 180km",
    "description": "After breakfast, drive south from Pokhara to Lumbini, the birthplace of Lord Buddha and one of the holiest pilgrimage sites in the world. This UNESCO World Heritage Site is a must-visit for understanding Nepal's Buddhist heritage. The journey descends from the Himalayan foothills (820m) down to the flat Terai plains (150m), with dramatically changing landscapes along the way - from subtropical forests and winding mountain roads to open agricultural fields and rural villages. You'll pass through the cities of Palpa (known for Tansen with its Newari architecture) and Butwal, with opportunities to see traditional Terai culture and lifestyles. Arrive in Lumbini by early afternoon. Check into your hotel and take a short rest. In the late afternoon, take a gentle orientation walk around the Lumbini Sacred Garden area to get acquainted with this peaceful pilgrimage site. Visit the Puskarini Sacred Pond, where Queen Mayadevi is said to have bathed before giving birth to Buddha - it's still used today by pilgrims for bathing rituals. As the sun sets, experience the peaceful chanting of prayers from nearby monasteries filling the air. Your guide will introduce the story of Prince Siddhartha's birth, his mother Queen Mayadevi, and why Lumbini is considered the spiritual heart of Buddhism. Overnight in Lumbini.",
    "overnight": "Hotel in Lumbini",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic drive from Pokhara to Lumbini", "Palpa/Tansen pass through", "Descend from hills to Terai plains", "Lumbini arrival", "Puskarini Sacred Pond", "Peaceful evening atmosphere"]
  },
  {
    "day": 8,
    "title": "Lumbini Sacred Garden - Mayadevi Temple, Ashoka Pillar & International Monasteries",
    "altitude": "150m",
    "distance": "Full day exploration",
    "description": "Today is dedicated to the full exploration of Lumbini, the birthplace of Lord Buddha and a UNESCO World Heritage Site - the spiritual destination of your journey. Start early with a morning visit to the Sacred Garden (Lumbini Garden), the heart of Lumbini. Enter through the majestic Dharma Swami Maharaja Gate and walk the peaceful paths lined with ancient ruins and monasteries. Visit the Mayadevi Temple, the most sacred site in Lumbini, where Queen Mayadevi gave birth to Siddhartha Gautama in 623 BCE. The temple is built over the exact birthplace, maintained in its excavated form. Inside the temple, see the ancient Marker Stone that pinpoints the exact birthplace of Buddha, marked with a stone slab. Adjacent to the temple is the Ashoka Pillar, erected by Emperor Ashoka in 249 BCE during his pilgrimage to Lumbini to promote Buddhism. The pillar has inscriptions in Brahmi script confirming the site as Buddha's birthplace - a crucial archaeological discovery. Explore the excavated remains of ancient monasteries and stupas dating back to the 3rd century BCE to the 5th century CE, showing how Lumbini was a major Buddhist pilgrimage site for centuries. Your guide will explain the life of Buddha, the significance of his birth, and the pilgrimage tradition. After lunch, visit the International Monastic Zone, where Buddhist communities from around the world have built temples, stupas, and monasteries in their traditional architectural styles. Visit the magnificent Myanmar (Burmese) Temple with its golden spire and marble Buddha, the Chinese Temple with its beautiful gardens and traditional Chinese architecture featuring yellow roofs and red pillars, the Japanese Peace Stupa (World Peace Pagoda) with its golden Buddha statues, the Thai Monastery with its distinctive curved roofs, the Vietnamese Temple, and the Korean Temple. Each monastery offers unique art, architecture, meditation halls, and spiritual atmosphere. In the late afternoon, visit the Eternal Peace Flame, a continuously burning flame that symbolizes the eternal nature of Buddha's teachings and world peace. End your day at the Lumbini Museum, which houses artifacts, manuscripts, coins, and photographs related to Buddha's life, Buddhist history, and the archaeological discoveries at Lumbini. As evening falls, you may choose to participate in meditation sessions or listen to chanting at one of the monasteries - a deeply spiritual experience. Overnight in Lumbini.",
    "overnight": "Hotel in Lumbini",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Mayadevi Temple - Buddha's birthplace", "Marker Stone (exact birthplace)", "Ashoka Pillar (249 BCE inscriptions)", "Ancient monastery ruins (3rd century BCE)", "Sacred Garden", "Myanmar (Burmese) Temple", "Chinese Temple", "Japanese Peace Stupa", "Thai Monastery", "Eternal Peace Flame", "Lumbini Museum"]
  },
  {
    "day": 9,
    "title": "Return Flight to Kathmandu & Farewell Dinner",
    "altitude": "150m → 1,350m",
    "distance": "30 min flight + drive",
    "description": "Early morning optional visit to the sacred garden for final meditation and peaceful atmosphere—a truly spiritual way to conclude your pilgrimage. After breakfast, transfer to Bhairahawa's Gautam Buddha Airport (30 minutes from Lumbini) for a scenic 30-minute flight back to Kathmandu. The short flight offers spectacular aerial views of the Terai plains, the Himalayan foothills, and on clear days, distant views of the Annapurna and Dhaulagiri ranges. Upon arrival at Tribhuvan International Airport in Kathmandu, our representative will meet you and transfer you to your hotel in Thamel. Check into your hotel and freshen up. The afternoon is free for personal exploration - you may choose to do last-minute souvenir shopping in Thamel, purchase Buddhist or Hindu statues and thangkas, visit a spa for a relaxing massage, or simply rest after your spiritual journey. In the evening, enjoy a farewell dinner at a traditional Nepali restaurant with cultural music and dance performance. Celebrate your incredible journey through Nepal's UNESCO World Heritage Sites - from the ancient temples and stupas of the Kathmandu Valley, to the Himalayan sunrise at Sarangkot, to walking in the footsteps of Lord Buddha in Lumbini. Share stories and reflections with your guide and fellow travelers. Overnight in Kathmandu.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Early morning meditation (optional)", "Scenic flight to Kathmandu (30 min)", "Aerial Himalayan foothill views", "Thamel souvenir shopping", "Thangka and statue shopping", "Spa and relaxation", "Farewell dinner with cultural performance"]
  },
  {
    "day": 10,
    "title": "Departure from Kathmandu",
    "altitude": "1,350m",
    "distance": "-",
    "description": "Transfer to Tribhuvan International Airport for your departure flight. Our representative will ensure you reach the airport with plenty of time, assist with check-in, and bid you farewell. Bid farewell to Nepal with memories of exploring ancient temples and durbar squares, witnessing majestic Himalayan sunrises, walking in the footsteps of Lord Buddha at his birthplace in Lumbini, and experiencing the rich cultural heritage of this remarkable country where Hinduism and Buddhism coexist in harmony. May the blessings of the UNESCO World Heritage Sites accompany you on your journey home. Namaste and until we meet again for another adventure in the Himalayas!",
    "overnight": "-",
    "meals": "Breakfast",
    "highlights": ["Airport transfer", "Departure assistance", "Fond farewells", "UNESCO heritage memories"]
  }
];
const includes = [
  "All airport/hotel transfers in private vehicle",
  "10 nights hotel accommodation (3-star with breakfast) as per itinerary",
  "All meals during the tour as specified (breakfast, lunch, dinner)",
  "Experienced English-speaking tour guide (government licensed, religious heritage expert)",
  "Local guides for heritage sites",
  "All ground transportation as per itinerary in private vehicle",
  "Domestic flights: Kathmandu to Pokhara & Bhairahawa to Kathmandu",
  "All monument entrance fees (temples, stupas, and sacred sites)",
  "Swayambhunath Stupa entrance fee",
  "Kathmandu Durbar Square entrance fee",
  "Pashupatinath Temple entrance fee",
  "Boudhanath Stupa entrance fee",
  "Patan Durbar Square entrance fee and museum",
  "Golden Temple entrance fee",
  "Bhaktapur Durbar Square entrance fee",
  "Changunarayan Temple entrance fee",
  "World Peace Pagoda (Pokhara) entrance",
  "Bindhyabasini Temple donation",
  "Tal Barahi Temple boat ride",
  "Davis Falls and Gupteshwor Cave entrance",
  "Sarangkot sunrise transport",
  "Lumbini Sacred Garden entrance",
  "Mayadevi Temple entrance",
  "Lumbini Museum entrance",
  "All international monasteries in Lumbini",
  "First aid medical kit",
  "Farewell dinner with cultural performance",
  "All government taxes and official expenses",
  "Emergency contact number 24/7",
  "Complimentary map of Nepal",
  "Bottled water during tours",
  "Meditation session at Boudhanath (optional)",
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
  "Donations at temples (optional, at your discretion)",
];

const gallery = [
  {
    src: "/images/used/nepal-stupa.avif",
    alt: "Boudhanath Stupa",
    caption: "Boudhanath Stupa - Sacred Buddhist Stupa in Kathmandu",
  },
  {
    src: "/images/used/monkey_temple.avif",
    alt: "Swayambhunath Stupa",
    caption: "Swayambhunath Stupa (Monkey Temple) with all-seeing eyes",
  },
  {
    src: "/images/used/pashupati-1.avif",
    alt: "Pashupatinath Temple",
    caption: "Pashupatinath Temple on the banks of Bagmati River",
  },
  {
    src: "/images/used/bhaktapur-5.avif",
    alt: "Nyatapola Temple Bhaktapur",
    caption: "Nyatapola Temple - Nepal's tallest pagoda in Bhaktapur",
  },
  {
    src: "/images/used/lumbini-1.avif",
    alt: "Mayadevi Temple Lumbini",
    caption: "Mayadevi Temple - Birthplace of Lord Buddha, Lumbini",
  },
 
];

export default function NepalTemplesAndStupasTourPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  
  // Tour name constant for auto-fill functionality
  const tourName = "Nepal Temples and Stupas Tour - Sacred Pilgrimage";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Nepal Temples and Stupas Tour - Sacred Pilgrimage - Himkala Adventure");
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
            src="/images/used/monkey_temple.avif"
            alt="Nepal Temples and Stupas Tour"
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
                <MapPin className="w-3 h-3 mr-1" /> Spiritual Pilgrimage Tour
              </Badge>
              <Badge className="bg-green-100 text-green-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Easy
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Sacred Sites
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              NEPAL TEMPLES <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                AND STUPAS TOUR
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              A sacred journey through Nepal's most revered temples and stupas—from ancient Hindu shrines and Buddhist stupas 
              to the birthplace of Buddha, exploring the spiritual heart of the Himalayas.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - with proper sticky sidebar */}
      <section className="py-6 md:py-12 relative">
        <div className="container mx-auto px-3 md:px-6 max-w-full">
          {/* Mobile Sticky Book Now Bar */}
          <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-[#C5E0ED]/30 shadow-sm py-2 -mx-3 px-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 line-through">$2,350</div>
                <div className="text-lg font-bold text-[#0f2940]">$2,200</div>
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
              <div className="sticky top-24">
                <div className="space-y-4 md:space-y-6">
                  {/* Price Card */}
                  <Card className="bg-gradient-to-br from-[#0f2940] to-[#1a4166] border-none rounded-xl md:rounded-2xl overflow-hidden">
                    <CardContent className="p-4 md:p-6">
                      <div className="text-center mb-4 md:mb-6">
                        <span className="text-white/50 text-sm line-through">$2,350</span>
                        <div className="text-3xl md:text-4xl font-bold text-white mt-1">$2,200</div>
                        <span className="text-white/60 text-sm">per person</span>
                        <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $150</Badge>
                      </div>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>10 Days / 9 Nights</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Best: Sept-May (Year-round)</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Group Size: 2-15</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <span>20+ Sacred Sites</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Map className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Max Altitude: 1,592m</span>
                        </div>
                      </div>

                      {/* Book Now Button */}
                      <Link href={`/contact?trek=${encodeURIComponent(tourName)}`}>
                        <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-xs md:text-base">
                          <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Book This Tour
                        </Button>
                      </Link>
                      
                      {/* WhatsApp Now Button */}
                      <a 
                        href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about the ${tourName}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold rounded-full h-10 md:h-12 text-xs md:text-base">
                          <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> WhatsApp Now
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  {/* Quick Facts */}
                  <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-[10px] md:text-base">
                        <Map className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> Quick Facts
                      </h3>
                      <div className="space-y-2 text-[10px] md:text-sm">
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Start Point</span>
                          <span className="font-medium text-[#0f2940]">Kathmandu</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">End Point</span>
                          <span className="font-medium text-[#0f2940]">Kathmandu</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Destinations</span>
                          <span className="font-medium text-[#0f2940]">Kathmandu, Patan, Bhaktapur, Pokhara, Lumbini</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Tour Type</span>
                          <span className="font-medium text-[#0f2940]">Spiritual, Pilgrimage, Cultural</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Sacred Sites</span>
                          <span className="font-medium text-[#0f2940]">Swayambhunath, Pashupatinath, Boudhanath, Golden Temple, Nyatapola, Changunarayan, World Peace Pagoda, Bindhyabasini, Tal Barahi, Mayadevi, and more</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2">
                          <span className="text-slate-500">Difficulty</span>
                          <span className="font-medium text-[#0f2940]">Easy - Suitable for all</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Share */}
                  <Card className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-[10px] md:text-base">
                        <Share2 className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> Share
                      </h3>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-lg md:rounded-xl text-[8px] md:text-xs"
                          onClick={() => handleShare("facebook")}
                        >
                          <Facebook className="w-3 h-3 md:w-4 md:h-4" />
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg md:rounded-xl text-[8px] md:text-xs"
                          onClick={() => handleShare("twitter")}
                        >
                          <Twitter className="w-3 h-3 md:w-4 md:h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg md:rounded-xl text-[8px] md:text-xs"
                          onClick={handleCopyLink}
                        >
                          {copied ? <Check className="w-3 h-3 md:w-4 md:h-4" /> : <Copy className="w-3 h-3 md:w-4 md:h-4" />}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-8 w-full overflow-hidden mt-6 lg:mt-0">
              {/* Mobile Share Buttons */}
              <div className="lg:hidden flex gap-2 mb-6">
                <Button
                  size="sm"
                  className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-lg text-[10px] py-1.5 min-h-[44px]"
                  onClick={() => handleShare("facebook")}
                >
                  <Facebook className="w-3 h-3 mr-1" /> Share
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg text-[10px] py-1.5 min-h-[44px]"
                  onClick={() => handleShare("twitter")}
                >
                  <Twitter className="w-3 h-3 mr-1" /> Tweet
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg text-[10px] py-1.5 min-h-[44px]"
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
                    The <strong>Nepal Temples and Stupas Tour</strong> is a sacred 11-day pilgrimage through the most revered religious sites of Nepal. From ancient Hindu temples along the Bagmati River to magnificent Buddhist stupas adorned with all-seeing eyes, and from the birthplace of Lord Buddha to hilltop shrines with panoramic Himalayan views, this journey offers a profound exploration of Nepal's spiritual heritage.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    Nepal is a land where Hinduism and Buddhism have coexisted and intertwined for centuries, creating a unique syncretic culture. In the Kathmandu Valley alone, you'll visit Swayambhunath with its 2,000-year history, the sacred Hindu temple of Pashupatinath where sadhus meditate and cremation ceremonies take place, and the massive Boudhanath Stupa where Tibetan monks circumambulate daily. You'll explore the temple squares of Patan and Bhaktapur, each with their own distinct architectural styles and religious significance.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The journey continues to Pokhara, where the World Peace Pagoda overlooks the serene Phewa Lake and the Tal Barahi Temple sits on an island sanctuary. The spiritual climax comes in Lumbini, where you'll walk in the footsteps of Buddha himself at the Mayadevi Temple and explore monasteries built by Buddhist countries from around the world.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    Whether you seek spiritual enlightenment, cultural understanding, or simply the beauty of sacred architecture, this tour offers a deeply moving experience. Your expert guide will explain the mythology, symbolism, and rituals of each site, while allowing time for personal reflection and meditation. This is more than a tour—it's a spiritual journey through the heart of Nepal.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Tour Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Visit Swayambhunath Stupa (Monkey Temple) with its all-seeing eyes of Buddha",
                    "Witness Hindu rituals and cremation ceremonies at Pashupatinath Temple",
                    "Circumambulate Boudhanath Stupa, one of the largest in South Asia",
                    "See the Living Goddess Kumari at Kathmandu Durbar Square",
                    "Explore Patan's Golden Temple and Krishna Temple",
                    "Climb Nepal's tallest pagoda, Nyatapola Temple in Bhaktapur",
                    "Visit Changunarayan Temple, the oldest Hindu temple in Nepal (4th century)",
                    "Meditate at the World Peace Pagoda overlooking Pokhara Valley",
                    "Boat ride to Tal Barahi Temple on Phewa Lake",
                    "Walk in the footsteps of Buddha at Mayadevi Temple, Lumbini",
                    "Explore international monasteries in Lumbini (Thailand, Myanmar, China, Tibet)",
                    "Witness sunrise over the Annapurna range from Sarangkot",
                    "Visit sacred caves: Gupteshwor Cave with its Shiva Linga",
                    "Observe prayer flag ceremonies and spinning prayer wheels",
                    "Optional meditation sessions at Buddhist monasteries",
                  ].map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]"
                    >
                      <span className="text-[#0f2940] font-medium text-xs md:text-base leading-tight">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Best Season */}
              <section className="mb-6 md:mb-12">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Best Time to Visit</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
                  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Mar-May)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Pleasant temperatures, blooming flowers, and clear mountain views. Ideal for temple exploration and photography. Special festivals like Buddha Jayanti.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Excellent</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Autumn (Sep-Nov)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Crystal-clear skies, perfect temperatures, and major festivals including Dashain and Tihar. Temples are beautifully decorated and full of devotees.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Snowflake className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Winter (Dec-Feb)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Crisp clear air, excellent mountain views, and fewer crowds. Cool but sunny days perfect for exploring temples without the heat.
                      </p>
                      <Badge className="bg-blue-100 text-blue-700 border-none text-[8px] md:text-xs">Good</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: Monsoon (Jun-Aug) brings lush green landscapes but occasional rain. Temple visits are still possible with umbrella/raincoat. Lumbini remains accessible.</p>
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
                            <p className="text-slate-600 text-[10px] md:text-sm leading-relaxed pt-2 md:pt-4 mb-2 md:mb-4">{day.description}</p>

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
                      <h3 className="font-bold text-green-800 mb-2 md:mb-4 flex items-center gap-2 text-xs md:text-base">
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
                      <h3 className="font-bold text-red-800 mb-2 md:mb-4 flex items-center gap-2 text-xs md:text-base">
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
                  <h4 className="font-bold text-amber-800 mb-1 md:mb-2 text-xs md:text-base">Important Information for Pilgrims</h4>
                  <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                    <li>• <strong>Dress Code:</strong> Modest dress is required at all temples and stupas. Shoulders and knees must be covered. Remove shoes before entering temple premises. Carry socks for comfort.</li>
                    <li>• <strong>Photography:</strong> Photography is permitted in most areas, but some temple interiors restrict it. Always ask permission before photographing people, especially sadhus and during rituals. Flash photography is often prohibited inside sanctums.</li>
                    <li>• <strong>Temple Etiquette:</strong> Circumambulate stupas and temples clockwise. Do not touch religious artifacts or offerings. Speak softly and maintain respectful behavior. Follow your guide's instructions.</li>
                    <li>• <strong>Physical Requirements:</strong> This tour involves walking on uneven stone streets and climbing stairs at temples. Comfortable walking shoes are essential. Some sites like Swayambhunath have 365 steps.</li>
                    <li>• <strong>Travel Insurance:</strong> Mandatory - ensure your policy covers medical emergencies, trip cancellation, and evacuation.</li>
                    <li>• <strong>Visa:</strong> Nepal visa available on arrival at Tribhuvan International Airport. Bring two passport photos and cash for visa fees ($30 for 15 days, $50 for 30 days).</li>
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
                      q: "What is the difference between a temple and a stupa?",
                      a: "In Nepal, temples are generally Hindu places of worship, often with pagoda-style architecture housing deities. Stupas are Buddhist structures containing relics, with a dome-shaped form representing the Buddha's mind. Stupas are circumambulated clockwise while spinning prayer wheels. Both are sacred and coexist throughout Nepal.",
                    },
                    {
                      q: "Can I enter the inner sanctums of temples?",
                      a: "Some temples allow Hindus only in the inner sanctum. Non-Hindus can observe from outside and explore the outer courtyards. Your guide will advise on which temples allow entry. Pashupatinath's inner court is for Hindus only, but the outer areas offer excellent viewing. Buddhist stupas and monasteries welcome all visitors.",
                    },
                    {
                      q: "What is the significance of the all-seeing eyes on stupas?",
                      a: "The eyes on Buddhist stupas (like Swayambhunath and Boudhanath) represent the all-seeing wisdom of Buddha. The nose is shaped like the Nepali number 'one' (ek), symbolizing unity. The third eye represents inner vision. They remind us that Buddha sees all actions and thoughts with wisdom and compassion.",
                    },
                    {
                      q: "Can I participate in rituals or meditation?",
                      a: "Yes! Many sites welcome respectful participation. You can spin prayer wheels, offer butter lamps at monasteries, receive tikka blessings at Hindu temples, and join meditation sessions (optional). Your guide will help you participate appropriately and explain the meaning of each ritual.",
                    },
                    {
                      q: "Is it appropriate to take photos of sadhus (holy men)?",
                      a: "Sadhus are accustomed to being photographed, but always ask permission first. Most expect a small donation (Rs. 50-100) for photos. Be respectful, as they are engaged in spiritual practice. Some sadhus will pose willingly; others prefer privacy. Your guide will help negotiate appropriately.",
                    },
                    {
                      q: "What should I bring for temple visits?",
                      a: "Bring modest clothing (shawls are useful for covering shoulders), socks for removing shoes, small denomination rupees for donations, a notebook for insights, and an open heart. Offerings like flowers or tikka powder can be purchased at temple entrances if you wish to participate in rituals.",
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