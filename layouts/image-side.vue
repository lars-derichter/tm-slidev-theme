<!--
  Split slide: a text column beside a full-height image panel
  (PPT "Titel + inhoud + foto").

  Frontmatter:
    layout: image-side
    color: white                # colorway: white | orange | navy
    image: /demo.jpg            # path under the deck's public/ folder
    eyebrow: Figuur 2           # small kicker above the heading (optional)
    caption: Een korte uitleg   # muted line under the text (optional)
    credit: Foto · Unsplash     # corner credit over the image (optional)
    side: right                 # which side the image sits on (default: right)
    fit: contain                # cover (default) fills and crops the panel;
                                # contain fits the whole image — use it for
                                # screenshots, diagrams and tall artwork

  Body: the heading as `## ...` plus any supporting text.
-->
<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    color?: "white" | "orange" | "navy";
    image?: string;
    eyebrow?: string;
    caption?: string;
    credit?: string;
    side?: "left" | "right";
    fit?: "cover" | "contain";
  }>(),
  { color: "white" },
);

// Same reasoning as image-full: a frontmatter path handed to CSS url() is
// opaque to Slidev's asset rewriting, so a root-relative path 404s on subpath
// deploys. Prepend BASE_URL ourselves.
const bg = computed(() => {
  const src = props.image;
  if (!src) return undefined;
  if (/^(https?:|data:)/.test(src) || !src.startsWith("/")) return src;
  return import.meta.env.BASE_URL + src.slice(1);
});

const imageLeft = computed(() => props.side === "left");
</script>

<template>
  <div
    class="slidev-layout tm-image-side"
    :class="[`tm-${props.color}`, { 'tm-image-side--flip': imageLeft }]"
  >
    <div class="tm-image-side__text">
      <p class="eyebrow" v-if="eyebrow">{{ eyebrow }}</p>
      <slot />
      <p class="tm-image-side__caption" v-if="caption">{{ caption }}</p>
    </div>
    <div
      class="tm-image-side__panel"
      :class="{ 'tm-fit-contain': fit === 'contain' }"
      :style="bg ? { backgroundImage: `url(${bg})` } : undefined"
    >
      <div class="tm-image-side__credit" v-if="credit">{{ credit }}</div>
    </div>
  </div>
</template>
