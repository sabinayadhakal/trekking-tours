"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function BlogForm({ addPost }: { addPost: (post: any) => void }) {
  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")
  const [success, setSuccess] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !excerpt || !content) return

    const newPost = {
      id: Date.now().toString(),
      title,
      excerpt,
      content,
      coverImage: "/images/default.jpg",
      images: [],
      category: "General",
      publishedDate: new Date().toISOString(),
      readTime: "2 min",
    }

    addPost(newPost)
    setSuccess(true)
    setTitle("")
    setExcerpt("")
    setContent("")
    setTimeout(() => setSuccess(false), 4000)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative max-w-3xl mx-auto mt-6 sm:mt-8 py-12 sm:py-16 px-4 sm:px-10 rounded-xl overflow-hidden"
    >
      {/* Warm mountain-blue blurred background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E3F2FF]/50 via-[#CFE8FF]/40 to-[#A6D4FF]/30 backdrop-blur-lg -z-10 rounded-xl" />

      <div className="text-center space-y-4 relative z-10">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2E4F7C]"
        >
          Share Your Adventure
        </motion.h2>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#1F3A5A] text-base sm:text-sm"
        >
          Write your own blog and inspire fellow travelers!
        </motion.p>
      </div>

      <AnimatePresence>
        {!success ? (
          <motion.form
            className="mt-8 grid gap-6 relative z-10"
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Title Input */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              whileFocus={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="relative"
            >
              <Input
                type="text"
                placeholder="Blog Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-base sm:text-sm p-5 sm:p-3 rounded-xl shadow-md focus:ring-2 focus:ring-[#2E4F7C] transition-all duration-200 w-full"
              />
            </motion.div>

            {/* Excerpt Input */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              whileFocus={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.05 }}
              className="relative"
            >
              <Input
                type="text"
                placeholder="Short Excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="text-base sm:text-sm p-5 sm:p-3 rounded-xl shadow-md focus:ring-2 focus:ring-[#2E4F7C] transition-all duration-200 w-full"
              />
            </motion.div>

            {/* Content Textarea */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              whileFocus={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.1 }}
              className="relative"
            >
              <Textarea
                placeholder="Your full blog content..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="text-base sm:text-sm p-3 sm:p-3 min-h-[200px] sm:min-h-[140px] rounded-xl shadow-md focus:ring-2 focus:ring-[#2E4F7C] transition-all duration-200 w-full"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
            >
              <Button
                type="submit"
                className="w-full bg-[#2E4F7C] hover:bg-[#1F3A5A] text-white font-semibold rounded-xl py-4 sm:py-2 text-base sm:text-sm transition-all duration-200"
              >
                Publish Your Blog
              </Button>
            </motion.div>
          </motion.form>
        ) : (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-8 text-[#2E4F7C] font-semibold text-center"
          >
            Thank you for posting your blog! <br />
            Your blog will be under review and posted if it meets our policy.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}
