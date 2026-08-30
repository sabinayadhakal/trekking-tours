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
  Flower,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    "day": 1,
    "title": "Drive from Kathmandu to Pokhara",
    "altitude": "1,400m → 820m",
    "distance": "200km / 6-7 hrs drive",
    "description": "Early morning departure from your hotel in Kathmandu for the scenic drive to Pokhara, the gateway to the Annapurna region and starting point for the Mardi Himal Trek. The journey follows the Prithvi Highway along the winding Trishuli River through beautiful rural landscapes, terraced farmlands, and traditional villages. You'll pass through charming towns and witness daily Nepali rural life along the way, with occasional views of distant Himalayan peaks including Manaslu and Ganesh Himal on clear days. Arrive in Pokhara (820m), Nepal's second-largest city and the beautiful lake city. Check into your lakeside hotel and enjoy free time to explore Phewa Lake - take a boat ride, visit the Tal Barahi Temple in the middle of the lake, or simply relax with stunning views of the Annapurna range and Machhapuchhre (Fishtail) reflecting on the water. In the evening, explore Lakeside's vibrant restaurants, bars, and shops, and prepare your gear for the trek ahead.",
    "overnight": "Hotel in Pokhara",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic Prithvi Highway drive", "Trishuli River views", "Rural Nepali countryside", "Phewa Lake and mountain reflections", "Pokhara preparation for Mardi Himal"]
  },
  {
    "day": 2,
    "title": "Drive from Pokhara to Phedi & Trek to Pitam Deurali",
    "altitude": "820m → 1,130m → 2,100m",
    "distance": "30 min drive / 4-5 hrs trek",
    "description": "After breakfast in Pokhara, take a short 30-minute drive to Phedi (1,130m), the traditional trailhead for the Mardi Himal Trek. From Phedi, your trek begins with a steady ascent through beautiful rhododendron and oak forests. The trail is well-marked and passes through several small villages with traditional stone houses and terraced farmlands. As you climb, you'll be rewarded with your first glimpses of Machhapuchhre (Fishtail Mountain - 6,993m) and Annapurna South (7,219m). The trail continues through dense forest, crossing small streams and offering occasional views of the valley below. Arrive at Pitam Deurali (2,100m), a small settlement perched on a ridge with stunning mountain views. The teahouses here offer basic but comfortable accommodation and the sunset views over the Annapurna range are spectacular. Overnight at Pitam Deurali.",
    "overnight": "Teahouse in Pitam Deurali",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Short drive to Phedi", "Rhododendron and oak forests", "First views of Machhapuchhre", "Traditional villages and farmlands", "Pitam Deurali sunset panorama"]
  },
  {
    "day": 3,
    "title": "Trek from Pitam Deurali to Low Camp",
    "altitude": "2,100m → 2,985m",
    "distance": "12km / 6-7 hrs trek",
    "description": "Today you trek deeper into the Mardi Himal region, climbing steadily through dense rhododendron and oak forests. The trail becomes increasingly beautiful as you gain altitude, with moss-covered trees, colorful rhododendrons (blooming spectacularly in March-April), and occasional views of the mountains through breaks in the forest canopy. You'll pass through Forest Camp (2,520m), a small clearing with a few basic lodges situated in a beautiful forest setting - a great spot for a tea or lunch break. From Forest Camp, the trail continues climbing through the forest, with the trees becoming shorter as you approach the tree line. The sound of birds and the rustling of leaves create a peaceful atmosphere. Arrive at Low Camp (2,985m), also known as Rest Camp, a small collection of teahouses nestled in a clearing with stunning views of the surrounding peaks. The afternoon light on the mountains is magical from this location. Overnight at Low Camp.",
    "overnight": "Teahouse at Low Camp",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Dense rhododendron forest", "Forest Camp (2,520m)", "Moss-covered trees", "Bird watching opportunities", "Low Camp mountain views"]
  },
  {
    "day": 4,
    "title": "Trek from Low Camp to High Camp",
    "altitude": "2,985m → 3,550m",
    "distance": "6km / 4-5 hrs trek",
    "description": "A shorter but steeper day as you climb above the tree line and enter the alpine zone of the Mardi Himal Trek. The trail continues through thinning forest until you emerge above the tree line, where the landscape transforms dramatically into open, alpine terrain with stunning panoramic mountain views. Machhapuchhre (Fishtail - 6,993m) dominates the skyline directly ahead, with Annapurna South (7,219m) and Hiunchuli (6,441m) visible to the west. You'll pass through Mid Camp, a small collection of basic tea shops at approximately 3,300m - a good spot for a rest and hot drink. From Mid Camp, the trail continues up a steep ridge to High Camp (3,550m), perched dramatically on a ridge with breathtaking 360-degree views of the Annapurna range, Machhapuchhre, and the surrounding valleys. The afternoon is free to rest, acclimatize, and enjoy the stunning mountain panorama. The sunset from High Camp is unforgettable, as the peaks glow golden and pink in the fading light. Overnight at High Camp.",
    "overnight": "Teahouse at High Camp",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Above tree line alpine zone", "Panoramic mountain views", "Mid Camp tea stop (3,300m)", "Machhapuchhre close-up", "High Camp sunset panorama"]
  },
  {
    "day": 5,
    "title": "Hike to Mardi Himal Base Camp & Return to High Camp",
    "altitude": "3,550m → 4,500m → 3,550m",
    "distance": "12km / 8-9 hrs round trip",
    "description": "The biggest and most rewarding day of the entire Mardi Himal Trek! Wake very early (around 4:00 AM) to begin the pre-dawn hike to Mardi Himal Base Camp. The trail climbs steeply along a narrow, exposed ridge with incredible views of Machhapuchhre (Fishtail), Annapurna South, Hiunchuli, and the entire Annapurna range. As you ascend, the peaks seem to grow larger with every step. You'll first reach the Viewpoint (4,200m), where you'll witness a spectacular sunrise - the peaks glow golden and pink as the sun rises behind the Himalayas - an unforgettable experience and a photographer's dream. Continue climbing to Mardi Himal Base Camp (4,500m) for even closer views of Mardi Himal (5,587m), the sheer east face of Machhapuchhre, and the massive Annapurna massif. The feeling of standing beneath these giants is indescribable. After celebrating your achievement, taking photos, and soaking in the incredible scenery, descend back to High Camp for a well-deserved lunch and rest. Spend the afternoon relaxing and enjoying the mountain views from High Camp. Overnight at High Camp.",
    "overnight": "Teahouse at High Camp",
    "meals": "Breakfast, Packed Lunch, Dinner",
    "highlights": ["Pre-dawn sunrise hike", "Viewpoint (4,200m) sunrise panorama", "Mardi Himal Base Camp (4,500m)", "Close-up Machhapuchhre east face", "Annapurna and Hiunchuli views"]
  },
  {
    "day": 6,
    "title": "Trek from High Camp to Siding Village & Jeep to Pokhara",
    "altitude": "3,550m → 1,350m → 820m",
    "distance": "7-8km trek / 4-5 hrs trek + 2.5 hrs jeep",
    "description": "Your final day of trekking on the Mardi Himal Trek. From High Camp, you descend via an alternative route through beautiful forests and traditional villages. The trail descends steeply at first, then gradually through dense rhododendron and oak forests. As you lose altitude, the vegetation becomes lush and the air warmer. You'll pass through small settlements and terraced farmlands, with beautiful views back toward the mountains you've just conquered. Arrive at Siding Village (1,350m), a charming traditional Gurung village with stone houses, friendly locals, and stunning views of the surrounding hills. Take some time to explore the village, visit the local monastery, and experience the warm Gurung hospitality. From Siding, board a private jeep for the adventurous 2.5-hour drive back to Pokhara, winding through scenic mountain roads with beautiful valley views. Arrive in Pokhara by late afternoon. Check into your hotel at Lakeside, take a well-deserved hot shower, and relax. In the evening, enjoy a celebration dinner at a lakeside restaurant, celebrating your incredible achievement of reaching Mardi Himal Base Camp (4,500m) and standing beneath the majestic Machhapuchhre. Overnight in Pokhara.",
    "overnight": "Hotel in Pokhara",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Final descent from High Camp", "Rhododendron and oak forests", "Siding Gurung village visit", "Scenic jeep ride to Pokhara", "Mardi Himal achievement celebration dinner"]
  },
  {
    "day": 7,
    "title": "Drive from Pokhara to Kathmandu",
    "altitude": "820m → 1,400m",
    "distance": "200km / 6-7 hrs drive",
    "description": "After a leisurely breakfast in Pokhara, begin your scenic drive back to Kathmandu along the Prithvi Highway. The journey follows the Trishuli River, offering beautiful views of river valleys, rolling hills, terraced farmlands, and distant mountain peaks. You'll pass through charming towns and witness daily Nepali rural life along the way. The drive is a wonderful opportunity to reflect on your Mardi Himal adventure - the pre-dawn hike to Base Camp, the spectacular sunrise over Machhapuchhre, the stunning views from High Camp, and the warm hospitality of the teahouse owners. Arrive in Kathmandu by late afternoon. Check into your hotel in Thamel, take a well-deserved hot shower, and enjoy the comforts of the city. The remainder of your day is free for souvenir shopping in Thamel, exploring UNESCO World Heritage sites you may have missed, visiting a spa for a much-needed massage, or simply relaxing with a good meal. In the evening, enjoy a farewell dinner celebrating your successful Mardi Himal Base Camp trek achievement - standing at 4,500m beneath the majestic Fishtail Mountain. Overnight in Kathmandu.",
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
  "Assistant guide for groups of 5 or more",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Annapurna Conservation Area Permit (ACAP)",
  "TIMS card (Trekkers' Information Management System)",
  "All ground transportation as per itinerary (Kathmandu-Pokhara-Kande & Siding-Pokhara-Kathmandu)",
  "First aid medical kit including pulse oximeter",
  "Sleeping bag and down jacket (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Annapurna region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Packed lunch for Mardi Himal Base Camp day",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude trekking up to 4,500m & emergency evacuation)",
  "Personal trekking gear and equipment",
  "Meals in Kathmandu and Pokhara (except welcome dinner and breakfasts)",
  "Bottled/mineral water during trek (purification tablets provided)",
  "Hot showers and battery charging at lodges ($2-4 per use)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, bar bills, souvenirs)",
  "Tips and gratuities for guides and porters (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, landslides, political unrest)",
];

