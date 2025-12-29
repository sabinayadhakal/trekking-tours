"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/destinations/hero"
import ThemeProvider from "@/components/destinations/themeProvider"
import ToursGrid from "@/components/destinations/tourGrid"
import TourDetailModal from "@/components/destinations/tourdetail"
import { Tour } from "@/types/tour"

export default function BhutanPage() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tours, setTours] = useState<Tour[]>([])
  const [loading, setLoading] = useState(true)

  // Mock Bhutan tours data
  const mockBhutanTours: Tour[] = 
    [
  {
  "id": "B1",
  "title": "Delightful Bhutan Tour",
  "location": "Thimpu, Punakha, Paro",
  "duration": "5 Days",
  "rating": 4.9,
  "reviewCount": 42,
  "price": 1850,
  "originalPrice": 1999,
  "excerpt": "A comprehensive cultural, historical, and spiritual journey through Bhutan's heartlands",
  "description": "This thoughtfully designed program merges cultural immersion, historical exploration, and spiritual discovery across Bhutan's most iconic valleys. Experience ancient temples, majestic dzongs, breathtaking mountain passes, and the legendary Tiger's Nest Monastery.",
  "image": "/images/bhutan_tours-1.jpg",
  "images": [
    "/images/bhutan_tours-1.jpg",
    "/images/bhutan_tours-2.jpg",
    "/images/bhutan_tours-3.jpg"

  ],
  "tags": ["Cultural", "Historical", "Spiritual", "Hiking", "Comprehensive"],
  "highlights": [
    "Fly from Kathmandu to Paro with stunning Himalayan views",
    "Explore Thimpu, Punakha, and Paro valleys",
    "Hike to Tiger's Nest Monastery (Taktsang)",
    "Cross Dochula Pass (3,200m) with mountain views",
    "Experience Bhutanese culture and daily life",
    "Visit Punakha Dzong - masterpiece of Bhutanese architecture",
    "See traditional Archery Sports"
  ],
  "includes": [
    "All necessary travel permits",
    "English speaking Bhutanese Guide",
    "Transportation as per group size",
    "Accommodation on twin sharing basis",
    "All entrance fees to monasteries & historical sites",
    "Full board meals during the tour"
  ],
  "excludes": [
    "Travel Insurance",
    "Nepal re-entry visa fee",
    "Personal expenses (drinks, telephone, bar bills, laundry)",
    "Tips for guide and driver",
    "Any cost not mentioned in includes section"
  ],
  "included": [
    "All necessary travel permits",
    "English speaking Bhutanese Guide",
    "Transportation as per group size",
    "Accommodation on twin sharing basis",
    "All entrance fees to monasteries & historical sites",
    "Full board meals during the tour"
  ],
  "excluded": [
    "Travel Insurance",
    "Nepal re-entry visa fee",
    "Personal expenses (drinks, telephone, bar bills, laundry)",
    "Tips for guide and driver",
    "Any cost not mentioned in includes section"
  ],
  "entryRequirements": ["Valid passport", "Bhutan visa"],
  "requirements": ["Moderate fitness level", "Comfortable hiking shoes", "Layered clothing"],
  "itinerary": [
    { "day": 1, "title": "Arrival at Paro, transfer to Thimpu", "description": "Arrive at Paro airport, drive to Thimpu (1.5 hrs). Visit Memorial Temple (built in memory of 3rd King), Changangkha Lhakhang (oldest temple), and the newly built Buddha statue. Overnight in Thimpu." },
    { "day": 2, "title": "Thimpu to Punakha via Dochula Pass", "description": "Morning visits to Traditional Handmade Paper Mill, School of Arts and Crafts, Folk Heritage Museum, National Library, Traditional Institute of Medicine, and Zilukha Nunnery. Drive to Punakha through Dochula Pass (3,200m) - enjoy mountain views if clear. Walk around 108 stupas. Visit Chimi Lhakhang (Temple of Fertility). Overnight in Punakha." },
    { "day": 3, "title": "Punakha sightseeing & drive to Paro", "description": "Visit Punakha Dzong showcasing Bhutanese rich art and architecture. Witness traditional Archery Sports. Drive back to Paro (3 hrs). Paro sightseeing. Overnight in Paro." },
    { "day": 4, "title": "Hike to Tiger's Nest Monastery", "description": "Full day hike to Taktsang (Tiger's Nest), Bhutan's most revered monastery, situated on a granite cliff with spiritual and adventurous significance. Enjoy valley views. Overnight in Paro." },
    { "day": 5, "title": "Departure", "description": "Transfer to Paro Airport for departure." }
  ],
  "maxGroupSize": 12,
  "cancellationPolicy": "Full refund up to 14 days before arrival. 50% refund between 7-14 days. No refund within 7 days.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "Moderate",
  "maxAltitude": "3,200m (Dochula Pass)",
  "permits": ["Bhutan visa", "Tourism Council of Bhutan permit"],
  "equipment": ["Comfortable hiking shoes", "Daypack", "Water bottle", "Camera", "Layered clothing", "Sun protection"]
},

  {
  "id": "B2",
  "title": "Tiger's Nest Monastery Day Hike",
  "location": "Paro",
  "duration": "1 Day",
  "rating": 5.0,
  "reviewCount": 56,
  "price": 299,
  "originalPrice": 349,
  "excerpt": "A spiritual journey to Bhutan's most sacred monastery perched on a cliff",
  "description": "Experience the sheer joy and spiritual satisfaction of hiking to the legendary Taktsang (Tiger's Nest) Monastery. This sacred pilgrimage site offers breathtaking views, mystical atmosphere, and profound spiritual connection. Perched dramatically on a granite cliff, the monastery is believed to be the birthplace of Buddhism in Bhutan, where Guru Padmasambhava meditated for 3 years, 3 months, and 3 days.",
  "image":     "/images/bhutan_tours-4.jpg",

  "images": [
    "/images/bhutan_tours-4.jpg",
     "/images/bhutan_tours-5.jpg",
  
  ],
  "tags": ["Spiritual", "Hiking", "Pilgrimage", "Day Trip", "Sacred Site"],
  "highlights": [
    "Hike to the sacred Taktsang Monastery",
    "Walk through beautiful pine forests",
    "Pass by prayer wheels and prayer flags",
    "Enjoy lunch at the mountain cafeteria",
    "Stunning views of Paro Valley",
    "See the waterfall cascading into sacred pool",
    "Visit the meditation cave of Guru Rinpoche"
  ],
  "includes": [
    "All necessary travel permits",
    "English speaking Bhutanese Guide",
    "Transportation to/from hike base",
    "Lunch at mountain cafeteria",
    "Entrance fees to monastery",
    "Bottled water and snacks"
  ],
  "excludes": [
    "Travel Insurance",
    "Horse riding fees (optional)",
    "Personal expenses (drinks, telephone, souvenirs)",
    "Tips for guide and driver",
    "Hotel accommodation",
    "Any cost not mentioned in includes section"
  ],
  "included": [
    "All necessary travel permits",
    "English speaking Bhutanese Guide",
    "Transportation to/from hike base",
    "Lunch at mountain cafeteria",
    "Entrance fees to monastery",
    "Bottled water and snacks"
  ],
  "excluded": [
    "Travel Insurance",
    "Horse riding fees (optional)",
    "Personal expenses (drinks, telephone, souvenirs)",
    "Tips for guide and driver",
    "Hotel accommodation",
    "Any cost not mentioned in includes section"
  ],
  "entryRequirements": ["Valid passport", "Bhutan visa"],
  "requirements": ["Moderate fitness level", "Hiking shoes", "Respectful clothing for monastery"],
  "itinerary": [
    {
      "day": 1,
      "title": "Tiger's Nest Monastery Hike",
      "description": "Morning drive to the hike base. Begin the 2-hour hike through pine forests marked by prayer flags and prayer wheels. Optional horse riding available for part of the way. Stop for lunch at the mountain cafeteria with stunning valley views. Continue to the monastery complex, visit the sacred cave where Guru Padmasambhava meditated, explore the various temples and statues. Experience the mystical atmosphere of this sacred site. Descend back to base and return to hotel."
    }
  ],
  "maxGroupSize": 8,
  "cancellationPolicy": "Full refund up to 48 hours before hike. No refund within 48 hours.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "Moderate to Challenging",
  "maxAltitude": "3,120m",
  "permits": ["Bhutan visa", "Monastery entry permit"],
  "equipment": ["Sturdy hiking shoes", "Daypack", "Water bottle", "Camera", "Layered clothing", "Sun protection", "Rain jacket"]
},

  {
  "id": "B3",
  "title": "Short and Sweet Bhutan Express",
  "location": "Paro, Thimpu",
  "duration": "3 Days",
  "rating": 4.7,
  "reviewCount": 38,
  "price": 899,
  "originalPrice": 999,
  "excerpt": "A perfect quick getaway to experience Bhutan's highlights when time is limited",
  "description": "Designed for travelers with very limited time who want to explore Bhutan's essence. This compact tour begins with a scenic mountain flight from Kathmandu to Paro, offering breathtaking Himalayan views. Experience Bhutan's spiritual heart with visits to sacred monasteries and dzongs, including the iconic Tiger's Nest Monastery hike. Perfect for those who want to capture Bhutan's magic in a short span.",
  "image":  "/images/bhutan_tours-6.jpg",
  "images": [
    "/images/bhutan_tours-6.jpg",
    "/images/bhutan_tours-7.jpg",
    "/images/bhutan_tours-8.jpg",
  ],
  "tags": ["Express Tour", "Short Trip", "Mountain Flight", "Cultural", "Spiritual"],
  "highlights": [
    "Scenic mountain flight from Kathmandu to Paro over Himalayas",
    "Visit Rinpung Dzong and Kichu Lhakhang (7th century temple)",
    "Hike to Taktsang Monastery (Tiger's Nest) at 9,678 feet",
    "Explore Thimpu - Bhutan's capital city",
    "Witness traditional Archery sports",
    "Experience Bhutanese hospitality and culture"
  ],
  "includes": [
    "Kathmandu-Paro-Kathmandu flight tickets",
    "All necessary travel permits",
    "English speaking Bhutanese Guide",
    "Transportation as per group size",
    "Accommodation on twin sharing basis",
    "All entrance fees to monasteries and dzongs",
    "Full board meals during the tour"
  ],
  "excludes": [
    "Travel Insurance",
    "Nepal re-entry visa fee",
    "Personal expenses (drinks, telephone, bar bills, laundry)",
    "Tips for guide and driver",
    "Kathmandu hotel accommodation",
    "Any cost not mentioned in includes section"
  ],
  "included": [
    "Kathmandu-Paro-Kathmandu flight tickets",
    "All necessary travel permits",
    "English speaking Bhutanese Guide",
    "Transportation as per group size",
    "Accommodation on twin sharing basis",
    "All entrance fees to monasteries and dzongs",
    "Full board meals during the tour"
  ],
  "excluded": [
    "Travel Insurance",
    "Nepal re-entry visa fee",
    "Personal expenses (drinks, telephone, bar bills, laundry)",
    "Tips for guide and driver",
    "Kathmandu hotel accommodation",
    "Any cost not mentioned in includes section"
  ],
  "entryRequirements": ["Valid passport", "Bhutan visa", "Nepal visa for re-entry"],
  "requirements": ["Moderate fitness for hiking", "Comfortable walking shoes", "Passport copies"],
  "itinerary": [
    {
      "day": 1,
      "title": "Fly Kathmandu to Paro, Explore Paro",
      "description": "Morning scenic flight from Kathmandu (1 hour) with breathtaking views of Himalayas including Everest, Kanchenjunga, and Bhutanese foothills. Upon arrival at Paro Airport, meet your Bhutanese guide and transfer to hotel. If time permits, visit Rinpung Dzong (fortress monastery) and Kichu Lhakhang - one of Bhutan's oldest temples from 7th century. Evening at leisure to acclimatize. Overnight in Paro."
    },
    {
      "day": 2,
      "title": "Tiger's Nest Hike & Thimpu Exploration",
      "description": "Early morning hike to Taktsang Monastery (Tiger's Nest), Bhutan's most sacred site. This 2-hour hike takes you to the monastery perched at 9,678 feet, built in the 8th century where Guru Padmasambhava meditated. The monastery was rebuilt after a 1998 fire. After lunch, drive to Thimpu (1.5 hours). Explore Thimpu's highlights and witness traditional Archery sports - Bhutan's national sport. Overnight in Paro."
    },
    {
      "day": 3,
      "title": "Departure from Paro",
      "description": "After breakfast, transfer to Paro Airport for your flight back to Kathmandu. End of your short but memorable Bhutan experience with lasting memories of Himalayan vistas and spiritual encounters."
    }
  ],
  "maxGroupSize": 10,
  "cancellationPolicy": "Full refund up to 7 days before departure. 50% refund 3-7 days before. No refund within 3 days.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "Moderate",
  "maxAltitude": "3,120m (Tiger's Nest)",
  "permits": ["Bhutan visa", "Flight tickets included"],
  "equipment": ["Hiking shoes", "Daypack", "Camera", "Warm layers", "Flight essentials"],
},

  {
  "id": "B4",
  "title": "Bhutan Cultural & Tigers Nest Adventure",
  "location": "Paro, Thimpu",
  "duration": "4 Days",
  "rating": 4.8,
  "reviewCount": 45,
  "price": 1199,
  "originalPrice": 1299,
  "excerpt": "An organized 4-day journey through Bhutan's cultural landmarks and spiritual sites, culminating in the iconic Tiger's Nest hike",
  "description": "This comprehensive 4-day tour offers a perfect blend of cultural immersion and adventure. Explore Thimpu's important dzongs, museums, and the giant Buddha statue, then challenge yourself with the legendary hike to Tiger's Nest Monastery. Visit royal memorials, traditional craft centers, and sacred temples while experiencing Bhutan's unique heritage.",
  "image":     "/images/bhutan_tours-9.jpg",

  "images": [
    "/images/bhutan_tours-9.jpg",
    "/images/bhutan_tours-10.jpg",
    "/images/bhutan_tours-11.jpg",
  ],
  "tags": ["Cultural", "Hiking", "Heritage", "Short Trip", "Dzong Tour"],
  "highlights": [
    "Visit Tashichho Dzong - Buddhist monastery fortress in Thimpu",
    "Explore National Memorial Chorten built by 3rd King Jigme Dorje Wangchuk",
    "See Simtokha Dzong - Bhutan's oldest fortress (1629)",
    "Marvel at Kuenselphodrang - 167-foot tall sitting Buddha statue",
    "Tour Folk Heritage Museum, National Textile Museum, and traditional craft institutes",
    "Hike to Taktsang Monastery (Tiger's Nest) - Bhutan's most iconic site",
    "Visit Motithang Takin Preserve and local markets"
  ],
  "includes": [
    "Private transportation throughout",
    "All necessary travel permits",
    "English speaking local guide",
    "Accommodation on single room basis",
    "All sightseeing and monastery entrance fees",
    "Full board meals (breakfast, lunch, dinner)",
    "Tiger's Nest Monastery entrance fee"
  ],
  "excludes": [
    "Travel insurance of any kind",
    "Additional costs due to natural calamities",
    "Personal expenses (drinks, tips, souvenirs)",
    "International flights",
    "Visa fees",
    "Optional horse riding at Tiger's Nest"
  ],
  "included": [
    "Private transportation throughout",
    "All necessary travel permits",
    "English speaking local guide",
    "Accommodation on single room basis",
    "All sightseeing and monastery entrance fees",
    "Full board meals (breakfast, lunch, dinner)",
    "Tiger's Nest Monastery entrance fee"
  ],
  "excluded": [
    "Travel insurance of any kind",
    "Additional costs due to natural calamities",
    "Personal expenses (drinks, tips, souvenirs)",
    "International flights",
    "Visa fees",
    "Optional horse riding at Tiger's Nest"
  ],
  "entryRequirements": ["Valid passport", "Bhutan visa"],
  "requirements": ["Moderate fitness for hiking", "Comfortable walking shoes", "Respectful clothing for temples"],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival in Paro, Drive to Thimpu & Cultural Tour",
      "description": "Arrive at Paro Airport, meet your guide and drive to Thimpu (1.5 hours). Visit Tashichho Dzong, the impressive Buddhist monastery and fortress at Thimpu's northern edge, serving as the seat of government. Then visit the National Memorial Chorten, built in 1974 by the 3rd King of Bhutan, H.M. Jigme Dorje Wangchuk, as a memorial to world peace. Overnight in Thimpu."
    },
    {
      "day": 2,
      "title": "Thimpu Cultural Immersion",
      "description": "Full day exploring Thimpu's cultural treasures. Visit Simtokha Dzong (5km south of Thimpu), Bhutan's oldest fortress built in 1629. See the magnificent Kuenselphodrang - a 167-foot tall sitting Buddha statue overlooking the valley. Tour the Folk Heritage Museum, National Textile Museum, and National Institute of Zorig Chusum (traditional arts school). Visit Motithang Takin Preserve (home to Bhutan's national animal), Changangkha Lhakhang (12th-century temple), and National Handicrafts Emporium. Overnight in Thimpu."
    },
    {
      "day": 3,
      "title": "Tiger's Nest Monastery Hike & Paro Exploration",
      "description": "Morning drive back to Paro for the highlight of the trip - hiking to Taktsang Monastery (Tiger's Nest). This 2-3 hour hike takes you to Bhutan's most sacred monastery perched on a cliff face. After the rewarding hike and monastery visit, explore Paro's local markets for souvenirs and handicrafts. Optional: Visit Paro Dzong or Kyichu Lhakhang (one of Bhutan's oldest temples). Overnight in Paro."
    },
    {
      "day": 4,
      "title": "Departure",
      "description": "After breakfast, transfer to Paro Airport for your departure flight, carrying memories of Bhutan's rich culture and spiritual sites."
    }
  ],
  "maxGroupSize": 12,
  "cancellationPolicy": "Full refund up to 14 days before arrival. 50% refund 7-14 days before. No refund within 7 days.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "Moderate",
  "maxAltitude": "3,120m (Tiger's Nest)",
  "permits": ["Bhutan visa", "Monastery entry permits"],
  "equipment": ["Hiking shoes", "Daypack", "Camera", "Layered clothing", "Sun protection", "Water bottle"],
},

  {
  "id": "B5",
  "title": "Bhutan Grand Cultural Expedition",
  "location": "Paro, Thimpu, Punakha, Wangdue, Gangtey, Phobjikha, Trongsa, Bumthang",
  "duration": "11 Days",
  "rating": 5.0,
  "reviewCount": 62,
  "price": 3499,
  "originalPrice": 3799,
  "excerpt": "An immersive journey through Bhutan's spiritual heartlands, exploring ancient dzongs, sacred monasteries, and untouched Himalayan valleys",
  "description": "Experience Bhutan's untouched lands and Buddhist way of life on this first-grade cultural expedition. Travel from Kathmandu to explore Bhutan's most historically and culturally significant regions, including sacred sites, ancient dzongs, temples, museums, and remote valleys. Discover the spirit of the Bhutanese people, their connection to Shambala, and the kingdom's unique secular Buddhist culture.",
  "image":     "/images/bhutan_tours-12.jpg",

  "images": [
        "/images/bhutan_tours-12.jpg",

        "/images/bhutan_tours-13.jpg",

       "/images/bhutan_tours-14.jpg",

        "/images/bhutan_tours-15.jpg",

  ],
  "tags": ["Cultural", "Comprehensive", "Spiritual", "Extended Tour", "Himalayan"],
  "highlights": [
    "Enthralling mountain flight from Kathmandu to Paro over Himalayas",
    "Explore 8 major regions of Bhutan including remote valleys",
    "Visit ancient dzongs, monasteries, and sacred pilgrimage sites",
    "Experience authentic Bhutanese Buddhist way of life",
    "See rare black-necked cranes in Phobjikha glacial valley",
    "Cross multiple high mountain passes including Dochula, Pelela, Yutong La",
    "Stay in traditional lodges and guest houses"
  ],
  "includes": [
    "Kathmandu-Paro-Kathmandu round-trip flight tickets",
    "Nepal re-entry visa fees",
    "Bhutan visa and all travel permits",
    "Accommodation in best available hotels/lodges",
    "Full board meals throughout the trip",
    "All transportation as per itinerary",
    "English speaking Bhutanese guide"
  ],
  "excludes": [
    "Travel insurance",
    "Personal expenses (drinks, telephone, bar bills, laundry)",
    "Tips for guide and driver",
    "Optional activities and horse riding",
    "Any cost not mentioned in includes section"
  ],
  "included": [
    "Kathmandu-Paro-Kathmandu round-trip flight tickets",
    "Nepal re-entry visa fees",
    "Bhutan visa and all travel permits",
    "Accommodation in best available hotels/lodges",
    "Full board meals throughout the trip",
    "All transportation as per itinerary",
    "English speaking Bhutanese guide"
  ],
  "excluded": [
    "Travel insurance",
    "Personal expenses (drinks, telephone, bar bills, laundry)",
    "Tips for guide and driver",
    "Optional activities and horse riding",
    "Any cost not mentioned in includes section"
  ],
  "entryRequirements": ["Valid passport", "Bhutan visa", "Nepal visa"],
  "requirements": ["Good physical condition", "Comfortable walking shoes", "Respectful clothing for temples", "Patience for long drives"],
  "itinerary": [
    {
      "day": 1,
      "title": "Fly Kathmandu to Paro",
      "description": "Dramatic mountain flight from Kathmandu to Paro with breathtaking views of Himalayan peaks. Upon arrival, complete immigration formalities and transfer to hotel. Evening walk around Paro market to experience local culture."
    },
    {
      "day": 2,
      "title": "Paro Cultural Exploration",
      "description": "Visit Ta Dzong (National Museum since 1967) with collections of relics and arts. Explore Rinpung Dzong ('Heap of Jewels' built 1646). See Drukgyel Dzong (built 1647 for Tibetan defense) with views of Mt. Chomolhari. Visit 7th-century Kyichu Lhakhang (one of 108 Himalayan temples) and explore the town."
    },
    {
      "day": 3,
      "title": "Paro to Thimpu via Simtokha",
      "description": "Scenic drive through villages and paddy fields to Simtokha Dzong, once a tantric teaching center, now for Dzongkha language study. Visit Changangkha Lhakhang (12th-century temple where parents get names for newborns). Explore Memorial Chorten (built for 3rd King) and Tashichho Dzong (fortress-monastery, summer residence of Chief Abbot)."
    },
    {
      "day": 4,
      "title": "Thimpu to Punakha via Dochula Pass",
      "description": "Drive to Punakha crossing Dochula Pass (3,050m) with panoramic Himalayan views. Visit Punakha Dzong at the confluence of two rivers, where the first King was crowned in 1907. Explore the fortress's unique architecture and historical significance."
    },
    {
      "day": 5,
      "title": "Punakha to Gangtey (Phobjikha Valley)",
      "description": "Drive to Wangdue and continue to Phobjikha glacial valley in Black Mountain National Park. Spot rare black-necked cranes (seasonal). Visit exquisite Gangtey Monastery (Nyingmapa sect). Overnight in traditional guest house."
    },
    {
      "day": 6,
      "title": "Gangtey to Trongsa via Pelela Pass",
      "description": "Cross Pelela Pass (3,300m) to Trongsa. Visit Chendbji Chorten (18th-century Nepalese-style stupa with painted eyes). Arrive in Trongsa, historically important central Bhutan town."
    },
    {
      "day": 7,
      "title": "Trongsa to Bumthang via Yutong La Pass",
      "description": "Drive to Bumthang crossing Yutong La Pass (3,400m). Bumthang comprises four valleys (Chumey, Choekhor, Tang, Ura) at 2,600-4,000m. Check into lodge and explore Jakar town."
    },
    {
      "day": 8,
      "title": "Bumthang Valley Exploration",
      "description": "Full day exploring Bumthang's sacred sites: Kurje Lhakhang (three temples surrounded by 108 chortens), Jambey Lhakhang (7th-century temple), Jakar Dzong (administrative center since 1646), and Membartsho (Burning Lake - major pilgrimage site with prayer flags and clay offerings)."
    },
    {
      "day": 9,
      "title": "Bumthang to Thimpu",
      "description": "Full day drive (7 hours) back to Thimpu through scenic mountain roads. Rest and reflect on the journey. Optional evening visit to Handicraft Emporium or National Library with antique Buddhist manuscripts."
    },
    {
      "day": 10,
      "title": "Thimpu to Paro",
      "description": "Final cultural visits in Thimpu: Traditional Medicine Institute (view herbal medicine preparation), National Library, Handicraft Emporium. Drive back to Paro for farewell dinner."
    },
    {
      "day": 11,
      "title": "Departure from Paro",
      "description": "Transfer to Paro Airport for flight back to Kathmandu. End of comprehensive Bhutan cultural journey with deep understanding of Buddhist way of life."
    }
  ],
  "maxGroupSize": 8,
  "cancellationPolicy": "Full refund up to 30 days before departure. 50% refund 15-30 days before. No refund within 15 days.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "Moderate",
  "maxAltitude": "4,000m (Bumthang valleys)",
  "permits": ["Bhutan visa", "Nepal re-entry visa", "All regional permits"],
  "equipment": ["Comfortable walking shoes", "Layered clothing", "Daypack", "Camera", "Travel documents", "Medication"],
}

  
]

  useEffect(() => {
    const loadTours = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        setTours(mockBhutanTours)
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
      {/* Hero section */}
      <Hero
        title="Discover the Kingdom of Bhutan"
        description="Immerse yourself in Bhutan's breathtaking landscapes, vibrant culture, and spiritual heritage."
        backgroundImage="/images/bhutan-hero.jpg"
      />

      {/* Trips Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Popular Bhutan Trips</h2>
        {tours.length > 0 ? (
          <ToursGrid tours={tours} onTourSelect={handleTourSelect} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No tours available at the moment.</p>
            <p className="text-sm text-gray-400 mt-2">
              Check back soon for new Bhutan tour offerings.
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