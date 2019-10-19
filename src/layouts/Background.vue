<template>
  <ClientOnly>
    <div class="bgWrap">
      <div class="bg">
        <Ball v-for="ball in [...Array(Math.ceil(windowWidth / 7))]" :key="ball"></Ball>
      </div>
    </div>
  </ClientOnly>
</template>

<script>
import Ball from "./Ball";
export default {
  components: { Ball },
  data: function() {
    return {
      windowWidth: 0,
      windowHeight: 0
    };
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
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
.ball {
  position: absolute;
  --size: 50px;
  position: absolute;
  transform-origin: -50px -50px;
  animation: float 20s linear infinite;
  height: var(--size);
  width: var(--size);
  border-radius: var(--size);
}

.small {
  --size: 10px;
}
.medium {
  --size: 15px;
}
.big {
  --size: 25px;
}

.green {
  background: var(--green);
}
.teal {
  background: var(--teal);
}
.orange {
  background: var(--orange);
}
</style>
