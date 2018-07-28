import {
  SET_BALANCE,
  SET_BALANCE_PENDING
} from './../actions/monzo'

const balanceReducer = (state = null, action) => {
  switch (action.type) {
    case SET_BALANCE:
      return action.balance
    default:
      return state
  }
}

module.exports = {
  balance: balanceReducer
}
