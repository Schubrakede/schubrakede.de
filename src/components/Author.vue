<template>
  <div class="wrap">
    <div class="author-image" :style="{backgroundImage: `url(${image})`}" />
    <div>
      <Headline :level="3">{{name}}</Headline>
      <Paragraph>{{description}}</Paragraph>
      <AnchorLink :href="`https://twitter.com/${twitterhandle}`">@{{twitterhandle}} auf Twitter</AnchorLink>
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

<style>
.wrap {
  margin: 3em 0;
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  grid-gap: 1em;
}
.author-image {
  width: 150px;
  height: 150px;
  border-radius: 150px;
  background-size: cover;
}
</style>