import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // `next dev` only serves its JS/HMR resources to localhost; opening it via
  // a machine name leaves the page un-hydrated (buttons do nothing). List extra
  // hosts in DEV_ORIGINS, e.g. DEV_ORIGINS=my-laptop in a gitignored .env.local.
  allowedDevOrigins:
    process.env.DEV_ORIGINS?.split(",")
      .map((h) => h.trim())
      .filter(Boolean) ?? [],
  images: {
    // Placeholder photography is served from picsum.photos.
    // Remove this once every image in lib/site.ts points at your own files in /public.
    remotePatterns: [new URL("https://picsum.photos/**")],
    // 75 is the default; 85 is used by the work grid.
    qualities: [75, 85],
  },
}

export default nextConfig
