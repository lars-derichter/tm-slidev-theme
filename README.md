# tm-slidev-theme

A [Slidev](https://sli.dev) theme in the Thomas More Hogeschool house style —
package name `slidev-theme-tm`, theme name `tm`. Flat color and square
corners, brand orange `#FA6432` with a navy `#00283C` counterweight, Century
Gothic headings over an Arial body, and the official decorative patterns and
wordmark, all derived from the official PowerPoint template
(`TM-PPT-sjabloon_2023-03-10_NL.pptx`, not included in this repo).

Century Gothic ships with MS Office, not the web: headings use it when it is
installed and fall back to [Poppins](https://fonts.google.com/specimen/Poppins)
(the closest free geometric) elsewhere. Code uses
[IBM Plex Mono](https://www.ibm.com/plex/).

Not published to npm; consumed directly from this Git repository. No open
license: the Thomas More logo and patterns are the school's brand assets —
this theme is for TM-affiliated use.

## Layouts

| Layout        | For                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------ |
| `cover`       | Opening slide (`eyebrow`, `presenter`, `affiliation`, `pattern`, `logo`)                         |
| `toc`         | Table of contents in the Inhoudstafel style (`columns`, `maxDepth`, `mode`, `logo`)              |
| `section`     | Chapter divider (`number`, `eyebrow`, `pattern`, `logo`)                                         |
| `default`     | Content slides — heading + list, code, prose                                                     |
| `two-cols-tm` | Full-width heading over two columns (`::left::` / `::right::`)                                   |
| `quote`       | Large centered pull-quote with attribution pill (`author`)                                       |
| `image-side`  | Half-bleed image beside a text column (`image`, `eyebrow`, `caption`, `credit`, `side`, `fit`)   |
| `image-full`  | Full-bleed image, caption on a flat color block (`image`, `eyebrow`, `caption`, `credit`, `fit`) |
| `end`         | Closing / thanks slide (`contact`, `pattern`, `logo`)                                            |

Every custom layout is exercised in [example.md](example.md). Frontmatter
options are documented at the top of each file in [layouts/](layouts/).

Both image layouts crop to fill by default (`fit: cover`), which suits
photography. Set `fit: contain` for anything you must not crop — screenshots,
diagrams, tall artwork; the image is then shown whole on the slide ground.

On the toc slide, set `hideInToc: true` so it does not list itself, and put
the heading in the slide body (`# Inhoud`) — the `title:` frontmatter key
would also rename the slide inside the generated list.

## Colorways

The PowerPoint template ships three slide masters; every layout takes the
same `color` frontmatter option:

```yaml
layout: section
color: navy # white (default) | orange | navy
```

| Colorway | Background | Titles | Text  | Pattern     |
| -------- | ---------- | ------ | ----- | ----------- |
| `white`  | white      | orange | black | light grey  |
| `orange` | orange     | white  | white | deep orange |
| `navy`   | navy       | orange | white | black       |

Bullets, links, the footer and the logo recolor along. White is the default
and the intended colorway for content; use orange and navy for covers,
section dividers, quotes and the end slide. Slides on a built-in layout
(`center`, `fact`, …) always render as the white colorway.

`cover`, `section` and `end` place a decorative pattern band
(`pattern: grid | wave | none`) and the wordmark (`logo: false` hides it).

## Images in Markdown

A Markdown image on a line of its own is centred, capped at `15rem` tall, and
set on a light panel with a square hairline. Images that sit inline in a
sentence are left alone.

Override the height with an [UnoCSS](https://unocss.dev) utility via MDC:

```md
![Sprite sheet](./public/sprite-sheet.png){.max-h-20}
```

**Mind the path.** The two kinds of image are resolved by different machinery:

| Where                      | Path                           | Why                                                                    |
| -------------------------- | ------------------------------ | ---------------------------------------------------------------------- |
| `image:` frontmatter       | `/demo.jpg`                    | Handed to CSS `url()`; the layout prepends `BASE_URL` itself           |
| Markdown `![]()` / `<img>` | `./public/demo.jpg` (relative) | Compiled to a Vite import, which hashes the asset and applies the base |

A root-relative `![](/demo.jpg)` works in `npm run dev` but **fails the
build** with `resolves outside of Vite server.fs.allow`. From a slide file in
`pages/`, the path is `../public/demo.jpg`.

## Styling helpers in Markdown

With `mdc: true` in the headmatter, Slidev enables [MDC
syntax](https://sli.dev/features/mdc), which lets you attach classes to
Markdown without writing HTML. **The class must sit on the same line as the
text.**

`.eyebrow` renders the TM kicker — bold italic in the heading face, navy on
light slides, white on dark ones:

```md
Voorbeeld {.eyebrow}
```

Colour utilities override the colour of any element — pair them with
`.eyebrow` or use them on their own. Available: `orange`, `navy`, `teal`,
`cyan`, `amber`, `green`, `lime`, `black`, `white`, `grey`.

```md
Top-down {.eyebrow.teal}
A [teal]{.teal} word inline.
```

Brand orange fails contrast for small text on white (~2.9:1) — keep `.orange`
for headings. Amber, cyan and lime are chart colors, too light for text on a
white slide.

## Use it in a presentation

Add it as a Git dependency in the deck's `package.json`:

```json
"dependencies": {
  "slidev-theme-tm": "github:lars-derichter/tm-slidev-theme"
}
```

Run `npm install`, then in `slides.md` frontmatter:

```yaml
theme: tm
```

`theme: tm` resolves `slidev-theme-tm` from `node_modules` — no npm registry
involved. Pin a version with `github:lars-derichter/tm-slidev-theme#v1.0.0`.

## Develop and preview

```bash
npm install
npm run dev      # opens example.md with this theme (theme: ./)
```

Edit [styles/layout.css](styles/layout.css) to change the look; the preview
reloads on save. The palette and type live as `--tm-*` CSS variables at the
top of that file: brand tokens first, then the role tokens the colorways
remap — layout rules only ever read role tokens.

Run `npm run format` to format everything with Prettier. Deck Markdown is
formatted by
[`prettier-plugin-slidev`](https://www.npmjs.com/package/prettier-plugin-slidev)
(configured in [.prettierrc](.prettierrc)) so its multiple frontmatter blocks
survive formatting — the default Markdown parser reflows them into headings
and breaks the deck.

## Structure

| Path                     | Purpose                                                           |
| ------------------------ | ----------------------------------------------------------------- |
| `styles/index.ts`        | Global style entry point Slidev imports                           |
| `styles/layout.css`      | Tokens, colorways, typography, every layout's look                |
| `styles/code.css`        | Code-panel and table framing                                      |
| `setup/shiki.ts`         | Custom Shiki theme matching the palette                           |
| `layouts/`               | Custom `.vue` slide layouts                                       |
| `components/`            | Auto-imported `.vue` components (`Footer`, `TmLogo`, `TmPattern`) |
| `public/`                | Assets served at deck root (demo photo)                           |
| `docs/tm-style-guide.md` | Portable brand style guide                                        |
| `example.md`             | Preview deck (`theme: ./`)                                        |

See the [Slidev theme docs](https://sli.dev/guide/write-theme) for what a
theme can contribute.

Made with [Slidev](https://sli.dev). &copy; Lars De Richter — Thomas More
brand assets &copy; Thomas More Hogeschool.
