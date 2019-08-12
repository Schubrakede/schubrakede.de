<template>
  <div :class="['references', {'references--small': small}]">
    <img v-for="image in images" :src="image.Image" :key="image.Image" alt />
  </div>
</template>

<script>
export default {
  props: ["images", "small"]
};
</script>

<style lang="postcss">
.references {
  padding: 120px 0;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  justify-content: center;
  grid-gap: 45px;
  align-items: center;
  justify-items: center;
}
.references--small {
  padding: 40px 0;
  justify-content: flex-start;
  grid-template-rows: auto;
  grid-template-columns: initial;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  @media (max-width: 800px) {
    grid-template-columns: auto auto;
    grid-auto-flow: initial;
    justify-content: space-around;
  }
  @media (max-width: 400px) {
    grid-template-columns: auto;
  }
}
</style>
