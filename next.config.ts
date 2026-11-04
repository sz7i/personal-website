import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    // Placeholder photography is served from picsum.photos.
    // Remove this once every image in lib/site.ts points at your own files in /public.
    remotePatterns: [new URL("https://picsum.photos/**")],
    qualities: [75, 85], // 75 default, 85 for the work grid,
  },
}

export default nextConfig
