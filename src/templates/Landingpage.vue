<template>
  <Layout>
    <header>
      <Headline>{{$page.landingpage.headline}}</Headline>
      <Subline v-if="$page.landingpage.subline">{{$page.landingpage.subline}}</Subline>
      <Button>Jetzt Kontaktieren</Button>
    </header>
    <FeatureList :data="$page.landingpage.features"></FeatureList>
    <Testimonials :data="$page.landingpage.testimonial"></Testimonials>
    <Headline :level="2">Zusammengearbeitet mit:</Headline>
    <References :small="true" :images="$page.site.companies"></References>
    <form
      name="contact"
      method="post"
      v-on:submit.prevent="handleSubmit"
      action="/success/"
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
        <div>
          <label for="name" class="label">Your name</label>
          <input type="text" name="name" v-model="formData.name" />
        </div>
        <div>
          <label for="email">Your email</label>
          <input type="email" name="email" v-model="formData.email" />
        </div>
      </div>

      <div class="message-wrapper">
        <label for="message">Message</label>
        <textarea name="message" v-model="formData.message"></textarea>
      </div>

      <button type="submit">Submit form</button>
    </form>

    <h1 v-if="formSent">Bla</h1>
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
import Testimonials from "../components/Testimonials";
import FeatureList from "../components/FeatureList";
import Headline from "../components/Headline";
import References from "../components/References";

export default {
  components: {
    References,
    Button,
    Testimonials,
    FeatureList,
    Subline,
    Headline,
    RichText
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
</style>
