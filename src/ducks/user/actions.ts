import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export type LoginPayload = { email: string; password: string }

export const userActions = {
  login: actionCreator<LoginPayload>('ACTIONS_LOGIN'),
  logout: actionCreator('ACTIONS_LOGOUT'),
  updateName: actionCreator<string>('ACTIONS_UPDATE_NAME')
}
