export const dynamic = "force-dynamic";
export const revalidate = 0;
"use client";


import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import ContactHeader from "@/components/contact/ContactHeader"
import ContactSection from "@/components/contact/ContactSection"
import { Mail, Phone } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false)

  const handleFormSubmit = () => {
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-amber-50 py-12 px-4 sm:px-6 lg:px-8 relative">
      
      {/* Page Content */}
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <ContactHeader
          title="Himkala (SnowArt) Adventure"
          tagline="Crafting unforgettable experiences in the Himalayas since 2015."
          orientation="row"
          logoVariant="mountain"
        />

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex justify-center w-full">
            <ContactSection onSubmit={handleFormSubmit} />
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-200 flex flex-col gap-6">
              <h3 className="text-lg font-semibold text-forest-900">Contact Us</h3>
              <a href="mailto:info@himkalaadventure.com" className="flex items-center gap-3 text-blue-700 hover:text-forest-800 transition-colors">
                <Mail className="h-5 w-5" /> info@himkalaadventure.com
              </a>
              <a href="tel:+9779841376470" className="flex items-center gap-3 text-blue-700 hover:text-forest-800 transition-colors">
                <Phone className="h-5 w-5" /> +977 9841376470
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Notification */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            key="thankyou"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed top-10 left-1/2 -translate-x-1/2 bg-green-100 border border-green-400 text-green-800 px-6 py-3 rounded shadow-lg z-50"
          >
            Thank you for the enquiry. Our team shall reach out to you soon.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
