"use client"

import { useState } from "react";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

// Trekking tours data
const MOCK_TOURS: Tour[] = [
  
  {
    id: "2",
    title: "Ghorepani Poon Hill Trek",
    location: "Nepal",
    duration: "5 days",
    rating: 4.7,
    reviewCount: 85,
    price: 450,
    originalPrice: 500,
    excerpt: "Short trek with panoramic views of Annapurna and Dhaulagiri ranges.",
    description: "Ghorepani Poon Hill Trek is ideal for beginners, offering mesmerizing views of the Annapurna and Dhaulagiri ranges, beautiful rhododendron forests, terraced villages, and cultural experiences with Gurung communities.",
    image: "/images/ghorepani.jpg",
    images: ["/images/ghorepani1.jpg", "/images/ghorepani2.jpg", "/images/ghorepani3.jpg"],
    tags: ["Annapurna", "Trekking", "Adventure", "Nepal"],
    highlights: [
      "Sunrise from Poon Hill",
      "Beautiful rhododendron forests",
      "Charming Gurung villages",
      "Terraced farmland views",
      "Short and rewarding trek"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Pokhara", description: "Arrive in Pokhara and transfer to hotel." },
      { day: 2, title: "Drive to Nayapul & Trek to Tikhedhunga", description: "Start trek through forests to Tikhedhunga." },
      { day: 3, title: "Trek to Ghorepani", description: "Climb through beautiful villages and forests to Ghorepani." },
      { day: 4, title: "Sunrise at Poon Hill & Trek to Tadapani", description: "Early morning hike to Poon Hill, then trek to Tadapani." },
      { day: 5, title: "Trek to Nayapul & Drive to Pokhara", description: "Return trek to Nayapul and drive back to Pokhara." }
    ],
    maxGroupSize: 12,
    cancellationPolicy: "Full refund if canceled 30 days before start date",
    isPopular: true,
    isSoldOut: false,
    difficulty: "easy to moderate",
    maxAltitude: "3,210m (Poon Hill)",
    requirements: ["Basic physical fitness", "Ability to walk 4–6 hours daily"],
    permits: ["Annapurna Conservation Area Permit (ACAP)", "TIMS Card"],
    equipment: ["Trekking boots", "Warm layers", "Backpack", "Trekking poles", "Sleeping bag"],
    entryRequirements: ["Valid Nepal visa", "Travel insurance"]
  },
  {
    id: "3",
    title: "Khopra with Khayer Lake Trek",
    location: "Nepal",
    duration: "7 days",
    rating: 4.8,
    reviewCount: 60,
    price: 650,
    originalPrice: 700,
    excerpt: "Less crowded trek with stunning views of Dhaulagiri and Annapurna and visit to the mystical Khayer Lake.",
    description: "Khopra with Khayer Lake Trek is a serene journey through traditional Gurung villages, terraced fields, dense forests, and offers spectacular sunrise views over the Himalayas. Khayer Lake adds a spiritual element to the trek.",
    image: "/images/khopra.jpg",
    images: ["/images/khopra1.jpg", "/images/khopra2.jpg", "/images/khopra3.jpg"],
    tags: ["Annapurna", "Trekking", "Adventure", "Nepal"],
    highlights: [
      "Panoramic Himalayan views",
      "Khopra Ridge sunrise",
      "Mystical Khayer Lake",
      "Traditional Gurung villages",
      "Less crowded trail"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Pokhara", description: "Arrive in Pokhara and overnight stay." },
      { day: 2, title: "Drive to Nayapul & Trek to Australian Camp", description: "Start trek via beautiful landscapes to Australian Camp." },
      { day: 3, title: "Trek to Dhampus & Deurali", description: "Continue trekking through forests to Dhampus and Deurali." },
      { day: 4, title: "Trek to Khopra Danda", description: "Reach Khopra Ridge with panoramic mountain views." },
      { day: 5, title: "Visit Khayer Lake & Return to Khopra", description: "Day hike to Khayer Lake and return to Khopra." },
      { day: 6, title: "Trek to Tadapani", description: "Descend to Tadapani village." },
      { day: 7, title: "Return to Nayapul & Drive to Pokhara", description: "Complete trek and return to Pokhara." }
    ],
    maxGroupSize: 10,
    cancellationPolicy: "Full refund if canceled 30 days before start date",
    isPopular: true,
    isSoldOut: false,
    difficulty: "moderate",
    maxAltitude: "3,680m (Khopra Danda)",
    requirements: ["Moderate physical fitness", "Experience with 5–6 hours trekking daily"],
    permits: ["Annapurna Conservation Area Permit (ACAP)", "TIMS Card"],
    equipment: ["Trekking boots", "Warm clothing layers", "Backpack", "Trekking poles", "Sleeping bag"],
    entryRequirements: ["Valid Nepal visa", "Travel insurance"]
  },
  {
    id: "4",
    title: "Annapurna Base Camp Trek",
    location: "Nepal",
    duration: "10 days",
    rating: 4.9,
    reviewCount: 140,
    price: 950,
    originalPrice: 1100,
    excerpt: "Classic trek through rhododendron forests to the base of Annapurna with stunning Himalayan views.",
    description: "Annapurna Base Camp Trek is one of the most popular treks in Nepal, offering lush forests, terraced fields, Gurung and Magar villages, hot springs, and close-up views of Annapurna South, Machapuchare, and Hiunchuli peaks.",
    image: "/images/abc.jpg",
    images: ["/images/abc1.jpg", "/images/abc2.jpg", "/images/abc3.jpg"],
    tags: ["Annapurna", "Trekking", "Adventure", "Nepal"],
    highlights: [
      "Views of Annapurna South and Machapuchare",
      "Diverse landscapes and forests",
      "Cultural experience in local villages",
      "Natural hot springs",
      "Classic trekking route"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Pokhara", description: "Arrive in Pokhara and transfer to hotel." },
      { day: 2, title: "Drive to Nayapul & Trek to Tikhedhunga", description: "Start trek via villages and forests to Tikhedhunga." },
      { day: 3, title: "Trek to Ghorepani", description: "Climb through rhododendron forests to Ghorepani." },
      { day: 4, title: "Sunrise at Poon Hill & Trek to Chomrong", description: "Enjoy sunrise views, then trek to Chomrong village." },
      { day: 5, title: "Trek to Bamboo & Dovan", description: "Trek via lush forests to Bamboo and Dovan." },
      { day: 6, title: "Trek to Deurali", description: "Continue trekking to Deurali." },
      { day: 7, title: "Trek to Annapurna Base Camp", description: "Reach the base camp of Annapurna and enjoy the views." },
      { day: 8, title: "Trek to Bamboo", description: "Begin return trek to Bamboo." },
      { day: 9, title: "Trek to Jhinu & Nayapul", description: "Trek down to Jhinu and continue to Nayapul." },
      { day: 10, title: "Drive to Pokhara & Depart", description: "Return to Pokhara and depart." }
    ],
    maxGroupSize: 12,
    cancellationPolicy: "Full refund if canceled 45 days before start date",
    isPopular: true,
    isSoldOut: false,
    difficulty: "moderate",
    maxAltitude: "4,130m (Annapurna Base Camp)",
    requirements: ["Good physical fitness", "Ability to trek 5–7 hours daily"],
    permits: ["Annapurna Conservation Area Permit (ACAP)", "TIMS Card"],
    equipment: ["Trekking boots", "Backpack", "Warm clothing layers", "Sleeping bag", "Trekking poles"],
    entryRequirements: ["Valid Nepal visa", "Travel insurance"]
  },
  {
    id: "5",
    title: "Annapurna Circuit Trek",
    location: "Nepal",
    duration: "15 days",
    rating: 4.9,
    reviewCount: 160,
    price: 1200,
    originalPrice: 1400,
    excerpt: "Classic long trek encircling Annapurna Massif with diverse landscapes and cultures.",
    description: "The Annapurna Circuit Trek is a legendary trek that passes through subtropical lowlands, terraced fields, high-altitude deserts, and Tibetan-influenced villages. It offers views of Annapurna, Dhaulagiri, Manaslu, and Thorong La Pass (5,416m).",
    image: "/images/annapurna_circuit.jpg",
    images: ["/images/annapurna_circuit1.jpg", "/images/annapurna_circuit2.jpg", "/images/annapurna_circuit3.jpg"],
    tags: ["Annapurna", "Trekking", "Adventure", "Nepal"],
    highlights: [
      "Thorong La Pass adventure",
      "Views of Annapurna and Dhaulagiri",
      "Diverse ecosystems from lowlands to high mountains",
      "Traditional villages and monasteries",
      "Cultural diversity along the trail"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Besisahar", description: "Arrive in Besisahar and overnight stay." },
      { day: 2, title: "Drive to Bhulbhule & Trek to Jagat", description: "Drive and start trek to Jagat." },
      { day: 3, title: "Trek to Dharapani", description: "Trek through forests and small villages to Dharapani." },
      { day: 4, title: "Trek to Chame", description: "Trek to Chame, the district headquarters of Manang." },
      { day: 5, title: "Trek to Pisang & Manang", description: "Trek via Pisang to Manang for acclimatization." },
      { day: 6, title: "Acclimatization in Manang", description: "Rest day or short hike for acclimatization." },
      { day: 7, title: "Trek to Yak Kharka & Thorong Phedi", description: "Ascend towards Thorong La base." },
      { day: 8, title: "Cross Thorong La Pass & Trek to Muktinath", description: "Reach the high pass and descend to Muktinath." },
      { day: 9, title: "Trek to Marpha", description: "Descend through Kagbeni to Marpha village." },
      { day: 10, title: "Trek to Ghasa", description: "Continue trekking to Ghasa along the Kali Gandaki river." },
      { day: 11, title: "Trek to Tatopani", description: "Reach Tatopani and enjoy natural hot springs." },
      { day: 12, title: "Trek to Ghorepani", description: "Trek through forests to Ghorepani." },
      { day: 13, title: "Sunrise at Poon Hill & Trek to Nayapul", description: "Enjoy sunrise, then trek down to Nayapul." },
      { day: 14, title: "Drive to Pokhara", description: "Return to Pokhara for overnight stay." },
      { day: 15, title: "Departure from Pokhara", description: "Fly or drive from Pokhara." }
    ],
    maxGroupSize: 12,
    cancellationPolicy: "Full refund if canceled 45 days before start date",
    isPopular: true,
    isSoldOut: false,
    difficulty: "hard",
    maxAltitude: "5,416m (Thorong La Pass)",
    requirements: ["Excellent physical fitness", "High-altitude trekking experience", "Acclimatization capability"],
    permits: ["Annapurna Conservation Area Permit (ACAP)", "TIMS Card"],
    equipment: ["Trekking boots", "Warm layers", "Sleeping bag", "Backpack", "Trekking poles"],
    entryRequirements: ["Valid Nepal visa", "Travel insurance"]
  },
  {
    id: "6",
    title: "Muldai Trek",
    location: "Nepal",
    duration: "6 days",
    rating: 4.6,
    reviewCount: 40,
    price: 550,
    originalPrice: 600,
    excerpt: "Hidden trek with untouched trails and scenic Himalayan landscapes in Annapurna region.",
    description: "Muldai Trek is a hidden gem offering serene trails, small villages, lush forests, and panoramic mountain views. It is ideal for trekkers seeking less crowded paths.",
    image: "/images/muldai.jpg",
    images: ["/images/muldai1.jpg", "/images/muldai2.jpg", "/images/muldai3.jpg"],
    tags: ["Annapurna", "Trekking", "Adventure", "Nepal"],
    highlights: [
      "Off-the-beaten-path trails",
      "Picturesque villages",
      "Scenic landscapes",
      "Peaceful trekking experience",
      "Mountain vistas"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Pokhara", description: "Arrive and overnight stay in Pokhara." },
      { day: 2, title: "Drive to Trek Start & Trek to Village", description: "Begin trek to local village." },
      { day: 3, title: "Trek through Forests to Muldai", description: "Continue trekking to Muldai." },
      { day: 4, title: "Explore Muldai & Nearby Trails", description: "Short hikes around Muldai village." },
      { day: 5, title: "Trek to Lower Village", description: "Descend to lower village for overnight." },
      { day: 6, title: "Return to Pokhara", description: "Complete trek and return to Pokhara." }
    ],
    maxGroupSize: 10,
    cancellationPolicy: "Full refund if canceled 30 days before start date",
    isPopular: false,
    isSoldOut: false,
    difficulty: "moderate",
    maxAltitude: "3,200m",
    requirements: ["Moderate physical fitness", "Willingness to explore remote areas"],
    permits: ["Annapurna Conservation Area Permit (ACAP)", "TIMS Card"],
    equipment: ["Trekking boots", "Backpack", "Warm layers", "Trekking poles", "Sleeping bag"],
    entryRequirements: ["Valid Nepal visa", "Travel insurance"]
  },
  {
    id: "7",
    title: "Mardi Himal Trek",
    location: "Nepal",
    duration: "6 days",
    rating: 4.8,
    reviewCount: 95,
    price: 600,
    originalPrice: 650,
    excerpt: "Hidden trail in Annapurna region with pristine forests, waterfalls, and stunning Mardi Himal views.",
    description: "Mardi Himal Trek is a short, less crowded trek offering close-up views of Mardi Himal and Machapuchare peaks. It passes through beautiful rhododendron forests, villages, and waterfalls, making it ideal for nature lovers.",
    image: "/images/mardi_himal.jpg",
    images: ["/images/mardi_himal1.jpg", "/images/mardi_himal2.jpg", "/images/mardi_himal3.jpg"],
    tags: ["Annapurna", "Trekking", "Adventure", "Nepal"],
    highlights: [
      "Uncrowded trail",
      "Breathtaking Mardi Himal views",
      "Rhododendron forests and waterfalls",
      "Traditional villages",
      "Sunrise and sunset views over Annapurna"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Pokhara", description: "Arrive in Pokhara and overnight stay." },
      { day: 2, title: "Drive to Kande & Trek to Deurali", description: "Start trek through forests to Deurali." },
      { day: 3, title: "Trek to Low Camp", description: "Continue through forests with scenic views to Low Camp." },
      { day: 4, title: "Trek to High Camp", description: "Ascend to High Camp and enjoy sunrise views of Mardi Himal." },
      { day: 5, title: "Trek to Siding Village", description: "Descend through forests and villages to Siding." },
      { day: 6, title: "Return to Pokhara", description: "Complete trek and drive back to Pokhara." }
    ],
    maxGroupSize: 10,
    cancellationPolicy: "Full refund if canceled 30 days before start date",
    isPopular: true,
    isSoldOut: false,
    difficulty: "moderate",
    maxAltitude: "4,500m (High Camp)",
    requirements: ["Moderate physical fitness", "Ability to trek 5–6 hours daily"],
    permits: ["Annapurna Conservation Area Permit (ACAP)", "TIMS Card"],
    equipment: ["Trekking boots", "Backpack", "Warm layers", "Trekking poles", "Sleeping bag"],
    entryRequirements: ["Valid Nepal visa", "Travel insurance"]
  },
  {
    id: "8",
    title: "Annapurna North Base Camp Trek",
    location: "Nepal",
    duration: "8 days",
    rating: 4.7,
    reviewCount: 80,
    price: 750,
    originalPrice: 850,
    excerpt: "Less crowded trail leading to Annapurna North Base Camp with spectacular Himalayan views.",
    description: "Annapurna North Base Camp Trek offers panoramic views of Annapurna North, Gangapurna, and Machapuchare peaks. The trek passes through traditional Gurung villages and beautiful landscapes, ideal for trekkers seeking tranquility.",
    image: "/images/annapurna_north.jpg",
    images: ["/images/annapurna_north1.jpg", "/images/annapurna_north2.jpg", "/images/annapurna_north3.jpg"],
    tags: ["Annapurna", "Trekking", "Adventure", "Nepal"],
    highlights: [
      "Views of Annapurna North and Gangapurna",
      "Less crowded trekking trail",
      "Traditional Gurung villages",
      "Spectacular Himalayan landscapes",
      "Peaceful and serene trek"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Pokhara", description: "Arrive in Pokhara and overnight stay." },
      { day: 2, title: "Drive to Ghandruk & Trek to Chhomrong", description: "Start trek through forests and villages to Chhomrong." },
      { day: 3, title: "Trek to Doban & Bamboo", description: "Trek through lush landscapes to Doban and Bamboo." },
      { day: 4, title: "Trek to Himalaya Base Camp", description: "Ascend to Annapurna North Base Camp and enjoy stunning views." },
      { day: 5, title: "Trek to Dovan", description: "Begin return trek to Dovan." },
      { day: 6, title: "Trek to Jhinu & Nayapul", description: "Descend through forests to Jhinu and Nayapul." },
      { day: 7, title: "Drive to Pokhara", description: "Return to Pokhara and rest." },
      { day: 8, title: "Departure from Pokhara", description: "Fly or drive from Pokhara." }
    ],
    maxGroupSize: 10,
    cancellationPolicy: "Full refund if canceled 30 days before start date",
    isPopular: true,
    isSoldOut: false,
    difficulty: "moderate",
    maxAltitude: "4,130m (Annapurna North Base Camp)",
    requirements: ["Moderate physical fitness", "Ability to trek long hours"],
    permits: ["Annapurna Conservation Area Permit (ACAP)", "TIMS Card"],
    equipment: ["Trekking boots", "Backpack", "Warm layers", "Sleeping bag", "Trekking poles"],
    entryRequirements: ["Valid Nepal visa", "Travel insurance"]
  },
  {
    id: "9",
    title: "Nar Phu Valley Trek",
    location: "Nepal",
    duration: "12 days",
    rating: 4.9,
    reviewCount: 50,
    price: 1100,
    originalPrice: 1250,
    excerpt: "Remote trek to hidden Nar and Phu villages with Tibetan culture and high-altitude landscapes.",
    description: "Nar Phu Trek is a hidden gem in the Annapurna region offering pristine Tibetan-style villages, high-altitude deserts, and panoramic views of Annapurna II and Gangapurna peaks. It is perfect for adventurers seeking off-the-beaten-path experiences.",
    image: "/images/narphu.jpg",
    images: ["/images/narphu1.jpg", "/images/narphu2.jpg", "/images/narphu3.jpg"],
    tags: ["Annapurna", "Trekking", "Adventure", "Nepal"],
    highlights: [
      "Remote Tibetan villages",
      "High-altitude trekking",
      "Views of Annapurna II and Gangapurna",
      "Cultural immersion",
      "Pristine and uncrowded trails"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Arrive in Kathmandu and overnight stay." },
      { day: 2, title: "Drive to Besisahar & Trek to Bahundanda", description: "Drive and start trek to Bahundanda." },
      { day: 3, title: "Trek to Jagat", description: "Continue trekking to Jagat village." },
      { day: 4, title: "Trek to Nar Village", description: "Ascend to Nar village through highland trails." },
      { day: 5, title: "Explore Nar Village", description: "Explore the Tibetan-style village and surrounding landscapes." },
      { day: 6, title: "Trek to Phu Village", description: "Trek to Phu village with spectacular mountain views." },
      { day: 7, title: "Explore Phu Village", description: "Cultural exploration in Phu village." },
      { day: 8, title: "Trek to Kang La Base", description: "Ascend to high-altitude base for mountain views." },
      { day: 9, title: "Return to Nar Village", description: "Descend back to Nar village." },
      { day: 10, title: "Trek to Koto", description: "Continue descent to Koto." },
      { day: 11, title: "Trek to Tatopani", description: "Descend further along scenic trails." },
      { day: 12, title: "Drive to Kathmandu", description: "Return drive to Kathmandu." }
    ],
    maxGroupSize: 8,
    cancellationPolicy: "Full refund if canceled 45 days before start date",
    isPopular: false,
    isSoldOut: false,
    difficulty: "hard",
    maxAltitude: "5,000m (Nar Phu High Camp)",
    requirements: ["Excellent physical fitness", "Experience with high-altitude trekking", "Acclimatization"],
    permits: ["Annapurna Conservation Area Permit (ACAP)", "TIMS Card"],
    equipment: ["Trekking boots", "Warm layers", "Backpack", "Sleeping bag", "Trekking poles"],
    entryRequirements: ["Valid Nepal visa", "Travel insurance"]
  },
  {
    id: "10",
    title: "Upper Mustang Trek",
    location: "Nepal",
    duration: "14 days",
    rating: 4.9,
    reviewCount: 70,
    price: 2000,
    originalPrice: 2200,
    excerpt: "Trek through the ancient Himalayan kingdom of Lo with Tibetan culture, desert landscapes, and caves.",
    description: "Upper Mustang Trek explores the ancient kingdom of Lo, a Tibetan-influenced area with dramatic desert landscapes, caves, monasteries, and unique culture. Permits are required due to restricted area regulations.",
    image: "/images/upper_mustang.jpg",
    images: ["/images/upper_mustang1.jpg", "/images/upper_mustang2.jpg", "/images/upper_mustang3.jpg"],
    tags: ["Mustang", "Trekking", "Adventure", "Nepal"],
    highlights: [
      "Tibetan culture and monasteries",
      "Barren desert landscapes",
      "Caves and cliff dwellings",
      "Ancient Lo Kingdom",
      "Unforgettable trekking experience"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Arrive and overnight stay in Kathmandu." },
      { day: 2, title: "Fly to Jomsom & Trek to Kagbeni", description: "Fly to Jomsom and trek to Kagbeni village." },
      { day: 3, title: "Trek to Chele", description: "Ascend through trails to Chele village." },
      { day: 4, title: "Trek to Tangbe & Tetang", description: "Trek through Mustang villages." },
      { day: 5, title: "Trek to Ghami", description: "Continue trekking through barren landscapes to Ghami." },
      { day: 6, title: "Trek to Lo Manthang", description: "Reach walled capital Lo Manthang." },
      { day: 7, title: "Explore Lo Manthang", description: "Explore monastery, palace, and villages." },
      { day: 8, title: "Trek to Chhoser", description: "Trek through caves and desert landscapes." },
      { day: 9, title: "Trek to Tsarang", description: "Visit Tsarang and local monasteries." },
      { day: 10, title: "Trek to Marpha", description: "Descend through Mustang villages to Marpha." },
      { day: 11, title: "Trek to Kagbeni", description: "Return trek to Kagbeni village." },
      { day: 12, title: "Fly to Pokhara", description: "Fly from Jomsom to Pokhara." },
      { day: 13, title: "Pokhara Leisure Day", description: "Relax in Pokhara or explore lakes." },
      { day: 14, title: "Departure from Pokhara/Kathmandu", description: "Return journey." }
    ],
    maxGroupSize: 8,
    cancellationPolicy: "Full refund if canceled 60 days before start date",
    isPopular: true,
    isSoldOut: false,
    difficulty: "moderate to hard",
    maxAltitude: "4,200m (Lo Manthang)",
    requirements: ["Good physical fitness", "Acclimatization for high-altitude trekking"],
    permits: ["Restricted Area Permit for Upper Mustang", "Annapurna Conservation Area Permit (ACAP)", "TIMS Card"],
    equipment: ["Trekking boots", "Warm layers", "Backpack", "Sleeping bag", "Trekking poles"],
    entryRequirements: ["Valid Nepal visa", "Travel insurance"]
  },
  {
    id: "11",
    title: "Everest Base Camp Trekking",
    location: "Nepal",
    duration: "14 days",
    rating: 4.9,
    reviewCount: 220,
    price: 1800,
    originalPrice: 2000,
    excerpt: "Iconic trek to the base of the world’s highest peak with Sherpa culture and Himalayan vistas.",
    description: "Everest Base Camp Trekking is the ultimate adventure in Nepal, passing through Sagarmatha National Park, Sherpa villages, monasteries, and offering spectacular views of Everest, Lhotse, Nuptse, and Ama Dablam.",
    image: "/images/everest_base_camp.jpg",
    images: ["/images/everest_base_camp1.jpg", "/images/everest_base_camp2.jpg", "/images/everest_base_camp3.jpg"],
    tags: ["Everest", "Trekking", "Adventure", "Nepal"],
    highlights: [
      "Sagarmatha National Park experience",
      "Views of Everest, Lhotse, Nuptse",
      "Sherpa culture and monasteries",
      "High-altitude trekking adventure",
      "Close encounter with Himalayan peaks"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Arrive and overnight stay." },
      { day: 2, title: "Fly to Lukla & Trek to Phakding", description: "Start trek through scenic villages." },
      { day: 3, title: "Trek to Namche Bazaar", description: "Ascend to Sherpa hub Namche Bazaar." },
      { day: 4, title: "Acclimatization in Namche", description: "Short hikes and market exploration." },
      { day: 5, title: "Trek to Tengboche", description: "Trek to Tengboche Monastery." },
      { day: 6, title: "Trek to Dingboche", description: "Cross beautiful landscapes to Dingboche." },
      { day: 7, title: "Acclimatization in Dingboche", description: "Short hikes for acclimatization." },
      { day: 8, title: "Trek to Lobuche", description: "Continue to Lobuche." },
      { day: 9, title: "Trek to Everest Base Camp", description: "Reach Everest Base Camp." },
      { day: 10, title: "Return to Gorak Shep & Kala Patthar", description: "Climb Kala Patthar and descend." },
      { day: 11, title: "Trek to Pheriche", description: "Begin return trek." },
      { day: 12, title: "Trek to Namche Bazaar", description: "Continue return trek." },
      { day: 13, title: "Trek to Lukla", description: "Return trek to Lukla." },
      { day: 14, title: "Fly to Kathmandu & Depart", description: "Return to Kathmandu." }
    ],
    maxGroupSize: 10,
    cancellationPolicy: "Full refund if canceled 45 days before start date",
    isPopular: true,
    isSoldOut: false,
    difficulty: "hard",
    maxAltitude: "5,545m (Everest Base Camp)",
    requirements: ["Good physical fitness", "High-altitude trekking experience", "Acclimatization"],
    permits: ["Sagarmatha National Park Permit", "TIMS Card"],
    equipment: ["Trekking boots", "Warm layers", "Backpack", "Sleeping bag", "Trekking poles"],
    entryRequirements: ["Valid Nepal visa", "Travel insurance"]
  },
  
  {
    id: "12",
    title: "Everest Base Camp with Gokyo Lake Trek",
    location: "Nepal",
    duration: "16 days",
    rating: 4.9,
    reviewCount: 150,
    price: 2000,
    originalPrice: 2200,
    excerpt: "Classic Everest trek combined with the turquoise Gokyo Lakes for unmatched Himalayan views.",
    description: "This trek combines the iconic Everest Base Camp route with the Gokyo Lake region, offering panoramic mountain views, glaciers, high-altitude lakes, Sherpa culture, and the challenge of crossing Cho La Pass.",
    image: "/images/everest_gokyo.jpg",
    images: ["/images/everest_gokyo1.jpg", "/images/everest_gokyo2.jpg", "/images/everest_gokyo3.jpg"],
    tags: ["Everest", "Trekking", "Adventure", "Nepal"],
    highlights: [
      "Everest Base Camp adventure",
      "Gokyo Lakes and glacier views",
      "Cho La Pass crossing",
      "Sherpa villages and monasteries",
      "Spectacular Himalayan vistas"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Arrive and overnight stay." },
      { day: 2, title: "Fly to Lukla & Trek to Phakding", description: "Start trek through scenic villages." },
      { day: 3, title: "Trek to Namche Bazaar", description: "Ascend to Sherpa hub Namche Bazaar." },
      { day: 4, title: "Acclimatization in Namche", description: "Short hikes and market exploration." },
      { day: 5, title: "Trek to Dole", description: "Trek through forests and villages." },
      { day: 6, title: "Trek to Machhermo", description: "Continue ascending to Machhermo." },
      { day: 7, title: "Trek to Gokyo Lake", description: "Reach Gokyo Lake with stunning turquoise waters." },
      { day: 8, title: "Climb Gokyo Ri & Trek to Dzongla", description: "Summit Gokyo Ri for views and trek to Dzongla." },
      { day: 9, title: "Cross Cho La Pass & Trek to Lobuche", description: "Challenging high pass crossing." },
      { day: 10, title: "Trek to Everest Base Camp & Gorak Shep", description: "Reach EBC and overnight at Gorak Shep." },
      { day: 11, title: "Climb Kala Patthar & Trek to Pheriche", description: "Sunrise views from Kala Patthar, then descend." },
      { day: 12, title: "Trek to Namche Bazaar", description: "Return trek through villages." },
      { day: 13, title: "Trek to Lukla", description: "Descend to Lukla." },
      { day: 14, title: "Fly to Kathmandu", description: "Return to Kathmandu." },
      { day: 15, title: "Kathmandu Leisure Day", description: "Explore Kathmandu or rest." },
      { day: 16, title: "Departure from Kathmandu", description: "Fly home." }
    ],
    maxGroupSize: 10,
    cancellationPolicy: "Full refund if canceled 45 days before start date",
    isPopular: true,
    isSoldOut: false,
    difficulty: "hard",
    maxAltitude: "5,545m (Everest Base Camp)",
    requirements: ["Good physical fitness", "High-altitude trekking experience", "Acclimatization"],
    permits: ["Sagarmatha National Park Permit", "TIMS Card"],
    equipment: ["Trekking boots", "Warm layers", "Backpack", "Sleeping bag", "Trekking poles"],
    entryRequirements: ["Valid Nepal visa", "Travel insurance"]
  },
  {
    id: "13",
    title: "Everest Three Passes Trek",
    location: "Nepal",
    duration: "18 days",
    rating: 4.9,
    reviewCount: 90,
    price: 2500,
    originalPrice: 2700,
    excerpt: "Advanced trek crossing three high passes in the Everest region, offering ultimate Himalayan adventure.",
    description: "Everest Three Passes Trek is an ultimate challenge, crossing Kongma La, Cho La, and Renjo La passes. It offers Everest, Lhotse, Nuptse, Ama Dablam, and Gokyo Lakes views along with Sherpa culture.",
    image: "/images/everest_three_passes.jpg",
    images: ["/images/everest_three_passes1.jpg", "/images/everest_three_passes2.jpg", "/images/everest_three_passes3.jpg"],
    tags: ["Everest", "Trekking", "Adventure", "Nepal"],
    highlights: [
      "Crossing Kongma La, Cho La, Renjo La",
      "Views of Everest, Ama Dablam, Lhotse",
      "Gokyo Lakes and glaciers",
      "Sherpa culture immersion",
      "Ultimate high-altitude trekking challenge"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Arrive and overnight stay." },
      { day: 2, title: "Fly to Lukla & Trek to Phakding", description: "Begin trek." },
      { day: 3, title: "Trek to Namche Bazaar", description: "Ascend to Namche." },
      { day: 4, title: "Acclimatization in Namche", description: "Short hikes." },
      { day: 5, title: "Trek to Tengboche", description: "Trek to monastery village." },
      { day: 6, title: "Trek to Dingboche", description: "Continue ascent." },
      { day: 7, title: "Acclimatization in Dingboche", description: "Short hikes for acclimatization." },
      { day: 8, title: "Trek to Chhukung", description: "Trek to Chhukung." },
      { day: 9, title: "Cross Kongma La & Trek to Lobuche", description: "High pass crossing." },
      { day: 10, title: "Trek to Gokyo Lake", description: "Reach turquoise Gokyo Lake." },
      { day: 11, title: "Climb Gokyo Ri & Trek to Thame", description: "Summit for panoramic views." },
      { day: 12, title: "Cross Renjo La & Trek to Namche", description: "Pass crossing with descent." },
      { day: 13, title: "Trek to Lukla via Phakding", description: "Descend towards Lukla." },
      { day: 14, title: "Fly to Kathmandu", description: "Return flight." },
      { day: 15, title: "Kathmandu Leisure Day", description: "Explore Kathmandu." },
      { day: 16, title: "Departure from Kathmandu", description: "Fly home." }
    ],
    maxGroupSize: 8,
    cancellationPolicy: "Full refund if canceled 60 days before start date",
    isPopular: true,
    isSoldOut: false,
    difficulty: "very hard",
    maxAltitude: "5,535m (Kongma La Pass)",
    requirements: ["Excellent fitness", "Experience with high-altitude trekking", "Acclimatization"],
    permits: ["Sagarmatha National Park Permit", "TIMS Card"],
    equipment: ["Trekking boots", "Warm layers", "Backpack", "Sleeping bag", "Trekking poles", "Crampons"],
    entryRequirements: ["Valid Nepal visa", "Travel insurance"]
  },
  {
    id: "14",
    title: "Pikey Peak Trek",
    location: "Nepal",
    duration: "7 days",
    rating: 4.7,
    reviewCount: 60,
    price: 650,
    originalPrice: 700,
    excerpt: "Scenic trek in eastern Nepal with panoramic views of Everest and Makalu.",
    description: "Pikey Peak Trek offers remote trails, Sherpa villages, rhododendron forests, and breathtaking sunrise views of Everest, Lhotse, and Makalu. Less crowded and culturally rich.",
    image: "/images/pikey.jpg",
    images: ["/images/pikey1.jpg", "/images/pikey2.jpg", "/images/pikey3.jpg"],
    tags: ["Everest", "Trekking", "Adventure", "Nepal"],
    highlights: [
      "Panoramic Himalayan views",
      "Sherpa culture",
      "Sunrise at Pikey Peak",
      "Less crowded trails",
      "Picturesque forests and villages"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Overnight in Kathmandu." },
      { day: 2, title: "Drive to Salleri & Trek to Chyangmukha", description: "Start trek." },
      { day: 3, title: "Trek to Pikey Base Camp", description: "Ascend through forests." },
      { day: 4, title: "Climb Pikey Peak & Trek to Phakding", description: "Sunrise and descent." },
      { day: 5, title: "Trek to Ilam Village", description: "Continue trekking." },
      { day: 6, title: "Return Trek to Salleri", description: "Descend to Salleri." },
      { day: 7, title: "Drive to Kathmandu", description: "Return to Kathmandu." }
    ],
    maxGroupSize: 12,
    cancellationPolicy: "Full refund if canceled 30 days before start date",
    isPopular: true,
    isSoldOut: false,
    difficulty: "moderate",
    maxAltitude: "3,406m (Pikey Peak)",
    requirements: ["Moderate fitness", "Trekking experience"],
    permits: ["Salleri Region Permit", "TIMS Card"],
    equipment: ["Trekking boots", "Backpack", "Warm layers", "Trekking poles", "Sleeping bag"],
    entryRequirements: ["Valid Nepal visa", "Travel insurance"]
  },
  {
    id: "15",
    title: "Langtang Valley Trek",
    location: "Nepal",
    duration: "7 days",
    rating: 4.8,
    reviewCount: 120,
    price: 700,
    originalPrice: 800,
    excerpt: "Beautiful trek in Langtang region with lush forests, traditional Tamang villages, and Himalayan scenery.",
    description: "Langtang Valley Trek offers pristine forests, glacial rivers, local Tamang culture, and views of Langtang Lirung and other peaks. Perfect for a moderate trek close to Kathmandu.",
    image: "/images/langtang_valley.jpg",
    images: ["/images/langtang_valley1.jpg", "/images/langtang_valley2.jpg", "/images/langtang_valley3.jpg"],
    tags: ["Langtang", "Trekking", "Adventure", "Nepal"],
    highlights: [
      "Langtang Lirung views",
      "Tamang culture and villages",
      "Lush forests and rivers",
      "Moderate trekking experience",
      "Close to Kathmandu"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Overnight in Kathmandu." },
      { day: 2, title: "Drive to Syabrubesi", description: "Start trek from Syabrubesi." },
      { day: 3, title: "Trek to Lama Hotel", description: "Trek through forests and rivers." },
      { day: 4, title: "Trek to Langtang Village", description: "Reach Langtang village and explore." },
      { day: 5, title: "Trek to Kyanjin Gompa", description: "Visit monastery and enjoy peak views." },
      { day: 6, title: "Return Trek to Lama Hotel", description: "Descend back." },
      { day: 7, title: "Drive to Kathmandu", description: "Return to Kathmandu." }
    ],
    maxGroupSize: 12,
    cancellationPolicy: "Full refund if canceled 30 days before start date",
    isPopular: true,
    isSoldOut: false,
    difficulty: "moderate",
    maxAltitude: "3,870m (Kyanjin Gompa)",
    requirements: ["Moderate fitness", "Acclimatization for moderate altitude"],
    permits: ["Langtang National Park Permit", "TIMS Card"],
    equipment: ["Trekking boots", "Warm layers", "Backpack", "Trekking poles", "Sleeping bag"],
    entryRequirements: ["Valid Nepal visa", "Travel insurance"]
  },
  
  {
    id: "16",
    title: "Langtang Gosaikunda Trek",
    location: "Nepal",
    duration: "10 days",
    rating: 4.8,
    reviewCount: 110,
    price: 900,
    originalPrice: 1000,
    excerpt: "High-altitude trek to sacred Gosaikunda Lake with Langtang mountain views and Tamang culture.",
    description: "Langtang Gosaikunda Trek offers serene alpine lakes, rhododendron forests, glaciers, and traditional Tamang villages. The highlight is the sacred Gosaikunda Lake surrounded by majestic Langtang peaks.",
    image: "/images/langtang_gosaikunda.jpg",
    images: ["/images/langtang_gosaikunda1.jpg", "/images/langtang_gosaikunda2.jpg", "/images/langtang_gosaikunda3.jpg"],
    tags: ["Langtang", "Trekking", "Adventure", "Nepal"],
    highlights: [
      "Gosaikunda Lake and alpine scenery",
      "Langtang Himalayan views",
      "Tamang cultural villages",
      "High-altitude trekking",
      "Peaceful landscapes and forests"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Overnight in Kathmandu." },
      { day: 2, title: "Drive to Dhunche", description: "Start trek from Dhunche." },
      { day: 3, title: "Trek to Lama Hotel", description: "Through forests and villages." },
      { day: 4, title: "Trek to Langtang Village", description: "Reach Langtang village and explore." },
      { day: 5, title: "Trek to Gosaikunda Lake", description: "Ascend to sacred lake." },
      { day: 6, title: "Explore Gosaikunda & Return to Laurebinayak", description: "Enjoy lake views and descend." },
      { day: 7, title: "Trek to Thadepati", description: "Through alpine meadows and forests." },
      { day: 8, title: "Trek to Dhunche", description: "Return trek." },
      { day: 9, title: "Drive to Kathmandu", description: "Back to Kathmandu." },
      { day: 10, title: "Departure from Kathmandu", description: "Fly home." }
    ],
    maxGroupSize: 12,
    cancellationPolicy: "Full refund if canceled 30 days before start date",
    isPopular: true,
    isSoldOut: false,
    difficulty: "moderate to hard",
    maxAltitude: "4,380m (Gosaikunda Lake)",
    requirements: ["Moderate fitness", "High-altitude acclimatization"],
    permits: ["Langtang National Park Permit", "TIMS Card"],
    equipment: ["Trekking boots", "Backpack", "Warm layers", "Sleeping bag", "Trekking poles"],
    entryRequirements: ["Valid Nepal visa", "Travel insurance"]
  },
  {
    id: "17",
    title: "Langtang Gosaikunda Helambu Trek",
    location: "Nepal",
    duration: "12 days",
    rating: 4.8,
    reviewCount: 90,
    price: 950,
    originalPrice: 1050,
    excerpt: "Combination trek connecting Helambu and Langtang Gosaikunda regions, featuring forests, lakes, and Sherpa-Tamang culture.",
    description: "This trek connects Helambu and Gosaikunda regions, offering diverse landscapes from terraced fields to alpine lakes. Trekkers experience cultural villages, monasteries, forests, and panoramic Himalayan views.",
    image: "/images/langtang_gosaikunda_helambu.jpg",
    images: ["/images/langtang_gosaikunda_helambu1.jpg", "/images/langtang_gosaikunda_helambu2.jpg", "/images/langtang_gosaikunda_helambu3.jpg"],
    tags: ["Langtang", "Helambu", "Trekking", "Nepal"],
    highlights: [
      "Helambu and Gosaikunda regions",
      "Tamang and Sherpa culture",
      "Forests, alpine lakes, and monasteries",
      "Panoramic Himalayan views",
      "Diverse trekking experience"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Overnight stay." },
      { day: 2, title: "Drive to Sundarijal & Trek to Chisapani", description: "Start trek through forests." },
      { day: 3, title: "Trek to Pati Bhanjyang", description: "Ascend through Helambu villages." },
      { day: 4, title: "Trek to Melamchi Gaun", description: "Explore Tamang culture." },
      { day: 5, title: "Trek to Thadepati", description: "Through forests and meadows." },
      { day: 6, title: "Trek to Laurebinayak", description: "Approach Langtang region." },
      { day: 7, title: "Trek to Gosaikunda Lake", description: "Reach sacred lake." },
      { day: 8, title: "Explore Gosaikunda & Return to Laurebinayak", description: "Lake exploration." },
      { day: 9, title: "Trek to Thadepati", description: "Return trek through meadows." },
      { day: 10, title: "Trek to Dhunche", description: "Descend towards Dhunche." },
      { day: 11, title: "Drive to Kathmandu", description: "Return to Kathmandu." },
      { day: 12, title: "Departure from Kathmandu", description: "Fly home." }
    ],
    maxGroupSize: 12,
    cancellationPolicy: "Full refund if canceled 30 days before start date",
    isPopular: true,
    isSoldOut: false,
    difficulty: "moderate to hard",
    maxAltitude: "4,380m (Gosaikunda Lake)",
    requirements: ["Moderate fitness", "High-altitude trekking experience"],
    permits: ["Langtang National Park Permit", "TIMS Card"],
    equipment: ["Trekking boots", "Backpack", "Warm layers", "Sleeping bag", "Trekking poles"],
    entryRequirements: ["Valid Nepal visa", "Travel insurance"]
  },
  {
    id: "18",
    title: "Tamang Heritage Trail",
    location: "Nepal",
    duration: "8 days",
    rating: 4.7,
    reviewCount: 75,
    price: 700,
    originalPrice: 800,
    excerpt: "Cultural trek through Tamang villages with panoramic Himalayan views and monasteries.",
    description: "Tamang Heritage Trail offers a cultural experience through traditional Tamang villages, scenic ridges, and monasteries. Trekkers enjoy panoramic views of Langtang and Ganesh Himal ranges while learning local traditions.",
    image: "/images/tamang_heritage.jpg",
    images: ["/images/tamang_heritage1.jpg", "/images/tamang_heritage2.jpg", "/images/tamang_heritage3.jpg"],
    tags: ["Tamang", "Trekking", "Cultural", "Nepal"],
    highlights: [
      "Tamang cultural villages",
      "Monasteries and traditional rituals",
      "Panoramic Langtang and Ganesh Himal views",
      "Moderate trekking experience",
      "Close to Kathmandu"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Overnight stay." },
      { day: 2, title: "Drive to Syabrubesi", description: "Start trek." },
      { day: 3, title: "Trek to Briddhim", description: "Through forests and villages." },
      { day: 4, title: "Trek to Thadepati", description: "Ascend with views of mountains." },
      { day: 5, title: "Trek to Chisapani", description: "Ridge trekking and panoramic views." },
      { day: 6, title: "Trek to Sundarijal", description: "Descend towards Sundarijal." },
      { day: 7, title: "Return to Kathmandu", description: "Drive back to Kathmandu." },
      { day: 8, title: "Departure from Kathmandu", description: "Fly home." }
    ],
    maxGroupSize: 12,
    cancellationPolicy: "Full refund if canceled 30 days before start date",
    isPopular: true,
    isSoldOut: false,
    difficulty: "moderate",
    maxAltitude: "3,030m (Thadepati)",
    requirements: ["Moderate fitness", "Trekking experience"],
    permits: ["Langtang National Park Permit", "TIMS Card"],
    equipment: ["Trekking boots", "Backpack", "Warm layers", "Trekking poles", "Sleeping bag"],
    entryRequirements: ["Valid Nepal visa", "Travel insurance"]
  },
  {
    id: "19",
    title: "Manaslu Circuit with Tsum Valley Trek",
    location: "Nepal",
    duration: "18 days",
    rating: 4.9,
    reviewCount: 60,
    price: 2200,
    originalPrice: 2400,
    excerpt: "Remote trek combining Manaslu Circuit and Tsum Valley with Tibetan culture and high-altitude landscapes.",
    description: "Manaslu Circuit with Tsum Valley offers pristine Tibetan-style villages, monasteries, glaciers, and breathtaking Himalayan views. It is ideal for trekkers seeking adventure off the beaten path.",
    image: "/images/manaslu_tsum.jpg",
    images: ["/images/manaslu_tsum1.jpg", "/images/manaslu_tsum2.jpg", "/images/manaslu_tsum3.jpg"],
    tags: ["Manaslu", "Trekking", "Adventure", "Nepal"],
    highlights: [
      "Manaslu Circuit trek",
      "Tsum Valley Tibetan culture",
      "Glaciers and high passes",
      "Remote and uncrowded trails",
      "Panoramic Himalayan views"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Overnight stay." },
      { day: 2, title: "Drive to Soti Khola", description: "Start trek." },
      { day: 3, title: "Trek to Machha Khola", description: "Through terraced villages." },
      { day: 4, title: "Trek to Jagat", description: "Cross suspension bridges and forests." },
      { day: 5, title: "Trek to Philim (Tsum Valley)", description: "Enter Tsum Valley region." },
      { day: 6, title: "Explore Tsum Valley", description: "Cultural exploration." },
      { day: 7, title: "Trek to Chhekampar", description: "Return to Manaslu Circuit route." },
      { day: 8, title: "Trek to Deng", description: "Continue ascent." },
      { day: 9, title: "Trek to Namrung", description: "High-altitude trek." },
      { day: 10, title: "Trek to Lho", description: "Mountain village exploration." },
      { day: 11, title: "Trek to Samagaun", description: "Panoramic views of Manaslu." },
      { day: 12, title: "Acclimatization in Samagaun", description: "Short hikes." },
      { day: 13, title: "Trek to Manaslu Base Camp", description: "Ascend to base camp." },
      { day: 14, title: "Trek to Samdo", description: "Return trek." },
      { day: 15, title: "Cross Larkya La Pass & Trek to Bimtang", description: "High pass crossing." },
      { day: 16, title: "Trek to Dharapani", description: "Descend through villages." },
      { day: 17, title: "Drive to Kathmandu", description: "Return journey." },
      { day: 18, title: "Departure from Kathmandu", description: "Fly home." }
    ],
    maxGroupSize: 8,
    cancellationPolicy: "Full refund if canceled 60 days before start date",
    isPopular: true,
    isSoldOut: false,
    difficulty: "hard",
    maxAltitude: "5,160m (Larkya La Pass)",
    requirements: ["Excellent fitness", "High-altitude experience", "Acclimatization"],
    permits: ["Manaslu Restricted Area Permit", "TIMS Card"],
    equipment: ["Trekking boots", "Backpack", "Warm layers", "Sleeping bag", "Trekking poles", "Crampons"],
    entryRequirements: ["Valid Nepal visa", "Travel insurance"]
  },
  {
    id: "20",
    title: "Manaslu Circuit Trek without Tsum Valley",
    location: "Nepal",
    duration: "14 days",
    rating: 4.9,
    reviewCount: 65,
    price: 1800,
    originalPrice: 2000,
    excerpt: "Classic Manaslu Circuit trek skipping Tsum Valley, with glaciers, high passes, and Himalayan vistas.",
    description: "Manaslu Circuit Trek offers a challenging adventure with remote trails, high passes, monasteries, and panoramic views of Manaslu, Annapurna, and Ganesh Himal. It is ideal for seasoned trekkers seeking solitude.",
    image: "/images/manaslu_circuit.jpg",
    images: ["/images/manaslu_circuit1.jpg", "/images/manaslu_circuit2.jpg", "/images/manaslu_circuit3.jpg"],
    tags: ["Manaslu", "Trekking", "Adventure", "Nepal"],
    highlights: [
      "Manaslu Circuit trek",
      "High passes and glaciers",
      "Remote trails and monasteries",
      "Stunning Himalayan views",
      "Less crowded adventure"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Overnight stay." },
      { day: 2, title: "Drive to Soti Khola", description: "Start trek." },
      { day: 3, title: "Trek to Machha Khola", description: "Through villages and forests." },
      { day: 4, title: "Trek to Jagat", description: "Continue trek." },
      { day: 5, title: "Trek to Philim", description: "Ascend through villages." },
      { day: 6, title: "Trek to Deng", description: "High-altitude trek." },
      { day: 7, title: "Trek to Namrung", description: "Mountain trails." },
      { day: 8, title: "Trek to Lho", description: "Trekking to highland villages." },
      { day: 9, title: "Trek to Samagaun", description: "Panoramic views of Manaslu." },
      { day: 10, title: "Acclimatization in Samagaun", description: "Short hikes." },
      { day: 11, title: "Trek to Manaslu Base Camp", description: "Ascend to base camp." },
      { day: 12, title: "Trek to Samdo", description: "Return trek." },
      { day: 13, title: "Cross Larkya La Pass & Trek to Bimtang", description: "High pass crossing." },
      { day: 14, title: "Drive to Kathmandu", description: "Return journey and departure." }
    ],
    maxGroupSize: 8,
    cancellationPolicy: "Full refund if canceled 60 days before start date",
    isPopular: true,
    isSoldOut: false,
    difficulty: "hard",
    maxAltitude: "5,160m (Larkya La Pass)",
    requirements: ["Excellent fitness", "High-altitude trekking experience", "Acclimatization"],
    permits: ["Manaslu Restricted Area Permit", "TIMS Card"],
    equipment: ["Trekking boots", "Backpack", "Warm layers", "Sleeping bag", "Trekking poles", "Crampons"],
    entryRequirements: ["Valid Nepal visa", "Travel insurance"]
  },
  {
    id: "21",
    title: "Rupina La Trek",
    location: "Nepal",
    duration: "8 days",
    rating: 4.8,
    reviewCount: 85,
    price: 950,
    originalPrice: 1050,
    excerpt: "Remote trek in Langtang region leading to Rupina La Pass with alpine landscapes and mountain vistas.",
    description: "Rupina La Trek is a moderate trek crossing Rupina La Pass, offering alpine meadows, high-altitude lakes, glaciers, and panoramic views of Langtang, Ganesh Himal, and Manaslu. Less crowded and culturally rich.",
    image: "/images/rupina_la.jpg",
    images: ["/images/rupina_la1.jpg", "/images/rupina_la2.jpg", "/images/rupina_la3.jpg"],
    tags: ["Langtang", "Trekking", "Adventure", "Nepal"],
    highlights: [
      "Rupina La Pass",
      "Alpine meadows and lakes",
      "High-altitude trekking",
      "Panoramic mountain views",
      "Remote and uncrowded trails"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Overnight stay." },
      { day: 2, title: "Drive to Dhunche", description: "Start trek from Dhunche." },
      { day: 3, title: "Trek to Thadepati", description: "Ascend through forests and villages." },
      { day: 4, title: "Trek to Shamou", description: "Mountain trail to Shamou." },
      { day: 5, title: "Cross Rupina La Pass & Trek to Lauribinayak", description: "High pass adventure." },
      { day: 6, title: "Trek to Dhunche", description: "Descend back." },
      { day: 7, title: "Drive to Kathmandu", description: "Return journey." },
      { day: 8, title: "Departure from Kathmandu", description: "Fly home." }
    ],
    maxGroupSize: 12,
    cancellationPolicy: "Full refund if canceled 30 days before start date",
    isPopular: true,
    isSoldOut: false,
    difficulty: "moderate to hard",
    maxAltitude: "4,600m (Rupina La Pass)",
    requirements: ["Moderate fitness", "High-altitude trekking experience"],
    permits: ["Langtang National Park Permit", "TIMS Card"],
    equipment: ["Trekking boots", "Backpack", "Warm layers", "Sleeping bag", "Trekking poles"],
    entryRequirements: ["Valid Nepal visa", "Travel insurance"]
  }
];
export default function HomePage() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTourSelect = (tour: Tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const handleBookNow = (tour: Tour) => {
    console.log("Booking tour:", tour.title);
    // You can add booking logic here or open a booking modal
  };

  return (
    <main className="min-h-screen">
      <Hero 
        title="Nepal Trekking Adventures"
        description="Experience the ultimate Himalayan adventure with our comprehensive trekking options. From gentle cultural walks to challenging high-altitude treks and peak climbing expeditions, we offer guided experiences for every level of adventurer in Nepal's most spectacular mountain regions."
      />
      
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <ToursGrid
            tours={MOCK_TOURS}
            onTourSelect={handleTourSelect}
          />
        </div>
      </section>

      {/* Additional sections can be added here */}
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