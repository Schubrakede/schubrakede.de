<template>
  <div :class="{'is-home': isHome}">
    <header class="pageheader">
      <div class="pageheader_content">
        <nav class="page_navigation">
          <Logo></Logo>
        </nav>
        <Headline :level="1" v-if="!isHome">{{title}}</Headline>
        <Headline v-if="isHome" class="homeHeadline" :level="1">{{$page.site.title}}</Headline>
        <Button v-if="isHome" class="test" color="teal" noGlink href="#kontakt">Rückruf anfordern</Button>
      </div>
      <References v-if="companies" :images="companies"></References>
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
    companies: { type: Array },
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
        { rel: "preconnect", href: "https://use.typekit.net" },
        {
          rel: "shortcut icon",
          href: "data:;base64,iVBORw0KGgo="
        },
        {
          sizes: "96x96",
          rel: "icon",
          type: "image/png",
          href: "/favicon_96-96.png"
        },
        {
          sizes: "32x32",
          rel: "icon",
          type: "image/png",
          href: "/favicon_32-32.png"
        },
        {
          sizes: "16x16",
          rel: "icon",
          type: "image/png",
          href: "/favicon_16-16.png"
        }
      ],
      title: this.title,
      meta: [
        { name: "theme-color", content: "#39D3D6" },
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
  },
  mounted() {
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    this.$nextTick(e =>
      (function(d) {
        var config = {
            kitId: "uaf4juj",
            scriptTimeout: 3000,
            async: true
          },
          h = d.documentElement,
          t = setTimeout(function() {
            h.className =
              h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
          }, config.scriptTimeout),
          tk = d.createElement("script"),
          f = false,
          s = d.getElementsByTagName("script")[0],
          a;
        h.className += " wf-loading";
        tk.src = "https://use.typekit.net/" + config.kitId + ".js";
        tk.async = true;
        tk.onload = tk.onreadystatechange = function() {
          a = this.readyState;
          if (f || (a && a != "complete" && a != "loaded")) return;
          f = true;
          clearTimeout(t);
          try {
            Typekit.load(config);
          } catch (e) {}
        };
        s.parentNode.insertBefore(tk, s);
      })(document)
    );
  }
};
</script>



<style lang="postcss">
@custom-media --sr-width (max-width: 1092px);
@custom-media --sr-mobile (max-width: 600px);
@custom-media --sr-tablet (max-width: 900px);
@custom-media --sr-desktop (min-width: 601px);
@custom-media --sr-ipad only screen and (min-device-width: 768px) and (max-device-width: 1024px);

:root {
  --font: "serenity", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  --sr-base: 4px;
  --sr-shadow--small: 0 10px 20px 0 rgba(8, 58, 72, 0.26);
  --sr-shadow: 0 20px 40px 0 rgba(8, 58, 72, 0.26);
  --sr-border-radius: 4px;
  --sr-sky-gradient: linear-gradient(to right, #81fdff, #16a6e7);
  --sr-shadow--active: 0 20px 50px 0 rgba(58, 212, 214, 0.47);

  --sr-width: calc(var(--sr-base) * 273);
  --mobile: calc(var(--sr-base) * 150);
  --sr-padding: calc(var(--sr-base) * 20) calc(var(--sr-base) * 15);
}
@media (--sr-mobile) {
  :root {
    --sr-padding: calc(var(--sr-base) * 20) calc(var(--sr-base) * 8);
  }
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

  @media (--sr-mobile) {
    font-size: 20px;
  }
}

.frame {
  color: var(--starry-sky);
  width: 100%;
  max-width: var(--sr-width);
  margin: 0 auto;
  padding: var(--sr-padding);
  &.wide {
    max-width: 1400px !important;
  }
  .is-home & {
    padding-top: calc(var(--sr-base) * 40);
  }
  @media (--sr-mobile) {
    .is-home & {
      padding-top: calc(var(--sr-base) * 60);
    }
    max-width: var(--sr-width);
  }
}

.singlePage {
  padding: 32px 16px;
}

strong {
  font-weight: 600;
}
.pageheader {
  @media (--sr-desktop) {
    .is-home & {
      padding: calc(var(--sr-base) * 20) calc(var(--sr-base) * 15)
        calc(var(--sr-base) * 40);
    }
  }

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  color: white;
  background: #12141a;
  position: relative;
  z-index: 5;

  @media (--sr-mobile) {
    .is-home & {
      height: 100vh;
      height: calc(var(--vh, 1vh) * 100);
    }
  }
  @media (--sr-ipad) {
    .is-home & {
      height: 100vh;
      height: calc(var(--vh, 1vh) * 100);
    }
  }
}

.pageheader_content {
  padding: var(--sr-padding);
  width: 100%;
  position: relative;
  z-index: 5;

  max-width: var(--sr-width);
  @media (--sr-mobile) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  @media (--sr-ipad) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
  }
}
.homeHeadline {
  display: block;
  max-width: 50rem;
  margin-bottom: calc(var(--sr-base) * 10);
}
.page_navigation {
  width: 100%;
  margin-bottom: calc(var(--sr-base) * 10);
}
</style>


