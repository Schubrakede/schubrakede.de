<template>
  <div class="colorWrap">
    <div class="colorField" v-for="color in colors.values" :key="color.name">
      <div class="colorDemo" :style="{backgroundColor: color.value}"></div>
      {{color.name}}
      <br />
      <i class="colorValue">{{color.value}}</i>
    </div>
  </div>
</template>

<script>
import colors from "./colors.json";

export default {
  data() {
    return {
      colors
    };
  }
};
</script>

<style scoped lang="postcss">
.colorWrap {
  padding: 2em 0;
  display: flex;
  flex-flow: row wrap;
}
.colorField {
  text-align: center;
  margin-right: 1em;
  margin-bottom: 2em;
}
.colorDemo {
  margin-bottom: 0.5em;
  border-radius: 6em;
  width: 6em;
  height: 6em;
}
.colorValue {
  font-size: 0.8em;
}
</style>