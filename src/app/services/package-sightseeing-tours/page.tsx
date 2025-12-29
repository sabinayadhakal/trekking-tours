"use client"

import { useState, useEffect } from "react";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

// Mock package sightseeing tours data
const PACKAGE_SIGHTSEEING_TOURS: Tour[] = [
  {
  "id": "1",
  "title": "Nepal Temples and Stupas Tour - 5 Days Spiritual Journey Kathmandu",
  "location": "Kathmandu Valley, Nepal",
  "duration": "5 days / 4 nights",
  "rating": 4.8,
  "reviewCount": 342,
  "price": 650,
  "originalPrice": 720,
  "excerpt": "5-day spiritual tour of Nepal's sacred temples and stupas including Pashupatinath, Boudhanath, and Swayambhunath",
  "description": "Experience Nepal's spiritual heritage on this 5-day temples and stupas tour. Visit UNESCO World Heritage Sites including Pashupatinath Temple, Boudhanath Stupa, and Swayambhunath Monkey Temple. Perfect for spiritual seekers and cultural enthusiasts exploring Hindu and Buddhist traditions in Kathmandu Valley.",
  "image":       "/images/dakshinkali-1.jpg",

  "images": [
    "/images/dakshinkali-1.jpg",
          "/images/swoyambhunath-1.jpg",

      "/images/pashupati-1.jpg",
      "/images/boudhanath-1.jpg",
  ],
  "tags": ["Nepal Temple Tour", "Spiritual Journey", "Kathmandu Valley Tour", "Buddhist Stupas", "Hindu Temples", "Religious Tour Nepal"],
  "highlights": ["Pashupatinath Temple", "Boudhanath Stupa", "Swayambhunath", "Dakshinkali Temple", "Patan Durbar Square"],
  "includes": ["Hotel Accommodation", "All Meals", "Expert Guide", "Private Transportation", "Entry Fees"],
  "excludes": ["International Flights", "Nepal Visa", "Travel Insurance", "Personal Expenses"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Airport pickup, hotel check-in, orientation, welcome dinner" },
    { "day": 2, "title": "Kathmandu Sacred Sites", "description": "Visit Pashupatinath Temple, Boudhanath Stupa, and Guheshwori Temple" },
    { "day": 3, "title": "Ancient Stupas and Shrines", "description": "Explore Swayambhunath, Dakshinkali Temple, and Chobhar Gorge" },
    { "day": 4, "title": "Patan Religious Heritage", "description": "Discover Patan's temples, monasteries, and spiritual sites" },
    { "day": 5, "title": "Departure", "description": "Final temple visits, shopping for religious artifacts, airport transfer" }
  ],
  "maxGroupSize": 12,
  "included": ["4 nights accommodation in 3-star hotels", "All meals (4 breakfasts, 4 lunches, 4 dinners)", "Expert cultural guide", "Private transportation", "All temple entry fees", "Cultural performance"],
  "excluded": ["International flights", "Nepal visa fee", "Travel insurance", "Personal expenses", "Gratuities"],
  "cancellationPolicy": "Free cancellation up to 15 days before departure. 50% refund between 7-15 days. No refund within 7 days.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "easy",
  "maxAltitude": "1,350m",
  "requirements": ["No special requirements", "Suitable for all fitness levels"],
  "permits": ["Heritage site entry permits"],
  "equipment": ["Comfortable walking shoes", "Camera", "Sun protection"],
  "entryRequirements": ["Valid passport", "Nepal visa"]
},
  {
  "id": "2",
  "title": "Kathmandu and Pokhara Tour - 7 Days Himalayan Panorama",
  "location": "Kathmandu Valley & Pokhara, Nepal",
  "duration": "7 days / 6 nights",
  "rating": 4.9,
  "reviewCount": 215,
  "price": 920,
  "originalPrice": 1020,
  "excerpt": "7-day cultural and scenic tour combining the heritage of Kathmandu Valley with the natural beauty of Pokhara",
  "description": "Experience the best of Nepal's cultural heritage and natural wonders on this comprehensive 7-day tour. Explore the ancient temples and palaces of Kathmandu Valley, then travel to Pokhara for breathtaking Himalayan views, serene lakes, and adventure activities. Perfect for travelers wanting to experience both the cultural and natural highlights of Nepal.",
  "image": "/images/kathmandu-1.jpg",
  "images": [
"/images/kathmandu-1.jpg",
    "/images/pokhara-1.jpg",
        "/images/pokhara-2.jpg",

            "/images/pokhara-3.jpg",

  ],
  "tags": ["Kathmandu Pokhara Tour", "Nepal Cultural Tour", "Himalayan Views", "Pokhara Lakes", "Heritage and Nature", "7 Days Nepal"],
  "highlights": ["Kathmandu Durbar Square", "Phewa Lake Boating", "Sarangkot Sunrise", "Boudhanath Stupa", "World Peace Pagoda", "Swayambhunath"],
  "includes": ["Hotel Accommodation", "All Meals", "Expert Guide", "Private Transportation", "Domestic Flight", "Entry Fees"],
  "excludes": ["International Flights", "Nepal Visa", "Travel Insurance", "Optional Activities"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Airport pickup, hotel transfer, welcome briefing, traditional Nepali dinner" },
    { "day": 2, "title": "Kathmandu UNESCO Heritage", "description": "Full day tour of Swayambhunath, Pashupatinath, Boudhanath, and Kathmandu Durbar Square" },
    { "day": 3, "title": "Scenic Drive to Pokhara", "description": "6-hour picturesque drive through mountains and villages, afternoon lakeside relaxation" },
    { "day": 4, "title": "Pokhara Sunrise & Exploration", "description": "Early morning Sarangkot sunrise view, Phewa Lake boating, visit Tal Barahi Temple" },
    { "day": 5, "title": "Pokhara Adventure Day", "description": "Visit World Peace Pagoda, Devi's Fall, Gupteshwor Cave, free time for optional paragliding or zip-lining" },
    { "day": 6, "title": "Return to Kathmandu & Culture", "description": "Domestic flight back to Kathmandu, explore Patan Durbar Square, farewell dinner with cultural show" },
    { "day": 7, "title": "Departure from Kathmandu", "description": "Final souvenir shopping, transfer to Tribhuvan International Airport for departure" }
  ],
  "maxGroupSize": 15,
  "included": ["6 nights accommodation (4-star in Kathmandu, 3-star in Pokhara)", "All meals (6 breakfasts, 6 lunches, 6 dinners)", "Professional English-speaking guide", "All ground transportation in private vehicle", "Domestic flight from Pokhara to Kathmandu", "All monument entrance fees", "Phewa Lake boating ticket", "Farewell cultural dinner show"],
  "excluded": ["International airfare", "Nepal entry visa fee", "Travel insurance", "Optional adventure activities (paragliding, zip-lining, etc.)", "Personal expenses and tips"],
  "cancellationPolicy": "Free cancellation up to 21 days before departure. 70% refund between 14-21 days. 50% refund between 7-14 days. No refund within 7 days.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "easy",
  "maxAltitude": "1,592m (Sarangkot)",
  "requirements": ["Moderate walking ability", "Suitable for most age groups"],
  "permits": ["Heritage site entry permits", "Sarangkot entry permit"],
  "equipment": ["Comfortable walking shoes", "Warm layers for morning", "Camera", "Binoculars for mountain views"],
  "entryRequirements": ["Valid passport", "Nepal visa"]
},
  {
  "id": "3",
  "title": "Kathmandu Valley Tour - 4 Days Heritage Discovery",
  "location": "Kathmandu Valley, Nepal",
  "duration": "4 days / 3 nights",
  "rating": 4.7,
  "reviewCount": 189,
  "price": 520,
  "originalPrice": 580,
  "excerpt": "4-day immersive tour exploring the ancient royal cities, temples, and culture of the Kathmandu Valley",
  "description": "Dive deep into the living heritage of the Kathmandu Valley on this 4-day tour. Visit the three ancient royal cities of Kathmandu, Patan, and Bhaktapur, each with its own Durbar Square. Experience the blend of Hinduism and Buddhism at sacred temples and stupas, and witness traditional Newari culture in the valley's medieval towns.",
  "image": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
  "images": [
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1573950940375-e7d0b8465d7c?w=800&h=600&fit=crop"
  ],
  "tags": ["Kathmandu Valley Tour", "Heritage Tour", "Durbar Squares", "UNESCO Nepal", "Cultural Tour", "Short Nepal Tour"],
  "highlights": ["Kathmandu Durbar Square", "Patan Durbar Square", "Bhaktapur Durbar Square", "Swayambhunath", "Boudhanath", "Changunarayan Temple"],
  "includes": ["Hotel Accommodation", "Breakfast & Lunch", "Expert Guide", "Private Transportation", "Entry Fees"],
  "excludes": ["Dinners", "International Flights", "Nepal Visa", "Travel Insurance", "Personal Expenses"],
  "itinerary": [
    { "day": 1, "title": "Arrival & Kathmandu Heritage", "description": "Airport pickup, hotel check-in, afternoon tour of Swayambhunath (Monkey Temple) and Kathmandu Durbar Square" },
    { "day": 2, "title": "Patan & Sacred Stupas", "description": "Explore Patan Durbar Square and its museums, visit the sacred Boudhanath Stupa, and see Pashupatinath Temple" },
    { "day": 3, "title": "Bhaktapur & Ancient Temples", "description": "Full day in Bhaktapur (Bhadgaon), exploring its Durbar Square, pottery square, and the ancient Changunarayan Temple" },
    { "day": 4, "title": "Departure", "description": "Free morning for last-minute exploration or souvenir shopping in Thamel, transfer to airport for departure" }
  ],
  "maxGroupSize": 10,
  "included": ["3 nights accommodation in a 3-star heritage-style hotel", "Daily breakfast and lunch", "Professional English-speaking cultural guide", "All ground transportation in a private vehicle", "All monument and heritage site entrance fees", "Hotel airport transfers"],
  "excluded": ["Dinner meals", "International airfare", "Nepal entry visa fee", "Travel and medical insurance", "Personal expenses (drinks, laundry, phone calls, etc.)", "Tips for guide and driver"],
  "cancellationPolicy": "Free cancellation up to 14 days before departure. 50% refund between 7-14 days. No refund within 7 days.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "easy",
  "maxAltitude": "1,400m",
  "requirements": ["Moderate walking ability required", "Comfortable with exploring historic sites with uneven ground"],
  "permits": ["Kathmandu Valley heritage site permits"],
  "equipment": ["Comfortable walking shoes", "Day pack", "Water bottle", "Camera", "Modest clothing for temple visits"],
  "entryRequirements": ["Valid passport", "Nepal visa (obtainable on arrival for most nationalities)"]
},
  {
  "id": "4",
  "title": "Nepal Heritage Sites Tour - 9 Days Complete Cultural Experience",
  "location": "Kathmandu Valley, Lumbini, Pokhara, Chitwan, Nepal",
  "duration": "9 days / 8 nights",
  "rating": 4.9,
  "reviewCount": 127,
  "price": 1450,
  "originalPrice": 1600,
  "excerpt": "Comprehensive 9-day tour covering Nepal's major UNESCO World Heritage Sites from Kathmandu to Lumbini",
  "description": "Embark on an unforgettable 9-day journey through Nepal's most significant cultural and historical treasures. This complete heritage tour covers all major UNESCO World Heritage Sites in Nepal, including the sacred birthplace of Buddha in Lumbini, the medieval cities of Kathmandu Valley, the natural wonders of Chitwan National Park, and the stunning beauty of Pokhara with Himalayan views.",
  "image": "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop",
  "images": [
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1526481280453-7b3de5c974b7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1552465011-b4e30bf7349d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1573950940375-e7d0b8465d7c?w=800&h=600&fit=crop"
  ],
  "tags": ["Nepal UNESCO Tour", "Complete Heritage Nepal", "Lumbini Tour", "Chitwan National Park", "Cultural Journey", "9 Days Nepal"],
  "highlights": ["Lumbini - Birthplace of Buddha", "Kathmandu Valley 7 UNESCO Sites", "Chitwan National Park Safari", "Pokhara Himalayan Views", "All Major Heritage Sites"],
  "includes": ["All Accommodation", "All Meals", "Expert Guide", "Private Transportation", "Domestic Flights", "All Entry Fees", "Chitwan Safari"],
  "excludes": ["International Flights", "Nepal Visa", "Travel Insurance", "Personal Expenses", "Optional Activities"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Airport pickup, hotel transfer, welcome dinner with cultural briefing" },
    { "day": 2, "title": "Kathmandu UNESCO Sites", "description": "Full day exploring Swayambhunath, Pashupatinath, and Boudhanath Stupa" },
    { "day": 3, "title": "Ancient Cities & Flight to Pokhara", "description": "Morning tour of Patan Durbar Square, afternoon flight to Pokhara, evening lakeside leisure" },
    { "day": 4, "title": "Pokhara Heritage & Scenery", "description": "Sarangkot sunrise, Phewa Lake boating, World Peace Pagoda, Gupteshwor Cave" },
    { "day": 5, "title": "Drive to Lumbini via Tansen", "description": "Scenic drive to Lumbini with stop in historic Tansen, evening explore Lumbini Garden" },
    { "day": 6, "title": "Lumbini - Birthplace of Buddha", "description": "Full day exploring Maya Devi Temple, monastic zones, museums, and sacred garden" },
    { "day": 7, "title": "Lumbini to Chitwan", "description": "Drive to Chitwan National Park, afternoon Tharu cultural village tour, evening cultural show" },
    { "day": 8, "title": "Chitwan Wildlife & Return to Kathmandu", "description": "Morning jungle safari, elephant briefing center, afternoon flight to Kathmandu, farewell dinner" },
    { "day": 9, "title": "Final Heritage & Departure", "description": "Morning visit to Bhaktapur Durbar Square, final shopping, transfer to airport" }
  ],
  "maxGroupSize": 12,
  "included": ["8 nights accommodation (4-star in cities, jungle lodge in Chitwan)", "All meals (8 breakfasts, 8 lunches, 8 dinners)", "Expert cultural and naturalist guides", "All ground transportation in private AC vehicle", "Domestic flights: Kathmandu-Pokhara, Chitwan-Kathmandu", "All UNESCO site entrance fees and permits", "Chitwan National Park entry and jungle activities", "Phewa Lake boating in Pokhara", "All airport transfers"],
  "excluded": ["International airfare", "Nepal entry visa fee", "Travel and medical insurance", "Optional activities (paragliding, elephant bath, etc.)", "Personal expenses and gratuities", "Drinks and beverages"],
  "cancellationPolicy": "Free cancellation up to 30 days before departure. 75% refund between 15-30 days. 50% refund between 7-15 days. No refund within 7 days.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "easy to moderate",
  "maxAltitude": "1,592m (Sarangkot)",
  "requirements": ["Good general health", "Ability for moderate walking and light hiking", "Comfortable with varied transportation"],
  "permits": ["All UNESCO site permits", "Chitwan National Park permit", "Heritage monument fees"],
  "equipment": ["Comfortable walking shoes", "Lightweight clothing", "Warm layer for mornings", "Binoculars for wildlife", "Camera", "Sun protection"],
  "entryRequirements": ["Valid passport with 6 months validity", "Nepal visa", "Vaccination certificate recommended"]
},
  {
  "id": "5",
  "title": "City and Countryside Family Tour - 10 Days Nepal Family Adventure",
  "location": "Kathmandu, Nagarkot, Pokhara, Chitwan, Nepal",
  "duration": "10 days / 9 nights",
  "rating": 4.8,
  "reviewCount": 94,
  "price": 1750,
  "originalPrice": 1950,
  "excerpt": "Perfect 10-day family-friendly tour combining cultural cities, mountain views, wildlife safaris, and fun activities for all ages",
  "description": "Designed specifically for families, this 10-day adventure offers the perfect balance of education, adventure, and relaxation. Experience the vibrant culture of Kathmandu, breathtaking Himalayan views from Nagarkot, the serene beauty of Pokhara, and exciting wildlife encounters in Chitwan. With child-friendly guides, comfortable pacing, and engaging activities, this tour creates unforgettable family memories in Nepal.",
  "image": "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=400&h=300&fit=crop",
  "images": [
    "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1526481280453-7b3de5c974b7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1552465011-b4e30bf7349d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
  ],
  "tags": ["Family Tour Nepal", "Kids Friendly Nepal", "Family Adventure", "Child-Friendly Activities", "Multigenerational Tour", "Nepal with Kids"],
  "highlights": ["Child-Friendly Cultural Tours", "Nagarkot Sunrise with Kids", "Pokhara Boating & Caves", "Chitwan Jungle Safari", "Elephant Interaction", "Traditional Craft Workshops"],
  "includes": ["Family Accommodation", "All Meals", "Child-Friendly Guides", "Private Transportation", "All Activities", "Entry Fees", "Special Family Discounts"],
  "excludes": ["International Flights", "Nepal Visa", "Travel Insurance", "Personal Expenses", "Optional Extra Activities"],
  "itinerary": [
    { "day": 1, "title": "Family Arrival in Kathmandu", "description": "Airport welcome, family hotel transfer, relaxed orientation, child-friendly welcome dinner" },
    { "day": 2, "title": "Kathmandu Kids Cultural Day", "description": "Interactive visit to Swayambhunath (Monkey Temple), Kathmandu Durbar Square with storytelling, traditional puppet show" },
    { "day": 3, "title": "Bhaktapur & Drive to Nagarkot", "description": "Explore Bhaktapur's car-free streets and pottery square, afternoon drive to Nagarkot, evening mountain views" },
    { "day": 4, "title": "Nagarkot Sunrise & to Pokhara", "description": "Family sunrise viewing (optional), scenic drive to Pokhara, evening Lakeside family dinner" },
    { "day": 5, "title": "Pokhara Family Adventure", "description": "Sarangkot sunrise view, Phewa Lake boating to Tal Barahi Temple, Gupteshwor Cave, optional easy hike" },
    { "day": 6, "title": "Pokhara Relaxation & Flight", "description": "Morning visit to International Mountain Museum, afternoon flight to Bharatpur, transfer to Chitwan" },
    { "day": 7, "title": "Chitwan Jungle Family Day", "description": "Morning elephant safari or jeep safari, elephant bathing experience, Tharu cultural village tour, evening cultural dance" },
    { "day": 8, "title": "Chitwan Wildlife & to Kathmandu", "description": "Bird watching tour, canoe ride, visit to elephant breeding center, afternoon flight to Kathmandu" },
    { "day": 9, "title": "Patna Handicrafts & Farewell", "description": "Visit Patan Museum and Durbar Square, traditional handicraft workshop for kids, farewell family dinner" },
    { "day": 10, "title": "Family Departure", "description": "Free morning for last-minute family photos or shopping, transfer to airport for departure" }
  ],
  "maxGroupSize": 15,
  "included": ["9 nights family-friendly accommodation (interconnecting rooms available)", "All meals including child-friendly options (9 breakfasts, 9 lunches, 9 dinners)", "Specialized child-friendly English-speaking guide", "All ground transportation in private AC vehicle", "Domestic flights: Pokhara-Bharatpur, Bharatpur-Kathmandu", "All entrance fees and activity costs", "Chitwan National Park entry and jungle activities", "Traditional craft workshop for children", "Family welcome and farewell dinners"],
  "excluded": ["International airfare for adults and children", "Nepal visa fees (children under 10 often free)", "Travel insurance for all family members", "Optional activities (paragliding, ultra-light flight, etc.)", "Personal expenses and souvenirs", "Tips for guides and drivers"],
  "cancellationPolicy": "Family-friendly cancellation: Free cancellation up to 30 days before. 80% refund 15-30 days. 60% refund 7-15 days. Flexible rescheduling options.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "easy",
  "maxAltitude": "2,175m (Nagarkot)",
  "requirements": ["Suitable for children aged 5+", "Basic walking ability", "No special fitness requirements"],
  "permits": ["Heritage site permits", "Chitwan National Park permit"],
  "equipment": ["Comfortable walking shoes for all", "Light jackets for cool mornings", "Binoculars for wildlife viewing", "Camera", "Sun hats and protection"],
  "entryRequirements": ["Valid passports for all family members", "Nepal visa", "Parental consent documents for single parents traveling with children"]
},

  {
  "id": "6",
  "title": "Historical Scenic Wildlife Family Tour - 9 Days Nepal Discovery",
  "location": "Kathmandu, Pokhara, Chitwan, Nepal",
  "duration": "9 days / 8 nights",
  "rating": 4.9,
  "reviewCount": 78,
  "price": 1620,
  "originalPrice": 1800,
  "excerpt": "Family-friendly 9-day journey through Nepal's history, stunning scenery, and incredible wildlife for unforgettable family memories",
  "description": "This specially designed 9-day family tour offers the perfect blend of Nepal's historical treasures, breathtaking landscapes, and wildlife adventures. Explore ancient temples and palaces in Kathmandu, enjoy panoramic Himalayan views in Pokhara, and embark on exciting jungle safaris in Chitwan National Park. With family-oriented pacing, engaging activities for all ages, and comfortable accommodations, this tour creates the perfect educational and adventurous family vacation.",
  "image": "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop",
  "images": [
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1526481280453-7b3de5c974b7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1552465011-b4e30bf7349d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
  ],
  "tags": ["Family Wildlife Tour", "Historical Nepal", "Scenic Family Vacation", "Nepal Safari Family", "Multigenerational Travel", "Educational Family Tour"],
  "highlights": ["Kathmandu Historical Sites", "Pokhara Mountain Views", "Chitwan Wildlife Safari", "Elephant Interaction", "Family-Friendly Hiking", "Cultural Experiences"],
  "includes": ["Family Accommodations", "All Meals", "Child-Friendly Guides", "Private Transportation", "Wildlife Safari", "All Entry Fees", "Family Activities"],
  "excludes": ["International Flights", "Nepal Visa", "Travel Insurance", "Personal Expenses", "Optional Adventures"],
  "itinerary": [
    { "day": 1, "title": "Family Arrival in Kathmandu", "description": "Airport welcome with traditional greeting, transfer to family-friendly hotel, orientation session, welcome dinner" },
    { "day": 2, "title": "Kathmandu Historical Discovery", "description": "Visit Swayambhunath (Monkey Temple), Patan Durbar Square with interactive museum, traditional Newari lunch" },
    { "day": 3, "title": "Ancient Temples & Scenic Drive", "description": "Morning at Pashupatinath and Boudhanath, scenic drive to Pokhara with river stops, evening Lakeside stroll" },
    { "day": 4, "title": "Pokhara Scenic Wonders", "description": "Sarangkot sunrise viewing (vehicle accessible), Phewa Lake boating, visit World Peace Pagoda, Gupteshwor Cave exploration" },
    { "day": 5, "title": "Pokhara to Chitwan Adventure", "description": "Morning visit to Devi's Fall and Tibetan refugee camp, scenic drive to Chitwan, Tharu village cultural experience" },
    { "day": 6, "title": "Chitwan Wildlife Safari Day", "description": "Morning jungle safari (elephant back or jeep), elephant bathing experience, canoe ride, evening Tharu cultural dance" },
    { "day": 7, "title": "Chitwan Nature & to Kathmandu", "description": "Bird watching tour, visit elephant breeding center, nature walk, afternoon flight to Kathmandu" },
    { "day": 8, "title": "Bhaktapur History & Farewell", "description": "Explore Bhaktapur Durbar Square (car-free zone), pottery demonstration, traditional craft market, farewell family dinner with cultural show" },
    { "day": 9, "title": "Departure Day", "description": "Free morning for last-minute souvenirs or relaxation, transfer to Tribhuvan International Airport" }
  ],
  "maxGroupSize": 12,
  "included": ["8 nights in family-friendly accommodations (3-4 star with family rooms)", "All meals including child-friendly options (8 breakfasts, 8 lunches, 8 dinners)", "Specialized English-speaking guide experienced with families", "All ground transportation in private AC vehicle", "Domestic flight from Bharatpur to Kathmandu", "All historical site entrance fees", "Chitwan National Park entry and all safari activities", "Phewa Lake boating in Pokhara", "Traditional cultural performances", "Family welcome kit with maps and activity books"],
  "excluded": ["International airfare for all family members", "Nepal entry visa fees", "Comprehensive travel insurance", "Optional adventure activities (paragliding, zip-lining, etc.)", "Personal expenses, drinks, and souvenirs", "Tips for guides and drivers"],
  "cancellationPolicy": "Family-friendly policy: Free cancellation 45+ days before. 80% refund 30-45 days. 60% refund 15-30 days. Rescheduling priority for families.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "easy",
  "maxAltitude": "1,592m (Sarangkot)",
  "requirements": ["Suitable for children aged 6 and above", "Basic walking ability", "No strenuous activities required"],
  "permits": ["Heritage monument permits", "Chitwan National Park permit", "All necessary activity permits"],
  "equipment": ["Comfortable walking shoes for all", "Light layers for changing temperatures", "Binoculars for wildlife viewing", "Cameras and chargers", "Sun protection and hats", "Small backpacks for day trips"],
  "entryRequirements": ["Valid passports for all family members", "Nepal visa (available on arrival)", "Vaccination records recommended", "Parental consent letters if applicable"]
},

{
  "id": "7",
  "title": "Nepal Photography Tour - 10 Days Through the Lens",
  "location": "Kathmandu, Nagarkot, Pokhara, Chitwan, Nepal",
  "duration": "10 days / 9 nights",
  "rating": 4.9,
  "reviewCount": 112,
  "price": 1890,
  "originalPrice": 2100,
  "excerpt": "10-day specialized photography tour capturing Nepal's diverse landscapes, cultures, wildlife, and people through professional guidance",
  "description": "Designed for photography enthusiasts of all skill levels, this 10-day tour takes you to Nepal's most photogenic locations with expert guidance. Capture stunning Himalayan panoramas, vibrant cultural festivals, ancient architecture, and incredible wildlife. Led by professional photographer guides, you'll receive hands-on instruction while visiting golden hour spots, hidden viewpoints, and authentic local experiences perfect for your portfolio.",
  "image": "https://images.unsplash.com/photo-1526481280453-7b3de5c974b7?w=400&h=300&fit=crop",
  "images": [
    "https://images.unsplash.com/photo-1526481280453-7b3de5c974b7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1552465011-b4e30bf7349d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
  ],
  "tags": ["Photography Tour Nepal", "Photo Workshop", "Landscape Photography", "Cultural Photography", "Wildlife Photography", "Professional Photo Tour"],
  "highlights": ["Golden Hour at Nagarkot", "Monkey Temple Rituals", "Pokhara Mountain Reflections", "Chitwan Wildlife Shoots", "Street Photography in Bhaktapur", "Portrait Sessions with Locals"],
  "includes": ["Photography Guide", "All Accommodation", "All Meals", "Private Transportation", "Photo Workshops", "Entry Fees", "Model Fees"],
  "excludes": ["International Flights", "Camera Equipment", "Travel Insurance", "Personal Expenses", "Optional Printing"],
  "itinerary": [
    { "day": 1, "title": "Arrival & Photography Briefing", "description": "Kathmandu airport pickup, hotel transfer, gear check, evening photography briefing and orientation session" },
    { "day": 2, "title": "Kathmandu Cultural Photography", "description": "Morning light at Swayambhunath, portrait photography at Boudhanath, evening rituals at Pashupatinath, night photography workshop" },
    { "day": 3, "title": "Ancient Cities & Golden Hour", "description": "Bhaktapur morning markets and architecture, Patan Durbar Square details, sunset at Kirtipur with panoramic city views" },
    { "day": 4, "title": "Nagarkot Sunrise & Drive to Pokhara", "description": "Sunrise photography of Himalayas from Nagarkot, scenic drive with roadside photography stops, Pokhara Lakeside golden hour" },
    { "day": 5, "title": "Pokhara Mountain Photography", "description": "Pre-dawn trip to Sarangkot for sunrise over Annapurna range, Phewa Lake reflections, World Peace Pagoda, evening light painting workshop" },
    { "day": 6, "title": "Pokhara Details & People", "description": "Gupteshwor Cave interiors, Devi's Fall long exposures, Tibetan camp portrait session, street photography in Lakeside" },
    { "day": 7, "title": "To Chitwan & Village Life", "description": "Scenic drive photography, Tharu village cultural photography, sunset over Rapti River, night sky photography session" },
    { "day": 8, "title": "Chitwan Wildlife Photography", "description": "Early morning jungle safari for wildlife photography, elephant bathing action shots, bird photography, elephant breeding center" },
    { "day": 9, "title": "Return & Portfolio Review", "description": "Morning village life photography, flight to Kathmandu, afternoon photo editing workshop, portfolio review session, farewell dinner" },
    { "day": 10, "title": "Final Shots & Departure", "description": "Optional early morning photography session, final image selection assistance, transfer to airport" }
  ],
  "maxGroupSize": 8,
  "included": ["9 nights accommodation with charging stations", "All meals (9 breakfasts, 9 lunches, 9 dinners)", "Professional photographer guide and instructor", "All ground transportation in private vehicle", "Domestic flight from Bharatpur to Kathmandu", "All entrance fees and photography permits", "Chitwan National Park entry and safari activities", "Structured photography workshops and critiques", "Local model fees for portrait sessions", "Photo location scouting and golden hour planning"],
  "excluded": ["International airfare", "Photography equipment and cameras", "Travel and equipment insurance", "Memory cards and storage devices", "Laptop for editing (available for rent)", "Personal expenses and tips", "Printing services"],
  "cancellationPolicy": "Free cancellation up to 60 days before. 80% refund 30-60 days. 50% refund 15-30 days. Special insurance recommended for equipment.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "moderate",
  "maxAltitude": "2,175m (Nagarkot)",
  "requirements": ["Basic photography knowledge", "Own camera equipment", "Moderate walking ability", "Early morning starts for golden hour"],
  "permits": ["Heritage photography permits", "Chitwan National Park permit", "Special portrait photography permissions"],
  "equipment": ["DSLR/Mirrorless camera with lenses", "Tripod (essential)", "Filters (polarizing, ND)", "Extra batteries and memory cards", "Laptop for editing (optional)", "Weather protection for gear"],
  "entryRequirements": ["Valid passport", "Nepal visa", "Equipment list for customs", "Insurance for camera gear recommended"]
}
]

