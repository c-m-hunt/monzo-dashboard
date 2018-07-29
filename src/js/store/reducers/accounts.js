import * as ActionTypes from './../actions/actionTypes'

const accountsReducer = (state = null, action) => {
  switch (action.type) {
    case ActionTypes.SET_ACCOUNTS:
      return action.accounts
    default:
      return state
  }
}

const accountsPendingReducer = (state = null, action) => {
  switch (action.type) {
    case ActionTypes.SET_ACCOUNTS_PENDING:
      return action.value
    default:
      return state
  }
}

const currentAccountReducer = (state = null, action) => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_ACCOUNT:
      return action.account
    default:
      return state
  }
}

module.exports = {
  accounts: accountsReducer,
  accountsPending: accountsPendingReducer,
  currentAccount: currentAccountReducer
}
