export const SET_BALANCE_PENDING = 'SET_BALANCE_PENDING'
export const SET_BALANCE = 'SET_BALANCE'

let baseUrl = 'https://api.monzo.com'

export const fetchBalance = () => {
  return (dispatch) => {
    dispatch({
      type: SET_BALANCE_PENDING,
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
              type: SET_BALANCE,
              balance: data
            })

            dispatch({
              type: SET_BALANCE_PENDING,
              value: false
            })
          })
      })
  }
}
