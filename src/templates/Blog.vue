<template>
  <Layout>
    <Headline class="blog-headline" :level="1">{{$page.blog.headline}}</Headline>
    <RichText class="blog-content">{{$page.blog.content}}</RichText>
    <Author
      v-for="(author, index) in $page.allAuthor.edges[0]"
      :key="index"
      :name="author.name"
      :image="author.image"
      :description="author.description"
      :twitterhandle="author.twitterhandle"
    ></Author>
  </Layout>
</template>

<script>
import RichText from "../components/RichText";
import Author from "../components/Author";
import Headline from "../components/Headline";
export default {
  components: {
    Headline,
    Author,
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
query Blog ($id: String!, $author: String!) {
  blog: blog (id: $id){
      headline,
      content,
      published,
      author,
  },
  allAuthor (filter: { twitterhandle: { eq: $author }}){
    edges{
      node{
        name,
        image,
        twitterhandle,
        description
      }
    }
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
    width: 100%;
    margin: 0 auto;
    display: block;
  }
  margin-bottom: 5em;
}
</style>