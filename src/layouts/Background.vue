<template>
  <div :class="[{animated:backgroundAnimated},'bgWrap']">
    <div class="bg">
      <Ball v-for="ball in [...Array(Math.ceil(windowWidth / 9))]" :key="ball"></Ball>
      <g-image class="cloud first" src="/cloud.svg"></g-image>
    </div>
  </div>
</template>

<script>
import Ball from "./Ball";
export default {
  components: { Ball },
  data: function() {
    return {
      windowWidth: 0,
      backgroundAnimated: false
    };
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    this.$nextTick(e => {
      console.log("now", e);
      this.backgroundAnimated = true;
    });
  }
};
</script>


<style lang="postcss">
.bgWrap {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  --moveAmount: -50vw;
  @media (--sr-mobile) {
    --moveAmount: -200vw;
  }
}

.bg {
  width: 100%;
  height: 100%;
  position: relative;
}
.ball {
  position: absolute;
  --size: 50px;
  position: absolute;
  .animated & {
    animation: move 1s linear infinite;
  }

  height: var(--size);
  width: var(--size);
  border-radius: var(--size);
}

/* bg */

@keyframes move {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 0.5;
  }
  45% {
    opacity: 0.5;
  }
  50% {
    opacity: 0;
  }
  55% {
    opacity: 0.5;
  }
  95% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: translateX(var(--moveAmount));
  }
}

.small {
  --size: 2px;
}
.medium {
  --size: 3px;
}
.big {
  --size: 5px;
}

.green {
  circle {
    fill: var(--green);
  }
}
.teal {
  circle {
    fill: var(--teal);
  }
}
.orange {
  circle {
    fill: var(--orange);
  }
}
.cloud {
  position: absolute;
  z-index: 1;
  &.first {
    right: -30%;
    top: -50%;
    animation: move 30s linear infinite;
  }
}
</style>
