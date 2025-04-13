/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'via.placeholder.com',
      },
      {
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: '*.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'a17lfg3x.api.sanity.io',
      }
    ],
  },
  // Configure Logging in production for debugging
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
