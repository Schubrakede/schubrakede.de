<template>
  <div>
    <transition name="fade" appear>
      <div>
        <header class="pageheader">
          <nav class="page_navigation">
            <Logo></Logo>
          </nav>
          <div class="homeText" v-if="isHome">
            <div class="headerText">
              <Headline :level="1">{{$page.site.title}}</Headline>
              <Subline>{{$page.site.description}}</Subline>
            </div>
            <Button noGlink href="#kontakt">Rückruf anfordern</Button>
          </div>
          <Background></Background>
        </header>
        <div :class="['frame', {wide: wide}, {'is-home': isHome}]">
          <slot />
          <Footer></Footer>
        </div>
      </div>
    </transition>
  </div>
</template>
       
<script>
import Logo from "../components/Logo";
import Headline from "../components/Headline";
import Subline from "../components/Subline";
import Button from "../components/Button";
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
  components: { Button, Headline, Subline, Logo, Footer, Background },
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
  --sr-shadow--small: 0 10px 20px 0 rgba(8, 58, 72, 0.26);
  --sr-shadow: 0 20px 40px 0 rgba(8, 58, 72, 0.26);
  --sr-border-radius: 4px;
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
  padding: 60px 16px;
  &.wide {
    max-width: 1400px !important;
  }
  @media (min-width: 800px) {
    padding: 80px 32px;
    max-width: 950px;
    margin: 0 auto;
  }
  &.is-home {
    padding: 100px 16px;
    @media (min-width: 800px) {
      padding: 160px 32px;
      max-width: 950px;
      margin: 0 auto;
    }
  }
}

.singlePage {
  padding: 32px 16px;
}

strong {
  font-weight: 600;
}
.pageheader {
  display: flex;
  flex-direction: column;
  color: white;
  height: 400px;
  background: #12141a;
  position: relative;
}
.page_navigation {
  width: 100%;
  padding: 28px;
  height: 80px;
}
.homeText {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 5;
}
</style>


