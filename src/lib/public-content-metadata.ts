import type { Metadata } from "next";

const baseUrl = "https://www.himkalaadventure.com";

function absoluteUrl(value: string) {
  try {
    return new URL(value, baseUrl).toString();
  } catch {
    return baseUrl;
  }
}

export function publicContentMetadata({
  title,
  description,
  path,
  image,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "article" | "website";
}): Metadata {
  const canonical = absoluteUrl(path);
  const images = image ? [absoluteUrl(image)] : undefined;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Himkala Adventure",
      type,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}

export const unavailableContentMetadata: Metadata = {
  title: "Content temporarily unavailable | Himkala Adventure",
  robots: { index: false, follow: false },
};
