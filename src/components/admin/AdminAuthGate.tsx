"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { LogOut, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getFirebaseAuth, getFirebaseDatabase, isFirebaseConfigured } from "@/lib/firebase/client";

type AccessState = "checking" | "allowed" | "denied" | "unconfigured";

export default function AdminAuthGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [access, setAccess] = React.useState<AccessState>(isFirebaseConfigured ? "checking" : "unconfigured");
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const auth = getFirebaseAuth();
    const database = getFirebaseDatabase();
    if (!auth || !database) {
      setAccess("unconfigured");
      return;
    }

    return onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        router.replace("/admin/login");
        return;
      }
      setUser(currentUser);
      try {
        const adminDocument = await getDoc(doc(database, "admins", currentUser.uid));
        setAccess(adminDocument.exists() && adminDocument.data().active === true ? "allowed" : "denied");
      } catch {
        setAccess("denied");
      }
    });
  }, [router]);

  const logout = async () => {
    const auth = getFirebaseAuth();
    if (auth) await signOut(auth);
    router.replace("/admin/login");
  };

  if (access === "allowed") return <>{children}</>;

  if (access === "checking") {
    return <div className="flex min-h-screen items-center justify-center bg-[#f2ede4] text-sm font-semibold text-[#556363]">Checking administrator access…</div>;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f2ede4] px-5">
      <section className="w-full max-w-lg rounded-xl border border-[#d8cec0] bg-[#f7f2e9] p-7 text-center shadow-sm sm:p-10">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#cf6943]/10 text-[#cf6943]"><ShieldAlert className="h-6 w-6" /></span>
        <h1 className="mt-5 font-serif text-3xl text-[#14383b]">Administrator access required</h1>
        <p className="mt-3 text-sm leading-6 text-[#66706d]">
          {access === "unconfigured"
            ? "Firebase is not configured in the environment."
            : `The signed-in account (${user?.email ?? user?.uid ?? "unknown"}) is not registered in the admins collection.`}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {access === "denied" && <Button type="button" onClick={() => void logout()} className="bg-[#cf6943] text-white hover:bg-[#b85a38]"><LogOut className="mr-2 h-4 w-4" />Sign out</Button>}
          <Button asChild variant="outline"><Link href="/">Return to website</Link></Button>
        </div>
      </section>
    </main>
  );
}
