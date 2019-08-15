<template>
  <Layout>
    <header>
      <Headline>{{$page.landingpage.headline}}</Headline>
      <Subline v-if="$page.landingpage.subline">{{$page.landingpage.subline}}</Subline>
      <br />
      <Button href="#formTarget">Jetzt Kontaktieren</Button>
    </header>
    <FeatureList :data="$page.landingpage.features"></FeatureList>
    <Testimonials :data="$page.landingpage.testimonial"></Testimonials>
    <Spacer :size="3"></Spacer>
    <Headline :level="3">Zusammengearbeitet mit:</Headline>
    <References :small="true" :images="$page.site.companies"></References>
    <Spacer :size="3"></Spacer>
    <Headline :level="3" id="formTarget">Kontakt</Headline>
    <Spacer :size="1"></Spacer>

    <form name="form-name" method="post" netlify>
      <div>
        <label for="name">Name</label>
        <input required name="name" type="text" />
      </div>
      <input type="hidden" name="form-name" value="contact" />
      <button type="submit">Send</button>
    </form>
    <form
      class="contactForm"
      :name="`Schubrakede Contact From ${$page.landingpage.headline}` "
      method="post"
      v-on:submit.prevent="handleSubmit"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out:
          <input name="bot-field" />
        </label>
      </p>
      <div class="sender-info">
        <Label>Name</Label>
        <Input label="Name" type="text" v-model="formData.name" />
        <Label for="email">E-Mail</Label>
        <Input type="email" name="email" v-model="formData.email" />
        <Label for="company">Unternehmen</Label>
        <Input type="text" name="company" v-model="formData.email" />
        <Label for="telephone">Telefonnummer</Label>
        <Input type="tel" name="telephone" v-model="formData.tel" />
        <input type="text" v-model="formData.test" />
      </div>

      <div class="message-wrapper">
        <Label for="message">Nachricht</Label>
        <Textarea name="message" v-model="formData.message" />
      </div>

      <Button type="submit">Absenden</Button>
      <Message v-if="formSent">Erfolgreich versendet</Message>
    </form>
  </Layout>
</template>

<page-query>


query Landingpage ($id: String!) {
  site: site(id: "8b7eef239c7763e2ba8567c18cb858e8"){
    companies {
      Image
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
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => (this.formSent = true))
        .catch(error => alert(error));
    }
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
