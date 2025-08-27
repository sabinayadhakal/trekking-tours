"use client";

import { motion } from "framer-motion";
import React from "react";

interface HeroProps {
  title: string;
  description?: string;
  backgroundImage?: string;
}

const Hero = ({
  title,
  description,
  backgroundImage = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2070&q=80",
}: HeroProps) => {
  return (
    <section className="relative w-full h-[55vh] sm:h-[70vh] md:h-[60vh]">
      {/* Background image */}
      <img
        src={backgroundImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Mountain-blue-inspired overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c3c50]/70 via-[#3d6678]/50 to-[#1c3c50]/30" />

      {/* Text content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="hidden sm:block text-base sm:text-lg lg:text-xl max-w-2xl text-white leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Hero;
