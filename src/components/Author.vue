<template>
  <div class="wrap">
    <div class="author-image" :style="{backgroundImage: `url(${image})`}" />
    <div>
      <Headline class="author-name" :level="3">{{name}}</Headline>
      <Paragraph>{{description}}</Paragraph>
      <AnchorLink
        class="twitterlink"
        :href="`https://twitter.com/${twitterhandle}`"
      >@{{twitterhandle}} auf Twitter</AnchorLink>
    </div>
  </div>
</template>

<script>
import AnchorLink from "./AnchorLink";
import Headline from "./Headline";
import Paragraph from "./Paragraph";

export default {
  components: { Paragraph, AnchorLink, Headline },
  props: ["name", "description", "image", "twitterhandle"]
};
</script>

<style lang="postcss" scoped>
.wrap {
  margin: 3em 0;
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  grid-gap: 1em;
  @media (max-width: var(--mobile)) {
    grid-template-columns: 1fr;
  }
}
.twitterlink {
  display: inline-block;
  margin-top: 0.25em;
}
.author-name {
  margin-bottom: 0.5em;
}
.author-image {
  width: 150px;
  height: 150px;
  border-radius: 150px;
  background-size: cover;
}
</style>