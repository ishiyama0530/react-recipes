import ContextApiLogin from './pages/contextapi/login'
import ContextApiPrivateRoute from './libs/auth/contextapiprivateroute'
import ContextApiUser from './pages/contextapi/user'
import Error404 from './pages/error/error404'
import Error500 from './pages/error/error500'
import ErrorBoundary from './libs/error/ErrorBoundary'
import ErrorStub from './pages/errorstub'
import GraphQL from './pages/graphql'
import Home from './pages/Home'
import React, { useState } from 'react'
import ReduxLogin from './pages/redux/login'
import ReduxPrivateRoute from './libs/auth/reduxprivateroute'
import ReduxUser from './pages/redux/user'
import XMLHttpRequest from './pages/xmlhttprequest'
import store from './ducks/store'
import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { useUserContext, UserContext } from './hooks/context/usercontext'
import apolloclient from './libs/apollo/apolloclient'

const App: React.FC = () => {
  const userContext = useUserContext()
  const [userName, setUserName] = useState(userContext.userName)
  const [authenticated, setAuthenticated] = useState(userContext.authenticated)
  return (
    <UserContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        userName,
        setUserName
      }}
    >
      <ReduxProvider store={store}>
        <ApolloProvider client={apolloclient}>
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
                <Route
                  exact
                  path="/xmlhttprequest"
                  component={XMLHttpRequest}
                />
                <Route exact path="/graphql" component={GraphQL} />
                <Route exact path="/error" component={Error500} />
                <Route component={Error404} />
              </Switch>
            </BrowserRouter>
          </ErrorBoundary>
        </ApolloProvider>
      </ReduxProvider>
    </UserContext.Provider>
  )
}

export default App
