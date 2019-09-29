<template>
  <ul :is="type" class="list">
    <slot />
  </ul>
</template>

<script>
export default {
  props: { type: { type: String, default: "ul" } }
};
</script>

<style lang="postcss">
.list {
  padding: 0;
  margin-left: 1em;
  li {
    margin: 0;
    padding: 0;
    margin-bottom: 1em;
  }
}
</style>