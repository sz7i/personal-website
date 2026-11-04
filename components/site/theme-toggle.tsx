"use client"

import { useTheme } from "next-themes"

/** Visible, labelled light/dark switch (replaces the dev-only "d" hotkey for visitors). */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  // resolvedTheme is undefined until next-themes mounts, so server and first
  // client render match.
  const next = resolvedTheme === "dark" ? "light" : "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={
        resolvedTheme ? `Switch to ${next} mode` : "Toggle colour theme"
      }
      className={className}
    >
      {resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  )
}
