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
  MapPin,
  MessageCircle,
  Snowflake,
  Sunrise,
  Tent,
  Utensils,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DestinationCountry,
  MANAGED_SERVICE_COLLECTIONS,
  ManagedService,
  ManagedServiceCollection,
  ManagedServiceInfoTable,
} from "@/lib/managed-services";

function ListCard({
  title,
  items,
  included,
}: {
  title: string;
  items: string[];
  included?: boolean;
}) {
  const Icon = included ? CheckCircle2 : XCircle;
  return (
    <div className="rounded-lg border border-[#d8cec0]/30 bg-[#f7f2e9] p-5">
      <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#14383b]">
        <Icon
          className={`h-4 w-4 ${included ? "text-green-600" : "text-red-500"}`}
        />
        {title}
      </h3>
      <ul className="space-y-1.5">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-sm text-[#556363]"
          >
            <Icon
              className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${included ? "text-green-600" : "text-red-500"}`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InformationTableSections({
  tables,
}: {
  tables: ManagedServiceInfoTable[];
}) {
  return tables.map((table, tableIndex) => (
    <section
      key={table.id}
      className={`${tableIndex % 2 ? "bg-[#f2ede4]" : "bg-[#e4d8c8]"} px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:py-20`}
    >
      <div className="mx-auto max-w-[880px]">
        <h2 className="mb-6 font-serif text-xl text-[#14383b] sm:text-2xl md:text-3xl">
          {table.title}
        </h2>
        <div className="hidden overflow-hidden rounded-lg border border-[#d8cec0]/50 bg-[#f7f2e9] sm:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#14383b] text-[#f7f2e9]">
              <tr>
                {table.columns.map((column, index) => (
                  <th
                    key={index}
                    className="px-4 py-3 font-semibold capitalize"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row) => (
                <tr key={row.id} className="border-t border-[#d8cec0]/50">
                  {table.columns.map((_, index) => (
                    <td
                      key={index}
                      className="px-4 py-3 align-top text-[#556363] first:font-semibold first:text-[#14383b]"
                    >
                      {row.values[index]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid gap-3 sm:hidden">
          {table.rows.map((row) => (
            <article
              key={row.id}
              className="rounded-lg border border-[#d8cec0]/50 bg-[#f7f2e9] p-4"
            >
              {table.columns.map((column, index) => (
                <div key={index} className="mb-2 last:mb-0">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#cf6943]">
                    {column}
                  </span>
                  <span className="text-sm text-[#556363]">
                    {row.values[index]}
                  </span>
                </div>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  ));
}

export default function ManagedServiceDetail({
  collection,
  destination,
  initialService: service,
}: {
  collection: ManagedServiceCollection;
  destination?: DestinationCountry;
  initialService: ManagedService;
}) {
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);

  const overview = service.overview || [];
  const highlights = service.serviceHighlights || service.highlights || [];
  const seasons = service.seasons || [];
  const itinerary = service.itinerary || [];
  const gallery = service.gallery || [];
  const faqs = service.faqs || [];
  const informationTables = service.informationTables || [];
  const formattedPrice =
    typeof service.price === "number"
      ? `$${service.price.toLocaleString("en-US")}`
      : service.price;
  const beforeSeasonTables = informationTables.filter(
    (table) => table.placement === "before-seasons",
  );
  const beforeItineraryTables = informationTables.filter(
    (table) => table.placement !== "before-seasons",
  );
  const hiking = collection === "dayHikings";
  const eyebrow =
    service.heroEyebrow ||
    (
      {
        dayHikings: "Day Hiking",
        daySightseeings: "Day Sightseeing",
        mountainFlights: "Mountain Flight & Helicopter Trip",
        jungleSafaris: "Jungle Safari",
        multiDayTours: "Multi-Day Cultural Tour",
        freeTours: "Free Tour",
        destinationTours: "Bhutan & Tibet Tour",
      } as const
    )[collection];
  const highlightsTitle =
    collection === "dayHikings"
      ? "Hiking Highlights"
      : collection === "mountainFlights"
        ? "Trip Highlights"
        : collection === "jungleSafaris"
          ? "Safari Highlights"
          : "Tour Highlights";
  const seasonsTitle =
    collection === "dayHikings"
      ? "Best Time for Hiking"
      : collection === "mountainFlights"
        ? "Best Time for Flight"
        : collection === "jungleSafaris"
          ? "Best Time for Safari"
          : "Best Time to Visit";
  const toggleDay = (day: number) =>
    setExpandedDays((current) =>
      current.includes(day)
        ? current.filter((item) => item !== day)
        : [...current, day],
    );

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-[#f2ede4]">
      <main>
        <section className="bg-[#f2ede4] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20 lg:py-28">
          <div className="mx-auto max-w-[880px]">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.12em] text-[#cf6943] sm:text-xs">
                  <span className="h-px w-6 bg-[#cf6943] sm:w-8" />
                  <span>{eyebrow}</span>
                </div>
                <h1 className="mt-3 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] tracking-[-.03em] text-[#14383b] sm:mt-5 sm:leading-[.95] sm:tracking-[-.045em]">
                  {service.name}
                </h1>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">
                  {service.shortDescription || service.description}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#cf6943] px-3 py-1 text-[10px] font-bold tracking-wide text-[#fff8ee]">
                    {service.difficulty}
                  </span>
                  {(service.heroBadges || []).slice(1).map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-[#d8cec0]/30 bg-[#f7f2e9] px-3 py-1 text-[10px] font-bold tracking-wide text-[#14383b]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mx-auto max-w-[880px] px-4 sm:px-5 md:px-8">
          <figure className="relative h-[220px] overflow-hidden rounded-lg bg-[#14383b] sm:h-[300px] md:h-[380px] lg:h-[420px]">
            <Image
              src={service.image}
              alt={service.imageAlt || service.name}
              fill
              className="object-cover opacity-90"
              priority
              quality={85}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-6">
              <span className="rounded bg-[#e47a4f] px-4 py-2 text-[10px] font-bold tracking-wide text-[#fff8ee] sm:text-xs">
                Best Season: {service.bestSeason}
              </span>
            </div>
            <div className="absolute right-4 top-4">
              <span className="rounded bg-[#14383b]/90 px-3 py-1.5 text-[10px] font-bold text-[#f7f2e9]">
                {formattedPrice} / person
              </span>
            </div>
          </figure>
        </div>
        <div className="mx-auto max-w-[880px] px-4 sm:px-5 md:px-8">
          <div className="relative z-10 -mt-6 grid grid-cols-2 gap-4 sm:-mt-8 sm:grid-cols-4">
            {(service.quickStats?.length
              ? service.quickStats
              : [
                  { label: "Duration", value: service.duration },
                  {
                    label: "Group Size",
                    value: `${service.groupSize} people`,
                  },
                  {
                    label: hiking ? "Region" : "Category",
                    value: hiking
                      ? service.region
                      : service.category || service.region,
                  },
                  { label: "Difficulty", value: service.difficulty },
                ]
            )
              .slice(0, 4)
              .map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-[#d8cec0]/30 bg-[#f7f2e9] p-3 text-center shadow-sm"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#66706d]">
                    {stat.label}
                  </p>
                  <p className="text-sm font-bold text-[#14383b]">
                    {stat.value}
                  </p>
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
            {service.importantBanner && (
              <div className="mt-6 rounded border-l-4 border-amber-400 bg-amber-50 p-4 text-sm text-amber-800 sm:p-5">
                <AlertTriangle className="mr-2 inline h-4 w-4" />
                <strong>Important:</strong> {service.importantBanner}
              </div>
            )}
          </div>
        </section>
        {highlights.length > 0 && (
          <section className="bg-[#e4d8c8] px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="mb-6 font-serif text-xl text-[#14383b] sm:text-2xl md:text-3xl">
                {highlightsTitle}
              </h2>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {highlights.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-[#14383b] sm:text-base"
                  >
                    <span className="mt-1 text-[#cf6943]">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
        <InformationTableSections tables={beforeSeasonTables} />
        {seasons.length > 0 && (
          <section className="bg-[#f2ede4] px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="mb-6 font-serif text-xl text-[#14383b] sm:text-2xl md:text-3xl">
                {seasonsTitle}
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {seasons.map((season, index) => {
                  const Icon =
                    index === 0 ? Sunrise : index === 1 ? Calendar : Snowflake;
                  return (
                    <div
                      key={season.id}
                      className="rounded-lg border border-[#d8cec0]/30 bg-[#f7f2e9] p-5"
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <Icon className="h-5 w-5 text-[#cf6943]" />
                        <h3 className="font-semibold text-[#14383b]">
                          {season.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-[#556363]">
                        {season.description}
                      </p>
                      {season.badge && (
                        <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold text-green-700">
                          {season.badge}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
              {service.seasonNote && (
                <p className="mt-3 text-[10px] text-[#66706d]">
                  {service.seasonNote}
                </p>
              )}
            </div>
          </section>
        )}
        {(service.contentSections || []).map((section, index) => (
          <section
            key={section.id}
            className={`${index % 2 ? "bg-[#e4d8c8]" : "bg-[#f2ede4]"} px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:py-20`}
          >
            <div className="mx-auto max-w-[880px]">
              <div
                className={`rounded-lg border-l-4 p-6 ${section.tone === "blue" ? "border-blue-400 bg-blue-50 text-blue-800" : section.tone === "amber" ? "border-amber-400 bg-amber-50 text-amber-800" : "border-[#cf6943] bg-[#f7f2e9] text-[#14383b]"}`}
              >
                <h3 className="mb-3 text-sm font-bold">{section.title}</h3>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="mb-3 text-sm leading-relaxed last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.items.length > 0 && (
                  <ul className="grid gap-2 text-sm sm:grid-cols-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>• {item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>
        ))}
        {beforeItineraryTables.map((table, tableIndex) => (
          <section
            key={table.id}
            className={`${tableIndex % 2 ? "bg-[#f2ede4]" : "bg-[#e4d8c8]"} px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:py-20`}
          >
            <div className="mx-auto max-w-[880px]">
              <h2 className="mb-6 font-serif text-xl text-[#14383b] sm:text-2xl md:text-3xl">
                {table.title}
              </h2>
              <div className="hidden overflow-hidden rounded-lg border border-[#d8cec0]/50 bg-[#f7f2e9] sm:block">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#14383b] text-[#f7f2e9]">
                    <tr>
                      {table.columns.map((column, index) => (
                        <th
                          key={index}
                          className="px-4 py-3 font-semibold capitalize"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row) => (
                      <tr key={row.id} className="border-t border-[#d8cec0]/50">
                        {table.columns.map((_, index) => (
                          <td
                            key={index}
                            className="px-4 py-3 align-top text-[#556363] first:font-semibold first:text-[#14383b]"
                          >
                            {row.values[index]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="grid gap-3 sm:hidden">
                {table.rows.map((row) => (
                  <article
                    key={row.id}
                    className="rounded-lg border border-[#d8cec0]/50 bg-[#f7f2e9] p-4"
                  >
                    {table.columns.map((column, index) => (
                      <div key={index} className="mb-2 last:mb-0">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-[#cf6943]">
                          {column}
                        </span>
                        <span className="text-sm text-[#556363]">
                          {row.values[index]}
                        </span>
                      </div>
                    ))}
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}
        {itinerary.length > 0 && (
          <section className="bg-[#e4d8c8] px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-serif text-xl text-[#14383b] sm:text-2xl md:text-3xl">
                  {hiking ? "Hiking Itinerary" : "Day-by-Day Itinerary"}
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
                      key={day.id}
                      className="overflow-hidden rounded-lg border border-[#d8cec0]/30 bg-[#f7f2e9]"
                    >
                      <button
                        className="flex w-full items-center gap-4 p-4 text-left"
                        onClick={() => toggleDay(day.day)}
                      >
                        <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg bg-[#cf6943]/10">
                          <span className="text-[8px] font-bold uppercase text-[#cf6943]">
                            Day
                          </span>
                          <span className="text-lg font-bold leading-none text-[#14383b]">
                            {day.day}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium text-[#14383b] sm:text-base">
                            {day.title}
                          </span>
                          <div className="mt-0.5 flex gap-2 text-xs text-[#66706d]">
                            <span>{day.altitude}</span>
                            <span>·</span>
                            <span>{day.distance}</span>
                          </div>
                        </div>
                        <ChevronDown
                          className={`h-4 w-4 text-[#66706d] transition-transform ${expanded ? "rotate-180" : ""}`}
                        />
                      </button>
                      {expanded && (
                        <div className="px-4 pb-4">
                          <p className="mb-4 text-sm leading-relaxed text-[#556363]">
                            {day.description}
                          </p>
                          <div className="mb-3 grid gap-2 sm:grid-cols-2">
                            <div className="flex items-center gap-2 rounded-lg bg-[#f2ede4] p-2 text-xs text-[#556363]">
                              {hiking ? (
                                <MapPin className="h-3 w-3 text-[#cf6943]" />
                              ) : (
                                <Tent className="h-3 w-3 text-[#cf6943]" />
                              )}
                              <span>
                                <strong>
                                  {hiking ? "Meeting point" : "Overnight"}:
                                </strong>{" "}
                                {day.overnight}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 rounded-lg bg-[#f2ede4] p-2 text-xs text-[#556363]">
                              <Utensils className="h-3 w-3 text-[#cf6943]" />
                              <span>
                                <strong>Meals:</strong> {day.meals}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {day.highlights.map((item, index) => (
                              <span
                                key={index}
                                className="rounded bg-[#cf6943]/10 px-2 py-0.5 text-[10px] font-medium text-[#cf6943]"
                              >
                                {item}
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
        {((service.inclusions?.length || 0) > 0 ||
          (service.exclusions?.length || 0) > 0) && (
          <section
            className="bg-[#f2ede4] px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:py-20"
            id="includes"
          >
            <div className="mx-auto max-w-[880px]">
              <h2 className="mb-6 font-serif text-xl text-[#14383b] sm:text-2xl md:text-3xl">
                What&apos;s Included
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <ListCard
                  title="Cost Includes"
                  items={service.inclusions || []}
                  included
                />
                <ListCard
                  title="Cost Excludes"
                  items={service.exclusions || []}
                />
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
              {service.galleryIntro && (
                <p className="mb-6 text-sm text-[#556363] sm:text-base">
                  {service.galleryIntro}
                </p>
              )}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {gallery.map((image) => (
                  <div
                    key={image.id}
                    className="relative h-28 overflow-hidden rounded-lg bg-[#d8cec0] sm:h-40"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt || image.caption}
                      fill
                      className="object-cover"
                      sizes="(max-width:640px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/60 via-transparent to-transparent opacity-0 transition-opacity hover:opacity-100">
                      <p className="absolute bottom-2 left-2 right-2 truncate text-[10px] font-medium text-white">
                        {image.caption}
                      </p>
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
              <div className="grid gap-6 sm:grid-cols-2">
                {faqs.map((faq) => (
                  <div key={faq.id}>
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
              {service.ctaTitle || `Ready for ${service.name}?`}
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-sm text-[#556363] sm:text-base">
              {service.ctaDescription ||
                `Book ${service.name} today with Himkala Adventure.`}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href={`/contact?trek=${encodeURIComponent(service.name)}`}>
                <Button className="rounded-full bg-[#cf6943] px-6 py-2 text-sm font-bold text-white hover:bg-[#b85a38]">
                  <Heart className="mr-2 h-4 w-4" />
                  Book This {hiking ? "Hike" : "Tour"}
                </Button>
              </Link>
              <a
                href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about ${service.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <Button className="rounded-full bg-green-600 px-6 py-2 text-sm font-bold text-white hover:bg-green-700">
                  <MessageCircle className="mr-2 h-4 w-4" />
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
