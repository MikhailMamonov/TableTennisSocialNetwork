<template>
  <div class="nav-side-menu">
    <div class="brand">Brand Logo</div>
    <div class="menu-list">
      <ul id="menu-content" class="menu-content collapse out">
        <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
        <li>
          <a href="#">
            <i class="fa fa-dashboard fa-lg"></i> Dashboard
          </a>
        </li>

        <li data-toggle="collapse" data-target="#products" class="collapsed active">
          <a href="#">
            <i class="fa fa-gift fa-lg"></i> UI Elements
            <span class="arrow"></span>
          </a>
        </li>
        <ul class="sub-menu collapse" id="products">
          <li class="active">
            <a href="#">CSS3 Animation</a>
          </li>
          <li>
            <a href="#">General</a>
          </li>
          <li>
            <a href="#">Buttons</a>
          </li>
          <li>
            <a href="#">Tabs & Accordions</a>
          </li>
          <li>
            <a href="#">Typography</a>
          </li>
          <li>
            <a href="#">FontAwesome</a>
          </li>
          <li>
            <a href="#">Slider</a>
          </li>
          <li>
            <a href="#">Panels</a>
          </li>
          <li>
            <a href="#">Widgets</a>
          </li>
          <li>
            <a href="#">Bootstrap Model</a>
          </li>
        </ul>
        <li
          class="nav-item mt-auto"
          data-toggle="tab"
          v-for="routes in links"
          v-bind:key="routes.id"
        >
          <div class="nav-link">
            <router-link :to="`${routes.page}`">{{routes.text}}</router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Router from "./.././../router/index.js";

Vue.use(Router);
export default {
  name: "Navigation",
  router: Router,
  data() {
    return {
      links: [
        {
          id: 0,
          text: "Home",
          page: "/Home"
        },
        {
          id: 1,
          text: "Catalog",
          page: "/Catalog"
        },
        {
          id: 2,
          text: "About",
          page: "/About"
        },
        {
          id: 3,
          text: "Basket",
          page: "/Basket"
        }
      ]
    };
  }
};
</script>
<style scoped>
@import "./Navigation.css";
</style>
