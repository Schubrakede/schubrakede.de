<template>
  <Layout :title="$page.product.name" :description="$page.product.teaser">
    <div class="product_header">
      <p class="product_header-teaser">{{$page.product.teaser}}</p>
      <span class="product_header-duration">
        Dauer:
        {{$page.product.duration}}
      </span>
    </div>
    <Spacer :size="1"></Spacer>

    <RichText>{{$page.product.description}}</RichText>
    <Spacer :size="1"></Spacer>
    <RichText>{{$page.product.possibleOutcome}}</RichText>
    <Spacer :size="1"></Spacer>
    <Headline :level="2" margin>Interesse?</Headline>
    <ContactForm :formName="`Produkt Form von ${$page.product.name}`"></ContactForm>
  </Layout>
</template>

<page-query>
query Product ($id: String!) {
    product: product (id: $id){
     name,
     teaser,
     possibleOutcome,
     locationInfo,
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
  components: { Spacer, ContactForm, Headline, RichText },
  metaInfo() {
    return {
      meta: [
        {
          name: "robots",
          content: this.$page.product.published ? "follow" : "noindex, nofollow"
        }
      ]
    };
  }
};
</script>

<style lang="postcss">
.product_header {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 24px;
  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
}
.product_header-aside {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.product_header-teaser {
  font-size: 40px;
  margin: 0;
  @media (max-width: 950px) {
    font-size: 30px;
  }
}
.product_header-duration {
  font-size: 30px;
  font-weight: bold;
}
.product_header-location {
  color: var(--bley);
}
</style>