<template>
  <div :class="['frame', {'is-home': isHome}]">
    <Logo></Logo>
    <slot />
    <Footer></Footer>
    <Background></Background>
  </div>
</template>
       
<script>
import Logo from "../components/Logo";
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
    isHome: Boolean,
    title: { type: String, default: "Schubrakede" },
    description: {
      type: String,
      default:
        "Wir helfen Unternehmen gute Ideen besser und schneller umzusetzen."
    }
  },
  components: { Logo, Footer, Background },
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
  --sr-shadow--active: 0 20px 50px 0 rgba(58, 212, 214, 0.47);
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

  @media (min-width: 800px) {
    padding: 80px 32px;
    max-width: 950px;
    margin: 0 auto;
  }
  &.is-home {
    padding: 120px 16px;
    @media (min-width: 800px) {
      padding: 200px 32px;
      max-width: 950px;
      margin: 0 auto;
    }
  }
}

.singlePage {
  padding: 32px 16px;
}

.logoContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 5;
  margin-bottom: 80px;
}

.logo {
  width: 160px;

  @media (max-width: 520px) {
    & {
      margin-bottom: 20px;
    }
  }
}

.rocket {
  margin-right: 16px;
  transform: translateY(-5px);
  height: 50px;
  @media (max-width: 800px) {
    & {
      display: none;
    }
  }
}

/* bg */

@keyframes float {
  100% {
    transform: rotate(360deg);
  }
}
.bgWrap {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
}

.bg {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.ball {
  position: absolute;
  --size: 50px;
  position: absolute;
  transform-origin: -50px -50px;
  animation: float 20s linear infinite;
  height: var(--size);
  width: var(--size);
  border-radius: var(--size);
}

.small {
  --size: 10px;
}
.medium {
  --size: 15px;
}
.big {
  --size: 25px;
}

.green {
  background: var(--green);
}
.teal {
  background: var(--teal);
}
.orange {
  background: var(--orange);
}

strong {
  font-weight: 600;
}
</style>


