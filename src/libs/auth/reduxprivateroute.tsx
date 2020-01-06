import React from 'react'
import {
  RouteProps,
  RouteComponentProps,
  withRouter,
  Redirect,
  Route
} from 'react-router-dom'
import { UserState } from '../../ducks/user'
import { AppState } from '../../ducks/store'
import { connect } from 'react-redux'

type Props = { path: string } & RouteProps & RouteComponentProps & UserState

class ReduxPrivateRoute extends React.PureComponent<Props> {
  render() {
    const { authenticated, path } = this.props
    const routerProps: RouteProps = {
      location: this.props.location,
      component: this.props.component,
      render: this.props.render,
      children: this.props.children,
      path: this.props.path,
      exact: this.props.exact,
      sensitive: this.props.sensitive,
      strict: this.props.strict
    }
    if (authenticated) {
      return <Route {...routerProps} />
    } else {
      return (
        <Redirect to={`/reduxlogin?redirectUrl=${encodeURIComponent(path)}`} />
      )
    }
  }
}

function mapStateToProps(appState: AppState) {
  return { ...appState.user }
}

export default withRouter(connect(mapStateToProps)(ReduxPrivateRoute))
