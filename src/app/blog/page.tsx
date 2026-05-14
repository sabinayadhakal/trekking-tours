"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mountain,
  Calendar,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  Play,
  Youtube,
  Search,
  Menu,
  X,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// Function to get YouTube thumbnail from video URL
const getYouTubeThumbnail = (url: string) => {
  let videoId = "";
  
  // Extract video ID from different YouTube URL formats
  if (url.includes("youtube.com/watch?v=")) {
    videoId = url.split("v=")[1]?.split("&")[0];
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0];
  }
  
  // Return high quality thumbnail URL
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "/images/fallback.jpg";
};

// Function to extract YouTube video ID
const getYouTubeVideoId = (url: string) => {
  let videoId = "";
  
  if (url.includes("youtube.com/watch?v=")) {
    videoId = url.split("v=")[1]?.split("&")[0];
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0];
  }
  
  return videoId;
};

const featuredPost = {
  id: "pigeons-symbol-peace-nepal",
slug: "pigeons-symbol-peace-nepal",
title: "From Sacred Messengers to 'Flying Rats': Why Nepalis Worship Pigeons While Europeans Shoo Them Away",
excerpt: "In Kathmandu, pigeons are revered as divine ancestors and harbingers of peace. In London, they're pests. This stark cultural divide reveals deep truths about how we see nature, spirituality, and our place in the world.",
image: "/images/used/dog-pigeons.avif",
author: "Sabinaya Dhakal",
date: "May 9, 2026",
readTime: "9 min",
category: "Culture & Society",
};

const blogPosts = [
  {
  id: "pigeons-symbol-peace-nepal",
slug: "pigeons-symbol-peace-nepal",
title: "From Sacred Messengers to 'Flying Rats': Why Nepalis Worship Pigeons While Europeans Shoo Them Away",
excerpt: "In Kathmandu, pigeons are revered as divine ancestors and harbingers of peace. In London, they're pests. This stark cultural divide reveals deep truths about how we see nature, spirituality, and our place in the world.",
image: "/images/used/dog-pigeons.avif",
author: "Sabinaya Dhakal",
date: "May 9, 2026",
readTime: "9 min",
category: "Culture & Society",
},
  {
    id: "best-time-to-visit-nepal",
    slug: "best-time-to-visit-nepal",
    title: "When Should You Visit Nepal? A Month-by-Month Guide to Perfect Timing",
    excerpt: "From the rainbow blooms of spring to the crystal-clear skies of autumn, every season in Nepal offers something magical. But timing your visit right can mean the difference between watching Everest disappear behind clouds or standing beneath its glittering peak.",
    image: "/images/used/historic-scenic-photography-nepal.avif",
    author: "Sabinaya Dhakal",
    date: "May 7, 2026",
    readTime: "9 min",
    category: "Travel Guide",
}
  
];

