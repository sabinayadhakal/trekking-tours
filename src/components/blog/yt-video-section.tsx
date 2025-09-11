"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Calendar, Loader2 } from "lucide-react";

interface StrapiYouTubeVideo {
  id: number;
  documentId: string;
  title: string;
  youtube_url: string;
  description: string;
  published_date: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface YouTubeVideo {
  id: string;
  title: string;
  youtube_url: string;
  description: string;
  published_date: string;
}

export default function YouTubeVideosSection() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch videos from Strapi
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
        
        if (!apiUrl) {
          throw new Error("Strapi API URL is not configured");
        }

        // Clean up the API URL to remove any trailing slashes
        const cleanApiUrl = apiUrl.replace(/\/+$/, "");
        
        const endpoint = `${cleanApiUrl}/api/youtube-videos?sort=id:desc`;

        
        console.log("Fetching from:", endpoint);
        
        const res = await fetch(endpoint);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch videos: HTTP ${res.status}`);
        }
        
        const data = await res.json();
        console.log("Videos API response:", data);
        
        // Handle the response structure - data is directly in data array
        if (data.data && Array.isArray(data.data)) {
          const formattedVideos: YouTubeVideo[] = data.data
            .filter((video: StrapiYouTubeVideo) => {
              return video && video.youtube_url && video.title;
            })
            .map((video: StrapiYouTubeVideo) => {
              return {
                id: video.id.toString(),
                title: video.title || "Untitled Video",
                youtube_url: video.youtube_url || "",
                description: video.description || "",
                published_date: video.published_date || 
                              video.publishedAt || 
                              video.createdAt ||
                              new Date().toISOString(),
              };
            });

          setVideos(formattedVideos);
          console.log("Formatted videos:", formattedVideos);
        } else {
          console.warn("No video data found in response");
          setVideos([]);
        }

      } catch (err) {
        console.error("Error fetching YouTube videos:", err);
        setError(err instanceof Error ? err.message : "Failed to load videos");
        setVideos([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, []);

  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    try {
      if (!url) return null;
      
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
      
      if (match && match[2].length === 11) {
        return match[2];
      }
      
      const urlObj = new URL(url);
      const videoId = urlObj.searchParams.get('v');
      if (videoId && videoId.length === 11) {
        return videoId;
      }
      
      return null;
    } catch (error) {
      console.error("Error extracting YouTube ID:", error);
      return null;
    }
  };

  const displayedVideos = showMore ? videos : videos.slice(0, 3);

  const formatDate = (dateString: string) => {
    try {
      if (!dateString) return "Unknown date";
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      return "Unknown date";
    }
  };

  if (isLoading) {
    return (
      <div className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[#E3F2FF]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#2E4F7C] mb-12">
Featured Videos      </h1>
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-[#2E4F7C]" />
            <span className="ml-2 text-[#2E4F7C]">Loading videos...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[#E3F2FF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2E4F7C] mb-12">
            Featured Videos
          </h2>
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">Error loading videos: {error}</p>
            <Button 
              className="bg-[#2E4F7C] hover:bg-[#1F3A5A] text-white"
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[#E3F2FF]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2E4F7C] mb-12">
          Featured Videos
        </h2>

        {videos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#3C6AA6]">No videos available yet. Check back soon!</p>
          </div>
        ) : (
          <>
            {/* Videos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {displayedVideos.map((video) => {
                const videoId = getYouTubeId(video.youtube_url);
                const thumbnailUrl = videoId 
                  ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
                  : "/images/default-video.jpg";

                return (
                  <Card 
                    key={video.id} 
                    className="group cursor-pointer overflow-hidden bg-white hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
                  >
                    <div 
                      className="relative aspect-video overflow-hidden bg-[#2E4F7C] flex-shrink-0"
                      onClick={() => setSelectedVideo(video)}
                    >
                      <img
                        src={thumbnailUrl}
                        alt={video.title}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/images/default-video.jpg";
                        }}
                      />
                      <div className="absolute inset-0 bg-[#2E4F7C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/90 p-4 rounded-full">
                          <Play className="h-8 w-8 text-[#2E4F7C] fill-[#2E4F7C]" />
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-5 flex-grow flex flex-col">
                      <h3 className="font-semibold text-lg leading-tight text-[#2E4F7C] mb-2 group-hover:text-[#1F3A5A] transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-sm text-[#2E4F7C]/80 mb-3 line-clamp-2 flex-grow">
                        {video.description}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-[#2E4F7C]/60 mt-auto">
                        <Calendar className="h-3 w-3" />
                        {formatDate(video.published_date)}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Load More/Less Button */}
            {videos.length > 3 && (
              <div className="flex justify-center">
                <Button 
                  className="bg-[#2E4F7C] hover:bg-[#1F3A5A] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200" 
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? 'Show Less' : 'View All Videos'}
                </Button>
              </div>
            )}
          </>
        )}

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
              <button 
                className="absolute -top-12 right-0 text-white text-lg z-10 bg-[#2E4F7C] px-3 py-1 rounded-md hover:bg-[#1F3A5A] transition-colors"
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
      </div>
    </div>
  );
}