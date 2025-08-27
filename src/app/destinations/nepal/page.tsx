"use client"

import { useState } from "react"
import Hero from "@/components/destinations/hero"
import Notifications from "@/components/destinations/notifications"
import ThemeProvider from "@/components/destinations/themeProvider"
import ToursGrid from "@/components/destinations/tourGrid"
import TourDetailModal from "@/components/destinations/tourdetail"
import { Tour } from "@/types/tour"

// Sample treks for Nepal
const nepalTreks: Tour[] = [
  {
    id: "1",
    title: "Everest Base Camp Trek",
    location: "Nepal",
    duration: "14 days",
    rating: 4.9,
    reviewCount: 120,
    price: 1800,
    originalPrice: 2000,
    excerpt: "Trek to the base of the world’s highest mountain and experience Sherpa culture.",
    description: "Mount Everest, also called Sagarmatha or Chomolungma, offers breathtaking scenery, Himalayan landscapes, blooming rhododendron forests, yak caravans, and majestic snow-capped peaks. The trek covers beautiful villages, monasteries, and festivals, offering a complete cultural and adventurous experience.",
    image: "/images/everest.jpg",
    images: ["/images/everest1.jpg", "/images/everest2.jpg", "/images/everest3.jpg"],
    tags: ["Everest", "Trekking", "Adventure", "Nepal"],
    highlights: [
      "Astounding Himalayan trails",
      "Exploring the ethereal mountain monasteries",
      "Exquisite Himalayan landscape",
      "Unearth local legends about Everest, climbers, artists, and the elusive yeti",
      "Unique cultural encounters",
      "Astonishing traditional lifestyle"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Arrive at Kathmandu and transfer to hotel." },
      { day: 2, title: "Fly to Lukla & Trek to Phakding", description: "Fly to Lukla (2,850m) and start trek to Phakding." },
      { day: 3, title: "Trek to Namche Bazaar", description: "Trek through Sherpa villages to Namche Bazaar." },
      { day: 4, title: "Acclimatization in Namche", description: "Acclimatization hike and explore Namche Bazaar." },
      { day: 5, title: "Trek to Tengboche", description: "Trek through pine and rhododendron forests to Tengboche Monastery." },
      { day: 6, title: "Trek to Dingboche", description: "Cross beautiful landscapes and reach Dingboche." },
      { day: 7, title: "Acclimatization in Dingboche", description: "Short hikes for acclimatization and rest." },
      { day: 8, title: "Trek to Lobuche", description: "Continue trekking through Khumbu region to Lobuche." },
      { day: 9, title: "Trek to Everest Base Camp", description: "Reach Everest Base Camp and enjoy mountain views." },
      { day: 10, title: "Return to Gorak Shep & Kala Patthar", description: "Climb Kala Patthar for sunrise views and descend to Gorak Shep." },
      { day: 11, title: "Trek to Pheriche", description: "Begin return trek to Pheriche." },
      { day: 12, title: "Trek to Namche Bazaar", description: "Continue trek back to Namche Bazaar." },
      { day: 13, title: "Trek to Lukla", description: "Return trek to Lukla." },
      { day: 14, title: "Fly to Kathmandu", description: "Fly back to Kathmandu and depart." }
    ],
    maxGroupSize: 10,
    cancellationPolicy: "Full refund if canceled 45 days before start date",
    isPopular: true,
    isSoldOut: false,
    difficulty: "hard",
    maxAltitude: "5,545m (Everest Base Camp)",
    requirements: [
      "Good physical fitness",
      "Ability to walk long distances at high altitude",
      "Acclimatization for altitude sickness"
    ],
    permits: ["Sagarmatha National Park Permit", "Khumbu Pasang Lhamu Rural Municipality Permit", "TIMS Card"],
    equipment: [
      "Trekking boots",
      "Sleeping bag",
      "Warm clothing layers",
      "Trekking poles",
      "Backpack"
    ],
    entryRequirements: [
      "Valid Nepal visa",
      "Travel insurance including high-altitude coverage",
      "COVID-19 regulations compliance"
    ]
  },
  {
    id: "2",
    title: "Langtang Valley Trek",
    location: "Nepal",
    duration: "7 days",
    rating: 4.8,
    reviewCount: 80,
    price: 900,
    originalPrice: 1000,
    excerpt: "Trek through the beautiful Langtang Valley with Himalayan scenery and cultural diversity.",
    description: "Langtang Valley Trek offers a moderate to challenging trekking experience, exploring lush forests, alpine meadows, glacial cliffs, and traditional Tibetan-influenced villages. Discover local culture, Buddhist monasteries, and the biodiversity of Langtang National Park, including red pandas and Himalayan Tahr.",
    image: "/images/langtang.jpg",
    images: ["/images/langtang1.jpg", "/images/langtang2.jpg", "/images/langtang3.jpg"],
    tags: ["Langtang", "Trekking", "Nepal", "Adventure"],
    highlights: [
      "Explore hilltop views from Kyangjing",
      "Visit traditional stone houses and wooden porches",
      "Discover Langtang National Park biodiversity",
      "Experience local Tamang, Yolmo, and Bhotia cultures",
      "Trek alpine meadows and glacial cliffs",
      "Attend Goshaikunda festival (August)"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Arrive in Kathmandu and transfer to hotel." },
      { day: 2, title: "Drive to Dhunche & Trek to Lama Hotel", description: "Drive 8 hours to Dhunche (122 km) and start trekking to Lama Hotel." },
      { day: 3, title: "Trek to Langtang Village", description: "Trek through forests and hills to reach Langtang Village." },
      { day: 4, title: "Trek to Kyangjing", description: "Continue trek to Kyangjing with hilltop views and alpine meadows." },
      { day: 5, title: "Explore Kyangjing Valley", description: "Hike locally, visit monasteries, and enjoy panoramic views." },
      { day: 6, title: "Trek back to Lama Hotel", description: "Return trek through forests and villages." },
      { day: 7, title: "Drive back to Kathmandu", description: "Drive back from Dhunche to Kathmandu and depart." }
    ],
    maxGroupSize: 12,
    cancellationPolicy: "Full refund if canceled 30 days before start date",
    isPopular: true,
    isSoldOut: false,
    difficulty: "moderate",
    maxAltitude: "4,600m (Kyangjing Valley)",
    requirements: [
      "Good physical fitness",
      "Ability to walk long distances over uneven terrain",
      "Acclimatization for higher elevations"
    ],
    permits: ["Langtang National Park Permit", "TIMS Card"],
    equipment: [
      "Trekking boots",
      "Warm clothing layers",
      "Sleeping bag",
      "Trekking poles",
      "Backpack"
    ],
    entryRequirements: [
      "Valid Nepal visa",
      "Travel insurance including high-altitude coverage",
      "COVID-19 regulations compliance"
    ]
  },
  {
  id: "104",
  title: "Manaslu Circuit Trek",
  location: "Nepal",
  duration: "16 days",
  rating: 4.9,
  reviewCount: 95,
  price: 2000,
  originalPrice: 2200,
  excerpt: "Experience the untouched beauty of Manaslu Region, with Himalayan views, Tibetan villages, and high passes.",
  description: "The Manaslu Circuit Trek offers breathtaking views of the Manaslu Massif, diverse ethnic cultures, pine and rhododendron forests, alpine meadows, and traditional Tibetan-Gurung villages. The trek crosses the challenging Larkya La Pass (5,250 m) and provides a unique insight into remote Himalayan life along the Budhi Gandaki River.",
  image: "/images/manaslu.jpg",
  images: ["/images/manaslu1.jpg", "/images/manaslu2.jpg", "/images/manaslu3.jpg"],
  tags: ["Manaslu", "Trekking", "Adventure", "Nepal"],
  highlights: [
    "Spectacular views of Manaslu Massif and Himalchuli",
    "Crossing Larkya La Pass (5,250 m)",
    "Explore Tibetan-Gurung villages like Sama Gaon and Samdo",
    "Walk through pine and rhododendron forests",
    "Experience alpine meadows at Shala and Bhimthang",
    "Hot springs and rice terraces along the trail"
  ],
  includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
  excludes: ["Flights", "Personal expenses", "Travel insurance"],
  included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
  excluded: ["Flights", "Personal expenses", "Travel insurance"],
  itinerary: [
    { day: 1, title: "Arrival in Kathmandu", description: "Arrive in Kathmandu and transfer to hotel." },
    { day: 2, title: "Drive to Soti Khola", description: "Start trek from historical Gorkha Durbar and walk to Soti Khola." },
    { day: 3, title: "Trek to Machha Khola", description: "Follow Budhi Gandaki River through Brahmin-Chhetri villages." },
    { day: 4, title: "Trek to Jagat", description: "Pass waterfalls, forests, and reach Jagat with hot springs." },
    { day: 5, title: "Trek to Deng", description: "Trek through pine forests and small villages." },
    { day: 6, title: "Trek to Namrung", description: "Enter Tibetan-Gurung villages, admire Mani walls." },
    { day: 7, title: "Trek to Samdo", description: "Reach high-altitude village Samdo with traditional Tibetan architecture." },
    { day: 8, title: "Acclimatization & Hike to Larkya Base Camp", description: "Prepare for Larkya La Pass." },
    { day: 9, title: "Cross Larkya La Pass (5,250 m)", description: "Challenging pass crossing with stunning mountain views." },
    { day: 10, title: "Descend to Bhimthang", description: "Rest at alpine meadow and enjoy tranquil surroundings." },
    { day: 11, title: "Trek to Tilije", description: "Walk through Gurung village of Tilije." },
    { day: 12, title: "Trek to Tal", description: "Enjoy waterfalls and peaceful village scenery." },
    { day: 13, title: "Trek to Dharapani", description: "Walk through forests and small villages." },
    { day: 14, title: "Trek to Beshishahar", description: "Descend through rice terraces to Beshishahar." },
    { day: 15, title: "Drive to Kathmandu", description: "Return drive to Kathmandu." },
    { day: 16, title: "Departure", description: "Transfer to airport for departure." }
  ],
  maxGroupSize: 10,
  cancellationPolicy: "Full refund if canceled 45 days before start date",
  isPopular: true,
  isSoldOut: false,
  difficulty: "hard",
  maxAltitude: "5,250m (Larkya La Pass)",
  requirements: [
    "Good physical fitness",
    "Ability to trek at high altitudes",
    "Acclimatization for altitude sickness",
    "Experience with long-day trekking recommended"
  ],
  permits: ["Manaslu Conservation Area Permit", "TIMS Card"],
  equipment: [
    "Trekking boots",
    "Sleeping bag",
    "Warm layered clothing",
    "Trekking poles",
    "Backpack",
    "Waterproof jacket"
  ],
  entryRequirements: [
    "Valid Nepal visa",
    "Passport",
    "Travel insurance including high-altitude coverage",
    "COVID-19 regulations compliance"
  ]
},

{
  id: "105",
  title: "Annapurna Base Camp Trek (6 Days)",
  location: "Nepal",
  duration: "6 days",
  rating: 4.8,
  reviewCount: 120,
  price: 900,
  originalPrice: 1100,
  excerpt: "Experience the Annapurna Sanctuary in a short 6-day trek with breathtaking views, Gurung villages, and rhododendron forests.",
  description: "The 6-day Annapurna Base Camp Trek offers a condensed yet unforgettable journey through the Annapurna Sanctuary. Trek from Pokhara to the base camp, passing through charming Gurung villages, rhododendron forests, and terraced fields. Enjoy sunrise from Poon Hill and relax in hot springs at Jhinu.",
  image: "/images/annapurna.jpg",
  images: ["/images/annapurna1.jpg", "/images/annapurna2.jpg", "/images/annapurna3.jpg"],
  tags: ["Annapurna", "Trekking", "Adventure", "Nepal"],
  highlights: [
    "360-degree mountain views from Annapurna Sanctuary",
    "Sunrise from Poon Hill",
    "Gurkha and Gurung culture in villages like Ghandruk and Landruk",
    "Modi Khola trail with waterfalls and forests",
    "Hot springs at Jhinu",
    "Pokhara Valley and Phewa Lake sightseeing"
  ],
  includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
  excludes: ["Flights", "Personal expenses", "Travel insurance"],
  included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
  excluded: ["Flights", "Personal expenses", "Travel insurance"],
  itinerary: [
    { day: 1, title: "Drive to Nayapul & Trek to Tikhedhunga", description: "Drive from Pokhara to Nayapul and trek 4–5 hours to Tikhedhunga (1,575 m)." },
    { day: 2, title: "Trek to Ghorepani & Poon Hill Sunrise", description: "Trek 6–7 hours to Ghorepani (2,840 m), early morning hike to Poon Hill (3,210 m) for sunrise." },
    { day: 3, title: "Trek to Chhomrong", description: "Trek 5–6 hours through forests and Gurung villages to Chhomrong (2,140 m)." },
    { day: 4, title: "Trek to Annapurna Base Camp", description: "Trek 5–6 hours to ABC (4,130 m) passing Modi Khola and rhododendron forests." },
    { day: 5, title: "Trek to Jhinu Hot Springs", description: "Descend 6–7 hours to Jhinu (1,780 m) and relax in the hot springs." },
    { day: 6, title: "Trek to Nayapul & Drive to Pokhara", description: "Trek 5 hours to Nayapul, then drive 1 hour back to Pokhara and transfer to hotel or airport." }
  ],
  maxGroupSize: 12,
  cancellationPolicy: "Full refund if canceled 30 days before start date",
  isPopular: true,
  isSoldOut: false,
  difficulty: "moderate",
  maxAltitude: "4,130 m (Annapurna Base Camp)",
  requirements: [
    "Moderate physical fitness",
    "Ability to walk 4–7 hours per day",
    "Acclimatization for higher altitudes"
  ],
  permits: ["Annapurna Conservation Area Permit (ACAP)", "TIMS Card"],
  equipment: [
    "Trekking boots",
    "Sleeping bag",
    "Warm layered clothing",
    "Trekking poles",
    "Backpack",
    "Waterproof jacket"
  ],
  entryRequirements: [
    "Valid Nepal visa",
    "Travel insurance including high-altitude coverage",
    "COVID-19 regulations compliance"
  ]
}




  // ...add other treks here similarly with included/excluded arrays
]

