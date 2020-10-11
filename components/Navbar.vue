<template>
  <div>
    <nav class=" sm:flex sm:justify-between sm:items-center  bg-black">
      <div class="flex items-center justify-center flex-wrap p-2 sm:pl-3">
        <div class="flex items-center flex-shrink">
          <div class="bg-white shadow p-2 flex w-half rounded">
            <span class="w-auto flex justify-end items-center text-gray-500 p-2">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" text-gray-500 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </span>
            <input
              v-model="input"
              class="w-full rounded p-2 focus:outline-none "
              type="text"
              placeholder="Search"
              @change="getInput"
              @keyup.enter="onClick"
            >
            <select v-model="selected" class="relative w-half bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" @change="onChange">
              <option value="1">
                Movies
              </option>
              <option value="2">
                People
              </option>
            </select>
            <button class="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4 ml-1" @click="onClick">
              <p class="font-semibold text-xs">
                Search
              </p>
            </button>
          </div>
        </div>
      </div>

      <div class="sm:hidden flex justify-center py-2 ">
        <button class="text-white phover:text-grey-dark focus:outline-none focus:text-white" @click="isOpen = !isOpen">
          <svg viewBox="0 0 140 140" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g><path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" fill="white" /></g></svg>
        </button>
      </div>
      <div class=" px-2 py-2 sm:flex " :class="isOpen ? 'block' : 'hidden'">
        <div class="flex justify-center py-1">
          <nuxt-link to="/movies" class="text-white text-opacity-75 px-2 hover:text-opacity-100 block text-center">
            Top Rated Movies
          </nuxt-link>
        </div>
        <div class="flex justify-center py-1">
          <nuxt-link to="/people" class="text-white text-opacity-75 px-2  hover:text-opacity-100 block text-center ">
            Popular People
          </nuxt-link>
        </div>
        <div class="flex justify-center py-1">
          <nuxt-link to="/favmovies" class="text-white text-opacity-75 px-2  hover:text-opacity-100 block  text-center">
            Favorite Movies
          </nuxt-link>
        </div>
      </div>
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
  isOpen:boolean = false

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
    if (input.trim() !== '') {
      moviesStore.searchMovies(input).then(() => {
        this.$router.replace({ name: 'search-movies-id', params: { id: input, routeNumber: this.selected.toString() } })
      })
    }
  }

  searchPeople (input:any) {
    peopleStore.searchPeople(input).then(() => {
      this.$router.replace({ name: 'search-people-id', params: { id: input, routeNumber: this.selected.toString() } })
    })
  }
}

</script>

<style>
.nuxt-link-active {
    color:black;
    background:white
}
</style>
