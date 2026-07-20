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
  IceCream,
  Flame,
  Award,
  MountainSnow,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    "day": 1,
    "title": "Fly from Kathmandu to Lukla & Trek to Phakding",
    "altitude": "1,400m → 2,840m → 2,652m",
    "distance": "35 min flight / 3-4 hrs trek",
    "description": "Early morning departure from your hotel in Kathmandu for the transfer to Tribhuvan International Airport. Board a scenic 35-minute flight to Lukla (Tenzing-Hillary Airport), one of the world's most thrilling mountain airports. The flight offers spectacular aerial views of the Himalayan range including Langtang, Ganesh Himal, and on clear days, Everest and Kanchenjunga. Upon landing at Lukla's famous hillside airstrip (2,840m), you'll meet your climbing guide and porters. After organizing gear, begin your trek to Phakding. The trail descends gently through pine forests, crossing several suspension bridges over the Dudh Koshi River. You'll pass through the small village of Cheplung with its beautiful mani walls and prayer flags. This short trek helps with initial acclimatization while introducing you to the Khumbu region. Your climbing guide will conduct a preliminary gear check and discuss the climbing route ahead. Overnight in Phakding.",
    "overnight": "Teahouse in Phakding",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic flight to Lukla", "Tenzing-Hillary Airport landing", "First views of the Himalayas", "Dudh Koshi River valley", "Preliminary climbing briefing"]
  },
  {
    "day": 2,
    "title": "Trek from Phakding to Namche Bazaar",
    "altitude": "2,652m → 3,440m",
    "distance": "10km / 5-6 hrs trek",
    "description": "Today's trek takes you from Phakding to Namche Bazaar, the bustling Sherpa capital and gateway to the Everest region. The trail follows the Dudh Koshi River, crossing the iconic Hillary Suspension Bridge - the highest and longest in the Khumbu. You'll pass through Monjo, where you'll enter Sagarmatha National Park and have your permits checked. The trail steepens considerably on the final climb to Namche, with several switchbacks offering magnificent views. As you approach Namche, your patience is rewarded with your first glimpse of Mount Everest's summit (8,848m) peeking above the ridge behind Nuptse and Lhotse. Namche Bazaar (3,440m) is a vibrant town with banks, bakeries, gear shops, and exceptional Sherpa culture. This is a challenging but rewarding day that sets the stage for your Island Peak climbing adventure. Your climbing guide will check your technical gear and ensure everything is in order for the climb ahead. Overnight in Namche Bazaar.",
    "overnight": "Teahouse in Namche Bazaar",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Hillary Suspension Bridge crossing", "Sagarmatha National Park entry", "First views of Mount Everest (8,848m)", "Traditional Sherpa villages", "Namche Bazaar arrival"]
  },
  {
    "day": 3,
    "title": "Acclimatization Day in Namche Bazaar",
    "altitude": "3,440m",
    "distance": "Optional hike to Everest View Hotel (3-4 hrs)",
    "description": "A crucial acclimatization day in Namche Bazaar before heading higher toward Island Peak Base Camp. The golden rule: climb high, sleep low. Your guide will lead an optional morning hike to the Everest View Hotel (3,880m) - a 2-hour uphill climb offering jaw-dropping panoramas of Everest (8,848m), Lhotse (8,516m), Nuptse (7,861m), Ama Dablam (6,812m), and Thamserku (6,623m). This hike is essential for acclimatization and provides your first close-up views of the peaks you'll be climbing near. After returning to Namche, visit the Sherpa Museum to learn about mountaineering history, Sherpa culture, and the famous Tenzing Norgay. Explore the local monastery and the bustling Saturday market if your visit coincides. Your climbing guide will conduct a thorough gear check, including crampons, ice axe, harness, helmet, and boots. You'll also review the climbing route, fixed ropes, and safety procedures for Island Peak. This rest day significantly improves your acclimatization and success rate for the high altitude climb ahead. Overnight in Namche Bazaar.",
    "overnight": "Teahouse in Namche Bazaar",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Everest View Hotel hike (3,880m)", "Panoramic mountain views (Everest, Lhotse, Ama Dablam)", "Sherpa Museum visit", "Technical climbing gear check", "Island Peak route briefing"]
  },
  {
    "day": 4,
    "title": "Trek from Namche Bazaar to Tengboche",
    "altitude": "3,440m → 3,860m",
    "distance": "10km / 5-6 hrs trek",
    "description": "Leaving Namche Bazaar, the trail contours along the hillsides with spectacular views of Everest, Nuptse, Lhotse, and the magnificent Ama Dablam. The path is relatively flat for the first hour before descending to Kayangjuma and crossing the Dudh Koshi River at Phunki Tenga (3,250m) - a great spot for a noodle soup break and to see water-powered prayer wheels. The final climb to Tengboche (3,860m) is steep but incredibly rewarding. Tengboche Monastery, the largest Tibetan Buddhist monastery in the Khumbu region, sits majestically with Ama Dablam as its backdrop. Attend the evening prayer ceremony (puja) where monks chant, blow conch shells, and play traditional instruments. The sunset over the Himalayas from Tengboche is unforgettable. Your climbing guide will lead a short acclimatization walk and discuss the importance of Buddhist blessings for mountaineering success. Overnight in Tengboche.",
    "overnight": "Teahouse in Tengboche",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Ama Dablam close-up views", "Tengboche Monastery visit", "Evening prayer ceremony", "Sunset over the Himalayas", "Buddhist blessing for climbers"]
  },
  {
    "day": 5,
    "title": "Trek from Tengboche to Dingboche",
    "altitude": "3,860m → 4,410m",
    "distance": "11km / 5-6 hrs trek",
    "description": "Today's trek descends through beautiful rhododendron and juniper forests to Deboche, then crosses the Imja Khola River. The trail continues through Pangboche village (3,930m), one of the oldest Sherpa settlements in the Khumbu, home to a famous monastery said to contain a Yeti scalp. As you exit the forest, the landscape opens into the vast, alpine Imja Valley with stunning views of Ama Dablam towering above. Dingboche (4,410m) is a beautiful Sherpa village surrounded by stone-walled potato fields and dramatic mountain scenery including Lhotse, Island Peak, and Ama Dablam. This is a key acclimatization point before heading to Island Peak. Your climbing guide will check everyone's oxygen saturation and heart rate, ensuring proper acclimatization. You'll start to feel the thinner air at this altitude. Overnight in Dingboche.",
    "overnight": "Teahouse in Dingboche",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Pangboche Monastery (Yeti scalp)", "Imja Valley alpine landscape", "Ama Dablam panorama", "Lhotse and Island Peak views", "Health check by climbing guide"]
  },
  {
    "day": 6,
    "title": "Acclimatization Day in Dingboche - Nangkartshang Peak Hike",
    "altitude": "4,410m → 5,100m → 4,410m",
    "distance": "5km / 4-5 hrs round trip",
    "description": "A crucial acclimatization day before heading to Island Peak Base Camp. Today's recommended activity is the hike to Nangkartshang Peak (5,100m), also known as Nangkartshang Ri. This 3-4 hour round-trip climb offers spectacular 360-degree views of Makalu (8,485m - the world's fifth highest), Lhotse (8,516m), Nuptse, Ama Dablam, Island Peak (6,189m), and the entire Imja Valley. The climb is steep but incredibly rewarding, helping you acclimatize more effectively for the altitude above 5,000m where Island Peak Base Camp sits. Your climbing guide will lead the hike, monitoring your pace and breathing. You'll practice walking on steep, rocky terrain similar to what you'll encounter on Island Peak. After lunch, explore Dingboche's ancient Buddhist monastery, visit local yak herding families, or simply rest. Your guide will provide a detailed briefing on the Island Peak climbing route, including the glacier traverse, the headwall with fixed ropes, and summit day procedures. This acclimatization day significantly increases your success rate for the Island Peak summit. Overnight in Dingboche.",
    "overnight": "Teahouse in Dingboche",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Nangkartshang Peak hike (5,100m)", "360-degree Himalayan panorama", "Views of Makalu (8,485m)", "Island Peak route preview", "Detailed summit day briefing"]
  },
  {
    "day": 7,
    "title": "Trek from Dingboche to Chhukung",
    "altitude": "4,410m → 4,730m",
    "distance": "5km / 3-4 hrs trek",
    "description": "A short trek day allowing for gradual acclimatization before the climbing phase. From Dingboche, the trail follows the Imja Valley past Bibre and through alpine meadows with yak pastures. The landscape becomes increasingly dramatic with massive peaks surrounding you on all sides. The trail offers spectacular views of Lhotse (8,516m), Nuptse (7,861m), Ama Dablam (6,812m), and the massive south face of Lhotse - one of the largest vertical walls in the Himalayas. Chhukung (4,730m) is a small settlement in a dramatic glacial valley, serving as the last proper village before Island Peak Base Camp. Upon arrival, your climbing guide will conduct a final gear check, ensuring all climbing equipment (crampons, ice axe, harness, helmet, jumar, and carabiners) is in perfect condition. You'll also review rope techniques, including using a jumar for ascending fixed ropes and rappelling (abseiling) for descent. Overnight in Chhukung.",
    "overnight": "Teahouse in Chhukung",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Imja Valley alpine scenery", "Lhotse south face views", "Ama Dablam and Nuptse panorama", "Final technical gear check", "Rope techniques practice"]
  },
  {
    "day": 8,
    "title": "Trek from Chhukung to Island Peak Base Camp",
    "altitude": "4,730m → 5,087m",
    "distance": "4km / 3-4 hrs trek",
    "description": "Today you leave the main Everest Base Camp trail and head towards Island Peak (Imja Tse) Base Camp. The trail climbs gradually through rocky terrain, moraines, and glacier debris with stunning views of Island Peak, Ama Dablam, and Lhotse. You'll cross several small streams and navigate through boulder fields. Upon reaching Base Camp (5,087m), your climbing guide and Sherpa team will set up the climbing camp while you rest and acclimatize. In the afternoon, your guide will conduct a thorough training session on using crampons, ice axes, harnesses, jumars, and rope techniques. You'll practice walking on snow and ice on a gentle slope, learn self-arrest techniques with the ice axe, and practice ascending and descending fixed ropes. This training is essential for your safety and success on summit day. Your guide will assess everyone's comfort level with the equipment. Prepare your gear for the early morning summit push tomorrow. Overnight in a tented camp at Island Peak Base Camp.",
    "overnight": "Tented Camp at Island Peak Base Camp",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Island Peak Base Camp arrival (5,087m)", "Crampon and ice axe training", "Fixed rope ascending practice", "Self-arrest technique practice", "Glacier traverse preparation"]
  },
  {
    "day": 9,
    "title": "Trek from Base Camp to High Camp",
    "altitude": "5,087m → 5,600m",
    "distance": "3km / 3-4 hrs trek",
    "description": "Today we move to High Camp, a short but steep climb on moraine and glacier. The route is rocky and requires careful navigation, following the line of the glacier moraine. The climb offers increasingly spectacular views of Island Peak's summit pyramid, Ama Dablam, Lhotse, and Makalu. At High Camp (5,600m), we set up camp on a flatter section of the glacier. The afternoon is spent resting, hydrating, and making final preparations for the midnight summit push. Your climbing guide will review the climbing route, fixed rope sections, emergency procedures, and turnaround times. The summit pyramid is visible from camp, clearly showing the steep headwall with fixed ropes (45-50 degree slope). Rest early (by 6-7 PM) as we'll wake at 1:00 AM for the summit attempt. Try to eat and hydrate as much as possible despite the altitude. Overnight in a tented camp at High Camp.",
    "overnight": "Tented Camp at High Camp",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["High Camp setup (5,600m)", "Summit pyramid view", "Final route review", "Glacier headwall preview", "Summit day preparation"]
  },
  {
    "day": 10,
    "title": "Summit Island Peak (6,189m) & Return to Chhukung",
    "altitude": "5,600m → 6,189m → 4,730m",
    "distance": "12km / 10-12 hrs",
    "description": "The most challenging and rewarding day of your Island Peak climbing adventure! Wake at 1:00 AM for tea and light breakfast. Start climbing by 2:00 AM with headlamps lighting the way. The initial section is a gentle glacier traverse with moderate crevasses. At the base of the headwall, you'll ascend using fixed ropes (45-50 degree slope) for approximately 200-300 meters. This is the most technical section - use your jumar and crampons carefully, following your guide's instructions. Upon reaching the summit ridge, follow the exposed ridge to the true summit (6,189m). From the summit, enjoy breathtaking 360-degree views of Mount Everest (8,848m), Lhotse (8,516m), Makalu (8,485m), Baruntse (7,129m), Ama Dablam (6,812m), and countless other peaks. The sunrise over the Himalayas is unforgettable. After celebrating your achievement and taking photographs, begin the careful descent back to High Camp and Base Camp, then continue down to Chhukung (4,730m) for a well-deserved rest. Your climbing guide will ensure everyone descends safely. Overnight in Chhukung teahouse.",
    "overnight": "Teahouse in Chhukung",
    "meals": "Breakfast, Packed Lunch, Dinner",
    "highlights": ["Island Peak Summit (6,189m)", "Sunrise over Everest (8,848m)", "360-degree Himalayan panorama", "Technical headwall ascent", "Summit achievement celebration"]
  },
  {
    "day": 11,
    "title": "Contingency Day for Island Peak Summit",
    "altitude": "4,730m",
    "distance": "Reserve Day",
    "description": "This day is kept as a buffer for weather delays, acclimatization needs, or any unforeseen circumstances in the climbing schedule. If weather conditions (high winds, clouds, snowfall) prevented the summit on Day 10, this provides another opportunity for the climb. Your climbing guide will assess conditions and plan accordingly. If the summit was successful on Day 10, this day can be used for additional rest, exploration of the Chhukung Valley, or a short hike to Chhukung Ri (5,550m) for spectacular panoramic views of the surrounding peaks including Lhotse, Ama Dablam, and Island Peak. Alternatively, you can visit the Imja Tsho (Imja Lake) below the Lhotse glacier. This flexibility is standard in professional climbing itineraries and significantly increases summit success rates. Overnight in Chhukung.",
    "overnight": "Teahouse in Chhukung",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Weather contingency buffer", "Summit window flexibility", "Chhukung Ri optional hike", "Imja Lake exploration", "Additional rest and recovery"]
  },
  {
    "day": 12,
    "title": "Trek from Chhukung to Pangboche",
    "altitude": "4,730m → 3,930m",
    "distance": "12km / 5-6 hrs trek",
    "description": "Begin your descent, retracing your steps through the beautiful Khumbu Valley. The downhill trek offers a different perspective of the mountains and villages, with familiar peaks appearing from new angles. The air becomes noticeably richer as you lose altitude, making breathing easier. Stop at Pangboche (3,930m) to visit the ancient Pangboche Monastery, one of the oldest in the Khumbu, famous for its alleged Yeti scalp. Your climbing guide will share stories of mountaineering history and the significance of this monastery. Celebrate your successful Island Peak summit with your climbing team. Enjoy the familiar comforts of lower altitude - warmer temperatures, thicker air, and better sleep. Overnight in Pangboche.",
    "overnight": "Teahouse in Pangboche",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Descent through Khumbu Valley", "New mountain perspectives", "Pangboche Monastery visit", "Yeti scalp legend", "Summit celebration with team"]
  },
  {
    "day": 13,
    "title": "Trek from Pangboche to Namche Bazaar",
    "altitude": "3,930m → 3,440m",
    "distance": "12km / 4-5 hrs trek",
    "description": "Continue descending through beautiful rhododendron and pine forests, crossing the Imja Khola and Dudh Koshi Rivers. The trail passes through Tengboche, where you can visit the monastery again if you wish. The descent offers spectacular views of Ama Dablam and other peaks as you make your way back to Namche Bazaar. Arrive in Namche Bazaar (3,440m) by mid-afternoon. Enjoy the familiar comforts of Namche - take a well-deserved hot shower (worth every rupee), get laundry done, and indulge in Namche's famous bakeries with coffee, apple pie, and donuts. Visit the local shops for souvenirs - thangkas, prayer flags, Singing Bowls, and mountaineering memorabilia. In the evening, celebrate your Island Peak summit achievement with your climbing team. Overnight in Namche Bazaar.",
    "overnight": "Teahouse in Namche Bazaar",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Tengboche Monastery revisit", "Ama Dablam views", "Namche Bazaar return", "Hot shower celebration", "Bakeries and souvenir shopping"]
  },
  {
    "day": 14,
    "title": "Trek from Namche Bazaar to Lukla",
    "altitude": "3,440m → 2,840m",
    "distance": "18km / 6-7 hrs trek",
    "description": "Your final day of trekking follows the Dudh Koshi River as you make your way back to Lukla. The trail is mostly downhill, passing through Monjo (where you exit Sagarmatha National Park) and crossing familiar suspension bridges including the famous Hillary Bridge. The lush forests, rushing river, and small Sherpa villages create a peaceful farewell to the Khumbu region. Your legs will appreciate the mostly downhill terrain, though the knees may feel the impact - use your trekking poles! Arrive in Lukla (2,840m) by late afternoon. Check into your teahouse for the final time and attend a farewell ceremony with your guides and porters. This is your chance to thank them with tips and appreciation for safely guiding you to the summit of Island Peak (6,189m). Enjoy a celebratory dinner in Lukla, reflecting on your incredible journey. Pack your bags carefully for tomorrow's early morning flight back to Kathmandu. Overnight in Lukla.",
    "overnight": "Teahouse in Lukla",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Final day of Island Peak expedition", "Sagarmatha National Park exit", "Hillary Bridge crossing", "Farewell ceremony with guides", "Lukla arrival and celebration dinner"]
  },
  {
    "day": 15,
    "title": "Fly from Lukla to Kathmandu",
    "altitude": "2,840m → 1,400m",
    "distance": "35 min flight",
    "description": "Early morning wake-up for your scenic return flight from Lukla to Kathmandu. The 35-minute flight offers final aerial views of the Himalayan range - a last glimpse of Everest, Lhotse, Ama Dablam, and the peaks you've been climbing among. The flight is a powerful moment to reflect on your incredible achievement. Upon arrival at Tribhuvan International Airport in Kathmandu, our representative will transfer you to your hotel in Thamel. You've earned a well-deserved hot shower, clean clothes, and the comfort of a real bed. The remainder of your day is free for souvenir shopping in Thamel, visiting a spa for a much-needed massage, or simply relaxing after your expedition. In the evening, enjoy a farewell dinner at a traditional Nepali restaurant with cultural dance performance. Receive your Island Peak Summit Certificate from your climbing guide as a memento of your achievement - standing atop 6,189 meters (20,305 feet) with panoramic views of Everest and the Himalayas. Share stories and celebrate with your climbing team. Overnight in Kathmandu.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast, Dinner",
    "highlights": ["Scenic flight to Kathmandu", "Final Himalayan aerial views", "Thamel souvenir shopping", "Spa and relaxation", "Summit certificate presentation", "Farewell celebration dinner"]
  }
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "3 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "All meals during trek and climb (breakfast, lunch, dinner)",
  "Teahouse accommodation during trek and tented camp during climb",
  "Experienced English-speaking climbing guide (government licensed)",
  "Assistant climbing guides for groups of 4 or more",
  "Sherpa support for summit push",
  "High-quality climbing tent (North Face or similar) at Base Camp and High Camp",
  "Group climbing gear (ropes, ice screws, snow bars, etc.)",
  "Personal climbing gear: harness, crampons, ice axe, helmet, ascender, carabiners",
  "Satellite phone for emergency communication (pay per use)",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Sagarmatha National Park entry permit",
  "Island Peak climbing permit",
  "TIMS (Trekkers' Information Management System) card",
  "All ground transportation as per itinerary",
  "First aid medical kit including pulse oximeter and Gamow bag",
  "Sleeping bag and down jacket for high altitude (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Everest region",
  "Farewell dinner in Kathmandu",
  "Island Peak summit certificate",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Packed lunch for summit day",
  "Oxygen cylinder and mask for emergency use",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude climbing up to 6,200m & helicopter evacuation)",
  "Personal climbing gear not mentioned (boots, gaiters, etc.)",
  "Meals in Kathmandu (except welcome dinner and breakfasts)",
  "Bottled/mineral water during trek (purification tablets provided)",
  "Hot showers and battery charging at lodges ($2-5 per use)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, bar bills, souvenirs)",
  "Tips and gratuities for guides, sherpas, and porters (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
  "Summit bonus for climbing guide and sherpa (customary)",
  "Personal climbing insurance",
];

