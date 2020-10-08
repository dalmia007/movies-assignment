
import { getModule } from 'vuex-module-decorators'
import { Store } from 'vuex'

import MoviesModule from '~/store/movies'

// eslint-disable-next-line import/no-mutable-exports
export let moviesStore : MoviesModule

function initializeStores (store: Store<any>): void {
  moviesStore = getModule(MoviesModule, store)
}

export const plugins = [initializeStores]
