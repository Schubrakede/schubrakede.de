<template>
  <Layout>
    {{$page}}
    <Headline>{{$page.landingpage.headline}}</Headline>
    <RichText>{{$page.landingpage.content}}</RichText>
  </Layout>
</template>

<page-query>

query Landingpage ($id: String!) {
  landingpage: landingpage (id: $id){
      headline,
      headerImage,
      content
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
