/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ipfs.io'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
