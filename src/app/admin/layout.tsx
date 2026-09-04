"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import {
  Binoculars,
  BookOpen,
  Footprints,
  Globe2,
  Landmark,
  LayoutDashboard,
  LogOut,
  Map,
  Menu,
  MessageSquareQuote,
  Mountain,
  Plane,
  Share2,
} from "lucide-react";
import AdminAuthGate from "@/components/admin/AdminAuthGate";
import { Toaster } from "@/components/ui/sonner";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getFirebaseAuth } from "@/lib/firebase/client";

const navigation = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/trekking", label: "Trekking", icon: Mountain },
  { href: "/admin/free-tours", label: "Free Tours", icon: Footprints },
  { href: "/admin/multi-day", label: "Multi Day", icon: Landmark },
  { href: "/admin/day-hikings", label: "Day Hikings", icon: Map },
  { href: "/admin/day-sightseeings", label: "Day Sightseeing", icon: Landmark },
  { href: "/admin/mountain-flights", label: "Mountain Flights", icon: Plane },
  { href: "/admin/jungle-safari", label: "Jungle Safari", icon: Binoculars },
  { href: "/admin/destinations", label: "Destinations", icon: Globe2 },
  { href: "/admin/blog", label: "Blog", icon: BookOpen },
  { href: "/admin/social-media", label: "Social Media", icon: Share2 },
  {
    href: "/admin/traveler-stories",
    label: "Traveler Stories",
    icon: MessageSquareQuote,
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  if (pathname === "/admin/login")
    return (
      <>
        <Toaster position="top-right" richColors closeButton />
        {children}
      </>
    );

  const logout = async () => {
    const auth = getFirebaseAuth();
    if (auth) await signOut(auth);
    router.replace("/admin/login");
  };

  return (
    <AdminAuthGate>
      <Toaster position="top-right" richColors closeButton />
      <div className="admin-shell min-h-screen bg-[#f2ede4] text-[#14383b] lg:flex">
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-white/10 bg-[#14383b] px-4 text-[#f7f2e9] shadow-sm lg:hidden">
          <Link href="/admin" className="flex min-w-0 items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#cf6943]">
              <Map className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <strong className="block truncate font-serif text-base">
                Himkala Admin
              </strong>
              <span className="block truncate text-[10px] text-[#f7f2e9]/60">
                {navigation.find(({ href }) =>
                  href === "/admin"
                    ? pathname === href
                    : pathname.startsWith(href),
                )?.label || "Administration"}
              </span>
            </span>
          </Link>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 hover:bg-white/10"
                aria-label="Open administration menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[min(88vw,320px)] gap-0 border-r-0 bg-[#14383b] p-0 text-[#f7f2e9] [&>button]:text-white"
            >
              <SheetTitle className="sr-only">Administration menu</SheetTitle>
              <div className="flex min-h-0 flex-1 flex-col p-5 pt-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#cf6943]">
                    <Map className="h-5 w-5" />
                  </span>
                  <span>
                    <strong className="block font-serif text-lg">
                      Himkala
                    </strong>
                    <span className="text-xs text-[#f7f2e9]/60">
                      Administration
                    </span>
                  </span>
                </div>
                <nav
                  className="mt-5 min-h-0 flex-1 space-y-1 overflow-y-auto overscroll-contain pr-1"
                  aria-label="Mobile administration"
                >
                  {navigation.map(({ href, label, icon: Icon }) => {
                    const active =
                      href === "/admin"
                        ? pathname === href
                        : pathname.startsWith(href);
                    return (
                      <SheetClose asChild key={href}>
                        <Link
                          href={href}
                          className={`flex min-h-11 items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${active ? "bg-[#cf6943] text-white" : "text-[#f7f2e9]/75 hover:bg-white/10 hover:text-white"}`}
                        >
                          <Icon className="h-4 w-4 shrink-0" />
                          <span>{label}</span>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
                <button
                  type="button"
                  onClick={() => void logout()}
                  className="mt-4 flex min-h-11 items-center gap-3 border-t border-white/10 px-4 pt-4 text-sm font-semibold text-[#f7f2e9]/75 hover:text-white"
                >
                  <LogOut className="h-4 w-4" /> Sign out
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </header>
        <aside className="hidden bg-[#14383b] text-[#f7f2e9] lg:fixed lg:inset-y-0 lg:block lg:w-64 lg:border-r lg:border-[#d8cec0]">
          <div className="flex h-full flex-col p-5 sm:p-6">
            <Link href="/admin" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#cf6943]">
                <Map className="h-5 w-5" />
              </span>
              <span>
                <strong className="block font-serif text-lg">Himkala</strong>
                <span className="text-xs text-[#f7f2e9]/60">
                  Administration
                </span>
              </span>
            </Link>
            <nav
              className="mt-10 flex gap-2 overflow-x-auto lg:block lg:min-h-0 lg:flex-1 lg:space-y-2 lg:overflow-y-auto"
              aria-label="Administration"
            >
              {navigation.map(({ href, label, icon: Icon }) => {
                const active =
                  href === "/admin"
                    ? pathname === href
                    : pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`flex shrink-0 items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${active ? "bg-[#cf6943] text-white" : "text-[#f7f2e9]/70 hover:bg-white/10 hover:text-white"}`}
                  >
                    <Icon className="h-4 w-4" /> {label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-auto hidden border-t border-white/10 pt-5 text-xs text-[#f7f2e9]/50 lg:block">
              <p>Himkala Adventure</p>
              <p className="mt-1">Content management</p>
              <button
                type="button"
                onClick={() => void logout()}
                className="mt-4 flex items-center gap-2 text-[#f7f2e9]/70 hover:text-white"
              >
                <LogOut className="h-3.5 w-3.5" /> Sign out
              </button>
            </div>
          </div>
        </aside>
        <main className="min-w-0 flex-1 lg:ml-64">{children}</main>
      </div>
    </AdminAuthGate>
  );
}
