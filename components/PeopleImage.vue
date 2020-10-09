<template>
  <div class="people-image bg-cover" :style="{backgroundImage: 'url('+people.image+')'}" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class PeopleImage extends Vue {
  @Prop({ type: Object, required: true })
  people:any
}

</script>

<style>
.people-image{
  width: 100%;
  height:400px;
}

</style>
