import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function Dashboard(props) {
    const { user } = props
    if (user.length <= 0)
        return <Redirect to="/react-banking-app/" />
    return (
        <React.Fragment>
            <h1>Hello {user.first_name} {user.last_name}!</h1>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        user: state.login.user
    }
}

export default connect(mapStateToProps)(Dashboard);