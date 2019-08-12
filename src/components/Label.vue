<template>
  <label class="label">
    <slot />
  </label>
</template>

<script>
export default {
  props: ["htmlFor"]
};
</script>

<style scoped lang="postcss">
.label {
  display: block;
  margin-bottom: 0.3em;
}
</style>