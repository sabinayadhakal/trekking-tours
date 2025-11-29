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
id: "1",
title: "Annapurna Base Camp Trek",
location: "Nepal",
duration: "12 days",
rating: 4.8,
reviewCount: 320,
price: 850,
originalPrice: 950,
excerpt: "Classic trek to the base of the majestic Annapurna massif.",
description: "The Annapurna Base Camp Trek (ABC) takes you through lush rhododendron forests, charming Gurung and Magar villages and alpine terrain to the dramatic amphitheatre of Annapurna South and Hiunchuli. Perfect for trekkers seeking diverse landscapes, cultural contact and spectacular close-up mountain views.",
image: "/images/annapurna.jpg",
images: ["/images/annapurna1.jpg", "/images/annapurna2.jpg", "/images/annapurna3.jpg"],
tags: ["Annapurna", "Trekking", "Adventure", "Nepal"],
highlights: [
"Spectacular close-range Annapurna views",
"Rhododendron forests and diverse ecosystems",
"Local Gurung and Magar village experiences",
"Natural hot springs option at Jhinu Danda"
],
includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
excludes: ["Flights", "Personal expenses", "Travel insurance"],
included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
excluded: ["Flights", "Personal expenses", "Travel insurance"],
itinerary: [
{ day: 1, title: "Arrival in Kathmandu", description: "Arrive Kathmandu (1,350m). Transfer to hotel; pre-trip briefing and permit processing." },
{ day: 2, title: "Drive to Pokhara", description: "Drive to Pokhara (820m), free afternoon by Phewa Lake; gear check." },
{ day: 3, title: "Drive to Nayapul & Trek to Tikhedhunga", description: "Drive to Nayapul; trek via Birethanti to Tikhedhunga (1,540m)." },
{ day: 4, title: "Trek to Ghorepani", description: "Steep climb to Ulleri then on to Ghorepani (2,874m), evening view of Annapurna range." },
{ day: 5, title: "Poon Hill sunrise & Trek to Tadapani", description: "Optional early ascent to Poon Hill for sunrise; continue through rhododendron forest to Tadapani (2,630m)." },
{ day: 6, title: "Trek to Chomrong", description: "Descend to Kimche and climb to Chomrong (2,170m), gateway to ABC." },
{ day: 7, title: "Trek to Dovan", description: "Cross suspension bridges and trek through forests to Dovan (2,600m)." },
{ day: 8, title: "Trek to Machhapuchhre Base Camp (MBC)", description: "Climb to MBC (3,700m) with close-up views of Fishtail and Annapurna South." },
{ day: 9, title: "Trek to Annapurna Base Camp", description: "Final ascent to ABC (4,130m). Enjoy panorama of Annapurna massif; descend to Bamboo for overnight." },
{ day: 10, title: "Descend to Jhinu Danda", description: "Descend via Chomrong to Jhinu Danda; optional hot springs visit." },
{ day: 11, title: "Trek to Nayapul & Drive to Pokhara", description: "Finish trek at Nayapul; drive back to Pokhara." },
{ day: 12, title: "Drive to Kathmandu / Departure", description: "Drive or fly to Kathmandu and onward departure." }
],
maxGroupSize: 15,
cancellationPolicy: "Full refund if canceled 30 days before start date",
isPopular: true,
isSoldOut: false,
difficulty: "moderate to challenging",
maxAltitude: "4,130m (Annapurna Base Camp)",
requirements: ["Good physical fitness", "Previous trekking experience recommended"],
permits: ["Annapurna Conservation Area Permit (ACAP)", "TIMS Card"],
equipment: ["Trekking boots", "Warm layers", "Backpack", "Trekking poles"],
entryRequirements: ["Valid Nepal visa", "Travel insurance"]
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
image: "/images/everest.jpg",
images: ["/images/everest1.jpg", "/images/everest2.jpg", "/images/everest3.jpg"],
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
image: "/images/manaslu.jpg",
images: ["/images/manaslu1.jpg", "/images/manaslu2.jpg", "/images/manaslu3.jpg"],
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
image: "/images/annapurna-circuit.jpg",
images: ["/images/annapurna-circuit1.jpg", "/images/annapurna-circuit2.jpg", "/images/annapurna-circuit3.jpg"],
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
image: "/images/three-passes.jpg",
images: ["/images/three-passes1.jpg", "/images/three-passes2.jpg", "/images/three-passes3.jpg"],
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
image: "/images/poon-hill.jpg",
images: ["/images/poon-hill1.jpg", "/images/poon-hill2.jpg", "/images/poon-hill3.jpg"],
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
image: "/images/khopra.jpg",
images: ["/images/khopra1.jpg", "/images/khopra2.jpg", "/images/khopra3.jpg"],
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
id: "8",
title: "Gokyo Lakes Trek",
location: "Nepal",
duration: "14 days",
rating: 4.8,
reviewCount: 190,
price: 1250,
originalPrice: 1400,
excerpt: "High-altitude trek to the crystalline Gokyo lakes and Gokyo Ri viewpoint.",
description: "The Gokyo Lakes trek explores an outstanding set of turquoise high-altitude lakes and takes you to Gokyo Ri for one of the finest panoramic views of Everest and surrounding peaks. Often combined with the Three Passes route or EBC.",
image: "/images/gokyo.jpg",
images: ["/images/gokyo1.jpg", "/images/gokyo2.jpg", "/images/gokyo3.jpg"],
tags: ["Gokyo", "Everest region", "Lakes", "Nepal"],
highlights: [
"Gokyo Ri sunrise panorama",
"Gokyo Lakes' pristine alpine scenery",
"Option to connect with Everest Base Camp or Three Passes",
"Less crowded than classic EBC route"
],
includes: ["Guide", "Meals", "Accommodation", "Permits", "Lukla flight (if included)"],
excludes: ["International flights", "Personal expenses", "Travel insurance"],
included: ["Guide", "Meals", "Accommodation", "Permits"],
excluded: ["International flights", "Personal expenses", "Travel insurance"],
itinerary: [
{ day: 1, title: "Arrival Kathmandu", description: "Briefing and permit paperwork." },
{ day: 2, title: "Fly to Lukla & Trek to Phakding", description: "Start route toward Namche." },
{ day: 3, title: "Trek to Namche Bazaar", description: "Acclimatization hub." },
{ day: 4, title: "Trek to Dole", description: "Move into lesser-traveled trails." },
{ day: 5, title: "Trek to Machhermo", description: "Climb into the Gokyo valley." },
{ day: 6, title: "Trek to Gokyo", description: "Arrive at the third Gokyo lake and surrounding hamlets." },
{ day: 7, title: "Climb Gokyo Ri & Explore Lakes", description: "Summit Gokyo Ri (5,357m) for sunrise and explore lakes." },
{ day: 8, title: "Optional Trek to Ngozumpa Glacier viewpoint", description: "Explore glacier views or rest." },
{ day: 9, title: "Return toward Namche via Thame", description: "Begin descent and loop back." },
{ day: 10, title: "Trek to Monjo/Trek to Lukla", description: "Return trail toward Lukla." },
{ day: 11, title: "Fly to Kathmandu", description: "Flight to Kathmandu; recovery day." },
{ day: 12, title: "Sightseeing in Kathmandu", description: "Optional cultural day." },
{ day: 13, title: "Buffer/Contingency", description: "Extra day for flight/weather delays." },
{ day: 14, title: "Departure", description: "Final departure logistics." }
],
maxGroupSize: 10,
cancellationPolicy: "Full refund if canceled 45 days before start date",
isPopular: true,
isSoldOut: false,
difficulty: "challenging (high altitude)",
maxAltitude: "5,357m (Gokyo Ri)",
requirements: ["Strong fitness", "High-altitude experience recommended"],
permits: ["Sagarmatha National Park Entry Permit", "Khumbu Pasang Lhamu Rural Municipality Permit", "TIMS Card (as required)"],
equipment: ["Warm sleeping bag", "High-altitude layers", "Light crampons (seasonal)"],
entryRequirements: ["Valid Nepal visa", "Comprehensive travel insurance"]
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
image: "/images/langtang.jpg",
images: ["/images/langtang1.jpg", "/images/langtang2.jpg", "/images/langtang3.jpg"],
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
images: ["/images/muldai1.jpg", "/images/muldai2.jpg", "/images/muldai3.jpg"],
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
image: "/images/mardi-himal.jpg",
images: ["/images/mardi1.jpg", "/images/mardi2.jpg", "/images/mardi3.jpg"],
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
image: "/images/nar-phu.jpg",
images: ["/images/narphu1.jpg", "/images/narphu2.jpg", "/images/narphu3.jpg"],
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
image: "/images/upper-mustang.jpg",
images: ["/images/uppermustang1.jpg", "/images/uppermustang2.jpg", "/images/uppermustang3.jpg"],
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
image: "/images/tamang.jpg",
images: ["/images/tamang1.jpg", "/images/tamang2.jpg", "/images/tamang3.jpg"],
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
image: "/images/gosaikunda.jpg",
images: ["/images/gosaikunda1.jpg", "/images/gosaikunda2.jpg", "/images/gosaikunda3.jpg"],
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
image: "/images/langtang-gosaikunda.jpg",
images: ["/images/langtanggosaikunda1.jpg", "/images/langtanggosaikunda2.jpg", "/images/langtanggosaikunda3.jpg"],
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
image: "/images/ganja-la.jpg",
images: ["/images/ganjala1.jpg", "/images/ganjala2.jpg", "/images/ganjala3.jpg"],
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
images: ["/images/helambu1.jpg", "/images/helambu2.jpg", "/images/helambu3.jpg"],
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