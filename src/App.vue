<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <menu-principal-vue></menu-principal-vue>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
import MenuPrincipalVue from './components/MenuPrincipal.vue';
import FooterVue from './components/Footer.vue';
export default {
  components: { MenuPrincipalVue, FooterVue },
  name: 'App',
}
</script>

<style scoped>
  html, body {
    height: 100%;
    margin: 0px;
    overflow-x: hidden;
  }
</style>
