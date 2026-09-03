export type YouTubeVideo = {
  title: string;
  url: string;
};

export type InstagramPost = {
  title: string;
  url: string;
  type: "reel" | "post";
};

export type SocialMediaContent = {
  youtubeChannelUrl: string;
  instagramProfileUrl: string;
  youtubeVideos: YouTubeVideo[];
  instagramPosts: InstagramPost[];
};

export const SOCIAL_MEDIA_UPDATED_EVENT = "himkala:social-media-updated";

export const SOCIAL_MEDIA_EMPTY: SocialMediaContent = {
  youtubeChannelUrl: "",
  instagramProfileUrl: "",
  youtubeVideos: [],
  instagramPosts: [],
};

/** Permanent public fallback used whenever the shared Firebase document is unavailable. */
export const SOCIAL_MEDIA_FALLBACK: SocialMediaContent = {
  youtubeChannelUrl: "https://www.youtube.com/@himkalaadventure5936",
  instagramProfileUrl: "https://www.instagram.com/himkalaadventure/",
  youtubeVideos: [
    { title: "Himkala Adventure | Kathmandu, Nepal", url: "https://www.youtube.com/watch?v=JxiY-aG0e_c&t=10s" },
    { title: "Ritual Thread Ceremony | Himkala Adventure", url: "https://www.youtube.com/watch?v=a0P-e9MRRpY&pp=0gcJCdkKAYcqIYzv" },
    { title: "Nagarkot to Changunarayan Hiking | Himkala Adventure", url: "https://www.youtube.com/watch?v=6aUyYVxnaOA" },
    { title: "Kathmandu Valley Fringe Hiking with Himkala Adventure | Kathmandu, Nepal", url: "https://www.youtube.com/watch?v=JS9aWnSWHAA" },
    { title: "Amazing Free Walking Tour Kathmandu | Himkala Adevnture", url: "https://www.youtube.com/watch?v=BjfCd9C2uS4" },
  ],
  instagramPosts: [
    { title: "City or mountains? With us, you don't have to choose. 🇳🇵🏔️", url: "https://www.instagram.com/himkalaadventure/reel/DbsQAe9PPuI/", type: "reel" },
    { title: "The climb is worth it. 🇳🇵🐒 — Monkey Temple", url: "https://www.instagram.com/freewalkingtourkathmandu/reel/DbsuPo8zUMf/", type: "reel" },
    { title: "Kathmandu's Free Walking Tour — 12 Years Strong", url: "https://www.instagram.com/freewalkingtourkathmandu/reel/DblJWo7TsOB/", type: "reel" },
    { title: "Backpacking Diaries: Trekking the Himalayas with Himkala Adventure", url: "https://www.instagram.com/amberlowentravels/reel/DSSTpFck6F4/", type: "reel" },
    { title: "Humbled by the Mountains — Annapurna Circuit Trek", url: "https://www.instagram.com/back.to.that.moment/reel/DMzitZdIxVI/", type: "reel" },
    { title: "Langtang Summit: Kyangjing Ri at 4,400m", url: "https://www.instagram.com/thelonecompass/reel/DM4xMomRuex/", type: "reel" },
    { title: "Manaslu Circuit — Captured on 35mm Film", url: "https://www.instagram.com/himkalaadventure/reel/DLK9i0YvXLk/", type: "reel" },
    { title: "Annapurna Basecamp: Steep Stairs & Breathtaking Views", url: "https://www.instagram.com/back.to.that.moment/reel/DJ2HAhPoeqS/", type: "reel" },
    { title: "Shree Kharka to Tilicho Base Camp", url: "https://www.instagram.com/himkalaadventure/reel/DZzFS3_tL5w/", type: "reel" },
    { title: "Ice Lake — 4,620 Meters", url: "https://www.instagram.com/himkalaadventure/reel/DZuqJtjPGVO/", type: "reel" },
    { title: "Everest Three Passes Trekking", url: "https://www.instagram.com/himkalaadventure/p/Daj6PkTD1Tp/", type: "post" },
  ],
};

export function normalizeSocialMediaContent(value: unknown): SocialMediaContent | null {
  if (!value || typeof value !== "object") return null;
  const candidate = value as Partial<SocialMediaContent>;
  if (
    typeof candidate.youtubeChannelUrl !== "string" ||
    typeof candidate.instagramProfileUrl !== "string" ||
    !Array.isArray(candidate.youtubeVideos) ||
    !Array.isArray(candidate.instagramPosts)
  ) return null;

  const validVideos = candidate.youtubeVideos.every((video) =>
    video && typeof video.title === "string" && typeof video.url === "string",
  );
  const validPosts = candidate.instagramPosts.every((post) =>
    post && typeof post.title === "string" && typeof post.url === "string" && (post.type === "reel" || post.type === "post"),
  );
  if (!validVideos || !validPosts) return null;

  return {
    youtubeChannelUrl: candidate.youtubeChannelUrl,
    instagramProfileUrl: candidate.instagramProfileUrl,
    youtubeVideos: candidate.youtubeVideos,
    instagramPosts: candidate.instagramPosts,
  };
}

export function getYouTubeVideoId(url: string) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "youtu.be") return parsed.pathname.split("/").filter(Boolean)[0] || "";
    if (parsed.pathname.startsWith("/shorts/") || parsed.pathname.startsWith("/embed/")) {
      return parsed.pathname.split("/").filter(Boolean)[1] || "";
    }
    return parsed.searchParams.get("v") || "";
  } catch {
    return "";
  }
}

export function getYouTubeThumbnail(url: string) {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "/images/fallback.jpg";
}
