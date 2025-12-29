"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, Clock, ArrowRight, Mountain, Star, X, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// YouTube Video Types
interface YouTubeVideo {
  id: string;
  title: string;
  youtube_url: string;
  description: string;
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
  const [hasError, setHasError] = useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    onError?.(e);
  };

  // Check if it's an external URL
  const isExternal = src.startsWith('http') && !src.includes('localhost') && !src.includes('127.0.0.1');
  
  if (hasError) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-gray-100 ${className}`}>
        <div className="text-center text-gray-400">
          <ImageIcon className="h-8 w-8 mx-auto mb-2" />
          <span className="text-xs">Image unavailable</span>
        </div>
      </div>
    );
  }

  if (isExternal) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onError={handleError}
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
      onError={handleError}
      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
    />
  );
};

// Component to render formatted blog content with interspersed images (FIXED VERSION)
const BlogContentRenderer = ({ content, images = [] }: { content: string; images?: string[] }) => {
  const sections = content.split('## ').filter(section => section.trim());
  const availableImages = [...images];
  
  // Helper function to determine when to insert images
  const shouldInsertImage = (line: string, index: number): boolean => {
    // Insert after short paragraphs (natural breaks)
    if (line.length < 150) return true;
    
    // Insert after every 3rd paragraph
    if (index % 3 === 2) return true;
    
    return false;
  };

  // Function to insert images at natural breakpoints
  const renderContentWithImages = (text: string, sectionIndex: number): React.ReactNode[] => {
    const lines = text.split('\n').filter(line => line.trim());
    const result: React.ReactNode[] = [];
    let imageIndex = 0;
    let paragraphCount = 0;

    lines.forEach((line, lineIndex) => {
      // Handle bullet points
      if (line.trim().startsWith('•')) {
        result.push(
          <div key={`bullet-${sectionIndex}-${lineIndex}`} className="flex items-start mb-3 ml-4">
            <div className="h-2 w-2 bg-[#3C6AA6] rounded-full mt-2 mr-3 flex-shrink-0" />
            <span className="text-[#2E4F7C]">{line.substring(1).trim()}</span>
          </div>
        );
      } 
      // Handle regular paragraphs
      else if (line.trim()) {
        paragraphCount++;
        result.push(
          <p key={`p-${sectionIndex}-${lineIndex}`} className="mb-4 leading-relaxed text-[#2E4F7C]">
            {line}
          </p>
        );

        // Insert images at natural breakpoints
        if (availableImages.length > 0 && shouldInsertImage(line, paragraphCount)) {
          const image = availableImages.shift();
          if (image) {
            result.push(
              <motion.div
                key={`img-${sectionIndex}-${imageIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="my-8 rounded-xl overflow-hidden shadow-lg border border-[#8AB8E0]/20"
              >
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
                  <SafeImage
                    src={image}
                    alt={`Content image ${imageIndex + 1}`}
                    className="object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/default-blog.jpg";
                    }}
                  />
                </div>
              </motion.div>
            );
            imageIndex++;
          }
        }
      }
    });

    return result;
  };

  return (
    <div className="space-y-8">
      {sections.map((section, index) => {
        const [title, ...contentLines] = section.split('\n').filter(line => line.trim());
        const contentText = contentLines.join('\n').trim();
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="space-y-4"
          >
            {title && (
              <h3 className="text-xl font-bold text-[#2E4F7C] mb-4 pb-2 border-b border-[#8AB8E0]">
                {title}
              </h3>
            )}
            
            <div className="space-y-4">
              {renderContentWithImages(contentText, index)}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

// Blog Card Component - Mobile list view, Desktop grid view
const BlogCard = ({ post, onClick }: { post: BlogPost; onClick: () => void }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Format date
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return "Recent";
    }
  };

  // Mobile view (list)
  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-[#8AB8E0]/30"
      >
        <div className="flex flex-col">
          <div 
            className="relative w-full aspect-[4/3] cursor-pointer"
            onClick={onClick}
          >
            <div className="relative w-full h-full">
              <SafeImage
                src={post.coverImage}
                alt={post.title}
                className="object-cover transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/default-blog.jpg";
                }}
              />
            </div>
            <div className="absolute top-3 left-3">
              <Badge className="bg-[#CFE8FF]/90 backdrop-blur-sm text-[#2E4F7C] border border-[#8AB8E0] text-xs px-2 py-1">
                {post.category}
              </Badge>
            </div>
          </div>
          
          <div className="flex-1 p-4 md:p-6 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-sm text-[#2E4F7C]">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.publishedDate)}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-[#2E4F7C]">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <h3 
              className="font-semibold text-lg text-[#2E4F7C] mb-3 line-clamp-2 cursor-pointer hover:text-[#1F3A5A] transition-colors"
              onClick={onClick}
            >
              {post.title}
            </h3>
            
            <p className="text-[#2E4F7C]/80 text-sm mb-4 line-clamp-3 flex-grow">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between pt-3 border-t border-[#8AB8E0]/20">
              <Button
                variant="ghost"
                size="sm"
                className="text-[#2E4F7C] hover:text-[#1F3A5A] hover:bg-[#CFE8FF] px-0 text-sm font-medium"
                onClick={onClick}
              >
                Read full article
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Desktop view (grid)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="group"
    >
      <Card className="h-full overflow-hidden border border-[#8AB8E0]/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl bg-white">
        <div 
          className="relative aspect-[16/9] overflow-hidden cursor-pointer"
          onClick={onClick}
        >
          <div className="relative w-full h-full">
            <SafeImage
              src={post.coverImage}
              alt={post.title}
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/default-blog.jpg";
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#2E4F7C]/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <Badge className="bg-[#CFE8FF]/90 backdrop-blur-sm text-[#2E4F7C] border border-[#8AB8E0]">
              {post.category}
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-5">
          <div className="flex items-center gap-3 text-sm text-[#2E4F7C] mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.publishedDate)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <h3 
            className="font-bold text-xl text-[#2E4F7C] mb-3 line-clamp-2 cursor-pointer hover:text-[#1F3A5A] transition-colors"
            onClick={onClick}
          >
            {post.title}
          </h3>
          
          <p className="text-[#2E4F7C]/80 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              className="text-[#2E4F7C] hover:text-[#1F3A5A] hover:bg-[#CFE8FF] font-medium"
              onClick={onClick}
            >
              Read more
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
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
      title: "Ritual Thread Ceremony | Himkala Adventure",
      youtube_url: "https://youtu.be/a0P-e9MRRpY",
      description: "Ritual Thread Ceremony held at Gorkha, a great cultural practice in Nepal.",
    }
  ];

  // Mock blog posts data
  const mockPosts: BlogPost[] = [
    {
      "id": "19",
      "title": "Gorkha Village Tour: An Authentic Cultural Experience in Rural Nepal",
      "excerpt": "Join Edward's journey through Gorkha's mystical villages - from earthquake recovery to traditional farming life. Experience authentic Nepali culture with Himkala Adventure.",
      "content": `
Namaste from the mystical mountains of Gorkha, a region inhabited by some of Nepal's most wonderful people. I feel incredibly fortunate to have spent meaningful time experiencing village life firsthand. Our adventure began when four of us left our Kathmandu house early morning to catch a bus to Gorkha during the Teej festival - a vibrant celebration of womanhood where women adorn themselves in elegant bright clothes, jewelry, and makeup before returning to their villages for quality family time.

The bus journey proved memorable, with Sabinaya and I occupying front seats that required constant contortion into inhuman positions as passengers squeezed in and out at various villages along the route. The breathtaking scenery kept my mind occupied as we followed a river valley flanked by steep cliffs covered in vibrant green, fertile jungle.

## Arrival in Gorkha and Historical Exploration

Upon reaching Gorkha, we utilized our guide Shiva's expertise to visit the lower Gorkha palace, remarkably unaffected by the 2015 earthquake despite Gorkha being at the epicenter. The palace featured skillfully hand-carved doors and windows with ornate patterns stained jet black, creating stunning contrast against terracotta-colored brickwork.

## The Memorable Journey to Namjung

Our bus ride to Namjung deserved its own travel story. Our chariot was one of many brightly painted Indian Tata machines with fluorescent tassels lining the cockpit roof. The tarmac road quickly transitioned to dirt, rock, and debris as we wound around mountainsides. Monsoon season had carved deep ruts in the road, with the worst measuring at least three feet deep.

Earthquake damage remained apparent everywhere - tin huts stood where village-built houses once stood. Despite the devastation, smiles lit up faces of onlookers, probably laughing at our bus rocking violently from side to side while passengers screamed and giggled inside. The driver worked tirelessly, forehead beaded with sweat as he hung from the window watching tires spin helplessly in mud. After two hours of struggling over one kilometer, the team finally got us onto firmer ground.

## Village Life and Traditional Hospitality

In pitch darkness, we carefully walked downhill by iPhone torchlight to Shiva's parents' house. His mother was visiting her sister for the festival, so his father kindly cooked us dal bhat and curry with bitter gourd - appropriately named for its extreme bitterness that took me several tries to appreciate. A bowl of buffalo milk accompanied the meal, its earthy flavor far more delicious than cow's milk. I later discovered the buffaloes lived in a garden hut behind where we sat, alongside four goats.

Shiva's uncle joined us during dinner, the brothers looking remarkably similar - both thin with leathery skin revealing networks of veins and muscles. They spoke with great purpose, asking questions that Shiva translated from Nepali.

We slept in a metal shed erected post-earthquake after their house's second floor completely collapsed. Despite incredible hardship over the past year and a half, these remarkable people maintained their kindness, pride, and sense of humor.

## Agricultural Wonders and Community Encounters

Heavy overnight rain altered our plans to hike a steep hill for panoramic views. Instead, Shiva and I opted for a walk around paddy fields. The terraced hillsides demonstrated ingenious ancestral engineering - flat planting areas dug into steep slopes with constant water flow irrigation creating magnificent rippling green patterns across hills adorned with thick mist.

During our walk, we encountered a family sitting outside their house and stopped to chat. Further up the hill, a little old woman appeared carrying an enormous grass stack twice her size, supported by a forehead strap. As we overtook her, she stopped us, nodding at my camera and requesting a photograph through Shiva's translation. When asked how far she'd carried her load, Shiva pointed to an area approximately two kilometers away. We later passed her house another kilometer up the road - this 65-year-old woman made this journey twice daily, every day.

## Cultural Insights and Festival Joy

During our hour-long stroll, Shiva pointed out local temples, schools, and tin sheds where "untouchables" lived - people pigeonholed into Nepal's lowest social caste, a system I'm still learning about but recognize as terribly unfair.

Returning, we heard blaring Nepali music from crackling speakers and discovered fifteen women dressed in festive red, green, and gold, dancing, laughing, and smiling while making the men look like chumps - an absolute delight to watch.

## Extended Village Experience

Evening rain prompted us to hike to Sharmila's village for overnight stay before our adventurous bus return to Gorkha. The exercise invigorated me with ups and downs stretching my legs and lungs drinking clean air.

Sharmila's family greeted us with smiles at their quaint house, recently rebuilt by her father after earthquake destruction. They spoke to each other in soft tones but shouted at me as if volume would help me understand Nepali. Two buffaloes and six goats occupied a nearby hut while kid goats played outside. The magical views featured paddy fields, thick forests, and skies filled with dragonflies and sun-reflecting flies buzzing like tiny light orbs.

We enjoyed immediate dal bhat, curry, and copious rice - all eaten by hand Nepali-style. When I asked why, they explained it helps you feel the food while eating, an sensory experience I quickly appreciated and recommend trying.

The day continued with vegetable picking from fields, eating freshly harvested peanuts and roasted corn, showering at the forest water supply, and simply watching time pass in beautiful surroundings. Nightfall revealed the Milky Way's beautiful streak, distant thunderstorms, and occasional fireflies sharing the stage. I learned wild tigers sometimes roam near the village - a wonderfully magical place indeed.

I must have made a good impression because villagers invited me to stay, marry a local girl, and settle permanently - a nice offer I politely declined.

## The Bittersweet Departure

Village life had thoroughly charmed me, but morning brought our departure. After goodbyes and hiking uphill, we heard our bus rumbling away - missed by thirty seconds. A tractor towing a trailer carrying twenty people offered an alternative, though significantly less comfortable.

The trailer ride proved excruciating - we clung to anything including arms, legs, and shirts to avoid being thrown off. Sitting on the floor with knees to ears, every bump threw me backward into the metal frame. Reaching Gorkha felt like enduring an international rugby match - village life is simple but not easy.

After dealing with someone trying to rip us off, we boarded the Kathmandu-bound bus. I felt genuine sadness leaving this magical area where people left me feeling content, happy, and peaceful.

## Why Choose Village Tourism

If you seek relaxing times in beautiful surroundings on a budget, the village experience with Himkala Adventure delivers beyond expectations. You will not be disappointed by the authentic cultural immersion, genuine hospitality, and breathtaking landscapes that make Gorkha's villages truly special destinations for meaningful travel experiences.

Much love,
Edward
`,
      "coverImage": "/images/blog-23.jpeg",
      "images": [
        "/images/blog-24.jpg",
        "/images/blog-25.jpg",
        "/images/blog-26.jpg",
        "/images/blog-27.jpg",
        "/images/blog-28.jpg",
        "/images/blog-29.jpg",
        "/images/blog-30.jpg",
      ],
      "category": "Village Tourism",
      "publishedDate": "2016-09-08",
      "readTime": "9 min"
    }
  ];

  // Fetch YouTube videos - using mock data
  useEffect(() => {
    const fetchVideos = async () => {
      try {
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

  // Format date helper for dialog
  const formatDialogDate = (dateString: string) => {
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
    <div className="w-full py-8 sm:py-12 px-3 sm:px-4 md:px-8 bg-gradient-to-b from-[#E3F2FF] to-[#F5F9FF]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E4F7C] mb-3 sm:mb-4">
            Latest Stories & Content
          </h2>
          <p className="text-sm sm:text-base text-[#2E4F7C]/70 max-w-2xl mx-auto">
            Discover our latest video stories and blog posts from the heart of Nepal
          </p>
        </div>

        {/* Combined Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-10 sm:mb-12">
          {/* YouTube Videos Section - UNCHANGED */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#2E4F7C] border-b-2 border-[#2E4F7C] pb-2">
                Video Stories
              </h3>
              <span className="text-xs sm:text-sm text-[#2E4F7C]/60 bg-[#CFE8FF] px-2 py-1 rounded-full">
                {videos.length} video{videos.length !== 1 ? 's' : ''}
              </span>
            </div>
            
            {videos.length === 0 && !isLoading && (
              <div className="text-center py-8 sm:py-12 bg-white/50 rounded-lg border border-[#CFE8FF]">
                <div className="w-12 h-12 mx-auto mb-3 bg-[#E3F2FF] rounded-full flex items-center justify-center">
                  <Play className="h-6 w-6 text-[#2E4F7C]" />
                </div>
                <p className="text-[#2E4F7C]/60">No videos available yet</p>
                <p className="text-xs text-[#2E4F7C]/40 mt-1">Check back soon for new content</p>
              </div>
            )}
            
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {videos.map((video, idx) => {
                const videoId = getYouTubeId(video.youtube_url);
                const thumbnailUrl = videoId
                  ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                  : "/images/default-video.jpg";

                return (
                  <motion.div
                    key={video.id}
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={cardVariants}
                  >
                    <Card
                      className="group cursor-pointer overflow-hidden bg-white hover:shadow-lg transition-all duration-300 border border-[#CFE8FF] hover:border-[#8AB8E0] h-full"
                    >
                      <div
                        className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#2E4F7C] to-[#1F3A5A]"
                        onClick={() => setSelectedVideo(video)}
                      >
                        <img
                          src={thumbnailUrl}
                          alt={video.title}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/images/default-video.jpg";
                          }}
                        />
                        <div className="absolute inset-0 bg-[#2E4F7C]/20 group-hover:bg-[#2E4F7C]/40 transition-all duration-300 flex items-center justify-center">
                          <div className="bg-white/90 p-2 sm:p-3 rounded-full transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <Play className="h-4 w-4 sm:h-6 sm:w-6 text-[#2E4F7C] fill-[#2E4F7C]" />
                          </div>
                        </div>
                        <div className="absolute top-3 right-3">
                          <div className="bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                            Video
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-3 sm:p-4">
                        <h3 className="font-semibold text-sm sm:text-base leading-tight text-[#2E4F7C] mb-2 line-clamp-2 group-hover:text-[#1F3A5A] transition-colors">
                          {video.title}
                        </h3>
                        {video.description && (
                          <p className="text-xs sm:text-sm text-[#2E4F7C]/70 line-clamp-2">
                            {video.description}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="text-center pt-2 sm:pt-4">
              <Link href="/blog">
                <Button className="bg-[#2E4F7C] hover:bg-[#1F3A5A] text-white px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 mx-auto text-sm sm:text-base shadow-md hover:shadow-lg">
                  View All Videos <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Blog Posts Section - UPDATED with new BlogCard component */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#2E4F7C] border-b-2 border-[#2E4F7C] pb-2">
                Blog Stories
              </h3>
              <span className="text-xs sm:text-sm text-[#2E4F7C]/60 bg-[#CFE8FF] px-2 py-1 rounded-full">
                {posts.length} post{posts.length !== 1 ? 's' : ''}
              </span>
            </div>
            
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 sm:gap-6">
                {[1, 2].map((i) => (
                  <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#8AB8E0]/30 animate-pulse">
                    <div className="aspect-[4/3] md:aspect-[16/9] bg-gray-200"></div>
                    <div className="p-4 md:p-5">
                      <div className="flex items-center justify-between mb-3">
                        <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/6"></div>
                      </div>
                      <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
                      <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-8 sm:py-12 bg-white/50 rounded-lg border border-[#CFE8FF]">
                <div className="w-12 h-12 mx-auto mb-3 bg-[#E3F2FF] rounded-full flex items-center justify-center">
                  <Mountain className="h-6 w-6 text-[#2E4F7C]" />
                </div>
                <p className="text-[#2E4F7C]/60">No blog posts available yet</p>
                <p className="text-xs text-[#2E4F7C]/40 mt-1">New stories coming soon</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {posts.map((post, idx) => (
                  <BlogCard 
                    key={post.id} 
                    post={post} 
                    onClick={() => setSelectedPost(post)} 
                  />
                ))}
              </div>
            )}
            
            <div className="text-center pt-2 sm:pt-4">
              <Link href="/blog">
                <Button className="bg-[#2E4F7C] hover:bg-[#1F3A5A] text-white px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 mx-auto text-sm sm:text-base shadow-md hover:shadow-lg">
                  Read All Blogs <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Video Modal - UNCHANGED */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-3 sm:p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl aspect-video bg-black rounded-lg sm:rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-8 sm:-top-10 right-0 text-white text-sm z-10 bg-[#2E4F7C] hover:bg-[#1F3A5A] px-3 py-1.5 rounded-md transition-colors duration-200 flex items-center gap-2"
                onClick={() => setSelectedVideo(null)}
              >
                <X className="h-3 w-3" />
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

        {/* Blog Post Dialog - UPDATED to use BlogContentRenderer with interspersed images */}
        <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
          <DialogContent className="max-w-2xl sm:max-w-3xl lg:max-w-5xl xl:max-w-6xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#E3F2FF] to-[#CFE8FF] p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-2xl border border-[#8AB8E0]/30">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute -top-2 -right-2 z-50 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all duration-200 hover:scale-110 border border-[#8AB8E0]/30"
              >
                <X className="h-3 w-3 sm:h-4 sm:w-4 text-[#2E4F7C]" />
              </button>
              
              {selectedPost && (
                <>
                  <DialogHeader className="flex justify-between items-start mb-4 sm:mb-6 pr-8">
                    <DialogTitle className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#2E4F7C] leading-tight">
                      {selectedPost.title}
                    </DialogTitle>
                  </DialogHeader>

                  <DialogDescription asChild>
                    <motion.div 
                      className="space-y-4 sm:space-y-6 text-[#2E4F7C]" 
                      initial={{ opacity: 0, y: 20 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      transition={{ duration: 0.5 }}
                    >
                      {/* Cover Image */}
                      <div className="relative w-full aspect-[16/9] rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
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
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#2E4F7C]/80 bg-white/80 rounded-lg p-3 sm:p-4 shadow-sm">
                        <Badge variant="secondary" className="bg-[#CFE8FF] text-[#2E4F7C] border border-[#8AB8E0] text-xs px-2 py-1">
                          <Mountain className="h-3 w-3 mr-1" />
                          {selectedPost.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>{formatDialogDate(selectedPost.publishedDate)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>{selectedPost.readTime} read</span>
                        </div>
                      </div>

                      {/* Excerpt */}
                      <div className="mb-6">
                        <p className="text-base sm:text-lg md:text-xl text-[#2E4F7C] leading-relaxed italic border-l-4 border-[#3C6AA6] pl-4 py-2 bg-white/50 rounded-r-lg">
                          {selectedPost.excerpt}
                        </p>
                      </div>

                      {/* Blog Content with Images Interspersed */}
                      <div className="bg-white/70 rounded-lg p-3 sm:p-4 md:p-6 shadow-sm border border-[#8AB8E0]/20">
                        <BlogContentRenderer 
                          content={selectedPost.content} 
                          images={selectedPost.images} 
                        />
                      </div>

                      {/* Tags */}
                      <div className="mt-12 pt-8 border-t border-[#8AB8E0]">
                        <div className="flex flex-wrap gap-2">
                          {['Travel', 'Adventure', 'Nepal', 'Himalayas', 'Trekking', 'Culture'].map((tag) => (
                            <Badge key={tag} variant="secondary" className="rounded-full px-3 py-1 bg-[#CFE8FF] text-[#2E4F7C] border border-[#8AB8E0]">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Close Button at Bottom for Mobile */}
                      <div className="flex justify-center sm:hidden pt-4">
                        <Button 
                          onClick={() => setSelectedPost(null)}
                          className="bg-[#2E4F7C] hover:bg-[#1F3A5A] text-white px-6 py-2 rounded-lg font-medium text-sm transition-all duration-200 w-full max-w-xs shadow-md"
                        >
                          Close Article
                        </Button>
                      </div>
                    </motion.div>
                  </DialogDescription>
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}