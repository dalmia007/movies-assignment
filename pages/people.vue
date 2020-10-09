<template>
  <div class="bg-white">
    <div class="container mx-auto ">
      <div class="flex flex-wrap justify-center ">
        <PeopleCard
          v-for="people in peoples"
          :key="people.id"
          :people="people"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
import { peopleStore } from '@/store/index'

export default Vue.extend({
  asyncData () {
    return peopleStore.getPeople()
  },
  data () {
    return {
      peoples: peopleStore.peopleList
    }
  }

})
</script>

<style>

</style>