// Sample tours (non-trek adventures)
const nepalTours: Tour[] = [
  {
    id: "201",
    title: "Kathmandu Free Walking Tour",
    location: "Kathmandu, Nepal",
    duration: "1 day",
    rating: 4.5,
    reviewCount: 85,
    price: 0,
    originalPrice: 0,
    excerpt: "Explore the cultural and historical highlights of Kathmandu on a guided walking tour.",
    description: "Discover the rich history, vibrant culture, and UNESCO World Heritage Sites of Kathmandu on this free walking tour. Visit ancient temples, bustling streets, traditional markets, and local neighborhoods with a knowledgeable guide. Perfect for travelers who want an immersive city experience in just one day.",
    image: "/images/kathmandu-walking.jpg",
    images: ["/images/kathmandu1.jpg", "/images/kathmandu2.jpg"],
    tags: ["Kathmandu", "Walking Tour", "Culture", "History", "Free Tour"],
    highlights: [
      "UNESCO World Heritage Sites including Durbar Square",
      "Traditional markets and local neighborhoods",
      "Temples, shrines, and historic landmarks",
      "Experience Kathmandu’s vibrant culture and street life",
      "Learn about local traditions and lifestyle from a knowledgeable guide"
    ],
    includes: ["Guided tour", "Local insights"],  // optional, can keep for clarity
    excludes: ["Food and drinks", "Personal expenses", "Transport to starting point"], // optional
    included: ["Guided tour", "Local insights"], // required by Tour type
    excluded: ["Food and drinks", "Personal expenses", "Transport to starting point"], // required
    itinerary: [
      {
        day: 1,
        title: "Kathmandu Free Walking Tour",
        description: "Meet at the starting point in Kathmandu, visit Durbar Square, local temples, markets, and streets. Explore the culture and history of Kathmandu with a local guide. End at a central landmark or local café."
      }
    ],
    maxGroupSize: 20,
    cancellationPolicy: "Full refund if canceled 24 hours before start time",
    isPopular: true,
    isSoldOut: false
  },

  {
  id: "202",
  title: "Kathmandu Valley Tour",
  location: "Kathmandu, Nepal",
  duration: "4 days",
  rating: 4.8,
  reviewCount: 120,
  price: 450,
  originalPrice: 500,
  excerpt: "Explore the cultural and historical wonders of Kathmandu Valley over four immersive days.",
  description: "Dive deep into the heart of Kathmandu Valley on this 4-day tour. Visit UNESCO World Heritage Sites such as Patan Durbar Square, Bhaktapur, Pashupatinath, Boudhanath, and Swayambhunath. Enjoy local cuisine, vibrant markets, and traditional neighborhoods with expert guides.",
  image: "/images/kathmandu-valley.jpg",
  images: ["/images/patan.jpg", "/images/bhaktapur.jpg", "/images/swayambhunath.jpg"],
  tags: ["Kathmandu", "Valley", "Culture", "History", "Heritage Tour"],
  highlights: [
    "UNESCO World Heritage Sites across Kathmandu Valley",
    "Traditional markets and handicraft shops",
    "Temples, palaces, and historic landmarks",
    "Local cultural experiences and cuisine",
    "Guided tours with expert local guides"
  ],
  includes: ["Guided tours", "Accommodation", "Breakfast"],
  excludes: ["Lunch and dinner", "Personal expenses", "Transport to starting point"],
  included: ["Guided tours", "Accommodation", "Breakfast"],
  excluded: ["Lunch and dinner", "Personal expenses", "Transport to starting point"],
  itinerary: [
    {
      day: 1,
      title: "Arrival and Kathmandu City Tour",
      description: "Arrival in Kathmandu, check-in at hotel, explore Durbar Square, local markets, and Thamel area."
    },
    {
      day: 2,
      title: "Patan and Bhaktapur",
      description: "Visit Patan Durbar Square, Krishna Temple, Bhaktapur Durbar Square, Nyatapola Temple, and local artisan workshops."
    },
    {
      day: 3,
      title: "Temples and Cultural Highlights",
      description: "Explore Pashupatinath Temple, Boudhanath Stupa, Swayambhunath (Monkey Temple), and traditional neighborhoods."
    },
    {
      day: 4,
      title: "Departure",
      description: "Relaxed morning, optional shopping, and transfer to airport or next destination."
    }
  ],
  maxGroupSize: 15,
  cancellationPolicy: "Full refund if canceled 48 hours before start time",
  isPopular: true,
  isSoldOut: false
},

{
  id: "203",
  title: "Kathmandu to Pokhara Tour",
  location: "Kathmandu & Pokhara, Nepal",
  duration: "7 days",
  rating: 4.9,
  reviewCount: 200,
  price: 850,
  originalPrice: 950,
  excerpt: "Experience the best of Nepal from the cultural heart of Kathmandu to the scenic beauty of Pokhara over seven days.",
  description: "This 7-day tour combines cultural exploration in Kathmandu with natural beauty in Pokhara. Visit UNESCO sites, historic temples, and bustling markets, then travel to Pokhara to see Phewa Lake, Sarangkot sunrise, waterfalls, caves, and adventure activities.",
  image: "/images/kathmandu-pokhara.jpg",
  images: ["/images/pokhara-lake.jpg", "/images/sarangkot.jpg", "/images/davis-fall.jpg"],
  tags: ["Kathmandu", "Pokhara", "Culture", "Adventure", "Nature"],
  highlights: [
    "UNESCO World Heritage Sites in Kathmandu",
    "Scenic landscapes, lakes, and mountains in Pokhara",
    "Cultural immersion and local experiences",
    "Adventure activities in Pokhara",
    "Expert local guides throughout the journey"
  ],
  includes: ["Guided tours", "Accommodation", "Breakfast", "Transport Kathmandu–Pokhara"],
  excludes: ["Lunch and dinner", "Personal expenses", "Optional activities"],
  included: ["Guided tours", "Accommodation", "Breakfast", "Transport Kathmandu–Pokhara"],
  excluded: ["Lunch and dinner", "Personal expenses", "Optional activities"],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Kathmandu",
      description: "Arrival in Kathmandu, check-in, explore Thamel and local markets."
    },
    {
      day: 2,
      title: "Kathmandu City Tour",
      description: "Visit Durbar Square, Swayambhunath, Boudhanath, and Pashupatinath Temple."
    },
    {
      day: 3,
      title: "Patan and Bhaktapur",
      description: "Explore Patan Durbar Square, Bhaktapur, and local artisan workshops."
    },
    {
      day: 4,
      title: "Travel to Pokhara",
      description: "Drive or fly to Pokhara, check-in at hotel, relax at Phewa Lake, and explore lakeside."
    },
    {
      day: 5,
      title: "Pokhara Sightseeing",
      description: "Visit Sarangkot for sunrise, Devi's Fall, Gupteshwor Cave, and Tibetan refugee camp."
    },
    {
      day: 6,
      title: "Adventure and Leisure",
      description: "Optional adventure activities like paragliding, boating on Phewa Lake, or hiking in nearby hills."
    },
    {
      day: 7,
      title: "Departure",
      description: "Return to Kathmandu or transfer to airport for onward journey."
    }
  ],
  maxGroupSize: 12,
  cancellationPolicy: "Full refund if canceled 72 hours before start time",
  isPopular: true,
  isSoldOut: false
}

];



 

  // ...add other tours similarly with included/excluded arrays


export default function Page() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleTourSelect = (tour: Tour) => {
    setSelectedTour(tour)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedTour(null)
  }

  return (
    <ThemeProvider>
      <Notifications showTestToast={true} />

      {/* Hero Section */}
      <Hero
        title="Explore Nepal's Incredible Landscapes, Heritage and History"
        description="From high Himalayan treks to exotic wildlife safaris, discover the best experiences Nepal has to offer."
        backgroundImage="/images/hero-nepal.jpg"
      />

      {/* Treks Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Popular Treks in Nepal</h2>
        <ToursGrid
          tours={nepalTreks}
          onTourSelect={handleTourSelect}
        />
        <div className="flex justify-center mt-6">
          <a
            href="/services/trekking"
            className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary-dark transition"
          >
            Explore More Treks
          </a>
        </div>
      </section>

      {/* Tours Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-center">Exciting Tours in Nepal</h2>
        <ToursGrid
          tours={nepalTours}
          onTourSelect={handleTourSelect}
        />
        <div className="flex justify-center mt-6">
          <a
            href="/services/package-sightseeing-tours"
            className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary-dark transition"
          >
            Explore More Tours
          </a>
        </div>
      </section>

      {/* Tour Detail Modal */}
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
