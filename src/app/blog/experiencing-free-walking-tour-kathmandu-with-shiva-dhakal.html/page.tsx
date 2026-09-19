"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  AlertTriangle,
  CheckCircle2,
  Check,
  Copy,
  ChevronDown,
  Footprints,
  Camera,
  ShoppingBag,
  Thermometer,
  Coffee,
  MountainSnow,
  Church,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  SEO CONSTANTS                                                      */
/* ------------------------------------------------------------------ */

const SITE_URL = "https://www.freewalkingtourkathmandu.com";
const PAGE_URL = `${SITE_URL}/free-walking-tour-kathmandu/experiencing-with-shiva`;
const TOUR_NAME = "Free Walking Tour Kathmandu with Shiva";
const TOUR_IMAGE = `${SITE_URL}/images/used/fwt-1.webp`;
const PRICE_NPR = "0";
const CURRENCY = "NPR";
const RATING_VALUE = "4.9";
const REVIEW_COUNT = "1000";
const DURATION_ISO = "PT4H30M";
const LATITUDE = "27.7148";
const LONGITUDE = "85.3145";
const PUBLISHED_DATE = "2026-09-01";
const MODIFIED_DATE = "2026-09-19";
const AUTHOR_NAME = "Himkala Adventure";
const CONTACT_PHONE = "+977 9841376470";
const CONTACT_EMAIL = "himkalaadventure@gmail.com";
const VIDEO_ID = "9x9wKPgVIPs";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const featuredReviews = [
  {
    name: "Arne N",
    country: "Netherlands",
    date: "2026-09-19",
    dateLabel: "Sep 2026",
    tripType: "Couples",
    rating: 5,
    title: "Great introduction to Kathmandu & Nepal!",
    text: "We had a wonderful experience with the free walking tour in Kathmandu! It was a great way to discover the city, learn more about Nepalese culture and history, and get a better feel for the places we visited. Our guide was very friendly, knowledgeable and genuinely passionate about his Nepal. His English was perfect so we understood everything. He also has a lot of experience guiding treks, so he gave us plenty of useful tips and advice for our upcoming Annapurna Circuit. It was clear that he really knows the city and the mountains and enjoys sharing his knowledge. After spending a few hours with him, I can imagine it would be great to have him as a trekking guide. He made the tour interesting, relaxed and personal. At the end he gave us some great addresses to enjoy dinner. Definitely recommended if you're visiting Kathmandu or if you're planning a trek in Nepal!",
  },
  {
    name: "Ann M",
    country: "United Kingdom",
    date: "2026-09-14",
    dateLabel: "Sep 2026",
    tripType: "Couples",
    rating: 5,
    title: "Awesome free walking tour",
    text: "Today we had a fantastic experience on the free walking tour in Kathmandu with Shiva! He was incredibly friendly, polite, and knowledgeable, and really took the time to explain the local traditions, culture, and history. What made the tour especially memorable was that Shiva showed us places we probably wouldn't have discovered on our own; including hidden spots and places we might not have felt confident stepping into without a local guide. He gave us a much more authentic glimpse of Kathmandu and everyday life in the city. He was also happy to answer all kinds of questions and made the whole tour feel relaxed and interesting. Would I recommend this tour? Absolutely! If you want to see Kathmandu beyond the usual tourist spots and learn more about the local culture from someone who genuinely enjoys what he does, I highly recommend taking a tour with Shiva.",
  },
  {
    name: "Michel F",
    country: "France",
    date: "2026-09-03",
    dateLabel: "Sep 2026",
    tripType: "Solo",
    rating: 5,
    title: "Best tour in Nepal",
    text: "I had a great experience on this free walking tour in Nepal. The guide was extremely kind, attentive, and respectful throughout the entire tour. He took the time to explain the history, traditions, and culture behind each place we visited, and it was clear that he has a lot of knowledge and passion for Nepal. It was much more than just walking around the city — I learned a lot about the local culture and saw the places from a completely different perspective. I definitely recommend this tour to anyone who wants to understand Nepal beyond just the tourist attractions.",
  },
  {
    name: "Madelief L",
    country: "Netherlands",
    date: "2026-09-01",
    dateLabel: "Sep 2026",
    tripType: "Solo",
    rating: 5,
    title: "How did I find it? 'Super amazing'",
    text: "The tour guide and tour were 10/10! If you want an amazing facilitated tour with a kindhearted person, join here. You will know all the important information, history, stories etc. And you can ask anything you want as well! Such an amazing experience. Also, as a female solo traveler I felt extremely safe. Thank you so much again, I feel very grateful.",
  },
  {
    name: "Sasha K",
    country: "United States",
    date: "2026-06-29",
    dateLabel: "Jun 2026",
    tripType: "Solo",
    rating: 5,
    title: "Free Walking Tour + Annapurna Circuit Trek!",
    text: "I had a wonderful experience with Himkala Adventure! I was given a free, 3-hour walking tour through the heart of Kathmandu that takes you into ancient temples and monasteries, Newari courtyards, historical junctions, and offers a glimpse into local Nepali life. The tour was administered by an excellent guide, Sabinaya, who delivered detailed, historical accounts of cultural landmarks, religious rituals, and national observances. From the tour, I was informed of the various Himalayan trekking services offered by Himkala Adventure, and decided to book a trek through the famous Annapurna Circuit with them. For 13 days, I was seamlessly guided through some of the world's most remarkable terrain, stayed in comfortable guesthouses along the way, and ate traditional Nepali and Tibetan food. I would strongly recommend this company!",
  },
  {
    name: "Nancy L",
    country: "United States",
    date: "2026-06-08",
    dateLabel: "Jun 2026",
    tripType: "Friends",
    rating: 5,
    title: "5/5 Kathmandu Free Walking Tour",
    text: "Sabinaya was communicative and helpful even before the tour started, which set a great tone. On the day itself, the other people who were supposed to join had flight delays and ended up canceling, so it turned into a private tour, just the two of us. What could have been a disappointment became one of the highlights of my entire trip. In just 2 to 3 hours, Sabinaya covered an extraordinary range of topics including Kathmandu's history, Hinduism, Nepali culture, and we even got into a fascinating conversation about AI and the wider world. Kathmandu has an incredibly dynamic religious life, and Sabinaya gave me a real window into it. Not just the monuments, but the living, breathing culture behind them. The fact that this is free is remarkable. Please tip him well, he more than deserves it.",
  },
  {
    name: "C. Solomon",
    country: "United States",
    date: "2026-06-03",
    dateLabel: "Jun 2026",
    tripType: "Couples",
    rating: 5,
    title: "Lovely, knowledgeable, charismatic",
    text: "Shiva's son Sabinaya was very knowledgeable and charismatic! We really enjoyed this tour first thing after arriving to Kathmandu, as he gave us so much context about Nepali government, culture, religion, and politics, as well as specific points of history of Kathmandu. He was also very willing to answer all our additional questions and give us further recommendations for how to spend our time in Nepal. Highly recommend!",
  },
  {
    name: "Sophie E",
    country: "United Kingdom",
    date: "2026-05-25",
    dateLabel: "May 2026",
    tripType: "Couples",
    rating: 5,
    title: "Great tour!",
    text: "Great tour with knowledgeable guide!",
  },
  {
    name: "Josh G",
    country: "United Kingdom",
    date: "2026-05-19",
    dateLabel: "May 2026",
    tripType: "Couples",
    rating: 5,
    title: "A walking tour not to be missed!",
    text: "I normally don't do walking tours… however this tour is a game changer. 4 hours walking around Kathmandu learning everything. We had Shiva's son Sabinaya, and he was incredibly knowledgeable. You walk through the streets of Kathmandu learning about all aspects, Hinduism and Buddhism and its details, daily life, social norms, various areas of Kathmandu and you visit places like the Monkey Temple, various squares and markets and shops. One not to be missed!",
  },
  {
    name: "Scott S",
    country: "United States",
    date: "2026-05-14",
    dateLabel: "May 2026",
    tripType: "Solo",
    rating: 5,
    title: "Great tour!",
    text: "I did an outstanding walking tour with Sabinaya, who was incredibly knowledgeable and friendly. The tour was amazing — so much history and background of the culture here in Kathmandu. Highly recommended!",
  },
  {
    name: "Maaike K",
    country: "Netherlands",
    date: "2026-01-19",
    dateLabel: "Jan 2026",
    tripType: "Solo",
    rating: 5,
    title: "Kathmandu city tour",
    text: "Shiva is a super kind guide who tells passionately about his city! I liked it that I've got to see a big part of the city in quite a short time!! Thanks again Shiva for your time.",
  },
  {
    name: "Estelle L",
    country: "France",
    date: "2026-01-11",
    dateLabel: "Jan 2026",
    tripType: "Solo",
    rating: 5,
    title: "A good panorama of Kathmandu",
    text: "I did the free walking tour in Kathmandu with Shiva. Such interesting. We spent 3 hours walking on the streets, discovering temples everywhere, and history of Nepal and the city. Shiva knows a lot about the country then you can ask many questions about politics, history, religion, etc. It was really interesting. The walk was nice and it wasn't tiring as we walked slowly and did many stops. I recommend Shiva as a guide.",
  },
  {
    name: "Kari T",
    country: "United States",
    date: "2025-12-17",
    dateLabel: "Dec 2025",
    tripType: "Solo",
    rating: 5,
    title: "Great tour!",
    text: "Really enjoyed this tour. I did this on my first full day in Kathmandu and it was such a great way to see so many places and learn about this history and culture along the way.",
  },
  {
    name: "Mirte S",
    country: "Netherlands",
    date: "2025-12-06",
    dateLabel: "Dec 2025",
    tripType: "Couples",
    rating: 5,
    title: "Best free walking tour",
    text: "We joined the free walking tour with Sabinaya, and it was one of the absolute highlights of our time in Kathmandu. He has an incredible amount of knowledge and explains everything with clarity and enthusiasm. He told us about the history of the city and the symbolism of the temples to religion, politics, daily life and local customs in a fun and clear way. Highly recommended!",
  },
  {
    name: "Sabrina",
    country: "Italy",
    date: "2025-11-27",
    dateLabel: "Nov 2025",
    tripType: "Solo",
    rating: 5,
    title: "Best Free Walking Tour in Kathmandu",
    text: "What a fantastic way to learn about Kathmandu! I went on the free walking tour (tip based) with Sabinaya and it was informative and fun! We covered a lot of ground and I learned so much about Nepal and specifically Kathmandu. A great way to get your bearings in a new city! Thank you Sabinaya and Shiva for arranging.",
  },
  {
    name: "Pieter A",
    country: "Netherlands",
    date: "2025-11-23",
    dateLabel: "Nov 2025",
    tripType: "Solo",
    rating: 5,
    title: "Entertaining, wealth of information",
    text: "I enjoyed the tour. The guide was very knowledgeable, but more importantly, he shared a wealth of information in a very entertaining way. With lots of stories and jokes, we also explored lesser-known neighborhoods of Kathmandu and gained insight into the culture, religion, and class society.",
  },
  {
    name: "Pioneer06138929143",
    country: "United States",
    date: "2025-11-22",
    dateLabel: "Nov 2025",
    tripType: "Solo",
    rating: 5,
    title: "My experience with Himkala Adventure",
    text: "I can't recommend Himkala Adventure enough! I did their city tour with Shiva and Sabinaya, which was a perfect introduction to Kathmandu, and the real highlight was the Muldai trek — it was absolutely stunning, totally amazing, and so underrated compared to the more famous routes. They also offer treks to Annapurna Base Camp and other spots, and you can trust their prices are fair and just. Seriously, if you get Shiva as your guide, you'll see he's not just an expert but also an incredible person who makes the whole experience unforgettable.",
  },
  {
    name: "Eugénie C",
    country: "France",
    date: "2025-11-20",
    dateLabel: "Nov 2025",
    tripType: "Couples",
    rating: 5,
    title: "Great tour!",
    text: "Great tour of the center of Kathmandu with Sabinaya, who taught us so much stuff about the history of Nepali Buddhism and culture, Newari people and the city. All of that with a constant smile and a nice energy — we recommend fully!",
  },
  {
    name: "Nicolette H",
    country: "Netherlands",
    date: "2025-11-19",
    dateLabel: "Nov 2025",
    tripType: "Friends",
    rating: 5,
    title: "Great afternoon",
    text: "We went out with Sabinaya today between 14:00 and 18:00. He knows a lot about the city and Buddhism, he is smart and interested, and not insignificant: he speaks very good English. My sister and I had a great afternoon! Thank you for that.",
  },
  {
    name: "gianpietro d",
    country: "Italy",
    date: "2025-11-18",
    dateLabel: "Nov 2025",
    tripType: "Couples",
    rating: 5,
    title: "Great way to start your trip in Nepal",
    text: "We started our trip in Kathmandu with the free walking tour with Sabinaya. We really enjoyed the itinerary and the group of people that shared the day with us was very nice too. Sabinaya introduced us to the Nepalese culture and the history of the city. We really recommend it!",
  },
  {
    name: "Lotte D",
    country: "Netherlands",
    date: "2025-10-16",
    dateLabel: "Oct 2025",
    tripType: "Couples",
    rating: 5,
    title: "Best introduction to Kathmandu!",
    text: "We had an amazing city tour on our first day in Kathmandu! The guide was really friendly and super knowledgeable — we learned loads about the local religions, culture and history as well as folk tales and myths. It was the best introduction to Kathmandu we could have wished for!",
  },
  {
    name: "Xanthe BH",
    country: "United Kingdom",
    date: "2025-10-14",
    dateLabel: "Oct 2025",
    tripType: "Solo",
    rating: 5,
    title: "Great walking tour",
    text: "100% recommend this walking tour. Shiva was so knowledgeable and enthusiastic. I learnt so much about Nepal culture, and the sites of Kathmandu. Shiva also gave me other recommendations of places to see in Kathmandu including non-touristy local recommendations. He was very genuine and you can tell he really cared.",
  },
  {
    name: "Amber L",
    country: "United Kingdom",
    date: "2025-10-14",
    dateLabel: "Oct 2025",
    tripType: "Solo",
    rating: 5,
    title: "Amazing and enriching experience!",
    text: "The walking tour was amazing. Super informative and interesting. Shiva had a lot of knowledge about the area and the tour was very enriching. Would 100% recommend to anyone visiting Kathmandu!",
  },
  {
    name: "Trish F",
    country: "United Kingdom",
    date: "2025-10-14",
    dateLabel: "Oct 2025",
    tripType: "Friends",
    rating: 5,
    title: "City tour of Kathmandu to places that most tourists won't see",
    text: "This was the most wonderful tour of the city of Kathmandu. Shiva took us to places that tourists just wouldn't go and was a wealth of knowledge both in terms of history and the rich culture of Nepal. I absolutely recommend this tour with Shiva.",
  },
  {
    name: "Camper573497",
    country: "United States",
    date: "2025-10-13",
    dateLabel: "Oct 2025",
    tripType: "Friends",
    rating: 5,
    title: "A rich, colourful and authentic walk through Kathmandu's cultural and market district",
    text: "Our guide Shiva was the real thing. His warm, authentic nature was clear from first sight. His stories were interesting and mindful. The tour itself is extraordinary. A feast for the senses.",
  },
  {
    name: "Neda V",
    country: "Netherlands",
    date: "2025-10-13",
    dateLabel: "Oct 2025",
    tripType: "Solo",
    rating: 5,
    title: "Free walking tour KTM",
    text: "Good guide who is passionate and fluent in English! He showed parts of Thamel that you won't likely go alone to! Really nice and fulfilling experience.",
  },
  {
    name: "QUINTIN M",
    country: "Panama",
    date: "2025-10-13",
    dateLabel: "Oct 2025",
    tripType: "Friends",
    rating: 5,
    title: "Shiva's guided walking tour through Kathmandu",
    text: "Shiva's guided walking tour through Kathmandu is a thoroughly enjoyable and informative experience covering many of the city's cultural highlights. Shiva is an extremely knowledgeable and entertaining guide. His tour is highly recommended.",
  },
  {
    name: "Mary S",
    country: "United Kingdom",
    date: "2025-10-12",
    dateLabel: "Oct 2025",
    tripType: "Couples",
    rating: 5,
    title: "Learn more about Kathmandu",
    text: "Shiva was a very charismatic and knowledgeable guide. His English is good. He told us a lot about the Nepalese culture, history, religion and customs. Having walked through the area previously, Shiva pointed out many things we had missed. Be prepared to walk for 4 hours. We have already recommended this to our other hotel guests.",
  },
  {
    name: "Simone G",
    country: "Italy",
    date: "2025-10-11",
    dateLabel: "Oct 2025",
    tripType: "Couples",
    rating: 5,
    title: "Highly Recommend — a perfect and authentic Introduction to Kathmandu",
    text: "We joined the Free Walking Tour in Kathmandu with Shiva and it turned out to be the best experience, especially when you just arrived in Nepal, like us! Shiva is such a knowledgeable and engaging guide — he shared fascinating insights about Nepalese culture, history, and religion and patiently answered all our questions. The tour took us to many hidden and beautiful places in the city that we would never have found on our own. Walking through the lively streets and local markets gave us a real taste of everyday life in Kathmandu. The walk up to the Monkey Temple was another highlight and once we reached the top, we were rewarded with an incredible view over the city. We're so happy we joined this tour and can highly recommend it to anyone who wants to discover Kathmandu in a meaningful and authentic way. Thank you, Shiva, for this wonderful experience!",
  },
  {
    name: "Sophie",
    country: "Netherlands",
    date: "2025-10-05",
    dateLabel: "Oct 2025",
    tripType: "Couples",
    rating: 5,
    title: "Amazing Trek to Khopra Ridge!",
    text: "We did a 7-day hiking tour with Himkala Adventures. Starting together from Kathmandu with the bus to Pokhara, from there by jeep to Ghandruk. The following days we trekked via various beautiful tea houses from Tadapani to Dobato, Khopra Ridge with Khayer Lake to Ghorepani via Swanta and Poon Hill. We had an amazing time, great conversations with our guide Sabinaya about Nepal's culture, history, everyday life, etc.",
  },
];

