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
        { rel: "shortcut icon", href: "/favicon.ico" },
        { rel: "stylesheet", href: "https://use.typekit.net/uaf4juj.css" }
      ],
      title: this.title,
      meta: [
        { name: "description", content: this.description },
        { property: "og:description", content: this.description },
        { property: "og:title", content: this.title },
        { property: "og:image", content: "/img/open-graph.png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:url", content: "Schubrake.de" },
        { property: "og:site_name", content: "Schubrakede" },
        { name: "twitter:card", content: "photo" },
        { name: "twitter:site", content: "@schubrakede" },
        { name: "twitter:image:width", content: "750" },
        { name: "twitter:description", content: this.description },
        { name: "twitter:image:height", content: "560" },
        {
          name: "twitter:image",
          content: "/img/twitter.png"
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

  --schubrakeden-shadow: 4px 4px 0 0 rgba(101, 133, 167, 0.15),
    2px 2px 0 0 rgba(134, 155, 177, 0.2);

  --schubrakeden-shadow--light: 4px 4px 0 0 rgba(131, 152, 153, 0.12),
    2px 2px 0 0 rgba(214, 225, 235, 0.56);
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
  color: var(--dark);

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


