"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mountain,
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Bookmark,
  Facebook,
  Twitter,
  Copy,
  Check,
  Tag,
  ChevronRight,
  Quote,
  MapPin,
  Camera,
  AlertTriangle,
  Lightbulb,
  Menu,
  X,
  Heart,
  Globe,
  Shield,
  Bird,
  Landmark,
  Droplets,
  Sparkles,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPost = {
  title: "Everest Base Camp vs. Annapurna Base Camp: How To Decide Your Next Big Trek",
  excerpt: "Two major treks dominate every Nepal itinerary shortlist. Everest Base Camp is famous for the altitude and the realisation that you're standing at the foot of the world's tallest mountain. Annapurna Base Camp is famous for the scenery, the feeling of being swallowed whole by peaks on every side. Which one is right for you?",
  heroImage: "/images/used/ebc-vs-abc.webp",
  author: {
    name: "Meg Cassidy",
    avatar: "/placeholder.svg?text=MC",
    linkedin: "https://www.linkedin.com/in/meg-c-bbb136294?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
  },
  date: "May 26, 2026",
  readTime: "16 min read",
  category: "Trekking Guide",
  tags: ["Everest Base Camp", "Annapurna Base Camp", "EBC vs ABC", "Nepal Trekking", "Trek Comparison", "Himkala Adventure"],
};

const tableOfContents = [
  { id: "introduction", title: "Two Giants of Nepal Trekking" },
  { id: "at-a-glance", title: "At a Glance Comparison" },
  { id: "altitude", title: "Altitude" },
  { id: "physical-preparation", title: "Physical Preparation" },
  { id: "duration-logistics", title: "Duration and Logistics" },
  { id: "cost", title: "Cost" },
  { id: "scenery-experience", title: "Scenery and Experience" },
  { id: "crowds", title: "Crowds" },
  { id: "best-time", title: "Best Time to Trek" },
  { id: "what-to-expect", title: "What to Expect" },
  { id: "which-is-right", title: "Which is Right for You?" },
  { id: "faq", title: "Frequently Asked Questions" },
];

const relatedPosts = [
  {
    title: "From Sacred Messengers to 'Flying Rats': Why Nepalis Worship Pigeons While Europeans Shoo Them Away",
    image: "/images/used/dog-pigeons.webp",
    date: "May 9, 2026",
    readTime: "9 min",
    href: "/blog/pigeons-symbol-peace-nepal",
  },
  {
    title: "5 Best Beginner Treks in Nepal: From Sunrise Hikes to Himalayan Valleys",
    image: "/images/used/manaslu-main-page.webp",
    date: "May 24, 2026",
    readTime: "14 min",
    href: "/blog/best-beginner-treks-nepal",
  },
  {
    title: "When Should You Visit Nepal? A Month-by-Month Guide to Perfect Timing",
    image: "/images/used/historic-scenic-photography-nepal.webp",
    date: "May 7, 2026",
    readTime: "11 min",
    href: "/blog/best-time-to-visit-nepal",
  },
  {
    title: "Tilicho Lake: The Sacred Himalayan Lake of Legends, Faith, and Adventure",
    image: "/images/used/tilicho-blog.webp",
    date: "May 20, 2026",
    readTime: "12 min",
    href: "/blog/tilicho-lake-sacred-trek",
  },
];

