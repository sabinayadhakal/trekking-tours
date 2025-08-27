"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { Star, Users, Heart, Shield, MapPin, Award } from "lucide-react"

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeOut" }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05, y: -5, transition: { type: "spring", stiffness: 300 } }
}

export default function BecomeAPartner() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="
        relative w-full overflow-hidden rounded-lg border border-[#6CA0DC]
        bg-[#D8E6F3] sm:bg-gradient-to-br sm:from-[#D8E6F3]/70 sm:to-[#6CA0DC]/60
        shadow-lg my-12 py-12 px-6 sm:px-8 md:px-12
      "
    >
      {/* Decorative circles */}
      <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-[#D8E6F3]/30" />
      <div className="absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-[#6CA0DC]/30" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold text-[#375D87] sm:text-4xl mb-4">
            What Sets Himkala Adventure Apart?
          </h2>
          <p className="text-[#375D87] max-w-2xl mx-auto">
            Among hundreds of tour companies in Nepal, we stand out with our unique approach 
            and unwavering commitment to exceptional service.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: MapPin, title: "Custom-Planned Journeys", text: "No generic packages. We create personalized itineraries that match your unique preferences and interests." },
            { icon: Users, title: "Free Walking Tours", text: "First of its kind in Nepal! Daily tours exploring Kathmandu's streets and local life." },
            { icon: Shield, title: "Proven Trustworthiness", text: "Verified by glowing reviews from travelers worldwide on TripAdvisor and social media." },
            { icon: Star, title: "Value for Money", text: "No glitches, no difficulties. We ensure smooth, hassle-free experiences throughout your journey." },
            { icon: Heart, title: "Home Away From Home", text: "We serve with honest spirit, making you feel at home while exploring Nepal's wonders." },
            { icon: Award, title: "Top-Notch Service", text: "Single-sightedly determined to deliver exceptional experiences that exceed expectations." }
          ].map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover="hover"
                className="bg-[#D8E6F3]/60 rounded-lg p-6 shadow-md border border-[#6CA0DC] cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-[#6CA0DC]/50 text-[#375D87] mb-4"
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <h3 className="text-lg font-semibold text-[#375D87] mb-2">{item.title}</h3>
                <p className="text-[#375D87] text-sm">{item.text}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div variants={itemVariants} className="mt-10 text-center">
          <p className="text-[#375D87]/80 italic text-lg sm:text-xl">
            "We don't just plan trips; we create memorable experiences that stay with you long after you've returned home."
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
