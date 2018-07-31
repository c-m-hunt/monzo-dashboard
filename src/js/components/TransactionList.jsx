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

  renderLoad (trans) {
    return (
      <div className='row'>

        <div className='col-12'>
          <h5>{trans.description} </h5><span className='badge badge-secondary'>{trans.category}</span>

        </div>
      </div>
    )
  }

  render () {
    if (!this.props.transactions) {
      return (
        <h1>Loading transaction list</h1>
      )
    }
    return (
      <div className='list-group'>
        {this.props.transactions.map(trans => {
          return <div key={trans.id} className={'list-group-item ' + (trans.amount > 0 ? 'credit' : 'debit')}>
            <div className='d-flex w-100 justify-content-between'>
              <div className='col-8'>
                {trans.merchant &&
                <div className='row'>
                  <div className='col-2'>
                    {trans.merchant.logo !== '' &&
                      <img className='img-fluid img-thumbnail' src={trans.merchant.logo} alt={trans.merchant.name} />
                    }
                  </div>

                  <div className='col-10'>
                    <h5>{trans.merchant.name} </h5><span className='badge badge-secondary'>{trans.category}</span>
                    <div>
                      {trans.created.format('DD MMM YYYY, HH:mm')}
                    </div>
                  </div>
                </div>
                }
                {!trans.merchant && this.renderLoad(trans) }
              </div>
              <div className='text-right'>
                <div>
                  <h5 className='mb-1'>{this.props.utils.formatMoney(parseInt(trans.amount), trans.currency)}</h5>
                </div>

                { trans.local_currency !== trans.currency && trans.local_amount !== trans.amount &&
                <div>
                  <h6 className='mb-1'>{this.props.utils.formatMoney(parseInt(trans.local_amount), trans.local_currency)}</h6>
                </div>
                }
              </div>

            </div>
            {/* <div class="d-flex w-100 justify-content-between">
              <p class="mb-1">{trans.description}</p>
            </div> */}
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
