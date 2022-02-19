const withDeps = require("next-transpile-modules")(["@mui/material/styles"]);
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

/** @type {import('next').NextConfig} */
const nextConfig = withDeps({
  reactStrictMode: true,
});

module.exports = withPlugins([
  [
    optimizedImages
  ],
  nextConfig,
]);
