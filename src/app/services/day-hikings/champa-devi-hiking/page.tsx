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
  Landmark,
  Compass,
  Droplets,
  Award,
  TreePine,
  Footprints,
  MountainSnow,
  Eye,
  Sunset,
  Cloud,
  Wind,
  Coffee,
  Leaf,
  Flower2,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    day: 1,
    title: "Champa Devi Hiking Adventure",
    altitude: "1,350m → 2,250m → 1,350m",
    distance: "6-7 hours (4-5 hours hiking)",
    description: "Your day hiking adventure begins early at 7:00 AM when your private guide and driver will pick you up from your hotel in Kathmandu. You'll drive approximately 45 minutes to the trailhead at Pharping, a historic town on the southern edge of the Kathmandu Valley. After a brief introduction and preparation, you'll begin your hike through terraced farmlands and lush forests. The trail gradually ascends through beautiful oak and rhododendron forests, offering glimpses of traditional village life along the way. After approximately 2-3 hours of hiking, you'll reach the summit of Champa Devi (2,250m), the highest hill in the southern Kathmandu Valley. Here you'll find a small temple dedicated to the goddess Champa Devi and breathtaking panoramic views of the entire Kathmandu Valley, including the Himalayan range on clear days. Enjoy a well-deserved picnic lunch with mountain views while your guide shares stories about the area's history and significance. After resting and photography, you'll begin your descent along a different route, offering new perspectives of the valley and surrounding hills. The descent takes approximately 2 hours. You'll arrive back at the trailhead by mid-afternoon and drive back to Kathmandu, arriving at your hotel by approximately 4:00 PM.",
    overnight: "Not applicable - day hike",
    meals: "Breakfast, Picnic Lunch",
    highlights: ["Panoramic views of Kathmandu Valley", "Himalayan views on clear days", "Traditional villages and terraced farms", "Oak and rhododendron forests", "Champa Devi temple at summit"],
  },
];

const includes = [
  "Private vehicle with driver for the full day",
  "Experienced English-speaking hiking guide",
  "Picnic lunch with mountain views",
  "Bottled water (2 liters per person)",
  "All necessary permits",
  "First aid kit",
  "All government taxes and service charges",
  "Hotel pickup and drop-off (within Kathmandu valley)",
];

const excludes = [
  "Meals not specified (dinner)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, etc.)",
  "Tips and gratuities for guide and driver (recommended)",
  "Travel insurance",
  "Personal hiking equipment (sturdy shoes, daypack, etc.)",
  "Optional activities not mentioned in itinerary",
  "International phone calls and internet charges",
];

const gallery = [
  {
    src: "/images/used/champadevi-1.webp",
    alt: "Champa Devi Summit",
    caption: "Panoramic view of Kathmandu Valley from Champa Devi summit",
  },
  {
    src: "/images/used/champa-1.webp",
    alt: "Hiking Trail",
    caption: "Beautiful trail through oak and rhododendron forests",
  },
  {
    src: "/images/used/champa-2.webp",
    alt: "Map Board in the hike",
    caption: "Board for the ChampaDevi hiking trail",
  },
  {
    src: "/images/used/champa-3.webp",
    alt: "Forest",
    caption: "Traditional forest way along the hiking route",
  },
  {
    src: "/images/used/champa-4.webp",
    alt: "Path towards the summit of ChampaDevi",
    caption: "Path towards the summit of ChampaDevi",
  },
];

