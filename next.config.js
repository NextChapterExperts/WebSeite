const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
const withMDX = require("@next/mdx")();

/** GitHub Pages Projektseite: z. B. BASE_PATH=/WebSeite → https://user.github.io/WebSeite/ */
const rawBase = process.env.BASE_PATH?.trim() ?? "";
const basePath =
  rawBase === ""
    ? undefined
    : rawBase.startsWith("/")
      ? rawBase
      : `/${rawBase}`;

const nextConfig = withNextIntl(
  withMDX({
    output: "export",
    /** Ordner mit index.html statt *.html — passt zu URLs ohne Dateiendung auf statischen Hostern. */
    trailingSlash: true,
    reactStrictMode: true,
    images: { unoptimized: true },
    pageExtensions: ["ts", "tsx", "md", "mdx"],
    ...(basePath ? { basePath } : {}),
  })
);

module.exports = nextConfig;
