"use client";

import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState, useEffect, useRef } from "react";
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [data, setData] = useState<DataItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

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
      content: "I first met Shiva on his Free Walking tour of Kathmandu (this is also fantastic and very much worth doing as an introduction to the city). I had always wanted to see Everest, and through a recommendation from a friend who did the Annapurna Circuit Trek, I decided to do the 16-day Everest Base Camp trek. Throughout, Shiva was always friendly, accessible and full of interesting facts about the region. Having only done smaller treks before, I was a little anxious about altitude sickness and the physical demand of the trek, but Shiva was responsive and helped us through the acclimatisation process and kept a pace that matched our ability. Particular highlights included the Tengboche Monastery, a beautiful location in itself with the added bonus of a great view of Everest; as well as the sunset views of Gokyo Ri and Kala Patthar. Seeing the Sherpa villages was also a bonus; I was also lucky enough to see the Mani Rimdu festival at Khumbu, which was on during my visit.The costs of the trip included airport transfer, a day of sightseeing and 3 nights accommodation in Kathmandu (including breakfast); as well as the return flight to Lukla, meals and lodging during the trek as well as a (well deserved) farewell dinner and cultural show at the end of the trip! I would highly recommend Himkala Adventure for any treks whilst in Nepal. Shiva is an enthusiastic, friendly and helpful guide who is also responsive to various levels of trekking/mountaineering skills; and Himkala Adventure is the best way to see the world's highest peak!",
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
      photos: ["/images/review-3.jpg", "/images/review-4.jpg", ]
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
      content: "I had an amazing and unforgettable experience with Himkala Adventure! After going on the ONLY free walking tour in Kathmandu I decided I wanted to do a bit of trekking in the nearby Valley Fringe. I came to Shiva , Himkala Adventure's director, to ask him what he thought was the best next step. Before I knew it, he had come up with a complete itinerary for 3 days and 2 nights with some fantastic sightseeing included. Shiva was an excellent guide! He is easy going, kind and very knowledgeable. If you are looking to do some trekking in Nepal, I very highly recommend going with Himkala Adventure!",
      trek: "Free Walking Tour and Valley Fringe Tour",
      country: "United Kingdom",
      rating: 5,
      reviewDate: "2019-09-02",
      photos: ["/images/review-7.jpg", "/images/review-8.jpg", "/images/review-9.jpg","/images/review-10.jpg"]
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
      content: "To experience Kathmandu with Himkala adventure it's definitely a great experience, you feel secure every time and of course you can reach all places you are interested in. I won't doubt to reach this agency in my next trip!",
      trek: "Kathmandu Tour",
      country: "Spain",
      rating: 5,
      reviewDate: "2022-08-31",
      photos: ["/images/review-17.jpg", "/images/review-18.jpg", "/images/review-19.jpg", "/images/review-20.jpg", ]
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
      photos: ["/images/review-23.jpg", "/images/review-24.jpg", "/images/review-25.jpg", "/images/review-26.jpg"]
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
      photos: ["/images/review-32.jpg", "/images/review-33.jpg", "/images/review-34.jpg", "/images/review-35.jpg", ]
    },
    {
      id: 15,
      name: "Krystsina Babets",
      experiencePhoto: "",
      content: "I did Annapurna Base Camp trekking with Himkala Adventure and it was absolutely fantastic experience!! It was my third trekking experience with Himkala Adventure. Shiva is a very caring knowledgeable guide and genuinely honest person. The trekking was personalized according to my available days and went smoothly with few options in case I needed to come back earlier. You will really have a great experience with Himkala Adventure!!",
      trek: "Annapurna Base Camp Trek",
      country: "Belarus",
      rating: 5,
      reviewDate: "2024-06-10",
      photos: ["/images/review-40.jpg" ]
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
      photos: ["/images/review-43.jpg","/images/review-44.jpg", "/images/review-46.jpg" ]
    },
    {
      id: 18,
      name: "Novitri Esna (Esperiana)",
      experiencePhoto: "/images/review-47.jpg",
      content: "I'm a beginner trekker, but Shiva made the Langtang trek feel possible. He was so patient and always checked in—'How are you feeling?' 'Need a break?' 'Almost there!' He never forgot to remind us about our things and made sure we were well prepared each day. Along the way, he pointed out langurs, yaks, and special places I would've missed on my own. Thanks to him, I felt supported the whole way and had an unforgettable journey to 4400m!",
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
    {
      id: 21,
      name: "arian asgari",
      experiencePhoto: "/images/review-55.jpg",
      content: "I was incredibly lucky to meet and trek with such an amazing group of people on the journey to Muldai. For me, it was a truly unique experience. The Muldai trek is an underrated gem it's on the shorter side, but the views are absolutely stunning. What really made it special, though, were the people. Shiva and his son, Sabinaya, are just fantastic; they were so much more than guides to me, and the whole group felt like a family. It was more than just a trek; it was a trip with people I felt genuinely close to🤩😍",
      trek: "Muldai View Point Trek and Ghorepani Poon Hill Trek",
      country: "Iran",
      rating: 5,
      reviewDate: "2025-11-22",
      photos: ["/images/review-55.jpg", "/images/review-56.jpg", "/images/review-57.jpg", "/images/review-58.jpg",  ]
    },
  ];

  useEffect(() => {
    setIsClient(true);
    
    // Set visible count based on screen size
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const loadData = async () => {
      try {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 800));
        const reversedData = [...mockTestimonials].reverse();
        setData(reversedData);
      } catch (error) {
        console.error("Error loading reviews:", error);
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play slideshow
  useEffect(() => {
    if (!autoPlay || data.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(data.length / visibleCount));
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, data.length, visibleCount]);

  const totalSlides = Math.ceil(data.length / visibleCount);
  const startIndex = currentSlide * visibleCount;
  const visibleData = data.slice(startIndex, startIndex + visibleCount);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + visibleCount, data.length));
    setIsExpanded(true);
  };

  const showLess = () => {
    setVisibleCount(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    setIsExpanded(false);
    
    setTimeout(() => {
      const element = document.getElementById("testimonials-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  if (!isClient) return null;

  if (isLoading) {
    return (
      <section className="bg-gradient-to-b from-[#E3F8FF]/40 via-[#CFE8FF]/30 to-[#A6D4FF]/20 py-12 sm:py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3C6AA6]"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials-section" className="bg-gradient-to-b from-[#E3F8FF]/40 via-[#CFE8FF]/30 to-[#A6D4FF]/20 py-12 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 px-4">
          <h2 className="text-center text-2xl sm:text-3xl lg:text-5xl font-bold font-display text-[#2E4F7C]">
            What Our Travelers Say
          </h2>
          <p className="text-center text-sm sm:text-base text-[#3C6AA6] max-w-2xl">
            Read authentic Google reviews from adventurers who've explored Nepal with us
          </p>
        </div>

        {/* Slideshow Section */}
        <div className="mt-8 sm:mt-14 relative">
          <div className="relative overflow-hidden rounded-2xl">
            {/* Slides */}
            <div 
              ref={slideRef}
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                const slideData = data.slice(
                  slideIndex * visibleCount,
                  slideIndex * visibleCount + visibleCount
                );
                
                return (
                  <div
                    key={slideIndex}
                    className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                  >
                    {slideData.map((testimonial) => (
                      <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="h-full"
                      >
                        <Card className="h-full rounded-xl p-4 sm:p-5 shadow-sm bg-white border-[#A6D4FF] transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-[#3C6AA6]">
                          {/* Review Content with Photo Grid */}
                          <div className="mb-4">
                            {/* Rating */}
                            <div className="flex gap-1 mb-3">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="fill-[#FFD966] text-[#FFD966] h-3 w-3 sm:h-4 sm:w-4" />
                              ))}
                            </div>

                            {/* Photos Grid - Integrated into card */}
                            {testimonial.photos && testimonial.photos.length > 0 && (
                              <div className="mb-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                                {testimonial.photos.slice(0, 4).map((photo, index) => (
                                  <div 
                                    key={index}
                                    className="relative aspect-square rounded-lg overflow-hidden bg-gray-100"
                                  >
                                    <Image
                                      src={photo}
                                      alt={`Review photo ${index + 1}`}
                                      fill
                                      className="object-cover hover:scale-105 transition-transform duration-300"
                                      sizes="(max-width: 640px) 50vw, 33vw"
                                      unoptimized
                                    />
                                    {index === 3 && testimonial.photos && testimonial.photos.length > 4 && (
                                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                        <span className="text-white text-xs font-semibold">
                                          +{testimonial.photos.length - 4}
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Review Text */}
                            <div className="text-[#1C3C50] text-xs sm:text-sm leading-relaxed line-clamp-5">
                              <q>{truncateText(testimonial.content, 200)}</q>
                            </div>
                          </div>

                          {/* Reviewer Info */}
                          <div className="mt-auto pt-4 border-t border-[#A6D4FF]/30">
                            <div className="flex flex-col gap-1">
                              <div className="flex items-center justify-between">
                                <p className="font-bold text-[#2E4F7C] font-display text-sm">
                                  {testimonial.name}
                                </p>
                                {testimonial.reviewDate && (
                                  <span className="text-[10px] text-[#3C6AA6]">
                                    {testimonial.reviewDate}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-[#3C6AA6]">
                                {testimonial.country} • {testimonial.trek}
                              </p>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            {totalSlides > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-[#3C6AA6]" />
                </button>
                <button
                  onClick={nextSlide}
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-[#3C6AA6]" />
                </button>
              </>
            )}
          </div>

          {/* Slide Dots */}
          {totalSlides > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                  className={`transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-[#3C6AA6] w-8 h-2 rounded-full"
                      : "bg-[#A6D4FF] w-2 h-2 rounded-full hover:bg-[#3C6AA6]/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Load More/Show Less Button */}
        {data.length > visibleCount && (
          <div className="flex justify-center mt-8">
            {!isExpanded ? (
              <Button
                onClick={loadMore}
                className="bg-[#3C6AA6] hover:bg-[#2E4F7C] rounded-full px-6 py-3 text-white text-sm font-medium group transition-all duration-300 hover:shadow-lg"
              >
                <span>View All Reviews ({data.length})</span>
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            ) : (
              <Button
                onClick={showLess}
                className="bg-[#2E4F7C] hover:bg-[#1C3C50] rounded-full px-6 py-3 text-white text-sm font-medium group transition-all duration-300 hover:shadow-lg"
              >
                <span>Show Less</span>
                <ChevronLeft className="ml-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              </Button>
            )}
          </div>
        )}

        {/* Full Grid View (when expanded) */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {data.slice(visibleCount).map((testimonial) => (
              <Card
                key={testimonial.id}
                className="rounded-xl p-4 sm:p-5 shadow-sm bg-white border-[#A6D4FF] transition-all duration-300 hover:shadow-md"
              >
                <div className="mb-4">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="fill-[#FFD966] text-[#FFD966] h-3 w-3 sm:h-4 sm:w-4" />
                    ))}
                  </div>

                  {testimonial.photos && testimonial.photos.length > 0 && (
                    <div className="mb-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {testimonial.photos.slice(0, 4).map((photo, index) => (
                        <div 
                          key={index}
                          className="relative aspect-square rounded-lg overflow-hidden bg-gray-100"
                        >
                          <Image
                            src={photo}
                            alt={`Review photo ${index + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 640px) 50vw, 33vw"
                            unoptimized
                          />
                          {index === 3 && testimonial.photos && testimonial.photos.length > 4 && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                              <span className="text-white text-xs font-semibold">
                                +{testimonial.photos.length - 4}
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="text-[#1C3C50] text-xs sm:text-sm leading-relaxed line-clamp-5">
                    <q>{truncateText(testimonial.content, 150)}</q>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#A6D4FF]/30">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-[#2E4F7C] font-display text-sm">
                        {testimonial.name}
                      </p>
                      {testimonial.reviewDate && (
                        <span className="text-[10px] text-[#3C6AA6]">
                          {testimonial.reviewDate}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#3C6AA6]">
                      {testimonial.country} • {testimonial.trek}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        )}

        {/* Tripadvisor Section */}
        <div className="mt-12 sm:mt-20 bg-gradient-to-r from-[#E3F8FF] to-[#CFE8FF] rounded-2xl p-6 sm:p-8 md:p-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="lg:w-2/3 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-[#2E4F7C] mb-3">
                See All Reviews on Tripadvisor
              </h3>
              <p className="text-sm sm:text-base text-[#3C6AA6] mb-4">
                Join thousands of satisfied travelers who've shared their experiences. 
                Read detailed reviews, see more photos, and discover why we're rated so highly.
              </p>
              <a
                href={tripadvisorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#3C6AA6] hover:bg-[#2E4F7C] text-white font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <span>Visit Tripadvisor</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            
            <div className="lg:w-1/3 flex justify-center">
              <a
                href={tripadvisorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:scale-105 transition-transform duration-300"
              >
                <div className="relative w-48 sm:w-56 h-48 sm:h-56">
                  <Image
                    src="/images/TripAdvisor-Logo.png"
                    alt="Tripadvisor"
                    fill
                    className="object-contain drop-shadow-lg"
                    unoptimized
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export { MasonryTestimonialGrid };