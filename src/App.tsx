import Home from './pages/Home'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './ducks/store'
import ReduxLogin from './pages/redux/login'
import ReduxUser from './pages/redux/user'
import ReduxPrivateRoute from './libs/reduxauth/reduxprivateroute'
import Error500 from './pages/error/error500'
import ContextApi from './pages/contextapi'
import ErrorBoundary from './libs/error/ErrorBoundary'
import ErrorStub from './pages/errorstub'
import Error404 from './pages/error/error404'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/error" component={Error500} />
            <Route exact path="/errorstub" component={ErrorStub} />
            <Route exact path="/reduxlogin" component={ReduxLogin} />
            <Route exact path="/contextapi" component={ContextApi} />
            <ReduxPrivateRoute exact path="/reduxuser" component={ReduxUser} />
            <Route component={Error404} />
          </Switch>
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  )
}

export default App
