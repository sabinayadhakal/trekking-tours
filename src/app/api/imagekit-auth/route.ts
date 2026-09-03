import { NextRequest, NextResponse } from "next/server";
import { createHmac, randomUUID } from "node:crypto";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type FirebaseAccountLookupResponse = {
  users?: Array<{
    localId?: string;
    email?: string;
    disabled?: boolean;
  }>;
};

async function getFirebaseUser(idToken: string) {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  if (!apiKey) throw new Error("Firebase API key is not configured.");

  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${encodeURIComponent(apiKey)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
      cache: "no-store",
    },
  );

  if (!response.ok) return null;

  const data = (await response.json()) as FirebaseAccountLookupResponse;
  const user = data.users?.[0];
  if (!user?.localId || user.disabled) return null;

  return { uid: user.localId, email: user.email };
}

export async function GET(request: NextRequest) {
  try {
    const authorization = request.headers.get("authorization");
    const idToken = authorization?.startsWith("Bearer ") ? authorization.slice(7) : "";
    if (!idToken) return NextResponse.json({ error: "Authentication required." }, { status: 401 });

    const firebaseUser = await getFirebaseUser(idToken);
    if (!firebaseUser) {
      return NextResponse.json({ error: "Invalid or expired authentication." }, { status: 401 });
    }

    const allowedUids = (process.env.IMAGEKIT_ADMIN_UIDS || "").split(",").map((value) => value.trim()).filter(Boolean);
    const allowedEmails = (process.env.IMAGEKIT_ADMIN_EMAILS || "").split(",").map((value) => value.trim().toLowerCase()).filter(Boolean);
    const hasAllowlist = allowedUids.length > 0 || allowedEmails.length > 0;
    const isAllowed = allowedUids.includes(firebaseUser.uid) || Boolean(firebaseUser.email && allowedEmails.includes(firebaseUser.email.toLowerCase()));
    if (hasAllowlist && !isAllowed) {
      return NextResponse.json({ error: "Administrator permission required." }, { status: 403 });
    }

    const publicKey = process.env.IMAGEKIT_PUBLIC_KEY;
    const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
    if (!publicKey || !privateKey) {
      return NextResponse.json({ error: "ImageKit credentials are not configured." }, { status: 503 });
    }

    const token = randomUUID();
    const expire = Math.floor(Date.now() / 1000) + 30 * 60;
    const signature = createHmac("sha1", privateKey).update(`${token}${expire}`).digest("hex");

    return NextResponse.json(
      { token, expire, signature, publicKey },
      { headers: { "Cache-Control": "no-store, max-age=0" } },
    );
  } catch (error) {
    console.error("Could not create ImageKit upload credentials.", error);
    const message = error instanceof Error ? error.message : "";
    if (message.includes("not configured")) {
      return NextResponse.json({ error: message }, { status: 503 });
    }
    return NextResponse.json({ error: "Could not authorize the ImageKit upload." }, { status: 401 });
  }
}
