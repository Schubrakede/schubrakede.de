<template>
  <Layout>
    <Headline :level="1">{{$page.blog.headline}}</Headline>
    <RichText>{{$page.blog.content}}</RichText>
  </Layout>
</template>

<script>
import RichText from "../components/RichText";
import Headline from "../components/Headline";
export default {
  components: {
    Headline,
    RichText
  }
};
</script>

<page-query>
query Blog ($id: String!) {
  blog: blog (id: $id){
      headline,
      content
  }

}
</page-query>

<style>
</style>