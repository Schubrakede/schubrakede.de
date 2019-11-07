<template>
  <Layout :title="$page.site.Title">
    <RichText>{{$page.site.Content}}</RichText>
  </Layout>
</template>

<page-query>
query Imprint {
  site: site(id:"8cabb533edb884270a844434353e02f6"){
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
