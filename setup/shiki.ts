import { defineShikiSetup } from "@slidev/types";

/*
 * A custom Shiki TextMate theme tuned to the TM palette, so code sits on the
 * light TM panel ground instead of importing a stock theme's blues/purples:
 *
 *   comments  cool grey, italic    keywords  TM navy
 *   strings   TM teal              numbers   darkened amber
 *   types     TM teal              text      navy-cast near-black
 *
 * Brand orange fails small-text contrast on this ground (~2.9:1), so the
 * code palette leans on navy/teal instead. Slidev highlights with Shiki by
 * default; the panel framing (mono font, inset surface, orange spine) lives
 * in `styles/code.css`.
 */

const ink = "#1A2530";

const tmLight = {
  name: "tm-light",
  type: "light" as const,
  colors: {
    "editor.background": "#F2F5F8",
    "editor.foreground": ink,
  },
  settings: [
    { settings: { background: "#F2F5F8", foreground: ink } },
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: { foreground: "#6B7A87", fontStyle: "italic" },
    },
    {
      scope: [
        "keyword",
        "storage",
        "storage.type",
        "storage.modifier",
        "keyword.control",
        "keyword.operator.new",
        "keyword.operator.expression",
        "variable.language",
      ],
      settings: { foreground: "#00283C" },
    },
    {
      scope: [
        "string",
        "string.quoted",
        "punctuation.definition.string",
        "constant.character",
      ],
      settings: { foreground: "#00627B" },
    },
    {
      scope: [
        "constant.numeric",
        "constant.language",
        "constant.language.boolean",
      ],
      settings: { foreground: "#B37700" },
    },
    {
      scope: [
        "entity.name.type",
        "support.type",
        "support.class",
        "entity.name.class",
        "entity.other.inherited-class",
      ],
      settings: { foreground: "#00627B" },
    },
    {
      scope: ["entity.name.function", "support.function", "meta.function-call"],
      settings: { foreground: ink },
    },
    {
      scope: ["variable", "variable.other", "meta.definition.variable"],
      settings: { foreground: ink },
    },
    {
      scope: ["punctuation", "meta.brace", "keyword.operator"],
      settings: { foreground: "#5B6770" },
    },
  ],
};

export default defineShikiSetup(() => {
  return {
    themes: {
      light: tmLight,
      dark: tmLight,
    },
  };
});
