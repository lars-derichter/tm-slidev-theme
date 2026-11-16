# Thomas More style guide

A portable description of the Thomas More house style as implemented in this
theme, extracted from the official PowerPoint template
(`TM-PPT-sjabloon_2023-03-10_NL.pptx`, theme "TM Colors Final"). Use it to
reproduce the look in any medium; the final section is a condensed prompt
for LLM tools.

## 1. Essence

Flat, geometric, and orange-led. Solid color planes, square corners, a
wide geometric sans for titles over a neutral grotesque body. One accent
dominates (brand orange), one dark tone counters it (navy). Decoration comes
from two abstract patterns — a square grid and a zigzag wave — always as a
single flat tint band, never as texture or gradient. Exactly one element in
the whole system is rounded: the quote attribution pill.

## 2. Colour

### Core palette

| Role         | Hex       | Notes                           |
| ------------ | --------- | ------------------------------- |
| Brand orange | `#FA6432` | Titles, logo, primary accent    |
| Deep orange  | `#F04619` | Pattern tint on orange grounds  |
| Navy         | `#00283C` | Dark ground, subtitles, kickers |
| Black        | `#000000` | Body text, pattern tint on navy |
| White        | `#FFFFFF` | Default ground                  |
| Light grey   | `#E8EBEE` | Pattern tint on white grounds   |
| Panel fill   | `#F2F5F8` | Code panels, table cells        |
| Link blue    | `#00637C` | Hyperlinks                      |

### Accent palette (charts, labels)

Amber `#FFC87B` · teal `#00627B` · cyan `#63C8C8` · green `#86D278` · lime
`#C8E163`. Cycle them in this order for chart series. Teal, green and navy
also work as text accents; amber, cyan and lime are too light for text on
white.

### The three colorways

| Colorway | Ground    | Titles | Body  | Logo   | Pattern tint |
| -------- | --------- | ------ | ----- | ------ | ------------ |
| White    | `#FFFFFF` | orange | black | orange | `#E8EBEE`    |
| Orange   | `#FA6432` | white  | white | white  | `#F04619`    |
| Navy     | `#00283C` | orange | white | white  | black        |

White is the working colorway for content; orange and navy are for covers,
chapter dividers, quotes and closing slides.

### Contrast

Orange on white is ~2.9:1 — fine for large titles, never for body text.
Small text is black (on white) or white (on orange/navy). Links take link
blue on white, navy on orange, cyan on navy.

## 3. Typography

| Role     | Face                            | Notes                             |
| -------- | ------------------------------- | --------------------------------- |
| Headings | Century Gothic (Poppins on web) | Wide geometric, single-story `a`  |
| Body     | Arial / Helvetica               | Neutral grotesque, system stack   |
| Code     | IBM Plex Mono                   | Not part of the PPT; theme choice |

Scale and weights (PPT points → theme rem):

| Role                 | PPT  | Theme      | Weight      | Colour            |
| -------------------- | ---- | ---------- | ----------- | ----------------- |
| Title-slide title    | 54pt | 2.6rem     | regular     | orange (or white) |
| Quote / end title    | 54pt | 2.1–2.6rem | bold        | orange (or white) |
| Content title        | 44pt | 2.1rem     | bold        | orange (or white) |
| Cover subtitle       | 28pt | 1.35rem    | bold        | navy (or white)   |
| Kicker (eyebrow)     | 24pt | 0.95rem    | bold italic | navy (or white)   |
| Body                 | 24pt | 1.15rem    | regular     | black (or white)  |
| Footer / page number | 12pt | 0.7rem     | regular     | black (or white)  |

Titles are set tight (PPT 85% line spacing; use ~0.95 on the web), body at
PPT 90% (use ~1.35 on the web). Headings never letterspace, never uppercase.

## 4. Layout and composition