export default function BlogPostPage() {
  const [copied, setCopied] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("introduction");
  const [showMobileTOC, setShowMobileTOC] = React.useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(blogPost.title);
    let shareUrl = "";

    if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setShowMobileTOC(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Table of Contents Drawer */}
      {showMobileTOC && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowMobileTOC(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-xl">
            <div className="p-6 h-full overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg text-[#0f2940] flex items-center gap-2">
                  <Menu className="w-5 h-5 text-[#2d6a8a]" /> Contents
                </h3>
                <button 
                  onClick={() => setShowMobileTOC(false)}
                  className="p-2 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left text-sm py-3 px-4 rounded-lg transition-all ${
                      activeSection === item.id
                        ? "bg-[#C5E0ED]/30 text-[#0f2940] font-medium"
                        : "text-slate-600 hover:bg-[#f0f7fa] hover:text-[#2d6a8a]"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white"
                    onClick={() => handleShare("facebook")}
                  >
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white"
                    onClick={() => handleShare("twitter")}
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-slate-800 hover:bg-slate-900 text-white"
                    onClick={handleCopyLink}
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[380px] md:h-[60vh] md:min-h-[500px] overflow-hidden bg-[#0f2940]">
        <div className="absolute inset-0 z-0">
          <Image
            src={blogPost.heroImage}
            alt={blogPost.title}
            fill
            className="object-cover object-center"
            priority
            quality={85}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940] via-[#0f2940]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/80 via-transparent to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
          <div className="max-w-4xl mx-auto text-center w-full">
            <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white border-white/30 py-1.5 px-3 text-xs font-medium">
              <Tag className="w-3 h-3 mr-1.5" /> {blogPost.category}
            </Badge>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-4 md:mb-6 px-2">
              {blogPost.title}
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10 font-light px-2 sm:px-0">
              {blogPost.excerpt}
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 text-xs sm:text-sm text-white/70">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#C5E0ED] bg-white/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="font-bold text-white text-sm sm:text-base">{blogPost.author.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#C5E0ED]" /> 
                    <span>{blogPost.date}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-[#C5E0ED]" /> 
                    {blogPost.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar - Table of Contents (Desktop only) */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-6">
                <Card className="bg-white border-[#C5E0ED]/30 rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[#0f2940] mb-4 flex items-center gap-2">
                      <Mountain className="w-4 h-4 text-[#2d6a8a]" /> Table of Contents
                    </h3>
                    <nav className="space-y-2">
                      {tableOfContents.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-all ${
                            activeSection === item.id
                              ? "bg-[#C5E0ED]/30 text-[#0f2940] font-medium"
                              : "text-slate-600 hover:bg-[#f0f7fa] hover:text-[#2d6a8a]"
                          }`}
                        >
                          {item.title}
                        </button>
                      ))}
                    </nav>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-[#0f2940] to-[#1a4166] border-none rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                      <Share2 className="w-4 h-4 text-[#C5E0ED]" /> Share Article
                    </h3>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-xl"
                        onClick={() => handleShare("facebook")}
                      >
                        <Facebook className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-xl"
                        onClick={() => handleShare("twitter")}
                      >
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-white/10 hover:bg-white/20 text-white rounded-xl"
                        onClick={handleCopyLink}
                      >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Himkala Adventure Callout */}
                <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <Mountain className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                    <h3 className="font-bold text-amber-800 mb-2">Customise Your Adventure</h3>
                    <p className="text-amber-700 text-sm mb-4">
                      Let Himkala Adventure help you choose between Everest and Annapurna. Both treks are available as fully guided packages.
                    </p>
                    <Link href="/services/trekking" className="block">
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full rounded-xl">
                        Plan My Trek Today
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-9">
              <div className="max-w-none">
                {/* Introduction */}
                <section id="introduction" className="mb-8 md:mb-12">
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4 first-letter:text-4xl md:first-letter:text-6xl first-letter:font-serif first-letter:text-[#0f2940] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                    Two major treks dominate every Nepal itinerary shortlist. Everest Base Camp is the name everyone knows. It's famous for the altitude and the realisation that you're standing at the foot of the world's tallest mountain. Annapurna Base Camp is famous for the scenery, the feeling of being swallowed whole by peaks on every side.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Both treks are achievable for fairly fit, non-technical trekkers. Deciding which one suits you best, however, goes beyond just choosing by name.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    To help you decide, this guide breaks down key factors like altitude, cost, logistics, terrain, and overall experience. These details will support your decision as you get closer to booking that flight to Nepal.
                  </p>
                </section>

                {/* Image Break */}
                <div className="relative h-[250px] md:h-[400px] rounded-xl md:rounded-2xl overflow-hidden my-8 md:my-12">
                  <Image
                    src="/images/used/ebc-vs-abc.webp"
                    alt="Comparison of Everest and Annapurna mountain ranges"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1">
                    <Camera className="w-3 h-3" /> Everest (right) and Annapurna (left) – two very different Himalayan experiences
                  </div>
                </div>

                {/* At a Glance Comparison Table */}
                <section id="at-a-glance" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    At a Glance Comparison
                  </h2>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-[#0f2940] text-white">
                          <th className="p-3 text-left rounded-l-lg">Features</th>
                          <th className="p-3 text-left">Everest Base Camp</th>
                          <th className="p-3 text-left rounded-r-lg">Annapurna Base Camp</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { feature: "Maximum altitude", ebc: "5,364m (at Kala Patthar)", abc: "4,130m" },
                          { feature: "Duration", ebc: "12 – 14 days", abc: "10 – 12 days" },
                          { feature: "Difficulty", ebc: "Moderate–challenging", abc: "Moderate" },
                          { feature: "Base cost (guided)", ebc: "$1,400 – $2,500", abc: "$700 – $1,200" },
                          { feature: "Permits", ebc: "Sagarmatha NP + Khumbu Municipality (~$50)", abc: "ACAP + TIMS (~$50)" },
                          { feature: "Starting point", ebc: "Lukla (flight from Kathmandu)", abc: "Pokhara" },
                          { feature: "Best seasons", ebc: "Mar – May, Oct – Nov", abc: "Mar – May, Oct – Nov" },
                          { feature: "Crowds", ebc: "High", abc: "Moderate" },
                        ].map((item, i) => (
                          <tr key={i} className={`border-b border-[#C5E0ED]/30 ${i % 2 === 0 ? 'bg-white' : 'bg-[#f8fbfc]'}`}>
                            <td className="p-3 font-medium text-[#0f2940]">{item.feature}</td>
                            <td className="p-3 text-slate-600">{item.ebc}</td>
                            <td className="p-3 text-slate-600">{item.abc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Altitude */}
                <section id="altitude" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Altitude
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    The altitude difference between these two treks is significant – and this will shape everything from your itinerary to your risk profile.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Everest Base Camp reaches 5,364m at Kala Patthar – the rocky viewpoint above Gorak Shep that frames Everest's north face. The trail itself is good for those with a fair amount of fitness, but the altitude is more unforgiving. Acclimatisation at Namche Bazaar and Dingboche is built into the itinerary for good reason. Above 4,000m, fitness becomes secondary to how well your body adapts.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Annapurna Base Camp has a more manageable altitude at 4,130m, but the terrain more than compensates for this. Daily elevation can be harsher, with steep stone staircases, ascents through dense rhododendron forests, and tough climbs through the Modi Khola valley, with little flat ground to recover on.
                  </p>
                </section>

                {/* Physical Preparation */}
                <section id="physical-preparation" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Physical Preparation
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Neither trek requires prior mountaineering experience, but both reward a solid base of cardiovascular fitness before you arrive.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    For Everest, the priority is endurance, as you will be trekking long days at altitude and your body will work harder to compensate for the thinner air. Training should focus on sustained walking, long hikes, uphill work and anything that builds your capacity to walk steadily for half a day with few breaks.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Annapurna can be more demanding on your legs. The steeper ascents and irregular terrain means strength training, particularly quads and knees, matters as much as cardiovascular fitness. Consistent training for a few months before either trek will impact your experience more than you realise.
                  </p>
                </section>

                {/* Duration and Logistics */}
                <section id="duration-logistics" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Duration and Logistics
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Out of the two, Annapurna Base Camp is logistically easier. Pokhara is your base – a short domestic flight or a seven-hour bus ride from Kathmandu – and the trailhead is within easy reach. A standard itinerary runs 10–12 days. The route alternates between stretches of quiet trail through forests and small villages, past teahouses, locally-owned shops and the occasional school or temple, though the busier stops still retain a certain calm.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Everest Base Camp is a little more involved with the trek starting from Lukla, accessed only by a flight, which can be weather-dependent. Delays are common, though mainly in shoulder seasons. Namche Bazaar is the last hub before settlements thin out and the route becomes progressively more remote, with longer stretches between stops and less of everyday Nepali life visible on the trail. For EBC, plan for 12–14 days minimum, allowing extra time for acclimatisation.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    If your trip window is tight, Annapurna may be the better option, though EBC justifies the extra planning if you can make it work.
                  </p>
                </section>

                {/* Cost */}
                <section id="cost" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Cost
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Both treks run as fully guided packages – with permits, accommodation, meals, a guide, and an optional porter included. With Himkala Adventure, Annapurna starts from USD 1,180 and Everest from USD 1,450.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Everest's higher cost comes down to logistics. The Khumbu valley is remote, and supplies are expensive. Teahouse prices climb with every kilometre of altitude, and the Kathmandu–Lukla flight is a cost you'll have to factor before arriving at the start point. Add potential weather delays, and you're looking at a longer trip that may demand additional budget and time flexibility.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Annapurna is more straightforward in terms of financial commitment. Based in Pokhara, with road access to the trailhead via jeep, the cost is simpler and more predictable. Daily costs reflect that accessibility – teahouse accommodation and meals sit only a little higher than in the larger towns.
                  </p>
                </section>

                {/* Scenery and Experience */}
                <section id="scenery-experience" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Scenery and Experience
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Personal preference carries more weight than anything else.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Everest Base Camp moves through the Khumbu valley, through Sherpa villages and ancient monasteries with the constant presence of the world's tallest mountain growing closer with every day. Tengboche Monastery, perched at 3,860m with Ama Dablam rising behind it, is one of the most picturesque, peaceful places in the Himalayas.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Annapurna Base Camp is a different experience. The trail ascends deep into rhododendron forests, terraced Gurung villages, and the deep gorge of the Modi Khola before opening into the Annapurna Sanctuary – a high glacial amphitheatre circled by peaks exceeding 7,000m. The transition from forest to alpine to sanctuary happens fast. On the descent, Jhinu hot springs offer something Everest can't: a well-earned soak in natural thermal pools with Machhapuchhre standing overhead.
                  </p>
                </section>

                {/* Image Break 2 */}
                <div className="relative h-[250px] md:h-[350px] rounded-xl md:rounded-2xl overflow-hidden my-8 md:my-12">
                  <Image
                    src="/images/used/everest-2.webp"
                    alt="Tengboche Monastery with Ama Dablam mountain"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1">
                    <Camera className="w-3 h-3" /> Tengboche Monastery – a highlight of the Everest trek
                  </div>
                </div>

                {/* Crowds */}
                <section id="crowds" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Crowds
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Everest Base Camp is one of the most trafficked trekking routes in the world. The spring peak season lasts between April and May and brings significant numbers through the Khumbu valley. It's still a wilderness experience, but a shared one. If solitude matters, your window is narrower and trekking during the shoulder seasons might be for you, though it's worth observing the weather – nights at the teahouses can get increasingly cold.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Annapurna draws fewer trekkers, and the trail network is more spread out with different entry and exit points, meaning foot traffic doesn't concentrate the same way – the crowd is more transient with trekkers branching off onto other routes. The Annapurna route itself retains a sense of quiet that's increasingly difficult to find on the Everest route during the peak trekking season.
                  </p>
                </section>

                {/* Best Time to Trek */}
                <section id="best-time" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Best Time to Trek
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Spring (March until May) and autumn (September to November) are the best windows for both treks, bringing clear skies, stable temperatures and the best visibility on the high routes. October and November are widely considered the sweet spot: post-monsoon air means exceptional clarity, and the trails are at their most defined.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    The difference between the two is worth noting: Annapurna is more exposed to monsoon and rain conditions than Everest. The Modi Khola gorge funnels moisture from the south – with slippery stone staircases and a higher avalanche risk above Deurali – though this is outside of the main trekking season, so it's unlikely to affect your trek. Everest Base Camp has better coverage and is more forgiving during the shoulder seasons.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    If your dates are fixed outside the peak windows, Everest gives you more margin.
                  </p>
                </section>

                {/* What to Expect */}
                <section id="what-to-expect" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    What to Expect
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    With either trek, you'll travel village-to-village staying in local teahouses with meals included and no camping required. Days typically run up to five to seven hours of trekking, with the pace set by you and your guide. Breaks are a must, and you'll stop for lunch halfway through the day.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    The trails largely differ in terrain, with Everest following a well-worn, heavily signposted route through increasingly sparse high-altitude terrain. Annapurna moves through more varied ground: farmland, dense forest, exposed ridgelines, and the dramatic narrowing of the gorge before the sanctuary opens up. You'll also come across more stores, villagers and settlements, especially at lower altitudes.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    The cultural experience on each route is shaped by who calls it home. EBC passes through Sherpa communities, and the route is marked by monasteries and colourful prayer flags at every turn. Namche Bazaar, the trail's main hub, has evolved into a busy stop with gear shops and cafes, a community in transition but still rooted in its traditions. On ABC, the lower trail moves through a series of picturesque Gurung villages – Ghandruk and Chhomrong. The culture here is more mixed, drawing on Hindu, Animist and Buddhist traditions, making the everyday rhythm of village life more pronounced.
                  </p>
                </section>

                {/* Image Break 3 */}
                <div className="relative h-[250px] md:h-[350px] rounded-xl md:rounded-2xl overflow-hidden my-8 md:my-12">
                  <Image
                    src="/images/used/abc-3.webp"
                    alt="Annapurna Base Camp sanctuary surrounded by peaks"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1">
                    <Camera className="w-3 h-3" /> The Annapurna Sanctuary – a glacial amphitheatre circled by 7,000m peaks
                  </div>
                </div>

                {/* Quote Block */}
                <div className="bg-gradient-to-br from-[#0f2940] to-[#1a4166] rounded-xl md:rounded-2xl p-6 md:p-8 my-8 md:my-12 relative overflow-hidden">
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 opacity-20">
                    <Quote className="w-12 h-12 md:w-16 md:h-16 text-[#C5E0ED]" />
                  </div>
                  <blockquote className="relative z-10">
                    <p className="text-base md:text-lg lg:text-xl font-serif text-white leading-relaxed mb-3 md:mb-4 italic">
                      &quot;Standing at the foot of the world's highest mountain carries a weight that no amount of comparison can realistically account for. Everest is for those seeking higher altitude and deep immersion into Sherpa culture. Annapurna is the stronger choice if you're trekking for the first time at altitude, working with a tighter budget or schedule.&quot;
                    </p>
                    <footer className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-[#C5E0ED] flex items-center justify-center bg-white/10">
                        <User className="w-5 h-5 text-[#C5E0ED]" />
                      </div>
                      <div>
                        <cite className="font-bold text-[#C5E0ED] not-italic text-sm md:text-base">— Himkala Adventure Guide Team</cite>
                        <p className="text-white/60 text-xs md:text-sm">15+ years guiding both Everest and Annapurna treks</p>
                      </div>
                    </footer>
                  </blockquote>
                </div>

                {/* Which is Right for You */}
                <section id="which-is-right" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Which is Right for You?
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Standing at the foot of the world's highest mountain carries a weight that no amount of comparison can realistically account for. Everest is for those seeking higher altitude and for those who want deep immersion into Sherpa culture. EBC demands more of your time and budget, but finally making it to base camp is worth it.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Annapurna Base Camp is the stronger choice if you're trekking for the first time at altitude, working with a tighter budget or schedule. It's also the stronger option for variety in scenery, with parts of the trail emptying entirely. Logistically, it's easier, but it still delivers in everything from altitude to experience.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Both treks are available through Himkala Adventure as fully guided tour packages, with itineraries that can be adjusted to suit your schedule and experience level.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    If you're still weighing the options, the team are well placed to help you choose. They've guided both routes extensively and will help you plan your trek.
                  </p>
                  
                  <div className="text-center mt-6">
                    <Link href="/contact" className="inline-block">
                      <Button className="bg-[#0f2940] hover:bg-[#1a4166] text-white rounded-full px-8 py-3 text-base">
                        Customise Your Adventure with Himkala Adventure Today
                      </Button>
                    </Link>
                  </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Frequently Asked Questions
                  </h2>
                  
                  <div className="space-y-4 mt-4">
                    <div className="bg-[#f8fbfc] rounded-xl p-5 border border-[#C5E0ED]/20">
                      <h4 className="font-bold text-[#0f2940] text-base mb-2">Which trek is easier for beginners?</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Annapurna Base Camp is generally considered easier for beginners. The maximum altitude is lower at 4,130m compared to Everest's 5,364m, and the logistics are more straightforward with road access from Pokhara. That said, both treks are achievable for fit first-timers with proper preparation.
                      </p>
                    </div>

                    <div className="bg-[#f8fbfc] rounded-xl p-5 border border-[#C5E0ED]/20">
                      <h4 className="font-bold text-[#0f2940] text-base mb-2">Do I need a guide for these treks?</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Yes, both treks now legally require a licensed guide. In the Annapurna Conservation Area and Sagarmatha National Park, solo trekking is no longer permitted. A guide also arranges teahouse accommodation, handles permits, and knows the terrain – which is invaluable for first-time trekkers at altitude.
                      </p>
                    </div>

                    <div className="bg-[#f8fbfc] rounded-xl p-5 border border-[#C5E0ED]/20">
                      <h4 className="font-bold text-[#0f2940] text-base mb-2">How much does each trek cost with Himkala Adventure?</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Annapurna Base Camp starts from USD 1,180 for a fully guided package including permits, accommodation, meals, and guide. Everest Base Camp starts from USD 1,450, with the higher cost reflecting the remote location and Kathmandu-Lukla flight. Both treks can be customised to your schedule and budget.
                      </p>
                    </div>

                    <div className="bg-[#f8fbfc] rounded-xl p-5 border border-[#C5E0ED]/20">
                      <h4 className="font-bold text-[#0f2940] text-base mb-2">When is the best time to book?</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        For both treks, the prime seasons are spring (March-May) and autumn (September-November). These windows offer the clearest skies and most stable weather. However, bookings should be made at least 2-3 months in advance, especially for Everest Base Camp which sees high demand in October and April.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Author Card with LinkedIn */}
                <Card className="bg-gradient-to-br from-[#f8fbfc] to-[#e8f4f8] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                  <CardContent className="p-4 md:p-6 lg:p-8">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
                      <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden border-4 border-white shadow-lg flex items-center justify-center bg-[#2d6a8a]/10">
                        <User className="w-8 h-8 text-[#2d6a8a]" />
                      </div>
                      <div className="text-center md:text-left">
                        <p className="text-xs font-bold text-[#2d6a8a] uppercase tracking-wider mb-1 md:mb-2">Written By</p>
                        <h3 className="text-lg md:text-xl font-bold text-[#0f2940] mb-1">{blogPost.author.name}</h3>
                        <a 
                          href={blogPost.author.linkedin}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-[#2d6a8a] hover:text-[#1a4a6a] transition-colors mt-2"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.225 0z"/>
                          </svg>
                          Meg Cassidy on LinkedIn
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Mobile Share Buttons */}
                <div className="lg:hidden mt-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white"
                        onClick={() => handleShare("facebook")}
                      >
                        <Facebook className="w-4 h-4 mr-2" /> Share
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white"
                        onClick={() => handleShare("twitter")}
                      >
                        <Twitter className="w-4 h-4 mr-2" /> Tweet
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/10"
                      onClick={handleCopyLink}
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 mr-2" /> Link Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" /> Copy Link
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6 md:mt-8">
                  {blogPost.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 cursor-pointer rounded-full px-3 py-1 text-xs md:text-sm">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#f0f7fa] to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-3 md:mb-4">Continue Your Journey</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#0f2940]">More Insights from Us</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {relatedPosts.map((post, i) => (
              <Link href={post.href} key={i} className="block">
                <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden h-full hover:shadow-lg hover:shadow-[#C5E0ED]/20 transition-all duration-300 group cursor-pointer">
                  <div className="relative h-40 md:h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <h4 className="text-base md:text-lg font-bold text-[#0f2940] mb-2 md:mb-3 leading-snug group-hover:text-[#2d6a8a] transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-3 md:gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}