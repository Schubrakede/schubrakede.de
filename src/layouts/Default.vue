<template>
  <div class="frame">
    <slot />
    <Background></Background>
  </div>
</template>

        

<script>
import Background from "./Background";
export default {
  components: { Background },
  metaInfo: {
    link: [{ rel: "stylesheet", href: "https://use.typekit.net/uaf4juj.css" }]
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
  --dark: #343637;
  --font: "serenity", "arial", sans-serif;

  --starry-sky: rgba(36, 38, 43, 1);
  --navy: #083a48;
  --orange: #ff9b00;
  --green: #87fd6e;
  --teal: #3ad4d6;
  --grey: rgba(87, 90, 99, 1);
  --blue: rgba(45, 61, 106, 1);
  --blueLight: #f8fdff;

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
  padding: 120px 16px;

  @media (min-width: 800px) {
    padding: 200px 32px;
    max-width: 950px;
    margin: 0 auto;
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


