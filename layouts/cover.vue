<!--
  Cover layout — opening slide (PPT "Titelslide").

  Frontmatter:
    layout: cover
    color: white                  # colorway: white | orange | navy
    eyebrow: Webdesign basics     # small kicker above the title (optional)
    author: Lars De Richter       # name (optional)
    affiliation: Thomas More      # optional, after a dot
    pattern: grid                 # grid | wave | none (default: grid)
    logo: true                    # set false to hide the wordmark

  Body: the title as `# ...` and a bold subtitle paragraph.
-->
<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    color?: "white" | "orange" | "navy";
    eyebrow?: string;
    author?: string;
    presenter?: string; // deprecated, see below
    affiliation?: string;
    pattern?: "grid" | "wave" | "none";
    logo?: boolean;
    frontmatter?: Record<string, unknown>;
  }>(),
  { color: "white", pattern: "grid", logo: true },
);

// The cover usually is the first slide, whose frontmatter doubles as the
// deck's headmatter. There, Slidev strips its reserved config keys (such as
// `author`) from the layout props, so read them back from `frontmatter`.
//
// `presenter` is the old name for this field. On the first slide it collides
// with Slidev's presenter-mode switch (true | 'dev' | 'build'): any other
// value disables presenter mode. Still rendered for old decks, with a warning.
const legacyPresenter = computed(() => {
  const value = props.presenter ?? props.frontmatter?.presenter;
  return typeof value === "string" && value !== "dev" && value !== "build"
    ? value
    : undefined;
});

const presenterName = computed(
  () =>
    props.author ??
    (props.frontmatter?.author as string | undefined) ??
    legacyPresenter.value,
);

if (
  import.meta.env.DEV &&
  legacyPresenter.value &&
  presenterName.value === legacyPresenter.value
) {
  console.warn(
    "[slidev-theme-tm] cover: use `author:` for the name. " +
      "`presenter:` on the first slide disables presenter mode.",
  );
}
</script>

<template>
  <div class="slidev-layout tm-cover" :class="`tm-${color}`">
    <TmPattern v-if="pattern !== 'none'" :variant="pattern" edge="top" />
    <TmLogo v-if="logo" />

    <div class="tm-cover__main">
      <p class="eyebrow" v-if="eyebrow">{{ eyebrow }}</p>
      <slot />
    </div>

    <div class="tm-cover__by" v-if="presenterName || affiliation">
      <span class="name" v-if="presenterName">{{ presenterName }}</span>
      <span class="sep" v-if="presenterName && affiliation">·</span>
      <span v-if="affiliation">{{ affiliation }}</span>
    </div>
  </div>
</template>
