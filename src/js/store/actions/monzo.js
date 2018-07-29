import * as ActionTypes from './actionTypes'

let baseUrl = 'https://api.monzo.com'
let key = 'xxx'
let accountId = 'xxx'

export const fetchAccounts = () => {
  return (dispatch) => {

  }
}

export const fetchBalance = () => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_BALANCE_PENDING,
      value: true
    })

    fetch(`${baseUrl}/balance?account_id=${accountId}`,
      {
        headers: {
          'Authorization': `Bearer ${key}`
        }
      }
    )
      .then(response => {
        response.json()
          .then(data => {
            data.balance = data.balance / 100
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
