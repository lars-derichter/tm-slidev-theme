# tm-slidev-theme

## What this project is

A reusable [Slidev](https://sli.dev) theme in the Thomas More Hogeschool
house style, for Lars De Richter's TM presentations.

- npm package name: `slidev-theme-tm` (the `slidev-theme-` prefix is
  required for Slidev to resolve it).
- Slidev theme name: `tm` → decks select it with `theme: tm` in frontmatter.
- GitHub repo: `lars-derichter/tm-slidev-theme`.
- No open license (`"license": "UNLICENSED"`): the logo and patterns are
  Thomas More brand assets.

## How it's consumed

**Not published to npm.** Decks install it as a Git dependency:

```json
"slidev-theme-tm": "github:lars-derichter/tm-slidev-theme"
```

Slidev themes ship `.vue`/CSS source and need **no build step**, so a Git
install works as-is. `npm install` does not auto-update a Git dependency —
bump or reinstall to pull new commits, or pin a tag with `#vX.Y.Z`.

## Layout of the theme

This theme ships `styles/` (tokens + colorways + typography in `layout.css`,
code/table framing in `code.css`), `setup/shiki.ts` (a palette-matched Shiki
theme), components (`Footer`, `TmLogo`, `TmPattern`), and custom layouts:
`cover`, `toc`, `section`, `default` (adds the footer), `two-cols-tm`,
`quote`, `image-side`, `image-full`, `end`. Slidev's built-in layouts
(center, fact, …) still work and render as the white colorway.

`example.md` uses `theme: ./` to preview the theme locally (`npm run dev`).

## The colorway token contract

Every layout takes `color: white | orange | navy` frontmatter and puts
`tm-<color>` on its root. The three colorway classes in `layout.css` remap
**role tokens** (`--tm-bg`, `--tm-heading`, `--tm-text`, `--tm-pattern`, …).

**Layout CSS may only read role tokens — never raw hex and never the brand
tokens (`--tm-orange` etc.) directly** (exception: the fixed orange caption
spine and hairlines that stay constant across colorways). That contract is
what makes every layout work in all three colorways for free.

## Asset provenance

The logo and the two pattern SVGs are inlined in `components/TmLogo.vue` and
`components/TmPattern.vue`, cleaned to single `currentColor` paths. Source:
the official template `TM-PPT-sjabloon_2023-03-10_NL.pptx` (Media Comm,
2023 — not committed here; get it from the TM intranet). A `.pptx` is a ZIP:

```bash
unzip -o TM-PPT-sjabloon_2023-03-10_NL.pptx -d /tmp/tm-pptx
# logo: ppt/media/image2.svg   grid: image4.svg   wave: image10.svg
# demo photo (public/demo.jpg): ppt/media/image16.jpeg
```

Cleanup applied: dropped `<style>` blocks / `class=` / hardcoded fills,
`fill="currentColor"` on the root `<svg>`, viewBox kept, no width/height.

## Gotchas worth knowing

- Size anything inside a slide in `rem`/`px`, **never `vh`**: the slide is a
  fixed canvas that gets transform-scaled, so viewport units measure the
  browser window instead.
- Line heights deviate from the PPT on purpose (titles 0.95 vs 85%, body
  1.35 vs 90%) — the PPT values clip on the web. Don't "fix" them back.
- `presenter` is a reserved Slidev headmatter key: on the first slide it is
  stripped from layout props. `cover.vue` reads it back from the
  `frontmatter` prop Slidev also passes.
- In `layouts/toc.vue`, `<Toc>` must be imported explicitly from
  `@slidev/client/builtin/Toc.vue` — a bare `<Toc>` resolves to the layout
  itself (Vue filename self-reference) and recurses.
- Image paths: `image:` frontmatter takes `/demo.jpg` (the layout prepends
  `BASE_URL`); Markdown images need a relative `./public/demo.jpg`.

## Conventions

- Plain CSS in `styles/` (no UnoCSS `@apply`) to keep it approachable.
- Output docs as Markdown, wrapped at 80 characters.
- Keep additions minimal and intentional; the house style is flat and
  square — no gradients, shadows, or rounded corners (quote pill excepted).
