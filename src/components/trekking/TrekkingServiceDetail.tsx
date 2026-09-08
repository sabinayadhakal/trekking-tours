"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Heart,
  MessageCircle,
  Snowflake,
  Sunrise,
  Tent,
  Utensils,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getTrekkingDurationLabel,
  TrekkingService,
} from "@/lib/trekking-services";

function splitTitle(title: string) {
  const words = title.trim().split(/\s+/);
  const withIndex = words.findIndex((word) => word.toLowerCase() === "with");
  const splitAt = withIndex > 0 ? withIndex : words.length >= 4 ? 2 : 1;
  return [words.slice(0, splitAt).join(" "), words.slice(splitAt).join(" ")];
}

export default function TrekkingServiceDetail({
  initialTrek: trek,
}: {
  initialTrek: TrekkingService;
}) {
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);

  const itinerary = trek.itinerary ?? [];
  const inclusions = trek.inclusions ?? [];
  const exclusions = trek.exclusions ?? [];
  const gallery = trek.gallery ?? [];
  const faqs = trek.faqs ?? [];
  const overview = trek.overview?.length ? trek.overview : [trek.description];
  const trekHighlights = trek.trekHighlights?.length
    ? trek.trekHighlights
    : trek.highlights;
  const seasons = trek.seasons ?? [];
  const [titleStart, titleEnd] = splitTitle(trek.name);

  const toggleDay = (day: number) => {
    setExpandedDays((current) =>
      current.includes(day)
        ? current.filter((item) => item !== day)
        : [...current, day],
    );
  };

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-[#f2ede4]">
      <main>
        <section className="bg-[#f2ede4] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20 lg:py-28">
          <div className="mx-auto max-w-[880px]">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.12em] text-[#cf6943] sm:text-xs">
                  <span className="h-px w-6 bg-[#cf6943] sm:w-8" />
                  <span>{trek.region}</span>
                </div>
                <h1 className="mt-3 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] tracking-[-.03em] text-[#14383b] sm:mt-5 sm:leading-[.95] sm:tracking-[-.045em]">
                  {titleStart}
                  <br />
                  <span className="text-[#cf6943]">{titleEnd}</span>
                </h1>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">
                  {trek.shortDescription || trek.description}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#cf6943] px-3 py-1 text-[10px] font-bold tracking-wide text-[#fff8ee]">
                    {trek.difficulty}
                  </span>
                  {trek.heroBadge && (
                    <span className="rounded-full border border-[#d8cec0]/30 bg-[#f7f2e9] px-3 py-1 text-[10px] font-bold tracking-wide text-[#14383b]">
                      {trek.heroBadge}
                    </span>
                  )}
                  <span className="rounded-full border border-[#d8cec0]/30 bg-[#f7f2e9] px-3 py-1 text-[10px] font-bold tracking-wide text-[#14383b]">
                    {trek.maxAltitude}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-[880px] px-4 sm:px-5 md:px-8">
          <figure className="relative h-[220px] overflow-hidden rounded-lg bg-[#14383b] sm:h-[300px] md:h-[380px] lg:h-[420px]">
            <Image
              src={trek.image}
              alt={trek.mainImageAlt || trek.name}
              fill
              className="object-cover opacity-90"
              priority
              quality={85}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
              <span className="rounded bg-[#e47a4f] px-3 py-1.5 text-[10px] font-bold tracking-wide text-[#fff8ee] sm:px-4 sm:py-2 sm:text-xs">
                Best Season: {trek.bestSeason}
              </span>
            </div>
            <div className="absolute right-4 top-4 flex flex-wrap gap-2">
              <span className="rounded bg-[#14383b]/90 px-3 py-1.5 text-[9px] font-bold tracking-wide text-[#f7f2e9] sm:text-[10px]">
                ${trek.price} / person
              </span>
            </div>
          </figure>
        </div>

        <div className="mx-auto max-w-[880px] px-4 sm:px-5 md:px-8">
          <div className="relative z-10 -mt-6 grid grid-cols-2 gap-4 sm:-mt-8 sm:grid-cols-4">
            {[
              {
                label: "Duration",
                value: getTrekkingDurationLabel(trek, {
                  includeNights: true,
                }),
              },
              { label: "Group Size", value: `${trek.groupSize} people` },
              { label: "Max Altitude", value: trek.maxAltitude },
              { label: "Difficulty", value: trek.difficulty },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-[#d8cec0]/30 bg-[#f7f2e9] p-3 text-center shadow-sm"
              >
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#66706d]">
                  {stat.label}
                </p>
                <p className="text-sm font-bold text-[#14383b]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="bg-[#f2ede4] px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <article className="prose prose-sm max-w-none sm:prose-base">
              {overview.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-relaxed text-[#556363] sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </article>
            {trek.importantBanner && (
              <div className="mt-6 rounded border-l-4 border-amber-400 bg-amber-50 p-4 text-sm text-amber-800 sm:p-5">
                <AlertTriangle
                  className="mr-2 inline h-4 w-4"
                  aria-hidden="true"
                />
                <strong>Important:</strong> {trek.importantBanner}
              </div>
            )}
          </div>
        </section>

        {trekHighlights.length > 0 && (
          <section className="bg-[#e4d8c8] px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="mb-6 font-serif text-xl text-[#14383b] sm:text-2xl md:text-3xl">
                Trek Highlights
              </h2>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {trekHighlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-[#14383b] sm:text-base"
                  >
                    <span className="mt-1 text-[#cf6943]">✦</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {seasons.length > 0 && (
          <section className="bg-[#f2ede4] px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="mb-6 font-serif text-xl text-[#14383b] sm:text-2xl md:text-3xl">
                Best Time to Trek
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {seasons.map((season, index) => {
                  const Icon =
                    index === 0 ? Sunrise : index === 1 ? Snowflake : Calendar;
                  return (
                    <div
                      key={season.id || index}
                      className="rounded-lg border border-[#d8cec0]/30 bg-[#f7f2e9] p-5"
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <Icon
                          className="h-5 w-5 text-[#cf6943]"
                          aria-hidden="true"
                        />
                        <h3 className="font-semibold text-[#14383b]">
                          {season.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-[#556363]">
                        {season.description}
                      </p>
                      {season.badge && (
                        <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold tracking-wide text-green-700">
                          {season.badge}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {itinerary.length > 0 && (
          <section className="bg-[#e4d8c8] px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-serif text-xl text-[#14383b] sm:text-2xl md:text-3xl">
                  Day-by-Day Itinerary
                </h2>
                <button
                  className="text-xs font-semibold text-[#cf6943] hover:underline"
                  onClick={() =>
                    setExpandedDays(
                      expandedDays.length === itinerary.length
                        ? []
                        : itinerary.map((day) => day.day),
                    )
                  }
                >
                  {expandedDays.length === itinerary.length
                    ? "Collapse All"
                    : "Expand All"}
                </button>
              </div>
              <div className="space-y-2">
                {itinerary.map((day) => {
                  const expanded = expandedDays.includes(day.day);
                  return (
                    <div
                      key={day.id || day.day}
                      className="overflow-hidden rounded-lg border border-[#d8cec0]/30 bg-[#f7f2e9]"
                    >
                      <button
                        className="flex w-full items-center gap-4 p-4 text-left"
                        onClick={() => toggleDay(day.day)}
                      >
                        <div className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg bg-[#cf6943]/10 sm:h-12 sm:w-12">
                          <span className="text-[8px] font-bold uppercase text-[#cf6943]">
                            Day
                          </span>
                          <span className="text-base font-bold leading-none text-[#14383b] sm:text-lg">
                            {day.day}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium text-[#14383b] sm:text-base">
                            {day.title}
                          </span>
                          <div className="mt-0.5 flex flex-wrap gap-2 text-[10px] text-[#66706d] sm:text-xs">
                            <span>{day.altitude}</span>
                            <span>·</span>
                            <span>{day.distance}</span>
                          </div>
                        </div>
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 text-[#66706d] transition-transform ${expanded ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                      {expanded && (
                        <div className="px-4 pb-4 pt-0">
                          <p className="mb-4 text-sm leading-relaxed text-[#556363]">
                            {day.description}
                          </p>
                          <div className="mb-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                            <div className="flex items-center gap-2 rounded-lg bg-[#f2ede4] p-2 text-xs text-[#556363]">
                              <Tent
                                className="h-3 w-3 text-[#cf6943]"
                                aria-hidden="true"
                              />
                              <span>
                                <strong>Overnight:</strong> {day.overnight}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 rounded-lg bg-[#f2ede4] p-2 text-xs text-[#556363]">
                              <Utensils
                                className="h-3 w-3 text-[#cf6943]"
                                aria-hidden="true"
                              />
                              <span>
                                <strong>Meals:</strong> {day.meals}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {day.highlights.map((highlight, index) => (
                              <span
                                key={index}
                                className="rounded bg-[#cf6943]/10 px-2 py-0.5 text-[10px] font-medium text-[#cf6943]"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {(inclusions.length > 0 || exclusions.length > 0) && (
          <section
            className="bg-[#f2ede4] px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:py-20"
            id="includes"
          >
            <div className="mx-auto max-w-[880px]">
              <h2 className="mb-6 font-serif text-xl text-[#14383b] sm:text-2xl md:text-3xl">
                What's Included
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <ListCard title="Cost Includes" items={inclusions} included />
                <ListCard title="Cost Excludes" items={exclusions} />
              </div>
            </div>
          </section>
        )}

        {gallery.length > 0 && (
          <section
            className="bg-[#e4d8c8] px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:py-20"
            id="gallery"
          >
            <div className="mx-auto max-w-[880px]">
              <h2 className="mb-3 font-serif text-xl text-[#14383b] sm:text-2xl md:text-3xl">
                Photo Gallery
              </h2>
              {trek.galleryIntro && (
                <p className="mb-6 text-sm text-[#556363] sm:text-base">
                  {trek.galleryIntro}
                </p>
              )}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {gallery.map((image, index) => (
                  <div
                    key={image.id || index}
                    className="relative h-28 overflow-hidden rounded-lg bg-[#d8cec0] sm:h-40"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt || image.caption || trek.name}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/60 via-transparent to-transparent opacity-0 transition-opacity hover:opacity-100">
                      <div className="absolute bottom-0 left-0 right-0 p-2">
                        <p className="truncate text-[10px] font-medium text-white">
                          {image.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {faqs.length > 0 && (
          <section
            className="bg-[#f2ede4] px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:py-20"
            id="faq"
          >
            <div className="mx-auto max-w-[880px]">
              <h2 className="mb-6 font-serif text-xl text-[#14383b] sm:text-2xl md:text-3xl">
                Frequently Asked Questions
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {faqs.map((faq, index) => (
                  <div key={faq.id || index}>
                    <h4 className="mb-1 text-sm font-semibold text-[#14383b]">
                      {faq.question}
                    </h4>
                    <p className="text-sm leading-relaxed text-[#556363]">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-[#e4d8c8] px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:py-20">
          <div className="mx-auto max-w-[880px] text-center">
            <h2 className="mb-3 font-serif text-xl text-[#14383b] sm:text-2xl md:text-3xl">
              {trek.ctaTitle || `Ready to Trek ${trek.name}?`}
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-sm text-[#556363] sm:text-base">
              {trek.ctaDescription ||
                `Book your ${trek.name} today and experience one of Nepal's most spectacular treks.`}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href={`/contact?trek=${encodeURIComponent(trek.name)}`}>
                <Button className="rounded-full bg-[#cf6943] px-6 py-2 text-sm font-bold text-white hover:bg-[#b85a38]">
                  <Heart className="mr-2 h-4 w-4" aria-hidden="true" />
                  Book This Trek
                </Button>
              </Link>
              <a
                href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about the ${trek.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <Button className="rounded-full bg-green-600 px-6 py-2 text-sm font-bold text-white hover:bg-green-700">
                  <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                  WhatsApp Now
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ListCard({
  title,
  items,
  included = false,
}: {
  title: string;
  items: string[];
  included?: boolean;
}) {
  const Icon = included ? CheckCircle2 : XCircle;
  const color = included ? "text-green-600" : "text-red-500";
  return (
    <div className="rounded-lg border border-[#d8cec0]/30 bg-[#f7f2e9] p-5">
      <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#14383b]">
        <Icon className={`h-4 w-4 ${color}`} aria-hidden="true" />
        {title}
      </h3>
      <ul className="space-y-1.5">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-sm text-[#556363]"
          >
            <Icon
              className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${color}`}
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
