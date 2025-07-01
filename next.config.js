const withMDX = require("@next/mdx")();

const nextConfig = withMDX({
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
  pageExtensions: ["ts", "tsx", "md", "mdx"],


});

module.exports = nextConfig;
