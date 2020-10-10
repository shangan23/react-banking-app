import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../redux/login/loginAction'

function Navigation(props) {
    const link = {
        padding: '5px'
    }
    const {user} = props
    return (
        <React.Fragment>
            {user.user_name &&
                <React.Fragment>
                    <Link style={link} to="/react-banking-app/dashboard">Dashboard</Link> {' '}
                    <Link style={link} to="/react-banking-app/accounts">Accounts</Link> {' '}
                    <Link style={link} to="/react-banking-app/transactions">Transaction</Link> {' '}
                    <Link style={link} to="/react-banking-app/profile">Profile</Link> {' '}
                    <Link style={link} to="/react-banking-app/logout" onClick={(e) => {
                        e.preventDefault();
                        props.logout()
                    }
                    }>Logout</Link>
                </React.Fragment>
            }
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        user: state.login.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);