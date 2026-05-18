import { promises as fs } from "fs";
import matter from "gray-matter";
import path from "path";
import { routing } from "@/i18n/routing";

export type BlogSeriesNavLink = { slug: string; title: string };

export type BlogSeriesNavigation = {
  prev: BlogSeriesNavLink | null;
  next: BlogSeriesNavLink | null;
};

export const SAP_BUSINESS_AI_SERIES_ID = "sap-business-ai";

const GERMAN_MONTHS: Record<string, number> = {
  Januar: 0,
  Februar: 1,
  März: 2,
  April: 3,
  Mai: 4,
  Juni: 5,
  Juli: 6,
  August: 7,
  September: 8,
  Oktober: 9,
  November: 10,
  Dezember: 11,
};

/** Parst Datumsstrings wie „19. Mai 2026“ für die Sortierung der Blog-Übersicht. */
export function parseGermanBlogDate(dateStr: string): number {
  const m = dateStr.trim().match(/^(\d{1,2})\.\s+(\S+)\s+(\d{4})$/);
  if (!m) return 0;
  const day = Number(m[1]);
  const month = GERMAN_MONTHS[m[2]];
  const year = Number(m[3]);
  if (!Number.isFinite(day) || month === undefined || !Number.isFinite(year)) return 0;
  return new Date(year, month, day).getTime();
}

const ENGLISH_MONTHS: Record<string, number> = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

/** Parst englische Datumsstrings („April 8, 2026“ oder „10 April 2024“). */
export function parseEnglishBlogDate(dateStr: string): number {
  const s = dateStr.trim();
  let m = s.match(/^([A-Za-z]+)\s+(\d{1,2}),\s+(\d{4})$/);
  if (m) {
    const month = ENGLISH_MONTHS[m[1]];
    const day = Number(m[2]);
    const year = Number(m[3]);
    if (month !== undefined && Number.isFinite(day) && Number.isFinite(year)) {
      return new Date(year, month, day).getTime();
    }
  }
  m = s.match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);
  if (m) {
    const day = Number(m[1]);
    const month = ENGLISH_MONTHS[m[2]];
    const year = Number(m[3]);
    if (month !== undefined && Number.isFinite(day) && Number.isFinite(year)) {
      return new Date(year, month, day).getTime();
    }
  }
  return 0;
}

/** Einheitliche Sortierung für DE- und EN-Datumsangaben im Frontmatter. */
export function parseBlogDateForSort(dateStr: string): number {
  return parseGermanBlogDate(dateStr) || parseEnglishBlogDate(dateStr);
}

export const blogContentRoot = () => path.join(process.cwd(), "src", "content", "blog");

async function listSlugsInLocale(locale: string): Promise<string[]> {
  const dir = path.join(blogContentRoot(), locale);
  try {
    const names = await fs.readdir(dir);
    return names.filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
  } catch {
    return [];
  }
}

/** Alle Slugs, die mindestens in einer Sprache existieren. */
export async function getAllBlogSlugs(): Promise<string[]> {
  const de = await listSlugsInLocale("de");
  const en = await listSlugsInLocale("en");
  return [...new Set([...de, ...en])];
}

export type ResolvedPostFile = {
  filePath: string;
  /** Inhalt kommt nicht aus der aktiven UI-Sprache (z. B. EN-Nutzer sieht DE-Artikel). */
  isFallback: boolean;
  /** Locale der Datei, die geladen wurde. */
  sourceLocale: string;
};

/**
 * Sucht `/{locale}/{slug}.md`, dann nacheinander andere Locales aus `routing.locales`.
 */
export async function resolveBlogPostFile(slug: string, locale: string): Promise<ResolvedPostFile | null> {
  const root = blogContentRoot();
  const order = [locale, ...routing.locales.filter((l) => l !== locale)] as string[];
  const tried = new Set<string>();

  for (const loc of order) {
    if (tried.has(loc)) continue;
    tried.add(loc);
    const filePath = path.join(root, loc, `${slug}.md`);
    try {
      await fs.access(filePath);
      return { filePath, isFallback: loc !== locale, sourceLocale: loc };
    } catch {
      /* nächste Locale */
    }
  }
  return null;
}

async function listPostsInSeries(locale: string, seriesId: string): Promise<{ slug: string; title: string; order: number }[]> {
  const dir = path.join(blogContentRoot(), locale);
  let files: string[];
  try {
    files = (await fs.readdir(dir)).filter((f) => f.endsWith(".md"));
  } catch {
    return [];
  }

  const entries: { slug: string; title: string; order: number }[] = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const raw = await fs.readFile(filePath, "utf8");
    const { data } = matter(raw);
    if (data.series !== seriesId) continue;
    const order = Number(data.seriesOrder);
    if (!Number.isFinite(order)) continue;
    const slug = file.replace(/\.md$/, "");
    entries.push({
      slug,
      title: String(data.title ?? slug),
      order,
    });
  }

  entries.sort((a, b) => a.order - b.order);
  return entries;
}

/**
 * Vorheriger/nächster Artikel innerhalb derselben `series` (Frontmatter), sortiert nach `seriesOrder`.
 * Fallback auf Locale `de`, wenn die aktuelle Sprache keine Serien-Artikel enthält.
 */
export async function getBlogSeriesNavigation(
  slug: string,
  locale: string,
  seriesId: string
): Promise<BlogSeriesNavigation | null> {
  let entries = await listPostsInSeries(locale, seriesId);
  if (entries.length === 0 && locale !== "de") {
    entries = await listPostsInSeries("de", seriesId);
  }

  const idx = entries.findIndex((e) => e.slug === slug);
  if (idx === -1) return null;

  return {
    prev: idx > 0 ? { slug: entries[idx - 1].slug, title: entries[idx - 1].title } : null,
    next: idx < entries.length - 1 ? { slug: entries[idx + 1].slug, title: entries[idx + 1].title } : null,
  };
}

/** Anzahl der Beiträge mit Frontmatter `series` + `seriesOrder` (für „Teil X von Y“). */
export async function countPostsInBlogSeries(seriesId: string, locale: string): Promise<number> {
  let entries = await listPostsInSeries(locale, seriesId);
  if (entries.length === 0 && locale !== "de") {
    entries = await listPostsInSeries("de", seriesId);
  }
  return entries.length;
}
