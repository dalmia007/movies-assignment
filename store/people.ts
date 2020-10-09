import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import axios from 'axios'

// const apiKey: string | undefined = process.env.API_KEY
// const peopleUrl: string = 'https://api.themoviedb.org/3/person/popular?api_key=' + apiKey
const peopleUrl: string = 'https://api.themoviedb.org/3/person/popular?api_key=6067e7664cd96e42ae8ba3d2fcd1bf53'
const searchPeopleUrl: string = 'https://api.themoviedb.org/3/search/person?api_key=6067e7664cd96e42ae8ba3d2fcd1bf53&query='

interface PeopleData{
  id: Number
  name: String
  image: String
}

@Module({
  name: 'people',
  stateFactory: true,
  namespaced: true
})

export default class PeopleModule extends VuexModule {
  peopleList: PeopleData[] = []
  searchedPeopleList:PeopleData[] = []

  @Mutation
  setPeople (peoples: PeopleData[]) {
    const result:PeopleData[] = []
    peoples.map((people: any) => {
      if (people.profile_path != null) {
        const elements: PeopleData = {
          id: people.id,
          name: people.name,
          image: 'https://image.tmdb.org/t/p/original' + people.profile_path
        }
        result.push(elements)
      }
    })
    this.peopleList = result
  }

  @Mutation
  setSearchedPeople (peoples: PeopleData[]) {
    const result:PeopleData[] = []
    peoples.map((people: any) => {
      if (people.profile_path != null) {
        const elements: PeopleData = {
          id: people.id,
          name: people.name,
          image: 'https://image.tmdb.org/t/p/original' + people.profile_path
        }
        result.push(elements)
      }
    })
    this.searchedPeopleList = result
  }

  @Action({ commit: 'setPeople' })
  async getPeople () {
    const response = await axios.get(peopleUrl)
    const peoples = response.data.results
    return peoples
  }

  @Action({ commit: 'setSearchedPeople' })
  async searchPeople (input:string) {
    const response = await axios.get(searchPeopleUrl + input)
    const peoples = response.data.results
    return peoples
  }
}
