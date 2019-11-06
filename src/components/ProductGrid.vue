<template>
  <div class="product-grid">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.product-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: calc(var(--sr-base) * 16);
  @media (--sr-tablet) {
    grid-template-columns: 1fr;
  }
}
</style>