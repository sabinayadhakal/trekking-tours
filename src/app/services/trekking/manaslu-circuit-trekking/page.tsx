"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Page() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Hello! I'm interested in booking the Manaslu Circuit Trek. Please send me more information."
  );

  // Don't render anything until mounted
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#4A8CA5] via-[#D9E6EC] to-[#FDFDFD]">
        {/* Loading skeleton */}
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#4A8CA5] via-[#D9E6EC] to-[#FDFDFD] text-gray-800">
      {/* Hero Section - NO FRAMER-MOTION */}
      <section 
        className="relative w-full h-[60vh] flex items-center justify-center bg-center bg-cover bg-[#1c3c50]"
        style={{ backgroundImage: `url('/images/manaslu-hero.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c3c50]/60 via-[#3d6678]/40 to-[#1c3c50]/20" />
        
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Manaslu Circuit Trek
          </h1>
          <p className="text-lg md:text-2xl font-light max-w-3xl mx-auto">
            Trek around the world&apos;s eighth highest peak - Mount Manaslu (26,759 ft)
          </p>
          <div className="mt-8">
            <span className="inline-block bg-[#2B5C6B]/90 px-6 py-2 rounded-full text-white font-semibold">
              20 Days Trek • Max Altitude: 5,106m
            </span>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {["overview", "itinerary", "cost", "faq", "gallery"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? "bg-[#2B5C6B] text-white"
                    : "text-gray-600 hover:bg-[#EAF4F8]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-12">
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-3xl font-semibold text-[#2B5C6B] mb-6">Trek Overview</h2>
              <div className="space-y-4 text-lg">
                <p>
                  Manaslu Circuit Trekking focuses on wilderness and authentic village experiences. 
                  This trek wraps around Mount Manaslu, the world&apos;s eighth highest peak, looming at 
                  26,759 ft. The journey begins by climbing against the current of the Budhi Gandaki 
                  River for nearly three vertical miles.
                </p>
                <p>
                  The path sweeps through gorges where glaciers hang and drain the frozen eaves of 
                  the planet. We cross suspension bridges and pass through fields of barley, following 
                  an ancient route along which caravans of yaks hauling salt from Tibet have traveled 
                  for thousands of years.
                </p>
                <p>
                  Climbing higher to the last clusters of homes before the mountain wall of Himalaya, 
                  we step into Tibetan territory. Architecture matches these ethnic lines and as altitude 
                  rises, so does the number of monasteries, Mani walls and Chortens.
                </p>
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#EAF4F8] rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-[#2B5C6B] mb-4">Best Seasons</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-[#4A8CA5] rounded-full mr-3"></div>
                    <span className="font-medium">Spring:</span> March to May
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-[#4A8CA5] rounded-full mr-3"></div>
                    <span className="font-medium">Autumn:</span> September to November
                  </li>
                  <li className="text-gray-600 text-sm mt-4">
                    *More than half of the annual 2,000 visitors to Manaslu make their pilgrimage in October
                  </li>
                </ul>
              </div>

              <div className="bg-[#EAF4F8] rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-[#2B5C6B] mb-4">Trip Highlights</h3>
                <ul className="space-y-3">
                  {[
                    "Sightseeing in Historical Monuments in Kathmandu",
                    "Scenic drive from Kathmandu to Aarughat",
                    "Breathtaking view of Manaslu and Annapurna ranges",
                    "Natural hot spring shower",
                    "Crossing Larkya La Pass (5,106m)",
                    "Experience Tibetan culture and lifestyle"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#2B5C6B] rounded-full mt-2 mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        )}

        {/* Itinerary Tab */}
        {activeTab === "itinerary" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-3xl font-semibold text-[#2B5C6B] mb-8">Day to Day Itinerary</h2>
              <div className="space-y-6">
                {[
                  {day: "Day 01", title: "Arrival in Kathmandu", desc: "Arrive at Tribhuvan International Airport. Transfer to hotel. Evening trek briefing."},
                  {day: "Day 02", title: "Kathmandu Sightseeing", desc: "Visit historical monuments and prepare for trek."},
                  {day: "Day 03", title: "Drive to Aarughat Bazaar", desc: "7 hours scenic drive (570m)."},
                  {day: "Day 04-05", title: "Trek to Machhakhola", desc: "Gradual ascent along Budhi Gandaki River."},
                  {day: "Day 06-07", title: "Trek to Philim", desc: "Enter Manaslu Conservation Area."},
                  {day: "Day 08-09", title: "Trek to Deng & Namrung", desc: "Pass through Tibetan influenced villages."},
                  {day: "Day 10-11", title: "Trek to Samagaun", desc: "Close-up views of Mt. Manaslu."},
                  {day: "Day 12", title: "Acclimatization Day", desc: "Hike to Birendra Lake and Manaslu Base Camp."},
                  {day: "Day 13-14", title: "Trek to Samdo & Dharamsala", desc: "High altitude villages, prepare for pass crossing."},
                  {day: "Day 15", title: "Cross Larkya La Pass", desc: "Challenging pass crossing (5,106m) to Bimthang."},
                  {day: "Day 16-18", title: "Descent to Beshishahar", desc: "Gradual descent through forests and villages."},
                  {day: "Day 19", title: "Drive to Kathmandu", desc: "8 hours scenic drive back to Kathmandu."},
                  {day: "Day 20", title: "Departure", desc: "Transfer to international airport."}
                ].map((item, index) => (
                  <div key={index} className="flex border-l-4 border-[#2B5C6B] pl-4 py-2">
                    <div className="w-24">
                      <span className="font-bold text-[#2B5C6B]">{item.day}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Cost Tab */}
        {activeTab === "cost" && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h3 className="text-2xl font-semibold text-[#2B5C6B] mb-6">Cost Includes</h3>
                <ul className="space-y-3">
                  {[
                    "Airport pick up & drop by private vehicle",
                    "3 nights' twin sharing hotels in Kathmandu with Breakfast",
                    "Guided city tour in Kathmandu",
                    "Full board meals during the trek (Breakfast + Lunch + Dinner)",
                    "Guest Houses/Lodges accommodation during trek",
                    "Professional English speaking guide",
                    "Required number of porters (2 Trekkers = 1 Porter)",
                    "All staff salaries, insurance, equipment and medicine",
                    "Manaslu Conservation Area permit and Special permit",
                    "TIMS Card and Restricted Area Entry Permit",
                    "Down Jacket, Duffel bag and sleeping bag if required",
                    "All transportation as per itinerary",
                    "Farewell dinner in traditional Nepali restaurant"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="text-green-600 mr-3">✓</div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h3 className="text-2xl font-semibold text-[#2B5C6B] mb-6">Cost Excludes</h3>
                <ul className="space-y-3">
                  {[
                    "Lunch and dinner in Kathmandu",
                    "Entrance fee in monuments during tour",
                    "Emergency rescue and evacuation cost",
                    "Travel insurance",
                    "Nepal entry visa fee",
                    "Personal expenses (phone, hot shower, laundry, etc.)",
                    "Personal trekking equipment",
                    "Tips for trekking staff and driver",
                    "Any other expenses not mentioned"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="text-red-500 mr-3">✗</div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === "faq" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-3xl font-semibold text-[#2B5C6B] mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What physical fitness do I need?",
                    a: "You should be in good physical shape, able to hike 7-12 miles per day with a day pack. Aerobic conditioning is important due to high altitude. We recommend at least one hour of aerobic exercise 3-4 times per week for 1 month before arrival."
                  },
                  {
                    q: "Do I need a guide for Manaslu Circuit?",
                    a: "Yes, the Nepal Government requires a registered guide for Manaslu Circuit as it's a restricted area. Guides ensure safety, provide local knowledge, and help with navigation and cultural interactions."
                  },
                  {
                    q: "What's the accommodation like?",
                    a: "In Kathmandu: 2-3 star hotels. During trek: Teahouses/guesthouses with twin sharing rooms. Facilities are basic but clean with shared bathrooms. Sleeping bag provided if needed."
                  },
                  {
                    q: "Is there electricity and internet?",
                    a: "Most teahouses have charging facilities (extra cost). Internet available in lower villages but limited at higher altitudes. Local SIM cards (NCELL/NTC) work in most areas."
                  },
                  {
                    q: "What about altitude sickness?",
                    a: "We include acclimatization days and follow proper ascent guidelines. Our guides are trained in first aid and altitude sickness recognition. Proper hydration and gradual ascent are key."
                  },
                  {
                    q: "Do I need travel insurance?",
                    a: "Yes, comprehensive travel insurance including emergency helicopter evacuation is mandatory. Ensure it covers trekking up to 5,500m altitude."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b pb-4">
                    <h4 className="font-bold text-lg text-[#2B5C6B] mb-2">{faq.q}</h4>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === "gallery" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-3xl font-semibold text-[#2B5C6B] mb-8">Trek Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {alt: "Mount Manaslu view"},
                  {alt: "Larkya La Pass"},
                  {alt: "Traditional village"},
                  {alt: "Suspension bridge"},
                  {alt: "Buddhist monastery"},
                  {alt: "Tea house accommodation"}
                ].map((img, index) => (
                  <div key={index} className="relative h-64 rounded-xl overflow-hidden shadow-md bg-gradient-to-br from-[#4A8CA5] to-[#2B5C6B]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-medium text-center p-4">{img.alt}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Booking CTA */}
      <section className="bg-[#EAF4F8] py-16 mt-8">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold mb-6 text-[#2B5C6B]">
            Ready for Your Manaslu Adventure?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable journey around the eighth highest mountain in the world. 
            Experience authentic Himalayan culture and breathtaking landscapes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="/contact"
              className="px-8 py-4 bg-[#2B5C6B] text-white font-semibold rounded-2xl shadow-lg hover:bg-[#246071] transition-colors duration-300"
            >
              Book Your Trek Now
            </a>
            <span className="text-gray-500 hidden sm:block">or</span>
            <a
              href={`https://wa.me/9779841376470?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 text-white font-semibold rounded-2xl shadow-lg hover:bg-green-600 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.49" />
              </svg>
              WhatsApp Inquiry
            </a>
          </div>
          <p className="mt-8 text-lg text-gray-600">
            Contact us for customized itineraries and group discounts
          </p>
        </div>
      </section>
    </main>
  );
}