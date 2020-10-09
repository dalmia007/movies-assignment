<template>
  <div class="rounded cursor-pointer shadow-lg overflow-hidden m-2 people-card">
    <a :href="'https://www.themoviedb.org/person/'+ people.id ">
      <PeopleImage :people="people" />
      <div class="px-6 py-4 bg-black ">
        <h2 class="mb-2 text-white">
          {{ people.name }}
        </h2>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import PeopleImage from '@/components/PeopleImage.vue'
@Component({
  components: { PeopleImage }
})
export default class PeopleCard extends Vue {
  @Prop({ type: Object, required: true })
  people:any
}

</script>

<style>
.people-card{
  width: 300px;
  transition: 0.3s;
}

.people-card:hover{
  transform: scale(1.025,1.025);
}

</style>
