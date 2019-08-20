<template>
  <button :href="href" :is="href ? 'a' : 'button'" :class="['button', {'secondary': secondary}]">
    <slot />
  </button>
</template>

<script>
export default {
  props: ["secondary", "href"]
};
</script>

<style lang="postcss">
.button {
  color: white;
  background: var(--starry-sky);
  border-radius: 4px;
  color: white;
  text-decoration: none;
  font-family: var(--font-headline);
  height: 56px;
  padding: 0 36px;
  display: inline-flex;
  font-size: inherit;
  align-items: center;
  font-weight: 600;

  justify-content: center;

  transition: box-shadow 120ms ease-in-out;

  @media (max-width: 520px) {
    font-weight: 500;
    padding: 0 28px;
    height: 42px;
  }

  &:focus,
  &:hover {
    box-shadow: 8px 8px 0 0 rgba(101, 133, 167, 0.3),
      4px 4px 0 0 rgba(134, 155, 177, 0.4);
  }
}
</style>