const tourStops = [
  {
    name: "Kathe Swoyambhu (Kathesimbhu Stupa)",
    icon: Church,
    description:
      "A beautiful embodiment of religious harmony where Hindu, Buddhist and Tibetan cultures coexist. Small stupas with symbolic paintings surround the main stupa. Very photogenic, often undergoing gentle construction.",
  },
  {
    name: "Local Lassi Stop",
    icon: Coffee,
    description:
      "Near the glass-bead market, try freshly churned lassi with sugar, yogurt, dried fruits and concentrated milk (khuwa). A must-try refreshment — NPR 40 (small) / NPR 70 (large).",
  },
  {
    name: "Glass Beads Market (Indra Chowk)",
    icon: ShoppingBag,
    description:
      "Generations of Kathmandu's Muslim minority make colourful glass beads for Hindu ceremonies. Iconic green bead necklaces are given to brides. A wholesale market bursting with colour.",
  },
  {
    name: "Monkey Temple (Swoyambhunath Stupa)",
    icon: MountainSnow,
    description:
      "Now 424 steps (post-quake reconstruction). Hundreds of monkeys, not aggressive but will pester if you carry sweets. Panoramic valley views, symbolic carvings, souvenir shops. Entrance NPR 200.",
  },
];

const neighborhoods = [
  {
    name: "Thamel",
    description:
      "The city's main travel hub, known for trekking gear, North Face and outdoor brand shops (official and otherwise), fancy jewelry, garments, and ethnic items.",
  },
  {
    name: "Thahity",
    description:
      "A quieter square known for prayer flags, butter lamps, robes for monks and nuns, ethnic dress, tea, and incense — reflecting the neighbourhood's strong Buddhist character.",
  },
  {
    name: "Naghal",
    description:
      "Home to traditional Nepali handmade paper (lokta), Newari food including the savory lentil pancake known as bara, and shops selling Nepal's national dress.",
  },
  {
    name: "Asan Market",
    description:
      "One of Kathmandu's oldest and busiest trading squares — local vegetables and fruit, fried fish, dried meat, beans, beaten rice (chiura), leaf plates, Nepali spices, copper pots, saris, and ritual items used in daily Hindu worship.",
  },
  {
    name: "Indrachowk",
    description:
      "Known for lassi stalls, jewelry, clothing, glass beads, and cosmetics — one of the city's classic old trading intersections.",
  },
  {
    name: "Yetkha",
    description:
      "A good stop for souvenirs of all kinds, Nepali handicrafts, and traditional Nepali musical instruments.",
  },
  {
    name: "Bhagawan Bahal Road",
    description:
      "Famous specifically for prayer beads, including bodhichitta seed malas, alongside handcrafted singing bowls.",
  },
];

