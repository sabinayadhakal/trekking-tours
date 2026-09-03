"use client";

import * as React from "react";
import { ArrowDown, ArrowUp, Download, ExternalLink, Globe, Plus, Save, Star, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  importHardcodedTravelerStories,
  loadTravelerStories,
  saveTravelerStories,
} from "@/lib/firebase/traveler-stories-repository";
import {
  TRAVELER_STORIES_EMPTY,
  TRAVELER_STORIES_FALLBACK,
  TravelerStoriesContent,
  TravelerStory,
} from "@/lib/traveler-stories";

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

export default function TravelerStoriesAdminPage() {
  const [content, setContent] = React.useState<TravelerStoriesContent>(TRAVELER_STORIES_EMPTY);
  const [ready, setReady] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    void loadTravelerStories({ allowFallback: false }).then(({ content, source }) => {
      setContent(content);
      if (source === "unavailable") setMessage("No Traveler Stories document found in Firebase. Import the current website stories or add new ones.");
      setReady(true);
    });
  }, []);

  const updateStory = (index: number, patch: Partial<TravelerStory>) => setContent((current) => ({
    ...current,
    stories: current.stories.map((story, itemIndex) => itemIndex === index ? { ...story, ...patch } : story),
  }));

  const save = async () => {
    const invalid = content.stories.some((story) => !story.name.trim() || !story.country.trim() || !story.text.trim() || !story.trek.trim() || !story.trekLink.trim());
    if (invalid) {
      setMessage("Every story needs a traveler name, country, testimonial, experience and destination link.");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setSaving(true);
    const result = await saveTravelerStories(content);
    setSaving(false);
    setMessage(result.source === "firestore" ? "Traveler Stories saved to Firebase and published on the home page." : result.error || "Could not save to Firebase.");
  };

  const importCurrent = async () => {
    setSaving(true);
    const result = await importHardcodedTravelerStories();
    setSaving(false);
    if (result.source === "firestore") {
      setContent(structuredClone(TRAVELER_STORIES_FALLBACK));
      setMessage("Current hardcoded Traveler Stories imported to Firebase.");
    } else setMessage(result.error || "Could not import to Firebase.");
  };

  const addStory = () => setContent((current) => ({
    ...current,
    stories: [...current.stories, { name: "", country: "", text: "", trek: "", trekLink: "", rating: 5 }],
  }));

  return <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
    <div className="flex flex-col gap-4 border-b border-[#d8cec0] pb-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#cf6943]">Home page content</p><h1 className="mt-2 font-serif text-4xl">Traveler Stories</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-[#66706d]">Manage the testimonials shown in the animated review carousel on the home page.</p></div><div className="flex flex-wrap gap-2"><Button type="button" variant="outline" disabled={!ready || saving} onClick={() => void importCurrent()} className="border-[#cf6943] text-[#cf6943]"><Download className="mr-2 h-4 w-4" />Import current stories</Button><Button type="button" disabled={!ready || saving} onClick={() => void save()} className="bg-[#cf6943] text-white"><Save className="mr-2 h-4 w-4" />{saving ? "Saving…" : "Save changes"}</Button></div></div>

    {message && <p className="mt-5 rounded-lg border border-[#d8cec0] bg-[#f7f2e9] p-3 text-sm text-[#556363]">{message}</p>}

    <section className="mt-7 rounded-xl border border-[#d8cec0] bg-[#f7f2e9] p-5 sm:p-7"><h2 className="font-serif text-2xl">Tripadvisor</h2><p className="mt-1 text-sm text-[#66706d]">Destination of the “Visit Tripadvisor” button below the testimonials.</p><label className="mt-5 block text-sm font-semibold">Tripadvisor page URL<input value={content.tripadvisorUrl} onChange={(event) => setContent((current) => ({ ...current, tripadvisorUrl: event.target.value }))} placeholder="https://www.tripadvisor.com/…" className={control} /></label></section>

    <section className="mt-6 rounded-xl border border-[#d8cec0] bg-[#f7f2e9] p-5 sm:p-7"><div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="font-serif text-2xl">Published stories</h2><p className="mt-1 text-sm text-[#66706d]">{content.stories.length} testimonials. Their order here controls the carousel order.</p></div><Button type="button" variant="outline" onClick={addStory} className="border-[#cf6943] text-[#cf6943]"><Plus className="mr-2 h-4 w-4" />Add story</Button></div>
      <div className="mt-5 space-y-4">{content.stories.map((story, index) => <article key={index} className="rounded-xl border border-[#d8cec0] bg-white p-4 sm:p-5"><div className="flex items-start justify-between gap-3"><div><span className="text-[10px] font-bold uppercase tracking-[.14em] text-[#cf6943]">Story {index + 1}</span><h3 className="mt-1 font-serif text-xl">{story.name || "New traveler story"}</h3></div><Actions index={index} count={content.stories.length} onMove={(direction) => setContent((current) => ({ ...current, stories: move(current.stories, index, direction) }))} onDelete={() => setContent((current) => ({ ...current, stories: current.stories.filter((_, itemIndex) => itemIndex !== index) }))} /></div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><label className="text-sm font-semibold">Traveler name<input value={story.name} onChange={(event) => updateStory(index, { name: event.target.value })} className={control} /></label><label className="text-sm font-semibold"><span className="flex items-center gap-1"><Globe className="h-3.5 w-3.5 text-[#cf6943]" />Country</span><input value={story.country} onChange={(event) => updateStory(index, { country: event.target.value })} className={control} /></label><label className="text-sm font-semibold">Experience label<input value={story.trek} onChange={(event) => updateStory(index, { trek: event.target.value })} placeholder="Everest Base Camp" className={control} /></label><label className="text-sm font-semibold"><span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />Rating</span><select value={story.rating} onChange={(event) => updateStory(index, { rating: Number(event.target.value) })} className={control}>{[5, 4, 3, 2, 1].map((rating) => <option key={rating} value={rating}>{rating} star{rating === 1 ? "" : "s"}</option>)}</select></label></div>
        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,.55fr)]"><label className="text-sm font-semibold">Traveler testimonial<textarea value={story.text} onChange={(event) => updateStory(index, { text: event.target.value })} rows={5} className={control} /></label><label className="text-sm font-semibold"><span className="flex items-center gap-1"><ExternalLink className="h-3.5 w-3.5 text-[#cf6943]" />Experience destination</span><input value={story.trekLink} onChange={(event) => updateStory(index, { trekLink: event.target.value })} placeholder="/services/trekking/…" className={control} /><small className="mt-2 block font-normal leading-5 text-[#66706d]">Internal path opened when the experience badge is selected.</small></label></div>
      </article>)}</div>
    </section>

    <div className="sticky bottom-4 z-20 mt-6 flex justify-end rounded-xl border border-[#d8cec0] bg-[#f7f2e9]/95 p-3 shadow-lg backdrop-blur"><Button type="button" disabled={!ready || saving} onClick={() => void save()} className="bg-[#cf6943] text-white"><Save className="mr-2 h-4 w-4" />{saving ? "Saving…" : "Save Traveler Stories"}</Button></div>
  </div>;
}
