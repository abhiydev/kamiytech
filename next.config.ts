import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dkaz5tdzt/**", // 👈 use your Cloudinary cloud name here
      },
    ],
  },
};

export default nextConfig;
