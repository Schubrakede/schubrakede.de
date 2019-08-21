<template>
  <div class="team">
    <div class="member" v-for="member in data" :key="member.Name">
      <div class="memberImg" :style="{backgroundImage: `url(${member.Image})`}" />
      <div class="content">
        <Headline :level="3" class="memberName">{{member.Name}}</Headline>
        <span class="role">{{member.Title}}</span>

        <Paragraph class="memberDescription">{{member.Description}}</Paragraph>
      </div>
    </div>
  </div>
</template>

<script>
import Headline from "./Headline";
import Paragraph from "./Paragraph";

export default {
  components: { Headline, Paragraph },
  props: ["data", "img"]
};
</script>

<style scoped lang="postcss">
.team {
  width: 100%;
  display: grid;
  grid-gap: 1.25em;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 80px;
  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
}

.member {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 100%;
  background: white;
  box-shadow: var(--sr-shadow--small);
  @media (max-width: 520px) {
    & {
      flex-direction: column;
      align-items: flex-start;
    }
  }
}

.content {
  padding: 1em 1.25em;
}
.role {
  font-size: 22px;
  font-weight: 400;
  color: var(--bley);
}

.memberName {
  font-size: 32px;
}

.memberImg {
  flex-shrink: 0;
  height: 100%;
  background-position: center center;
  background-size: cover;
  width: 180px;
  @media (max-width: 520px) {
    & {
      margin-bottom: 28px;
    }
  }
}

.memberDescription {
  margin: 0;
  margin-top: 8px;
  padding-bottom: 8px;
}
</style>
