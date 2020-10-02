import React, { useState, createContext } from 'react'
export const TransactionsContext = createContext()
export const TransactionsProvider = props => {
    const [transactions, setTransactions] = useState([
        {
            id:'1',
            from_account_no: '131234',
            beneficiary_account_no: '235235',
            beneficiary_account_name: 'TOM SBI',
            beneficiary_bank_branch_code: 'SBI13423',
            txn_amount: '200',
            txn_currency: 'Rupee',
            txn_comments: 'refund',
            status: 'completed'
        },
    ])
    return (
        <TransactionsContext.Provider value={[transactions, setTransactions]}>
            {props.children}
        </TransactionsContext.Provider>
    )
}