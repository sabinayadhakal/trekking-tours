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
  Landmark,
  Droplets,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
    alt: "Sacred Tsum Valley with Ganesh Himal - ancient Tibetan Buddhist valley in Nepal's Manaslu region with prayer flags and mountain views",
    caption: "Sacred Tsum Valley with Ganesh Himal",
  },
  {
    src: "/images/used/manaslu-main-page.webp",
    alt: "Mount Manaslu at 8,163m - the eighth highest mountain in the world viewed from the Manaslu Circuit with Tsum Valley trek in Nepal",
    caption: "Mount Manaslu (8,163m)",
  },
  {
    src: "/images/used/tsum-3.webp",
    alt: "Trail to Tsum Valley - scenic trekking route through the sacred Tsum Valley in Nepal's Manaslu region with traditional villages",
    caption: "Way to Sacred Tsum Valley",
  },
  {
    src: "/images/used/tsum-valley-1.webp",
    alt: "Tsum Valley with Ganesh Himal - sacred Himalayan valley with traditional Tibetan Buddhist culture and ancient monasteries in Nepal",
    caption: "Sacred Tsum Valley with Ganesh Himal",
  },
];

export default function ManasluTsumValleyTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);

  const trekName = "Manaslu Circuit with Tsum Valley Trek";
  const canonicalUrl = "https://www.himkalaadventure.com/manaslu-circuit-tsum-valley-trek";
  const pageTitle = "Manaslu Circuit with Tsum Valley Trek - Himkala Adventure";
  const pageDescription = "Manaslu Circuit with Tsum Valley Trek: Explore sacred Tsum Valley, visit Mu Gompa, and cross Larkya La Pass at 5,106m. The ultimate Manaslu adventure. Book now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/tsum-valley-1.webp";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Manaslu Circuit with Tsum Valley Trek - Himkala Adventure")}`;
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
                    <span>Manaslu Region</span>
                  </div>
                  <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Manaslu Circuit <br />
                    <span className="text-[#cf6943]">with Tsum Valley Trek</span>
                  </h1>
                </div>
                <div className="max-w-full md:max-w-[280px]">
                  <p className="text-sm leading-6 text-[#66706d]">
                    Explore the sacred Tsum Valley and circumnavigate Mount Manaslu—a journey through ancient monasteries, 
                    remote Tibetan villages, and across the legendary Larkya La Pass.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                      Challenging
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      <Landmark className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      Tsum Valley
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      5,106m
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
                src="/images/used/tsum-valley-1.webp"
                alt="Manaslu Circuit with Tsum Valley Trek - exploring the sacred Tsum Valley with Ganesh Himal and traditional Tibetan Buddhist monasteries in Nepal"
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
                  $2,050 / person
                </span>
              </div>
            </figure>
          </div>

          {/* Quick Stats - Free Walking Tour Style */}
          <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
              {[
                { label: "Duration", value: "17 Days / 16 Nights" },
                { label: "Group Size", value: "2-8 people" },
                { label: "Max Altitude", value: "5,106m" },
                { label: "Difficulty", value: "Challenging" },
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
                  The <strong className="text-[#14383b]">Manaslu Circuit with Tsum Valley Trek</strong> is one 
                  of Nepal's most authentic and rewarding Himalayan adventures, combining the sacred Tsum Valley 
                  with the classic Manaslu Circuit. This comprehensive 
                  <strong className="text-[#14383b]"> Manaslu Circuit with Tsum Valley trekking</strong> journey 
                  takes you through two restricted regions rich in Tibetan Buddhist culture, culminating in the 
                  crossing of the legendary <strong className="text-[#14383b]">Larkya La Pass (5,106m)</strong> 
                  with spectacular views of Mount Manaslu (8,163m), the world's eighth highest peak.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  The trek begins in the subtropical forests of the Budhi Gandaki Valley before ascending to the 
                  remote <strong className="text-[#14383b]">Tsum Valley</strong>, a sacred Himalayan enclave 
                  opened to trekkers only in 2008. Here you'll explore ancient monasteries including 
                  <strong className="text-[#14383b]"> Rachen Gompa, Mu Gompa, and Dephyudonma Gompa</strong>, 
                  visit <strong className="text-[#14383b]">Milarepa's Cave</strong> where the great Tibetan sage 
                  meditated, and experience the unique 'Shyagya' tradition of non-violence.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  After rejoining the main Manaslu Circuit, you'll trek through traditional Tibetan villages, 
                  past mani walls and chortens, with ever-present views of the towering Himalayas. The highlight 
                  is crossing <strong className="text-[#14383b]">Larkya La Pass</strong>, one of Nepal's longest 
                  high passes, where prayer flags flutter against a 360-degree panorama of peaks including 
                  Manaslu, Himlung Himal, Cheo Himal, Annapurna II, and Ganesh Himal.
                </p>
              </article>

              <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
                <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
                <strong>Important:</strong> This trek requires four permits including Manaslu Restricted Area Permit, 
                Tsum Valley Restricted Area Permit, MCAP, and ACAP. Independent trekking is not permitted. Travel 
                insurance must cover high altitude trekking up to 5,200m and helicopter evacuation.
              </div>
            </div>
          </section>

          {/* Highlights - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Trek Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Explore the sacred Tsum Valley, opened to trekkers in 2008",
                  "Cross the legendary Larkya La Pass (5,106m)",
                  "Visit ancient monasteries: Mu Gompa, Rachen Gompa, Dephyudonma Gompa",
                  "Discover Milarepa's Cave with the footprint of the great Tibetan sage",
                  "Experience the unique 'Shyagya' tradition of non-violence",
                  "Panoramic views of Manaslu (8,163m), Himlung Himal, Annapurna II",
                  "Walk ancient trading routes to Tibet through traditional villages",
                  "Remote wilderness with far fewer trekkers than Everest or Annapurna",
                  "Diverse landscapes from subtropical forests to alpine deserts",
                  "Authentic cultural immersion with Tamang, Gurung, and Tibetan communities",
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
                    Rhododendrons bloom in vibrant colors, warming temperatures, and excellent visibility. Some snow may remain on Larkya La early in the season.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
                </div>
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Snowflake className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Autumn (Sep - Nov)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    The most popular season with crystal-clear skies, stable weather, and perfect conditions for crossing Larkya La. Peak season for mountain photography.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
                </div>
              </div>
              <p className="mt-3 text-[10px] text-[#66706d]">Note: Winter (Dec-Feb) is very cold with heavy snow making the pass difficult. Monsoon (Jun-Aug) brings leeches and landslides - not recommended.</p>
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
                A visual journey through the sacred Tsum Valley and the legendary Manaslu Circuit.
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
                  {
                    q: "Is the Shyagya tradition still practiced today?",
                    a: "Yes! The Tsumba people of Tsum Valley have maintained the 'Shyagya' tradition of non-violence since 1920. Visitors are expected to respect this tradition by not killing any animals or insects while in the valley. This practice has helped preserve the valley's unique ecosystem.",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready for the Ultimate Manaslu Adventure?</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Book your Manaslu Circuit with Tsum Valley Trek today and experience the sacred valley, ancient monasteries, 
                and the legendary Larkya La Pass at 5,106 meters — one of Nepal's most rewarding Himalayan journeys.
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