<template>
  <Layout>
    <Headline :level="1">{{$page.product.name}}</Headline>
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
</style>