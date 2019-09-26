<template>
  <Layout>
    <Headline :level="1">Entwicklungssprint zu Gewinnen</Headline>
    <Paragraph>
      Vom 2.12. bis zum 6.12. haben wir einen
      <AnchorLink to="product/entwicklungs-sprint">Entwicklungssprint</AnchorLink>&nbsp;ohne konkrete Idee geplant und wollen dich gerne einladen uns
      <AnchorLink href="#addIdea">deine Idee zu pitchen</AnchorLink>&nbsp;was wir in dieser Woche machen können.
      <br />
      <br />Am 6.12. werden uns dann eine Idee heraussuchen unter Betrachtung der Umsetzbarkeit, Intention &amp; Abstimmungen.
      <br />
      <br />Generell freuen wir uns über Ideen die unter die Kategorie "Make World suck less" fallen.
    </Paragraph>
    <Spacer :size="2"></Spacer>

    <div id="ideas">
      <Headline>Ideen Sammlung</Headline>
      <Spacer :size="1"></Spacer>
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
        <Label>Name</Label>
        <Input type="text" required v-bind:value="nameValue" v-on:input="nameValue = $event" />
        <Label>Deine Idee (max 300. Zeichen)</Label>
        <Textarea
          maxlength="300"
          type="text"
          required
          v-bind:value="ideaValue"
          v-on:input="ideaValue = $event"
        />
        <Label>E-Mail</Label>
        <Input
          type="email"
          size="30"
          required
          v-bind:value="emailValue"
          v-on:input="emailValue = $event"
        />
        <CheckboxWrap>
          <Checkbox id="mithelfen"></Checkbox>
          <Label :noMargin="true" for="mithelfen">Ich will beim Sprint aktiv mithelfen</Label>
        </CheckboxWrap>
        <CheckboxWrap>
          <Checkbox required id="teilnahmebdg"></Checkbox>
          <Label :noMargin="true" for="teilnahmebdg">
            Ich akzeptiere die
            <AnchorLink href="#teilnahmebedingungen">Teilnahmebedingungen</AnchorLink>
          </Label>
        </CheckboxWrap>
        <Button class="button">Idee hinzufügen</Button>
      </form>
    </div>
    <Spacer :size="4"></Spacer>

    <div id="teilnahmebedingungen">
      <Headline>Teilnahmebedingungen</Headline>Wir sind ein kleines Team und haben das hier mal eben zusammengelötet™.
      <br />
      <br />Bitte verzichtete darauf mehr als eine Idee zu pitchen.
      <br />Bitte verhalte dich wie du dich auch sonstwo im Internet verhalten würdest.
      <br />Bitte lade nicht die Seite 500 mal neu und Vote deine Idee hoch.
      <br />"Wenn du Ich will beim Sprint aktiv mithelfen" angeklickt hast, gehen wir davon aus, dass du in der Woche vom 2.12. - 6.12. mindestens 3-4 Stunden am Tag verfügbar bist.
    </div>
  </Layout>
</template>

<script>
import { db } from "../db";
import Label from "../components/Label";
import CheckboxWrap from "../components/CheckboxWrap";
import Checkbox from "../components/Checkbox";
import Spacer from "../components/Spacer";
import Button from "../components/Button";
import AnchorLink from "../components/AnchorLink";
import Paragraph from "../components/Paragraph";
import Headline from "../components/Headline";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
export default {
  components: {
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
      nameValue: ""
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
        rating: 0
      });
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
  grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
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
  padding: 1.5em 1.5em 1em 1.5em;
  background: white;
}
.idea-text {
  margin: 0;
}
.button {
  margin-bottom: 1em;
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