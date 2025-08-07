import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'cdn-icons-png.flaticon.com',
      // add other allowed domains here
    ],
  },
};

export default nextConfig;