export default function ChampaDeviHikingPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);

  const trekName = "Champa Devi Hiking Adventure";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Champa Devi Hiking - Himkala Adventure")}`;
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  };

  const toggleDay = (day: number) => {
    setExpandedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
      <main>
        {/* Header - Free Walking Tour Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="mx-auto max-w-[880px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                  <span className="h-px w-6 sm:w-8 bg-[#cf6943]" />
                  <span>Day Hiking</span>
                </div>
                <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Champa Devi <br />
                  <span className="text-[#cf6943]">Day Hiking Adventure</span>
                </h1>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">
                  Escape the city and summit the highest peak in the southern Kathmandu Valley—enjoy panoramic views, 
                  lush forests, traditional villages, and a peaceful picnic with Himalayan vistas.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                    Moderate
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    <Eye className="w-3 h-3 inline mr-1" aria-hidden="true" />
                    Valley Panorama
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    2,250m
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
              src="/images/used/champadevi-1.webp"
              alt="Champa Devi hiking trail with panoramic views of Kathmandu Valley and Himalayan mountains in Nepal"
              fill
              className="object-cover opacity-90"
              priority
              quality={85}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
              <span className="bg-[#e47a4f] text-[#fff8ee] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide rounded">
                Available Daily
              </span>
            </div>
            <div className="absolute top-4 right-4 flex flex-wrap gap-2">
              <span className="bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-wide rounded">
                $50 / person
              </span>
            </div>
          </figure>
        </div>

        {/* Quick Stats - Free Walking Tour Style */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
            {[
              { label: "Duration", value: "6-7 Hours" },
              { label: "Group Size", value: "1-8 people" },
              { label: "Max Altitude", value: "2,250m" },
              { label: "Hiking Time", value: "4-5 Hours" },
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
                The <strong className="text-[#14383b]">Champa Devi Hiking Adventure</strong> is a perfect day escape 
                from the bustling streets of Kathmandu, offering a rewarding hike to the highest peak in the southern 
                Kathmandu Valley. At 2,250 meters, Champa Devi provides spectacular panoramic views of the entire 
                valley, the surrounding hills, and on clear days, the majestic Himalayan range including Ganesh Himal, 
                Langtang, and even Everest in the distance.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Named after the goddess Champa Devi, the hill is considered sacred and features a small temple at its 
                summit where local people come to worship, especially during festivals. The hike takes you through a 
                beautiful landscape of terraced farmlands, traditional villages, and lush forests of oak and rhododendron. 
                Along the way, you'll experience rural Nepalese life, encounter friendly locals, and enjoy the peace 
                and tranquility of nature just a short drive from the capital.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                The trail begins in Pharping, an ancient Newari town with deep Buddhist significance. As you ascend, 
                the city noise fades away, replaced by birdsong and the rustle of leaves. The hike is moderately 
                challenging with a steady ascent of about 900 meters, but the pace is relaxed with plenty of stops 
                for photos and rest. A picnic lunch at the summit, with breathtaking views as your backdrop, is a 
                highlight of the experience.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                This day hike is perfect for nature lovers, photography enthusiasts, and anyone seeking a healthy 
                outdoor activity with rewarding views. No previous hiking experience is required, though a reasonable 
                level of fitness is recommended. With an expert guide to lead the way and share insights about the 
                local culture, flora, and fauna, this Champa Devi hike offers an unforgettable adventure just outside 
                Kathmandu.
              </p>
            </article>

            <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
              <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
              <strong>Important:</strong> This hike requires a reasonable level of fitness. You should be comfortable 
              walking uphill for 2-3 hours with regular breaks. Inform us of any medical conditions when booking.
            </div>
          </div>
        </section>

        {/* Highlights - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Hiking Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Summit the highest peak in the southern Kathmandu Valley at 2,250m",
                "Panoramic views of the entire Kathmandu Valley from above",
                "Himalayan views including Ganesh Himal, Langtang, and distant Everest on clear days",
                "Hike through beautiful oak and rhododendron forests",
                "Pass through traditional villages and terraced farmlands",
                "Visit the small temple dedicated to goddess Champa Devi at the summit",
                "Picnic lunch with spectacular mountain views",
                "Experience rural Nepalese life away from the city",
                "Excellent bird watching opportunities (over 100 species recorded)",
                "Peaceful escape from Kathmandu's crowds and noise",
                "Expert guide sharing knowledge of local culture and nature",
                "Perfect for photography at multiple viewpoints along the trail",
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Best Time for Hiking</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sunrise className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Spring (Mar-May)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Pleasant temperatures, blooming rhododendrons, and clear mountain views. Ideal for hiking with comfortable conditions and beautiful wildflowers along the trail.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Mountain className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Autumn (Sep-Nov)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Crystal-clear skies, perfect temperatures, and excellent visibility. The best season for Himalayan views and photography. Post-monsoon clarity is exceptional.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Snowflake className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Winter (Dec-Feb)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Cool, clear days with excellent visibility. Crisp air and fewer crowds on the trail. Morning temperatures are cold but hiking warms you up. Great for mountain views.
                </p>
                <span className="inline-block mt-2 bg-blue-100 text-blue-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Good</span>
              </div>
            </div>
            <p className="mt-3 text-[10px] text-[#66706d]">Note: Monsoon (Jun-Aug) brings rain and slippery trails. The hike is still possible but requires caution and proper gear. The landscape is lush and green during this season.</p>
          </div>
        </section>

        {/* Itinerary - Free Walking Tour Style (Accordion) */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b]">Hiking Itinerary</h2>
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
                        <span className="text-base sm:text-lg font-bold text-[#14383b] leading-none">1</span>
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
                            <MapPin className="w-3 h-3 text-[#cf6943]" aria-hidden="true" />
                            <span><strong>Meeting Point:</strong> Your hotel in Kathmandu</span>
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

        {/* Trail Details - Free Walking Tour Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
              <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2 text-sm">
                <Map className="w-4 h-4" aria-hidden="true" /> Trail Details & Difficulty
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="text-amber-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Total Distance:</strong> Approximately 8-10 kilometers round trip</li>
                    <li><strong>Total Ascent:</strong> Approximately 900 meters from trailhead to summit</li>
                    <li><strong>Hiking Time:</strong> 2-3 hours up, 2 hours down (total 4-5 hours hiking)</li>
                    <li><strong>Trail Condition:</strong> Well-defined dirt trail with some rocky sections and steps. Can be slippery after rain.</li>
                    <li><strong>Difficulty:</strong> Moderate. Suitable for regular hikers and fit beginners. Regular rest stops are included.</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-amber-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Trail Type:</strong> Loop trail (different route for descent offering new views)</li>
                    <li><strong>Maximum Elevation:</strong> 2,250 meters at Champa Devi summit</li>
                    <li><strong>Minimum Elevation:</strong> Approximately 1,350 meters at trailhead</li>
                    <li><strong>Water Sources:</strong> Limited on trail; carry sufficient water (2 liters recommended)</li>
                    <li><strong>Facilities:</strong> No facilities on trail; restrooms available at trailhead village</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Bring - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2 text-sm">
                <Backpack className="w-4 h-4" aria-hidden="true" /> What to Bring
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="text-blue-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Footwear:</strong> Sturdy hiking shoes or boots with good grip (essential)</li>
                    <li><strong>Clothing:</strong> Comfortable hiking clothes, moisture-wicking layers</li>
                    <li><strong>Jacket:</strong> Light fleece or windproof jacket (weather can change)</li>
                    <li><strong>Rain Gear:</strong> Waterproof jacket or poncho (especially in monsoon)</li>
                    <li><strong>Sun Protection:</strong> Hat, sunglasses, sunscreen (exposed sections on upper trail)</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-blue-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Daypack:</strong> Small backpack for your personal items</li>
                    <li><strong>Water:</strong> At least 2 liters (provided, but carry in your pack)</li>
                    <li><strong>Snacks:</strong> Energy bars, nuts, or chocolate (optional, lunch provided)</li>
                    <li><strong>Camera:</strong> For stunning valley and mountain views</li>
                    <li><strong>Personal Items:</strong> Any medications, hand sanitizer, tissues</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Elevation Profile - Free Walking Tour Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-[#f7f2e9] p-6 rounded-lg border border-[#d8cec0]/30">
              <h3 className="font-bold text-[#14383b] mb-4 flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> Elevation Profile
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#66706d]">Trailhead (Pharping)</span>
                  <span className="text-sm font-bold text-[#14383b]">1,350m</span>
                </div>
                <div className="w-full h-2 bg-[#d8cec0] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-400 to-amber-600 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#66706d]">Mid-point</span>
                  <span className="text-sm font-bold text-[#14383b]">1,800m</span>
                </div>
                <div className="w-full h-2 bg-[#d8cec0] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-600 to-red-400 rounded-full" style={{ width: '40%', marginLeft: '60%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#66706d]">Summit (Champa Devi)</span>
                  <span className="text-sm font-bold text-[#14383b]">2,250m</span>
                </div>
                <p className="text-sm text-[#66706d] mt-2">Total ascent: approximately 900 meters</p>
              </div>
            </div>
          </div>
        </section>

        {/* Includes / Excludes - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="includes">
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
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="gallery">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Photo Gallery</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6">
              A visual journey along the Champa Devi hiking trail - from lush forests to panoramic valley views.
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
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="faq">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  q: "Is this hike suitable for beginners?",
                  a: "Yes, this hike is suitable for beginners with a reasonable level of fitness. The trail is well-defined and the ascent is steady but not too steep. We take regular breaks, and the pace is relaxed. If you exercise regularly and are comfortable walking uphill for 2-3 hours, you should enjoy this hike. For absolute beginners or those with concerns, we recommend some preparatory walking before the trip.",
                },
                {
                  q: "What are the chances of seeing the Himalayas?",
                  a: "On clear days, particularly in autumn (September-November) and spring (March-May), the Himalayan views are spectacular. You can see Ganesh Himal, the Langtang range, and on exceptionally clear days, even Mount Everest in the distance. Winter also offers good visibility. During monsoon, views are limited due to clouds, but the lush green landscape has its own beauty.",
                },
                {
                  q: "What is the significance of Champa Devi?",
                  a: "Champa Devi is named after a local goddess and is considered a sacred hill. There is a small temple at the summit where local people come to worship, especially during the full moon and important festivals. The area is also known for its medicinal herbs and diverse flora, which local people have traditionally used for healing.",
                },
                {
                  q: "Can I do this hike independently without a guide?",
                  a: "While the trail is generally well-defined, we strongly recommend hiring a guide for several reasons: safety (trails can be confusing in places), local knowledge (your guide will share insights about culture, flora, and fauna), and support (ensuring you have the best experience). Our guides are trained in first aid and know the area intimately.",
                },
                {
                  q: "What wildlife might I see on the trail?",
                  a: "The forests around Champa Devi are home to various bird species (over 100 recorded), including Himalayan bulbuls, laughing thrushes, and occasionally eagles. You might also see monkeys, and with luck, barking deer or wild boar. The area is rich in butterfly species, especially in spring and summer.",
                },
                {
                  q: "Is the trail safe during monsoon?",
                  a: "Yes, the trail is generally safe during monsoon, but it can be slippery. We provide hiking poles if needed, and your guide will adjust the pace accordingly. The forest is lush and beautiful during this season, with waterfalls and streams flowing. However, we avoid hiking during heavy rain for safety and comfort.",
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready for Your Champa Devi Adventure?</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Book your Champa Devi Hiking Adventure today and experience the best views of the Kathmandu Valley from the highest peak in the south.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href={`/contact?trek=${encodeURIComponent(trekName)}`}>
                <Button className="bg-[#cf6943] hover:bg-[#b85a38] text-white font-bold rounded-full px-6 py-2 text-sm">
                  <Heart className="w-4 h-4 mr-2" aria-hidden="true" />
                  Book This Hike
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
  );
}