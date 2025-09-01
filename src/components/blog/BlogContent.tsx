"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  images: string[];
  category: string;
  publishedDate: string;
  readTime: string;
}

interface StrapiBlogPhoto {
  id: number;
  url: string;
  formats?: any;
  [key: string]: any;
}

interface StrapiBlog {
  id: number;
  title: string;
  excerpt: string;
  description: string;
  approval: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  photos: StrapiBlogPhoto[];
  category?: string;
  readTime?: string;
}

interface StrapiBlogResponse {
  data: StrapiBlog[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Helper function to check if URL is from the same origin
const isSameOrigin = (url: string) => {
  if (typeof window === 'undefined') return false;
  try {
    const parsedUrl = new URL(url, window.location.origin);
    return parsedUrl.origin === window.location.origin;
  } catch {
    return false;
  }
};

// Helper function to determine if we should use Next.js Image or regular img
const ImageComponent = ({ src, alt, fill, className, onError }: {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}) => {
  // For external URLs or data URLs, use regular img tag
  const isExternal = !src.startsWith('/') && !src.startsWith('data:') && !isSameOrigin(src);
  
  if (isExternal) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onError={onError}
        style={fill ? { position: 'absolute', height: '100%', width: '100%', inset: 0 } : {}}
      />
    );
  }
  
  // For internal URLs, use Next.js Image component
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      onError={onError}
    />
  );
};

export default function BlogContent() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
        
        if (!apiUrl) {
          console.error("NEXT_PUBLIC_STRAPI_URL is not defined");
          setIsLoading(false);
          return;
        }

        console.log("Fetching blogs from:", `${apiUrl}/api/blogs?filters[approval][$eq]=true&populate=*`);
        
       const res = await fetch(
  `${apiUrl}/api/blogs?filters[approval][$eq]=true&populate=*&sort=id:desc`
);

        
        if (!res.ok) {
          throw new Error(`Failed to fetch blogs: ${res.status} ${res.statusText}`);
        }
        
        const responseData = await res.json();
        console.log("API Response:", responseData);

        if (!responseData.data) {
          console.error("No data found in response");
          setPosts([]);
          setIsLoading(false);
          return;
        }

        const formattedPosts: BlogPost[] = responseData.data
          .filter((item: any) => item.approval)
          .map((item: any) => {
            try {
              // Handle photos data
              const photosData = item.photos || [];
              
              // Get cover image (first photo)
              const coverImage = photosData.length > 0
                ? photosData[0].url.startsWith("http")
                  ? photosData[0].url
                  : `${apiUrl}${photosData[0].url}`
                : "/images/default-blog.jpg";

              // Get all images
              const images = photosData.map((p: StrapiBlogPhoto) =>
                p.url.startsWith("http") ? p.url : `${apiUrl}${p.url}`
              );

              return {
                id: item.id.toString(),
                title: item.title || "Untitled",
                excerpt: item.excerpt || "",
                content: item.description || "",
                coverImage,
                images,
                category: item.category || "General",
                publishedDate: item.publishedAt || item.createdAt,
                readTime: item.readTime || "5 min",
              };
            } catch (error) {
              console.error("Error processing blog item:", item, error);
              return null;
            }
          })
          .filter((post: BlogPost | null): post is BlogPost => post !== null);

        console.log("Formatted posts:", formattedPosts);
        setPosts(formattedPosts);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      console.error("Error formatting date:", dateString, error);
      return "Unknown date";
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { delay: i * 0.1, duration: 0.5 } 
    }),
  };

  const loadMore = () => setVisibleCount((prev) => Math.min(prev + 3, posts.length));

  if (isLoading) {
    return (
      <div className="w-full py-16 px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#2E4F7C] mb-12">
          Our Latest Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="overflow-hidden bg-[#E3F2FF] animate-pulse">
              <div className="aspect-[4/3] bg-gray-300"></div>
              <CardHeader className="pb-3">
                <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
                <div className="h-6 bg-gray-300 rounded w-3/4"></div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-[#2E4F7C] mb-12">
        Our Latest Blogs
      </h1>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-[#3C6AA6]">No blog posts yet. Check back soon!</p>
        </div>
      ) : (
        <>
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
                    <ImageComponent
                      src={post.coverImage}
                      alt={post.title}
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback if image fails to load
                        (e.target as HTMLImageElement).src = "/images/default-blog.jpg";
                      }}
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
        </>
      )}

      {/* Blog Dialog */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto bg-[#E3F2FF] p-8 rounded-2xl shadow-xl">
          {selectedPost && (
            <>
              <DialogHeader className="flex justify-between items-center mb-4">
                <DialogTitle className="font-heading text-3xl font-bold text-[#2E4F7C]">
                  {selectedPost.title}
                </DialogTitle>
              </DialogHeader>

              <DialogDescription asChild>
                <motion.div 
                  className="space-y-6 text-[#2E4F7C]" 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-md">
                    <ImageComponent
                      src={selectedPost.coverImage} 
                      alt={selectedPost.title}
                      className="object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/default-blog.jpg";
                      }}
                    />
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-[#2E4F7C]/80">
                    <Badge variant="secondary" className="bg-[#CFE8FF] text-[#2E4F7C] border border-[#8AB8E0]">
                      {selectedPost.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(selectedPost.publishedDate)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {selectedPost.readTime}
                    </div>
                  </div>

                  {(() => {
                    const paragraphs = selectedPost.content.split("\n\n");
                    const images = selectedPost.images || [];
                    const content: React.ReactNode[] = [];
                    let imgIndex = 0;

                    paragraphs.forEach((p, idx) => {
                      if (p.trim()) {
                        content.push(
                          <p key={`p-${idx}`} className="leading-relaxed text-base md:text-lg">
                            {p}
                          </p>
                        );

                        if ((idx + 1) % 2 === 0 && imgIndex < images.length) {
                          content.push(
                            <div key={`img-${imgIndex}`} className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-md my-4">
                              <ImageComponent
                                src={images[imgIndex]} 
                                alt={`Image ${imgIndex + 1}`}
                                className="object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "/images/default-blog.jpg";
                                }}
                              />
                            </div>
                          );
                          imgIndex++;
                        }
                      }
                    });

                    // Add any remaining images
                    for (; imgIndex < images.length; imgIndex++) {
                      content.push(
                        <div key={`img-${imgIndex}`} className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-md my-4">
                          <ImageComponent
                            src={images[imgIndex]} 
                            alt={`Image ${imgIndex + 1}`}
                            className="object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/images/default-blog.jpg";
                            }}
                          />
                        </div>
                      );
                    }

                    return content;
                  })()}
                </motion.div>
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}