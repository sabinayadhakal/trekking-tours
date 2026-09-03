export type TravelerStory = {
  name: string;
  country: string;
  text: string;
  trek: string;
  trekLink: string;
  rating: number;
};

export type TravelerStoriesContent = {
  tripadvisorUrl: string;
  stories: TravelerStory[];
};

export const TRAVELER_STORIES_UPDATED_EVENT = "himkala:traveler-stories-updated";

export const TRAVELER_STORIES_EMPTY: TravelerStoriesContent = {
  tripadvisorUrl: "",
  stories: [],
};

/** Permanent public fallback used whenever the Traveler Stories document cannot be loaded. */
export const TRAVELER_STORIES_FALLBACK: TravelerStoriesContent = {
  tripadvisorUrl: "https://www.tripadvisor.com/Attraction_Review-g293890-d8417075-Reviews-Himkala_Adventure-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html",
  stories: [
    { name: "Carole Munanoa", country: "France", text: "What truly set this tour apart was the way Shiva explained the coexistence of Hinduism and Buddhism in Kathmandu. He carefully unpacked the history, symbols, and everyday practices of both faiths.", trek: "Kathmandu City Tour", trekLink: "/nepal-travel-packages", rating: 5 },
    { name: "Arian Asgari", country: "Iran", text: "The Muldai trek is an underrated gem... What really made it special, though, were the people. Shiva and his son are just fantastic; they were so much more than guides, and the whole group felt like a family.", trek: "Muldai Trek", trekLink: "/services/trekking", rating: 5 },
    { name: "Sandra Andermatt", country: "Switzerland", text: "If you're in Kathmandu, do not miss out on the incredible free walking tour... It takes you off the beaten path, offering a chance to explore hidden gems and unusual places that most tourists never get to see.", trek: "Free Walking Tour", trekLink: "/nepal-travel-packages", rating: 5 },
    { name: "Anna Michelle Goksøyr", country: "Norway", text: "We did the Manaslu Circuit trek and it has been an amazing experience... The guides treated us like princesses, picked flowers for us, and have become friends for life. I deeply recommend traveling with Himkala Adventures.", trek: "Manaslu Circuit", trekLink: "/services/trekking/manaslu-circuit-trek", rating: 5 },
    { name: "Aránzazu Gs", country: "Spain", text: "Shiva is a professional, passionate, friendly, empathetic and excellent guide... he made me discover the Nepalese culture and their way of life, food, superstitions, customs... He transmits good vibes.", trek: "Nepal Cultural Tour", trekLink: "/nepal-travel-packages", rating: 5 },
    { name: "Krystsina Babets", country: "Belarus", text: "I did Annapurna Base Camp trekking... It was my third trekking experience with Himkala Adventure. Shiva is a very caring, knowledgeable guide and genuinely honest person. You will really have a great experience!", trek: "Annapurna Base Camp", trekLink: "/services/trekking/annapurna-base-camp-trek", rating: 5 },
    { name: "Novitri Esna", country: "Indonesia", text: "I'm a beginner trekker, but Shiva made the Langtang trek feel possible. He was so patient and always checked in... He pointed out langurs, yaks, and special places I would've missed. I felt supported the whole way.", trek: "Langtang Valley", trekLink: "/services/trekking/langtang-valley-trek", rating: 5 },
    { name: "Cangiamila Arianna", country: "Italy", text: "Nepal is a country rich in history and culture and Shiva is the best person you could ever ask to take you through all of that... Another great thing about Shiva is that he devolves part of his earnings towards the rebuilding of his village.", trek: "Kathmandu City Tour", trekLink: "/nepal-travel-packages", rating: 5 },
    { name: "Sébastien Schillé", country: "UK", text: "I had an amazing and unforgettable experience with Himkala Adventure!... I came to Shiva, Himkala Adventure's director, to ask him what he thought was the best next step. Before I knew it, he had come up with a complete itinerary... Shiva was an excellent guide! He is easy going, kind and very knowledgeable.", trek: "Valley Fringe Trek", trekLink: "/services/trekking", rating: 5 },
    { name: "Suffel Schatz", country: "Germany", text: "We did a 7day hiking tour with Himkala adventures... We had an amazing time, great conversations with our guide Sabinaya about Nepal's culture, history, everyday life, etc. Personal yet always professional. Thanks for that outstanding experience which we will never forget.", trek: "Ghorepani Poonhill Trek", trekLink: "/services/trekking/poon-hill-trek", rating: 5 },
    { name: "Nina Dupuy", country: "France", text: "I had the incredible opportunity to do the Everest Base Camp with this company... The organization was impeccable. My guide, Khadga, was extremely attentive and helpful... Reaching Base Camp was a triumphant moment. I will 100% do it again!", trek: "Everest Base Camp", trekLink: "/services/trekking/everest-base-camp-trek", rating: 5 },
    { name: "Dorota Grabek", country: "Spain", text: "Himkala Adventure organized for me and my friends 10 days trekking to Annapurna Base Camp. Our guide was very supportive and professional, he afforded us unforgettable and safe Himalayan trekking!", trek: "Annapurna Base Camp", trekLink: "/services/trekking/annapurna-base-camp-trek", rating: 5 },
  ],
};

export function normalizeTravelerStoriesContent(value: unknown): TravelerStoriesContent | null {
  if (!value || typeof value !== "object") return null;
  const candidate = value as Partial<TravelerStoriesContent>;
  if (typeof candidate.tripadvisorUrl !== "string" || !Array.isArray(candidate.stories)) return null;

  const valid = candidate.stories.every((story) =>
    story &&
    typeof story.name === "string" &&
    typeof story.country === "string" &&
    typeof story.text === "string" &&
    typeof story.trek === "string" &&
    typeof story.trekLink === "string" &&
    typeof story.rating === "number",
  );
  if (!valid) return null;

  return {
    tripadvisorUrl: candidate.tripadvisorUrl,
    stories: candidate.stories.map((story) => ({
      ...story,
      rating: Math.min(5, Math.max(1, Math.round(story.rating))),
    })),
  };
}
