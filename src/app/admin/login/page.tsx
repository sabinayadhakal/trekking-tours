"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { LockKeyhole, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getFirebaseAuth, isFirebaseConfigured } from "@/lib/firebase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    const auth = getFirebaseAuth();
    if (!auth) return;
    return onAuthStateChanged(auth, (user) => {
      if (user) router.replace("/admin");
    });
  }, [router]);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    const auth = getFirebaseAuth();
    if (!auth) {
      setMessage("Firebase is not configured.");
      return;
    }
    setSubmitting(true);
    setMessage("");
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      router.replace("/admin");
    } catch (error) {
      const code = typeof error === "object" && error && "code" in error ? String(error.code) : "";
      setMessage(code === "auth/invalid-credential" ? "Invalid email or password." : "Could not sign in. Check Firebase Authentication and try again.");
      setSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f2ede4] px-5 py-10 text-[#14383b]">
      <section className="w-full max-w-md rounded-xl border border-[#d8cec0] bg-[#f7f2e9] p-7 shadow-sm sm:p-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#cf6943] text-white"><LockKeyhole className="h-6 w-6" /></span>
        <p className="mt-7 text-xs font-bold uppercase tracking-[.16em] text-[#cf6943]">Himkala administration</p>
        <h1 className="mt-2 font-serif text-4xl">Admin login</h1>
        <p className="mt-3 text-sm leading-6 text-[#66706d]">Sign in with the administrator account registered in Firebase Authentication.</p>
        <form onSubmit={submit} className="mt-7 space-y-5">
          <label className="block text-sm font-semibold">Email<input type="email" autoComplete="username" required value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 h-11 w-full rounded-md border border-[#d8cec0] bg-white px-3 outline-none focus:border-[#cf6943] focus:ring-2 focus:ring-[#cf6943]/15" /></label>
          <label className="block text-sm font-semibold">Password<input type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 h-11 w-full rounded-md border border-[#d8cec0] bg-white px-3 outline-none focus:border-[#cf6943] focus:ring-2 focus:ring-[#cf6943]/15" /></label>
          {message && <p role="alert" className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">{message}</p>}
          <Button type="submit" disabled={submitting || !isFirebaseConfigured} className="h-11 w-full bg-[#cf6943] font-bold text-white hover:bg-[#b85a38]"><LogIn className="mr-2 h-4 w-4" />{submitting ? "Signing in…" : "Sign in"}</Button>
        </form>
      </section>
    </main>
  );
}
