import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // `next dev` blocks its JS/HMR resources for any host other than localhost,
  // which leaves the page un-hydrated (buttons do nothing) when it is opened
  // via the machine name. Extra hosts: DEV_ORIGINS="host1,host2".
  allowedDevOrigins: [
    "lenovo",
    ...(process.env.DEV_ORIGINS?.split(",").map((h) => h.trim()) ?? []),
  ].filter(Boolean),
  images: {
    // Placeholder photography is served from picsum.photos.
    // Remove this once every image in lib/site.ts points at your own files in /public.
    remotePatterns: [new URL("https://picsum.photos/**")],
    // 75 is the default; 85 is used by the work grid.
    qualities: [75, 85],
  },
}

export default nextConfig
