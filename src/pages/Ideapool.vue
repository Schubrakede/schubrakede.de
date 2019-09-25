<template>
  <Layout>
    <Headline>Schubrakede Ideen Sammlung</Headline>
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
    <Spacer :size="2"></Spacer>

    <Headline margin>Eigene Idee hinzufügen</Headline>
    <form @submit.prevent="addIdea">
      <Label>Name</Label>
      <Input type="text" required v-bind:value="nameValue" v-on:input="nameValue = $event" />
      <Label>Deine Idee</Label>
      <Textarea type="text" required v-bind:value="ideaValue" v-on:input="ideaValue = $event" />
      <Label>E-Mail</Label>
      <Input
        type="email"
        pattern=".+@globex.com"
        size="30"
        required
        v-bind:value="emailValue"
        v-on:input="emailValue = $event"
      />
      <Button class="button">Idee hinzufügen</Button>
    </form>
  </Layout>
</template>

<script>
import { db } from "../../firebase-config";
import Label from "../components/Label";
import Spacer from "../components/Spacer";
import Button from "../components/Button";
import Headline from "../components/Headline";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
export default {
  components: { Spacer, Headline, Textarea, Label, Input, Button },
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
</style>