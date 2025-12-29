"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Users, Shield, Globe, Award, Star } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const YearSelectorStats = () => {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stats = [
    { value: 1000, suffix: "+", label: "Satisfied Travelers", icon: Users, color: "text-[#3C6AA6]" },
    { value: 100, suffix: "%", label: "Safety Record", icon: Shield, color: "text-[#3C6AA6]" },
    { value: 25, suffix: "+", label: "Expert Guides", icon: Award, color: "text-[#3C6AA6]" },
    { value: 3, suffix: "", label: "Countries Covered", icon: Globe, color: "text-[#3C6AA6]" },
  ];

  // Simpler animations with less dramatic effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.4,
        ease: "easeOut" as const 
      } 
    }
  };

  const statVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 0.4,
        ease: "easeOut" as const
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.6,
        ease: "easeOut" as const 
      } 
    }
  };

  const numberVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const handleLearnMoreClick = () => router.push('/about-us');
  const handleContactUsClick = () => router.push('/contact');

  return (
    <section className="pt-6 pb-10 md:py-20 bg-gradient-to-br from-[#E3F8FF]/40 via-[#CFE8FF]/30 to-[#A6D4FF]/20 overflow-hidden relative">
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
            <span className="inline-block bg-[#3C6AA6]/15 text-[#3C6AA6] px-2 py-1 rounded-full text-xs md:text-sm font-medium mb-2 md:mb-4">
              Since 2015
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#3C6AA6]"
          >
            10+ Years of Service
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="mt-2 md:mt-4 max-w-xl text-sm md:text-lg text-[#3C6AA6]/80 leading-relaxed"
          >
            Himkala Adventure: Nepal Trekking Experts | Tibet & Bhutan Tour Packages | Affordable & Sustainable Travel
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="my-6 md:my-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button
              onClick={handleLearnMoreClick}
              variant="default"
              className="group text-sm md:text-md flex w-full sm:w-fit items-center justify-center gap-2 rounded-full px-4 py-2 md:px-6 md:py-3 bg-[#3C6AA6] hover:bg-[#468faf] transition-all duration-200 hover:shadow-md"
            >
              <span>Learn More</span>
              <ArrowRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={handleContactUsClick}
              variant="outline"
              className="group text-sm md:text-md flex w-full sm:w-fit items-center justify-center gap-2 rounded-full px-4 py-2 md:px-6 md:py-3 border-[#468faf] text-[#468faf] hover:bg-[#E3F8FF]/50 transition-all duration-200"
            >
              <span>Contact Us</span>
              <ArrowRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Button>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="mt-8 md:mt-10 grid w-full grid-cols-2 gap-3 md:gap-4 md:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div 
                  key={index}
                  variants={statVariants}
                  className="bg-[#E3F8FF]/60 p-3 md:p-4 rounded-xl shadow-sm border border-[#3C6AA6]/20"
                >
                  <div className="flex items-center mb-1 md:mb-2">
                    <IconComponent className={`${stat.color} h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2`} />
                    <motion.h2 
                      className={`text-xl md:text-2xl lg:text-3xl font-bold ${stat.color}`}
                      variants={numberVariants}
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
          className="relative flex items-center justify-center md:w-1/2 md:ml-8 mt-8 md:mt-0 w-full max-w-md"
        >
          <div className="relative w-full">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/year-selector-image.jpg"
                alt="Professional certified guides leading Nepal trekking and Nepal tours"
                width={500}
                height={400}
                className="rounded-xl object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
                priority={isMobile}
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: 0.4,
                duration: 0.3
              }}
              className="absolute -bottom-3 -right-3 bg-white/90 rounded-lg shadow-md p-3 md:p-4 border border-[#3C6AA6]/20 backdrop-blur-sm"
            >
              <div className="flex items-center">
                <div className="bg-[#468faf]/20 p-2 rounded-full mr-2">
                  <Star className="h-4 w-4 text-[#3C6AA6] fill-[#3C6AA6]" />
                </div>
                <div>
                  <p className="font-bold text-sm text-[#3C6AA6]">4.9/5</p>
                  <p className="text-[10px] text-[#3C6AA6]/70">Customer Rating</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Simplified background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#3C6AA6]/5 rounded-full -z-10 hidden md:block"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#61a5c2]/5 rounded-full -z-10 hidden md:block"></div>
    </section>
  );
};

export { YearSelectorStats };