const youtubeVideos = [
  {
    title: "Himkala Adventure | Kathmandu, Nepal",
    url: "https://www.youtube.com/watch?v=JxiY-aG0e_c&t=10s",
  },
  {
    title: "Ritual Thread Ceremony | Himkala Adventure",
    url: "https://www.youtube.com/watch?v=a0P-e9MRRpY&pp=0gcJCdkKAYcqIYzv",
  },
  {
    title: "Nagarkot to Changunarayan Hiking | Himkala Adventure",
    url: "https://www.youtube.com/watch?v=6aUyYVxnaOA",
  },
  {
    title: "Kathmandu Valley Fringe Hiking with Himkala Adventure | Kathmandu, Nepal",
    url: "https://www.youtube.com/watch?v=JS9aWnSWHAA",
  },
  {
    title: "Amazing Free Walking Tour Kathmandu |  Himkala Adevnture",
    url: "https://www.youtube.com/watch?v=BjfCd9C2uS4",
  },
  
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [visiblePosts, setVisiblePosts] = React.useState(6);
  const [selectedVideo, setSelectedVideo] = React.useState<{ title: string; url: string } | null>(null);

  const filteredPosts = React.useMemo(() => {
    let filtered = blogPosts;
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [searchQuery]);

  const loadMorePosts = () => {
    setVisiblePosts(prev => Math.min(prev + 3, filteredPosts.length));
  };

  const handleYoutubeRedirect = () => {
    window.open("https://www.youtube.com/@himkalaadventure5936", "_blank");
  };

  const openVideoModal = (video: { title: string; url: string }) => {
    setSelectedVideo(video);
    document.body.style.overflow = "hidden";
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = "auto";
  };

  // Handle escape key press
  React.useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedVideo) {
        closeVideoModal();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [selectedVideo]);

  return (
    <div className="min-h-screen bg-white">
      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeVideoModal}
        >
          <div 
            className="relative w-full max-w-5xl mx-4 bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#0f2940] to-[#1a4166]">
              <h3 className="text-white font-bold text-lg truncate pr-4">
                {selectedVideo.title}
              </h3>
              <button
                onClick={closeVideoModal}
                className="text-white hover:text-[#C5E0ED] transition-colors p-1"
                aria-label="Close video"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>
            
            {/* Video Player */}
            <div className="relative pt-[56.25%] bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${getYouTubeVideoId(selectedVideo.url)}?autoplay=1&rel=0&modestbranding=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Page Header - PROPER FALLBACK LIKE ABOUT PAGE */}
      <section className="pt-6 sm:pt-8 pb-12 sm:pb-16 bg-[#0f2940] relative overflow-hidden">
        {/* Solid overlay for Safari/old browser fallback */}
        <div className="absolute inset-0 bg-[#0f2940] safari-fallback" />
        
        {/* Gradient background for modern browsers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2940] to-[#1a4166] modern-gradient" />
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#C5E0ED] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#7fb8d4] rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-4 sm:mb-6 md:hidden">
            <button
              className="text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Badge className="bg-[#0a1e32] text-white border-[#C5E0ED] py-1.5 px-4 text-xs">
              <BookOpen className="w-3 h-3 mr-1" /> Blog
            </Badge>
            <div className="w-10" />
          </div>

          <div className="text-center max-w-3xl mx-auto">
            {/* Badge - SIMPLE SOLID COLOR LIKE ABOUT PAGE */}
            <div className="mb-4 sm:mb-6 inline-block hidden md:block">
              <Badge className="bg-[#0a1e32] text-white border-[#C5E0ED] py-1.5 sm:py-2 px-4 sm:px-5 text-xs sm:text-sm">
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> Stories & Insights
              </Badge>
            </div>
            
            {/* Main title - SOLID COLORS */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 sm:mb-6 relative">
              The <span className="text-[#C5E0ED] font-bold">Himalayan</span> Journal
            </h1>
            
            {/* Description - SAME FALLBACK PATTERN AS ABOUT PAGE */}
            <div className="relative">
              <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed px-2 safari-text-fallback">
                Expert guides, trekking tips, cultural insights, and inspiring stories from the roof of the world.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed px-2 modern-text absolute top-0 left-0 w-full">
                Expert guides, trekking tips, cultural insights, and inspiring stories from the roof of the world.
              </p>
            </div>

            {/* Search Bar */}
            <div className="mt-6 sm:mt-8 max-w-lg mx-auto px-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 sm:pl-12 pr-4 h-11 sm:h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full focus:bg-white/20 focus:border-[#C5E0ED]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0f2940] z-50 md:hidden">
          <div className="container mx-auto px-6 py-8">
            <div className="flex justify-between items-center mb-8">
              <Badge className="bg-[#0a1e32] text-white border-[#C5E0ED]">
                <BookOpen className="w-3 h-3 mr-1" /> Menu
              </Badge>
              <button
                className="text-white p-2"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-2">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-left px-4 py-3 rounded-lg text-base font-medium text-white hover:bg-white/10"
              >
                Close Menu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Featured Post */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <Link href={`/blog/${featuredPost.slug}`}>
            <Card className="bg-white border-[#C5E0ED]/30 rounded-xl sm:rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <div className="md:grid md:grid-cols-2">
                <div className="relative h-64 sm:h-72 md:h-auto md:min-h-[400px]">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#C5E0ED] text-[#0f2940] border-none font-bold text-sm px-4 py-1.5">
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 sm:p-8 lg:p-12">
                  <Badge className="mb-4 bg-[#0f2940] text-[#C5E0ED] border-none">
                    {featuredPost.category}
                  </Badge>
                  
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#0f2940] mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-8">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#2d6a8a]" /> {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#2d6a8a]" /> {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#2d6a8a]" /> {featuredPost.readTime} read
                    </span>
                  </div>
                  
                  <Button className="bg-[#0f2940] hover:bg-[#1a4166] text-white font-bold rounded-full px-8">
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.2em] mb-2">Latest Articles</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0f2940]">
              Explore Our Stories
            </h3>
          </div>

          {/* Search Results Info */}
          {searchQuery && (
            <div className="mb-6 p-4 bg-[#f0f7fa] rounded-xl">
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="bg-[#C5E0ED] text-[#0f2940] border-none">
                  {filteredPosts.length} results
                </Badge>
                {searchQuery && (
                  <span className="text-sm text-slate-600">
                    Search: "{searchQuery}"
                  </span>
                )}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.slice(0, visiblePosts).map((post, i) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <div className="h-full">
                  <Card className="bg-white border-[#C5E0ED]/20 rounded-xl sm:rounded-2xl overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform hover:scale-105 duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-white/90 text-[#0f2940] border-none text-xs">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-5 sm:p-6">
                      <h4 className="text-lg font-bold text-[#0f2940] mb-3 leading-snug">
                        {post.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
                        <span className="flex items-center gap-1.5">
                          <User className="w-3 h-3" /> {post.author}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="hidden sm:flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {post.readTime}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <Mountain className="w-16 h-16 text-[#C5E0ED] mx-auto mb-4" />
              <p className="text-slate-600 mb-2">No articles found.</p>
              <p className="text-sm text-slate-400 mb-6">
                Try a different search term
              </p>
              <Button
                variant="outline"
                onClick={() => setSearchQuery("")}
                className="border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20"
              >
                Clear Search
              </Button>
            </div>
          )}

          {/* Load More Button */}
          {visiblePosts < filteredPosts.length && (
            <div className="text-center mt-12">
              <Button
                onClick={loadMorePosts}
                variant="outline"
                className="border-[#0f2940] text-[#0f2940] hover:bg-[#0f2940] hover:text-white font-bold rounded-full px-10 py-6"
              >
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* YouTube Videos Section - WITH PROPER FALLBACK */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0f2940] relative overflow-hidden">
        {/* Solid overlay for Safari/old browser fallback */}
        <div className="absolute inset-0 bg-[#0f2940] safari-fallback" />
        
        {/* Gradient background for modern browsers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2940] to-[#1a4166] modern-gradient" />
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#C5E0ED] rounded-full blur-[150px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#7fb8d4] rounded-full blur-[150px]" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-sm font-bold text-[#C5E0ED] uppercase tracking-[0.2em]">Video Gallery</h2>
              </div>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white leading-tight mb-4">
                Watch Our Adventures Unfold
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                Immerse yourself in stunning footage from our expeditions in the Himalayas.
              </p>
            </div>
            
            <Button 
              variant="outline" 
              className="text-[#C5E0ED] border-[#C5E0ED]/50 hover:bg-[#C5E0ED]/10 font-bold rounded-full px-8"
              onClick={handleYoutubeRedirect}
            >
              <Youtube className="mr-2 w-4 h-4" /> Visit YouTube Channel
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {youtubeVideos.map((video, i) => (
              <div key={i} className="h-full">
                <Card 
                  className="bg-white/5 border-white/10 rounded-xl sm:rounded-2xl overflow-hidden h-full cursor-pointer hover:bg-white/10 transition-all"
                  onClick={() => openVideoModal(video)}
                >
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <Image
                      src={getYouTubeThumbnail(video.url)}
                      alt={video.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-[#0f2940]/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-5 sm:p-6">
                    <h4 className="text-lg font-bold text-white mb-3">
                      {video.title}
                    </h4>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add this CSS for Safari fallback - EXACTLY LIKE ABOUT PAGE */}
      <style jsx global>{`
        /* Hide modern styles in Safari/old browsers */
        @supports not (backdrop-filter: blur(10px)) {
          .modern-gradient {
            opacity: 0;
          }
          .modern-text {
            opacity: 0;
          }
        }
        
        /* Show modern styles in modern browsers */
        @supports (backdrop-filter: blur(10px)) {
          .safari-fallback {
            opacity: 0;
          }
          .safari-text-fallback {
            opacity: 0;
          }
        }

        /* Modal animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-in {
          animation: fadeIn 0.2s ease-in;
        }
      `}</style>
    </div>
  );
}