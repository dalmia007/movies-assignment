<template>
  <div class="bg-white">
    <div class="container mx-auto ">
      <div v-if="datas.length!=0" class="flex flex-wrap justify-center">
        <DataCard
          v-for="data in datas"
          :key="data.id"
          :data="data"
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
import { moviesStore, peopleStore } from '@/store/index'

export default Vue.extend({
  data () {
    return {
      datas: this.$route.params.routeNumber === '2' ? peopleStore.searchedPeopleList : moviesStore.searchedMoviesList
    }
  }
})
</script>

<style>

</style>
