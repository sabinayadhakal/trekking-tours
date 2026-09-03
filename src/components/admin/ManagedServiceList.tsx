"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUp, Pencil, Plus, Star, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { deleteManagedService, loadManagedServices, saveManagedServices } from "@/lib/firebase/managed-services-repository";
import { MANAGED_SERVICE_COLLECTIONS, ManagedService, ManagedServiceCollection } from "@/lib/managed-services";

export default function ManagedServiceList({ collection }: { collection: ManagedServiceCollection }) {
  const config = MANAGED_SERVICE_COLLECTIONS[collection];
  const [items, setItems] = React.useState<ManagedService[]>([]);
  const [saving, setSaving] = React.useState(false);
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    void loadManagedServices(collection, { allowFallback: false }).then(({ services, source }) => {
      setItems(services);
      setMessage(source === "unavailable" ? `No ${config.label.toLowerCase()} documents found in Firebase. Use Importar Firebase on the dashboard.` : "Loaded from Firebase.");
    });
  }, [collection, config.label]);

  const persist = async (next: ManagedService[], success: string) => {
    setSaving(true);
    const result = await saveManagedServices(collection, next);
    setSaving(false);
    if (result.source === "firestore") { setItems(next); setMessage(`${success} Saved to Firebase.`); toast.success(success); }
    else { const error = result.error || "Could not save to Firebase."; setMessage(error); toast.error(error); }
  };
  const move = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= items.length) return;
    const next = [...items];
    [next[index], next[target]] = [next[target], next[index]];
    void persist(next, "Display order updated.");
  };
  const feature = (id: string) => void persist(items.map((item) => ({ ...item, featured: item.id === id })), "Featured item updated.");
  const remove = async (item: ManagedService) => {
    if (!window.confirm(`Delete ${item.name}?`)) return;
    setSaving(true);
    const result = await deleteManagedService(collection, item.id);
    setSaving(false);
    if (result.source === "firestore") { setItems((current) => current.filter((candidate) => candidate.id !== item.id)); setMessage("Item deleted from Firebase."); toast.success("Item deleted successfully."); }
    else { const error = result.error || "Could not delete from Firebase."; setMessage(error); toast.error(error); }
  };

  return <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
    <div className="flex flex-col gap-4 border-b border-[#d8cec0] pb-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#cf6943]">Content management</p><h1 className="mt-2 font-serif text-4xl">{config.label}</h1><p className="mt-2 text-sm text-[#66706d]">These Firebase documents are the source for the public service cards and detail pages.</p></div><Button asChild className="bg-[#cf6943] text-white hover:bg-[#b85a38]"><Link href={`${config.adminPath}/new`}><Plus className="mr-2 h-4 w-4"/> New {config.singular.toLowerCase()}</Link></Button></div>
    {message && <p className="mt-5 rounded-lg border border-[#d8cec0] bg-[#f7f2e9] p-3 text-sm text-[#556363]" role="status">{message}</p>}
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">{items.map((item, index) => <article key={item.id} className="flex aspect-square flex-col overflow-hidden rounded-lg border border-[#d8cec0] bg-[#f7f2e9]"><div className="relative h-[43%] shrink-0 bg-[#14383b]"><Image src={item.image} alt="" fill className="object-cover" sizes="360px"/><button type="button" onClick={() => feature(item.id)} disabled={saving} aria-label={`Mark ${item.name} as featured`} aria-pressed={item.featured} className={`absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border shadow-sm backdrop-blur ${item.featured ? "border-amber-300 bg-amber-50 text-amber-500" : "border-white/50 bg-[#14383b]/70 text-white"}`}><Star className={`h-5 w-5 ${item.featured ? "fill-amber-400" : ""}`}/></button></div><div className="flex min-h-0 flex-1 flex-col p-4"><h2 className="line-clamp-2 font-bold leading-tight">{item.name}</h2><p className="mt-2 line-clamp-2 text-xs text-[#556363]">{item.description}</p><p className="mt-2 text-xs text-[#66706d]">{item.duration} · {item.difficulty} · {typeof item.price === "number" ? `$${item.price.toLocaleString()}` : item.price}</p><div className="mt-auto grid grid-cols-4 gap-1 border-t border-[#d8cec0]/70 pt-3"><button type="button" onClick={() => move(index, -1)} disabled={index === 0 || saving} className="inline-flex h-11 items-center justify-center rounded hover:bg-[#e4d8c8] disabled:opacity-30"><ArrowUp className="h-4 w-4"/></button><button type="button" onClick={() => move(index, 1)} disabled={index === items.length - 1 || saving} className="inline-flex h-11 items-center justify-center rounded hover:bg-[#e4d8c8] disabled:opacity-30"><ArrowDown className="h-4 w-4"/></button><Link href={`${config.adminPath}/edit/${item.id}`} className="inline-flex h-11 items-center justify-center rounded text-[#cf6943] hover:bg-[#e4d8c8]"><Pencil className="h-4 w-4"/></Link><button type="button" onClick={() => void remove(item)} disabled={saving} className="inline-flex h-11 items-center justify-center rounded text-red-600 hover:bg-red-50"><Trash2 className="h-4 w-4"/></button></div></div></article>)}</div>
    {items.length === 0 && <div className="mt-6 rounded-xl border border-dashed border-[#d8cec0] bg-[#f7f2e9] p-10 text-center text-sm text-[#66706d]">No Firebase documents yet. Import the original content from the dashboard or create the first item.</div>}
  </div>;
}
