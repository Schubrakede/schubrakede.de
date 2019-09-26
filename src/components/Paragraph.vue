<template>
  <p :class="['paragraph',{margin:margin}, {maxwidth:maxWidth}]">
    <slot />
  </p>
</template>

<script>
export default {
  props: ["margin", "maxWidth"]
};
</script>

<style scoped>
.paragraph {
  margin: 0;
  font-weight: 400;
  font-size: 22px;
  line-height: 1.5;
  font-family: var(--font);
}
.maxwidth {
  max-width: 30em;
}

.margin {
  margin-bottom: 120px;
}
</style>
