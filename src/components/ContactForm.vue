<template>
  <form :name="formName" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" :value="formName" />
    <Label>Name</Label>
    <Input label="Name" @input="ev => updateInput" type="text" v-model="formData.text" />
    <Label for="email">E-Mail</Label>
    <Input @input="ev => updateInput" type="email" v-model="formData.email" name="E-Mail" />
    <Label for="company">Unternehmen</Label>
    <Input required @input="ev => updateInput" type="text" v-model="formData.text" name="company" />
    <Label for="telephone">Telefonnummer</Label>
    <Input @input="ev => updateInput" type="tel" v-model="formData.tel" name="telephone" />
    <Label for="message">Nachricht</Label>
    <Textarea @input="ev => updateInput" v-model="formData.message" name="message" />
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