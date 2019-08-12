<template>
  <Layout>
    <header>
      <Headline>{{$page.landingpage.headline}}</Headline>
      <Subline v-if="$page.landingpage.subline">{{$page.landingpage.subline}}</Subline>
    </header>
    <FeatureList :data="$page.landingpage.features"></FeatureList>
    <Testimonials :data="$page.landingpage.testimonial"></Testimonials>
    <Headline :level="2">Zusammengearbeitet mit:</Headline>
    <References :small="true" :images="$page.site.companies"></References>
  </Layout>
</template>

<page-query>


query Landingpage ($id: String!) {
  site: site(id: "8b7eef239c7763e2ba8567c18cb858e8"){
    companies {
      Image
    }
  },
  landingpage: landingpage (id: $id){
      features{
        headline,
        image,
        description
      },
      testimonial{
          name,
          title,
          quote
        },
      headline,
      subline,
      headerImage,
      content
  }
}

</page-query>
<script>
import Subline from "../components/Subline";
import RichText from "../components/RichText";
import Testimonials from "../components/Testimonials";
import FeatureList from "../components/FeatureList";
import Headline from "../components/Headline";
import References from "../components/References";

export default {
  components: {
    References,
    Testimonials,
    FeatureList,
    Subline,
    Headline,
    RichText
  }
};
</script>

<style lang="postcss" scoped>
header {
  padding: 4em 0;
}
</style>
