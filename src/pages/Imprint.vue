<template>
  <Layout :title="$page.site.Title">
    <RichText>{{$page.site.Content}}</RichText>
  </Layout>
</template>

<page-query>
query Imprint {
  site: site(id:"a630b5b3e8f57accbc2847bc0ec78fae"){
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
