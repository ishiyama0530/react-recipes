import Home from './pages/Home'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './ducks/store'
import ReduxLogin from './pages/redux/login'
import ReduxUser from './pages/redux/user'
import ReduxAuth from './libs/reduxauth'
import ContextApi from './pages/contextapi'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/reduxlogin" component={ReduxLogin} />
          <Route exact path="/contextapi" component={ContextApi} />
          <ReduxAuth>
            <Switch>
              <Route exact path="/reduxuser" component={ReduxUser} />
            </Switch>
          </ReduxAuth>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
