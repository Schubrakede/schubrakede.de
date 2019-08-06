<template>
  <ClientOnly>
    <div
      :class="[
  ballClass,
  colorClasses[color],
  sizeClasses[size],
  ]"
      :style="{
  top: `${getRandomInt(windowHeight)}px`,
  left: `${getRandomInt(windowWidth)}px`,
  opacity: opacity,
  animationDuration: `${duration}s`,
  animationDirection: directions[direction]}"
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

function getAnimationDuration(max = 200) {
  let min = 40;
  let maxAmount = Math.floor(max);
  return Math.floor(Math.random() * (maxAmount - min)) + min;
}

function opacity(number) {
  let min = 0.1;
  let maxAmount = 15 / 100;
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
.ball {
  position: absolute;
  --size: 50px;
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
