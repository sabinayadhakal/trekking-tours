"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#4A8CA5] via-[#D9E6EC] to-[#FDFDFD] text-gray-800">
      {/* Hero Section */}
      <section
        className="relative w-full h-[55vh] sm:h-[70vh] md:h-[60vh] flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: "url('/kathmandu-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c3c50]/70 via-[#3d6678]/50 to-[#1c3c50]/30" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Free Walking Tour in Kathmandu
          </h1>
          <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto">
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
        <h2 className="text-3xl font-semibold text-[#2B5C6B] mb-8">
          Experience in Pictures & Videos
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Image
            src="/walking-tour1.jpg"
            alt="Kathmandu Durbar Square"
            width={400}
            height={300}
            className="rounded-2xl shadow-md object-cover"
          />
          <Image
            src="/walking-tour2.jpg"
            alt="Monkey Temple"
            width={400}
            height={300}
            className="rounded-2xl shadow-md object-cover"
          />
          <Image
            src="/walking-tour3.jpg"
            alt="Local Market"
            width={400}
            height={300}
            className="rounded-2xl shadow-md object-cover"
          />

          <div className="md:col-span-3 mt-8">
            <video
              controls
              className="w-full rounded-2xl shadow-md"
              poster="/walking-tour-video-thumbnail.jpg"
            >
              <source src="/walking-tour.mp4" type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>
        </div>
      </section>

     {/* Contact Section */}
{/* Contact Section */}
<section className="bg-[#EAF4F8] text-gray-800 py-16 rounded-2xl shadow-sm">
  <div className="max-w-4xl mx-auto text-center px-6">
    <h2 className="text-3xl font-semibold mb-6 text-[#2B5C6B]">
      Book Your Free Tour
    </h2>
    <a
      href="/contact"
      className="inline-block px-8 py-4 bg-[#2B5C6B] text-white font-semibold rounded-2xl shadow-lg hover:bg-[#246071] transition-colors duration-300 mb-4"
    >
      Contact Us to Book
    </a>
    <p className="mt-6 text-xl font-semibold">Namaste 🙏</p>
  </div>
</section>



    </main>
  );
}
