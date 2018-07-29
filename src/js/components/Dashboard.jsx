import React from 'react'
import { connect } from 'react-redux'
class Dashbaord extends React.Component {
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

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashbaord)