const gallery = [
  {
    src: "/images/used/mardi-himal-1.webp",
    alt: "Trail to Mardi Himal Base Camp at 4,500m - spectacular mountain views of Machhapuchhre and Annapurna on the Mardi Himal trek in Nepal",
    caption: "Way to Mardi Himal Base Camp (4,500m)",
  },
  {
    src: "/images/used/mardi-1.webp",
    alt: "High Camp Mardi - panoramic ridge-top teahouse with stunning views of Machhapuchhre (Fishtail) on the Mardi Himal trek in Nepal",
    caption: "High Camp Mardi",
  },
  {
    src: "/images/used/mardi-3.webp",
    alt: "Ridge Trail to High Camp - dramatic mountain ridge with Annapurna and Machhapuchhre views on the Mardi Himal trek in Nepal",
    caption: "Ridge Trail to High Camp",
  },
  {
    src: "/images/used/mardi-2.webp",
    alt: "Forest Camp - beautiful rhododendron and oak forest section of the Mardi Himal trek in Nepal's Annapurna region",
    caption: "Forest Camp",
  },
];

export default function MardiHimalTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);

  const trekName = "Mardi Himal Base Camp Trek";
  const canonicalUrl = "https://www.himkalaadventure.com/mardi-himal-base-camp-trek";
  const pageTitle = "Mardi Himal Base Camp Trek - Himkala Adventure";
  const pageDescription = "Mardi Himal Base Camp Trek: Trek to 4,500m beneath Machhapuchhre (Fishtail) through rhododendron forests. A hidden gem in Nepal's Annapurna region. Book now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/mardi-1.webp";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Mardi Himal Base Camp Trek - Himkala Adventure")}`;
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
                    Mardi Himal <br />
                    <span className="text-[#cf6943]">Base Camp Trek</span>
                  </h1>
                </div>
                <div className="max-w-full md:max-w-[280px]">
                  <p className="text-sm leading-6 text-[#66706d]">
                    A hidden gem in the Annapurna region - trek through enchanting rhododendron forests 
                    to a spectacular ridge with breathtaking views of Machhapuchhre (Fishtail).
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                      Easy-Moderate
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      <Eye className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      Fishtail Views
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      4,500m
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
                src="/images/used/mardi-1.webp"
                alt="Mardi Himal Base Camp Trek - panoramic views of Machhapuchhre (Fishtail) and the Annapurna range from High Camp in Nepal"
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
                  $600 / person
                </span>
              </div>
            </figure>
          </div>

          {/* Quick Stats - Free Walking Tour Style */}
          <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
              {[
                { label: "Duration", value: "7 Days / 6 Nights" },
                { label: "Group Size", value: "2-12 people" },
                { label: "Max Altitude", value: "4,500m" },
                { label: "Difficulty", value: "Easy-Moderate" },
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
                  The <strong className="text-[#14383b]">Mardi Himal Base Camp Trek</strong> is one of the 
                  Annapurna region's best-kept secrets - a hidden gem that offers spectacular mountain views, 
                  enchanting forests, and a genuine sense of wilderness without the crowds of the more famous 
                  treks. Opened to trekkers in 2012, this relatively new 
                  <strong className="text-[#14383b]"> Mardi Himal Base Camp trekking</strong> route takes you 
                  to the base of <strong className="text-[#14383b]">Mardi Himal (5,587m)</strong>, a beautiful 
                  peak nestled beside the iconic Machhapuchhre (Fishtail).
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  The trek begins with a scenic drive to Pokhara, then to the trailhead at Kande. The trail 
                  winds through enchanting rhododendron and oak forests, past traditional villages and 
                  terraced farmlands, before emerging above the tree line onto a spectacular ridge. The 
                  views from the ridge are simply breathtaking - <strong className="text-[#14383b]">Machhapuchhre</strong> 
                  dominates the skyline, while Annapurna South, Hiunchuli, and the entire Annapurna range 
                  stretch out before you.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  The highlight is the early morning hike to <strong className="text-[#14383b]">Mardi Himal 
                  Base Camp (4,500m)</strong>, where you stand at the foot of the mountain with Machhapuchhre 
                  towering beside you. This trek is perfect for those with limited time who still want an 
                  authentic Himalayan experience - it's shorter and less demanding than treks like Annapurna 
                  Base Camp, but no less rewarding in terms of scenery and mountain intimacy.
                </p>
              </article>

              <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
                <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
                <strong>Important:</strong> Travel insurance is mandatory and must cover high altitude trekking 
                up to 4,500m. The trail to Base Camp can be steep and exposed - trekking poles are highly 
                recommended. Your guide will advise on weather conditions and safety.
              </div>
            </div>
          </section>

          {/* Highlights - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Trek Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Mardi Himal Base Camp (4,500m) with close-up mountain views",
                  "Spectacular sunrise from Mardi Viewpoint (4,200m)",
                  "Unobstructed views of Machhapuchhre (Fishtail) throughout the trek",
                  "Enchanting rhododendron and oak forests - stunning in spring",
                  "Panoramic Annapurna & Dhaulagiri range views from the ridge",
                  "Less crowded trail - a peaceful alternative to ABC",
                  "Traditional Gurung and Magar villages with warm hospitality",
                  "Shorter duration - perfect for those with limited time",
                  "Dramatic ridge walk above the tree line",
                  "Scenic drives through rural Nepal and Pokhara's lakeside",
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
                    Rhododendron forests burst into vibrant red, pink, and white blooms. Warm temperatures during the day, clear skies, and excellent visibility. The most colorful time to trek.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
                </div>
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Snowflake className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Autumn (Sep - Nov)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    Crystal-clear skies, stable weather, and perfect trekking conditions. Lush green trails after the monsoon and spectacular mountain views. Festive atmosphere with Dashain and Tihar celebrations.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
                </div>
              </div>
              <p className="mt-3 text-[10px] text-[#66706d]">Note: Winter (Dec-Feb) can be cold with possible snow on the ridge. Monsoon (Jun-Aug) brings leeches and slippery trails - not recommended.</p>
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
                A visual journey through the hidden gem of the Annapurna region - from enchanting forests to the majestic Mardi Himal Base Camp.
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
                    q: "How difficult is the Mardi Himal Trek?",
                    a: "The Mardi Himal Trek is rated as easy to moderate. You'll trek 4-7 hours daily on well-defined trails with some steep sections. The highest point is 4,500m, so altitude is manageable. It's perfect for beginners with good fitness and those with limited time.",
                  },
                  {
                    q: "Is Mardi Himal less crowded than other Annapurna treks?",
                    a: "Yes! Mardi Himal is much less crowded than Annapurna Base Camp or Ghorepani Poon Hill. It was opened to trekkers in 2012 and remains a hidden gem, offering a more peaceful and authentic experience.",
                  },
                  {
                    q: "What is the accommodation like on the trek?",
                    a: "Teahouses along the route are basic but comfortable. Low Camp and High Camp have simple lodges with shared bathrooms and communal dining areas. Facilities become more basic at higher altitudes, but the hospitality is warm.",
                  },
                  {
                    q: "Can I see Machhapuchhre (Fishtail) from the trek?",
                    a: "Absolutely! Machhapuchhre dominates the views throughout the trek, especially from High Camp and the ridge. The close-up views of Fishtail Mountain are among the best in the Annapurna region.",
                  },
                  {
                    q: "How many days do I need for the Mardi Himal Trek?",
                    a: "The trek typically takes 5 days (4 nights) from Kande to Siding. Including travel from Kathmandu, you should allow 8-9 days total. Some operators offer shorter 4-day options for experienced trekkers.",
                  },
                  {
                    q: "When is the best time to see rhododendrons on the trek?",
                    a: "The rhododendron forests are at their most spectacular during spring (March to May) when the forests burst into vibrant red, pink, and white blooms. This is one of the most beautiful times to do the Mardi Himal Trek.",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready to Discover Mardi Himal?</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Book your Mardi Himal Base Camp Trek today and experience the hidden gem of the Annapurna region - 
                enchanting forests, spectacular mountain views, and the majestic Machhapuchhre (Fishtail) at 4,500 meters.
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