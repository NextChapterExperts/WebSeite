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

    /**
     * Security-Header für Deployments mit Next-Server (z. B. Vercel mit Node).
     * Bei reinem `output: "export"` (statische HTML-Dateien) werden diese Einträge von Next
     * nicht in die Auslieferung geschrieben — dann z. B. `vercel.json`, `_headers` (Netlify)
     * oder Webserver-Konfiguration nutzen.
     */
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            { key: "X-Frame-Options", value: "SAMEORIGIN" },
            { key: "X-Content-Type-Options", value: "nosniff" },
            { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
            {
              key: "Permissions-Policy",
              value: "camera=(), microphone=(), geolocation=()",
            },
            {
              key: "Content-Security-Policy",
              value:
                "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data:; font-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;",
            },
          ],
        },
      ];
    },
  })
);

module.exports = nextConfig;
