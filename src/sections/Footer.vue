<template>
  <footer class="footer">
    <AnchorLink to="/imprint">Impressum</AnchorLink>
    <AnchorLink to="/datenschutz">Datenschutzerklärung</AnchorLink>
  </footer>
</template>

<script>
import AnchorLink from "../components/AnchorLink";
export default {
  components: { AnchorLink }
};
</script>

<style lang="postcss">
.footer {
  align-items: flex-start;
  padding: 200px 0 0 0;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: flex-start;
  flex-direction: row;

  @media (--sr-mobile) {
    grid-template-columns: auto;
    justify-items: flex-start;
  }
}
</style>
