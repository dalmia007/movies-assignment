<template>
  <index>
    <Navbar />
  </index>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Navbar from '~/components/Navbar.vue'

@Component({
  components: {
    Navbar
  }
})

export default class People extends Vue {

}
</script>

<style>

</style>
