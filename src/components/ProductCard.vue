<template>
  <g-link
    itemprop="url"
    itemscope
    itemtype="https://schema.org/Service"
    :to="to"
    class="product-card"
  >
    <meta itemprop="areaServed" content="Norddeutschland" />
    <meta itemprop="brand" content="Schubrakede" />
    <meta itemprop="image" :content="image" />
    <Headline class="headline" itemprop="name" :level="3">{{name}}</Headline>
    <span class="duration">{{duration}}</span>
    <Paragraph itemprop="description" class="teaser">{{teaser}}</Paragraph>
    <span class="fake-link">Mehr erfahren</span>
  </g-link>
</template>

<script>
import Headline from "./Headline";
import Paragraph from "./Paragraph";
export default {
  props: ["to", "name", "teaser", "duration", "image"],
  components: { Paragraph, Headline }
};
</script>

<style scoped lang="postcss">
.product-card {
  text-decoration: none;
  color: inherit;
  display: block;
  border-radius: 4px;
  max-width: 25em;
  margin-bottom: 2em;

  position: relative;
  background: white;
  padding: 2.5em 5em 2.5em 1.25em;
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
  opacity: 0.6;
  margin-bottom: 0.5em;
}
.fake-link {
  font-weight: bold;
  color: var(--navy);
  border-bottom: 4px solid var(--teal);
  text-decoration: none;
}
</style>