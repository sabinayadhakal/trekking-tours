"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Destination {
  title: string;
  description: string;
  image: string;
  category: string;
  highlights: string[];
  link: string;
}

const destinations: Destination[] = [
  {
    "title": "Nepal Trekking Tours & UNESCO World Heritage Excursions",
    "description": "Explore Nepal. An independent nation between China and India with 8 UNESCO World Heritage Sites, including Lumbini, the birthplace of Buddha. Discover Newari architecture, diverse ethnic cultures, and tailor-made trekking and cultural tour experiences.",
    "image": "/images/tab-controlled-nepal.jpg",
    "category": "Nepal Trekking & Tours",
    "highlights": ["8 UNESCO World Heritage Sites", "Birthplace of Buddha", "Rich Newari Architecture", "Diverse Ethnic Cultures", "Expert-Led Trekking Adventures", "Custom Cultural Experiences"],
    "link": "/destinations/nepal"
},
  {
    "title": "Bhutan Cultural Tours & Sustainable Travel Packages | Explore the Last Shangri-La",
    "description": "Explore Bhutan, the carbon-negative kingdom of the Eastern Himalayas. Experience Buddhist culture, Dzong architecture, traditional festivals, and tailor-made Bhutan cultural tours.",
    "image": "/images/tab-controlled-bhutan.jpg",
    "category": "Bhutan Tours & Cultural Experiences",
    "highlights": ["Carbon-Negative Country", "Ancient Buddhist Traditions", "Dzong Architecture", "Traditional Festivals", "Sustainable Tourism", "Gross National Happiness Philosophy"],
    "link": "/destinations/bhutan"
},
{
    "title": "Tibet Adventure Travel & Buddhist Pilgrimage Tours | Explore the Roof of the World",
    "description": "Explore Tibet, the Roof of the World, with its rich cultural heritage. Tour the UNESCO Potala Palace, discover sacred Mount Kailash, and experience Tibetan Buddhist traditions across breathtaking high-altitude regions.",
    "image": "/images/tab-controlled-tibet.jpg",
    "category": "Tibet Adventure & Pilgrimage Tours",
    "highlights": ["Potala Palace UNESCO Site", "Sacred Mount Kailash", "Tibetan Buddhist Traditions", "High-Altitude Ecosystems", "Buddhist Pilgrimage Routes", "Himalayan Landscapes"],
    "link": "/destinations/tibet"
}
];

const TabControlledGallery = () => {
  const [current, setCurrent] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [current, isMobile]);

  if (isMobile) return null;

  return (
    <section className="py-20 bg-gradient-to-b from-[#d0e7f2] via-[#a3cde6] to-[#7fbde1]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1f5f8b] mb-4 font-display">
            Himalayan Heritage & Culture
          </h2>
          <p className="text-[#2a2a2a] max-w-3xl mx-auto text-lg">
Explore ancient cities known for their rich culture, heritage sites, and beautiful mountain surroundings.          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-white rounded-full p-1 shadow-md border border-[#9cc8e2]">
              {destinations.map((destination: Destination, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    current === idx 
                      ? 'bg-[#1f5f8b] text-white shadow-lg' 
                      : 'text-[#1f5f8b] hover:text-[#4176a3]'
                  }`}
                >
                  {destination.category}
                </button>
              ))}
            </div>
          </div>

          {/* Animated Desktop Carousel */}
          <div className="relative rounded-2xl shadow-xl border border-[#9cc8e2] bg-white overflow-hidden">
            <AnimatePresence mode="wait">
              {destinations.map(
                (destination: Destination, idx: number) =>
                  idx === current && (
                    <motion.div
                      key={destination.category}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 1 }}
                      className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={destination.image}
                          alt={destination.category}
                          className="w-full h-full object-cover absolute inset-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1f5f8b]/30 to-transparent lg:bg-gradient-to-r"></div>
                      </div>

                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <h3 className="text-3xl font-bold text-[#1f5f8b] mb-4 font-display">
                          {destination.title}
                        </h3>
                        <p className="text-[#2a2a2a] mb-6 leading-relaxed">
                          {destination.description}
                        </p>

                        <div className="mb-8">
                          <h4 className="text-lg font-semibold text-[#1f5f8b] mb-3">Cultural Highlights:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {destination.highlights.map((highlight: string, i: number) => (
                              <div key={i} className="flex items-start">
                                <div className="bg-[#c7e0f4] rounded-full p-1 mt-0.5 mr-2">
                                  <svg className="w-4 h-4 text-[#1f5f8b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                </div>
                                <span className="text-[#2a2a2a] text-sm">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <a
                          href={destination.link}
                          className="self-start bg-[#1f5f8b] hover:bg-[#4176a3] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:scale-105"
                        >
                          Explore More
                        </a>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TabControlledGallery };
