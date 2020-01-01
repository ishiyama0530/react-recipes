import React from 'react'
import { Redirect, withRouter, RouteComponentProps } from 'react-router-dom'
import { AppState } from '../../ducks/store'
import { UserState } from '../../ducks/user'
import { connect } from 'react-redux'

type Props = { children: import('react').ReactNode } & RouteComponentProps &
  UserState

class Auth extends React.PureComponent<Props> {
  render() {
    const { authenticated, children, location } = this.props
    if (authenticated) {
      return children
    } else {
      return (
        <Redirect
          to={`/reduxlogin?redirectUrl=${encodeURIComponent(
            location.pathname
          )}`}
        />
      )
    }
  }
}

function mapStateToProps(appState: AppState) {
  return { ...appState.user }
}

export default withRouter(connect(mapStateToProps)(Auth))
