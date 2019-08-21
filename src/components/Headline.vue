<template>
  <h2
    :is="`h${level}`"
    :class="[
    'headline',`level${levelClasses[level - 1]}`,
      {hasMargin: margin},
     {center: center}
     ]"
  >
    <slot />
  </h2>
</template>

<script>
export default {
  props: {
    level: { type: Number, default: 2 },
    margin: { type: Boolean },
    center: { type: Boolean }
  },
  data: () => {
    return {
      levelClasses: ["One", "Two", "Three"]
    };
  }
};
</script>

<style lang="postcss" scoped>
.headline {
  font-family: var(--font-headline);
  line-height: 1;

  transition: text-shadow 120ms ease-in-out;

  margin: 0;
  &.hasMargin {
    margin-bottom: 1em;
  }
  &.center {
    text-align: center;
  }
}

/* Levels */

.levelOne {
  margin-bottom: 18px;
  font-size: 3.4em;
}

.levelTwo {
  font-weight: 600;
  font-size: 2.6em;
  letter-spacing: 0;

  margin: 0;
}

.levelThree {
  text-shadow: initial;
  font-size: 28px;
  line-height: 32px;

  &:hover {
    text-shadow: initial;
  }
}

.levelFour {
  text-shadow: initial;
  font-size: 22px;
  font-weight: 300;

  &:hover {
    text-shadow: initial;
  }
}
.levelFive {
}
</style>
