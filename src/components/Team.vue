<template>
  <div class="team">
    <div class="member" v-for="member in data" :key="member.Name">
      <div class="memberImg" :style="{backgroundImage: `url(${member.Image}`}" />
      <div>
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

<style lang="postcss">
.team {
  margin-bottom: 80px;
}

.member {
  display: flex;
  padding: 28px 0;
  align-items: center;
  @media (max-width: 520px) {
    & {
      flex-direction: column;
      align-items: flex-start;
    }
  }
}

.role {
  font-weight: 500;
  font-size: 26px;
}

.memberName {
  font-size: 32px;
  font-weight: bold;
}

.memberImg {
  flex-shrink: 0;
  box-shadow: var(--schubrakeden-shadow--light);

  margin-right: 28px;
  height: 160px;
  border-radius: 160px;
  background-position: center center;
  background-size: cover;
  width: 160px;
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
