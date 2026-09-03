"use client";

import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  ChevronDown,
  ChevronUp,
  Copy,
  ImagePlus,
  Plus,
  Save,
  Star,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import ImageKitUpload from "@/components/admin/ImageKitUpload";
import {
  loadManagedServices,
  saveManagedServices,
} from "@/lib/firebase/managed-services-repository";
import {
  blankManagedService,
  createManagedServiceId,
  managedServicePublicLink,
  MANAGED_SERVICE_COLLECTIONS,
  ManagedService,
  ManagedServiceCollection,
  ManagedServiceContentSection,
  ManagedServiceFaq,
  ManagedServiceGalleryImage,
  ManagedServiceInfoTable,
  ManagedServiceItineraryDay,
  ManagedServiceSeason,
  ManagedServiceStat,
} from "@/lib/managed-services";

const control =
  "mt-1.5 w-full rounded-md border border-[#d8cec0] bg-white px-3 py-2.5 text-sm font-normal text-[#14383b] outline-none focus:border-[#cf6943] focus:ring-2 focus:ring-[#cf6943]/20";
const uid = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm font-semibold text-[#14383b]">
      {label}
      {children}
    </label>
  );
}
function Section({
  id,
  title,
  help,
  children,
}: {
  id: string;
  title: string;
  help?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-xl border border-[#d8cec0] bg-[#f7f2e9] p-5 sm:p-7 lg:scroll-mt-6"
    >
      <h2 className="font-serif text-2xl">{title}</h2>
      {help && <p className="mt-1 text-sm leading-6 text-[#66706d]">{help}</p>}
      <div className="mt-5">{children}</div>
    </section>
  );
}
function move<T>(items: T[], index: number, direction: -1 | 1) {
  const target = index + direction;
  if (target < 0 || target >= items.length) return items;
  const next = [...items];
  [next[index], next[target]] = [next[target], next[index]];
  return next;
}
function Actions({
  index,
  count,
  onMove,
  onDelete,
}: {
  index: number;
  count: number;
  onMove: (direction: -1 | 1) => void;
  onDelete: () => void;
}) {
  return (
    <div className="flex shrink-0 gap-1">
      <button
        type="button"
        disabled={index === 0}
        onClick={() => onMove(-1)}
        className="inline-flex h-9 w-9 items-center justify-center rounded hover:bg-[#e4d8c8] disabled:opacity-20"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
      <button
        type="button"
        disabled={index === count - 1}
        onClick={() => onMove(1)}
        className="inline-flex h-9 w-9 items-center justify-center rounded hover:bg-[#e4d8c8] disabled:opacity-20"
      >
        <ArrowDown className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={onDelete}
        className="inline-flex h-9 w-9 items-center justify-center rounded text-red-600 hover:bg-red-50"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}

function TextList({
  value,
  onChange,
  placeholder,
  multiline = false,
}: {
  value: string[];
  onChange: (value: string[]) => void;
  placeholder: string;
  multiline?: boolean;
}) {
  return (
    <div>
      <div className="space-y-2">
        {value.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="mt-4 text-xs font-bold text-[#cf6943]">
              {index + 1}
            </span>
            {multiline ? (
              <textarea
                rows={4}
                value={item}
                onChange={(event) =>
                  onChange(
                    value.map((candidate, itemIndex) =>
                      itemIndex === index ? event.target.value : candidate,
                    ),
                  )
                }
                placeholder={placeholder}
                className={control}
              />
            ) : (
              <input
                value={item}
                onChange={(event) =>
                  onChange(
                    value.map((candidate, itemIndex) =>
                      itemIndex === index ? event.target.value : candidate,
                    ),
                  )
                }
                placeholder={placeholder}
                className={control}
              />
            )}
            <Actions
              index={index}
              count={value.length}
              onMove={(direction) => onChange(move(value, index, direction))}
              onDelete={() =>
                onChange(value.filter((_, itemIndex) => itemIndex !== index))
              }
            />
          </div>
        ))}
      </div>
      <Button
        type="button"
        variant="outline"
        onClick={() => onChange([...value, ""])}
        className="mt-3 border-[#cf6943] text-[#cf6943]"
      >
        <Plus className="mr-2 h-4 w-4" />
        Add item
      </Button>
    </div>
  );
}

