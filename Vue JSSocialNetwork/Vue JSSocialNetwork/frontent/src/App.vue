<template>
 <div id="app">
    <Nav /> 
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'; // @ is an alias to /src
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
