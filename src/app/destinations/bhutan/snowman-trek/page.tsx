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
  MountainIcon,
  ThermometerSnowflake,
  ShieldAlert,
  Trophy,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Paro",
    altitude: "2,280m",
    distance: "-",
    description: "Welcome to Bhutan! Upon arrival at Paro International Airport, you'll be greeted by our representative with a traditional Bhutanese scarf (khata) welcome. After check-in at your hotel, receive a comprehensive trek briefing where we'll discuss the challenging route ahead, check your gear, and handle permit arrangements. Evening visit to the National Museum (Ta Dzong) and Paro Rinpung Dzong. Final preparations for the legendary Snowman Trek begin.",
    overnight: "Hotel in Paro",
    meals: "Dinner",
    highlights: ["Airport pickup", "Traditional welcome", "Trek briefing", "Gear check", "Paro town exploration"],
  },
  {
    day: 2,
    title: "Paro to Shana Zampa",
    altitude: "2,280m → 2,870m",
    distance: "17km / 5-6 hrs drive/trek",
    description: "After breakfast, drive approximately 1 hour to the trek start point at Drukgyel Dzong, a ruined fortress with historical significance. The trek begins here, following the Paro River upstream through beautiful valleys dotted with traditional villages and farmland. The trail passes through rice paddies and apple orchards before entering dense forest. You'll cross several suspension bridges and pass small settlements. Arrive at Shana Zampa, your first campsite in a lovely forest clearing by the river. The adventure begins!",
    overnight: "Camping at Shana Zampa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Drukgyel Dzong visit", "Paro River valley", "Suspension bridges", "Traditional villages", "First campsite"],
  },
  {
    day: 3,
    title: "Shana Zampa to Thangthangkha",
    altitude: "2,870m → 3,610m",
    distance: "20km / 6-7 hrs",
    description: "Today's trek continues following the Paro River upstream. The trail gradually ascends through beautiful mixed forests of pine, fir, and rhododendron. You'll pass several army outposts as you approach the Tibetan border region. The valley narrows and the scenery becomes more dramatic with towering cliffs and waterfalls. Cross the river several times on wooden bridges. Arrive at Thangthangkha, a grassy campsite surrounded by forest. The views of surrounding peaks begin to appear.",
    overnight: "Camping at Thangthangkha",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Paro River valley", "Mixed forests", "Waterfalls", "Tibetan border approach", "Mountain views"],
  },
  {
    day: 4,
    title: "Thangthangkha to Jangothang",
    altitude: "3,610m → 4,080m",
    distance: "19km / 6-7 hrs",
    description: "This is one of the most spectacular days of the trek. The trail continues ascending through juniper and rhododendron forests, then opens into alpine meadows with stunning views of Mount Jomolhari (7,314m) appearing ahead. You'll pass yak herder camps with their traditional tents and grazing yaks. The valley widens as you approach Jangothang, also known as 'Jomolhari Base Camp'. The campsite is in a spectacular location with Mount Jomolhari towering directly ahead and beautiful mountain views in all directions.",
    overnight: "Camping at Jangothang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["First views of Mount Jomolhari", "Yak herder camps", "Alpine meadows", "Jomolhari Base Camp", "Spectacular mountain scenery"],
  },
  {
    day: 5,
    title: "Acclimatization Day at Jangothang",
    altitude: "4,080m",
    distance: "Optional hikes",
    description: "A crucial rest and acclimatization day at one of the most beautiful campsites in the Himalayas. Several optional hikes are available: hike to the ridge behind camp for breathtaking views of Mount Jomolhari, Jichu Drake, and Tserim Kang; visit Tshophu Lake, a beautiful alpine lake about 2 hours away; or explore the nearby yak herder settlements. This day is essential for preparing your body for the high passes ahead. Enjoy the spectacular mountain scenery and photograph the peaks at different times of day.",
    overnight: "Camping at Jangothang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Rest and acclimatization", "Optional ridge hike", "Tshophu Lake visit", "Yak herder settlements", "Mountain photography"],
  },
  {
    day: 6,
    title: "Jangothang to Lingshi",
    altitude: "4,080m → 4,150m (via 4,830m pass)",
    distance: "18km / 7-8 hrs",
    description: "Today you cross the Nyile La Pass at 4,830m - your first major challenge. Start early for the challenging but rewarding climb. The trail ascends gradually at first, then becomes steeper as you approach the pass. Prayer flags mark the summit, where you'll be rewarded with spectacular 360-degree views of Mount Jomolhari, Jichu Drake, and the surrounding Himalayas. The descent to Lingshi is long but scenic, passing yak pastures and offering views of Lingshi Dzong perched on a hill. Camp near the dzong in a beautiful valley.",
    overnight: "Camping at Lingshi",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Nyile La Pass (4,830m)", "360-degree Himalayan views", "Lingshi Dzong", "Yak pastures", "First major pass crossing"],
  },
  {
    day: 7,
    title: "Lingshi to Chebisa",
    altitude: "4,150m → 3,880m",
    distance: "10km / 4-5 hrs",
    description: "A shorter day to allow recovery after yesterday's pass crossing. The trail descends gradually through beautiful valleys and traditional villages. You'll pass several chortens and mani walls. Chebisa is a charming village with stone houses and a beautiful waterfall nearby. Visit the village and interact with locals. The campsite is in a lovely setting with views of the surrounding mountains. Optional walk to the waterfall for photography.",
    overnight: "Camping at Chebisa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Recovery day", "Traditional villages", "Chebisa waterfall", "Local interactions", "Scenic campsite"],
  },
  {
    day: 8,
    title: "Chebisa to Shomuthang",
    altitude: "3,880m → 4,260m (via 4,460m pass)",
    distance: "17km / 6-7 hrs",
    description: "Today you cross the Gombu La Pass at 4,460m. The trail climbs steadily through juniper and rhododendron forests, then opens into alpine meadows. From the pass, enjoy views of the surrounding peaks and valleys. The descent to Shomuthang is through beautiful alpine scenery. You may encounter blue sheep and other wildlife. Shomuthang campsite is in a valley near a stream, surrounded by mountains.",
    overnight: "Camping at Shomuthang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Gombu La Pass (4,460m)", "Alpine meadows", "Blue sheep sightings", "Mountain views", "Remote wilderness"],
  },
  {
    day: 9,
    title: "Shomuthang to Robluthang",
    altitude: "4,260m → 4,160m (via 4,820m pass)",
    distance: "18km / 7-8 hrs",
    description: "Cross the Jari La Pass at 4,820m - one of the higher passes on the trek. The climb is long and steep but rewards you with spectacular views of the Himalayas. Prayer flags mark the summit. The descent is equally long, passing through remote valleys and yak pastures. Robluthang campsite is in a wild, remote valley surrounded by mountains. This is true wilderness camping at its finest.",
    overnight: "Camping at Robluthang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Jari La Pass (4,820m)", "Remote wilderness", "Yak pastures", "Himalayan panoramas", "True wilderness camping"],
  },
  {
    day: 10,
    title: "Robluthang to Limithang",
    altitude: "4,160m → 4,140m (via 5,000m pass)",
    distance: "19km / 7-8 hrs",
    description: "Today you cross the Shinje La Pass at 5,000m - one of the highest points of the entire trek. This is a challenging day that requires an early start. The climb is long and demanding, but the views from the top are unforgettable - a sea of Himalayan peaks stretching in all directions. The pass is marked with prayer flags and offers a true sense of achievement. The descent to Limithang is long but scenic. Camp in a remote valley surrounded by towering peaks.",
    overnight: "Camping at Limithang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Shinje La Pass (5,000m)", "Highest points of the trek", "Sea of Himalayan peaks", "True sense of achievement", "Remote camping"],
  },
  {
    day: 11,
    title: "Limithang to Laya",
    altitude: "4,140m → 3,840m",
    distance: "15km / 5-6 hrs",
    description: "A welcome descent to Laya, one of the highest permanent settlements in Bhutan. The trail descends through beautiful forests and meadows, with increasingly lush vegetation as you lose altitude. Laya is a unique village inhabited by the Layap people, known for their distinctive conical bamboo hats and colorful costumes. Arrive at the Laya village and check into a simple lodge (a welcome change from camping!). Hot showers and a chance to do laundry. Explore the village and interact with the friendly Layap people.",
    overnight: "Lodge in Laya",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Arrival in Laya village", "Layap people and culture", "Hot shower", "Village exploration", "Rest day preparation"],
  },
  {
    day: 12,
    title: "Rest Day in Laya",
    altitude: "3,840m",
    distance: "Rest day",
    description: "A well-deserved rest day in the fascinating village of Laya. Explore the village, visit the local school if in session, and learn about the unique culture of the Layap people. Optional hikes to nearby viewpoints offer beautiful valley views. This is also an opportunity to resupply and prepare for the next challenging section of the trek. Enjoy the hospitality of the local people and perhaps try some local food.",
    overnight: "Lodge in Laya",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Laya village exploration", "Layap culture", "Local school visit", "Rest and recovery", "Preparation for next section"],
  },
  {
    day: 13,
    title: "Laya to Rhoduphu",
    altitude: "3,840m → 4,160m (via 4,960m pass)",
    distance: "19km / 7-8 hrs",
    description: "Leave Laya and begin the next challenging section. Today you cross the Tsomo La Pass at 4,960m. The climb is long and demanding, but the views from the top are spectacular. The pass offers panoramic views of the surrounding peaks, including Mount Jomolhari in the distance. The descent to Rhoduphu is through remote valleys. The campsite is in a wild setting near a small lake.",
    overnight: "Camping at Rhoduphu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Tsomo La Pass (4,960m)", "Panoramic mountain views", "Remote valleys", "Alpine lake", "Wilderness camping"],
  },
  {
    day: 14,
    title: "Rhoduphu to Woche",
    altitude: "4,160m → 4,140m",
    distance: "16km / 5-6 hrs",
    description: "Today's trek is relatively gentle, following the valley through beautiful alpine scenery. You'll pass yak herder camps and enjoy views of the surrounding peaks. Woche is a small village with a few houses and a monastery. Camp near the village and enjoy the peaceful setting. This is a good day for photography and relaxation after the challenging pass crossings.",
    overnight: "Camping at Woche",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Gentle trekking day", "Yak herder camps", "Woche village", "Mountain monastery", "Relaxed pace"],
  },
  {
    day: 15,
    title: "Woche to Lhedi",
    altitude: "4,140m → 3,700m",
    distance: "17km / 6-7 hrs",
    description: "The trail descends gradually through beautiful forests and valleys. You'll pass several traditional villages and chortens. The vegetation becomes thicker as you lose altitude. Lhedi is a small village in a beautiful valley. Camp near the village and enjoy the surroundings. This is a good opportunity to interact with local people and learn about their way of life.",
    overnight: "Camping at Lhedi",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Forest descent", "Traditional villages", "Local interactions", "Scenic valley", "Peaceful camping"],
  },
  {
    day: 16,
    title: "Lhedi to Thanza",
    altitude: "3,700m → 4,100m",
    distance: "17km / 6-7 hrs",
    description: "Today you enter the beautiful Phobjikha Valley region. The trail follows the river upstream through increasingly dramatic scenery. Thanza is the main settlement in this region, with several houses and a monastery. You'll notice the unique architecture and way of life. Camp near the village and prepare for the next challenging section.",
    overnight: "Camping at Thanza",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Phobjikha Valley", "Scenic river valley", "Thanza village", "Local architecture", "Mountain views"],
  },
  {
    day: 17,
    title: "Rest Day at Thanza",
    altitude: "4,100m",
    distance: "Rest day",
    description: "Another well-deserved rest day in this beautiful region. Explore the surrounding area, visit the local monastery, or simply relax and enjoy the mountain scenery. This rest day is crucial before the most challenging section of the trek, which includes the highest pass. Take the opportunity to rest, do laundry, and prepare mentally and physically for the days ahead.",
    overnight: "Camping at Thanza",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Rest and recovery", "Monastery visit", "Scenic exploration", "Preparation for highest pass", "Mountain relaxation"],
  },
  {
    day: 18,
    title: "Thanza to Danji",
    altitude: "4,100m → 4,400m",
    distance: "12km / 4-5 hrs",
    description: "A shorter day to position yourself for the highest pass. The trail climbs gradually through alpine meadows and yak pastures. The scenery becomes more dramatic as you gain altitude. Danji is a small summer settlement used by yak herders. Camp in this remote location, surrounded by towering peaks. The thin air and stark beauty remind you that you're in one of the most remote places on Earth.",
    overnight: "Camping at Danji",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Gradual ascent", "Yak herder settlement", "Remote camping", "Preparation for highest pass", "Dramatic scenery"],
  },
  {
    day: 19,
    title: "Danji to Tso Chena",
    altitude: "4,400m → 5,000m (via 5,320m pass)",
    distance: "12km / 7-8 hrs",
    description: "The biggest day of the entire trek - crossing the Gangla Karchung La Pass at 5,320m, the highest point of the Snowman Trek. This is an extremely challenging day that requires an early start (3-4 AM). The climb is long, steep, and demanding, with thin air making every step an effort. But the reward from the top is beyond words - a 360-degree panorama of the highest peaks in Bhutan, including Mount Jomolhari, Jichu Drake, and countless others. Prayer flags flutter in the wind at this incredible altitude. The descent to Tso Chena is long and careful, passing near beautiful alpine lakes. Camp near the lakes, utterly exhausted but filled with an incredible sense of achievement.",
    overnight: "Camping at Tso Chena",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Gangla Karchung La (5,320m) - highest pass", "Ultimate challenge", "360-degree Himalayan panorama", "Alpine lakes", "Incredible sense of achievement"],
  },
  {
    day: 20,
    title: "Tso Chena to Jichu Dramo",
    altitude: "5,000m → 5,100m",
    distance: "8km / 4-5 hrs",
    description: "A short day to recover from yesterday's epic effort. The trail follows the high-altitude valley, passing more alpine lakes and offering continuing mountain views. The thin air at this altitude makes even short distances feel significant. Jichu Dramo is a high-altitude campsite near more lakes. Rest, hydrate, and give your body time to recover. The scenery is otherworldly at this altitude.",
    overnight: "Camping at Jichu Dramo",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Recovery day", "High-altitude lakes", "Otherworldly scenery", "Rest and hydration", "Mountain contemplation"],
  },
  {
    day: 21,
    title: "Jichu Dramo to Chukarpo",
    altitude: "5,100m → 4,700m (via 5,150m pass)",
    distance: "15km / 6-7 hrs",
    description: "Cross the Rinchen Zoe La Pass at 5,150m - another high pass with spectacular views. The climb is demanding but less severe than the previous days. From the pass, enjoy more breathtaking mountain panoramas. The descent to Chukarpo is gradual, passing through alpine meadows. You're now on the eastern side of the Himalayas, with the vegetation slowly beginning to change as you lose altitude.",
    overnight: "Camping at Chukarpo",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Rinchen Zoe La (5,150m)", "Eastern Himalayan views", "Alpine meadows", "Gradual descent", "Changing vegetation"],
  },
  {
    day: 22,
    title: "Chukarpo to Thampe Tso",
    altitude: "4,700m → 4,300m",
    distance: "16km / 6-7 hrs",
    description: "The trail continues descending through beautiful valleys. You'll pass more yak herder camps and enjoy the gradually thickening vegetation. Thampe Tso is a beautiful lake surrounded by mountains. Camp near the lake and enjoy the serene setting. This is a great spot for photography and reflection on the incredible journey you've undertaken.",
    overnight: "Camping at Thampe Tso",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Continuing descent", "Yak herder camps", "Thampe Tso lake", "Serene setting", "Photography opportunity"],
  },
  {
    day: 23,
    title: "Thampe Tso to Mauri Tsho",
    altitude: "4,300m → 3,900m",
    distance: "14km / 5-6 hrs",
    description: "The final days of trekking as you descend toward civilization. The trail passes through beautiful forests and meadows. You'll notice the air becoming thicker and the vegetation more lush. Mauri Tsho is another beautiful lake, your final campsite in the wilderness. Celebrate your incredible achievement with your trekking crew around the campfire one last time.",
    overnight: "Camping at Mauri Tsho",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Final trekking days", "Lush vegetation", "Mauri Tsho lake", "Last campfire", "Celebration with crew"],
  },
  {
    day: 24,
    title: "Mauri Tsho to Sephu & Drive to Thimphu",
    altitude: "3,900m → 2,320m",
    distance: "12km trek + 5 hrs drive",
    description: "Your final day of trekking! The trail descends through beautiful forests to the roadhead at Sephu. Along the way, you'll pass traditional villages and farmland. At Sephu, your vehicle will be waiting to drive you to Thimphu (approximately 5 hours). The drive itself is scenic, passing through mountains and valleys. Arrive in Thimphu and check into your hotel. A hot shower, real bed, and celebration dinner await! You've completed the legendary Snowman Trek - one of the greatest treks in the world.",
    overnight: "Hotel in Thimphu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Final trekking day", "Traditional villages", "Scenic drive", "Arrival in Thimphu", "Trek completion celebration"],
  },
  {
    day: 25,
    title: "Thimphu Sightseeing & Departure",
    altitude: "2,320m → 2,280m",
    distance: "Local sightseeing + 50km drive",
    description: "After breakfast, enjoy sightseeing in Bhutan's capital city. Visit the iconic Tashichho Dzong ('Fortress of the Glorious Religion'), the seat of Bhutan's government. Visit the National Memorial Chorten and the Buddha Dordenma statue - one of the largest Buddha statues in the world. Depending on your flight time, you may have time for last-minute souvenir shopping. Drive to Paro International Airport for your departure flight. Our representative will assist with check-in. Bid farewell to the Land of the Thunder Dragon with the incredible achievement of completing the legendary Snowman Trek - a journey you'll remember for a lifetime.",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Tashichho Dzong", "National Memorial Chorten", "Buddha Dordenma", "Airport transfer", "Farewell to Bhutan"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "3 nights hotel accommodation (3-star with breakfast) - 1 night Paro, 2 nights Thimphu",
  "2 nights lodge accommodation in Laya (basic but comfortable)",
  "All meals during the trek (breakfast, lunch, dinner)",
  "Experienced English-speaking trekking guide (government licensed)",
  "Assistant guide for groups of 4 or more",
  "Camping equipment (tents, sleeping mats, kitchen tent, dining tent)",
  "Camping staff (cook, kitchen helpers, assistants)",
  "All camping meals and hot drinks",
  "Porter service (1 porter per trekker, max 15kg per person)",
  "Horses for emergency evacuation and gear transport",
  "All monument entrance fees",
  "Bhutan Visa fee (processed by us)",
  "Sustainable Development Fee (SDF) of $100 per night (24 nights = $2,400)",
  "Government taxes and royalty",
  "Mineral water during sightseeing",
  "Traditional scarf welcome at airport",
  "Comprehensive first aid kit including pulse oximeter and Gamow bag",
  "Sleeping bag and down jacket for high altitude (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Certificate of achievement upon trek completion",
];

