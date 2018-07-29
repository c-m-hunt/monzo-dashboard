import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { balance, balancePending } from './reducers/monzo'

const logger = createLogger({
  diff: true,
  duration: true
})

export default createStore(
  combineReducers({
    balance,
    balancePending
  }),
  applyMiddleware(thunk, logger)
)
