import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "conncitfy-bucket-salt.s3.eu-north-1.amazonaws.com",
      "unsplash.com",
    ],
  },
};

export default nextConfig;
