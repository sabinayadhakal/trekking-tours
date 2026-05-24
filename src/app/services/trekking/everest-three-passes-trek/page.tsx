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
  Flag,
  Droplets,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    "description": "Today's trek takes you from Phakding to Namche Bazaar, the bustling Sherpa capital and gateway to the Everest region. The trail follows the Dudh Koshi River, crossing the iconic Hillary Suspension Bridge - the highest and longest in the Khumbu. You'll pass through Monjo (Sagarmatha National Park entry point) where permits are checked. The trail steepens considerably on the final climb to Namche, with several switchbacks offering magnificent views. As you approach Namche, your patience is rewarded with your first glimpse of Mount Everest's summit peeking above the ridge. Namche Bazaar is a vibrant town with banks, bakeries, gear shops, and exceptional Sherpa culture. This challenging day sets the stage for your Three Passes adventure.",
    "overnight": "Teahouse in Namche Bazaar",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Hillary Suspension Bridge crossing", "Sagarmatha National Park entry", "First views of Mount Everest", "Traditional Sherpa villages", "Namche Bazaar arrival"]
  },
  {
    "day": 3,
    "title": "Acclimatization Day in Namche Bazaar",
    "altitude": "3,440m",
    "distance": "Optional hikes (2-4 hrs)",
    "description": "A crucial acclimatization day in Namche Bazaar before attempting the three high passes. The golden rule: climb high, sleep low. Your guide will lead an optional morning hike to the Everest View Hotel (3,880m) - a 2-hour uphill climb offering jaw-dropping panoramas of Everest (8,848m), Lhotse (8,516m), Nuptse (7,861m), and Ama Dablam (6,812m). Alternatively, visit the Sherpa Museum to learn about mountaineering history, Sherpa culture, and the famous Tenzing Norgay. Other options include exploring Khumjung village (where the Hillary School is located) or simply resting, hydrating, and enjoying Namche's famous bakeries. This rest day significantly improves your acclimatization for the passes ahead: Kongma La (5,535m), Cho La (5,420m), and Renjo La (5,360m).",
    "overnight": "Teahouse in Namche Bazaar",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Everest View Hotel hike", "Panoramic mountain views (Everest, Lhotse, Ama Dablam)", "Sherpa Museum visit", "Khumjung village exploration", "Three Passes preparation"]
  },
  {
    "day": 4,
    "title": "Trek from Namche Bazaar to Tengboche",
    "altitude": "3,440m → 3,860m",
    "distance": "10km / 5-6 hrs trek",
    "description": "Leaving Namche Bazaar, the trail contours along the hillsides with spectacular views of Everest, Nuptse, Lhotse, and the magnificent Ama Dablam. The path is relatively flat for the first hour before descending to Kayangjuma and crossing the Dudh Koshi River at Phunki Tenga (3,250m) - a great spot for a noodle soup break. The final climb to Tengboche (3,860m) is steep but incredibly rewarding. Tengboche Monastery, the largest Tibetan Buddhist monastery in the Khumbu region, sits majestically with Ama Dablam as its backdrop. Attend the evening prayer ceremony (puja) where monks chant, blow conch shells, and play traditional instruments. The sunset over the Himalayas from Tengboche is unforgettable.",
    "overnight": "Teahouse in Tengboche",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Ama Dablam close-up views", "Tengboche Monastery visit", "Evening prayer ceremony", "Sunset over the Himalayas", "Rhododendron forests"]
  },
  {
    "day": 5,
    "title": "Trek from Tengboche to Dingboche",
    "altitude": "3,860m → 4,410m",
    "distance": "11km / 5-6 hrs trek",
    "description": "Today's trek descends through beautiful rhododendron and juniper forests to Deboche, then crosses the Imja Khola River. The trail continues through Pangboche village (3,930m), one of the oldest Sherpa settlements in the Khumbu, home to a famous monastery said to contain a Yeti scalp. As you exit the forest, the landscape opens into the vast, alpine Imja Valley with stunning views of Ama Dablam towering above. Dingboche (4,410m) is a beautiful Sherpa village surrounded by stone-walled potato fields and dramatic mountain scenery including Lhotse, Island Peak, and Ama Dablam. This is a key acclimatization point before attempting Kongma La Pass - the highest of the three passes at 5,535m.",
    "overnight": "Teahouse in Dingboche",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Pangboche Monastery (Yeti scalp)", "Imja Valley alpine landscape", "Ama Dablam panorama", "Island Peak views", "Sherpa farming community"]
  },
  {
    "day": 6,
    "title": "Acclimatization Day in Dingboche",
    "altitude": "4,410m",
    "distance": "Optional hike to Nagarjun Hill (5,100m)",
    "description": "A second crucial rest day for proper acclimatization before attempting Kongma La Pass (5,535m) - the highest of the three passes. Today's recommended activity is the hike to Nagarjun Hill (also known as Nangkartshang Peak at 5,100m). This 3-4 hour round-trip climb offers spectacular 360-degree views of Makalu (8,485m - the world's fifth highest), Lhotse, Nuptse, Ama Dablam, Island Peak, and the entire Imja Valley. The climb is steep but incredibly rewarding, helping you acclimatize more effectively for the altitude above 5,000m. After lunch, you can explore Dingboche's ancient Buddhist monastery, visit local yak herding families, or simply rest. Your guide will monitor your oxygen saturation and ensure you're properly hydrated for the challenging passes ahead.",
    "overnight": "Teahouse in Dingboche",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Nagarjun Hill hike (5,100m)", "360-degree Himalayan panorama", "Views of Mt. Makalu (8,485m)", "Island Peak and Lhotse views", "Preparation for Kongma La Pass"]
  },
  {
    "day": 7,
    "title": "Trek from Dingboche to Chhukhung",
    "altitude": "4,410m → 4,730m",
    "distance": "8km / 3-4 hrs trek",
    "description": "A short trek to Chhukhung, a small settlement nestled beneath the massive south face of Lhotse (8,516m). The trail follows the Imja Khola valley with increasingly dramatic mountain scenery. Chhukhung offers stunning, up-close views of Island Peak (6,189m), Ama Dablam (6,812m), the impressive Lhotse-Nuptse wall, and Makalu in the distance. This location serves as our base for the first and highest pass crossing - Kongma La. The afternoon is free for rest and acclimatization. Consider a short hike up the valley toward Island Peak Base Camp to further aid acclimatization. This peaceful settlement has a magical atmosphere with mountains towering on all sides.",
    "overnight": "Teahouse in Chhukhung",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Island Peak (6,189m) views", "Lhotse south face (8,516m)", "Lhotse-Nuptse wall panorama", "Chhukhung Valley", "Preparation for Kongma La Pass"]
  },
  {
    "day": 8,
    "title": "Trek from Chhukhung to Lobuche via Kongma La Pass",
    "altitude": "4,730m → 5,535m → 4,940m",
    "distance": "12km / 8-9 hrs trek",
    "description": "This is the most challenging and highest day of the entire Three Passes trek - crossing Kongma La Pass at 5,535m! Start very early (around 4-5 AM) as you ascend steeply through rocky terrain and past a frozen glacial lake. The climb is demanding with over 800m of elevation gain, but rewards with spectacular 360-degree views of Makalu (8,485m), Lhotse (8,516m), Ama Dablam (6,812m), and the Khumbu Glacier. Upon reaching the pass, celebrate your first and highest pass crossing among a sea of prayer flags. The descent follows the Khumbu Glacier moraine to Lobuche, navigating through boulder fields and glacial terrain. This is a true mountaineering achievement - you've conquered the highest pass of the Three Passes! Overnight at Lobuche (4,940m).",
    "overnight": "Teahouse in Lobuche",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Kongma La Pass (5,535m) - highest of three passes!", "Panoramic Himalayan views (Makalu, Lhotse, Ama Dablam)", "Frozen glacial lake crossing", "Khumbu Glacier moraine descent", "First pass complete - 2 more to go!"]
  },
  {
    "day": 9,
    "title": "Trek from Lobuche to Gorakshep & Everest Base Camp",
    "altitude": "4,940m → 5,164m → 5,364m → 5,164m",
    "distance": "13km / 7-8 hrs trek",
    "description": "After conquering Kongma La, it's time for one of the most iconic days - reaching Everest Base Camp! Start early for the 3-hour trek to Gorakshep (5,164m), the last settlement before Base Camp. Drop your bags at the teahouse, have a quick snack, then continue along the lateral moraine of the Khumbu Glacier. The trail to Everest Base Camp (5,364m) is rocky and challenging, following prayer flags and cairns across glacier rubble. As you approach Base Camp during the spring climbing season (April-May), you'll see a tent city of expedition teams preparing for summit attempts. You'll have views of the infamous Khumbu Icefall, the first major obstacle for climbers. Stand at the foot of the world's highest mountain - an incredible achievement after crossing Kongma La! Return to Gorakshep for overnight.",
    "overnight": "Teahouse in Gorakshep",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Gorakshep - highest settlement", "Everest Base Camp (5,364m)", "Khumbu Icefall views", "Expedition tent city (spring season)", "Kongma La + EBC = double achievement!"]
  },
  {
    "day": 10,
    "title": "Kala Patthar Sunrise & Trek to Dzongla",
    "altitude": "5,164m → 5,545m → 4,830m",
    "distance": "15km / 8-9 hrs trek",
    "description": "The most spectacular morning of the entire Three Passes trek! Wake at 4 AM for the challenging pre-dawn hike to Kala Patthar (5,545m) - meaning 'black rock' in Nepali. The 2-hour steep climb in the dark is difficult, but the reward is beyond words. Watch the sunrise paint Mount Everest (8,848m) in golden and pink light - the closest you'll ever be to the world's highest peak without climbing it. From Kala Patthar, you get the most unobstructed, face-on view of Everest, plus Nuptse, Changtse (7,580m), and Lhotse. After photography and celebrations, descend to Gorakshep for breakfast, then traverse to Dzongla via the Chola Tso Lake. The trail offers incredible views of Cholatse (6,440m) and Tawache (6,542m) peaks. Overnight at Dzongla, preparing for Cho La Pass tomorrow.",
    "overnight": "Teahouse in Dzongla",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Kala Patthar sunrise (5,545m)", "Best unobstructed Everest view", "Golden Himalayan sunrise", "Views of Cholatse and Tawache", "Preparation for Cho La Pass"]
  },
  {
    "day": 11,
    "title": "Trek from Dzongla to Thagnak via Cho La Pass",
    "altitude": "4,830m → 5,420m → 4,700m",
    "distance": "10km / 7-8 hrs trek",
    "description": "Today we cross the second of the three passes - the famous Cho La Pass at 5,420m! Start early as the trail ascends steeply toward the pass. The final approach involves scrambling over boulders and a glacier crossing that may require crampons depending on season and conditions. The pass offers stunning, up-close views of Cholatse (6,440m), Ama Dablam (6,812m), and the surrounding peaks, with prayer flags fluttering in the wind. This is the most technically challenging of the three passes due to the glacier traverse. The descent is steep and rocky, requiring careful footing. You'll pass by the beautiful Cho La Lake before reaching Thagnak (4,700m), a small settlement beside a glacial lake. You've now conquered two of the three passes - only Renjo La remains!",
    "overnight": "Teahouse in Thagnak",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Cho La Pass crossing (5,420m) - second pass!", "Glacier traverse (crampons may be needed)", "Views of Cholatse and Ama Dablam", "Cho La Lake", "2 passes complete - 1 to go!"]
  },
  {
    "day": 12,
    "title": "Trek from Thagnak to Gokyo",
    "altitude": "4,700m → 4,790m",
    "distance": "6km / 3-4 hrs trek",
    "description": "A shorter, easier day following the Ngozumpa Glacier, the largest glacier in Nepal. The trail offers incredible views of Cho Oyu (8,188m - the world's 6th highest peak) as you walk along the glacier's lateral moraine. Suddenly, the turquoise waters of the first Gokyo Lake (Longpongo) appear - a breathtaking sight that will stop you in your tracks. You continue past the second lake (Taujung Tsho) and finally reach the third and largest lake (Dudh Pokhari), where Gokyo village is nestled between the turquoise waters and the massive Ngozumpa Glacier. The views of Cho Oyu and Gyachung Kang from Gokyo are absolutely spectacular. This is a recovery day after Cho La Pass, preparing for the final pass - Renjo La.",
    "overnight": "Teahouse in Gokyo",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Ngozumpa Glacier - Nepal's largest glacier", "First Gokyo Lake (Longpongo)", "Second lake Taujung Tsho", "Third lake Dudh Pokhari", "Recovery and preparation for Renjo La"]
  },
  {
    "day": 13,
    "title": "Acclimatization Day - Gokyo Ri Hike",
    "altitude": "4,790m → 5,357m → 4,790m",
    "distance": "5km / 4-5 hrs hike",
    "description": "Before tackling the final Renjo La Pass, today you climb Gokyo Ri (5,357m) - one of the best viewpoints in the entire Everest region. Wake before dawn for the challenging but incredibly rewarding hike. The climb is steep (about 2-3 hours) but every step is worth it. From the summit, witness a 360-degree panorama that includes four of the world's six highest peaks: Everest (8,848m), Lhotse (8,516m), Makalu (8,485m), and Cho Oyu (8,188m). Below you, the incredible turquoise Gokyo Lakes shimmer, and the massive Ngozumpa Glacier spreads out like a frozen river. After sunrise photography and celebration, descend to Gokyo for breakfast. The afternoon is free to explore the fourth and fifth Gokyo Lakes (just 1-2 hours round trip) or relax by the turquoise waters. This also serves as excellent acclimatization for Renjo La.",
    "overnight": "Teahouse in Gokyo",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Gokyo Ri sunrise (5,357m)", "360-degree Himalayan panorama", "Everest, Lhotse, Makalu, Cho Oyu views", "Four of world's six highest peaks", "Preparation for final Renjo La Pass"]
  },
  {
    "day": 14,
    "title": "Trek from Gokyo to Lungdhen via Renjo La Pass",
    "altitude": "4,790m → 5,360m → 4,380m",
    "distance": "10km / 6-7 hrs trek",
    "description": "The final pass - Renjo La at 5,360m! Today you complete the legendary Everest Three Passes circuit. Start early as the trail climbs steeply out of Gokyo. The ascent offers spectacular, ever-changing views back over the turquoise Gokyo Lakes and the Ngozumpa Glacier. At the summit of Renjo La, prayer flags flutter in the wind with a breathtaking panorama of Everest, Lhotse, Makalu, Cho Oyu, and the entire Khumbu region stretching before you. This pass offers arguably the most beautiful mountain scenery of all three. Take time to celebrate - you've now conquered Kongma La (5,535m), Cho La (5,420m), and Renjo La (5,360m)! The descent leads into the remote, peaceful Bhote Koshi Valley, a pristine region with few trekkers and traditional Sherpa settlements. Overnight at Lungdhen (4,380m).",
    "overnight": "Teahouse in Lungdhen",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Renjo La Pass (5,360m) - third and final pass!", "Views back over Gokyo Lakes", "Everest, Lhotse, Makalu, Cho Oyu panorama", "Remote Bhote Koshi Valley", "Three Passes complete - legendary achievement!"]
  },
  {
    "day": 15,
    "title": "Trek from Lungdhen to Thame",
    "altitude": "4,380m → 3,800m",
    "distance": "10km / 5-6 hrs trek",
    "description": "A beautiful descent through the scenic Bhote Koshi Valley, following the river downstream. You'll pass through traditional Sherpa villages with ancient stone walls, mani stones, and chortens. Thame is an important historical village, once a major trading post with Tibet. Visit the famous Thame Monastery, one of the oldest in the Khumbu region, perched dramatically on a hillside. This village is the birthplace of many famous Sherpa climbers, including Tenzing Norgay's cousin and multiple Everest summiteers. Explore the charming settlement and enjoy the peaceful mountain atmosphere. You've officially completed all three high passes - today is for celebration and reflection on your incredible achievement.",
    "overnight": "Teahouse in Thame",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Bhote Koshi Valley descent", "Traditional Sherpa villages", "Thame Monastery visit", "Historic Tibet trading post", "Three Passes celebration"]
  },
  {
    "day": 16,
    "title": "Trek from Thame to Namche Bazaar",
    "altitude": "3,800m → 3,440m",
    "distance": "12km / 5-6 hrs trek",
    "description": "Following the trail back toward Namche Bazaar, we pass through the beautiful Sherpa villages of Thamo and Phurte, with stunning views of Kongde Ri and the surrounding peaks. The trail rejoins the main Everest Base Camp route before arriving at Namche Bazaar. Check into your teahouse and celebrate your legendary achievement - you have successfully crossed all three high passes of the Everest region: Kongma La (5,535m), Cho La (5,420m), and Renjo La (5,360m). Celebrate with hot showers (worth every rupee), laundry services, and Namche's famous bakeries and cafes. Enjoy a well-deserved dinner and drink - you've earned it!",
    "overnight": "Teahouse in Namche Bazaar",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Return to Namche Bazaar", "Kongde Ri mountain views", "Three Passes completion celebration", "Hot shower reward", "Namche bakeries and celebrations"]
  },
  {
    "day": 17,
    "title": "Trek from Namche Bazaar to Lukla",
    "altitude": "3,440m → 2,840m",
    "distance": "18km / 6-7 hrs trek",
    "description": "Your final day of trekking follows the Dudh Koshi River as you make your way back to Lukla. The trail is mostly downhill, passing through Monjo (where you exit Sagarmatha National Park) and crossing familiar suspension bridges including the famous Hillary Bridge. The lush forests, rushing river, and small Sherpa villages create a peaceful farewell to the Khumbu region. Arrive in Lukla by late afternoon. Check into your teahouse for the final time and attend a farewell ceremony with your guides and porters. This is your chance to thank them with tips and appreciation for safely guiding you across three of the world's highest trekking passes. Enjoy a celebratory dinner in Lukla, reflecting on your incredible journey crossing Kongma La, Cho La, and Renjo La.",
    "overnight": "Teahouse in Lukla",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Final day of Three Passes trek", "Sagarmatha National Park exit", "Farewell ceremony with team", "Three Passes achievement celebration", "Lukla arrival and packing"]
  },
  {
    "day": 18,
    "title": "Flight from Lukla to Kathmandu",
    "altitude": "2,840m → 1,400m",
    "distance": "35 min flight",
    "description": "Early morning wake-up for your scenic return flight from Lukla to Kathmandu. The 35-minute flight offers final aerial views of the Himalayan range - a last glimpse of Everest, Lhotse, Makalu, Cho Oyu, and the peaks you've been trekking among. Upon arrival at Tribhuvan International Airport, our representative will transfer you to your hotel in Thamel. You've earned a well-deserved hot shower, clean clothes, and the comfort of a real bed. The remainder of your day is free to explore Kathmandu - shop for souvenirs in Thamel, visit a spa for a much-needed massage, or simply rest and reflect on your journey. Celebrate completing one of the world's most challenging and rewarding treks - the Everest Three Passes Trek: Kongma La (5,535m), Cho La (5,420m), and Renjo La (5,360m). This is an elite achievement that few trekkers accomplish!",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast",
    "highlights": ["Scenic Lukla to Kathmandu flight", "Final aerial Himalayan views", "Kongma La + Cho La + Renjo La achievement", "Thamel souvenir shopping", "Farewell to the Himalayas"]
  }
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "3 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "All meals during the trek (breakfast, lunch, dinner)",
  "Best available teahouse/lodge accommodation during trek",
  "Experienced English-speaking trekking guide (government licensed)",
  "Assistant guide for groups of 4 or more (essential for pass safety)",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Round-trip flights Kathmandu - Lukla - Kathmandu",
  "Sagarmatha National Park Permit",
  "Khumbu Rural Municipality Permit (TIMS card)",
  "All ground transportation as per itinerary",
  "First aid medical kit including pulse oximeter and portable oxygen",
  "Sleeping bag and down jacket for high altitude (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Everest Three Passes region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Crampons and microspikes for glacier crossings (as needed)",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude trekking up to 5,600m & helicopter evacuation)",
  "Personal trekking gear and equipment",
  "Meals in Kathmandu (except welcome dinner and breakfasts)",
  "Bottled/mineral water during trek (purification tablets provided)",
  "Hot showers and battery charging at lodges ($3-6 per use)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, bar bills, souvenirs)",
  "Tips and gratuities for guides and porters (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
];

