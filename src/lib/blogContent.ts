import { promises as fs } from "fs";
import path from "path";
import { routing } from "@/i18n/routing";

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
