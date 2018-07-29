import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchTransactions } from '../store/actions/monzo'
class TransactionList extends React.Component {
  componentDidMount () {
    if (this.props.account) {
      this.props.fetchTransactions(this.props.account.id)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.account !== this.props.account && this.props.account) {
      this.props.fetchTransactions(this.props.account.id)
    }
  }

  render () {
    if (!this.props.transactions) {
      return (
        <h1>Loading transaction list</h1>
      )
    }

    return (
      <div>
        {this.props.transactions.map(trans => {
          return <div key={trans.id}>
            {trans.description}
          </div>
        })}
      </div>
    )
  }
}

TransactionList.propTypes = {
  account: PropTypes.object
}

TransactionList.defaultProps = {
  account: null
}

function mapStateToProps (state) {
  return {
    fetchingTransactions: state.transactionsPending,
    transactions: state.transactions
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchTransactions: (accountId) => {
      dispatch(fetchTransactions(accountId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)
