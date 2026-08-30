"use client";

import * as React from "react";
import Head from "next/head";
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
  DollarSign,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// Function to get YouTube thumbnail from video URL
const getYouTubeThumbnail = (url: string) => {
  let videoId = "";
  
  if (url.includes("youtube.com/watch?v=")) {
    videoId = url.split("v=")[1]?.split("&")[0];
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0];
  }
  
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
    id: "solo-trekking-nepal-2026",
    slug: "solo-trekking-nepal-2026",
    title: "Solo Trekking in Nepal: Complete 2026 Guide for Independent Travelers",
    excerpt: "Solo trekking in Nepal is legal again. Complete 2026 guide covering best treks, permits, costs, safety tips, and everything you need for a solo Himalayan adventure.",
    image: "/images/used/solo-trek-blog-hero.webp",
    author: "Sabinaya Dhakal",
    date: "August 7, 2026",
    readTime: "8 min",
    category: "Trekking Guide",
  };

const blogPosts = [
   {
    id: "solo-trekking-nepal-2026",
    slug: "solo-trekking-nepal-2026",
    title: "Solo Trekking in Nepal: Complete 2026 Guide for Independent Travelers",
    excerpt: "Solo trekking in Nepal is legal again. Complete 2026 guide covering best treks, permits, costs, safety tips, and everything you need for a solo Himalayan adventure.",
    image: "/images/used/solo-trek-blog-hero.webp",
    author: "Sabinaya Dhakal",
    date: "August 7, 2026",
    readTime: "8 min",
    category: "Trekking Guide",
  },
  {
    id: "nepal-trek-cost-2026",
    slug: "nepal-trek-cost-2026",
    title: "How Much Does a Nepal Trek Really Cost? Complete 2026 Budget Breakdown",
    excerpt: "Planning a trek in Nepal? Here's exactly how much it costs in 2026. From budget-friendly Poon Hill at $500 to premium Upper Mustang at $2,595 — we break down every trek, permit, and hidden expense so you know what to budget.",
    image: "/images/used/nepal-trek-cost-blog-hero.webp",
    author: "Sabinaya Dhakal",
    date: "June 4, 2026",
    readTime: "16 min",
    category: "Trekking Guide",
  },
 
  {
    id: "everest-vs-annapurna-base-camp",
    slug: "everest-vs-annapurna-base-camp",
    title: "Everest Base Camp vs. Annapurna Base Camp: How To Decide Your Next Big Trek",
    excerpt: "Two major treks dominate every Nepal itinerary shortlist. Everest Base Camp is famous for the altitude and the realisation that you're standing at the foot of the world's tallest mountain. Annapurna Base Camp is famous for the scenery, the feeling of being swallowed whole by peaks on every side. Which one is right for you?",
    image: "/images/used/ebc-vs-abc.webp",
    author: "Meg Cassidy",
    date: "May 26, 2026",
    readTime: "16 min",
    category: "Trekking Guide",
  },
  {
    id: "best-beginner-treks-nepal",
    slug: "best-beginner-treks-nepal",
    title: "5 Best Beginner Treks in Nepal: From Sunrise Hikes to Himalayan Valleys",
    excerpt: "Nepal has a trek for every level of experience. Despite its reputation for giant peaks and extreme altitudes, some of the most rewarding adventures are easily within reach for first-timers – with only a moderate level of fitness required.",
    image: "/images/used/manaslu-main-page.webp",
    author: "Meg Cassidy",
    date: "May 24, 2026",
    readTime: "14 min",
    category: "Trekking Guide",
  },
  {
    id: "tilicho-lake-sacred-trek",
    slug: "tilicho-lake-sacred-trek",
    title: "Tilicho Lake: The Sacred Himalayan Lake of Legends, Faith, and Adventure",
    excerpt: "Perched at 4,919 meters in the Annapurna region, Tilicho Lake is not just one of the highest lakes in the world—it is a place where Hindu mythology meets breathtaking natural beauty. Discover the ancient story of Kakbhusundi, the crow sage, and why thousands make the arduous journey to its holy shores.",
    image: "/images/used/tilicho-blog.webp",
    author: "Sabinaya Dhakal",
    date: "May 20, 2026",
    readTime: "12 min",
    category: "Trekking & Pilgrimage",
  },
  {
    id: "pigeons-symbol-peace-nepal",
    slug: "pigeons-symbol-peace-nepal",
    title: "From Sacred Messengers to 'Flying Rats': Why Nepalis Worship Pigeons While Europeans Shoo Them Away",
    excerpt: "In Kathmandu, pigeons are revered as divine ancestors and harbingers of peace. In London, they're pests. This stark cultural divide reveals deep truths about how we see nature, spirituality, and our place in the world.",
    image: "/images/used/dog-pigeons.webp",
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
    image: "/images/used/historic-scenic-photography-nepal.webp",
    author: "Sabinaya Dhakal",
    date: "May 7, 2026",
    readTime: "9 min",
    category: "Travel Guide",
  },
];

