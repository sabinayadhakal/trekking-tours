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

}

// Mock data to replace Strapi API calls
const mockVideos: YouTubeVideo[] = [
  {
    id: "1",
    title: "Come with us to Nepal! | Kathmandu, Gorkha, Pokhara",
    youtube_url: "https://youtu.be/IITmhV3CQIY",
    description: "This video was prepared by Kelvin and Jaycee from MacamYes Studios from Malaysia. The filming tour was organized by Himkala Adventure and guided by Shiva Dhakal. Thank you so much for the nice video. Hope you will make such videos about Nepal, its culture and people. Thank you",
  },
  {
    id: "2",
    title: "WHY I TRAVEL | Kathmandu, Gorkha, Pokhara (Nepal)",
    youtube_url: "https://youtu.be/7xomaokzetY",
    description: "It is our great pleasure to guide  Kelvin and Jaycee for making videos about Nepalese life style, Nature, Heritage Sites and so on. We would like to thank them they had worked hard for the nice video. Himkala Adventure feels proud that we got an opportunity to guide them and work with them. We would like to thank MacamYes Studio as well. Namaste!!!",
  },
  {
    id: "3",
    title: "Trekking Poon Hill, Annapurna | Himkala Adventure",
    youtube_url: "https://youtu.be/S6mlQoAFTZ4",
    description: "The Poon Hill trek is a 5-day journey through the villages and valleys South West of the Annapurna Himalayan Range, culminating with a 4:30AM wake up call to trek to the top of Poon Hill (3210m) to watch the sunrise over the mountains. Finally, descend through woods of the mountainside, back to Pokhara.",
  },
  {
    id: "4",
    title: "Kathmandu Free Walking Tour | Visit Kaathe Swayambhu",
    youtube_url: "https://youtu.be/W3NOSvCPdQk",
    description: "Welcome to the Himkala Adventure Youtube channel! Here you can find some trekking, adventure and free walking tour videos in Nepal (Kathmandu, Pokhara, Gorkha, Chitwan, Lumbini, Bandipur, etc.). Himkala Adventure is a trekking and tour company run by a professional tour and trekking local guide. The company is registered in all government departments like registered company, department of tourism, TAAN, tax department and Nepal Rastra Bank. We operate the tour in Tibet, Bhutan and India also. So, if you like our videos, and you would also like to live this awesome experience, contact us in himkalaadventure@gmail.com. Thank you very much! Namaste.",
  },
  {
    id: "5",
    title: " Kathmandu Free Walking Tour | Visit Monkey Temple ",
    youtube_url: "https://youtu.be/sG-USCB_Q-A",
    description: "Welcome to the Himkala Adventure Youtube channel! Here you can find some trekking, adventure and free walking tour videos in Nepal (Kathmandu, Pokhara, Gorkha, Chitwan, Lumbini, Bandipur, etc.). Himkala Adventure is a trekking and tour company run by a professional tour and trekking local guide. The company is registered in all government departments like registered company, department of tourism, TAAN, tax department and Nepal Rastra Bank. We operate the tour in Tibet, Bhutan and India also. So, if you like our videos, and you would also like to live this awesome experience, contact us in himkalaadventure@gmail.com. Thank you very much! Namaste.",
  },
  {
    id: "6",
    title: " Dakshinkali Temple | Champa Devi Day Hike ",
    youtube_url: "https://youtu.be/yCnP10YYX0I",
    description: "Welcome to the Himkala Adventure Youtube channel! Here you can find some trekking, adventure and free walking tour videos in Nepal (Kathmandu, Pokhara, Gorkha, Chitwan, Lumbini, Bandipur, etc.). Himkala Adventure is a trekking and tour company run by a professional tour and trekking local guide. The company is registered in all government departments like registered company, department of tourism, TAAN, tax department and Nepal Rastra Bank. We operate the tour in Tibet, Bhutan and India also. So, if you like our videos, and you would also like to live this awesome experience, contact us in himkalaadventure@gmail.com. Thank you very much! Namaste.",
  },
  {
    id: "7",
    title: "Himkala Adventure | Kathmandu, Nepal",
    youtube_url: "https://youtu.be/JxiY-aG0e_c",
    description: "Welcome to the Himkala Adventure Youtube channel! Here you can find some trekking, adventure and free walking tour videos in Nepal (Kathmandu, Pokhara, Gorkha, Chitwan, Lumbini, Bandipur, etc.). Himkala Adventure is a trekking and tour company run by a professional tour and trekking local guide. The company is registered in all government departments like registered company, department of tourism, TAAN, tax department and Nepal Rastra Bank. We operate the tour in Tibet, Bhutan and India also. So, if you like our videos, and you would also like to live this awesome experience, contact us in himkalaadventure@gmail.com. Thank you very much! Namaste.",
  },
  {
    id: "8",
    title: " Amazing Free Walking Tour Kathmandu | Himkala Adventure  ",
    youtube_url: "https://youtu.be/BjfCd9C2uS4",
    description: "Welcome to the Himkala Adventure Youtube channel! Here you can find some trekking, adventure and free walking tour videos in Nepal (Kathmandu, Pokhara, Gorkha, Chitwan, Lumbini, Bandipur, etc.). Himkala Adventure is a trekking and tour company run by a professional tour and trekking local guide. The company is registered in all government departments like registered company, department of tourism, TAAN, tax department and Nepal Rastra Bank. We operate the tour in Tibet, Bhutan and India also. So, if you like our videos, and you would also like to live this awesome experience, contact us in himkalaadventure@gmail.com. Thank you very much! Namaste.",
  },
  {
    id: "9",
    title: " Free Walking Tour Kathmandu in July | Kathmandu, Nepal ",
    youtube_url: "https://youtu.be/gsogl0e_UZQ",
    description: "Welcome to the Himkala Adventure Youtube channel! Here you can find some trekking, adventure and free walking tour videos in Nepal (Kathmandu, Pokhara, Gorkha, Chitwan, Lumbini, Bandipur, etc.). Himkala Adventure is a trekking and tour company run by a professional tour and trekking local guide. The company is registered in all government departments like registered company, department of tourism, TAAN, tax department and Nepal Rastra Bank. We operate the tour in Tibet, Bhutan and India also. So, if you like our videos, and you would also like to live this awesome experience, contact us in himkalaadventure@gmail.com. Thank you very much! Namaste.",
  },
  {
    id: "10",
    title: "Kathmandu Valley Fringe Hiking with Himkala Adventure | Kathmandu, Nepal",
    youtube_url: "https://youtu.be/JS9aWnSWHAA",
    description: "Welcome to the Himkala Adventure Youtube channel! Here you can find some trekking, adventure and free walking tour videos in Nepal (Kathmandu, Pokhara, Gorkha, Chitwan, Lumbini, Bandipur, etc.). Himkala Adventure is a trekking and tour company run by a professional tour and trekking local guide. The company is registered in all government departments like registered company, department of tourism, TAAN, tax department and Nepal Rastra Bank. We operate the tour in Tibet, Bhutan and India also. So, if you like our videos, and you would also like to live this awesome experience, contact us in himkalaadventure@gmail.com. Thank you very much! Namaste.",
  },
  {
    id: "11",
    title: " Ritual Thread Ceremony | Himkala Adventure ",
    youtube_url: "https://youtu.be/a0P-e9MRRpY",
    description: "Ritual Thread Ceremony held at Gorkha, a great cultural practice in Nepal.",
  },
  {
    id: "12",
    title: "  Nagarkot to Changunarayan Hiking | Himkala Adventure  ",
    youtube_url: "https://youtu.be/6aUyYVxnaOA",
    description: "Nagarkot to Changunarayan is the most scenic and colorful hiking among others in Kathmandu Valley Fringe Hiking. We could have the best sunrise, great Mountain View from the tower at 2175 m along with 360 degrees view around. Then exploring Nagarkot, Tamang settlement, we can hike through beautiful villages to Changunarayan, the UNESCO World Heritage Site.",
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
        
        // Sort videos by ID in descending order (highest ID first)
        const sortedVideos = [...mockVideos].sort((a, b) => parseInt(b.id) - parseInt(a.id));
        setVideos(sortedVideos);
        console.log("Loaded mock videos:", sortedVideos);

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