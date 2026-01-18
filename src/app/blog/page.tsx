"use client";

import * as React from "react";
import Image from "next/image";
import {
  Mountain,
  Calendar,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  Play,
  Youtube,
  Eye,
  Tag,
  Search,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const featuredPost = {
  title: "The Ultimate Guide to Everest Base Camp Trek",
  excerpt: "Planning your dream trek to the foot of the world's highest peak? This comprehensive guide covers preparation, best seasons, packing lists, acclimatization tips, and what to expect on this life-changing journey.",
  image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=2070&auto=format&fit=crop",
  author: "Tshering Namgyal Sherpa",
  date: "January 15, 2025",
  readTime: "12 min",
  category: "Trekking Guide",
};

const blogPosts = [
  {
    title: "Best Time to Visit Nepal: Season Breakdown",
    excerpt: "Discover the ideal months for trekking, wildlife safaris, and cultural exploration in Nepal.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    author: "Pemba Dorje",
    date: "January 10, 2025",
    readTime: "8 min",
    category: "Travel Tips",
  },
  {
    title: "Annapurna Circuit vs Everest Base Camp",
    excerpt: "A detailed comparison of Nepal's two most iconic treks. We help you choose your perfect adventure.",
    image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?q=80&w=2069&auto=format&fit=crop",
    author: "Mingma Tenzing",
    date: "January 5, 2025",
    readTime: "10 min",
    category: "Trek Comparison",
  },
  {
    title: "Understanding Altitude Sickness",
    excerpt: "High altitude trekking requires proper acclimatization. Learn the symptoms of AMS and prevention strategies.",
    image: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    author: "Dr. Lakpa Sherpa",
    date: "December 28, 2024",
    readTime: "7 min",
    category: "Health & Safety",
  },
  {
    title: "Bhutan's Sacred Tiger's Nest",
    excerpt: "The iconic Paro Taktsang monastery clings to a cliff. Everything you need to know before your visit.",
    image: "https://images.unsplash.com/photo-1578503173325-452778794828?q=80&w=2070&auto=format&fit=crop",
    author: "Dorji Wangchuk",
    date: "December 20, 2024",
    readTime: "9 min",
    category: "Cultural Heritage",
  },
  {
    title: "Packing List for Himalayan Treks",
    excerpt: "From base layers to trekking poles, we cover every piece of equipment you'll need for a safe trek.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    author: "Lakpa Doma",
    date: "December 15, 2024",
    readTime: "11 min",
    category: "Gear & Equipment",
  },
  {
    title: "The Spiritual Journey to Mount Kailash",
    excerpt: "Mount Kailash is sacred to four religions. Experience the powerful kora pilgrimage around this peak.",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2070&auto=format&fit=crop",
    author: "Tshering Namgyal",
    date: "December 10, 2024",
    readTime: "13 min",
    category: "Spiritual Journeys",
  },
];

const categories = [
  "All Posts",
  "Trekking Guide",
  "Travel Tips",
  "Health & Safety",
  "Cultural Heritage",
  "Gear & Equipment",
  "Spiritual Journeys",
];

const youtubeVideos = [
  {
    title: "Everest Base Camp Trek Documentary",
    thumbnail: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=800&auto=format&fit=crop",
    duration: "28:45",
    views: "125K",
    description: "Follow our team on the iconic 14-day journey to Everest Base Camp.",
  },
  {
    title: "Inside Bhutan: Land of Thunder Dragon",
    thumbnail: "https://images.unsplash.com/photo-1578503173325-452778794828?q=80&w=800&auto=format&fit=crop",
    duration: "22:30",
    views: "89K",
    description: "Explore the mystical kingdom of Bhutan and its sacred monasteries.",
  },
  {
    title: "Annapurna Circuit: World's Best Trek",
    thumbnail: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?q=80&w=800&auto=format&fit=crop",
    duration: "35:12",
    views: "203K",
    description: "Journey through diverse landscapes crossing Thorong La Pass.",
  },
  {
    title: "Himalayan Sunrise Photography Tips",
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
    duration: "18:20",
    views: "67K",
    description: "Professional tips for capturing magical golden hour in Himalayas.",
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All Posts");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [visiblePosts, setVisiblePosts] = React.useState(6);

  const filteredPosts = React.useMemo(() => {
    let filtered = blogPosts;
    
    if (selectedCategory !== "All Posts") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery]);

  const loadMorePosts = () => {
    setVisiblePosts(prev => Math.min(prev + 3, filteredPosts.length));
  };

  return (
    <div className="min-h-screen bg-white">
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
                <BookOpen className="w-3 h-3 mr-1" /> Categories
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
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium ${
                    selectedCategory === category
                      ? "bg-[#C5E0ED] text-[#0f2940]"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    {category}
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Featured Post */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <Card className="bg-white border-[#C5E0ED]/30 rounded-xl sm:rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg">
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
                  <Tag className="w-3 h-3 mr-1" /> {featuredPost.category}
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
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 sm:py-8 bg-white border-y border-[#C5E0ED]/20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Desktop Category Filter */}
          <div className="hidden md:flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2.5 rounded-full text-sm font-medium ${
                  selectedCategory === category
                    ? "bg-[#0f2940] text-white shadow-md"
                    : "bg-[#f0f7fa] text-[#2d6a8a] hover:bg-[#C5E0ED]/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Mobile Category Filter */}
          <div className="md:hidden">
            <div className="text-sm font-medium text-[#2d6a8a] mb-3">Filter by:</div>
            <div className="flex overflow-x-auto pb-3 -mx-4 px-4 space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-[#0f2940] text-white shadow-md"
                      : "bg-[#f0f7fa] text-[#2d6a8a] hover:bg-[#C5E0ED]/40"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile Filter Info */}
          <div className="md:hidden flex items-center justify-between mt-4 pt-4 border-t border-[#C5E0ED]/10">
            <span className="text-sm text-slate-500">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-sm font-medium text-[#2d6a8a] flex items-center gap-1"
            >
              All Categories
              <Menu className="w-4 h-4" />
            </button>
          </div>
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
          {(searchQuery || selectedCategory !== "All Posts") && (
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
                {selectedCategory !== "All Posts" && (
                  <span className="text-sm text-slate-600">
                    Category: {selectedCategory}
                  </span>
                )}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.slice(0, visiblePosts).map((post, i) => (
              <div key={i} className="h-full">
                <Card className="bg-white border-[#C5E0ED]/20 rounded-xl sm:rounded-2xl overflow-hidden h-full shadow-sm hover:shadow-md">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
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
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <Mountain className="w-16 h-16 text-[#C5E0ED] mx-auto mb-4" />
              <p className="text-slate-600 mb-2">No articles found.</p>
              <p className="text-sm text-slate-400 mb-6">
                Try a different search or category
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Posts");
                }}
                className="border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20"
              >
                Clear Filters
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
              onClick={() => {
                window.parent.postMessage(
                  { type: "OPEN_EXTERNAL_URL", data: { url: "https://youtube.com/@himkalaadventure" } },
                  "*"
                );
              }}
            >
              <Youtube className="mr-2 w-4 h-4" /> Subscribe
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {youtubeVideos.map((video, i) => (
              <div key={i} className="h-full">
                <Card className="bg-white/5 border-white/10 rounded-xl sm:rounded-2xl overflow-hidden h-full">
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-[#0f2940]/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-white ml-1" fill="white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-5 sm:p-6">
                    <h4 className="text-lg font-bold text-white mb-3">
                      {video.title}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {video.description}
                    </p>
                    <div className="flex items-center gap-2 text-white/50 text-sm">
                      <Eye className="w-4 h-4" />
                      <span>{video.views} views</span>
                    </div>
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
      `}</style>
    </div>
  );
}