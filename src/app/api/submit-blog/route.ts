import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs`;
    const apiToken = process.env.STRAPI_FULL_ACCESS_TOKEN;

    if (!apiUrl || !apiToken) {
      return NextResponse.json(
        { error: "Strapi URL or full access token not set in env" },
        { status: 500 }
      );
    }

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: {
          title: body.title,
          excerpt: body.excerpt,
          description: body.description,
          category: body.category || "General",
          approval: false
        }
      })
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Strapi API returned error:", text);
      return NextResponse.json({ error: text }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err: any) {
    console.error("API route exception:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}