import React from 'react'
import { render } from 'react-dom'
import $ from 'jquery'
import {Provider} from "react-redux"
import {ConnectedRouter} from "connected-react-router"
import App from "./App"
import store, { history } from './reducers/main'
import './i18n'
import './index.scss'

const build = () => render(
    <React.StrictMode>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </React.StrictMode>,
  document.getElementById("root")
)

$(window).on('load', build)