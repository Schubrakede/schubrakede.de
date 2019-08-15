<template>
  <form :name="formName" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" :value="formName" />
    <Label>Name</Label>
    <Input label="Name" @input="ev => updateInput" type="text" v-model="formData.text" />
    <Label for="email">E-Mail</Label>
    <Input @input="ev => updateInput" type="email" v-model="formData.email" name="E-Mail" />
    <Label for="company">Unternehmen</Label>
    <Input @input="ev => updateInput" type="text" v-model="formData.text" name="company" />
    <Label for="telephone">Telefonnummer</Label>
    <Input @input="ev => updateInput" type="tel" v-model="formData.tel" name="telephone" />

    <label v-for="(panelist, index) in panelists" :key="index">
      <input
        type="radio"
        name="panelist"
        :value="panelist"
        @input="ev => updatePanelist"
        :checked="panelist === currentPanelist"
      />
      <span>{{ panelist }}</span>
    </label>
    <button>Submit</button>
  </form>
</template>

<script>
import Label from "../components/Label";
import Input from "../components/Input";
export default {
  props: ["formName"],
  components: { Label, Input },
  name: "QAForm",
  methods: {
    updatePanelist(ev) {
      this.currentPanelist = ev.target.value;
    },
    updateInput(ev) {
      this.formData = ev.target.value;
    }
  },
  data() {
    return {
      formData: {},
      panelists: ["Evan You", "Chris Fritz"],
      currentPanelist: "Evan You"
    };
  }
};
</script>

<style>
</style>