"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// YouTube Video Types
interface YouTubeVideo {
  id: string;
  title: string;
  youtube_url: string;
  description: string;
  published_date: string;
}

// Blog Post Types
interface BlogPost {
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

const isSameOrigin = (url: string) => {
  if (typeof window === "undefined") return false;
  try {
    const parsedUrl = new URL(url, window.location.origin);
    return parsedUrl.origin === window.location.origin;
  } catch {
    return false;
  }
};

const ImageComponent = ({
  src,
  alt,
  fill,
  className,
  onError,
}: {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}) => {
  const isExternal = !src.startsWith("/") && !src.startsWith("data:") && !isSameOrigin(src);

  if (isExternal) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onError={onError}
        style={fill ? { position: "absolute", height: "100%", width: "100%", inset: 0 } : {}}
      />
    );
  }

  return <Image src={src} alt={alt} fill={fill} className={className} onError={onError} />;
};

export default function CombinedContentSection() {
  // YouTube videos state
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  
  // Blog posts state
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch YouTube videos - only get the latest one
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
        if (!apiUrl) return;

        const cleanApiUrl = apiUrl.replace(/\/+$/, "");
        const res = await fetch(`${cleanApiUrl}/api/youtube-videos?sort=published_date:desc&pagination[limit]=1`);

        if (res.ok) {
          const data = await res.json();
          if (data.data && Array.isArray(data.data)) {
            const formattedVideos: YouTubeVideo[] = data.data
              .filter((video: any) => video.youtube_url && video.title)
              .map((video: any) => ({
                id: video.id.toString(),
                title: video.title,
                youtube_url: video.youtube_url,
                description: video.description || "",
                published_date: video.published_date || video.publishedAt,
              }));
            setVideos(formattedVideos);
          }
        }
      } catch (err) {
        console.error("Error fetching videos:", err);
      }
    };

    fetchVideos();
  }, []);

  // Fetch Blog posts - only get the latest one
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
        if (!apiUrl) {
          console.error("NEXT_PUBLIC_STRAPI_URL is not defined");
          setIsLoading(false);
          return;
        }

        const res = await fetch(`${apiUrl}/api/blogs?filters[approval][$eq]=true&populate=*&pagination[limit]=1&sort=publishedAt:desc`);
        if (!res.ok) throw new Error(`Failed to fetch blogs: ${res.status} ${res.statusText}`);

        const responseData = await res.json();
        if (!responseData.data) {
          setPosts([]);
          setIsLoading(false);
          return;
        }

        const formattedPosts: BlogPost[] = responseData.data
          .filter((item: any) => item.approval)
          .map((item: any) => {
            const photosData = item.photos || [];
            const coverImage =
              photosData.length > 0
                ? photosData[0].url.startsWith("http")
                  ? photosData[0].url
                  : `${apiUrl}${photosData[0].url}`
                : "/images/default-blog.jpg";
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
          })
          .filter((post: BlogPost | null): post is BlogPost => post !== null);

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

  // YouTube helper functions
  const getYouTubeId = (url: string) => {
    try {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
      return match && match[2].length === 11 ? match[2] : null;
    } catch {
      return null;
    }
  };

  // Format date helper
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return "Recent";
    }
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <div className="w-full py-12 px-4 md:px-8 bg-gradient-to-b from-[#E3F2FF] to-[#F5F9FF]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-bold text-center text-[#2E4F7C] mb-12">
          Latest Stories & Content
        </h2>

        {/* Combined Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* YouTube Videos Section */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-[#2E4F7C] border-b-2 border-[#2E4F7C] pb-2">
              Video Stories
            </h3>
            
            {videos.length === 0 && !isLoading && (
              <p className="text-center text-[#2E4F7C]/70 py-8">No videos available</p>
            )}
            
            <div className="grid grid-cols-1 gap-6">
              {videos.map((video, idx) => {
                const videoId = getYouTubeId(video.youtube_url);
                const thumbnailUrl = videoId
                  ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
                  : "/images/default-video.jpg";

                return (
                  <motion.div
                    key={video.id}
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                  >
                    <Card
                      className="group cursor-pointer overflow-hidden bg-white hover:shadow-lg transition-all duration-300"
                    >
                      <div
                        className="relative aspect-video overflow-hidden bg-[#2E4F7C]"
                        onClick={() => setSelectedVideo(video)}
                      >
                        <img
                          src={thumbnailUrl}
                          alt={video.title}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#2E4F7C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-white/90 p-3 rounded-full">
                            <Play className="h-6 w-6 text-[#2E4F7C] fill-[#2E4F7C]" />
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-4">
                        <h3 className="font-semibold text-sm leading-tight text-[#2E4F7C] mb-2 line-clamp-2">
                          {video.title}
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-[#2E4F7C]/60">
                          <Calendar className="h-3 w-3" />
                          {formatDate(video.published_date)}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="text-center pt-4">
              <Link href="/videos">
                <Button className="bg-[#2E4F7C] hover:bg-[#1F3A5A] text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 mx-auto">
                  See more videos <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Blog Posts Section */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-[#2E4F7C] border-b-2 border-[#2E4F7C] pb-2">
              Blog Stories
            </h3>
            
            {isLoading ? (
              <div className="grid grid-cols-1 gap-6">
                <Card className="overflow-hidden bg-white border border-[#CFE8FF] animate-pulse">
                  <div className="aspect-[4/3] bg-gray-200"></div>
                  <CardHeader className="pb-3">
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                    <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </CardContent>
                </Card>
              </div>
            ) : posts.length === 0 ? (
              <p className="text-center text-[#2E4F7C]/70 py-8">No blog posts available</p>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {posts.map((post, idx) => (
                  <motion.div
                    key={post.id}
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                  >
                    <Card
                      className="group cursor-pointer overflow-hidden bg-white border border-[#CFE8FF] hover:shadow-md hover:border-[#8AB8E0] transition-all duration-300 h-full flex flex-col"
                      onClick={() => setSelectedPost(post)}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <ImageComponent
                          src={post.coverImage}
                          alt={post.title}
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/images/default-blog.jpg";
                          }}
                        />
                        <div className="absolute top-3 left-3">
                          <Badge variant="secondary" className="text-xs bg-[#CFE8FF] text-[#2E4F7C] border border-[#8AB8E0]">
                            {post.category}
                          </Badge>
                        </div>
                      </div>

                      <CardHeader className="pb-3 flex-grow">
                        <h3 className="font-semibold text-lg leading-tight text-[#2E4F7C] group-hover:text-[#1F3A5A] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <p className="text-sm text-[#2E4F7C]/80 mb-3 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-[#2E4F7C]">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(post.publishedDate)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
            
            <div className="text-center pt-4">
              <Link href="/blog">
                <Button className="bg-[#2E4F7C] hover:bg-[#1F3A5A] text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 mx-auto">
                  See more blogs <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-10 right-0 text-white text-sm z-10 bg-[#2E4F7C] px-2 py-1 rounded-md hover:bg-[#1F3A5A]"
                onClick={() => setSelectedVideo(null)}
              >
                Close
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeId(selectedVideo.youtube_url)}?autoplay=1`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={selectedVideo.title}
              />
            </div>
          </div>
        )}

        {/* Blog Post Dialog */}
        <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
          <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto bg-white p-6 rounded-2xl shadow-xl">
            {selectedPost && (
              <>
                <DialogHeader className="flex justify-between items-center mb-4">
                  <DialogTitle className="font-semibold text-2xl text-[#2E4F7C]">
                    {selectedPost.title}
                  </DialogTitle>
                </DialogHeader>

                <DialogDescription asChild>
                  <motion.div
                    className="space-y-4 text-[#2E4F7C]"
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
                            <p key={`p-${idx}`} className="leading-relaxed text-base">
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
    </div>
  );
}