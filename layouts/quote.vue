<!--
  Quote — a large centered pull-quote (PPT "Quote slide").

  Frontmatter:
    layout: quote
    color: white                  # colorway: white | orange | navy
    author: Piet Pienter          # attribution, rendered in a pill (optional)

  Body: the quote text. Either a Markdown blockquote (`> ...`) or a plain
  paragraph works.
-->
<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: "white" | "orange" | "navy";
    author?: string;
  }>(),
  { color: "white" },
);
</script>

<template>
  <div class="slidev-layout tm-quote" :class="`tm-${color}`">
    <blockquote>
      <slot />
    </blockquote>
    <p class="tm-quote__by" v-if="author">{{ author }}</p>
  </div>
</template>
