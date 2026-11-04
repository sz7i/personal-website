# Placeholders to replace

Everything below lives in `lib/site.ts`. Put your own photos in `public/photos/`
and change each `src` to a local path (e.g. `/photos/portrait.jpg`), keeping
`width`/`height` equal to the real pixel size of the file and writing a real
`alt` description. When no `picsum.photos` URL remains, delete the
`remotePatterns` entry in `next.config.ts`.

## Images

| Where on the page | Field in `lib/site.ts` | Current placeholder | Suggested shape |
| --- | --- | --- | --- |
| Introduction, right column | `intro.portrait` | `picsum.photos/seed/mara-portrait/900/1200` | Portrait 3:4 — a photo of you, or a signature image |
| Selected work #1 | `work[0]` | `seed/work-01/1200/1500` | Portrait 4:5 |
| Selected work #2 (full width) | `work[1]` | `seed/work-02/1600/1067` | Landscape 3:2 |
| Selected work #3 | `work[2]` | `seed/work-03/1200/1500` | Portrait 4:5 |
| Selected work #4 | `work[3]` | `seed/work-04/1200/1500` | Portrait 4:5 |
| Selected work #5 (full width) | `work[4]` | `seed/work-05/1600/1067` | Landscape 3:2 |
| Selected work #6 | `work[5]` | `seed/work-06/1200/1500` | Portrait 4:5 |
| Selected work #7 | `work[6]` | `seed/work-07/1200/1500` | Portrait 4:5 |
| Selected work #8 (full width) | `work[7]` | `seed/work-08/1600/1067` | Landscape 3:2 |

The grid lays out automatically: landscape frames span the full width,
portrait frames pair up side by side. You can add or remove entries freely;
a pair of portraits between landscapes keeps the rhythm.

## Text and details

- `site.name`, `site.location`, `site.email`, `site.instagram` — placeholder
  identity ("Mara Lindqvist", `hello@maralindqvist.com`).
- `intro.heading`, `intro.body`, `intro.disciplines` — introduction copy.
- `work[].title` / `work[].meta` — captions for each photo.
- `pricing.packages` — package names, prices and what is included.
