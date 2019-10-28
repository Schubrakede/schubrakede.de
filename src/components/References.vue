<template>
  <div :class="['references', {'references--small': small}]">
    <g-image
      class="reference-image"
      v-for="image in images"
      :src="image.Image"
      :key="image.Image"
      alt
    />
  </div>
</template>

<script>
export default {
  props: ["images", "small"]
};
</script>

<style lang="postcss" >
.references {
  border-radius: 80px;
  @media (--sr-width) {
    border-radius: 0;
  }
  position: absolute;
  z-index: 50;
  padding: calc(var(--sr-base) * 4) calc(var(--sr-base) * 10);
  transition: border-radius 350ms ease-in-out;
  max-width: var(--sr-width);
  width: 100%;
  height: 88px;
  bottom: -40px;
  background: var(--bley);
  color: white;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, auto));
  grid-auto-rows: 32px;
  grid-row-gap: 2em;
  align-items: center;
  align-content: center;
  justify-items: center;
  @media (--sr-mobile) {
    grid-gap: 20px;
    top: 100%;
    bottom: initial;
    z-index: 50;
    height: auto;
  }
  @media (--sr-ipad) {
    grid-gap: 20px;
    top: 100%;
    bottom: initial;
    z-index: 50;
    height: auto;
  }
}
.reference-image {
  max-height: 100%;
  width: 100px;
  height: 24px;
}
</style>
