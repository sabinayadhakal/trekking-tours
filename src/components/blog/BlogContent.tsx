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

// Demo blog data with placeholder images that work with Next.js Image
const demoBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Web Development",
    excerpt: "Learn the fundamentals of modern web development and build your first website with these essential tips and tools.",
    content: "Web development has evolved significantly over the years. From simple static pages to complex web applications, the journey has been incredible.\n\nIn this comprehensive guide, we'll explore the core concepts of web development including HTML, CSS, and JavaScript. These three technologies form the foundation of every website you see on the internet today.\n\nHTML provides the structure of your web pages, CSS takes care of the styling and layout, while JavaScript adds interactivity and dynamic behavior to your sites.\n\nWhether you're a complete beginner or looking to refresh your knowledge, this guide will provide you with the essential knowledge to start building websites.",
    coverImage: "/images/web-dev.jpg",
    images: ["/images/web-dev-detail1.jpg", "/images/web-dev-detail2.jpg"],
    category: "Web Development",
    publishedDate: "2024-01-15",
    readTime: "5 min"
  },
  {
    id: "2",
    title: "The Future of Artificial Intelligence",
    excerpt: "Discover how AI is transforming industries and what the future holds for this groundbreaking technology.",
    content: "Artificial Intelligence is no longer just a concept from science fiction movies. It's here, and it's transforming every industry imaginable.\n\nFrom healthcare to finance, education to entertainment, AI is making processes more efficient and opening up new possibilities that were once thought impossible.\n\nMachine learning algorithms can now diagnose diseases with remarkable accuracy, self-driving cars are becoming a reality, and natural language processing allows us to communicate with computers in ways that feel natural and intuitive.\n\nThe future of AI holds even more promise, with advancements in quantum computing and neural networks pushing the boundaries of what's possible.",
    coverImage: "/images/ai-future.jpg",
    images: ["/images/ai-detail1.jpg", "/images/ai-detail2.jpg"],
    category: "Artificial Intelligence",
    publishedDate: "2024-01-10",
    readTime: "7 min"
  },
  {
    id: "3",
    title: "Sustainable Technology Solutions",
    excerpt: "Explore how technology can help create a more sustainable future and reduce our environmental impact.",
    content: "As climate change becomes an increasingly pressing issue, technology offers promising solutions to create a more sustainable future.\n\nRenewable energy technologies like solar panels and wind turbines are becoming more efficient and affordable. Smart grids help optimize energy distribution, reducing waste and improving reliability.\n\nIn the transportation sector, electric vehicles and improved public transit systems are reducing our reliance on fossil fuels. Meanwhile, smart cities use IoT devices to monitor and manage resources more efficiently.\n\nSustainable technology isn't just about big infrastructure projects. Small changes in how we design software, manage data centers, and dispose of electronic waste can also make a significant difference.",
    coverImage: "/images/sustainable-tech.jpg",
    images: ["/images/sustainable-detail1.jpg", "/images/sustainable-detail2.jpg"],
    category: "Sustainability",
    publishedDate: "2024-01-05",
    readTime: "6 min"
  },
  {
    id: "4",
    title: "Mobile App Development Trends 2024",
    excerpt: "Stay ahead of the curve with the latest trends in mobile app development and user experience design.",
    content: "The mobile app landscape continues to evolve at a rapid pace. In 2024, we're seeing several key trends that are shaping how apps are built and used.\n\nCross-platform development frameworks like React Native and Flutter have matured significantly, allowing developers to build high-quality apps for both iOS and Android with a single codebase.\n\nArtificial intelligence and machine learning are being integrated into mobile apps to provide personalized experiences, intelligent recommendations, and advanced features like image recognition and natural language processing.\n\nPrivacy and security have become paramount concerns for users and regulators alike. Apps that prioritize user privacy and transparent data practices are gaining trust and market share.",
    coverImage: "/images/mobile-trends.jpg",
    images: ["/images/mobile-detail1.jpg", "/images/mobile-detail2.jpg"],
    category: "Mobile Development",
    publishedDate: "2024-01-01",
    readTime: "8 min"
  },
  {
    id: "5",
    title: "Cloud Computing Best Practices",
    excerpt: "Learn essential best practices for cloud computing to optimize performance, security, and costs.",
    content: "Cloud computing has become the backbone of modern digital infrastructure. However, effectively leveraging cloud services requires careful planning and implementation.\n\nOne of the most important considerations is cost optimization. Without proper management, cloud costs can quickly spiral out of control. Implementing auto-scaling, choosing the right instance types, and monitoring usage patterns are crucial for controlling expenses.\n\nSecurity in the cloud is another critical area. Implementing proper access controls, encrypting sensitive data, and regularly auditing your cloud environment are essential practices.\n\nPerformance optimization involves selecting the right services for your workload, implementing caching strategies, and designing for high availability across multiple regions.",
    coverImage: "/images/cloud-computing.jpg",
    images: ["/images/cloud-detail1.jpg", "/images/cloud-detail2.jpg"],
    category: "Cloud Computing",
    publishedDate: "2023-12-28",
    readTime: "10 min"
  },
  {
    id: "6",
    title: "The Rise of Remote Work Technology",
    excerpt: "How technology is enabling the remote work revolution and what tools are essential for distributed teams.",
    content: "The shift to remote work has been one of the most significant workplace transformations in recent history. Technology has been at the center of this change, enabling teams to collaborate effectively regardless of their physical location.\n\nCommunication tools like Slack, Microsoft Teams, and Zoom have become essential for daily operations. These platforms provide not just video conferencing, but also messaging, file sharing, and integration with other productivity tools.\n\nProject management software has evolved to support distributed teams with features like real-time collaboration, time tracking, and automated workflows.\n\nAs remote work becomes more permanent for many organizations, we're seeing the emergence of new technologies designed specifically for distributed teams, including virtual office spaces, advanced security solutions, and tools that help maintain company culture across distances.",
    coverImage: "/images/remote-work.jpg",
    images: ["/images/remote-detail1.jpg", "/images/remote-detail2.jpg"],
    category: "Remote Work",
    publishedDate: "2023-12-20",
    readTime: "9 min"
  }
];

// Simple image component that handles fallbacks
const SafeImage = ({ 
  src, 
  alt, 
  className = "",
  fallbackSrc = "/images/default-blog.jpg"
}: {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  return (
    <div className={`relative ${className}`}>
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className="object-cover"
        onError={handleError}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default function BlogContent() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading delay
    const timer = setTimeout(() => {
      setPosts(demoBlogPosts);
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
                    <SafeImage
                      src={selectedPost.coverImage} 
                      alt={selectedPost.title}
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
                              <SafeImage
                                src={images[imgIndex]} 
                                alt={`Image ${imgIndex + 1}`}
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
                          <SafeImage
                            src={images[imgIndex]} 
                            alt={`Image ${imgIndex + 1}`}
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