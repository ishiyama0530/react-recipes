import Home from './pages/Home'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './ducks/store'
import ReduxLogin from './pages/redux/login'
import ReduxUser from './pages/redux/user'
import ReduxAuth from './libs/reduxauth'
import Error500 from './pages/error/error500'
import ContextApi from './pages/contextapi'
import ErrorBoundary from './libs/error/ErrorBoundary'
import ErrorStub from './pages/errorstub'

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
            <ReduxAuth>
              <Switch>
                <Route exact path="/reduxuser" component={ReduxUser} />
              </Switch>
            </ReduxAuth>
          </Switch>
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  )
}

export default App
