"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, CloudSun, Database, Mountain, ThermometerSun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { importHardcodedTrekkingServices, loadTrekkingServices } from "@/lib/firebase/trekking-services-repository";
import { importHardcodedBlogPosts, loadBlogPosts } from "@/lib/firebase/blog-posts-repository";
import { isFirebaseConfigured } from "@/lib/firebase/client";

export default function AdminDashboard() {
  const [now, setNow] = React.useState<Date | null>(null);
  const [temperature, setTemperature] = React.useState<number | null>(null);
  const [trekCount, setTrekCount] = React.useState(0);
  const [blogCount, setBlogCount] = React.useState(0);
  const [isImporting, setIsImporting] = React.useState(false);
  const [importMessage, setImportMessage] = React.useState("");

  React.useEffect(() => {
    const updateTime = () => setNow(new Date());
    updateTime();
    const clock = window.setInterval(updateTime, 1000);
    void loadTrekkingServices({ allowFallback: false }).then(({ treks }) => setTrekCount(treks.length));
    void loadBlogPosts({ allowFallback: false }).then(({ posts }) => setBlogCount(posts.length));
    void fetch("https://api.open-meteo.com/v1/forecast?latitude=27.7172&longitude=85.3240&current=temperature_2m").then((response) => response.json()).then((data) => setTemperature(data.current?.temperature_2m ?? null)).catch(() => setTemperature(null));
    return () => window.clearInterval(clock);
  }, []);

  const importToFirebase = async () => {
    if (!isFirebaseConfigured) {
      setImportMessage("Firebase is not configured. Add the NEXT_PUBLIC_FIREBASE_* environment variables first.");
      return;
    }
    setIsImporting(true);
    setImportMessage("Importing hardcoded trekking and blog content…");
    const [trekResult, blogResult] = await Promise.all([
      importHardcodedTrekkingServices(),
      importHardcodedBlogPosts(),
    ]);
    setIsImporting(false);
    if (trekResult.source !== "firestore" || blogResult.source !== "firestore") {
      setImportMessage(trekResult.error || blogResult.error || "The Firebase import could not be completed.");
      return;
    }
    const [{ treks }, { posts }] = await Promise.all([
      loadTrekkingServices({ allowFallback: false }),
      loadBlogPosts({ allowFallback: false }),
    ]);
    setTrekCount(treks.length);
    setBlogCount(posts.length);
    setImportMessage(`Import completed: ${treks.length} treks and ${posts.length} blog articles are now stored as individual Firebase documents.`);
  };

  const greeting = !now ? "Welcome back" : now.getHours() < 12 ? "Good morning" : now.getHours() < 18 ? "Good afternoon" : "Good evening";
  return (
    <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
      <p className="text-xs font-bold uppercase tracking-[.16em] text-[#cf6943]">Administration dashboard</p>
      <h1 className="mt-2 font-serif text-4xl sm:text-5xl">Hello, Admin</h1>
      <p className="mt-3 text-sm text-[#66706d]">{greeting}. Here&apos;s an overview of your trekking content.</p>
      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-[#d8cec0] bg-[#f7f2e9] p-5"><div className="flex items-center justify-between"><span className="text-sm font-semibold text-[#556363]">Kathmandu time</span><CloudSun className="h-5 w-5 text-[#cf6943]" /></div><p className="mt-5 font-serif text-3xl">{now ? now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) : "--:--"}</p><p className="mt-1 text-xs text-[#66706d]">{now ? now.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" }) : "Loading time…"}</p></div>
        <div className="rounded-xl border border-[#d8cec0] bg-[#f7f2e9] p-5"><div className="flex items-center justify-between"><span className="text-sm font-semibold text-[#556363]">Kathmandu temperature</span><ThermometerSun className="h-5 w-5 text-[#cf6943]" /></div><p className="mt-5 font-serif text-3xl">{temperature === null ? "--°C" : `${Math.round(temperature)}°C`}</p><p className="mt-1 text-xs text-[#66706d]">Live conditions via Open-Meteo</p></div>
        <div className="rounded-xl border border-[#d8cec0] bg-[#14383b] p-5 text-[#f7f2e9] sm:col-span-2 xl:col-span-1"><div className="flex items-center justify-between"><span className="text-sm font-semibold text-[#f7f2e9]/70">Trekking services</span><Mountain className="h-5 w-5 text-[#ef966e]" /></div><p className="mt-5 font-serif text-3xl">{trekCount}</p><Link href="/admin/trekking" className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#ef966e] hover:text-white">Manage treks <ArrowRight className="h-3 w-3" /></Link></div>
        <div className="rounded-xl border border-[#d8cec0] bg-[#14383b] p-5 text-[#f7f2e9]"><div className="flex items-center justify-between"><span className="text-sm font-semibold text-[#f7f2e9]/70">Blog articles</span><BookOpen className="h-5 w-5 text-[#ef966e]" /></div><p className="mt-5 font-serif text-3xl">{blogCount}</p><Link href="/admin/blog" className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#ef966e] hover:text-white">Manage articles <ArrowRight className="h-3 w-3" /></Link></div>
      </section>
      <section className="mt-8 rounded-xl border border-[#d8cec0] bg-[#f7f2e9] p-6 sm:p-8"><h2 className="font-serif text-2xl">Quick action</h2><p className="mt-2 max-w-xl text-sm leading-6 text-[#66706d]">Create a new trekking service or update an existing one. The public cards on the home page are derived from the services you mark for display.</p><Link href="/admin/trekking/new" className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#cf6943] px-4 py-3 text-sm font-bold text-white hover:bg-[#b85a38]">Create new trek <ArrowRight className="h-4 w-4" /></Link></section>
      <section className="mt-6 rounded-xl border border-[#d8cec0] bg-[#14383b] p-6 text-[#f7f2e9] sm:p-8"><div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#ef966e]"><Database className="h-4 w-4"/>Firebase content migration</div><h2 className="mt-2 font-serif text-2xl">Importar Firebase</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-[#f7f2e9]/70">Imports the complete hardcoded catalogue into <code>trekkingServices</code> and <code>blogPosts</code>. Each trek and article becomes its own document. Existing documents with matching IDs are updated; additional Firebase documents are preserved.</p></div><Button type="button" onClick={()=>void importToFirebase()} disabled={isImporting} className="shrink-0 bg-[#cf6943] px-5 text-white hover:bg-[#b85a38]"><Database className="mr-2 h-4 w-4"/>{isImporting?"Importando…":"Importar Firebase"}</Button></div>{importMessage&&<p className="mt-5 rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-[#f7f2e9]" role="status">{importMessage}</p>}</section>
    </div>
  );
}
