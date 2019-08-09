<template>
  <div :class="[`${SIZE_CLASSES[size]}`,'spacer']"></div>
</template>

<script>
export default {
  props: ["size"],
  data: () => {
    return {
      SIZE_CLASSES: ["sizeOne", "sizeTwo", "sizeThree", "sizeFour", "sizeFive"]
    };
  }
};
</script>

<style>
.spacer {
  height: 40px;
}

.sizeOne {
  height: 40px;
}

.sizeTwo {
  height: 80px;
}

.sizeThree {
  height: 120px;
}
.sizeFour {
  height: 160px;
}
.sizeFive {
  height: 200px;
}
</style>
