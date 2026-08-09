<!--
  End / thanks slide (PPT "Eindslide").

  Frontmatter:
    layout: end
    color: white                  # colorway: white | orange | navy
    contact: |                    # optional contact block (multi-line)
      Lars De Richter
      lars.derichter@thomasmore.be
    pattern: wave                 # grid | wave | none (default: wave)
    logo: true                    # set false to hide the wordmark

  Body: a closing line as `# ...` (e.g. "Bedankt!").
-->
<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: "white" | "orange" | "navy";
    contact?: string;
    pattern?: "grid" | "wave" | "none";
    logo?: boolean;
  }>(),
  { color: "white", pattern: "wave", logo: true },
);
</script>

<template>
  <div class="slidev-layout tm-end" :class="`tm-${color}`">
    <TmLogo v-if="logo" />
    <TmPattern v-if="pattern !== 'none'" :variant="pattern" edge="top" />

    <div class="tm-end__main">
      <slot />
    </div>

    <p class="tm-end__contact" v-if="contact">{{ contact }}</p>
  </div>
</template>
