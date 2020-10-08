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
// import { moviesStore } from '@/store/index'
@Component
export default class Movies extends Vue {
  // @Prop({ type: Object, required: true })
  // id:any
  // movies:any=[]

  // fetch () {
  //   moviesStore.getMovies().then(() => {
  //     this.movies = moviesStore.moviesList
  //     console.log(this.movies)
  //   })
}

</script>

<style>

</style>
