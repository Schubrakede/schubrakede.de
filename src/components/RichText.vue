<template>
  <div class="richtext">
    <VueMarkdown>
      <slot />
    </VueMarkdown>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
export default {
  components: { VueMarkdown }
};
</script>

<style lang="postcss" >
.richtext {
  position: relative;
  background-size: 100%;

  p {
    margin-top: 0;
    font-family: var(--font);
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 1em;
    &:last-child {
      margin-bottom: 0;
    }
  }

  img {
    max-width: 30em;
    width: 100%;
    margin: 0 auto;
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: var(--font);
    line-height: 1.2;
  }

  h3 {
    text-shadow: initial;
    font-size: 28px;
    line-height: 32px;

    &:hover {
      text-shadow: initial;
    }
  }

  a {
    color: inherit;
    overflow-wrap: break-word;
    word-wrap: break-word;

    -ms-word-break: break-all;
    word-break: break-all;
    word-break: break-word;

    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;

    font-weight: bold;
    color: var(--navy);
    border-bottom: 4px solid var(--teal);
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  li {
    margin-bottom: 12px;
    padding-left: 24px;
    display: flex;
    align-items: flex-start;
    position: relative;
    &:after {
      content: "•";
      font-size: 1em;
      height: 16px;
      line-height: 16px;
      color: var(--teal);
      position: absolute;
      display: block;
      top: 0.6ex;
      left: 0;
    }
  }
}
.richtext:after {
  position: absolute;
  content: " ";
  display: block;
  width: 150%;
  top: -25%;
  left: -25%;
  background-image: radial-gradient(white, rgba(255, 255, 255, 0));
  z-index: -1;
  height: 150%;
  max-height: 100vh;
  max-width: 100vw;
}
.margin {
  margin-bottom: 120px;
}
</style>

