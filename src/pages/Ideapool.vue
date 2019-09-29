'<template>
  <Layout title="Entwicklungs-Sprint zu gewinnen">
    <Headline :level="1">Entwicklungs-Sprint zu gewinnen</Headline>
    <Paragraph>
      Was bei uns im Kalender steht: Vom 2.12.2019 bis zum 6.12.2019 machen wir einen
      <AnchorLink to="product/entwicklungs-sprint">Entwicklungs-Sprint</AnchorLink>
      <br />
      <br />Was noch nicht fest steht ist, was wir in dieser Woche konkret machen.
      Deshalb wollen wir dich gerne einladen uns
      <AnchorLink href="#addIdea">deine Idee zu pitchen,</AnchorLink>&nbsp;was wir deiner Meinung nach in dieser Woche machen können.
      <br />
      <br />Am 29.11.2019 suchen wir uns eine Idee aus. Wichtig hierbei ist dabei die Intention und Herausforderung, aber die Machbarkeit ist auch ein Faktor.
      <br />
      <br />Die Abstimmungen sind mehr als Meinungsspiegel, und weniger als konkretes Voting gedacht.
      <br />

      <br />Generell präferieren wir Ideen, die unter die Kategorie "Make World suck less" fallen.
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
              <AnchorLink href="#teilnahmebedingungen">Teilnahmebedingungen</AnchorLink>
            </Label>
          </CheckboxWrap>
          <Button class="button">Idee hinzufügen</Button>
        </div>
      </form>
    </div>
    <Spacer :size="4"></Spacer>

    <div id="teilnahmebedingungen">
      <Headline>Teilnahmebedingungen</Headline>Wir sind ein kleines Team und haben das hier mal eben zusammengelötet™.
      <List type="ol">
        <li>Bitte verzichtete darauf mehr als eine Idee zu pitchen.</li>
        <li>Bitte verhalte dich wie du dich auch sonstwo im Internet verhalten würdest.</li>
        <li>Bitte lade nicht die Seite 500 mal neu und Vote deine Idee hoch.</li>
        <li>Wenn du "Ich will beim Sprint aktiv mithelfen" angeklickt hast, gehen wir davon aus, dass du in der Woche vom 2.12. - 6.12.2019 mindestens 3-4 Stunden am Tag verfügbar bist.</li>
        <li>Wie bei unserem regulärem Entwicklungs-Sprint gehört das Ergebnis und der gesamte Source-Code dir. Bei diesem Sprint behalten wir uns die Rechte daran den Sprint als Referenz zu benuzten und das Ergebnis öffentlich zu kommunizieren.</li>
        <li>Wie bei unserem regulärem Entwickliungs-Sprint besteht nach beendung der Sprints keine gewährleistung auf Qualität, Hosting oder sonstigen Support. Für kleine Fragen stehen wir selbstverständlich immer zur Verfügung.</li>
      </List>
    </div>
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
  padding: 1.5em 1.5em 1em 1.5em;
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