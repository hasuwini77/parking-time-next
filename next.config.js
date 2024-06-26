/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  env: {
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  },
};
