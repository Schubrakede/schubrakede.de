<template>
  <div>
    <input
      :checked="value"
      @change="$emit('change', $event.target.checked)"
      type="checkbox"
      class="checkbox"
    />
  </div>
</template>

<script>
export default {
  props: { value: Boolean }
};
</script>

<style lang="postcss">
.checkbox {
  border: 2px solid var(--bley);
  width: 32px;
  height: 32px;
}
@supports (-webkit-appearance: none) {
  .checkbox {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    -webkit-appearance: none;
    &:checked {
      &:after {
        position: absolute;
        /*  Create a checkmark in CSS. 
			Could use an SVG or `content: "✓";` instead. 
			This is a box, turned 45 degs, with a 
			left and bottom border to make the checkmark.
			Created using an empty pseudo-element.*/
        content: "";
        width: 1rem;
        height: 0.3rem;
        border: 2px solid black;
        border-right: none;
        border-top: none;
        transform: rotate(-45deg);
      }
    }
  }
}
</style>