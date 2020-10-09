<template>
  <div class="rounded cursor-pointer shadow-lg overflow-hidden m-2 movie-card">
    <a :href="'https://www.themoviedb.org/movie/'+ movie.id ">
      <MoviesImage :movie="movie" />
      <div class="px-6 py-4 bg-black ">
        <h2 class="mb-2 text-white">
          {{ movie.title }}
        </h2>
        <p class="mb-4 text-white text-sm ">
          {{ movie.rating }}
        </p>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import MoviesImage from '@/components/MovieImage.vue'
@Component({
  components: { MoviesImage }
})
export default class MoviesCard extends Vue {
  @Prop({ type: Object, required: true })
  movie:any
}

</script>

<style>
.movie-card{
  width: 300px;
  transition: 0.3s;
}

.movie-card:hover{
  transform: scale(1.025,1.025);
}

</style>
