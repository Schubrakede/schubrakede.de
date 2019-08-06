<template>
  <div class="bgWrap">
    <div class="bg">
      <Ball v-for="ball in balls" :key="ball"></Ball>
    </div>
  </div>
</template>

<script>
import Ball from "./Ball";
export default {
  components: { Ball },
  data: function() {
    return {
      balls: [...Array(200)]
    };
  }
};
</script>


<style>
.bgWrap {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
}

.bg {
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>
