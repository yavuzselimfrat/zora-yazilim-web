import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    // Pin the project root to this folder. Without this, Turbopack can
    // walk up and pick a parent directory as the workspace root if it
    // finds a stray lockfile there, which breaks module resolution.
    root: path.join(__dirname),
  },
};

export default nextConfig;
