<template>
  <Layout
    :ogImage="`https://og-image.lassediercks.now.sh/${$page.product.name}.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnow-black.svg`"
    :title="$page.product.name"
    :description="$page.product.teaser"
  >
    <Headline center :level="1">{{$page.product.name}}</Headline>
    <img class="product-image" :src="$page.product.image" alt />
    <RichText>{{$page.product.description}}</RichText>
    <Spacer :size="2"></Spacer>
    <Headline :level="2" margin>Interesse?</Headline>
    <ContactForm :formName="`Produkt Form von ${$page.product.name}`"></ContactForm>
  </Layout>
</template>

<page-query>
query Product ($id: String!) {
    product: product (id: $id){
     name,
     image,  
     teaser,
     duration,
     description
  }
}
</page-query>
<script>
import Spacer from "../components/Spacer";
import ContactForm from "../components/ContactForm";
import Headline from "../components/Headline";
import RichText from "../components/RichText";
export default {
  components: { Spacer, ContactForm, Headline, RichText }
};
</script>

<style>
.product-image {
  width: 100%;
  margin: 0.5em 0;
}
</style>