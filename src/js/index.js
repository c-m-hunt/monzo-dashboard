import ReactDOM from 'react-dom'
import React from 'react'
import App from './components/App'

import store from './store/store'
import {Provider} from 'react-redux'

import bootstrap from 'bootstrap'

import { fetchAccounts } from './store/actions/monzo'

store.dispatch(fetchAccounts())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
)
