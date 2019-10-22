<template>
  <g-link class="blogItem" :to="href">
    <h3 class="blogTitle">
      <slot />
    </h3>
    <span class="date">
      {{new Date(date).toLocaleDateString("de-DE")
      }}
    </span>
  </g-link>
</template>

<script>
import Headline from "../components/Headline";
export default {
  components: { Headline },
  props: ["href", "date"]
};
</script>

<style lang="postcss" scoped>
.blogItem {
  border-radius: 4px;
  margin: 0 auto;
  text-decoration: none;
  color: inherit;
  margin-bottom: 2em;
  display: block;
  &:hover .date::before {
    width: 80px;
  }
}
.blogTitle {
  font-size: 1.25em;
  margin: 0;
}
.date {
  display: flex;
  transform: translateX(-8px);
  align-items: center;
  color: var(--bley);

  &:before {
    content: " ";
    margin-right: 8px;
    width: 40px;
    will-change: width;
    transition: width ease-in-out 350ms;
    display: block;
    height: 4px;
    border-radius: 4px;
    background: var(--sr-sky-gradient);
  }
}
</style>