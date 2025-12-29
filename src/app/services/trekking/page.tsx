"use client"

import { useState } from "react";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

// Sample tours data (your existing TOURS array remains the same)
const TOURS: Tour[] = [
{
  "id": "1",
  "title": "Manaslu Circuit Trek",
  "location": "Nepal",
  "duration": "14 days",
  "rating": 4.9,
  "reviewCount": 275,
  "price": 1200,
  "originalPrice": 1350,
  "excerpt": "A spectacular and challenging trek around the world's eighth-highest mountain.",
  "description": "The Manaslu Circuit Trek is a breathtaking journey around Mount Manaslu (8,163m). This classic trek offers incredible diversity, from subtropical valleys to high-altitude landscapes, remote Tibetan-influenced villages, and a crossing of the challenging Larkya La Pass. A perfect choice for trekkers seeking a less-crowded and pristine Himalayan experience.",
  "image": "/images/manaslu-1.jpg",
  "images": [],
  "tags": ["Manaslu", "Trekking", "Adventure", "Nepal", "Himalayas"],
  "highlights": [
    "Complete circuit of Mount Manaslu (8,163m)",
    "Crossing the high Larkya La Pass (5,106m)",
    "Rich Tibetan Buddhist culture in remote villages",
    "Dramatic transitions from lush forests to arid high desert"
  ],
  "includes": ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
  "excludes": ["Flights", "Personal expenses", "Travel insurance"],
  "included": ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
  "excluded": ["Flights", "Personal expenses", "Travel insurance"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive in Kathmandu (1,350m). Transfer to hotel; trek briefing and preparation." },
    { "day": 2, "title": "Drive to Soti Khola", "description": "Scenic drive from Kathmandu to Soti Khola (710m)." },
    { "day": 3, "title": "Trek to Machha Khola", "description": "Trek along the Budhi Gandaki river to Machha Khola (930m)." },
    { "day": 4, "title": "Trek to Jagat", "description": "Continue trekking, entering the Manaslu Conservation Area to Jagat (1,410m)." },
    { "day": 5, "title": "Trek to Deng", "description": "Trek through bamboo forests and cross suspension bridges to Deng (1,860m)." },
    { "day": 6, "title": "Trek to Namrung", "description": "Ascend through forests with improving mountain views to Namrung (2,630m)." },
    { "day": 7, "title": "Trek to Samagaon", "description": "Trek to the large village of Samagaon (3,530m), with views of Manaslu's north face." },
    { "day": 8, "title": "Acclimatization Day in Samagaon", "description": "Rest day for acclimatization. Optional hike to Manaslu Base Camp or Birendra Lake." },
    { "day": 9, "title": "Trek to Samdo", "description": "Short trek to the Tibetan-influenced village of Samdo (3,860m)." },
    { "day": 10, "title": "Trek to Dharamsala/Larkya Phedi", "description": "Ascend to the high camp at Dharamsala (4,460m) in preparation for the pass." },
    { "day": 11, "title": "Cross Larkya La Pass to Bimthang", "description": "Long and challenging day crossing the Larkya La Pass (5,106m), then descending to Bimthang (3,720m)." },
    { "day": 12, "title": "Trek to Tilije", "description": "Descend through beautiful forests and pastures to the village of Tilije (2,300m)." },
    { "day": 13, "title": "Trek to Dharapani & Drive to Besisahar", "description": "Final trek to Dharapani (1,860m), then drive to Besisahar (760m)." },
    { "day": 14, "title": "Drive to Kathmandu / Departure", "description": "Drive back to Kathmandu and onward departure." }
  ],
  "maxGroupSize": 12,
  "cancellationPolicy": "Full refund if canceled 45 days before start date",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "challenging",
  "maxAltitude": "5,106m (Larkya La Pass)",
  "requirements": ["Excellent physical fitness", "Previous high-altitude trekking experience required"],
  "permits": ["Manaslu Restricted Area Permit (RAP)", "Annapurna Conservation Area Permit (ACAP)", "TIMS Card"],
  "equipment": ["Trekking boots", "Down jacket", "4-season sleeping bag", "Crampons/microspikes (seasonal)", "Trekking poles"],
  "entryRequirements": ["Valid Nepal visa", "Travel insurance with helicopter evacuation"]
},
{
id: "2",
title: "Everest Base Camp Trek",
location: "Nepal",
duration: "16 days",
rating: 4.9,
reviewCount: 540,
price: 1450,
originalPrice: 1650,
excerpt: "The classic trek to the foot of the world’s highest mountain.",
description: "The Everest Base Camp Trek is an iconic Himalayan journey to the valleys beneath Mount Everest. The route blends Sherpa culture, high mountain vistas, Buddhist monasteries and the challenge of walking into the Sagarmatha (Everest) National Park.",
image: "/images/everest-1.jpg",
images: [],
tags: ["Everest", "Sherpa", "Trekking", "Nepal"],
highlights: [
"Views of Everest, Lhotse, Nuptse and Ama Dablam",
"Authentic Sherpa villages: Namche, Tengboche",
"Sagarmatha National Park UNESCO landscapes",
"Cultural visits to Tengboche Monastery"
],
includes: ["Guide", "Meals", "Accommodation", "Permits", "Lukla flights (if included)"],
excludes: ["International flights", "Personal expenses", "Travel insurance"],
included: ["Guide", "Meals", "Accommodation", "Permits", "Lukla flight (if selected)"],
excluded: ["International flights", "Personal expenses", "Travel insurance"],
itinerary: [
{ day: 1, title: "Arrival in Kathmandu", description: "Arrive Kathmandu; trek briefing and permit processing." },
{ day: 2, title: "Fly to Lukla & Trek to Phakding", description: "Early flight to Lukla (2,860m); trek to Phakding (2,610m)." },
{ day: 3, title: "Trek to Namche Bazaar", description: "Cross suspension bridges; arrive at Namche Bazaar (3,440m), acclimatization evening." },
{ day: 4, title: "Acclimatization in Namche", description: "Explore Sherpa culture, short hikes to Everest View Hotel and Khumjung." },
{ day: 5, title: "Trek to Tengboche", description: "Scenic trail to Tengboche (3,860m); monastery visit." },
{ day: 6, title: "Trek to Dingboche", description: "Descend and climb to Dingboche (4,410m)." },
{ day: 7, title: "Acclimatization at Dingboche", description: "Short hike to Nagarjun Hill for acclimatization." },
{ day: 8, title: "Trek to Lobuche", description: "Trek to Lobuche (4,940m) with expansive glacier views." },
{ day: 9, title: "Trek to Gorak Shep & EBC", description: "Early trek to Gorak Shep (5,140m), continue to Everest Base Camp (5,364m), return to Gorak Shep overnight." },
{ day: 10, title: "Summit Kala Patthar & Descend to Pheriche", description: "Pre-dawn climb to Kala Patthar (5,545m) for sunrise over Everest; descend to Pheriche." },
{ day: 11, title: "Trek to Namche Bazaar", description: "Stepwise descent to Namche for rest." },
{ day: 12, title: "Trek to Lukla", description: "Return trek to Lukla." },
{ day: 13, title: "Fly to Kathmandu", description: "Flight to Kathmandu; free evening." },
{ day: 14, title: "Buffer/Rest Day in Kathmandu", description: "Reserve day for any flight delays or sightseeing." },
{ day: 15, title: "Departure Preparation", description: "Free day for shopping, packing, optional short tours." },
{ day: 16, title: "Departure", description: "Transfer to airport and depart." }
],
maxGroupSize: 12,
cancellationPolicy: "Full refund if canceled 45 days before start date",
isPopular: true,
isSoldOut: false,
difficulty: "challenging (high altitude)",
maxAltitude: "5,364m (Everest Base Camp); 5,545m (Kala Patthar)",
requirements: ["Excellent fitness", "Prior high-altitude trekking experience recommended", "Acclimatization discipline"],
permits: ["Sagarmatha National Park Entry Permit", "Khumbu Pasang Lhamu Rural Municipality Permit", "TIMS Card (as required)"],
equipment: ["High-altitude boots", "Down jacket", "Insulating layers", "Sleeping bag (-15°C)"],
entryRequirements: ["Valid Nepal visa", "Comprehensive travel & evacuation insurance covering high-altitude rescue"]
},
{
id: "3",
title: "Manaslu Circuit Trek (with Tsum Valley option)",
location: "Nepal",
duration: "18 days",
rating: 4.7,
reviewCount: 150,
price: 1350,
originalPrice: 1550,
excerpt: "Remote classic circuit around Mount Manaslu — option to include the cultural Tsum Valley.",
description: "The Manaslu Circuit is a remote, less crowded trek encircling Mount Manaslu (8,163m). It offers Himalayan panoramas, ancient villages and the challenging Larkya La pass. The Tsum Valley extension adds rich Tibetan-influenced culture and secluded monasteries.",
image: "/images/tsum-1.jpg",
images: [],
tags: ["Manaslu", "Tsum Valley", "High Pass", "Nepal"],
highlights: [
"Larkya La high pass (5,106m)",
"Tsum Valley’s hidden monasteries and unique culture",
"Remote trails and traditional villages",
"Opportunities to see Himalayan wildlife and panoramic peaks"
],
includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
excludes: ["International flights", "Personal expenses", "Travel insurance"],
included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
excluded: ["International flights", "Personal expenses", "Travel insurance"],
itinerary: [
{ day: 1, title: "Arrival Kathmandu", description: "Trip briefing and paperwork for restricted permits." },
{ day: 2, title: "Drive to Sotikhola / Soti Khola", description: "Drive to trailhead in Arughat/Soti Khola." },
{ day: 3, title: "Trek to Machha Khola", description: "Begin uphill through terraced fields to Machha Khola." },
{ day: 4, title: "Trek to Jagat", description: "Enter Manaslu region; arrival at Jagat (1,410m)." },
{ day: 5, title: "Trek to Deng", description: "Trail through bamboo and ferns to Deng (1,850m)." },
{ day: 6, title: "Trek to Namrung", description: "Climb to Namrung with new views of Manaslu." },
{ day: 7, title: "Trek to Samagaon", description: "Short walk to the largest village in the area, Samagaon (3,530m)." },
{ day: 8, title: "Acclimatization day in Samagaon", description: "Explore Samagaon and nearby Pungyen Gompa and Manaslu viewpoint." },
{ day: 9, title: "Trek to Samdo or Dharamsala", description: "Approach high alpine terrain; optional short diversion into Tsum Valley (if selected)." },
{ day: 10, title: "Trek to Bhimtang", description: "Climb through alpine meadows to Bhimtang; acclimatization continues." },
{ day: 11, title: "Trek to Larkya Base Camp", description: "Trek into moraine and glacial approaches, prepare for pass day." },
{ day: 12, title: "Cross Larkya La & Descend to Bimtang", description: "Early start to cross Larkya La Pass (5,106m), then descend to Bimtang." },
{ day: 13, title: "Trek to Dharapani", description: "Long descent to Dharapani joining Annapurna region trails." },
{ day: 14, title: "Drive back to Kathmandu via Besisahar", description: "Drive to Besisahar and return to Kathmandu." },
{ day: 15, title: "Buffer day / Recovery in Kathmandu", description: "Rest day; optional sightseeing." },
{ day: 16, title: "Departure prep / contingency day", description: "Reserved day for delays or extra sightseeing." },
{ day: 17, title: "Departure", description: "Transfer to airport for onward travel." },
{ day: 18, title: "Optional extra day", description: "Only used when including extended Tsum Valley side-trips or buffer days." }
],
maxGroupSize: 10,
cancellationPolicy: "Partial refund if canceled 30 days before; full refund 45+ days",
isPopular: true,
isSoldOut: false,
difficulty: "challenging (high altitude, remote)",
maxAltitude: "5,106m (Larkya La)",
requirements: ["Strong fitness", "Previous multi-day trekking experience", "Guide required by permit rules"],
permits: ["Manaslu Restricted Area Permit (RAP)", "Manaslu Conservation Area Permit (MCAP)", "ACAP/TIMS as required", "Separate Tsum Valley permit if included"],
equipment: ["High-altitude sleeping bag", "Insulating layers", "Windproof shell", "Trekking poles"],
entryRequirements: ["Valid Nepal visa", "Travel insurance with rescue coverage"]
},
{
id: "4",
title: "Annapurna Circuit Trek",
location: "Nepal",
duration: "18 days",
rating: 4.8,
reviewCount: 410,
price: 1200,
originalPrice: 1350,
excerpt: "Classic long-distance circuit across the Annapurna massif via Thorong La.",
description: "The Annapurna Circuit is a classic long-distance trek that traverses diverse ecological zones, from subtropical lowlands to high alpine plateaus and the high Thorong La pass. It’s a cultural journey through villages, hot springs and wide mountain panoramas.",
image: "/images/annapurna_circuit-1.jpg",
images: [],
tags: ["Annapurna Circuit", "Thorong La", "Nepal", "Long Trek"],
highlights: [
"Thorong La high pass (5,416m)",
"Diverse ecosystems and cultural villages",
"Hot springs at Tatopani (route-dependent)",
"Breathtaking views of Annapurna and Dhaulagiri ranges"
],
includes: ["Guide", "Meals", "Accommodation", "Permits"],
excludes: ["International flights", "Travel insurance", "Personal expenses"],
included: ["Guide", "Meals", "Accommodation", "Permits"],
excluded: ["International flights", "Travel insurance", "Personal expenses"],
itinerary: [
{ day: 1, title: "Arrival Kathmandu", description: "Trip briefing and permit processing." },
{ day: 2, title: "Drive to Besisahar & Jagat", description: "Drive to the start point and begin trek at Jagat." },
{ day: 3, title: "Trek to Dharapani", description: "Ascend through villages to Dharapani." },
{ day: 4, title: "Trek to Chame", description: "Enter Manang district; alpine scenery begins." },
{ day: 5, title: "Trek to Pisang", description: "Dramatic valley walls and mountain views." },
{ day: 6, title: "Trek to Manang (acclimatization)", description: "Arrive to Manang (3,540m); acclimatization day with short hikes." },
{ day: 7, title: "Acclimatization in Manang", description: "Explore surrounding lakes or viewpoints." },
{ day: 8, title: "Trek to Yak Kharka", description: "Trek through high alpine pastures." },
{ day: 9, title: "Trek to Thorong Phedi", description: "Approach the high pass base camp." },
{ day: 10, title: "Cross Thorong La & Descend to Muktinath", description: "Early crossing of Thorong La (5,416m), descend to Muktinath (3,800m)." },
{ day: 11, title: "Trek to Jomsom", description: "Descend the Kali Gandaki valley to Jomsom and fly/drive to Pokhara." },
{ day: 12, title: "Fly/Drive to Pokhara", description: "Buffer and recovery day in Pokhara." },
{ day: 13, title: "Drive to Kathmandu / Sightseeing", description: "Return to Kathmandu and rest." },
{ day: 14, title: "Buffer/Contingency", description: "Additional day for acclimatization or weather-related delays." },
{ day: 15, title: "Departure prep", description: "Free day in Kathmandu for packing and shopping." },
{ day: 16, title: "Departure", description: "Transfer to airport and depart." },
{ day: 17, title: "Extra buffer day", description: "Optional sightseeing, used if needed." },
{ day: 18, title: "Final departure", description: "Final logistics and departure." }
],
maxGroupSize: 14,
cancellationPolicy: "Full refund if canceled 45 days before start date",
isPopular: true,
isSoldOut: false,
difficulty: "challenging (long days, high altitude)",
maxAltitude: "5,416m (Thorong La)",
requirements: ["Very good fitness", "High-altitude trekking experience recommended"],
permits: ["Annapurna Conservation Area Permit (ACAP)", "TIMS Card (if required)"],
equipment: ["High-altitude gear", "Layered clothing", "Good trekking boots"],
entryRequirements: ["Valid Nepal visa", "Travel & rescue insurance"]
},
{
id: "5",
title: "Three Passes of Everest Trek",
location: "Nepal",
duration: "20 days",
rating: 4.9,
reviewCount: 210,
price: 2100,
originalPrice: 2400,
excerpt: "Epic, remote trek crossing three high passes in the Everest region.",
description: "The Three Passes Trek is a tough, high-altitude circuit that links the classic Everest Base Camp route with three major passes — Renjo La, Cho La and Kongma La — offering a full Himalayan immersion and superb views over Everest, Cho Oyu and the surrounding giants.",
image: "/images/3_passes.jpg",
images: [],
tags: ["Everest", "High Passes", "Cho La", "Renjo La"],
highlights: [
"Cross Renjo La, Cho La and Kongma La",
"Extensive high-alpine panoramas and remote trails",
"Diverse Sherpa culture and monasteries",
"Optional ascent of Kala Patthar for sunrise"
],
includes: ["Guide", "Meals", "Accommodation", "Permits", "High-altitude support"],
excludes: ["International flights", "Personal expenses", "Travel insurance"],
included: ["Guide", "Meals", "Accommodation", "Permits", "High-altitude support"],
excluded: ["International flights", "Personal expenses", "Travel insurance"],
itinerary: [
{ day: 1, title: "Arrival Kathmandu", description: "Permits and gear check." },
{ day: 2, title: "Fly to Lukla & Trek to Phakding", description: "Begin trek toward Namche." },
{ day: 3, title: "Trek to Namche Bazaar", description: "Acclimatization hub." },
{ day: 4, title: "Acclimatization and side hikes", description: "Short hikes around Namche." },
{ day: 5, title: "Trek to Thame or Lungden", description: "Move into remote valleys." },
{ day: 6, title: "Trek to Renjo La Base", description: "Approach Renjo La area." },
{ day: 7, title: "Cross Renjo La & Descend to Gokyo", description: "Cross Renjo La (5,360m) and reach Gokyo Lakes." },
{ day: 8, title: "Explore Gokyo Lakes & Gokyo Ri", description: "Climb Gokyo Ri for panoramic views." },
{ day: 9, title: "Trek to Dzongla & Approach Cho La", description: "Begin approach to Cho La." },
{ day: 10, title: "Cross Cho La & Reach Lobuche", description: "Technical pass crossing (Cho La ~5,420m) to Lobuche." },
{ day: 11, title: "Trek to Gorak Shep & EBC", description: "Reach Gorak Shep; optional EBC side trip." },
{ day: 12, title: "Cross Kongma La & Trek to Chhukung", description: "Cross Kongma La (5,535m) then descend to Chhukung." },
{ day: 13, title: "Acclimatization/Exploration", description: "Optional ascent of Island Peak base area or rest day." },
{ day: 14, title: "Descend to Tengboche", description: "Start descent toward Namche Bazaar." },
{ day: 15, title: "Trek to Namche & Lukla", description: "Return route to Lukla." },
{ day: 16, title: "Fly to Kathmandu", description: "Buffer day in Kathmandu." },
{ day: 17, title: "Sightseeing in Kathmandu", description: "Optional cultural tour." },
{ day: 18, title: "Departure buffer", description: "Contingency/pack day." },
{ day: 19, title: "Final departure prep", description: "Final logistics." },
{ day: 20, title: "Departure", description: "Transfer and depart." }
],
maxGroupSize: 8,
cancellationPolicy: "Full refund if canceled 60 days before start date",
isPopular: true,
isSoldOut: false,
difficulty: "very challenging (multiple high passes, technical sections)",
maxAltitude: "Approx 5,535m (Kongma La) / 5,420m (Cho La)",
requirements: ["Excellent fitness", "Prior high-altitude trekking experience", "Comfort with snow/ice crossing; crampons and axe may be needed"],
permits: ["Sagarmatha National Park Permit", "Khumbu Pasang Lhamu Rural Municipality Permit", "TIMS card (as required)"],
equipment: ["Crampons (seasonal)", "Ice axe (if needed)", "High-altitude insulation", "Mountaineering experience recommended"],
entryRequirements: ["Valid Nepal visa", "Comprehensive high-altitude rescue insurance"]
},
{
id: "6",
title: "Ghorepani Poon Hill Trek",
location: "Nepal",
duration: "5 days",
rating: 4.7,
reviewCount: 980,
price: 320,
originalPrice: 380,
excerpt: "Short, rewarding trek to the famous Poon Hill sunrise viewpoint.",
description: "Ghorepani Poon Hill is a short, highly popular trek best for first-time trekkers and those with limited time. It features terraced farmland, rhododendron forests and the beautiful sunrise viewpoint at Poon Hill overlooking the Annapurna and Dhaulagiri ranges.",
image: "/images/poon_hill.jpg",
images: [],
tags: ["Poon Hill", "Short Trek", "Annapurna", "Nepal"],
highlights: [
"Poon Hill sunrise for panoramic mountain views",
"Accessible for beginners",
"Rhododendron forest trails",
"Cultural village visits (Ghandruk, Ghorepani)"
],
includes: ["Guide", "Meals", "Accommodation", "Permits"],
excludes: ["International flights", "Travel insurance", "Personal expenses"],
included: ["Guide", "Meals", "Accommodation", "Permits"],
excluded: ["International flights", "Travel insurance", "Personal expenses"],
itinerary: [
{ day: 1, title: "Arrival Kathmandu & Drive to Pokhara", description: "Drive or fly to Pokhara; evening briefing." },
{ day: 2, title: "Drive to Nayapul & Trek to Ulleri/Ghorepani", description: "Start trek via Ulleri to Ghorepani (2,874m)." },
{ day: 3, title: "Poon Hill sunrise & Trek to Tadapani", description: "Early morning hike to Poon Hill; trek to Tadapani." },
{ day: 4, title: "Trek to Ghandruk & Drive to Pokhara", description: "Descend to Ghandruk; cultural walk and drive back to Pokhara." },
{ day: 5, title: "Return to Kathmandu / Departure", description: "Fly/drive back to Kathmandu and depart." }
],
maxGroupSize: 16,
cancellationPolicy: "Full refund if canceled 15 days before start date",
isPopular: true,
isSoldOut: false,
difficulty: "easy to moderate",
maxAltitude: "3,210m (Poon Hill viewpoint)",
requirements: ["Basic fitness", "Comfortable walking for several hours per day"],
permits: ["ACAP (Annapurna Conservation Area Permit)", "TIMS (if required)"],
equipment: ["Comfortable hiking shoes", "Light layers", "Rain gear"],
entryRequirements: ["Valid Nepal visa"]
},
{
id: "7",
title: "Khopra Ridge Trek (with optional Khayar Lake)",
location: "Nepal",
duration: "8 days",
rating: 4.6,
reviewCount: 220,
price: 520,
originalPrice: 620,
excerpt: "Less-crowded Annapurna ridge trek with an option to reach Khayar Lake.",
description: "Khopra Ridge is an off-the-beaten-path Annapurna trek offering sweeping western Annapurna views, traditional villages and an optional extension to Khayar Lake (a serene high-altitude lake) for remote alpine scenery.",
image: "/images/khopra-1.jpg",
images: [],
tags: ["Khopra", "Annapurna", "Khayar Lake", "Nepal"],
highlights: [
"Vast views of Annapurna and Dhaulagiri",
"Khopra Ridge sunrise viewpoint",
"Secluded Khayar Lake option",
"Authentic village homestays"
],
includes: ["Guide", "Meals", "Accommodation", "Permits"],
excludes: ["International flights", "Personal expenses", "Travel insurance"],
included: ["Guide", "Meals", "Accommodation", "Permits"],
excluded: ["International flights", "Personal expenses", "Travel insurance"],
itinerary: [
{ day: 1, title: "Arrival Kathmandu & Drive to Pokhara", description: "Travel to Pokhara and gear check." },
{ day: 2, title: "Drive to Nayapul & Trek to Ulleri", description: "Start trek and reach Ulleri." },
{ day: 3, title: "Trek to Ghorepani/Poon Hill area", description: "Walk through rhodo-forests towards Ghorepani region." },
{ day: 4, title: "Trek to Khopra Ridge", description: "Ascend to Khopra Ridge; sunset and panoramic views." },
{ day: 5, title: "Optional Khayar Lake day trip", description: "Optional steep hike to Khayar Lake (if included) and return." },
{ day: 6, title: "Descend to Ghandruk", description: "Descend to traditional Ghandruk village for cultural exploration." },
{ day: 7, title: "Drive to Pokhara", description: "Return to Pokhara for rest." },
{ day: 8, title: "Drive to Kathmandu / Departure", description: "Fly/drive back to Kathmandu; departure." }
],
maxGroupSize: 12,
cancellationPolicy: "Full refund if canceled 20 days before start date",
isPopular: true,
isSoldOut: false,
difficulty: "moderate",
maxAltitude: "3,660m (Khopra Ridge viewpoint)",
requirements: ["Good fitness for uphill sections", "Comfort with steep trails"],
permits: ["ACAP", "TIMS (if required)"],
equipment: ["Sturdy hiking boots", "Warm jacket", "Rain protection"],
entryRequirements: ["Valid Nepal visa"]
},
{
  "id": "8",
  "title": "Everest Base Camp with Gokyo Lakes Trek",
  "location": "Nepal",
  "duration": "18 days",
  "rating": 4.9,
  "reviewCount": 415,
  "price": 1450,
  "originalPrice": 1650,
  "excerpt": "The ultimate Everest adventure combining the classic Base Camp trek with the stunning turquoise Gokyo Lakes.",
  "description": "This comprehensive trek combines two iconic routes in the Khumbu region. You'll experience the legendary trek to Everest Base Camp beneath the world's highest peaks, then cross the challenging Cho La Pass to visit the breathtaking Gokyo Lakes. The journey includes incredible viewpoints like Gokyo Ri and Kala Patthar for panoramic Himalayan vistas, offering a complete and unforgettable Everest experience.",
  "image": "/images/gokyo.jpg",
  "images": [],
  "tags": ["Everest", "Gokyo", "Trekking", "Adventure", "Nepal", "Himalayas"],
  "highlights": [
    "Visit Everest Base Camp (5,364m) with views of the Khumbu Icefall",
    "Ascend Kala Patthar (5,545m) for the best view of Mount Everest",
    "Explore the stunning turquoise Gokyo Lakes (4,700-5,000m)",
    "Summit Gokyo Ri (5,357m) for a 360-degree Himalayan panorama",
    "Challenge yourself with the high-altitude Cho La Pass (5,420m) crossing"
  ],
  "includes": ["Experienced Guide", "All Meals on Trek", "Lodge Accommodation", "All Required Permits", "Porters (shared)", "Domestic Flights (Kathmandu-Lukla-Kathmandu)"],
  "excludes": ["International Flights", "Nepal Visa Fees", "Personal Expenses & Tips", "Travel Insurance", "Meals in Kathmandu"],
  "included": ["Experienced Guide", "All Meals on Trek", "Lodge Accommodation", "All Required Permits", "Porters (shared)", "Domestic Flights (Kathmandu-Lukla-Kathmandu)"],
  "excluded": ["International Flights", "Nepal Visa Fees", "Personal Expenses & Tips", "Travel Insurance", "Meals in Kathmandu"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive in Kathmandu (1,400m). Transfer to hotel. Welcome briefing and gear check." },
    { "day": 2, "title": "Fly to Lukla & Trek to Phakding", "description": "Spectacular mountain flight to Lukla (2,860m). Begin trek, descending to Phakding (2,610m)." },
    { "day": 3, "title": "Trek to Namche Bazaar", "description": "Trek alongside the Dudh Koshi River, cross Hillary Suspension Bridge, and ascend to Namche Bazaar (3,440m)." },
    { "day": 4, "title": "Acclimatization in Namche Bazaar", "description": "Acclimatization day. Optional hike to Everest View Hotel or Khumjung village." },
    { "day": 5, "title": "Trek to Dole", "description": "Leave the main EBC trail, heading west through rhododendron forests to Mong La and down to Dole (4,200m)." },
    { "day": 6, "title": "Trek to Machhermo", "description": "Gradual ascent along the valley with views of Cho Oyu and Kantega to Machhermo (4,470m)." },
    { "day": 7, "title": "Trek to Gokyo", "description": "Ascend to the first of the Gokyo Lakes, then continue to Gokyo village (4,750m) on the shores of the third lake." },
    { "day": 8, "title": "Gokyo Ri Ascent & Acclimatization", "description": "Early morning hike to Gokyo Ri (5,357m) for sunrise over Everest, Lhotse, and Cho Oyu. Rest and explore the lakes." },
    { "day": 9, "title": "Cross Cho La Pass to Dzongla", "description": "Challenging day crossing the glaciated Cho La Pass (5,420m). Descend to Dzongla (4,830m)." },
    { "day": 10, "title": "Trek to Lobuche", "description": "Short trek to join the main EBC trail at Lobuche (4,940m)." },
    { "day": 11, "title": "Trek to Gorak Shep & Everest Base Camp", "description": "Trek to Gorak Shep (5,164m). After lunch, hike to Everest Base Camp (5,364m) and return to Gorak Shep." },
    { "day": 12, "title": "Kala Patthar & Trek to Pheriche", "description": "Early morning hike to Kala Patthar (5,545m) for sunrise on Everest. Descend to Pheriche (4,240m)." },
    { "day": 13, "title": "Trek to Tengboche", "description": "Descend to the river and climb up to the famous Tengboche Monastery (3,860m)." },
    { "day": 14, "title": "Trek to Namche Bazaar", "description": "Descend through forests back to Namche Bazaar." },
    { "day": 15, "title": "Trek to Lukla", "description": "Final day of trekking, retracing steps to Lukla." },
    { "day": 16, "title": "Fly to Kathmandu", "description": "Morning flight back to Kathmandu. Free afternoon for sightseeing or relaxation." },
    { "day": 17, "title": "Contingency Day in Kathmandu", "description": "Spare day for flight delays or extra sightseeing. Farewell dinner." },
    { "day": 18, "title": "Final Departure", "description": "Transfer to Tribhuvan International Airport for your departure flight." }
  ],
  "maxGroupSize": 12,
  "cancellationPolicy": "Full refund if canceled 60 days before start date. No refund for cancelled flights due to weather once trip has started.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "challenging",
  "maxAltitude": "5,545m (Kala Patthar)",
  "requirements": ["Excellent physical fitness and stamina", "Previous multi-day high-altitude trekking experience is essential", "Mental preparedness for challenging passes and variable weather"],
  "permits": ["Sagarmatha National Park Entry Permit", "Khumbu Pasang Lhamu Rural Municipality Entry Permit"],
  "equipment": ["Sturdy broken-in trekking boots", "Down jacket (-20°C rating)", "4-season sleeping bag", "Crampons/microspikes and gaiters (for Cho La Pass)", "Headlamp, trekking poles, sunglasses"],
  "entryRequirements": ["Valid passport with at least 6 months validity", "Nepal Visa (obtainable on arrival)", "Comprehensive travel insurance covering emergency helicopter evacuation up to 6,000m"]
},
{
id: "9",
title: "Langtang Valley Trek",
location: "Nepal",
duration: "8 days",
rating: 4.6,
reviewCount: 330,
price: 540,
originalPrice: 640,
excerpt: "Accessible Himalayan valley trek with strong Tamang cultural influence.",
description: "The Langtang Valley trek is a convenient, scenic trek north of Kathmandu into a culturally rich Tamang region with glacier views and strong community-based tourism. It’s ideal for moderate-time trekkers seeking alpine landscapes close to the capital.",
image: "/images/langtang-1.jpg",
images: [],
tags: ["Langtang", "Tamang", "Valley Trek", "Nepal"],
highlights: [
"Close proximity to Kathmandu",
"Tamang cultural interactions and monasteries",
"Glacier-capped peaks and alpine meadows",
"Community-based homestays in some villages"
],
includes: ["Guide", "Meals", "Accommodation", "Permits"],
excludes: ["International flights", "Personal expenses", "Travel insurance"],
included: ["Guide", "Meals", "Accommodation", "Permits"],
excluded: ["International flights", "Personal expenses", "Travel insurance"],
itinerary: [
{ day: 1, title: "Drive Kathmandu to Syabrubesi", description: "Drive north to the trailhead village of Syabrubesi." },
{ day: 2, title: "Trek to Lama Hotel", description: "Trek through terraced fields and rhododendron forest to Lama Hotel." },
{ day: 3, title: "Trek to Langtang Village", description: "Reach Langtang Village and visit local gompas." },
{ day: 4, title: "Trek to Kyangjin Gompa", description: "Arrive at Kyangjin Gompa (3,850m) with glacier views." },
{ day: 5, title: "Explore Kyangjin Glacier & Acclimatize", description: "Short hikes to Kyangjin Ri or glacier viewpoint." },
{ day: 6, title: "Descend to Lama Hotel", description: "Return descent through the valley." },
{ day: 7, title: "Trek to Syabrubesi & Drive to Kathmandu", description: "Finish trek and return to Kathmandu." },
{ day: 8, title: "Departure", description: "Final departure logistics." }
],
maxGroupSize: 12,
cancellationPolicy: "Full refund if canceled 20 days before start date",
isPopular: true,
isSoldOut: false,
difficulty: "moderate",
maxAltitude: "3,850m (Kyangjin Gompa)",
requirements: ["Good fitness", "Comfort on rocky trails"],
permits: ["Langtang National Park Permit", "TIMS Card (if required)"],
equipment: ["Trekking boots", "Warm layers", "Rain jacket"],
entryRequirements: ["Valid Nepal visa"]
},
{
id: "10",
title: "Muldai View Point Trek",
location: "Nepal",
duration: "4 days",
rating: 4.5,
reviewCount: 95,
price: 220,
originalPrice: 260,
excerpt: "Short, scenic viewpoint trek ideal for families and limited-time travelers.",
description: "Muldai View Point (also spelled 'Mulde' in some local guides) provides a short, gentle climb to panoramic vistas over the mid-hill landscapes and distant Himalayan peaks, perfect for short excursions from Pokhara or Kathmandu.",
image: "/images/muldai.jpg",
images: [],
tags: ["Viewpoint", "Short Trek", "Family", "Nepal"],
highlights: [
"Quick access to panoramic views",
"Suitable for families and beginner trekkers",
"Excellent sunrise and sunset viewpoints",
"Close to Pokhara-region services"
],
includes: ["Guide", "Meals", "Accommodation", "Permits (if required)"],
excludes: ["International flights", "Travel insurance", "Personal expenses"],
included: ["Guide", "Meals", "Accommodation", "Permits (if required)"],
excluded: ["International flights", "Travel insurance", "Personal expenses"],
itinerary: [
{ day: 1, title: "Arrival & Drive to Trailhead", description: "Drive to local trailhead; short trek to guesthouse." },
{ day: 2, title: "Trek to Muldai View Point & Overnight", description: "Reach viewpoint for sunset; overnight at viewpoint lodge." },
{ day: 3, title: "Descend to Village & Cultural Walk", description: "Return walk with visits to local villages." },
{ day: 4, title: "Return to Pokhara/Kathmandu & Departure", description: "Drive back and depart." }
],
maxGroupSize: 18,
cancellationPolicy: "Full refund if canceled 10 days before start date",
isPopular: false,
isSoldOut: false,
difficulty: "easy",
maxAltitude: "Approx. 1,800–2,300m (depends on route)",
requirements: ["Low fitness requirement", "Suitable for families"],
permits: ["Local trail permits if required; no national permits usually"],
equipment: ["Comfortable walking shoes", "Daypack", "Sun protection"],
entryRequirements: ["Valid Nepal visa (if international)"]
},
{
id: "11",
title: "Mardi Himal Trek",
location: "Nepal",
duration: "6 days",
rating: 4.7,
reviewCount: 270,
price: 420,
originalPrice: 520,
excerpt: "Short, dramatic trek to the alpine Mardi Himal ridge with unobstructed mountains.",
description: "Mardi Himal is a picturesque, less-crowded trek near Pokhara that climbs to a dramatic ridge offering close views of Machhapuchhre (Fishtail), Annapurna South and Hiunchuli. It's a great option for those after stunning panoramas on a shorter schedule.",
image: "/images/mardi-1.jpg",
images: [],
tags: ["Mardi Himal", "Pokhara", "Short Trek", "Nepal"],
highlights: [
"Excellent ridge viewpoints with Fishtail views",
"Quieter trail compared to Poon Hill",
"Alpine meadows and rhododendron forests",
"Short duration with high visual reward"
],
includes: ["Guide", "Meals", "Accommodation", "Permits"],
excludes: ["International flights", "Personal expenses", "Travel insurance"],
included: ["Guide", "Meals", "Accommodation", "Permits"],
excluded: ["International flights", "Personal expenses", "Travel insurance"],
itinerary: [
{ day: 1, title: "Drive to Kande & Trek to Forest Camp", description: "Drive from Pokhara to Kande, trek to Forest Camp." },
{ day: 2, title: "Trek to Low Camp", description: "Climb through rhododendron to Low Camp." },
{ day: 3, title: "Trek to High Camp", description: "Steep ascent to High Camp with panoramic evening views." },
{ day: 4, title: "Trek to Mardi Himal Base / Viewpoint", description: "Reach Mardi Himal viewpoint; full mountain vistas." },
{ day: 5, title: "Descend to Siding & Drive to Pokhara", description: "Return descent and drive to Pokhara." },
{ day: 6, title: "Return to Kathmandu / Departure", description: "Fly/drive back to Kathmandu and depart." }
],
maxGroupSize: 12,
cancellationPolicy: "Full refund if canceled 15 days before start date",
isPopular: true,
isSoldOut: false,
difficulty: "moderate",
maxAltitude: "4,500m (approx. Mardi Himal viewpoint)",
requirements: ["Good fitness for steep sections"],
permits: ["ACAP (if entering Annapurna Conservation area)", "TIMS (if required)"],
equipment: ["Decent trekking boots", "Warm jacket", "Headlamp"],
entryRequirements: ["Valid Nepal visa"]
},
{
id: "12",
title: "Nar Phu Valley Trek",
location: "Nepal",
duration: "14 days",
rating: 4.6,
reviewCount: 75,
price: 1300,
originalPrice: 1500,
excerpt: "Remote trans-Himalayan trek through Nar and Phu — cultural immersion and high passes.",
description: "The Nar Phu Valley route is a remote, culturally rich trek that follows ancient trade routes into a trans-Himalayan landscape. Expect stone-built villages, high passes and a strong Tibetan cultural atmosphere with dramatic mountain scenery.",
image: "/images/narphu-1.jpg",
images: [],
tags: ["Nar Phu", "Remote Trek", "Tibetan culture", "Nepal"],
highlights: [
"Remote villages with preserved Tibetan culture",
"High-altitude remote passes and plateaus",
"Less-traveled trails away from main tourist routes",
"Stunning views of Annapurna and Gangapurna"
],
includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
excludes: ["International flights", "Personal expenses", "Travel insurance"],
included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
excluded: ["International flights", "Personal expenses", "Travel insurance"],
itinerary: [
{ day: 1, title: "Arrival Kathmandu & Drive to Besisahar", description: "Drive toward Manang region." },
{ day: 2, title: "Drive to Koto & Trek to Meta", description: "Begin the trek entering Nar Phu approaches." },
{ day: 3, title: "Trek to Nar Village", description: "Enter the Nar Valley and meet local communities." },
{ day: 4, title: "Explore Nar & Trek to Phu", description: "Visit villages and progress toward Phu." },
{ day: 5, title: "Acclimatization in Phu", description: "Cultural exploration and short hikes." },
{ day: 6, title: "Trek to Kang La Region", description: "Trek toward higher passes and glacial views." },
{ day: 7, title: "Cross Kang La & Descend", description: "High pass crossing and alpine day." },
{ day: 8, title: "Trek to Pisang / Manang", description: "Descend into Manang area; acclimatize." },
{ day: 9, title: "Rest / Acclimatization in Manang", description: "Short hikes for acclimatization." },
{ day: 10, title: "Descend to Chame", description: "Descend further into lower valley." },
{ day: 11, title: "Trek to Dharapani & Drive to Besisahar", description: "Finish trekking section and drive toward Kathmandu." },
{ day: 12, title: "Drive to Kathmandu", description: "Return to Kathmandu; rest day." },
{ day: 13, title: "Buffer day / Sightseeing", description: "Optional cultural day." },
{ day: 14, title: "Departure", description: "Final departure logistics." }
],
maxGroupSize: 8,
cancellationPolicy: "Partial refund if canceled 30 days prior",
isPopular: false,
isSoldOut: false,
difficulty: "challenging (remote, high passes)",
maxAltitude: "Approx 5,000m (depending on chosen passes)",
requirements: ["Excellent fitness", "Prior high-altitude trekking experience", "Guided groups recommended"],
permits: ["Manang/Annapurna region permits depending on approach; TIMS"],
equipment: ["High-altitude gear", "GPS or strong navigation experience", "Warm sleeping bag"],
entryRequirements: ["Valid Nepal visa", "Travel insurance with rescue coverage"]
},
{
id: "13",
title: "Upper Mustang Trek",
location: "Nepal",
duration: "12 days",
rating: 4.8,
reviewCount: 130,
price: 1950,
originalPrice: 2200,
excerpt: "Trek into the restricted, arid, Tibetan-flavoured kingdom of Upper Mustang.",
description: "Upper Mustang is a unique, restricted area trek into Nepal’s ancient 'Lo' kingdom. The region features stark desert landscapes, cave dwellings, fortified villages and rare Tibetan-style culture. Because it’s a restricted zone, permits and a slightly higher cost are required.",
image: "/images/upper_mustang.jpg",
images: [],
tags: ["Upper Mustang", "Restricted Area", "Tibetan culture", "Nepal"],
highlights: [
"Ancient walled capital of Lo Manthang",
"Tibetan-influenced culture and monasteries",
"Stark desert valleys and wind-carved landscapes",
"Restricted area experience — fewer trekkers"
],
includes: ["Guide", "Meals", "Accommodation", "Restricted Area Permit (RAP)", "ACAP fee"],
excludes: ["International flights", "Personal expenses", "Travel insurance"],
included: ["Guide", "Meals", "Accommodation", "Restricted Area Permit", "ACAP fee"],
excluded: ["International flights", "Personal expenses", "Travel insurance"],
itinerary: [
{ day: 1, title: "Arrival Kathmandu & Fly to Pokhara/Drive", description: "Fly to Pokhara and onward travel to Jomsom/Tatopani route head." },
{ day: 2, title: "Fly to Jomsom & Trek to Kagbeni", description: "Fly to Jomsom then trek to Kagbeni — gateway to Mustang." },
{ day: 3, title: "Trek to Chele", description: "Cross into Mustang district and continue to Chele." },
{ day: 4, title: "Trek to Syangboche / Charang", description: "Approach the inner valley; visit Charang." },
{ day: 5, title: "Trek to Lo Manthang", description: "Enter Lo Manthang — the walled capital of Upper Mustang." },
{ day: 6, title: "Explore Lo Manthang & Surroundings", description: "Visit gompas, caves and local markets." },
{ day: 7, title: "Trek to Ghar Gompa & Ancient Caves", description: "Explore ancient caves and sacred sites." },
{ day: 8, title: "Trek back to Chhoser", description: "Start descending out of the inner valley." },
{ day: 9, title: "Return trek to Tangbe and Jomsom", description: "Continue out through arid valleys to Jomsom." },
{ day: 10, title: "Fly to Pokhara & Drive to Kathmandu", description: "Return to major centers." },
{ day: 11, title: "Buffer / Sightseeing", description: "Buffer day in Kathmandu or Pokhara." },
{ day: 12, title: "Departure", description: "Final departure arrangements." }
],
maxGroupSize: 10,
cancellationPolicy: "Full refund if canceled 60 days before start date",
isPopular: true,
isSoldOut: false,
difficulty: "moderate (long days, remote)",
maxAltitude: "Approx 3,800m (Lo Manthang)",
requirements: ["Moderate fitness", "Passport photos and ID for restricted permits"],
permits: ["Restricted Area Permit (Upper Mustang RAP) — usually USD 500 for 10 days", "Annapurna Conservation Area Permit (ACAP)"],
equipment: ["Sun protection, warm nights clothing, layered clothing"],
entryRequirements: ["Passport copy and photos for permit application", "Valid Nepal visa"]
},
{
id: "14",
title: "Tamang Heritage Trail",
location: "Nepal",
duration: "7 days",
rating: 4.6,
reviewCount: 200,
price: 420,
originalPrice: 520,
excerpt: "Cultural trail through Tamang villages with mountain views and authentic homestays.",
description: "The Tamang Heritage Trail is a cultural trekking route close to Kathmandu that highlights Tamang culture, monasteries and spectacular views of Langtang and Ganesh Himal peaks. It’s ideal for cultural immersion, moderate walking days and authentic homestay experiences.",
image: "/images/tamang_heritage-1.jpg",
images: [],
tags: ["Tamang", "Cultural", "Near Kathmandu", "Nepal"],
highlights: [
"Rich Tamang cultural interactions and homestays",
"Stunning Himalayan panoramas",
"Accessible from Kathmandu with short drive",
"Less-crowded cultural trail"
],
includes: ["Guide", "Meals", "Accommodation (homestays/tea houses)", "Permits"],
excludes: ["International flights", "Personal expenses", "Travel insurance"],
included: ["Guide", "Meals", "Accommodation", "Permits"],
excluded: ["International flights", "Personal expenses", "Travel insurance"],
itinerary: [
{ day: 1, title: "Drive to Syaphrubesi / Trailhead", description: "Drive from Kathmandu to the trailhead." },
{ day: 2, title: "Trek to Briddim", description: "Begin the cultural trail visiting Tamang villages." },
{ day: 3, title: "Trek to Tatopani", description: "Continue through forests and villages with local homestays." },
{ day: 4, title: "Trek to Thuman", description: "High-altitude cultural village with panoramic views." },
{ day: 5, title: "Trek to Briddim & Return", description: "Return toward trailhead with cultural visits." },
{ day: 6, title: "Drive back to Kathmandu", description: "Drive back and optional short sightseeing." },
{ day: 7, title: "Departure", description: "Final departure logistics." }
],
maxGroupSize: 16,
cancellationPolicy: "Full refund if canceled 15 days before start date",
isPopular: true,
isSoldOut: false,
difficulty: "easy to moderate",
maxAltitude: "Approx. 2,700m (depends on route)",
requirements: ["Comfortable walking for several hours daily", "Interest in cultural exchange"],
permits: ["Langtang/Local conservation permit (as required)"],
equipment: ["Daypack", "Comfortable hiking shoes", "Warm layers"],
entryRequirements: ["Valid Nepal visa"]
},
{
id: "15",
title: "Gosaikunda Lake Trek",
location: "Nepal",
duration: "6 days",
rating: 4.5,
reviewCount: 210,
price: 480,
originalPrice: 580,
excerpt: "Spiritual alpine lake trek in the Langtang region popular for pilgrimage.",
description: "Gosaikunda is a high-altitude sacred lake in the Langtang region visited by pilgrims and trekkers. The trek offers alpine lakes, strong cultural mythos and fine mountain views, often visited during festival times as a pilgrimage route.",
image: "/images/gosainkunda.jpg",
images: [],
tags: ["Gosaikunda", "Lake Trek", "Langtang", "Pilgrimage"],
highlights: [
"Sacred high-altitude lakes (Gosaikunda)",
"Stunning views of Ganesh and Langtang ranges",
"Pilgrimage and local mythology",
"Can be combined with Helambu or Langtang routes"
],
includes: ["Guide", "Meals", "Accommodation", "Permits"],
excludes: ["International flights", "Personal expenses", "Travel insurance"],
included: ["Guide", "Meals", "Accommodation", "Permits"],
excluded: ["International flights", "Personal expenses", "Travel insurance"],
itinerary: [
{ day: 1, title: "Drive to Dhunche/Syabrubesi", description: "Drive north from Kathmandu toward Langtang region." },
{ day: 2, title: "Trek to Chandanbari/Ghopte", description: "Begin trek through mixed forest and terraces to reach higher alpine meadow." },
{ day: 3, title: "Trek to Laurebina/near Gosaikunda", description: "Ascend to alpine meadows near Gosaikunda." },
{ day: 4, title: "Visit Gosaikunda Lake & Explore", description: "Spend time at the lake and nearby small lakes; cultural exploration." },
{ day: 5, title: "Descend to Dhunche", description: "Return descent toward roadhead." },
{ day: 6, title: "Drive to Kathmandu & Departure", description: "Drive back and depart." }
],
maxGroupSize: 12,
cancellationPolicy: "Full refund if canceled 20 days before start date",
isPopular: true,
isSoldOut: false,
difficulty: "moderate (high altitude but short duration)",
maxAltitude: "4,380m (Gosaikunda Lake approx.)",
requirements: ["Good fitness", "Acclimatization awareness"],
permits: ["Langtang National Park Permit", "TIMS Card (if required)"],
equipment: ["Warm jacket", "Thermal layers", "Hiking boots"],
entryRequirements: ["Valid Nepal visa"]
},
{
id: "16",
title: "Langtang — Gosaikunda Pass Trek (Lauribina La connection)",
location: "Nepal",
duration: "10 days",
rating: 4.6,
reviewCount: 85,
price: 680,
originalPrice: 780,
excerpt: "Combine the Langtang Valley and Gosaikunda via the Lauribina La pass for continuous alpine scenery.",
description: "This combined route connects Langtang Valley and the Gosaikunda lakes by crossing the Lauribina La (a scenic pass) for trekkers who want more continuous high-alpine diversity — glaciers, sacred lakes and varied cultural stops.",
image: "/images/gosainkunda-2.jpg",
images: [],
tags: ["Langtang", "Gosaikunda", "Lauribina La", "Nepal"],
highlights: [
"Lauribina La pass connections",
"Combination of glacier views and sacred lakes",
"Diverse scenery in one continuous route",
"Less-crowded alternatives to main trails"
],
includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters (optional)"],
excludes: ["International flights", "Personal expenses", "Travel insurance"],
included: ["Guide", "Meals", "Accommodation", "Permits", "Porters (optional)"],
excluded: ["International flights", "Personal expenses", "Travel insurance"],
itinerary: [
{ day: 1, title: "Drive Kathmandu to Syabrubesi", description: "Start toward Langtang area." },
{ day: 2, title: "Trek to Lama Hotel", description: "Trek into Langtang valley." },
{ day: 3, title: "Trek to Langtang Village", description: "Visit local villages and monasteries." },
{ day: 4, title: "Trek to Kyangjin Gompa", description: "Explore glaciers and viewpoints." },
{ day: 5, title: "Cross Lauribina La (pass approach)", description: "Trek toward the Lauribina La approach area." },
{ day: 6, title: "Cross Lauribina La & Reach Gosaikunda region", description: "High pass crossing and arrive in alpine lake region." },
{ day: 7, title: "Explore Gosaikunda & Surrounds", description: "Lake visits and cultural exploration." },
{ day: 8, title: "Descend to Dhunche", description: "Return toward lower trailheads." },
{ day: 9, title: "Drive to Kathmandu", description: "Drive back to the capital." },
{ day: 10, title: "Departure", description: "Final departures." }
],
maxGroupSize: 10,
cancellationPolicy: "Full refund if canceled 25 days before start",
isPopular: false,
isSoldOut: false,
difficulty: "challenging (pass crossing)",
maxAltitude: "Approx 4,600m (Lauribina La area)",
requirements: ["Good fitness", "Experience with pass crossings recommended"],
permits: ["Langtang National Park Permit", "TIMS Card (if required)"],
equipment: ["High-altitude sleeping bag", "Warm layers", "Trekking poles"],
entryRequirements: ["Valid Nepal visa", "Travel insurance"]
},
{
id: "17",
title: "Ganja La Pass Trek (Langtang extension)",
location: "Nepal",
duration: "11 days",
rating: 4.5,
reviewCount: 48,
price: 720,
originalPrice: 840,
excerpt: "A more challenging high-pass extension of the Langtang Valley via Ganja La.",
description: "The Ganja La Pass is a challenging extension from Langtang Valley which traverses ice-affected terrain and remote alpine valleys. It’s recommended for trekkers with high-altitude experience who want a more technical and remote route.",
image: "/images/gosainkunda-3.jpg",
images: [],
tags: ["Ganja La", "Langtang", "High Pass", "Nepal"],
highlights: [
"Technical pass crossing over Ganja La",
"Remote alpine scenery",
"Spectacular views of Langtang Lirung and surrounding glaciers",
"Less-traveled, adventurous route"
],
includes: ["Guide", "Meals", "Accommodation", "Permits", "Technical equipment (if required)"],
excludes: ["International flights", "Personal expenses", "Travel insurance"],
included: ["Guide", "Meals", "Accommodation", "Permits", "Technical equipment (if required)"],
excluded: ["International flights", "Personal expenses", "Travel insurance"],
itinerary: [
{ day: 1, title: "Drive to Syabrubesi", description: "Drive north from Kathmandu to trailhead." },
{ day: 2, title: "Trek to Lama Hotel", description: "Enter Langtang valley." },
{ day: 3, title: "Trek to Langtang Village", description: "Village visits and acclimatization." },
{ day: 4, title: "Trek to Kyangjin Gompa", description: "Approach glacier zones; acclimatize." },
{ day: 5, title: "Advance toward Ganja La base", description: "Trek to the approach for the pass crossing." },
{ day: 6, title: "Cross Ganja La Pass & Descend", description: "Technical crossing of Ganja La; steep descent to remote valley." },
{ day: 7, title: "Trek to Remote Valley Settlement", description: "Continue through remote alpine terrain." },
{ day: 8, title: "Descend to Sherpa villages", description: "Move towards lower villages and established trails." },
{ day: 9, title: "Return toward Syabrubesi", description: "Long descent back to main trailhead." },
{ day: 10, title: "Drive to Kathmandu", description: "Return to Kathmandu." },
{ day: 11, title: "Departure", description: "Final departures and logistics." }
],
maxGroupSize: 8,
cancellationPolicy: "Partial refund if canceled 30 days prior",
isPopular: false,
isSoldOut: false,
difficulty: "very challenging (technical pass crossing, route finding)",
maxAltitude: "Approx 5,200m (Ganja La region)",
requirements: ["High-altitude experience", "Comfort with snow/ice and technical sections", "Guided groups strongly recommended"],
permits: ["Langtang National Park Permit", "TIMS Card (if required)"],
equipment: ["Crampons (seasonal)", "Ice axe (if needed)", "High-altitude sleeping bag"],
entryRequirements: ["Valid Nepal visa", "Comprehensive travel insurance"]
},
{
id: "18",
title: "Helambu Trek (often combined with Gosaikunda)",
location: "Nepal",
duration: "7 days",
rating: 4.6,
reviewCount: 430,
price: 380,
originalPrice: 460,
excerpt: "A short cultural trek near Kathmandu — can be combined with Gosaikunda for added alpine views.",
description: "The Helambu trek is a moderate and accessible trek north of Kathmandu famous for its Hyolmo and Sherpa villages, beautiful forests and pleasant lodges. Many trekkers combine Helambu with Gosaikunda for extended alpine scenery and cultural depth.",
image: "/images/helambu.jpg",
images: [],
tags: ["Helambu", "Near Kathmandu", "Cultural Trek", "Nepal"],
highlights: [
"Short access from Kathmandu",
"Hyolmo and Sherpa village culture",
"Good for families and beginner trekkers",
"Optional combination with Gosaikunda for alpine lakes"
],
includes: ["Guide", "Meals", "Accommodation", "Permits"],
excludes: ["International flights", "Personal expenses", "Travel insurance"],
included: ["Guide", "Meals", "Accommodation", "Permits"],
excluded: ["International flights", "Personal expenses", "Travel insurance"],
itinerary: [
{ day: 1, title: "Drive to Sundarijal & Trek to Chisapani", description: "Drive from Kathmandu and start trek to Chisapani." },
{ day: 2, title: "Trek to Tharepati", description: "Ascend through forest to Tharepati ridge." },
{ day: 3, title: "Trek to Melamchi Gaon", description: "Descend to local villages and homestays." },
{ day: 4, title: "Trek to Tarkeghyang", description: "Cultural village visits and monastery exploration." },
{ day: 5, title: "Trek to Sermathang", description: "Enjoy local hospitality and scenic viewpoints." },
{ day: 6, title: "Descend to Sundarijal & Drive to Kathmandu", description: "Return to trailhead." },
{ day: 7, title: "Departure", description: "Final departure logistics." }
],
maxGroupSize: 16,
cancellationPolicy: "Full refund if canceled 15 days before start date",
isPopular: true,
isSoldOut: false,
difficulty: "easy to moderate",
maxAltitude: "Approx 3,000m (Tharepati)",
requirements: ["Comfortable walking ability", "Interest in cultural stays"],
permits: ["Langtang/Local conservation permit (as required)"],
equipment: ["Light sleeping bag", "Daypack", "Warm layers for nights"],
entryRequirements: ["Valid Nepal visa"]
},
{
  "id": "19",
  "title": "Langtang, Gosainkunda & Helambu Trek",
  "location": "Nepal",
  "duration": "16 days",
  "rating": 4.7,
  "reviewCount": 195,
  "price": 1050,
  "originalPrice": 1150,
  "excerpt": "A spectacular and culturally rich circuit trek north of Kathmandu, combining alpine valleys, sacred lakes, and Tamang heritage.",
  "description": "This diverse and rewarding trek explores three distinct regions close to Kathmandu. Journey through the beautiful Langtang Valley, often called the 'Valley of Glaciers,' to the sacred Gosainkunda Lakes, a major Hindu and Buddhist pilgrimage site, before descending through the serene Helambu region with its rich Sherpa and Tamang culture. It offers a perfect blend of natural beauty, spiritual sites, and cultural immersion without the need for flights.",
  "image": "/images/langtang-2.jpg",
  "images": [],
  "tags": ["Langtang", "Gosainkunda", "Helambu", "Trekking", "Cultural", "Nepal"],
  "highlights": [
    "Trek in the pristine Langtang Valley beneath Langtang Lirung (7,227m)",
    "Visit the sacred, frozen Gosainkunda Lake (4,380m) – a major pilgrimage site",
    "Cross the challenging Lauribina La Pass (4,610m)",
    "Experience the unique culture of Tamang and Sherpa villages in Helambu",
    "Stunning views of the Ganesh Himal and Langtang mountain ranges"
  ],
  "includes": ["Licensed Trekking Guide", "All Meals on Trek", "Lodge/Guesthouse Accommodation", "All Required Permits", "Porters (shared)", "Private Transport to/from Trailhead"],
  "excludes": ["International Flights", "Nepal Visa", "Personal Expenses & Tips", "Travel Insurance", "Meals in Kathmandu", "Drinks/Bottled Water"],
  "included": ["Licensed Trekking Guide", "All Meals on Trek", "Lodge/Guesthouse Accommodation", "All Required Permits", "Porters (shared)", "Private Transport to/from Trailhead"],
  "excluded": ["International Flights", "Nepal Visa", "Personal Expenses & Tips", "Travel Insurance", "Meals in Kathmandu", "Drinks/Bottled Water"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive in Kathmandu (1,400m). Transfer to hotel. Trip briefing." },
    { "day": 2, "title": "Drive to Syabrubesi", "description": "Scenic drive north through the Trisuli Valley to Syabrubesi (1,550m), the trailhead for Langtang." },
    { "day": 3, "title": "Trek to Lama Hotel", "description": "Begin trekking along the Langtang River through lush forests to Lama Hotel (2,380m)." },
    { "day": 4, "title": "Trek to Langtang Village", "description": "Ascend through rhododendron and pine forests, entering the wider valley to Langtang village (3,430m)." },
    { "day": 5, "title": "Trek to Kyanjin Gompa", "description": "Short trek to Kyanjin Gompa (3,870m). Visit the monastery and cheese factory. Afternoon acclimatization walk." },
    { "day": 6, "title": "Acclimatization & Exploration Day", "description": "Optional hikes to Kyanjin Ri (4,773m) or Tsergo Ri (4,984m) for breathtaking panoramic views." },
    { "day": 7, "title": "Trek back to Lama Hotel", "description": "Retrace steps down the valley to Lama Hotel." },
    { "day": 8, "title": "Trek to Thulo Syabru", "description": "Leave the Langtang trail, ascending steeply through forests to the village of Thulo Syabru (2,230m)." },
    { "day": 9, "title": "Trek to Sing Gompa", "description": "Steady climb through beautiful oak and fir forests to Sing Gompa/Chandanbari (3,330m)." },
    { "day": 10, "title": "Trek to Gosainkunda Lake", "description": "Challenging ascent to the sacred Gosainkunda Lakes (4,380m). Visit the main lake and surrounding smaller lakes." },
    { "day": 11, "title": "Cross Lauribina La Pass to Ghopte", "description": "High-altitude day crossing the Lauribina La Pass (4,610m). Descend to Ghopte (3,430m)." },
    { "day": 12, "title": "Trek to Melamchigaon", "description": "Descend into the Helambu region through forests to Melamchigaon (2,530m)." },
    { "day": 13, "title": "Trek to Tarkeghyang", "description": "Pleasant trek through Sherpa villages to the beautiful village of Tarkeghyang (2,600m), home to one of Nepal's largest monasteries." },
    { "day": 14, "title": "Trek to Sermathang", "description": "Final day of trekking to Sermathang (2,610m), with superb views of the Himalayas." },
    { "day": 15, "title": "Trek to Melamchi Bazaar & Drive to Kathmandu", "description": "Short descent to Melamchi Bazaar (870m). Drive back to Kathmandu (approx. 4-5 hours)." },
    { "day": 16, "title": "Final Departure", "description": "Transfer to Tribhuvan International Airport for your departure flight." }
  ],
  "maxGroupSize": 10,
  "cancellationPolicy": "Full refund if canceled 30 days before start date",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "moderate to challenging",
  "maxAltitude": "4,984m (Optional Tsergo Ri) / 4,610m (Lauribina La Pass)",
  "requirements": ["Good physical fitness", "Some previous trekking experience recommended", "Ability to handle long ascent/descent days"],
  "permits": ["Langtang National Park Entry Permit", "TIMS Card (Trekkers' Information Management System)"],
  "equipment": ["Trekking boots", "Warm layers and down jacket", "Rain gear", "Sleeping bag (optional for lodges)", "Trekking poles"],
  "entryRequirements": ["Valid Nepal visa", "Travel insurance recommended"]
},

{
  "id": "20",
  "title": "Annapurna North Base Camp Trek (Kang La & Tilicho Lake)",
  "location": "Nepal",
  "duration": "19 days",
  "rating": 4.9,
  "reviewCount": 85,
  "price": 1600,
  "originalPrice": 1800,
  "excerpt": "A remote and demanding high-altitude expedition to the dramatic north face of Annapurna, combined with Tilicho Lake and the Kang La Pass.",
  "description": "This is an expedition-style trek for experienced adventurers, venturing into the remote and arid northern slopes of the Annapurna massif. The route leads you to the dramatic Annapurna North Base Camp, offering a rare and awe-inspiring perspective of Annapurna I (8,091m). The trek is combined with a visit to the breathtaking Tilicho Lake—one of the highest in the world—and a challenging crossing of the technical Kang La Pass (5,306m), connecting the Manang and Mustang regions. Expect rugged trails, high passes, and immense mountain scenery far from the main trekking routes.",
  "image": "/images/annapurna_north.jpg",
  "images": [],
  "tags": ["Annapurna", "North Base Camp", "Expedition", "Tilicho Lake", "Kang La", "Adventure", "Nepal"],
  "highlights": [
    "Stand at Annapurna North Base Camp (4,700m) below the immense north face",
    "Visit Tilicho Lake (4,919m), one of the world's highest lakes",
    "Challenge yourself on the technical, glaciated Kang La Pass (5,306m)",
    "Experience the dramatic rain-shadow landscape of Upper Manang and Lower Mustang",
    "Total immersion in remote, high-altitude Himalayan wilderness"
  ],
  "includes": ["Experienced Expedition Guide", "All Meals on Trek", "Camping Accommodation (Tents) for remote sections", "Lodge Accommodation where available", "All Required Permits (including Restricted Area)", "Porters & Yaks for gear", "Camping & Kitchen Equipment", "Sleeping Bag & Down Jacket if needed"],
  "excludes": ["International Flights", "Nepal Visa", "Personal Expenses & Tips", "Travel Insurance", "Meals in Kathmandu and Pokhara", "Personal Trekking Gear"],
  "included": ["Experienced Expedition Guide", "All Meals on Trek", "Camping Accommodation (Tents) for remote sections", "Lodge Accommodation where available", "All Required Permits (including Restricted Area)", "Porters & Yaks for gear", "Camping & Kitchen Equipment", "Sleeping Bag & Down Jacket if needed"],
  "excluded": ["International Flights", "Nepal Visa", "Personal Expenses & Tips", "Travel Insurance", "Meals in Kathmandu and Pokhara", "Personal Trekking Gear"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive in Kathmandu (1,400m). Briefing and detailed gear check for the expedition." },
    { "day": 2, "title": "Drive to Besisahar & Trek to Bhulbhule", "description": "Long drive to Besisahar (760m) and short trek to Bhulbhule (840m)." },
    { "day": 3, "title": "Trek to Jagat", "description": "Trek along the Marsyangdi River, entering the Manang district, to Jagat (1,300m)." },
    { "day": 4, "title": "Trek to Dharapani", "description": "Continue along the river with first views of Manaslu and Annapurna II to Dharapani (1,860m)." },
    { "day": 5, "title": "Trek to Chame", "description": "The valley narrows; trek through forests to the district headquarters of Chame (2,710m)." },
    { "day": 6, "title": "Trek to Pisang", "description": "Views of Paungda Danda rock face. Trek to Lower Pisang (3,200m) for better acclimatization." },
    { "day": 7, "title": "Trek to Manang", "description": "Take the higher route via Ghyaru and Ngawal for stunning views, descending to Manang (3,540m)." },
    { "day": 8, "title": "Acclimatization in Manang", "description": "Acclimatization day. Optional hikes to Gangapurna Lake or Praken Gompa." },
    { "day": 9, "title": "Trek to Khangsar (Tilicho Base)", "description": "Leave the main circuit trail, heading west towards Tilicho Lake, to Khangsar (3,700m)." },
    { "day": 10, "title": "Trek to Tilicho Base Camp", "description": "Ascend on a dramatic trail carved into the cliffside to Tilicho Base Camp (4,200m)." },
    { "day": 11, "title": "Explore Tilicho Lake & Return to Base Camp", "description": "Early morning hike to Tilicho Lake (4,919m). Spend time at the lake, then return to Tilicho Base Camp." },
    { "day": 12, "title": "Trek to Yak Kharka (via Khangsar)", "description": "Return to Khangsar and then rejoin the main trail, trekking up the Jarsang Khola valley to Yak Kharka (4,050m)." },
    { "day": 13, "title": "Trek to Annapurna North Base Camp", "description": "A demanding day trekking off the main trail to the remote Annapurna North Base Camp (approx. 4,700m). Camp overnight." },
    { "day": 14, "title": "Explore Base Camp & Return to Yak Kharka", "description": "Morning to explore and absorb the incredible north face views. Descend back to Yak Kharka." },
    { "day": 15, "title": "Trek to Kang La Phedi (High Camp)", "description": "Short trek off the main path to establish high camp below the Kang La Pass (approx. 4,600m)." },
    { "day": 16, "title": "Cross Kang La Pass to Ngawal", "description": "Demanding and technical day. Early start to cross the glaciated Kang La Pass (5,306m). Long descent to Ngawal (3,660m)." },
    { "day": 17, "title": "Trek to Jomsom", "description": "Descend through arid Mustang landscape to the windy town of Jomsom (2,720m)." },
    { "day": 18, "title": "Fly to Pokhara", "description": "Morning flight from Jomsom to Pokhara (820m). Rest and celebrate by Phewa Lake." },
    { "day": 19, "title": "Drive to Kathmandu / Departure", "description": "Drive or fly back to Kathmandu for final departure." }
  ],
  "maxGroupSize": 8,
  "cancellationPolicy": "Full refund if canceled 90 days before start date. Strict policy due to permit logistics.",
  "isPopular": false,
  "isSoldOut": false,
  "difficulty": "Strenuous / Expedition Level",
  "maxAltitude": "5,306m (Kang La Pass)",
  "requirements": ["Exceptional physical fitness and stamina", "Mandatory previous high-altitude trekking experience (above 5,000m)", "Experience with basic ice axe and crampon use (training provided)", "Mental resilience for remote camping and variable conditions"],
  "permits": ["Annapurna Conservation Area Permit (ACAP)", "TIMS Card", "Restricted Area Permit for Kang La/Mustang section"],
  "equipment": ["Mountaineering boots (B2/B3 recommended for Kang La)", "Crampons, Ice Axe, Climbing Harness (for Kang La)", "4-Season sleeping bag (-20°C)", "High-quality down jacket, waterproof layers", "Trekking poles with snow baskets", "Headlamp, sunglasses/goggles"],
  "entryRequirements": ["Valid passport", "Nepal Visa", "Comprehensive travel insurance covering emergency evacuation up to 6,000m and trekking above 5,000m"]
},

{
  "id": "21",
  "title": "Pikey Peak Trek",
  "location": "Nepal",
  "duration": "10 days",
  "rating": 4.7,
  "reviewCount": 132,
  "price": 750,
  "originalPrice": 850,
  "excerpt": "A short, culturally rich trek in the lower Everest region, famous for some of the most spectacular sunrise views of Mount Everest.",
  "description": "The Pikey Peak Trek is a relatively new and less-trodden gem in the Solu-Khumbu region. Starting from a lower altitude than the classic EBC route, it offers a fantastic blend of lush forests, Sherpa culture, and absolutely breathtaking panoramic mountain views. The highlight is the sunrise from Pikey Peak (4,065m), which offers an unobstructed view of the entire eastern Himalayan range, including Mount Everest, Makalu, and Kanchenjunga. It's a perfect trek for those with limited time or seeking a less strenuous alternative with phenomenal scenery.",
  "image": "/images/pikey.jpg",
  "images": [],
  "tags": ["Pikey Peak", "Everest View", "Short Trek", "Cultural", "Nepal"],
  "highlights": [
    "Unparalleled sunrise view of Everest, Makalu, and Kanchenjunga from Pikey Peak",
    "Experience authentic Sherpa culture in traditional villages like Junbesi",
    "Visit ancient Thupten Chholing Monastery, one of Nepal's largest",
    "Trek through pristine rhododendron and pine forests",
    "Less crowded trails with a true sense of discovery"
  ],
  "includes": ["Trekking Guide", "All Meals on Trek", "Lodge Accommodation", "All Required Permits", "Porters (shared)", "Private Transport to/from Trailhead"],
  "excludes": ["International Flights", "Nepal Visa", "Personal Expenses & Tips", "Travel Insurance", "Meals in Kathmandu"],
  "included": ["Trekking Guide", "All Meals on Trek", "Lodge Accommodation", "All Required Permits", "Porters (shared)", "Private Transport to/from Trailhead"],
  "excluded": ["International Flights", "Nepal Visa", "Personal Expenses & Tips", "Travel Insurance", "Meals in Kathmandu"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive in Kathmandu (1,400m). Transfer to hotel and trek briefing." },
    { "day": 2, "title": "Drive to Dhap (or Salleri)", "description": "Scenic drive through the Himalayan foothills to Dhap (2,900m), the starting point of the trek." },
    { "day": 3, "title": "Trek to Jhapre", "description": "First day of trekking through forests and small settlements to Jhapre (2,920m), with initial mountain views." },
    { "day": 4, "title": "Trek to Pikey Base Camp", "description": "Ascend through beautiful forests to the lodge settlement at Pikey Base Camp (3,640m)." },
    { "day": 5, "title": "Summit Pikey Peak & Trek to Junbesi", "description": "Early morning climb to Pikey Peak (4,065m) for sunrise. After enjoying the views, descend to the beautiful Sherpa village of Junbesi (2,700m)." },
    { "day": 6, "title": "Rest Day & Explore Junbesi", "description": "Acclimatization and exploration day. Visit the local school, nunnery, and the magnificent Thupten Chholing Monastery." },
    { "day": 7, "title": "Trek to Taksindu La", "description": "Trek through forests over the Taksindu La pass (3,071m) to the small village of Taksindu." },
    { "day": 8, "title": "Trek to Phaplu", "description": "Final day of trekking, descending to Phaplu (2,413m), home to a small STOL airstrip." },
    { "day": 9, "title": "Drive to Kathmandu", "description": "Full-day drive back to Kathmandu through the scenic Solu region." },
    { "day": 10, "title": "Final Departure", "description": "Transfer to Tribhuvan International Airport for departure." }
  ],
  "maxGroupSize": 12,
  "cancellationPolicy": "Full refund if canceled 30 days before start date",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "Moderate",
  "maxAltitude": "4,065m (Pikey Peak)",
  "requirements": ["Good general fitness", "No prior high-altitude trekking experience required"],
  "permits": ["Local Area Permit (obtained in Kathmandu or Salleri)"],
  "equipment": ["Good trekking boots", "Warm layers and jacket", "Daypack", "Trekking poles recommended"],
  "entryRequirements": ["Valid Nepal visa", "Travel insurance recommended"]
},

{
  "id": "22",
  "title": "Rupina La Pass Trek",
  "location": "Nepal",
  "duration": "22 days",
  "rating": 4.8,
  "reviewCount": 45,
  "price": 2200,
  "originalPrice": 2500,
  "excerpt": "A true expedition-style traverse connecting the Manaslu and Annapurna regions over one of Nepal's most challenging and remote high passes.",
  "description": "The Rupina La Pass Trek is a serious, off-the-beaten-path adventure for expert trekkers. It involves crossing the formidable Rupina La Pass (4,720m), a rugged and rarely used route that links the Nubri Valley (Manaslu region) with the Nar Phu Valley (Annapurna region). This trek takes you through some of the most remote and culturally preserved villages in Nepal, with landscapes ranging from deep gorges to high alpine deserts. It requires self-sufficiency, camping, and a spirit of exploration, offering an authentic and unforgettable Himalayan experience.",
  "image": "/images/rupinala.jpg",
  "images": [],
  "tags": ["Rupina La", "Expedition", "Remote", "Manaslu", "Nar Phu", "Challenging", "Nepal"],
  "highlights": [
    "Cross the challenging and remote Rupina La Pass (4,720m)",
    "Explore the hidden Tibetan-style villages of the Nar Phu Valley",
    "Experience the unique culture of the Nubri Valley (Tibetan Bhutia people)",
    "Trek through pristine, trail-less valleys and high-altitude pastures",
    "Combine two iconic restricted areas (Manaslu and Nar Phu) in one epic traverse"
  ],
  "includes": ["Highly Experienced Guide (with pass crossing expertise)", "All Meals on Trek", "Full Camping Equipment (Tents, Kitchen, Dining)", "All Required Restricted Area and National Park Permits", "Porters and/or Yaks for gear transport", "Sleeping Bag & Mattress", "Group First Aid Kit & Satellite Phone"],
  "excludes": ["International Flights", "Nepal Visa", "Personal Expenses & Tips", "Travel Insurance", "Meals in Kathmandu", "Personal Trekking & Mountaineering Gear"],
  "included": ["Highly Experienced Guide (with pass crossing expertise)", "All Meals on Trek", "Full Camping Equipment (Tents, Kitchen, Dining)", "All Required Restricted Area and National Park Permits", "Porters and/or Yaks for gear transport", "Sleeping Bag & Mattress", "Group First Aid Kit & Satellite Phone"],
  "excluded": ["International Flights", "Nepal Visa", "Personal Expenses & Tips", "Travel Insurance", "Meals in Kathmandu", "Personal Trekking & Mountaineering Gear"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive in Kathmandu. Detailed expedition briefing and final gear check." },
    { "day": 2, "title": "Drive to Soti Khola", "description": "Long drive to the Manaslu trailhead at Soti Khola (710m)." },
    { "day": 3, "title": "Trek to Machha Khola", "description": "Start trekking along the Budhi Gandaki River to Machha Khola (930m)." },
    { "day": 4, "title": "Trek to Jagat", "description": "Enter the Manaslu Restricted Area, trekking to Jagat (1,410m)." },
    { "day": 5, "title": "Trek to Deng", "description": "Continue up the valley, crossing suspension bridges to Deng (1,860m)." },
    { "day": 6, "title": "Trek to Namrung", "description": "Ascend through forests to Namrung (2,630m), with improving mountain views." },
    { "day": 7, "title": "Trek to Lho", "description": "Trek to Lho (3,180m), with spectacular views of Manaslu North Face." },
    { "day": 8, "title": "Trek to Sama Gaon", "description": "Continue to the main village of Sama Gaon (3,530m) for acclimatization." },
    { "day": 9, "title": "Acclimatization in Sama Gaon", "description": "Rest day. Optional hike to Manaslu Base Camp or Pungyen Gompa." },
    { "day": 10, "title": "Trek to Samdo", "description": "Short trek to the high village of Samdo (3,860m) near the Tibetan border." },
    { "day": 11, "title": "Trek to Rupina La Phedi (Base Camp)", "description": "Leave the main trail, heading west into a side valley to establish base camp below the pass (~4,200m)." },
    { "day": 12, "title": "Cross Rupina La Pass to Chyargo", "description": "Demanding full-day crossing of the Rupina La Pass (4,720m). Technical descent to camp near Chyargo in the Nar Phu Valley (~4,000m)." },
    { "day": 13, "title": "Trek to Nar Village", "description": "Descend further into the heart of the Nar Phu Valley, reaching the ancient village of Nar (4,110m)." },
    { "day": 14, "title": "Explore Nar & Phu Villages", "description": "Rest and exploration day. Visit Nar's monasteries and optionally hike towards Phu Village." },
    { "day": 15, "title": "Trek to Kyang", "description": "Trek down the Nar Phu Valley, following the Phu Khola to Kyang (3,840m)." },
    { "day": 16, "title": "Trek to Meta", "description": "Continue descent through spectacular canyon landscapes to Meta (3,560m)." },
    { "day": 17, "title": "Trek to Koto", "description": "Exit the Nar Phu Restricted Area, joining the Annapurna Circuit trail at Koto (2,600m)." },
    { "day": 18, "title": "Trek to Tal", "description": "Descend through the lush Marsyangdi Valley to the beautiful village of Tal (1,700m)." },
    { "day": 19, "title": "Trek to Jagat", "description": "Continue descending to Jagat (1,300m)." },
    { "day": 20, "title": "Trek to Bhulbhule & Drive to Besisahar", "description": "Final short trek to Bhulbhule (840m) and drive to Besisahar (760m)." },
    { "day": 21, "title": "Drive to Kathmandu", "description": "Full-day drive back to Kathmandu." },
    { "day": 22, "title": "Final Departure", "description": "Transfer to airport for departure." }
  ],
  "maxGroupSize": 6,
  "cancellationPolicy": "Full refund if canceled 90 days before start date. Strict policy due to restricted area permit regulations.",
  "isPopular": false,
  "isSoldOut": false,
  "difficulty": "Strenuous / Expert Level",
  "maxAltitude": "4,720m (Rupina La Pass)",
  "requirements": ["Outstanding physical fitness and endurance", "Extensive previous high-altitude trekking and camping experience", "Experience with basic route-finding on unstable terrain", "Mental fortitude for remote, expedition-style travel"],
  "permits": ["Manaslu Restricted Area Permit (RAP)", "Annapurna Conservation Area Permit (ACAP)", "Nar Phu Restricted Area Permit", "TIMS Card"],
  "equipment": ["Expedition-quality trekking boots", "Full camping gear if personal preferred", "Crampons and trekking poles", "4-Season sleeping bag (-15°C to -20°C)", "Down jacket, waterproof shell and pants", "Headlamp with extra batteries"],
  "entryRequirements": ["Valid passport", "Nepal Visa", "Comprehensive travel insurance covering emergency evacuation from remote areas and altitudes up to 5,000m"]
}


]


