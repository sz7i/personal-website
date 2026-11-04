import Image from "next/image"

import { PricingTable } from "@/components/site/pricing-table"
import { SectionHeading } from "@/components/site/section-heading"
import { SiteHeader } from "@/components/site/site-header"
import { WorkGrid } from "@/components/site/work-grid"
import { intro, pricing, site, work } from "@/lib/site"

export default function Page() {
  const year = new Date().getFullYear()

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-background focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <SiteHeader />

      <main id="main" className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Introduction */}
        <section
          id="top"
          aria-labelledby="intro-heading"
          className="grid scroll-mt-16 grid-cols-1 items-end gap-12 pt-16 pb-24 md:grid-cols-12 md:gap-10 md:pt-28 md:pb-36"
        >
          <div className="md:col-span-7">
            <p className="mb-8 text-xs tracking-[0.2em] text-muted-foreground uppercase">
              {site.role} · {site.location}
            </p>
            <h1
              id="intro-heading"
              className="font-heading text-5xl leading-[1.05] font-normal tracking-tight text-balance md:text-7xl"
            >
              {intro.heading}
            </h1>
            <div className="mt-10 max-w-xl space-y-5 text-[0.95rem] leading-relaxed text-foreground/80">
              {intro.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
              <a
                href="#work"
                className="underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
              >
                See selected work
              </a>
              <a
                href={`mailto:${site.email}`}
                className="underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
              >
                {site.email}
              </a>
            </div>
          </div>
          <figure className="md:col-span-5">
            <Image
              src={intro.portrait.src}
              alt={intro.portrait.alt}
              width={intro.portrait.width}
              height={intro.portrait.height}
              sizes="(min-width: 1152px) 420px, (min-width: 768px) 40vw, 100vw"
              preload
              className="h-auto w-full bg-muted"
            />
          </figure>
        </section>

        {/* Work */}
        <section
          aria-labelledby="work-heading"
          className="scroll-mt-16 pb-28 md:pb-40"
          id="work"
        >
          <SectionHeading index="01" id="work-heading">
            Selected work
          </SectionHeading>
          <div className="mt-14">
            <WorkGrid photos={work} />
          </div>
        </section>

        {/* About / what I shoot */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="scroll-mt-16 pb-28 md:pb-40"
        >
          <SectionHeading index="02" id="about-heading">
            What I shoot
          </SectionHeading>
          <dl className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {intro.disciplines.map((d) => (
              <div key={d.name} className="space-y-2">
                <dt className="font-heading text-2xl">{d.name}</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">
                  {d.detail}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          aria-labelledby="pricing-heading"
          className="scroll-mt-16 pb-28 md:pb-40"
        >
          <SectionHeading index="03" id="pricing-heading">
            Pricing
          </SectionHeading>
          <p className="mt-8 mb-14 max-w-xl text-[0.95rem] leading-relaxed text-foreground/80">
            {pricing.intro}
          </p>
          <PricingTable packages={pricing.packages} />
          <p className="mt-10 text-sm text-muted-foreground">
            {pricing.footnote}{" "}
            <a
              href={`mailto:${site.email}?subject=Quote%20request`}
              className="text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
            >
              Write to me
            </a>
            .
          </p>
        </section>

        {/* Contact */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-16 pb-24 md:pb-32"
        >
          <SectionHeading index="04" id="contact-heading">
            Contact
          </SectionHeading>
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-12">
            <p className="text-[0.95rem] leading-relaxed text-foreground/80 md:col-span-4">
              For bookings, commissions or print enquiries, email is the best
              way to reach me. I reply within two working days.
            </p>
            <div className="md:col-span-8">
              <a
                href={`mailto:${site.email}`}
                className="font-heading text-[clamp(1.75rem,5.5vw,4.5rem)] leading-none tracking-tight break-all underline decoration-foreground/20 decoration-1 underline-offset-[0.18em] transition-colors hover:decoration-foreground"
              >
                {site.email}
              </a>
              <p className="mt-6 text-sm text-muted-foreground">
                Elsewhere:{" "}
                <a
                  href={site.instagram.url}
                  className="text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                >
                  Instagram {site.instagram.handle}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-6 py-8 text-xs text-muted-foreground sm:flex-row md:px-10">
          <p>
            © {year} {site.name}. All photographs are the property of the
            photographer.
          </p>
          <a href={`mailto:${site.email}`} className="hover:text-foreground">
            {site.email}
          </a>
        </div>
      </footer>
    </>
  )
}
