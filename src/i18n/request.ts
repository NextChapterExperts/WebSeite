import { getRequestConfig } from "next-intl/server";
import de from "../messages/de.json";
import en from "../messages/en.json";
import { routing } from "./routing";
import type { Locale } from "./routing";

const messagesByLocale: Record<Locale, typeof de> = {
  de,
  en,
};

export default getRequestConfig(async ({ locale: localeFromCaller, requestLocale }) => {
  let locale = localeFromCaller;
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = (await requestLocale) as Locale | undefined;
  }
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  const resolved = locale as Locale;
  return {
    locale: resolved,
    messages: messagesByLocale[resolved],
  };
});
