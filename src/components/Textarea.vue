<template>
  <textarea class="textarea" />
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.textarea {
  min-height: 8em;
  width: 100%;
  font-family: inherit;
  margin-bottom: 1em;
  border: 2px solid var(--grey);
  &:focus {
    outline: none;
    border-color: var(--teal);
  }
  padding: 0.5em 0.7em;
  font-size: inherit;
}
</style>