export default function HomePage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Add the hero image path here for package tours
  const heroImage = "/images/numbered-cards-package.jpg"; // Change this to your desired image path

  // Load package sightseeing tours
  useEffect(() => {
    const loadTours = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setTours(PACKAGE_SIGHTSEEING_TOURS);
      } catch (err) {
        console.error("Error loading package tours:", err);
        setTours(PACKAGE_SIGHTSEEING_TOURS); // Still use mock data on error
      } finally {
        setLoading(false);
      }
    };

    loadTours();
  }, []);

  const handleTourSelect = (tour: Tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading package tours...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Updated Hero section with image for package tours */}
      <Hero 
        title="Nepal Package Sightseeing Tours"
        description="Discover the diverse beauty of Nepal with our carefully curated package tours. From cultural heritage sites and spiritual journeys to family adventures and photography expeditions, we offer comprehensive experiences that showcase the best of Nepal's treasures."
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
              <p className="text-muted-foreground">No sightseeing tours available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Additional sections can be added here */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Package Tours?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Comprehensive Itineraries</h3>
              <p className="text-muted-foreground">
                Our tours are carefully designed to include all must-see attractions with optimal timing.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Expert Local Guides</h3>
              <p className="text-muted-foreground">
                Knowledgeable guides provide deep insights into culture, history, and traditions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Hassle-Free Experience</h3>
              <p className="text-muted-foreground">
                We handle all logistics, accommodations, transportation, and entry arrangements.
              </p>
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