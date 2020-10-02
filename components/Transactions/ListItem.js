import React from 'react'

const item = {
    padding: '5px',
    display: 'flex'
}

const ListItem = props => {
    const { from_account_no,
        beneficiary_account_no,
        beneficiary_account_name,
        beneficiary_bank_branch_code,
        txn_amount,
        txn_currency,
        txn_comments,
        status } = props.transaction
    return (
        <div style={item}>
            <div>{from_account_no}</div>
            <div>{beneficiary_account_no}</div>
            <div>{beneficiary_account_name}</div>
            <div>{beneficiary_bank_branch_code}</div>
            <div>{txn_amount}</div>
            <div>{txn_comments}</div>
            <div>{status}</div>
        </div>)

}

export default ListItem;