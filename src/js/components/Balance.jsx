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

  componentWillReceiveProps (nextProps) {
    if (nextProps.account !== this.props.account) {
      this.props.fetchBalance(nextProps.account.id)
    }
  }

  render () {
    if (!this.props.balance) {
      return (
        <h1>Loading balance</h1>
      )
    }

    return (
      <div>
              Balance: {this.props.balance.balance}
      </div>
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
