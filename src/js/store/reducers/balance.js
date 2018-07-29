import * as ActionTypes from './../actions/actionTypes'

const balanceReducer = (state = null, action) => {
  switch (action.type) {
    case ActionTypes.SET_BALANCE:
      return action.balance
    default:
      return state
  }
}

const balancePendingReducer = (state = null, action) => {
  switch (action.type) {
    case ActionTypes.SET_BALANCE_PENDING:
      return action.value
    default:
      return state
  }
}

module.exports = {
  balance: balanceReducer,
  balancePending: balancePendingReducer
}
