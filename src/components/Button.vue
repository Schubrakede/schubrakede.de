<template>
  <button
    v-on:click="$emit('click')"
    :href="href"
    :is="href ? 'a' : 'button'"
    :class="['button', {'secondary': secondary}, color ?  color : '']"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: ["secondary", "href", "color"]
};
</script>

<style lang="postcss">
.button {
  color: white;
  background: var(--starry-sky);
  color: white;
  text-decoration: none;
  border-radius: 3px;
  font-family: var(--font-headline);
  height: 56px;
  padding: 0 36px;
  border: none;
  display: inline-flex;
  font-size: inherit;
  align-items: center;
  font-weight: 600;

  justify-content: center;

  transition: box-shadow 120ms ease-in-out;

  @media (max-width: var(--mobile)) {
    font-weight: 500;
    padding: 0 28px;
    height: 42px;
  }

  &.green {
    color: var(--starry-sky);
    background: var(--green);
  }
  &.teal {
    color: var(--starry-sky);
    background: var(--sr-sky-gradient);
  }
  &.yellow {
    background: var(--yellow);
    color: var(--starry-sky);
  }

  &:focus,
  &:hover {
    box-shadow: 8px 8px 0 0 rgba(101, 133, 167, 0.3),
      4px 4px 0 0 rgba(134, 155, 177, 0.4);
  }
}
</style>
