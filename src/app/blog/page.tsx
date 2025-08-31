"use client"

import { useState } from "react"
import BlogContent, { BlogPost } from "@/components/blog/BlogContent"
import BlogForm from "@/components/blog/BlogForm"

import BlogHero from "@/components/blog/blogHero"  // ✅ Correct import (note case sensitivity!)

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: "1",
      title: "Explore the Himalayas",
      excerpt: "A short journey through the majestic mountains...",
      content: "Full blog content about trekking in Himalayas...",
      coverImage: "/images/himalayas.jpg",
      images: ["/images/himalayas.jpg", "/images/himalayas2.jpg"],
      category: "Trekking",
      publishedDate: new Date().toISOString(),
      readTime: "5 min",
    },
    {
      id: "2",
      title: "Kathmandu City Tour",
      excerpt: "Discover the vibrant streets of Kathmandu...",
      content: "Full blog content about city tour in Kathmandu...",
      coverImage: "/images/kathmandu.jpg",
      images: ["/images/kathmandu.jpg"],
      category: "City Tour",
      publishedDate: new Date().toISOString(),
      readTime: "3 min",
    },
    {
      id: "3",
      title: "Kathmandu City Tour",
      excerpt: "Discover the vibrant streets of Kathmandu...",
      content: "Full blog content about city tour in Kathmandu...",
      coverImage: "/images/kathmandu.jpg",
      images: ["/images/kathmandu.jpg"],
      category: "City Tour",
      publishedDate: new Date().toISOString(),
      readTime: "3 min",
    },
    {
      id: "4",
      title: "Kathmandu City Tour",
      excerpt: "Discover the vibrant streets of Kathmandu...",
      content: "Full blog content about city tour in Kathmandu...",
      coverImage: "/images/kathmandu.jpg",
      images: ["/images/kathmandu.jpg"],
      category: "City Tour",
      publishedDate: new Date().toISOString(),
      readTime: "3 min",
    },
  ])

  const addPost = (newPost: BlogPost) => {
    setPosts([newPost, ...posts])
  }

  return (
    <>
      {/* ✅ Hero Section on Top */}
      <BlogHero />

      {/* Main Content */}
      <div className="p-4 md:p-8 space-y-12">
        {/* Push form further down */}
        <BlogContent posts={posts} />

        <div className="mt-16">
          <BlogForm addPost={addPost} />
        </div>

      </div>
    </>
  )
}
