import React from 'react'

const item = {
    padding:'5px',
    display:'flex'
}

const ListItem = props => {
    const { account_number, account_name, first_name, last_name, bank_branch_code, aadhar_number, country, txn_currency } = props.account
    return(
    <div style={item}>
        <div>{account_number}</div>
        <div>{account_name}</div>
        <div>{first_name}</div>
        <div>{last_name}</div>
        <div>{bank_branch_code}</div>
        <div>{aadhar_number}</div>
        <div>{country}</div>
        <div>{txn_currency}</div>
    </div>)

}

export default ListItem;