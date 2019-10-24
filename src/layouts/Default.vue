<template>
  <div :class="{'is-home': isHome}">
    <header class="pageheader">
      <div class="pageheader_content">
        <nav class="page_navigation">
          <Logo></Logo>
        </nav>
        <Headline :level="1" v-if="!isHome">{{title}}</Headline>
        <Headline v-if="isHome" class="homeHeadline" :level="1">{{$page.site.title}}</Headline>
        <Button v-if="isHome" class="test" color="green" noGlink href="#kontakt">Rückruf anfordern</Button>
      </div>
      <References :images="$page.site.companies"></References>
      <Background></Background>
    </header>
    <div :class="['frame', {wide: wide}]">
      <slot />
      <Footer></Footer>
    </div>
  </div>
</template>
       
<script>
import Logo from "../components/Logo";
import Headline from "../components/Headline";
import Subline from "../components/Subline";
import Button from "../components/Button";
import References from "../components/References";
import colors from "../components/design/colors.json";
import Background from "./Background";
import Footer from "../sections/Footer";

const resolveColors = data => {
  let result = new String();
  for (let value of Object.entries(data)) {
    result = result.concat("", `--${value[1].name}: ${value[1].value};\n`);
  }
  return result;
};

export default {
  props: {
    wide: Boolean,
    isHome: Boolean,
    title: { type: String, default: "Schubrakede" },
    description: {
      type: String,
      default:
        "Wir helfen Unternehmen gute Ideen besser und schneller umzusetzen."
    }
  },
  components: {
    References,
    Button,
    Headline,
    Subline,
    Logo,
    Footer,
    Background
  },
  data() {
    return {
      colors
    };
  },
  metaInfo() {
    return {
      link: [
        {
          sizes: "96x96",
          rel: "icon",
          id: "favicon",
          type: "image/png",
          href: "/favicon_96-96.png"
        },
        {
          sizes: "32x32",
          rel: "icon",
          id: "favicon",
          type: "image/png",
          href: "/favicon_32-32.png"
        },
        {
          sizes: "16x16",
          rel: "icon",
          id: "favicon",
          type: "image/png",
          href: "/favicon_16-16.png"
        },
        { rel: "stylesheet", href: "https://use.typekit.net/uaf4juj.css" }
      ],
      title: this.title,
      meta: [
        { name: "description", content: this.description },
        { property: "og:description", content: this.description },
        { property: "og:title", content: this.title },
        {
          property: "og:image",
          content: "https://schubrake.de/img/open-graph.png"
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:url", content: "Schubrake.de" },
        { property: "og:site_name", content: "Schubrakede" },
        { name: "twitter:card", content: "photo" },
        { name: "twitter:site", content: "@schubrakede" },
        { name: "twitter:creator", content: "@schubrakede" },
        { name: "twitter:image:width", content: "750" },
        { name: "twitter:description", content: this.description },
        { name: "twitter:image:height", content: "560" },
        {
          name: "twitter:image",
          content: "https://schubrake.de/img/twitter.png"
        }
      ],
      style: [{ cssText: `:root\{${resolveColors(colors.values)}}` }]
    };
  }
};
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="postcss">
:root {
  --font: "serenity", "arial", sans-serif;
  --sr-base: 4px;
  --sr-width: calc(var(--sr-base) * 273);
  --sr-shadow--small: 0 10px 20px 0 rgba(8, 58, 72, 0.26);
  --sr-shadow: 0 20px 40px 0 rgba(8, 58, 72, 0.26);
  --sr-border-radius: 4px;
  --sr-sky-gradient: linear-gradient(to right, #81fdff, #16a6e7);
  --sr-shadow--active: 0 20px 50px 0 rgba(58, 212, 214, 0.47);
}

.fade-enter-active {
  transition: opacity 500ms;
}

.fade-enter {
  opacity: 0;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

*:focus {
  outline: 3px solid var(--orange);
  outline-offset: 10px;
}

body {
  margin: 0;
  padding: 0;
  font-size: 22px;
  font-family: var(--font);
  background-color: white;
  background-size: 100% auto;
  color: var(--starrySky);

  @media (max-width: 520px) {
    & {
      font-size: 16px;
    }
  }
}

.frame {
  color: var(--starry-sky);
  width: 100%;
  padding: calc(var(--sr-base) * 15);
  &.wide {
    max-width: 1400px !important;
  }
  @media (min-width: 800px) {
    padding: calc(var(--sr-base) * 20) calc(var(--sr-base) * 15);

    .is-home & {
      padding: calc(var(--sr-base) * 50) calc(var(--sr-base) * 15);
    }
    max-width: var(--sr-width);
    margin: 0 auto;
  }
}

.singlePage {
  padding: 32px 16px;
}

strong {
  font-weight: 600;
}
.pageheader {
  padding: calc(var(--sr-base) * 20) calc(var(--sr-base) * 15)
    calc(var(--sr-base) * 30);
  .is-home & {
    padding: calc(var(--sr-base) * 20) calc(var(--sr-base) * 15)
      calc(var(--sr-base) * 40);
  }
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  color: white;
  background: #12141a;
  position: relative;
  z-index: 5;
}
.homeHeadline {
  display: block;
  max-width: 50rem;
  margin-bottom: calc(var(--sr-base) * 10);
}

.pageheader_content {
  width: 100%;
  position: relative;
  z-index: 5;
  max-width: var(--sr-width);
}
.page_navigation {
  width: 100%;
  margin-bottom: calc(var(--sr-base) * 10);
}
</style>


