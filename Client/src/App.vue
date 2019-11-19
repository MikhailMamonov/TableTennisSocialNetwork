<template>
  <div id="app">
    <div class="header">
      <img alt="Vue logo" src="./assets/logo.png" />
      <Header />
    </div>

    <div class="row">
      <div class="wrapper">
        <div class="box navigation">
          <Navigation />
        </div>
        <div class="box mainContent">
          <router-view></router-view>
        </div>
      </div>
    </div>
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
.wrapper {
  display: grid;
  grid-template-columns: 300px 300px;
  grid-gap: 10px;
  background-color: #fff;
  color: #444;
}

.box {
  padding: 20px;
  font-size: 150%;
  margin: 20px;
}
</style>
