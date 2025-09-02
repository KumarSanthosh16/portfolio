/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  redirects: async () => [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'https://www.consoledotlog.in/' }],
      destination: 'https://consoledotlog.in/:path*',
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
