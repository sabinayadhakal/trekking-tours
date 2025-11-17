"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, Clock, ArrowRight, Mountain, Star } from "lucide-react";
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

// Safe Image Component that handles both internal and external images
const SafeImage = ({
  src,
  alt,
  className,
  onError,
}: {
  src: string;
  alt: string;
  className?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}) => {
  // Check if it's an external URL
  const isExternal = src.startsWith('http') && !src.includes('localhost') && !src.includes('127.0.0.1');
  
  if (isExternal) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onError={onError}
      />
    );
  }

  // For local images, use Next.js Image with proper configuration
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      onError={onError}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
};

// Component to render formatted blog content with proper spacing (same as blog content section)
const BlogContentRenderer = ({ content }: { content: string }) => {
  const sections = content.split('## ').filter(section => section.trim());
  
  return (
    <div className="space-y-6 text-[#2E4F7C]">
      {sections.map((section, index) => {
        const [title, ...contentLines] = section.split('\n').filter(line => line.trim());
        const contentText = contentLines.join('\n').trim();
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/50 rounded-lg p-4 sm:p-6 shadow-sm"
          >
            {title && (
              <h3 className="text-xl sm:text-2xl font-bold text-[#2E4F7C] mb-4 pb-2 border-b border-[#8AB8E0]">
                {title}
              </h3>
            )}
            
            <div className="prose prose-sm sm:prose-base max-w-none text-[#2E4F7C]">
              {contentText.split('• ').map((paragraph, pIndex) => {
                if (pIndex === 0) {
                  return (
                    <p key={pIndex} className="mb-4 leading-relaxed text-base sm:text-lg">
                      {paragraph}
                    </p>
                  );
                }
                
                if (paragraph.trim()) {
                  return (
                    <div key={pIndex} className="flex items-start mb-2">
                      <Star className="h-4 w-4 text-[#3C6AA6] mt-1 mr-3 flex-shrink-0" />
                      <span className="text-base sm:text-lg leading-relaxed">
                        {paragraph}
                      </span>
                    </div>
                  );
                }
                
                return null;
              })}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default function CombinedContentSection() {
  // YouTube videos state
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  
  // Blog posts state
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock YouTube videos data
  const mockVideos: YouTubeVideo[] = [
    {
      id: "1",
      title: "Everest Base Camp Trek - Complete Journey",
      youtube_url: "https://www.youtube.com/watch?v=abcdefghijk",
      description: "Join us on an incredible journey to Everest Base Camp",
      published_date: "2024-01-15T00:00:00.000Z"
    }
  ];

  // Mock blog posts data
  const mockPosts: BlogPost[] = [
    {
      id: "1",
      title: "Top 10 Tips for High Altitude Trekking in Nepal",
      excerpt: "Essential tips and tricks for a successful high altitude trekking experience in the Himalayas.",
      content: `High altitude trekking in Nepal is an experience of a lifetime, but it requires proper preparation and knowledge. The Himalayas offer some of the most breathtaking landscapes on earth, but the altitude can present challenges even for experienced trekkers.

## Proper Acclimatization

First and foremost, proper acclimatization is crucial. Our guides recommend spending at least two nights at intermediate altitudes before attempting higher passes. This allows your body to adjust to the reduced oxygen levels and helps prevent altitude sickness.

## Physical Preparation

Physical preparation is equally important. Regular cardiovascular exercise for at least 2-3 months before your trek will significantly improve your experience. Focus on building endurance through hiking, running, or cycling.

## Essential Gear

• Quality waterproof boots - Your most important investment
• Layered clothing system - For changing mountain weather
• Reliable sleeping bag - Rated for sub-zero temperatures
• Headlamp and extra batteries - Essential for early starts
• First aid kit - Including altitude sickness medication

## Weather Considerations

The weather in the mountains can change rapidly. Always be prepared for sudden temperature drops and precipitation. Trust your guide's judgment when it comes to weather-related decisions.`,
      coverImage: "/images/trekking-tips.jpg",
      images: [
        "/images/trekking-gear.jpg",
        "/images/mountain-view.jpg"
      ],
      category: "Trekking Tips",
      publishedDate: "2024-01-10T00:00:00.000Z",
      readTime: "5 min"
    }
  ];

  // Fetch YouTube videos - using mock data
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setVideos(mockVideos);
      } catch (err) {
        console.error("Error fetching videos:", err);
        setVideos([]);
      }
    };

    fetchVideos();
  }, []);

  // Fetch Blog posts - using mock data
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setPosts(mockPosts);
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
        month: "long",
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
              <Link href="/blog">
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
                        <div className="relative w-full h-full">
                          <SafeImage
                            src={post.coverImage}
                            alt={post.title}
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/images/default-blog.jpg";
                            }}
                          />
                        </div>
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

        {/* Blog Post Dialog - Updated to match blog content section style */}
        <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
          <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto bg-gradient-to-br from-[#E3F2FF] to-[#CFE8FF] p-4 sm:p-8 rounded-2xl shadow-xl">
            {selectedPost && (
              <>
                <DialogHeader className="flex justify-between items-start mb-6">
                  <DialogTitle className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2E4F7C] leading-tight">
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
                    {/* Cover Image */}
                    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                      <div className="relative w-full h-full">
                        <SafeImage
                          src={selectedPost.coverImage} 
                          alt={selectedPost.title}
                          className="object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/images/default-blog.jpg";
                          }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2E4F7C]/30 to-transparent" />
                    </div>
                    
                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-[#2E4F7C]/80 bg-white/60 rounded-lg p-3 sm:p-4">
                      <Badge variant="secondary" className="bg-[#CFE8FF] text-[#2E4F7C] border border-[#8AB8E0] text-xs sm:text-sm">
                        <Mountain className="h-3 w-3 mr-1" />
                        {selectedPost.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span className="text-xs sm:text-sm">{formatDate(selectedPost.publishedDate)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span className="text-xs sm:text-sm">{selectedPost.readTime}</span>
                      </div>
                    </div>

                    {/* Blog Content */}
                    <BlogContentRenderer content={selectedPost.content} />

                    {/* Additional Images */}
                    {selectedPost.images && selectedPost.images.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        {selectedPost.images.map((image, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md"
                          >
                            <div className="relative w-full h-full">
                              <SafeImage
                                src={image}
                                alt={`${selectedPost.title} - Image ${index + 1}`}
                                className="object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "/images/default-blog.jpg";
                                }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
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