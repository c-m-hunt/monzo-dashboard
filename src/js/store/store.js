import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { balance, balancePending } from './reducers/balance'
import { accounts, accountsPending, currentAccount } from './reducers/accounts'
import { transactions, transactionsPending } from './reducers/transactions'

const logger = createLogger({
  diff: true,
  duration: true
})

export default createStore(
  combineReducers({
    accounts,
    accountsPending,
    balance,
    balancePending,
    currentAccount,
    transactions,
    transactionsPending
  }),
  applyMiddleware(thunk, logger)
)
