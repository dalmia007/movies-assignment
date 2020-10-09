<template>
  <div class="bg-white">
    <div class="container mx-auto ">
      <div class="flex flex-wrap justify-center">
        <DataCard
          v-for="data in datas"
          :key="data.id"
          :data="data"
        />
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
