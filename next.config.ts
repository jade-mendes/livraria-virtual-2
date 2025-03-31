import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/images/I/**',
      },
      {
        protocol: 'https',
        hostname: 'a-static.mlcdn.com.br',
        port: '',
        pathname: '/800x560/**',
      },
      {
        protocol: 'https',
        hostname: 'harpercollins.com.br',
        port: '',
        pathname: '/cdn/shop/files/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/**',
      }
    ],
  },
  
};

export default nextConfig;
