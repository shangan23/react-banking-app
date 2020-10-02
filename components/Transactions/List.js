import React, { useContext } from 'react'
import { TransactionsContext } from '../../context/Transactions';
import { IsLoginContext } from '../../context/Login'
import { Redirect } from 'react-router-dom'
import ListItem from '../Transactions/ListItem'

const AccountList = () => {
    const [transactions, setTransactions] = useContext(TransactionsContext)
    const [login, setLogin] = useContext(IsLoginContext)

    if (!login)
        return <Redirect to="/react-banking-app/" />

    console.log(transactions)

    return transactions.map(txn  => (
        <ListItem key={txn.id} transaction={txn} />))
}

export default AccountList;