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
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    "day": 1,
    "title": "Drive from Kathmandu to Machha Khola",
    "altitude": "1,400m → 890m",
    "distance": "150km / 8-9 hrs drive",
    "description": "Early morning departure from your hotel in Kathmandu for the scenic drive to Machha Khola, the traditional starting point of the Manaslu Circuit and gateway to the Tsum Valley. The journey follows the Trishuli River through beautiful rural landscapes, terraced farmlands, and traditional villages. You'll pass through Dhading Besi and Arughat before the road follows the Budhi Gandaki River through increasingly rugged terrain. The drive offers glimpses of Ganesh Himal (7,422m) and the dramatic river gorge. Arrive in Machha Khola (890m), a small settlement named after the 'Fish River' that flows through it. Check into your teahouse, meet your trekking crew, and prepare for the adventure ahead. Evening briefing on the Tsum Valley and Manaslu Circuit route, including restricted area regulations and permit requirements for the Tsum Valley.",
    "overnight": "Teahouse in Machha Khola",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic Trishuli River drive", "Arughat pass through", "Budhi Gandaki River gorge", "Ganesh Himal views", "Gateway to Manaslu & Tsum Valley"]
  },
  {
    "day": 2,
    "title": "Trek from Machha Khola to Jagat",
    "altitude": "890m → 1,410m",
    "distance": "20km / 6-7 hrs trek",
    "description": "Your combined Tsum Valley and Manaslu Circuit trek begins! Today's trail follows the Budhi Gandaki River upstream, crossing several suspension bridges and passing through subtropical forests. You'll pass through the villages of Khursane and Labubesi, with occasional waterfalls cascading down steep cliffs and landslide areas to navigate. After crossing a long suspension bridge, you'll climb stone steps to Jagat (1,410m), a beautiful stone-paved village perched on a ridge. Jagat serves as the official entry point to the Manaslu Conservation Area - here you'll register your permits at the checkpoint. The village offers stunning views of the surrounding hills and traditional stone architecture. Overnight in Jagat.",
    "overnight": "Teahouse in Jagat",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Suspension bridge crossings", "Subtropical forests", "Waterfalls and landslide sections", "Manaslu Conservation Area entry", "Jagat stone-paved village"]
  },
  {
    "day": 3,
    "title": "Trek from Jagat to Lokpa",
    "altitude": "1,410m → 2,240m",
    "distance": "18km / 6-7 hrs trek",
    "description": "Today you enter the restricted Tsum Valley region - a hidden Buddhist enclave that opened to trekkers only in 2008. After a short climb to Salleri, you'll walk along scenic riverbanks and cross the Budhi Gandaki on a long suspension bridge. The trail opens up as you head toward Philim, passing through Sirdibas. At Ekle Bhatti, the trail splits - you'll take the right-hand trail that ascends through dense forest and narrow gorges toward Lokpa (2,240m), the first village in the Tsum Valley. The landscape becomes increasingly dramatic as you gain altitude, with steep cliffs, dense rhododendron forests, and glimpses of distant peaks. Lokpa is a small settlement with basic teahouses and stunning views of the surrounding valleys. Overnight in Lokpa.",
    "overnight": "Teahouse in Lokpa",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Enter restricted Tsum Valley", "Ekle Bhatti trail split", "Dense forest and narrow gorges", "Remote wilderness", "Lokpa village arrival"]
  },
  {
    "day": 4,
    "title": "Trek from Lokpa to Chumling",
    "altitude": "2,240m → 2,386m",
    "distance": "10km / 4-5 hrs trek",
    "description": "A relatively short day allowing for gradual acclimatization in the Tsum Valley. From Lokpa, you descend through forest and cross a stream on a small bridge, then ascend steeply on stone stairs through beautiful rhododendron and pine forests. The trail offers stunning views of Ganesh Himal (7,422m) and the surrounding peaks as you climb. You'll pass through the small settlement of Ripchet before reaching Chumling (2,386m), also known as Lower Tsum. Chumling is a traditional village with ancient monasteries, mani walls, prayer flags, and flat-roofed stone houses characteristic of Tibetan architecture. The village is the administrative center of Tsum Valley and offers a fascinating glimpse into Tibetan-influenced culture. Visit the local monastery and interact with the friendly Chumling villagers. Overnight in Chumling.",
    "overnight": "Teahouse in Chumling",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Short acclimatization day", "Rhododendron and pine forests", "Ganesh Himal views", "Ancient monasteries", "Lower Tsum Valley culture"]
  },
  {
    "day": 5,
    "title": "Trek from Chumling to Chhokang Paro",
    "altitude": "2,386m → 3,031m",
    "distance": "11km / 5-6 hrs trek",
    "description": "Today you trek through beautiful landscapes with stunning views of Ganesh Himal and Sringi Himal as you ascend into Upper Tsum Valley. The trail crosses a suspension bridge and passes through fields of potatoes and maize cultivated by local farmers. You'll cross the Serpu Khola and gradually ascend to Chhokang Paro (3,031m), also known as Chekampar, the main village of Upper Tsum Valley. On clear days, you'll see amazing views of Mt. Himalchuli (7,893m), Ganesh Himal, and Sringi Himal. The village has several monasteries, a school, and traditional Tibetan-style houses with intricately carved wooden windows. Take time to explore the village, visit the local gompa, and interact with the Tsum people who follow a unique blend of Buddhism and ancient Bön religion. Overnight in Chhokang Paro.",
    "overnight": "Teahouse in Chhokang Paro",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Upper Tsum Valley entry", "Himalchuli (7,893m) views", "Ganesh Himal and Sringi Himal", "Tibetan-style houses", "Chhokang Paro village"]
  },
  {
    "day": 6,
    "title": "Trek from Chhokang Paro to Rachen Gompa & Nile",
    "altitude": "3,031m → 3,240m → 3,361m",
    "distance": "12km / 5-6 hrs trek",
    "description": "Today is a cultural and spiritual journey through the heart of Tsum Valley. You'll trek through small villages and ascend to a ridge reaching the courtyard of Rachen Gompa (3,240m), one of the oldest and most important monasteries in the Tsum Valley. The monastery houses ancient Buddhist texts, beautiful murals, and thangkas (Buddhist paintings). From here, you'll continue to visit Milarepa's Cave (Piren Phu Cave), where the great Tibetan Buddhist sage and poet Milarepa is said to have meditated in the 11th century. According to legend, his footprint is believed to be set in the stone inside the cave - a sacred site for Buddhist pilgrims. You'll cross the Siyar Khola and pass through the hamlets of Phurbe and Pangdun before reaching Nile village (3,361m), nestled dramatically beneath towering cliffs. Overnight in Nile.",
    "overnight": "Teahouse in Nile",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Rachen Gompa monastery", "Ancient Buddhist texts and murals", "Milarepa's Cave (Piren Phu)", "Sacred footprint legend", "Nile cliff-side village"]
  },
  {
    "day": 7,
    "title": "Hike to Mu Gompa & Return to Chhokang Paro",
    "altitude": "3,361m → 3,700m → 3,031m",
    "distance": "16km / 7-8 hrs round trip hike",
    "description": "The highlight of the Tsum Valley section! Start early for the hike to Mu Gompa (3,700m), the largest and most significant monastery in the Tsum Valley region. The trail follows the west bank of the Shiar Khola River with spectacular views of chortens, mani walls, and the Tibetan mountains of Ganesh Himal and Sringi Himal visible on the horizon. Mu Gompa is a magnificent complex with ancient Buddhist artifacts, a large prayer hall, and resident monks who greet visitors warmly. The monastery offers breathtaking panoramic views of the Himalaya and a peaceful, spiritual atmosphere unlike anywhere else. On the way back, you'll also visit Dephyudonma Gompa, a smaller nunnery perched on a hillside. After exploring both monasteries, return to Chhokang Paro for overnight. This is the furthest point of the Tsum Valley side trip. Overnight in Chhokang Paro.",
    "overnight": "Teahouse in Chhokang Paro",
    "meals": "Breakfast, Packed Lunch, Dinner",
    "highlights": ["Mu Gompa (3,700m)", "Largest monastery in Tsum Valley", "Tibetan mountain views", "Dephyudonma Gompa nunnery", "Spiritual highlight of Tsum"]
  },
  {
    "day": 8,
    "title": "Trek from Chhokang Paro to Deng",
    "altitude": "3,031m → 1,860m",
    "distance": "21km / 6-7 hrs trek",
    "description": "You leave the sacred Tsum Valley behind and descend back to the main Manaslu Circuit trail. The long descent retraces your steps through Chhokang Paro, Chumling, and Lokpa before joining the main Budhi Gandaki Valley at Deng. The dramatic change in vegetation and temperature is striking as you lose altitude - from alpine landscapes with prayer flags to subtropical forests with sal trees and bamboo. You'll notice the return to more frequent teahouses and the presence of other trekkers on the main circuit. Deng (1,860m) is a small settlement with basic teahouses, nestled beside the Budhi Gandaki River. The village has a few shops and offers beautiful views of the surrounding hills. Overnight in Deng.",
    "overnight": "Teahouse in Deng",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Leave Tsum Valley", "Descend to main circuit", "Return to Budhi Gandaki River", "Changing vegetation", "Deng settlement arrival"]
  },
  {
    "day": 9,
    "title": "Trek from Deng to Namrung",
    "altitude": "1,860m → 2,660m",
    "distance": "22km / 6-7 hrs trek",
    "description": "Today you follow the main Manaslu Circuit trail upstream along the Budhi Gandaki River. You'll pass through the village of Philim, where you'll re-register your permits at the checkpoint. The trail continues through beautiful pine and rhododendron forests, crossing several suspension bridges along the way. The valley narrows as you approach Namrung (2,660m), a traditional Tibetan-style village with stunning views of Sringi Himal (7,187m) and the surrounding peaks. The Tibetan influence becomes more evident in the flat-roofed stone houses, prayer flags, mani walls, and chortens. Namrung is a peaceful village with several teahouses and a small monastery. Overnight in Namrung.",
    "overnight": "Teahouse in Namrung",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Rejoin Manaslu Circuit", "Philim permit re-check", "Pine and rhododendron forests", "Sringi Himal views", "Namrung Tibetan village"]
  },
  {
    "day": 10,
    "title": "Trek from Namrung to Shyala",
    "altitude": "2,660m → 3,520m",
    "distance": "10km / 4-5 hrs trek",
    "description": "A shorter day allowing for gradual acclimatization before the higher elevations and the Larkya La Pass. The trail continues through forests and opens up to alpine meadows with increasingly dramatic mountain views. You'll pass through the villages of Lihi and Sho, where traditional Tibetan architecture and culture are beautifully preserved. As you gain altitude, you'll notice the vegetation transitioning from forest to alpine scrub and juniper. Shyala (3,520m) is a small settlement with a few teahouses and spectacular views of Manaslu North, Ngadi Himal, and the surrounding peaks. The afternoon is free to rest, hydrate, and enjoy the mountain panorama. This short day is perfect for acclimatization before reaching Samagaon. Overnight in Shyala.",
    "overnight": "Teahouse in Shyala",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Short acclimatization day", "Lihi and Sho villages", "Alpine meadows", "Manaslu North views", "Shyala settlement"]
  },
  {
    "day": 11,
    "title": "Trek from Shyala to Samagaon",
    "altitude": "3,520m → 3,530m",
    "distance": "9km / 5-6 hrs trek",
    "description": "Today you catch your first breathtaking views of Mount Manaslu (8,163m), the world's eighth highest peak and the namesake of this trek. The trail passes through Lho village, with its beautiful ancient monastery perched on a hillside and spectacular views of Manaslu's north face. Continue through stunning terrain with panoramic mountain views including Ngadi Himal and Himal Chuli. Samagaon (also called Sama - 3,530m) is the largest village on the entire Manaslu Circuit, with a gompa (monastery), school, health post, and numerous teahouses. This traditional Tibetan Buddhist village is surrounded by dramatic peaks including Manaslu (8,163m), Ngadi Himal (7,870m), and Himal Chuli (7,893m). Take time to explore the village, visit the local monastery, and enjoy the spectacular Himalayan panorama. Overnight in Samagaon.",
    "overnight": "Teahouse in Samagaon",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["First views of Mt. Manaslu (8,163m)", "Lho village monastery", "Himal Chuli and Ngadi Himal views", "Samagaon largest circuit village", "Tibetan Buddhist culture"]
  },
  {
    "day": 12,
    "title": "Acclimatization Day in Samagaon - Manaslu Base Camp Hike",
    "altitude": "3,530m → 4,800m → 3,530m",
    "distance": "14km / 6-7 hrs round trip hike",
    "description": "A crucial acclimatization day before the challenging Larkya La Pass (5,106m) crossing. The golden rule: climb high, sleep low. Today's optional hike is to Manaslu Base Camp (4,800m), offering spectacular close-up views of Manaslu's massive south face and the Punggen Glacier. The trail climbs steadily through rocky moraine with breathtaking views of hanging glaciers, icefalls, and the towering peaks above. Alternatively, you can take a shorter hike to Birendra Tal (Birendra Lake), a stunning turquoise glacial lake at approximately 3,700m fed by the melting ice of the Manaslu Glacier. Another option is to visit the ancient Pungyen Gompa (Fairy Tale Gompa), perched on a hillside with spectacular views of the Manaslu massif. This acclimatization day is essential for your body to adapt to high altitude before the pass crossing. Listen to your body, stay hydrated, and rest when needed. Overnight in Samagaon.",
    "overnight": "Teahouse in Samagaon",
    "meals": "Breakfast, Packed Lunch, Dinner",
    "highlights": ["Manaslu Base Camp hike (4,800m)", "Punggen Glacier views", "Birendra Tal glacial lake", "Pungyen Gompa option", "Essential acclimatization for Larkya La"]
  },
  {
    "day": 13,
    "title": "Trek from Samagaon to Samdo",
    "altitude": "3,530m → 3,860m",
    "distance": "8km / 4-5 hrs trek",
    "description": "A relatively easy day with gradual climbing, allowing for continued acclimatization. The trail offers spectacular views of Manaslu (8,163m), Samdo Peak (6,325m), and surrounding glaciers. You'll pass through Kermo Kharka, a seasonal grazing area with yak pastures, and walk through juniper forests with the fragrant scent of juniper in the air. Samdo (3,860m) is the last major village before the Larkya La Pass crossing. This remote settlement has strong Tibetan heritage, with locals who still speak Tibetan dialect, wear traditional clothing, and maintain ancient customs. Some families still trade with Tibet via the nearby Lajyang border crossing. Explore the village with its prayer wheels, mani walls, chortens, and traditional flat-roofed stone houses. Overnight in Samdo.",
    "overnight": "Teahouse in Samdo",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Kermo Kharka yak pastures", "Juniper forests", "Samdo Peak (6,325m) views", "Remote Tibetan village", "Traditional culture and customs"]
  },
  {
    "day": 14,
    "title": "Trek from Samdo to Dharmasala (Larkya Phedi)",
    "altitude": "3,860m → 4,460m",
    "distance": "8km / 4-5 hrs trek",
    "description": "A short but important trek to the high camp below Larkya La Pass. The terrain becomes increasingly barren and alpine as you climb above the tree line for the final time. The trail passes through Larkya Bazaar, an old trading post that was once a bustling hub for salt and wool traders traveling between Nepal and Tibet. From here, the trail continues on rocky moraine with stunning views of Larkya Peak and the surrounding glaciers. Dharmasala (4,460m), also called Larkya Phedi, is a basic stone shelter serving as the final stop before the pass crossing. The accommodation here is very basic - this is a true high-altitude camp. Rest early, organize your gear for tomorrow's pre-dawn start, and try to sleep as conditions allow. Your guide will check weather conditions and confirm the departure time (typically 3-4 AM). Overnight at Dharmasala.",
    "overnight": "Basic Lodge at Dharmasala",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Larkya Bazaar old trading post", "Alpine terrain above tree line", "Larkya Peak and glacier views", "High camp experience", "Pass preparation briefing"]
  },
  {
    "day": 15,
    "title": "Cross Larkya La Pass & Trek to Bimthang",
    "altitude": "4,460m → 5,106m → 3,720m",
    "distance": "23km / 10-12 hrs trek",
    "description": "The most challenging and rewarding day of the entire Tsum Valley and Manaslu Circuit trek! Start very early (3-4 AM) to reach the pass before weather conditions deteriorate - afternoon clouds and wind are common. The climb from Dharmasala is steady on a moraine path with stone cairns marking the way. The altitude is extreme, so move slowly, breathe deeply, and rest frequently. Reaching the crest of Larkya La Pass (5,106m) is an indescribable feeling - prayer flags flutter in the wind as you take in the 360-degree panoramic views of Mount Manaslu (8,163m), Himlung Himal (7,126m), Cheo Himal (6,820m), Gyaji Kang, Kang Guru, and Annapurna II (7,937m) in the distance. After celebrating at the pass and taking photographs, begin the long descent to Bimthang (3,720m). The descent passes through glacial moraine, past beautiful glacial lakes (including the stunning white lake and blue lake), and finally through yak pastures into a beautiful valley with rhododendron forests. This is a very long, tiring day but absolutely unforgettable - you have now completed one of Nepal's greatest treks! Overnight in Bimthang.",
    "overnight": "Teahouse in Bimthang",
    "meals": "Breakfast, Packed Lunch, Dinner",
    "highlights": ["Larkya La Pass crossing (5,106m)", "360-degree Himalayan panorama", "Manaslu, Himlung, Annapurna views", "Glacial lakes", "Tsum Valley + Manaslu Circuit completion"]
  },
  {
    "day": 16,
    "title": "Trek from Bimthang to Tilje & Jeep to Besisahar",
    "altitude": "3,720m → 2,300m → 760m",
    "distance": "12km trek / 4-5 hrs trek + 4-5 hrs jeep",
    "description": "Your final day of trekking on the Tsum Valley and Manaslu Circuit. From Bimthang, the trail descends through beautiful rhododendron and pine forests, passing through the village of Gho with its traditional stone houses and yak pastures. You'll cross several streams and suspension bridges, with the landscape transforming from alpine to subtropical. The views back toward the Larkya La and the Manaslu range are spectacular from this side. Arrive in Tilje (2,300m), a charming Gurung village with terraced fields and beautiful mountain views. Here, your private jeep awaits for the scenic drive to Besisahar (760m), the district headquarters of Lamjung. The jeep drive follows the Marsyangdi River through dramatic gorges, past terraced farmlands, and through traditional villages. Arrive in Besisahar by late afternoon. Check into your teahouse and celebrate your incredible achievement - you have successfully explored the sacred Tsum Valley, visited Mu Gompa, crossed the legendary Larkya La Pass at 5,106m, and completed the Manaslu Circuit! Overnight in Besisahar.",
    "overnight": "Teahouse in Besisahar",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Final day of Manaslu Circuit trek", "Gho village and yak pastures", "Rhododendron and pine forests", "Scenic jeep ride to Besisahar", "Manaslu + Tsum Valley completion celebration"]
  },
  {
    "day": 17,
    "title": "Bus from Besisahar to Kathmandu",
    "altitude": "760m → 1,400m",
    "distance": "180km / 7-8 hrs bus",
    "description": "After breakfast in Besisahar, board a tourist bus for the scenic drive back to Kathmandu. The journey follows the Marsyangdi River valley before joining the Prithvi Highway along the Trishuli River. The bus passes through beautiful landscapes, terraced farmlands, traditional villages, and dramatic river gorges. You'll pass through Dumre, and eventually reach the outskirts of the Kathmandu Valley. Along the way, you'll have stunning views of the Himalayan foothills and opportunities to see local rural life. The bus journey is a wonderful opportunity to relax, reflect on your epic Tsum Valley and Manaslu Circuit adventure, and watch the world go by. Arrive in Kathmandu by late afternoon. Check into your hotel in Thamel, take a well-deserved hot shower, and enjoy the comforts of the city. The remainder of your day is free for souvenir shopping in Thamel, visiting a spa for a much-needed massage, or simply relaxing after your incredible journey. In the evening, enjoy a farewell dinner celebrating your successful trek - exploring the sacred Tsum Valley, visiting ancient monasteries including Mu Gompa and Rachen Gompa, crossing Larkya La Pass at 5,106m, and completing the legendary Manaslu Circuit. Share stories and memories with your trekking team.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic bus journey to Kathmandu", "Marsyangdi and Trishuli Rivers", "Rural Nepali landscapes", "Thamel souvenir shopping", "Farewell celebration dinner"]
  }
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "3 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "All meals during the trek (breakfast, lunch, dinner)",
  "Best available teahouse/lodge accommodation during trek",
  "Experienced English-speaking trekking guide (government licensed)",
  "Assistant guide for groups of 5 or more",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Manaslu Restricted Area Permit (RAP)",
  "Tsum Valley Restricted Area Permit",
  "Manaslu Conservation Area Permit (MCAP)",
  "Annapurna Conservation Area Permit (ACAP)",
  "All ground transportation as per itinerary (Kathmandu-Machha Khola & Dharapani-Kathmandu by private jeep)",
  "First aid medical kit including pulse oximeter",
  "Sleeping bag and down jacket for high altitude (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Manaslu and Tsum Valley region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Packed lunch for Larkya La and Mu Gompa days",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude trekking up to 5,200m & helicopter evacuation)",
  "Personal trekking gear and equipment",
  "Meals in Kathmandu (except welcome dinner and breakfasts)",
  "Bottled/mineral water during trek (purification tablets provided)",
  "Hot showers and battery charging at lodges ($2-5 per use)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, bar bills, souvenirs)",
  "Tips and gratuities for guides and porters (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, landslides, political unrest)",
];

