<template>
  <div class="bg-white">
    <div class="container mx-auto ">
      <div class="flex flex-wrap justify-center ">
        <DataCard
          v-for="movie in movies"
          :key="movie.id"
          :data="movie"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
import { moviesStore } from '@/store/index'

export default Vue.extend({
  asyncData () {
    return moviesStore.getMovies()
  },
  data () {
    return {
      movies: moviesStore.moviesList
    }
  }

})
</script>

<style>

</style>
