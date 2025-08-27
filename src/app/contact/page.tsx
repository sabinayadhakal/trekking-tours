"use client"

import * as React from "react"
import { motion } from "framer-motion"
import ContactHeader from "@/components/contact/ContactHeader"
import ContactSection from "@/components/contact/ContactSection"
import { Mail, Phone } from "lucide-react"


export default function ContactPage() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  })

  const formFadeIn = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.7 },
  }

  const sidebarFadeIn = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: 0.2 },
  }

  const floatingShapes = [
    { size: 40, top: "10%", left: "20%", color: "bg-blue-300/30" },
    { size: 60, top: "30%", left: "80%", color: "bg-blue-200/20" },
    { size: 50, top: "70%", left: "15%", color: "bg-blue-400/25" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-amber-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${shape.color}`}
          style={{ width: shape.size, height: shape.size, top: shape.top, left: shape.left }}
          animate={{ y: [0, 10, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 6 + i, ease: "easeInOut" }}
        />
      ))}

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">

        {/* Header */}
        <motion.div {...fadeUp()} className="mt-[200px] sm:mt-[100px] text-center">
          
          <ContactHeader
            title="Himkala (SnowArt) Adventure"
            tagline="Crafting unforgettable experiences in the Himalayas since 2015."
            orientation="row"
            logoVariant="mountain"
          />
        </motion.div>

        {/* Form + Sidebar */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">

          {/* Form */}
          <motion.div {...formFadeIn} className="lg:col-span-2 flex justify-center w-full">
            <div className="relative bg-gradient-to-br from-blue-100/80 to-blue-200/60 rounded-2xl p-6 sm:p-8 w-full max-w-md sm:max-w-xl shadow-2xl border border-blue-300 overflow-hidden">
              <ContactSection />
              <motion.p
                {...fadeUp(0.3)}
                className="text-sm text-forest-700 mt-4 text-center lg:text-left"
              >
                By sending your enquiry, you consent to be contacted by Himkala Adventure regarding your request.
              </motion.p>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div {...sidebarFadeIn} className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-200 flex flex-col gap-6">
              <h3 className="text-lg font-semibold text-forest-900">Contact Us</h3>

              <a href="mailto:himkalaadventure@gmail.com" className="flex items-center gap-3 text-blue-700 hover:text-forest-800 transition-colors">
                <Mail className="h-5 w-5" />
                himkalaadventure@gmail.com
              </a>

              <a href="tel:+9779841376470" className="flex items-center gap-3 text-blue-700 hover:text-forest-800 transition-colors">
                <Phone className="h-5 w-5" />
                +977 9841376470
              </a>

              <div>
                <h3 className="text-lg font-semibold text-forest-900 mt-4 mb-2">Why Travel With Us?</h3>
                <ul className="list-disc list-inside space-y-1 text-forest-800 text-sm">
                  <li>15+ years of Himalayan experience</li>
                  <li>Local expert guides</li>
                  <li>Customized and safe itineraries</li>
                  <li>Sustainable and responsible tourism</li>
                  <li>24/7 support during trips</li>
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
