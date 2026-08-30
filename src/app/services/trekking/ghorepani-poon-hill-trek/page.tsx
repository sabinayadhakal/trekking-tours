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
  Flower,
  Eye,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    "day": 1,
    "title": "Drive from Kathmandu to Pokhara",
    "altitude": "1,400m → 820m",
    "distance": "200km / 6-7 hrs drive",
    "description": "Early morning departure from your hotel in Kathmandu for the scenic drive to Pokhara along the Prithvi Highway, following the winding Trishuli River through lush green hills and terraced farmlands. The journey offers beautiful views of rural Nepali landscapes, distant mountain peaks, and occasional white-water rafters in the river below. You'll pass through charming towns and villages, witnessing daily life in the Nepali countryside. Arrive in Pokhara (820m), Nepal's second-largest city and the gateway to the Annapurna region. Check into your beautiful lakeside hotel and enjoy free time to explore Phewa Lake, go boating, or simply relax with stunning views of the Annapurna range and Machhapuchhre (Fishtail) reflected in the lake. Evening is free to explore Lakeside's vibrant restaurants, bars, and shops. Prepare your gear for tomorrow's trek start.",
    "overnight": "Hotel in Pokhara",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Early morning departure from Kathmandu", "Scenic Prithvi Highway drive", "Trishuli River views", "Rural Nepali countryside", "Phewa Lake and mountain reflections"]
  },
  {
    "day": 2,
    "title": "Drive to Nayapul & Trek to Tikhedhunga",
    "altitude": "820m → 1,010m → 1,540m",
    "distance": "1.5 hrs drive / 3-4 hrs trek",
    "description": "After breakfast in Pokhara, take a scenic 1.5-hour drive to Nayapul (1,010m), the traditional trailhead for the Poon Hill and Annapurna Base Camp treks. Along the way, enjoy beautiful views of the Modi Khola River valley and terraced farmlands. Upon arrival at Nayapul, meet your trekking guides and porters. Begin your trek following the Modi Khola River. The trail passes through beautiful villages with traditional Nepali houses, lush forests, and several suspension bridges. The path gradually ascends to Tikhedhunga (1,540m), a small village nestled in a valley surrounded by lush green hills. Tikhedhunga is a charming settlement with several teahouses located beside a rushing stream. This short trek day allows for a gentle introduction to the trail and helps with initial acclimatization. Overnight in a comfortable teahouse.",
    "overnight": "Teahouse in Tikhedhunga",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic drive to Nayapul", "Modi Khola River valley", "Suspension bridge crossings", "Traditional Nepali villages", "Tikhedhunga arrival"]
  },
  {
    "day": 3,
    "title": "Trek from Tikhedhunga to Ghorepani via Ulleri Steps",
    "altitude": "1,540m → 2,860m",
    "distance": "12km / 6-7 hrs trek",
    "description": "Today is challenging but incredibly rewarding as we tackle the famous Ulleri Steps - over 3,000 stone steps that climb steeply through beautiful rhododendron and oak forests. The steps are steep but well-maintained, and the gradual ascent allows you to enjoy the stunning forest scenery. As we climb higher, the first glimpses of the Annapurna and Dhaulagiri ranges begin to appear. We pass through Ulleri village, a traditional Magar settlement with stone houses and friendly locals. The forest section from Ulleri to Ghorepani is particularly beautiful, with rhododendron trees that burst into brilliant red and pink blooms during spring (March-April). Ghorepani (2,860m) is a lively village situated on a ridge, serving as the main gateway to Poon Hill. The village offers spectacular mountain views and a vibrant atmosphere with multiple teahouses, bakeries, and shops. Overnight in Ghorepani, preparing for tomorrow's pre-dawn hike to Poon Hill.",
    "overnight": "Teahouse in Ghorepani",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Ulleri Steps (3,000+ stone steps)", "Rhododendron forests", "Magar village and culture", "First views of Annapurna and Dhaulagiri", "Ghorepani arrival and preparation"]
  },
  {
    "day": 4,
    "title": "Poon Hill Sunrise & Trek to Tadapani",
    "altitude": "2,860m → 3,210m → 2,630m",
    "distance": "12km / 6-7 hrs trek",
    "description": "Wake up early (around 4:00 AM) for the pre-dawn hike to Poon Hill (3,210m) - the highlight of the entire trek! The 45-minute to 1-hour climb in the dark is well worth every step. As you reach the viewpoint, join dozens of trekkers watching the sky transform from deep blue to orange and gold. The sun rises behind the Annapurna range, painting the peaks of Dhaulagiri (8,167m - world's 7th highest), Annapurna I (8,091m), Annapurna South (7,219m), Machhapuchhre (6,993m - Fishtail), Hiunchuli (6,441m), and Tukuche Peak (6,920m) in stunning golden light. This 360-degree Himalayan panorama is one of the most photographed sunrise views in the world. After soaking in the magic of sunrise, descend back to Ghorepani for breakfast. Then continue the trek through beautiful rhododendron and pine forests to Tadapani (2,630m). Tadapani offers stunning close-up views of Machhapuchhre (Fishtail) and Annapurna South, making it a perfect overnight stop.",
    "overnight": "Teahouse in Tadapani",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Pre-dawn Poon Hill hike", "Spectacular 360-degree sunrise panorama", "Dhaulagiri, Annapurna, Machhapuchhre views", "World-famous mountain photography", "Tadapani close-up mountain views"]
  },
  {
    "day": 5,
    "title": "Trek to Ghandruk & Drive to Pokhara",
    "altitude": "2,630m → 1,940m → 820m",
    "distance": "10km trek / 2 hrs drive",
    "description": "Today is a delightful mix of trekking and cultural exploration. After breakfast, begin your morning descent through beautiful forests of rhododendron, oak, and magnolia. The trail gradually descends to Ghandruk (1,940m), one of the largest and most beautiful Gurung villages in Nepal. Ghandruk is famous for its traditional stone houses, terraced fields, narrow stone-paved streets, and warm Gurung hospitality. Upon arrival, explore the village and visit the Gurung Museum, which showcases traditional Gurung culture, clothing, tools, and photographs of the village's famous Gurkha soldiers. Enjoy spectacular views of Annapurna South, Hiunchuli, and Machhapuchhre from various points in the village. After lunch at a local teahouse, take a scenic drive back to Pokhara (1.5-2 hours) via Nayapul. Arrive in Pokhara by late afternoon and check into your hotel. The evening is free to celebrate your successful Poon Hill trek - enjoy a well-deserved dinner at one of Lakeside's many excellent restaurants, go for a boat ride on Phewa Lake, or simply relax and watch the sunset over the Annapurna range reflecting on the water.",
    "overnight": "Hotel in Pokhara",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Descent through rhododendron forests", "Ghandruk village exploration", "Gurung Museum visit", "Traditional stone houses and culture", "Celebration dinner in Pokhara"]
  },
  {
    "day": 6,
    "title": "Drive from Pokhara to Kathmandu",
    "altitude": "820m → 1,400m",
    "distance": "200km / 6-7 hrs drive",
    "description": "After a leisurely breakfast in Pokhara, begin your scenic drive back to Kathmandu along the Prithvi Highway. The journey follows the Trishuli River, offering beautiful views of river valleys, rolling hills, terraced farmlands, and distant mountain peaks. You'll pass through charming towns and witness daily Nepali rural life along the way. The drive is a wonderful opportunity to reflect on your Poon Hill adventure and the incredible sunrise you witnessed over the Himalayas. Arrive in Kathmandu by late afternoon. Check into your hotel, take a well-deserved hot shower, and enjoy the comforts of the city. The remainder of your day is free for souvenir shopping in Thamel, exploring UNESCO World Heritage sites you may have missed, or simply relaxing with a good meal. In the evening, enjoy a farewell dinner celebrating your successful Poon Hill trek achievement - watching the sunrise over Dhaulagiri, Annapurna, and Machhapuchhre from Poon Hill.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast, Dinner",
    "highlights": ["Scenic Pokhara to Kathmandu drive", "Trishuli River and countryside views", "Rural Nepali landscapes", "Thamel souvenir shopping", "Farewell celebration dinner"]
  }
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "2 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "2 nights hotel accommodation in Pokhara (3-star with breakfast)",
  "All meals during the trek (breakfast, lunch, dinner)",
  "Best available teahouse/lodge accommodation during trek",
  "Experienced English-speaking trekking guide (government licensed)",
  "Assistant guide for groups of 6 or more",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Annapurna Conservation Area Permit (ACAP)",
  "TIMS card (Trekkers' Information Management System)",
  "All ground transportation as per itinerary (Kathmandu-Pokhara-Nayapul & Ghandruk-Pokhara-Kathmandu)",
  "First aid medical kit including pulse oximeter",
  "Sleeping bag and down jacket (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Annapurna region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Early morning packed tea/coffee for Poon Hill hike",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude trekking up to 3,300m & emergency evacuation)",
  "Personal trekking gear and equipment",
  "Meals in Kathmandu and Pokhara (except welcome dinner and breakfasts)",
  "Bottled/mineral water during trek (purification tablets provided)",
  "Hot showers and battery charging at lodges ($2-3 per use)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, bar bills, souvenirs)",
  "Tips and gratuities for guides and porters (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, landslides, political unrest)",
];