const faqs = [
  {
    q: "Is the Free Walking Tour Kathmandu really free?",
    a: "There's no upfront ticket price, but it isn't charity work either. It runs on tips: you pay your guide at the end, based on what you felt the experience was worth, on a pay-what-you-please basis.",
  },
  {
    q: "How do I book the tour with Shiva?",
    a: "You can reserve directly through Himkala Adventure's Facebook page, via WhatsApp at +977 9841376470, or by email at himkalaadventure@gmail.com. Let them know you'd like Shiva as your guide, and they'll confirm your slot. There's no third-party booking platform involved.",
  },
  {
    q: "Who leads the tour?",
    a: "Certified local guides Mr. Shiva Dhakal or Sabinaya (Shiva's son), both from Himkala Adventure, lead the walks directly — with no intermediary between you and your guide.",
  },
  {
    q: "Does the tour run in bad weather or with a small group?",
    a: "Yes. The schedule holds regardless of weather conditions and regardless of how many people have booked for that day.",
  },
  {
    q: "How much should I tip Shiva?",
    a: "There's no fixed amount. Tip based on how much value you felt the tour delivered and your guide's expertise — whatever feels fair to you.",
  },
  {
    q: "What should I bring?",
    a: "Comfortable walking shoes, weather-appropriate clothing, water, a camera, and some cash for souvenirs along the route and for your tip at the end.",
  },
  {
    q: "Does Himkala Adventure offer anything besides the walking tour?",
    a: "Yes. As a government-registered company, Himkala Adventure also arranges transportation, other guided tours, day hikes, and multi-day treks across Nepal — including the Annapurna Circuit, Annapurna Base Camp, Muldai, and Khopra Ridge — alongside various adventure activities.",
  },
];

