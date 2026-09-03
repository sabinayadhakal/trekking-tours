"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUp, Instagram, Plus, Save, Trash2, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { loadSocialMediaContent, saveSocialMediaContent } from "@/lib/firebase/social-media-repository";
import {
  getYouTubeThumbnail,
  InstagramPost,
  SOCIAL_MEDIA_EMPTY,
  SocialMediaContent,
  YouTubeVideo,
} from "@/lib/social-media";

const control = "mt-1.5 w-full rounded-md border border-[#d8cec0] bg-white px-3 py-2.5 text-sm font-normal text-[#14383b] outline-none focus:border-[#cf6943] focus:ring-2 focus:ring-[#cf6943]/20";

function move<T>(items: T[], index: number, direction: -1 | 1) {
  const target = index + direction;
  if (target < 0 || target >= items.length) return items;
  const next = [...items];
  [next[index], next[target]] = [next[target], next[index]];
  return next;
}

function Actions({ index, count, onMove, onDelete }: { index: number; count: number; onMove: (direction: -1 | 1) => void; onDelete: () => void }) {
  return <div className="flex shrink-0 gap-1">
    <button type="button" disabled={index === 0} onClick={() => onMove(-1)} className="inline-flex h-10 w-10 items-center justify-center rounded hover:bg-[#e4d8c8] disabled:opacity-20" aria-label="Move up"><ArrowUp className="h-4 w-4" /></button>
    <button type="button" disabled={index === count - 1} onClick={() => onMove(1)} className="inline-flex h-10 w-10 items-center justify-center rounded hover:bg-[#e4d8c8] disabled:opacity-20" aria-label="Move down"><ArrowDown className="h-4 w-4" /></button>
    <button type="button" onClick={onDelete} className="inline-flex h-10 w-10 items-center justify-center rounded text-red-600 hover:bg-red-50" aria-label="Delete"><Trash2 className="h-4 w-4" /></button>
  </div>;
}

