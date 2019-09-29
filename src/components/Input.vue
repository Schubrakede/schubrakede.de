<template>
  <input
    class="input"
    :type="type"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    value: String,
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
  font-family: inherit;
  width: 100%;
  margin-bottom: 1em;
  transition: border-color 220ms ease-out;
  border: 2px solid var(--bley);
  border-radius: 2px;
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