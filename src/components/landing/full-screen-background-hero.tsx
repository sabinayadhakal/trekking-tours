"use client"

import { MoveUpRight, Mountain, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

// Define types for your data
interface HeroImage {
  url: string;
  alt?: string;
  thumbnail?: string;
}

interface HeroData {
  Title: string;
  Description: string;
  Tagline: string;
  Excerpt: string;
  DesktopBackgroundImage: HeroImage[];
}

// Optimized hero data with smaller image files
const heroData: HeroData = {
  Title: "Experience Nepal: Trekking, Heritage Tours & Adventure Travel",
  Description: "Immersive Himalayan trekking and cultural tours across Nepal, Bhutan & Tibet crafted to reveal the region's true spirit.",
  Tagline: "SnowArt since 2015",
  Excerpt: "Adventure awaits in the Himalayas",
  DesktopBackgroundImage: [
    { 
      url: "/images/optimized/landing-hero-0-optimized-large.jpg", 
      alt: "Himalayan mountain landscape",
      thumbnail: "/images/optimized/landing-hero-0-thumbnail.jpg"
    },
    { 
      url: "/images/optimized/landing-hero-1-optimized-large.jpg", 
      alt: "Trekking in Nepal",
      thumbnail: "/images/optimized/landing-hero-1-thumbnail.jpg"
    },
    { 
      url: "/images/optimized/landing-hero-2-optimized-large.jpg", 
      alt: "Cultural heritage of Nepal",
      thumbnail: "/images/optimized/landing-hero-2-thumbnail.jpg"
    },
    { 
      url: "/images/optimized/landing-hero-3-optimized-large.jpg", 
      alt: "Adventure travel in Himalayas",
      thumbnail: "/images/optimized/landing-hero-3-thumbnail.jpg"
    },
    { 
      url: "/images/optimized/landing-hero-5-optimized-large.jpg", 
      alt: "Tibetan cultural tour",
      thumbnail: "/images/optimized/landing-hero-5-thumbnail.jpg"
    },
  ]
};

const FullScreenBackgroundHero = () => {
  const router = useRouter();
  const navigateTo = (path: string) => router.push(path);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollPrompt, setShowScrollPrompt] = useState(true);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const loadPromises = heroData.DesktopBackgroundImage.map((img) => {
        return new Promise<void>((resolve) => {
          const image = new window.Image();
          image.src = img.url;
          image.onload = () => resolve();
          image.onerror = () => resolve();
        });
      });

      try {
        await Promise.all(loadPromises);
      } catch (error) {
        console.error('Error preloading images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    preloadImages();

    return () => clearTimeout(timeoutId);
  }, []);

  // Cycle images every 8s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % heroData.DesktopBackgroundImage.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Hide scroll prompt after 5 seconds or on scroll
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollPrompt(false);
    }, 5000);

    const handleScroll = () => {
      setShowScrollPrompt(false);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  if (isLoading) {
    return (
      <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700">
        <div className="container relative z-20 h-full w-full max-w-[85rem] mx-auto flex flex-col justify-center px-4">
          <div className="flex flex-col gap-4 max-w-[61.375rem]">
            <div className="h-10 w-48 bg-gray-800 rounded mb-6 animate-pulse"></div>
            <div className="h-16 md:h-24 bg-gray-800 rounded w-3/4 animate-pulse"></div>
            <div className="h-6 bg-gray-800 rounded w-1/2 mt-4 animate-pulse"></div>
            <div className="h-12 w-48 bg-gray-800 rounded mt-8 animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Mobile slideshow - Full screen */}
      <div className="absolute inset-0 z-10 md:hidden">
        {heroData.DesktopBackgroundImage.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <Image
              src={img.url}
              alt={img.alt || "Hero background image"}
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover object-center"
              quality={75}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
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
                className="absolute inset-0 h-full w-full"
              >
                <Image
                  src={img.url}
                  alt={img.alt || "Hero background image"}
                  fill
                  sizes="100vw"
                  priority={index === 0}
                  className="object-cover object-center"
                  quality={80}
                  loading={index === 0 ? "eager" : "lazy"}
                  placeholder="blur"
                  blurDataURL={img.thumbnail || "/images/placeholder.jpg"}
                />
              </motion.div>
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
            <Button onClick={() => navigateTo('/destinations/nepal')} className="bg-[#d0e6f0] text-[#1c3c50] hover:bg-[#c0d9e7] font-semibold px-8 py-6 text-base rounded-full transition-all hover:scale-105">Explore Tours</Button>
            <Button onClick={() => navigateTo('/contact')} variant="outline" className="border-[#d0e6f0]/60 text-[#d0e6f0] hover:text-[#1c3c50] border bg-transparent px-8 py-6 text-base rounded-full transition-all hover:scale-105">
              Plan Your Trek <MoveUpRight className="h-5 w-5 ml-2 inline-block" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile content - Centered with proper spacing */}
      <div className="absolute inset-0 z-20 md:hidden flex flex-col justify-center items-center text-center px-6">
        <div className="flex flex-col items-center gap-4 mb-6 z-10">
          <Mountain className="h-10 w-10 text-[#d0e6f0]" />
          <span className="text-[#d0e6f0] font-display text-base tracking-wide">{heroData.Tagline}</span>
        </div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-[#f0f8ff] text-4xl font-bold leading-tight mb-6 z-10 px-4"
        >
          {heroData.Title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#e0f0f5]/90 text-lg font-light mb-8 z-10 max-w-md px-4"
        >
          {heroData.Description}
        </motion.p>
        
        <div className="flex flex-row justify-center gap-4 flex-wrap z-10 mb-16">
          <Button onClick={() => navigateTo('/destinations/nepal')} className="bg-[#d0e6f0] text-[#1c3c50] hover:bg-[#c0d9e7] font-semibold px-6 py-4 text-base rounded-full transition-all hover:scale-105">
            Explore Tours
          </Button>
          <Button onClick={() => navigateTo('/contact')} variant="outline" className="border-[#d0e6f0]/60 text-[#d0e6f0] hover:text-[#1c3c50] border bg-transparent px-6 py-4 text-base rounded-full transition-all hover:scale-105">
            Plan Your Trek <MoveUpRight className="h-5 w-5 ml-2 inline-block" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator - Desktop Only (Arrow style) */}
      {showScrollPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={handleScrollDown}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center text-[#e0f0f5]/80 z-30 cursor-pointer group"
        >
          <span className="text-lg mb-3 font-medium group-hover:text-[#d0e6f0] transition-colors">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="flex flex-col items-center"
          >
            <ChevronDown className="h-8 w-8 group-hover:scale-110 transition-transform" />
          </motion.div>
        </motion.div>
      )}

      {/* Scroll indicator - Mobile (Arrow style) */}
      {showScrollPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={handleScrollDown}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:hidden flex flex-col items-center text-[#e0f0f5]/80 z-30 cursor-pointer group"
        >
          <span className="text-sm mb-2 font-medium group-hover:text-[#d0e6f0] transition-colors">Scroll down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="flex flex-col items-center"
          >
            <ChevronDown className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export { FullScreenBackgroundHero };