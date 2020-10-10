import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { transactionFetch, transactionSuccess, transactionFailure } from '../../redux/transactions/transactionActions'
import ListItem from '../Transactions/ListItem'

const AccountList = (props) => {

    const { user, transactions, transactionLoading } = props

    useEffect(() => {
        props.transactionFetch()
        fetch('https://my-json-server.typicode.com/shangan23/banking-api/transactions')
            .then(res => res.json())
            .then(data => props.transactionSuccess(data))
            .catch(error => props.transactionFailure(error))
    }, [])

    if (user.length <= 0)
        return <Redirect to="/react-banking-app/" />

    if (transactionLoading)
        return <div>loading...</div>
    else
        return transactions.map(txn => (<ListItem key={txn.id} transaction={txn} />))
}

const mapStateToProps = state => {
    return {
        user: state.login.user,
        transactions: state.transactions.data,
        transactionLoading: state.transactions.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        transactionFetch: () => dispatch(transactionFetch),
        transactionSuccess: data => dispatch(transactionSuccess(data)),
        transactionFailure: error => dispatch(transactionFailure(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountList);