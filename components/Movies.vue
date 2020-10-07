<template>
  <div>
    <ul>
      <li>
        hi
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
export default class Movies extends Vue {
  data () {
    return {
      movies: []
    }
  }

  async () {
    this.$store.getters.movies.Movies()
  }
}
</script>

<style>

</style>
