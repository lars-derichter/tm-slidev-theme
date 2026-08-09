<!--
  Running footer per the PPT master footer band: deck title left, page
  number right. Auto-imported; used by the default, two-cols-tm and toc
  layouts. Cover, section, quote, image and end slides carry no footer.
-->
<template>
  <footer class="tm-footer">
    <span class="tm-foot-title">{{ $slidev?.configs?.title }}</span>
    <span class="tm-foot-num">{{ $slidev?.nav?.currentPage }}</span>
  </footer>
</template>
