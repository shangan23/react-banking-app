import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { transactionFetch, transactionSuccess, transactionFailure } from '../redux/transactions/transactionActions'
import Table from './Table'

const AccountList = (props) => {

    const { isLoggedIn, transactions, transactionLoading } = props

    useEffect(() => {
        props.transactionFetch()
        fetch('https://my-json-server.typicode.com/shangan23/banking-api/transactions')
            .then(res => res.json())
            .then(data => props.transactionSuccess(data))
            .catch(error => props.transactionFailure(error))
    }, [])

    const header = [
        "id",
        "from_account_no",
        "beneficiary_account_no",
        "beneficiary_account_name",
        "beneficiary_bank_branch_code",
        "txn_amount",
        "txn_currency",
        "txn_comments",
        "status"
    ]

    if (!isLoggedIn)
        return <Redirect to="/react-banking-app/" />

    if (transactionLoading)
        return <div>loading...</div>
    else
        return <Table headers={header} data={transactions} />
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.login.isLoggedIn,
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