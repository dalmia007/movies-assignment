<template>
  <div class="data-image bg-cover hover:opacity-75" :style="data.poster ? {backgroundImage: 'url('+data.poster+')'} :{backgroundImage: 'url('+data.image+')'} " />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class DataImage extends Vue {
  @Prop({ type: Object, required: true })
  data:any
}

</script>

<style>
.data-image{
  width: 100%;
  height:400px;
}

</style>
