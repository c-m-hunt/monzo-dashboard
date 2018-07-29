import * as ActionTypes from './../actions/actionTypes'

const transactionsReducer = (state = null, action) => {
  switch (action.type) {
    case ActionTypes.SET_TRANSACTIONS:
      return action.transactions
    default:
      return state
  }
}

const transactionsPendingReducer = (state = null, action) => {
  switch (action.type) {
    case ActionTypes.SET_TRANSACTIONS_PENDING:
      return action.value
    default:
      return state
  }
}

module.exports = {
  transactions: transactionsReducer,
  transactionsPending: transactionsPendingReducer
}
