<template>
  <div class="rounded shadow-lg overflow-hidden m-2  transition duration-325 transform hover:-translate-y-1  hover:-translate-x-1 hover:scale-101 shadow-2xl data-card">
    <a :href=" data.title ?('https://www.themoviedb.org/movie/'+ data.id): ('https://www.themoviedb.org/person/'+ data.id) " target="_blank">
      <DataImage :data="data" />
    </a>
    <div class="px-6 py-4 bg-black ">
      <h2 v-if="data.title" class="mb-2 text-white truncate">
        {{ data.title }}
      </h2>
      <h2 v-else class="mb-2 text-white truncate">
        {{ data.name }}
      </h2>
      <p v-if="data.rating" class="mb-4 text-white text-m ">
        <img src="~/assets/star.svg" width="8%" class="inline">
        <span class="align-middle p-1">{{ data.rating }}</span>
        <img v-if="data.favorite === false" src="~/assets/not_fav.svg" width="8%" class="inline cursor-pointer ml-4" @click="fav(data.id)">
        <img v-if="data.favorite === true" src="~/assets/fav.svg" width="8%" class="inline cursor-pointer ml-4" @click="fav(data.id)">
      </p>
      <p v-if="data.rating === 0" class="mb-4 text-white text-sm ">
        <span>No Rating</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import DataImage from '@/components/DataImage.vue'
import { moviesStore } from '@/store/index'

@Component({
  components: { DataImage }
})
export default class Card extends Vue {
  @Prop({ type: Object, required: true })
  data: any

  fav (id:number) {
    if (this.$route.name === 'movies') {
      return moviesStore.toggleFavOriginalList(id)
    } else if (this.$route.name === 'search-movies-id') {
      return moviesStore.toogleSearchedMoviesList(id)
    } else {
      moviesStore.toggleFavFavList(id)
    }
  }
}

</script>

<style>
.data-card{
    width: 300px;
}
</style>
