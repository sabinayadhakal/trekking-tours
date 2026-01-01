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
"duration": "15 days",
"rating": 4.9,
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
"Visit the sacred Pungen Gompa monastery",
"Acclimatization hike to Birendra Lake and Manaslu Base Camp",
"Explore the Tibetan border region near Rui La",
"Rich Tibetan Buddhist culture in remote villages",
"Dramatic transitions from lush forests to arid high desert"
],
"includes": ["Professional Guide", "All Meals during trek", "Teahouse Accommodation", "All Required Permits", "Porters", "Jeep from Tilije to Besisahar", "Kathmandu Airport Transfers", "First night hotel in Kathmandu"],
"excludes": ["International Flights", "Nepal Visa", "Personal expenses", "Travel insurance", "Tips", "Lunch & Dinner in Kathmandu", "Bus from Besisahar to Kathmandu"],
"included": ["Professional Guide", "All Meals during trek", "Teahouse Accommodation", "All Required Permits", "Porters", "Jeep from Tilije to Besisahar", "Kathmandu Airport Transfers", "First night hotel in Kathmandu"],
"excluded": ["International Flights", "Nepal Visa", "Personal expenses", "Travel insurance", "Tips", "Lunch & Dinner in Kathmandu", "Bus from Besisahar to Kathmandu"],
"itinerary": [
{ "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive at Tribhuvan International Airport. Our representative will meet you and transfer you to your hotel. Evening trek briefing and gear check. Overnight in Kathmandu." },
{ "day": 2, "title": "Drive to Machha Khola", "description": "Early morning scenic drive from Kathmandu to Machha Khola (930m), following the Budhi Gandaki River valley. Overnight in Machha Khola." },
{ "day": 3, "title": "Trek to Jagat", "description": "Begin trekking from Machha Khola to Jagat (1,410m). Cross suspension bridges and enter the official Manaslu Restricted Area." },
{ "day": 4, "title": "Trek to Deng", "description": "Continue ascending the valley through beautiful bamboo forests to the village of Deng (1,860m)." },
{ "day": 5, "title": "Trek to Namrung", "description": "Trek to Namrung (2,630m). The landscape and architecture begin to show strong Tibetan influence. Stunning mountain views start to appear." },
{ "day": 6, "title": "Trek to Shyala via Pungen Gompa", "description": "A scenic day trekking to Shyala (3,520m). En route, make a spiritual detour to visit the ancient and sacred Pungen Gompa monastery, set against a dramatic cliff face." },
{ "day": 7, "title": "Trek to Samagaon", "description": "Short trek to the main village of Samagaon (3,530m). Enjoy breathtaking, close-up views of the north face of Mt. Manaslu." },
{ "day": 8, "title": "Acclimatization Day: Birendra Lake & Manaslu BC Hike", "description": "A vital rest day. Hike to the stunning turquoise Birendra Lake and continue further towards Manaslu Base Camp (4,800m) for unparalleled glacier and mountain vistas before returning to Samagaon." },
{ "day": 9, "title": "Trek to Samdo", "description": "A shorter trek to the high-altitude village of Samdo (3,860m), a traditional trading post near the Tibetan border." },
{ "day": 10, "title": "Exploration Day: Rui La (Tibet Border) Viewpoint", "description": "Acclimatization hike towards the Rui La pass, the historic trade route to Tibet. Explore the stark, high-desert landscape and enjoy panoramic views before returning to Samdo for rest." },
{ "day": 11, "title": "Trek to Dharamsala (Larkya Phedi)", "description": "Ascend to the high camp at Dharamsala (4,460m). Prepare for the early morning pass crossing in the sparse, alpine environment." },
{ "day": 12, "title": "Cross Larkya La Pass to Bimthang", "description": "The pinnacle day. Pre-dawn start to cross the challenging Larkya La Pass (5,106m). Celebrate with breathtaking 360-degree Himalayan views before the long descent to the beautiful valley of Bimthang (3,720m)." },
{ "day": 13, "title": "Trek to Tilije & Jeep to Besisahar", "description": "Descend through lush forests to Tilije (2,300m). Take a shared jeep to Besisahar. Overnight in Besisahar." },
{ "day": 14, "title": "Bus from Besisahar to Kathmandu", "description": "Board a local bus for the scenic journey from Besisahar back to Kathmandu. Evening at leisure in Kathmandu. Overnight in Kathmandu." },
{ "day": 15, "title": "Departure from Kathmandu", "description": "Transfer to Tribhuvan International Airport for your onward flight, or extend your stay in Nepal." }
],
"maxGroupSize": 12,
"cancellationPolicy": "Full refund if canceled 45 days before start date",
"isPopular": true,
"isSoldOut": false,
"difficulty": "challenging",
"maxAltitude": "5,106m (Larkya La Pass)",
"requirements": ["Excellent physical fitness", "Previous high-altitude trekking experience is essential"],
"permits": ["Manaslu Restricted Area Permit (RAP)", "Annapurna Conservation Area Permit (ACAP)", "TIMS Card"],
"equipment": ["Sturdy Trekking Boots", "Down Jacket (-20°C rating)", "4-Season Sleeping Bag", "Crampons/Microspikes (Oct-Nov, Mar-Apr)", "Trekking Poles", "Headlamp", "High SPF Sun Protection"],
"entryRequirements": ["Valid Passport & Nepal Visa (obtainable on arrival)", "Mandatory Travel Insurance covering emergency helicopter evacuation up to 6,000m"]
},
{
  "id": "2",
  "title": "Everest Base Camp Trek",
  "location": "Nepal (Sagarmatha National Park)",
  "duration": "13 days",
  "rating": 4.9,
  "price": 1450,
  "originalPrice": 1650,
  "excerpt": "The classic trek to the foot of the world's highest mountain.",
  "description": "The Everest Base Camp Trek is an iconic Himalayan journey to the valleys beneath Mount Everest. The route blends Sherpa culture, high mountain vistas, Buddhist monasteries and the challenge of walking into the Sagarmatha (Everest) National Park.",
  "image": "/images/everest-1.jpg",
  "images": [],
  "tags": ["Everest", "Sherpa", "Trekking", "Nepal", "Himalayas"],
  "highlights": [
    "Breathtaking sunrise view from Kala Patthar (5,545m)",
    "Standing at Everest Base Camp (5,364m)",
    "Explore the vibrant Sherpa capital of Namche Bazaar",
    "Visit the historic Tengboche Monastery",
    "Stunning views of Everest, Lhotse, Nuptse, and Ama Dablam"
  ],
  "includes": ["Professional Guide", "Meals during trek", "Teahouse Accommodation", "All Permits", "Lukla Flight", "Airport transfers"],
  "excludes": ["International flights", "Nepal Visa", "Personal expenses", "Travel insurance", "Tips", "Extra nights in Kathmandu"],
  "included": ["Professional Guide", "Meals during trek", "Teahouse Accommodation", "All Permits", "Lukla Flight", "Airport transfers"],
  "excluded": ["International flights", "Nepal Visa", "Personal expenses", "Travel insurance", "Tips", "Extra nights in Kathmandu"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive at Tribhuvan International Airport. Transfer to your hotel. Evening trek briefing and gear check. Overnight in Kathmandu." },
    { "day": 2, "title": "Fly to Lukla & Trek to Phakding", "description": "Early morning scenic flight to Lukla (2,860m). Meet the crew and begin trekking, descending to Phakding (2,652m) for the first night. (3-4 hrs trek)" },
    { "day": 3, "title": "Trek to Namche Bazaar", "description": "Follow the Dudh Koshi River, cross iconic suspension bridges, and make the steep ascent to the bustling Sherpa town of Namche Bazaar (3,440m). (5-6 hrs trek)" },
    { "day": 4, "title": "Acclimatization Day in Namche", "description": "Rest day for acclimatization. Optional hikes to the Everest View Hotel, the Sherpa Museum, or the village of Khumjung to aid adaptation to altitude." },
    { "day": 5, "title": "Trek to Tengboche", "description": "Trek through forests with stunning mountain views to Tengboche (3,870m). Visit the famous Tengboche Monastery, the spiritual center of the Khumbu region. (6 hrs trek)" },
    { "day": 6, "title": "Trek to Dingboche", "description": "Descend through rhododendron forests, cross the Imja River, and climb to the high valley of Dingboche (4,400m). (6 hrs trek)" },
    { "day": 7, "title": "Trek to Lobuche", "description": "Continue upwards through the memorial stupas of Thukla Pass, then trek alongside the Khumbu Glacier to reach Lobuche (4,900m). (6-7 hrs trek)" },
    { "day": 8, "title": "Trek to Gorak Shep & Everest Base Camp", "description": "Challenging trek to Gorak Shep (5,180m). After lunch, continue the journey to the iconic Everest Base Camp (5,364m). Return to Gorak Shep for the night. (7-8 hrs trek)" },
    { "day": 9, "title": "Kala Patthar Summit & Descend to Pheriche", "description": "Pre-dawn climb to Kala Patthar (5,545m) for a legendary sunrise view over Everest. Descend to Gorak Shep for breakfast, then continue down to Pheriche (4,320m). (5-6 hrs trek)" },
    { "day": 10, "title": "Trek to Namche Bazaar", "description": "Long descent along the Imja Valley, retracing steps through Tengboche and eventually back to the comfort of Namche Bazaar. (7-8 hrs trek)" },
    { "day": 11, "title": "Trek to Phakding and Lukla", "description": "Final trekking day, descending from Namche back to Phakding for lunch, then continuing the final stretch to Lukla. Celebrate the completion of the trek. (6-7 hrs trek)" },
    { "day": 12, "title": "Fly back to Kathmandu", "description": "Morning flight from Lukla back to Kathmandu. The rest of the day is free for rest, shopping, or exploring the city. Overnight in Kathmandu." },
    { "day": 13, "title": "Departure from Kathmandu", "description": "Transfer to Tribhuvan International Airport for your onward flight, or extend your stay in Nepal." }
  ],
  "maxGroupSize": 12,
  "cancellationPolicy": "Full refund if canceled 45 days before start date",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "challenging (high altitude)",
  "maxAltitude": "5,545m (Kala Patthar)",
  "requirements": ["Excellent cardiovascular fitness", "Prior multi-day trekking experience", "Good mental preparedness for altitude"],
  "permits": ["Sagarmatha National Park Entry Permit", "Khumbu Pasang Lhamu Rural Municipality Permit"],
  "equipment": ["High-quality Trekking Boots", "Down Jacket (-15°C rating)", "4-Season Sleeping Bag", "Trekking Poles", "Headlamp", "High SPF Sun Protection"],
  "entryRequirements": ["Valid Passport & Nepal Visa (obtainable on arrival)", "Mandatory Travel Insurance covering emergency helicopter evacuation up to 6,000m"]
},
{
  "id": "3",
  "title": "Manaslu & Tsum Valley Trek",
  "location": "Nepal",
  "duration": "21 days",
  "rating": 4.9,
  "price": 1850,
  "originalPrice": 2150,
  "excerpt": "An epic journey combining the remote Tsum Valley with the classic Manaslu Circuit - a true Himalayan pilgrimage.",
  "description": "This extraordinary trek combines two of Nepal's most pristine and culturally rich regions. First, venture into the sacred Tsum Valley, a hidden Buddhist sanctuary bordering Tibet. Then complete the classic Manaslu Circuit, crossing the challenging Larkya La Pass. This expedition offers unparalleled cultural immersion, breathtaking Himalayan scenery, and a profound sense of adventure in one of the world's last untouched mountain realms.",
  "image": "/images/tsum-1.jpg",
  "images": [],
  "tags": ["Manaslu", "Tsum Valley", "Trekking", "Adventure", "Nepal", "Himalayas", "Buddhist Culture"],
  "highlights": [
    "Explore the sacred Tsum Valley - 'The Valley of Happiness'",
    "Visit ancient Buddhist monasteries and meditation caves",
    "Cross the high Larkya La Pass (5,106m)",
    "Complete circuit of Mount Manaslu (8,163m)",
    "Encounter unique Tibetan Buddhist culture in remote villages",
    "See the sacred Pungen Gompa and Rachen Gompa",
    "Dramatic landscapes from lush valleys to high-altitude desert"
  ],
  "includes": ["Professional Guide & Assistant Guide", "All Meals during trek", "Teahouse/Lodge Accommodation", "All Required Permits", "Porters (1 porter per 2 trekkers)", "Private Transport: Kathmandu-Machha Khola", "Jeep from Tilije to Besisahar", "Kathmandu Airport Transfers", "3 Nights Hotel in Kathmandu (B&B)", "Sleeping Bag & Down Jacket if needed"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary", "Bus from Besisahar to Kathmandu"],
  "included": ["Professional Guide & Assistant Guide", "All Meals during trek", "Teahouse/Lodge Accommodation", "All Required Permits", "Porters (1 porter per 2 trekkers)", "Private Transport: Kathmandu-Machha Khola", "Jeep from Tilije to Besisahar", "Kathmandu Airport Transfers", "3 Nights Hotel in Kathmandu (B&B)", "Sleeping Bag & Down Jacket if needed"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary", "Bus from Besisahar to Kathmandu"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive at Tribhuvan International Airport. Transfer to hotel. Evening welcome dinner and comprehensive trek briefing. Overnight in Kathmandu." },
    { "day": 2, "title": "Kathmandu: Sightseeing & Preparation", "description": "Morning guided tour of UNESCO World Heritage Sites: Swayambhunath (Monkey Temple) and Boudhanath Stupa. Afternoon for final gear preparation, permit processing, and rest. Overnight in Kathmandu." },
    { "day": 3, "title": "Drive to Machha Khola", "description": "Early morning scenic drive through Nepalese countryside to Machha Khola (930m). Follow the Budhi Gandaki River valley. Overnight in lodge." },
    { "day": 4, "title": "Trek to Jagat", "description": "Begin trekking along the river, crossing suspension bridges to Jagat (1,410m). Enter the Manaslu Conservation Area. Overnight in lodge." },
    { "day": 5, "title": "Trek to Lokpa (Tsum Valley Entrance)", "description": "Trek to Lokpa (2,240m). At the junction, take the trail north into the sacred Tsum Valley. Overnight in lodge." },
    { "day": 6, "title": "Trek to Chumling (Lower Tsum)", "description": "Enter the Tsum Valley proper. Trek to Chumling (2,386m), passing through beautiful forests with views of Ganesh Himal. Overnight in lodge." },
    { "day": 7, "title": "Trek to Chhokangparo", "description": "Ascend to Chhokangparo (3,010m), a cluster of villages with stunning views of Himalchuli and Ganesh Himal. Visit local gompas. Overnight in lodge." },
    { "day": 8, "title": "Trek to Nile & Mu Gompa", "description": "Trek to Nile (3,361m) and visit the ancient Mu Gompa monastery (3,700m), one of the highest monasteries in the region. Explore meditation caves. Overnight in Nile." },
    { "day": 9, "title": "Exploration Day: Rachen Gompa & Milarepa Cave", "description": "Descend to Chhule and visit the magnificent Rachen Gompa nunnery. Explore Milarepa's meditation cave (Piren Phu). Return to Chhokangparo for overnight." },
    { "day": 10, "title": "Trek to Gumba Lungdang", "description": "Optional challenging day hike to Gumba Lungdang for exceptional Himalayan views, or rest and cultural exploration in Chhokangparo. Overnight in Chhokangparo." },
    { "day": 11, "title": "Trek Back to Lokpa", "description": "Descend through the Tsum Valley, retracing steps back to Lokpa. Overnight in lodge." },
    { "day": 12, "title": "Trek to Deng", "description": "Rejoin the main Manaslu Circuit trail. Trek through beautiful bamboo forests to Deng (1,860m). Overnight in lodge." },
    { "day": 13, "title": "Trek to Namrung", "description": "Trek to Namrung (2,630m). Landscape transitions to Tibetan influence with impressive mani walls. First views of Manaslu appear. Overnight in lodge." },
    { "day": 14, "title": "Trek to Shyala via Pungen Gompa", "description": "Scenic trek to Shyala (3,520m). Detour to visit the sacred Pungen Gompa monastery, dramatically set against a cliff face. Overnight in lodge." },
    { "day": 15, "title": "Trek to Samagaon", "description": "Short trek to Samagaon (3,530m) with breathtaking views of Manaslu's north face. Visit the village gompa. Overnight in lodge." },
    { "day": 16, "title": "Acclimatization Day: Birendra Lake & Manaslu BC", "description": "Vital rest day. Hike to stunning turquoise Birendra Lake and continue towards Manaslu Base Camp (4,800m) for spectacular glacier views. Return to Samagaon." },
    { "day": 17, "title": "Trek to Samdo", "description": "Short trek to Samdo (3,860m), a Tibetan-influenced trading village near the border. Rest and acclimatize. Overnight in lodge." },
    { "day": 18, "title": "Trek to Dharamsala", "description": "Ascend to the high camp at Dharamsala (4,460m) in preparation for the pass crossing. Short afternoon acclimatization hike. Overnight in basic lodge." },
    { "day": 19, "title": "Cross Larkya La Pass to Bimthang", "description": "Pre-dawn start to cross the challenging Larkya La Pass (5,106m). Celebrate with 360-degree Himalayan views before descending to the beautiful valley of Bimthang (3,720m). Overnight in lodge." },
    { "day": 20, "title": "Trek to Tilije & Jeep to Besisahar", "description": "Descend through lush rhododendron and pine forests to the charming stone village of Tilije (2,300m). After lunch, take a shared jeep ride along the Marshyangdi River valley to Besisahar (760m). Overnight in Besisahar." },
    { "day": 21, "title": "Bus to Kathmandu & Departure", "description": "Board a local bus for the scenic journey from Besisahar back to Kathmandu. Arrive in Kathmandu in the afternoon. Transfer to airport for your onward flight, or to your hotel if extending your stay. Trip concludes." }
  ],
  "maxGroupSize": 8,
  "cancellationPolicy": "Full refund if canceled 60 days before start date, 50% refund 30-60 days before",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "challenging to strenuous",
  "maxAltitude": "5,106m (Larkya La Pass)",
  "requirements": ["Excellent physical fitness", "Previous multi-day trekking experience", "High-altitude experience recommended", "Strong mental endurance"],
  "permits": ["Manaslu Restricted Area Permit (RAP)", "Tsum Valley Restricted Area Permit", "Annapurna Conservation Area Permit (ACAP)", "TIMS Card"],
  "equipment": ["Sturdy Trekking Boots (broken in)", "Down Jacket (-20°C rating)", "4-Season Sleeping Bag (-15°C)", "Waterproof Layers", "Crampons/Microspikes (seasonal)", "Trekking Poles", "Headlamp with extra batteries", "High SPF Sun Protection", "Personal First Aid Kit"],
  "entryRequirements": ["Valid Passport (6+ months validity)", "Nepal Visa (obtainable on arrival)", "Mandatory Travel Insurance covering emergency helicopter evacuation up to 6,000m"],
},
{
"id": "4",
"title": "Three Passes of Everest Trek",
"location": "Nepal (Khumbu Region)",
"duration": "20 days",
"rating": 4.9,
"price": 2100,
"originalPrice": 2400,
"excerpt": "The ultimate Everest adventure - cross three Himalayan passes above 5,300m for complete immersion in the high Khumbu.",
"description": "The Three Passes Trek is the most comprehensive and challenging circuit in the Everest region. This epic journey crosses three high passes (Renjo La, Cho La, and Kongma La), each over 5,300m, while visiting Gokyo Lakes, Everest Base Camp, and remote valleys. It offers unparalleled 360-degree Himalayan views, complete solitude away from main trails, and a true test of high-altitude endurance for experienced trekkers.",
"image": "/images/3_passes.jpg",
"images": [],
"tags": ["Everest", "High Passes", "Cho La", "Renjo La", "Kongma La", "Adventure", "Nepal", "Himalayas", "Technical Trekking"],
"highlights": [
"Cross three high Himalayan passes: Renjo La (5,360m), Cho La (5,420m), Kongma La (5,535m)",
"Visit the stunning turquoise Gokyo Lakes and climb Gokyo Ri (5,357m)",
"Stand at Everest Base Camp (5,364m) and climb Kala Patthar (5,545m)",
"Experience complete solitude in remote valleys away from main trails",
"360-degree panoramic views of Everest, Lhotse, Makalu, Cho Oyu and countless other peaks",
"Technical glacier crossing on Cho La (seasonal crampons/ice axe required)"
],
"includes": ["Professional Guide (experienced in technical terrain)", "Assistant Guide for group safety", "All Meals during trek", "Teahouse Accommodation", "All Required Permits", "Porters (1 porter per 2 trekkers)", "Lukla Flight (round trip)", "Kathmandu Airport Transfers", "3 Nights Hotel in Kathmandu (B&B)", "Sleeping Bag & Down Jacket if needed", "First Aid Kit & Oxygen"],
"excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary", "Personal climbing equipment (crampons, ice axe)"],
"included": ["Professional Guide (experienced in technical terrain)", "Assistant Guide for group safety", "All Meals during trek", "Teahouse Accommodation", "All Required Permits", "Porters (1 porter per 2 trekkers)", "Lukla Flight (round trip)", "Kathmandu Airport Transfers", "3 Nights Hotel in Kathmandu (B&B)", "Sleeping Bag & Down Jacket if needed", "First Aid Kit & Oxygen"],
"excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary", "Personal climbing equipment (crampons, ice axe)"],
"itinerary": [
{ "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive at Tribhuvan International Airport. Transfer to hotel. Evening welcome dinner and detailed trek briefing focusing on high-altitude safety and technical sections." },
{ "day": 2, "title": "Kathmandu: Preparation & Sightseeing", "description": "Morning guided tour of UNESCO sites. Afternoon for final gear check, permit processing, and equipment rental (crampons/ice axe if needed). Overnight in Kathmandu." },
{ "day": 3, "title": "Fly to Lukla & Trek to Phakding", "description": "Early morning scenic flight to Lukla (2,860m). Meet crew and trek to Phakding (2,610m) along the Dudh Koshi River. Overnight in teahouse." },
{ "day": 4, "title": "Trek to Namche Bazaar", "description": "Trek to Namche Bazaar (3,440m), the Sherpa capital. Cross high suspension bridges with first Everest views. Overnight in Namche." },
{ "day": 5, "title": "Acclimatization Day in Namche", "description": "Crucial acclimatization day. Hike to Everest View Hotel (3,880m) and Khumjung village. Visit Sherpa Museum and local markets." },
{ "day": 6, "title": "Trek to Thame", "description": "Leave main EBC trail for the remote Thame Valley (3,800m). Visit Thame Monastery, one of the oldest in Khumbu. Overnight in Thame." },
{ "day": 7, "title": "Trek to Lumde", "description": "Continue up the Bhote Koshi Valley to Lumde (4,350m). Fewer trekkers, spectacular views of Kongde Ri. Overnight in basic teahouse." },
{ "day": 8, "title": "Cross Renjo La Pass to Gokyo", "description": "Challenging day crossing Renjo La Pass (5,360m). First of three major passes. Descend to the stunning Gokyo Lakes (4,750m). Overnight in Gokyo." },
{ "day": 9, "title": "Acclimatization: Gokyo Ri & Fifth Lake", "description": "Morning climb to Gokyo Ri (5,357m) for sunrise over Everest, Cho Oyu, and Makalu. Afternoon hike to Fifth and Sixth Gokyo Lakes. Overnight in Gokyo." },
{ "day": 10, "title": "Trek to Thangnak", "description": "Trek along Ngozumpa Glacier, the longest glacier in the Himalayas, to Thangnak (4,700m). Prepare for Cho La crossing." },
{ "day": 11, "title": "Cross Cho La Pass to Dzongla", "description": "Technical day crossing Cho La Pass (5,420m). Requires early start. May involve snow/ice crossing (crampons often needed). Descend to Dzongla (4,830m). Overnight." },
{ "day": 12, "title": "Trek to Lobuche", "description": "Short trek to Lobuche (4,910m), rejoining main EBC trail. Rest and acclimatize for upcoming high points." },
{ "day": 13, "title": "Trek to Gorak Shep & Everest Base Camp", "description": "Trek to Gorak Shep (5,140m). After lunch, continue to Everest Base Camp (5,364m). Return to Gorak Shep for overnight." },
{ "day": 14, "title": "Kala Patthar & Cross Kongma La to Chhukung", "description": "Pre-dawn climb to Kala Patthar (5,545m) for iconic Everest sunrise. Return for breakfast, then cross Kongma La (5,535m), the highest pass, to Chhukung (4,730m)." },
{ "day": 15, "title": "Acclimatization/Rest Day in Chhukung", "description": "Rest day or optional hike to Chhukung Ri (5,550m) or Island Peak Base Camp for exceptional views. Recovery after three strenuous pass days." },
{ "day": 16, "title": "Trek to Tengboche", "description": "Descend through Dingboche and Pangboche to Tengboche (3,860m). Visit the famous Tengboche Monastery. Overnight." },
{ "day": 17, "title": "Trek to Namche Bazaar", "description": "Continue descent to Namche Bazaar. Celebrate completion of circuit. Last night in Khumbu mountains." },
{ "day": 18, "title": "Trek to Lukla", "description": "Final trekking day to Lukla. Evening celebration with crew. Overnight in Lukla." },
{ "day": 19, "title": "Fly to Kathmandu", "description": "Morning flight back to Kathmandu. Rest day. Farewell dinner. Overnight in Kathmandu." },
{ "day": 20, "title": "Departure from Kathmandu", "description": "Transfer to Tribhuvan International Airport for your onward flight, or extend your stay in Nepal." }
],
"maxGroupSize": 8,
"cancellationPolicy": "Full refund if canceled 60 days before start date, 50% refund 30-60 days before, no refund within 30 days",
"isPopular": true,
"isSoldOut": false,
"difficulty": "very challenging/strenuous (technical high-altitude trekking)",
"maxAltitude": "5,545m (Kala Patthar)",
"requirements": ["Excellent physical fitness", "Previous high-altitude trekking experience (4,000m+) essential", "Experience with snow/ice crossing preferred", "Strong mental fortitude", "Multi-day backpacking experience"],
"permits": ["Sagarmatha National Park Entry Permit", "Khumbu Pasang Lhamu Rural Municipality Permit"],
"equipment": ["Sturdy Trekking Boots (must accept crampons)", "Crampons (essential Oct-Nov, Mar-May)", "Ice Axe (recommended for Cho La)", "4-Season Sleeping Bag (-20°C)", "Down Jacket", "Waterproof Layers", "Trekking Poles", "Headlamp with extra batteries", "High SPF Sun Protection", "Personal First Aid Kit"],
"entryRequirements": ["Valid Passport (6+ months validity)", "Nepal Visa (obtainable on arrival)", "Mandatory Travel Insurance covering emergency helicopter evacuation up to 6,000m and trip cancellation"],
},
{
  "id": "5",
  "title": "Ghorepani Poon Hill Trek",
  "location": "Nepal (Annapurna Region)",
  "duration": "6 days",
  "rating": 4.7,
  "price": 320,
  "originalPrice": 380,
  "excerpt": "Short, rewarding trek to the famous Poon Hill sunrise viewpoint.",
  "description": "Ghorepani Poon Hill is a short, highly popular trek best for first-time trekkers and those with limited time. It features terraced farmland, rhododendron forests and the beautiful sunrise viewpoint at Poon Hill overlooking the Annapurna and Dhaulagiri ranges.",
  "image": "/images/poon_hill.jpg",
  "images": [],
  "tags": ["Poon Hill", "Short Trek", "Annapurna", "Nepal", "Beginner Trek"],
  "highlights": [
    "Poon Hill sunrise for panoramic mountain views of Annapurna and Dhaulagiri",
    "Perfect for beginners and first-time trekkers",
    "Beautiful rhododendron forests (spectacular in spring)",
    "Cultural village visits (Ghandruk, Ghorepani)"
  ],
  "includes": ["Professional Guide", "All Meals during trek", "Teahouse Accommodation", "All Required Permits", "Kathmandu Airport Transfers", "2 Nights Hotel in Kathmandu (B&B)"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary"],
  "included": ["Professional Guide", "All Meals during trek", "Teahouse Accommodation", "All Required Permits", "Kathmandu Airport Transfers", "2 Nights Hotel in Kathmandu (B&B)"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive at Tribhuvan International Airport. Transfer to hotel. Evening trek briefing and gear check. Overnight in Kathmandu." },
    { "day": 2, "title": "Drive to Pokhara & Trek to Ulleri", "description": "Early morning scenic drive to Pokhara (6-7 hrs). After lunch, continue drive to Nayapul (1.5 hrs) and begin trekking. Trek through terraced fields to Ulleri (2,010m). Overnight in teahouse." },
    { "day": 3, "title": "Trek to Ghorepani", "description": "Trek through beautiful rhododendron forests to Ghorepani (2,874m). Enjoy views of Annapurna South and Hiunchuli. Overnight in Ghorepani." },
    { "day": 4, "title": "Poon Hill Sunrise & Trek to Ghandruk", "description": "Early morning hike to Poon Hill (3,210m) for spectacular sunrise over Annapurna and Dhaulagiri ranges. Return for breakfast, then trek to the traditional Gurung village of Ghandruk (1,940m). Overnight in Ghandruk." },
    { "day": 5, "title": "Trek to Nayapul & Drive to Pokhara", "description": "Morning trek down to Nayapul. Drive to Pokhara for overnight stay. Evening free to explore Pokhara's lakeside area." },
    { "day": 6, "title": "Drive to Kathmandu & Departure", "description": "Morning drive from Pokhara back to Kathmandu. Transfer to Tribhuvan International Airport for your onward flight, or to your hotel if extending your stay." }
  ],
  "maxGroupSize": 16,
  "cancellationPolicy": "Full refund if canceled 15 days before start date",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "easy to moderate",
  "maxAltitude": "3,210m (Poon Hill viewpoint)",
  "requirements": ["Basic fitness level", "Ability to walk 4-6 hours daily", "No prior trekking experience needed"],
  "permits": ["Annapurna Conservation Area Permit (ACAP)", "TIMS Card (Trekkers' Information Management System)"],
  "equipment": ["Comfortable hiking shoes", "Daypack", "Light layers (thermal, fleece, waterproof jacket)", "Water bottle", "Sunscreen and hat"],
  "entryRequirements": ["Valid Passport", "Nepal Visa (obtainable on arrival)"]
},
{
  "id": "7",
  "title": "Khopra Ridge & Khayar Lake Trek",
  "location": "Nepal (Annapurna Region)",
  "duration": "11 days",
  "rating": 4.6,
  "price": 520,
  "originalPrice": 620,
  "excerpt": "Less-crowded Annapurna ridge trek with spectacular Khayar Lake and Poon Hill sunrise views.",
  "description": "This scenic trek offers a perfect blend of cultural villages, panoramic ridge walks, and alpine lakes. Starting from Pokhara, you'll trek through beautiful forests to traditional villages, ascend to Khopra Ridge for breathtaking mountain views, visit the pristine Khayar Lake, enjoy the famous Poon Hill sunrise, and experience authentic Gurung culture in Ghandruk.",
  "image": "/images/khopra-1.jpg",
  "images": [],
  "tags": ["Khopra", "Annapurna", "Khayar Lake", "Poon Hill", "Nepal"],
  "highlights": [
    "Spectacular sunrise from Poon Hill (3,210m)",
    "Panoramic Annapurna and Dhaulagiri views from Khopra Ridge (3,660m)",
    "Visit the pristine alpine Khayar Lake (4,600m)",
    "Authentic Gurung village experience in Ghandruk",
    "Beautiful rhododendron forests and traditional trails"
  ],
  "includes": ["Professional Guide", "All Meals during trek", "Teahouse Accommodation", "All Required Permits", "Private Transport: Kathmandu-Pokhara-Kathmandu", "Private Transport: Pokhara-Ghandruk", "Jeep from Hille to Pokhara", "Kathmandu Airport Transfers", "2 Nights Hotel in Kathmandu (B&B)", "2 Nights Hotel in Pokhara (B&B)"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide", "Lunch & Dinner in Kathmandu/Pokhara", "Extra accommodation beyond itinerary"],
  "included": ["Professional Guide", "All Meals during trek", "Teahouse Accommodation", "All Required Permits", "Private Transport: Kathmandu-Pokhara-Kathmandu", "Private Transport: Pokhara-Ghandruk", "Jeep from Hille to Pokhara", "Kathmandu Airport Transfers", "2 Nights Hotel in Kathmandu (B&B)", "2 Nights Hotel in Pokhara (B&B)"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide", "Lunch & Dinner in Kathmandu/Pokhara", "Extra accommodation beyond itinerary"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive at Tribhuvan International Airport. Transfer to hotel. Evening trek briefing and gear check. Overnight in Kathmandu." },
    { "day": 2, "title": "Drive to Pokhara", "description": "Morning scenic drive from Kathmandu to Pokhara (6-7 hrs). Evening free to explore lakeside area. Overnight in Pokhara." },
    { "day": 3, "title": "Drive to Ghandruk & Trek to Tadapani", "description": "Morning drive to Ghandruk (1.5 hrs). After exploring the traditional Gurung village, trek through beautiful forests to Tadapani (2,630m). Overnight in teahouse." },
    { "day": 4, "title": "Trek to Dobato", "description": "Trek through rhododendron forests with mountain views to Dobato (3,350m). Prepare for Khopra Ridge ascent. Overnight in teahouse." },
    { "day": 5, "title": "Trek to Khopra Ridge", "description": "Ascend to Khopra Ridge (3,660m) for breathtaking panoramic views of Annapurna and Dhaulagiri ranges. Sunset photography. Overnight at Khopra Danda community lodge." },
    { "day": 6, "title": "Day Hike to Khayar Lake & Return to Khopra", "description": "Optional challenging day hike to Khayar Lake (4,600m) - a pristine alpine lake with stunning mountain reflections. Return to Khopra Ridge for overnight." },
    { "day": 7, "title": "Trek to Ghorepani", "description": "Trek down through beautiful forests to Ghorepani (2,874m). Overnight in Ghorepani." },
    { "day": 8, "title": "Poon Hill Sunrise & Jeep to Pokhara", "description": "Early morning hike to Poon Hill (3,210m) for spectacular sunrise over Annapurna and Dhaulagiri ranges. Return for breakfast, then trek down to Hille. Take jeep from Hille to Pokhara. Overnight in Pokhara." },
    { "day": 9, "title": "Drive to Kathmandu", "description": "Morning drive from Pokhara back to Kathmandu. Free afternoon for sightseeing or shopping. Overnight in Kathmandu." },
    { "day": 10, "title": "Departure from Kathmandu", "description": "Transfer to Tribhuvan International Airport for your onward flight, or extend your stay in Nepal." }
  ],
  "maxGroupSize": 12,
  "cancellationPolicy": "Full refund if canceled 20 days before start date",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "moderate",
  "maxAltitude": "4,600m (Khayar Lake)",
  "requirements": ["Good fitness for uphill sections", "Comfort with steep trails", "Ability to walk 5-7 hours daily"],
  "permits": ["ACAP (Annapurna Conservation Area Permit)", "TIMS Card"],
  "equipment": ["Sturdy hiking boots", "Warm jacket", "Rain protection", "Daypack", "Water bottle"],
  "entryRequirements": ["Valid Passport", "Nepal Visa (obtainable on arrival)"]
},
{
  "id": "8",
  "title": "Gokyo Lakes Trek",
  "location": "Nepal (Khumbu Region)",
  "duration": "13 days",
  "rating": 4.8,
  "price": 1300,
  "originalPrice": 1500,
  "excerpt": "A stunning trek to the turquoise Gokyo Lakes with incredible Himalayan views from Gokyo Ri.",
  "description": "The Gokyo Lakes Trek offers an alternative to the classic Everest Base Camp route, taking you to the breathtaking turquoise Gokyo Lakes and the spectacular Gokyo Ri viewpoint. This trek features less crowded trails, stunning high-altitude lakes, and panoramic views of Everest, Lhotse, Makalu, and Cho Oyu from Gokyo Ri, one of the best viewpoints in the Khumbu region.",
  "image": "/images/gokyo.jpg",
  "images": [],
  "tags": ["Gokyo", "Everest", "Lakes", "Trekking", "Nepal", "Himalayas"],
  "highlights": [
    "Visit the stunning turquoise Gokyo Lakes (4,700-5,000m)",
    "Summit Gokyo Ri (5,483m) for 360-degree Himalayan panoramas",
    "Explore the traditional Sherpa village of Khumjung",
    "Less crowded trails compared to Everest Base Camp route",
    "Breathtaking views of Everest, Lhotse, Makalu, and Cho Oyu"
  ],
  "includes": ["Professional Guide", "All Meals during trek", "Teahouse Accommodation", "All Required Permits", "Porters (1 porter per 2 trekkers)", "Lukla Flight (round trip)", "Kathmandu Airport Transfers", "2 Nights Hotel in Kathmandu (B&B)", "Sleeping Bag & Down Jacket if needed"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary"],
  "included": ["Professional Guide", "All Meals during trek", "Teahouse Accommodation", "All Required Permits", "Porters (1 porter per 2 trekkers)", "Lukla Flight (round trip)", "Kathmandu Airport Transfers", "2 Nights Hotel in Kathmandu (B&B)", "Sleeping Bag & Down Jacket if needed"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive at Tribhuvan International Airport. Transfer to hotel. Evening trek briefing and gear check. Overnight in Kathmandu." },
    { "day": 2, "title": "Fly to Lukla & Trek to Phakding", "description": "Early morning scenic flight to Lukla (2,860m). Trek to Phakding (2,610m) along the Dudh Koshi River. Overnight in teahouse." },
    { "day": 3, "title": "Trek to Namche Bazaar", "description": "Trek to Namche Bazaar (3,440m), the Sherpa capital. Cross high suspension bridges with first Everest views. Overnight in Namche." },
    { "day": 4, "title": "Acclimatization Day in Namche", "description": "Crucial acclimatization day. Hike to Everest View Hotel (3,880m) and explore local markets. Visit Sherpa Museum." },
    { "day": 5, "title": "Trek to Phortse Tenga", "description": "Leave the main EBC trail and trek through beautiful forests to Phortse Tenga (3,680m). Overnight in teahouse." },
    { "day": 6, "title": "Trek to Machhermo", "description": "Continue ascent along the valley with improving mountain views to Machhermo (4,470m). Overnight in teahouse." },
    { "day": 7, "title": "Trek to Gokyo", "description": "Ascend to the first of the Gokyo Lakes, then continue to Gokyo village (4,790m) on the shores of the third lake. Overnight in Gokyo." },
    { "day": 8, "title": "Gokyo Ri Ascent & Exploration", "description": "Early morning hike to Gokyo Ri (5,483m) for sunrise over Everest, Lhotse, Makalu, and Cho Oyu. Return to Gokyo and explore the lakes. Overnight in Gokyo." },
    { "day": 9, "title": "Trek to Phortse Tenga", "description": "Descend back through Machhermo to Phortse Tenga (3,680m). Overnight in teahouse." },
    { "day": 10, "title": "Trek to Namche Bazaar via Khumjung", "description": "Trek to Namche Bazaar, visiting the traditional Sherpa village of Khumjung (3,780m) en route. Overnight in Namche." },
    { "day": 11, "title": "Trek to Lukla", "description": "Final day of trekking, descending to Lukla. Evening celebration with crew. Overnight in Lukla." },
    { "day": 12, "title": "Fly to Kathmandu", "description": "Morning flight back to Kathmandu. Free day for rest or sightseeing. Overnight in Kathmandu." },
    { "day": 13, "title": "Departure from Kathmandu", "description": "Transfer to Tribhuvan International Airport for your onward flight, or extend your stay in Nepal." }
  ],
  "maxGroupSize": 12,
  "cancellationPolicy": "Full refund if canceled 60 days before start date, 50% refund 30-60 days before",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "challenging",
  "maxAltitude": "5,483m (Gokyo Ri)",
  "requirements": ["Good physical fitness", "Previous trekking experience recommended", "Ability to walk 5-7 hours daily"],
  "permits": ["Sagarmatha National Park Entry Permit", "Khumbu Pasang Lhamu Rural Municipality Permit"],
  "equipment": ["Sturdy Trekking Boots", "Down Jacket (-15°C rating)", "4-Season Sleeping Bag", "Trekking Poles", "Headlamp", "High SPF Sun Protection"],
  "entryRequirements": ["Valid Passport (6+ months validity)", "Nepal Visa (obtainable on arrival)", "Mandatory Travel Insurance covering emergency helicopter evacuation up to 6,000m"]
},
{
  "id": "9",
  "title": "Langtang Valley Trek",
  "location": "Nepal (Langtang Region)",
  "duration": "9 days",
  "rating": 4.6,
  "price": 540,
  "originalPrice": 640,
  "excerpt": "Accessible Himalayan valley trek with strong Tamang cultural influence.",
  "description": "The Langtang Valley trek is a convenient, scenic trek north of Kathmandu into a culturally rich Tamang region with glacier views and strong community-based tourism. It's ideal for moderate-time trekkers seeking alpine landscapes close to the capital.",
  "image": "/images/langtang-1.jpg",
  "images": [],
  "tags": ["Langtang", "Tamang", "Valley Trek", "Nepal", "Cultural Trek"],
  "highlights": [
    "Close proximity to Kathmandu (short drive to trailhead)",
    "Rich Tamang cultural interactions and monasteries",
    "Spectacular glacier-capped peaks and alpine meadows",
    "Visit the sacred Kyangjin Gompa monastery",
    "Community-based homestays in traditional villages"
  ],
  "includes": ["Professional Guide", "All Meals during trek", "Teahouse Accommodation", "All Required Permits", "Porters (1 porter per 2 trekkers)", "Private Transport: Kathmandu-Syabrubesi-Kathmandu", "Kathmandu Airport Transfers", "2 Nights Hotel in Kathmandu (B&B)", "Sleeping Bag & Down Jacket if needed"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary"],
  "included": ["Professional Guide", "All Meals during trek", "Teahouse Accommodation", "All Required Permits", "Porters (1 porter per 2 trekkers)", "Private Transport: Kathmandu-Syabrubesi-Kathmandu", "Kathmandu Airport Transfers", "2 Nights Hotel in Kathmandu (B&B)", "Sleeping Bag & Down Jacket if needed"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive at Tribhuvan International Airport. Transfer to hotel. Evening trek briefing and gear check. Overnight in Kathmandu." },
    { "day": 2, "title": "Drive to Syabrubesi", "description": "Morning scenic drive through the hills north of Kathmandu to Syabrubesi (1,550m), the trailhead village. Overnight in Syabrubesi." },
    { "day": 3, "title": "Trek to Lama Hotel", "description": "Begin trekking through terraced fields and beautiful rhododendron forest to Lama Hotel (2,470m). Overnight in teahouse." },
    { "day": 4, "title": "Trek to Langtang Village", "description": "Continue ascending the valley to Langtang Village (3,430m). Visit local gompas and experience Tamang culture. Overnight in teahouse." },
    { "day": 5, "title": "Trek to Kyangjin Gompa", "description": "Trek to Kyangjin Gompa (3,850m) with spectacular views of Langtang Lirung and surrounding glaciers. Overnight in teahouse." },
    { "day": 6, "title": "Exploration Day: Kyangjin Ri & Glacier", "description": "Acclimatization day with optional hikes to Kyangjin Ri (4,773m) for panoramic views or to the Langtang Glacier viewpoint. Overnight in Kyangjin Gompa." },
    { "day": 7, "title": "Trek to Lama Hotel", "description": "Begin descent back down the valley to Lama Hotel. Overnight in teahouse." },
    { "day": 8, "title": "Trek to Syabrubesi & Drive to Kathmandu", "description": "Final trekking day to Syabrubesi. Drive back to Kathmandu. Evening free. Overnight in Kathmandu." },
    { "day": 9, "title": "Departure from Kathmandu", "description": "Transfer to Tribhuvan International Airport for your onward flight, or extend your stay in Nepal." }
  ],
  "maxGroupSize": 12,
  "cancellationPolicy": "Full refund if canceled 20 days before start date",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "moderate",
  "maxAltitude": "4,773m (Kyangjin Ri optional hike)",
  "requirements": ["Good fitness level", "Ability to walk 5-7 hours daily", "Comfort with rocky trails"],
  "permits": ["Langtang National Park Permit", "TIMS Card (Trekkers' Information Management System)"],
  "equipment": ["Sturdy Trekking Boots", "Warm Layers", "Rain Jacket", "Daypack", "Water Bottle"],
  "entryRequirements": ["Valid Passport", "Nepal Visa (obtainable on arrival)"]
},
  {
  "id": "10",
  "title": "Muldai View Point & Poon Hill Trek",
  "location": "Nepal (Annapurna Region)",
  "duration": "8 days",
  "rating": 4.5,
  "price": 220,
  "originalPrice": 260,
  "excerpt": "Scenic viewpoint trek combining Muldai View Point with the famous Poon Hill sunrise.",
  "description": "This trek combines the panoramic Muldai View Point with the classic Poon Hill experience. Starting from Kathmandu, you'll travel through Pokhara to the Annapurna foothills, trekking through beautiful forests and traditional villages to reach both viewpoints, enjoying spectacular Himalayan vistas and cultural interactions along the way.",
  "image": "/images/muldai.jpg",
  "images": [],
  "tags": ["Muldai", "Poon Hill", "Viewpoint", "Short Trek", "Family", "Nepal"],
  "highlights": [
    "Spectacular sunrise from Poon Hill (3,210m)",
    "Panoramic views from Muldai View Point (3,630m)",
    "Traditional Gurung villages of Ghandruk and Tadapani",
    "Beautiful rhododendron forests",
    "Perfect for families and beginner trekkers"
  ],
  "includes": ["Professional Guide", "All Meals during trek", "Teahouse Accommodation", "All Required Permits", "Private Transport: Kathmandu-Pokhara-Kathmandu", "Private Transport: Pokhara-Ghandruk & Hille-Pokhara", "Jeep from Hille to Pokhara", "Kathmandu Airport Transfers", "2 Nights Hotel in Kathmandu (B&B)", "2 Nights Hotel in Pokhara (B&B)"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide", "Lunch & Dinner in Kathmandu/Pokhara", "Extra accommodation beyond itinerary"],
  "included": ["Professional Guide", "All Meals during trek", "Teahouse Accommodation", "All Required Permits", "Private Transport: Kathmandu-Pokhara-Kathmandu", "Private Transport: Pokhara-Ghandruk & Hille-Pokhara", "Jeep from Hille to Pokhara", "Kathmandu Airport Transfers", "2 Nights Hotel in Kathmandu (B&B)", "2 Nights Hotel in Pokhara (B&B)"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide", "Lunch & Dinner in Kathmandu/Pokhara", "Extra accommodation beyond itinerary"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive at Tribhuvan International Airport. Transfer to hotel. Evening trek briefing and gear check. Overnight in Kathmandu." },
    { "day": 2, "title": "Drive to Pokhara", "description": "Morning scenic drive from Kathmandu to Pokhara (6-7 hrs). Evening free to explore lakeside area. Overnight in Pokhara." },
    { "day": 3, "title": "Drive to Ghandruk & Trek to Tadapani", "description": "Morning drive to Ghandruk (1.5 hrs). After exploring the traditional Gurung village, trek through beautiful forests to Tadapani (2,630m). Overnight in teahouse." },
    { "day": 4, "title": "Trek to Dobato", "description": "Trek through rhododendron forests with mountain views to Dobato (3,350m). Prepare for Muldai View Point. Overnight in teahouse." },
    { "day": 5, "title": "Muldai View Point & Trek to Ghorepani", "description": "Morning hike to Muldai View Point (3,630m) for panoramic mountain views. Return to Dobato, then trek to Ghorepani (2,874m). Overnight in Ghorepani." },
    { "day": 6, "title": "Poon Hill Sunrise & Jeep to Pokhara", "description": "Early morning hike to Poon Hill (3,210m) for spectacular sunrise over Annapurna and Dhaulagiri ranges. Return for breakfast, then trek down to Hille. Take jeep from Hille to Pokhara. Overnight in Pokhara." },
    { "day": 7, "title": "Drive to Kathmandu", "description": "Morning drive from Pokhara back to Kathmandu. Free afternoon for sightseeing or shopping. Overnight in Kathmandu." },
    { "day": 8, "title": "Departure from Kathmandu", "description": "Transfer to Tribhuvan International Airport for your onward flight, or extend your stay in Nepal." }
  ],
  "maxGroupSize": 18,
  "cancellationPolicy": "Full refund if canceled 10 days before start date",
  "isPopular": false,
  "isSoldOut": false,
  "difficulty": "easy to moderate",
  "maxAltitude": "3,630m (Muldai View Point)",
  "requirements": ["Basic fitness level", "Ability to walk 4-6 hours daily", "Suitable for families with children"],
  "permits": ["ACAP (Annapurna Conservation Area Permit)", "TIMS Card"],
  "equipment": ["Comfortable hiking shoes", "Daypack", "Light layers (thermal, fleece, waterproof jacket)", "Water bottle", "Sunscreen and hat"],
  "entryRequirements": ["Valid Passport", "Nepal Visa (obtainable on arrival)"]
},
{
  "id": "11",
  "title": "Mardi Himal Trek",
  "location": "Nepal (Annapurna Region)",
  "duration": "9 days",
  "rating": 4.7,
  "price": 420,
  "originalPrice": 520,
  "excerpt": "Short, dramatic trek to the alpine Mardi Himal ridge with unobstructed mountain views.",
  "description": "Mardi Himal is a picturesque, less-crowded trek near Pokhara that climbs to a dramatic ridge offering close views of Machhapuchhre (Fishtail), Annapurna South and Hiunchuli. It's a great option for those seeking stunning panoramas on a shorter schedule away from crowded trails.",
  "image": "/images/mardi-1.jpg",
  "images": [],
  "tags": ["Mardi Himal", "Pokhara", "Short Trek", "Annapurna", "Nepal"],
  "highlights": [
    "Excellent ridge viewpoints with close-up Fishtail (Machhapuchhre) views",
    "Quieter trail compared to Poon Hill",
    "Alpine meadows and beautiful rhododendron forests",
    "Short duration with high visual reward",
    "Spectacular sunrise over Annapurna range"
  ],
  "includes": ["Professional Guide", "All Meals during trek", "Teahouse Accommodation", "All Required Permits", "Private Transport: Kathmandu-Pokhara-Kathmandu", "Taxi: Pokhara-Phedi", "Jeep from Sidhing to Pokhara", "Kathmandu Airport Transfers", "2 Nights Hotel in Kathmandu (B&B)", "2 Nights Hotel in Pokhara (B&B)"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide", "Lunch & Dinner in Kathmandu/Pokhara", "Extra accommodation beyond itinerary"],
  "included": ["Professional Guide", "All Meals during trek", "Teahouse Accommodation", "All Required Permits", "Private Transport: Kathmandu-Pokhara-Kathmandu", "Taxi: Pokhara-Phedi", "Jeep from Sidhing to Pokhara", "Kathmandu Airport Transfers", "2 Nights Hotel in Kathmandu (B&B)", "2 Nights Hotel in Pokhara (B&B)"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide", "Lunch & Dinner in Kathmandu/Pokhara", "Extra accommodation beyond itinerary"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive at Tribhuvan International Airport. Transfer to hotel. Evening trek briefing and gear check. Overnight in Kathmandu." },
    { "day": 2, "title": "Drive to Pokhara", "description": "Morning scenic drive from Kathmandu to Pokhara (6-7 hrs). Evening free to explore lakeside area. Overnight in Pokhara." },
    { "day": 3, "title": "Drive to Phedi & Trek to Pittam Deurali", "description": "Morning taxi ride to Phedi. Begin trekking through villages and forests to Pittam Deurali (2,100m). Overnight in teahouse." },
    { "day": 4, "title": "Trek to Low Camp", "description": "Trek through beautiful rhododendron forests to Low Camp (2,990m). First clear mountain views begin to appear. Overnight in teahouse." },
    { "day": 5, "title": "Trek to High Camp", "description": "Steep ascent through alpine terrain to High Camp (3,580m). Panoramic evening views of Annapurna range. Overnight in teahouse." },
    { "day": 6, "title": "Mardi Himal Base Camp & Return to High Camp", "description": "Early morning hike to Mardi Himal Base Camp (4,500m) for spectacular sunrise views of Machhapuchhre, Annapurna South, and Hiunchuli. Return to High Camp for overnight." },
    { "day": 7, "title": "Trek to Sidhing & Drive to Pokhara", "description": "Descend through forests and traditional villages to Sidhing (1,700m). Take jeep from Sidhing back to Pokhara. Overnight in Pokhara." },
    { "day": 8, "title": "Drive to Kathmandu", "description": "Morning drive from Pokhara back to Kathmandu. Free afternoon for sightseeing or shopping. Overnight in Kathmandu." },
    { "day": 9, "title": "Departure from Kathmandu", "description": "Transfer to Tribhuvan International Airport for your onward flight, or extend your stay in Nepal." }
  ],
  "maxGroupSize": 12,
  "cancellationPolicy": "Full refund if canceled 15 days before start date",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "moderate",
  "maxAltitude": "4,500m (Mardi Himal Base Camp)",
  "requirements": ["Good fitness for steep sections", "Ability to walk 5-6 hours daily", "No prior high-altitude experience needed"],
  "permits": ["ACAP (Annapurna Conservation Area Permit)", "TIMS Card"],
  "equipment": ["Sturdy trekking boots", "Warm jacket", "Rain protection", "Headlamp", "Daypack"],
  "entryRequirements": ["Valid Passport", "Nepal Visa (obtainable on arrival)"]
},
{
  "id": "12",
  "title": "Nar Phu Valley Trek",
  "location": "Nepal (Annapurna Region)",
  "duration": "15 days",
  "rating": 4.6,
  "price": 1300,
  "originalPrice": 1500,
  "excerpt": "Remote trans-Himalayan trek through Nar and Phu - cultural immersion and high passes.",
  "description": "The Nar Phu Valley route is a remote, culturally rich trek that follows ancient trade routes into a trans-Himalayan landscape. Expect stone-built villages, high passes and a strong Tibetan cultural atmosphere with dramatic mountain scenery in one of Nepal's most pristine and least-visited regions.",
  "image": "/images/narphu-1.jpg",
  "images": [],
  "tags": ["Nar Phu", "Remote Trek", "Tibetan culture", "Annapurna", "Nepal"],
  "highlights": [
    "Remote villages with preserved Tibetan culture",
    "High-altitude remote passes and plateaus",
    "Less-traveled trails away from main tourist routes",
    "Stunning views of Annapurna and Gangapurna",
    "Ancient Buddhist monasteries and traditional architecture"
  ],
  "includes": ["Professional Guide & Assistant Guide", "All Meals during trek", "Teahouse/Lodge Accommodation", "All Required Permits", "Porters (1 porter per 2 trekkers)", "Private Transport: Kathmandu-Besisahar-Dharapani-Kathmandu", "Kathmandu Airport Transfers", "3 Nights Hotel in Kathmandu (B&B)", "Sleeping Bag & Down Jacket if needed"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary"],
  "included": ["Professional Guide & Assistant Guide", "All Meals during trek", "Teahouse/Lodge Accommodation", "All Required Permits", "Porters (1 porter per 2 trekkers)", "Private Transport: Kathmandu-Besisahar-Dharapani-Kathmandu", "Kathmandu Airport Transfers", "3 Nights Hotel in Kathmandu (B&B)", "Sleeping Bag & Down Jacket if needed"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive at Tribhuvan International Airport. Transfer to hotel. Evening welcome dinner and comprehensive trek briefing. Overnight in Kathmandu." },
    { "day": 2, "title": "Drive to Besisahar", "description": "Morning scenic drive from Kathmandu to Besisahar (760m). Overnight in Besisahar." },
    { "day": 3, "title": "Drive to Koto & Trek to Meta", "description": "Continue drive to Koto (2,600m). Begin trekking, entering the Nar Phu Valley through the police checkpost to Meta (3,560m). Overnight in teahouse." },
    { "day": 4, "title": "Trek to Phu Village", "description": "Trek through dramatic canyon landscapes to the ancient walled village of Phu (4,080m). Explore the village and Tashi Lhakhang monastery. Overnight in teahouse." },
    { "day": 5, "title": "Acclimatization in Phu", "description": "Rest day for acclimatization. Optional hikes to explore the upper Phu Valley, visit Himlung Base Camp viewpoint, or explore local monasteries. Overnight in Phu." },
    { "day": 6, "title": "Trek to Nar Village", "description": "Trek across high plateaus to the traditional village of Nar (4,110m). Experience authentic Tibetan culture. Overnight in teahouse." },
    { "day": 7, "title": "Cross Kang La Pass", "description": "Challenging day crossing the high Kang La Pass (5,322m). Descend to Ngawal (3,660m) in the Manang Valley. Overnight in teahouse." },
    { "day": 8, "title": "Trek to Manang", "description": "Trek to the main village of Manang (3,540m). Rest and acclimatize. Overnight in teahouse." },
    { "day": 9, "title": "Rest Day in Manang", "description": "Acclimatization day in Manang. Optional hikes to Gangapurna Lake or surrounding viewpoints. Overnight in Manang." },
    { "day": 10, "title": "Trek to Chame", "description": "Descend through pine forests to Chame (2,710m). Overnight in teahouse." },
    { "day": 11, "title": "Trek to Dharapani", "description": "Continue descent to Dharapani (1,860m). Overnight in teahouse." },
    { "day": 12, "title": "Drive to Besisahar", "description": "Morning drive from Dharapani to Besisahar. Overnight in Besisahar." },
    { "day": 13, "title": "Drive to Kathmandu", "description": "Drive from Besisahar back to Kathmandu. Farewell dinner. Overnight in Kathmandu." },
    { "day": 14, "title": "Departure from Kathmandu", "description": "Transfer to Tribhuvan International Airport for your onward flight, or extend your stay in Nepal." }
  ],
  "maxGroupSize": 8,
  "cancellationPolicy": "Partial refund if canceled 30 days prior",
  "isPopular": false,
  "isSoldOut": false,
  "difficulty": "challenging (remote, high passes)",
  "maxAltitude": "5,322m (Kang La Pass)",
  "requirements": ["Excellent physical fitness", "Prior high-altitude trekking experience essential", "Mental preparedness for remote conditions"],
  "permits": ["Annapurna Conservation Area Permit (ACAP)", "Restricted Area Permit for Nar Phu Valley", "TIMS Card"],
  "equipment": ["Sturdy Trekking Boots (broken in)", "Down Jacket (-20°C rating)", "4-Season Sleeping Bag (-15°C)", "Waterproof Layers", "Crampons/Microspikes (for Kang La Pass)", "Trekking Poles", "Headlamp with extra batteries", "High SPF Sun Protection"],
  "entryRequirements": ["Valid Passport (6+ months validity)", "Nepal Visa (obtainable on arrival)", "Mandatory Travel Insurance covering emergency helicopter evacuation up to 6,000m"]
},
{
  "id": "13",
  "title": "Upper Mustang Trek",
  "location": "Nepal (Mustang Region)",
  "duration": "15 days",
  "rating": 4.8,
  "price": 1950,
  "originalPrice": 2200,
  "excerpt": "Trek into the restricted, arid, Tibetan-flavored kingdom of Upper Mustang.",
  "description": "Upper Mustang is a unique, restricted area trek into Nepal's ancient 'Lo' kingdom. The region features stark desert landscapes, ancient cave dwellings, fortified villages and rare Tibetan-style culture preserved for centuries. This trek offers a journey back in time through one of the world's last truly remote Himalayan kingdoms.",
  "image": "/images/upper_mustang.jpg",
  "images": [],
  "tags": ["Upper Mustang", "Restricted Area", "Tibetan culture", "Desert Trek", "Nepal"],
  "highlights": [
    "Ancient walled capital of Lo Manthang (3,800m)",
    "Tibetan-influenced culture, monasteries, and traditions",
    "Stark desert valleys and wind-carved landscapes",
    "Restricted area experience with very few trekkers",
    "Ancient cave dwellings and Buddhist meditation caves"
  ],
  "includes": ["Professional Guide & Assistant Guide", "All Meals during trek", "Teahouse/Lodge Accommodation", "Restricted Area Permit (RAP) for Upper Mustang", "Annapurna Conservation Area Permit (ACAP)", "Flight: Pokhara-Jomsom-Pokhara", "Private Transport: Kathmandu-Pokhara-Kathmandu", "Kathmandu Airport Transfers", "3 Nights Hotel in Kathmandu (B&B)", "2 Nights Hotel in Pokhara (B&B)", "Sleeping Bag & Down Jacket if needed"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu/Pokhara", "Extra accommodation beyond itinerary", "Extra costs for delays or flight cancellations"],
  "included": ["Professional Guide & Assistant Guide", "All Meals during trek", "Teahouse/Lodge Accommodation", "Restricted Area Permit (RAP) for Upper Mustang", "Annapurna Conservation Area Permit (ACAP)", "Flight: Pokhara-Jomsom-Pokhara", "Private Transport: Kathmandu-Pokhara-Kathmandu", "Kathmandu Airport Transfers", "3 Nights Hotel in Kathmandu (B&B)", "2 Nights Hotel in Pokhara (B&B)", "Sleeping Bag & Down Jacket if needed"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu/Pokhara", "Extra accommodation beyond itinerary", "Extra costs for delays or flight cancellations"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive at Tribhuvan International Airport. Transfer to hotel. Evening welcome dinner and trek briefing. Process restricted area permits. Overnight in Kathmandu." },
    { "day": 2, "title": "Drive to Pokhara", "description": "Morning scenic drive from Kathmandu to Pokhara (6-7 hrs). Evening free to explore lakeside. Final preparations. Overnight in Pokhara." },
    { "day": 3, "title": "Fly to Jomsom & Trek to Kagbeni", "description": "Early morning flight to Jomsom (2,720m). Begin trekking to Kagbeni (2,810m), the gateway to Upper Mustang. Overnight in teahouse." },
    { "day": 4, "title": "Trek to Chele", "description": "Cross into the Mustang district and trek through arid landscape to Chele (3,050m). Overnight in teahouse." },
    { "day": 5, "title": "Trek to Syangboche", "description": "Continue through dramatic desert valleys to Syangboche (3,800m). Visit ancient monasteries. Overnight in teahouse." },
    { "day": 6, "title": "Trek to Charang", "description": "Trek to Charang (3,560m), exploring the ancient village and its monastery. Overnight in teahouse." },
    { "day": 7, "title": "Trek to Lo Manthang", "description": "Enter the walled capital of Lo Manthang (3,840m). Explore the royal palace and monasteries. Overnight in teahouse." },
    { "day": 8, "title": "Explore Lo Manthang", "description": "Full day exploring Lo Manthang: visit ancient gompas, local markets, and the royal palace. Optional visit to Chhoser caves. Overnight in Lo Manthang." },
    { "day": 9, "title": "Trek to Ghar Gompa & Chhoser Caves", "description": "Explore the ancient Ghar Gompa monastery and meditation caves at Chhoser. Return to Lo Manthang. Overnight in teahouse." },
    { "day": 10, "title": "Trek to Yara", "description": "Begin return journey, trekking to Yara (3,600m) through unique desert landscapes. Overnight in teahouse." },
    { "day": 11, "title": "Trek to Tangbe", "description": "Continue descent through traditional villages to Tangbe (3,240m). Overnight in teahouse." },
    { "day": 12, "title": "Trek to Jomsom", "description": "Final trekking day to Jomsom. Celebration dinner. Overnight in teahouse." },
    { "day": 13, "title": "Fly to Pokhara & Drive to Kathmandu", "description": "Morning flight back to Pokhara. Drive from Pokhara to Kathmandu. Farewell dinner. Overnight in Kathmandu." },
    { "day": 14, "title": "Departure from Kathmandu", "description": "Transfer to Tribhuvan International Airport for your onward flight, or extend your stay in Nepal." }
  ],
  "maxGroupSize": 10,
  "cancellationPolicy": "Full refund if canceled 60 days before start date",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "moderate (long walking days in remote terrain)",
  "maxAltitude": "3,840m (Lo Manthang)",
  "requirements": ["Moderate fitness level", "Ability to walk 5-7 hours daily", "Passport photos and passport copy for permit processing"],
  "permits": ["Restricted Area Permit (Upper Mustang RAP) - required", "Annapurna Conservation Area Permit (ACAP)"],
  "equipment": ["Sturdy Trekking Boots", "Warm layers for cold desert nights", "Sun protection (hat, sunglasses, sunscreen)", "Windproof jacket", "Daypack", "Headlamp"],
  "entryRequirements": ["Valid Passport (6+ months validity)", "Nepal Visa (obtainable on arrival)", "Passport photos for permit processing", "Mandatory Travel Insurance covering emergency evacuation"]
},
{
  "id": "14",
  "title": "Tamang Heritage & Langtang Valley Trek",
  "location": "Nepal (Langtang Region)",
  "duration": "14 days",
  "rating": 4.6,
  "price": 680,
  "originalPrice": 780,
  "excerpt": "Cultural trail through Tamang villages combined with the scenic Langtang Valley and Tserko Ri summit.",
  "description": "This trek combines the cultural immersion of the Tamang Heritage Trail with the natural beauty of the Langtang Valley. Experience authentic Tamang culture, traditional homestays, and stunning Himalayan scenery including Langtang Lirung and Ganesh Himal peaks, culminating in a hike to Tserko Ri (4,984m) for panoramic mountain views.",
  "image": "/images/tamang_heritage-1.jpg",
  "images": [],
  "tags": ["Tamang", "Cultural", "Langtang", "Valley Trek", "Tserko Ri", "Nepal"],
  "highlights": [
    "Summit Tserko Ri (4,984m) for breathtaking Himalayan panoramas",
    "Rich Tamang cultural interactions and homestays",
    "Stunning Himalayan panoramas of Langtang and Ganesh Himal",
    "Authentic village experiences in Gatlang, Thuman, and Briddim",
    "Visit the sacred Kyangjin Gompa monastery",
    "Accessible from Kathmandu with short drive",
    "Less-crowded cultural and natural trail"
  ],
  "includes": ["Professional Guide", "All Meals during trek", "Teahouse/Homestay Accommodation", "All Required Permits", "Porters (1 porter per 2 trekkers)", "Private Transport: Kathmandu-Syabrubesi-Kathmandu", "Kathmandu Airport Transfers", "2 Nights Hotel in Kathmandu (B&B)", "Sleeping Bag & Down Jacket if needed"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary"],
  "included": ["Professional Guide", "All Meals during trek", "Teahouse/Homestay Accommodation", "All Required Permits", "Porters (1 porter per 2 trekkers)", "Private Transport: Kathmandu-Syabrubesi-Kathmandu", "Kathmandu Airport Transfers", "2 Nights Hotel in Kathmandu (B&B)", "Sleeping Bag & Down Jacket if needed"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive at Tribhuvan International Airport. Transfer to hotel. Evening trek briefing and gear check. Overnight in Kathmandu." },
    { "day": 2, "title": "Drive to Syabrubesi", "description": "Morning scenic drive through the hills north of Kathmandu to Syabrubesi (1,550m). Overnight in Syabrubesi." },
    { "day": 3, "title": "Trek to Gatlang", "description": "Begin the Tamang Heritage Trail, trekking to the traditional Tamang village of Gatlang (2,238m). Visit local monastery and experience Tamang culture. Overnight in homestay." },
    { "day": 4, "title": "Trek to Tatopani", "description": "Trek through forests with views of Ganesh Himal to Tatopani (2,607m). Enjoy natural hot springs. Overnight in teahouse." },
    { "day": 5, "title": "Trek to Nagthali & Thuman", "description": "Ascend to Nagthali (3,165m) for panoramic mountain views, then continue to the traditional village of Thuman (2,338m). Overnight in homestay." },
    { "day": 6, "title": "Trek to Briddim", "description": "Trek to Briddim (2,229m), a Tamang village famous for its community-based tourism and homestay program. Overnight in homestay." },
    { "day": 7, "title": "Trek to Sherpa Gaon", "description": "Continue to Sherpa Gaon (2,563m), experiencing the transition from Tamang to Sherpa culture. Overnight in teahouse." },
    { "day": 8, "title": "Trek to Woodland (Lama Hotel)", "description": "Trek through beautiful rhododendron forests to Woodland area, also known as Lama Hotel (2,470m). Overnight in teahouse." },
    { "day": 9, "title": "Trek to Mundu", "description": "Continue ascending the Langtang Valley to Mundu (3,430m). First close views of Langtang Lirung. Overnight in teahouse." },
    { "day": 10, "title": "Trek to Kyangjin Gompa & Hike to Kyangjin Ri", "description": "Trek to Kyangjin Gompa (3,850m). After lunch, hike to Kyangjin Ri (4,773m) for afternoon panoramic views of Langtang Lirung and surrounding glaciers. Return to Kyangjin Gompa. Overnight in teahouse." },
    { "day": 11, "title": "Hike to Tserko Ri", "description": "Early morning hike to Tserko Ri (4,984m) for sunrise views over the Langtang range. Return to Kyangjin Gompa for breakfast and rest. Afternoon free to explore the area. Overnight in teahouse." },
    { "day": 12, "title": "Trek to Lama Hotel", "description": "Descend from Kyangjin Gompa back to Lama Hotel. Overnight in teahouse." },
    { "day": 13, "title": "Trek to Syabrubesi & Drive to Kathmandu", "description": "Final trekking day to Syabrubesi. Drive back to Kathmandu. Farewell dinner. Overnight in Kathmandu." },
    { "day": 14, "title": "Departure from Kathmandu", "description": "Transfer to Tribhuvan International Airport for your onward flight, or extend your stay in Nepal." }
  ],
  "maxGroupSize": 16,
  "cancellationPolicy": "Full refund if canceled 15 days before start date",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "moderate to challenging",
  "maxAltitude": "4,984m (Tserko Ri)",
  "requirements": ["Good fitness level", "Ability to walk 6-8 hours daily", "Previous hiking experience recommended", "Interest in cultural exchange", "Comfort with basic accommodation"],
  "permits": ["Langtang National Park Permit", "TIMS Card", "Local Conservation Area Permit"],
  "equipment": ["Sturdy Trekking Boots", "Warm Layers (including thermal)", "Rain Jacket", "Down Jacket", "Daypack", "Water Bottle", "Headlamp", "Trekking Poles"],
  "entryRequirements": ["Valid Passport", "Nepal Visa (obtainable on arrival)"]
},
{
  "id": "15",
  "title": "Gosaikunda Lake Trek",
  "location": "Nepal (Langtang Region)",
  "duration": "10 days",
  "rating": 4.5,
  "price": 480,
  "originalPrice": 580,
  "excerpt": "Spiritual alpine lake trek to the sacred Gosaikunda Lake, revered by both pilgrims and trekkers.",
  "description": "The Gosaikunda Trek is a journey to the sacred high-altitude lakes of the Langtang region, revered in Hindu mythology as the abode of Lord Shiva. This trek combines spiritual pilgrimage with stunning alpine scenery, offering beautiful views of the Ganesh and Langtang Himalayan ranges, traditional Tamang villages, and the pristine turquoise waters of the sacred lakes.",
  "image": "/images/gosainkunda.jpg",
  "images": [],
  "tags": ["Gosaikunda", "Lake Trek", "Langtang", "Pilgrimage", "Sacred Lakes", "Nepal"],
  "highlights": [
    "Visit the sacred Gosaikunda Lake (4,380m) - abode of Lord Shiva",
    "Explore multiple alpine lakes including Saraswati Kunda and Bhairav Kunda",
    "Stunning views of Ganesh Himal, Langtang Lirung, and Manaslu ranges",
    "Traditional Tamang and Sherpa villages and culture",
    "Pilgrimage sites with strong cultural and mythological significance",
    "Beautiful rhododendron and pine forests"
  ],
  "includes": ["Professional Guide", "All Meals during trek", "Teahouse Accommodation", "All Required Permits", "Porters (1 porter per 2 trekkers)", "Private Transport: Kathmandu-Dhunche-Kathmandu", "Kathmandu Airport Transfers", "3 Nights Hotel in Kathmandu (B&B)", "Sleeping Bag & Down Jacket if needed"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary"],
  "included": ["Professional Guide", "All Meals during trek", "Teahouse Accommodation", "All Required Permits", "Porters (1 porter per 2 trekkers)", "Private Transport: Kathmandu-Dhunche-Kathmandu", "Kathmandu Airport Transfers", "3 Nights Hotel in Kathmandu (B&B)", "Sleeping Bag & Down Jacket if needed"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive at Tribhuvan International Airport. Transfer to hotel. Evening trek briefing and gear check. Overnight in Kathmandu." },
    { "day": 2, "title": "Drive to Dhunche", "description": "Morning scenic drive north from Kathmandu to Dhunche (1,960m) through beautiful hills and traditional villages. Overnight in teahouse." },
    { "day": 3, "title": "Trek to Chandanbari (Sing Gompa)", "description": "Begin trekking through beautiful pine and rhododendron forests to Chandanbari, also known as Sing Gompa (3,254m). Visit the local cheese factory and monastery. Overnight in teahouse." },
    { "day": 4, "title": "Trek to Laurebina Yak", "description": "Ascend through alpine meadows with improving mountain views to Laurebina Yak (3,921m). Prepare for Gosaikunda Lake visit. Overnight in teahouse." },
    { "day": 5, "title": "Trek to Gosaikunda Lake", "description": "Trek to the sacred Gosaikunda Lake (4,380m). Explore the main lake and nearby smaller lakes. Visit the Shiva temple and soak in the spiritual atmosphere. Overnight at Gosaikunda." },
    { "day": 6, "title": "Explore Gosaikunda & Trek to Ghopte", "description": "Morning exploration of the lake area and optional hike to surrounding viewpoints. Afternoon trek across Lauribina Pass (4,610m) to Ghopte (3,440m). Overnight in teahouse." },
    { "day": 7, "title": "Trek to Kutumsang", "description": "Descend through beautiful forests to Kutumsang (2,470m). Enjoy changing vegetation and mountain views. Overnight in teahouse." },
    { "day": 8, "title": "Trek to Chisapani", "description": "Final trekking day to Chisapani (2,165m) with panoramic Himalayan views. Overnight in teahouse." },
    { "day": 9, "title": "Drive to Kathmandu", "description": "Morning drive from Chisapani back to Kathmandu. Free afternoon for sightseeing or shopping. Overnight in Kathmandu." },
    { "day": 10, "title": "Departure from Kathmandu", "description": "Transfer to Tribhuvan International Airport for your onward flight, or extend your stay in Nepal." }
  ],
  "maxGroupSize": 12,
  "cancellationPolicy": "Full refund if canceled 20 days before start date",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "moderate to challenging",
  "maxAltitude": "4,610m (Lauribina Pass)",
  "requirements": ["Good fitness level", "Ability to walk 5-7 hours daily", "Acclimatization awareness for high altitude", "Previous hiking experience recommended"],
  "permits": ["Langtang National Park Permit", "TIMS Card"],
  "equipment": ["Sturdy Trekking Boots", "Warm Layers (thermal, fleece, down jacket)", "Waterproof Jacket and Pants", "Sleeping Bag (-10°C rating)", "Trekking Poles", "Headlamp", "Water Bottle", "Sun Protection"],
  "entryRequirements": ["Valid Passport", "Nepal Visa (obtainable on arrival)"]
},
{
  "id": "16",
  "title": "Langtang to Gosaikunda via Lauribina La Trek",
  "location": "Nepal (Langtang Region)",
  "duration": "13 days",
  "rating": 4.6,
  "price": 680,
  "originalPrice": 780,
  "excerpt": "Connect Langtang Valley and sacred Gosaikunda Lakes via the scenic Lauribina La Pass.",
  "description": "This trek combines two iconic Langtang region destinations by crossing the high Lauribina La Pass. Experience the glacier-filled Langtang Valley, then traverse the pass to reach the sacred Gosaikunda Lakes, offering continuous high-alpine scenery, diverse landscapes, and rich cultural encounters in one spectacular journey.",
  "image": "/images/gosainkunda-2.jpg",
  "images": [],
  "tags": ["Langtang", "Gosaikunda", "Lauribina La", "Pass Crossing", "Nepal"],
  "highlights": [
    "Cross the high Lauribina La Pass (4,610m)",
    "Combine glacier views of Langtang Valley with sacred Gosaikunda Lakes",
    "Diverse scenery in one continuous high-altitude route",
    "Less-crowded alternative connecting two major destinations",
    "Traditional Tamang and Sherpa village experiences"
  ],
  "includes": ["Professional Guide & Assistant Guide", "All Meals during trek", "Teahouse Accommodation", "All Required Permits", "Porters (1 porter per 2 trekkers)", "Private Transport: Kathmandu-Syabrubesi-Dhunche-Kathmandu", "Kathmandu Airport Transfers", "3 Nights Hotel in Kathmandu (B&B)", "Sleeping Bag & Down Jacket if needed"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary"],
  "included": ["Professional Guide & Assistant Guide", "All Meals during trek", "Teahouse Accommodation", "All Required Permits", "Porters (1 porter per 2 trekkers)", "Private Transport: Kathmandu-Syabrubesi-Dhunche-Kathmandu", "Kathmandu Airport Transfers", "3 Nights Hotel in Kathmandu (B&B)", "Sleeping Bag & Down Jacket if needed"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive at Tribhuvan International Airport. Transfer to hotel. Evening trek briefing and gear check. Overnight in Kathmandu." },
    { "day": 2, "title": "Drive to Syabrubesi", "description": "Morning scenic drive north from Kathmandu to Syabrubesi (1,550m) through beautiful hills and traditional villages. Overnight in teahouse." },
    { "day": 3, "title": "Trek to Lama Hotel", "description": "Begin trekking through beautiful rhododendron forests along the Langtang River to Lama Hotel (2,470m). Overnight in teahouse." },
    { "day": 4, "title": "Trek to Langtang Village", "description": "Continue ascending the valley to Langtang Village (3,430m). Visit local monasteries and experience Tamang culture. Overnight in teahouse." },
    { "day": 5, "title": "Trek to Kyangjin Gompa", "description": "Trek to Kyangjin Gompa (3,850m) with spectacular views of Langtang Lirung and surrounding glaciers. Overnight in teahouse." },
    { "day": 6, "title": "Exploration Day: Kyangjin Ri", "description": "Acclimatization day with hike to Kyangjin Ri (4,773m) for panoramic mountain views. Return to Kyangjin Gompa. Overnight in teahouse." },
    { "day": 7, "title": "Trek to Thulo Syabru", "description": "Descend from Kyangjin and trek to Thulo Syabru (2,230m), preparing for the pass crossing. Overnight in teahouse." },
    { "day": 8, "title": "Trek to Sing Gompa (Chandanbari)", "description": "Ascend through pine and rhododendron forests to Sing Gompa (3,254m). Visit the cheese factory and monastery. Overnight in teahouse." },
    { "day": 9, "title": "Cross Lauribina La Pass to Gosaikunda", "description": "Challenging day crossing Lauribina La Pass (4,610m). Descend to the sacred Gosaikunda Lake (4,380m). Explore the lakes and Shiva temple. Overnight at Gosaikunda." },
    { "day": 10, "title": "Trek to Ghopte", "description": "Continue trekking through alpine terrain to Ghopte (3,440m). Overnight in teahouse." },
    { "day": 11, "title": "Trek to Kutumsang", "description": "Descend through beautiful forests to Kutumsang (2,470m). Overnight in teahouse." },
    { "day": 12, "title": "Trek to Chisapani & Drive to Kathmandu", "description": "Final trekking day to Chisapani (2,165m). Drive back to Kathmandu. Overnight in Kathmandu." },
    { "day": 13, "title": "Departure from Kathmandu", "description": "Transfer to Tribhuvan International Airport for your onward flight, or extend your stay in Nepal." }
  ],
  "maxGroupSize": 10,
  "cancellationPolicy": "Full refund if canceled 25 days before start",
  "isPopular": false,
  "isSoldOut": false,
  "difficulty": "challenging (high pass crossing)",
  "maxAltitude": "4,773m (Kyangjin Ri)",
  "requirements": ["Good fitness level", "Experience with pass crossings recommended", "Ability to walk 6-8 hours daily", "Previous high-altitude experience"],
  "permits": ["Langtang National Park Permit", "TIMS Card"],
  "equipment": ["Sturdy Trekking Boots", "Warm Layers (thermal, fleece, down jacket)", "Waterproof Jacket and Pants", "Sleeping Bag (-10°C rating)", "Trekking Poles", "Headlamp", "Water Bottle", "Sun Protection"],
  "entryRequirements": ["Valid Passport", "Nepal Visa (obtainable on arrival)"]
},
{
  "id": "17",
  "title": "Ganja La Pass Trek",
  "location": "Nepal (Langtang Region)",
  "duration": "14 days",
  "rating": 4.5,
  "price": 720,
  "originalPrice": 840,
  "excerpt": "A challenging high-pass extension from Langtang Valley via the technical Ganja La Pass.",
  "description": "The Ganja La Pass Trek is a demanding technical route that extends the classic Langtang Valley trek. This expedition crosses the glaciated Ganja La Pass, traversing remote alpine valleys and offering spectacular close-up views of Langtang Lirung and surrounding peaks. Recommended for experienced trekkers seeking technical challenges and complete solitude.",
  "image": "/images/gosainkunda-3.jpg",
  "images": [],
  "tags": ["Ganja La", "Langtang", "High Pass", "Technical Trekking", "Nepal"],
  "highlights": [
    "Technical crossing of Ganja La Pass (5,122m)",
    "Remote alpine scenery away from main trails",
    "Spectacular close-up views of Langtang Lirung and glaciers",
    "Less-traveled, adventurous route requiring technical skills",
    "Complete wilderness experience with few other trekkers"
  ],
  "includes": ["Professional Guide (experienced in technical terrain)", "Assistant Guide for safety", "All Meals during trek", "Teahouse/Camping Accommodation", "All Required Permits", "Porters (1 porter per 2 trekkers)", "Technical equipment (crampons, ice axe, rope if needed)", "Private Transport: Kathmandu-Syabrubesi-Kathmandu", "Kathmandu Airport Transfers", "3 Nights Hotel in Kathmandu (B&B)", "Sleeping Bag & Down Jacket if needed"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary", "Personal climbing equipment"],
  "included": ["Professional Guide (experienced in technical terrain)", "Assistant Guide for safety", "All Meals during trek", "Teahouse/Camping Accommodation", "All Required Permits", "Porters (1 porter per 2 trekkers)", "Technical equipment (crampons, ice axe, rope if needed)", "Private Transport: Kathmandu-Syabrubesi-Kathmandu", "Kathmandu Airport Transfers", "3 Nights Hotel in Kathmandu (B&B)", "Sleeping Bag & Down Jacket if needed"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary", "Personal climbing equipment"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive at Tribhuvan International Airport. Transfer to hotel. Evening detailed briefing focusing on technical requirements. Overnight in Kathmandu." },
    { "day": 2, "title": "Drive to Syabrubesi", "description": "Morning scenic drive to Syabrubesi (1,550m). Overnight in teahouse." },
    { "day": 3, "title": "Trek to Lama Hotel", "description": "Begin trekking through beautiful forests to Lama Hotel (2,470m). Overnight in teahouse." },
    { "day": 4, "title": "Trek to Langtang Village", "description": "Ascend to Langtang Village (3,430m). Acclimatization and cultural exploration. Overnight in teahouse." },
    { "day": 5, "title": "Trek to Kyangjin Gompa", "description": "Trek to Kyangjin Gompa (3,850m). Rest and acclimatize. Overnight in teahouse." },
    { "day": 6, "title": "Acclimatization: Kyangjin Ri", "description": "Hike to Kyangjin Ri (4,773m) for acclimatization and panoramic views. Return to Kyangjin Gompa. Overnight in teahouse." },
    { "day": 7, "title": "Trek to Ganja La Base Camp", "description": "Trek toward the approach for Ganja La Pass, setting up at base camp area (4,500m). Technical briefing and preparation. Overnight in camp/basic shelter." },
    { "day": 8, "title": "Cross Ganja La Pass to Keldang", "description": "Technical day crossing Ganja La Pass (5,122m). Early start with crampons and ice axe. Descend steeply to Keldang (4,100m). Overnight in camp/basic shelter." },
    { "day": 9, "title": "Trek to Tarkeghyang", "description": "Continue descent through remote alpine terrain to Tarkeghyang (2,600m) in Helambu region. Overnight in teahouse." },
    { "day": 10, "title": "Trek to Sermathang", "description": "Trek through beautiful Sherpa villages to Sermathang (2,610m). Overnight in teahouse." },
    { "day": 11, "title": "Trek to Melamchi Bazaar", "description": "Descend to Melamchi Bazaar (870m). Overnight in teahouse." },
    { "day": 12, "title": "Drive to Kathmandu", "description": "Morning drive from Melamchi Bazaar back to Kathmandu. Overnight in Kathmandu." },
    { "day": 13, "title": "Contingency Day in Kathmandu", "description": "Buffer day for any delays or extra rest. Optional sightseeing. Overnight in Kathmandu." },
    { "day": 14, "title": "Departure from Kathmandu", "description": "Transfer to Tribhuvan International Airport for your onward flight, or extend your stay in Nepal." }
  ],
  "maxGroupSize": 8,
  "cancellationPolicy": "Partial refund if canceled 30 days prior",
  "isPopular": false,
  "isSoldOut": false,
  "difficulty": "very challenging (technical pass crossing, route finding)",
  "maxAltitude": "5,122m (Ganja La Pass)",
  "requirements": ["High-altitude trekking experience essential", "Comfort with snow/ice and technical sections", "Excellent physical fitness", "Mental preparedness for challenging conditions", "Guided groups mandatory"],
  "permits": ["Langtang National Park Permit", "TIMS Card"],
  "equipment": ["Sturdy Trekking Boots (must accept crampons)", "Crampons (essential)", "Ice Axe (required)", "4-Season Sleeping Bag (-20°C)", "Down Jacket", "Waterproof Layers", "Trekking Poles", "Headlamp with extra batteries", "High SPF Sun Protection"],
  "entryRequirements": ["Valid Passport (6+ months validity)", "Nepal Visa (obtainable on arrival)", "Mandatory Comprehensive Travel Insurance covering emergency helicopter evacuation up to 6,000m"]
},
{
  "id": "19",
  "title": "Langtang, Gosaikunda & Helambu Circuit Trek",
  "location": "Nepal (Langtang Region)",
  "duration": "18 days",
  "rating": 4.7,
  "price": 1050,
  "originalPrice": 1150,
  "excerpt": "A spectacular circuit trek combining alpine valleys, sacred lakes, and rich Tamang and Sherpa culture.",
  "description": "This comprehensive circuit trek explores three distinct regions north of Kathmandu. Journey through the glacier-filled Langtang Valley, visit the sacred Gosaikunda Lakes, and descend through the culturally rich Helambu region. This trek offers a perfect blend of high-altitude adventure, spiritual pilgrimage, and cultural immersion, all within easy reach of the capital without any flights required.",
  "image": "/images/langtang-2.jpg",
  "images": [],
  "tags": ["Langtang", "Gosaikunda", "Helambu", "Circuit Trek", "Cultural", "Nepal"],
  "highlights": [
    "Trek in the pristine Langtang Valley beneath Langtang Lirung (7,227m)",
    "Visit the sacred Gosaikunda Lake (4,380m) - major Hindu/Buddhist pilgrimage site",
    "Cross the challenging Lauribina La Pass (4,610m)",
    "Experience unique Tamang and Sherpa cultures in traditional villages",
    "Stunning views of Ganesh Himal and Langtang mountain ranges"
  ],
  "includes": ["Professional Guide & Assistant Guide", "All Meals during trek", "Teahouse Accommodation", "All Required Permits", "Porters (1 porter per 2 trekkers)", "Private Transport: Kathmandu-Syabrubesi & Melamchi-Kathmandu", "Kathmandu Airport Transfers", "3 Nights Hotel in Kathmandu (B&B)", "Sleeping Bag & Down Jacket if needed"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary"],
  "included": ["Professional Guide & Assistant Guide", "All Meals during trek", "Teahouse Accommodation", "All Required Permits", "Porters (1 porter per 2 trekkers)", "Private Transport: Kathmandu-Syabrubesi & Melamchi-Kathmandu", "Kathmandu Airport Transfers", "3 Nights Hotel in Kathmandu (B&B)", "Sleeping Bag & Down Jacket if needed"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive at Tribhuvan International Airport. Transfer to hotel. Evening welcome dinner and comprehensive trek briefing. Overnight in Kathmandu." },
    { "day": 2, "title": "Drive to Syabrubesi", "description": "Morning scenic drive through the Trisuli Valley to Syabrubesi (1,550m). Overnight in teahouse." },
    { "day": 3, "title": "Trek to Lama Hotel", "description": "Begin trekking along the Langtang River through lush forests to Lama Hotel (2,470m). Overnight in teahouse." },
    { "day": 4, "title": "Trek to Langtang Village", "description": "Ascend through beautiful forests to Langtang Village (3,430m). Experience Tamang culture. Overnight in teahouse." },
    { "day": 5, "title": "Trek to Kyangjin Gompa", "description": "Trek to Kyangjin Gompa (3,870m). Visit the monastery and cheese factory. Overnight in teahouse." },
    { "day": 6, "title": "Acclimatization: Tsergo Ri Hike", "description": "Optional challenging hike to Tsergo Ri (4,984m) for panoramic mountain views. Return to Kyangjin Gompa. Overnight in teahouse." },
    { "day": 7, "title": "Trek to Lama Hotel", "description": "Descend back down the Langtang Valley to Lama Hotel. Overnight in teahouse." },
    { "day": 8, "title": "Trek to Thulo Syabru", "description": "Leave the main Langtang trail, ascending to the village of Thulo Syabru (2,230m). Overnight in teahouse." },
    { "day": 9, "title": "Trek to Sing Gompa (Chandanbari)", "description": "Steady climb through oak and fir forests to Sing Gompa (3,330m). Overnight in teahouse." },
    { "day": 10, "title": "Trek to Gosaikunda Lake", "description": "Challenging ascent to the sacred Gosaikunda Lakes (4,380m). Explore the main lake and Shiva temple. Overnight at Gosaikunda." },
    { "day": 11, "title": "Cross Lauribina La Pass to Ghopte", "description": "High-altitude day crossing Lauribina La Pass (4,610m). Descend to Ghopte (3,430m). Overnight in teahouse." },
    { "day": 12, "title": "Trek to Melamchigaon", "description": "Descend into the Helambu region through forests to Melamchigaon (2,530m). Overnight in teahouse." },
    { "day": 13, "title": "Trek to Tarkeghyang", "description": "Pleasant trek through Sherpa villages to Tarkeghyang (2,600m), home to one of Nepal's largest monasteries. Overnight in teahouse." },
    { "day": 14, "title": "Trek to Sermathang", "description": "Final day of trekking to Sermathang (2,610m), with superb Himalayan views. Overnight in teahouse." },
    { "day": 15, "title": "Trek to Melamchi Bazaar", "description": "Descend to Melamchi Bazaar (870m). Overnight in teahouse." },
    { "day": 16, "title": "Drive to Kathmandu", "description": "Morning drive from Melamchi Bazaar back to Kathmandu. Farewell dinner. Overnight in Kathmandu." },
    { "day": 17, "title": "Contingency Day in Kathmandu", "description": "Buffer day for any delays. Optional sightseeing or shopping. Overnight in Kathmandu." },
    { "day": 18, "title": "Departure from Kathmandu", "description": "Transfer to Tribhuvan International Airport for your onward flight, or extend your stay in Nepal." }
  ],
  "maxGroupSize": 10,
  "cancellationPolicy": "Full refund if canceled 30 days before start date",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "moderate to challenging",
  "maxAltitude": "4,984m (Tsergo Ri optional)",
  "requirements": ["Good physical fitness", "Previous multi-day trekking experience recommended", "Ability to handle long ascent/descent days", "Acclimatization awareness"],
  "permits": ["Langtang National Park Permit", "TIMS Card"],
  "equipment": ["Sturdy Trekking Boots", "Warm layers and down jacket", "Waterproof jacket and pants", "Sleeping Bag (-10°C rating)", "Trekking Poles", "Headlamp", "Water Bottle"],
  "entryRequirements": ["Valid Passport", "Nepal Visa (obtainable on arrival)"]
},

{
  "id": "20",
  "title": "Annapurna North Base Camp, Tilicho Lake & Kang La Trek",
  "location": "Nepal (Annapurna Region)",
  "duration": "22 days",
  "rating": 4.9,
  "price": 1600,
  "originalPrice": 1800,
  "excerpt": "A remote and demanding high-altitude expedition to Annapurna's north face, combined with Tilicho Lake and the technical Kang La Pass.",
  "description": "This expedition-style trek ventures into the remote northern slopes of the Annapurna massif. Experience the dramatic Annapurna North Base Camp, visit the breathtaking Tilicho Lake (one of the highest in the world), and complete the challenging technical crossing of the Kang La Pass connecting Manang and Mustang. This is a serious adventure for experienced trekkers seeking complete immersion in high-altitude wilderness.",
  "image": "/images/annapurna_north.jpg",
  "images": [],
  "tags": ["Annapurna", "North Base Camp", "Tilicho Lake", "Kang La", "Expedition", "Technical Trekking", "Nepal"],
  "highlights": [
    "Stand at Annapurna North Base Camp (4,700m) below the immense north face",
    "Visit Tilicho Lake (4,919m), one of the world's highest lakes",
    "Challenge yourself on the technical, glaciated Kang La Pass (5,306m)",
    "Experience the dramatic rain-shadow landscape of Upper Manang and Lower Mustang",
    "Total immersion in remote, high-altitude Himalayan wilderness"
  ],
  "includes": ["Professional Expedition Guide & Assistant Guide", "All Meals during trek", "Camping Accommodation for remote sections", "Lodge Accommodation where available", "All Required Permits (including Restricted Area)", "Porters & Yaks for gear", "Camping & Kitchen Equipment", "Technical equipment (crampons, ice axe, rope as needed)", "Private Transport: Kathmandu-Besisahar & Jomsom-Pokhara-Kathmandu", "Flight: Jomsom-Pokhara", "Kathmandu Airport Transfers", "4 Nights Hotel in Kathmandu (B&B)", "2 Nights Hotel in Pokhara (B&B)", "Sleeping Bag & Down Jacket if needed"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu/Pokhara", "Extra accommodation beyond itinerary", "Personal climbing equipment"],
  "included": ["Professional Expedition Guide & Assistant Guide", "All Meals during trek", "Camping Accommodation for remote sections", "Lodge Accommodation where available", "All Required Permits (including Restricted Area)", "Porters & Yaks for gear", "Camping & Kitchen Equipment", "Technical equipment (crampons, ice axe, rope as needed)", "Private Transport: Kathmandu-Besisahar & Jomsom-Pokhara-Kathmandu", "Flight: Jomsom-Pokhara", "Kathmandu Airport Transfers", "4 Nights Hotel in Kathmandu (B&B)", "2 Nights Hotel in Pokhara (B&B)", "Sleeping Bag & Down Jacket if needed"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu/Pokhara", "Extra accommodation beyond itinerary", "Personal climbing equipment"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive at Tribhuvan International Airport. Transfer to hotel. Evening welcome dinner and detailed expedition briefing. Overnight in Kathmandu." },
    { "day": 2, "title": "Drive to Besisahar & Trek to Bhulbhule", "description": "Morning drive to Besisahar (760m). Short trek to Bhulbhule (840m). Overnight in teahouse." },
    { "day": 3, "title": "Trek to Jagat", "description": "Trek along the Marsyangdi River, entering the Manang district, to Jagat (1,300m). Overnight in teahouse." },
    { "day": 4, "title": "Trek to Dharapani", "description": "Continue along the river with first views of Manaslu and Annapurna II to Dharapani (1,860m). Overnight in teahouse." },
    { "day": 5, "title": "Trek to Chame", "description": "The valley narrows; trek through forests to the district headquarters of Chame (2,710m). Overnight in teahouse." },
    { "day": 6, "title": "Trek to Pisang", "description": "Views of Paungda Danda rock face. Trek to Lower Pisang (3,200m) for better acclimatization. Overnight in teahouse." },
    { "day": 7, "title": "Trek to Manang", "description": "Take the higher route via Ghyaru and Ngawal for stunning views, descending to Manang (3,540m). Overnight in teahouse." },
    { "day": 8, "title": "Acclimatization in Manang", "description": "Acclimatization day. Optional hikes to Gangapurna Lake or Praken Gompa. Overnight in teahouse." },
    { "day": 9, "title": "Trek to Khangsar", "description": "Leave the main circuit trail, heading west towards Tilicho Lake, to Khangsar (3,700m). Overnight in teahouse." },
    { "day": 10, "title": "Trek to Tilicho Base Camp", "description": "Ascend on a dramatic trail carved into the cliffside to Tilicho Base Camp (4,200m). Overnight in teahouse/camp." },
    { "day": 11, "title": "Explore Tilicho Lake & Return to Base Camp", "description": "Early morning hike to Tilicho Lake (4,919m). Spend time at the lake, then return to Tilicho Base Camp. Overnight in teahouse/camp." },
    { "day": 12, "title": "Trek to Yak Kharka", "description": "Return to Khangsar and then rejoin the main trail, trekking up the Jarsang Khola valley to Yak Kharka (4,050m). Overnight in teahouse." },
    { "day": 13, "title": "Trek to Annapurna North Base Camp", "description": "Demanding day trekking off the main trail to the remote Annapurna North Base Camp (approx. 4,700m). Camp overnight." },
    { "day": 14, "title": "Explore Base Camp & Return to Yak Kharka", "description": "Morning to explore and absorb the incredible north face views. Descend back to Yak Kharka. Overnight in teahouse." },
    { "day": 15, "title": "Trek to Kang La Phedi (High Camp)", "description": "Short trek off the main path to establish high camp below the Kang La Pass (approx. 4,600m). Overnight in camp." },
    { "day": 16, "title": "Cross Kang La Pass to Ngawal", "description": "Demanding and technical day. Early start to cross the glaciated Kang La Pass (5,306m). Long descent to Ngawal (3,660m). Overnight in teahouse." },
    { "day": 17, "title": "Trek to Jomsom", "description": "Descend through arid Mustang landscape to Jomsom (2,720m). Overnight in teahouse." },
    { "day": 18, "title": "Fly to Pokhara", "description": "Morning flight from Jomsom to Pokhara (820m). Rest and celebrate by Phewa Lake. Overnight in Pokhara." },
    { "day": 19, "title": "Drive to Kathmandu", "description": "Morning drive from Pokhara back to Kathmandu. Farewell dinner. Overnight in Kathmandu." },
    { "day": 20, "title": "Contingency Day in Kathmandu", "description": "Buffer day for any flight delays from Jomsom. Optional sightseeing. Overnight in Kathmandu." },
    { "day": 21, "title": "Departure from Kathmandu", "description": "Transfer to Tribhuvan International Airport for your onward flight, or extend your stay in Nepal." }
  ],
  "maxGroupSize": 8,
  "cancellationPolicy": "Full refund if canceled 90 days before start date. Strict policy due to permit logistics.",
  "isPopular": false,
  "isSoldOut": false,
  "difficulty": "Strenuous / Expedition Level",
  "maxAltitude": "5,306m (Kang La Pass)",
  "requirements": ["Exceptional physical fitness and stamina", "Mandatory previous high-altitude trekking experience (above 5,000m)", "Experience with basic ice axe and crampon use", "Mental resilience for remote camping and variable conditions"],
  "permits": ["Annapurna Conservation Area Permit (ACAP)", "TIMS Card", "Restricted Area Permit for Kang La/Mustang section"],
  "equipment": ["Mountaineering boots (B2/B3 recommended for Kang La)", "Crampons, Ice Axe (for Kang La)", "4-Season sleeping bag (-20°C)", "Down jacket, waterproof layers", "Trekking poles with snow baskets", "Headlamp, sunglasses/goggles"],
  "entryRequirements": ["Valid Passport (6+ months validity)", "Nepal Visa (obtainable on arrival)", "Mandatory Comprehensive Travel Insurance covering emergency helicopter evacuation up to 6,000m and trekking above 5,000m"]
},
{
  "id": "21",
  "title": "Pikey Peak Trek",
  "location": "Nepal (Lower Everest Region)",
  "duration": "12 days",
  "rating": 4.7,
  "price": 750,
  "originalPrice": 850,
  "excerpt": "A culturally rich trek in the lower Everest region, famous for spectacular sunrise views of Mount Everest.",
  "description": "The Pikey Peak Trek is a relatively new and less-trodden gem in the Solu-Khumbu region. Starting from a lower altitude than the classic EBC route, it offers a fantastic blend of lush forests, Sherpa culture, and absolutely breathtaking panoramic mountain views. The highlight is the sunrise from Pikey Peak (4,065m), which offers an unobstructed view of the entire eastern Himalayan range, including Mount Everest, Makalu, and Kanchenjunga.",
  "image": "/images/pikey.jpg",
  "images": [],
  "tags": ["Pikey Peak", "Everest View", "Short Trek", "Cultural", "Sherpa", "Nepal"],
  "highlights": [
    "Unparalleled sunrise view of Everest, Makalu, and Kanchenjunga from Pikey Peak",
    "Experience authentic Sherpa culture in traditional villages like Junbesi",
    "Visit ancient Thupten Chholing Monastery, one of Nepal's largest",
    "Trek through pristine rhododendron and pine forests",
    "Less crowded trails with a true sense of discovery"
  ],
  "includes": ["Professional Guide", "All Meals during trek", "Teahouse Accommodation", "All Required Permits", "Porters (1 porter per 2 trekkers)", "Private Transport: Kathmandu-Dhap & Phaplu-Kathmandu", "Kathmandu Airport Transfers", "3 Nights Hotel in Kathmandu (B&B)", "Sleeping Bag & Down Jacket if needed"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary"],
  "included": ["Professional Guide", "All Meals during trek", "Teahouse Accommodation", "All Required Permits", "Porters (1 porter per 2 trekkers)", "Private Transport: Kathmandu-Dhap & Phaplu-Kathmandu", "Kathmandu Airport Transfers", "3 Nights Hotel in Kathmandu (B&B)", "Sleeping Bag & Down Jacket if needed"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive at Tribhuvan International Airport. Transfer to hotel. Evening trek briefing and gear check. Overnight in Kathmandu." },
    { "day": 2, "title": "Drive to Dhap", "description": "Morning scenic drive through the Himalayan foothills to Dhap (2,900m), the starting point of the trek. Overnight in teahouse." },
    { "day": 3, "title": "Trek to Jhapre", "description": "First day of trekking through forests and small settlements to Jhapre (2,920m), with initial mountain views. Overnight in teahouse." },
    { "day": 4, "title": "Trek to Pikey Base Camp", "description": "Ascend through beautiful forests to the lodge settlement at Pikey Base Camp (3,640m). Overnight in teahouse." },
    { "day": 5, "title": "Summit Pikey Peak & Trek to Junbesi", "description": "Early morning climb to Pikey Peak (4,065m) for sunrise. After enjoying the views, descend to the beautiful Sherpa village of Junbesi (2,700m). Overnight in teahouse." },
    { "day": 6, "title": "Rest Day & Explore Junbesi", "description": "Acclimatization and exploration day. Visit the local school, nunnery, and the magnificent Thupten Chholing Monastery. Overnight in Junbesi." },
    { "day": 7, "title": "Trek to Taksindu La", "description": "Trek through forests over the Taksindu La pass (3,071m) to the small village of Taksindu. Overnight in teahouse." },
    { "day": 8, "title": "Trek to Phaplu", "description": "Final day of trekking, descending to Phaplu (2,413m), home to a small STOL airstrip. Overnight in teahouse." },
    { "day": 9, "title": "Drive to Kathmandu", "description": "Full-day drive back to Kathmandu through the scenic Solu region. Overnight in Kathmandu." },
    { "day": 10, "title": "Contingency Day in Kathmandu", "description": "Buffer day for any travel delays. Optional sightseeing. Overnight in Kathmandu." },
    { "day": 11, "title": "Departure from Kathmandu", "description": "Transfer to Tribhuvan International Airport for your onward flight, or extend your stay in Nepal." }
  ],
  "maxGroupSize": 12,
  "cancellationPolicy": "Full refund if canceled 30 days before start date",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "Moderate",
  "maxAltitude": "4,065m (Pikey Peak)",
  "requirements": ["Good general fitness", "Ability to walk 4-6 hours daily", "No prior high-altitude trekking experience required"],
  "permits": ["Local Area Permit (obtained in Kathmandu or Salleri)"],
  "equipment": ["Sturdy Trekking Boots", "Warm layers and jacket", "Rain protection", "Daypack", "Water Bottle"],
  "entryRequirements": ["Valid Passport", "Nepal Visa (obtainable on arrival)"]
},
{
  "id": "22",
  "title": "Rupina La Pass Trek",
  "location": "Nepal (Manaslu & Nar Phu Region)",
  "duration": "24 days",
  "rating": 4.8,
  "price": 2200,
  "originalPrice": 2500,
  "excerpt": "An expedition-style traverse connecting the Manaslu and Annapurna regions over one of Nepal's most challenging and remote high passes.",
  "description": "The Rupina La Pass Trek is a serious, off-the-beaten-path adventure for expert trekkers. It involves crossing the formidable Rupina La Pass (4,720m), a rugged and rarely used route that links the Nubri Valley (Manaslu region) with the Nar Phu Valley (Annapurna region). This trek takes you through some of the most remote and culturally preserved villages in Nepal, with landscapes ranging from deep gorges to high alpine deserts.",
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
  "includes": ["Professional Expedition Guide (with pass crossing expertise)", "Assistant Guide for safety", "All Meals during trek", "Full Camping Equipment (Tents, Kitchen, Dining)", "All Required Restricted Area and National Park Permits", "Porters and/or Yaks for gear transport", "Technical equipment as needed", "Private Transport: Kathmandu-Soti Khola & Besisahar-Kathmandu", "Kathmandu Airport Transfers", "4 Nights Hotel in Kathmandu (B&B)", "Sleeping Bag & Down Jacket if needed", "Satellite Phone for emergency"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary", "Personal trekking & mountaineering gear"],
  "included": ["Professional Expedition Guide (with pass crossing expertise)", "Assistant Guide for safety", "All Meals during trek", "Full Camping Equipment (Tents, Kitchen, Dining)", "All Required Restricted Area and National Park Permits", "Porters and/or Yaks for gear transport", "Technical equipment as needed", "Private Transport: Kathmandu-Soti Khola & Besisahar-Kathmandu", "Kathmandu Airport Transfers", "4 Nights Hotel in Kathmandu (B&B)", "Sleeping Bag & Down Jacket if needed", "Satellite Phone for emergency"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & porter", "Lunch & Dinner in Kathmandu", "Extra accommodation beyond itinerary", "Personal trekking & mountaineering gear"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Arrive at Tribhuvan International Airport. Transfer to hotel. Evening welcome dinner and detailed expedition briefing. Overnight in Kathmandu." },
    { "day": 2, "title": "Drive to Soti Khola", "description": "Long drive to the Manaslu trailhead at Soti Khola (710m). Overnight in teahouse." },
    { "day": 3, "title": "Trek to Machha Khola", "description": "Start trekking along the Budhi Gandaki River to Machha Khola (930m). Overnight in teahouse." },
    { "day": 4, "title": "Trek to Jagat", "description": "Enter the Manaslu Restricted Area, trekking to Jagat (1,410m). Overnight in teahouse." },
    { "day": 5, "title": "Trek to Deng", "description": "Continue up the valley, crossing suspension bridges to Deng (1,860m). Overnight in teahouse." },
    { "day": 6, "title": "Trek to Namrung", "description": "Ascend through forests to Namrung (2,630m), with improving mountain views. Overnight in teahouse." },
    { "day": 7, "title": "Trek to Lho", "description": "Trek to Lho (3,180m), with spectacular views of Manaslu North Face. Overnight in teahouse." },
    { "day": 8, "title": "Trek to Sama Gaon", "description": "Continue to the main village of Sama Gaon (3,530m) for acclimatization. Overnight in teahouse." },
    { "day": 9, "title": "Acclimatization in Sama Gaon", "description": "Rest day. Optional hike to Manaslu Base Camp or Pungyen Gompa. Overnight in teahouse." },
    { "day": 10, "title": "Trek to Samdo", "description": "Short trek to the high village of Samdo (3,860m) near the Tibetan border. Overnight in teahouse." },
    { "day": 11, "title": "Trek to Rupina La Phedi", "description": "Leave the main trail, heading west into a side valley to establish base camp below the pass (~4,200m). Overnight in camp." },
    { "day": 12, "title": "Cross Rupina La Pass to Chyargo", "description": "Demanding full-day crossing of the Rupina La Pass (4,720m). Technical descent to camp near Chyargo in the Nar Phu Valley (~4,000m). Overnight in camp." },
    { "day": 13, "title": "Trek to Nar Village", "description": "Descend further into the heart of the Nar Phu Valley, reaching the ancient village of Nar (4,110m). Overnight in teahouse." },
    { "day": 14, "title": "Explore Nar Village", "description": "Rest and exploration day. Visit Nar's monasteries and experience local culture. Overnight in Nar." },
    { "day": 15, "title": "Trek to Meta", "description": "Continue descent through spectacular canyon landscapes to Meta (3,560m). Overnight in teahouse." },
    { "day": 16, "title": "Trek to Koto", "description": "Exit the Nar Phu Restricted Area, joining the Annapurna Circuit trail at Koto (2,600m). Overnight in teahouse." },
    { "day": 17, "title": "Trek to Tal", "description": "Descend through the lush Marsyangdi Valley to the beautiful village of Tal (1,700m). Overnight in teahouse." },
    { "day": 18, "title": "Trek to Jagat", "description": "Continue descending to Jagat (1,300m). Overnight in teahouse." },
    { "day": 19, "title": "Trek to Bhulbhule & Drive to Besisahar", "description": "Final short trek to Bhulbhule (840m) and drive to Besisahar (760m). Overnight in teahouse." },
    { "day": 20, "title": "Drive to Kathmandu", "description": "Full-day drive back to Kathmandu. Overnight in Kathmandu." },
    { "day": 21, "title": "Contingency Day in Kathmandu", "description": "Buffer day for any travel delays. Overnight in Kathmandu." },
    { "day": 22, "title": "Departure from Kathmandu", "description": "Transfer to Tribhuvan International Airport for your onward flight, or extend your stay in Nepal." }
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
  "entryRequirements": ["Valid Passport (6+ months validity)", "Nepal Visa (obtainable on arrival)", "Mandatory Comprehensive travel insurance covering emergency evacuation from remote areas and altitudes up to 5,000m"]
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