# Personal website

Portfolio site for a photographer, built with Next.js and shadcn/ui
(scaffolded with `pnpm dlx shadcn@latest init --preset b5rR41Mtnc --template next --pointer`).

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm lint && pnpm typecheck
```

Opening the dev server from another device or via a hostname other than
`localhost` (e.g. `http://my-laptop:3000`)? Allow that host in a gitignored
`.env.local`, then restart `pnpm dev`:

```bash
DEV_ORIGINS=my-laptop        # comma-separated for several hosts
```

In development, press <kbd>d</kbd> to toggle dark mode. Visitors use the "Dark mode" / "Light mode" switch in the footer.

## Editing content

All copy, prices and image references are in `lib/site.ts`.
The images are placeholders from picsum.photos — see
[PLACEHOLDERS.md](./PLACEHOLDERS.md) for what to replace.

## Design

- **Headings:** Cormorant Garamond (display serif)
- **Body:** Geist (neutral grotesque)
- Warm off-white paper and near-black ink, square corners, hairline rules,
  generous whitespace. Photos carry the colour.
