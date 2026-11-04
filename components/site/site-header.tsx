import { site } from "@/lib/site"

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6 md:px-10">
        <a
          href="#top"
          className="font-heading text-xl tracking-tight whitespace-nowrap"
        >
          {site.name}
        </a>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8 text-[0.8rem] tracking-wide text-muted-foreground">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={`mailto:${site.email}`}
          className="text-[0.8rem] tracking-wide underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
        >
          <span className="hidden sm:inline">{site.email}</span>
          <span className="sm:hidden">Email me</span>
        </a>
      </div>
    </header>
  )
}
