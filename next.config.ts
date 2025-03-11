import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.gamemonetize.com', 'img.gamepix.com'],
  },
};

export default nextConfig;
