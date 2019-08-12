<template>
  <div class="wrap">
    <div v-for="testi in data" :key="testi.name">
      <span class="quote">{{testi.quote}}</span>
      <span class="name">{{testi.name}}</span>
      <span class="title">{{testi.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style lang="postcss">
.wrap {
  margin-bottom: 3em;
}
.quote {
  display: block;
  font-size: 3em;
  margin-bottom: 0.5em;
  font-style: italic;
  &:before {
    content: "„";
  }
  &:after {
    content: "“";
  }
}
.name {
  font-size: 1.5em;
  margin-left: 3rem;
}
.title {
  margin-left: 3rem;
  display: block;
  opacity: 0.8;
}
</style>