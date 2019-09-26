<template>
  <a class="link" :to="to && to" :is="to ? 'g-link' : 'a'" :href="href">
    <slot />
  </a>
</template>
<script>
export default {
  props: ["href", "to"]
};
</script>
<style lang="postcss">
.link {
  cursor: pointer;
  font-weight: bold;
  color: var(--navy);
  border-bottom: 4px solid var(--teal);
  text-decoration: none;
  &:focus {
    border-color: var(--orange);
  }
}
</style>