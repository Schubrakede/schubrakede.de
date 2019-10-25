<template>
  <ClientOnly>
    <div
      :class="[
  ballClass,
  colorClasses[color],
  sizeClasses[size],
  ]"
      :style="{
  top: `${getRandomInt(100)}%`,
  right: `${getRandomInt(70)}%`,
  opacity: opacity,
  animationDuration: `${duration}s`}"
    />
  </ClientOnly>
</template>

<script>
let ballClass = "ball";
let sizeClasses = ["small", "medium", "big"];
let colorClasses = ["green", "orange", "teal"];
let directions = ["normal", "reverse"];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function getAnimationDuration(max = 400) {
  let min = 10;
  let maxAmount = Math.floor(max);
  return Math.floor(Math.random() * (maxAmount - min)) + min;
}

function opacity(number) {
  let min = 0.1;
  let maxAmount = 0.3;
  let amount = ((number / 100) * (maxAmount - min) + min).toFixed(2);
  return amount;
}

export default {
  data: function() {
    return {
      windowHeight: 0,
      windowWidth: 0,
      ballClass,
      directions,
      colorClasses,
      sizeClasses,
      getRandomInt,
      direction: getRandomInt(2),
      opacity: opacity(getRandomInt(100)),
      duration: getAnimationDuration(200),
      color: getRandomInt(3),
      size: getRandomInt(3)
    };
  },
  mounted() {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
  }
};
</script>

<style lang="postcss">
</style>
