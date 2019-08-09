<template>
  <Layout>
    <Headline :level="1">{{$page.site.Title}}</Headline>
    <RichText>{{$page.site.Content}}</RichText>
  </Layout>
</template>

<page-query>
query Datenschutz {
  site: site(id:"677bddfb986449de783d67d381122dfc"){
    Title,
    Content
  }
}
</page-query>
<script>
import RichText from "../components/RichText";
import Headline from "../components/Headline";

export default {
  components: { Headline, RichText },
  metaInfo() {
    return {
      title: this.$page.site.Title
    };
  }
};
</script>

<style>
</style>
