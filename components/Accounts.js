import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { accountFetch, accountSuccess, accountFailure } from '../redux/accounts/accountActions'
import Table from './Table'

const AccountList = (props) => {
    const { isLoggedIn, accounts, accountLoading } = props

    useEffect(() => {
        props.accountFetch()
        fetch('https://my-json-server.typicode.com/shangan23/banking-api/accounts')
            .then(res => res.json())
            .then(data => props.accountSuccess(data))
            .catch(err => props.accountFailure(err))
    }, [])

    if (!isLoggedIn)
        return <Redirect to="/react-banking-app/" />

    const header = [
        "id",
        "account_number",
        "account_name",
        "first_name",
        "last_name",
        "bank_branch_code",
        "aadhar_number",
        "country",
        "txn_currency"
    ]

    if (accountLoading)
        return <div>loading...</div>
    else
        return <Table headers={header} data={accounts} />
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.login.isLoggedIn,
        accountLoading: state.accounts.loading,
        accounts: state.accounts.data
    }
}
const mapDispatchToProps = dispatch => {
    return {
        accountFetch: () => dispatch(accountFetch),
        accountSuccess: account => dispatch(accountSuccess(account)),
        accountFailure: error => dispatch(accountFailure(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountList);