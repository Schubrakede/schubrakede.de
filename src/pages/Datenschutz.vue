<template>
  <Layout :title="$page.site.Title">
    <RichText>{{$page.site.Content}}</RichText>
  </Layout>
</template>

<page-query>
query Datenschutz {
  site: site(id:"2dba86a8fc132402a68a82819a66462a"){
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
