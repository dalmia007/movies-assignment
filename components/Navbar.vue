<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-black p-2">
      <div class="bg-white shadow p-2 flex w-half rounded">
        <span class="w-auto flex justify-end items-center text-gray-500 p-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" text-gray-500 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </span>
        <input
          v-model="input"
          class="w-full rounded p-2 "
          type="text"
          placeholder="Try 'Batman'"
          @change="getInput"
          @keyup.enter="onClick"
        >
        <select v-model="selected" class="relative appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" @change="onChange">
          <option value="1">
            Movies
          </option>
          <option value="2">
            People
          </option>
        </select>
        <button class="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4" @click="onClick">
          <p class="font-semibold text-xs">
            Search
          </p>
        </button>
      </div>
      <nuxt-link to="/movies" class="text-white">
        Top Rated Movies
      </nuxt-link>
      <nuxt-link
        to="/people"
        class="text-white"
      >
        Popular People
      </nuxt-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { moviesStore, peopleStore } from '@/store/index'

@Component
export default class Navbar extends Vue {
  input : string = ''
  selected: number = 1

  onChange (event:any) {
    this.selected = event.target.value
  }

  getInput (event:any) {
    this.input = event.target.value
  }

  onClick () {
    if (this.selected < 2) {
      this.searchMovies(this.input)
      this.input = ''
    } else {
      this.searchPeople(this.input)
      this.input = ''
    }
  }

  searchMovies (input:any) {
    moviesStore.searchMovies(input).then(() => {
      this.$router.replace({ name: 'search-movies-id', params: { id: input, routeNumber: this.selected.toString() } })
    })
  }

  searchPeople (input:any) {
    peopleStore.searchPeople(input).then(() => {
      this.$router.replace({ name: 'search-people-id', params: { id: input, routeNumber: this.selected.toString() } })
    })
  }
}

</script>

<style>
</style>
