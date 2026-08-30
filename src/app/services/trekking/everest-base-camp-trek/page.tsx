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
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    "day": 1,
    "title": "Flight from Kathmandu to Lukla & Trek to Phakding",
    "altitude": "1,400m → 2,840m → 2,610m",
    "distance": "35 min flight / 3-4 hrs trek",
    "description": "Early morning departure from your hotel for the scenic mountain flight from Kathmandu to Lukla (Tenzing-Hillary Airport). This 35-minute flight offers breathtaking aerial views of the Himalayan range, including Langtang, Gauri Shankar, and Everest on clear days. Upon landing at Lukla's famous hillside airstrip, you'll meet your trekking crew and porters. After organizing gear, begin the gentle descent to Phakding. The trail follows the Dudh Koshi River through pine forests, crossing several suspension bridges and passing through small Sherpa settlements. This short trek helps with initial acclimatization while introducing you to the beauty of the Khumbu region. Overnight in Phakding's comfortable teahouse.",
    "overnight": "Teahouse in Phakding",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic mountain flight to Lukla", "Tenzing-Hillary Airport landing", "First views of the Himalayas", "Dudh Koshi River valley", "Suspension bridge crossings"]
  },
  {
    "day": 2,
    "title": "Trek from Phakding to Namche Bazaar",
    "altitude": "2,610m → 3,440m",
    "distance": "10km / 5-6 hrs trek",
    "description": "Today's trek takes you from Phakding to Namche Bazaar, the bustling Sherpa capital and gateway to the Everest region. The trail follows the Dudh Koshi River, crossing the iconic Hillary Suspension Bridge - the highest and longest in the Khumbu. You'll pass through Monjo (Sagarmatha National Park entry point) where permits are checked. The trail steepens considerably on the final climb to Namche, with several switchbacks offering magnificent views. As you approach Namche, your patience is rewarded with your first glimpse of Mount Everest's summit peeking above the ridge. Namche Bazaar is a vibrant town with banks, bakeries, gear shops, and exceptional Sherpa culture. This is a challenging but rewarding day that sets the stage for your Everest adventure.",
    "overnight": "Teahouse in Namche Bazaar",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Hillary Suspension Bridge crossing", "Sagarmatha National Park entry", "First views of Mount Everest", "Traditional Sherpa villages", "Namche Bazaar arrival"]
  },
  {
    "day": 3,
    "title": "Acclimatization Day in Namche Bazaar",
    "altitude": "3,440m",
    "distance": "Optional hikes (2-4 hrs)",
    "description": "A crucial acclimatization day in Namche Bazaar before climbing higher. The golden rule: climb high, sleep low. Your guide will lead an optional morning hike to the Everest View Hotel (3,880m) - a 2-hour uphill climb offering jaw-dropping panoramas of Everest (8,848m), Lhotse (8,516m), Nuptse (7,861m), and Ama Dablam (6,812m). Alternatively, visit the Sherpa Museum to learn about mountaineering history, Sherpa culture, and the famous Tenzing Norgay. Other options include exploring Khumjung village (where the Hillary School is located) or simply resting, hydrating, and enjoying Namche's famous bakeries and cafes. This rest day significantly improves your acclimatization and success rate for higher altitudes.",
    "overnight": "Teahouse in Namche Bazaar",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Everest View Hotel hike", "Panoramic mountain views (Everest, Lhotse, Ama Dablam)", "Sherpa Museum visit", "Khumjung village exploration", "Acclimatization strategy"]
  },
  {
    "day": 4,
    "title": "Trek from Namche Bazaar to Tengboche",
    "altitude": "3,440m → 3,860m",
    "distance": "10km / 5-6 hrs trek",
    "description": "Leaving Namche Bazaar, the trail contours along the hillsides with spectacular views of Everest, Nuptse, Lhotse, and the magnificent Ama Dablam. The path is relatively flat for the first hour before descending to Kayangjuma and crossing the Dudh Koshi River at Phunki Tenga (3,250m) - a great spot for a noodle soup break. The final climb to Tengboche (3,860m) is steep but incredibly rewarding. Tengboche Monastery, the largest Tibetan Buddhist monastery in the Khumbu region, sits majestically with Ama Dablam as its backdrop. Attend the evening prayer ceremony (puja) where monks chant, blow conch shells, and play traditional instruments. The sunset over the Himalayas from Tengboche is unforgettable. This day offers some of the most spectacular mountain photography opportunities on the entire trek.",
    "overnight": "Teahouse in Tengboche",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Ama Dablam close-up views", "Tengboche Monastery visit", "Evening prayer ceremony", "Sunset over the Himalayas", "Rhododendron forests"]
  },
  {
    "day": 5,
    "title": "Trek from Tengboche to Dingboche",
    "altitude": "3,860m → 4,410m",
    "distance": "11km / 5-6 hrs trek",
    "description": "Today's trek descends through beautiful rhododendron and juniper forests to Deboche, then crosses the Imja Khola River. The trail continues through Pangboche village (3,930m), one of the oldest Sherpa settlements in the Khumbu, home to a famous monastery said to contain a Yeti scalp. As you exit the forest, the landscape opens into the vast, alpine Imja Valley with stunning views of Ama Dablam towering above. Dingboche (4,410m) is a beautiful Sherpa village surrounded by stone-walled potato fields and dramatic mountain scenery including Lhotse, Island Peak, and Ama Dablam. This is a key acclimatization point, and you'll notice the air thinning significantly. Spend the afternoon resting, hydrating, and enjoying the mountain atmosphere.",
    "overnight": "Teahouse in Dingboche",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Pangboche Monastery (Yeti scalp)", "Imja Valley alpine landscape", "Ama Dablam panorama", "Island Peak views", "Sherpa farming community"]
  },
  {
    "day": 6,
    "title": "Acclimatization Day in Dingboche",
    "altitude": "4,410m",
    "distance": "Optional hike to Nagarjun Hill (5,100m)",
    "description": "A second crucial rest day for proper acclimatization before heading to higher elevations. Today's recommended activity is the hike to Nagarjun Hill (also known as Nangkartshang Peak at 5,100m). This 3-4 hour round-trip climb offers spectacular 360-degree views of Makalu (8,485m - the world's fifth highest), Lhotse, Nuptse, Ama Dablam, Island Peak, and the entire Imja Valley. The climb is steep but incredibly rewarding, helping you acclimatize more effectively for the altitude above 5,000m. After lunch, you can explore Dingboche's ancient Buddhist monastery, visit local yak herding families, or simply rest. Your guide will monitor your oxygen saturation and ensure you're properly hydrated for the challenging days ahead. This acclimatization day significantly increases your success rate for Everest Base Camp and Kala Patthar.",
    "overnight": "Teahouse in Dingboche",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Nagarjun Hill hike (5,100m)", "360-degree Himalayan panorama", "Views of Mt. Makalu (8,485m)", "Island Peak and Lhotse views", "Monastery and yak herder visits"]
  },
  {
    "day": 7,
    "title": "Trek from Dingboche to Lobuche",
    "altitude": "4,410m → 4,940m",
    "distance": "11km / 5-6 hrs trek",
    "description": "Today's trek continues up the broad, arid Imja Valley with the towering peaks of Nuptse, Lhotse, and Ama Dablam dominating the skyline. The trail climbs gradually to Thukla Pass (4,620m), marked by a field of memorial chortens and stone cairns dedicated to climbers (including the famous Scott Fischer) who lost their lives on Mount Everest and surrounding peaks. This poignant site reminds you of the mountain's power. After a short break, the trail ascends more steeply to Lobuche (4,940m), a small settlement of basic lodges nestled in a dramatic, rocky amphitheater. The air is noticeably thin here - move slowly, breathe deeply, and listen to your body. In the afternoon, you may take a short acclimatization walk toward the Khumbu Glacier. Overnight at Lobuche's high-altitude teahouse.",
    "overnight": "Teahouse in Lobuche",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Thukla Pass memorial chortens", "Climbers' memorial tribute", "Khumbu Glacier views", "Nuptse and Lhotse panorama", "High-alpine landscape entry"]
  },
  {
    "day": 8,
    "title": "Trek from Lobuche to Gorakshep & Everest Base Camp",
    "altitude": "4,940m → 5,164m → 5,364m",
    "distance": "13km / 7-8 hrs trek",
    "description": "This is the day you've been waiting for - reaching Everest Base Camp! Start early for the 3-hour trek to Gorakshep (5,164m), the last settlement before Base Camp. Drop your bags at the teahouse, have a quick snack, then continue along the lateral moraine of the Khumbu Glacier. The trail to Everest Base Camp (5,364m) is rocky and challenging, following prayer flags and cairns across glacier rubble. As you approach Base Camp during the spring climbing season (April-May), you'll see a tent city of expedition teams preparing for summit attempts. You'll have views of the infamous Khumbu Icefall, the first major obstacle for climbers. Stand at the foot of the world's highest mountain - an achievement of a lifetime! Take photos, soak in the atmosphere, and celebrate with your team. Return to Gorakshep for overnight. The thinner air at this altitude will make every step feel effortful - walk slowly and stay hydrated.",
    "overnight": "Teahouse in Gorakshep",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Gorakshep - highest settlement", "Everest Base Camp (5,364m)", "Khumbu Icefall views", "Expedition tent city (spring season)", "Once-in-a-lifetime achievement"]
  },
  {
    "day": 9,
    "title": "Kala Patthar Sunrise & Trek to Pheriche",
    "altitude": "5,164m → 5,545m → 4,240m",
    "distance": "12km / 7-8 hrs trek",
    "description": "The most spectacular morning of the entire trek! Wake at 4 AM for the challenging pre-dawn hike to Kala Patthar (5,545m) - meaning 'black rock' in Nepali. The 2-hour steep climb in the dark is difficult, but the reward is beyond words. Watch the sunrise paint Mount Everest (8,848m) in golden and pink light - the closest you'll ever be to the world's highest peak without climbing it. From Kala Patthar, you get the most unobstructed, face-on view of Everest, plus Nuptse, Changtse (7,580m), and Lhotse. After photography and celebrations, descend to Gorakshep for breakfast, then continue descending to Pheriche (4,240m). The lower altitude brings richer oxygen, better sleep, and relief for your body. Pheriche has the Himalayan Rescue Association's medical clinic where you can learn about altitude sickness. This day is the climax of your Everest Base Camp trek.",
    "overnight": "Teahouse in Pheriche",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Kala Patthar sunrise (5,545m)", "Best unobstructed Everest view", "Golden Himalayan sunrise", "Pheriche arrival and lower altitude", "HRA medical clinic information"]
  },
  {
    "day": 10,
    "title": "Trek from Pheriche to Namche Bazaar",
    "altitude": "4,240m → 3,440m",
    "distance": "15km / 6-7 hrs trek",
    "description": "The descent continues as you retrace your steps through the beautiful Khumbu Valley. The trail passes back through Pangboche, Tengboche, and Kyangjuma. Descending is easier on the lungs but harder on the knees - use trekking poles! The landscape transforms from high-alpine desert back to lush rhododendron and pine forests. The familiar mountains - Everest, Lhotse, and Ama Dablam - appear from new angles. Arrive in Namche Bazaar by afternoon, where you can celebrate your successful Everest Base Camp achievement. Reward yourself with hot showers (worth every rupee), laundry services, and Namche's famous bakeries. You'll feel the oxygen-rich air immediately, and sleep will come easily tonight. This is a day of reflection and celebration with your trekking team.",
    "overnight": "Teahouse in Namche Bazaar",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Return descent through Khumbu", "New mountain perspectives", "Rhododendron forest trails", "Hot shower celebration", "Namche bakeries and cafes"]
  },
  {
    "day": 11,
    "title": "Trek from Namche Bazaar to Lukla",
    "altitude": "3,440m → 2,840m",
    "distance": "18km / 6-7 hrs trek",
    "description": "Your final day of trekking follows the Dudh Koshi River as you make your way back to Lukla. The trail is mostly downhill, passing through Monjo (where you exit Sagarmatha National Park) and crossing familiar suspension bridges including the Hillary Bridge. The lush forests, rushing river, and small Sherpa villages create a peaceful farewell to the Khumbu region. Arrive in Lukla by late afternoon. Check into your teahouse for the final time and attend a farewell ceremony with your guides and porters. This is your chance to thank them with tips and appreciation. Enjoy a celebratory dinner in Lukla, reflecting on your incredible journey to the base of Mount Everest. Pack your bags carefully for tomorrow's early morning flight back to Kathmandu.",
    "overnight": "Teahouse in Lukla",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Final day of Everest Base Camp trek", "Dudh Koshi River valley", "Farewell to the Himalayas", "Celebration dinner with team", "Lukla arrival and packing"]
  },
  {
    "day": 12,
    "title": "Flight from Lukla to Kathmandu",
    "altitude": "2,840m → 1,400m",
    "distance": "35 min flight",
    "description": "Early morning wake-up for your scenic return flight from Lukla to Kathmandu. The 35-minute flight offers final aerial views of the Himalayan range - a last glimpse of Everest, Lhotse, and the peaks you've been trekking among. Upon arrival at Tribhuvan International Airport, our representative will transfer you to your hotel in Thamel. You've earned a well-deserved hot shower, clean clothes, and the comfort of a real bed. The afternoon is free to explore Kathmandu - shop for souvenirs in Thamel, visit a spa for a much-needed massage, or simply rest. In the evening, enjoy a farewell dinner at a traditional Nepali restaurant with cultural performance (optional). Celebrate completing one of the world's greatest treks - reaching Everest Base Camp at 5,364m and Kala Patthar at 5,545m.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast, Dinner",
    "highlights": ["Scenic Lukla to Kathmandu flight", "Final aerial Himalayan views", "Thamel souvenir shopping", "Farewell celebration dinner", "Everest Base Camp achievement celebration"]
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
  "Round-trip flights Kathmandu - Lukla - Kathmandu",
  "Sagarmatha National Park Permit",
  "Khumbu Rural Municipality Permit (TIMS card)",
  "All ground transportation as per itinerary",
  "First aid medical kit including pulse oximeter",
  "Sleeping bag and down jacket for high altitude (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Everest region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude trekking up to 5,600m & emergency evacuation)",
  "Personal trekking gear and equipment",
  "Meals in Kathmandu (except welcome dinner and breakfasts)",
  "Bottled/mineral water during trek (purification tablets provided)",
  "Hot showers and battery charging at lodges ($2-5 per use)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, bar bills, souvenirs)",
  "Tips and gratuities for guides and porters (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
];