const gallery = [
  {
    src: "/images/used/island-peak-1.webp",
    alt: "Island Peak Summit",
    caption: "Island Peak Summit (6,189m) with Everest behind",
  },
  {
    src: "/images/used/island-peak-2.webp",
    alt: "Island Peak Climb",
    caption: "Climbing the headwall on Island Peak",
  },
  
];

// Schema.org structured data for Island Peak Climbing
const climbSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Island Peak Climbing Expedition - 15 Days",
  "description": "Summit Island Peak (6,189m) in the Everest region of Nepal. A 15-day technical climbing expedition with expert guides, proper acclimatization, and comprehensive support. Experience breathtaking views of Everest, Lhotse, and Ama Dablam from the summit.",
  "image": "https://www.himkalaadventure.com/images/used/island-peak-climbing-nepal.webp",
  "brand": {
    "@type": "Brand",
    "name": "Himkala Adventure Pvt. Ltd."
  },
  "offers": {
    "@type": "Offer",
    "price": "2895",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-01-01",
    "url": "https://www.himkalaadventure.com/services/peak-climbing/island-peak-climbing"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "156"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Altitude",
      "value": "6,189m"
    },
    {
      "@type": "PropertyValue",
      "name": "Duration",
      "value": "15 Days"
    },
    {
      "@type": "PropertyValue",
      "name": "Difficulty",
      "value": "Technical"
    },
    {
      "@type": "PropertyValue",
      "name": "Region",
      "value": "Everest Region"
    },
    {
      "@type": "PropertyValue",
      "name": "Success Rate",
      "value": "92%"
    }
  ]
};

