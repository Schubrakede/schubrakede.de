<template>
  <form :name="formName" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" :value="formName" />
    <Label for="name">Name</Label>
    <Input
      name="name"
      id="name"
      placeholder="z.b. Max Mustermann"
      @input="ev => updateInput"
      type="text"
      v-model="formData.name"
    />
    <Label for="email">E-Mail*</Label>
    <Input
      placeholder="name@unternehmen.com"
      @input="ev => updateInput"
      type="email"
      required
      v-model="formData.email"
      name="email"
      id="email"
    />
    <Label for="company">Unternehmen*</Label>
    <Input
      placeholder="z.b. Fielmann, Jimdo, Xing"
      required
      @input="ev => updateInput"
      type="text"
      v-model="formData.company"
      name="company"
      id="company"
    />
    <Label for="telephone">Telefonnummer</Label>
    <Input
      placeholder="Mobil oder Festnetz"
      @input="ev => updateInput"
      type="tel"
      v-model="formData.tel"
      name="telephone"
      id="telephone"
    />
    <Label for="message">Nachricht</Label>
    <Textarea
      placeholder="Konkretes Interesse oder grobe Neugier?"
      @input="ev => updateInput"
      v-model="formData.message"
      name="message"
      id="message"
    />
    <CheckboxWrap>
      <Checkbox
        type="checkbox"
        required
        @input="ev => updateInput"
        v-model="formData.checked"
        name="datenschutzcheck"
        id="datenschutzcheck"
      />
      <Label :noMargin="true" for="datenschutzcheck">
        Ich stimme
        <AnchorLink to="/datenschutz">der Datenschutzerklärung</AnchorLink>&nbsp;zu*
      </Label>
    </CheckboxWrap>

    <br />
    <span>Mit * gekennzeichnete Felder sind Pflichtfelder</span>
    <br />
    <br />
    <Button>Anfrage Senden</Button>
  </form>
</template>

<script>
import Label from "../components/Label";
import AnchorLink from "../components/AnchorLink";
import Button from "../components/Button";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";
import CheckboxWrap from "../components/CheckboxWrap";
import Textarea from "../components/Textarea";
export default {
  props: ["formName"],
  components: {
    CheckboxWrap,
    Textarea,
    Label,
    Button,
    Input,
    Checkbox,
    AnchorLink
  },
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