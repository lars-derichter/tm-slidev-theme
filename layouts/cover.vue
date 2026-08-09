<!--
  Cover layout — opening slide (PPT "Titelslide").

  Frontmatter:
    layout: cover
    color: white                  # colorway: white | orange | navy
    eyebrow: Webdesign basics     # small kicker above the title (optional)
    presenter: Lars De Richter    # name (optional)
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
    presenter?: string;
    affiliation?: string;
    pattern?: "grid" | "wave" | "none";
    logo?: boolean;
    frontmatter?: Record<string, unknown>;
  }>(),
  { color: "white", pattern: "grid", logo: true },
);

// The cover usually is the first slide, and there `presenter` is one of
// Slidev's reserved headmatter config keys — it gets stripped from the layout
// props. Slidev does pass the full frontmatter as a prop, so read it back.
const presenterName = computed(
  () => props.presenter ?? (props.frontmatter?.presenter as string | undefined),
);
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
