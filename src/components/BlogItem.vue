<template>
  <g-link class="blogItem" :to="href">
    <span class="date">
      {{new Date(date).toLocaleDateString("de-DE")
      }}
    </span>
    <div class="blotTitle">
      <slot />
    </div>
  </g-link>
</template>

<script>
export default {
  props: ["href", "date"]
};
</script>

<style lang="postcss" scoped>
.blogItem {
  max-width: 25em;
  border-radius: 4px;
  margin: 0 auto;
  text-decoration: none;
  color: inherit;
  padding: 2.5em 5em 2.5em 1.25em;
  box-shadow: var(--sr-shadow);
  margin-bottom: 1em;
  display: block;
  padding: 20px;
  background: white;
}
.blotTitle {
  font-size: 1.25em;
}
.date {
  color: var(--bley);
  display: block;
}
</style>