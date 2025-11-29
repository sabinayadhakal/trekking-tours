"use client";

import { motion } from "framer-motion";
import React from "react";

const BlogHero = () => {
  return (
    <section className="relative w-full h-[55vh] sm:h-[70vh] md:h-[60vh]">
      {/* Background image */}
      <img
        src="/images/blog-hero.jpg"
        alt="Blogs and Articles"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c3c50]/70 via-[#3d6678]/50 to-[#1c3c50]/30" />

      {/* Floating blurred circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/4 left-1/4 h-64 w-64 bg-[#6aa0c1]/20 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-1/3 right-1/3 h-80 w-80 bg-[#5c90b0]/15 rounded-full blur-3xl"
        aria-hidden="true"
      />

      {/* Text content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-4xl lg:text-6xl font-bold text-[#f0f8ff] mb-4 tracking-tight"
        >
          Blogs and Articles
        </motion.h1>
      </div>
    </section>
  );
};

export default BlogHero;
