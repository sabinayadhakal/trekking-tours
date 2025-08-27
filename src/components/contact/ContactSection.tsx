"use client"

import { useState } from "react"
import { 
  FaFacebook, FaInstagram, FaTwitter, FaYoutube, 
  FaLinkedin, FaTiktok, FaPinterest, FaWhatsapp, FaPaperPlane 
} from "react-icons/fa"

interface BlogContentProps {
  posts?: { title: string }[]
}

export default function ContactSection({ posts = [] }: BlogContentProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTrek: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", preferredTrek: "", message: "" })
    setTimeout(() => setSubmitted(false), 4000)
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
    <div className="relative">
      <form 
        onSubmit={handleSubmit} 
        className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-blue-200 max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Send Your Enquiry</h2>

        {/* Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-blue-700 mb-1">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-blue-700 mb-1">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-medium text-blue-700 mb-1">Phone (optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+977 9841376470"
              value={formData.phone}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="preferredTrek" className="text-sm font-medium text-blue-700 mb-1">Preferred Trek/Tour *</label>
            <input
              type="text"
              id="preferredTrek"
              name="preferredTrek"
              placeholder="E.g., Everest Base Camp"
              value={formData.preferredTrek}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-medium text-blue-700 mb-1">Message *</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us more about your enquiry..."
            value={formData.message}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            rows={6}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold transition"
          >
            Send Enquiry <FaPaperPlane className="w-5 h-5" />
          </button>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 hover:text-blue-900 transition text-xl"
                title={social.name}
              >
                <Icon />
              </a>
            )
          })}
        </div>
      </form>

      {/* Thank You Popup */}
      {submitted && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 bg-green-100 border border-green-400 text-green-800 px-6 py-3 rounded shadow-lg animate-fadeInOut z-50">
          Thank you for your enquiry! The team will reach out to you soon.
        </div>
      )}
    </div>
  )
}
