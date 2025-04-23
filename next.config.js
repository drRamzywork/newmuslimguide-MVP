// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const fs = require("fs");
const path = require("path");

// تقرأ اللغات المولّدة يدوياً مسبقًا عبر fetchLocales.js ثم build
const locales = JSON.parse(
  fs.readFileSync(path.resolve("./public/locales/allLanguages.json"), "utf-8")
);

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["app.newmuslimguide.com"],
  },

  i18n: {
    locales,
    defaultLocale: "ar",
    localeDetection: false,
  },
};
