<template>
  <div class="colorWrap">
    <div class="colorField" v-for="color in colors" :key="color.name">
      <div class="colorDemo" :style="{backgroundColor: color.value}"></div>
      {{color.name}}
      <br />
      <i class="colorValue">{{color.value}}</i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        { name: "dark", value: "#343637" },
        { name: "starrySky", value: "rgba(36, 38, 43, 1)" },
        { name: "navy", value: "#083a48" },
        { name: "orange", value: "#ff9b00" },
        { name: "green", value: "#87fd6e" },
        { name: "teal", value: "#3ad4d6" },
        { name: "grey", value: "rgba(87, 90, 99, 1)" },
        { name: "blue", value: "rgba(45, 61, 106, 1)" },
        { name: "blueLight", value: "#f8fdff" }
      ]
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