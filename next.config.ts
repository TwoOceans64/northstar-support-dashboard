import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Use an absolute path so Vercel doesn’t duplicate folders
    root: path.resolve(__dirname, "Frontend/my-app"),
  },
};

export default nextConfig;