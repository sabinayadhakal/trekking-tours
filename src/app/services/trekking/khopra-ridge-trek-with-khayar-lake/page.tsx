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
  Droplets,
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
    "title": "Drive to Ghandruk & Trek to Tadapani",
    "altitude": "820m → 1,940m → 2,630m",
    "distance": "2 hrs drive / 5-6 hrs trek",
    "description": "After breakfast in Pokhara, take a scenic 2-hour drive to Ghandruk (1,940m), one of the largest and most beautiful Gurung villages in Nepal. The drive offers spectacular views of the Annapurna range. Upon arrival in Ghandruk, explore this charming village with its traditional stone houses, narrow stone-paved streets, and warm Gurung hospitality. Visit the Gurung Museum, which showcases traditional Gurung culture, clothing, tools, and photographs of the village's famous Gurkha soldiers. Enjoy stunning views of Annapurna South (7,219m), Hiunchuli (6,441m), and Machhapuchhre (6,993m - Fishtail). After exploring Ghandruk, begin your trek through beautiful rhododendron forests. The trail climbs steadily through dense forests that burst into brilliant red and pink blooms during spring (March-April). Arrive at Tadapani (2,630m), a scenic ridge-top settlement offering spectacular close-up views of Machhapuchhre and Annapurna South. Overnight in a comfortable teahouse.",
    "overnight": "Teahouse in Tadapani",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic drive to Ghandruk", "Ghandruk village exploration", "Gurung Museum visit", "Rhododendron forests", "Tadapani mountain views"]
  },
  {
    "day": 3,
    "title": "Trek from Tadapani to Dobato",
    "altitude": "2,630m → 3,420m",
    "distance": "8-10km / 5-6 hrs trek",
    "description": "Today we leave the main Annapurna Base Camp trail and head north toward the less-crowded Khopra Ridge. The trail ascends through dense rhododendron and oak forests, which gradually thin as you gain altitude. The path offers beautiful alpine scenery with occasional glimpses of Annapurna South and Machhapuchhre through breaks in the forest. Dobato (3,420m) is a peaceful ridge-top settlement with basic teahouses, offering stunning sunrise and sunset views over the Annapurna and Dhaulagiri ranges. This area is known for its solitude away from the crowded Annapurna trails, providing a truly authentic trekking experience. The afternoon is free to rest and enjoy the spectacular mountain panorama. Overnight in Dobato's simple but comfortable teahouse.",
    "overnight": "Teahouse in Dobato",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Less-crowded Khopra Ridge trail", "Rhododendron and oak forests", "Alpine scenery", "Dobato ridge-top settlement", "Sunrise and sunset mountain views"]
  },
  {
    "day": 4,
    "title": "Trek from Dobato to Khopra Ridge",
    "altitude": "3,420m → 3,660m",
    "distance": "8km / 5-6 hrs trek",
    "description": "Today's trek takes us to the magnificent Khopra Ridge, one of the most spectacular viewpoints in the Annapurna region. The trail first descends through oak forests to the charming Chistibang pastures, a beautiful meadow area with grazing yaks and horses. From Chistibang, the trail begins a steady climb up to Khopra Ridge (3,660m). As you ascend, the trail opens up to breathtaking panoramic views of the entire Annapurna and Dhaulagiri ranges. Khopra Ridge offers one of the most spectacular mountain viewpoints in all of Nepal - Annapurna South (7,219m) towers directly above you to the north, while Dhaulagiri (8,167m - world's 7th highest) dominates the western skyline. The ridge is managed by a community-run teahouse, where your stay directly supports local families. Enjoy sunset over the Himalayas from this incredible location. Overnight at the community teahouse on Khopra Ridge.",
    "overnight": "Community Teahouse at Khopra Ridge",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Chistibang pastures", "Grazing yaks and horses", "Khopra Ridge arrival", "Panoramic Annapurna and Dhaulagiri views", "Community-run teahouse experience"]
  },
  {
    "day": 5,
    "title": "Day Hike to Khayar Lake & Return to Khopra Ridge",
    "altitude": "3,660m → 4,660m → 3,660m",
    "distance": "12-14km / 7-8 hrs round trip",
    "description": "This is the highlight day of the entire trek! Wake early and start the challenging day hike to sacred Khayar Lake (4,660m). The trail climbs steeply through rugged, rocky terrain with increasingly spectacular mountain views. As you gain altitude, the panorama of Annapurna South, Hiunchuli, Machhapuchhre, and Dhaulagiri becomes absolutely breathtaking. After several hours of climbing, you'll suddenly come upon Khayar Lake - a stunning turquoise alpine lake nestled in a glacial basin beneath the towering massif of Annapurna South. The lake is sacred to both Hindus and Buddhists, who believe that bathing in its holy waters fulfills wishes and brings good fortune. The reflection of Annapurna South in the crystal-clear turquoise water is a photographer's dream. Spend time at the lake, enjoy your packed lunch, and soak in the spiritual atmosphere. Afternoon descent back to Khopra Ridge for overnight. This challenging but rewarding day will be one of the most memorable of your life.",
    "overnight": "Community Teahouse at Khopra Ridge",
    "meals": "Breakfast, Packed Lunch, Dinner",
    "highlights": ["Khayar Lake day hike (4,660m)", "Sacred Hindu and Buddhist pilgrimage site", "Turquoise alpine lake", "Annapurna South mountain reflection", "Wish-fulfilling holy waters"]
  },
  {
    "day": 6,
    "title": "Trek from Khopra Ridge to Ghorepani via Swanta Village",
    "altitude": "3,660m → 2,214m → 2,860m",
    "distance": "14-16km / 6-7 hrs trek",
    "description": "Today we descend from Khopra Ridge and make our way toward Ghorepani via the traditional village of Swanta. The trail descends through beautiful forests of rhododendron and oak, passing through Chistibang pastures before reaching Swanta Village (2,214m). Swanta is a traditional Gurung and Magar village where you can experience authentic local culture and hospitality. Take time to explore the village, visit the local monastery, and interact with friendly locals. From Swanta, the trail continues through terraced farmlands and forests, gradually ascending toward Ghorepani (2,860m). Ghorepani is a lively village situated on a ridge, serving as the main gateway to Poon Hill. The village offers spectacular mountain views and a vibrant atmosphere with multiple teahouses, bakeries, and shops. Overnight in Ghorepani, preparing for tomorrow's pre-dawn hike to Poon Hill.",
    "overnight": "Teahouse in Ghorepani",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Descent from Khopra Ridge", "Chistibang pastures", "Swanta village cultural experience", "Traditional Gurung and Magar village", "Ghorepani arrival and preparation"]
  },
  {
    "day": 7,
    "title": "Poon Hill Sunrise & Trek to Hille & Jeep Drive to Pokhara",
    "altitude": "2,860m → 3,210m → 1,490m → 820m",
    "distance": "6km trek / 2.5 hrs jeep drive",
    "description": "Wake up early (around 4:00 AM) for the pre-dawn hike to Poon Hill (3,210m) - one of the most famous viewpoints in the entire Himalayas! The 45-minute to 1-hour climb in the dark is well worth every step. As you reach the viewpoint, watch the sky transform from deep blue to orange and gold. The sun rises behind the Annapurna range, painting the peaks of Dhaulagiri (8,167m), Annapurna I (8,091m), Annapurna South (7,219m), Machhapuchhre (6,993m - Fishtail), Hiunchuli (6,441m), and Tukuche Peak (6,920m) in stunning golden light. This 360-degree Himalayan sunrise panorama is one of the most photographed views in the world. After soaking in the magic, descend back to Ghorepani for breakfast. Then continue trekking down through beautiful rhododendron forests to Hille (1,490m). The descent is gentle and offers changing perspectives of the mountains. At Hille, board a private jeep for an exciting 2.5-hour drive back to Pokhara. The jeep ride offers different views of the landscapes you've traversed. Arrive in Pokhara by late afternoon and check into your hotel. Celebrate your incredible Khopra Ridge and Khayar Lake achievement - you've visited the sacred turquoise lake at 4,660m and witnessed sunrise from Poon Hill! Enjoy a well-deserved dinner at one of Lakeside's excellent restaurants.",
    "overnight": "Hotel in Pokhara",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Poon Hill sunrise (3,210m)", "World-famous 360-degree Himalayan panorama", "Dhaulagiri, Annapurna, and Machhapuchhre views", "Descent to Hille", "Jeep drive to Pokhara and celebration"]
  },
  {
    "day": 8,
    "title": "Drive from Pokhara to Kathmandu",
    "altitude": "820m → 1,400m",
    "distance": "200km / 6-7 hrs drive",
    "description": "After a leisurely breakfast in Pokhara, begin your scenic drive back to Kathmandu along the Prithvi Highway. The journey follows the Trishuli River, offering beautiful views of river valleys, rolling hills, terraced farmlands, and distant mountain peaks. You'll pass through charming towns and witness daily Nepali rural life along the way. The drive is a wonderful opportunity to reflect on your incredible Khopra Ridge and Khayar Lake adventure - visiting the sacred turquoise lake at 4,660m, witnessing sunrise from Khopra Ridge and Poon Hill, and experiencing authentic village life in Swanta. Arrive in Kathmandu by late afternoon. Check into your hotel, take a well-deserved hot shower, and enjoy the comforts of the city. The remainder of your day is free for souvenir shopping in Thamel, exploring UNESCO World Heritage sites you may have missed, or simply relaxing with a good meal. In the evening, enjoy a farewell dinner celebrating your successful Khopra Ridge trek achievement.",
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
  "All ground transportation as per itinerary (Kathmandu-Pokhara-Ghandruk & Tatopani-Pokhara-Kathmandu)",
  "First aid medical kit including pulse oximeter",
  "Sleeping bag and down jacket for high altitude (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Annapurna region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Packed lunch for Khayar Lake day hike",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude trekking up to 4,700m & emergency evacuation)",
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
    src: "/images/used/khopra-2.webp",
    alt: "Sacred Khayar Lake at 4,660m - turquoise alpine lake beneath Annapurna South in Nepal's Annapurna region",
    caption: "Sacred Khayar Lake (4,660m)",
  },
  {
    src: "/images/used/khopra-trek-1.webp",
    alt: "Khopra Ridge panoramic view - spectacular Annapurna and Dhaulagiri range views from Khopra Ridge at 3,660m in Nepal",
    caption: "Khopra Ridge - Annapurna & Dhaulagiri Views",
  },
  {
    src: "/images/used/ghandruk-1.webp",
    alt: "Ghandruk Village - traditional Gurung village with stone houses and mountain views in Nepal's Annapurna region",
    caption: "Traditional Gurung Village - Ghandruk",
  },
];

export default function KhopraRidgeKhayarLakeTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);

  const trekName = "Khopra Ridge with Khayar Lake Trek";
  const canonicalUrl = "https://www.himkalaadventure.com/khopra-ridge-khayar-lake-trek";
  const pageTitle = "Khopra Ridge with Khayar Lake Trek - Himkala Adventure";
  const pageDescription = "Khopra Ridge with Khayar Lake Trek: Trek to sacred Khayar Lake (4,660m) and Khopra Ridge with panoramic Annapurna and Dhaulagiri views. Off-the-beaten-path adventure. Book now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/khopra-trek-1.webp";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Khopra Ridge with Khayar Lake Trek - Himkala Adventure")}`;
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
                    Khopra Ridge <br />
                    <span className="text-[#cf6943]">with Khayar Lake Trek</span>
                  </h1>
                </div>
                <div className="max-w-full md:max-w-[280px]">
                  <p className="text-sm leading-6 text-[#66706d]">
                    Discover a hidden gem in the Annapurna region - trek to the spectacular Khopra Ridge 
                    and sacred Khayar Lake, with panoramic views of Dhaulagiri and Annapurna ranges.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                      Moderate
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      <Droplets className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      Khayar Lake
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      4,660m
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
                src="/images/used/khopra-trek-1.webp"
                alt="Khopra Ridge with Khayar Lake Trek - panoramic views of Annapurna and Dhaulagiri ranges from Khopra Ridge in Nepal's Annapurna region"
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
                  $700 / person
                </span>
              </div>
            </figure>
          </div>

          {/* Quick Stats - Free Walking Tour Style */}
          <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
              {[
                { label: "Duration", value: "8 Days / 7 Nights" },
                { label: "Group Size", value: "2-10 people" },
                { label: "Max Altitude", value: "4,660m" },
                { label: "Difficulty", value: "Moderate" },
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
                  The <strong className="text-[#14383b]">Khopra Ridge with Khayar Lake Trek</strong> is a hidden 
                  gem in the Annapurna region, offering a peaceful alternative to the more crowded 
                  <strong className="text-[#14383b]"> trekking in Nepal</strong> routes like Annapurna Base Camp. 
                  This off-the-beaten-path adventure takes you through dense rhododendron forests, traditional 
                  Gurung villages, and alpine meadows to the spectacular 
                  <strong className="text-[#14383b]"> Khopra Ridge (3,660m)</strong> - one of the best vantage 
                  points in the Himalayas with panoramic views of Dhaulagiri, Annapurna, Nilgiri, and 
                  Machhapuchhre (Fishtail).
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  The trek's highlight is the challenging day hike to <strong className="text-[#14383b]">sacred 
                  Khayar Lake (4,660m)</strong>, a stunning turquoise alpine lake nestled beneath Annapurna South. 
                  The lake holds deep religious significance for both Hindus and Buddhists, who believe that 
                  bathing in its waters fulfills wishes. The trail to the lake offers breathtaking mountain 
                  scenery and a true sense of wilderness adventure.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  What makes this trek truly unique is the <strong className="text-[#14383b]">community-based 
                  tourism model</strong> - trekkers stay in lodges managed by local communities rather than 
                  private owners, with profits contributing to local schools and village projects. Combined 
                  with rich Gurung and Magar culture, and far fewer trekkers than mainstream routes, this 
                  trek offers an authentic and serene Himalayan experience.
                </p>
              </article>

              <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
                <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
                <strong>Important:</strong> Travel insurance is mandatory and must cover high altitude trekking 
                up to 4,700m and emergency evacuation. The Khayar Lake day hike is challenging with rugged terrain.
              </div>
            </div>
          </section>

          {/* Highlights - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Trek Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Sacred Khayar Lake (4,660m) - turquoise alpine lake with spiritual significance",
                  "Khopra Ridge (3,660m) - spectacular panoramic views of Dhaulagiri & Annapurna",
                  "Community-run teahouses supporting local schools and villages",
                  "Peaceful, less-crowded trail - escape the busy ABC route",
                  "Traditional Gurung and Magar villages with rich cultural heritage",
                  "Dense rhododendron forests blooming in spring",
                  "Natural hot springs at Tatopani for post-trek relaxation",
                  "Views of Dhaulagiri (8,167m), Annapurna I (8,091m), Machhapuchhre, Nilgiri",
                  "Authentic cultural experiences with local communities",
                  "Diverse landscapes - forests, meadows, ridgelines, and alpine lakes",
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
                    Rhododendrons bloom in vibrant colors, the forests come alive, and temperatures are warm 
                    with excellent visibility. Khayar Lake may still have ice formations.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
                </div>
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Snowflake className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Autumn (Sep - Nov)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    The most popular season with crystal-clear skies, stable weather, and the best mountain views. 
                    Khayar Lake is at its most beautiful turquoise color.
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
                A visual journey through the hidden gem of the Annapurna region - from sacred lakes to panoramic ridges.
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
                    q: "How difficult is the Khopra Ridge with Khayar Lake Trek?",
                    a: "The trek is rated as moderate. You'll trek 5-7 hours daily on forest trails with some steep ascents. The Khayar Lake day hike is the most challenging section due to altitude and rugged terrain. No technical experience is required, but good fitness is essential.",
                  },
                  {
                    q: "What makes this trek different from Annapurna Base Camp?",
                    a: "This is a much quieter, off-the-beaten-path route with far fewer trekkers. It features community-run teahouses, the sacred Khayar Lake, and spectacular views of both Annapurna and Dhaulagiri ranges from Khopra Ridge. It offers a more authentic and serene experience.",
                  },
                  {
                    q: "What is the accommodation like on this trek?",
                    a: "The trek features community-run teahouses managed by local villages. Rooms are basic with twin beds and shared bathrooms. Facilities become simpler at higher altitudes, but the warm hospitality and authentic experience more than compensate.",
                  },
                  {
                    q: "Is Khayar Lake worth the difficult day hike?",
                    a: "Absolutely! Khayar Lake is a stunning turquoise alpine lake with deep spiritual significance. The views of Annapurna South reflected in the lake, surrounded by snow-capped peaks, create an unforgettable experience. Many trekkers consider it the highlight of their Nepal trip.",
                  },
                  {
                    q: "What permits do I need for this trek?",
                    a: "You need the Annapurna Conservation Area Permit (ACAP) and TIMS card. Both are included in our package and arranged by your guide.",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready to Discover the Hidden Gem of Annapurna?</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Book your Khopra Ridge with Khayar Lake Trek today and experience the sacred turquoise lake, panoramic mountain views, and authentic community hospitality.
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