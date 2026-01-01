"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef, ChangeEvent } from "react";

export default function Page() {
  const [bgImage, setBgImage] = useState("/images/FWT-1.jpg");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === 'string') {
          setBgImage(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#4A8CA5] via-[#D9E6EC] to-[#FDFDFD] text-gray-800">
      {/* Hero Section with Upload Capability */}
      <section
        className="relative w-full h-[55vh] sm:h-[70vh] md:h-[60vh] flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c3c50]/40 via-[#3d6678]/20 to-[#1c3c50]/10" />
        
        {/* Upload Button */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={triggerFileInput}
            className="px-4 py-2 bg-white/80 text-gray-800 rounded-lg hover:bg-white transition-colors backdrop-blur-sm"
          >
            Change Background
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg text-white">
            Free Walking Tour in Kathmandu
          </h1>
          <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto text-white">
            Discover the heart of Kathmandu with Himkala Adventure.
          </p>
        </motion.div>
      </section>

      {/* Description */}
      <section className="max-w-5xl mx-auto px-6 py-16 bg-[#EAF4F8] rounded-2xl shadow-sm">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-[#2B5C6B] mb-6"
        >
          About the Tour
        </motion.h2>
        <p className="mb-6 leading-relaxed text-lg text-gray-800">
          We are offering the first <strong>FREE WALKING TOUR</strong> in
          Kathmandu, Nepal! Join this amazing free city tour around the
          beautiful capital. Everybody knows that Free Walking Tours in Europe
          are very popular, and now this unique experience is here in Nepal.
        </p>
        <p className="mb-6 leading-relaxed text-lg text-gray-800">
          Organized daily by{" "}
          <strong className="text-[#2B5C6B]">Himkala Adventure</strong>, this
          walk begins at the{" "}
          <span className="font-medium">Garden of Dreams</span> and guides you
          through local temples, bustling markets, and ends at the iconic{" "}
          <span className="font-medium">Monkey Temple</span>. Tours run with
          licensed and experienced guides, ensuring cultural depth and a warm
          experience.
        </p>
      </section>

      {/* Schedule Section */}
      <section className="py-16 bg-[#F4FBFF]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-[#2B5C6B] mb-8">
            Tour Schedule
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white shadow-md rounded-2xl">
              <h3 className="text-xl font-bold mb-2 text-[#2B5C6B]">
                Morning Shift
              </h3>
              <p className="text-lg text-gray-800">9:00 am – 1:00 pm</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-2xl">
              <h3 className="text-xl font-bold mb-2 text-[#2B5C6B]">
                Afternoon Shift
              </h3>
              <p className="text-lg text-gray-800">2:00 pm – 6:00 pm</p>
            </div>
          </div>
          <p className="mt-8 text-lg text-gray-800">
            Tours start from the{" "}
            <span className="font-medium">Garden of Dreams, Thamel</span>.
          </p>
        </div>
      </section>

      {/* Media Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-[#EAF4F8] rounded-2xl shadow-sm">
        <h2 className="text-3xl font-semibold text-[#2B5C6B] mb-6">
          Experience in Pictures & Videos
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
           <div className="relative h-64 rounded-xl shadow-md overflow-hidden">
            <Image
              src="/images/ktm_durbar_square-2.jpg"
              alt="Kathmandu Durbar Square"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          
          {/* Image 2 - Local image from public folder */}
          <div className="relative h-64 rounded-xl shadow-md overflow-hidden">
            <Image
              src="/images/swoyambhunath-1.jpg"
              alt="Monkey Temple"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          
          {/* Image 3 - Another external URL */}
          <div className="relative h-64 rounded-xl shadow-md overflow-hidden">
            <Image
              src="/images/asan_market-1.jpg"
              alt="Local Market"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Video Section */}
          <div className="md:col-span-3 mt-6">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
              <iframe
                src="https://www.youtube.com/embed/BjfCd9C2uS4"
                title="Free Walking Tour in Kathmandu"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#EAF4F8] text-gray-800 py-16 rounded-2xl shadow-sm">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold mb-6 text-[#2B5C6B]">
            Book Your Free Tour
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-[#2B5C6B] text-white font-semibold rounded-2xl shadow-lg hover:bg-[#246071] transition-colors duration-300"
            >
Contact us to Customize            </a>
            <span className="text-gray-500 hidden sm:block">or</span>
            <a
              href="https://wa.me/9779841376470"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
              aria-label="Contact via WhatsApp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.49"/>
              </svg>
            </a>
          </div>
          <p className="mt-6 text-xl font-semibold">Namaste 🙏</p>
        </div>
      </section>
    </main>
  );
}