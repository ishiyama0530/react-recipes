import { createContext, useContext } from 'react'

export type Value = typeof defaultValue

const defaultValue = {
  authenticated: false,
  userName: 'contextapi taro',
  setAuthenticated: (v: boolean): void => {
    throw new Error('not impliment.')
  },
  setUserName: (v: string): void => {
    throw new Error('not impliment.')
  }
}

export const UserContext = createContext<Value>(defaultValue)

export const useUserContext = (): Value => {
  return useContext(UserContext)
}
