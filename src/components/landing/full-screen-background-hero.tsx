"use client"

import { MoveUpRight, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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

// Hero data
const heroData: HeroData = {
  Title: "Experience Nepal: Trekking, Heritage Tours & Adventure Travel",
  Description: "Immersive Himalayan trekking and cultural tours across Nepal, Bhutan & Tibet crafted to reveal the region's true spirit.",
  Tagline: "SnowArt since 2015",
  Excerpt: "Adventure awaits in the Himalayas",
  DesktopBackgroundImage: [
    { url: "/images/landing-hero-5.jpg" }
  ]
};

const FullScreenBackgroundHero = () => {
  const router = useRouter();
  const navigateTo = (path: string) => router.push(path);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="relative min-h-[70vh] md:min-h-[85vh] w-full bg-[#0c1c2c]">
        <div className="container mx-auto px-4 pt-24 md:pt-24 pb-12 md:pb-16 flex flex-col justify-center">
          <div className="max-w-4xl">
            <div className="h-6 w-32 bg-[#2a5068] mb-6 md:mb-8 rounded"></div>
            <div className="h-8 md:h-12 bg-[#2a5068] rounded mb-4"></div>
            <div className="h-8 md:h-12 bg-[#2a5068] rounded mb-4 w-3/4"></div>
            <div className="h-4 bg-[#3d6678] rounded w-1/2"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] w-full overflow-hidden bg-gradient-to-br from-[#0c1c2c] via-[#1a3347] to-[#2a5068]">
      {/* Background with subtle pattern - only on desktop */}
      <div 
        className="absolute inset-0 opacity-10 hidden md:block"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Single background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroData.DesktopBackgroundImage[0].url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1c2c] via-[#0c1c2c]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1c2c]/90 via-[#0c1c2c]/60 to-transparent" />
      </div>

      {/* Content with increased padding on mobile only */}
      <div className="container relative z-10 mx-auto h-full px-4 pt-24 md:pt-24 pb-12 md:pb-16 flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Tagline with icon - Desktop version remains unchanged */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6 md:mb-8"
          >
            <div className="p-2 bg-gradient-to-br from-[#d0e6f0] to-[#a8d0e6] rounded-lg">
              <Mountain className="h-6 w-6 text-[#0c1c2c]" />
            </div>
            <span className="text-[#d0e6f0] font-display text-lg tracking-wider font-medium">
              {heroData.Tagline}
            </span>
          </motion.div>

          {/* Main title - Desktop version perfect as before */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[#f0f8ff] text-3xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="block">Experience</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#d0e6f0] via-[#a8d0e6] to-[#7ab8d9]">
              Nepal
            </span>
            <span className="block text-xl md:text-3xl lg:text-4xl font-normal mt-3 md:mt-4 text-[#e0f0f5]">
              Trekking, Heritage Tours & Adventure Travel
            </span>
          </motion.h1>

          {/* Description - Hidden on mobile, shown on desktop (unchanged) */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:block text-[#c0d9e7] text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            {heroData.Description}
          </motion.p>

          {/* Short excerpt for mobile - Only mobile change */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="block md:hidden text-[#a8d0e6] text-sm mb-8 max-w-md"
          >
            Immersive Himalayan adventures
          </motion.p>

          {/* CTA Buttons - Desktop unchanged, mobile optimized */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-0"
          >
            <Button 
              onClick={() => navigateTo('/destinations/nepal')} 
              className="bg-gradient-to-r from-[#d0e6f0] to-[#a8d0e6] text-[#0c1c2c] hover:from-[#c0d9e7] hover:to-[#96c4e0] font-semibold px-6 py-4 md:px-8 md:py-6 text-sm md:text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-h-[48px]"
            >
              Explore Tours
            </Button>
            
            <Button 
              onClick={() => navigateTo('/contact')} 
              variant="outline"
              className="border-2 border-[#d0e6f0] text-[#d0e6f0] hover:bg-[#d0e6f0] hover:text-[#0c1c2c] bg-transparent px-6 py-4 md:px-8 md:py-6 text-sm md:text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-h-[48px]"
            >
              Plan Your Trek 
              <MoveUpRight className="h-4 w-4 md:h-5 md:w-5 ml-2" />
            </Button>
          </motion.div>

          {/* Stats/Features - Hidden on mobile, desktop unchanged */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden md:block mt-16 pt-8 border-t border-[#3d6678]/30"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Destinations", value: "50+" },
                { label: "Happy Travelers", value: "5000+" },
                { label: "Years Experience", value: "9+" },
                { label: "Expert Guides", value: "100+" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d0e6f0] to-[#7ab8d9]">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-[#a8d0e6] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - only on desktop (unchanged) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center">
          <span className="text-[#a8d0e6] text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-[#a8d0e6]/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#a8d0e6] rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export { FullScreenBackgroundHero };