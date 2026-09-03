"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUp, Pencil, Plus, Star, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/lib/blog-posts";
import { deleteBlogPost, loadBlogPosts, saveBlogPosts } from "@/lib/firebase/blog-posts-repository";

export default function BlogAdminPage() {
  const [posts, setPosts] = React.useState<BlogPost[]>([]);
  const [saving, setSaving] = React.useState(false);
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    void loadBlogPosts({ allowFallback: false }).then(({ posts, source }) => {
      setPosts(posts);
      setMessage(source === "unavailable" ? "No blog documents found in Firebase. Use Importar Firebase on the dashboard." : "Loaded from Firebase.");
    });
  }, []);

  const persist = async (next: BlogPost[], text: string) => {
    setSaving(true);
    const result = await saveBlogPosts(next);
    setSaving(false);
    if (result.source === "firestore") {
      setPosts(next);
      setMessage(`${text} Saved to Firebase.`);
    } else setMessage(result.error || "Could not save to Firebase.");
  };
  const move = async (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= posts.length) return;
    const next = [...posts];
    [next[index], next[target]] = [next[target], next[index]];
    await persist(next, "Display order updated.");
  };
  const feature = async (id: string) => {
    await persist(posts.map((post) => ({ ...post, featured: post.id === id })), "Featured article updated.");
  };
  const remove = async (post: BlogPost) => {
    if (!window.confirm(`Delete ${post.title}?`)) return;
    setSaving(true);
    const result = await deleteBlogPost(post.id);
    const next = posts.filter((item) => item.id !== post.id);
    if (result.source === "firestore") {
      setPosts(next);
      await saveBlogPosts(next);
      setMessage("Article deleted from Firebase.");
    } else setMessage(result.error || "Could not delete from Firebase.");
    setSaving(false);
  };

  return <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
    <div className="flex flex-col gap-4 border-b border-[#d8cec0] pb-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#cf6943]">Content management</p><h1 className="mt-2 font-serif text-4xl">Blog</h1><p className="mt-2 text-sm text-[#66706d]">Articles are stored as individual documents in Firebase.</p></div><Button asChild className="bg-[#cf6943] text-white"><Link href="/admin/blog/new"><Plus className="mr-2 h-4 w-4"/>New article</Link></Button></div>
    {message && <p className="mt-5 rounded-lg border border-[#d8cec0] bg-[#f7f2e9] p-3 text-sm text-[#556363]">{message}</p>}
    <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{posts.map((post, index) => <article key={post.id} className="flex aspect-square flex-col overflow-hidden rounded-lg border border-[#d8cec0] bg-[#f7f2e9]"><div className="relative h-[43%] shrink-0 bg-[#14383b]"><Image src={post.image} alt="" fill className="object-cover" sizes="360px"/><span className="absolute left-3 top-3 rounded bg-[#14383b]/90 px-2 py-1 text-[10px] font-bold text-white">{post.published ? "Published" : "Draft"}</span><button type="button" onClick={() => void feature(post.id)} disabled={saving} aria-label={`Mark ${post.title} as featured`} aria-pressed={post.featured} className={`absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border shadow-sm backdrop-blur transition-colors ${post.featured?"border-amber-300 bg-amber-50 text-amber-500":"border-white/50 bg-[#14383b]/70 text-white hover:bg-[#14383b]"}`}><Star className={`h-5 w-5 ${post.featured?"fill-amber-400":""}`}/></button></div><div className="flex min-h-0 flex-1 flex-col p-4"><h2 className="line-clamp-2 font-bold leading-tight">{post.title}</h2><p className="mt-2 text-xs text-[#556363]">{post.category} · {post.readTime}</p><p className="mt-1 text-xs text-[#556363]">{post.author} · {post.date}</p><div className="mt-auto grid grid-cols-4 gap-1 border-t border-[#d8cec0]/70 pt-3"><button onClick={() => void move(index, -1)} disabled={index === 0 || saving} className="inline-flex h-11 items-center justify-center rounded hover:bg-[#e4d8c8] disabled:opacity-30"><ArrowUp className="h-4 w-4"/></button><button onClick={() => void move(index, 1)} disabled={index === posts.length - 1 || saving} className="inline-flex h-11 items-center justify-center rounded hover:bg-[#e4d8c8] disabled:opacity-30"><ArrowDown className="h-4 w-4"/></button><Link href={`/admin/blog/edit/${post.id}`} className="inline-flex h-11 items-center justify-center rounded text-[#cf6943] hover:bg-[#e4d8c8]"><Pencil className="h-4 w-4"/></Link><button onClick={() => void remove(post)} disabled={saving} className="inline-flex h-11 items-center justify-center rounded text-red-600 hover:bg-red-50"><Trash2 className="h-4 w-4"/></button></div></div></article>)}</div>
  </div>;
}
