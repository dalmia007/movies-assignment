import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import axios from 'axios'

import store from '@/store'

const apiKey: string | undefined = process.env.API_KEY
const moviesUrl: string = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + apiKey

interface Movies {
  id: number
  title: string
  poster: string
  rating: number
}

@Module({
  name: 'movies',
  stateFactory: true,
  namespaced: true,
  store
})

export default class MoviesModule extends VuexModule {
  moviesList: Movies[] =[]

  @Mutation
  setMovies (movies: Movies[]) {
    return (movies.map((movie: any) => {
      const result : Movies = {
        id: movie.id,
        title: movie.title,
        poster: 'https://image.tmdb.org/t/p/original/' + movie.poster_path,
        rating: movie.vote_average
      }
      this.moviesList.push(result)
    }))
  }

  get Movies () {
    return this.moviesList
  }

  @Action({ commit: 'setMovies' })
  async getMovies () {
    const response = await axios.get(moviesUrl)
    return response.data.results
  }
}

//   @Mutation
//   setMovies (movies: Movies[]) {
//     return ((movies.map((movie: any) => {
//       const result: MoviesData{
//         id: movie.id,
//         title: movie.title,
//         poster: 'https://image.tmdb.org/t/p/original/' + movie.poster_path
//       rating: movie.vote_average
//     };
//     return this.movies = result;
//   })));
// }
