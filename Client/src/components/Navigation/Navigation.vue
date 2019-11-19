<template>
  <div>
    <div class="row">
      <div class="nav-title">
        <h3>Bootstrap Sidebar</h3>
      </div>
      <ul class="nav nav-pills flex-column">
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
</style>