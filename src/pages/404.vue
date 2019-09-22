<template>
  <Layout>
    <Headline :level="1">404, Seite nicht gefunden</Headline>
    <Spacer :size="1"></Spacer>
    <Headline :level="3">"Nicht jeder Link liefert auch eine Webseite aus."</Headline>
    <Paragraph>
      <i>Alte DevOps Weisheit</i>
    </Paragraph>
    <Spacer :size="1"></Spacer>
    <Paragraph>
      Vielleicht möchtest du zurück
      <AnchorLink to="/">auf die Startseite</AnchorLink>
    </Paragraph>
  </Layout>
</template>

<script>
import Spacer from "../components/Spacer";
import AnchorLink from "../components/AnchorLink";
import Paragraph from "../components/Paragraph";
import Headline from "../components/Headline";
export default { components: { Headline, AnchorLink, Spacer, Paragraph } };
</script>

<style>
</style>