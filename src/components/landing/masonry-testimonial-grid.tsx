"use client";

import { Star } from "lucide-react";
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

const DATA: DataItem[] = [
  {
    id: 1,
    name: "Anna Michelle Goksoyr",
    experiencePhoto: "/images/reviews-1.jpg",
    photos: ["/images/reviews-1.jpg", "/images/treks/annapurna.jpg"],
    content: "Me and my friend did the Manaslu Circuit trek and we had a lot of fun and the guides were awesome and sabinaya was really cute and yeahh",
    trek: "Manaslu Circuit Trek without Tsum Valley",
    country: "Norway",
    rating: 5,
    margin: "mt-6",
    reviewDate: "May 15, 2025",
    reviewLink: "#"
  },
  // ...rest of DATA
];

const MasonryTestimonialGrid = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [isClient, setIsClient] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState<string[] | null>(null);

  const tripadvisorUrl =
    "https://www.tripadvisor.com/Attraction_Review-g293890-d8417075-Reviews-Himkala_Adventure-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html";

  useEffect(() => {
    setIsClient(true);
    if (window.innerWidth < 640) setVisibleCount(1);
    else setVisibleCount(3);
  }, []);

  const loadMore = () => setVisibleCount(prev => Math.min(prev + 3, DATA.length));

  if (!isClient) return null;

  return (
    <section className="bg-gradient-to-b from-[#E3F8FF]/40 via-[#CFE8FF]/30 to-[#A6D4FF]/20 py-12 sm:py-20 md:py-32 relative overflow-hidden">
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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {DATA.slice(0, visibleCount).map((testimonial) => (
              <Card
                key={testimonial.id}
                className={cn(
                  "rounded-xl p-4 sm:p-6 shadow-sm bg-[#f0f8ff] border-[#A6D4FF] transition-all duration-500 hover:shadow-lg hover:-translate-y-1 hover:border-[#3C6AA6] cursor-pointer group",
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
            ))}
          </div>

          {visibleCount < DATA.length && (
            <div className="flex justify-center mt-4 sm:mt-10">
              <motion.button
                onClick={loadMore}
                className="bg-[#3C6AA6] hover:bg-[#2E4F7C] rounded-full px-6 sm:px-8 py-3 sm:py-6 text-white text-sm sm:text-base"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                Read more reviews
              </motion.button>
            </div>
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
                    <Image key={i} src={photo} alt={`Photo ${i+1}`} width={500} height={500} className="rounded-lg object-cover w-full h-40 sm:h-64" />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Leave Review CTA */}
        <div className="flex justify-center mt-6 sm:mt-12">
          <motion.a
            href="/leave-a-review"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#3C6AA6] hover:bg-[#2E4F7C] text-white font-bold text-base sm:text-lg md:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-xl shadow-lg cursor-pointer"
          >
            Leave a Review
          </motion.a>
        </div>

        <div className="mt-8 sm:mt-20 flex flex-col items-center gap-4 sm:gap-6 px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm sm:text-lg font-medium text-[#3C6AA6] text-center"
          >
            See all reviews or write a review in Tripadvisor
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
