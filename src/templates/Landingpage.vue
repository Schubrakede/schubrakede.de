<template>
  <Layout :title="$page.landingpage.headline" :description="$page.landingpage.subline">
    <header>
      <Headline>{{$page.landingpage.headline}}</Headline>
      <Subline v-if="$page.landingpage.subline">{{$page.landingpage.subline}}</Subline>
      <br />
      <Button href="#formTarget">Jetzt Kontaktieren</Button>
    </header>
    <FeatureList :data="$page.landingpage.features"></FeatureList>
    <Testimonials
      v-if="$page.landingpage.testimonial.length > 0"
      :data="$page.landingpage.testimonial"
    ></Testimonials>
    <Spacer v-if="$page.landingpage.testimonial.length  > 0" :size="3"></Spacer>
    <Headline :level="3">Zusammengearbeitet mit:</Headline>
    <References :small="true" :images="$page.site.companies"></References>
    <Spacer :size="3"></Spacer>
    <Headline :level="3" id="formTarget">Kontakt</Headline>
    <Spacer :size="1"></Spacer>
    <ContactForm :formName="`Landingpage Form from: ${$page.landingpage.headline}`"></ContactForm>
  </Layout>
</template>

<page-query>


query Landingpage ($id: ID!) {
  site: site(id: "8b7eef239c7763e2ba8567c18cb858e8"){
    companies {
      image
    }
  },
  landingpage: landingpage (id: $id){
      features{
        headline,
        image,
        description
      },
      testimonial{
          name,
          title,
          quote
        },
      headline,
      subline,
      headerImage,
      content
  }
}

</page-query>
<script>
import Subline from "../components/Subline";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";
import RichText from "../components/RichText";
import Spacer from "../components/Spacer";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Testimonials from "../components/Testimonials";
import Label from "../components/Label";
import FeatureList from "../components/FeatureList";
import Message from "../components/Message";
import Headline from "../components/Headline";
import References from "../components/References";

export default {
  components: {
    References,
    ContactForm,
    Label,
    Input,
    Textarea,
    Button,
    Testimonials,
    FeatureList,
    Message,
    Subline,
    Headline,
    RichText,
    Spacer
  },
  data() {
    return {
      formData: {},
      formSent: false
    };
  },
  metaInfo() {
    return {
      meta: [{ name: "robots", content: "noindex, nofollow" }]
    };
  }
};
</script>

<style lang="postcss" scoped>
header {
  padding: 4em 0;
}
.contactForm {
  max-width: 20em;
}
</style>
