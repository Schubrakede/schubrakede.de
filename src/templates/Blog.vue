<template>
  <Layout>
    <Headline class="blog-headline" :level="1">{{$page.blog.headline}}</Headline>
    <RichText class="blog-content">{{$page.blog.content}}</RichText>
  </Layout>
</template>

<script>
import RichText from "../components/RichText";
import Headline from "../components/Headline";
export default {
  components: {
    Headline,
    RichText
  },
  metaInfo() {
    return {
      meta: [
        {
          name: "robots",
          content: this.$page.blog.published ? "follow" : "noindex, nofollow"
        }
      ]
    };
  }
};
</script>

<page-query>
query Blog ($id: String!) {
  blog: blog (id: $id){
      headline,
      content,
      published
  }

}
</page-query>

<style lang="postcss">
.blog-headline {
  font-size: 3em;
}

.blog-content {
  img {
    max-width: 30em;
  }
}
</style>