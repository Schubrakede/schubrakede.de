<template>
  <g-link class="link" :to="href">
    <slot />
  </g-link>
</template>
<script>
export default {
  props: ["href"]
};
</script>
<style lang="postcss">
.link {
  font-weight: bold;
  color: var(--navy);
  border-bottom: 4px solid var(--teal);
  text-decoration: none;
  &:focus {
    border-color: var(--orange);
  }
}
</style>