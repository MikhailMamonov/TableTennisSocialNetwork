<template>
  <div>
    <h2>Nav Bar</h2>
    <ul>
      <li v-for="routes in links" v-bind:key="routes.id">
        <router-link :to="`${routes.page}`">{{routes.text}}</router-link>
      </li>
    </ul>
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
ul hover,
ul li router-link-active,
ul li router-link-exact-active {
  background-color: #4caf50;
  color: white;
  cursor: pointer;
}

/* Change the link color on hover */
li router-link:hover {
  background-color: #555;
  color: white;
}

ul li router-link {
  display: block;
  width: 60px;
}

li {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
  text-align: center;
  border-bottom: 1px solid #555;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 25%;
  background-color: #f1f1f1;
  position: fixed;
  overflow: auto;
}

li:last-child {
  border-bottom: none;
}
</style>