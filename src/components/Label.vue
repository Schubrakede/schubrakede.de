<template>
  <label :class="['label', {'label--nomargin': noMargin}]">
    <slot />
  </label>
</template>

<script>
export default {
  props: ["htmlFor", "noMargin"]
};
</script>

<style scoped lang="postcss">
.label {
  display: block;
  margin-bottom: 0.3em;
}
.label--nomargin {
  margin-bottom: 0;
}
</style>