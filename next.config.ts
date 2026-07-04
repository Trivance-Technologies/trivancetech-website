import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: true,
  },
  poweredByHeader: false,
  experimental: {
    inlineCss: true,
    cssChunking: true,
  },
  async headers() {
    // Build script-src dynamically
    const scriptSrc = [
      "'self'",
      "'unsafe-inline'",
      ...(isDev ? ["'unsafe-eval'"] : []),
    ].join(" ");

    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              `script-src ${scriptSrc}`,
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https://images.unsplash.com https://wealthy-power-26376c166d.media.strapiapp.com",
              "font-src 'self'",
              "connect-src 'self' https://wealthy-power-26376c166d.strapiapp.com",
              "frame-src 'none'",
              "frame-ancestors 'none'",
              "form-action 'self'",
              "base-uri 'self'",
            ].join('; '),
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
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