const galleryImages = [
  "/images/used/beads.webp",
  "/images/used/ancient_temple.webp",
  "/images/used/buddhist_temple-1.webp",
  "/images/used/cremation-1.webp",
  "/images/used/indrachowk.webp",
  "/images/used/kathesimbu.webp",
  "/images/used/monkey_temple.webp",
  "/images/used/teeth.webp",
];

const blogTips = [
  {
    icon: <Footprints className="w-4 h-4" />,
    title: "Wear comfortable shoes",
    text: "The tour covers old, sometimes uneven cobblestone streets and narrow alleys, so proper walking shoes matter more than style here.",
  },
  {
    icon: <Thermometer className="w-4 h-4" />,
    title: "Dress for the weather",
    text: "Bring weather-appropriate layers, since Kathmandu's temperature can shift noticeably between shaded alleys and open squares.",
  },
  {
    icon: <CheckCircle2 className="w-4 h-4" />,
    title: "Carry water",
    text: "Staying hydrated matters even on a walking tour, especially in the warmer months.",
  },
  {
    icon: <Camera className="w-4 h-4" />,
    title: "Bring a camera",
    text: "Between historic temples, working artisans, and street scenes, there's no shortage of moments worth capturing.",
  },
  {
    icon: <ShoppingBag className="w-4 h-4" />,
    title: "Bring some cash",
    text: "A little extra money is useful for souvenirs along the route, and of course for your tip at the end, since that's what supports your guide directly.",
  },
];

