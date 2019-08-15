<template>
  <input class="input" :type="type" />
</template>

<script>
export default {
  props: {
    type: {
      default: "text",
      type: String
    },
    label: {
      type: String
    }
  }
};
</script>

<style lang="postcss" scoped>
.input {
  width: 100%;
  margin-bottom: 1em;
  transition: border-color 220ms ease-out;
  border: 2px solid var(--grey);
  &:focus {
    outline: none;
    border-color: var(--teal);
  }
  padding: 0.5em 0.7em;
  font-size: inherit;
  &:invalid {
    border-color: var(--orange);
  }
}
</style>