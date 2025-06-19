/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./i18n.js');

const nextConfig = {
  sassOptions: {
    quietDeps: true, // This will silence deprecation warnings
    silenceDeprecations: ["mixed-decls", "legacy-js-api", "import"],
  },
  // Server configuration for handling large headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
  // Compress responses to reduce header overhead
  compress: true,
  // Optimize images to reduce header data
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  // Optimize for production
  // Reduce bundle size
  experimental: {
    optimizeCss: true,
  },
};

module.exports = withNextIntl(nextConfig);