- Canvas 16:9. Side gutters 4.25% of the width; content width ~91.5%.
- Title band starts ~4.4% from the top; body content from ~24%.
- Footer band at ~94%: deck title left, page number right.
- Logo (wordmark): top-left at 4.25% / 7%, width 10.45% of the slide
  (aspect ratio 2.506). Orange on white, white on orange/navy.
- Decorative pattern: a full-width band, ~37% of the slide height, flush
  against the top or bottom edge, in the colorway's pattern tint.
- Half-bleed photo column: 47.9% of the slide width, full height, square.
- Two columns: equal widths with a hairline divider (`#E8EBEE`).
- Everything left-aligned except quotes (centered).

## 5. Lists

The PPT bullet system:

- Intro paragraphs carry **no bullet** — plain text.
- Bullet level 1: orange `•`, bold marker.
- Bullet level 2: navy `•`, slightly smaller text.
- Level 3 and deeper: plain `-` dash in the text colour.
- Numbered lists: numbers in the bullet colour, bold, in the heading face.
  Level 2 switches to letters (a, b, c) in the level-2 colour.
- On dark grounds the bullet colours flip with the colorway (white/navy on
  orange; orange/white on navy).

## 6. Imagery and ornament

- Photography is cropped to fill (`cover`); screenshots and diagrams are
  shown whole (`contain`) on the slide ground.
- Photo frames are square — no border radius, no shadows.
- Captions sit on a flat white (or colorway) block with a 3px orange left
  spine; credits are small corner labels.
- The two patterns: a square-grid motif and a zigzag wave motif, both flat
  single-tint SVGs. Use one per slide at most, as a band. Never overlay text
  on the busy part of a pattern.
- The quote attribution pill: navy ground, white text (orange ground on the
  navy colorway) — the only rounded element.

## 7. Applying it per medium

- **Slides (this theme):** everything above is implemented; author decks in
  Markdown and pick colorways per slide.
- **Web:** tokens map 1:1 to CSS custom properties; use the white colorway
  as the page default, navy for footers/heros.
- **Documents (Word/PDF):** Century Gothic headings in orange, Arial 11pt
  body in black, navy for subtitle lines; keep the logo top-left at ~10% of
  the page width.
- **Charts:** cycle the six accent colours (orange first), axis text black,
  no gridline decoration.

## 8. Do and don't

Do:

- Keep white the default ground; use orange/navy slides as punctuation.
- Reserve orange for titles, the logo and large marks.
- Keep corners square everywhere except the quote pill.
- Use one pattern band at most per slide.

Don't:

- No gradients, shadows, or transparency — the system is 100% flat.
- No orange body text on white (contrast).
- No uppercase or letterspaced headings.
- Don't recolor the patterns outside the per-colorway tints.

## 9. Condensed style prompt

```text
Thomas More house style: flat, geometric, orange-led. 16:9 slides, three
colorways — white ground (orange titles, black body), orange ground #FA6432
(all white), navy ground #00283C (orange titles, white body). Brand orange
#FA6432; deep orange #F04619; navy #00283C; pattern grey #E8EBEE; panel fill
#F2F5F8; link blue #00637C; chart accents #FFC87B, #00627B, #63C8C8,
#86D278, #C8E163. Headings: Century Gothic (fallback Poppins), bold, tight
(line-height 0.95), orange; title slides 54pt regular, content titles 44pt
bold. Body: Arial 24pt black, line-height ~1.35. Kickers: bold italic navy.
Bullets: level 1 orange •, level 2 navy •, deeper plain dash; intro
paragraphs unbulleted. Layout: 4.25% side gutters, footer band at 94% (title
left, page number right), wordmark logo top-left at 10.45% width. Ornament:
one flat single-tint pattern band (square-grid or zigzag wave SVG), ~37% of
slide height, flush to top or bottom edge. Photos crop to fill in square
frames; captions on flat blocks with a 3px orange left spine. Square corners
everywhere; the only rounded element is the navy quote-attribution pill with
white text. No gradients, no shadows, no transparency.
```
