// app/api/submit-review/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    // Extract text fields
    const displayName = formData.get("displayName") as string;
    const nationality = formData.get("nationality") as string;
    const tours = formData.get("tours") as string;
    const feedback = formData.get("feedback") as string;
    const rating = parseInt(formData.get("rating") as string);
    
    // Extract files
    const files: File[] = [];
    let fileIndex = 0;
    while (formData.has(`file${fileIndex}`)) {
      const file = formData.get(`file${fileIndex}`) as File;
      files.push(file);
      fileIndex++;
    }

    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/reviews`;
    const apiToken = process.env.STRAPI_FULL_ACCESS_TOKEN;

    if (!apiUrl || !apiToken) {
      return NextResponse.json(
        { error: "Strapi URL or full access token not set in env" },
        { status: 500 }
      );
    }

    // First, upload files to Strapi if any
    const uploadedFileIds: number[] = [];
    for (const file of files) {
      const uploadFormData = new FormData();
      uploadFormData.append("files", file);
      
      const uploadResponse = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
        body: uploadFormData,
      });
      
      if (uploadResponse.ok) {
        const uploadData = await uploadResponse.json();
        uploadedFileIds.push(uploadData[0].id);
      }
    }

    // Then create the review with the uploaded file IDs
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: {
          name: displayName,
          nationality: nationality,
          tours: tours,
          feedback: feedback,
          rating: rating,
          reviewDate: new Date().toISOString(),
          approval: false,
          // Explicitly set publishedAt to null to ensure it's not published
          publishedAt: null,
          // Attach uploaded files if any
          ...(uploadedFileIds.length > 0 && {
            photos: uploadedFileIds
          })
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