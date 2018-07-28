import ReactDOM from 'react-dom'
import React from 'react'
import App from './components/App'

import store from './store/store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
)
