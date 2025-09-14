import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's.krea.ai',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;