import React, { useContext } from 'react'
import { AccountsContext } from '../../context/Accounts';
import { IsLoginContext } from '../../context/Login'
import { Redirect } from 'react-router-dom'
import ListItem from '../Accounts/ListItem'

const AccountList = () => {
    const [accounts, setAccounts] = useContext(AccountsContext)
    const [login, setLogin] = useContext(IsLoginContext)

    if (!login)
        return <Redirect to="/react-banking-app/" />

    return accounts.map(acc => (
        <ListItem key={acc.id} account={acc} />))
}

export default AccountList;