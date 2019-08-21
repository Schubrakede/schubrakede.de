<template>
  <Layout isHome>
    <header class="header">
      <div class="headerText">
        <Headline :level="1">{{$page.site.title}}</Headline>
        <Subline>{{$page.site.description}}</Subline>
      </div>
      <Button noGlink href="#kontakt">Rückruf anfordern</Button>
    </header>
    <References :images="$page.site.companies"></References>
    <RichText class="mission">{{$page.site.missiontext}}</RichText>
    <Spacer :size="2"></Spacer>
    <Headline margin center>Produkte</Headline>
    <ProductCard
      :to="product.node.path"
      v-for="product in $page.allProduct.edges"
      :key="product.name"
      :teaser="product.node.teaser"
      :duration="product.node.duration"
      :name="product.node.name"
    ></ProductCard>

    <Spacer :size="2"></Spacer>
    <Headline margin center>In-House Beratung</Headline>
    <RichText class="handson">{{$page.site.handsOnText}}</RichText>
    <Spacer :size="1"></Spacer>
    <ButtonGroup>
      <Button noGlink href="#kontakt">Rückruf anfordern</Button>
    </ButtonGroup>
    <Spacer :size="2"></Spacer>
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
    description,
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
  allProduct{
  edges{
    node{
      path,
      name,
      duration,
      teaser
    }
  }
}
}
</page-query>

<script>
import ContactForm from "../components/ContactForm";
import References from "../components/References";
import Spacer from "../components/Spacer";
import Subline from "../components/Subline";
import ProductCard from "../components/ProductCard";
import Headline from "../components/Headline";
import Button from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";
import RichText from "../components/RichText";
import Team from "../components/Team";

export default {
  components: {
    ProductCard,
    Spacer,
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
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  font-size: 32px;
  @media (--small-screen) {
    & {
      font-size: 24px;
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
.handson {
  font-size: 28px;
}
.headerText {
  margin-bottom: 36px;
}
</style>
