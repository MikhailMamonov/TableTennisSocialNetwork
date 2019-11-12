<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Header />
    <router-view></router-view>
    <Navigation />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import Navigation from "./components/Navigation/Navigation.vue";
import Vue from "vue";
import Router from "./router/index.js";

Vue.use(Router);

export default {
  name: "app",
  router: Router,
  components: {
    Header,
    Footer,
    Navigation
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
