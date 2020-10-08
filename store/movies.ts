import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import axios from 'axios'

// const apiKey: string | undefined = process.env.API_KEY
// const moviesUrl: string = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
const moviesUrl: string = 'https://api.themoviedb.org/3/movie/top_rated?api_key=6067e7664cd96e42ae8ba3d2fcd1bf53'

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
  // store
})

export default class MoviesModule extends VuexModule {
  moviesList: MoviesData[] =[]

  @Mutation
  setMovies (movies: MoviesData[]) {
    const result:MoviesData[] = []
    movies.map((movie: any) => {
      const elements: MoviesData = {
        id: movie.id,
        title: movie.title,
        poster: 'https://image.tmdb.org/t/p/original' + movie.poster_path,
        rating: movie.vote_average
      }
      result.push(elements)
    })
    this.moviesList = result
  }

  @Action({ commit: 'setMovies' })
  async getMovies () {
    const response = await axios.get(moviesUrl)
    const movies = response.data.results
    return movies
  }
}
