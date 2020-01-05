import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './ducks/store'
import ErrorBoundary from './libs/error/ErrorBoundary'
import ReduxPrivateRoute from './libs/reduxauth/reduxprivateroute'
import ContextApi from './pages/contextapi'
import Error404 from './pages/error/error404'
import Error500 from './pages/error/error500'
import ErrorStub from './pages/errorstub'
import Home from './pages/Home'
import ReduxLogin from './pages/redux/login'
import ReduxUser from './pages/redux/user'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary errorUrl="/error">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/errorstub" component={ErrorStub} />
            <Route exact path="/reduxlogin" component={ReduxLogin} />
            <Route exact path="/contextapi" component={ContextApi} />
            <ReduxPrivateRoute exact path="/reduxuser" component={ReduxUser} />
            <Route exact path="/error" component={Error500} />
            <Route component={Error404} />
          </Switch>
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  )
}

export default App