// Organization schema
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Himkala Adventure Pvt. Ltd.",
  "description": "Expert-guided Island Peak climbing expeditions in the Everest region, Nepal. Technical mountaineering with certified guides.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Thamel, Lekhnath Marga",
    "addressLocality": "Kathmandu",
    "addressCountry": "Nepal"
  },
  "telephone": "+977 9841376470",
  "email": "info@himkalaadventure.com",
  "url": "https://www.himkalaadventure.com",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 27.7172,
    "longitude": 85.3240
  }
};

export default function IslandPeakClimbingPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  
  // Climb name constant for auto-fill functionality
  const climbName = "Island Peak Climbing Expedition";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Island Peak Climbing Expedition - Himkala Adventure");
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
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(climbSchema) }}
      />

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
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
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
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="w-4 h-4" aria-hidden="true" />
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white"
                    onClick={() => handleShare("twitter")}
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-4 h-4" aria-hidden="true" />
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-slate-800 hover:bg-slate-900 text-white"
                    onClick={handleCopyLink}
                    aria-label="Copy link to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
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
            src="/images/used/island-peak-climbing-nepal.webp"
            alt="Island Peak Climbing expedition in Nepal - summit Island Peak (6,189m) in the Everest region with views of Everest, Lhotse, and Ama Dablam"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940] via-[#0f2940]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/80 via-transparent to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
          <div className="max-w-5xl mx-auto text-center w-full">
            <div className="flex flex-wrap gap-2 mb-4 md:mb-6 justify-center">
              <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <MapPin className="w-3 h-3 mr-1" aria-hidden="true" /> Everest Region
              </Badge>
              <Badge className="bg-red-100 text-red-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Very Strenuous
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <MountainSnow className="w-3 h-3 mr-1" aria-hidden="true" /> 6,189m Summit
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              ISLAND PEAK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                CLIMBING EXPEDITION
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              Summit the iconic Island Peak (6,189m) in the Everest region—a perfect introduction to Himalayan 
              mountaineering with breathtaking views of Everest, Lhotse, and Ama Dablam.
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
                <div className="text-xs text-slate-400 line-through">$3,200</div>
                <div className="text-lg font-bold text-[#0f2940]">$2,895</div>
              </div>
              <Link href={`/contact?trek=${encodeURIComponent(climbName)}`}>
                <Button className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] text-white font-bold rounded-full px-4 py-1.5 text-xs min-h-[44px]" aria-label={`Book ${climbName} now`}>
                  <Heart className="w-3 h-3 mr-1" aria-hidden="true" /> Book Now
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
                        <span className="text-white/50 text-sm line-through">$3,200</span>
                        <div className="text-3xl md:text-4xl font-bold text-white mt-1">$2,895</div>
                        <span className="text-white/60 text-sm">per person</span>
                        <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $305</Badge>
                      </div>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>15 Days / 14 Nights</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>Best: Mar-May, Sep-Nov</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>Group Size: 2-6</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Tent className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>Teahouse + Tented Camp</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <MountainSnow className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>Max Altitude: 6,189m</span>
                        </div>
                      </div>

                      {/* Book Now Button */}
                      <Link href={`/contact?trek=${encodeURIComponent(climbName)}`}>
                        <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-xs md:text-base" aria-label={`Book ${climbName}`}>
                          <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" aria-hidden="true" /> Book This Climb
                        </Button>
                      </Link>
                      
                      {/* WhatsApp Now Button */}
                      <a 
                        href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about the ${climbName}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        aria-label="Inquire about Island Peak climbing on WhatsApp"
                      >
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold rounded-full h-10 md:h-12 text-xs md:text-base">
                          <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" aria-hidden="true" /> WhatsApp Now
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  {/* Quick Facts */}
                  <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-[10px] md:text-base">
                        <Map className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" /> Quick Facts
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
                          <span className="text-slate-500">Trek Start</span>
                          <span className="font-medium text-[#0f2940]">Lukla</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Trek End</span>
                          <span className="font-medium text-[#0f2940]">Lukla</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Summit Altitude</span>
                          <span className="font-medium text-[#0f2940]">Island Peak (6,189m)</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2">
                          <span className="text-slate-500">Climbing Days</span>
                          <span className="font-medium text-[#0f2940]">14 Days trek + climb</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Share */}
                  <Card className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-[10px] md:text-base">
                        <Share2 className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" /> Share
                      </h3>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-lg md:rounded-xl text-[8px] md:text-xs"
                          onClick={() => handleShare("facebook")}
                          aria-label="Share on Facebook"
                        >
                          <Facebook className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg md:rounded-xl text-[8px] md:text-xs"
                          onClick={() => handleShare("twitter")}
                          aria-label="Share on Twitter"
                        >
                          <Twitter className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg md:rounded-xl text-[8px] md:text-xs"
                          onClick={handleCopyLink}
                          aria-label="Copy link to clipboard"
                        >
                          {copied ? <Check className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" /> : <Copy className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />}
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
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-3 h-3 mr-1" aria-hidden="true" /> Share
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg text-[10px] py-1.5 min-h-[44px]"
                  onClick={() => handleShare("twitter")}
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-3 h-3 mr-1" aria-hidden="true" /> Tweet
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg text-[10px] py-1.5 min-h-[44px]"
                  onClick={handleCopyLink}
                  aria-label="Copy link to clipboard"
                >
                  {copied ? <Check className="w-3 h-3" aria-hidden="true" /> : <Copy className="w-3 h-3" aria-hidden="true" />}
                </Button>
              </div>

              {/* Overview */}
              <section className="mb-6 md:mb-12" id="overview">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Overview of Island Peak Climbing Expedition</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The <strong>Island Peak Climbing Expedition</strong> (Imja Tse, 6,189m) is one of Nepal's most popular and rewarding peak climbing adventures, offering a perfect introduction to Himalayan mountaineering. Situated in the heart of the Everest region, this stunning peak was named "Island Peak" by Eric Shipton's 1953 expedition because it resembles an island in a sea of ice when viewed from Dingboche. This <strong>Nepal peak climbing</strong> expedition combines trekking through the iconic Khumbu Valley with technical mountaineering.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The <strong>Island Peak climb</strong> combines trekking through the iconic Khumbu Valley with technical mountaineering on snow and ice. After acclimatizing at beautiful villages like Namche Bazaar, Tengboche, and Dingboche, you'll establish base camp and high camp before the summit push. The final ascent involves a steep headwall climb using fixed ropes (45-50 degrees) before reaching the spectacular summit ridge with its breathtaking <strong>360-degree panorama</strong> including Mount Everest (8,848m), Lhotse (8,516m), Makalu (8,485m), and the stunning Ama Dablam (6,812m).
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    This <strong>Everest region climbing</strong> expedition is ideal for trekkers with some previous high-altitude experience who want to take their first steps into technical climbing. Prior experience with crampons and ice axes is helpful but not essential—your guide will provide comprehensive training at Base Camp. The climb requires excellent fitness, mental determination, and a spirit of adventure. Standing atop Island Peak at sunrise, watching the world's highest peaks light up in golden hues, is an experience you'll treasure forever.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Island Peak Climbing Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Summit Island Peak (6,189m) - a classic Himalayan climbing peak",
                    "Standing at the summit with breathtaking 360° views of Everest, Lhotse, Makalu, and Ama Dablam",
                    "Experience technical mountaineering with fixed rope climbing on snow/ice (45-50°)",
                    "Trek through the iconic Everest region with its rich Sherpa culture",
                    "Visit the famous Tengboche Monastery and observe Buddhist rituals",
                    "Acclimatize at Namche Bazaar, the bustling Sherpa capital",
                    "Climb with experienced, government-licensed climbing guides",
                    "Learn essential mountaineering skills - crampon use, rope techniques, glacier travel",
                    "Spectacular mountain flights to and from Lukla's thrilling airport",
                    "Achieve a significant mountaineering milestone and receive a summit certificate",
                  ].map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]"
                    >
                      <Award className="w-3 h-3 md:w-4 h-4 text-[#2d6a8a] fill-[#C5E0ED] shrink-0" aria-hidden="true" />
                      <span className="text-[#0f2940] font-medium text-xs md:text-base leading-tight">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Best Season */}
              <section className="mb-6 md:mb-12">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Best Time to Climb Island Peak</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-orange-500" aria-hidden="true" />
                        <h3 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Mar - May)</h3>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Stable weather, warming temperatures, and excellent climbing conditions. Rhododendrons bloom along the lower trails. The most popular season with longer summit windows.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Excellent</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Snowflake className="w-4 h-4 md:w-5 md:h-5 text-blue-500" aria-hidden="true" />
                        <h3 className="font-bold text-[#0f2940] text-xs md:text-base">Autumn (Sep - Nov)</h3>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Crystal-clear skies, stable weather, and perfect mountain views. Cooler temperatures but excellent climbing conditions. Peak season with vibrant cultural festivals.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: Winter (Dec-Feb) is extremely cold with heavy snow and high avalanche risk. Monsoon (Jun-Aug) brings rain, clouds, and limited summit views - not recommended.</p>
              </section>

              {/* Detailed Itinerary */}
              <section className="mb-6 md:mb-12" id="itinerary">
                <div className="flex items-center justify-between mb-3 md:mb-6">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940]">Day-by-Day Expedition Itinerary</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[#2d6a8a] border-[#C5E0ED] hover:bg-[#C5E0ED]/20 rounded-full text-xs md:text-sm px-2 md:px-4"
                    onClick={() =>
                      setExpandedDays(expandedDays.length === itinerary.length ? [] : itinerary.map((d) => d.day))
                    }
                    aria-label={expandedDays.length === itinerary.length ? "Collapse all itinerary days" : "Expand all itinerary days"}
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
                          aria-label={expandedDays.includes(day.day) ? `Collapse day ${day.day}` : `Expand day ${day.day}`}
                        >
                          <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex flex-col items-center justify-center shrink-0">
                            <span className="text-[8px] md:text-[10px] font-bold text-[#0f2940] uppercase">Day</span>
                            <span className="text-base md:text-xl font-bold text-[#0f2940] leading-none">{day.day}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-[#0f2940] text-xs md:text-base truncate">{day.title}</h3>
                            <div className="flex flex-wrap gap-1 md:gap-3 text-xs text-slate-500 mt-0.5 md:mt-1">
                              <span className="flex items-center gap-0.5 md:gap-1 text-[10px] md:text-xs">
                                <TrendingUp className="w-2.5 h-2.5 md:w-3 md:h-3" aria-hidden="true" /> {day.altitude}
                              </span>
                              <span className="flex items-center gap-0.5 md:gap-1 text-[10px] md:text-xs">
                                <Backpack className="w-2.5 h-2.5 md:w-3 md:h-3" aria-hidden="true" /> {day.distance}
                              </span>
                            </div>
                          </div>
                          <ChevronDown
                            className={`w-3 h-3 md:w-5 md:h-5 text-slate-400 transition-transform shrink-0 ${
                              expandedDays.includes(day.day) ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </button>

                        {expandedDays.includes(day.day) && (
                          <div className="px-2 md:px-4 pb-2 md:pb-4 border-t border-[#C5E0ED]/20">
                            <p className="text-slate-600 text-[10px] md:text-sm leading-relaxed pt-2 md:pt-4 mb-2 md:mb-4">{day.description}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-2 md:mb-4">
                              <div className="flex items-center gap-2 text-xs text-slate-600 bg-[#f8fbfc] rounded-lg p-2 md:p-3">
                                <Tent className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" />
                                <span className="text-[10px] md:text-xs"><strong>Overnight:</strong> {day.overnight}</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-slate-600 bg-[#f8fbfc] rounded-lg p-2 md:p-3">
                                <Utensils className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" />
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
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">What's Included in This Island Peak Expedition</h2>
                <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                  <Card className="bg-green-50/50 border-green-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-6">
                      <h3 className="font-bold text-green-800 mb-2 md:mb-4 flex items-center gap-2 text-xs md:text-base">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" /> Cost Includes
                      </h3>
                      <ul className="space-y-1 md:space-y-2">
                        {includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-[10px] md:text-sm text-slate-600">
                            <CheckCircle2 className="w-2.5 h-2.5 md:w-4 md:h-4 text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-red-50/50 border-red-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-6">
                      <h3 className="font-bold text-red-800 mb-2 md:mb-4 flex items-center gap-2 text-xs md:text-base">
                        <XCircle className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" /> Cost Excludes
                      </h3>
                      <ul className="space-y-1 md:space-y-2">
                        {excludes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-[10px] md:text-sm text-slate-600">
                            <XCircle className="w-2.5 h-2.5 md:w-4 md:h-4 text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
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
                <AlertTriangle className="w-4 h-4 md:w-6 md:h-6 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-1 md:mb-2 text-xs md:text-base">Important Information for Climbers</h3>
                  <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                    <li>• <strong>Permits Required:</strong> Island Peak climbing permit, Sagarmatha National Park entry permit, and TIMS card are all included and arranged by us.</li>
                    <li>• <strong>Physical Fitness:</strong> This is a strenuous climb requiring excellent fitness. You should be comfortable trekking 5-7 hours daily at altitude and have good cardiovascular endurance.</li>
                    <li>• <strong>Technical Experience:</strong> Previous mountaineering experience is helpful but not essential. Your guide will provide comprehensive training at Base Camp on crampon use, rope techniques, and ice axe handling.</li>
                    <li>• <strong>Travel Insurance:</strong> Mandatory - must cover high altitude climbing up to 6,200m and helicopter evacuation. This is non-negotiable for your safety.</li>
                    <li>• <strong>Lukla Flights:</strong> Weather can cause flight delays. We include buffer days, but be prepared for possible schedule changes. Pack essentials in hand luggage.</li>
                    <li>• <strong>Acclimatization:</strong> Proper acclimatization is crucial. Our itinerary includes rest days at Namche and Dingboche, plus a contingency day for summit flexibility.</li>
                    <li>• <strong>Summit Bonus:</strong> It's customary to provide a summit bonus to your climbing guide and Sherpa upon successful summit (typically $150-250 total).</li>
                  </ul>
                </div>
              </div>

              {/* Photo Gallery */}
              <section className="mb-6 md:mb-12" id="gallery">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Photo Gallery - Island Peak Expedition</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3">
                  {gallery.map((image, i) => (
                    <div
                      key={i}
                      className="relative h-24 md:h-48 rounded-lg md:rounded-xl overflow-hidden group cursor-pointer"
                    >
                      <Image
                        src={image.src}
                        alt={`${image.alt} - Island Peak climbing expedition in Nepal's Everest region`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 33vw"
                        loading="lazy"
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
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Frequently Asked Questions About Island Peak</h2>
                <div className="space-y-2 md:space-y-4">
                  {[
                    {
                      q: "How difficult is Island Peak climbing?",
                      a: "Island Peak is considered a trekking peak but requires technical climbing skills. The climb involves walking on glaciers, crossing crevasses, and ascending a steep headwall with fixed ropes (45-50 degrees). Good physical fitness, mental determination, and some previous high-altitude experience are essential. Prior technical experience is helpful but not mandatory as training is provided.",
                    },
                    {
                      q: "Do I need previous climbing experience?",
                      a: "Previous mountaineering experience is beneficial but not strictly required. Many successful climbers are experienced trekkers with good fitness who learn technical skills during training at Base Camp. You should be comfortable with heights and have a good head for exposed terrain. Your guide will teach you proper use of crampons, ice axe, and rope techniques.",
                    },
                    {
                      q: "What is the success rate on Island Peak?",
                      a: "Success rates vary by season and weather conditions but typically range from 70-90% with proper preparation. Spring (March-May) and autumn (September-November) offer the best conditions. Our experienced guides, proper acclimatization schedule, and contingency day significantly improve summit success.",
                    },
                    {
                      q: "What climbing gear do I need?",
                      a: "We provide group climbing gear (ropes, ice screws) and technical equipment (harness, crampons, ice axe, helmet, ascender). You'll need personal items: climbing boots (plastic or insulated), gaiters, warm clothing, headlamp, sunglasses, and backpack. A detailed gear list will be provided upon booking.",
                    },
                    {
                      q: "What about altitude sickness?",
                      a: "Our itinerary includes proper acclimatization with rest days at Namche (3,440m) and Dingboche (4,410m) plus a gradual ascent profile. We carry a Gamow bag and oxygen for emergencies, and our guides are trained in altitude sickness recognition. Good hydration, slow ascent, and listening to your body are crucial.",
                    },
                    {
                      q: "What is the accommodation like during the climb?",
                      a: "During trekking, you'll stay in comfortable teahouses with twin-sharing rooms and shared bathrooms. At Island Peak Base Camp and High Camp, we use high-quality mountain tents with sleeping mats. Meals are prepared by our camp staff. Teahouses offer basic but warm facilities.",
                    },
                  ].map((faq, i) => (
                    <Card key={i} className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-lg md:rounded-xl">
                      <CardContent className="p-2 md:p-5">
                        <h3 className="font-bold text-[#0f2940] mb-1 md:mb-2 text-xs md:text-base">{faq.q}</h3>
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