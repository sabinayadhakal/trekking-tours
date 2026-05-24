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
  Compass,
  Droplets,
  Landmark,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    "day": 1,
    "title": "Drive from Kathmandu to Barpak Village",
    "altitude": "1,350m → 1,915m",
    "distance": "205km / 7-8 hrs drive",
    "description": "Early morning departure from your hotel in Kathmandu for the scenic drive to Barpak Village, the largest Gurung village in Nepal and the epicenter of the 2015 earthquake. The journey follows the Prithvi Highway before turning off towards Gorkha, passing through picturesque landscapes, terraced farmlands, and traditional villages. You'll have stunning views of Ganesh Himal (7,422m) and the Manaslu range in the distance. Barpak (1,915m) has been beautifully rebuilt since the earthquake and offers a fascinating glimpse into Gurung culture, traditions, and hospitality. Check into your teahouse or homestay, meet your trekking crew, and explore the village's stone-paved streets. Overnight in Barpak.",
    "overnight": "Teahouse/Homestay in Barpak",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic drive through Gorkha", "Ganesh Himal views", "Barpak Gurung village", "Earthquake recovery story", "Cultural immersion"]
  },
  {
    "day": 2,
    "title": "Rest Day in Barpak - Acclimatization & Exploration",
    "altitude": "1,915m",
    "distance": "Exploration (2-4 hrs optional hike)",
    "description": "A crucial rest day to acclimatize and explore Barpak village before heading into the remote mountains. Barpak is famous for its brave Gurkha soldiers, including Captain Gaje Ghale, a Victoria Cross recipient. Walk through the village's stone-paved streets, visit the local school and monastery, and interact with friendly Gurung locals who are known for their warm hospitality. Take a short hike to nearby viewpoints for panoramic views of Boudha Himal (6,672m) and the surrounding peaks. In the evening, you may be treated to a cultural performance by the local community, featuring traditional Gurung dances and songs. This rest day is essential for proper acclimatization before the Rupina La Pass crossing. Overnight in Barpak.",
    "overnight": "Teahouse/Homestay in Barpak",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Gurung cultural experience", "Captain Gaje Ghale memorial", "Village exploration", "Views of Boudha Himal", "Traditional dance performance"]
  },
  {
    "day": 3,
    "title": "Trek from Barpak to Gai Kharka",
    "altitude": "1,915m → 2,900m",
    "distance": "15km / 6-7 hrs trek",
    "description": "Your trek begins today! Leaving Barpak, you ascend through terraced fields and forests with stunning views of Boudha Himal (6,672m) accompanying you for much of the day. The trail passes through the small settlement of Jhong before entering dense rhododendron and pine forests - these forests burst into brilliant red and pink blooms during spring (March-April). You'll cross several ridges with spectacular mountain views before descending slightly to Gai Kharka (2,900m), a grazing pasture with basic camping facilities. Tonight, you transition from teahouses to camping, marking your entry into the remote wilderness section of the trek. Overnight camping at Gai Kharka.",
    "overnight": "Camping at Gai Kharka",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["First day of trekking", "Terraced fields and forests", "Rhododendron and pine forests", "Boudha Himal views", "First night camping experience"]
  },
  {
    "day": 4,
    "title": "Trek from Gai Kharka to Rupina La Phedi",
    "altitude": "2,900m → 3,800m",
    "distance": "12km / 5-6 hrs trek",
    "description": "Today's trek takes you through beautiful alpine meadows and forests as you gain significant altitude. The trail ascends gradually, offering increasingly dramatic views of the surrounding peaks, including Boudha Himal (6,672m), Sringi Himal (7,187m), and Ganesh Himal (7,422m). You'll pass through Ruse Kharka, a summer grazing area where yaks and horses graze in the lush meadows, before continuing to Rupina La Phedi (3,800m), your base camp for tomorrow's pass crossing. The afternoon is free to rest, hydrate, and prepare for the challenging ascent ahead. Your guide will brief you on the Rupina La Pass crossing procedure. Overnight camping at Rupina La Phedi.",
    "overnight": "Camping at Rupina La Phedi",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Alpine meadows", "Sringi Himal and Ganesh Himal views", "Ruse Kharka grazing area", "Pass preparation briefing", "Remote mountain atmosphere"]
  },
  {
    "day": 5,
    "title": "Cross Rupina La Pass to Boudha Himal Base Camp",
    "altitude": "3,800m → 4,720m → 3,600m",
    "distance": "14km / 8-9 hrs trek",
    "description": "The most challenging and rewarding day of the entire trek! Start very early (3-4 AM) for the ascent to Rupina La Pass (4,720m). The climb is steep and demanding, crossing rocky terrain with stone cairns marking the way. The altitude makes every step feel effortful - move slowly, breathe deeply, and rest frequently. Reaching the summit of Rupina La Pass is an indescribable feeling - prayer flags flutter in the wind as you're rewarded with breathtaking 360-degree views of Manaslu (8,163m), Himal Chuli (7,893m), Boudha Himal (6,672m), Peak 29, and the entire Ganesh Himal range stretching to the Tibetan border. After celebrating at the top and taking photographs, begin the long descent to Boudha Himal Base Camp (3,600m), passing glacial moraines, pristine mountain scenery, and perhaps even small glacial lakes. This is a tiring but unforgettable day - you have now crossed Rupina La Pass! Overnight camping at Boudha Himal Base Camp.",
    "overnight": "Camping at Boudha Himal Base Camp",
    "meals": "Breakfast, Packed Lunch, Dinner",
    "highlights": ["Rupina La Pass crossing (4,720m)", "360-degree Himalayan panorama", "Manaslu & Himal Chuli views", "Ganesh Himal range", "Glacial moraine and lakes"]
  },
  {
    "day": 6,
    "title": "Trek from Boudha Himal Base Camp to Zhong Kharka",
    "altitude": "3,600m → 2,960m",
    "distance": "11km / 6-7 hrs trek",
    "description": "Today you continue your descent through stunning alpine landscapes. The trail follows the Boudha Himal glacier moraine and offers incredible views back toward the Rupina La Pass you conquered yesterday. You'll follow the Chhuling Khola (river) through forests and meadows, with opportunities to spot Himalayan wildlife including blue sheep (bharal), Himalayan thar, and perhaps even a glimpse of the elusive snow leopard (tracks are more common than sightings). The vegetation becomes lusher as you lose altitude, with rhododendron and pine forests surrounding the trail. Zhong Kharka (2,960m) is a beautiful grazing pasture surrounded by forests and mountains, with basic camping facilities. Overnight camping at Zhong Kharka.",
    "overnight": "Camping at Zhong Kharka",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Glacial moraine descent", "Views back to Rupina La Pass", "Wildlife spotting (blue sheep, thar)", "Chhuling Khola river", "Peaceful forest camping"]
  },
  {
    "day": 7,
    "title": "Trek from Zhong Kharka to Nyak Village",
    "altitude": "2,960m → 2,340m",
    "distance": "12km / 6-7 hrs trek",
    "description": "A long descent day as you leave the high mountains behind and rejoin civilization. The trail follows the river through dense forests of rhododendron, oak, and pine, offering spectacular views of Ganesh Himal (7,422m) through breaks in the canopy. You'll pass through several small settlements with traditional stone houses and terraced farmlands. Nyak Village (2,340m) is a charming village at the junction with the Manaslu Circuit trail, offering warm hospitality and comfortable teahouses. Here, you transition back from camping to teahouse accommodation. Celebrate completing the remote Rupina La Pass section of your journey with a well-deserved hot shower and cold drink! Overnight in Nyak Village.",
    "overnight": "Teahouse in Nyak Village",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Ganesh Himal views", "Forest descent", "Traditional settlements", "Rejoin Manaslu Circuit trail", "Hot shower celebration"]
  },
  {
    "day": 8,
    "title": "Trek from Nyak Village to Deng",
    "altitude": "2,340m → 1,860m",
    "distance": "18km / 6-7 hrs trek",
    "description": "You now join the classic Manaslu Circuit trail, following the Budhi Gandaki River downstream through beautiful forests and traditional villages. The trail offers stunning views of the surrounding peaks and passes through several small settlements including Philim, where you re-register your permits at the checkpoint. This section of the trek is less crowded than the main Manaslu Circuit, offering a sense of wilderness and solitude. Deng (1,860m) is a small village with basic teahouses nestled beside the river, surrounded by lush forests and terraced fields. Overnight in Deng.",
    "overnight": "Teahouse in Deng",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Join Manaslu Circuit trail", "Budhi Gandaki River views", "Philim permit checkpoint", "Forest and river trails", "Deng village arrival"]
  },
  {
    "day": 9,
    "title": "Trek from Deng to Namrung",
    "altitude": "1,860m → 2,630m",
    "distance": "22km / 7-8 hrs trek",
    "description": "Today you trek through increasingly dramatic landscapes with ever-improving mountain views. The trail follows the Budhi Gandaki River upstream, passing through several villages and crossing multiple suspension bridges. As you gain altitude, the Tibetan influence becomes more evident in the architecture - flat-roofed stone houses, prayer flags, mani walls, and chortens appear along the trail. Namrung (2,630m) is a beautiful Tibetan-style village with stunning views of Sringi Himal (7,187m) and the surrounding peaks. The village has a small monastery and several comfortable teahouses. Overnight in Namrung.",
    "overnight": "Teahouse in Namrung",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Budhi Gandaki upstream", "Suspension bridge crossings", "Tibetan architecture", "Sringi Himal views", "Namrung village"]
  },
  {
    "day": 10,
    "title": "Trek from Namrung to Samagaon",
    "altitude": "2,630m → 3,530m",
    "distance": "19km / 7-8 hrs trek",
    "description": "Today you catch your first breathtaking views of Mount Manaslu (8,163m), the world's eighth highest peak! The trail passes through Lho village, with its beautiful ancient monastery perched on a hillside and spectacular views of Manaslu's north face. Continue through stunning terrain with panoramic mountain views including Ngadi Himal and Himal Chuli. Samagaon (also called Sama - 3,530m) is the largest village on the entire Manaslu Circuit, with a gompa (monastery), school, health post, and numerous teahouses. This traditional Tibetan Buddhist village is surrounded by dramatic peaks including Manaslu (8,163m), Ngadi Himal (7,870m), and Himal Chuli (7,893m). Take time to explore the village, visit the local monastery, and enjoy the spectacular Himalayan panorama. Overnight in Samagaon.",
    "overnight": "Teahouse in Samagaon",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["First views of Mt. Manaslu (8,163m)", "Lho village monastery", "Ngadi Himal and Himal Chuli views", "Samagaon largest village", "Tibetan Buddhist culture"]
  },
  {
    "day": 11,
    "title": "Acclimatization Day in Samagaon - Manaslu Base Camp Hike",
    "altitude": "3,530m → 4,800m → 3,530m",
    "distance": "14km / 6-7 hrs round trip hike",
    "description": "A crucial acclimatization day before the challenging Larkya La Pass (5,106m) crossing. The golden rule: climb high, sleep low. Today's optional hike is to Manaslu Base Camp (4,800m), offering spectacular close-up views of Manaslu's massive south face and the Punggen Glacier. The trail climbs steadily through rocky moraine with breathtaking views of hanging glaciers, icefalls, and the towering peaks above. Alternatively, you can take a shorter hike to Birendra Tal (Birendra Lake), a stunning turquoise glacial lake at approximately 3,700m fed by the melting ice of the Manaslu Glacier. Another option is to visit the ancient Pungyen Gompa (Fairy Tale Gompa), perched on a hillside with spectacular views of the Manaslu massif. This acclimatization day is essential for your body to adapt to high altitude before the pass crossing. Listen to your body, stay hydrated, and rest when needed. Overnight in Samagaon.",
    "overnight": "Teahouse in Samagaon",
    "meals": "Breakfast, Packed Lunch, Dinner",
    "highlights": ["Manaslu Base Camp hike (4,800m)", "Punggen Glacier views", "Birendra Tal glacial lake", "Pungyen Gompa option", "Essential acclimatization for Larkya La"]
  },
  {
    "day": 12,
    "title": "Trek from Samagaon to Samdo",
    "altitude": "3,530m → 3,875m",
    "distance": "8km / 3-4 hrs trek",
    "description": "A relatively easy day with gradual climbing, allowing for continued acclimatization. The trail offers spectacular views of Manaslu (8,163m), Samdo Peak (6,325m), and surrounding glaciers. You'll pass through Kermo Kharka, a seasonal grazing area with yak pastures, and walk through juniper forests with the fragrant scent of juniper in the air. Samdo (3,875m) is the last major village before the Larkya La Pass crossing. This remote settlement has strong Tibetan heritage, with locals who still speak Tibetan dialect, wear traditional clothing, and maintain ancient customs. Some families still trade with Tibet via the nearby Lajyang border crossing. Explore the village with its prayer wheels, mani walls, chortens, and traditional flat-roofed stone houses. Overnight in Samdo.",
    "overnight": "Teahouse in Samdo",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Kermo Kharka yak pastures", "Juniper forests", "Samdo Peak (6,325m) views", "Remote Tibetan village", "Traditional culture and customs"]
  },
  {
    "day": 13,
    "title": "Trek from Samdo to Dharmasala (Larkya Phedi)",
    "altitude": "3,875m → 4,460m",
    "distance": "12km / 5-6 hrs trek",
    "description": "A short but important trek to the high camp below Larkya La Pass. The terrain becomes increasingly barren and alpine as you climb above the tree line for the final time. The trail passes through Larkya Bazaar, an old trading post that was once a bustling hub for salt and wool traders traveling between Nepal and Tibet. From here, the trail continues on rocky moraine with stunning views of Larkya Peak and the surrounding glaciers. Dharmasala (4,460m), also called Larkya Phedi, is a basic stone shelter serving as the final stop before the pass crossing. The accommodation here is very basic - this is a true high-altitude camp. Rest early, organize your gear for tomorrow's pre-dawn start, and try to sleep as conditions allow. Your guide will check weather conditions and confirm the departure time (typically 3-4 AM). Overnight at Dharmasala.",
    "overnight": "Basic Lodge at Dharmasala",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Larkya Bazaar old trading post", "Alpine terrain above tree line", "Larkya Peak and glacier views", "High camp experience", "Pass preparation briefing"]
  },
  {
    "day": 14,
    "title": "Cross Larkya La Pass & Trek to Bimthang",
    "altitude": "4,460m → 5,106m → 3,720m",
    "distance": "23km / 10-12 hrs trek",
    "description": "The most challenging and rewarding day of the entire trek - the culmination of your Manaslu and Ganesh Himal adventure! Start very early (3-4 AM) to reach the pass before weather conditions deteriorate - afternoon clouds and wind are common. The climb from Dharmasala is steady on a moraine path with stone cairns marking the way. The altitude is extreme, so move slowly, breathe deeply, and rest frequently. Reaching the crest of Larkya La Pass (5,106m) is an indescribable feeling - prayer flags flutter in the wind as you take in the 360-degree panoramic views of Mount Manaslu (8,163m), Himlung Himal (7,126m), Cheo Himal (6,820m), Gyaji Kang, Kang Guru, and Annapurna II (7,937m) in the distance. After celebrating at the pass and taking photographs, begin the long descent to Bimthang (3,720m). The descent passes through glacial moraine, past beautiful glacial lakes (including the stunning white lake and blue lake), and finally through yak pastures into a beautiful valley with rhododendron forests. This is a very long, tiring day but absolutely unforgettable - you have now crossed both Rupina La Pass (4,720m) AND Larkya La Pass (5,106m)! Overnight in Bimthang.",
    "overnight": "Teahouse in Bimthang",
    "meals": "Breakfast, Packed Lunch, Dinner",
    "highlights": ["Larkya La Pass crossing (5,106m)", "360-degree Himalayan panorama", "Manaslu, Himlung, Annapurna views", "Glacial lakes", "Double pass achievement: Rupina La + Larkya La"]
  },
    {
    "day": 15,
    "title": "Trek from Bimthang to Tilje & Jeep to Besisahar",
    "altitude": "3,720m → 2,300m → 760m",
    "distance": "12km trek / 4-5 hrs trek + 4-5 hrs jeep",
    "description": "Your final day of trekking on this epic Manaslu and Ganesh Himal double pass adventure. From Bimthang, the trail descends through beautiful rhododendron and pine forests, passing through the village of Gho with its traditional stone houses and yak pastures. You'll cross several streams and suspension bridges, with the landscape transforming from alpine to subtropical as you lose altitude. The views back toward the Larkya La and the Manaslu range are spectacular from this side. Arrive in Tilje (2,300m), a charming Gurung village with terraced fields and beautiful mountain views. Here, your private jeep awaits for the scenic drive to Besisahar (760m), the district headquarters of Lamjung and the traditional trailhead for the Annapurna Circuit. The jeep drive follows the Marsyangdi River through dramatic gorges, past terraced farmlands, and through traditional villages. Arrive in Besisahar by late afternoon. Check into your teahouse and celebrate your incredible achievement - you have successfully crossed Rupina La Pass (4,720m) AND Larkya La Pass (5,106m) on this epic journey through the Manaslu and Ganesh Himal region! Overnight in Besisahar.",
    "overnight": "Teahouse in Besisahar",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Final day of double pass trek", "Gho village and yak pastures", "Rhododendron and pine forests", "Scenic jeep ride to Besisahar", "Rupina La + Larkya La completion celebration"]
  },
  {
    "day": 16,
    "title": "Bus from Besisahar to Kathmandu",
    "altitude": "760m → 1,350m",
    "distance": "180km / 7-8 hrs bus",
    "description": "After breakfast in Besisahar, board a tourist bus for the scenic drive back to Kathmandu. The journey follows the Marsyangdi River valley before joining the Prithvi Highway along the Trishuli River. The bus passes through beautiful landscapes, terraced farmlands, traditional villages, and dramatic river gorges. You'll pass through Dumre, and eventually reach the outskirts of the Kathmandu Valley. Along the way, you'll have stunning views of the Himalayan foothills and opportunities to see local rural life. The bus journey is a wonderful opportunity to relax, reflect on your epic Manaslu and Ganesh Himal double pass adventure, and watch the world go by. Arrive in Kathmandu by late afternoon. Check into your hotel in Thamel, take a well-deserved hot shower, and enjoy the comforts of the city. The remainder of your day is free for souvenir shopping in Thamel, visiting a spa for a much-needed massage, or simply relaxing after your incredible journey. In the evening, enjoy a farewell dinner celebrating your successful trek - exploring Barpak village, crossing Rupina La Pass (4,720m), reaching Boudha Himal Base Camp, trekking the Manaslu Circuit, and crossing Larkya La Pass (5,106m). Share stories and memories with your trekking team.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast, Dinner",
    "highlights": ["Scenic bus journey to Kathmandu", "Marsyangdi and Trishuli Rivers", "Rural Nepali landscapes", "Thamel souvenir shopping", "Double pass completion celebration dinner"]
  }
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "4 nights hotel accommodation in Kathmandu (3-star with breakfast) including pre/post-trek",
  "All meals during the trek (breakfast, lunch, dinner)",
  "Teahouse accommodation during trek (where available)",
  "Camping equipment (tents, sleeping tents, kitchen tents, toilet tents, cooking gear) for remote section",
  "Experienced English-speaking trekking guide (government licensed)",
  "Assistant guide for groups of 4 or more",
  "Cook and kitchen staff for camping section",
  "Porter service for all trekking and camping gear",
  "Manaslu Restricted Area Permit (RAP)",
  "Manaslu Conservation Area Permit (MCAP)",
  "Annapurna Conservation Area Permit (ACAP)",
  "TIMS card (Trekkers' Information Management System)",
  "All ground transportation as per itinerary (Kathmandu-Barpak & Dharapani-Kathmandu by private jeep)",
  "First aid medical kit including pulse oximeter and portable oxygen",
  "Sleeping bag and down jacket for high altitude (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Manaslu region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Packed lunch for Rupina La and Larkya La crossing days",
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
  "Tips and gratuities for guides, porters, and camping staff (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, landslides, political unrest)",
];

