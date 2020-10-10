import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {Typography} from '@material-ui/core'

function Dashboard(props) {
    const { user, isLoggedIn } = props
    if (!isLoggedIn)
        return <Redirect to="/react-banking-app/" />
    return (
        <React.Fragment>
            <Typography variant="h5">Hello {user.first_name} {user.last_name}!</Typography>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        user: state.login.user,
        isLoggedIn: state.login.isLoggedIn
    }
}

export default connect(mapStateToProps)(Dashboard);