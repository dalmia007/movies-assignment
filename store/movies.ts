import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import axios from 'axios'

const apiKey: string | undefined = process.env.API_KEY
const moviesUrl: string = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
const searchMoviesUrl: string = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`

interface MoviesData {
  id: number
  title: string
  poster: string
  rating: number
}

@Module({
  name: 'movies',
  stateFactory: true,
  namespaced: true
})

export default class MoviesModule extends VuexModule {
  moviesList: MoviesData[] = []
  searchedMoviesList: MoviesData[]= []

  @Mutation
  setMovies (movies: MoviesData[]) {
    const result:MoviesData[] = []
    movies.map((movie: any) => {
      if (movie.poster_path != null) {
        const elements: MoviesData = {
          id: movie.id,
          title: movie.title,
          poster: 'https://image.tmdb.org/t/p/original' + movie.poster_path,
          rating: movie.vote_average
        }
        result.push(elements)
      }
    })
    this.moviesList = result
  }

  @Mutation
  setSearchedMovies (movies: MoviesData[]) {
    const result:MoviesData[] = []
    movies.map((movie: any) => {
      if (movie.poster_path != null) {
        const elements: MoviesData = {
          id: movie.id,
          title: movie.title,
          poster: 'https://image.tmdb.org/t/p/original' + movie.poster_path,
          rating: movie.vote_average
        }
        result.push(elements)
      }
    })
    this.searchedMoviesList = result
  }

  @Action({ commit: 'setMovies' })
  async getMovies () {
    const response = await axios.get(moviesUrl)
    const movies = response.data.results
    return movies
  }

  @Action({ commit: 'setSearchedMovies' })
  async searchMovies (input:string) {
    const response = await axios.get(searchMoviesUrl + input)
    const movies = response.data.results
    return movies
  }
}
