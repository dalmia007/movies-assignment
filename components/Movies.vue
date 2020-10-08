<template>
  <div>
    <ul>
      <li>
        hi
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import moviesList from '@/store/modules/movies'

@Component
export default class Movies extends Vue {
  movies:any=[]

  created () {
    moviesList.getMovies().then(() => {
      this.movies = moviesList.moviesList
    })
  }
}

</script>

<style>

</style>
