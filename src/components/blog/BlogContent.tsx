"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, X } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  images: string[]
  category: string
  publishedDate: string
  readTime: string
}

interface BlogContentProps {
  posts: BlogPost[]
}

export default function BlogContent({ posts }: BlogContentProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [visibleCount, setVisibleCount] = useState(3)
  const [showImages, setShowImages] = useState(false)

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  }

  const loadMore = () => setVisibleCount((prev) => Math.min(prev + 3, posts.length))

  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16">
      {/* Blog Heading - Static */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-[#2E4F7C] mb-12">
        Our Latest Blogs
      </h1>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(0, visibleCount).map((post, idx) => (
          <motion.div
            key={post.id}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Card
              className="group cursor-pointer overflow-hidden bg-[#E3F2FF] hover:shadow-2xl hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E4F7C]/20 to-transparent" />
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs bg-[#CFE8FF] text-[#2E4F7C] border border-[#8AB8E0]">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-xs text-[#2E4F7C]">
                    <Calendar className="h-3 w-3" />
                    {formatDate(post.publishedDate)}
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg leading-tight text-[#2E4F7C] group-hover:text-[#1F3A5A] transition-colors">
                  {post.title}
                </h3>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-sm text-[#2E4F7C]/80 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-[#2E4F7C]">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                  <Button variant="ghost" size="sm" className="text-[#2E4F7C] hover:text-[#1F3A5A] p-0 h-auto font-medium">
                    Read more
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < posts.length && (
        <motion.div
          className="flex justify-center mt-8 sm:mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            className="bg-[#2E4F7C] hover:bg-[#1F3A5A] text-white px-6 py-3 rounded-lg font-semibold w-full sm:w-auto max-w-xs sm:max-w-none transition-all duration-200"
            onClick={loadMore}
          >
            Load More
          </Button>
        </motion.div>
      )}

      {/* Blog Dialog */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[#E3F2FF] p-6 pt-10 rounded-2xl shadow-xl animate-fadeIn">
          <DialogHeader className="space-y-4">
            <DialogTitle className="font-heading text-3xl font-bold text-[#2E4F7C]">
              {selectedPost ? selectedPost.title : "Loading..."}
            </DialogTitle>

            <div className="flex items-center gap-4 text-sm text-[#2E4F7C]">
              {selectedPost && (
                <>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(selectedPost.publishedDate)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {selectedPost.readTime}
                  </div>
                </>
              )}
            </div>
          </DialogHeader>

          <DialogDescription asChild>
            <motion.div
              className="space-y-6 text-[#2E4F7C] mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {selectedPost
                ? selectedPost.content.split("\n\n").map((p, idx) => (
                    <p key={idx} className="leading-relaxed text-base md:text-lg">{p}</p>
                  ))
                : null}

              {selectedPost?.images?.length ? (
                <div className="flex justify-center mt-4">
                  <Button
                    className="bg-[#2E4F7C] hover:bg-[#1F3A5A] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                    onClick={() => setShowImages(true)}
                  >
                    Show Images
                  </Button>
                </div>
              ) : null}
            </motion.div>
          </DialogDescription>
        </DialogContent>
      </Dialog>

      {/* Image Dialog */}
      <Dialog open={showImages} onOpenChange={() => setShowImages(false)}>
        <DialogContent className="max-w-full max-h-[90vh] overflow-y-auto bg-[#E3F2FF] p-4 rounded-2xl shadow-xl animate-fadeIn">
          <DialogHeader>
            <DialogTitle className="sr-only">Blog Images</DialogTitle>
          </DialogHeader>
          <div className="flex justify-end mb-2">
            <Button size="icon" variant="ghost" onClick={() => setShowImages(false)}>
              <X className="h-5 w-5 text-[#2E4F7C]" />
            </Button>
          </div>

          {selectedPost?.images?.map((img, idx) => (
            <div key={idx} className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-md mb-4">
              <Image src={img} alt={`Image ${idx + 1}`} fill className="object-cover" />
            </div>
          ))}
        </DialogContent>
      </Dialog>
    </div>
  )
}
