<template>
  <div class="references">
    <img v-for="image in images" :src="image.Image" :key="image.Image" alt />
    {{images}}
  </div>
</template>

<script>
export default {
  props: ["images"]
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
</style>
