import * as ActionTypes from './actionTypes'

let baseUrl = 'https://api.monzo.com'
let key = 'xxx'

let getOptions = {
  headers: {
    'Authorization': `Bearer ${key}`
  }
}

export const fetchTransactions = (accountId) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_TRANSACTIONS_PENDING,
      value: true
    })

    window.fetch(`${baseUrl}/transactions?expand[]=merchant&account_id=${accountId}`, getOptions)
      .then(response => {
        response.json()
          .then(data => {
            let transactions = data.transactions
            dispatch({
              type: ActionTypes.SET_TRANSACTIONS,
              transactions: transactions
            })

            dispatch({
              type: ActionTypes.SET_TRANSACTIONS_PENDING,
              value: false
            })
          })
      })
  }
}

export const fetchAccounts = () => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_ACCOUNTS_PENDING,
      value: true
    })

    window.fetch(`${baseUrl}/accounts`, getOptions)
      .then(response => {
        response.json()
          .then(data => {
            dispatch({
              type: ActionTypes.SET_ACCOUNTS,
              accounts: data.accounts
            })

            let mainAccount = data.accounts.filter(account => {
              return account.closed === false
            })

            mainAccount = mainAccount[0]

            dispatch({
              type: ActionTypes.SET_CURRENT_ACCOUNT,
              account: mainAccount
            })

            dispatch({
              type: ActionTypes.SET_ACCOUNTS_PENDING,
              value: false
            })
          })
      })
  }
}

export const fetchBalance = (accountId) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_BALANCE_PENDING,
      value: true
    })

    window.fetch(`${baseUrl}/balance?account_id=${accountId}`, getOptions)
      .then(response => {
        response.json()
          .then(data => {
            data.balance = data.balance
            dispatch({
              type: ActionTypes.SET_BALANCE,
              balance: data
            })

            dispatch({
              type: ActionTypes.SET_BALANCE_PENDING,
              value: false
            })
          })
      })
  }
}
