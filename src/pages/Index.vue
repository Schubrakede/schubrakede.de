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
    <Headline>Entwicklungs Sprint</Headline>
    <RichText>{{$page.site.sprinttext}}</RichText>
    <Spacer :size="1"></Spacer>
    <ButtonGroup>
      <Button noGlink href="#kontakt">Rückruf anfordern</Button>
    </ButtonGroup>

    <Spacer :size="2"></Spacer>
    <Headline>Hands on Hilfe</Headline>
    <RichText>{{$page.site.handsOnText}}</RichText>
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
    sprinttext,
    handsOnText,
    teammember{
      Title,
      Image,
      Name,
      Description
    }
  }
}
</page-query>

<script>
import ContactForm from "../components/ContactForm";
import References from "../components/References";
import Spacer from "../components/Spacer";
import Subline from "../components/Subline";
import Headline from "../components/Headline";
import Button from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";
import RichText from "../components/RichText";
import Team from "../components/Team";

export default {
  components: {
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

.headerText {
  margin-bottom: 36px;
}
</style>
