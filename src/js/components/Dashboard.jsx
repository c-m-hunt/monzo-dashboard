import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchBalance } from '../store/actions/monzo'
class Dashbaord extends React.Component {
  componentDidMount () {
    this.props.fetchBalance()
  }

  render () {
    if (!this.props.balance) {
      return (
        <h1>Dashboard</h1>
      )
    }

    return (
      <div>
            Balance: {this.props.balance.balance}
      </div>
    )
  }
}

Dashbaord.propTypes = {

}

Dashbaord.defaultProps = {

}

function mapStateToProps (state) {
  return {
    fetchingBalance: state.fetchingBalance,
    balance: state.balance
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchBalance: () => {
      dispatch(fetchBalance())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashbaord)
