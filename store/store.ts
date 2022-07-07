import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit'
import { EnhancedStore } from '@reduxjs/toolkit/src/configureStore'
import { combineReducers } from 'redux'
import logger from 'redux-logger'

import { IS_DEV } from '@/configs/env'
import { homePageReducer, profileReducer } from '@/store/slices'

export const createStore = (preloadedState = null): EnhancedStore => {
  const middlewares = []

  if (IS_DEV) {
    middlewares.push(logger)
  }

  const reducer = combineReducers({
    profile: profileReducer,
    homePage: homePageReducer
  })

  const options: ConfigureStoreOptions = {
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(middlewares),
    devTools: IS_DEV
  }

  if (preloadedState) {
    options.preloadedState = preloadedState
  }

  return configureStore(options)
}
