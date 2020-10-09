<template>
  <div class="container">
    hi
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { moviesStore, peopleStore } from '@/store/index'

export default Vue.extend({

  data () {
    return {
      movies: moviesStore.moviesList,
      people: peopleStore.peopleList
    }
  },

  created () {
    moviesStore.getMovies().then(() => {
      this.movies = moviesStore.moviesList
    })
    peopleStore.getPeople()
  }

})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

</style>
