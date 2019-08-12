<template>
  <textarea class="textarea" />
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.textarea {
  width: 100%;
  margin-bottom: 1em;
  border: 2px solid var(--grey);
  &:focus {
    outline: none;
    border-color: var(--teal);
  }
  padding: 0.5em 1em;
  font-size: inherit;
}
</style>