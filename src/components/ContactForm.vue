<template>
  <form :name="formName" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" :value="formName" />
    <Label for="name">Name</Label>
    <Input
      name="name"
      placeholder="z.b. Max Mustermann"
      @input="ev => updateInput"
      type="text"
      v-model="formData.name"
    />
    <Label for="email">E-Mail</Label>
    <Input
      placeholder="name@unternehmen.com"
      @input="ev => updateInput"
      type="email"
      required
      v-model="formData.email"
      name="email"
    />
    <Label for="company">Unternehmen</Label>
    <Input
      placeholder="z.b. Fielmann, Jimdo, Xing"
      required
      @input="ev => updateInput"
      type="text"
      v-model="formData.company"
      name="company"
    />
    <Label for="telephone">Telefonnummer</Label>
    <Input
      placeholder="Mobil oder Festnetz"
      @input="ev => updateInput"
      type="tel"
      v-model="formData.tel"
      name="telephone"
    />
    <Label for="message">Nachricht</Label>
    <Textarea
      placeholder="Konkretes interesse oder ungesättigte Neugier?"
      @input="ev => updateInput"
      v-model="formData.message"
      name="message"
    />
    <Button>Absenden</Button>
  </form>
</template>

<script>
import Label from "../components/Label";
import Button from "../components/Button";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
export default {
  props: ["formName"],
  components: { Textarea, Label, Button, Input },
  methods: {
    updateInput(ev) {
      this.formData = ev.target.value;
    }
  },
  data() {
    return {
      formData: {}
    };
  }
};
</script>

<style>
form {
  max-width: 30em;
}
</style>