export default function HomePage() {
  const [tours] = useState<Tour[]>(TOURS);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add the hero image path here
  const heroImage = "/images/trekking-hero.jpg"; // Change this to your desired image path

  const handleTourSelect = (tour: Tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen">
      {/* Updated Hero section with image */}
      <Hero 
        title="Nepal Trekking Adventures"
        description="Experience the ultimate Himalayan adventure with our comprehensive trekking options. From gentle cultural walks to challenging high-altitude treks and peak climbing expeditions, we offer guided experiences for every level of adventurer in Nepal's most spectacular mountain regions."
        backgroundImage={heroImage} // Add this line
      />
      
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          {tours.length > 0 ? (
            <ToursGrid
              tours={tours}
              onTourSelect={handleTourSelect}
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No trekking tours available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Additional sections remain the same */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Trekking Regions of Nepal</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">⛰️</span>
              </div>
              <h3 className="font-semibold">Everest Region</h3>
              <p className="text-sm text-muted-foreground">Home to the world's highest peak with classic treks</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">🏔️</span>
              </div>
              <h3 className="font-semibold">Annapurna Region</h3>
              <p className="text-sm text-muted-foreground">Diverse landscapes from lush valleys to high passes</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">🌄</span>
              </div>
              <h3 className="font-semibold">Langtang Region</h3>
              <p className="text-sm text-muted-foreground">Closest Himalayan trekking from Kathmandu</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">🗻</span>
              </div>
              <h3 className="font-semibold">Restricted Areas</h3>
              <p className="text-sm text-muted-foreground">Upper Mustang, Manaslu, and Tsum Valley</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Trekking Difficulty Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">Easy</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Treks</h3>
              <p className="text-muted-foreground">3-7 days, max altitude below 3,500m, no previous experience needed</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold">Moderate</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Moderate Treks</h3>
              <p className="text-muted-foreground">7-14 days, max altitude 4,000-5,000m, good fitness required</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold">Challenging</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Challenging Treks</h3>
              <p className="text-muted-foreground">14-21 days, high passes above 5,000m, previous trekking experience</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold">Expert</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Treks</h3>
              <p className="text-muted-foreground">Peak climbing, technical sections, mountaineering experience needed</p>
            </div>
          </div>
        </div>
      </section>

      {selectedTour && (
        <TourDetailModal
          tour={selectedTour}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <Notifications />
    </main>
  );
}