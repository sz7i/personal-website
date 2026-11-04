/**
 * All site copy and imagery lives here so it can be edited in one place.
 *
 * Every `src` that starts with https://picsum.photos is a placeholder.
 * See PLACEHOLDERS.md for the full list of images to replace.
 */

export type Photo = {
  src: string
  alt: string
  width: number
  height: number
  title: string
  meta: string
}

const picsum = (seed: string, width: number, height: number) =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`

export const site = {
  name: "Mara Lindqvist",
  role: "Photographer",
  location: "Based in Lisbon, working across Europe",
  email: "hello@maralindqvist.com",
  instagram: { handle: "@maralindqvist", url: "https://instagram.com/" },
  description:
    "Mara Lindqvist photographs people, places and quiet moments — portraits, weddings and editorial work.",
}

export const intro = {
  heading: "Photographs of people, and the light they live in.",
  body: [
    "I’m Mara, a photographer working mostly with natural light. I spent ten years assisting in studios before going out on my own, and what stayed with me is patience: waiting for the moment a person stops performing for the camera.",
    "Most of my work is portraiture, small weddings and editorial commissions. I shoot digitally and on medium-format film, and I edit every image myself.",
  ],
  portrait: {
    src: picsum("mara-portrait", 900, 1200),
    alt: "Placeholder: portrait of the photographer",
    width: 900,
    height: 1200,
  },
  disciplines: [
    { name: "Portraits", detail: "Individuals, families, artists at work" },
    { name: "Weddings", detail: "Elopements and gatherings under 80 guests" },
    { name: "Editorial", detail: "Features, interiors and travel stories" },
    { name: "Landscape", detail: "Personal work, prints available on request" },
  ],
}

export const work: Photo[] = [
  {
    src: picsum("work-01", 1200, 1500),
    alt: "Placeholder: portrait in window light",
    width: 1200,
    height: 1500,
    title: "Inês, at home",
    meta: "Portrait · Lisbon · 2026",
  },
  {
    src: picsum("work-02", 1600, 1067),
    alt: "Placeholder: coastline at dusk",
    width: 1600,
    height: 1067,
    title: "Costa Vicentina",
    meta: "Landscape · 2025",
  },
  {
    src: picsum("work-03", 1200, 1500),
    alt: "Placeholder: couple walking through a field",
    width: 1200,
    height: 1500,
    title: "Ana & Tomás",
    meta: "Wedding · Alentejo · 2025",
  },
  {
    src: picsum("work-04", 1200, 1500),
    alt: "Placeholder: ceramicist in her studio",
    width: 1200,
    height: 1500,
    title: "The potter’s hands",
    meta: "Editorial · Kinfolk · 2025",
  },
  {
    src: picsum("work-05", 1600, 1067),
    alt: "Placeholder: interior with morning light",
    width: 1600,
    height: 1067,
    title: "Casa do Rio",
    meta: "Interiors · Porto · 2024",
  },
  {
    src: picsum("work-06", 1200, 1500),
    alt: "Placeholder: musician backstage",
    width: 1200,
    height: 1500,
    title: "Before the set",
    meta: "Portrait · Berlin · 2024",
  },
  {
    src: picsum("work-07", 1200, 1500),
    alt: "Placeholder: wedding guests dancing",
    width: 1200,
    height: 1500,
    title: "Late summer",
    meta: "Wedding · Sintra · 2024",
  },
  {
    src: picsum("work-08", 1600, 1067),
    alt: "Placeholder: mountain lake in fog",
    width: 1600,
    height: 1067,
    title: "Lago di Braies",
    meta: "Landscape · 2023",
  },
]

export type Package = {
  name: string
  price: string
  unit: string
  summary: string
  includes: string[]
}

export const pricing = {
  intro:
    "Every commission is a little different, so these are starting points. Travel within Portugal is included; elsewhere it is quoted at cost.",
  packages: [
    {
      name: "Portrait session",
      price: "€450",
      unit: "from",
      summary: "For individuals, couples and families.",
      includes: [
        "Up to two hours, one or two locations",
        "Thirty edited images",
        "Private online gallery",
        "Delivered within two weeks",
      ],
    },
    {
      name: "Elopements & small weddings",
      price: "€2,400",
      unit: "from",
      summary: "For ceremonies of up to eighty guests.",
      includes: [
        "Up to eight hours of coverage",
        "A planning call and location scouting",
        "Every usable frame, fully edited",
        "Delivered within six weeks",
      ],
    },
    {
      name: "Editorial & commercial",
      price: "€1,200",
      unit: "per day",
      summary: "For publications, brands and studios.",
      includes: [
        "Half-day rate available",
        "Usage licence agreed per project",
        "Retouching and colour grading",
        "Film or digital",
      ],
    },
  ] satisfies Package[],
  footnote:
    "Prints, albums and additional hours can be added to any package. Ask for a tailored quote.",
}
