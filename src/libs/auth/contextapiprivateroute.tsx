import React from 'react'
import { RouteProps, Route, Redirect } from 'react-router-dom'
import { useUserContext } from '../../hooks/context/usercontext'

type Props = {
  path: string
} & RouteProps

const ContextApiPrivateRoute: React.FC<Props> = props => {
  const { authenticated } = useUserContext()
  if (authenticated) {
    return <Route {...props} />
  } else {
    return (
      <Redirect
        to={`/contextapilogin?redirectUrl=${encodeURIComponent(props.path)}`}
      />
    )
  }
}

export default ContextApiPrivateRoute
