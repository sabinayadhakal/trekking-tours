"use client"

import { MoveUpRight, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

const FullScreenBackgroundHero = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonHoverVariants: Variants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <>
      <section className="relative h-[60vh] md:h-svh max-h-[1400px] w-full overflow-hidden py-12 md:py-20">

        {/* Mobile background image */}
        <div className="absolute inset-0 z-10 md:hidden">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Nepal landscape"
            className="h-full w-full object-cover"
          />
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-[#1c3c50]/70 via-[#3d6678]/50 to-[#1c3c50]/30" />
        </div>

        {/* Desktop background image */}
        <div className="absolute inset-0 z-10 hidden md:block">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full w-full bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center bg-no-repeat"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute left-0 top-0 block h-full w-full bg-gradient-to-b from-[#1c3c50]/70 via-[#3d6678]/50 to-[#1c3c50]/30"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="absolute top-1/4 left-1/4 h-64 w-64 bg-[#6aa0c1]/20 rounded-full blur-3xl"
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ delay: 1.2, duration: 1.5 }}
            className="absolute bottom-1/3 right-1/3 h-80 w-80 bg-[#5c90b0]/15 rounded-full blur-3xl"
            aria-hidden="true"
          />
        </div>

        {/* Desktop overlay content */}
        <div className="container relative z-20 h-full w-full max-w-[85rem] mx-auto hidden md:block">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex h-full w-full flex-col justify-center gap-8 px-4"
          >
            <div className="flex max-w-[61.375rem] flex-col gap-4">
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 mb-6"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Mountain className="h-10 w-10 text-[#d0e6f0]" />
                </motion.div>
                <motion.span 
                  className="text-[#d0e6f0] font-display text-lg tracking-wide"
                  whileHover={{ scale: 1.05 }}
                >
                  SnowArt Since 2015
                </motion.span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="font-display text-[#f0f8ff] text-3xl md:text-5xl lg:text-7xl font-bold leading-tight mt-40 md:mt-0"
              >
                Explore the wildness of Nepal with Himkala Adventure
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="hidden md:block text-[#e0f0f5]/90 text-lg md:text-2xl font-light max-w-3xl mt-6 leading-relaxed"
              >
                Journey through Nepal's ancient towns and high mountains, experiencing both heritage and nature.
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              className="flex w-full flex-col justify-start gap-6 sm:flex-row sm:items-center"
            >
              <motion.div
                variants={itemVariants}
                className="flex gap-4 flex-wrap"
              >
                <motion.div
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    onClick={() => navigateTo('/destinations/nepal')}
                    className="bg-[#d0e6f0] text-[#1c3c50] hover:bg-[#c0d9e7] font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="relative z-10">Explore Tours</span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-[#e0f0f5] to-[#c0d9e7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-hidden="true"
                    />
                  </Button>
                </motion.div>

                <motion.div
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    onClick={() => navigateTo('/contact')}
                    variant="outline"
                    className="border-[#d0e6f0]/60 text-[#d0e6f0] hover:text-[#1c3c50] group flex h-fit w-fit items-center gap-3 rounded-full border bg-transparent px-8 py-6 text-base hover:bg-[#d0e6f0] transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="font-semibold relative z-10">Plan Your Trek</span>
                    <motion.span
                      className="absolute inset-0 bg-[#d0e6f0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-hidden="true"
                    />
                    <MoveUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
            >
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="flex flex-col items-center text-[#e0f0f5]/80"
              >
                <span className="text-sm mb-2 font-medium">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-[#d0e6f0]/50 rounded-full flex justify-center p-1">
                  <motion.div
                    animate={{
                      y: [0, 12, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="w-1 h-1 bg-[#d0e6f0] rounded-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mobile text + buttons overlay on hero */}
      <div className="absolute inset-0 z-20 md:hidden flex flex-col justify-center items-center text-center px-6">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c3c50]/70 via-[#3d6678]/50 to-[#1c3c50]/30" aria-hidden="true" />

        <motion.h1
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="font-display text-[#f0f8ff] text-4xl sm:text-3xl font-bold leading-tight mb-6 z-10"
        >
          Explore the wildness of Nepal with Himkala Adventure
        </motion.h1>

        <div className="flex flex-row justify-center gap-4 flex-wrap z-10">
          <Button
            onClick={() => navigateTo('/destinations/nepal')}
            className="bg-[#d0e6f0] text-[#1c3c50] hover:bg-[#c0d9e7] font-semibold px-6 py-4 text-sm rounded-full"
          >
            Explore Tours
          </Button>
          <Button
            onClick={() => navigateTo('/contact')}
            variant="outline"
            className="border-[#d0e6f0]/60 text-[#d0e6f0] hover:text-[#1c3c50] border bg-transparent px-6 py-4 text-sm rounded-full"
          >
            Plan Your Trek
          </Button>
        </div>
      </div>
    </>
  );
};

export { FullScreenBackgroundHero };
