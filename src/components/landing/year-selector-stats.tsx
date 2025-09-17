"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Users, Shield, Globe, Award, Star } from "lucide-react";
import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const YearSelectorStats = () => {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 1000, suffix: "+", label: "Satisfied Travelers", icon: Users, color: "text-[#3C6AA6]" },
    { value: 100, suffix: "%", label: "Safety Record", icon: Shield, color: "text-[#3C6AA6]" },
    { value: 25, suffix: "+", label: "Expert Guides", icon: Award, color: "text-[#3C6AA6]" },
    { value: 3, suffix: "", label: "Countries Covered", icon: Globe, color: "text-[#3C6AA6]" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.2, duration: 0.8, type: "spring" as const, stiffness: 100 }
    })
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const handleLearnMoreClick = () => router.push('/about-us');
  const handleContactUsClick = () => router.push('/contact');

  return (
    <section className="pt-6 pb-10 md:py-32 bg-gradient-to-br from-[#E3F8FF]/40 via-[#CFE8FF]/30 to-[#A6D4FF]/20 overflow-hidden relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center">

        {/* Left Content */}
        <motion.div 
          ref={ref}
          className="z-10 md:flex-1"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-2 md:mb-4">
            <motion.span 
              className="inline-block bg-[#3C6AA6]/15 text-[#3C6AA6] px-2 py-1 rounded-full text-xs md:text-sm font-medium mb-2 md:mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Since 2015
            </motion.span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 md:mb-6"
          >
            <span className="block md:hidden text-[#3C6AA6]">
              10+ Years of Service
            </span>
            <motion.span
              className="hidden md:block bg-clip-text text-transparent bg-gradient-to-r from-[#3C6AA6] via-[#468faf] to-[#61a5c2] bg-[length:200%_100%]"
              initial={{ backgroundPositionX: '100%' }}
              animate={isInView ? { backgroundPositionX: '0%' } : { backgroundPositionX: '100%' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            >
              10+ Years of Service
            </motion.span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="mt-2 md:mt-4 max-w-xl text-sm md:text-lg text-[#3C6AA6]/80 leading-relaxed"
          >
Himkala Adventure: Award-Winning Nepal Trekking along with Tibet & Bhutan Tours | Affordable & Sustainable          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="my-6 md:my-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button
              onClick={handleLearnMoreClick}
              variant="default"
              className="group text-sm md:text-md flex w-full sm:w-fit items-center justify-center gap-2 rounded-full px-4 py-2 md:px-6 md:py-3 bg-[#3C6AA6] hover:bg-[#468faf] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <span>Learn More</span>
              <ArrowRight className="size-4 transition-all ease-out group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={handleContactUsClick}
              variant="outline"
              className="group text-sm md:text-md flex w-full sm:w-fit items-center justify-center gap-2 rounded-full px-4 py-2 md:px-6 md:py-3 border-[#468faf] text-[#468faf] hover:bg-[#E3F8FF]/50 transition-all duration-300"
            >
              <span>Contact Us</span>
              <ArrowRight className="size-4 transition-all ease-out group-hover:translate-x-1" />
            </Button>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="mt-8 md:mt-12 grid w-full grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div 
                  key={index}
                  custom={index}
                  variants={statVariants}
                  className="bg-[#E3F8FF]/60 p-3 md:p-5 rounded-xl shadow-sm border border-[#3C6AA6]/20 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center mb-1 md:mb-2">
                    <IconComponent className={`${stat.color} h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2`} />
                    <motion.h2 
                      className={`text-2xl md:text-3xl lg:text-4xl font-bold ${stat.color}`}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 100 }}
                    >
                      {stat.value}{stat.suffix}
                    </motion.h2>
                  </div>
                  <p className="text-xs md:text-sm text-[#3C6AA6]/70 whitespace-pre">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
        
        {/* Right Image */}
        <motion.div 
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative flex items-center justify-center md:w-1/2 md:ml-12 mt-8 md:mt-0 w-full max-w-md"
        >
          <div className="relative w-full">
            <motion.div
              initial={{ rotate: -2 }}
              animate={isInView ? { rotate: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&h=600&q=80"
                alt="Professional certified guides leading Nepal trekking and Nepal tours"
                width={500}
                height={400}
                className="rounded-2xl object-cover w-full h-auto transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-[#E3F8FF]/80 rounded-xl shadow-lg p-3 md:p-4 border border-[#3C6AA6]/20"
            >
              <div className="flex items-center">
                <div className="bg-[#468faf]/20 p-2 rounded-full mr-2 md:mr-3">
                  <Star className="h-4 w-4 md:h-5 md:w-5 text-[#3C6AA6] fill-[#3C6AA6]" />
                </div>
                <div>
                  <p className="font-bold text-sm md:text-base text-[#3C6AA6]">4.9/5</p>
                  <p className="text-[10px] md:text-xs text-[#3C6AA6]/70">Customer Rating</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background blobs */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-20 left-10 w-72 h-72 bg-[#3C6AA6]/15 rounded-full -z-10 hidden sm:block"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#61a5c2]/10 rounded-full -z-10 hidden sm:block"
      ></motion.div>
    </section>
  );
};

export { YearSelectorStats };
