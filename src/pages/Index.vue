<template>
  <Layout isHome :companies="$page.site.companies">
    <Headline :stripe="true" margin>Unsere Mission</Headline>
    <RichText class="mission">{{$page.site.missiontext}}</RichText>
    <Spacer :size="2"></Spacer>
    <Headline margin>Produkte</Headline>
    <ProductCard
      :image="product.node.image"
      :to="product.node.path"
      v-for="product in $page.allProduct.edges"
      :key="product.name"
      :teaser="product.node.teaser"
      :duration="product.node.duration"
      :name="product.node.name"
    ></ProductCard>

    <Spacer :size="2"></Spacer>
    <Headline margin>In-House Beratung</Headline>
    <RichText class="handson">{{$page.site.handsOnText}}</RichText>
    <Spacer :size="1"></Spacer>
    <Button noGlink href="#kontakt">Rückruf anfordern</Button>
    <Spacer v-if="$page.allBlog.edges.length > 0" :size="2"></Spacer>
    <Headline v-if="$page.allBlog.edges.length > 0" margin>Logbuch</Headline>
    <BlogItem
      :date="item.node.date"
      :href="item.node.path"
      v-for="item in $page.allBlog.edges"
      :key="item.node.headline"
    >{{item.node.headline}}</BlogItem>
    <Spacer :size="2"></Spacer>
    <Headline margin>Über Uns</Headline>
    <Team :data="$page.site.teammember"></Team>
    <Spacer :size="2"></Spacer>
    <Headline id="kontakt" margin>Kontakt</Headline>
    <ContactForm formName="Startseiten Kontakt Formular"></ContactForm>
  </Layout>
</template>


<page-query>
query Index{
  site: site(id: "8b7eef239c7763e2ba8567c18cb858e8"){
    Name,
    title,
    companies {
      Image
    },
    missiontext,
    handsOnText,
    teammember{
      Title,
      Image,
      Name,
      Description
    }
  },
  allProduct(sortBy: "name", order: ASC,filter: { published: { eq: true }}){
  edges{
    node{
      path,
      name,
      duration,
      teaser
    }
  }
}
  allBlog(sortBy: "date", order: DESC,filter: { published: { eq: true }}){
    edges{
      node{
        path,
        date,
        headline
      }
    }
  }
}

</page-query>

<script>
import BlogItem from "../components/BlogItem";
import ContactForm from "../components/ContactForm";
import References from "../components/References";
import Spacer from "../components/Spacer";
import Subline from "../components/Subline";
import ProductCard from "../components/ProductCard";
import Headline from "../components/Headline";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";
import RichText from "../components/RichText";
import Team from "../components/Team";

export default {
  components: {
    BlogItem,
    ProductCard,
    Spacer,
    Paragraph,
    Button,
    ButtonGroup,
    ContactForm,
    Headline,
    Subline,
    References,
    RichText,
    Team
  },
  metaInfo() {
    return {
      title: this.$page.site.Name
    };
  }
};
</script>

<style lang="postcss">
.mission {
  font-size: 28px;
  @media (--sr-mobile) {
    & {
      font-size: 1em;
    }
  }
}
.header {
  text-align: center;
  @media (min-width: 520px) {
    & {
      height: auto;
    }
  }

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
}
</style>
