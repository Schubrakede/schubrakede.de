<template>
  <div class="buttonGroup">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style>
.buttonGroup {
  display: grid;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  justify-content: center;
  grid-gap: 20px;
}
</style>
