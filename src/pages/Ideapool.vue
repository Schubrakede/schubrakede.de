'<template>
  <Layout
    title="Ideen-Pool"
    description="Wir machen einen Sprint, wir brauchen nur noch dein Input"
  >
    <div id="ideas">
      <div class="idea-grid">
        <div class="idea" v-for="idea in ideas" :key="idea.name">
          <p class="idea-text">{{idea.idea}}</p>
          <div class="idea-footer">
            <span class="rating-amount">{{idea.rating}}</span>
            <button class="upvote-button" @click.once="increaseRating(idea.id, idea.rating)">👍</button>
          </div>
        </div>
      </div>
    </div>
    <Spacer :size="2"></Spacer>

    <div id="addIdea">
      <Headline margin>Eigene Idee hinzufügen</Headline>
      <form class="form" @submit.prevent @submit.once="addIdea">
        <Dialog class="submitted" v-if="submitted">Deine Idee wurde hinzugefügt</Dialog>
        <div v-if="!this.submitted">
          <Label>Dein Name</Label>
          <Input type="text" required v-bind:value="nameValue" v-on:input="nameValue = $event" />
          <Label>E-Mail</Label>
          <Input
            type="email"
            size="30"
            required
            v-bind:value="emailValue"
            v-on:input="emailValue = $event"
          />
          <Label>Deine Idee (max 300. Zeichen)</Label>
          <Textarea
            maxlength="300"
            type="text"
            required
            v-bind:value="ideaValue"
            v-on:input="ideaValue = $event"
          />
          <CheckboxWrap>
            <Checkbox @change="participate = $event" :value="participate" id="mithelfen"></Checkbox>
            <Label :noMargin="true" for="mithelfen">Ich will beim Sprint aktiv mithelfen</Label>
          </CheckboxWrap>
          <CheckboxWrap>
            <Checkbox required id="teilnahmebdg"></Checkbox>
            <Label :noMargin="true" for="teilnahmebdg">
              Ich akzeptiere die
              <AnchorLink to="/datenschutz">Datenschutzvereinbarung</AnchorLink>
            </Label>
          </CheckboxWrap>
          <Button class="button">Idee hinzufügen</Button>
        </div>
      </form>
    </div>
    <Spacer :size="4"></Spacer>
  </Layout>
</template>

<script>
import { db } from "../db";
import Label from "../components/Label";
import CheckboxWrap from "../components/CheckboxWrap";
import List from "../components/List";
import Checkbox from "../components/Checkbox";
import Spacer from "../components/Spacer";
import Dialog from "../components/Dialog";
import Button from "../components/Button";
import AnchorLink from "../components/AnchorLink";
import Paragraph from "../components/Paragraph";
import Headline from "../components/Headline";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
export default {
  components: {
    List,
    Dialog,
    AnchorLink,
    CheckboxWrap,
    Checkbox,
    Spacer,
    Headline,
    Textarea,
    Paragraph,
    Label,
    Input,
    Button
  },
  data() {
    return {
      ideas: [],
      emailValue: "",
      ideaValue: "",
      nameValue: "",
      participate: false,
      submitted: false
    };
  },
  firestore: {
    ideas: db.collection("ideas")
  },
  methods: {
    addIdea() {
      db.collection("ideas").add({
        name: this.nameValue,
        idea: this.ideaValue,
        email: this.emailValue,
        participate: this.participate,
        rating: 0
      });
      this.submitted = true;
    },
    increaseRating(id, rating) {
      console.log(id);
      db.collection("ideas")
        .doc(id)
        .update({ rating: rating + 1 });
    }
  }
};
</script>

<style lang="postcss" scoped>
.idea-grid {
  grid-gap: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12.5em, 1fr));
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
}
.idea {
  animation: appear 350ms ease-in 1;
  box-shadow: var(--sr-shadow);
  padding: 0.5em 1em 0.5em 1em;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.idea-text {
  margin: 0;
}
.button {
  margin-bottom: 1em;
}
.rating-amount {
  display: inline-flex;
  align-items: center;
}
.idea-footer {
  display: flex;
  justify-content: flex-end;
  color: var(--bley);
}
.upvote-button {
  outline: none;
  font: inherit;
  background: none;
  border: none;
}
.form {
  max-width: 40em;
}
</style>