import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IsLoginContext } from '../context/Login'

function Navigation() {
    const [login, setLogin] = useContext(IsLoginContext);
    const link = {
        padding: '5px'
    }
    return (
        <React.Fragment>
            {login &&
                <React.Fragment>
                    <Link style={link} to="/react-banking-app/dashboard">Dashboard</Link> {' '}
                    <Link style={link} to="/react-banking-app/accounts">Accounts</Link> {' '}
                    <Link style={link} to="/react-banking-app/transactions">Transaction</Link> {' '}
                    <Link style={link} to="/react-banking-app/profile">Profile</Link> {' '}
                    <Link style={link} to="/react-banking-app/logout" onClick={() => setLogin(false)}>Logout</Link>
                </React.Fragment>
            }
        </React.Fragment>
    );
}

export default Navigation;