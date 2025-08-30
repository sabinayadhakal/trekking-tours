"use client"

import { useState } from "react"
import { 
  FaFacebook, FaInstagram, FaTwitter, FaYoutube, 
  FaLinkedin, FaTiktok, FaPinterest, FaWhatsapp, FaPaperPlane 
} from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

interface BlogContentProps {
  posts?: { title: string }[]
  onSubmit?: () => void
}

export default function ContactSection({ posts = [], onSubmit }: BlogContentProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTrek: "",
    message: "",
  })
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.preferredTrek || !formData.message) return
    console.log("Submitted:", formData)
    setFormData({ name: "", email: "", phone: "", preferredTrek: "", message: "" })
    setSuccess(true)
    onSubmit?.() // notify parent
    setTimeout(() => setSuccess(false), 4000)
  }

  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/share/1K5sDKJ5po/?mibextid=wwXIfr", icon: FaFacebook },
    { name: "Instagram", href: "https://www.instagram.com/himkalaadventure?igsh=MTc4aDR0bm92ODd0NQ%3D%3D&utm_source=qr", icon: FaInstagram },
    { name: "Twitter", href: "https://x.com/himkalanepal?s=21&t=2wPjjwhkMD0rUThQZq-5jQ", icon: FaTwitter },
    { name: "YouTube", href: "https://www.youtube.com/@himkalaadventure5936", icon: FaYoutube },
    { name: "LinkedIn", href: "https://linkedin.com/yourpage", icon: FaLinkedin },
    { name: "TikTok", href: "https://www.tiktok.com/@himkalaadventure", icon: FaTiktok },
    { name: "Pinterest", href: "https://www.pinterest.com/HimkalaNepal/_profile/", icon: FaPinterest },
    { name: "WhatsApp", href: "https://wa.me/9779841376470", icon: FaWhatsapp },
  ]

  return (
    <AnimatePresence>
      {!success ? (
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6 bg-[#f1f9fb] p-10 md:p-12 rounded-3xl shadow-lg border border-[#c9e0e5] w-full max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#346272] mb-6 text-center">Send Your Enquiry</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-[#3c5d63] mb-1">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                className="border border-transparent p-4 rounded-xl focus:outline-none focus:border-[#4b8690] focus:ring-2 focus:ring-[#4b8690] transition bg-white"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-[#3c5d63] mb-1">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="border border-transparent p-4 rounded-xl focus:outline-none focus:border-[#4b8690] focus:ring-2 focus:ring-[#4b8690] transition bg-white"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-medium text-[#3c5d63] mb-1">Phone (optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+977 9841376470"
                value={formData.phone}
                onChange={handleChange}
                className="border border-transparent p-4 rounded-xl focus:outline-none focus:border-[#4b8690] focus:ring-2 focus:ring-[#4b8690] transition bg-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="preferredTrek" className="text-sm font-medium text-[#3c5d63] mb-1">Preferred Trek/Tour *</label>
              <input
                type="text"
                id="preferredTrek"
                name="preferredTrek"
                placeholder="E.g., Everest Base Camp"
                value={formData.preferredTrek}
                onChange={handleChange}
                className="border border-transparent p-4 rounded-xl focus:outline-none focus:border-[#4b8690] focus:ring-2 focus:ring-[#4b8690] transition bg-white"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-medium text-[#3c5d63] mb-1">Message *</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us more about your enquiry..."
              value={formData.message}
              onChange={handleChange}
              className="border border-transparent p-4 rounded-xl focus:outline-none focus:border-[#4b8690] focus:ring-2 focus:ring-[#4b8690] transition resize-none bg-white"
              rows={6}
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-[#4b8690] text-white px-6 py-3 rounded-xl hover:bg-[#3a6a72] font-semibold transition"
            >
              Send Enquiry <FaPaperPlane className="w-5 h-5" />
            </button>
            <p className="mt-3 text-xs sm:text-sm text-[#2f4b53]">
              By sending an enquiry, you agree to let us contact you.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-[#d5ebef] text-[#346272] hover:bg-[#bde0e5] hover:text-[#1f3338] transition text-xl"
                  title={social.name}
                >
                  <Icon />
                </a>
              )
            })}
          </div>
        </motion.form>
      ) : (
        <motion.div
          key="success-message"
          initial={{ scale: 0, rotate: -15, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 15 }}
          className="mt-8 text-[#346272] font-semibold text-center text-lg max-w-2xl mx-auto"
        >
          Thank you for reaching out! <br />
          We’ll respond to your enquiry shortly.
        </motion.div>
      )}
    </AnimatePresence>
  )
}