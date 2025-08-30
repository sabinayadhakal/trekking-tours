"use client"

import { MoveUpRight, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const desktopImages = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
];

const FullScreenBackgroundHero = () => {
  const router = useRouter();
  const navigateTo = (path: string) => router.push(path);

  const [currentIndex, setCurrentIndex] = useState(0);

  // cycle images every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % desktopImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative h-[60vh] md:h-screen w-full overflow-hidden py-12 md:py-20">

        {/* Mobile background */}
        <div className="absolute inset-0 z-10 md:hidden">
          <img
            src={desktopImages[0]}
            alt="Nepal landscape"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c3c50]/70 via-[#3d6678]/50 to-[#1c3c50]/30" />
        </div>

        {/* Desktop hero slideshow */}
        <div className="absolute inset-0 z-10 hidden md:block">
          <AnimatePresence>
            {desktopImages.map((img, index) => {
              return (
                index === currentIndex && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${img})` }}
                  />
                )
              )
            })}
          </AnimatePresence>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c3c50]/70 via-[#3d6678]/50 to-[#1c3c50]/30" />
        </div>

        {/* Overlay content (desktop) */}
        <div className="container relative z-20 h-full w-full max-w-[85rem] mx-auto hidden md:flex flex-col justify-center px-4">
          <div className="flex flex-col gap-4 max-w-[61.375rem]">
            <div className="flex items-center gap-3 mb-6">
              <Mountain className="h-10 w-10 text-[#d0e6f0]" />
              <span className="text-[#d0e6f0] font-display text-lg tracking-wide">
                SnowArt Since 2015
              </span>
            </div>

            <h1 className="font-display text-[#f0f8ff] text-5xl lg:text-7xl font-bold leading-tight">
              Explore the wildness of Nepal with Himkala Adventure
            </h1>

            <p className="text-[#e0f0f5]/90 text-2xl font-light max-w-3xl mt-6 leading-relaxed">
              Journey through Nepal's ancient towns and high mountains, experiencing both heritage and nature.
            </p>

            <div className="flex gap-4 mt-6 flex-wrap">
              <Button
                onClick={() => navigateTo('/destinations/nepal')}
                className="bg-[#d0e6f0] text-[#1c3c50] hover:bg-[#c0d9e7] font-semibold px-8 py-6 text-base rounded-full"
              >
                Explore Tours
              </Button>
              <Button
                onClick={() => navigateTo('/contact')}
                variant="outline"
                className="border-[#d0e6f0]/60 text-[#d0e6f0] hover:text-[#1c3c50] border bg-transparent px-8 py-6 text-base rounded-full"
              >
                Plan Your Trek
                <MoveUpRight className="h-5 w-5 ml-2 inline-block" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center text-[#e0f0f5]/80"
        >
          <span className="text-sm mb-2 font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-[#d0e6f0]/50 rounded-full flex justify-center p-1">
            <div className="w-1 h-1 bg-[#d0e6f0] rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Mobile overlay content */}
      <div className="absolute inset-0 z-20 md:hidden flex flex-col justify-center items-center text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c3c50]/70 via-[#3d6678]/50 to-[#1c3c50]/30" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-[#f0f8ff] text-4xl sm:text-3xl font-bold leading-tight mb-6 z-10"
        >
          Explore the wildness of Nepal with Himkala Adventure
        </motion.h1>

        <div className="flex flex-row justify-center gap-4 flex-wrap z-10">
          <Button
            onClick={() => navigateTo('/destinations/nepal')}
            className="bg-[#d0e6f0] text-[#1c3c50] hover:bg-[#c0d9e7] font-semibold px-6 py-4 text-sm rounded-full"
          >
            Explore Tours
          </Button>
          <Button
            onClick={() => navigateTo('/contact')}
            variant="outline"
            className="border-[#d0e6f0]/60 text-[#d0e6f0] hover:text-[#1c3c50] border bg-transparent px-6 py-4 text-sm rounded-full"
          >
            Plan Your Trek
          </Button>
        </div>
      </div>
    </>
  );
};

export { FullScreenBackgroundHero };
