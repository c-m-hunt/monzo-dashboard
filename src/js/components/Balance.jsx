import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchBalance } from '../store/actions/monzo'
class Balance extends React.Component {
  componentDidMount () {
    if (this.props.account) {
      this.props.fetchBalance(this.props.account.id)
    }
  }

  render () {
    if (!this.props.balance) {
      return (
        <h1>Loading balance</h1>
      )
    }
    return (
      <nav class='navbar navbar-default navbar-light bg-light fixed-top'>
        <div className='d-flex w-100 justify-content-between'>
          <div>
            {this.props.account.description} <br />
            Account number: {this.props.account.account_number} <br />
            Sort code: {this.props.account.sort_code}
          </div>
          <h1>{this.props.utils.formatMoney(this.props.balance.balance, this.props.balance.currency)}</h1>
        </div>
      </nav>
    )
  }
}

Balance.propTypes = {
  fetchBalance: PropTypes.func,
  account: PropTypes.object,
  balance: PropTypes.object
}

Balance.defaultProps = {
  account: null,
  balance: null
}

function mapStateToProps (state) {
  return {
    fetchingBalance: state.balancePending,
    balance: state.balance,
    account: state.currentAccount
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchBalance: (accountId) => {
      dispatch(fetchBalance(accountId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Balance)
