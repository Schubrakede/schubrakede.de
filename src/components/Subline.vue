<template>
  <span :class="['subline', {small:small}]">
    <slot />
  </span>
</template>

<script>
export default {
  props: ["small"]
};
</script>

<style lang="postcss">
.subline {
  display: inline-block;
  font-weight: 400;
  margin-bottom: 36px;
  font-size: 24px;
  line-height: 30px;

  @media (max-width: 520px) {
    &,
    &.small {
      font-size: 20px;
    }
  }
}

.small {
  font-size: 28px;
}
</style>
