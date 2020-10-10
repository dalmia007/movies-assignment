<template>
  <div class="rounded cursor-pointer shadow-lg overflow-hidden m-2 data-card">
    <a :href=" data.title ?('https://www.themoviedb.org/movie/'+ data.id): ('https://www.themoviedb.org/person/'+ data.id) " target="_blank">
      <DataImage :data="data" />
      <div class="px-6 py-4 bg-black ">
        <h2 v-if="data.title" class="mb-2 text-white truncate">
          {{ data.title }}
        </h2>
        <h2 v-else class="mb-2 text-white truncate">
          {{ data.name }}
        </h2>
        <p v-if="data.rating" class="mb-4 text-white text-sm ">
          <img src="~/assets/star.svg" width="8%" class="inline">
          <span class="align-middle p-1">{{ data.rating }}</span>
        </p>
        <p v-if="data.rating === 0" class="mb-4 text-white text-sm ">
          <span>No Rating</span>
        </p>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import DataImage from '@/components/DataImage.vue'
@Component({
  components: { DataImage }
})
export default class Card extends Vue {
  @Prop({ type: Object, required: true })
  data:any
}

</script>

<style>
.data-card{
  width: 300px;
  transition: 0.3s;
}

.data-card:hover{
  transform: scale(1.025,1.025);
}

</style>