const gallery = [
  
  {
    src: "/images/used/3-passes-1.webp",
    alt: "Three Passes Trail",
    caption: "Trail to Kongma La",
  },
  {
    src: "/images/used/everest-3.webp",
    alt: "Everest from Kala Patthar",
    caption: "Everest from Kala Patthar",
  },
  {
    src: "/images/used/gokyo-1.webp",
    alt: "Gokyo Lakes",
    caption: "Gokyo Lakes from Renjo La",
  },
];

export default function EverestThreePassesTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  
  // Trek name constant for auto-fill functionality
  const trekName = "Everest Three Passes Trek";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Everest Three Passes Trek - Himkala Adventure");
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
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop"
            alt="Everest Three Passes Trek"
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
                <MapPin className="w-3 h-3 mr-1" /> Everest Region
              </Badge>
              <Badge className="bg-red-100 text-red-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Flag className="w-3 h-3 mr-1" /> Very Strenuous
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Mountain className="w-3 h-3 mr-1" /> Three Passes
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              EVEREST <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                THREE PASSES TREK
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              The ultimate Everest challenge - cross Kongma La, Cho La, and Renjo La, 
              trek to Everest Base Camp, Gokyo Lakes, and Kala Patthar in one epic circuit.
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
                <div className="text-xs text-slate-400 line-through">$2,250</div>
                <div className="text-lg font-bold text-[#0f2940]">$1,950</div>
              </div>
              <Link href={`/contact?trek=${encodeURIComponent(trekName)}`}>
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
                        <span className="text-white/50 text-sm line-through">$2,250</span>
                        <div className="text-3xl md:text-4xl font-bold text-white mt-1">$1,950</div>
                        <span className="text-white/60 text-sm">per person</span>
                        <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $300</Badge>
                      </div>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>18 Days / 17 Nights</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Best: Mar-May, Sep-Nov</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Group Size: 2-8</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Tent className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Teahouse Accommodation</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Utensils className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>All Meals Included</span>
                        </div>
                      </div>

                      {/* Book Now Button */}
                      <Link href={`/contact?trek=${encodeURIComponent(trekName)}`}>
                        <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-xs md:text-base">
                          <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Book This Trek
                        </Button>
                      </Link>
                      
                      {/* WhatsApp Now Button */}
                      <a 
                        href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about the ${trekName}.`)}`}
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
                          <span className="text-slate-500">Start/End</span>
                          <span className="font-medium text-[#0f2940]">Kathmandu</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Trek Start/End</span>
                          <span className="font-medium text-[#0f2940]">Lukla</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Highest Pass</span>
                          <span className="font-medium text-[#0f2940]">Kongma La (5,535m)</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Cho La Pass</span>
                          <span className="font-medium text-[#0f2940]">5,420m</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Renjo La Pass</span>
                          <span className="font-medium text-[#0f2940]">5,360m</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2">
                          <span className="text-slate-500">Trekking Days</span>
                          <span className="font-medium text-[#0f2940]">16 Days</span>
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
                    The <strong>Everest Three Passes Trek</strong> is the ultimate adventure in the Khumbu region, 
                    designed for experienced trekkers seeking the complete Everest experience. This challenging 
                    circuit crosses three high-altitude passes - <strong>Kongma La (5,535m), Cho La (5,420m), and 
                    Renjo La (5,360m)</strong> - while visiting Everest Base Camp, Kala Patthar, and the stunning 
                    Gokyo Lakes.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    Unlike the standard Everest Base Camp Trek which follows an "in-and-out" route, the Three Passes 
                    Trek creates a complete circuit through four major valleys: Imja Khola, Khumbu, Gokyo, and Bhote 
                    Koshi. This allows trekkers to experience the full geographical diversity of the 
                    Sagarmatha National Park, from lush rhododendron forests to barren glacial moraines and 
                    challenging glacier crossings.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    Each pass offers unique perspectives: <strong>Kongma La</strong> provides views of Makalu and 
                    Lhotse, <strong>Cho La</strong> features a thrilling glacier traverse between Cholatse and 
                    Lobuche peaks, and <strong>Renjo La</strong> rewards with the most spectacular panorama of 
                    Everest reflected in the turquoise Gokyo Lakes. This trek is a true test of 
                    endurance and mental resilience, but the rewards are unmatched - a lifetime of memories 
                    standing atop the world's highest mountain passes.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Trek Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Cross all three high passes: Kongma La (5,535m), Cho La (5,420m), Renjo La (5,360m)",
                    "Everest Base Camp (5,364m) and Kala Patthar sunrise (5,545m)",
                    "Turquoise Gokyo Lakes and Gokyo Ri panorama (5,357m)",
                    "Complete circuit through four major Khumbu valleys",
                    "Ngozumpa Glacier - Nepal's largest glacier",
                    "Thrilling glacier crossing on Cho La Pass",
                    "Remote Bhote Koshi Valley and Thame village",
                    "Views of four 8,000m peaks: Everest, Lhotse, Makalu, Cho Oyu",
                    "Tengboche Monastery and Sherpa culture",
                    "Less crowded than standard EBC route",
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
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Best Time to Trek</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Mar - May)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Warmer temperatures, blooming rhododendrons, and stable weather. Pass conditions are good 
                        but some snow may remain on Cho La glacier.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Excellent</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Snowflake className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Autumn (Sep - Nov)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        The most reliable season with crystal-clear skies, stable weather, and excellent pass 
                        conditions. Perfect for photography and the best mountain views.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
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
                  <h4 className="font-bold text-amber-800 mb-1 md:mb-2 text-xs md:text-base">Important Information</h4>
                  <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                    <li>• <strong>Travel insurance is mandatory</strong> and must cover high altitude trekking up to 5,600m including glacier crossings and helicopter evacuation.</li>
                    <li>• This is a <strong>very strenuous trek</strong> requiring excellent physical fitness and preferably previous high-altitude experience.</li>
                    <li>• Pass conditions vary by season - crampons/microspikes provided for glacier sections on Cho La.</li>
                    <li>• We recommend <strong>3-6 months of physical preparation</strong> including cardio, strength training, and practice hikes with a weighted pack.</li>
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
                      q: "How difficult is the Three Passes Trek compared to EBC?",
                      a: "The Three Passes Trek is significantly more difficult than the standard Everest Base Camp Trek. It requires crossing three passes above 5,300m, involves glacier traverses, and spends more days at extreme altitude. Good physical fitness, previous trekking experience, and proper acclimatization are essential.",
                    },
                    {
                      q: "Do I need technical climbing experience?",
                      a: "No technical climbing experience is required, but you should be comfortable walking on snow and ice. The Cho La Pass involves a glacier crossing where we provide crampons or microspikes as needed. Our experienced guides will assist and ensure safety throughout.",
                    },
                    {
                      q: "What is the success rate for completing all three passes?",
                      a: "With proper acclimatization and good weather, most well-prepared trekkers complete all three passes. The key is following the itinerary, listening to your guide, and not pushing too hard. Our acclimatization schedule (days at Namche, Dingboche, and Chhukhung) maximizes your chances of success.",
                    },
                    {
                      q: "Which pass is the most challenging?",
                      a: "Kongma La (5,535m) is generally considered the most challenging due to its altitude and rocky terrain. Cho La is technically demanding due to the glacier crossing. Renjo La is often described as the most scenic but less technically difficult. Each presents unique challenges.",
                    },
                    {
                      q: "Can we see Everest from all three passes?",
                      a: "Yes! Each pass offers unique perspectives of Everest and the surrounding peaks. Renjo La provides the classic view of Everest reflected in Gokyo Lakes. Kongma La offers views of Makalu and Lhotse. Cho La has stunning views of Cholatse and Ama Dablam.",
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