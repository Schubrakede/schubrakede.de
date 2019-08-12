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

<style>
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
}
</style>
