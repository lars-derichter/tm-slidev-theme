<!--
  Section divider (PPT "Hoofdstukslide").

  Frontmatter:
    layout: section
    color: white                  # colorway: white | orange | navy
    number: "01"                  # small numeral above the kicker (optional)
    eyebrow: Eerste deel          # bold-italic kicker above the title (optional)
    pattern: wave                 # grid | wave | none (default: wave)
    logo: true                    # set false to hide the wordmark

  Body: the section title as `# ...` and an optional subtitle paragraph.
-->
<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: "white" | "orange" | "navy";
    number?: string;
    eyebrow?: string;
    pattern?: "grid" | "wave" | "none";
    logo?: boolean;
  }>(),
  { color: "white", pattern: "wave", logo: true },
);
</script>

<template>
  <div class="slidev-layout tm-section" :class="`tm-${color}`">
    <TmLogo v-if="logo" />
    <TmPattern v-if="pattern !== 'none'" :variant="pattern" edge="bottom" />

    <div class="tm-section__main">
      <p class="tm-section__num" v-if="number">{{ number }}</p>
      <p class="eyebrow" v-if="eyebrow">{{ eyebrow }}</p>
      <slot />
    </div>
  </div>
</template>
