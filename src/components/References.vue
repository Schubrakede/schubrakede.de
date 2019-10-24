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
  @media (max-width: 1092px) {
    border-radius: 0;
  }
  position: absolute;
  padding: calc(var(--sr-base) * 6) calc(var(--sr-base) * 10);
  border-radius: 80px;
  transition: border-radius 350ms ease-in-out;
  max-width: var(--sr-width);
  width: 100%;
  height: 80px;
  bottom: -40px;
  background: var(--sr-sky-gradient);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, auto));
  grid-auto-rows: 32px;
  grid-row-gap: 2em;
  align-items: center;
  align-content: center;
  justify-items: center;
  @media (max-width: 800px) {
    height: auto;
  }
}
.reference-image {
  max-height: 100%;
  width: 100px;
  height: 24px;
}
</style>
