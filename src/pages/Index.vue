<template>
  <Layout>
    <div>
      <Headline :level="1">{{$page.site.title}}</Headline>
      <Headline :level="2">{{$page.site.description}}</Headline>
      <RichText class="mission">{{$page.site.missiontext}}</RichText>
      <References :images="$page.site.companies"></References>
      <div>{{$page}}</div>
    </div>
  </Layout>
</template>


<page-query>
query Index{
  site: site(id: "8b7eef239c7763e2ba8567c18cb858e8"){
    description,
    title,
    companies {
      Image
    },
    missiontext,
    sprinttext,
    teammember{
      Title,
      Image,
      Name,
      Description
    }
  }
}
</page-query>
<script>
import References from "../components/References";
import Headline from "../components/Headline";
import RichText from "../components/RichText";

export default {
  components: { Headline, References, RichText }
};
</script>

<style lang="postcss">
.mission {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  font-size: 32px;
  @media (--small-screen) {
    & {
      font-size: 24px;
    }
  }
}
</style>
