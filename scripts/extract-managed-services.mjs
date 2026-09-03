import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const output = path.resolve("src/lib/managed-services-hardcoded.generated.json");

const groups = [
  { kind: "free-tour", collection: "freeTours", list: "src/app/services/free-tour-kathmandu/page.tsx", variable: "freeTourOptions" },
  { kind: "multi-day", collection: "multiDayTours", list: "src/app/services/multi-day-cultural-tours/page.tsx", variable: "culturalTours", detailRoot: "src/app/services/multi-day-cultural-tours" },
  { kind: "day-hiking", collection: "dayHikings", list: "src/app/services/day-hikings/page.tsx", variable: "dayHikes", detailRoot: "src/app/services/day-hikings" },
  { kind: "day-sightseeing", collection: "daySightseeings", list: "src/app/services/day-sightseeings/page.tsx", variable: "daySightseeings", detailRoot: "src/app/services/day-sightseeings" },
  { kind: "mountain-flight", collection: "mountainFlights", list: "src/app/services/mountain-flight-heli-trip/page.tsx", variable: "mountainFlights", detailRoot: "src/app/services/mountain-flight-heli-trip" },
  { kind: "jungle-safari", collection: "jungleSafaris", list: "src/app/services/jungle-safari/page.tsx", variable: "jungleSafaris", detailRoot: "src/app/services/jungle-safari" },
];

