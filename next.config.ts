import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: true,
  },
  experimental: {
    inlineCss: true,
    cssChunking: true,
  },
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'wealthy-power-26376c166d.media.strapiapp.com',
      },
    ],
  },
};

export default nextConfig;