const gallery = [
 
  {
    src: "/images/used/manaslu-main-page.webp",
    alt: "Manaslu Mountain",
    caption: "Mount Manaslu (8,163m) from Samagaon",
  },
  {
    src: "/images/used/rupinala-1.webp",
    alt: "Way to Rupina- La",
    caption: "Way to Rupina La",
  },
  {
    src: "/images/used/rupinala-3.webp",
    alt: "Village Before Rupina La",
    caption: "Village before Rupina La",
  },
  {
    src: "/images/used/rupinala-4.webp",
    alt: "Yak on the Way",
    caption: "Yak on the Way to Samagaon",
  },
  
];

export default function RupinaLaTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  // Trek name constant for auto-fill functionality
  const trekName = "Rupina La Pass Trek";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Rupina La Pass Trek - Himkala Adventure");
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

      {/* Hero Section - Simplified & Larger Heading */}
      <section className="relative h-[45vh] min-h-[380px] md:h-[60vh] md:min-h-[500px] overflow-hidden bg-[#0f2940]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/used/rupinala-4.webp"
            alt="Rupina La Pass Trek"
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
                Strenuous
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Landmark className="w-3 h-3 mr-1" /> Remote Pass
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              RUPINA LA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                PASS TREK
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              A remote and adventurous trek through the lower Manaslu region, crossing the challenging Rupina La Pass 
              and connecting to the classic Manaslu Circuit via Larkya La.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 md:py-12">
        <div className="container mx-auto px-3 md:px-6 max-w-full overflow-hidden">
          {/* Mobile Sticky Book Now Bar */}
          <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-[#C5E0ED]/30 shadow-sm py-2 -mx-3 px-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 line-through">$2,150</div>
                <div className="text-lg font-bold text-[#0f2940]">$1,895</div>
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
              <div className="sticky top-24 space-y-4 md:space-y-6">
                {/* Price Card */}
                <Card className="bg-gradient-to-br from-[#0f2940] to-[#1a4166] border-none rounded-xl md:rounded-2xl overflow-hidden">
                  <CardContent className="p-4 md:p-6">
                    <div className="text-center mb-4 md:mb-6">
                      <span className="text-white/50 text-sm line-through">$2,150</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$1,895</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $255</Badge>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>16 Days / 15 Nights</span>
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
                        <span>Teahouse + Camping</span>
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
                        <span className="text-slate-500">Trek Start/End</span>
                        <span className="font-medium text-[#0f2940]">Barpak / Dharapani</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Highest Point</span>
                        <span className="font-medium text-[#0f2940]">Larkya La (5,106m)</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Rupina La Pass</span>
                        <span className="font-medium text-[#0f2940]">approx. 4,720m</span>
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
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-8 w-full overflow-hidden">
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
                    The <strong>Rupina La Pass Trek</strong> is a remote and adventurous trek in the lower Manaslu region, offering a true off-the-beaten-path experience for experienced trekkers seeking solitude and raw wilderness. Officially opened to tourists in 1991, this route takes you through pristine landscapes, traditional Gurung villages, and across the challenging <strong>Rupina La Pass (approx. 4,720m)</strong>, before connecting to the classic Manaslu Circuit.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The journey begins in <strong>Barpak Village</strong>, the largest Gurung settlement in Nepal and the epicenter of the 2015 earthquake. From here, you'll trek through dense rhododendron forests, alpine meadows, and glacial moraines, with spectacular views of <strong>Manaslu (8,163m), Himal Chuli (7,893m), Boudha Himal (6,672m), and the Ganesh Himal range</strong>. The remote section between Barpak and Nyak Village requires fully outfitted camping, with no teahouses for 5-6 days.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    After crossing Rupina La, you join the classic Manaslu Circuit and continue to the legendary <strong>Larkya La Pass (5,106m)</strong>, one of Nepal's longest and most spectacular high passes. This trek is the ultimate adventure for those seeking to explore the raw beauty of the Himalayas far from the crowds, combining two challenging passes, rich Gurung and Tibetan culture, and some of the most pristine wilderness in Nepal.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Trek Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Cross two challenging high passes: Rupina La (4,720m) and Larkya La (5,106m) ",
                    "Explore Barpak, the largest Gurung village in Nepal and 2015 earthquake epicenter ",
                    "Fully outfitted camping trek through pristine wilderness with no teahouses for 5-6 days ",
                    "Spectacular views of Manaslu (8,163m), Himal Chuli, Boudha Himal, and Ganesh Himal ",
                    "Authentic cultural immersion with Gurung and Tibetan communities ",
                    "Ancient Buddhist monasteries, chortens, and mani walls throughout the region ",
                    "Remote and less-traveled trails - true off-the-beaten-path adventure ",
                    "Opportunity to spot Himalayan wildlife including blue sheep and Himalayan thar ",
                    "Diverse landscapes from subtropical forests to glacial moraines and high passes ",
                    "Combine with Manaslu Circuit for the ultimate Himalayan experience",
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
                        Rhododendrons bloom in vibrant colors, warming temperatures, and excellent visibility. Ideal for crossing both passes with moderate snow conditions.
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
                        The most popular season with crystal-clear skies, stable weather, and perfect conditions. Excellent visibility for mountain photography and pass crossings.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: Winter (Dec-Feb) is extremely cold with heavy snow making the passes impassable. Monsoon (Jun-Aug) brings leeches and landslides - not recommended.</p>
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
                    <li>• <strong>Permits Required:</strong> This trek requires multiple permits including Manaslu Restricted Area Permit, MCAP, ACAP, and TIMS card. Permit costs vary by season.</li>
                    <li>• <strong>Camping Section:</strong> The trek includes 5-6 nights of fully outfitted camping with no teahouses. All camping equipment is provided.</li>
                    <li>• <strong>Guide Mandatory:</strong> Independent trekking is not permitted in this region. You must trek with a licensed guide from a registered agency.</li>
                    <li>• <strong>Physical Fitness:</strong> This is a strenuous trek with long days (8-11 hours on pass days), high altitude (5,106m), and remote terrain. Excellent fitness and prior high-altitude experience required.</li>
                    <li>• <strong>Minimum Group Size:</strong> Restricted Area Permits require a minimum group of 2 trekkers.</li>
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
                      q: "How difficult is the Rupina La Pass Trek?",
                      a: "This trek is rated as strenuous to challenging. You'll trek 5-8 hours daily on rugged terrain with significant altitude gain. The Rupina La and Larkya La pass days involve 8-11 hours of trekking at over 4,700-5,100m with glacier crossings. Prior high-altitude trekking experience and excellent fitness are essential.",
                    },
                    {
                      q: "What is the story behind the name 'Rupina La'?",
                      a: "According to local tales from the villages of Laprak and Barpak, the Rupina La Pass derives its name from a shepherdess named Rupina. Long ago, while tending her sheep in the area, she mysteriously disappeared, leaving a legacy that lent her name to the pass. In the Gurung language, it is also referred to as 'Ruwala,' meaning 'horn pass'.",
                    },
                    {
                      q: "Do I need camping experience for this trek?",
                      a: "No prior camping experience is necessary, but you should be prepared for basic conditions with no running water, squat toilets, and cold temperatures. Our experienced camping staff will set up tents, prepare meals, and ensure your comfort during the 5-6 nights of camping. A positive attitude and flexibility are important.",
                    },
                    {
                      q: "What permits are required and how much do they cost?",
                      a: "You need: Manaslu Restricted Area Permit (USD 75-100/week + per day charges), Manaslu Conservation Area Permit (MCAP ~USD 30), Annapurna Conservation Area Permit (ACAP ~USD 30), and TIMS card (~USD 20). A local Tsum Nupri entrance fee (NPR 1,000) may also apply. Total ranges from USD 200-300 per person depending on season and itinerary length.",
                    },
                    {
                      q: "What wildlife might I see on this trek?",
                      a: "The Manaslu region is home to 33 mammal species including Himalayan tahr, blue sheep (bharal), musk deer, Himalayan marmots, and occasionally snow leopards. Over 110 bird species include the colorful Himalayan monal (Danphe), Nepal's national bird. You may also see langur monkeys in the lower forests.",
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