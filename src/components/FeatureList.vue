<template>
  <div class="wrapper">
    <div v-for="item in data" :key="item.headline">
      <g-image class="image" :src="item.image" alt />
      <Headline :level="3">{{item.headline}}</Headline>
      <Paragraph>{{item.description}}</Paragraph>
    </div>
  </div>
</template>

<script>
import Headline from "../components/Headline";
import Paragraph from "../components/Paragraph";

export default {
  props: ["data"],
  components: { Paragraph, Headline }
};
</script>

<style lang="postcss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 40px 0 80px 0;
  grid-gap: 20px;
  @media (max-width: var(--mobile)) {
    & {
      grid-template-columns: 1fr;
    }
  }
}
.image {
  margin-bottom: 16px;
}
</style>