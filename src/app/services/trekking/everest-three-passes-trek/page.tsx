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
  Flag,
  Droplets,
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
    alt: "Kongma La Pass trail - the highest of the Everest Three Passes at 5,535m with stunning Himalayan views in Nepal",
    caption: "Trail to Kongma La",
  },
  {
    src: "/images/used/everest-3.webp",
    alt: "Mount Everest from Kala Patthar - the world's highest mountain viewed at sunrise on the Everest Three Passes trek in Nepal",
    caption: "Everest from Kala Patthar",
  },
  {
    src: "/images/used/gokyo-1.webp",
    alt: "Gokyo Lakes from Renjo La Pass - turquoise glacial lakes with Everest and the Himalayas in the background on the Three Passes trek",
    caption: "Gokyo Lakes from Renjo La",
  },
];

export default function EverestThreePassesTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);

  const trekName = "Everest Three Passes Trek";
  const canonicalUrl = "https://www.himkalaadventure.com/everest-three-passes-trek";
  const pageTitle = "Everest Three Passes Trek - Himkala Adventure";
  const pageDescription = "Everest Three Passes Trek: Cross Kongma La (5,535m), Cho La (5,420m), and Renjo La (5,360m). The ultimate Everest challenge with EBC, Gokyo Lakes, and Kala Patthar. Book now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/3-passes-1.webp";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Everest Three Passes Trek - Himkala Adventure")}`;
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
                    <span className="text-[#cf6943]">Three Passes Trek</span>
                  </h1>
                </div>
                <div className="max-w-full md:max-w-[280px]">
                  <p className="text-sm leading-6 text-[#66706d]">
                    The ultimate Everest challenge - cross Kongma La, Cho La, and Renjo La, 
                    trek to Everest Base Camp, Gokyo Lakes, and Kala Patthar in one epic circuit.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                      <Flag className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      Very Strenuous
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      <Mountain className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      Three Passes
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      5,535m
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
                src="/images/used/3-passes-1.webp"
                alt="Everest Three Passes Trek - crossing high Himalayan passes at over 5,300m in Nepal's Everest region with stunning mountain views"
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
                  $1,950 / person
                </span>
              </div>
            </figure>
          </div>

          {/* Quick Stats - Free Walking Tour Style */}
          <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
              {[
                { label: "Duration", value: "18 Days / 17 Nights" },
                { label: "Group Size", value: "2-8 people" },
                { label: "Max Altitude", value: "5,545m" },
                { label: "Passes", value: "3 High Passes" },
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
                  The <strong className="text-[#14383b]">Everest Three Passes Trek</strong> is the ultimate 
                  adventure in the Khumbu region, designed for experienced trekkers seeking the complete Everest 
                  experience. This challenging circuit crosses three high-altitude passes - 
                  <strong className="text-[#14383b]"> Kongma La (5,535m), Cho La (5,420m), and Renjo La (5,360m)</strong> 
                  - while visiting Everest Base Camp, Kala Patthar, and the stunning Gokyo Lakes.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  Unlike the standard Everest Base Camp Trek which follows an "in-and-out" route, the Three Passes 
                  Trek creates a complete circuit through four major valleys: Imja Khola, Khumbu, Gokyo, and Bhote 
                  Koshi. This allows trekkers to experience the full geographical diversity of the 
                  Sagarmatha National Park, from lush rhododendron forests to barren glacial moraines and 
                  challenging glacier crossings.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  Each pass offers unique perspectives: <strong className="text-[#14383b]">Kongma La</strong> 
                  provides views of Makalu and Lhotse, <strong className="text-[#14383b]">Cho La</strong> 
                  features a thrilling glacier traverse between Cholatse and Lobuche peaks, and 
                  <strong className="text-[#14383b]"> Renjo La</strong> rewards with the most spectacular 
                  panorama of Everest reflected in the turquoise Gokyo Lakes. This trek is a true test of 
                  endurance and mental resilience, but the rewards are unmatched - a lifetime of memories 
                  standing atop the world's highest mountain passes.
                </p>
              </article>

              <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
                <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
                <strong>Important:</strong> Travel insurance is mandatory and must cover high altitude trekking 
                up to 5,600m including glacier crossings and helicopter evacuation. This is a very strenuous 
                trek requiring excellent physical fitness.
              </div>
            </div>
          </section>

          {/* Highlights - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Trek Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                    Warmer temperatures, blooming rhododendrons, and stable weather. Pass conditions are good 
                    but some snow may remain on Cho La glacier.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
                </div>
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Snowflake className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Autumn (Sep - Nov)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    The most reliable season with crystal-clear skies, stable weather, and excellent pass 
                    conditions. Perfect for photography and the best mountain views.
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
                A visual journey through the ultimate Everest challenge - three high passes, turquoise lakes, and the world's highest peaks.
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready to Conquer the Three Passes?</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Book your Everest Three Passes Trek today and achieve the ultimate Everest challenge - crossing Kongma La, Cho La, and Renjo La in one epic journey.
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