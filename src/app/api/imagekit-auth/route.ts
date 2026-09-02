import { NextRequest, NextResponse } from "next/server";
import { getUploadAuthParams } from "@imagekit/next/server";
import { getFirebaseAdminAuth } from "@/lib/firebase/admin";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const authorization = request.headers.get("authorization");
    const idToken = authorization?.startsWith("Bearer ") ? authorization.slice(7) : "";
    if (!idToken) return NextResponse.json({ error: "Authentication required." }, { status: 401 });

    const decodedToken = await getFirebaseAdminAuth().verifyIdToken(idToken);
    const allowedUids = (process.env.IMAGEKIT_ADMIN_UIDS || "").split(",").map((value) => value.trim()).filter(Boolean);
    const allowedEmails = (process.env.IMAGEKIT_ADMIN_EMAILS || "").split(",").map((value) => value.trim().toLowerCase()).filter(Boolean);
    const hasAllowlist = allowedUids.length > 0 || allowedEmails.length > 0;
    const isAllowed = allowedUids.includes(decodedToken.uid) || Boolean(decodedToken.email && allowedEmails.includes(decodedToken.email.toLowerCase()));
    if (hasAllowlist && !isAllowed) {
      return NextResponse.json({ error: "Administrator permission required." }, { status: 403 });
    }

    const publicKey = process.env.IMAGEKIT_PUBLIC_KEY;
    const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
    if (!publicKey || !privateKey) {
      return NextResponse.json({ error: "ImageKit credentials are not configured." }, { status: 503 });
    }

    const authentication = getUploadAuthParams({ publicKey, privateKey });
    return NextResponse.json({ ...authentication, publicKey });
  } catch (error) {
    console.error("Could not create ImageKit upload credentials.", error);
    const message = error instanceof Error ? error.message : "";
    if (message.includes("not configured")) {
      return NextResponse.json({ error: message }, { status: 503 });
    }
    return NextResponse.json({ error: "Could not authorize the ImageKit upload." }, { status: 401 });
  }
}
