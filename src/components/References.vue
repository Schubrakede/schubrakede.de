<template>
  <div :class="['references', {'references--small': small}]">
    <img class="reference-image" v-for="image in images" :src="image.Image" :key="image.Image" alt />
  </div>
</template>

<script>
export default {
  props: ["images", "small"]
};
</script>

<style lang="postcss" scoped>
.references {
  position: absolute;
  top: -40px;
  height: 80px;
  border-radius: 80px;
  left: 0;
  width: var(--sr-width);
  background: var(--sr-sky-gradient);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 150px));
  grid-gap: 1.2em;
  grid-row-gap: 2em;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
}
.reference-image {
  max-width: 120px;
}
</style>
