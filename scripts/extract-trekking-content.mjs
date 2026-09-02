import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const root = path.resolve("src/app/services/trekking");
const output = path.resolve("src/lib/trekking-hardcoded-content.generated.ts");

const ids = {
  "everest-base-camp-trek": "everest-base-camp",
  "annapurna-circuit-trek": "annapurna-circuit",
  "annapurna-circuit-trek-with-tilicho-lake": "annapurna-circuit-tilicho",
  "langtang-valley-trek": "langtang-valley",
  "manaslu-circuit-trek": "manaslu-circuit",
  "manaslu-circuit-trek-with-tsum-valley": "manaslu-tsum-valley",
  "annapurna-base-camp-trek": "annapurna-base-camp",
  "everest-three-passes-trek": "everest-three-passes",
  "ghorepani-poon-hill-trek": "ghorepani-poon-hill",
  "khopra-ridge-trek-with-khayar-lake": "khopra-ridge",
  "mardi-himal-trek": "mardi-himal",
  "tamang-heritage-trail-and-langtang-valley-trek": "tamang-heritage-langtang",
};

const jsxName = (node) => node?.name?.name || "";
const attribute = (element, name) => element.openingElement.attributes.find((item) => item.type === "JSXAttribute" && item.name.name === name)?.value?.value || "";
const clean = (value) => value.replace(/\s+/g, " ").replace(/\s+([,.!?;:])/g, "$1").replace(/([('])\s+/g, "$1").trim();
function text(node) {
  if (!node) return "";
  if (Array.isArray(node)) return node.map(text).join(" ");
  if (node.type === "JSXText" || node.type === "StringLiteral") return node.value;
  if (node.type === "JSXExpressionContainer") return text(node.expression);
  if (node.type === "BinaryExpression") return `${text(node.left)} ${text(node.right)}`;
  if (node.type === "JSXElement" || node.type === "JSXFragment") return text(node.children);
  return "";
}
function literal(node) {
  if (!node) return undefined;
  if (["StringLiteral", "NumericLiteral", "BooleanLiteral"].includes(node.type)) return node.value;
  if (node.type === "ArrayExpression") return node.elements.map(literal);
  if (node.type === "ObjectExpression") return Object.fromEntries(node.properties.filter((item) => item.type === "ObjectProperty").map((item) => [item.key.name || item.key.value, literal(item.value)]));
  return undefined;
}
function descendants(element, name) {
  const result = [];
  traverse(element, { noScope: true, JSXElement(cursor) { if (jsxName(cursor.node.openingElement) === name) result.push(cursor.node); } });
  return result;
}

const content = {};
for (const [slug, id] of Object.entries(ids)) {
  const source = fs.readFileSync(path.join(root, slug, "page.tsx"), "utf8");
  const ast = parser.parse(source, { sourceType: "module", plugins: ["typescript", "jsx"] });
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
      if (value?.every((item) => typeof item === "string") && value.length >= 5) data.trekHighlights = value;
      if (value?.every((item) => item && typeof item === "object" && "q" in item && "a" in item)) data.faqs = value.map((item, index) => ({ id: `faq-${index + 1}`, question: item.q, answer: item.a }));
      if (value?.every((item) => item && typeof item === "object" && "label" in item && "value" in item)) data.stats = value;
    },
  });

  const sections = jsx.filter((element) => jsxName(element.openingElement) === "section");
  const hero = sections[0];
  const heroCopy = descendants(hero, "div").find((element) => attribute(element, "className").includes("max-w-full"));
  const heroSpans = heroCopy ? descendants(heroCopy, "span").map((element) => clean(text(element))).filter(Boolean) : [];
  data.shortDescription = clean(text(descendants(heroCopy, "p")[0]));
  data.description = data.shortDescription;
  data.heroBadge = heroSpans[1] || "";

  const figure = jsx.find((element) => jsxName(element.openingElement) === "figure");
  const mainImage = descendants(figure, "Image")[0];
  if (mainImage) {
    data.image = attribute(mainImage, "src");
    data.mainImageAlt = attribute(mainImage, "alt");
  }
  const figureSpans = descendants(figure, "span").map((element) => clean(text(element)));
  const bestSeason = figureSpans.find((value) => value.startsWith("Best Season:"));
  if (bestSeason) data.bestSeason = bestSeason.replace(/^Best Season:\s*/, "");
  const price = figureSpans.find((value) => /^\$[\d,]+/.test(value));
  if (price) data.price = Number(price.match(/[\d,]+/)[0].replaceAll(",", ""));

  const duration = data.stats?.find((item) => item.label === "Duration")?.value || "";
  const durationNumbers = duration.match(/\d+/g) || [];
  data.durationDays = Number(durationNumbers[0] || 0);
  data.durationNights = Number(durationNumbers[1] || 0);
  data.duration = data.durationDays ? `${data.durationDays} Days` : duration;
  data.groupSize = data.stats?.find((item) => item.label === "Group Size")?.value?.replace(/\s*people/i, "") || "";
  data.maxAltitude = data.stats?.find((item) => item.label === "Max Altitude")?.value || "";
  data.difficulty = data.stats?.find((item) => item.label === "Difficulty")?.value || "";
  delete data.stats;

  const overviewArticle = jsx.find((element) => jsxName(element.openingElement) === "article" && attribute(element, "className").includes("prose"));
  data.overview = overviewArticle.children.filter((node) => node.type === "JSXElement" && jsxName(node.openingElement) === "p").map((node) => clean(text(node)));
  const banner = jsx.find((element) => jsxName(element.openingElement) === "div" && attribute(element, "className").includes("bg-amber-50"));
  data.importantBanner = clean(text(banner)).replace(/^Important:\s*/, "");

  const seasonSection = sections.find((element) => clean(text(element)).includes("Best Time to Trek"));
  const seasonCards = descendants(seasonSection, "div").filter((element) => attribute(element, "className").includes("bg-[#f7f2e9] p-5"));
  data.seasons = seasonCards.map((card, index) => ({ id: `season-${index + 1}`, title: clean(text(descendants(card, "h3")[0])), description: clean(text(descendants(card, "p")[0])), badge: clean(text(descendants(card, "span").at(-1))) }));
  data.itinerary = (data.itinerary || []).map((day) => ({ id: `day-${day.day}`, ...day }));
  data.inclusions = data.includes || [];
  data.exclusions = data.excludes || [];
  delete data.includes;
  delete data.excludes;
  data.gallery = (data.gallery || []).map((image, index) => ({ id: `gallery-${index + 1}`, ...image }));

  const gallerySection = sections.find((element) => attribute(element, "id") === "gallery");
  data.galleryIntro = clean(text(descendants(gallerySection, "p").find((element) => attribute(element, "className").includes("mb-6"))));
  const cta = sections.at(-1);
  data.ctaTitle = clean(text(descendants(cta, "h2")[0]));
  data.ctaDescription = clean(text(descendants(cta, "p")[0]));
  content[id] = data;
}

const generated = `/* This file is generated from the 12 existing hardcoded trekking pages. */\nimport type { TrekkingService } from "@/lib/trekking-services";\n\nexport const TREKKING_HARDCODED_CONTENT: Record<string, Partial<TrekkingService>> = ${JSON.stringify(content, null, 2)};\n`;
fs.writeFileSync(output, generated);
console.log(`Extracted ${Object.keys(content).length} trekking pages into ${output}`);
