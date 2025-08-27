"use client";

import { motion } from "framer-motion";
import React from "react";

interface HeroProps {
  title: string;
  description?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  backgroundImage = "/images/hero-bhutan.jpg",
}) => {
  return (
    <div className="w-full">
      <div
        className="relative w-full h-[55vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay: same as FullScreenBackgroundHero */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c3c50]/70 via-[#3d6678]/50 to-[#1c3c50]/30" />

        {/* Text */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-[#f0f8ff]"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="hidden sm:block text-base sm:text-lg lg:text-2xl max-w-2xl text-[#e0f0f5]/90"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
