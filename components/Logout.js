import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../redux/login/loginAction'
import { Redirect } from 'react-router-dom'

function Logout(props) {
    props.logout();
    return <Redirect to="/react-banking-app/" />
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null,mapDispatchToProps)(Logout);