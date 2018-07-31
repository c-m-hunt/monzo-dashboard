import * as ActionTypes from './actionTypes'
import config from './../../config'
import moment from 'moment'
let baseUrl = 'https://api.monzo.com'
let key = config.monzo_secret_key

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
            // Set the created date to a date object
            let transactions = data.transactions.map(trans => {
              trans.created = moment(trans.created)
              return trans
            })

            // Sort transactions by date descending
            transactions.sort((a, b) => {
              return a.created > b.created ? -1 : 1
            })
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
