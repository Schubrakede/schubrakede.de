<template>
  <Layout :title="$page.site.Title">
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
  components: { Headline, RichText }
};
</script>

<style>
</style>
