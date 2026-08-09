<!--
  Default layout — title + content (the PPT workhorse "Titel + inhoud").

  Frontmatter:
    color: white                  # colorway: white | orange | navy
-->
<script setup lang="ts">
withDefaults(defineProps<{ color?: "white" | "orange" | "navy" }>(), {
  color: "white",
});
</script>

<template>
  <div class="slidev-layout default" :class="`tm-${color}`">
    <slot />
    <Footer />
  </div>
</template>