// Double the YouTube videos for seamless infinite scroll
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
    title: "Amazing Free Walking Tour Kathmandu | Himkala Adevnture",
    url: "https://www.youtube.com/watch?v=BjfCd9C2uS4",
  },
];

const instagramPosts = [
  {
    title: "Kathmandu's Free Walking Tour — 12 Years Strong",
    url: "https://www.instagram.com/freewalkingtourkathmandu/reel/DblJWo7TsOB/",
    type: "reel",
  },
  {
    title: "Backpacking Diaries: Trekking the Himalayas with Himkala Adventure",
    url: "https://www.instagram.com/amberlowentravels/reel/DSSTpFck6F4/",
    type: "reel",
  },
  {
    title: "Humbled by the Mountains — Annapurna Circuit Trek",
    url: "https://www.instagram.com/back.to.that.moment/reel/DMzitZdIxVI/",
    type: "reel",
  },
  {
    title: "Langtang Summit: Kyangjing Ri at 4,400m",
    url: "https://www.instagram.com/thelonecompass/reel/DM4xMomRuex/",
    type: "reel",
  },
  {
    title: "Manaslu Circuit — Captured on 35mm Film",
    url: "https://www.instagram.com/himkalaadventure/reel/DLK9i0YvXLk/",
    type: "reel",
  },
  {
    title: "Annapurna Basecamp: Steep Stairs & Breathtaking Views",
    url: "https://www.instagram.com/back.to.that.moment/reel/DJ2HAhPoeqS/",
    type: "reel",
  },
  {
    title: "Shree Kharka to Tilicho Base Camp",
    url: "https://www.instagram.com/himkalaadventure/reel/DZzFS3_tL5w/",
    type: "reel",
  },
  {
    title: "Ice Lake — 4,620 Meters",
    url: "https://www.instagram.com/himkalaadventure/reel/DZuqJtjPGVO/",
    type: "reel",
  },
  {
    title: "Everest Three Passes Trekking",
    url: "https://www.instagram.com/himkalaadventure/p/Daj6PkTD1Tp/",
    type: "post",
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

  const handleInstagramRedirect = () => {
    window.open("https://www.instagram.com/himkalaadventure/", "_blank");
  };

  const openVideoModal = (video: { title: string; url: string }) => {
    setSelectedVideo(video);
    document.body.style.overflow = "hidden";
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = "auto";
  };

  const openInstagramPost = (url: string) => {
    window.open(url, "_blank");
  };

  // Handle escape key press
  React.useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedVideo) closeVideoModal();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [selectedVideo]);

  return (
    <>
      <Head>
        <title>Himalayan Journal | Trekking Blog & Travel Stories from Nepal</title>
        <meta name="description" content="Discover expert trekking guides, cultural insights, and inspiring stories from Nepal, Bhutan, and Tibet. Read our Himalayan Journal for travel tips and adventure inspiration." />
        <link rel="canonical" href="https://www.himkalaadventure.com/blog" />
        <meta property="og:title" content="Himalayan Journal | Trekking Blog & Travel Stories from Nepal" />
        <meta property="og:description" content="Discover expert trekking guides, cultural insights, and inspiring stories from Nepal, Bhutan, and Tibet. Read our Himalayan Journal for travel tips and adventure inspiration." />
        <meta property="og:image" content="https://www.himkalaadventure.com/images/used/manaslu-main-page.webp" />
        <meta property="og:url" content="https://www.himkalaadventure.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Himkala Adventure" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Himalayan Journal | Trekking Blog & Travel Stories from Nepal" />
        <meta name="twitter:description" content="Discover expert trekking guides, cultural insights, and inspiring stories from Nepal, Bhutan, and Tibet. Read our Himalayan Journal for travel tips and adventure inspiration." />
        <meta name="twitter:image" content="https://www.himkalaadventure.com/images/used/manaslu-main-page.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Himalayan Journal - Trekking Blog",
              "description": "Expert trekking guides, cultural insights, and inspiring stories from Nepal, Bhutan, and Tibet.",
              "url": "https://www.himkalaadventure.com/blog",
              "isPartOf": {
                "@type": "WebSite",
                "name": "Himkala Adventure",
                "url": "https://www.himkalaadventure.com"
              },
              "about": {
                "@type": "Thing",
                "name": "Trekking and Travel Blog"
              },
              "keywords": "trekking blog Nepal, travel stories, Himalayan trekking guides, Nepal travel blog"
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-[#f2ede4]">
        {/* YouTube Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0d2427]/90 backdrop-blur-md animate-in fade-in duration-200"
            onClick={closeVideoModal}
          >
            <div 
              className="relative w-full max-w-5xl mx-4 bg-[#f7f2e9] rounded-lg sm:rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 bg-[#14383b]">
                <h3 className="text-[#f7f2e9] font-bold text-lg truncate pr-4">
                  {selectedVideo.title}
                </h3>
                <button
                  onClick={closeVideoModal}
                  className="text-[#f7f2e9] hover:text-[#f0a17f] transition-colors p-1"
                  aria-label="Close video"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
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

        {/* Page Header - Dark Theme */}
        <section className="pt-6 sm:pt-8 pb-12 sm:pb-16 bg-[#0d2427] relative overflow-hidden border-b border-[#f7f2e9]/20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#e47a4f] rounded-full blur-[120px]" />
            <div className="absolute bottom-10 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#f0a17f] rounded-full blur-[120px]" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex items-center justify-between mb-4 sm:mb-6 md:hidden">
              <button
                className="text-[#f7f2e9] p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <Badge className="bg-[#0d2427] text-[#f0a17f] border-[#f0a17f]/40 py-1.5 px-4 text-xs">
                <BookOpen className="w-3 h-3 mr-1" /> Blog
              </Badge>
              <div className="w-10" />
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <div className="mb-4 sm:mb-6 inline-block hidden md:block">
                <Badge className="bg-[#0d2427] text-[#f0a17f] border-[#f0a17f]/40 py-1.5 sm:py-2 px-4 sm:px-5 text-xs sm:text-sm">
                  <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> Stories & Insights
                </Badge>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#f7f2e9] mb-4 sm:mb-6">
                The <span className="text-[#f0a17f] font-bold">Himalayan</span> Journal
              </h1>
              
              <p className="text-sm sm:text-base lg:text-lg text-[#f7f2e9]/90 leading-relaxed px-2 max-w-2xl mx-auto">
                Expert guides, trekking tips, cultural insights, and inspiring stories from the roof of the world.
              </p>

              {/* Search Bar - Same as Home page style */}
              <div className="mt-6 sm:mt-8 max-w-lg mx-auto px-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#f7f2e9]/50" />
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 sm:pl-12 pr-4 h-11 sm:h-12 bg-[#f7f2e9]/10 border-[#f7f2e9]/20 text-[#f7f2e9] placeholder:text-[#f7f2e9]/50 rounded-full focus:bg-[#f7f2e9]/20 focus:border-[#e47a4f]"
                    aria-label="Search blog articles"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#f7f2e9]/50 hover:text-[#f7f2e9]"
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
          <div className="fixed inset-0 bg-[#0d2427] z-50 md:hidden">
            <div className="container mx-auto px-6 py-8">
              <div className="flex justify-between items-center mb-8">
                <Badge className="bg-[#0d2427] text-[#f0a17f] border-[#f0a17f]/40">
                  <BookOpen className="w-3 h-3 mr-1" /> Menu
                </Badge>
                <button
                  className="text-[#f7f2e9] p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-left px-4 py-3 rounded-lg text-base font-medium text-[#f7f2e9] hover:bg-[#f7f2e9]/10"
                >
                  Close Menu
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Featured Post - Same as Home page style */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#f2ede4]">
          <div className="container mx-auto px-4 sm:px-6">
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="group bg-[#f7f2e9] border border-[#d8cec0]/50 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 rounded-lg sm:rounded-xl hover:-translate-y-1 hover:shadow-lg cursor-pointer">
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
                      <Badge className="bg-[#e47a4f] text-[#f7f2e9] border-none font-bold text-sm px-4 py-1.5">
                        <DollarSign className="w-3 h-3 mr-1" /> Featured
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 lg:p-12">
                    <Badge className="mb-4 bg-[#14383b] text-[#f0a17f] border-none">
                      {featuredPost.category}
                    </Badge>
                    
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-4 leading-tight">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#556363] mb-8">
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4 text-[#cf6943]" /> {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#cf6943]" /> {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#cf6943]" /> {featuredPost.readTime} read
                      </span>
                    </div>
                    
                    <Button className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#f7f2e9] font-bold rounded-full px-8">
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Blog Posts Grid - Same as Home page services style */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#f2ede4]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mb-8 sm:mb-12">
              <span className="text-sm font-bold text-[#cf6943] uppercase tracking-[0.2em]">Latest Articles</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#14383b] mt-2">
                Explore Our Stories
              </h2>
            </div>

            {/* Search Results Info */}
            {searchQuery && (
              <div className="mb-6 p-4 bg-[#e4d8c8] border border-[#d8cec0]/50 rounded-lg sm:rounded-xl">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="bg-[#e47a4f] text-[#f7f2e9] border-none">
                    {filteredPosts.length} results
                  </Badge>
                  {searchQuery && (
                    <span className="text-sm text-[#556363]">
                      Search: "{searchQuery}"
                    </span>
                  )}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredPosts.slice(0, visiblePosts).map((post, i) => (
                <Link href={`/blog/${post.slug}`} key={post.id}>
                  <div className="group bg-[#f7f2e9] border border-[#d8cec0]/50 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 rounded-lg sm:rounded-xl hover:-translate-y-1 hover:shadow-lg cursor-pointer h-full">
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-[#f7f2e9]/90 text-[#14383b] border-none text-xs">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-5 sm:p-6">
                      <h4 className="text-base sm:text-lg font-bold text-[#14383b] mb-2 leading-snug line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-[#556363] text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-[#556363] pt-4 border-t border-[#d8cec0]/30">
                        <span className="flex items-center gap-1.5">
                          <User className="w-3 h-3" /> {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* No Results - Same as Home page style */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <Mountain className="w-16 h-16 text-[#cf6943] mx-auto mb-4" />
                <p className="text-[#556363] mb-2">No articles found.</p>
                <p className="text-sm text-[#556363] mb-6">
                  Try a different search term
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSearchQuery("")}
                  className="border-[#cf6943] text-[#cf6943] hover:bg-[#cf6943]/20"
                >
                  Clear Search
                </Button>
              </div>
            )}

            {/* Load More Button - Same as Home page style */}
            {visiblePosts < filteredPosts.length && (
              <div className="text-center mt-12">
                <Button
                  onClick={loadMorePosts}
                  variant="outline"
                  className="border-[#14383b] text-[#14383b] hover:bg-[#14383b] hover:text-[#f7f2e9] font-bold rounded-full px-10 py-6"
                >
                  Load More Articles
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* YouTube Videos Section - Same as Home page style */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#14383b] relative overflow-hidden border-t border-[#f7f2e9]/20 border-b border-[#f7f2e9]/20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-[#e47a4f] rounded-full blur-[150px]" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#f0a17f] rounded-full blur-[150px]" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Youtube className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-bold text-[#f0a17f] uppercase tracking-[0.2em]">Video Gallery</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#f7f2e9] leading-tight mb-4">
                  Watch Our Adventures Unfold
                </h3>
                <p className="text-[#f7f2e9]/70 text-sm sm:text-base leading-relaxed">
                  Immerse yourself in stunning footage from our services and adventures.
                </p>
              </div>
              
              <Button 
                variant="outline" 
                className="text-[#f0a17f] border-[#f0a17f]/50 hover:bg-[#f0a17f]/10 font-bold rounded-full px-8 flex-shrink-0"
                onClick={handleYoutubeRedirect}
              >
                <Youtube className="mr-2 w-4 h-4" /> Visit YouTube Channel
              </Button>
            </div>

            {/* Infinite Horizontal Scroll */}
            <div className="overflow-hidden relative py-4">
              <div className="flex animate-infinite-scroll-youtube">
                {[...youtubeVideos, ...youtubeVideos].map((video, i) => (
                  <div
                    key={`${video.url}-${i}`}
                    className="flex-shrink-0 w-[280px] sm:w-[320px] mr-6 cursor-pointer"
                    onClick={() => openVideoModal(video)}
                  >
                    <div className="bg-[#f7f2e9]/5 backdrop-blur-sm border border-[#f7f2e9]/10 rounded-lg sm:rounded-xl overflow-hidden hover:bg-[#f7f2e9]/10 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                      <div className="relative h-56 md:h-64 overflow-hidden">
                        <Image
                          src={getYouTubeThumbnail(video.url)}
                          alt={video.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 85vw, 320px"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#14383b]/40" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 text-white ml-1" fill="white" />
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="text-sm font-bold text-[#f7f2e9] line-clamp-2">
                          {video.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Section - Same as Home page style */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#f2ede4] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F56040] rounded-full blur-[150px]" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-[#FCAF45] to-[#FFDC80] rounded-full blur-[150px]" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F56040] rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-bold text-[#cf6943] uppercase tracking-[0.2em]">Instagram Feed</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#14383b] leading-tight mb-4">
                  Traveler Stories & Adventures
                </h3>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  Real moments from our trekkers and guides across the Himalayas.
                </p>
              </div>
              
              <Button 
                variant="outline" 
                className="text-[#14383b] border-[#14383b]/30 hover:bg-[#14383b]/5 font-bold rounded-full px-8 flex-shrink-0"
                onClick={handleInstagramRedirect}
              >
                <Instagram className="mr-2 w-4 h-4" /> Follow @himkalaadventure
              </Button>
            </div>

            {/* Infinite Horizontal Scroll */}
            <div className="overflow-hidden relative py-4">
              <div className="flex animate-infinite-scroll-instagram">
                {[...instagramPosts, ...instagramPosts].map((post, i) => (
                  <div
                    key={`${post.url}-${i}`}
                    className="flex-shrink-0 w-[280px] sm:w-[320px] mr-6 cursor-pointer"
                    onClick={() => openInstagramPost(post.url)}
                  >
                    <div className="bg-[#f7f2e9] border border-[#d8cec0]/50 shadow-md hover:shadow-xl transition-all duration-300 hover:border-[#cf6943]/60 hover:scale-[1.02] rounded-lg sm:rounded-xl overflow-hidden">
                      <div className="relative h-56 md:h-64 overflow-hidden bg-gradient-to-br from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#F56040]/20 flex items-center justify-center">
                        <div className="text-center p-4">
                          <Instagram className="w-14 h-14 text-[#833AB4] mx-auto mb-3 opacity-60" />
                          <p className="text-sm font-medium text-[#14383b] line-clamp-2 px-2">
                            {post.title}
                          </p>
                          <Badge className="mt-3 bg-[#14383b] text-[#f7f2e9] border-none text-xs">
                            {post.type === "reel" ? "📱 Reel" : "📷 Post"}
                          </Badge>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1">
                          <Instagram className="w-3 h-3" /> View
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-xs text-[#556363] truncate">
                          Click to view on Instagram →
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Global Styles */}
        <style jsx global>{`
          @keyframes infinite-scroll-youtube {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-infinite-scroll-youtube {
            display: flex;
            width: max-content;
            animation: infinite-scroll-youtube 120s linear infinite;
          }

          @keyframes infinite-scroll-instagram {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-infinite-scroll-instagram {
            display: flex;
            width: max-content;
            animation: infinite-scroll-instagram 120s linear infinite;
          }

          .animate-infinite-scroll-youtube:hover,
          .animate-infinite-scroll-instagram:hover {
            animation-play-state: paused;
          }

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
    </>
  );
}