const jsxName = (node) => node?.name?.name || "";
const attribute = (element, name) => element?.openingElement?.attributes.find((item) => item.type === "JSXAttribute" && item.name.name === name)?.value?.value || "";
const clean = (value = "") => value.replace(/\s+/g, " ").replace(/\s+([,.!?;:])/g, "$1").replace(/([('])\s+/g, "$1").trim();
function text(node) {
  if (!node) return "";
  if (Array.isArray(node)) return node.map(text).join(" ");
  if (node.type === "JSXText" || node.type === "StringLiteral" || node.type === "NumericLiteral") return String(node.value);
  if (node.type === "JSXExpressionContainer") return text(node.expression);
  if (node.type === "BinaryExpression") return `${text(node.left)} ${text(node.right)}`;
  if (node.type === "TemplateLiteral") return node.quasis.map((item) => item.value.cooked).join(" ");
  if (node.type === "JSXElement" || node.type === "JSXFragment") return text(node.children);
  return "";
}
function literal(node) {
  if (!node) return undefined;
  if (["StringLiteral", "NumericLiteral", "BooleanLiteral"].includes(node.type)) return node.value;
  if (node.type === "NullLiteral") return null;
  if (node.type === "ArrayExpression") return node.elements.map(literal);
  if (node.type === "ObjectExpression") return Object.fromEntries(node.properties.filter((item) => item.type === "ObjectProperty").map((item) => [item.key.name || item.key.value, literal(item.value)]));
  return undefined;
}
function descendants(element, name) {
  if (!element) return [];
  const result = [];
  traverse(element, { noScope: true, JSXElement(cursor) { if (jsxName(cursor.node.openingElement) === name) result.push(cursor.node); } });
  return result;
}
function parseFile(file) {
  return parser.parse(fs.readFileSync(file, "utf8"), { sourceType: "module", plugins: ["typescript", "jsx"] });
}
function variable(ast, name) {
  let value;
  traverse(ast, { VariableDeclarator(cursor) { if (cursor.node.id.name === name) value = literal(cursor.node.init); } });
  return value;
}
function slugFromLink(link = "") { return link.split("/").filter(Boolean).at(-1) || "service"; }

function detailData(file) {
  const ast = parseFile(file);
  const data = {};
  const jsx = [];
  traverse(ast, {
    VariableDeclarator(cursor) {
      if (["itinerary", "includes", "excludes", "gallery"].includes(cursor.node.id.name)) data[cursor.node.id.name] = literal(cursor.node.init);
    },
    JSXElement(cursor) { jsx.push(cursor.node); },
    CallExpression(cursor) {
      const callee = cursor.node.callee;
      if (callee.type !== "MemberExpression" || callee.property.name !== "map" || callee.object.type !== "ArrayExpression") return;
      const value = literal(callee.object);
      if (!Array.isArray(value)) return;
      const sectionPath = cursor.findParent((parent) => parent.isJSXElement() && jsxName(parent.node.openingElement) === "section");
      const sectionText = clean(text(sectionPath?.node));
      if (value.every((item) => typeof item === "string") && value.length >= 4 && /Highlights/i.test(sectionText)) data.serviceHighlights = value;
      if (value.every((item) => item && typeof item === "object" && "q" in item && "a" in item)) data.faqs = value.map((item, index) => ({ id: `faq-${index + 1}`, question: item.q, answer: item.a }));
      if (!data.stats && value.length >= 3 && value.every((item) => item && typeof item === "object" && "label" in item && "value" in item)) data.stats = value;
    },
  });

  const sections = jsx.filter((element) => jsxName(element.openingElement) === "section");
  const hero = sections[0];
  const heroCopy = descendants(hero, "div").find((element) => attribute(element, "className").includes("max-w-full"));
  data.title = clean(text(descendants(hero, "h1")[0]));
  data.shortDescription = clean(text(descendants(heroCopy, "p")[0]));
  data.heroEyebrow = clean(text(descendants(hero, "span")[1] || descendants(hero, "div")[1]));
  const heroBadges = descendants(heroCopy, "span").map((element) => clean(text(element))).filter(Boolean);
  data.heroBadges = heroBadges;

  const figure = jsx.find((element) => jsxName(element.openingElement) === "figure");
  const mainImage = descendants(figure, "Image")[0];
  data.image = attribute(mainImage, "src");
  data.imageAlt = attribute(mainImage, "alt");
  const figureSpans = descendants(figure, "span").map((element) => clean(text(element))).filter(Boolean);
  data.bestSeason = figureSpans.find((item) => item.startsWith("Best Season:"))?.replace(/^Best Season:\s*/, "") || "";
  const price = figureSpans.find((item) => /^\$[\d,]+/.test(item));
  if (price) data.price = Number(price.match(/[\d,]+/)[0].replaceAll(",", ""));

  data.quickStats = data.stats || [];
  delete data.stats;
  const overviewArticle = jsx.find((element) => jsxName(element.openingElement) === "article" && attribute(element, "className").includes("prose"));
  data.overview = overviewArticle ? overviewArticle.children.filter((node) => node.type === "JSXElement" && jsxName(node.openingElement) === "p").map((node) => clean(text(node))) : [];
  const important = jsx.find((element) => jsxName(element.openingElement) === "div" && attribute(element, "className").includes("border-amber-400") && clean(text(element)).startsWith("Important:"));
  data.importantBanner = clean(text(important)).replace(/^Important:\s*/, "");

  const seasonIndex = sections.findIndex((element) => /Best Time/i.test(clean(text(descendants(element, "h2")[0]))));
  const itineraryIndex = sections.findIndex((element) => /Itinerary/i.test(clean(text(descendants(element, "h2")[0]))));
  const seasonSection = seasonIndex >= 0 ? sections[seasonIndex] : undefined;
  data.seasons = descendants(seasonSection, "div").filter((element) => attribute(element, "className").includes("bg-[#f7f2e9] p-5") && descendants(element, "h3").length).map((card, index) => ({ id: `season-${index + 1}`, title: clean(text(descendants(card, "h3")[0])), description: clean(text(descendants(card, "p")[0])), badge: clean(text(descendants(card, "span").at(-1))) }));
  data.seasonNote = clean(text(descendants(seasonSection, "p").at(-1)));

  const includesIndex = sections.findIndex((element) => attribute(element, "id") === "includes");
  data.contentSections = sections.slice(seasonIndex + 1, includesIndex).filter((section) => !/Itinerary/i.test(clean(text(descendants(section, "h2")[0])))).map((section, index) => {
    const heading = descendants(section, "h3")[0];
    if (!heading) return null;
    const className = attribute(descendants(section, "div").find((item) => /border-l-4/.test(attribute(item, "className"))), "className");
    return {
      id: `content-${index + 1}`,
      title: clean(text(heading)),
      paragraphs: descendants(section, "p").map((item) => clean(text(item))).filter(Boolean),
      items: descendants(section, "li").map((item) => clean(text(item))).filter(Boolean),
      tone: className.includes("blue") ? "blue" : className.includes("amber") ? "amber" : "neutral",
    };
  }).filter(Boolean);

  data.itinerary = (data.itinerary || []).map((day, index) => ({ id: `day-${day.day || index + 1}`, day: day.day || index + 1, title: day.title || "", altitude: day.altitude || "", distance: day.distance || "", description: day.description || "", overnight: day.overnight || day.meetingPoint || "", meals: day.meals || day.meal || "", highlights: day.highlights || [] }));
  data.inclusions = data.includes || [];
  data.exclusions = data.excludes || [];
  delete data.includes;
  delete data.excludes;
  data.gallery = (data.gallery || []).map((image, index) => ({ id: `gallery-${index + 1}`, ...image }));
  const gallerySection = sections.find((element) => attribute(element, "id") === "gallery");
  data.galleryIntro = clean(text(descendants(gallerySection, "p").find((element) => attribute(element, "className").includes("mb-6"))));
  const faqSection = sections.find((element) => attribute(element, "id") === "faq");
  if (!data.faqs) {
    const faqMap = descendants(faqSection, "div").filter((element) => descendants(element, "h4").length && descendants(element, "p").length);
    data.faqs = faqMap.map((element, index) => ({ id: `faq-${index + 1}`, question: clean(text(descendants(element, "h4")[0])), answer: clean(text(descendants(element, "p")[0])) }));
  }
  const cta = sections.at(-1);
  data.ctaTitle = clean(text(descendants(cta, "h2")[0]));
  data.ctaDescription = clean(text(descendants(cta, "p")[0]));
  return data;
}

const existing = fs.existsSync(output) ? JSON.parse(fs.readFileSync(output, "utf8")) : {};
const result = {};
for (const group of groups) {
  const summaries = variable(parseFile(path.resolve(group.list)), group.variable) || [];
  if (!summaries.length && Array.isArray(existing[group.collection])) {
    result[group.collection] = existing[group.collection];
    continue;
  }
  result[group.collection] = summaries.map((summary, index) => {
    const slug = summary.slug || slugFromLink(summary.link);
    const detailFile = group.detailRoot ? path.resolve(group.detailRoot, slug, "page.tsx") : "";
    const details = detailFile && fs.existsSync(detailFile) ? detailData(detailFile) : {};
    return {
      ...summary,
      ...details,
      id: slug,
      slug,
      kind: group.kind,
      order: index,
      name: details.title || summary.name,
      description: details.shortDescription || summary.description,
      link: summary.link || `/services/${slug}`,
      featured: index === 0,
      published: true,
    };
  });
}

fs.writeFileSync(output, `${JSON.stringify(result, null, 2)}\n`);
console.log(`Extracted ${Object.values(result).reduce((total, items) => total + items.length, 0)} managed services into ${output}`);