const gallery = [
  {
    src: "/images/used/everest-3.webp",
    alt: "Mount Everest (8,848m) - the world's highest mountain viewed from the Everest Base Camp trekking route in Nepal",
    caption: "Mount Everest (8,848m)",
  },
  {
    src: "/images/used/everest-1.webp",
    alt: "Namche Bazaar - the vibrant Sherpa capital and gateway to the Everest region in Nepal",
    caption: "Namche Bazaar",
  },
  {
    src: "/images/used/everest-2.webp",
    alt: "Tengboche Monastery - the largest Tibetan Buddhist monastery in the Khumbu region with Ama Dablam backdrop",
    caption: "Tengboche Monastery",
  },
  {
    src: "/images/used/everest-main-page.webp",
    alt: "Everest Base Camp at 5,364m - the ultimate destination of the Everest Base Camp trek in Nepal's Khumbu region",
    caption: "Everest Base Camp",
  },
];

export default function EverestBaseCampTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);

  const trekName = "Everest Base Camp Trek";
  const canonicalUrl = "https://www.himkalaadventure.com/everest-base-camp-trek";
  const pageTitle = "Everest Base Camp Trek - Himkala Adventure";
  const pageDescription = "Everest Base Camp Trek: Trek to the foot of Mount Everest at 5,364m through Sherpa villages and the Khumbu Valley. Sunrise from Kala Patthar. Book now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/everest-main-page.webp";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Everest Base Camp Trek - Himkala Adventure")}`;
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
                    <span>Everest Region</span>
                  </div>
                  <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Everest <br />
                    <span className="text-[#cf6943]">Base Camp Trek</span>
                  </h1>
                </div>
                <div className="max-w-full md:max-w-[280px]">
                  <p className="text-sm leading-6 text-[#66706d]">
                    Trek to the foot of the world's highest mountain through Sherpa villages, 
                    ancient monasteries, and reach Everest Base Camp at 5,364 meters.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                      Challenging
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      <Mountain className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      5,364m
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      World Heritage
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
                src="/images/used/everest-main-page.webp"
                alt="Everest Base Camp Trek - trekking to the foot of Mount Everest at 5,364m through Nepal's Khumbu Valley with stunning Himalayan views"
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
                  $1,520 / person
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
                { label: "Max Altitude", value: "5,545m" },
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
                  The <strong className="text-[#14383b]">Everest Base Camp Trek</strong> is the ultimate 
                  Himalayan adventure, taking you to the foot of the world's highest mountain - 
                  <strong className="text-[#14383b]"> Mount Everest (8,848m)</strong>. This iconic 
                  <strong className="text-[#14383b]"> Everest Base Camp trekking</strong> experience 
                  follows in the footsteps of legendary climbers through the heart of Sherpa country, 
                  offering unparalleled mountain scenery and rich cultural experiences.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  Starting with a thrilling flight to Lukla, the trail winds through the Dudh Koshi 
                  Valley, past colorful prayer flags, and through traditional Sherpa villages like 
                  Namche Bazaar and Tengboche, home to the region's most famous monastery.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  The trek culminates with a sunrise hike to <strong className="text-[#14383b]">Kala Patthar (5,545m)</strong> for 
                  breathtaking close-up views of Everest, followed by the ultimate destination: 
                  <strong className="text-[#14383b]"> Everest Base Camp (5,364m)</strong> itself, 
                  nestled at the foot of the Khumbu Icefall.
                </p>
              </article>

              <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
                <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
                <strong>Important:</strong> Travel insurance is mandatory and must cover high altitude 
                trekking up to 5,600m. Flights to/from Lukla are weather-dependent and may experience delays.
              </div>
            </div>
          </section>

          {/* Highlights - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Trek Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Stand at Everest Base Camp (5,364m)",
                  "Sunrise from Kala Patthar (5,545m)",
                  "Scenic flight to/from Lukla",
                  "Visit Tengboche Monastery",
                  "Explore Namche Bazaar",
                  "Sherpa culture and hospitality",
                  "Views of Everest, Lhotse, Nuptse, Ama Dablam",
                  "Sagarmatha National Park",
                  "Khumbu Glacier and Icefall",
                  "Climbers' Memorial at Thukla",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Best Time to Trek Everest Base Camp</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Sunrise className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Spring (Mar - May)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    Rhododendrons bloom in vibrant colors, moderate temperatures, and excellent visibility. 
                    Popular season with busy trails and lodges.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
                </div>
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Snowflake className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Autumn (Sep - Nov)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    The most popular season with crystal-clear skies, stable weather, and the best 
                    mountain views. Comfortable temperatures at all altitudes.
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
                A visual journey to the foot of the world's highest mountain.
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
                    q: "How difficult is the Everest Base Camp Trek?",
                    a: "The trek is rated as challenging but achievable for anyone with good fitness. You'll trek 5-7 hours daily at high altitude. Previous trekking experience is helpful but not essential if you prepare well with cardio training.",
                  },
                  {
                    q: "Do I need previous trekking experience?",
                    a: "No, many first-time trekkers complete the EBC trek successfully. However, good physical fitness and proper preparation are essential. Regular cardio exercise and hill walking before the trek is highly recommended.",
                  },
                  {
                    q: "What about altitude sickness?",
                    a: "Our itinerary includes two acclimatization days (at Namche and Dingboche). Guides are trained in altitude sickness recognition and carry oximeters. We recommend Diamox after consulting your doctor and following proper hydration protocols.",
                  },
                  {
                    q: "What is the accommodation like on the trek?",
                    a: "Teahouses provide basic but comfortable rooms with twin beds and shared bathrooms. Facilities become more basic at higher altitudes. Hot showers and battery charging are available at extra cost in most places.",
                  },
                  {
                    q: "What happens if Lukla flights are cancelled?",
                    a: "Weather delays are common. We build buffer days into the itinerary. If delays occur, we have contingency plans including helicopter options (covered by insurance) if needed for tight schedules.",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready to Trek to the Base of Everest?</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Book your Everest Base Camp Trek today and experience the adventure of a lifetime in the heart of the Himalayas.
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