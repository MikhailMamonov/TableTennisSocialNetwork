 <template>
  <div class="hello">
    <h3>Essential Links</h3>
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <section v-else>
      <div v-for="value in values" :key="value.id" class="value">{{ value }}:</div>
    </section>
  </div>
</template>

<script src = './MainContent.js'>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
