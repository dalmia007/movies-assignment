import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import axios from 'axios'

// const apiKey: string | undefined = process.env.API_KEY
// const peopleUrl: string = 'https://api.themoviedb.org/3/person/popular?api_key=' + apiKey
const peopleUrl: string = 'https://api.themoviedb.org/3/person/popular?api_key=6067e7664cd96e42ae8ba3d2fcd1bf53'

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

  @Mutation
  setPeople (peoples: PeopleData[]) {
    return (peoples.map((people: any) => {
      const result : PeopleData = {
        id: people.id,
        name: people.name,
        image: 'https://image.tmdb.org/t/p/original' + people.profile_path
      }
      this.peopleList.push(result)
    }))
  }

  @Action({ commit: 'setPeople' })
  async getPeople () {
    const response = await axios.get(peopleUrl)
    const peoples = response.data.results
    return peoples
  }
}
