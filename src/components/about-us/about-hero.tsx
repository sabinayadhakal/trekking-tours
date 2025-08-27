"use client";

import { motion } from "framer-motion";
import React from "react";

interface AboutHeroProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description?: string;
  overlay?: string;
  priority?: boolean;
}

const AboutHero: React.FC<AboutHeroProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  overlay,
  priority = false,
}) => {
  return (
    <section className="relative w-full overflow-hidden h-[55vh] sm:h-[70vh] md:h-[60vh]">
      {/* Background image */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
        loading={priority ? "eager" : "lazy"}
      />

      {/* Responsive Overlay */}
      <motion.div
        className={`absolute inset-0 ${
          overlay
            ? overlay
            : "bg-gradient-to-b from-blue-900/80 via-blue-700/50 to-blue-500/40"
        }`}
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl sm:text-4xl lg:text-6xl font-bold text-blue-50 mb-2 sm:mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            className="hidden sm:block text-blue-100/90 text-sm sm:text-base lg:text-lg max-w-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default AboutHero;
