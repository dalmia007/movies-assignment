<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '../components/Navbar.vue'

export default Vue.extend({
  components: {
    Navbar
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