/* ------------------------------------------------------------------ */
/*  STRUCTURED DATA (JSON-LD)                                          */
/* ------------------------------------------------------------------ */

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: "Experiencing the Free Walking Tour Kathmandu with Shiva | Himkala Adventure",
      description:
        "What is it like to walk Kathmandu's old city with Shiva Dhakal? Read real TripAdvisor reviews from travellers who took the Free Walking Tour Kathmandu with Shiva — plus the full route, tips, and booking info.",
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${PAGE_URL}/#tour` },
      primaryImageOfPage: { "@id": `${PAGE_URL}/#primaryimage` },
      datePublished: PUBLISHED_DATE,
      dateModified: MODIFIED_DATE,
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
    },
    {
      "@type": "ImageObject",
      "@id": `${PAGE_URL}/#primaryimage`,
      url: TOUR_IMAGE,
      contentUrl: TOUR_IMAGE,
      width: 1200,
      height: 630,
      caption: "Travellers on the Free Walking Tour Kathmandu with Shiva Dhakal of Himkala Adventure",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Kathmandu Tours", item: `${SITE_URL}/tours` },
        { "@type": "ListItem", position: 3, name: "Free Walking Tour", item: `${SITE_URL}/free-walking-tour-kathmandu` },
        { "@type": "ListItem", position: 4, name: "Experiencing with Shiva", item: PAGE_URL },
      ],
    },
    {
      "@type": "BlogPosting",
      "@id": `${PAGE_URL}/#blogposting`,
      headline: "Experiencing the Free Walking Tour Kathmandu with Shiva",
      description:
        "Real TripAdvisor reviews from travellers who took the Free Walking Tour Kathmandu with Shiva Dhakal — plus what to expect, the route, tips, and how to book.",
      image: TOUR_IMAGE,
      author: { "@type": "Organization", name: AUTHOR_NAME, url: SITE_URL },
      publisher: { "@id": `${SITE_URL}/#organization` },
      datePublished: PUBLISHED_DATE,
      dateModified: MODIFIED_DATE,
      mainEntityOfPage: { "@id": `${PAGE_URL}/#webpage` },
      articleSection: "Kathmandu Walking Tours",
      keywords:
        "Free Walking Tour Kathmandu with Shiva, Shiva Dhakal, Himkala Adventure reviews, Kathmandu walking tour reviews, TripAdvisor free walking tour Kathmandu, Sabinaya Himkala",
      inLanguage: "en",
      video: { "@id": `${PAGE_URL}/#video` },
      review: featuredReviews.map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.name },
        datePublished: r.date,
        name: r.title,
        reviewBody: r.text,
        reviewRating: { "@type": "Rating", ratingValue: String(r.rating), bestRating: "5" },
        locationCreated: { "@type": "Place", name: r.country },
      })),
    },
    {
      "@type": ["Product", "TouristAttraction"],
      "@id": `${PAGE_URL}/#tour`,
      name: TOUR_NAME,
      alternateName: [
        "Free Tour Kathmandu with Shiva",
        "Kathmandu Free Walking Tour with Shiva Dhakal",
        "Himkala Adventure Free Walking Tour",
      ],
      description:
        "The first tips-based free walking tour in the Kathmandu Valley, run by Himkala Adventure and led by certified local guides Shiva Dhakal and Sabinaya. A 3–5 hour guided walk through Thamel, Kathesimbhu Stupa, Indra Chowk, Durbar Square, Newar courtyards, the Vishnumati ghats, and Swoyambhunath (Monkey Temple). Daily departures at 9:00 AM and 2:00 PM from the Garden of Dreams.",
      image: [TOUR_IMAGE, `${SITE_URL}/images/used/monkey_temple.webp`, `${SITE_URL}/images/used/kathesimbu.webp`],
      brand: { "@type": "Brand", name: "Himkala Adventure" },
      category: "Walking Tour",
      offers: {
        "@type": "Offer",
        url: PAGE_URL,
        priceCurrency: CURRENCY,
        price: PRICE_NPR,
        priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0],
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: RATING_VALUE,
        reviewCount: REVIEW_COUNT,
        bestRating: "5",
        worstRating: "1",
      },
      review: featuredReviews.map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.name },
        datePublished: r.date,
        name: r.title,
        reviewBody: r.text,
        reviewRating: { "@type": "Rating", ratingValue: String(r.rating), bestRating: "5" },
        locationCreated: { "@type": "Place", name: r.country },
      })),
      touristType: ["Cultural travellers", "Solo travellers", "Families", "Backpackers", "Photographers"],
      availableLanguage: ["English", "Nepali", "Hindi"],
      provider: { "@id": `${SITE_URL}/#organization` },
      itinerary: {
        "@type": "ItemList",
        itemListElement: tourStops.map((stop, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: { "@type": "TouristAttraction", name: stop.name, description: stop.description },
        })),
      },
      geo: { "@type": "GeoCoordinates", latitude: LATITUDE, longitude: LONGITUDE },
      duration: DURATION_ISO,
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Himkala Adventure",
      alternateName: "Free Tour Kathmandu",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
      sameAs: [
        "https://www.tripadvisor.com/",
        "https://www.instagram.com/",
        "https://www.facebook.com/",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: CONTACT_PHONE,
        email: CONTACT_EMAIL,
        contactType: "customer service",
        availableLanguage: ["English", "Nepali", "Hindi"],
      },
    },
    {
      "@type": "TouristInformationCenter",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Free Tour Kathmandu — Garden of Dreams Meeting Point",
      image: TOUR_IMAGE,
      url: PAGE_URL,
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kaiser Mahal, Tridevi Marg",
        addressLocality: "Kathmandu",
        addressRegion: "Bagmati",
        postalCode: "44600",
        addressCountry: "NP",
      },
      geo: { "@type": "GeoCoordinates", latitude: LATITUDE, longitude: LONGITUDE },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "09:00",
          closes: "14:00",
        },
      ],
      priceRange: "Free (tips-based)",
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@type": "ImageGallery",
      "@id": `${PAGE_URL}/#gallery`,
      name: "Free Walking Tour Kathmandu with Shiva — Photo Gallery",
      image: galleryImages.map((src) => `${SITE_URL}${src}`),
    },
    {
      "@type": "VideoObject",
      "@id": `${PAGE_URL}/#video`,
      name: "What Our Guests Think — Free Walking Tour Kathmandu with Shiva",
      description:
        "Hear directly from travellers who took the Free Walking Tour Kathmandu with Shiva Dhakal of Himkala Adventure. Real impressions, real stories from the old city core.",
      thumbnailUrl: [`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`],
      uploadDate: PUBLISHED_DATE,
      duration: "PT2M",
      embedUrl: `https://www.youtube-nocookie.com/embed/${VIDEO_ID}`,
      contentUrl: `https://www.youtube.com/watch?v=${VIDEO_ID}`,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  HELPERS                                                            */
/* ------------------------------------------------------------------ */

const proseP = "text-[#556363] text-sm sm:text-base leading-relaxed mb-5";
const sectionPad = "px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20";
const container = "mx-auto max-w-[880px]";

/* ------------------------------------------------------------------ */
/*  VIDEO EMBED (click-to-play facade, plays inline)                   */
/* ------------------------------------------------------------------ */

type VideoEmbedProps = {
  videoId: string;
  title: string;
};

function VideoEmbed({ videoId, title }: VideoEmbedProps) {
  const [playing, setPlaying] = React.useState(false);
  const thumb = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  if (!playing) {
    return (
      <button
        type="button"
        onClick={() => setPlaying(true)}
        aria-label={`Play video: ${title}`}
        className="group relative block w-full aspect-video rounded-lg overflow-hidden bg-[#14383b] cursor-pointer"
      >
        <Image
          src={thumb}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 880px) 100vw, 880px"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#cf6943] group-hover:bg-[#b85734] transition-colors flex items-center justify-center shadow-lg">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 sm:w-8 sm:h-8 text-[#fff8ee] ml-1"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
        <span className="absolute bottom-0 left-0 right-0 px-4 py-3 text-left text-[10px] sm:text-xs font-bold tracking-wide text-[#f7f2e9] bg-gradient-to-t from-[#0f2940]/90 to-transparent">
          ▶ Watch on this page · What Our Guests Think
        </span>
      </button>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function ExperiencingWithShivaPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedStops, setExpandedStops] = React.useState<number[]>([]);
  const [showAllReviews, setShowAllReviews] = React.useState(false);

  const handleCopyLink = () => {
    if (typeof window === "undefined") return;
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleStop = (idx: number) => {
    setExpandedStops((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const visibleReviews = showAllReviews ? featuredReviews : featuredReviews.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main>
        {/* ============================================================ */}
        {/*  HERO / HEADER                                                */}
        {/* ============================================================ */}
        <header className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className={container}>
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs text-[#66706d]">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/tours" className="hover:underline">Kathmandu Tours</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/free-walking-tour-kathmandu" className="hover:underline">Free Walking Tour</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-[#14383b] font-semibold">With Shiva</li>
              </ol>
            </nav>

            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                  <span className="h-px w-6 sm:w-8 bg-[#cf6943]" />
                  <span>Blog · Guest Reviews · Behind the Tour</span>
                </div>
                <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Experiencing the Free Walking Tour <br />
                  <span className="text-[#cf6943]">Kathmandu with Shiva</span>
                </h1>
                <p className="mt-3 max-w-[560px] text-sm sm:text-base text-[#556363] leading-relaxed">
                  What is it actually like to walk Kathmandu's old city with Shiva Dhakal? We pulled the
                  most recent TripAdvisor reviews from travellers who took the tour — so you can hear it
                  directly from them.
                </p>
                <p className="mt-3 text-xs text-[#66706d]">
                  By <strong className="text-[#14383b]">{AUTHOR_NAME}</strong> · Updated {MODIFIED_DATE} · 14 min read
                </p>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">
                  Led by certified local guide Shiva Dhakal. Daily departures at 9:00 AM &amp; 2:00 PM from the Garden of Dreams.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                    ★ 4.9 · {REVIEW_COUNT}+ reviews
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    Free · Tips-based
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ============================================================ */}
        {/*  FEATURE IMAGE                                                */}
        {/* ============================================================ */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
          <figure className="relative h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px] rounded-lg overflow-hidden bg-[#14383b]">
            <Image
              src="/images/used/fwt-1.webp"
              alt="Free Walking Tour Kathmandu with Shiva Dhakal — travellers exploring the old city core with Himkala Adventure"
              fill
              className="object-cover opacity-90"
              priority
              quality={85}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
              <span className="bg-[#e47a4f] text-[#fff8ee] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide rounded">
                Guided by Shiva Dhakal · Himkala Adventure
              </span>
            </div>
            <div className="absolute top-4 right-4 flex flex-wrap gap-2">
              <span className="bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-wide rounded">
                Daily 9am &amp; 2pm
              </span>
            </div>
          </figure>
        </div>

        {/* ============================================================ */}
        {/*  QUICK STATS                                                  */}
        {/* ============================================================ */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
            {[
              { label: "Duration", value: "3-5 hours" },
              { label: "Group Size", value: "1-20 people" },
              { label: "Rating", value: "4.9/5" },
              { label: "Language", value: "English" },
            ].map((stat, i) => (
              <div key={i} className="bg-[#f7f2e9] rounded-lg p-3 text-center shadow-sm border border-[#d8cec0]/30">
                <p className="text-[10px] text-[#66706d] uppercase tracking-wider font-semibold">{stat.label}</p>
                <p className="text-sm font-bold text-[#14383b]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/*  1. INTRO — MEET SHIVA                                        */}
        {/* ============================================================ */}
        <section className={`bg-[#f2ede4] ${sectionPad}`}>
          <div className={container}>
            <article>
              <p className={proseP}>
                <strong className="text-[#14383b]">Shiva Dhakal</strong> is the founder of Himkala Adventure and
                the guide most travellers end up walking with when they book the Free Walking Tour Kathmandu.
                He grew up in these alleys. He has guided treks in the Everest, Annapurna, and Manaslu regions
                for years. And when he leads the walking tour, he brings that same mountain-guide energy into the
                old city — patient, curious, and endlessly generous with his knowledge of Nepal.
              </p>
              <p className={proseP}>
                The Free Walking Tour Kathmandu is a tips-based walking tour that leaves daily from just outside
                the <strong className="text-[#14383b]">Garden of Dreams</strong> at 9:00 AM and 2:00 PM. Over the
                next three to five hours, Shiva walks small groups through Kathmandu's old core — through Thamel,
                Kathesimbhu Stupa, Indra Chowk, Durbar Square, quiet Newar courtyards, the sacred Bishnumati
                river ghats, and finally up the 424 steps to Swoyambhunath (the Monkey Temple). No upfront price,
                no script — just a local guide showing you his city the way he actually sees it.
              </p>
              <p className={proseP}>
                But rather than describe the tour ourselves, we thought we'd let the travellers do the talking.
                Below are real reviews from the Free Walking Tour Kathmandu TripAdvisor listing — most of them
                mention Shiva by name.
              </p>
            </article>

            <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
              <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
              <strong>Tips-based model:</strong> the tour is free to join. You tip Shiva at the end, based on
              what the experience was worth to you. No fixed fee — gratitude welcomed.
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  INLINE IMAGE — ANCIENT TEMPLE                                */}
        {/* ============================================================ */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8 pb-12 sm:pb-16">
          <figure className="relative h-[220px] sm:h-[300px] md:h-[360px] rounded-lg overflow-hidden bg-[#14383b]">
            <Image
              src="/images/used/ancient_temple.webp"
              alt="Ancient temple in Kathmandu's old city — a stop on the Free Walking Tour with Shiva"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 880px) 100vw, 880px"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f2940]/80 to-transparent px-4 py-3 text-[10px] sm:text-xs text-[#f7f2e9]">
              Hidden temples, quiet courtyards, and the living Kathmandu that doesn't show up on a map.
            </figcaption>
          </figure>
        </div>

        {/* ============================================================ */}
        {/*  2. FEATURED SPOTLIGHT — SHIVA                                */}
        {/* ============================================================ */}
        <section className={`bg-[#e4d8c8] ${sectionPad}`}>
          <div className={container}>
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase mb-3">
              <span className="h-px w-6 bg-[#cf6943]" />
              <span>The Highlight</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-5">
              Why Travellers Keep Asking for Shiva
            </h2>

            <article>
              <p className={proseP}>
                If you read enough reviews of the Free Walking Tour Kathmandu, a pattern emerges fast. Travellers
                don't just say the tour was good — they name Shiva. They describe his English as perfect. They
                mention his patience, his humor, and the way he lets the conversation wander into politics,
                religion, or daily life without ever sounding rehearsed. Several reviewers note that after a few
                hours with him, they wished they had booked him for their trek too.
              </p>
              <p className={proseP}>
                That's not an accident. Shiva isn't just a city guide — he's a certified trekking guide with years
                of experience on Nepal's major routes. When he walks you through Asan Market or points out the
                symbolism on a Newar courtyard window, he's bringing the same depth of knowledge he'd bring on the
                Annapurna Circuit. And when a group asks for restaurant recommendations, hidden temples, or
                advice on their upcoming trek, he gives real answers — the same ones he'd give a friend.
              </p>
              <p className={proseP}>
                You can see it in almost every review below. Arne N called him "genuinely passionate about his
                Nepal." Ann M said he showed her places she "wouldn't have felt confident stepping into without a
                local guide." Madelief L, travelling solo, said she "felt extremely safe." Xanthe BH said he
                "really cared." That's the pattern: people come for a free tour and leave feeling like they've
                met someone who genuinely wanted them to love his city.
              </p>
            </article>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  INLINE IMAGE — MONKEY TEMPLE                                 */}
        {/* ============================================================ */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8 pb-12 sm:pb-16">
          <figure className="relative h-[220px] sm:h-[300px] md:h-[360px] rounded-lg overflow-hidden bg-[#14383b]">
            <Image
              src="/images/used/monkey_temple.webp"
              alt="Swoyambhunath Monkey Temple — the final stop of the Free Walking Tour Kathmandu with Shiva"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 880px) 100vw, 880px"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f2940]/80 to-transparent px-4 py-3 text-[10px] sm:text-xs text-[#f7f2e9]">
              The 424 steps to Swoyambhunath — the tour ends at the top of the Monkey Temple.
            </figcaption>
          </figure>
        </div>

        {/* ============================================================ */}
        {/*  3. REVIEWS — THE HEART OF THE BLOG                           */}
        {/* ============================================================ */}
        <section className={`bg-[#f2ede4] ${sectionPad}`} aria-labelledby="reviews-heading">
          <div className={container}>
            <div className="flex items-center gap-3 mb-3">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" aria-hidden="true" />
              <h2 id="reviews-heading" className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b]">
                What Travellers Actually Say
              </h2>
            </div>
            <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-8 max-w-[720px]">
              These are real reviews from the Free Walking Tour Kathmandu TripAdvisor listing — unedited except
              for length. Most mention Shiva by name. A few mention Sabinaya, his son, who also guides the tour.
            </p>

            <div className="space-y-6">
              {visibleReviews.map((review, i) => (
                <article
                  key={i}
                  className="bg-[#f7f2e9] p-5 sm:p-6 rounded-lg border border-[#d8cec0]/40"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#cf6943] text-[#fff8ee] flex items-center justify-center font-bold text-sm">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-[#14383b] text-sm">{review.name}</div>
                        <div className="text-[#66706d] text-xs">
                          {review.country} · {review.tripType} · {review.dateLabel}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
                      {[...Array(review.rating)].map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                      ))}
                    </div>
                  </div>

                  <h3 className="font-serif text-base text-[#14383b] mb-2">
                    &ldquo;{review.title}&rdquo;
                  </h3>

                  <p className="text-[#556363] text-sm leading-relaxed">
                    {review.text}
                  </p>

                  <div className="mt-3 pt-3 border-t border-[#d8cec0]/40 flex items-center gap-2 text-[10px] text-[#66706d] uppercase tracking-wider font-semibold">
                    <CheckCircle2 className="w-3 h-3 text-[#cf6943]" aria-hidden="true" />
                    Verified TripAdvisor Review
                  </div>
                </article>
              ))}
            </div>

            {!showAllReviews && featuredReviews.length > 6 && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowAllReviews(true)}
                  className="inline-flex items-center gap-2 bg-[#14383b] hover:bg-[#0f2b2e] text-[#f7f2e9] px-5 py-3 text-xs font-bold tracking-wide rounded transition-colors"
                >
                  Show all {featuredReviews.length} reviews
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            )}

            {showAllReviews && featuredReviews.length > 6 && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowAllReviews(false)}
                  className="inline-flex items-center gap-2 bg-transparent border border-[#14383b]/30 text-[#14383b] px-5 py-3 text-xs font-bold tracking-wide rounded transition-colors hover:bg-[#14383b]/5"
                >
                  Show fewer reviews
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ============================================================ */}
        {/*  4. HIMKALA'S RESPONSE                                        */}
        {/* ============================================================ */}
        <section className={`bg-[#e4d8c8] ${sectionPad}`}>
          <div className={container}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-5">
              A Note from Himkala Adventure
            </h2>
            <article>
              <p className={proseP}>
                We don't usually respond to reviews in long form, but a few of them stuck with us. When Sasha K
                wrote that she came for the walking tour and ended up booking a 13-day Annapurna Circuit trek
                with us, we replied: <em>&ldquo;This means the world to us… Knowing that you experienced both
                sides of Nepal — the city's stories and the mountains' majesty — makes us incredibly
                proud.&rdquo;</em>
              </p>
              <p className={proseP}>
                When Nancy L wrote about the private tour she ended up getting by accident, we replied:
                <em>&ldquo;It was a pleasure walking with you and sharing a bit of Kathmandu. Hope you're doing
                well, and wish you all the best on your travels.&rdquo;</em>
              </p>
              <p className={proseP}>
                And when Josh G — who told us up front he normally doesn't do walking tours — left a five-star
                review anyway, we replied: <em>&ldquo;That means a lot. Especially from someone who doesn't
                usually do walking tours.&rdquo;</em>
              </p>
              <p className={proseP}>
                That's really the whole thing. We're a small, local, government-registered company. Shiva and
                Sabinaya lead every tour themselves. There's no intermediary, no script, no franchise. Every
                review above came from someone who actually walked the route with us. If you're thinking about
                booking, we'd love to walk with you too.
              </p>
            </article>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  YOUTUBE — WHAT OUR GUESTS THINK                              */}
        {/* ============================================================ */}
        <section className={`bg-[#f2ede4] ${sectionPad}`} aria-labelledby="video-heading">
          <div className={container}>
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase mb-3">
              <span className="h-px w-6 bg-[#cf6943]" />
              <span>Watch</span>
            </div>
            <h2 id="video-heading" className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">
              What Our Guests Think
            </h2>
            <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-6 max-w-[720px]">
              Reviews are one thing. Hearing a traveller describe the walk in their own voice is another.
              Here's what guests say about experiencing the Free Walking Tour Kathmandu with Shiva —
              in their own words, from their own trip.
            </p>

            <VideoEmbed videoId={VIDEO_ID} title="What Our Guests Think — Free Walking Tour Kathmandu with Shiva" />

           
          </div>
        </section>

        {/* ============================================================ */}
        {/*  INLINE IMAGE — KATHESIMBHU                                   */}
        {/* ============================================================ */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8 pb-12 sm:pb-16">
          <figure className="relative h-[220px] sm:h-[300px] md:h-[360px] rounded-lg overflow-hidden bg-[#14383b]">
            <Image
              src="/images/used/kathesimbu.webp"
              alt="Kathesimbhu Stupa — a stop on the Free Walking Tour Kathmandu with Shiva"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 880px) 100vw, 880px"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f2940]/80 to-transparent px-4 py-3 text-[10px] sm:text-xs text-[#f7f2e9]">
              Kathesimbhu Stupa — one of the small stops most visitors walk past.
            </figcaption>
          </figure>
        </div>

        {/* ============================================================ */}
        {/*  5. NEIGHBORHOODS                                             */}
        {/* ============================================================ */}
        <section className={`bg-[#e4d8c8] ${sectionPad}`} aria-labelledby="neighborhoods-heading">
          <div className={container}>
            <h2 id="neighborhoods-heading" className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-4">
              The Route: Neighborhoods You'll Walk Through
            </h2>
            <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-8 max-w-[720px]">
              Shiva's tour is built around a handful of neighborhoods in the old city core, each with its own
              character and its own specialty trade that's been passed down for generations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {neighborhoods.map((hood, i) => (
                <div key={i} className="border-b border-[#d8cec0]/40 pb-4 last:border-0">
                  <h3 className="font-serif text-base sm:text-lg text-[#14383b] mb-1 flex items-start gap-2">
                    <span className="text-[#cf6943] mt-1 text-sm" aria-hidden="true">✦</span>
                    <span>{hood.name}</span>
                  </h3>
                  <p className="text-[#556363] text-sm leading-relaxed pl-5">{hood.description}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[#556363] text-sm sm:text-base leading-relaxed italic max-w-[720px] border-l-2 border-[#cf6943] pl-4">
              Walking through all of these in a single guided route, rather than visiting them separately over
              several days, is part of what makes the tour feel so dense with genuine local color in a relatively
              short amount of time.
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  INLINE IMAGE — INDRACHOWK                                    */}
        {/* ============================================================ */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8 pb-12 sm:pb-16">
          <figure className="relative h-[220px] sm:h-[300px] md:h-[360px] rounded-lg overflow-hidden bg-[#14383b]">
            <Image
              src="/images/used/indrachowk.webp"
              alt="Indrachowk old trading intersection — a stop on the Free Walking Tour Kathmandu with Shiva"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 880px) 100vw, 880px"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f2940]/80 to-transparent px-4 py-3 text-[10px] sm:text-xs text-[#f7f2e9]">
              Indrachowk: one of the classic old trading intersections of Kathmandu.
            </figcaption>
          </figure>
        </div>

        {/* ============================================================ */}
        {/*  6. TOUR STOPS ACCORDION                                      */}
        {/* ============================================================ */}
        <section className={`bg-[#f2ede4] ${sectionPad}`}>
          <div className={container}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b]">
                Stops Along the Route with Shiva
              </h2>
              <button
                className="text-[#cf6943] text-xs font-semibold hover:underline"
                onClick={() =>
                  setExpandedStops(expandedStops.length === tourStops.length ? [] : tourStops.map((_, i) => i))
                }
              >
                {expandedStops.length === tourStops.length ? "Collapse All" : "Expand All"}
              </button>
            </div>

            <div className="space-y-2">
              {tourStops.map((stop, idx) => {
                const Icon = stop.icon;
                const isExpanded = expandedStops.includes(idx);
                return (
                  <div key={idx} className="border-b border-[#d8cec0]/50 last:border-0">
                    <button
                      className="w-full flex items-center gap-4 py-4 text-left"
                      onClick={() => toggleStop(idx)}
                      aria-expanded={isExpanded}
                      aria-controls={`stop-panel-${idx}`}
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#cf6943]/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#cf6943]" aria-hidden="true" />
                      </div>
                      <span className="font-medium text-[#14383b] text-sm sm:text-base flex-1">{stop.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#66706d] transition-transform shrink-0 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {isExpanded && (
                      <div id={`stop-panel-${idx}`} className="pb-4 pl-12 sm:pl-14">
                        <p className="text-[#556363] text-sm sm:text-base leading-relaxed">{stop.description}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  7. TIPS                                                      */}
        {/* ============================================================ */}
        <section className={`bg-[#e4d8c8] ${sectionPad}`}>
          <div className={container}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">
              Tips for Walking with Shiva
            </h2>
            <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-6 max-w-[720px]">
              A few practical notes from past travellers to get the most out of your walk.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {blogTips.map((tip, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-8 h-8 bg-[#cf6943]/10 rounded-full flex items-center justify-center shrink-0 text-[#cf6943]">
                    {tip.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#14383b] text-sm">{tip.title}</h3>
                    <p className="text-[#556363] text-sm leading-relaxed">{tip.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  8. PRACTICAL INFO                                            */}
        {/* ============================================================ */}
        <section className={`bg-[#f2ede4] ${sectionPad}`}>
          <div className={container}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Plan Your Visit</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-[#14383b] text-sm mb-3">Tour Details</h3>
                <dl className="space-y-2 text-sm">
                  {[
                    { k: "Duration", v: "3-5 hours" },
                    { k: "Schedule", v: "Daily 9am & 2pm" },
                    { k: "Meeting Point", v: "Garden of Dreams" },
                    { k: "End Point", v: "Monkey Temple" },
                    { k: "Language", v: "English" },
                    { k: "Guide", v: "Shiva Dhakal / Sabinaya" },
                  ].map((row, i, arr) => (
                    <div
                      key={row.k}
                      className={`flex justify-between py-2 ${
                        i < arr.length - 1 ? "border-b border-[#d8cec0]/30" : ""
                      }`}
                    >
                      <dt className="text-[#66706d]">{row.k}</dt>
                      <dd className="text-[#14383b] font-medium">{row.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <h3 className="font-semibold text-[#14383b] text-sm mb-3">What to Bring</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    "Comfortable walking shoes",
                    "Water bottle",
                    "Sun protection",
                    "NPR 200 for Monkey Temple entrance",
                    "Small cash for refreshments & tip",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#556363]">
                      <CheckCircle2 className="w-4 h-4 text-[#cf6943] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/30">
              <p className="text-[#556363] text-sm">
                <strong className="text-[#14383b]">Note:</strong> The tour runs rain or shine. In case of heavy rain, Shiva will adjust the route to include more covered areas.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  FAQ                                                          */}
        {/* ============================================================ */}
        <section className={`bg-[#e4d8c8] ${sectionPad}`}>
          <div className={container}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-[#14383b] text-sm mb-1">{faq.q}</h3>
                  <p className="text-[#556363] text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  GALLERY                                                      */}
        {/* ============================================================ */}
        <section className={`bg-[#f2ede4] ${sectionPad}`}>
          <div className={container}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Glances of the Route</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6">
              A visual journey through Kathmandu's hidden temples, lively markets, and sacred sites.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {galleryImages.map((src, i) => (
                <div key={i} className="relative h-28 sm:h-32 rounded-lg overflow-hidden bg-[#d8cec0]">
                  <Image
                    src={src}
                    alt={`Free Walking Tour Kathmandu with Shiva - stop ${i + 1} along the route`}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  CLOSING + CTA                                                */}
        {/* ============================================================ */}
        <section className={`bg-[#e4d8c8] ${sectionPad}`}>
          <div className={container}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-5">
              Ready to Walk Kathmandu with Shiva?
            </h2>
            <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-5 max-w-[720px]">
              Whether you're spending a single day in Kathmandu before heading into the mountains, or you want a
              proper introduction to the city before exploring further, the Free Walking Tour Kathmandu with
              Shiva is one of the most authentic, budget-friendly ways to do it led by someone who knows these
              streets best.
            </p>
            <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-5 max-w-[720px]">
              Book directly through Himkala Adventure via WhatsApp at{" "}
              <strong className="text-[#14383b]">{CONTACT_PHONE}</strong>, email at{" "}
              <strong className="text-[#14383b]">{CONTACT_EMAIL}</strong>, or through the Facebook page. Ask for
              Shiva. He'll be expecting you at the Garden of Dreams.
            </p>

            <div className="p-5 bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="font-serif text-base sm:text-lg text-[#14383b]">
                  Enjoyed this article?
                </p>
                <p className="text-[#66706d] text-sm">
                  Copy the link and send it to fellow adventurers.
                </p>
              </div>
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center justify-center gap-2 bg-[#cf6943] hover:bg-[#b85734] text-[#fff8ee] px-4 py-2.5 text-xs font-bold tracking-wide rounded transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" aria-hidden="true" /> Link Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" aria-hidden="true" /> Copy Link
                  </>
                )}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}