import React, { useState } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './ducks/store'
import ErrorBoundary from './libs/error/ErrorBoundary'
import ReduxPrivateRoute from './libs/auth/reduxprivateroute'
import ContextApiUser from './pages/contextapi/user'
import ContextApiLogin from './pages/contextapi/login'
import Error404 from './pages/error/error404'
import Error500 from './pages/error/error500'
import ErrorStub from './pages/errorstub'
import Home from './pages/Home'
import ReduxLogin from './pages/redux/login'
import ReduxUser from './pages/redux/user'
import XMLHttpRequest from './pages/xmlhttprequest'
import GraphQL from './pages/graphql'
import { useUserContext, UserContext } from './hooks/context/usercontext'
import ContextApiPrivateRoute from './libs/auth/contextapiprivateroute'

const App: React.FC = () => {
  const userContext = useUserContext()
  const [userName, setUserName] = useState(userContext.userName)
  const [authenticated, setAuthenticated] = useState(userContext.authenticated)
  return (
    // for context api
    <UserContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        userName,
        setUserName
      }}
    >
      {/* for redux */}
      <ReduxProvider store={store}>
        <ErrorBoundary errorUrl="/error">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/errorstub" component={ErrorStub} />
              <Route exact path="/reduxlogin" component={ReduxLogin} />
              <ReduxPrivateRoute
                exact
                path="/reduxuser"
                component={ReduxUser}
              />
              <Route
                exact
                path="/contextapilogin"
                component={ContextApiLogin}
              />
              <ContextApiPrivateRoute
                exact
                path="/contextapiuser"
                component={ContextApiUser}
              />
              <Route exact path="/xmlhttprequest" component={XMLHttpRequest} />
              <Route exact path="/graphql" component={GraphQL} />
              <Route exact path="/error" component={Error500} />
              <Route component={Error404} />
            </Switch>
          </BrowserRouter>
        </ErrorBoundary>
      </ReduxProvider>
    </UserContext.Provider>
  )
}

export default App
