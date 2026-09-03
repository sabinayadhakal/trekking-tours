"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUp, Pencil, Plus, Star, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrekkingService } from "@/lib/trekking-services";
import { deleteTrekkingService, loadTrekkingServices, saveTrekkingServices } from "@/lib/firebase/trekking-services-repository";

export default function TrekkingAdminPage() {
  const [treks, setTreks] = React.useState<TrekkingService[]>([]);
  const [isSaving, setIsSaving] = React.useState(false);
  const [message, setMessage] = React.useState("");
  React.useEffect(() => { void loadTrekkingServices({ allowFallback: false }).then(({ treks, source }) => { setTreks(treks); setMessage(source === "unavailable" ? "No trekking documents found in Firebase. Use Importar Firebase on the dashboard." : "Loaded from Firebase."); }); }, []);
  const persist = async (next: TrekkingService[], text: string) => { setIsSaving(true); const result = await saveTrekkingServices(next); setIsSaving(false); if (result.source === "firestore") { setTreks(next); setMessage(`${text} Saved to Firebase.`); } else setMessage(result.error || "Could not save to Firebase."); };
  const move = async (index: number, direction: -1 | 1) => { const target = index + direction; if (target < 0 || target >= treks.length) return; const next = [...treks]; [next[index], next[target]] = [next[target], next[index]]; await persist(next, "Display order updated."); };
  const feature = async (id: string) => { const next = treks.map((trek) => ({ ...trek, featured: trek.id === id })); await persist(next, "Featured trek updated."); };
  const remove = async (trek: TrekkingService) => { if (!window.confirm(`Delete ${trek.name}?`)) return; setIsSaving(true); const result = await deleteTrekkingService(trek.id); const next = treks.filter((item) => item.id !== trek.id); if (result.source === "firestore") { setTreks(next); await saveTrekkingServices(next); setMessage("Trek deleted from Firebase."); } else setMessage(result.error || "Could not delete from Firebase."); setIsSaving(false); };
  return (
    <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
      <div className="flex flex-col gap-4 border-b border-[#d8cec0] pb-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#cf6943]">Content management</p><h1 className="mt-2 font-serif text-4xl">Trekking</h1><p className="mt-2 text-sm text-[#66706d]">Services are the source of the cards shown on the home page.</p></div><Button asChild className="bg-[#cf6943] text-white hover:bg-[#b85a38]"><Link href="/admin/trekking/new"><Plus className="mr-2 h-4 w-4" /> New trek</Link></Button></div>
      {message && <p className="mt-5 rounded-lg border border-[#d8cec0] bg-[#f7f2e9] p-3 text-sm text-[#556363]" role="status">{message}</p>}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {treks.map((trek, index) => <article key={trek.id} className="flex aspect-square flex-col overflow-hidden rounded-lg border border-[#d8cec0] bg-[#f7f2e9]"><div className="relative h-[43%] shrink-0 bg-[#14383b]"><Image src={trek.image} alt="" fill className="object-cover" sizes="360px" /><button type="button" onClick={() => void feature(trek.id)} disabled={isSaving} aria-label={`Mark ${trek.name} as featured`} aria-pressed={trek.featured} className={`absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border shadow-sm backdrop-blur transition-colors ${trek.featured?"border-amber-300 bg-amber-50 text-amber-500":"border-white/50 bg-[#14383b]/70 text-white hover:bg-[#14383b]"}`}><Star className={`h-5 w-5 ${trek.featured?"fill-amber-400":""}`}/></button></div><div className="flex min-h-0 flex-1 flex-col p-4"><h2 className="line-clamp-2 font-bold leading-tight">{trek.name}</h2><p className="mt-2 text-xs text-[#556363]">{trek.region} · {trek.duration}</p><p className="mt-1 text-xs text-[#556363]">{trek.difficulty} · ${trek.price.toLocaleString()} · ★ {trek.rating}</p><div className="mt-auto grid grid-cols-4 gap-1 border-t border-[#d8cec0]/70 pt-3"><button onClick={() => void move(index, -1)} disabled={index === 0 || isSaving} className="inline-flex h-11 w-full items-center justify-center rounded text-[#556363] hover:bg-[#e4d8c8] disabled:opacity-30" aria-label={`Move ${trek.name} up`}><ArrowUp className="h-4 w-4" /></button><button onClick={() => void move(index, 1)} disabled={index === treks.length - 1 || isSaving} className="inline-flex h-11 w-full items-center justify-center rounded text-[#556363] hover:bg-[#e4d8c8] disabled:opacity-30" aria-label={`Move ${trek.name} down`}><ArrowDown className="h-4 w-4" /></button><Link href={`/admin/trekking/edit/${trek.id}`} className="inline-flex h-11 w-full items-center justify-center rounded text-[#cf6943] hover:bg-[#e4d8c8]" aria-label={`Edit ${trek.name}`}><Pencil className="h-4 w-4" /></Link><button onClick={() => void remove(trek)} disabled={isSaving} className="inline-flex h-11 w-full items-center justify-center rounded text-red-600 hover:bg-red-50" aria-label={`Delete ${trek.name}`}><Trash2 className="h-4 w-4" /></button></div></div></article>)}
      </div>
      {treks.length === 0 && <div className="mt-6 rounded-xl border border-dashed border-[#d8cec0] bg-[#f7f2e9] p-10 text-center text-sm text-[#66706d]">There are no saved trekking services yet. Create the first one with <strong>New trek</strong>.</div>}
    </div>
  );
}
