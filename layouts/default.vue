<template>
  <div>
    <Navbar />
    <Movies />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '../components/Navbar.vue'
import Movies from '../components/Movies.vue'

export default Vue.extend({
  components: {
    Navbar,
    Movies
  }

})
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
