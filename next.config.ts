import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  allowedDevOrigins: ["*"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "ae01.alicdn.com" },
      { protocol: "https", hostname: "**.aliexpress.com" },
    ],
  },
};
export default nextConfig;
