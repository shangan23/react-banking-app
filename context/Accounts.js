import React, { createContext, useState } from 'react'

export const AccountsContext = createContext()

export const AccountsProvider = props => {
    const [accounts, setAccounts] = useState([
        {
            id: '1',
            account_number: '13123fdgd4',
            account_name: 'TOMs SBI',
            first_name: 'Toms',
            last_name: 'Ssam',
            bank_branch_code: 'SBsdgs1234',
            aadhar_number: 'q35234sdg623cfr',
            country: 'INDIAsd',
            txn_currency: 'Rupsdee'
        },
        {
            id: '2',
            account_number: '131234',
            account_name: 'TOM SBI',
            first_name: 'Tom',
            last_name: 'Sam',
            bank_branch_code: 'SB1234',
            aadhar_number: 'q35234623cfr',
            country: 'INDIA',
            txn_currency: 'Rupee'
        }, {
            id: '3',
            account_number: '131234',
            account_name: 'TOM SBI',
            first_name: 'Tom',
            last_name: 'Sam',
            bank_branch_code: 'SB1234',
            aadhar_number: 'q35234623cfr',
            country: 'INDIA',
            txn_currency: 'Rupee'
        }, {
            id: '4',
            account_number: '131234',
            account_name: 'TOM SBI',
            first_name: 'Tom',
            last_name: 'Sam',
            bank_branch_code: 'SB1234',
            aadhar_number: 'q35234623cfr',
            country: 'INDIA',
            txn_currency: 'Rupee'
        }, {
            id: '5',
            account_number: '131234',
            account_name: 'TOM SBI',
            first_name: 'Tom',
            last_name: 'Sam',
            bank_branch_code: 'SB1234',
            aadhar_number: 'q35234623cfr',
            country: 'INDIA',
            txn_currency: 'Rupee'
        },
    ])
    return (
        <AccountsContext.Provider value={[accounts, setAccounts]}>
            {props.children}
        </AccountsContext.Provider>
    )
}
