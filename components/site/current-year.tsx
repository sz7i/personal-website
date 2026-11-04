"use client"

/**
 * The page is statically prerendered, so the year is re-evaluated in the
 * browser to stay current between deploys.
 */
export function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>
}
