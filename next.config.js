/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
  },
};

module.exports = nextConfig;