const gallery = [
  
  
  {
    src: "/images/used/tsum-4.webp",
    alt: "Tsum Valley",
    caption: "Sacred Tsum Valley with Ganesh Himal",
  },
  {
    src: "/images/used/manaslu-main-page.webp",
    alt: "Manaslu Mountain",
    caption: "Mount Manaslu (8,163m)",
  },
  {
    src: "/images/used/tsum-3.webp",
    alt: "Way to Tsum Valley",
    caption: "Way to Sacred Tsum Valley",
  },
  {
    src: "/images/used/tsum-valley-1.webp",
    alt: "Tsum Valley",
    caption: "Sacred Tsum Valley with Ganesh Himal",
  },
  
];

export default function ManasluTsumValleyTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  
  // Trek name constant for auto-fill functionality
  const trekName = "Manaslu Circuit with Tsum Valley Trek";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Manaslu Circuit with Tsum Valley Trek - Himkala Adventure");
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
            src="/images/used/tsum-valley-1.webp"
            alt="Manaslu Circuit with Tsum Valley Trek"
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
                <MapPin className="w-3 h-3 mr-1" /> Manaslu Region
              </Badge>
              <Badge className="bg-red-100 text-red-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Challenging
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Landmark className="w-3 h-3 mr-1" /> Tsum Valley
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              MANASLU CIRCUIT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                WITH TSUM VALLEY TREK
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              Explore the sacred Tsum Valley and circumnavigate Mount Manaslu—a journey through ancient monasteries, 
              remote Tibetan villages, and across the legendary Larkya La Pass.
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
                <div className="text-xs text-slate-400 line-through">$2,305</div>
                <div className="text-lg font-bold text-[#0f2940]">$2,050</div>
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
                        <span className="text-white/50 text-sm line-through">$2,305</span>
                        <div className="text-3xl md:text-4xl font-bold text-white mt-1">$2,050</div>
                        <span className="text-white/60 text-sm">per person</span>
                        <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $255</Badge>
                      </div>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>17 Days / 16 Nights</span>
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
                          <span className="text-slate-500">Start Point</span>
                          <span className="font-medium text-[#0f2940]">Kathmandu</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">End Point</span>
                          <span className="font-medium text-[#0f2940]">Kathmandu</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Trek Start</span>
                          <span className="font-medium text-[#0f2940]">Machha Khola</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Trek End</span>
                          <span className="font-medium text-[#0f2940]">Dharapani</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Highest Point</span>
                          <span className="font-medium text-[#0f2940]">Larkya La (5,106m)</span>
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
                    The <strong>Manaslu Circuit with Tsum Valley Trek</strong> is one of Nepal's most authentic and rewarding Himalayan adventures, combining the sacred Tsum Valley with the classic Manaslu Circuit. This comprehensive journey takes you through two restricted regions rich in Tibetan Buddhist culture, culminating in the crossing of the legendary <strong>Larkya La Pass (5,106m)</strong> with spectacular views of Mount Manaslu (8,163m), the world's eighth highest peak.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The trek begins in the subtropical forests of the Budhi Gandaki Valley before ascending to the remote <strong>Tsum Valley</strong>, a sacred Himalayan enclave opened to trekkers only in 2008. Here you'll explore ancient monasteries including <strong>Rachen Gompa, Mu Gompa, and Dephyudonma Gompa</strong>, visit <strong>Milarepa's Cave</strong> where the great Tibetan sage meditated, and experience the unique 'Shyagya' tradition of non-violence that has been practiced by the Tsumbas since 1920.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    After rejoining the main Manaslu Circuit, you'll trek through traditional Tibetan villages, past mani walls and chortens, with ever-present views of the towering Himalayas. The highlight is crossing <strong>Larkya La Pass</strong>, one of Nepal's longest high passes, where prayer flags flutter against a 360-degree panorama of peaks including Manaslu, Himlung Himal, Cheo Himal, Annapurna II, and Ganesh Himal. This challenging trek is ideal for experienced trekkers seeking deep cultural immersion, pristine wilderness, and the satisfaction of conquering a major Himalayan pass.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Trek Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Explore the sacred Tsum Valley, opened to trekkers in 2008, with its ancient Tibetan Buddhist culture",
                    "Cross the legendary Larkya La Pass (5,106m) - one of Nepal's longest and most spectacular high passes",
                    "Visit ancient monasteries including Mu Gompa, Rachen Gompa, and Dephyudonma Gompa",
                    "Discover Milarepa's Cave and witness the footprint of the great Tibetan sage",
                    "Experience the unique 'Shyagya' tradition of non-violence practiced by Tsumba people since 1920",
                    "Panoramic views of Manaslu (8,163m), Himlung Himal, Cheo Himal, Annapurna II, and Ganesh Himal",
                    "Walk in the footsteps of ancient trading routes to Tibet through traditional villages",
                    "Remote wilderness with far fewer trekkers than Everest or Annapurna regions",
                    "Diverse landscapes from subtropical forests to alpine deserts and glacial moraines",
                    "Authentic cultural immersion with Tamang, Gurung, and Tibetan communities",
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
                        Rhododendrons bloom in vibrant colors, warming temperatures, and excellent visibility. Some snow may remain on Larkya La early in the season.
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
                        The most popular season with crystal-clear skies, stable weather, and perfect conditions for crossing Larkya La. Peak season for mountain photography.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: Winter (Dec-Feb) is very cold with heavy snow making the pass difficult. Monsoon (Jun-Aug) brings leeches and landslides - not recommended.</p>
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
                    <li>• <strong>Permits Required:</strong> This trek requires four permits: Manaslu Restricted Area Permit, Tsum Valley Restricted Area Permit, Manaslu Conservation Area Permit (MCAP), and Annapurna Conservation Area Permit (ACAP). A new local permit (NPR 1000) is also required.</li>
                    <li>• <strong>Guide Mandatory:</strong> Independent trekking is not permitted in these restricted areas. You must trek with a licensed guide from a registered agency.</li>
                    <li>• <strong>Travel Insurance:</strong> Mandatory - must cover high altitude trekking up to 5,200m and helicopter evacuation.</li>
                    <li>• <strong>Physical Fitness:</strong> This is a strenuous trek with long days (8-10 hours on pass day), high altitude, and remote terrain. Excellent fitness and prior high-altitude experience required.</li>
                    <li>• <strong>Road Construction:</strong> Some sections, especially between Machha Khola and Jagat, may have road construction and occasional blasting. Your guide will ensure safe passage.</li>
                    <li>• <strong>Shyagya Tradition:</strong> In Tsum Valley, respect the non-violence tradition - do not kill any animals or insects.</li>
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
                      q: "How difficult is the Manaslu Circuit with Tsum Valley Trek?",
                      a: "This trek is rated as challenging to strenuous. You'll trek 5-8 hours daily on rugged terrain with significant altitude gain. The Larkya La Pass day involves 10-11 hours of trekking at over 5,000m with glacier crossings. Prior high-altitude trekking experience and excellent fitness are essential.",
                    },
                    {
                      q: "What makes Tsum Valley special?",
                      a: "Tsum Valley is a sacred Himalayan enclave with deep Buddhist significance. It's home to ancient monasteries like Mu Gompa and Rachen Gompa, Milarepa's Cave with the sage's footprint, and the unique 'Shyagya' tradition of non-violence practiced since 1920. The valley opened to trekkers only in 2008 and retains authentic Tibetan culture.",
                    },
                    {
                      q: "How much do the permits cost?",
                      a: "Permit costs vary by season. For Manaslu: $75-100/week + $10-15/day. Tsum Valley: $35-40/week + $7/day. MCAP and ACAP: approximately $22 each. A new local permit costs NPR 1000. Total for 19 days ranges approximately $250-300 per person.",
                    },
                    {
                      q: "What is the accommodation like?",
                      a: "Teahouses throughout the trek are basic but comfortable, with twin-sharing rooms and shared bathrooms. In Tsum Valley and remote sections, facilities are simpler. Hot showers and charging are available at most lodges for an extra fee ($2-5). The teahouses offer warm hospitality and hearty meals.",
                    },
                    {
                      q: "What wildlife might I see?",
                      a: "The Manaslu Conservation Area is home to 33 mammal species including Himalayan tahr, blue sheep (bharal), musk deer, Himalayan marmots, and occasionally snow leopards. Over 110 bird species include the colorful Himalayan monal (Danphe), Nepal's national bird.",
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