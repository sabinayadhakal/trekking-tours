"use client";

import { Star, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface DataItem {
  id: number;
  name: string;
  experiencePhoto: string;
  content: string;
  trek: string;
  country: string;
  rating: number;
  photos?: string[];
  margin?: string;
  reviewDate?: string;
  reviewLink?: string;
}

const MasonryTestimonialGrid = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [isClient, setIsClient] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState<string[] | null>(null);
  const [data, setData] = useState<DataItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const tripadvisorUrl =
    "https://www.tripadvisor.com/Attraction_Review-g293890-d8417075-Reviews-Himkala_Adventure-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html";

  // Mock testimonials data
  const mockTestimonials: DataItem[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      experiencePhoto: "/images/review-1.jpg",
      content: "The Everest Base Camp trek was absolutely incredible! Our guide was knowledgeable and the entire experience was well-organized. The views were breathtaking and the cultural immersion was authentic.",
      trek: "Everest Base Camp Trek",
      country: "United States",
      rating: 5,
      reviewDate: "2024-01-15",
      photos: ["/images/everest-trek-1.jpg", "/images/everest-trek-2.jpg"]
    },
    {
      id: 2,
      name: "David Chen",
      experiencePhoto: "/images/review-2.jpg",
      content: "Annapurna Circuit exceeded all expectations. The team took care of every detail, from accommodation to meals. The scenery changed dramatically each day and the local communities were welcoming.",
      trek: "Annapurna Circuit",
      country: "Canada",
      rating: 5,
      reviewDate: "2024-01-10"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      experiencePhoto: "/images/review-3.jpg",
      content: "As a solo female traveler, I felt completely safe and supported throughout my Langtang Valley trek. The guide was attentive and the porter was incredibly strong and kind. Highly recommended!",
      trek: "Langtang Valley Trek",
      country: "Spain",
      rating: 5,
      reviewDate: "2024-01-08",
      photos: ["/images/langtang-1.jpg"]
    },
    {
      id: 4,
      name: "James Wilson",
      experiencePhoto: "/images/review-4.jpg",
      content: "The Manaslu Circuit was challenging but rewarding. The restricted area permit made it feel exclusive and the Tibetan-influenced culture was fascinating. Great food and comfortable teahouses.",
      trek: "Manaslu Circuit",
      country: "Australia",
      rating: 5,
      reviewDate: "2024-01-05"
    },
    {
      id: 5,
      name: "Lisa Tanaka",
      experiencePhoto: "/images/review-5.jpg",
      content: "Poon Hill sunrise was magical! Perfect for beginners who want to experience Himalayan trekking without the extreme altitude. The rhododendron forests were in full bloom during our visit.",
      trek: "Ghorepani Poon Hill Trek",
      country: "Japan",
      rating: 5,
      reviewDate: "2024-01-03"
    },
    {
      id: 6,
      name: "Robert Kim",
      experiencePhoto: "/images/review-6.jpg",
      content: "Upper Mustang was like stepping into another world. The ancient monasteries, cave dwellings, and desert landscape were unforgettable. Well worth the special permit cost.",
      trek: "Upper Mustang Trek",
      country: "South Korea",
      rating: 5,
      reviewDate: "2023-12-28",
      photos: ["/images/mustang-1.jpg", "/images/mustang-2.jpg", "/images/mustang-3.jpg"]
    }
  ];

  useEffect(() => {
    setIsClient(true);
    if (window.innerWidth < 640) setVisibleCount(1);
    else setVisibleCount(3);

    const loadData = async () => {
      try {
        setIsLoading(true);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setData(mockTestimonials);
      } catch (error) {
        console.error("Error loading reviews:", error);
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, data.length));
    setIsExpanded(true);
  };

  const showLess = () => {
    setVisibleCount(3);
    setIsExpanded(false);
    
    // Scroll to the top of the testimonials section
    setTimeout(() => {
      const element = document.getElementById("testimonials-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  if (!isClient) return null;

  if (isLoading) {
    return (
      <section className="bg-gradient-to-b from-[#E3F8FF]/40 via-[#CFE8FF]/30 to-[#A6D4FF]/20 py-12 sm:py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3C6AA6]"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials-section" className="bg-gradient-to-b from-[#E3F8FF]/40 via-[#CFE8FF]/30 to-[#A6D4FF]/20 py-12 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 px-4 sm:px-8">
          <h2 className="mb-2 text-center text-2xl sm:text-3xl lg:text-5xl font-semibold font-display text-[#2E4F7C]">
            Testimonials and Reviews
          </h2>
          <p className="hidden sm:block text-center text-sm sm:text-lg text-[#3C6AA6] max-w-2xl">
            Authentic experiences from travelers who have journeyed with us.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-8 sm:mt-14 w-full px-2 sm:px-8 md:px-16 lg:px-32">
          {data.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#3C6AA6]">No reviews yet. Check out our Tripadvisor reviews!</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {data.slice(0, visibleCount).map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      className={cn(
                        "rounded-xl p-4 sm:p-6 shadow-sm bg-[#f0f8ff] border-[#A6D4FF] transition-all duration-500 hover:shadow-lg hover:-translate-y-1 hover:border-[#3C6AA6] cursor-pointer group h-full",
                        testimonial.margin
                      )}
                    >
                      <div className="mb-2 flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="fill-[#FFD966] text-[#FFD966] h-4 w-4" />
                        ))}
                      </div>
                      <div className="text-[#1C3C50] mt-2 text-xs sm:text-sm leading-relaxed">
                        <q>{testimonial.content}</q>
                      </div>
                      {testimonial.reviewDate && (
                        <p className="text-[10px] sm:text-xs text-[#3C6AA6] mt-2">{testimonial.reviewDate}</p>
                      )}

                      <div className="mt-4 flex flex-col gap-1">
                        <p className="font-bold text-[#2E4F7C] font-display text-sm">{testimonial.name}</p>
                        <p className="text-[10px] sm:text-xs text-[#3C6AA6]">{testimonial.country}</p>
                        <p className="text-[10px] sm:text-xs text-[#5C90B0] font-medium">{testimonial.trek}</p>
                      </div>

                      {testimonial.photos && testimonial.photos.length > 0 && (
                        <Button
                          className="mt-2 sm:mt-4 bg-[#3C6AA6] hover:bg-[#2E4F7C] text-white text-xs sm:text-sm"
                          onClick={() => setSelectedPhotos(testimonial.photos!)}
                        >
                          View Photos
                        </Button>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>

              {data.length > 3 && (
                <div className="flex justify-center mt-4 sm:mt-10">
                  {visibleCount < data.length ? (
                    <motion.button
                      onClick={loadMore}
                      className="flex items-center gap-2 bg-[#3C6AA6] hover:bg-[#2E4F7C] rounded-full px-6 sm:px-8 py-3 sm:py-4 text-white text-sm sm:text-base font-medium group"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>Load More Reviews</span>
                      <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ChevronDown className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      </motion.div>
                    </motion.button>
                  ) : (
                    <motion.button
                      onClick={showLess}
                      className="flex items-center gap-2 bg-[#2E4F7C] hover:bg-[#1C3C50] rounded-full px-6 sm:px-8 py-3 sm:py-4 text-white text-sm sm:text-base font-medium group"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>Show Less</span>
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ChevronUp className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      </motion.div>
                    </motion.button>
                  )}
                </div>
              )}

              {visibleCount >= data.length && data.length > 6 && (
                <motion.div 
                  className="mt-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-sm text-[#3C6AA6] italic">
                    You've viewed all {data.length} reviews!
                  </p>
                </motion.div>
              )}
            </>
          )}
        </div>

        {/* Photos Modal */}
        <AnimatePresence>
          {selectedPhotos && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
              onClick={() => setSelectedPhotos(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-white rounded-xl p-4 sm:p-6 max-w-3xl w-full overflow-y-auto max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-end">
                  <Button onClick={() => setSelectedPhotos(null)} className="bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm">Close</Button>
                </div>
                <div className="mt-2 md:mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                  {selectedPhotos.map((photo, i) => (
                    <div key={i} className="relative w-full h-40 sm:h-64">
                      <Image
                        src={photo}
                        alt={`Photo ${i + 1}`}
                        fill
                        className="rounded-lg object-cover"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tripadvisor Link */}
        <div className="mt-8 sm:mt-20 flex flex-col items-center gap-4 sm:gap-6 px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm sm:text-lg font-medium text-[#3C6AA6] text-center"
          >
            See all reviews on Tripadvisor
          </motion.p>
          <motion.a
            href={tripadvisorUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="block"
          >
            <Image
              src="/images/TripAdvisor-Logo.png"
              alt="Tripadvisor"
              width={240}
              height={240}
              className="w-40 sm:w-60 h-40 sm:h-60 object-contain"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export { MasonryTestimonialGrid };