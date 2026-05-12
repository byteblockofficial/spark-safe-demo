import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/spark-safe-demo",
  images: { unoptimized: true },
};

export default nextConfig;
