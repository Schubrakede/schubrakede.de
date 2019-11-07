<template>
  <div class="team">
    <div class="member" v-for="member in data" :key="member.Name">
      <div class="memberImg">
        <g-image loading="lazy" :src="member.Image" width="160"></g-image>
      </div>
      <Headline :level="3" class="memberName">{{member.Name}}</Headline>
      <span class="role">{{member.Title}}</span>

      <Paragraph class="memberDescription">{{member.Description}}</Paragraph>
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: calc(var(--sr-base) * 20);
  width: 100%;
  margin-bottom: 80px;
  @media (--sr-mobile) {
    grid-template-columns: 1fr;
  }
}

.member {
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
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
  box-shadow: var(--sr-shadow--small);
  width: 160px;
  height: 160px;
  border-radius: 160px;
  margin-bottom: calc(var(--sr-base) * 4);
  overflow: hidden;
  img {
    width: 100%;
  }
}

.memberDescription {
  margin: 0;
  margin-top: 8px;
  padding-bottom: 8px;
}
</style>
