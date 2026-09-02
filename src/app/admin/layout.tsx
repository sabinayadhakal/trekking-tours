"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { BookOpen, LayoutDashboard, LogOut, Map, Mountain } from "lucide-react";
import AdminAuthGate from "@/components/admin/AdminAuthGate";
import { getFirebaseAuth } from "@/lib/firebase/client";

const navigation = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/trekking", label: "Trekking", icon: Mountain },
  { href: "/admin/blog", label: "Blog", icon: BookOpen },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/admin/login") return <>{children}</>;

  const logout = async () => {
    const auth = getFirebaseAuth();
    if (auth) await signOut(auth);
    router.replace("/admin/login");
  };

  return (
    <AdminAuthGate><div className="min-h-screen bg-[#f2ede4] text-[#14383b] lg:flex">
      <aside className="border-b border-[#d8cec0] bg-[#14383b] text-[#f7f2e9] lg:fixed lg:inset-y-0 lg:w-64 lg:border-b-0 lg:border-r">
        <div className="flex h-full flex-col p-5 sm:p-6">
          <Link href="/admin" className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#cf6943]"><Map className="h-5 w-5" /></span><span><strong className="block font-serif text-lg">Himkala</strong><span className="text-xs text-[#f7f2e9]/60">Administration</span></span></Link>
          <nav className="mt-10 flex gap-2 overflow-x-auto lg:block lg:space-y-2" aria-label="Administration">
            {navigation.map(({ href, label, icon: Icon }) => {
              const active = href === "/admin" ? pathname === href : pathname.startsWith(href);
              return <Link key={href} href={href} className={`flex shrink-0 items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${active ? "bg-[#cf6943] text-white" : "text-[#f7f2e9]/70 hover:bg-white/10 hover:text-white"}`}><Icon className="h-4 w-4" /> {label}</Link>;
            })}
          </nav>
          <div className="mt-auto hidden border-t border-white/10 pt-5 text-xs text-[#f7f2e9]/50 lg:block"><p>Himkala Adventure</p><p className="mt-1">Content management</p><button type="button" onClick={() => void logout()} className="mt-4 flex items-center gap-2 text-[#f7f2e9]/70 hover:text-white"><LogOut className="h-3.5 w-3.5" /> Sign out</button></div>
        </div>
      </aside>
      <main className="min-w-0 flex-1 lg:ml-64">{children}</main>
    </div></AdminAuthGate>
  );
}
