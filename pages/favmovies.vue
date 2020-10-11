<template>
  <div class="bg-white">
    <div class="container mx-auto ">
      <div v-if="movies.length !=0" class="flex flex-wrap justify-center ">
        <DataCard
          v-for="movie in movies"
          :key="movie.id"
          :data="movie"
        />
      </div>
      <div v-else class="flex flex-wrap justify-center py-10 ">
        <img src="~/assets/noresult.png" sm:width="75%">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
import { moviesStore } from '@/store/index'

export default Vue.extend({
  computed: {
    movies () {
      return moviesStore.favoriteMoviesList
    }
  }

})
</script>

<style>

</style>
