"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CloudSun,
  Footprints,
  Globe2,
  Landmark,
  Mountain,
  ThermometerSun,
} from "lucide-react";
import { loadTrekkingServices } from "@/lib/firebase/trekking-services-repository";
import { loadBlogPosts } from "@/lib/firebase/blog-posts-repository";
import { loadManagedServices } from "@/lib/firebase/managed-services-repository";

export default function AdminDashboard() {
  const [now, setNow] = React.useState<Date | null>(null);
  const [temperature, setTemperature] = React.useState<number | null>(null);
  const [trekCount, setTrekCount] = React.useState(0);
  const [blogCount, setBlogCount] = React.useState(0);
  const [serviceCounts, setServiceCounts] = React.useState({
    freeTours: 0,
    multiDayTours: 0,
    dayHikings: 0,
    daySightseeings: 0,
    mountainFlights: 0,
    jungleSafaris: 0,
    destinationTours: 0,
  });

  React.useEffect(() => {
    const updateTime = () => setNow(new Date());
    updateTime();
    const clock = window.setInterval(updateTime, 1000);
    void loadTrekkingServices({ allowFallback: false }).then(({ treks }) =>
      setTrekCount(treks.length),
    );
    void loadBlogPosts({ allowFallback: false }).then(({ posts }) =>
      setBlogCount(posts.length),
    );
    void Promise.all(
      [
        "freeTours",
        "multiDayTours",
        "dayHikings",
        "daySightseeings",
        "mountainFlights",
        "jungleSafaris",
        "destinationTours",
      ].map((name) =>
        loadManagedServices(name as Parameters<typeof loadManagedServices>[0], {
          allowFallback: false,
        }),
      ),
    ).then(
      ([
        freeTours,
        multiDayTours,
        dayHikings,
        daySightseeings,
        mountainFlights,
        jungleSafaris,
        destinationTours,
      ]) =>
        setServiceCounts({
          freeTours: freeTours.services.length,
          multiDayTours: multiDayTours.services.length,
          dayHikings: dayHikings.services.length,
          daySightseeings: daySightseeings.services.length,
          mountainFlights: mountainFlights.services.length,
          jungleSafaris: jungleSafaris.services.length,
          destinationTours: destinationTours.services.length,
        }),
    );
    void fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=27.7172&longitude=85.3240&current=temperature_2m",
    )
      .then((response) => response.json())
      .then((data) => setTemperature(data.current?.temperature_2m ?? null))
      .catch(() => setTemperature(null));
    return () => window.clearInterval(clock);
  }, []);

  const greeting = !now
    ? "Welcome back"
    : now.getHours() < 12
      ? "Good morning"
      : now.getHours() < 18
        ? "Good afternoon"
        : "Good evening";
  return (
    <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
      <p className="text-xs font-bold uppercase tracking-[.16em] text-[#cf6943]">
        Administration dashboard
      </p>
      <h1 className="mt-2 font-serif text-4xl sm:text-5xl">Hello, Admin</h1>
      <p className="mt-3 text-sm text-[#66706d]">
        {greeting}. Here&apos;s an overview of your trekking content.
      </p>
      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-[#d8cec0] bg-[#f7f2e9] p-5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-[#556363]">
              Kathmandu time
            </span>
            <CloudSun className="h-5 w-5 text-[#cf6943]" />
          </div>
          <p className="mt-5 font-serif text-3xl">
            {now
              ? now.toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "--:--"}
          </p>
          <p className="mt-1 text-xs text-[#66706d]">
            {now
              ? now.toLocaleDateString("en-GB", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })
              : "Loading time…"}
          </p>
        </div>
        <div className="rounded-xl border border-[#d8cec0] bg-[#f7f2e9] p-5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-[#556363]">
              Kathmandu temperature
            </span>
            <ThermometerSun className="h-5 w-5 text-[#cf6943]" />
          </div>
          <p className="mt-5 font-serif text-3xl">
            {temperature === null ? "--°C" : `${Math.round(temperature)}°C`}
          </p>
          <p className="mt-1 text-xs text-[#66706d]">
            Live conditions via Open-Meteo
          </p>
        </div>
        <div className="rounded-xl border border-[#d8cec0] bg-[#14383b] p-5 text-[#f7f2e9] sm:col-span-2 xl:col-span-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-[#f7f2e9]/70">
              Trekking services
            </span>
            <Mountain className="h-5 w-5 text-[#ef966e]" />
          </div>
          <p className="mt-5 font-serif text-3xl">{trekCount}</p>
          <Link
            href="/admin/trekking"
            className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#ef966e] hover:text-white"
          >
            Manage treks <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="rounded-xl border border-[#d8cec0] bg-[#14383b] p-5 text-[#f7f2e9]">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-[#f7f2e9]/70">
              Blog articles
            </span>
            <BookOpen className="h-5 w-5 text-[#ef966e]" />
          </div>
          <p className="mt-5 font-serif text-3xl">{blogCount}</p>
          <Link
            href="/admin/blog"
            className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#ef966e] hover:text-white"
          >
            Manage articles <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </section>
      <section className="mt-4 grid gap-4 sm:grid-cols-3">
        <Link
          href="/admin/free-tours"
          className="rounded-xl border border-[#d8cec0] bg-[#f7f2e9] p-5 transition-colors hover:border-[#cf6943]"
        >
          <Footprints className="h-5 w-5 text-[#cf6943]" />
          <p className="mt-4 font-serif text-3xl">{serviceCounts.freeTours}</p>
          <p className="text-sm font-semibold text-[#556363]">Free Tours</p>
        </Link>
        <Link
          href="/admin/multi-day"
          className="rounded-xl border border-[#d8cec0] bg-[#f7f2e9] p-5 transition-colors hover:border-[#cf6943]"
        >
          <Landmark className="h-5 w-5 text-[#cf6943]" />
          <p className="mt-4 font-serif text-3xl">
            {serviceCounts.multiDayTours}
          </p>
          <p className="text-sm font-semibold text-[#556363]">Multi Day</p>
        </Link>
        <Link
          href="/admin/day-hikings"
          className="rounded-xl border border-[#d8cec0] bg-[#f7f2e9] p-5 transition-colors hover:border-[#cf6943]"
        >
          <Mountain className="h-5 w-5 text-[#cf6943]" />
          <p className="mt-4 font-serif text-3xl">{serviceCounts.dayHikings}</p>
          <p className="text-sm font-semibold text-[#556363]">Day Hikings</p>
        </Link>
      </section>
      <section className="mt-4 grid gap-4 sm:grid-cols-3">
        <Link
          href="/admin/day-sightseeings"
          className="rounded-xl border border-[#d8cec0] bg-[#f7f2e9] p-5 transition-colors hover:border-[#cf6943]"
        >
          <Landmark className="h-5 w-5 text-[#cf6943]" />
          <p className="mt-4 font-serif text-3xl">
            {serviceCounts.daySightseeings}
          </p>
          <p className="text-sm font-semibold text-[#556363]">
            Day Sightseeing
          </p>
        </Link>
        <Link
          href="/admin/mountain-flights"
          className="rounded-xl border border-[#d8cec0] bg-[#f7f2e9] p-5 transition-colors hover:border-[#cf6943]"
        >
          <Mountain className="h-5 w-5 text-[#cf6943]" />
          <p className="mt-4 font-serif text-3xl">
            {serviceCounts.mountainFlights}
          </p>
          <p className="text-sm font-semibold text-[#556363]">
            Mountain Flights
          </p>
        </Link>
        <Link
          href="/admin/jungle-safari"
          className="rounded-xl border border-[#d8cec0] bg-[#f7f2e9] p-5 transition-colors hover:border-[#cf6943]"
        >
          <Footprints className="h-5 w-5 text-[#cf6943]" />
          <p className="mt-4 font-serif text-3xl">
            {serviceCounts.jungleSafaris}
          </p>
          <p className="text-sm font-semibold text-[#556363]">Jungle Safari</p>
        </Link>
      </section>
      <section className="mt-4 grid gap-4 sm:grid-cols-3">
        <Link
          href="/admin/destinations"
          className="rounded-xl border border-[#d8cec0] bg-[#f7f2e9] p-5 transition-colors hover:border-[#cf6943]"
        >
          <Globe2 className="h-5 w-5 text-[#cf6943]" />
          <p className="mt-4 font-serif text-3xl">
            {serviceCounts.destinationTours}
          </p>
          <p className="text-sm font-semibold text-[#556363]">
            Bhutan & Tibet Destinations
          </p>
        </Link>
      </section>
      <section className="mt-8 rounded-xl border border-[#d8cec0] bg-[#f7f2e9] p-6 sm:p-8">
        <h2 className="font-serif text-2xl">Quick action</h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-[#66706d]">
          Create a new trekking service or update an existing one. The public
          cards on the home page are derived from the services you mark for
          display.
        </p>
        <Link
          href="/admin/trekking/new"
          className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#cf6943] px-4 py-3 text-sm font-bold text-white hover:bg-[#b85a38]"
        >
          Create new trek <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
