<template>
  <g-link :to="to" class="product-card">
    <Headline class="headline" :level="3">{{name}}</Headline>
    <span class="duration">{{duration}}</span>
    <Paragraph class="teaser">{{teaser}}</Paragraph>
    <AnchorLink :href="to">Mehr erfahren</AnchorLink>
  </g-link>
</template>

<script>
import Headline from "./Headline";
import AnchorLink from "./AnchorLink";
import Paragraph from "./Paragraph";
export default {
  props: ["to", "name", "teaser", "duration"],
  components: { AnchorLink, Paragraph, Headline }
};
</script>

<style scoped lang="postcss">
.product-card {
  text-decoration: none;
  color: inherit;
  display: block;
  max-width: 25em;
  margin: 0 auto;
  position: relative;
  background: white;
  padding: 2em 5em 2em 1.25em;
  box-shadow: var(--sr-shadow);
  transition: box-shadow 350ms ease-out;
  &:hover {
    box-shadow: var(--sr-shadow--active);
  }
}
.headline {
  margin-bottom: 0.25em;
  font-weight: 500;
  font-size: 2.2em;
}
.duration {
  position: absolute;
  right: 1.25em;
  top: 1.25em;
}
.teaser {
  opacity: 0.8;
  margin-bottom: 0.25em;
}
</style>