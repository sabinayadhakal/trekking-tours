"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)

  const subscribe = () => {
    if (!email) return
    setSuccess(true)
    setEmail("")
    setTimeout(() => setSuccess(false), 4000)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative max-w-3xl mx-auto mt-12 py-16 px-6 sm:px-10 rounded-xl overflow-hidden"
    >
      {/* Warm mountain-blue blurred background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E3F2FF]/50 via-[#CFE8FF]/40 to-[#A6D4FF]/30 backdrop-blur-lg -z-10 rounded-xl" />

      <div className="text-center space-y-4 relative z-10">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-[#2E4F7C]"
        >
          Subscribe to Our Newsletter
        </motion.h2>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#1F3A5A] text-sm sm:text-base"
        >
          Stay updated with our latest trekking and city tour blogs!
        </motion.p>
      </div>

      <AnimatePresence>
        {!success ? (
          <motion.form
            onSubmit={(e) => {
              e.preventDefault()
              subscribe()
            }}
            className="flex flex-col sm:flex-row items-center gap-3 mt-6 justify-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div whileFocus={{ scale: 1.02 }} className="flex-1">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-sm rounded-lg p-2 focus:ring-2 focus:ring-[#2E4F7C] transition-transform duration-200 w-full"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }}>
              <Button
                type="submit"
                className="bg-[#2E4F7C] hover:bg-[#1F3A5A] text-white font-semibold rounded-lg px-4 py-2 text-sm transition-transform duration-200"
              >
                Subscribe
              </Button>
            </motion.div>
          </motion.form>
        ) : (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-6 text-[#2E4F7C] font-semibold text-center relative z-10"
          >
            Thank you for subscribing to our newsletter!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}
