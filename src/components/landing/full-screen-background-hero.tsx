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
  DesktopBackgroundImage: HeroImage[];
  MobileBackgroundImage: HeroImage;
}

// Fallback data
const fallbackData: HeroData = {
  Title: "Explore the wildness",
  Description: "Journey through Nepal's ancient towns and high mountains, experiencing both heritage and nature.",
  Tagline: "SnowArt since 2015",
  DesktopBackgroundImage: [
    { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { url: "https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" }
  ],
  MobileBackgroundImage: { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" }
};

const FullScreenBackgroundHero = () => {
  const router = useRouter();
  const navigateTo = (path: string) => router.push(path);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data from Strapi
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        setIsLoading(true);
        const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
        const apiToken = process.env.STRAPI_API_TOKEN;

        if (!apiUrl) {
          console.error("NEXT_PUBLIC_STRAPI_URL is not defined");
          setHeroData(fallbackData);
          return;
        }

        const headers: HeadersInit = {};
        if (apiToken) headers['Authorization'] = `Bearer ${apiToken}`;

        const response = await fetch(`${apiUrl}/api/hero-page-landing?populate=*`, { headers });

        if (!response.ok) {
          const text = await response.text();
          console.error("Fetch failed:", response.status, text);
          setHeroData(fallbackData);
          return;
        }

        const data = await response.json();
        console.log("Strapi API Response:", data);

        if (data.data) {
          const attributes = data.data;

          const transformedData: HeroData = {
            Title: attributes.Title || fallbackData.Title,
            Description: attributes.Description || fallbackData.Description,
            Tagline: attributes.Tagline || fallbackData.Tagline,
            DesktopBackgroundImage: 
              attributes.DesktopBackgroundImage?.map((img: any) => ({
                url: img.url.startsWith('http') 
                  ? img.url 
                  : `${apiUrl}${img.url}`
              })) || fallbackData.DesktopBackgroundImage,
            MobileBackgroundImage: 
              attributes.MobileBackgroundImage
                ? { 
                    url: attributes.MobileBackgroundImage.url.startsWith('http')
                      ? attributes.MobileBackgroundImage.url
                      : `${apiUrl}${attributes.MobileBackgroundImage.url}`
                  }
                : fallbackData.MobileBackgroundImage
          };

          console.log("Transformed Data:", transformedData);
          setHeroData(transformedData);
        } else {
          console.warn("No valid data found in response, using fallback");
          setHeroData(fallbackData);
        }

      } catch (error) {
        console.error("Error fetching hero data:", error);
        setHeroData(fallbackData);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  // Cycle desktop images every 8s
  useEffect(() => {
    if (!heroData) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % heroData.DesktopBackgroundImage.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [heroData]);

  const data = heroData || fallbackData;

  return (
    <>
      <section className="relative h-[60vh] md:h-screen w-full overflow-hidden py-12 md:py-20">

        {/* Mobile background */}
        <div className="absolute inset-0 z-10 md:hidden">
          <img src={data.MobileBackgroundImage.url} alt="Nepal landscape" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c3c50]/70 via-[#3d6678]/50 to-[#1c3c50]/30" />
        </div>

        {/* Desktop slideshow */}
        <div className="absolute inset-0 z-10 hidden md:block">
          <AnimatePresence>
            {data.DesktopBackgroundImage.map((img, index) => (
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c3c50]/70 via-[#3d6678]/50 to-[#1c3c50]/30" />
        </div>

        {/* Desktop overlay */}
        <div className="container relative z-20 h-full w-full max-w-[85rem] mx-auto hidden md:flex flex-col justify-center px-4">
          <div className="flex flex-col gap-4 max-w-[61.375rem]">
            <div className="flex items-center gap-3 mb-6">
              <Mountain className="h-10 w-10 text-[#d0e6f0]" />
              <span className="text-[#d0e6f0] font-display text-lg tracking-wide">{data.Tagline}</span>
            </div>
            <h1 className="font-display text-[#f0f8ff] text-5xl lg:text-7xl font-bold leading-tight">{data.Title}</h1>
            <p className="text-[#e0f0f5]/90 text-2xl font-light max-w-3xl mt-6 leading-relaxed">{data.Description}</p>
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
      </section>

      {/* Mobile overlay */}
      <div className="absolute inset-0 z-20 md:hidden flex flex-col justify-center items-center text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c3c50]/70 via-[#3d6678]/50 to-[#1c3c50]/30" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-[#f0f8ff] text-4xl sm:text-3xl font-bold leading-tight mb-6 z-10"
        >
          {data.Title}
        </motion.h1>
        <div className="flex flex-row justify-center gap-4 flex-wrap z-10">
          <Button onClick={() => navigateTo('/destinations/nepal')} className="bg-[#d0e6f0] text-[#1c3c50] hover:bg-[#c0d9e7] font-semibold px-6 py-4 text-sm rounded-full">Explore Tours</Button>
          <Button onClick={() => navigateTo('/contact')} variant="outline" className="border-[#d0e6f0]/60 text-[#d0e6f0] hover:text-[#1c3c50] border bg-transparent px-6 py-4 text-sm rounded-full">Plan Your Trek</Button>
        </div>
      </div>
    </>
  );
};

export { FullScreenBackgroundHero };
