<!--
  Two columns with a hairline divider (PPT "Titel + 2 kolommen").

  Frontmatter:
    layout: two-cols-tm
    color: white                  # colorway: white | orange | navy

  Body:
    ## Heading (before the first ::marker:: goes above both columns)
    ::left::
    Left column content
    ::right::
    Right column content
-->
<script setup lang="ts">
withDefaults(defineProps<{ color?: "white" | "orange" | "navy" }>(), {
  color: "white",
});
</script>

<template>
  <div class="slidev-layout tm-two-cols" :class="`tm-${color}`">
    <div class="tm-two-cols__head">
      <slot />
    </div>
    <div class="tm-two-cols__cols">
      <div class="tm-col-left">
        <slot name="left" />
      </div>
      <div class="tm-two-cols__divider" />
      <div class="tm-col-right">
        <slot name="right" />
      </div>
    </div>
    <Footer />
  </div>
</template>
