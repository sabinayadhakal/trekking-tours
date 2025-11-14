"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Calendar, Loader2 } from "lucide-react";

interface YouTubeVideo {
  id: string;
  title: string;
  youtube_url: string;
  description: string;
  published_date: string;
}

// Mock data to replace Strapi API calls
const mockVideos: YouTubeVideo[] = [
  {
    id: "1",
    title: "Getting Started with Web Development",
    youtube_url: "https://www.youtube.com/watch?v=abcdefghijk",
    description: "Learn the basics of web development in this comprehensive tutorial.",
    published_date: "2024-01-15T00:00:00.000Z"
  },
  {
    id: "2",
    title: "Advanced React Patterns",
    youtube_url: "https://www.youtube.com/watch?v=lmno1234567",
    description: "Explore advanced React patterns and best practices for building scalable applications.",
    published_date: "2024-01-10T00:00:00.000Z"
  },
  {
    id: "3",
    title: "CSS Masterclass",
    youtube_url: "https://www.youtube.com/watch?v=pqrst890123",
    description: "Master modern CSS techniques and layout systems.",
    published_date: "2024-01-05T00:00:00.000Z"
  },
  {
    id: "4",
    title: "TypeScript for Beginners",
    youtube_url: "https://www.youtube.com/watch?v=xyzabc45678",
    description: "A complete guide to getting started with TypeScript.",
    published_date: "2024-01-01T00:00:00.000Z"
  },
  {
    id: "5",
    title: "Node.js Backend Development",
    youtube_url: "https://www.youtube.com/watch?v=defghi78901",
    description: "Build robust backend services with Node.js and Express.",
    published_date: "2023-12-28T00:00:00.000Z"
  },
  {
    id: "6",
    title: "Database Design Principles",
    youtube_url: "https://www.youtube.com/watch?v=jklmno23456",
    description: "Learn essential database design principles and normalization.",
    published_date: "2023-12-20T00:00:00.000Z"
  }
];

export default function YouTubeVideosSection() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch videos from mock data
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setVideos(mockVideos);
        console.log("Loaded mock videos:", mockVideos);

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