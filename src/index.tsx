import './assets/css/app.scss'
import 'typeface-roboto'
import * as serviceWorker from './serviceWorker'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import GlobalHandleError from './libs/error/GlobalHandleError'
import AxiosInterceptors from './libs/axioshooks/AxiosInterceptors'

GlobalHandleError.setup()
AxiosInterceptors.setup()

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
