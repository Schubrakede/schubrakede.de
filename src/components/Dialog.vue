<template>
  <div class="dialog">
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
.dialog {
  animation: appear 350ms ease-in 1;
  background: var(--bley);
  padding: 1em;
  color: white;
  border-radius: var(--sr-border-radius);
}
</style>