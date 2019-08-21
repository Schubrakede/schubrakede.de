<template>
  <p :class="['paragraph',{margin:margin}]">
    <slot />
  </p>
</template>

<script>
export default {
  props: ["margin"]
};
</script>

<style>
.paragraph {
  margin: 0;
  font-weight: 400;
  font-size: 22px;
  line-height: 1.5;
  font-family: var(--font);
}

.margin {
  margin-bottom: 120px;
}
</style>
