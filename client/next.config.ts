import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "cdn.pixabay.com",
      "source.unsplash.com",
      "images.unsplash.com",
      "plus.unsplash.com",
      "w7.pngwing.com",
    ], // Replace with actual domain
  },
};

export default nextConfig;
