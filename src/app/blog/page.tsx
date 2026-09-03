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
  X,
  XCircle,
  DollarSign,
  Instagram,
  MoveUpRight,
  ArrowDownRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { BLOG_POSTS_FALLBACK, BLOG_POSTS_UPDATED_EVENT, BlogPost } from "@/lib/blog-posts";
import { loadBlogPosts } from "@/lib/firebase/blog-posts-repository";
import { loadSocialMediaContent } from "@/lib/firebase/social-media-repository";
import { getYouTubeThumbnail, getYouTubeVideoId, SOCIAL_MEDIA_FALLBACK, SOCIAL_MEDIA_UPDATED_EVENT, SocialMediaContent } from "@/lib/social-media";

export default function BlogPage() {
  const [managedPosts, setManagedPosts] = React.useState<BlogPost[]>(BLOG_POSTS_FALLBACK);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [visiblePosts, setVisiblePosts] = React.useState(6);
  const [selectedVideo, setSelectedVideo] = React.useState<{ title: string; url: string } | null>(null);
  const [socialMedia, setSocialMedia] = React.useState<SocialMediaContent>(SOCIAL_MEDIA_FALLBACK);
  const blogPosts = managedPosts.filter((post) => post.published);
  const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0] || BLOG_POSTS_FALLBACK[0];
  const { youtubeVideos, instagramPosts } = socialMedia;

  React.useEffect(() => {
    const refresh = () => { void loadBlogPosts().then(({ posts }) => setManagedPosts(posts)); };
    refresh();
    window.addEventListener(BLOG_POSTS_UPDATED_EVENT, refresh);
    return () => window.removeEventListener(BLOG_POSTS_UPDATED_EVENT, refresh);
  }, []);

  React.useEffect(() => {
    let isMounted = true;
    const refresh = async () => {
      const { content } = await loadSocialMediaContent();
      if (isMounted) setSocialMedia(content);
    };
    void refresh();
    window.addEventListener(SOCIAL_MEDIA_UPDATED_EVENT, refresh);
    return () => {
      isMounted = false;
      window.removeEventListener(SOCIAL_MEDIA_UPDATED_EVENT, refresh);
    };
  }, []);

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
    if (socialMedia.youtubeChannelUrl) window.open(socialMedia.youtubeChannelUrl, "_blank", "noopener,noreferrer");
  };

  const handleInstagramRedirect = () => {
    if (socialMedia.instagramProfileUrl) window.open(socialMedia.instagramProfileUrl, "_blank", "noopener,noreferrer");
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
        {/* YouTube Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#102e31]/75 backdrop-blur-sm animate-in fade-in duration-200 p-2 sm:p-4"
            onClick={closeVideoModal}
          >
            <div 
              className="relative w-full max-w-5xl bg-[#f7f2e9] rounded-lg overflow-hidden shadow-2xl mx-2 sm:mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-3 sm:p-4 bg-[#14383b]">
                <h3 className="text-[#f7f2e9] font-bold text-sm sm:text-base md:text-lg truncate pr-2 sm:pr-4">
                  {selectedVideo.title}
                </h3>
                <button
                  onClick={closeVideoModal}
                  className="text-[#f7f2e9] hover:text-[#ef966e] transition-colors p-1 active:text-[#ef966e] touch-manipulation"
                  aria-label="Close video"
                >
                  <XCircle className="w-5 h-5 sm:w-6 sm:h-6" />
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

        {/* Page Header - Changed to match About page color (light) */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-5">
                  <div className="h-px w-6 sm:w-9 bg-[#e47a4f]" />
                  <span className="text-[9px] sm:text-xs font-semibold tracking-[.08em] text-[#cf6943]">Stories & Insights</span>
                </div>
                
                <h1 className="font-serif text-[clamp(2.2rem,7vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  The <span className="text-[#cf6943]">Himalayan</span> Journal
                </h1>
              </div>
              <p className="max-w-full md:max-w-[380px] text-sm leading-6 text-[#66706d]">
                Expert guides, trekking tips, cultural insights, and inspiring stories from the roof of the world.
              </p>
            </div>

            {/* Search Bar */}
            <div className="mt-6 sm:mt-8 max-w-lg">
              <div className="relative">
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#66706d]/40" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 sm:pl-12 pr-9 h-10 sm:h-11 md:h-12 bg-[#f7f2e9] border-[#d8cec0]/50 text-[#14383b] placeholder:text-[#66706d]/50 rounded-lg focus:border-[#cf6943] focus:ring-[#cf6943]/20 text-sm sm:text-base transition-colors"
                  aria-label="Search blog articles"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-[#66706d]/40 hover:text-[#66706d] active:text-[#66706d] touch-manipulation"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post - Same style as main page intro section */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between mb-8 sm:mb-12">
              <div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Featured Story</div>
                <div className="mt-2 sm:mt-3 h-px w-16 sm:w-20 bg-[#cf6943]" />
              </div>
              <Link href="/blog" className="flex items-center gap-2 border-b border-[#cf6943] pb-1 text-[10px] sm:text-[11px] font-bold tracking-[.14em] text-[#cf6943] active:text-[#b85a38]">
                VIEW ALL <ArrowRight size={12} className="sm:w-[14px] sm:h-[14px]" />
              </Link>
            </div>

            <Link href={`/blog/${featuredPost.slug}`} className="block active:scale-[0.99] transition-transform">
              <div className="group bg-[#f7f2e9] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-56 sm:h-64 md:h-auto md:min-h-[420px]">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="bg-[#e47a4f] text-[#f7f2e9] text-[10px] font-bold tracking-[.12em] px-3 py-1.5">
                        FEATURED
                      </span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                    <span className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase mb-2 sm:mb-3">
                      {featuredPost.category}
                    </span>
                    
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 leading-tight">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#556363] mb-5 sm:mb-8">
                      <span className="flex items-center gap-1 sm:gap-2">
                        <User className="w-3 h-3 sm:w-4 sm:h-4 text-[#cf6943]" /> {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-1 sm:gap-2">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#cf6943]" /> {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1 sm:gap-2">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-[#cf6943]" /> {featuredPost.readTime} read
                      </span>
                    </div>
                    
                    <Button className="group flex items-center gap-3 sm:gap-4 bg-[#e47a4f] px-4 sm:px-5 py-3 sm:py-3.5 text-[10px] sm:text-[11px] font-bold tracking-[.14em] text-[#fff8ee] hover:bg-[#f0956d] h-auto rounded-none active:scale-[0.98] transition-transform w-fit">
                      READ FULL ARTICLE <ArrowDownRight size={15} className="sm:w-[17px] sm:h-[17px] transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Blog Posts Grid - Same style as main page destinations/services */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between mb-8 sm:mb-12">
              <div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Latest Articles</div>
                <h2 className="mt-2 sm:mt-3 font-serif text-[clamp(1.8rem,4vw,4rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Explore Our <span className="text-[#cf6943]">Stories</span>
                </h2>
              </div>
              {searchQuery && (
                <p className="text-sm text-[#556363]">
                  {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''}
                </p>
              )}
            </div>

            {/* Search Results Info */}
            {searchQuery && filteredPosts.length > 0 && (
              <div className="mb-6 p-3 sm:p-4 bg-[#e4d8c8] border border-[#d8cec0]/50 rounded-lg">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="bg-[#e47a4f] text-[#f7f2e9] text-[10px] font-bold tracking-[.12em] px-2.5 py-1">
                    {filteredPosts.length} results
                  </span>
                  <span className="text-xs sm:text-sm text-[#556363]">
                    Search: "{searchQuery}"
                  </span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {filteredPosts.slice(0, visiblePosts).map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id} className="block active:scale-[0.99] transition-transform">
                  <div className="group bg-[#f7f2e9] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 rounded-lg h-full">
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover opacity-85 group-hover:scale-[1.02] transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#14383b]/90 text-[#f7f2e9] text-[9px] font-bold tracking-[.12em] px-2.5 py-1">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-4 sm:p-5 md:p-6">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#14383b] mb-2 leading-snug line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-[#556363] text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-[10px] sm:text-xs text-[#556363] pt-3 border-t border-[#d8cec0]/30">
                        <span className="flex items-center gap-1 sm:gap-1.5">
                          <User className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> {post.author}
                        </span>
                        <span className="flex items-center gap-0.5 sm:gap-1">
                          <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> {post.readTime}
                        </span>
                      </div>
                    </CardContent>
                  </div>
                </Link>
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12 sm:py-16">
                <Mountain className="w-12 h-12 sm:w-16 sm:h-16 text-[#cf6943] mx-auto mb-3 sm:mb-4" />
                <p className="text-[#556363] mb-1 sm:mb-2 text-sm sm:text-base">No articles found.</p>
                <p className="text-xs sm:text-sm text-[#556363] mb-4 sm:mb-6">
                  Try a different search term
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSearchQuery("")}
                  className="border-[#cf6943] text-[#cf6943] hover:bg-[#cf6943]/10 rounded-none text-xs sm:text-sm px-6 sm:px-8 py-2 sm:py-2.5"
                >
                  Clear Search
                </Button>
              </div>
            )}

            {/* Load More Button */}
            {visiblePosts < filteredPosts.length && (
              <div className="text-center mt-10 sm:mt-12">
                <Button
                  onClick={loadMorePosts}
                  className="bg-[#e47a4f] text-[#fff8ee] font-bold hover:bg-[#cf6943] rounded-none px-8 sm:px-10 py-3 sm:py-3.5 text-[10px] sm:text-[11px] tracking-[.14em] active:scale-[0.98] transition-transform"
                >
                  LOAD MORE ARTICLES
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* YouTube Videos Section - Same style as main page */}
        <section className="bg-[#14383b] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden border-t border-[#f7f2e9]/10 border-b border-[#f7f2e9]/10">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-96 h-96 bg-[#e47a4f] rounded-full blur-[150px]" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#f0a17f] rounded-full blur-[150px]" />
          </div>
          
          <div className="mx-auto max-w-[1220px] relative z-10">
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 md:flex-row md:items-end md:justify-between mb-8 sm:mb-10 md:mb-12">
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-red-600 rounded flex items-center justify-center">
                    <Youtube className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 text-white" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#f0a17f] uppercase">Video Gallery</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#f7f2e9] leading-tight">
                  Watch Our <span className="text-[#f0a17f]">Adventures</span> Unfold
                </h3>
                <p className="text-[#f7f2e9]/60 text-xs sm:text-sm leading-relaxed mt-1 sm:mt-2">
                  Immerse yourself in stunning footage from our services and adventures.
                </p>
              </div>
              
              <Button 
                variant="outline" 
                className="text-[#f0a17f] border-[#f0a17f]/30 hover:bg-[#f0a17f]/10 font-bold rounded-none px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 text-[10px] sm:text-xs flex-shrink-0 active:scale-[0.98] transition-transform"
                onClick={handleYoutubeRedirect}
              >
                <Youtube className="mr-1.5 sm:mr-2 w-3.5 h-3.5 sm:w-4 sm:h-4" /> Visit YouTube Channel
              </Button>
            </div>

            {/* Infinite Horizontal Scroll */}
            <div className="overflow-hidden relative py-2 sm:py-3">
              <div className="flex animate-infinite-scroll-youtube">
                {[...youtubeVideos, ...youtubeVideos].map((video, i) => (
                  <div
                    key={`${video.url}-${i}`}
                    className="flex-shrink-0 w-[200px] sm:w-[240px] md:w-[280px] mr-3 sm:mr-4 md:mr-5 cursor-pointer active:scale-[0.97] transition-transform"
                    onClick={() => openVideoModal(video)}
                  >
                    <div className="bg-[#f7f2e9]/5 backdrop-blur-sm border border-[#f7f2e9]/10 rounded-lg overflow-hidden hover:bg-[#f7f2e9]/10 transition-all duration-300 hover:shadow-xl">
                      <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden">
                        <Image
                          src={getYouTubeThumbnail(video.url)}
                          alt={video.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 85vw, 280px"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#14383b]/30" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                            <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white ml-0.5 sm:ml-1" fill="white" />
                          </div>
                        </div>
                      </div>
                      <div className="p-2 sm:p-3">
                        <h4 className="text-[10px] sm:text-xs font-bold text-[#f7f2e9] line-clamp-2">
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

        {/* Instagram Section - Same style as main page */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden border-t border-[#d8cec0]/30">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F56040] rounded-full blur-[150px]" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-[#FCAF45] to-[#FFDC80] rounded-full blur-[150px]" />
          </div>
          
          <div className="mx-auto max-w-[1220px] relative z-10">
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 md:flex-row md:items-end md:justify-between mb-8 sm:mb-10 md:mb-12">
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F56040] rounded flex items-center justify-center">
                    <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 text-white" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Instagram Feed</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] leading-tight">
                  Traveler <span className="text-[#cf6943]">Stories</span> & Adventures
                </h3>
                <p className="text-[#556363] text-xs sm:text-sm leading-relaxed mt-1 sm:mt-2">
                  Real moments from our trekkers and guides across the Himalayas.
                </p>
              </div>
              
              <Button 
                variant="outline" 
                className="text-[#14383b] border-[#14383b]/30 hover:bg-[#14383b]/5 font-bold rounded-none px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 text-[10px] sm:text-xs flex-shrink-0 active:scale-[0.98] transition-transform"
                onClick={handleInstagramRedirect}
              >
                <Instagram className="mr-1.5 sm:mr-2 w-3.5 h-3.5 sm:w-4 sm:h-4" /> Follow @himkalaadventure
              </Button>
            </div>

            {/* Infinite Horizontal Scroll */}
            <div className="overflow-hidden relative py-2 sm:py-3">
              <div className="flex animate-infinite-scroll-instagram">
                {[...instagramPosts, ...instagramPosts].map((post, i) => (
                  <div
                    key={`${post.url}-${i}`}
                    className="flex-shrink-0 w-[200px] sm:w-[240px] md:w-[280px] mr-3 sm:mr-4 md:mr-5 cursor-pointer active:scale-[0.97] transition-transform"
                    onClick={() => openInstagramPost(post.url)}
                  >
                    <div className="bg-[#f7f2e9] border border-[#d8cec0]/50 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#cf6943]/40 rounded-lg overflow-hidden">
                      <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden bg-gradient-to-br from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#F56040]/10 flex items-center justify-center">
                        <div className="text-center p-2 sm:p-3">
                          <Instagram className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#833AB4] mx-auto mb-1 sm:mb-2 opacity-50" />
                          <p className="text-[10px] sm:text-xs font-medium text-[#14383b] line-clamp-2 px-1">
                            {post.title}
                          </p>
                          <span className="inline-block mt-1.5 sm:mt-2 bg-[#14383b] text-[#f7f2e9] text-[8px] sm:text-[9px] font-bold tracking-[.12em] px-2 py-0.5">
                            {post.type === "reel" ? "REEL" : "POST"}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                      </div>
                      <div className="p-1.5 sm:p-2">
                        <p className="text-[8px] sm:text-[9px] text-[#556363] text-center">
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

          .touch-manipulation {
            touch-action: manipulation;
          }
        `}</style>
      </div>
    </>
  );
}
