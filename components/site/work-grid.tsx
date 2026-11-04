import Image from "next/image"

import { cn } from "@/lib/utils"
import type { Photo } from "@/lib/site"

// Track position within each run of portrait frames so the right-hand
// frame of every pair is the one that drops down.
function layout(photos: Photo[]) {
  const items = []
  let column = 0
  for (const photo of photos) {
    const landscape = photo.width > photo.height
    items.push({ photo, landscape, offset: !landscape && column % 2 === 1 })
    column = landscape ? 0 : column + 1
  }
  return items
}

/**
 * A two-column editorial grid. Landscape frames span both columns,
 * portrait frames sit side by side, so the rhythm alternates naturally.
 */
export function WorkGrid({ photos }: { photos: Photo[] }) {
  const items = layout(photos)

  return (
    <ul className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 md:gap-y-20">
      {items.map(({ photo, landscape, offset }) => {
        return (
          <li
            key={photo.src}
            className={cn(landscape && "md:col-span-2", offset && "md:mt-24")}
          >
            <figure>
              <div className="overflow-hidden bg-muted">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes={
                    landscape
                      ? "(min-width: 1152px) 1072px, 100vw"
                      : "(min-width: 1152px) 520px, (min-width: 768px) 50vw, 100vw"
                  }
                  className="h-auto w-full transition-transform duration-700 ease-out motion-safe:hover:scale-[1.015]"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-[0.8rem]">
                <span className="font-heading text-base italic">
                  {photo.title}
                </span>
                <span className="text-muted-foreground">{photo.meta}</span>
              </figcaption>
            </figure>
          </li>
        )
      })}
    </ul>
  )
}
