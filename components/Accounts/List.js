import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ListItem from '../Accounts/ListItem'
import { accountFetch, accountSuccess, accountFailure } from '../../redux/accounts/accountActions'

const AccountList = (props) => {
    const { user, accounts, accountLoading } = props

    useEffect(() => {
        props.accountFetch()
        fetch('https://my-json-server.typicode.com/shangan23/banking-api/accounts')
            .then(res => res.json())
            .then(data => props.accountSuccess(data))
            .catch(err => props.accountFailure(err))
    }, [])

    if (user.length <= 0)
        return <Redirect to="/react-banking-app/" />

    if (accountLoading)
        return <div>loading...</div>
    else
        return accounts.map(acc => (<ListItem key={acc.id} account={acc} />))
}

const mapStateToProps = state => {
    return {
        user: state.login.user,
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