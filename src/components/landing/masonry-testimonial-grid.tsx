"use client";

import { Star, ChevronDown, ChevronUp, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface DataItem {
  id: number;
  name: string;
  experiencePhoto: string;
  content: string;
  trek: string;
  country: string;
  rating: number;
  photos?: string[];
  margin?: string;
  reviewDate?: string;
  reviewLink?: string;
}

const MasonryTestimonialGrid = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [isClient, setIsClient] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState<string[] | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [data, setData] = useState<DataItem[]>([]);
  const [displayData, setDisplayData] = useState<DataItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const tripadvisorUrl =
    "https://www.tripadvisor.com/Attraction_Review-g293890-d8417075-Reviews-Himkala_Adventure-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html";

  // Mock testimonials data
  const mockTestimonials: DataItem[] = [
    {
      id: 1,
      name: "Patrick vdB",
      experiencePhoto: "",
      content: "When I travel I really want to see the real culture and daily life of the place, and this tour showed me exactly that. Shiva is extremely knowledgeable, he's from Kathmandu and he knows way more things than you'll be able to remember. He knows where and when to go, and he's really flexible with the duration and start time. He will not only show you the basic things, but he will manage the tempos so that you see special events or happenings. Also, he can give you advice on where to buy this or that, and his company also offers trekking tours, so you can have it all in one. So if you're looking for a local guide which won't just show the basic things, take a tour with Shiva.",
      trek: "Kathmandu Tour",
      country: "Katalonia",
      rating: 5,
      reviewDate: "2017-02-12",
    },
    {
      id: 2,
      name: "Sonia Ferrer",
      experiencePhoto: "",
      content: "Can't imagine better way to live Kathmandu than the Free Walking Tours with Shiva. He has driven us to special places and temples in the ciry, and explained everything in detail. Highly recommended!!",
      trek: "Free Walking Tour, Kathmandu",
      country: "Spain",
      rating: 5,
      reviewDate: "2017-06-14"
    },
    {
      id: 3,
      name: "Patrizia Cotza",
      experiencePhoto: "/images/review-2.jpg",
      content: "Shiva y su equipo te da la posibilidad de conocer la cultura y los entresijos del Kathmandu. No solo visitando los sitios más destacados sino también las callejuelas donde nace la ciudad, donde vive y se relaciona su gente, y llevarte la sensación haber conocido Nepal y su cultura. Durante todos los tours te cuenta el origen, la evolución y la razón de los sitios y monumentos del lugar. Me ha parecido una experiencia muy completa e interesante. Muy recomendable",
      trek: "Free Walking Tour, Kathmandu",
      country: "Spain",
      rating: 5,
      reviewDate: "2017-08-26",
      photos: ["/images/review-2.jpg"]
    },
    {
      id: 4,
      name: "Scott Summerhayes",
      experiencePhoto: "",
      content: "Shiva and Himkala Adventure was amazing! The free walking tour was very in depth, teaching us about Buddhist temples, the city history and local food and artisanship. Shiva has a wealth of knowledge and tips. He really knows his stuff! A trip I'll never forget.",
      trek: "Free Walking Tour, Kathmandu",
      country: "United Kingdom",
      rating: 5,
      reviewDate: "2017-08-18"
    },
    {
      id: 5,
      name: "Samuel John",
      experiencePhoto: "",
      content: "I first met Shiva on his Free Walking tour of Kathmandu (this is also fantastic and very much worth doing as an introduction to the city). I had always wanted to see Everest, and through a recommendation from a friend who did the Annapurna Circuit Trek, I decided to do the 16-day Everest Base Camp trek. Throughout, Shiva was always friendly, accessible and full of interesting facts about the region. Having only done smaller treks before, I was a little anxious about altitude sickness and the physical demand of the trek, but Shiva was responsive and helped us through the acclimatisation process and kept a pace that matched our ability. Particular highlights included the Tengboche Monastery, a beautiful location in itself with the added bonus of a great view of Everest; as well as the sunset views of Gokyo Ri and Kala Patthar. Seeing the Sherpa villages was also a bonus; I was also lucky enough to see the Mani Rimdu festival at Khumbu, which was on during my visit.The costs of the trip included airport transfer, a day of sightseeing and 3 nights accommodation in Kathmandu (including breakfast); as well as the return flight to Lukla, meals and lodging during the trek as well as a (well deserved) farewell dinner and cultural show at the end of the trip! I would highly recommend Himkala Adventure for any treks whilst in Nepal. Shiva is an enthusiastic, friendly and helpful guide who is also responsive to various levels of trekking/mountaineering skills; and Himkala Adventure is the best way to see the world’s highest peak!",
      trek: "Everest Base Camp Trek",
      country: "United States of America",
      rating: 5,
      reviewDate: "2018-01-25"
    },
    {
      id: 6,
      name: "Cael Geoffrey",
      experiencePhoto: "/images/review-3.jpg",
      content: "Thank you so much Shiva for that GREAT trekking experience in Annapurna Circuit Tour. Shiva is very knowledgeable on the trekking path itself (incl. teahouse lodge choice on the way), and always keen to teach you on the beautiful surrounding nature. Always there to help you also pro-actively while keeping a reasonable distance if you want so as well. You would have understood it, I always felt to be in good hands from day1 till the end. Highly recommended! Enjoy!",
      trek: "Annapurna Circuit Trek",
      country: "Greece",
      rating: 5,
      reviewDate: "2018-02-08",
      photos: ["/images/review-3.jpg", "/images/review-4.jpg", "/images/review-5.jpg"]
    },
    {
      id: 7,
      name: "Dorota Grabek",
      experiencePhoto: "/images/review-6.jpg",
      content: "Himkala Adventure organized for me and my friends 10 days trekking to Annapurna Base Camp. Our guide was very supportive and profesional, he affored us unforgettable and safe Himalayan trekking!",
      trek: "Annapurna Base Camp Trek",
      country: "Spain",
      rating: 5,
      reviewDate: "2018-03-12",
      photos: ["/images/review-6.jpg"]
    },
    {
      id: 8,
      name: "Sebastien Schille",
      experiencePhoto: "/images/review-7.jpg",
      content: "I had an amazing and unforgettable experience with Himkala Adventure! After going on the ONLY free walking tour in Kathmandu I decided I wanted to do a bit of trekking in the nearby Valley Fringe. I came to Shiva , Himkala Adventure’s director, to ask him what he thought was the best next step. Before I knew it, he had come up with a complete itinerary for 3 days and 2 nights with some fantastic sightseeing included. Shiva was an excellent guide! He is easy going, kind and very knowledgeable. If you are looking to do some trekking in Nepal, I very highly recommend going with Himkala Adventure!",
      trek: "Free Walking Tour and Valley Fringe Tour",
      country: "United Kingdom",
      rating: 5,
      reviewDate: "2019-09-02",
      photos: ["/images/review-7.jpg", "/images/review-8.jpg", "/images/review-9.jpg","/images/review-10.jpg", "/images/review-11.jpg", "/images/review-12.jpg"]
    },
    {
      id: 9,
      name: "Clémence",
      experiencePhoto: "",
      content: "For more than three hours, Shiva took us to the must-seen monuments and historical sites of Kathmandhu. He has such dedication that it was a pleasure to discover the Nepali capital as well as Hindu and Buddhist cultures by his side. He knows a lot about the history of Nepal, religions, spirituality but also current affairs and can answer any question that you may have during your journey. We even booked a second tour with him in order to extend our knowledge of the culture and visit other sites. In short, if you are looking for a guide passionate about his work and his country as well as a local experience, I highly recommend you Shiva and his agency, Himkala Adventure. 🙏🏼",
      trek: "Free Walking Tour and UNESCO heritage sightseeing",
      country: "France",
      rating: 5,
      reviewDate: "2022-05-31",
    },
    {
      id: 10,
      name: "Aránzazu Gs",
      experiencePhoto: "/images/review-14.jpg",
      content: "Shiva is a professional, passionate, friendly, empathetic and excellent guide, he knows a lot about the history of Nepal and about the temples. He did not only took me to see the most local and special places in Kathmandu, but he also made me discover the Nepalese culture and their way of life, food, superstitions, customs..... with Shiva is possible to visit the most remote and beautiful places in the city and the most breathtaking views in the mountains by trekking, he takes care of his customers (he use his umbrella to protect me from the sun during the tour :) Thank you Shiva for taking many lovely pictures of me and being such a good guide and friend. I went to Nepal alone and I did not hesitate to want him and his family to be part of my experience, he transmits good vibes even millions of kilometers far away. I totally recommend his tours, and trekk to everyone. Thank you a thousand times",
      trek: "Free Walking Tour, Kathmandu",
      country: "Spain",
      rating: 5,
      reviewDate: "2022-08-06",
      photos: ["/images/review-14.jpg", "/images/review-15.jpg", "/images/review-16.jpg"]
    },
    {
      id: 11,
      name: "Stephania Polo Viera",
      experiencePhoto: "/images/review-17.jpg",
      content: "To experience Kathmandu with Himkala adventure it’s definitely a great experience, you feel secure every time and of course you can reach all places you are interested in. I won’t doubt to reach this agency in my next trip!",
      trek: "Kathmandu Tour",
      country: "Spain",
      rating: 5,
      reviewDate: "2022-08-31",
      photos: ["/images/review-17.jpg", "/images/review-18.jpg", "/images/review-19.jpg", "/images/review-20.jpg", "/images/review-21.jpg", "/images/review-22.jpg"]
    },
    {
      id: 12,
      name: "Laurine Normand",
      experiencePhoto: "/images/review-23.jpg",
      content: "👉🏼 Not to missed in Kathmandu !🇳🇵 If you're looking for an immersive experience around Nepal's capital, this is the place ! Come and discover the 4h Kathmandu Free Walking Tour organized by our wonderful guide, Shiva. Shiva, with his local expertise and contagious enthusiasm, will take you to the city's best spots. He goes beyond the usual tourist attractions, revealing hidden gems and offering unique insights into Kathmandu's history, religions and daily life !😄 In small groups of 5 people, we felt truly connected to this city and its community. Also, it was perfect time to take pictures and know more about the culture. Shiva was very patient and listened to all our questions. It was really pleasant ! Passing by the Boudhanat Stupa, the Local Market, the Durbar Square, the Monkey temple (Soyambunath) and also too many places, I highly recommend Shiva's free walking tour to anyone wishing to discover Kathmandu in an authentic and enriching way, as I did ! Thank you Shiva ✨",
      trek: "Free Walking Tour, Kathmandu",
      country: "France",
      rating: 5,
      reviewDate: "2024-08-31",
      photos: ["/images/review-23.jpg", "/images/review-24.jpg", "/images/review-25.jpg", "/images/review-26.jpg", "/images/review-27.jpg", "/images/review-28.jpg"]
    },
    {
      id: 13,
      name: "Novia Nguyen",
      experiencePhoto: "/images/review-29.jpg",
      content: "If you're planning a trip to Kathmandu and want to experience the authentic culture and art of Nepal, look no further than a tour with Shiva. I recently had the pleasure of exploring the heart of Kathmandu with him, and I can't recommend him highly enough. What sets Shiva apart is his attention to detail and his genuine interest in making sure you get the most out of your tour. He took the time to understand my interests and then tailored the day accordingly. I had mentioned that I was particularly interested in art and architecture, and Shiva went above and beyond to make sure I had a fulfilling experience by taking me to a specialized art shop to learn more about traditional Nepali paintings. He has a way of making you feel at ease, and you can tell he genuinely enjoys sharing his culture with visitors. Thank you, Shiva, for a wonderful day in Kathmandu!",
      trek: "Kathmandu Tour",
      country: "United States of America",
      rating: 5,
      reviewDate: "2024-05-09",
      photos: ["/images/review-29.jpg", "/images/review-30.jpg", "/images/review-31.jpg"]
    },
    {
      id: 14,
      name: "Nina Dupuy",
      experiencePhoto: "/images/review-32.jpg",
      content: "I had the incredible opportunity to do the Everest Base Camp with this company, and it was undoubtedly one of the most memorable experiences of my life. From the very beginning, the trek promised fascination, traversing breathtaking landscapes with the mountains and everything and picturesque Sherpa villages. The organization of the expedition was impeccable. My guide, Khadga, was extremely attentive and helpful. He providing me with enriching information about the local culture, geography of the Himalayas. He also ensured that I was healthy and acclimatized to the altitude, which was reassuring. Each day brought its share of natural wonders, with panoramic views of majestic peaks such as Ama Dablam and Lhotse. The lodges i stayed in were comfortable and welcoming, offering a warm atmosphere after intense days of trekking. Reaching Base Camp was a triumphant moment. It was an indescribable feeling to be so close to this legendary mountain. While the trek is demanding, the beauty and grandeur of the Himalayas make every effort worthwhile (really). I highly recommend this adventure to all hiking and nature enthusiasts. Make sure you are well-prepared physically and mentally, as the altitude and conditions can be challenging. But with good preparation and a spirit of adventure, the Everest Base Camp is a destination that offers unforgettable memories. I will 100% do it again !!!!",
      trek: "Everest Base Camp Trek",
      country: "France",
      rating: 5,
      reviewDate: "2024-05-21",
      photos: ["/images/review-32.jpg", "/images/review-33.jpg", "/images/review-34.jpg", "/images/review-35.jpg", "/images/review-36.jpg", "/images/review-37.jpg"]
    },
    {
      id: 15,
      name: "Krystsina Babets",
      experiencePhoto: "/images/review-38.jpg",
      content: "I did Annapurna Base Camp trekking with Himkala Adventure and it was absolutely fantastic experience!! It was my third trekking experience with Himkala Adventure. Shiva is a very caring knowledgeable guide and genuinely honest person. The trekking was personalized according to my available days and went smoothly with few options in case I needed to come back earlier. You will really have a great experience with Himkala Adventure!!",
      trek: "Annapurna Base Camp Trek",
      country: "Belarus",
      rating: 5,
      reviewDate: "2024-06-10",
      photos: ["/images/review-38.jpg","/images/review-39.jpg","/images/review-40.jpg" ]
    },
    {
      id: 16,
      name: "Isabela Coimbra",
      experiencePhoto: "/images/review-41.jpg",
      content: "Shiva is a wonderful guide. I have made the city tour with him. He has a very well-planned itinerary and great energy. He guides the tour with great attention and good humor. Like a local, he explains the history of the places we visit clearly and with a lot of content. We visited a variety of places, from Hindu and Buddhist temples, to local markets, ancient architecture and ended at the monkey temple with a beautiful sunset and city view. I highly recommend him!",
      trek: "Free Walking Tour, Kathmandu",
      country: "Brazil",
      rating: 5,
      reviewDate: "2025-04-11",
      photos: ["/images/review-41.jpg", "/images/review-42.jpg"]
    },
    {
      id: 17,
      name: "Anna Michelle Goksøyr",
      experiencePhoto: "/images/review-43.jpg",
      content: "Me and my friend did the Manaslu Circuit trek trough himkala adventures, and it has been an amazing experience that we will remember for the rest of our lives. We were guided by two guides as one had a lot of experience with the trek, while the other would learn! And the more the merrier for us! The guides treated us like princesses, picked flowers for us, and have become friends for life. We had a lot of fun together, beautiful days of walking, learnt a lot about both the nepali and tibetan culture as the gudes had a lot of knowledge and urge to answer all of our questions. I deeply recommend traveling with himkala adventures❤️ thank you so much for everything and for making us feel safe during the magical but challenging trek",
      trek: "Manaslu Circuit",
      country: "Norway",
      rating: 5,
      reviewDate: "2022-05-31",
      photos: ["/images/review-43.jpg","/images/review-44.jpg", "/images/review-45.jpg", "/images/review-46.jpg" ]
    },
    {
      id: 18,
      name: "Novitri Esna (Esperiana)",
      experiencePhoto: "/images/review-47.jpg",
      content: "I’m a beginner trekker, but Shiva made the Langtang trek feel possible. He was so patient and always checked in—“How are you feeling?” “Need a break?” “Almost there!” He never forgot to remind us about our things and made sure we were well prepared each day. Along the way, he pointed out langurs, yaks, and special places I would’ve missed on my own. Thanks to him, I felt supported the whole way and had an unforgettable journey to 4400m!",
      trek: "Langtang Valley Trek",
      country: "Indonesia",
      rating: 5,
      reviewDate: "2025-06-20",
      photos: ["/images/review-47.jpg","/images/review-48.jpg","/images/review-49.jpg" ]
    },
    {
      id: 19,
      name: "Suffel Schatz",
      experiencePhoto: "/images/review-50.jpg",
      content: "We did a 7day hiking tour with Himkala adventures. Starting together from Kathmandu with the bus to Pokhara, from there by jeep to Ghandrik. The following days we trekked via various beautiful trea houses from Tadapani to Dobato, Khopra Ridge with Khayer Lake to Ghorepani via Swanta and Poonhill. We had an amazing time, great conversations with our guide Sabinaya about Nepal's culture, history, everyday life, etc. Personal yet always professional. Thanks for that outstanding experience which we will never forget.",
      trek: "Khopra Ridge Trek",
      country: "Germany",
      rating: 5,
      reviewDate: "2025-10-05",
      photos: ["/images/review-50.jpg", "/images/review-51.jpg","/images/review-52.jpg","/images/review-53.jpg",]
    },
    {
      id: 20,
      name: "Will Winterbourne",
      experiencePhoto: "/images/review-54.jpg",
      content: "I did the walking tour around Kathmandu with Sabinaya who was such an insightful and enjoyable guide, fascinating few hours exploring Kathmandu, would highly recommend!",
      trek: "Free Walking Tour, Kathmandu",
      country: "United Kingdom",
      rating: 5,
      reviewDate: "2025-11-11",
      photos: ["/images/review-54.jpg", ]
    },
  
    
  ];

  useEffect(() => {
    setIsClient(true);
    if (window.innerWidth < 640) setVisibleCount(1);
    else setVisibleCount(3);

    const loadData = async () => {
      try {
        setIsLoading(true);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setData(mockTestimonials);
        
        // Reverse the array so first item appears last
        const reversedData = [...mockTestimonials].reverse();
        setDisplayData(reversedData);
      } catch (error) {
        console.error("Error loading reviews:", error);
        setData([]);
        setDisplayData([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, displayData.length));
    setIsExpanded(true);
  };

  const showLess = () => {
    setVisibleCount(3);
    setIsExpanded(false);
    
    // Scroll to the top of the testimonials section
    setTimeout(() => {
      const element = document.getElementById("testimonials-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const openPhotoViewer = (photoIndex: number) => {
    setSelectedPhotoIndex(photoIndex);
  };

  const closePhotoViewer = () => {
    setSelectedPhotoIndex(null);
  };

  const goToNextPhoto = () => {
    if (selectedPhotos && selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % selectedPhotos.length);
    }
  };

  const goToPreviousPhoto = () => {
    if (selectedPhotos && selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        selectedPhotoIndex === 0 ? selectedPhotos.length - 1 : selectedPhotoIndex - 1
      );
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex !== null) {
        if (e.key === 'Escape') {
          closePhotoViewer();
        } else if (e.key === 'ArrowRight') {
          goToNextPhoto();
        } else if (e.key === 'ArrowLeft') {
          goToPreviousPhoto();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, selectedPhotos]);

  if (!isClient) return null;

  if (isLoading) {
    return (
      <section className="bg-gradient-to-b from-[#E3F8FF]/40 via-[#CFE8FF]/30 to-[#A6D4FF]/20 py-12 sm:py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3C6AA6]"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials-section" className="bg-gradient-to-b from-[#E3F8FF]/40 via-[#CFE8FF]/30 to-[#A6D4FF]/20 py-12 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 px-4 sm:px-8">
          <h2 className="mb-2 text-center text-2xl sm:text-3xl lg:text-5xl font-semibold font-display text-[#2E4F7C]">
            Testimonials and Reviews
          </h2>
          <p className="hidden sm:block text-center text-sm sm:text-lg text-[#3C6AA6] max-w-2xl">
            Honest stories from travelers who trusted us with their adventure.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-8 sm:mt-14 w-full px-2 sm:px-8 md:px-16 lg:px-32">
          {displayData.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#3C6AA6]">No reviews yet. Check out our Tripadvisor reviews!</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {displayData.slice(0, visibleCount).map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      className={cn(
                        "rounded-xl p-4 sm:p-6 shadow-sm bg-[#f0f8ff] border-[#A6D4FF] transition-all duration-500 hover:shadow-lg hover:-translate-y-1 hover:border-[#3C6AA6] cursor-pointer group h-full",
                        testimonial.margin
                      )}
                    >
                      <div className="mb-2 flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="fill-[#FFD966] text-[#FFD966] h-4 w-4" />
                        ))}
                      </div>
                      <div className="text-[#1C3C50] mt-2 text-xs sm:text-sm leading-relaxed">
                        <q>{testimonial.content}</q>
                      </div>
                      {testimonial.reviewDate && (
                        <p className="text-[10px] sm:text-xs text-[#3C6AA6] mt-2">{testimonial.reviewDate}</p>
                      )}

                      <div className="mt-4 flex flex-col gap-1">
                        <p className="font-bold text-[#2E4F7C] font-display text-sm">{testimonial.name}</p>
                        <p className="text-[10px] sm:text-xs text-[#3C6AA6]">{testimonial.country}</p>
                        <p className="text-[10px] sm:text-xs text-[#5C90B0] font-medium">{testimonial.trek}</p>
                      </div>

                      {testimonial.photos && testimonial.photos.length > 0 && (
                        <Button
                          className="mt-2 sm:mt-4 bg-[#3C6AA6] hover:bg-[#2E4F7C] text-white text-xs sm:text-sm"
                          onClick={() => setSelectedPhotos(testimonial.photos!)}
                        >
                          View Photos
                        </Button>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>

              {displayData.length > 3 && (
                <div className="flex justify-center mt-4 sm:mt-10">
                  {visibleCount < displayData.length ? (
                    <motion.button
                      onClick={loadMore}
                      className="flex items-center gap-2 bg-[#3C6AA6] hover:bg-[#2E4F7C] rounded-full px-6 sm:px-8 py-3 sm:py-4 text-white text-sm sm:text-base font-medium group"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>Load More Reviews</span>
                      <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ChevronDown className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      </motion.div>
                    </motion.button>
                  ) : (
                    <motion.button
                      onClick={showLess}
                      className="flex items-center gap-2 bg-[#2E4F7C] hover:bg-[#1C3C50] rounded-full px-6 sm:px-8 py-3 sm:py-4 text-white text-sm sm:text-base font-medium group"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>Show Less</span>
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ChevronUp className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      </motion.div>
                    </motion.button>
                  )}
                </div>
              )}

              {visibleCount >= displayData.length && displayData.length > 6 && (
                <motion.div 
                  className="mt-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-sm text-[#3C6AA6] italic">
                    You've viewed all {displayData.length} reviews!
                  </p>
                </motion.div>
              )}
            </>
          )}
        </div>

        {/* Photos Modal */}
        <AnimatePresence>
          {selectedPhotos && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
              onClick={() => setSelectedPhotos(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-white rounded-xl p-4 sm:p-6 max-w-3xl w-full overflow-y-auto max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-[#2E4F7C]">Review Photos</h3>
                  <Button onClick={() => setSelectedPhotos(null)} className="bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm">
                    Close
                  </Button>
                </div>
                <div className="mt-2 md:mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                  {selectedPhotos.map((photo, i) => (
                    <motion.div
                      key={i}
                      className="relative w-full h-40 sm:h-64 cursor-pointer group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => openPhotoViewer(i)}
                    >
                      <Image
                        src={photo}
                        alt={`Photo ${i + 1}`}
                        fill
                        className="rounded-lg object-cover"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 rounded-lg flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white font-semibold">
                          Click to enlarge
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Full Screen Photo Viewer */}
        <AnimatePresence>
          {selectedPhotoIndex !== null && selectedPhotos && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90"
              onClick={closePhotoViewer}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
                  onClick={closePhotoViewer}
                >
                  <X className="h-8 w-8" />
                </button>

                {/* Navigation Arrows */}
                {selectedPhotos.length > 1 && (
                  <>
                    <button
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        goToPreviousPhoto();
                      }}
                    >
                      <ChevronUp className="h-8 w-8 rotate-90" />
                    </button>
                    <button
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        goToNextPhoto();
                      }}
                    >
                      <ChevronDown className="h-8 w-8 -rotate-90" />
                    </button>
                  </>
                )}

                {/* Photo Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 text-white text-sm">
                  {selectedPhotoIndex + 1} / {selectedPhotos.length}
                </div>

                {/* Main Image */}
                <motion.div
                  key={selectedPhotoIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative w-full h-full max-w-5xl max-h-[80vh] mx-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={selectedPhotos[selectedPhotoIndex]}
                    alt={`Photo ${selectedPhotoIndex + 1}`}
                    fill
                    className="object-contain rounded-lg"
                    unoptimized
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tripadvisor Link */}
        <div className="mt-8 sm:mt-20 flex flex-col items-center gap-4 sm:gap-6 px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm sm:text-lg font-medium text-[#3C6AA6] text-center"
          >
            See all reviews on Tripadvisor
          </motion.p>
          <motion.a
            href={tripadvisorUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="block"
          >
            <Image
              src="/images/TripAdvisor-Logo.png"
              alt="Tripadvisor"
              width={240}
              height={240}
              className="w-40 sm:w-60 h-40 sm:h-60 object-contain"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export { MasonryTestimonialGrid };