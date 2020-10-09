<template>
  <div class="movie-image bg-cover" :style="{backgroundImage: 'url('+movie.poster+')'}" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class MoviesImage extends Vue {
  @Prop({ type: Object, required: true })
  movie:any
}

</script>

<style>
.movie-image{
  width: 100%;
  height:400px;
}

</style>
