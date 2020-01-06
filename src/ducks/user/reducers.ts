import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { userActions } from './actions'

export type UserState = typeof initialState

const initialState = {
  authenticated: false,
  userName: 'redux taro'
}

export const userReducer = reducerWithInitialState(initialState)
  .case(
    userActions.login,
    (state, { email, password }): UserState => {
      // execute login process.
      return { ...state, authenticated: true }
    }
  )
  .case(
    userActions.logout,
    (state): UserState => {
      // execute logout process.
      return { ...state, authenticated: false }
    }
  )
  .case(
    userActions.updateUserName,
    (state, userName): UserState => {
      if (!state.authenticated) {
        throw new Error('not authenticated.')
      }

      // execute update process.
      return { ...state, userName }
    }
  )
