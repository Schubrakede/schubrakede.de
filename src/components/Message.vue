<template>
  <div class="message">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
@keyframes appear {
  0% {
    opacity: 0;
  }
}
.message {
  animation: appear 250ms ease-in 1;
  margin: 1em 0;
  border-radius: 4px;
  padding: 1em;
  background: var(--green);
}
</style>