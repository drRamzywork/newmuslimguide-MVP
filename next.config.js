// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const fs = require("fs");
const path = require("path");

const localesFilePath = path.resolve("./public/locales/allLanguages.json");
let locales = ["ar", "en"];

try {
  const localesFile = fs.readFileSync(localesFilePath, "utf-8");
  locales = JSON.parse(localesFile);
} catch (error) {
  console.error(
    "Failed to load locales from file. Using default locales.",
    error
  );
}

const nextConfig = {
  reactStrictMode: true,

  i18n: {
    defaultLocale: "ar",
    locales,
    localeDetection: false,
  },
};

module.exports = nextConfig;
