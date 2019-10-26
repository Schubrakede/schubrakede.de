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
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  position: relative;
  background: white;
  padding: 1.5em 1.25em;
  box-shadow: var(--sr-shadow);
  transition: box-shadow 350ms ease-out;
  &:hover {
    box-shadow: var(--sr-shadow--active);
  }
}
.headline {
  margin-bottom: 0.25em;
  font-weight: bold;
  font-size: 2.2em;
  line-height: 1;
}
.duration {
  background: var(--starry-sky);
  color: white;
  border-radius: 20px;
  padding: calc(var(--sr-base) * 2) calc(var(--sr-base) * 4);
  position: absolute;
  right: -1.25em;
  top: -0.5em;
}
.teaser {
  opacity: 0.6;
  line-height: 1.2;
  margin-bottom: 0.5em;
}
.fake-link {
  font-weight: bold;
  color: var(--navy);
  border-bottom: 4px solid var(--teal);
  text-decoration: none;
}
</style>