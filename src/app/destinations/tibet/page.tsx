"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/destinations/hero"
import Notifications from "@/components/destinations/notifications"
import ThemeProvider from "@/components/destinations/themeProvider"
import ToursGrid from "@/components/destinations/tourGrid"
import TourDetailModal from "@/components/destinations/tourdetail"
import { Tour } from "@/types/tour"

export default function TibetPage() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tours, setTours] = useState<Tour[]>([])
  const [loading, setLoading] = useState(true)

  // Mock Tibet tours data
  const mockTibetTours: Tour[] = [
  {
  "id": "T1",
  "title": "Tibet Classic Cultural Tour",
  "location": "Lhasa, Tsedang, Gyatse, Shigatse",
  "duration": "7 Days",
  "rating": 4.8,
  "reviewCount": 58,
  "price": 1899,
  "originalPrice": 2099,
  "excerpt": "A comprehensive journey through Tibet's cultural heartlands, visiting ancient monasteries, palaces, and the cradle of Tibetan civilization",
  "description": "This classic tour covers all major cultural centers of Tibet including Tsedang, Lhasa, Gyatse, and Shigatse. Designed for travelers with limited time and budget, it offers a deep immersion into Tibetan history, spirituality, and architecture. Experience the birthplace of Tibetan civilization, explore UNESCO World Heritage sites, and witness the living traditions of Tibetan Buddhism.",
  "image": "/images/tibet_tours-1.jpg",
  "images": [
"/images/tibet_tours-1.jpg",
    "/images/tibet_tours-2.jpeg",
    "/images/tibet_tours-3.jpg",
  ],
  "tags": ["Cultural", "Buddhist", "Historical", "Budget-Friendly", "UNESCO"],
  "highlights": [
    "Scenic flight from Kathmandu to Lhasa over Himalayas",
    "Explore Tsedang - cradle of Tibetan civilization (3,200m)",
    "Visit Jokhang Temple and Barkhor Square - spiritual heart of Tibet",
    "Tour Potala Palace - iconic UNESCO World Heritage site",
    "See Drepung Monastery - former home of Dalai Lamas",
    "Experience Sera Monastery's monk debates",
    "Visit Tashilunpo Monastery in Shigatse - one of Gelugpa's big six"
  ],
  "includes": [
    "Tibet travel visa and all permits",
    "Kathmandu-Lhasa-Kathmandu round-trip air tickets",
    "4WD Land Cruiser transportation throughout",
    "Accommodation on bed & breakfast basis",
    "English speaking Tibetan guide",
    "All monastery and palace entrance fees",
    "All ground transport in Lhasa"
  ],
  "excludes": [
    "Lunch and dinner during the tour",
    "Personal expenses (drinks, telephone, bar bills, laundry)",
    "Nepal re-entry visa fees",
    "Travel insurance of any kind",
    "Emergency evacuation costs",
    "Tips for guide and driver",
    "Additional meals beyond breakfast"
  ],
  "included": [
    "Tibet travel visa and all permits",
    "Kathmandu-Lhasa-Kathmandu round-trip air tickets",
    "4WD Land Cruiser transportation throughout",
    "Accommodation on bed & breakfast basis",
    "English speaking Tibetan guide",
    "All monastery and palace entrance fees",
    "All ground transport in Lhasa"
  ],
  "excluded": [
    "Lunch and dinner during the tour",
    "Personal expenses (drinks, telephone, bar bills, laundry)",
    "Nepal re-entry visa fees",
    "Travel insurance of any kind",
    "Emergency evacuation costs",
    "Tips for guide and driver",
    "Additional meals beyond breakfast"
  ],
  "entryRequirements": ["Valid passport", "Tibet travel permit", "Chinese visa if required"],
  "requirements": ["Acclimatization to high altitude", "Respectful clothing for monasteries", "Warm clothing"],
  "itinerary": [
    {
      "day": 1,
      "title": "Fly Kathmandu to Lhasa",
      "description": "Scenic flight from Kathmandu (1,350m) to Lhasa (3,650m). Arrive at Gonggar Airport and transfer to hotel. Rest and acclimatize to the high altitude. Light activity recommended for altitude adjustment. Overnight in Lhasa."
    },
    {
      "day": 2,
      "title": "Lhasa Cultural Exploration",
      "description": "Visit Jokhang Temple, founded by King Songtsen Gampo in 647 AD - the spiritual heart of Tibet. Explore Barkhor Square and the ancient Barkhor Street with traditional Tibetan markets. Visit Norbulingka Palace ('Treasure Park'), the 360,000 sqm UNESCO World Heritage site and former summer palace of Dalai Lamas. Tour Sera Monastery (founded 1419), famous for its monk debates and 'Wild Rose' campus covering 28 acres. Overnight in Lhasa."
    },
    {
      "day": 3,
      "title": "Potala Palace & Drepung Monastery",
      "description": "Full day exploring two of Tibet's most iconic sites. Visit the magnificent Potala Palace dominating Lhasa's skyline, with its intricate murals, statues, and scriptures. Then tour Drepung Monastery, the 'Heap of White Rice,' former home of Dalai Lamas before Potala Palace. See the gold-domed Kumbum Stupa. Overnight in Lhasa."
    },
    {
      "day": 4,
      "title": "Drive Lhasa to Gyatse via Tsedang",
      "description": "Drive to Tsedang (3,200m) - the cradle of Tibetan civilization, 183km from Lhasa. Visit Gongpori Caves, said to be the origin place of Tibetan race. See ancient sites including Yambu Lagang and monkey caves. Continue to Gyatse (3,950m), passing through scenic landscapes. Overnight in Gyatse."
    },
    {
      "day": 5,
      "title": "Gyatse to Shigatse",
      "description": "Short 90km drive to Shigatse (3,900m). Visit Tashilunpo Monastery ('Heap of Glory'), one of the six great Gelugpa monasteries, founded by the 1st Dalai Lama in 1447. Explore the 300,000 sqm complex housing 800 monks, including Maitreya Chapel, Panchen Lama's Palace, and Kelsang Temple. Overnight in Shigatse."
    },
    {
      "day": 6,
      "title": "Drive Shigatse to Lhasa",
      "description": "Return drive to Lhasa (280km) through beautiful Tibetan landscapes. Optional stops at traditional villages and viewpoints. Free time in Lhasa for souvenir shopping or personal exploration. Farewell dinner (optional). Overnight in Lhasa."
    },
    {
      "day": 7,
      "title": "Departure from Lhasa",
      "description": "Transfer to Gonggar Airport for your flight to Kathmandu or onward destination. End of your Tibet cultural journey with deep insights into Tibetan civilization and Buddhism."
    }
  ],
  "maxGroupSize": 10,
  "cancellationPolicy": "Full refund up to 21 days before departure. 50% refund 7-21 days before. No refund within 7 days.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "Moderate",
  "maxAltitude": "3,950m (Gyatse)",
  "permits": ["Tibet travel permit", "Chinese visa (if applicable)", "Kathmandu-Lhasa flight tickets"],
  "equipment": ["Warm layered clothing", "Comfortable walking shoes", "Sunglasses & sunscreen", "Camera", "Altitude medication (optional)"],
 
},
  {
  "id": "T2",
  "title": "Namtso Lake Heavenly Trek",
  "location": "Lhasa, Shigatse, Namtso Lake, Zhangmu",
  "duration": "9 Days",
  "rating": 4.9,
  "reviewCount": 47,
  "price": 2199,
  "originalPrice": 2399,
  "excerpt": "A high-altitude adventure to Tibet's sacred turquoise lake at 4,718m, crossing the dramatic Yangpachen Pass at 5,630m",
  "description": "Journey to Namtso, one of Tibet's three holy lakes, known as the 'Heavenly Lake' for its stunning turquoise waters and dramatic mountain backdrop. This expedition combines cultural exploration of Lhasa's monasteries with a challenging high-altitude trek to the remote Namtso Lake, camping beside its sacred shores and experiencing nomadic Tibetan life.",
  "image":     "/images/tibet_tours-4.jpg",

  "images": [
        "/images/tibet_tours-4.jpg",

        "/images/tibet_tours-5.jpeg",

        "/images/tibet_tours-6.jpg",

  ],
  "tags": ["Trekking", "High Altitude", "Lake", "Adventure", "Sacred Sites"],
  "highlights": [
    "Scenic Trans-Himalayan flight with Mt. Everest views",
    "Visit Potala Palace, Jokhang Temple, and Lhasa's major monasteries",
    "Trek to Namtso Lake - Tibet's sacred turquoise lake at 4,718m",
    "Cross Yangpachen Pass at 5,630m altitude",
    "Camp beside the holy lake with nomadic cultural experiences",
    "Visit Tashilunpo Monastery in Shigatse",
    "Overland journey from Lhasa to Kathmandu via Zhangmu"
  ],
  "includes": [
    "Tibet travel visa and all permits",
    "Kathmandu-Lhasa one-way flight ticket",
    "4WD Land Cruiser transportation throughout",
    "Accommodation on bed & breakfast basis",
    "Camping accommodation at Namtso Lake",
    "English speaking Tibetan guide",
    "All monastery and palace entrance fees",
    "All ground transport from Lhasa to Kathmandu"
  ],
  "excludes": [
    "Lunch and dinner during the tour",
    "Personal expenses (drinks, telephone, bar bills, laundry)",
    "Nepal re-entry visa fees",
    "Travel insurance of any kind",
    "Emergency evacuation costs",
    "Tips for guide and driver",
    "Camping equipment (sleeping bags, personal gear)"
  ],
  "included": [
    "Tibet travel visa and all permits",
    "Kathmandu-Lhasa one-way flight ticket",
    "4WD Land Cruiser transportation throughout",
    "Accommodation on bed & breakfast basis",
    "Camping accommodation at Namtso Lake",
    "English speaking Tibetan guide",
    "All monastery and palace entrance fees",
    "All ground transport from Lhasa to Kathmandu"
  ],
  "excluded": [
    "Lunch and dinner during the tour",
    "Personal expenses (drinks, telephone, bar bills, laundry)",
    "Nepal re-entry visa fees",
    "Travel insurance of any kind",
    "Emergency evacuation costs",
    "Tips for guide and driver",
    "Camping equipment (sleeping bags, personal gear)"
  ],
  "entryRequirements": ["Valid passport", "Tibet travel permit"],
  "requirements": ["Excellent physical fitness", "High altitude experience", "Warm camping gear", "Acclimatization preparation"],
  "itinerary": [
    {
      "day": 1,
      "title": "Fly Kathmandu to Lhasa",
      "description": "Scenic one-hour Trans-Himalayan flight from Kathmandu (1,350m) to Lhasa (3,660m) with spectacular views of Mt. Everest and Himalayan peaks. Arrive at Gonggar Airport, meet your Tibetan guide, and transfer to hotel. Rest for altitude acclimatization."
    },
    {
      "day": 2,
      "title": "Lhasa Cultural Introduction",
      "description": "Acclimatization day with light cultural exploration. Visit the iconic Potala Palace, UNESCO World Heritage site and former winter palace of Dalai Lamas. Explore Barkhor Square and Jokhang Temple (founded 647 AD), the spiritual heart of Tibetan Buddhism."
    },
    {
      "day": 3,
      "title": "Lhasa Monastery Tour",
      "description": "Visit Drepung Monastery ('Heap of White Rice'), the largest monastery in Tibet and former home of Dalai Lamas. Then tour Sera Monastery, famous for its lively monk debate sessions. Continue acclimatization for the high-altitude journey ahead."
    },
    {
      "day": 4,
      "title": "Drive Lhasa to Shigatse",
      "description": "250km drive (6-7 hours) to Shigatse (3,900m), Tibet's second-largest city. Scenic journey through Tibetan landscapes with river valleys and traditional villages. Rest and prepare for the high-altitude trek."
    },
    {
      "day": 5,
      "title": "Shigatse to Namtso Lake Trek",
      "description": "Challenging day crossing Yangpachen Pass (5,630m) to reach Namtso Lake (4,718m). The 190km journey takes 4+ hours through dramatic high-altitude terrain. Arrive at Bali Village/Droja Monastery area. Set up camp beside the sacred turquoise lake (70km long, 30km wide). Experience nomadic culture with local herders in tents around the lake."
    },
    {
      "day": 6,
      "title": "Namtso Lake Exploration & Return to Shigatse",
      "description": "Morning exploration of Namtso Lake - one of Tibet's three holy lakes covering 1,961 sq km with five uninhabited islands. Enjoy views of Nyechen Tangla mountain range (7,000m) reflected in the crystal-clear blue waters. Return to Shigatse, visiting Tashilunpo Monastery ('Heap of Glory'), founded 1447 by 1st Dalai Lama."
    },
    {
      "day": 7,
      "title": "Drive Shigatse to Lhatse",
      "description": "90km drive (3 hours) to Lhatse (4,050m). Shorter travel day for rest and recovery after the high-altitude trek. Optional exploration of local villages and landscapes."
    },
    {
      "day": 8,
      "title": "Drive Lhatse to Zhangmu",
      "description": "Full day drive to Zhangmu (3,600m), the border town between Tibet and Nepal. Dramatic descent through changing landscapes from high plateau to lush border regions. Overnight in guest house."
    },
    {
      "day": 9,
      "title": "Zhangmu to Kathmandu via Kodari",
      "description": "Cross the friendship bridge at Kodari border into Nepal. Drive from border to Kathmandu (approx 5-6 hours) through scenic Nepalese foothills. Arrive in Kathmandu, end of Tibet high-altitude adventure."
    }
  ],
  "maxGroupSize": 8,
  "cancellationPolicy": "Full refund up to 30 days before departure. 50% refund 15-30 days before. No refund within 15 days.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "Challenging",
  "maxAltitude": "5,630m (Yangpachen Pass)",
  "permits": ["Tibet travel permit", "Border permits", "Kathmandu-Lhasa flight"],
  "equipment": ["Warm sleeping bag (-10°C)", "Trekking poles", "High-altitude clothing", "Sunglasses & sunscreen", "Headlamp", "Water purification"],
},
  {
  "id": "T3",
  "title": "Everest Base Camp Tibet Adventure",
  "location": "Lhasa, Gyatse, Shigatse, Rongbuk, Everest Base Camp",
  "duration": "8 Days",
  "rating": 5.0,
  "reviewCount": 89,
  "price": 2499,
  "originalPrice": 2699,
  "excerpt": "Experience the majesty of Mount Everest from the Tibetan side, hiking to base camp at 5,200m with cultural immersion in Tibet's sacred sites",
  "description": "Fulfill your Everest dream affordably by standing at its very foot from the Tibetan side. This tour combines cultural exploration of Lhasa's UNESCO sites with a journey across high Himalayan passes to Everest Base Camp. Experience the grandeur of Everest up close without the extreme challenges of climbing, while immersing in Tibetan culture and crossing the world's highest plateau.",
  "image": "/images/tibet_tours-7.jpg",
  "images": [
    "/images/tibet_tours-7.jpg",
    "/images/tibet_tours-8.jpg",
    "/images/tibet_tours-9.jpg",
  ],
  "tags": ["Everest", "Base Camp", "High Altitude", "Adventure", "Cultural"],
  "highlights": [
    "Scenic Trans-Himalayan flight with Everest views from air",
    "Explore Lhasa's UNESCO sites: Potala Palace, Jokhang Temple",
    "Cross multiple high passes above 5,000m including Gyatchula Pass",
    "Visit Tashilunpo Monastery - one of Tibet's six great Gelugpa monasteries",
    "Hike to Everest Base Camp (5,200m) from Rongbuk Monastery",
    "Experience traditional Tibetan countryside and rustic life",
    "Overland journey from Tibet to Nepal via Friendship Highway"
  ],
  "includes": [
    "Private 4WD Jeep transportation throughout",
    "Tibet travel permit and Everest Base Camp permit",
    "English speaking Tibetan guide",
    "Accommodation on twin sharing basis",
    "All monastery and heritage site entrance fees",
    "Daily breakfast",
    "Kathmandu-Lhasa one-way flight ticket"
  ],
  "excludes": [
    "Lunch and dinner during the tour",
    "Nepal re-entry visa fee",
    "Travel insurance",
    "Emergency evacuation costs",
    "Personal expenses (drinks, telephone, bar bills, laundry)",
    "Tips for guide and driver",
    "Optional horse cart ride at Rongbuk"
  ],
  "included": [
    "Private 4WD Jeep transportation throughout",
    "Tibet travel permit and Everest Base Camp permit",
    "English speaking Tibetan guide",
    "Accommodation on twin sharing basis",
    "All monastery and heritage site entrance fees",
    "Daily breakfast",
    "Kathmandu-Lhasa one-way flight ticket"
  ],
  "excluded": [
    "Lunch and dinner during the tour",
    "Nepal re-entry visa fee",
    "Travel insurance",
    "Emergency evacuation costs",
    "Personal expenses (drinks, telephone, bar bills, laundry)",
    "Tips for guide and driver",
    "Optional horse cart ride at Rongbuk"
  ],
  "entryRequirements": ["Valid passport", "Tibet travel permit", "Everest Base Camp permit", "Chinese visa if required"],
  "requirements": ["Good physical condition", "High altitude acclimatization", "Warm clothing for sub-zero temperatures", "Hiking shoes"],
  "itinerary": [
    {
      "day": 1,
      "title": "Fly Kathmandu to Lhasa",
      "description": "Scenic one-hour Trans-Himalayan flight from Kathmandu (1,350m) to Lhasa (3,650m) with breathtaking views of Everest and Himalayan peaks. Arrive at Gonggar Airport, meet your Tibetan guide, and transfer to hotel. Rest and begin acclimatization to high altitude."
    },
    {
      "day": 2,
      "title": "Lhasa Cultural Immersion",
      "description": "Visit Jokhang Temple (founded 647 AD), the spiritual heart of Tibetan Buddhism. Explore Barkhor Square, the ancient pilgrimage circuit and market. Tour the magnificent Potala Palace, UNESCO World Heritage site and former winter palace of Dalai Lamas. Continue acclimatization."
    },
    {
      "day": 3,
      "title": "Lhasa Monastery Exploration",
      "description": "Visit Drepung Monastery ('Heap of White Rice'), the world's largest monastery and former home of Dalai Lamas. Then tour Sera Monastery, famous for its philosophical monk debates. Final acclimatization before heading to higher altitudes."
    },
    {
      "day": 4,
      "title": "Lhasa to Gyatse & Shigatse",
      "description": "250km drive to Gyatse (3,950m) via Yamdrok Lake and high passes above 5,000m. Experience astonishing high-altitude landscapes. Visit Gyatse's traditional countryside. Continue 90km to Shigatse (3,900m). Visit Tashilunpo Monastery, founded 1447 by 1st Dalai Lama, one of Tibet's six great Gelugpa monasteries."
    },
    {
      "day": 5,
      "title": "Shigatse to Xegar via Sakya",
      "description": "270km drive to Xegar (4,100m) via Sakya Monastery. Cross dramatic high-altitude terrain with spectacular mountain views. Experience the changing Tibetan landscape as you approach the Everest region. Overnight in basic guest house."
    },
    {
      "day": 6,
      "title": "Xegar to Rongbuk",
      "description": "90km drive to Rongbuk (4,980m), the world's highest monastery. Cross Gyatchula Pass (5,200m) with fabulous views. Witness Tibetan rustic life in remote villages. Arrive at Rongbuk Guest House with first views of Mount Everest's north face."
    },
    {
      "day": 7,
      "title": "Everest Base Camp Hike & Drive to Nyalam",
      "description": "Morning hike 4km from Rongbuk to Everest Base Camp (5,200m). Option to rent horse cart for the journey. Stand at the foot of the world's highest mountain (8,848m). Experience the great view of Everest from Tibetan side. Afternoon drive 315km to Nyalam (3,700m) through spectacular Himalayan scenery."
    },
    {
      "day": 8,
      "title": "Nyalam to Kathmandu via Zhangmu",
      "description": "Drive 155km to Zhangmu border town. Cross into Nepal via Friendship Bridge at Kodari. Continue 123km drive to Kathmandu through scenic Nepalese foothills on the Araniko Highway (built 1960s). Arrive in Kathmandu, end of your Everest Base Camp adventure."
    }
  ],
  "maxGroupSize": 6,
  "cancellationPolicy": "Full refund up to 30 days before departure. 50% refund 15-30 days before. No refund within 15 days.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "Challenging",
  "maxAltitude": "5,200m (Everest Base Camp)",
  "permits": ["Tibet travel permit", "Everest Base Camp permit", "Border crossing permits"],
  "equipment": ["Hiking shoes", "Warm clothing (layers)", "Sunglasses & sunscreen", "Headlamp", "Water bottle", "Trekking poles (optional)"],
},

{
  "id": "T4",
  "title": "Tibet Overland Adventure: Nepal to Lhasa",
  "location": "Nyalam, Lhatse, Shigatse, Gyantse, Lhasa",
  "duration": "8 Days",
  "rating": 4.7,
  "reviewCount": 52,
  "price": 1999,
  "originalPrice": 2199,
  "excerpt": "An epic overland journey from Nepal to Tibet, crossing high mountain passes and exploring ancient monasteries along the historic Friendship Highway",
  "description": "Embark on an exciting overland adventure from Kathmandu to Lhasa via the historic Araniko Highway. This journey takes you through dramatic Himalayan landscapes, crossing the Tibetan Plateau at 5,200m, visiting ancient monasteries, fortress cities, and culminating in Lhasa's spiritual heart. Experience the raw beauty of Tibet's countryside and its profound cultural heritage.",
  "image":"/images/tibet_tours-10.jpg",

  "images": [
       "/images/tibet_tours-10.jpg",

        "/images/tibet_tours-11.jpg",

    "/images/tibet_tours-12.jpg",
  ],
  "tags": ["Overland", "Road Trip", "Cultural", "High Altitude", "Historic Route"],
  "highlights": [
    "Scenic drive on Araniko Highway from Kathmandu to Kodari border",
    "Breathtaking mountain views of Langtang, Gaurishankar, and Melungtse",
    "Cross Lalung La Pass at 5,200m on Tibetan Plateau",
    "Visit Tashilunpo Monastery in Shigatse - seat of Panchen Lamas",
    "Explore Gyantse Fortress and Pelkhor Chode Monastery",
    "See the nine-storey thangka wall at Tashilunpo",
    "Discover Lhasa's Potala Palace, Jokhang Temple, and Barkhor Square"
  ],
  "includes": [
    "Private 4WD transportation throughout",
    "Tibet travel permit and all necessary documents",
    "Licensed English-speaking Tibetan guide",
    "Accommodation on twin sharing basis",
    "All sightseeing and monastery entrance fees",
    "Daily breakfast",
    "Government taxes and service charges"
  ],
  "excludes": [
    "Lunch and dinner during the tour",
    "Travel insurance of any kind",
    "Personal expenses (drinks, telephone, laundry, bar bills)",
    "Tips for guide and driver",
    "Nepal exit/entry visa fees",
    "Lhasa onward flight ticket",
    "Any cost not mentioned in includes section"
  ],
  "included": [
    "Private 4WD transportation throughout",
    "Tibet travel permit and all necessary documents",
    "Licensed English-speaking Tibetan guide",
    "Accommodation on twin sharing basis",
    "All sightseeing and monastery entrance fees",
    "Daily breakfast",
    "Government taxes and service charges"
  ],
  "excluded": [
    "Lunch and dinner during the tour",
    "Travel insurance of any kind",
    "Personal expenses (drinks, telephone, laundry, bar bills)",
    "Tips for guide and driver",
    "Nepal exit/entry visa fees",
    "Lhasa onward flight ticket",
    "Any cost not mentioned in includes section"
  ],
  "entryRequirements": ["Valid passport", "Tibet travel permit", "Chinese visa if required", "Nepal visa"],
  "requirements": ["Good physical condition", "High altitude preparedness", "Warm clothing", "Flexibility for road conditions"],
  "itinerary": [
    {
      "day": 1,
      "title": "Kathmandu to Nyalam via Kodari Border",
      "description": "Morning departure from Kathmandu by private vehicle on scenic Araniko Highway. Stop at Kodari border for immigration formalities. Cross into Tibet at Zhangmu, enjoying views of Langtang, Gaurishankar, and Melungtse mountains. Drive to Nyalam (3,700m) for overnight acclimatization."
    },
    {
      "day": 2,
      "title": "Nyalam to Lhatse via Tibetan Plateau",
      "description": "Ascend to Tibetan Plateau, crossing dramatic high passes including Lalung La Pass (5,200m). Enjoy astounding views of Shisapangma (8,027m), the only 8,000m peak entirely in Tibet. Drive through vast, open landscapes to Lhatse (4,000m) for overnight stay."
    },
    {
      "day": 3,
      "title": "Lhatse to Shigatse",
      "description": "Drive to Shigatse (3,800m), Tibet's second largest city. Visit magnificent Tashilunpo Monastery, the seat of Panchen Lamas since 1447. See the impressive nine-storey thangka wall where immense painted scrolls are displayed. Experience the 'barbaric splendor' noted by French traveler Alexandra David-Neel in 1916."
    },
    {
      "day": 4,
      "title": "Shigatse to Gyantse",
      "description": "Short drive to Gyantse (3,900m), historically important trading city. Explore Gyantse Fortress (Gyantse Dzong) dominating the skyline. Visit Pelkhor Chode Monastery complex and the magnificent Kumbum Stupa, erected in 1427 by a Gyantse Prince - an ornate multi-tiered stupa with exquisite chapels."
    },
    {
      "day": 5,
      "title": "Gyantse to Lhasa",
      "description": "Full day drive (approx 260km) to Lhasa (3,650m), Tibet's spiritual capital. Journey through Yamdrok Lake area and high mountain passes. Arrive in Lhasa, check into hotel, and rest after the long overland journey."
    },
    {
      "day": 6,
      "title": "Lhasa Cultural Exploration",
      "description": "Full day exploring Lhasa's UNESCO World Heritage sites. Visit the iconic Potala Palace, former winter residence of Dalai Lamas. Explore Jokhang Temple, Tibet's most sacred temple founded in 647 AD. Wander through Barkhor Square, the ancient pilgrimage circuit and bustling market area."
    },
    {
      "day": 7,
      "title": "Lhasa Monastery Tour",
      "description": "Visit Drepung Monastery, once the world's largest monastery housing 10,000 monks. Explore Sera Monastery, famous for its philosophical monk debates. Optional visit to Norbulingka Palace, summer residence of Dalai Lamas. Free time for souvenir shopping or personal exploration."
    },
    {
      "day": 8,
      "title": "Departure from Lhasa",
      "description": "Transfer to Lhasa Gonggar Airport for your onward flight. End of epic overland journey through Tibet's cultural and natural wonders."
    }
  ],
  "maxGroupSize": 6,
  "cancellationPolicy": "Full refund up to 21 days before departure. 50% refund 7-21 days before. No refund within 7 days.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "Moderate to Challenging",
  "maxAltitude": "5,200m (Lalung La Pass)",
  "permits": ["Tibet travel permit", "Border crossing permits"],
  "equipment": ["Warm layered clothing", "Comfortable travel clothes", "Sunglasses & sunscreen", "Camera", "Personal medication"],
  
},

{
  "id": "T5",
  "title": "Tibet Fly-In Drive-Out Explorer",
  "location": "Lhasa, Gyatse, Shigatse, Nyalam, Kathmandu",
  "duration": "6 Days",
  "rating": 4.8,
  "reviewCount": 61,
  "price": 1799,
  "originalPrice": 1999,
  "excerpt": "Perfect blend of flying to Lhasa and overland return to Kathmandu, experiencing Tibet's cultural treasures and breathtaking Himalayan landscapes",
  "description": "Experience the best of both worlds with this unique tour that begins with a spectacular mountain flight from Kathmandu to Lhasa and returns via an epic overland journey through Tibet's heartland. Witness the dramatic transition from Nepal's green hills to Tibet's high plateau, explore ancient monasteries and palaces, and enjoy panoramic mountain views including Everest, Cho Oyu, Makalu, and Shishapangma.",
  "image":     "/images/tibet_tours-13.jpg",

  "images": [
        "/images/tibet_tours-13.jpg",

        "/images/tibet_tours-14.jpg",

        "/images/tibet_tours-15.jpg",

  ],
  "tags": ["Fly-In", "Drive-Out", "Mountain Views", "Cultural", "Short Tour"],
  "highlights": [
    "Scenic mountain flight Kathmandu to Lhasa with Everest views",
    "Explore Lhasa's UNESCO sites: Potala Palace, Jokhang Temple",
    "Visit Sera and Drepung Monasteries - Tibet's great monastic universities",
    "See turquoise Yamdrok Lake and cross high Kamba La Pass",
    "Visit Tashilhunpo Monastery - seat of Panchen Lama",
    "Panoramic mountain views of Everest, Cho Oyu, Makalu, Shishapangma",
    "Overland journey through Tibetan countryside to Kathmandu"
  ],
  "includes": [
    "Private 4WD transportation throughout Tibet",
    "Tibet travel permit and all necessary documents",
    "Licensed English-speaking Tibetan guide",
    "Accommodation on twin sharing basis",
    "All sightseeing and monastery entrance fees",
    "Daily breakfast",
    "Government taxes and service charges",
    "Kathmandu-Lhasa one-way flight ticket"
  ],
  "excludes": [
    "Lunch and dinner during the tour",
    "Nepal re-entry visa fee",
    "Travel insurance of any kind",
    "Personal expenses (drinks, telephone, laundry, bar bills)",
    "Tips for guide and driver",
    "Kathmandu airport transfers",
    "Any cost not mentioned in includes section"
  ],
  "included": [
    "Private 4WD transportation throughout Tibet",
    "Tibet travel permit and all necessary documents",
    "Licensed English-speaking Tibetan guide",
    "Accommodation on twin sharing basis",
    "All sightseeing and monastery entrance fees",
    "Daily breakfast",
    "Government taxes and service charges",
    "Kathmandu-Lhasa one-way flight ticket"
  ],
  "excluded": [
    "Lunch and dinner during the tour",
    "Nepal re-entry visa fee",
    "Travel insurance of any kind",
    "Personal expenses (drinks, telephone, laundry, bar bills)",
    "Tips for guide and driver",
    "Kathmandu airport transfers",
    "Any cost not mentioned in includes section"
  ],
  "entryRequirements": ["Valid passport", "Tibet travel permit", "Chinese visa if required", "Nepal visa for re-entry"],
  "requirements": ["Good physical condition", "High altitude preparedness", "Warm clothing", "Comfortable travel clothes"],
  "itinerary": [
    {
      "day": 1,
      "title": "Fly Kathmandu to Lhasa - Mountain Spectacular",
      "description": "Morning scenic flight from Kathmandu (1,350m) to Lhasa (3,650m). Enjoy dramatic views of Nepal Himalayas from Annapurna to Kanchanjunga range. Flight parallels spectacular peaks, circles around Mt. Everest, and descends to Tibetan Plateau. Arrive at Gonggar Airport, meet Tibetan guide, transfer to hotel. Rest for altitude acclimatization."
    },
    {
      "day": 2,
      "title": "Lhasa Cultural Immersion",
      "description": "Full day exploring Lhasa's spiritual heart. Visit Jokhang Temple (founded 647 AD), Tibet's most sacred temple. Wander through Barkhor Bazaar, the ancient pilgrimage circuit and bustling market. Tour the magnificent Potala Palace, UNESCO World Heritage site and former winter palace of Dalai Lamas. Continue altitude acclimatization."
    },
    {
      "day": 3,
      "title": "Lhasa Monastery Exploration",
      "description": "Visit Drepung Monastery, once the world's largest monastery housing 10,000 monks. Explore Sera Monastery, famous for its philosophical monk debates held in courtyard. Experience the living traditions of Tibetan Buddhism. Final acclimatization before heading to higher regions."
    },
    {
      "day": 4,
      "title": "Lhasa to Gyatse & Shigatse via Yamdrok Lake",
      "description": "250km drive (5-6 hours) to Gyatse (3,950m). Cross Kamba La Pass (4,794m) with breathtaking views of turquoise Yamdrok Lake. Visit Pelkhor Chode Monastery and the magnificent Kumbum Stupa in Gyatse. Continue to Shigatse (3,900m), Tibet's second largest city. Overnight in Shigatse."
    },
    {
      "day": 5,
      "title": "Shigatse to Nyalam via Tingri",
      "description": "460km drive (7-8 hours) to Nyalam (3,700m). Visit Tashilhunpo Monastery in Shigatse, seat of Panchen Lama since 1447. Drive through Tingri with incredible mountain views of Everest (8,848m), Cho Oyu (8,188m), Makalu (8,485m), and Shishapangma (8,027m). Cross Kora La Pass and experience vast Tibetan Plateau with nomadic camps. Arrive at Nyalam Guest House."
    },
    {
      "day": 6,
      "title": "Nyalam to Kathmandu via Zhangmu Border",
      "description": "155km drive (4-5 hours) to Zhangmu border town. Cross into Nepal at Kodari border. Continue scenic drive to Kathmandu, enjoying panoramic views of Nepalese foothills. Arrive in Kathmandu, end of memorable Tibet fly-in drive-out adventure."
    }
  ],
  "maxGroupSize": 8,
  "cancellationPolicy": "Full refund up to 21 days before departure. 50% refund 7-21 days before. No refund within 7 days.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "Moderate",
  "maxAltitude": "4,794m (Kamba La Pass)",
  "permits": ["Tibet travel permit", "Border crossing permits", "Flight permit"],
  "equipment": ["Warm layered clothing", "Sunglasses & sunscreen", "Camera", "Comfortable shoes", "Daypack"],
},

{
  "id": "T6",
  "title": "Lhasa Essential: Heart of Tibet",
  "location": "Lhasa",
  "duration": "4 Days",
  "rating": 4.6,
  "reviewCount": 48,
  "price": 1299,
  "originalPrice": 1449,
  "excerpt": "A compact journey to Tibet's spiritual capital, exploring the sacred sites that make Lhasa 'The Place of the Gods' in Tibetan language",
  "description": "Experience the mystical allure of Lhasa, once known as 'The Forbidden City.' This essential tour takes you to the heart of Tibetan Buddhism, visiting the magnificent Potala Palace perched on Marpo Ri hill, the sacred Jokhang Temple housing Tibet's most precious relics, and the vibrant Barkhor pilgrimage circuit. Discover why Lhasa has been a magnet for pilgrims for centuries.",
  "image": "/images/tibet_tours-16.jpg",
  "images": [
    "/images/tibet_tours-16.jpg",
    "/images/tibet_tours-17.jpg",
    "/images/tibet_tours-18.jpg",
  ],
  "tags": ["Lhasa", "Cultural", "Short Trip", "Spiritual", "UNESCO"],
  "highlights": [
    "Visit Potala Palace - world's largest palace on Marpo Ri hill",
    "Explore Jokhang Temple with Tibet's most precious religious relics",
    "Walk the ancient Barkhor pilgrimage circuit and market",
    "Tour Drepung Monastery - once home to 10,000 monks",
    "Witness monk debates at Sera Monastery",
    "Experience unique Tibetan culture and spirituality",
    "Fly over Himalayas with mountain views"
  ],
  "includes": [
    "Tibet travel visa and all necessary permits",
    "Kathmandu-Lhasa-Kathmandu round-trip air tickets",
    "Licensed English-speaking Tibetan guide",
    "All monastery and palace entrance fees",
    "Airport transfers in Lhasa",
    "Local transportation for sightseeing",
    "3 nights hotel accommodation in Lhasa"
  ],
  "excludes": [
    "Lunch and dinner during the tour",
    "Nepal re-entry visa fees",
    "Travel insurance of any kind",
    "Personal expenses (drinks, phone, bar, laundry, souvenirs)",
    "Emergency evacuation costs",
    "Tips for guide and driver",
    "Hotel accommodation in Kathmandu"
  ],
  "included": [
    "Tibet travel visa and all necessary permits",
    "Kathmandu-Lhasa-Kathmandu round-trip air tickets",
    "Licensed English-speaking Tibetan guide",
    "All monastery and palace entrance fees",
    "Airport transfers in Lhasa",
    "Local transportation for sightseeing",
    "3 nights hotel accommodation in Lhasa"
  ],
  "excluded": [
    "Lunch and dinner during the tour",
    "Nepal re-entry visa fees",
    "Travel insurance of any kind",
    "Personal expenses (drinks, phone, bar, laundry, souvenirs)",
    "Emergency evacuation costs",
    "Tips for guide and driver",
    "Hotel accommodation in Kathmandu"
  ],
  "entryRequirements": ["Valid passport", "Tibet travel permit", "Chinese visa if required"],
  "requirements": ["Respectful clothing for religious sites", "Comfortable walking shoes", "Acclimatization to 3,650m"],
  "itinerary": [
    {
      "day": 1,
      "title": "Fly Kathmandu to Lhasa - Arrival in Sacred City",
      "description": "Morning flight from Kathmandu (1,350m) to Lhasa (3,650m). Enjoy aerial views of Himalayas during 1-hour flight. Arrive at Gonggar Airport, meet Tibetan guide, and transfer to hotel in Lhasa. Rest and acclimatize to high altitude. Evening light walk around hotel area. Experience the calm, jovial nature of Tibetan people."
    },
    {
      "day": 2,
      "title": "Lhasa Spiritual Heart: Potala Palace & Jokhang Temple",
      "description": "Morning visit to the magnificent Potala Palace, perched on Marpo Ri (Red Hill). Explore the world's largest palace that served as residence of Dalai Lamas of Gelugpa sect. Afternoon visit to Jokhang Temple, housing Tibet's most precious religious relics. Walk the ancient Barkhor Street pilgrimage circuit, experiencing original Tibetan culture at the bustling market. Observe pilgrims performing kora (circumambulation)."
    },
    {
      "day": 3,
      "title": "Great Monasteries: Drepung & Sera",
      "description": "Morning drive to Drepung Monastery, 8km west of Lhasa. Visit the world's largest monastery (founded 1416) that once housed over 10,000 monks. Afternoon tour to Sera Monastery at the foot of Tatipu Hill (north of Lhasa). Witness the famous monk debates held daily 3-4pm, where monks engage in philosophical discussions. Explore the monastery with golden roofs and whitewashed walls founded in 15th century."
    },
    {
      "day": 4,
      "title": "Departure from Lhasa",
      "description": "Morning transfer to Gonggar Airport for flight back to Kathmandu. Reflect on your journey to 'The Place of the Gods,' having experienced the spiritual heart of Tibet and its unique Mahayana Buddhism traditions."
    }
  ],
  "maxGroupSize": 12,
  "cancellationPolicy": "Full refund up to 14 days before departure. 50% refund 7-14 days before. No refund within 7 days.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "Easy to Moderate",
  "maxAltitude": "3,650m (Lhasa)",
  "permits": ["Tibet travel permit", "Flight tickets included"],
  "equipment": ["Comfortable walking shoes", "Layered clothing", "Sunglasses & sunscreen", "Camera", "Water bottle"],
  
},

{
  "id": "T7",
  "title": "Mount Kailash & Lake Mansarovar Pilgrimage",
  "location": "Tibet: Nyalam, Saga, Parayang, Kailash, Mansarovar",
  "duration": "14 Days",
  "rating": 5.0,
  "reviewCount": 67,
  "price": 3299,
  "originalPrice": 3599,
  "excerpt": "A profound spiritual journey to Tibet's most sacred mountain and lake, revered by Hindus, Buddhists, Jains, and Bonpos as the axis of the universe",
  "description": "Embark on the ultimate pilgrimage to Mount Kailash (6,714m), regarded as the navel of the earth and abode of Lord Shiva. This transformative journey combines spiritual devotion with adventure, taking you to the sacred Lake Mansarovar and around the holy Kailash peak via the challenging Kora (circumambulation) across the 5,630m Domala Pass. Experience the source of four great rivers and attain spiritual energy in this remote, mystical landscape.",
  "image":     "/images/tibet_tours-19.jpg",

  "images": [
        "/images/tibet_tours-19.jpg",

    "/images/tibet_tours-20.jpg",
    "/images/tibet_tours-21.jpg",
    "/images/tibet_tours-22.jpg",
  ],
  "tags": ["Pilgrimage", "Spiritual", "Trekking", "Sacred Sites", "Adventure"],
  "highlights": [
    "Scenic drive from Kathmandu to Tibet via Kodari-Zhangmu border",
    "Visit sacred Lake Mansarovar - take holy baths to cleanse sins",
    "Perform Kora (circumambulation) around Mount Kailash",
    "Cross Domala Pass at 5,630m altitude",
    "Experience four religious perspectives: Hindu, Buddhist, Jain, Bonpo",
    "See source of four great rivers: Karnali, Yarlung Tsangpo, Sutlej, Indus",
    "Trek through remote Himalayan landscapes with yak support"
  ],
  "includes": [
    "Twin sharing tented camp accommodation",
    "Dormitory accommodation in guest houses",
    "Full board vegetarian meals throughout",
    "Transportation by 4WD Land Cruiser",
    "All camping and trekking equipment",
    "Staff team: Sherpa, Cook, Helper, Leader",
    "All sightseeing as per itinerary",
    "All permits and monastery entrance fees",
    "English speaking Tibetan guide",
    "Portable oxygen cylinder for emergencies",
    "Special Kailash pilgrimage permit",
    "Yaks and yak men for equipment transport"
  ],
  "excludes": [
    "Personal trekking gear",
    "Personal expenses (drinks, photography, souvenirs)",
    "Medical insurance and emergency evacuation",
    "Nepal re-entry visa fee",
    "Tips for staff and guides",
    "Sleeping bags and personal camping gear",
    "Any cost not mentioned in includes section"
  ],
  "included": [
    "Twin sharing tented camp accommodation",
    "Dormitory accommodation in guest houses",
    "Full board vegetarian meals throughout",
    "Transportation by 4WD Land Cruiser",
    "All camping and trekking equipment",
    "Staff team: Sherpa, Cook, Helper, Leader",
    "All sightseeing as per itinerary",
    "All permits and monastery entrance fees",
    "English speaking Tibetan guide",
    "Portable oxygen cylinder for emergencies",
    "Special Kailash pilgrimage permit",
    "Yaks and yak men for equipment transport"
  ],
  "excluded": [
    "Personal trekking gear",
    "Personal expenses (drinks, photography, souvenirs)",
    "Medical insurance and emergency evacuation",
    "Nepal re-entry visa fee",
    "Tips for staff and guides",
    "Sleeping bags and personal camping gear",
    "Any cost not mentioned in includes section"
  ],
  "entryRequirements": ["Valid passport", "Tibet travel permit", "Kailash special permit", "Chinese visa if required", "Good physical condition"],
  "requirements": ["Excellent physical fitness", "High altitude experience", "Pilgrimage mindset", "Warm trekking gear", "Vegetarian diet acceptance"],
  "itinerary": [
    {
      "day": 1,
      "title": "Kathmandu to Nyalam",
      "description": "Drive from Kathmandu (1,350m) to Nyalam (3,750m) via Kodari-Zhangmu border. Cross from Nepal to Tibet, experiencing dramatic landscape change. Complete immigration formalities. Overnight in guest house."
    },
    {
      "day": 2,
      "title": "Acclimatization in Nyalam",
      "description": "Rest day in Nyalam for essential altitude acclimatization. Light walks around town. Prepare mentally and physically for the spiritual journey ahead."
    },
    {
      "day": 3,
      "title": "Nyalam to Saga",
      "description": "Drive to Saga (4,050m) through high Tibetan plateau. Experience vast, remote landscapes. First night in tented camp. Begin adjusting to camping routine."
    },
    {
      "day": 4,
      "title": "Saga to Parayang",
      "description": "Continue drive to Parayang (4,500m). Journey through increasingly remote terrain. Camp under starry Tibetan skies."
    },
    {
      "day": 5,
      "title": "Parayang to Mayumla Phedi",
      "description": "5-6 hour drive to Mayumla Phedi. Approach closer to sacred region. Vegetarian meals served throughout."
    },
    {
      "day": 6,
      "title": "Mayumla Phedi to Chu Gompa via Mansarovar",
      "description": "Drive to sacred Lake Mansarovar (4,560m). Hindus believe bathing here cleanses sins of hundred lifetimes. Visit Chu Gompa monastery on lake shore. First views of Mount Kailash."
    },
    {
      "day": 7,
      "title": "Chu Gompa to Darchen",
      "description": "Short drive to Darchen (4,600m), base village for Kailash Kora. Final preparations for circumambulation. Stay in guest house."
    },
    {
      "day": 8,
      "title": "Kora Day 1: Darchen to Dirapuk",
      "description": "Begin sacred circumambulation (Kora) of Mount Kailash. Trek from Darchen to Dirapuk (4,890m). 5-6 hours trekking with yak support carrying equipment. First close views of Kailash north face."
    },
    {
      "day": 9,
      "title": "Kora Day 2: Dirapuk to Zutulpuk via Domala Pass",
      "description": "Most challenging day crossing Domala Pass (5,630m). Considered spiritually significant crossing point. Descend to Zutulpuk (4,790m). Camp overnight."
    },
    {
      "day": 10,
      "title": "Kora Day 3: Zutulpuk to Darchen, Drive to Horchu",
      "description": "Complete Kora circuit, returning to Darchen. Drive to Horchu. Reflect on completed pilgrimage. Camp overnight."
    },
    {
      "day": 11,
      "title": "Horchu to Parayang",
      "description": "Begin return journey to Parayang. Different perspective on landscapes now infused with spiritual significance."
    },
    {
      "day": 12,
      "title": "Parayang to Saga",
      "description": "Drive back to Saga. Continue gradual descent from high altitudes."
    },
    {
      "day": 13,
      "title": "Saga to Nyalam",
      "description": "Return to Nyalam. Final night in Tibet guest house."
    },
    {
      "day": 14,
      "title": "Nyalam to Kathmandu",
      "description": "Cross border back to Nepal. Drive to Kathmandu. End of transformative pilgrimage with profound spiritual experiences."
    }
  ],
  "maxGroupSize": 10,
  "cancellationPolicy": "Full refund up to 60 days before departure. 50% refund 30-60 days before. No refund within 30 days.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "Challenging",
  "maxAltitude": "5,630m (Domala Pass)",
  "permits": ["Tibet travel permit", "Kailash special permit", "Border permits", "Camping permits"],
  "equipment": ["Warm sleeping bag (-15°C)", "Trekking poles", "High-altitude clothing", "Headlamp", "Water purification", "Personal medication"],
  
}

]


  useEffect(() => {
    const loadTours = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        setTours(mockTibetTours)
      } catch (err) {
        console.error('Error loading tours:', err)
      } finally {
        setLoading(false)
      }
    }

    loadTours()
  }, [])

  const handleTourSelect = (tour: Tour) => {
    setSelectedTour(tour)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedTour(null)
  }

  if (loading) {
    return (
      <ThemeProvider>
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gray-200 rounded-lg h-80"></div>
              ))}
            </div>
          </div>
        </div>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider>
      <Notifications showTestToast={true} />

      {/* Hero section */}
      <Hero
        title="Discover the Mystical Land of Tibet"
        description="Experience ancient monasteries, breathtaking landscapes, and rich Buddhist culture in the Roof of the World."
        backgroundImage="/images/tibet_hero.jpg"
      />

      {/* Trips Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Popular Tibet Journeys</h2>
        {tours.length > 0 ? (
          <ToursGrid tours={tours} onTourSelect={handleTourSelect} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No tours available at the moment.</p>
            <p className="text-sm text-gray-400 mt-2">
              Check back soon for new Tibet tour offerings.
            </p>
          </div>
        )}
      </section>

      {/* Trip Detail Modal */}
      {selectedTour && (
        <TourDetailModal
          tour={selectedTour}
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />
      )}
    </ThemeProvider>
  )
}