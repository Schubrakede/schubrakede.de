<template>
  <textarea class="textarea" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" />
</template>

<script>
export default {
  props: { value: String }
};
</script>

<style lang="postcss" scoped>
.textarea {
  min-height: 8em;
  width: 100%;
  font-family: inherit;
  margin-bottom: 0.5em;
  border: 2px solid var(--bley);
  &:focus {
    outline: none;
    border-color: var(--teal);
  }
  &:invalid {
    border-color: var(--orange);
  }
  padding: 0.5em 0.7em;
  font-size: inherit;
}
</style>