function Stats({
  value,
  onChange,
}: {
  value: ManagedServiceStat[];
  onChange: (value: ManagedServiceStat[]) => void;
}) {
  const update = (index: number, patch: Partial<ManagedServiceStat>) =>
    onChange(
      value.map((item, itemIndex) =>
        itemIndex === index ? { ...item, ...patch } : item,
      ),
    );
  return (
    <div className="space-y-3">
      {value.map((stat, index) => (
        <div
          key={index}
          className="grid gap-3 rounded-lg border border-[#d8cec0] bg-white p-4 sm:grid-cols-[1fr_1fr_auto]"
        >
          <Field label="Label">
            <input
              value={stat.label}
              onChange={(event) => update(index, { label: event.target.value })}
              placeholder="Duration"
              className={control}
            />
          </Field>
          <Field label="Value">
            <input
              value={stat.value}
              onChange={(event) => update(index, { value: event.target.value })}
              placeholder="6 Days / 5 Nights"
              className={control}
            />
          </Field>
          <Actions
            index={index}
            count={value.length}
            onMove={(direction) => onChange(move(value, index, direction))}
            onDelete={() =>
              onChange(value.filter((_, itemIndex) => itemIndex !== index))
            }
          />
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        onClick={() => onChange([...value, { label: "", value: "" }])}
        className="border-[#cf6943] text-[#cf6943]"
      >
        <Plus className="mr-2 h-4 w-4" />
        Add stat
      </Button>
    </div>
  );
}

function Seasons({
  value,
  onChange,
}: {
  value: ManagedServiceSeason[];
  onChange: (value: ManagedServiceSeason[]) => void;
}) {
  const update = (index: number, patch: Partial<ManagedServiceSeason>) =>
    onChange(
      value.map((item, itemIndex) =>
        itemIndex === index ? { ...item, ...patch } : item,
      ),
    );
  return (
    <div className="space-y-4">
      {value.map((season, index) => (
        <article
          key={season.id}
          className="rounded-lg border border-[#d8cec0] bg-white p-4"
        >
          <div className="flex items-center justify-between">
            <strong>Season {index + 1}</strong>
            <Actions
              index={index}
              count={value.length}
              onMove={(direction) => onChange(move(value, index, direction))}
              onDelete={() =>
                onChange(value.filter((_, itemIndex) => itemIndex !== index))
              }
            />
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <Field label="Title">
              <input
                value={season.title}
                onChange={(event) =>
                  update(index, { title: event.target.value })
                }
                className={control}
              />
            </Field>
            <Field label="Badge">
              <input
                value={season.badge}
                onChange={(event) =>
                  update(index, { badge: event.target.value })
                }
                className={control}
              />
            </Field>
          </div>
          <Field label="Description">
            <textarea
              rows={3}
              value={season.description}
              onChange={(event) =>
                update(index, { description: event.target.value })
              }
              className={control}
            />
          </Field>
        </article>
      ))}
      <Button
        type="button"
        variant="outline"
        onClick={() =>
          onChange([
            ...value,
            { id: uid(), title: "", description: "", badge: "" },
          ])
        }
        className="border-[#cf6943] text-[#cf6943]"
      >
        <Plus className="mr-2 h-4 w-4" />
        Add season
      </Button>
    </div>
  );
}

function ContentSections({
  value,
  onChange,
}: {
  value: ManagedServiceContentSection[];
  onChange: (value: ManagedServiceContentSection[]) => void;
}) {
  const [open, setOpen] = React.useState<string | null>(value[0]?.id || null);
  const update = (
    index: number,
    patch: Partial<ManagedServiceContentSection>,
  ) =>
    onChange(
      value.map((item, itemIndex) =>
        itemIndex === index ? { ...item, ...patch } : item,
      ),
    );
  return (
    <div className="space-y-3">
      {value.map((section, index) => (
        <article
          key={section.id}
          className="overflow-hidden rounded-lg border border-[#d8cec0] bg-white"
        >
          <div className="flex items-center gap-2 p-3">
            <button
              type="button"
              onClick={() => setOpen(open === section.id ? null : section.id)}
              className="flex min-w-0 flex-1 items-center justify-between text-left"
            >
              <strong className="truncate">
                {section.title || `Content section ${index + 1}`}
              </strong>
              {open === section.id ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            <Actions
              index={index}
              count={value.length}
              onMove={(direction) => onChange(move(value, index, direction))}
              onDelete={() =>
                onChange(value.filter((_, itemIndex) => itemIndex !== index))
              }
            />
          </div>
          {open === section.id && (
            <div className="border-t border-[#d8cec0] bg-[#f7f2e9]/60 p-4">
              <div className="grid gap-3 sm:grid-cols-[1fr_180px]">
                <Field label="Section title">
                  <input
                    value={section.title}
                    onChange={(event) =>
                      update(index, { title: event.target.value })
                    }
                    className={control}
                  />
                </Field>
                <Field label="Visual tone">
                  <select
                    value={section.tone}
                    onChange={(event) =>
                      update(index, {
                        tone: event.target
                          .value as ManagedServiceContentSection["tone"],
                      })
                    }
                    className={control}
                  >
                    <option value="neutral">Neutral</option>
                    <option value="amber">Amber / warning</option>
                    <option value="blue">Blue / information</option>
                  </select>
                </Field>
              </div>
              <div className="mt-4">
                <b className="text-sm">Paragraphs</b>
                <TextList
                  value={section.paragraphs}
                  onChange={(paragraphs) => update(index, { paragraphs })}
                  placeholder="Section paragraph"
                  multiline
                />
              </div>
              <div className="mt-4">
                <b className="text-sm">List items</b>
                <TextList
                  value={section.items}
                  onChange={(items) => update(index, { items })}
                  placeholder="List item"
                />
              </div>
            </div>
          )}
        </article>
      ))}
      <Button
        type="button"
        variant="outline"
        onClick={() => {
          const section: ManagedServiceContentSection = {
            id: uid(),
            title: "",
            paragraphs: [""],
            items: [],
            tone: "neutral",
          };
          onChange([...value, section]);
          setOpen(section.id);
        }}
        className="border-[#cf6943] text-[#cf6943]"
      >
        <Plus className="mr-2 h-4 w-4" />
        Add content section
      </Button>
    </div>
  );
}

function InformationTables({
  value,
  onChange,
}: {
  value: ManagedServiceInfoTable[];
  onChange: (value: ManagedServiceInfoTable[]) => void;
}) {
  const [open, setOpen] = React.useState<string | null>(value[0]?.id || null);
  const update = (index: number, patch: Partial<ManagedServiceInfoTable>) =>
    onChange(
      value.map((item, itemIndex) =>
        itemIndex === index ? { ...item, ...patch } : item,
      ),
    );

  return (
    <div className="space-y-3">
      {value.map((table, index) => (
        <article
          key={table.id}
          className="overflow-hidden rounded-lg border border-[#d8cec0] bg-white"
        >
          <div className="flex items-center gap-2 p-3">
            <button
              type="button"
              onClick={() => setOpen(open === table.id ? null : table.id)}
              className="flex min-w-0 flex-1 items-center justify-between text-left"
            >
              <strong className="truncate">
                {table.title || `Information table ${index + 1}`}
              </strong>
              {open === table.id ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            <Actions
              index={index}
              count={value.length}
              onMove={(direction) => onChange(move(value, index, direction))}
              onDelete={() =>
                onChange(value.filter((_, itemIndex) => itemIndex !== index))
              }
            />
          </div>
          {open === table.id && (
            <div className="border-t border-[#d8cec0] bg-[#f7f2e9]/60 p-4">
              <Field label="Section title">
                <input
                  value={table.title}
                  onChange={(event) =>
                    update(index, { title: event.target.value })
                  }
                  className={control}
                />
              </Field>
              <Field label="Position on public page">
                <select
                  value={table.placement || "before-itinerary"}
                  onChange={(event) =>
                    update(index, {
                      placement: event.target.value as
                        | "before-seasons"
                        | "before-itinerary",
                    })
                  }
                  className={control}
                >
                  <option value="before-seasons">Before best seasons</option>
                  <option value="before-itinerary">Before itinerary</option>
                </select>
              </Field>
              <div className="mt-4">
                <b className="text-sm">Columns</b>
                <div className="mt-2 flex flex-wrap gap-2">
                  {table.columns.map((column, columnIndex) => (
                    <div key={columnIndex} className="flex items-center gap-1">
                      <input
                        value={column}
                        onChange={(event) =>
                          update(index, {
                            columns: table.columns.map((candidate, itemIndex) =>
                              itemIndex === columnIndex
                                ? event.target.value
                                : candidate,
                            ),
                          })
                        }
                        className="rounded-md border border-[#d8cec0] bg-white px-3 py-2 text-sm capitalize"
                      />
                      <button
                        type="button"
                        aria-label={`Delete ${column} column`}
                        onClick={() =>
                          update(index, {
                            columns: table.columns.filter(
                              (_, itemIndex) => itemIndex !== columnIndex,
                            ),
                            rows: table.rows.map((row) => ({
                              ...row,
                              values: row.values.filter(
                                (_, itemIndex) => itemIndex !== columnIndex,
                              ),
                            })),
                          })
                        }
                        className="inline-flex h-9 w-9 items-center justify-center rounded text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() =>
                      update(index, {
                        columns: [...table.columns, "New column"],
                        rows: table.rows.map((row) => ({
                          ...row,
                          values: [...row.values, ""],
                        })),
                      })
                    }
                    className="border-[#cf6943] text-[#cf6943]"
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add column
                  </Button>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {table.rows.map((row, rowIndex) => (
                  <div
                    key={row.id}
                    className="rounded-lg border border-[#d8cec0] bg-white p-3"
                  >
                    <div className="flex items-center justify-between">
                      <strong className="text-xs uppercase tracking-wider text-[#66706d]">
                        Row {rowIndex + 1}
                      </strong>
                      <Actions
                        index={rowIndex}
                        count={table.rows.length}
                        onMove={(direction) =>
                          update(index, {
                            rows: move(table.rows, rowIndex, direction),
                          })
                        }
                        onDelete={() =>
                          update(index, {
                            rows: table.rows.filter(
                              (_, itemIndex) => itemIndex !== rowIndex,
                            ),
                          })
                        }
                      />
                    </div>
                    <div className="mt-2 grid gap-3 sm:grid-cols-2">
                      {table.columns.map((column, columnIndex) => (
                        <Field key={columnIndex} label={column || "Column"}>
                          <textarea
                            rows={2}
                            value={row.values[columnIndex] || ""}
                            onChange={(event) =>
                              update(index, {
                                rows: table.rows.map((candidate, itemIndex) =>
                                  itemIndex === rowIndex
                                    ? {
                                        ...candidate,
                                        values: table.columns.map(
                                          (_, valueIndex) =>
                                            valueIndex === columnIndex
                                              ? event.target.value
                                              : candidate.values[valueIndex] ||
                                                "",
                                        ),
                                      }
                                    : candidate,
                                ),
                              })
                            }
                            className={control}
                          />
                        </Field>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  update(index, {
                    rows: [
                      ...table.rows,
                      {
                        id: uid(),
                        values: table.columns.map(() => ""),
                      },
                    ],
                  })
                }
                className="mt-3 border-[#cf6943] text-[#cf6943]"
              >
                <Plus className="mr-2 h-4 w-4" /> Add row
              </Button>
            </div>
          )}
        </article>
      ))}
      <Button
        type="button"
        variant="outline"
        onClick={() => {
          const table: ManagedServiceInfoTable = {
            id: uid(),
            title: "",
            placement: "before-itinerary",
            columns: ["Label", "Details"],
            rows: [],
          };
          onChange([...value, table]);
          setOpen(table.id);
        }}
        className="border-[#cf6943] text-[#cf6943]"
      >
        <Plus className="mr-2 h-4 w-4" /> Add information table
      </Button>
    </div>
  );
}

function Itinerary({
  value,
  onChange,
}: {
  value: ManagedServiceItineraryDay[];
  onChange: (value: ManagedServiceItineraryDay[]) => void;
}) {
  const [open, setOpen] = React.useState<string | null>(value[0]?.id || null);
  const update = (index: number, patch: Partial<ManagedServiceItineraryDay>) =>
    onChange(
      value.map((item, itemIndex) =>
        itemIndex === index ? { ...item, ...patch } : item,
      ),
    );
  const renumber = (items: ManagedServiceItineraryDay[]) =>
    items.map((item, index) => ({ ...item, day: index + 1 }));
  return (
    <div className="space-y-3">
      {value.map((day, index) => (
        <article
          key={day.id}
          className="overflow-hidden rounded-lg border border-[#d8cec0] bg-white"
        >
          <div className="flex items-center gap-2 p-3">
            <button
              type="button"
              onClick={() => setOpen(open === day.id ? null : day.id)}
              className="flex min-w-0 flex-1 items-center gap-3 text-left"
            >
              <span className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-lg bg-[#cf6943]/10 text-[#cf6943]">
                <small className="text-[8px] font-bold">DAY</small>
                <b>{day.day}</b>
              </span>
              <span className="min-w-0 flex-1">
                <b className="block truncate">{day.title || "Untitled day"}</b>
                <small className="text-[#66706d]">
                  {day.altitude || "No altitude"} ·{" "}
                  {day.distance || "No duration"}
                </small>
              </span>
              {open === day.id ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            <Actions
              index={index}
              count={value.length}
              onMove={(direction) =>
                onChange(renumber(move(value, index, direction)))
              }
              onDelete={() =>
                onChange(
                  renumber(value.filter((_, itemIndex) => itemIndex !== index)),
                )
              }
            />
          </div>
          {open === day.id && (
            <div className="border-t border-[#d8cec0] bg-[#f7f2e9]/60 p-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Title">
                  <input
                    value={day.title}
                    onChange={(event) =>
                      update(index, { title: event.target.value })
                    }
                    className={control}
                  />
                </Field>
                <Field label="Altitude">
                  <input
                    value={day.altitude}
                    onChange={(event) =>
                      update(index, { altitude: event.target.value })
                    }
                    className={control}
                  />
                </Field>
                <Field label="Distance / time">
                  <input
                    value={day.distance}
                    onChange={(event) =>
                      update(index, { distance: event.target.value })
                    }
                    className={control}
                  />
                </Field>
                <Field label="Overnight / meeting point">
                  <input
                    value={day.overnight}
                    onChange={(event) =>
                      update(index, { overnight: event.target.value })
                    }
                    className={control}
                  />
                </Field>
                <Field label="Meals">
                  <input
                    value={day.meals}
                    onChange={(event) =>
                      update(index, { meals: event.target.value })
                    }
                    className={control}
                  />
                </Field>
              </div>
              <Field label="Detailed description">
                <textarea
                  rows={5}
                  value={day.description}
                  onChange={(event) =>
                    update(index, { description: event.target.value })
                  }
                  className={control}
                />
              </Field>
              <div className="mt-4">
                <b className="text-sm">Day highlights</b>
                <TextList
                  value={day.highlights}
                  onChange={(highlights) => update(index, { highlights })}
                  placeholder="Day highlight"
                />
              </div>
            </div>
          )}
        </article>
      ))}
      <Button
        type="button"
        variant="outline"
        onClick={() => {
          const day: ManagedServiceItineraryDay = {
            id: uid(),
            day: value.length + 1,
            title: "",
            altitude: "",
            distance: "",
            description: "",
            overnight: "",
            meals: "",
            highlights: [],
          };
          onChange([...value, day]);
          setOpen(day.id);
        }}
        className="border-[#cf6943] text-[#cf6943]"
      >
        <Plus className="mr-2 h-4 w-4" />
        Add itinerary day
      </Button>
    </div>
  );
}

function Gallery({
  value,
  onChange,
  folder,
}: {
  value: ManagedServiceGalleryImage[];
  onChange: (value: ManagedServiceGalleryImage[]) => void;
  folder: string;
}) {
  const update = (index: number, patch: Partial<ManagedServiceGalleryImage>) =>
    onChange(
      value.map((item, itemIndex) =>
        itemIndex === index ? { ...item, ...patch } : item,
      ),
    );
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {value.map((image, index) => (
        <article
          key={image.id}
          className="overflow-hidden rounded-lg border border-[#d8cec0] bg-white"
        >
          <div className="relative h-40 bg-[#e4d8c8]">
            {image.src && image.src !== "/images/used/" ? (
              <Image
                src={image.src}
                alt=""
                fill
                className="object-cover"
                sizes="400px"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <ImagePlus className="h-8 w-8 text-[#66706d]" />
              </div>
            )}
          </div>
          <div className="p-4">
            <div className="flex justify-end">
              <Actions
                index={index}
                count={value.length}
                onMove={(direction) => onChange(move(value, index, direction))}
                onDelete={() =>
                  onChange(value.filter((_, itemIndex) => itemIndex !== index))
                }
              />
            </div>
            <ImageKitUpload
              value={image.src}
              onChange={(src) => update(index, { src })}
              folder={`${folder}/gallery`}
            />
            <Field label="Alternative text">
              <input
                value={image.alt}
                onChange={(event) => update(index, { alt: event.target.value })}
                className={control}
              />
            </Field>
            <Field label="Caption">
              <input
                value={image.caption}
                onChange={(event) =>
                  update(index, { caption: event.target.value })
                }
                className={control}
              />
            </Field>
          </div>
        </article>
      ))}
      <button
        type="button"
        onClick={() =>
          onChange([
            ...value,
            { id: uid(), src: "/images/used/", alt: "", caption: "" },
          ])
        }
        className="flex min-h-64 flex-col items-center justify-center rounded-lg border border-dashed border-[#cf6943] font-bold text-[#cf6943]"
      >
        <ImagePlus className="mb-2 h-7 w-7" />
        Add gallery image
      </button>
    </div>
  );
}

function Faqs({
  value,
  onChange,
}: {
  value: ManagedServiceFaq[];
  onChange: (value: ManagedServiceFaq[]) => void;
}) {
  const [open, setOpen] = React.useState<string | null>(null);
  const update = (index: number, patch: Partial<ManagedServiceFaq>) =>
    onChange(
      value.map((item, itemIndex) =>
        itemIndex === index ? { ...item, ...patch } : item,
      ),
    );
  return (
    <div className="space-y-3">
      {value.map((faq, index) => (
        <article
          key={faq.id}
          className="overflow-hidden rounded-lg border border-[#d8cec0] bg-white"
        >
          <div className="flex items-center gap-2 p-3">
            <button
              type="button"
              onClick={() => setOpen(open === faq.id ? null : faq.id)}
              className="flex min-w-0 flex-1 items-center justify-between gap-3 text-left"
            >
              <span className="truncate font-semibold">
                {index + 1}. {faq.question || "Untitled question"}
              </span>
              {open === faq.id ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            <Actions
              index={index}
              count={value.length}
              onMove={(direction) => onChange(move(value, index, direction))}
              onDelete={() =>
                onChange(value.filter((_, itemIndex) => itemIndex !== index))
              }
            />
          </div>
          {open === faq.id && (
            <div className="border-t border-[#d8cec0] bg-[#f7f2e9]/60 p-4">
              <Field label="Question">
                <input
                  value={faq.question}
                  onChange={(event) =>
                    update(index, { question: event.target.value })
                  }
                  className={control}
                />
              </Field>
              <Field label="Answer">
                <textarea
                  rows={4}
                  value={faq.answer}
                  onChange={(event) =>
                    update(index, { answer: event.target.value })
                  }
                  className={control}
                />
              </Field>
            </div>
          )}
        </article>
      ))}
      <Button
        type="button"
        variant="outline"
        onClick={() => {
          const faq = { id: uid(), question: "", answer: "" };
          onChange([...value, faq]);
          setOpen(faq.id);
        }}
        className="border-[#cf6943] text-[#cf6943]"
      >
        <Plus className="mr-2 h-4 w-4" />
        Add FAQ
      </Button>
    </div>
  );
}

function normalize(item: ManagedService, collection: ManagedServiceCollection) {
  const blank = blankManagedService(collection);
  return {
    ...blank,
    ...item,
    highlights: item.highlights || [],
    serviceHighlights: item.serviceHighlights || [],
    activities: item.activities || [],
    wildlife: item.wildlife || [],
    heroBadges: item.heroBadges || [],
    quickStats: item.quickStats || [],
    overview: item.overview || [],
    seasons: item.seasons || [],
    contentSections: item.contentSections || [],
    informationTables: item.informationTables || [],
    itinerary: item.itinerary || [],
    inclusions: item.inclusions || [],
    exclusions: item.exclusions || [],
    gallery: item.gallery || [],
    faqs: item.faqs || [],
  };
}

export default function ManagedServiceForm({
  collection,
  serviceId,
}: {
  collection: ManagedServiceCollection;
  serviceId?: string;
}) {
  const router = useRouter();
  const config = MANAGED_SERVICE_COLLECTIONS[collection];
  const [form, setForm] = React.useState<ManagedService>(() =>
    blankManagedService(collection),
  );
  const [items, setItems] = React.useState<ManagedService[]>([]);
  const [latestId, setLatestId] = React.useState<string>();
  const [ready, setReady] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const [message, setMessage] = React.useState("");
  React.useEffect(() => {
    void loadManagedServices(collection, { allowFallback: false }).then(
      ({ services, latestId: latest }) => {
        setItems(services);
        setLatestId(latest);
        const existing = services.find((item) => item.id === serviceId);
        if (existing) setForm(normalize(existing, collection));
        else if (serviceId) setMessage("This item was not found in Firebase.");
        setReady(true);
      },
    );
  }, [collection, serviceId]);
  const set = <K extends keyof ManagedService>(
    key: K,
    value: ManagedService[K],
  ) => setForm((current) => ({ ...current, [key]: value }));
  const slug = form.slug || createManagedServiceId(form.name);
  const imageFolder = `/himkala/${collection}/${slug || "new"}`;
  const cloneLatest = () => {
    const source = items.find((item) => item.id === latestId) || items.at(-1);
    if (!source) {
      setMessage("There is no Firebase document to clone.");
      return;
    }
    const cloned = normalize(structuredClone(source), collection);
    const copySlug = `${source.slug || source.id}-copy`;
    const clone = {
      ...cloned,
      id: "",
      slug: copySlug,
      name: `${source.name} (Copy)`,
      featured: false,
    };
    setForm({ ...clone, link: managedServicePublicLink(collection, clone) });
    setMessage(
      `Data cloned from “${source.name}”. Review the title, slug and URL before saving.`,
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name.trim() || !form.description.trim()) {
      const error = "Title and short description are required.";
      setMessage(error);
      toast.error(error);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setSaving(true);
    const { services } = await loadManagedServices(collection, {
      allowFallback: false,
    });
    const id = serviceId || createManagedServiceId(form.slug || form.name);
    const draft = { ...form, id, slug: form.slug || id, kind: config.kind };
    const item = {
      ...draft,
      link:
        collection === "destinationTours"
          ? managedServicePublicLink(collection, draft)
          : form.link || managedServicePublicLink(collection, draft),
    };
    let next = serviceId
      ? services.map((candidate) =>
          candidate.id === serviceId ? item : candidate,
        )
      : [...services, item];
    if (item.featured)
      next = next.map((candidate) => ({
        ...candidate,
        featured:
          candidate.id === item.id ||
          (collection === "destinationTours" &&
            candidate.destination !== item.destination &&
            candidate.featured),
      }));
    const result = await saveManagedServices(collection, next);
    setSaving(false);
    if (result.source !== "firestore") {
      const error = result.error || "Could not save to Firebase.";
      setMessage(error);
      toast.error(error);
      return;
    }
    toast.success(`${config.singular} saved successfully.`);
    router.push(config.adminPath);
    router.refresh();
  };
  const nav = [
    ["essentials", "Card & essentials"],
    ["overview", "Overview"],
    ["highlights", "Highlights"],
    ["seasons", "Best seasons"],
    ["sections", "Special sections"],
    ["tables", "Information tables"],
    ["itinerary", "Itinerary"],
    ["included", "Included / excluded"],
    ["gallery", "Gallery"],
    ["faq", "FAQ"],
    ["publishing", "CTA & publishing"],
  ];
  return (
    <div className="px-5 py-8 sm:px-8 lg:px-12">
      <Button
        variant="ghost"
        type="button"
        onClick={() => router.push(config.adminPath)}
        className="-ml-3"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to {config.label}
      </Button>
      <div className="mt-5 max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#cf6943]">
              {config.label} content editor
            </p>
            <h1 className="mt-2 font-serif text-4xl">
              {serviceId
                ? `Edit ${config.singular.toLowerCase()}`
                : `Create ${config.singular.toLowerCase()}`}
            </h1>
            <p className="mt-2 text-sm text-[#66706d]">
              The sections follow the same content order used on the public
              page.
            </p>
          </div>
          {!serviceId && (
            <Button
              type="button"
              variant="outline"
              disabled={!ready || items.length === 0}
              onClick={cloneLatest}
              className="shrink-0 border-[#cf6943] text-[#cf6943]"
            >
              <Copy className="mr-2 h-4 w-4" />
              Clone data
            </Button>
          )}
        </div>
        {message && (
          <p className="mt-5 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-800">
            {message}
          </p>
        )}
        <form
          onSubmit={submit}
          className="mt-8 grid items-start gap-8 lg:grid-cols-[210px_minmax(0,1fr)]"
        >
          <nav className="sticky top-0 z-30 self-start bg-[#f2ede4]/95 py-2 backdrop-blur lg:top-6 lg:z-auto lg:bg-transparent lg:py-0">
            <div className="overflow-x-auto lg:max-h-[calc(100vh-3rem)] lg:overflow-x-hidden lg:overflow-y-auto">
              <div className="flex w-max gap-1 rounded-xl border border-[#d8cec0] bg-[#f7f2e9] p-2 text-sm font-semibold text-[#556363] lg:block lg:w-auto lg:space-y-1 lg:p-3">
                {nav.map(([anchor, label]) => (
                  <a
                    key={anchor}
                    href={`#${anchor}`}
                    className="block shrink-0 whitespace-nowrap rounded-md px-3 py-2 hover:bg-[#e4d8c8] hover:text-[#cf6943]"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </nav>
          <div className="space-y-6">
            <Section
              id="essentials"
              title="Card & essentials"
              help="Controls the listing card and the public hero area."
            >
              {collection === "destinationTours" && (
                <div className="mb-6">
                  <p className="text-sm font-semibold text-[#14383b]">
                    Where should this tour appear?
                  </p>
                  <p className="mt-1 text-xs text-[#66706d]">
                    Choose one destination. The public URL and listing are
                    updated automatically.
                  </p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {(["bhutan", "tibet"] as const).map((destination) => {
                      const selected = form.destination === destination;
                      return (
                        <label
                          key={destination}
                          className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors ${selected ? "border-[#cf6943] bg-[#cf6943]/10" : "border-[#d8cec0] bg-white hover:border-[#cf6943]/60"}`}
                        >
                          <input
                            type="radio"
                            name="destination"
                            value={destination}
                            checked={selected}
                            onChange={() => {
                              set("destination", destination);
                              set(
                                "link",
                                managedServicePublicLink(collection, {
                                  ...form,
                                  destination,
                                  slug,
                                }),
                              );
                            }}
                            className="h-4 w-4 accent-[#cf6943]"
                          />
                          <span>
                            <strong className="block capitalize text-[#14383b]">
                              {destination}
                            </strong>
                            <small className="text-[#66706d]">
                              /destinations/{destination}/...
                            </small>
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Public page title">
                  <input
                    required
                    value={form.name}
                    onChange={(event) => set("name", event.target.value)}
                    className={control}
                  />
                </Field>
                {collection === "destinationTours" && (
                  <Field label="Listing card title">
                    <input
                      value={form.cardTitle || ""}
                      onChange={(event) =>
                        set("cardTitle", event.target.value)
                      }
                      placeholder="Uses the public title when empty"
                      className={control}
                    />
                  </Field>
                )}
                <Field label="Slug / document ID">
                  <input
                    value={form.slug}
                    onChange={(event) =>
                      set(
                        "slug",
                        event.target.value
                          .toLowerCase()
                          .replace(/[^a-z0-9-]+/g, "-"),
                      )
                    }
                    placeholder="tour-url-slug"
                    className={control}
                  />
                </Field>
                <Field label="Region">
                  <input
                    value={form.region}
                    onChange={(event) => set("region", event.target.value)}
                    className={control}
                  />
                </Field>
                <Field label="Category">
                  <input
                    value={form.category || ""}
                    onChange={(event) => set("category", event.target.value)}
                    className={control}
                  />
                </Field>
                <Field label="Duration">
                  <input
                    value={form.duration}
                    onChange={(event) => set("duration", event.target.value)}
                    className={control}
                  />
                </Field>
                <Field label="Difficulty">
                  <input
                    value={form.difficulty}
                    onChange={(event) => set("difficulty", event.target.value)}
                    className={control}
                  />
                </Field>
                <Field label="Group size">
                  <input
                    value={form.groupSize}
                    onChange={(event) => set("groupSize", event.target.value)}
                    className={control}
                  />
                </Field>
                <Field label="Best season">
                  <input
                    value={form.bestSeason}
                    onChange={(event) => set("bestSeason", event.target.value)}
                    className={control}
                  />
                </Field>
                <Field
                  label={
                    collection === "freeTours" ? "Price label" : "Price (USD)"
                  }
                >
                  {collection === "freeTours" ? (
                    <input
                      value={String(form.price)}
                      onChange={(event) => set("price", event.target.value)}
                      className={control}
                    />
                  ) : (
                    <input
                      type="number"
                      min="0"
                      value={Number(form.price) || 0}
                      onChange={(event) =>
                        set("price", Number(event.target.value))
                      }
                      className={control}
                    />
                  )}
                </Field>
                <Field label="Original price (USD)">
                  <input
                    type="number"
                    min="0"
                    value={form.originalPrice || 0}
                    onChange={(event) =>
                      set("originalPrice", Number(event.target.value))
                    }
                    className={control}
                  />
                </Field>
                <Field label="Rating">
                  <input
                    type="number"
                    min="0"
                    max="5"
                    step="0.1"
                    value={form.rating || 0}
                    onChange={(event) =>
                      set("rating", Number(event.target.value))
                    }
                    className={control}
                  />
                </Field>
                <Field label="Review count">
                  <input
                    type="number"
                    min="0"
                    value={form.reviews || 0}
                    onChange={(event) =>
                      set("reviews", Number(event.target.value))
                    }
                    className={control}
                  />
                </Field>
                <Field label="Badge">
                  <input
                    value={form.badge || ""}
                    onChange={(event) => set("badge", event.target.value)}
                    placeholder="Most Popular"
                    className={control}
                  />
                </Field>
                <Field label="UNESCO / landmark">
                  <input
                    value={form.unesco || ""}
                    onChange={(event) => set("unesco", event.target.value)}
                    className={control}
                  />
                </Field>
                <Field label="Meeting point">
                  <input
                    value={form.meetingPoint || ""}
                    onChange={(event) =>
                      set("meetingPoint", event.target.value)
                    }
                    className={control}
                  />
                </Field>
                <Field label="Start times">
                  <input
                    value={form.startTimes || ""}
                    onChange={(event) => set("startTimes", event.target.value)}
                    className={control}
                  />
                </Field>
                <Field label="Route / flight region">
                  <input
                    value={form.route || ""}
                    onChange={(event) => set("route", event.target.value)}
                    className={control}
                  />
                </Field>
                <Field label="Maximum altitude">
                  <input
                    value={form.altitude || ""}
                    onChange={(event) => set("altitude", event.target.value)}
                    className={control}
                  />
                </Field>
                <Field label="Aircraft">
                  <input
                    value={form.aircraft || ""}
                    onChange={(event) => set("aircraft", event.target.value)}
                    className={control}
                  />
                </Field>
                <Field label="Departure time">
                  <input
                    value={form.departure || ""}
                    onChange={(event) => set("departure", event.target.value)}
                    className={control}
                  />
                </Field>
                <Field label="National park">
                  <input
                    value={form.park || ""}
                    onChange={(event) => set("park", event.target.value)}
                    className={control}
                  />
                </Field>
                <Field label="Hero eyebrow">
                  <input
                    value={form.heroEyebrow || ""}
                    onChange={(event) => set("heroEyebrow", event.target.value)}
                    className={control}
                  />
                </Field>
              </div>
              <Field label="Hero short description">
                <textarea
                  required
                  rows={4}
                  value={form.description}
                  onChange={(event) => {
                    set("description", event.target.value);
                    set("shortDescription", event.target.value);
                  }}
                  className={control}
                />
              </Field>
              {collection === "destinationTours" && (
                <Field label="Listing card description">
                  <textarea
                    rows={3}
                    value={form.cardDescription || ""}
                    onChange={(event) =>
                      set("cardDescription", event.target.value)
                    }
                    placeholder="Uses the hero description when empty"
                    className={control}
                  />
                </Field>
              )}
              {collection === "daySightseeings" && (
                <label className="mt-4 flex items-center gap-2 text-sm font-semibold">
                  <input
                    type="checkbox"
                    checked={form.isFree || false}
                    onChange={(event) => set("isFree", event.target.checked)}
                  />
                  Free / tips-based tour
                </label>
              )}
              {collection === "jungleSafaris" && (
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <b className="text-sm">Safari activities</b>
                    <TextList
                      value={form.activities || []}
                      onChange={(value) => set("activities", value)}
                      placeholder="Safari activity"
                    />
                  </div>
                  <div>
                    <b className="text-sm">Wildlife</b>
                    <TextList
                      value={form.wildlife || []}
                      onChange={(value) => set("wildlife", value)}
                      placeholder="Animal or wildlife group"
                    />
                  </div>
                </div>
              )}
              <div className="mt-5 grid gap-4 lg:grid-cols-[260px_1fr]">
                <div className="relative h-44 overflow-hidden rounded-lg bg-[#e4d8c8]">
                  {form.image && form.image !== "/images/used/" ? (
                    <Image
                      src={form.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="260px"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <ImagePlus className="h-8 w-8" />
                    </div>
                  )}
                </div>
                <div>
                  <ImageKitUpload
                    value={form.image}
                    onChange={(value) => set("image", value)}
                    folder={`${imageFolder}/hero`}
                    label="Main image path or URL"
                  />
                  <Field label="Image alternative text">
                    <input
                      value={form.imageAlt || ""}
                      onChange={(event) => set("imageAlt", event.target.value)}
                      className={control}
                    />
                  </Field>
                </div>
              </div>
              <div className="mt-5">
                <b className="text-sm">Listing-card highlights</b>
                <TextList
                  value={form.highlights}
                  onChange={(value) => set("highlights", value)}
                  placeholder="Short card highlight"
                />
              </div>
              <div className="mt-5">
                <b className="text-sm">Hero badges</b>
                <TextList
                  value={form.heroBadges || []}
                  onChange={(value) => set("heroBadges", value)}
                  placeholder="Hero badge"
                />
              </div>
              <div className="mt-5">
                <b className="text-sm">Quick statistics</b>
                <Stats
                  value={form.quickStats || []}
                  onChange={(value) => set("quickStats", value)}
                />
              </div>
            </Section>
            <Section id="overview" title="Overview & important banner">
              <TextList
                value={form.overview || []}
                onChange={(value) => set("overview", value)}
                placeholder="Overview paragraph"
                multiline
              />
              <Field label="Important banner">
                <textarea
                  rows={4}
                  value={form.importantBanner || ""}
                  onChange={(event) =>
                    set("importantBanner", event.target.value)
                  }
                  className={control}
                />
              </Field>
            </Section>
            <Section id="highlights" title="Public page highlights">
              <TextList
                value={form.serviceHighlights || []}
                onChange={(value) => set("serviceHighlights", value)}
                placeholder="Tour or hiking highlight"
              />
            </Section>
            <Section id="seasons" title="Best time to visit">
              <Seasons
                value={form.seasons || []}
                onChange={(value) => set("seasons", value)}
              />
              <Field label="Season note">
                <textarea
                  rows={3}
                  value={form.seasonNote || ""}
                  onChange={(event) => set("seasonNote", event.target.value)}
                  className={control}
                />
              </Field>
            </Section>
            <Section
              id="sections"
              title="Special content sections"
              help="Use these for trail details, what to bring, elevation profiles and narrative sections."
            >
              <ContentSections
                value={form.contentSections || []}
                onChange={(value) => set("contentSections", value)}
              />
            </Section>
            <Section
              id="tables"
              title="Information tables"
              help="Structured facts, altitude profiles, route tables and other destination-specific information."
            >
              <InformationTables
                value={form.informationTables || []}
                onChange={(value) => set("informationTables", value)}
              />
            </Section>
            <Section id="itinerary" title="Day-by-day itinerary">
              <Itinerary
                value={form.itinerary || []}
                onChange={(value) => set("itinerary", value)}
              />
            </Section>
            <div
              id="included"
              className="grid scroll-mt-24 gap-6 lg:scroll-mt-6 xl:grid-cols-2"
            >
              <Section id="inclusions" title="What's included">
                <TextList
                  value={form.inclusions || []}
                  onChange={(value) => set("inclusions", value)}
                  placeholder="Included item"
                />
              </Section>
              <Section id="exclusions" title="What's not included">
                <TextList
                  value={form.exclusions || []}
                  onChange={(value) => set("exclusions", value)}
                  placeholder="Excluded item"
                />
              </Section>
            </div>
            <Section id="gallery" title="Photo gallery">
              <Field label="Gallery introduction">
                <textarea
                  rows={3}
                  value={form.galleryIntro || ""}
                  onChange={(event) => set("galleryIntro", event.target.value)}
                  className={control}
                />
              </Field>
              <Gallery
                value={form.gallery || []}
                onChange={(value) => set("gallery", value)}
                folder={imageFolder}
              />
            </Section>
            <Section id="faq" title="Frequently asked questions">
              <Faqs
                value={form.faqs || []}
                onChange={(value) => set("faqs", value)}
              />
            </Section>
            <Section id="publishing" title="CTA & publishing">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="CTA title">
                  <input
                    value={form.ctaTitle || ""}
                    onChange={(event) => set("ctaTitle", event.target.value)}
                    className={control}
                  />
                </Field>
                <Field label="Public URL">
                  <input
                    value={
                      collection === "destinationTours"
                        ? managedServicePublicLink(collection, {
                            ...form,
                            slug,
                          })
                        : form.link
                    }
                    onChange={(event) => set("link", event.target.value)}
                    readOnly={collection === "destinationTours"}
                    className={control}
                  />
                </Field>
              </div>
              <Field label="CTA description">
                <textarea
                  rows={3}
                  value={form.ctaDescription || ""}
                  onChange={(event) =>
                    set("ctaDescription", event.target.value)
                  }
                  className={control}
                />
              </Field>
              <div className="mt-5 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => set("featured", !form.featured)}
                  aria-pressed={form.featured}
                  className={`flex items-center gap-2 rounded-lg border px-4 py-3 text-sm font-semibold ${form.featured ? "border-amber-400 bg-amber-50 text-amber-700" : "border-[#d8cec0] bg-white text-[#556363]"}`}
                >
                  <Star
                    className={`h-5 w-5 ${form.featured ? "fill-amber-400 text-amber-500" : ""}`}
                  />
                  {form.featured ? "Featured service" : "Mark as featured"}
                </button>
                <label className="flex items-center gap-2 text-sm font-semibold">
                  <input
                    type="checkbox"
                    checked={form.published}
                    onChange={(event) => set("published", event.target.checked)}
                  />
                  Published
                </label>
              </div>
              <p className="mt-3 text-xs text-[#66706d]">
                Only one item can be featured in this category. Saving this
                selection removes the previous star.
              </p>
            </Section>
            <div className="sticky bottom-4 z-20 flex justify-end gap-3 rounded-xl border border-[#d8cec0] bg-[#f7f2e9]/95 p-3 shadow-lg backdrop-blur">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push(config.adminPath)}
              >
                Cancel
              </Button>
              <Button
                disabled={!ready || saving}
                className="bg-[#cf6943] text-white"
              >
                <Save className="mr-2 h-4 w-4" />
                {saving ? "Saving…" : `Save ${config.singular.toLowerCase()}`}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
