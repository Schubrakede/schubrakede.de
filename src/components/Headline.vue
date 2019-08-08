<template>
  <h2 :is="`h${level}`" :class="['headline',`headline-level${levelClasses[level + 1]}`]">
    <slot />
  </h2>
</template>

<script>
export default {
  props: ["isRichText", "level"],
  data: () => {
    return {
      levelClasses: ["One", "Two", "Three"]
    };
  }
};
</script>

<style lang="postcss">
.headline {
  font-weight: 200;
  font-family: var(--font-headline);
  line-height: 1;

  color: var(--navy);
  transition: text-shadow 120ms ease-in-out;
  text-shadow: 2px 2px 0 rgba(154, 154, 154, 0.46),
    4px 4px 0 rgba(58, 140, 227, 0.15);
  margin: 0;
}

/* Levels */

.levelOne {
  margin-bottom: 18px;
  font-size: 90px;
  @media (max-width: 900px) {
    font-size: 80px;
  }
  @media (max-width: 520px) {
    & {
      font-size: 11vw;
    }
  }
}

.levelTwo {
  font-weight: 600;
  font-size: 68px;
  color: #083a48;
  letter-spacing: 0;

  text-shadow: 2px 2px 0 rgba(154, 154, 154, 0.46),
    4px 4px 0 rgba(58, 140, 227, 0.15);
  margin: 0;
  &:hover {
    text-shadow: 4px 4px 0 rgba(154, 154, 154, 0.46),
      8px 8px 0 rgba(58, 140, 227, 0.15);
  }
}

.levelThree {
  text-shadow: initial;
  font-size: 28px;
  line-height: 32px;
  font-weight: 300;

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