export default function SocialMediaAdminPage() {
  const [content, setContent] = React.useState<SocialMediaContent>(SOCIAL_MEDIA_EMPTY);
  const [ready, setReady] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    void loadSocialMediaContent({ allowFallback: false }).then(({ content, source }) => {
      setContent(content);
      if (source === "unavailable") setMessage("No social media document found in Firebase. Start adding items and save to create it.");
      setReady(true);
    });
  }, []);

  const set = <K extends keyof SocialMediaContent>(key: K, value: SocialMediaContent[K]) => setContent((current) => ({ ...current, [key]: value }));
  const updateVideo = (index: number, patch: Partial<YouTubeVideo>) => set("youtubeVideos", content.youtubeVideos.map((video, itemIndex) => itemIndex === index ? { ...video, ...patch } : video));
  const updatePost = (index: number, patch: Partial<InstagramPost>) => set("instagramPosts", content.instagramPosts.map((post, itemIndex) => itemIndex === index ? { ...post, ...patch } : post));

  const save = async () => {
    const hasInvalidVideo = content.youtubeVideos.some((video) => !video.title.trim() || !video.url.trim());
    const hasInvalidPost = content.instagramPosts.some((post) => !post.title.trim() || !post.url.trim());
    if (hasInvalidVideo || hasInvalidPost) {
      const error = "Every item needs a title and URL before saving.";
      setMessage(error);
      toast.error(error);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setSaving(true);
    const result = await saveSocialMediaContent(content);
    setSaving(false);
    if (result.source === "firestore") {
      setMessage("Social media content saved to Firebase. Home and blog now use these items.");
      toast.success("Social media saved successfully.");
    } else {
      const error = result.error || "Could not save to Firebase.";
      setMessage(error);
      toast.error(error);
    }
  };

  return <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
    <div className="flex flex-col gap-4 border-b border-[#d8cec0] pb-6 sm:flex-row sm:items-end sm:justify-between">
      <div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#cf6943]">Shared website content</p><h1 className="mt-2 font-serif text-4xl">Social Media</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-[#66706d]">Manage once and publish the same YouTube and Instagram content on both the home page and blog.</p></div>
      <Button type="button" disabled={!ready || saving} onClick={() => void save()} className="bg-[#cf6943] text-white"><Save className="mr-2 h-4 w-4" />{saving ? "Saving…" : "Save changes"}</Button>
    </div>

    {message && <p className="mt-5 rounded-lg border border-[#d8cec0] bg-[#f7f2e9] p-3 text-sm text-[#556363]">{message}</p>}

    <section className="mt-7 rounded-xl border border-[#d8cec0] bg-[#f7f2e9] p-5 sm:p-7">
      <h2 className="font-serif text-2xl">Profile links</h2><p className="mt-1 text-sm text-[#66706d]">Used by the channel and profile buttons on the public pages.</p>
      <div className="mt-5 grid gap-4 lg:grid-cols-2"><label className="text-sm font-semibold"><span className="flex items-center gap-2"><Youtube className="h-4 w-4 text-red-600" />YouTube channel URL</span><input value={content.youtubeChannelUrl} onChange={(event) => set("youtubeChannelUrl", event.target.value)} placeholder="https://youtube.com/@channel" className={control} /></label><label className="text-sm font-semibold"><span className="flex items-center gap-2"><Instagram className="h-4 w-4 text-[#833AB4]" />Instagram profile URL</span><input value={content.instagramProfileUrl} onChange={(event) => set("instagramProfileUrl", event.target.value)} placeholder="https://instagram.com/profile" className={control} /></label></div>
    </section>

    <section className="mt-6 rounded-xl border border-[#d8cec0] bg-[#f7f2e9] p-5 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="flex items-center gap-2 font-serif text-2xl"><Youtube className="h-6 w-6 text-red-600" />YouTube videos</h2><p className="mt-1 text-sm text-[#66706d]">Add videos and control their display order.</p></div><Button type="button" variant="outline" onClick={() => set("youtubeVideos", [{ title: "", url: "" }, ...content.youtubeVideos])} className="border-red-300 text-red-700"><Plus className="mr-2 h-4 w-4" />Add video</Button></div>
      <div className="mt-5 space-y-3">{content.youtubeVideos.map((video, index) => <article key={index} className="grid gap-4 rounded-lg border border-[#d8cec0] bg-white p-4 lg:grid-cols-[150px_minmax(0,1fr)_auto] lg:items-center"><div className="relative h-24 overflow-hidden rounded-md bg-[#14383b]"><Image src={getYouTubeThumbnail(video.url)} alt="" fill className="object-cover" sizes="150px" /></div><div className="grid gap-3"><label className="text-sm font-semibold">Video title<input value={video.title} onChange={(event) => updateVideo(index, { title: event.target.value })} className={control} /></label><label className="text-sm font-semibold">YouTube URL<input value={video.url} onChange={(event) => updateVideo(index, { url: event.target.value })} placeholder="https://youtube.com/watch?v=…" className={control} /></label></div><Actions index={index} count={content.youtubeVideos.length} onMove={(direction) => set("youtubeVideos", move(content.youtubeVideos, index, direction))} onDelete={() => set("youtubeVideos", content.youtubeVideos.filter((_, itemIndex) => itemIndex !== index))} /></article>)}</div>
    </section>

    <section className="mt-6 rounded-xl border border-[#d8cec0] bg-[#f7f2e9] p-5 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="flex items-center gap-2 font-serif text-2xl"><Instagram className="h-6 w-6 text-[#833AB4]" />Instagram posts</h2><p className="mt-1 text-sm text-[#66706d]">Add reels or posts and control their display order.</p></div><Button type="button" variant="outline" onClick={() => set("instagramPosts", [{ title: "", url: "", type: "reel" }, ...content.instagramPosts])} className="border-[#cf6943] text-[#cf6943]"><Plus className="mr-2 h-4 w-4" />Add Instagram item</Button></div>
      <div className="mt-5 space-y-3">{content.instagramPosts.map((post, index) => <article key={index} className="grid gap-4 rounded-lg border border-[#d8cec0] bg-white p-4 lg:grid-cols-[minmax(0,1fr)_150px_auto] lg:items-end"><div className="grid gap-3"><label className="text-sm font-semibold">Post title<input value={post.title} onChange={(event) => updatePost(index, { title: event.target.value })} className={control} /></label><label className="text-sm font-semibold">Instagram URL<input value={post.url} onChange={(event) => updatePost(index, { url: event.target.value })} placeholder="https://instagram.com/…" className={control} /></label></div><label className="text-sm font-semibold">Content type<select value={post.type} onChange={(event) => updatePost(index, { type: event.target.value as InstagramPost["type"] })} className={control}><option value="reel">Reel</option><option value="post">Post</option></select></label><Actions index={index} count={content.instagramPosts.length} onMove={(direction) => set("instagramPosts", move(content.instagramPosts, index, direction))} onDelete={() => set("instagramPosts", content.instagramPosts.filter((_, itemIndex) => itemIndex !== index))} /></article>)}</div>
    </section>

    <div className="sticky bottom-4 z-20 mt-6 flex justify-end rounded-xl border border-[#d8cec0] bg-[#f7f2e9]/95 p-3 shadow-lg backdrop-blur"><Button type="button" disabled={!ready || saving} onClick={() => void save()} className="bg-[#cf6943] text-white"><Save className="mr-2 h-4 w-4" />{saving ? "Saving…" : "Save social media"}</Button></div>
  </div>;
}
