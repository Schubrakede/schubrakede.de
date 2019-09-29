<template>
  <div class="checkboxWrap">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.checkboxWrap {
  padding: 0.5em 0;
  display: grid;
  margin-bottom: 0.5em;
  align-items: center;
  grid-template-columns: auto 1fr;
  grid-gap: 0.3em;
}
</style>