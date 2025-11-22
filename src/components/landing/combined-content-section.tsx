"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, Clock, ArrowRight, Mountain, Star } from "lucide-react";
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
  // Check if it's an external URL
  const isExternal = src.startsWith('http') && !src.includes('localhost') && !src.includes('127.0.0.1');
  
  if (isExternal) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onError={onError}
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
      onError={onError}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
};

// Component to render formatted blog content with proper spacing (same as blog content section)
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
      title: "Ritual Thread Ceremony | Himkala Adventure ",
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
  "images": ["/images/blog-24.jpg",
    "/images/blog-25.jpg","/images/blog-26.jpg","/images/blog-27.jpg","/images/blog-28.jpg","/images/blog-29.jpg","/images/blog-30.jpg",
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
        // Simulate API delay
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
        // Simulate API delay
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

  // Format date helper
  const formatDate = (dateString: string) => {
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
    <div className="w-full py-12 px-4 md:px-8 bg-gradient-to-b from-[#E3F2FF] to-[#F5F9FF]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-bold text-center text-[#2E4F7C] mb-12">
          Latest Stories & Content
        </h2>

        {/* Combined Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* YouTube Videos Section */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-[#2E4F7C] border-b-2 border-[#2E4F7C] pb-2">
              Video Stories
            </h3>
            
            {videos.length === 0 && !isLoading && (
              <p className="text-center text-[#2E4F7C]/70 py-8">No videos available</p>
            )}
            
            <div className="grid grid-cols-1 gap-6">
              {videos.map((video, idx) => {
                const videoId = getYouTubeId(video.youtube_url);
                const thumbnailUrl = videoId
                  ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
                  : "/images/default-video.jpg";

                return (
                  <motion.div
                    key={video.id}
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                  >
                    <Card
                      className="group cursor-pointer overflow-hidden bg-white hover:shadow-lg transition-all duration-300"
                    >
                      <div
                        className="relative aspect-video overflow-hidden bg-[#2E4F7C]"
                        onClick={() => setSelectedVideo(video)}
                      >
                        <img
                          src={thumbnailUrl}
                          alt={video.title}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#2E4F7C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-white/90 p-3 rounded-full">
                            <Play className="h-6 w-6 text-[#2E4F7C] fill-[#2E4F7C]" />
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-4">
                        <h3 className="font-semibold text-sm leading-tight text-[#2E4F7C] mb-2 line-clamp-2">
                          {video.title}
                        </h3>
                        
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="text-center pt-4">
              <Link href="/blog">
                <Button className="bg-[#2E4F7C] hover:bg-[#1F3A5A] text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 mx-auto">
                  See more videos <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Blog Posts Section */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-[#2E4F7C] border-b-2 border-[#2E4F7C] pb-2">
              Blog Stories
            </h3>
            
            {isLoading ? (
              <div className="grid grid-cols-1 gap-6">
                <Card className="overflow-hidden bg-white border border-[#CFE8FF] animate-pulse">
                  <div className="aspect-[4/3] bg-gray-200"></div>
                  <CardHeader className="pb-3">
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                    <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </CardContent>
                </Card>
              </div>
            ) : posts.length === 0 ? (
              <p className="text-center text-[#2E4F7C]/70 py-8">No blog posts available</p>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {posts.map((post, idx) => (
                  <motion.div
                    key={post.id}
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                  >
                    <Card
                      className="group cursor-pointer overflow-hidden bg-white border border-[#CFE8FF] hover:shadow-md hover:border-[#8AB8E0] transition-all duration-300 h-full flex flex-col"
                      onClick={() => setSelectedPost(post)}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <div className="relative w-full h-full">
                          <SafeImage
                            src={post.coverImage}
                            alt={post.title}
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/images/default-blog.jpg";
                            }}
                          />
                        </div>
                        <div className="absolute top-3 left-3">
                          <Badge variant="secondary" className="text-xs bg-[#CFE8FF] text-[#2E4F7C] border border-[#8AB8E0]">
                            {post.category}
                          </Badge>
                        </div>
                      </div>

                      <CardHeader className="pb-3 flex-grow">
                        <h3 className="font-semibold text-lg leading-tight text-[#2E4F7C] group-hover:text-[#1F3A5A] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <p className="text-sm text-[#2E4F7C]/80 mb-3 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-[#2E4F7C]">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(post.publishedDate)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
            
            <div className="text-center pt-4">
              <Link href="/blog">
                <Button className="bg-[#2E4F7C] hover:bg-[#1F3A5A] text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 mx-auto">
                  See more blogs <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-10 right-0 text-white text-sm z-10 bg-[#2E4F7C] px-2 py-1 rounded-md hover:bg-[#1F3A5A]"
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

        {/* Blog Post Dialog - Updated to match blog content section style */}
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

                    {/* Additional Images */}
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
                            <div className="relative w-full h-full">
                              <SafeImage
                                src={image}
                                alt={`${selectedPost.title} - Image ${index + 1}`}
                                className="object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "/images/default-blog.jpg";
                                }}
                              />
                            </div>
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
    </div>
  );
}