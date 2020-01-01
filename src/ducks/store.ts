import { createStore, combineReducers } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { UserState, userReducer } from './user/reducers'
import env from '../libs/env'

export type AppState = {
  user: UserState
}

let enhancer
if (env.develop) {
  enhancer = devToolsEnhancer({})
}

const store = createStore(
  combineReducers<AppState>({
    user: userReducer
  }),
  enhancer
)

export default store
