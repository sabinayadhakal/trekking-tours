"use client"

import { MoveUpRight, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Define types for your data
interface HeroImage {
  url: string;
}

interface HeroData {
  Title: string;
  Description: string;
  Tagline: string;
  Excerpt: string;
  DesktopBackgroundImage: HeroImage[];
}

// Hero data - now using static data instead of Strapi
const heroData: HeroData = {
  Title: "Experience Nepal: Trekking, Heritage Tours & Adventure Travel",
  Description: "Immersive Himalayan trekking and cultural tours across Nepal, Bhutan & Tibet crafted to reveal the region’s true spirit.",
  Tagline: "SnowArt since 2015",
  Excerpt: "Adventure awaits in the Himalayas",
  DesktopBackgroundImage: [
    { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { url: "https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" }
  ]
};

const FullScreenBackgroundHero = () => {
  const router = useRouter();
  const navigateTo = (path: string) => router.push(path);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Cycle images every 8s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % heroData.DesktopBackgroundImage.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <section className="relative h-[60vh] md:h-screen w-full overflow-hidden py-12 md:py-20 bg-gray-200 animate-pulse">
        <div className="container relative z-20 h-full w-full max-w-[85rem] mx-auto flex flex-col justify-center px-4">
          <div className="flex flex-col gap-4 max-w-[61.375rem]">
            <div className="h-10 w-48 bg-gray-300 rounded mb-6"></div>
            <div className="h-16 md:h-24 bg-gray-300 rounded w-3/4"></div>
            <div className="h-6 bg-gray-300 rounded w-1/2 mt-4"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative h-[60vh] md:h-screen w-full overflow-hidden py-12 md:py-20">

        {/* Mobile slideshow with light blue overlay */}
        <div className="absolute inset-0 z-10 md:hidden">
          {heroData.DesktopBackgroundImage.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${img.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          ))}
          {/* Light blue overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c3c50]/70 via-[#3d6678]/50 to-[#1c3c50]/30" />
        </div>

        {/* Desktop slideshow */}
        <div className="absolute inset-0 z-10 hidden md:block">
          <AnimatePresence>
            {heroData.DesktopBackgroundImage.map((img, index) => (
              index === currentIndex && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2 }}
                  className="absolute inset-0 h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${img.url})` }}
                />
              )
            ))}
          </AnimatePresence>
          {/* Desktop overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c3c50]/70 via-[#3d6678]/50 to-[#1c3c50]/30" />
        </div>

        {/* Desktop content */}
        <div className="container relative z-20 h-full w-full max-w-[85rem] mx-auto hidden md:flex flex-col justify-center px-4">
          <div className="flex flex-col gap-4 max-w-[61.375rem]">
            <div className="flex items-center gap-3 mb-6">
              <Mountain className="h-10 w-10 text-[#d0e6f0]" />
              <span className="text-[#d0e6f0] font-display text-lg tracking-wide">{heroData.Tagline}</span>
            </div>
            <h1 className="font-display text-[#f0f8ff] text-5xl lg:text-7xl font-bold leading-tight">{heroData.Title}</h1>
            <p className="text-[#e0f0f5]/90 text-2xl font-light max-w-3xl mt-6 leading-relaxed">{heroData.Description}</p>
            <div className="flex gap-4 mt-6 flex-wrap">
              <Button onClick={() => navigateTo('/destinations/nepal')} className="bg-[#d0e6f0] text-[#1c3c50] hover:bg-[#c0d9e7] font-semibold px-8 py-6 text-base rounded-full">Explore Tours</Button>
              <Button onClick={() => navigateTo('/contact')} variant="outline" className="border-[#d0e6f0]/60 text-[#d0e6f0] hover:text-[#1c3c50] border bg-transparent px-8 py-6 text-base rounded-full">
                Plan Your Trek <MoveUpRight className="h-5 w-5 ml-2 inline-block" />
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

        {/* Mobile content - Different for small and larger phones */}
        <div className="absolute inset-0 z-20 md:hidden flex flex-col justify-center items-center text-center px-6">
          
          {/* Tagline - Hidden on small screens, visible on larger phones */}
          <div className="hidden xs:flex flex-col items-center gap-4 mb-6 z-10">
            <Mountain className="h-8 w-8 text-[#d0e6f0]" />
            <span className="text-[#d0e6f0] font-display text-sm tracking-wide">{heroData.Tagline}</span>
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-[#f0f8ff] text-3xl xs:text-4xl font-bold leading-tight mb-4 z-10"
          >
            {heroData.Title}
          </motion.h1>
          
          {/* Excerpt - Only shown on small screens with different color */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="xs:hidden text-[#c0d9e7] text-sm font-medium mb-6 z-10 max-w-xs"
          >
            {heroData.Excerpt}
          </motion.p>
          
          {/* Description - Only shown on larger phones */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden xs:block text-[#e0f0f5]/90 text-base font-light mb-6 z-10 max-w-md"
          >
            {heroData.Description}
          </motion.p>
          
          <div className="flex flex-row justify-center gap-3 flex-wrap z-10">
            <Button onClick={() => navigateTo('/destinations/nepal')} className="bg-[#d0e6f0] text-[#1c3c50] hover:bg-[#c0d9e7] font-semibold px-5 py-3 text-sm rounded-full">Explore Tours</Button>
            <Button onClick={() => navigateTo('/contact')} variant="outline" className="border-[#d0e6f0]/60 text-[#d0e6f0] hover:text-[#1c3c50] border bg-transparent px-5 py-3 text-sm rounded-full">
              Plan Your Trek <MoveUpRight className="h-4 w-4 ml-1 inline-block" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export { FullScreenBackgroundHero };