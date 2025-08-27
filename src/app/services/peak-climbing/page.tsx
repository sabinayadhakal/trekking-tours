"use client"

import { useState } from "react";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

// Peak climbing tours data
const PEAK_TOURS: Tour[] = [
  {
id: "5",
title: "Mera Peak Climb",
location: "Nepal",
duration: "18 days",
rating: 4.9,
reviewCount: 210,
price: 4500,
originalPrice: 5000,
excerpt: "Climb the highest trekking peak in Nepal with panoramic Himalayan views.",
description: "Mera Peak (6476m) offers an exhilarating trekking peak experience with incredible views of Everest, Kanchenjunga, Makalu, and Cho Oyu. Ideal for adventurers looking for high-altitude trekking with moderate climbing.",
image: "/images/mera_peak.jpg",
images: ["/images/mera_peak1.jpg", "/images/mera_peak2.jpg", "/images/mera_peak3.jpg"],
tags: ["Mera Peak", "Peak Climbing", "Adventure", "Nepal"],
highlights: [
"Summit of Mera Peak (6476m)",
"Panoramic Himalayan views",
"High-altitude trekking",
"Sherpa culture experience",
"Glacier and snow climbing"
],
includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
excludes: ["Flights", "Personal expenses", "Travel insurance", "Tips"],
included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
excluded: ["Flights", "Personal expenses", "Travel insurance", "Tips"],
itinerary: [
{ day: 1, title: "Arrival in Kathmandu", description: "Overnight stay and briefing." },
{ day: 2, title: "Fly to Lukla & Trek to Paiya", description: "Start of trek through forested trails." },
{ day: 3, title: "Trek to Chutok", description: "Scenic trekking through villages." },
{ day: 4, title: "Trek to Thuli Kharka", description: "Gradual ascent and acclimatization." },
{ day: 5, title: "Trek to Khare", description: "Approach to Mera Peak base." },
{ day: 6, title: "Acclimatization & Preparation", description: "Local exploration and climbing prep." },
{ day: 7, title: "Mera Peak Summit Day", description: "Early morning ascent, return to Khare." },
{ day: 8, title: "Descend to Lukla", description: "Return trek through beautiful valleys." },
{ day: 9, title: "Fly back to Kathmandu", description: "Celebrate summit success." }
],
maxGroupSize: 6,
cancellationPolicy: "Full refund if canceled 45 days before departure.",
isPopular: true,
isSoldOut: false,
difficulty: "hard",
maxAltitude: "6,476m",
requirements: ["Excellent fitness", "High-altitude trekking experience", "Acclimatization"],
permits: ["Mera Peak Climbing Permit", "TIMS Card"],
equipment: ["Climbing boots", "Backpack", "Warm layers", "Sleeping bag", "Trekking poles", "Crampons"],
entryRequirements: ["Valid Nepal visa", "Travel insurance"]
},
{
id: "6",
title: "Island Peak Climb",
location: "Nepal",
duration: "16 days",
rating: 4.8,
reviewCount: 180,
price: 4200,
originalPrice: 4600,
excerpt: "Classic trekking peak near Everest offering thrilling summit experience.",
description: "Island Peak (Imja Tse, 6189m) provides adventurers with moderate mountaineering challenges in the Everest region, combining cultural experiences, trekking, and high-altitude climbing.",
image: "/images/island_peak.jpg",
images: ["/images/island_peak1.jpg", "/images/island_peak2.jpg", "/images/island_peak3.jpg"],
tags: ["Island Peak", "Peak Climbing", "Adventure", "Nepal"],
highlights: [
"Summit of Island Peak (6189m)",
"Everest region trekking",
"Sherpa culture immersion",
"Glacier and snow climbing",
"Panoramic Himalayan views"
],
includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
excludes: ["Flights", "Personal expenses", "Travel insurance", "Tips"],
included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
excluded: ["Flights", "Personal expenses", "Travel insurance", "Tips"],
itinerary: [
{ day: 1, title: "Arrival in Kathmandu", description: "Hotel check-in and briefing." },
{ day: 2, title: "Flight to Lukla & Trek to Phakding", description: "Start trek through Sagarmatha National Park." },
{ day: 3, title: "Trek to Namche Bazaar", description: "Cultural hub of the Khumbu region." },
{ day: 4, title: "Acclimatization in Namche", description: "Short hike to Everest View Hotel." },
{ day: 5, title: "Trek to Tengboche", description: "Visit Tengboche Monastery with mountain views." },
{ day: 6, title: "Trek to Dingboche", description: "Higher altitude trekking and acclimatization." },
{ day: 7, title: "Island Peak Base Camp", description: "Preparation for summit." },
{ day: 8, title: "Summit Day", description: "Early morning climb and return to base camp." },
{ day: 9, title: "Descend to Lukla", description: "Return trek through Sherpa villages." },
{ day: 10, title: "Flight back to Kathmandu", description: "Celebrate achievement and rest." }
],
maxGroupSize: 6,
cancellationPolicy: "Full refund if canceled 45 days before departure.",
isPopular: true,
isSoldOut: false,
difficulty: "moderate",
maxAltitude: "6,189m",
requirements: ["Good fitness", "Some high-altitude trekking experience", "Acclimatization"],
permits: ["Island Peak Climbing Permit", "TIMS Card"],
equipment: ["Climbing boots", "Backpack", "Warm layers", "Sleeping bag", "Trekking poles", "Crampons", "Ice axe", "Harness"],
entryRequirements: ["Valid Nepal visa", "Travel insurance"]
},
{
id: "7",
title: "Yala Peak Climb",
location: "Nepal",
duration: "12 days",
rating: 4.7,
reviewCount: 140,
price: 3500,
originalPrice: 3800,
excerpt: "Accessible trekking peak in Langtang with stunning Himalayan views.",
description: "Yala Peak (5520m) offers moderate climbing with breathtaking views of Langtang Lirung, Ganesh Himal, and Shishapangma. Perfect for trekkers seeking their first high-altitude peak experience.",
image: "/images/yala_peak.jpg",
images: ["/images/yala_peak1.jpg", "/images/yala_peak2.jpg", "/images/yala_peak3.jpg"],
tags: ["Yala Peak", "Peak Climbing", "Adventure", "Nepal"],
highlights: [
"Summit of Yala Peak (5520m)",
"Langtang region trekking",
"High-altitude experience",
"Cultural village visits",
"Snow climbing"
],
includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
excludes: ["Flights", "Personal expenses", "Travel insurance", "Tips"],
included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
excluded: ["Flights", "Personal expenses", "Travel insurance", "Tips"],
itinerary: [
{ day: 1, title: "Arrival in Kathmandu", description: "Hotel check-in and briefing." },
{ day: 2, title: "Drive to Syabrubesi & Trek to Lama Hotel", description: "Start Langtang trek." },
{ day: 3, title: "Trek to Langtang Village", description: "Explore village and acclimatization." },
{ day: 4, title: "Trek to Kyanjin Gompa", description: "Visit monastery and cheese factory." },
{ day: 5, title: "Acclimatization & Optional Hikes", description: "Hike to nearby peaks for views." },
{ day: 6, title: "Yala Peak Base Camp", description: "Preparation for summit attempt." },
{ day: 7, title: "Summit Day", description: "Early morning climb and return to base camp." },
{ day: 8, title: "Descend to Lama Hotel", description: "Return trek through Langtang valley." },
{ day: 9, title: "Drive back to Kathmandu", description: "Celebrate achievement and rest." },
{ day: 10, title: "Departure", description: "Final shopping and airport transfer." }
],
maxGroupSize: 6,
cancellationPolicy: "Full refund if canceled 30 days before departure.",
isPopular: true,
isSoldOut: false,
difficulty: "moderate",
maxAltitude: "5,520m",
requirements: ["Good fitness", "Some high-altitude trekking experience", "Acclimatization"],
permits: ["Yala Peak Climbing Permit", "TIMS Card"],
equipment: ["Climbing boots", "Backpack", "Warm layers", "Sleeping bag", "Trekking poles", "Crampons"],
entryRequirements: ["Valid Nepal visa", "Travel insurance"]
}
];

export default function PeakClimbingPage() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTourSelect = (tour: Tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const handleBookNow = (tour: Tour) => {
    console.log("Booking tour:", tour.title);
    // Add your booking logic here
  };

  return (
    <main className="min-h-screen">
      <Hero 
        title="Nepal Peak Climbing Expeditions"
        description="Challenge yourself with Nepal's iconic peaks. From moderate trekking peaks to high-altitude summits, experience adventure, culture, and the breathtaking Himalayas with expert guides."
      />
      
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <ToursGrid tours={PEAK_TOURS} onTourSelect={handleTourSelect} />
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Peak Expeditions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Experienced Guides</h3>
              <p className="text-muted-foreground">
                Certified mountaineering guides ensure safety and provide expert training.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Well-Planned Itineraries</h3>
              <p className="text-muted-foreground">
                Carefully designed schedules allow proper acclimatization and maximized summit success.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Full Support</h3>
              <p className="text-muted-foreground">
                Logistics, permits, equipment, and meals are handled so you can focus on climbing.
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