import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { userActions } from './actions'

export type UserState = {
  authenticated: boolean
  name: string
}

const initialState: UserState = {
  authenticated: false,
  name: 'yamada taro'
}

export const userReducer = reducerWithInitialState(initialState)
  .case(userActions.login, (state, { email, password }) => {
    // execute login process.
    return { ...state, authenticated: true }
  })
  .case(userActions.logout, state => {
    // execute logout process.
    return { ...state, authenticated: false }
  })
  .case(userActions.updateName, (state, name) => {
    if (!state.authenticated) {
      throw new Error('not authenticated.')
    }

    // execute update process.
    return { ...state, name }
  })