const excludes = [
  "International airfare to/from Paro",
  "Travel insurance (mandatory - must cover high altitude trekking up to 5,500m & emergency helicopter evacuation)",
  "Personal trekking gear and equipment (trekking boots, warm clothing, etc.)",
  "Meals in Paro and Thimphu (except welcome dinner and breakfasts)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, bar bills)",
  "Tips and gratuities for guides, porters, and drivers (recommended)",
  "Camera fees at monuments",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
  "Hot stone bath (optional)",
  "Additional nights in Thimphu/Paro due to flight delays or weather",
];

const gallery = [
  {
    src: "/images/used/bhutan-snowman.webp",
    alt: "Snowman Trek - remote alpine trail in Bhutan's Lunana region with Himalayan mountain views",
    caption: "Snowman Trek Way",
  },
  {
    src: "/images/used/thimpu-bhutan.webp",
    alt: "Thimphu Valley view - panoramic city and mountain landscape in Bhutan's capital",
    caption: "Glimpse of hills from Thimpu",
  },
];

export default function SnowmanTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2, 3, 4, 5, 18, 19, 20]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  const trekName = "Snowman Trek";
  const canonicalUrl = "https://www.himkalaadventure.com/destinations/bhutan/snowman-trek";
  const pageTitle = "Snowman Trek - Himkala Adventure";
  const pageDescription = "Snowman Trek: One of the world's toughest treks in Bhutan. Cross 11 passes above 4,500m including Gangla Karchung La at 5,320m. The ultimate Himalayan expedition. Book now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/bhutan-snowman.webp";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Snowman Trek - Himkala Adventure");
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

  // Schema.org Organization schema
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Himkala Adventure Pvt. Ltd.",
    "description": "Expert-guided Snowman Trek expeditions in Bhutan. Cross 11 high passes with certified guides.",
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

  // Schema.org Product/Trek schema
  const trekSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Snowman Trek - 25 Days",
    "description": pageDescription,
    "image": imageUrl,
    "url": canonicalUrl,
    "brand": {
      "@type": "Organization",
      "name": "Himkala Adventure Pvt. Ltd."
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "8500",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": canonicalUrl,
      "validFrom": "2024-01-01"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "28"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Max Altitude",
        "value": "5,320m"
      },
      {
        "@type": "PropertyValue",
        "name": "Number of High Passes",
        "value": "11 passes above 4,500m"
      },
      {
        "@type": "PropertyValue",
        "name": "Gangla Karchung La Altitude",
        "value": "5,320m"
      },
      {
        "@type": "PropertyValue",
        "name": "Duration",
        "value": "25 Days / 24 Nights"
      },
      {
        "@type": "PropertyValue",
        "name": "Difficulty",
        "value": "Extreme / Technical"
      },
      {
        "@type": "PropertyValue",
        "name": "Trek Type",
        "value": "Expedition - Camping Trek"
      },
      {
        "@type": "PropertyValue",
        "name": "Destinations",
        "value": "Paro, Laya, Thimphu"
      },
      {
        "@type": "PropertyValue",
        "name": "Highlights",
        "value": "11 High Passes, Gangla Karchung La (5,320m), Laya Village, Mount Jomolhari"
      }
    ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(trekSchema) }}
        />
      </Head>

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
                    className="p-2 rounded-lg hover:bg-slate-100 min-h-[44px] min-w-[44px]"
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
              src="/images/used/bhutan-snowman.webp"
              alt="Snowman Trek - one of the world's toughest treks in Bhutan's remote Lunana region with Himalayan mountain passes"
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
                  <MapPin className="w-3 h-3 mr-1" aria-hidden="true" /> Kingdom of Bhutan
                </Badge>
                <Badge className="bg-red-100 text-red-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                  <Trophy className="w-3 h-3 mr-1" aria-hidden="true" /> World's Hardest Trek
                </Badge>
                <Badge className="bg-blue-100 text-blue-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                  <MountainSnow className="w-3 h-3 mr-1" aria-hidden="true" /> 11 Passes above 4,500m
                </Badge>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
                SNOWMAN <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                  TREK
                </span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-light px-2">
                Widely regarded as one of the toughest treks in the world. Cross 11 high Himalayan passes above 4,500m, 
                with the highest at 5,320m. Traverse remote valleys, encounter unique cultures, and experience the 
                ultimate Himalayan adventure in Bhutan.
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
                  <div className="text-xs text-slate-400 line-through">$8,950</div>
                  <div className="text-lg font-bold text-[#0f2940]">$8,500</div>
                </div>
                <Link href={`/contact?trek=${encodeURIComponent(trekName)}`}>
                  <Button className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] text-white font-bold rounded-full px-4 py-1.5 text-xs min-h-[44px]" aria-label={`Book ${trekName} now`}>
                    <Heart className="w-3 h-3 mr-1" aria-hidden="true" /> Book Now
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
                        <span className="text-white/50 text-sm line-through">$8,950</span>
                        <div className="text-3xl md:text-4xl font-bold text-white mt-1">$8,500</div>
                        <span className="text-white/60 text-sm">per person</span>
                        <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-xs">Save $450</Badge>
                      </div>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>25 Days / 24 Nights</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>Best: Jun-Sep (limited window)</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                          <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>Group Size: 4-10 (minimum 4)</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                          <Tent className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>22 Nights Camping / 2 Nights Lodge</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                          <MountainSnow className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>Highest Point: 5,320m</span>
                        </div>
                      </div>

                      {/* Book Now Button */}
                      <Link href={`/contact?trek=${encodeURIComponent(trekName)}`}>
                        <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-sm md:text-base" aria-label={`Book ${trekName}`}>
                          <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" aria-hidden="true" /> Book This Trek
                        </Button>
                      </Link>
                      
                      {/* WhatsApp Now Button */}
                      <a 
                        href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about the ${trekName}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="block"
                        aria-label="Inquire about Snowman Trek on WhatsApp"
                      >
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold rounded-full h-10 md:h-12 text-sm md:text-base">
                          <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" aria-hidden="true" /> WhatsApp Now
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  {/* Quick Facts */}
                  <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                        <Map className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" /> Quick Facts
                      </h3>
                      <div className="space-y-2 text-xs md:text-sm">
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Start Point</span>
                          <span className="font-medium text-[#0f2940]">Paro</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">End Point</span>
                          <span className="font-medium text-[#0f2940]">Sephu → Thimphu</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Highest Point</span>
                          <span className="font-medium text-[#0f2940]">Gangla Karchung La (5,320m)</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">High Passes</span>
                          <span className="font-medium text-[#0f2940]">11 passes above 4,500m</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Difficulty</span>
                          <span className="font-medium text-[#0f2940]">Extreme / Technical</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2">
                          <span className="text-slate-500">Visa & SDF</span>
                          <span className="font-medium text-[#0f2940]">Fully Included ($2,400)</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Share */}
                  <Card className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                        <Share2 className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" /> Share
                      </h3>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-lg md:rounded-xl text-xs"
                          onClick={() => handleShare("facebook")}
                          aria-label="Share on Facebook"
                        >
                          <Facebook className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg md:rounded-xl text-xs"
                          onClick={() => handleShare("twitter")}
                          aria-label="Share on Twitter"
                        >
                          <Twitter className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg md:rounded-xl text-xs"
                          onClick={handleCopyLink}
                          aria-label="Copy link to clipboard"
                        >
                          {copied ? <Check className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" /> : <Copy className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />}
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
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="w-3 h-3 mr-1" aria-hidden="true" /> Share
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg text-xs py-1.5 min-h-[44px]"
                    onClick={() => handleShare("twitter")}
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-3 h-3 mr-1" aria-hidden="true" /> Tweet
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg text-xs py-1.5 min-h-[44px]"
                    onClick={handleCopyLink}
                    aria-label="Copy link to clipboard"
                  >
                    {copied ? <Check className="w-3 h-3" aria-hidden="true" /> : <Copy className="w-3 h-3" aria-hidden="true" />}
                  </Button>
                </div>

                {/* Overview */}
                <section className="mb-6 md:mb-12" id="overview">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Overview of Snowman Trek</h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                      The <strong>Snowman Trek</strong> is widely regarded as <strong>one of the toughest treks in the world</strong>. 
                      This legendary 25-day expedition crosses <strong>11 high Himalayan passes above 4,500m</strong>, with the highest 
                      at <strong>Gangla Karchung La (5,320m)</strong>. Traversing the remote northern regions of Bhutan along the 
                      Tibetan border, this <strong>Snowman trekking</strong> adventure is the ultimate challenge for serious trekkers.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                      The journey takes you through pristine alpine wilderness, past turquoise glacial lakes, over snow-covered 
                      passes, and through remote valleys inhabited by yak herders and the unique Layap people. You'll experience 
                      landscapes and cultures that few outsiders have ever seen, camping in some of the most remote locations 
                      on Earth.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                      This is not just a <strong>trekking in Nepal</strong> experience; it's a true expedition requiring excellent 
                      physical fitness, mental fortitude, and previous high-altitude trekking experience. With full camping support, 
                      expert guides, and comprehensive safety measures including a Gamow bag for altitude emergencies, we ensure 
                      the best possible support for this ultimate Himalayan adventure. Completion of the Snowman Trek is a 
                      lifetime achievement.
                    </p>
                  </div>
                </section>

                {/* Highlights */}
                <section className="mb-6 md:mb-12" id="highlights">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Snowman Trek Highlights</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                    {[
                      "Complete one of the world's toughest treks",
                      "Cross 11 high Himalayan passes above 4,500m",
                      "Reach Gangla Karchung La at 5,320m - highest point",
                      "Camp beside pristine alpine lakes",
                      "Visit remote Laya village and meet Layap people",
                      "Spectacular views of Mount Jomolhari and Jichu Drake",
                      "Traverse the remote Lunana region",
                      "Experience true wilderness camping for 22 nights",
                      "Photograph turquoise glacial lakes",
                      "Encounter yaks and blue sheep in alpine pastures",
                      "Cross the famous Nyile La, Jari La, and Shinje La passes",
                      "All visas and SDF fees ($2,400 for 24 nights) included",
                      "Expert guides with high-altitude experience",
                      "Certificate of achievement upon completion",
                    ].map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]"
                      >
                        <Star className="w-3 h-3 md:w-4 h-4 text-[#2d6a8a] fill-[#C5E0ED] shrink-0" aria-hidden="true" />
                        <span className="text-[#0f2940] font-medium text-xs md:text-base leading-tight">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Best Season */}
                <section className="mb-6 md:mb-12">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Best Time to Trek Snowman</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                    <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 rounded-lg md:rounded-2xl">
                      <CardContent className="p-3 md:p-5">
                        <div className="flex items-center gap-2 mb-1 md:mb-3">
                          <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-blue-500" aria-hidden="true" />
                          <h3 className="font-bold text-[#0f2940] text-xs md:text-base">Summer (Jun - Aug)</h3>
                        </div>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                          The primary trekking season for the Snowman. Warmer temperatures, but higher chance of rain 
                          and cloud cover. Passes are usually clear of snow. Longer daylight hours.
                        </p>
                        <Badge className="bg-green-100 text-green-700 border-none text-xs">Primary Season</Badge>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200/50 rounded-lg md:rounded-2xl">
                      <CardContent className="p-3 md:p-5">
                        <div className="flex items-center gap-2 mb-1 md:mb-3">
                          <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-amber-500" aria-hidden="true" />
                          <h3 className="font-bold text-[#0f2940] text-xs md:text-base">Early Autumn (Sep)</h3>
                        </div>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                          Stable weather, clear skies, and excellent mountain views. Shorter days but best conditions. 
                          Limited window before passes become snowbound.
                        </p>
                        <Badge className="bg-green-100 text-green-700 border-none text-xs">Excellent</Badge>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Detailed Itinerary */}
                <section className="mb-6 md:mb-12" id="itinerary">
                  <div className="flex items-center justify-between mb-3 md:mb-6">
                    <h2 className="text-lg md:text-2xl font-serif text-[#0f2940]">Day-by-Day Snowman Itinerary</h2>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-[#2d6a8a] border-[#C5E0ED] hover:bg-[#C5E0ED]/20 rounded-full text-xs md:text-sm px-2 md:px-4 min-h-[44px]"
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
                            className="w-full flex items-center gap-2 md:gap-4 p-2 md:p-4 text-left min-h-[44px]"
                            onClick={() => toggleDay(day.day)}
                            aria-expanded={expandedDays.includes(day.day)}
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
                              <p className="text-slate-600 text-xs md:text-sm leading-relaxed pt-2 md:pt-4 mb-2 md:mb-4">{day.description}</p>

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
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">What's Included in This Snowman Trek</h2>
                  <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                    <Card className="bg-green-50/50 border-green-200/50 rounded-lg md:rounded-2xl">
                      <CardContent className="p-3 md:p-6">
                        <h3 className="font-bold text-green-800 mb-2 md:mb-4 flex items-center gap-2 text-sm md:text-base">
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
                        <h3 className="font-bold text-red-800 mb-2 md:mb-4 flex items-center gap-2 text-sm md:text-base">
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

                {/* Critical Information */}
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-4">Critical Information for Snowman Trek</h2>
                <div className="bg-amber-50 border border-amber-200 rounded-lg md:rounded-2xl p-3 md:p-6 flex gap-2 md:gap-4 mb-6 md:mb-12">
                  <ShieldAlert className="w-4 h-4 md:w-6 md:h-6 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                      <li>• <strong>Travel insurance is MANDATORY and must cover helicopter evacuation up to 5,500m.</strong> We cannot accept bookings without proof of appropriate insurance.</li>
                      <li>• The Snowman Trek is an EXPEDITION, not a regular trek. It requires excellent physical fitness, mental fortitude, and previous high-altitude trekking experience (5,000m+).</li>
                      <li>• Weather can cause delays - budget at least 2-3 buffer days in your itinerary. We are not responsible for additional costs from delays.</li>
                      <li>• The trek involves 22 nights camping in remote locations with basic facilities. Preparedness is essential.</li>
                      <li>• Bhutan's Sustainable Development Fee (SDF) of $100 per night for 24 nights ($2,400) is FULLY INCLUDED in our package.</li>
                      <li>• Minimum group size: 4 persons. Solo trekkers may join scheduled departures or pay a supplement.</li>
                      <li>• Our guides carry a Gamow bag for altitude emergencies and are trained in high-altitude first aid.</li>
                    </ul>
                  </div>
                </div>

                {/* Photo Gallery */}
                <section className="mb-6 md:mb-12" id="gallery">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Photo Gallery - Snowman Trek</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3">
                    {gallery.map((image, i) => (
                      <div
                        key={i}
                        className="relative h-24 md:h-48 rounded-lg md:rounded-xl overflow-hidden group cursor-pointer"
                      >
                        <Image
                          src={image.src}
                          alt={`${image.alt} - Snowman Trek expedition experience in Bhutan`}
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
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Frequently Asked Questions About Snowman Trek</h2>
                  <div className="space-y-2 md:space-y-4">
                    {[
                      {
                        q: "How difficult is the Snowman Trek really?",
                        a: "The Snowman Trek is widely regarded as one of the toughest treks in the world. You'll trek for 22 days, cross 11 passes above 4,500m (with the highest at 5,320m), and camp in remote locations for over three weeks. Days are long (7-8 hours), altitudes are extreme, and weather can be unpredictable. This trek is suitable only for experienced trekkers with excellent fitness and previous high-altitude experience.",
                      },
                      {
                        q: "What is the success rate for completing the trek?",
                        a: "The success rate varies by season and conditions but is generally around 50-60%. The main reasons for non-completion are altitude sickness, weather delays, and physical exhaustion. Proper acclimatization, good fitness, and allowing buffer days significantly improve your chances. Our guides are experienced in managing altitude and pacing.",
                      },
                      {
                        q: "What altitude sickness precautions do you take?",
                        a: "Our itinerary includes gradual acclimatization with rest days at Jangothang (4,080m) and Thanza (4,100m). We carry a Gamow bag (portable hyperbaric chamber) for altitude emergencies. Our guides are trained in high-altitude first aid and monitor everyone's oxygen saturation daily. We also carry supplemental oxygen for emergencies.",
                      },
                      {
                        q: "What is the Sustainable Development Fee (SDF) and is it included?",
                        a: "The SDF is a $100 per night fee that all international visitors pay to visit Bhutan. For this 24-night tour, the SDF of $2,400 is FULLY INCLUDED in our package price - you don't need to pay anything extra. This fee funds free education, healthcare, and infrastructure in Bhutan.",
                      },
                      {
                        q: "Do I need a visa? How does it work?",
                        a: "Yes, all international visitors except Indian nationals require a visa for Bhutan. We process your visa as part of the package. You'll need to send us a clear passport copy and passport photo at least 30 days before travel (45 days recommended). The visa is stamped in your passport upon arrival at Paro Airport.",
                      },
                      {
                        q: "What kind of fitness preparation do you recommend?",
                        a: "Prepare at least 6 months in advance with a combination of cardiovascular training (running, cycling, swimming), strength training (especially legs and core), and practice hikes with a loaded pack. Aim for 4-5 training sessions weekly, including weekend long hikes with altitude gain. Previous experience at 5,000m+ is strongly recommended.",
                      },
                      {
                        q: "What is the food like on the trek?",
                        a: "Our experienced camping cooks prepare fresh, hot, and nutritious meals throughout the trek. Expect a mix of Bhutanese, Indian, and Western dishes including dal bhat, pasta, soups, vegetables, and even baked goods like bread and cakes. Special dietary requirements can be accommodated with advance notice.",
                      },
                      {
                        q: "What about communications during the trek?",
                        a: "There is NO mobile phone signal or internet for most of the trek except in Laya village. Our guides carry satellite phones for emergency communication only. This is a true wilderness experience - prepare to be disconnected and embrace it!",
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
    </>
  );
}