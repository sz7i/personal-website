import type { Package } from "@/lib/site"

/**
 * Pricing as a quiet, ruled table: each package is a column on wide screens
 * and a stacked row on small ones. No cards, no highlights — the numbers
 * carry the information.
 */
export function PricingTable({ packages }: { packages: Package[] }) {
  return (
    <div className="grid grid-cols-1 border-t border-foreground/15 md:grid-cols-3">
      {packages.map((pkg, i) => (
        <section
          key={pkg.name}
          aria-labelledby={`package-${i}`}
          className="flex flex-col gap-6 border-b border-foreground/15 py-10 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0 md:[&:not(:first-child)]:border-l"
        >
          <div className="space-y-2">
            <h3 id={`package-${i}`} className="font-heading text-2xl">
              {pkg.name}
            </h3>
            <p className="text-sm text-muted-foreground">{pkg.summary}</p>
          </div>
          <p className="flex items-baseline gap-2">
            {pkg.unit === "from" && (
              <span className="text-xs tracking-widest text-muted-foreground uppercase">
                From
              </span>
            )}
            <span className="font-heading text-4xl lining-nums tabular-nums">
              {pkg.price}
            </span>
            {pkg.unit !== "from" && (
              <span className="text-xs tracking-widest text-muted-foreground uppercase">
                {pkg.unit}
              </span>
            )}
          </p>
          <ul className="space-y-2.5 text-sm">
            {pkg.includes.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-[0.6em] h-px w-3 shrink-0 bg-foreground/40"
                />
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