const gallery = [
  {
    src: "/images/used/ghorepani-2.webp",
    alt: "Poon Hill Sunrise - Spectacular Himalayan sunrise over Annapurna and Dhaulagiri ranges from Poon Hill viewpoint in Nepal",
    caption: "Annapurna & Dhaulagiri Range",
  },
  {
    src: "/images/used/ghorepani-1.webp",
    alt: "Machhapuchhre (Fishtail Mountain) with stacked prayer stones - iconic Himalayan peak view on the Ghorepani Poon Hill trek in Nepal",
    caption: "Annapurna & Machhapuchrey Range with stones stacked",
  },
  {
    src: "/images/used/ghorepani-poon-hill-1.webp",
    alt: "Poon Hill viewpoint tower - the iconic observation point for sunrise views over the Annapurna and Dhaulagiri Himalayas in Nepal",
    caption: "Poon hill viewpoint tower",
  },
];

export default function GhorepaniPoonHillTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);

  const trekName = "Ghorepani Poon Hill Trek";
  const canonicalUrl = "https://www.himkalaadventure.com/ghorepani-poon-hill-trek";
  const pageTitle = "Ghorepani Poon Hill Trek - Himkala Adventure";
  const pageDescription = "Ghorepani Poon Hill Trek: Witness the spectacular sunrise over Annapurna and Dhaulagiri from Poon Hill (3,210m). The classic short trek in Nepal. Book now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/ghorepani-1.webp";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Ghorepani Poon Hill Trek - Himkala Adventure")}`;
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
                    Ghorepani <br />
                    <span className="text-[#cf6943]">Poon Hill Trek</span>
                  </h1>
                </div>
                <div className="max-w-full md:max-w-[280px]">
                  <p className="text-sm leading-6 text-[#66706d]">
                    The classic short trek in the Annapurna region - witness the most spectacular sunrise 
                    over the Himalayas from Poon Hill and experience authentic Gurung culture.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                      Easy
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      <Sunrise className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      Sunrise Views
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      6 Days
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
                src="/images/used/ghorepani-1.webp"
                alt="Ghorepani Poon Hill Trek - spectacular Himalayan sunrise views over Annapurna and Dhaulagiri ranges from Poon Hill in Nepal"
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
                  $500 / person
                </span>
              </div>
            </figure>
          </div>

          {/* Quick Stats - Free Walking Tour Style */}
          <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
              {[
                { label: "Duration", value: "6 Days / 5 Nights" },
                { label: "Group Size", value: "2-15 people" },
                { label: "Max Altitude", value: "3,210m" },
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
                  The <strong className="text-[#14383b]">Ghorepani Poon Hill Trek</strong> is the most popular 
                  short trek in Nepal, and for good reason. This classic 
                  <strong className="text-[#14383b]"> Ghorepani Poon Hill trekking</strong> route offers an 
                  unforgettable Himalayan experience in just 4 days of 
                  <strong className="text-[#14383b]"> trekking in Nepal</strong>, making it perfect for those 
                  with limited time or looking for a gentle introduction to the Himalayas.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  The highlight is the pre-dawn hike to <strong className="text-[#14383b]">Poon Hill (3,210m)</strong>, 
                  one of the best viewpoints in the Annapurna region. As the sun rises, you'll witness a 
                  spectacular panorama of snow-capped peaks including 
                  <strong className="text-[#14383b]"> Dhaulagiri (8,167m)</strong>, 
                  <strong className="text-[#14383b]"> Annapurna I (8,091m)</strong>, Annapurna South, 
                  Machhapuchhre (Fishtail), and dozens of other Himalayan giants glowing in golden light - 
                  a truly magical experience.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  Beyond the mountain views, the trek takes you through beautiful rhododendron forests 
                  (spectacular in spring), traditional Gurung and Magar villages, and terraced farmlands. 
                  You'll experience authentic Nepali village life, visit the charming village of Ghandruk 
                  with its Gurung Museum, and enjoy warm hospitality at cozy teahouses. This trek combines 
                  natural beauty, cultural experiences, and accessibility into one perfect package.
                </p>
              </article>

              <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
                <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
                <strong>Important:</strong> The Ulleri steps (3,000+ stone steps) are challenging - trekking 
                poles are highly recommended. Early morning for Poon Hill is cold - bring warm layers, hat, 
                gloves, and a headlamp.
              </div>
            </div>
          </section>

          {/* Highlights - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Trek Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Spectacular sunrise from Poon Hill (3,210m) with Annapurna & Dhaulagiri panoramas",
                  "Short and easy trek - perfect for beginners and those with limited time",
                  "Beautiful rhododendron forests - stunning blooms in spring",
                  "Traditional Gurung and Magar villages with authentic cultural experiences",
                  "Ghandruk village exploration and Gurung Museum visit",
                  "Views of Dhaulagiri (8,167m), Annapurna I (8,091m), and Machhapuchhre (Fishtail)",
                  "Warm teahouse hospitality and cozy mountain lodges",
                  "Ulleri stone steps - 3,000+ steps through beautiful scenery",
                  "Phewa Lake relaxation in Pokhara before and after the trek",
                  "Perfect introduction to Himalayan trekking",
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
                    Rhododendron forests burst into vibrant red, pink, and white blooms. Warm temperatures, 
                    clear skies, and excellent visibility. The most colorful time to trek.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
                </div>
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Snowflake className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Autumn (Sep - Nov)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    Crystal-clear skies, stable weather, and perfect trekking conditions. Lush green trails 
                    after the monsoon and spectacular mountain views. Peak season with vibrant teahouse atmosphere.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
                </div>
              </div>
              <p className="mt-3 text-[10px] text-[#66706d]">Note: Winter (Dec-Feb) is cold but possible with clear skies. Summer/Monsoon (June-Aug) offers lush green landscapes but clouds may obscure views.</p>
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
                A visual journey through the classic Ghorepani Poon Hill trek - from rhododendron forests to Himalayan sunrises.
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
                    q: "How difficult is the Ghorepani Poon Hill Trek?",
                    a: "This is the easiest trek in the Annapurna region, rated easy. You'll trek 4-6 hours daily on well-maintained stone steps and trails. The main challenge is the Ulleri steps (3,000+ steps) on day 2. No technical experience is required, and it's suitable for beginners, families, and older trekkers with basic fitness.",
                  },
                  {
                    q: "Is Poon Hill worth the early morning hike?",
                    a: "Absolutely! The sunrise from Poon Hill is one of the most spectacular mountain views in Nepal. Watching the peaks of Dhaulagiri and Annapurna glow golden as the sun rises is an unforgettable experience. The 45-minute pre-dawn hike is well worth the effort.",
                  },
                  {
                    q: "What is the accommodation like?",
                    a: "Teahouses along the route are comfortable and welcoming. Rooms are basic with twin beds and shared bathrooms. Ghorepani has many lodges with great mountain views. Facilities are clean and the hospitality is warm. Hot showers and charging are available for a small fee.",
                  },
                  {
                    q: "Can I see Annapurna I from Poon Hill?",
                    a: "Yes! Poon Hill offers a breathtaking 360-degree panorama including Dhaulagiri (8,167m), Annapurna I (8,091m), Annapurna South, Machhapuchhre (Fishtail), and many other peaks. It's one of the best viewpoints in Nepal for photographing the Himalayas.",
                  },
                  {
                    q: "How many days do I need for this trek?",
                    a: "The trek itself takes 4 days (3 nights) from Nayapul to Ghandruk. Including travel from Kathmandu, you should allow 7-8 days total. Some operators offer shorter 3-day options for experienced trekkers or those with very limited time.",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready for the Classic Himalayan Sunrise?</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Book your Ghorepani Poon Hill Trek today and experience the most spectacular sunrise over the Himalayas - a perfect introduction to trekking in Nepal.
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