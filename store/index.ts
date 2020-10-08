
import { getModule } from 'vuex-module-decorators'
import { Store } from 'vuex'

import MoviesModule from '~/store/movies'
import PeopleModule from '~/store/people'

// eslint-disable-next-line import/no-mutable-exports
export let moviesStore: MoviesModule
// eslint-disable-next-line import/no-mutable-exports
export let peopleStore: PeopleModule

function initializeStores (store: Store<any>): void {
  moviesStore = getModule(MoviesModule, store)
  peopleStore = getModule(PeopleModule, store)
}

export const plugins = [initializeStores]
