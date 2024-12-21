import type { NextConfig } from "next";

const nextConfig: NextConfig = {


};

export default nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
      },
    ],
  },
};