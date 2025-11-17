"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Mountain, MapPin, Users, Star, Image as ImageIcon } from "lucide-react";
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

// Single SEO Optimized Everest Trekking Blog Post
const demoBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Everest Base Camp Trek: Complete Guide to Conquering the World's Highest Trek",
    excerpt: "Experience the ultimate adventure with our comprehensive guide to Everest Base Camp trekking. Discover routes, costs, best seasons, and preparation tips for the journey of a lifetime.",
    content: `
The Everest Base Camp trek stands as the most popular and iconic trekking experience in Nepal, drawing adventurers from across the globe to witness the majestic Himalayan giants up close.

## Why Everest Trekking is Unforgettable

Located in northeastern Nepal, the Everest region offers more than just breathtaking views of Mount Everest (8,848m). Trekkers are treated to a spectacular panorama of towering peaks that stretch across the horizon like white-shaped teeth against the sky. 

The region's unique charm is amplified by the warm hospitality of the Sherpa people, known for their loyalty and friendliness.

## Sagarmatha National Park

Established in 1976, Sagarmatha National Park spans 1,148 square kilometers and protects this fragile ecosystem. 

The park is home to incredible biodiversity including Himalayan Tahr, Musk deer, and over 118 bird species. The landscape transitions from pine forests at lower elevations to stunning alpine meadows and glacial valleys.

## Popular Trekking Routes

• Everest Base Camp Trek - The classic route to the foot of the world's highest mountain
• Kala Patthar Trek - Best viewpoint for Everest sunrise and sunset
• Gokyo Lakes Trek - Turquoise lakes and stunning valley views
• Three Passes Trek - For experienced trekkers seeking ultimate adventure
• Island Peak Climbing - Combine trekking with mountaineering

## Best Viewpoints & Highlights

• Gokyo Valley - Pristine lakes and panoramic views
• Kala Patthar - Ultimate Everest photography spot
• Everest Base Camp - Stand at the foot of the giant
• Thame Valley - Authentic Sherpa culture experience

## Getting There
Namche Bazar serves as the gateway to the Everest region. Most trekkers take a 30-minute flight from Kathmandu to Lukla, followed by a two-day walk to Namche. Alternative routes include the scenic drive to Jiri for extended trekking experiences.

## Best Time to Visit
Prime trekking seasons are October-November and March-May, offering clear skies and comfortable temperatures. Winter trekking (December-February) provides fewer crowds but colder conditions, while the monsoon season (June-September) brings lush landscapes despite occasional rain.

## Accommodation Options
Tea houses offer traditional lodge accommodation throughout the route, while camping is available for remote expeditions. Luxury lodges provide comfortable options for those seeking more amenities.

## Cultural Experience

The Everest region is deeply enriched by Sherpa culture, featuring ancient Buddhist monasteries, traditional villages, colorful festivals, and warm hospitality in mountain teahouses.

## Physical Fitness
Begin training 3-6 months in advance, focusing on cardiovascular endurance and leg strength. Practice hiking with a loaded backpack to simulate trekking conditions.

## Essential Gear
Quality hiking boots, thermal layers, altitude sickness medication, four-season sleeping bag, headlamp, and comprehensive first aid kit are essential for a successful trek.

## Environmental Responsibility

As visitors to this fragile ecosystem, we emphasize leave no trace principles, supporting local communities, respecting cultural traditions, and proper waste management practices.

The Everest Base Camp trek isn't just a journey through mountains—it's a transformative experience that connects you with nature's grandeur and the resilient spirit of the Himalayan people.
`,
    coverImage: "/images/review-36.jpg",
    images: [],
    category: "Everest Trekking",
    publishedDate: "2015-06-15",
    readTime: "8 min"
  }
];

// Improved image component with the same robust error handling as testimonials
const SafeImage = ({ 
  src, 
  alt, 
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      console.log(`Blog image failed to load: ${src}`);
      // Use a placeholder image that definitely exists
      setImgSrc("/images/review-36.jpg"); // Use an image we know exists
      setHasError(true);
    }
  };

  return (
    <div className={`relative ${className} ${hasError ? 'bg-gradient-to-br from-blue-100 to-blue-200' : ''}`}>
      {hasError ? (
        <div className="w-full h-full flex flex-col items-center justify-center text-[#2E4F7C]">
          <ImageIcon className="h-8 w-8 mb-2 opacity-50" />
          <span className="text-xs opacity-70">Image loading...</span>
        </div>
      ) : (
        <Image
          src={imgSrc}
          alt={alt}
          fill
          className="object-cover"
          onError={handleError}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={className.includes('aspect-[16/9]')}
        />
      )}
    </div>
  );
};

// Component to render formatted blog content with proper spacing
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

export default function BlogContent() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [displayPosts, setDisplayPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading delay
    const timer = setTimeout(() => {
      setPosts(demoBlogPosts);
      
      // Reverse the array so first item appears last
      const reversedPosts = [...demoBlogPosts].reverse();
      setDisplayPosts(reversedPosts);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
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

  const loadMore = () => setVisibleCount((prev) => Math.min(prev + 3, displayPosts.length));

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

      {displayPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-[#3C6AA6]">No blog posts yet. Check back soon!</p>
        </div>
      ) : (
        <>
          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPosts.slice(0, visibleCount).map((post, idx) => (
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
                    <SafeImage
                      src={post.coverImage}
                      alt={post.title}
                      className="transition-transform duration-300 group-hover:scale-110"
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

          {/* Load More Button - Hidden since we only have one post */}
          {visibleCount < displayPosts.length && (
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
                    <SafeImage
                      src={selectedPost.coverImage} 
                      alt={selectedPost.title}
                    />
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

                  {/* Additional Images - Only show if images exist */}
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
                          <SafeImage
                            src={image}
                            alt={`${selectedPost.title} - Image ${index + 1}`}
                          />
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
  );
}